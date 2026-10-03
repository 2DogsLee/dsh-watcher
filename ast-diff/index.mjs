// dsh-api-watch v2: AST 级签名比对
// 用法: node index.mjs <repoPath> <refA> <refB> <outJson>
// 产出 findings JSON 数组（severity/kind/path/detail），由 diff-api.ps1 合并。
// 覆盖三类正则提取的漏报：
//   1. re-export（index.ts 从 ./types 等转发）的符号删除/签名变化
//   2. 函数/接口参数类型变化
//   3. config-catalog 字段类型收紧 / 可选->必填

import ts from 'typescript'
import { execFileSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'
import path from 'node:path'

const [repo, refA, refB, outJson] = process.argv.slice(2)
if (!repo || !refA || !refB || !outJson) {
  console.error('usage: node index.mjs <repo> <refA> <refB> <outJson>')
  process.exit(1)
}

const git = (args) => execFileSync('git', ['-C', repo, ...args], { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 })
const gitShow = (ref, p) => {
  try { return git(['show', `${ref}:${p}`]) } catch { return null }
}

// ---- 1. 收集入口文件与 re-export 闭包 ---------------------------------------
function listIndexFiles(ref) {
  const all = git(['ls-tree', '-r', '--name-only', ref, 'packages']).split('\n')
  return all.filter((p) => /\/src\/index\.ts$/.test(p) && !/node_modules|\/fixtures\/|\/tests?\//.test(p))
}

// 解析一个 index.ts 的 re-export 目标（限深 2）
function reExportTargets(ref, idxPath, depth = 0) {
  const text = gitShow(ref, idxPath)
  if (!text || depth > 2) return []
  const dir = path.posix.dirname(idxPath)
  const targets = []
  for (const m of text.matchAll(/export\s+(?:type\s+)?(?:\*|\{[^}]*\})\s+from\s+'([^']+)'/g)) {
    const spec = m[1]
    if (!spec.startsWith('.')) continue
    for (const cand of [spec, `${spec}.ts`, `${spec}/index.ts`]) {
      const abs = path.posix.normalize(path.posix.join(dir, cand))
      if (gitShow(ref, abs) !== null) { targets.push(abs); break }
    }
  }
  return targets
}

function entryClosure(ref, entries) {
  const seen = new Set()
  const queue = [...entries]
  const closure = new Map() // file -> text
  while (queue.length) {
    const p = queue.shift()
    if (seen.has(p)) continue
    seen.add(p)
    const text = gitShow(ref, p)
    if (text === null) continue
    closure.set(p, text)
    for (const t of reExportTargets(ref, p)) queue.push(t)
  }
  return closure
}

// ---- 2. 提取导出符号签名指纹 -------------------------------------------------
function signatureMap(ref, closure) {
  const map = new Map() // name -> fingerprint
  for (const [file, text] of closure) {
    const sf = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true)
    const visit = (node) => {
      let name = null
      let fp = null
      if (ts.isFunctionDeclaration(node) && node.name) {
        name = node.name.text
        fp = `function(${node.parameters.map((p) => paramText(p)).join(',')})`
      } else if (ts.isClassDeclaration(node) && node.name) {
        name = node.name.text
        fp = `class(${node.members.filter((m) => ts.isConstructorDeclaration(m)).map((m) => m.parameters.map((p) => paramText(p)).join(',')).join('|')})`
      } else if (ts.isInterfaceDeclaration(node) || ts.isTypeAliasDeclaration(node) || ts.isEnumDeclaration(node)) {
        name = node.name.text
        fp = compact(node.getText(sf))
      } else if (ts.isVariableStatement(node)) {
        for (const d of node.declarationList.declarations) {
          if (ts.isIdentifier(d.name)) {
            name = d.name.text
            fp = d.type ? `var:${compact(d.type.getText(sf))}` : 'var'
          }
        }
      }
      if (name && fp) {
        // 同名以先到者为准；转发文件与入口重复时入口优先（后处理覆盖）
        if (!map.has(name)) map.set(name, { fp, file })
      }
      ts.forEachChild(node, visit)
    }
    visit(sf)
    // 入口文件自己的声明覆盖转发文件的（后写覆盖）
    // ——处理方式：入口文件最后再扫一遍
  }
  // 入口优先：重扫入口文件，覆盖转发声明
  for (const [file, text] of closure) {
    if (!file.endsWith('/src/index.ts')) continue
    const sf = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true)
    const visit = (node) => {
      let name = null
      let fp = null
      if (ts.isFunctionDeclaration(node) && node.name) { name = node.name.text; fp = `function(${node.parameters.map((p) => paramText(p)).join(',')})` }
      else if (ts.isClassDeclaration(node) && node.name) { name = node.name.text; fp = 'class' }
      else if (ts.isInterfaceDeclaration(node) || ts.isTypeAliasDeclaration(node) || ts.isEnumDeclaration(node)) { name = node.name.text; fp = compact(node.getText(sf)) }
      if (name && fp) map.set(name, { fp, file })
      ts.forEachChild(node, visit)
    }
    visit(sf)
  }
  return map
}

