// dsh-api-watch host plugin
// 主进程侧只做一件事：把随包分发的 dsh-api-watch skill 注册为 ctx.skills 的
// provider，用户无需手动复制到 ~/.dsh/skills 即可在会话中使用该 skill。
// 真正的比对引擎（scripts/diff-api.ps1 / scan-plugin.ps1）由 skill 规程驱动，
// 通过 git + PowerShell 在本地运行，插件本身不做任何网络请求。
import { readFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
export const name = 'dsh-api-watch'
export const Config = null

const DESCRIPTION =
  '升级 DeepSeek Harness 前自动比对插件 API 面并扫描你的插件，产出改动点/风险点影响分析与迁移建议。' +
  'Detect DeepSeek Harness breaking changes and run an upgrade impact analysis for your plugin.'

export async function apply(ctx) {
  // ctx.skills 可能因宿主版本或挂载 profile 而不可用——全部降级为告警，绝不阻断启动
  if (!ctx?.skills?.register) {
    console.warn('dsh-api-watch: ctx.skills registry unavailable; skill not registered. Fall back to manual install: copy skill/SKILL.md to ~/.dsh/skills/dsh-api-watch/')
    return
  }

  let body = null
  try {
    body = await readFile(join(__dirname, 'skill', 'SKILL.md'), 'utf8')
  } catch (e) {
    console.warn(`dsh-api-watch: cannot read bundled skill/SKILL.md: ${e.message}`)
    return
  }

  try {
    ctx.skills.register({
      name: 'dsh-api-watch-bundled',
      async list() {
        return [{
          name: 'dsh-api-watch',
          description: DESCRIPTION,
          invocation: { modelInvocable: true, userInvocable: true },
          source: 'bundled',
          provider: name,
          rank: 450,
          locator: 'bundled-skill',
        }]
      },
      async get(candidate) {
        if (candidate?.locator !== 'bundled-skill') return undefined
        // frontmatter 保留在 body 内，宿主各消费端自行解析
        return {
          name: 'dsh-api-watch',
          description: DESCRIPTION,
          invocation: { modelInvocable: true, userInvocable: true },
          source: 'bundled',
          provider: name,
          body,
        }
      },
    })
  } catch (e) {
    console.warn(`dsh-api-watch: skill provider registration failed (${e.message}); skill remains installable via ~/.dsh/skills/dsh-api-watch/`)
  }
}
