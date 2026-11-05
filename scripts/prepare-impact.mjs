/**
 * prepare-impact.mjs — 把 diff-api 报告转成「我的升级影响 + 应对方式」
 *
 * diff-api 回答「官方改了什么」；本脚本回答三件事：
 *   1. 这些改动里，哪些落在我的 registry/声明上（相关项）
 *   2. 每条相关 breaking 的具体应对方式（按 kind 给操作步骤，不猜替代 API）
 *   3. 升级前后的运行时演练清单（audit-local，覆盖静态报告看不到的挂载链路问题）
 *
 * 用法:
 *   node scripts/prepare-impact.mjs --report archive/<from>_to_<to>/report.json \
 *        [--registry registry.json] [--out archive/<from>_to_<to>/impact-plan.md]
 * 退出码: 0 = 有输出（无论是否相关）；1 = 参数/读取错误
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const REPO = resolve(HERE, '..')

const argv = process.argv.slice(2)
const opt = (name, dflt) => {
  const i = argv.indexOf('--' + name)
  return i !== -1 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : dflt
}

const reportPath = opt('report')
if (!reportPath || !existsSync(reportPath)) {
  console.error('用法: node scripts/prepare-impact.mjs --report <report.json> [--registry registry.json] [--out plan.md]')
  process.exit(1)
}
const report = JSON.parse(readFileSync(reportPath, 'utf8'))
// 默认优先读本地私有配置 registry.local.json（.gitignore），否则用仓库示例 registry.json
const defaultRegistry = ['registry.local.json', 'registry.json'].map((f) => join(REPO, f)).find((f) => existsSync(f)) ?? join(REPO, 'registry.json')
const registryPath = opt('registry', defaultRegistry)
let registry = null
if (existsSync(registryPath)) registry = JSON.parse(readFileSync(registryPath, 'utf8'))

const from = report.from ?? '?'
const to = report.to ?? '?'
const outPath = opt('out', join(dirname(reportPath), 'impact-plan.md'))

/* ---------------- 应对方式：按 kind 给操作步骤（不编造替代 API） ---------------- */

const ADVICE = {
  'package-removed': [
    '在 To 版官方 checkout 里找替代：`git -C <checkout> grep -l "<关键词>" <to> -- packages` 或看 `packages/**/package.json` 的 name 集合。',
    '若你的声明/代码仍引用它：删除该行或换替代包；声明层同时看 audit-local 的 C3/C5/C6。',
  ],
  'ast-export-removed': [
    '在 To 版看该文件新导出：`git -C <checkout> show <to>:<path>/src/index.ts | grep export`。',
    'grep 你的插件源码里的旧符号，改到新导出；找不到替代说明该能力被整体移除，考虑降级/暂缓升级。',
  ],
  'ast-signature-changed': [
    '`git -C <checkout> diff <from> <to> -- <path>` 对照新旧签名，逐处改调用点。',
  ],
  'ast-export-added': [
    '新增导出：确认是否应替换旧用法（旧导出可能已标记 deprecated）。',
  ],
  'config-field-removed': [
    '配置字段已删除：改用新字段（先在 audit-local C3 之后跑 audit-preset-drift 校验字段名），改完重装 bundle。',
  ],
  'config-field-type-changed': [
    '字段类型变化：按新类型改写 YAML 值；改完重装 bundle 并用花名册诊断确认不再是 loading 失败。',
  ],
  'config-scope-removed': [
    '整块 config 作用域不可用：从你的组合文件里删除该块；若其中字段仍需要，在 To 版找承载它的包。',
  ],
  'exports-map-changed': [
    '入口路径变化：确认 import 路径仍有效（子路径可能被合并进根入口），改完重装。',
  ],
  'doc-removed': ['契约文档被删/改名：在 To 版 docs/ 下找新路径，读迁移说明。'],
  'doc-major-rewrite': ['文档大改（可能行为变更）：人工读一遍该文档 diff，重点看契约与默认值。'],
  'upgrade-guide-added': ['上游新增 upgrade-guide 条目：必读，通常写明官方承认的迁移路径。'],
}

const CHECK_HINT = {
  'package-removed': 'C3 / C5 / C6',
  'ast-export-removed': 'C3（声明层）/ 源码扫描',
  'config-field-removed': 'C3 / drift 脚本',
  'config-field-type-changed': 'C3 / drift 脚本',
  'config-scope-removed': 'C2 / C3',
  'exports-map-changed': 'C3',
}

/* ---------------- 相关性：registry 的 uses 匹配 ---------------- */

const plugins = registry?.plugins ?? []
// 每个 registry 插件可选 kind：
//   declaration = 只依赖包名/导出入口（如 YAML 组合、preset bundle），内部导出变更多为噪声
//   source      = 引用具体符号（如自己的 .cjs/.ts 代码），导出/签名变更都要看
// 缺省按 source 处理（保守：不漏）。
const kindOf = (p) => (p.kind === 'declaration' ? 'declaration' : 'source')
const isRelevant = (f) => {
  for (const p of plugins) {
    const u = p.uses ?? {}
    if ((u.packages ?? []).some((x) => f.path.startsWith(x))) return p
    if ((u.config ?? []).some((x) => f.path === `config:${x}` || f.path.startsWith(`config:${x}`))) return p
    if ((u.docs ?? []).some((x) => f.path === x || f.path.startsWith(x))) return p
    const kw = u.keywords ?? []
    if (kw.length && kw.some((k) => (f.detail ?? '').toLowerCase().includes(k.toLowerCase()))) return p
  }
  return null
}

