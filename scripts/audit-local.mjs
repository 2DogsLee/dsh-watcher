/**
 * audit-local.mjs — 本地 DSH 环境体检（静态 API 比对之外的运行时侧检查）
 *
 * 背景（2026-11 真实事故，DSH 0.2.0-rc.2 → 0.2.2-rc.1）：
 *   diff-api.ps1 能报出官方删了哪些包/导出，但用户当时遇到的全部故障都是
 *   「本地配置形态」问题，静态 API 差异里一条也看不到：
 *     - 旧 ~/.dsh/.agent-presets 目录不再被内核读取 → 模式整体消失
 *     - profile 补丁层残留 preset 声明 → 遮蔽 bundle，花名册不可见
 *     - 只热启用未写入 profile manifest → 重启即丢
 *     - 插件行用相对路径 / 裸盘符 / file: 单斜杠 → never started
 *     - 内核删包（workflow-worker-thread）→ 行引用它，且 workflowEngine 失去提供方
 * 本脚本把这些检查固化，升级前后各跑一次即可。
 *
 * 用法:
 *   node scripts/audit-local.mjs                       # 人读报告
 *   node scripts/audit-local.mjs --json                # 机器可读
 *   node scripts/audit-local.mjs --out audit.md        # 同时写 markdown
 *   node scripts/audit-local.mjs --report <report.json> --registry registry.json
 *                                                      # 交叉比对官方删包与注册表依赖
 * 退出码: 0 = 通过；1 = 有 error；2 = 仅有 warning
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs'
import { join, dirname, resolve } from 'node:path'
import { homedir } from 'node:os'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const REPO = resolve(HERE, '..')

/* ---------------- 参数 ---------------- */

const argv = process.argv.slice(2)
const opt = (name, dflt) => {
  const i = argv.indexOf('--' + name)
  return i !== -1 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : dflt
}
const flag = (name) => argv.includes('--' + name)

const cfg = {
  dshHome: opt('dsh-home', process.env.DSH_HOME ?? join(homedir(), '.dsh')),
  runtime: opt('runtime', process.env.DSH_RUNTIME ??
    ''),
  profiles: (opt('profiles', 'web,desktop,cli') ?? '').split(',').map((s) => s.trim()).filter(Boolean),
  bundleRoots: argv.reduce((acc, cur, i) => {
    if (cur === '--bundle-root' && argv[i + 1]) acc.push(resolve(argv[i + 1]))
    return acc
  }, []),
  stateDir: opt('state', join(REPO, '.state')),
  report: opt('report', null),
  registry: opt('registry', join(REPO, 'registry.json')),
  json: flag('json'),
  out: opt('out', null),
}

/* ---------------- 已知废弃清单（内核删包/改名后人工补充修法提示；C6 会先自动发现） ---------------- */

const KNOWN_REMOVED = [
  {
    match: /^@deepseek-ai\/dsh-workflow-worker-thread$/,
    since: '0.2.2',
    fix: '删除该行；在 isolate: workflowEngine 组内改用 @deepseek-ai/dsh-workflow-ptc',
  },
  {
    match: /^@deepseek-ai\/dsh-tool-subagent-control\/list-agents$/,
    since: '0.2.2',
    fix: '删除该行；list_agents 已并入 @deepseek-ai/dsh-tool-subagent-control 本体',
  },
]

/* ---------------- 基础设施 ---------------- */

const findings = []
const add = (level, check, message, hint) => findings.push({ level, check, message, hint })

const moduleDirs = () => [
  join(cfg.runtime, 'node_modules'),
  join(cfg.dshHome, 'profiles', 'node_modules'),
  ...cfg.profiles.map((p) => join(cfg.dshHome, 'profiles', p, 'node_modules')),
]

function readPkgManifest(spec) {
  const parts = spec.split('/')
  const pkgName = spec.startsWith('@') ? parts.slice(0, 2).join('/') : parts[0]
  const sub = spec.startsWith('@') ? parts.slice(2).join('/') : parts.slice(1).join('/')
  for (const base of moduleDirs()) {
    const dir = join(base, ...pkgName.split('/'))
    const manifest = join(dir, 'package.json')
    if (existsSync(manifest)) return { dir, pkg: JSON.parse(readFileSync(manifest, 'utf8')), sub }
  }
  return null
}

