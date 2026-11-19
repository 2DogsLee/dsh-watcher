# DSH 升级预告：dsh-v0.2.1-rc.4 → dsh-v0.2.2-rc.5

生成时间：2026-11-19T00:34:17.427Z

- 报告：`archive/0.2.1-rc.4_to_0.2.2-rc.5/report.json`
- registry: 2 个插件

## 一句话结论

**有 4 处必须处理**（相关命中 459 条；另有 455 条低优先/待复核）。

报告总计数：breaking=550，relevant=335，warning=632，info=1930

## 必须处理（相关 breaking 与应对）

| 影响面 | 变更 | 具体改动 | 应对步骤 | 体检项 |
|---|---|---|---|---|
| example-my-preset | `exports-map-changed` | `packages/subagent/tool-subagent-control/package.json` — package.json exports 字段变化，请人工确认入口路径 | 1. 入口路径变化：确认 import 路径仍有效（子路径可能被合并进根入口），改完重装。 | C3 |
| example-my-preset | `doc-removed` | `docs/subsystems/office-to-pdf.md` — 契约文档被删除/改名 | 1. 契约文档被删/改名：在 To 版 docs/ 下找新路径，读迁移说明。 | - |
| example-my-preset | `doc-removed` | `docs/subsystems/office-to-pdf.zh.md` — 契约文档被删除/改名 | 1. 契约文档被删/改名：在 To 版 docs/ 下找新路径，读迁移说明。 | - |
| example-my-preset | `config-field-removed` | `config:@deepseek-ai/dsh-tool-subagent` — 配置字段被删除: modelSelectionSettings（cordis.yml 里写这些字段将失效） | 1. 配置字段已删除：改用新字段（先在 audit-local C3 之后跑 audit-preset-drift 校验字段名），改完重装 bundle。 | C3 / drift 脚本 |

## 符号级 / 待复核（用 scan-plugin.ps1 扫源码确认）

声明型插件（kind=declaration）不直接引用内部导出，ast-* 类变更多为噪声；源码型插件需要逐条看源码扫描结果。