function paramText(p) {
  const type = p.type ? p.type.getText() : 'any'
  return `${p.questionToken ? '?' : ''}${p.name.getText()}:${compact(type)}`
}
const compact = (s) => s.replace(/\s+/g, ' ').trim()

// ---- 3. config-catalog 字段类型 ----------------------------------------------
function configFieldTypes(ref) {
  const text = gitShow(ref, 'docs/config-catalog.md')
  if (!text) return new Map()
  const map = new Map() // "pkg::field" -> { type, optional }
  let pkg = null
  for (const line of text.split('\n')) {
    const h = line.match(/^## `(@[^`]+)`/)
    if (h) { pkg = h[1]; continue }
    if (!pkg) continue
    const f = line.match(/^\s+([A-Za-z_][A-Za-z0-9_]*)(\?)?:\s*(.+?)\s*$/)
    if (f) map.set(`${pkg}::${f[1]}`, { type: compact(f[3]), optional: Boolean(f[2]) })
  }
  return map
}

// ---- 4. 主流程 ---------------------------------------------------------------
function snapshot(ref) {
  const entries = listIndexFiles(ref)
  const closure = entryClosure(ref, entries)
  return {
    symbols: signatureMap(ref, closure),
    files: closure,
    config: configFieldTypes(ref),
    pkgOf: Object.fromEntries(entries.map((e) => [e, e.replace('/src/index.ts', '')])),
  }
}

console.error(`[ast] snapshot ${refA}...`)
const A = snapshot(refA)
console.error(`[ast] snapshot ${refB}...`)
const B = snapshot(refB)

const findings = []
const add = (severity, kind, p, detail) => findings.push({ severity, kind, path: p, detail })

// 4a. 逐包符号比对（以入口文件归属包）
function pkgOfName(symMap, name, def) {
  const hit = symMap.get(name)
  return hit ? hit.file.replace('/src/index.ts', '') : def
}

const allSyms = new Set([...A.symbols.keys(), ...B.symbols.keys()])
let removed = 0, added = 0, changed = 0
for (const name of allSyms) {
  const a = A.symbols.get(name)
  const b = B.symbols.get(name)
  const pkg = ((b || a).file.replace('/src/index.ts', '')).replace(/^packages\//, '')
  const p = `packages/${pkg}`
  if (a && !b) { add('breaking', 'ast-export-removed', p, `导出（含 re-export）删除: ${name}（原声明于 ${a.file}）`); removed++ }
  else if (!a && b) { add('info', 'ast-export-added', p, `新增导出: ${name}`); added++ }
  else if (a.fp !== b.fp) {
    const narrowed = a.fp.includes('?:') && !b.fp.includes('?:') // 粗略：可选项消失视为收紧
    add(narrowed ? 'breaking' : 'warning', 'ast-signature-changed', p, `签名变化: ${name}\n    旧: ${a.fp}\n    新: ${b.fp}`)
    changed++
  }
}
console.error(`[ast] symbols: removed=${removed} added=${added} changed=${changed}`)

// 4b. config 字段类型变化
const allCfg = new Set([...A.config.keys(), ...B.config.keys()])
let cfgChanged = 0
for (const key of allCfg) {
  const a = A.config.get(key)
  const b = B.config.get(key)
  if (a && !b) { add('breaking', 'config-field-removed', `config:${key.split('::')[0]}`, `配置字段被删除: ${key.split('::')[1]}（cordis.yml 里写这些字段将失效）`); continue }
  if (!a && b) { add('info', 'config-field-added', `config:${key.split('::')[0]}`, `新增配置字段: ${key.split('::')[1]}`); continue }
  if (a.type !== b.type || a.optional !== b.optional) {
    const narrowed = a.optional && !b.optional
    add(narrowed ? 'breaking' : 'warning', 'config-field-type-changed', `config:${key.split('::')[0]}`, `配置字段类型变化: ${key.split('::')[1]}: ${a.optional ? '?' : ''}${a.type} -> ${b.optional ? '?' : ''}${b.type}`)
    cfgChanged++
  }
}
console.error(`[ast] config type changes: ${cfgChanged}`)

writeFileSync(outJson, JSON.stringify(findings, null, 2))
console.error(`[ast] findings: ${findings.length} -> ${outJson}`)