/* ---------------- 组合文件解析（缩进法：patch 含 !!js 标签，常规 YAML 解析器会失败） ---------------- */

function parseRows(file) {
  const lines = readFileSync(file, 'utf8').split(/\r?\n/)
  const rows = []
  const stack = []
  for (const line of lines) {
    if (!line.trim() || line.trim().startsWith('#')) continue
    const im = /^(\s*)-\s+id:\s*(\S+)\s*$/.exec(line)
    if (im) {
      const row = { id: im[2], indent: im[1].length, name: null, isolateWorkflow: false, children: [] }
      while (stack.length && stack[stack.length - 1].indent >= row.indent) stack.pop()
      if (stack.length) stack[stack.length - 1].row.children.push(row)
      rows.push(row)
      stack.push({ indent: row.indent, row })
      continue
    }
    const nm = /^(\s*)name:\s*['"]?([^'"\s]+)['"]?\s*$/.exec(line)
    if (nm) {
      const indent = nm[1].length
      // 只接受直接子键（比所属行多缩进 2）；否则 config.name（预设显示名）会被误认
      if (stack.length && indent === stack[stack.length - 1].row.indent + 2) {
        stack[stack.length - 1].row.name = nm[2]
      }
      continue
    }
    if (/^\s*workflowEngine:\s*true\s*$/.test(line) && stack.length) {
      stack[stack.length - 1].row.isolateWorkflow = true
    }
  }
  return rows
}

const walkRows = (rows, fn) => { for (const r of rows) { fn(r); walkRows(r.children, fn) } }

/* ---------------- bundle 发现：profile 依赖里的 link: 目标 + 显式 roots ---------------- */

function discoverBundles() {
  const found = new Map() // 绝对目录 -> bundle package.json
  const consider = (dir) => {
    const bf = join(dir, 'package.json')
    if (!existsSync(bf)) return
    try {
      const b = JSON.parse(readFileSync(bf, 'utf8'))
      if (b.dsh?.bundle?.patch) found.set(dir, b)
    } catch { /* 忽略坏 package.json */ }
  }
  for (const profile of cfg.profiles) {
    const pkgFile = join(cfg.dshHome, 'profiles', profile, 'package.json')
    if (!existsSync(pkgFile)) continue
    let pkg
    try { pkg = JSON.parse(readFileSync(pkgFile, 'utf8')) } catch { continue }
    for (const dep of Object.values(pkg.dependencies ?? {})) {
      if (typeof dep === 'string' && dep.startsWith('link:')) {
        const target = dep.slice(5)
        consider(resolve(join(cfg.dshHome, 'profiles', profile), target))
      }
    }
  }
  for (const root of cfg.bundleRoots) {
    if (!existsSync(root)) continue
    const bf = join(root, 'package.json')
    if (existsSync(bf)) { consider(root); continue }
    for (const e of readdirSync(root, { withFileTypes: true })) {
      if (e.isDirectory()) consider(join(root, e.name))
    }
  }
  return found
}

/* ---------------- C1: manifest 持久化 ---------------- */

function checkManifest(bundles) {
  for (const profile of cfg.profiles) {
    const pkgFile = join(cfg.dshHome, 'profiles', profile, 'package.json')
    if (!existsSync(pkgFile)) continue
    const pkg = JSON.parse(readFileSync(pkgFile, 'utf8'))
    const listed = pkg.dsh?.profile?.bundles ?? []
    const deps = Object.keys(pkg.dependencies ?? {})
    for (const b of bundles.values()) {
      const inBundles = listed.includes(b.name)
      const inDeps = deps.includes(b.name)
      // 只查"声明过这个 bundle 的 profile"：一半有一半无 = 只热启用未持久化
      if (inBundles !== inDeps) {
        add('error', 'C1', `${b.name} 在 profile "${profile}" 只完成一半持久化`,
          `bundles=${inBundles} dependencies=${inDeps}；用 plugin_manager remove_bundle + install_bundle 重装（必须看到 pnpm 的 "dependencies: +" 回执）`)
      }
    }
  }
}