- [warning] `doc-major-rewrite` docs/subsystems/boot.md — 行数 335 -> 480（43%），可能存在行为级变更，建议人工复核
- [warning] `doc-major-rewrite` docs/subsystems/boot.zh.md — 行数 335 -> 480（43%），可能存在行为级变更，建议人工复核
- [warning] `doc-major-rewrite` docs/subsystems/computer-use.md — 行数 36 -> 100（178%），可能存在行为级变更，建议人工复核
- [warning] `doc-major-rewrite` docs/subsystems/computer-use.zh.md — 行数 36 -> 100（178%），可能存在行为级变更，建议人工复核
- [warning] `doc-major-rewrite` docs/subsystems/filesystem.md — 行数 445 -> 590（33%），可能存在行为级变更，建议人工复核
- [warning] `doc-major-rewrite` docs/subsystems/filesystem.zh.md — 行数 445 -> 590（33%），可能存在行为级变更，建议人工复核
- [info] `doc-added` docs/subsystems/forge.md — 新增文档
- [info] `doc-added` docs/subsystems/forge.zh.md — 新增文档
- [info] `doc-added` docs/subsystems/liveshare.md — 新增文档
- [info] `doc-added` docs/subsystems/liveshare.zh.md — 新增文档
- [warning] `doc-major-rewrite` docs/subsystems/mcp.md — 行数 94 -> 173（84%），可能存在行为级变更，建议人工复核
- [warning] `doc-major-rewrite` docs/subsystems/mcp.zh.md — 行数 94 -> 173（84%），可能存在行为级变更，建议人工复核
- [info] `doc-added` docs/subsystems/office-kit.md — 新增文档
- [info] `doc-added` docs/subsystems/office-kit.zh.md — 新增文档
- [warning] `doc-major-rewrite` docs/subsystems/schedule.md — 行数 449 -> 227（49%），可能存在行为级变更，建议人工复核
- [warning] `doc-major-rewrite` docs/subsystems/schedule.zh.md — 行数 449 -> 227（49%），可能存在行为级变更，建议人工复核
- [warning] `doc-major-rewrite` docs/subsystems/session-projection.md — 行数 313 -> 438（40%），可能存在行为级变更，建议人工复核
- [warning] `doc-major-rewrite` docs/subsystems/session-projection.zh.md — 行数 313 -> 438（40%），可能存在行为级变更，建议人工复核
- [warning] `doc-major-rewrite` docs/subsystems/token-meter.md — 行数 86 -> 126（47%），可能存在行为级变更，建议人工复核
- [warning] `doc-major-rewrite` docs/subsystems/token-meter.zh.md — 行数 86 -> 126（47%），可能存在行为级变更，建议人工复核
- [warning] `doc-major-rewrite` docs/subsystems/web.md — 行数 167 -> 221（32%），可能存在行为级变更，建议人工复核
- [warning] `doc-major-rewrite` docs/subsystems/web.zh.md — 行数 167 -> 221（32%），可能存在行为级变更，建议人工复核
- [warning] `doc-major-rewrite` docs/subsystems/working-directory.md — 行数 45 -> 68（51%），可能存在行为级变更，建议人工复核
- [warning] `doc-major-rewrite` docs/subsystems/working-directory.zh.md — 行数 45 -> 68（51%），可能存在行为级变更，建议人工复核
- [warning] `doc-major-rewrite` docs/subsystems/worktrees.md — 行数 56 -> 148（164%），可能存在行为级变更，建议人工复核
- [warning] `doc-major-rewrite` docs/subsystems/worktrees.zh.md — 行数 56 -> 148（164%），可能存在行为级变更，建议人工复核
- [info] `config-scope-added` config:@deepseek-ai/dsh-tool-subagent-control — 新增可配置包
- [warning] `ast-signature-changed` packages/workspace/workspace — 签名变化: Events
    旧: interface Events { /** * Ask the composed providers what still runs for a session before it is * archived. A listener prepends its own {@link SessionActivity} entries to * the result of `next()`; the registry's innermost callback returns an * empty list, so a composition without providers archives freely. Any * non-empty result refuses the archive without a write. * @param request - the session about to be archived. * @param next - delegate to the remaining providers. * @mode waterfall */ 'workspace/session-activity'( request: SessionActivityRequest, next: () => Promise<readonly SessionActivity[]>, ): Promise<readonly SessionActivity[]> /** * Stop a session's running work because the caller archived it with * `stopActivity`; the archive set is durable when this dispatches. Each * provider stops its own families — cancelling a turn, its subagent * descendants, owned jobs, or active schedules — through the same cancel * paths the user's own stop actions use, so the session log ends every * open turn regularly and a later unarchive can continue the * conversation. Listeners issue their stop requests without waiting for * running work to settle; a listener may await its own durability * barrier. A rejection is logged by the registry and does not undo the * archive. * @param request - the session being archived. * @mode parallel */ 'workspace/session-stop'(request: SessionActivityRequest): Promise<void> | void }
    新: interface Events { /** * Ask the composed providers what still runs for a session before it is * archived. A listener prepends its own {@link SessionActivity} entries to * the result of `next()`; the registry's innermost callback returns an * empty list, so a composition without providers archives freely. Any * non-empty result refuses the archive without a write. * @param request - the session about to be archived. * @param next - delegate to the remaining providers. * @mode waterfall */ 'workspace/session-activity'( request: SessionActivityRequest, next: () => Promise<readonly SessionActivity[]>, ): Promise<readonly SessionActivity[]> /** * Stop a session's running work because the caller archived it with * `stopActivity`; the archive set is durable when this dispatches. Each * provider stops its own families — cancelling a turn, its subagent * descendants, owned jobs, or active schedules — through the same cancel * paths the user's own stop actions use, so the session log ends every * open turn regularly and a later unarchive can continue the * conversation. Listeners issue their stop requests without waiting for * running work to settle; a listener may await its own durability * barrier. A rejection is logged by the registry and does not undo the * archive. * @param request - the session being archived. * @mode parallel */ 'workspace/session-stop'(request: SessionActivityRequest): Promise<void> | void /** * Admit optional follow-up work after durable archival and any stop requests. * Dispatched inside the registry's write queue: a listener registers its work * and returns, and runs the work and any unbounded I/O afterwards. Listener * failures are logged without undoing archival. Listeners own and drain their background work. * @param request - newly archived Session; repeated archive requests do not dispatch. * @mode parallel */ 'workspace/session-archived'(request: SessionActivityRequest): Promise<void> | void /** * Cancel or settle archive follow-up work before making a Session available again. * A rejection retains the archived state. * @param request - Session about to leave the archive set. * @mode parallel */ 'workspace/session-unarchiving'(request: SessionActivityRequest): Promise<void> | void }
