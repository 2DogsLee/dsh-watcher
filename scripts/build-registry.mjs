/**
 * build-registry.mjs — 从本机 bundle 补丁生成 registry.json 的 uses 声明
 *
 * 为什么需要：prepare-impact 用 registry.uses 判断"官方改动与我相关"，
 * 而 uses.packages 要填**官方仓库路径**（如 packages/preset/persona），
 * 不是 npm 包名。本脚本把补丁里引用的 @deepseek-ai 包名映射成路径。
 *
 * 用法:
 *   node scripts/build-registry.mjs --pkg-map <name→path.json> --bundle <dir>... [--out registry.json]
 * pkg-map 生成方式（官方 checkout 内）：
 *   git ls-tree -r --name-only <tag> | 过滤 packages 下每个包目录的 package.json
 *   逐个读 package.json 的 name 字段，映射为 { "@deepseek-ai/dsh-x": "packages/.../x" }
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join, resolve, basename } from 'node:path'

const argv = process.argv.slice(2)
const opt = (name, dflt) => {
  const i = argv.indexOf('--' + name)
  return i !== -1 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : dflt
}
const pkgMapPath = opt('pkg-map')
if (!pkgMapPath || !existsSync(pkgMapPath)) {
  console.error('用法: node scripts/build-registry.mjs --pkg-map <map.json> --bundle <dir>... [--out registry.json]')
  process.exit(1)
}
const pkgMap = JSON.parse(readFileSync(pkgMapPath, 'utf8'))
const bundleDirs = argv.reduce((acc, cur, i) => {
  if (cur === '--bundle' && argv[i + 1]) acc.push(resolve(argv[i + 1]))
  return acc
}, [])
const outPath = opt('out', 'registry.json')

// 解析补丁：收集引用的包名、带 config 块的行名
function parsePatch(file) {
  const lines = readFileSync(file, 'utf8').split(/\r?\n/)
  const rows = [] // { id, name, hasConfig }
  let cur = null
  let rowIndent = 0
  for (const line of lines) {
    if (!line.trim() || line.trim().startsWith('#')) continue
    const im = /^(\s*)-\s+id:\s*(\S+)\s*$/.exec(line)
    if (im) {
      rowIndent = im[1].length
      cur = { id: im[2], name: null, hasConfig: false }
      rows.push(cur)
      continue
    }
    if (!cur) continue
    const nm = /^(\s*)name:\s*['"]?([^'"\s]+)['"]?\s*$/.exec(line)
    if (nm && nm[1].length === rowIndent + 2) { cur.name = nm[2]; continue }
    const cf = /^(\s*)config:\s*$/.exec(line)
    if (cf && cf[1].length === rowIndent + 2) cur.hasConfig = true
  }
  return rows
}

const plugins = []
for (const dir of bundleDirs) {
  const pkgFile = join(dir, 'package.json')
  if (!existsSync(pkgFile)) continue
  const pkg = JSON.parse(readFileSync(pkgFile, 'utf8'))
  if (!pkg.dsh?.bundle?.patch) continue
  const patchFile = join(dir, pkg.dsh.bundle.patch)
  if (!existsSync(patchFile)) continue

  const rows = parsePatch(patchFile)
  const names = [...new Set(rows.map((r) => r.name).filter((n) => n && n.startsWith('@deepseek-ai/')))]
  const configRows = [...new Set(rows.filter((r) => r.hasConfig && r.name?.startsWith('@deepseek-ai/')).map((r) => r.name))]
  const packages = [...new Set(names.map((n) => pkgMap[n]).filter(Boolean))].sort()

  plugins.push({
    name: pkg.name,
    repo: pkg.repository?.url?.replace(/^git\+/, '') ?? undefined,
    uses: {
      packages,
      config: configRows.sort(),
      docs: ['docs/subsystems', 'docs/cordis-api'],
      keywords: ['preset', 'persona', 'workflow', 'subagent', 'skill'],
    },
  })
}

const registry = {
  _comment: 'dsh-api-watch 插件注册表（v1 生效）。watch 报告与雷达摘要按 uses 过滤出『与我相关』条目。packages/docs 按路径前缀匹配（finding.path 以此开头即相关）；config 填 config-catalog 里的包名（匹配 config:<名称> 前缀）；keywords 用于雷达标题匹配（不区分大小写，子串）。uses.packages 必须是官方仓库路径（如 packages/preset/persona），不是 npm 包名——用 scripts/build-registry.mjs 从补丁自动生成。',
  version: 1,
  plugins,
}
writeFileSync(outPath, JSON.stringify(registry, null, 2) + '\n', 'utf8')
console.log(`registry 写入 ${outPath}：${plugins.length} 个插件`)
for (const p of plugins) console.log(`  - ${p.name}: ${p.uses.packages.length} packages, ${p.uses.config.length} config rows`)