/* ---------------- C2: 补丁层遮蔽 ---------------- */

function checkPatchShadowing() {
  const patchFiles = [
    join(cfg.dshHome, 'cordis.patch.yml'),
    ...cfg.profiles.map((p) => join(cfg.dshHome, 'profiles', p, 'cordis.patch.yml')),
  ]
  for (const f of patchFiles) {
    if (!existsSync(f)) continue
    const text = readFileSync(f, 'utf8')
    const hits = [...text.matchAll(/^\s*-\s*id:\s*(preset-[A-Za-z0-9_-]+)\s*$/gm)].map((m) => m[1])
    if (hits.length) {
      add('error', 'C2', `${f} 里残留 ${hits.length} 条 preset 声明：${hits.join(', ')}`,
        '补丁层优先于 bundle 层，会遮蔽同名 preset（行状态 unaddressable、花名册看不到）。删除这些块，只保留 bundle 声明')
    }
  }
}

/* ---------------- C3/C4/C5: 遍历 bundle 补丁 ---------------- */

function checkBundles(bundles) {
  const referenced = new Set()
  for (const [dir, b] of bundles) {
    const patchFile = resolve(dir, b.dsh.bundle.patch)
    if (!existsSync(patchFile)) {
      add('error', 'C3', `${b.name}: patch 文件不存在 ${patchFile}`)
      continue
    }
    let rows
    try { rows = parseRows(patchFile) } catch (e) {
      add('error', 'C3', `${b.name}: 无法解析 ${patchFile}: ${e.message}`)
      continue
    }
    const rowList = []
    walkRows(rows, (r) => rowList.push(r))
    const names = rowList.map((r) => r.name).filter(Boolean)

    for (const row of rowList) {
      const spec = row.name
      if (!spec || spec.startsWith('cordis:')) continue

      for (const kr of KNOWN_REMOVED) {
        if (kr.match.test(spec)) {
          add('error', 'C5', `${b.name}: 行 "${row.id}" 引用 ${spec}（自 ${kr.since} 起已移除）`, kr.fix)
        }
      }

      if (spec.startsWith('file:///')) {
        let p = null
        try { p = fileURLToPath(spec) } catch {
          add('error', 'C3', `${b.name}: 行 "${row.id}" 的 file URL 非法: ${spec}`)
          continue
        }
        if (!existsSync(p)) add('error', 'C3', `${b.name}: 行 "${row.id}" 的目标文件不存在: ${p}`)
        continue
      }
      if (spec.startsWith('file:')) {
        add('error', 'C3', `${b.name}: 行 "${row.id}" 用 file: 单斜杠前缀（补丁加载器会整块丢弃）`, '改成 file:///D:/... 全 URL')
        continue
      }
      if (spec.startsWith('./') || spec.startsWith('../')) {
        add('error', 'C3', `${b.name}: 行 "${row.id}" 用相对路径 ${spec}`, 'loader 按 profile 根解析、不是 patch 目录 → 必然 never started。改成 file:/// 绝对 URL')
        continue
      }
      if (/^[A-Za-z]:[\\/]/.test(spec)) {
        add('error', 'C3', `${b.name}: 行 "${row.id}" 用裸盘符路径 ${spec}`, '内部 ESM loader 会当包名解析 → never started。改成 file:/// 绝对 URL')
        continue
      }

      referenced.add(spec)
      const found = readPkgManifest(spec)
      if (!found) {
        add('error', 'C3', `${b.name}: 行 "${row.id}" 引用的包不存在: ${spec}`, '内核升级可能删包/改名；对照新版本运行时或换等价包')
        continue
      }
      if (found.sub) {
        const key = './' + found.sub
        const exp = Object.keys(found.pkg.exports ?? {})
        const covered = exp.some((k) => k === key || (k.includes('*') && new RegExp('^' + k.replace('*', '[^/]+') + '$').test(key)))
        if (!covered) {
          add('error', 'C3', `${b.name}: 行 "${row.id}" 引用子路径 ${spec}，但该包 exports 里没有 ${key}`, '子路径已合并进本体或改名（如 list-agents）→ 删除该行')
        }
      }
    }

    const usesWorkflow = names.some((n) => /dsh-tool-workflow$|dsh-tool-ralph$/.test(n))
    if (usesWorkflow) {
      const providers = names.filter((n) => /dsh-workflow-ptc$|dsh-workflow-worker-thread$/.test(n))
      if (providers.length === 0) {
        add('error', 'C4', `${b.name}: 含 tool-workflow/tool-ralph 但没有任何 workflowEngine 提供方`,
          '在 isolate: workflowEngine 的组内加 @deepseek-ai/dsh-workflow-ptc')
      }
    }
  }
  return referenced
}