- [breaking] `ast-export-removed` packages/boot/plugin-manager — 导出（含 re-export）删除: protectedModules（原声明于 packages/boot/plugin-manager/src/index.ts）
- [warning] `ast-signature-changed` packages/experimental/plugin-recommendations — 签名变化: refused
    旧: function(problem:PluginInspectProblem,reason:string)
    新: function(reason:string)
- [breaking] `ast-export-removed` packages/boot/plugin-manager — 导出（含 re-export）删除: refusedBy（原声明于 packages/boot/plugin-manager/src/index.ts）
- [warning] `ast-signature-changed` packages/bundle/headless — 签名变化: AdoptableHeader
    旧: interface AdoptableHeader { cwd?: string | undefined origin?: 'subagent' | undefined parentSession?: SessionId | undefined agentPreset?: string | undefined }
    新: interface AdoptableHeader { cwd?: string | undefined origin?: 'subagent' | undefined agentPreset?: string | undefined }
- [warning] `ast-signature-changed` packages/client/modules — 签名变化: PkgMeta
    旧: interface PkgMeta extends WebBootRowFields { clientPath: string }
    新: interface PkgMeta extends WebBootRowFields { clientPath: string /** The package's own manifest; package-asset requests resolve against it as a self-reference. */ manifestPath: string }
- [warning] `ast-signature-changed` packages/client/modules — 签名变化: ClientPackageSource
    旧: interface ClientPackageSource extends ResolvedPkgMeta { /** Loader specifier from the active row. */ loaderName: string /** Resolution base of the config tree that owns the row. */ baseUrl: string /** Stable cache and contribution key for this source. */ sourceKey: string }
    新: interface ClientPackageSource extends ResolvedPkgMeta { /** Loader specifier from the active row. */ loaderName: string /** Resolution base of the config tree that owns the row. */ baseUrl: string /** Stable source identity and contribution key. */ sourceKey: string }
- [breaking] `ast-export-removed` packages/client/modules — 导出（含 re-export）删除: sourceKey（原声明于 packages/client/modules/src/index.ts）
- [warning] `ast-signature-changed` packages/boot/plugin-market — 签名变化: sources
    旧: var:ClientPackageSource[]
    新: var