// 结构级变更：会直接打断"包名/配置/入口"层，任何插件都必须处理。
// 符号级（ast-export-removed / ast-signature-changed）不在此列：
// 声明型插件不直接引用导出符号；源码型插件应交给 scan-plugin.ps1 用真实源码 grep 确认，
// 否则 packages 里成百上千的内部导出变更会把"必须处理"淹没。
const STRUCTURAL_KINDS = new Set([
  'package-removed', 'config-field-removed', 'config-field-type-changed',
  'config-scope-removed', 'exports-map-changed', 'doc-removed', 'upgrade-guide-added',
])

const relevant = (report.findings ?? []).filter((f) => isRelevant(f))
const mustFix = relevant.filter((f) => STRUCTURAL_KINDS.has(f.kind))
const lowPriority = relevant.filter((f) => !STRUCTURAL_KINDS.has(f.kind))
const relBreaking = relevant.filter((f) => f.severity === 'breaking')

const md = []
const state = registry ? `registry: ${plugins.length} 个插件` : '（未找到 registry.json，相关性判断退化为"未命中"）'
md.push(`# DSH 升级预告：${from} → ${to}`, '')
md.push(`生成时间：${new Date().toISOString()}`, '')
md.push(`- 报告：\`${reportPath}\``, `- ${state}`, '')
const counts = report.counts ?? {}
md.push('## 一句话结论', '')
if (plugins.length === 0) {
  md.push('未配置 registry，无法判断"与你相关"。**这不等于没事**：先补 registry.json 的 uses 声明，再重跑。', '')
} else if (mustFix.length > 0) {
  md.push(`**有 ${mustFix.length} 处必须处理**（相关命中 ${relevant.length} 条；另有 ${lowPriority.length} 条低优先/待复核）。`, '')
} else if (relevant.length > 0) {
  md.push(`没有必须处理的 breaking；有 ${lowPriority.length} 条相关条目待复核。`, '')
} else {
  md.push('registry 视角未命中任何改动。仍需按下方"升级演练"跑一遍运行时体检——静态报告看不到挂载链路问题。', '')
}
md.push(`报告总计数：${Object.entries(counts).map(([k, v]) => `${k}=${v}`).join('，') || '（报告未带 counts）'}`, '')

if (mustFix.length > 0) {
  md.push('## 必须处理（相关 breaking 与应对）', '')
  md.push('| 影响面 | 变更 | 具体改动 | 应对步骤 | 体检项 |', '|---|---|---|---|---|')
  for (const f of mustFix.slice(0, 40)) {
    const who = isRelevant(f)?.name ?? '-'
    const steps = (ADVICE[f.kind] ?? ['按报告 diff 位置人工确认']).map((s, i) => `${i + 1}. ${s}`).join(' ')
    md.push(`| ${who} | \`${f.kind}\` | \`${f.path}\` — ${(f.detail ?? '').replace(/\|/g, '\\|')} | ${steps.replace(/\|/g, '\\|')} | ${CHECK_HINT[f.kind] ?? '-'} |`)
  }
  if (mustFix.length > 40) md.push(`| … | | 其余 ${mustFix.length - 40} 条见 report.md | | |`)
  md.push('')
}
if (lowPriority.length > 0) {
  md.push('## 符号级 / 待复核（用 scan-plugin.ps1 扫源码确认）', '')
  md.push('声明型插件（kind=declaration）不直接引用内部导出，ast-* 类变更多为噪声；源码型插件需要逐条看源码扫描结果。', '')
  for (const f of lowPriority.slice(0, 40)) {
    md.push(`- [${f.severity}] \`${f.kind}\` ${f.path}${f.detail ? ' — ' + f.detail : ''}`)
  }
  if (lowPriority.length > 40) md.push(`- …（其余 ${lowPriority.length - 40} 条见 report.md）`)
  md.push('')
}

md.push('## 升级演练（静态报告覆盖不到的部分）', '')
md.push('```powershell')
md.push('# 1) 升级前存基线：runtime 包清单 + 当前挂载链路')
md.push('node scripts/audit-local.mjs')
md.push('# 2) 升级后立即重跑：C6 自动 diff 出内核删了哪些包')
md.push('node scripts/audit-local.mjs --report <本报告 report.json> --registry registry.json')
md.push('# 3) 花名册仍报加载失败时：悬停卡片拿诊断，对照 docs/runtime-audit.md 的故障表')
md.push('```')
md.push('')
md.push('体检项速查：C1 manifest 半持久化 / C2 补丁层遮蔽 / C3 插件名解析 / C4 workflowEngine provider / C5 已知废弃 / C6 内核删包 / C7 注册表交叉。')
md.push('')
md.push('> 本文件由 `scripts/prepare-impact.mjs` 生成；应对步骤是启发式指引，替代 API 需以上游代码/文档为证据，不在此猜测。')

writeFileSync(outPath, md.join('\n') + '\n', 'utf8')
console.log(`impact plan: ${outPath}`)
console.log(`必须处理=${mustFix.length}，相关 breaking=${relBreaking.length}，相关命中=${relevant.length}，registry 插件=${plugins.length}`)