/* ---------------- C6: 运行时包清单漂移（自动发现内核删包） ---------------- */

function collectRuntimePackages() {
  const scope = join(cfg.runtime, 'node_modules', '@deepseek-ai')
  if (!existsSync(scope)) return null
  const names = readdirSync(scope, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => '@deepseek-ai/' + e.name)
    .sort()
  let version = null
  const dshPkg = join(scope, 'dsh', 'package.json')
  if (existsSync(dshPkg)) {
    try { version = JSON.parse(readFileSync(dshPkg, 'utf8')).version } catch { /* 版本缺失不致命 */ }
  }
  return { version, packages: names }
}

function checkRuntimeDrift(referenced) {
  const now = collectRuntimePackages()
  if (!now) { add('warning', 'C6', `runtime node_modules 不存在: ${cfg.runtime}`); return }
  const stateFile = join(cfg.stateDir, 'runtime-packages.json')
  let prev = null
  if (existsSync(stateFile)) {
    try { prev = JSON.parse(readFileSync(stateFile, 'utf8')) } catch { /* 快照损坏则重建 */ }
  }
  if (prev?.packages) {
    const prevSet = new Set(prev.packages)
    const nowSet = new Set(now.packages)
    const removed = [...prevSet].filter((n) => !nowSet.has(n))
    const added = [...nowSet].filter((n) => !prevSet.has(n))
    for (const pkg of removed) {
      const used = [...referenced].filter((n) => n === pkg || n.startsWith(pkg + '/'))
      if (used.length) {
        add('error', 'C6', `内核删除了 ${pkg}（仍被引用：${used.join(', ')}）`,
          '删除/替换这些行；若它是服务提供方，找新版本里的替代包（workflow-worker-thread → workflow-ptc）')
      } else {
        add('warning', 'C6', `内核删除了包 ${pkg}（当前 bundle 未引用）`)
      }
    }
    if (added.length) add('warning', 'C6', `内核新增 ${added.length} 个包：${added.slice(0, 8).join(', ')}${added.length > 8 ? ' …' : ''}`)
    if (prev.version !== now.version) add('warning', 'C6', `内核版本变化：${prev.version ?? '?'} → ${now.version ?? '?'}`)
  }
  mkdirSync(cfg.stateDir, { recursive: true })
  writeFileSync(stateFile, JSON.stringify({ takenAt: new Date().toISOString(), ...now }, null, 2))
}

/* ---------------- C7: 官方删包 × 注册表依赖交叉比对（可选） ---------------- */