- [warning] `ast-signature-changed` packages/core/agent — 签名变化: CreateAgentOptions
    旧: export interface CreateAgentOptions { /** The live agent/session identity. */ readonly sessionId: SessionId /** Live parent Agent for runtime ownership; omit for a root Agent. */ readonly parentAgent?: Agent /** * Session creation metadata: validated absolute `cwd`, `parentSession` * fork lineage, the `isSeeded` fork marker, the coarse `origin` * classification, and the `delegationDepth` recursion budget. Mirrors the * `cwd`/`parentSession`/`isSeeded`/`origin`/`delegationDepth` fields of * {@link CreateSessionOptions.meta} in dsh-session (the internal-only * `createdAt`, used when reconstructing a persisted session, is deliberately * excluded — a factory caller never sets it). This is durable session data, * so the session boundary validates and snapshots it before asynchronous * setup begins. */ readonly meta?: { readonly cwd?: string readonly parentSession?: SessionId readonly isSeeded?: boolean readonly origin?: 'subagent' readonly delegationDepth?: number readonly agentPreset?: string } /** Exact fork-inherited prefix length when the session metadata sets `isSeeded`. */ readonly inheritedEventCount?: SessionLogOffset /** * Initial replay/fork history, contiguous from seq 0 with lossless-JSON data. * A fork supplies an exact parent prefix, its inherited marker, and closers * for the open tail. Previously closed steps and turns remain unchanged. * The factory validates and snapshots the seed before publication. */ readonly seed?: readonly SessionEvent[] /** Per-agent options (model, …). */ readonly agentOptions?: AgentOptions /** Optional creation-only cancellation signal; detached before the returned handle becomes visible. */ readonly signal?: AbortSignal /** * Creation-time composition of the agent's scoped world. The factory awaits * setup after minting `agentCtx` but BEFORE inserting or announcing either * the session or agent, so observers can never see a partially configured * world. Setup may return an {@link AgentSetupCommit}; the factory invokes its * synchronous `commit()` after every setup await settles and immediately * before registry publication. This lets mutable provisioning revalidate at * the exact publication boundary. Everything registered through `agentCtx` * (scoped tools, prompt sections/variables, `restrict()`, listeners, awaited * child plugins) exists before `session/created`, `agent/created`, * and the first prompt assembly. A setup * throw/rejection, commit throw, or owner disposal rolls the scope back * without publishing either id. * * **Setup composes, it never drives**: the callback is trusted same-process * code and receives the full scoped context, so this is a contract rather * than a runtime restriction. Drive the agent only after creation resolves. */ readonly setup?: AgentSetup }
    新: export interface CreateAgentOptions { /** The live agent/session identity. */ readonly sessionId: SessionId /** * Session creation metadata: validated absolute `cwd`, `parentSession` * fork lineage, the `isSeeded` fork marker, the coarse `origin` * classification, and the `delegationDepth` recursion budget. Mirrors the * `cwd`/`parentSession`/`isSeeded`/`origin`/`delegationDepth` fields of * {@link CreateSessionOptions.meta} in dsh-session (the internal-only * `createdAt`, used when reconstructing a persisted session, is deliberately * excluded — a factory caller never sets it). This is durable session data, * so the session boundary validates and snapshots it before asynchronous * setup begins. */ readonly meta?: { readonly cwd?: string readonly parentSession?: SessionId readonly isSeeded?: boolean readonly origin?: 'subagent' readonly delegationDepth?: number readonly agentPreset?: string } /** Exact fork-inherited prefix length when the session metadata sets `isSeeded`. */ readonly inheritedEventCount?: SessionLogOffset /** * Initial replay/fork history, contiguous from seq 0 with lossless-JSON data. * A fork supplies an exact parent prefix, its inherited marker, and closers * for the open tail. Previously closed steps and turns remain unchanged. * The factory validates and snapshots the seed before publication. */ readonly seed?: readonly SessionEvent[] /** Route fallback and output controls; see {@link AgentOptions} for live accessor semantics. */ readonly agentOptions?: AgentOptions /** Optional creation-only cancellation signal; detached before the returned handle becomes visible. */ readonly signal?: AbortSignal /** * Creation-time composition of the agent's scoped world. The factory awaits * setup after minting `agentCtx`, entering the SessionStore, and completing * `session/created`. The Session * accepts live events during setup; the Agent remains outside its registry * until setup completes. Agent creation is announced after setup. Setup may return an {@link AgentSetupCommit}; the factory invokes its * synchronous `commit()` after every setup await settles and immediately * before registry publication. This lets mutable provisioning revalidate at * the exact publication boundary. Everything registered through `agentCtx` * (scoped tools, prompt sections/variables, `restrict()`, listeners, awaited * child plugins) exists before `agent/created`, * and the first prompt assembly. A setup * throw/rejection, commit throw, or owner disposal rolls the scope back * without announcing Agent creation. Already committed Session events remain stored. * * **Setup composes, it never drives**: the callback is trusted same-process * code and receives the full scoped context, so this is a contract rather * than a runtime restriction. Drive the agent only after creation resolves. */ readonly setup?: AgentSetup }
- [warning] `ast-signature-changed` packages/client/modules — 签名变化: headers
    旧: var
    新: var:Record<string, string>
- [breaking] `ast-export-removed` packages/credentials/deepseek-account — 导出（含 re-export）删除: desktopClientHeaders（原声明于 packages/credentials/deepseek-account/src/index.ts）
- [breaking] `ast-export-removed` packages/credentials/deepseek-account — 导出（含 re-export）删除: platformClientHeaders（原声明于 packages/credentials/deepseek-account/src/index.ts）
- …（其余 415 条见 report.md）

## 升级演练（静态报告覆盖不到的部分）

```powershell
# 1) 升级前存基线：runtime 包清单 + 当前挂载链路
node scripts/audit-local.mjs
# 2) 升级后立即重跑：C6 自动 diff 出内核删了哪些包
node scripts/audit-local.mjs --report <本报告 report.json> --registry registry.json
# 3) 花名册仍报加载失败时：悬停卡片拿诊断，对照 docs/runtime-audit.md 的故障表
```

体检项速查：C1 manifest 半持久化 / C2 补丁层遮蔽 / C3 插件名解析 / C4 workflowEngine provider / C5 已知废弃 / C6 内核删包 / C7 注册表交叉。

> 本文件由 `scripts/prepare-impact.mjs` 生成；应对步骤是启发式指引，替代 API 需以上游代码/文档为证据，不在此猜测。
