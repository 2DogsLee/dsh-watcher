/**
 * audit-local.selftest.mjs — 用注入故障的临时夹具验证 audit-local.mjs 真的会报警。
 * 每个用例独立：构造最小恶意输入 → 跑 audit-local → 断言命中对应 check → 清理。
 *
 * 用法: node scripts/audit-local.selftest.mjs
 */
import { mkdtempSync, writeFileSync, mkdirSync, rmSync, readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { tmpdir } from 'node:os'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const AUDIT = join(HERE, 'audit-local.mjs')

function fixture({ bundles = {}, profilePkg = {}, homePatch = null, runtimePkgs = null, stateSeed = null }) {
  const root = mkdtempSync(join(tmpdir(), 'dsh-audit-'))
  const home = join(root, 'home')
  const web = join(home, 'profiles', 'web')
  mkdirSync(web, { recursive: true })
  writeFileSync(join(web, 'package.json'), JSON.stringify({
    name: 'dsh-profile-web', dependencies: {}, dsh: { profile: { bundles: [] } }, ...profilePkg,
  }, null, 2))
  if (homePatch) writeFileSync(join(home, 'cordis.patch.yml'), homePatch)

  const bundleRoot = join(root, 'bundles')
  mkdirSync(bundleRoot, { recursive: true })
  for (const [name, patch] of Object.entries(bundles)) {
    const dir = join(bundleRoot, name)
    mkdirSync(dir, { recursive: true })
    writeFileSync(join(dir, 'package.json'), JSON.stringify({
      name: `@local/${name}`, version: '1.0.0', dsh: { bundle: { patch: './cordis.patch.yml' } },
    }))
    writeFileSync(join(dir, 'cordis.patch.yml'), patch)
  }

  // 测试自包含：始终使用临时假运行时，不依赖本机真实安装（CI 上没有本地 runtime）。
  // 需要额外包时用 runtimePkgs 指定；healthyPatch 用到的两个包默认就在。
  const runtime = join(root, 'runtime')
  const scope = join(runtime, 'node_modules', '@deepseek-ai')
  mkdirSync(scope, { recursive: true })
  const pkgs = [...new Set([
    '@deepseek-ai/dsh',
    '@deepseek-ai/dsh-agent-preset',
    '@deepseek-ai/dsh-persona',
    ...(runtimePkgs ?? []),
  ])]
  for (const p of pkgs) {
    const short = p.replace('@deepseek-ai/', '')
    mkdirSync(join(scope, short), { recursive: true })
    writeFileSync(join(scope, short, 'package.json'), JSON.stringify({ name: p, version: '9.9.9' }))
  }

  const stateDir = join(root, 'state')
  mkdirSync(stateDir, { recursive: true })
  if (stateSeed) writeFileSync(join(stateDir, 'runtime-packages.json'), JSON.stringify(stateSeed, null, 2))

  return { root, runtime, stateDir, home, bundleRoot }
}

function run(fx) {
  const r = spawnSync(process.execPath, [
    AUDIT, '--json',
    '--dsh-home', fx.home,
    '--runtime', fx.runtime,
    '--profiles', 'web',
    '--bundle-root', fx.bundleRoot,
    '--state', fx.stateDir,
  ], { encoding: 'utf8' })
  let parsed = null
  try { parsed = JSON.parse(r.stdout) } catch { /* 报错留给断言处输出 */ }
  return { code: r.status, out: parsed, raw: r.stdout + r.stderr }
}

const cases = []
const test = (name, expectCheck, setup) => cases.push({ name, expectCheck, setup })

const healthyPatch = (rows = '') => `- insert:
    - id: preset-demo
      name: '@deepseek-ai/dsh-agent-preset'
      config:
        id: demo
        name: 演示模式
        plugins:
${rows || "          - id: persona\n            name: '@deepseek-ai/dsh-persona'"}`
const persisted = { dependencies: { '@local/demo': 'link:x' }, dsh: { profile: { bundles: ['@local/demo'] } } }

test('健康状态无报警', null, () => fixture({ bundles: { demo: healthyPatch() }, profilePkg: persisted }))
test('C1 只热启用未持久化', 'C1', () => fixture({
  bundles: { demo: healthyPatch() },
  profilePkg: { dsh: { profile: { bundles: ['@local/demo'] } } },
}))
test('C2 profile 补丁残留 preset 声明', 'C2', () => fixture({
  bundles: { demo: healthyPatch() },
  profilePkg: persisted,
  homePatch: '- insert:\n    - id: preset-demo\n      name: \'@deepseek-ai/dsh-agent-preset\'\n',
}))
test('C3 相对路径插件', 'C3', () => fixture({
  bundles: { demo: healthyPatch("          - id: tools\n            name: './tools.cjs'") },
  profilePkg: persisted,
}))
test('C3 file: 单斜杠前缀', 'C3', () => fixture({
  bundles: { demo: healthyPatch("          - id: tools\n            name: 'file:D:/x.cjs'") },
  profilePkg: persisted,
}))
test('C3 裸盘符路径', 'C3', () => fixture({
  bundles: { demo: healthyPatch("          - id: tools\n            name: 'D:/x.cjs'") },
  profilePkg: persisted,
}))
test('C4 workflow 行缺 provider', 'C4', () => fixture({
  bundles: {
    demo: healthyPatch("          - id: delegation\n            name: cordis:group\n            group: true\n            isolate:\n              workflowEngine: true\n            config:\n              - id: tool-workflow\n                name: '@deepseek-ai/dsh-tool-workflow'"),
  },
  profilePkg: persisted,
}))
test('C5 已知废弃插件', 'C5', () => fixture({
  bundles: { demo: healthyPatch("          - id: old\n            name: '@deepseek-ai/dsh-workflow-worker-thread'") },
  profilePkg: persisted,
}))
test('C6 内核删包且仍被引用', 'C6', () => fixture({
  bundles: { demo: healthyPatch("          - id: tools\n            name: '@deepseek-ai/dsh-gone-tools'") },
  profilePkg: persisted,
  runtimePkgs: ['@deepseek-ai/dsh-agent-preset', '@deepseek-ai/dsh-persona'],
  stateSeed: {
    takenAt: 'seed', version: '0.1.0',
    packages: ['@deepseek-ai/dsh', '@deepseek-ai/dsh-agent-preset', '@deepseek-ai/dsh-persona', '@deepseek-ai/dsh-gone-tools'],
  },
}))

let failed = 0
for (const c of cases) {
  const fx = c.setup()
  try {
    const r = run(fx)
    const checks = (r.out?.errors ?? []).map((f) => f.check)
    const ok = c.expectCheck === null ? checks.length === 0 : checks.includes(c.expectCheck)
    console.log(`${ok ? '✅' : '❌'} ${c.name}${c.expectCheck ? `（期望命中 ${c.expectCheck}）` : ''}`)
    if (!ok) {
      failed++
      console.log('   got checks:', checks.join(',') || '(none)')
      if (!r.out) console.log('   raw:', r.raw.slice(0, 400))
    }
  } finally {
    rmSync(fx.root, { recursive: true, force: true })
  }
}

console.log('')
if (failed) { console.log(`❌ ${failed}/${cases.length} 用例失败`); process.exit(1) }
console.log(`✅ ${cases.length}/${cases.length} 用例通过`)