function checkReportAgainstRegistry(referenced) {
  if (!existsSync(cfg.report)) return
  let report
  try { report = JSON.parse(readFileSync(cfg.report, 'utf8')) } catch { return }
  const removedPkgs = (report.findings ?? [])
    .filter((f) => f.kind === 'package-removed' || f.kind === 'export-removed' || f.severity === 'breaking')
    .map((f) => f.path ?? '')
    .filter(Boolean)
  if (removedPkgs.length === 0) return
  let registry = null
  if (existsSync(cfg.registry)) {
    try { registry = JSON.parse(readFileSync(cfg.registry, 'utf8')) } catch { /* 注册表可选 */ }
  }
  const watchPkgs = (registry?.plugins ?? []).flatMap((p) => p.uses?.packages ?? [])
  for (const path of removedPkgs) {
    const hit = watchPkgs.find((w) => path.startsWith(w))
    if (hit) {
      add('warning', 'C7', `本次升级删除了你注册表里依赖的 ${path}（registry uses: ${hit}）`,
        '先处理该包对应的导出/调用点，再升级；C3 会同时报出仍引用它的声明行')
    }
  }
  for (const spec of referenced) {
    const bare = spec.startsWith('@') ? spec.split('/').slice(0, 2).join('/') : spec.split('/')[0]
    const pkgPath = removedPkgs.find((p) => p.includes('/' + bare.replace('@deepseek-ai/', '')))
    if (pkgPath) {
      add('error', 'C7', `你的声明行引用了官方已删除的包 ${bare}（${pkgPath}）`, '删除该行或换替代包；参考 report.md 的迁移建议')
    }
  }
}

/* ---------------- 运行 ---------------- */

if (!existsSync(cfg.dshHome)) add('error', 'ENV', `DSH_HOME 不存在: ${cfg.dshHome}`)

const bundles = discoverBundles()
checkManifest(bundles)
checkPatchShadowing()
const referenced = checkBundles(bundles)
checkRuntimeDrift(referenced)
checkReportAgainstRegistry(referenced)

const errors = findings.filter((f) => f.level === 'error')
const warnings = findings.filter((f) => f.level === 'warning')
const summary = {
  checkedAt: new Date().toISOString(),
  dshHome: cfg.dshHome,
  runtime: cfg.runtime,
  bundles: [...bundles.values()].map((b) => b.name),
  ok: errors.length === 0,
  errors,
  warnings,
}

if (cfg.json) {
  console.log(JSON.stringify(summary, null, 2))
} else {
  console.log(`audit-local — ${summary.checkedAt}`)
  console.log(`  DSH_HOME: ${cfg.dshHome}`)
  console.log(`  runtime : ${cfg.runtime}`)
  console.log(`  bundles : ${summary.bundles.length} 个`)
  console.log('')
  if (findings.length === 0) {
    console.log('✅ 全部检查通过（C1 manifest / C2 补丁层遮蔽 / C3 插件名解析 / C4 workflow provider / C5 废弃清单 / C6 内核包漂移 / C7 注册表交叉）')
  } else {
    for (const f of findings) {
      console.log(`${f.level === 'error' ? '❌' : '⚠️'} [${f.check}] ${f.message}`)
      if (f.hint) console.log(`   → ${f.hint}`)
    }
    console.log('')
    console.log(`汇总：error=${errors.length} warning=${warnings.length}`)
  }
}

if (cfg.out) {
  const md = ['# 本地 DSH 环境体检报告', '', `生成时间：${summary.checkedAt}`, '',
    `- DSH_HOME：\`${cfg.dshHome}\``, `- runtime：\`${cfg.runtime}\``,
    `- 检查的 bundle：${summary.bundles.length} 个${summary.bundles.length ? `（${summary.bundles.join(', ')}）` : ''}`, '']
  if (findings.length === 0) {
    md.push('**结论：全部通过。**')
  } else {
    md.push('| 级别 | 检查 | 问题 | 建议 |', '|---|---|---|---|')
    for (const f of findings) {
      md.push(`| ${f.level === 'error' ? '❌ error' : '⚠️ warning'} | ${f.check} | ${f.message.replace(/\|/g, '\\|')} | ${(f.hint ?? '').replace(/\|/g, '\\|')} |`)
    }
    md.push('', `汇总：error=${errors.length} warning=${warnings.length}`)
  }
  writeFileSync(resolve(cfg.out), md.join('\n') + '\n', 'utf8')
}

process.exit(errors.length ? 1 : warnings.length ? 2 : 0)
