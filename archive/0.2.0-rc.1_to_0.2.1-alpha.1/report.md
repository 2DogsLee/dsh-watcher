# DSH 插件 API 面比对：`dsh-v0.2.0-rc.1` → `dsh-v0.2.1-alpha.1`

> 生成于 2026-10-08T10:19:35.1188044Z · 工具 dsh-api-watch v1（启发式， breaking 结论建议复核 diff）

| 级别 | 数量 |
|---|---|
| breaking | 24 |
| warning | 88 |
| info | 281 |
| ★ 与我相关 | 1 |

## ★ 优先关注：与你插件相关的 breaking / warning

- **[package-removed]** `packages/experimental/schedule-bundle` — 包被移除或不再是独立包

## breaking

- ★ **[package-removed]** `packages/experimental/schedule-bundle` — 包被移除或不再是独立包
- **[package-removed]** `packages/runtime-diagnostics/invariants` — 包被移除或不再是独立包
- **[doc-removed]** `docs/subsystems/invariants.md` — 契约文档被删除/改名
- **[doc-removed]** `docs/subsystems/invariants.zh.md` — 契约文档被删除/改名
- **[config-scope-removed]** `config:@deepseek-ai/dsh-invariants` — 该包从配置目录移除，其 cordis.yml config 块不再可用
- **[ast-export-removed]** `packages/boot/hmr` — 导出（含 re-export）删除: activated（原声明于 packages/boot/hmr/src/index.ts）
- **[ast-export-removed]** `packages/boot/hmr` — 导出（含 re-export）删除: replacementRuntime（原声明于 packages/boot/hmr/src/index.ts）
- **[ast-export-removed]** `packages/credentials/authorization` — 导出（含 re-export）删除: invariantFailure（原声明于 packages/credentials/authorization/src/index.ts）
- **[ast-export-removed]** `packages/llm/plugin-package-inventory-deepseek` — 导出（含 re-export）删除: presetTree（原声明于 packages/llm/plugin-package-inventory-deepseek/src/index.ts）
- **[ast-export-removed]** `packages/runtime-diagnostics/invariants` — 导出（含 re-export）删除: InvariantFailure（原声明于 packages/runtime-diagnostics/invariants/src/index.ts）
- **[ast-export-removed]** `packages/runtime-diagnostics/invariants` — 导出（含 re-export）删除: InvariantInstaller（原声明于 packages/runtime-diagnostics/invariants/src/index.ts）
- **[ast-export-removed]** `packages/runtime-diagnostics/invariants` — 导出（含 re-export）删除: PendingInvariantRegistration（原声明于 packages/runtime-diagnostics/invariants/src/index.ts）
- **[ast-export-removed]** `packages/runtime-diagnostics/invariants` — 导出（含 re-export）删除: InvariantError（原声明于 packages/runtime-diagnostics/invariants/src/index.ts）
- **[ast-export-removed]** `packages/runtime-diagnostics/invariants` — 导出（含 re-export）删除: compilePatterns（原声明于 packages/runtime-diagnostics/invariants/src/index.ts）
- **[ast-export-removed]** `packages/runtime-diagnostics/invariants` — 导出（含 re-export）删除: InvariantRegistry（原声明于 packages/runtime-diagnostics/invariants/src/index.ts）
- **[ast-export-removed]** `packages/runtime-diagnostics/invariants` — 导出（含 re-export）删除: installInvariant（原声明于 packages/runtime-diagnostics/invariants/src/index.ts）
- **[ast-signature-changed]** `packages/client/ui-primitives/src/Input.tsx` — 签名变化: Input
    旧: function({ icon, className, ...rest }:{ icon?: ReactNode className?: string } & InputHTMLAttributes<HTMLInputElement>)
    新: var
- **[ast-export-removed]** `packages/experimental/inspector/src/host/plugin.ts` — 导出（含 re-export）删除: disposeInspector（原声明于 packages/experimental/inspector/src/host/plugin.ts）
- **[ast-export-removed]** `packages/preset/agent-preset-registry/src/mount.ts` — 导出（含 re-export）删除: livePresetMounts（原声明于 packages/preset/agent-preset-registry/src/mount.ts）
- **[ast-export-removed]** `packages/preset/agent-preset-registry/src/mount.ts` — 导出（含 re-export）删除: JoinedPresetMount（原声明于 packages/preset/agent-preset-registry/src/mount.ts）
- **[ast-export-removed]** `packages/preset/agent-preset-registry/src/mount.ts` — 导出（含 re-export）删除: standingMountFor（原声明于 packages/preset/agent-preset-registry/src/mount.ts）
- **[ast-export-removed]** `packages/preset/agent-preset-registry/src/mount.ts` — 导出（含 re-export）删除: agentKey（原声明于 packages/preset/agent-preset-registry/src/mount.ts）
- **[ast-export-removed]** `packages/preset/agent-preset-registry/src/mount.ts` — 导出（含 re-export）删除: standingKey（原声明于 packages/preset/agent-preset-registry/src/mount.ts）
- **[ast-export-removed]** `packages/preset/agent-preset-registry/src/mount.ts` — 导出（含 re-export）删除: serviceForAgent（原声明于 packages/preset/agent-preset-registry/src/mount.ts）

## warning

- **[exports-map-changed]** `packages/client/hmr/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/modules/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-renderer/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/compaction/compaction/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/context/time-context/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/core/agent/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/core/agent-loop/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/core/scope/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/core/session/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/core/system-prompt/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/core/tools/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/credentials/authorization/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/credentials/credentials/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/experimental/agent-team/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/experimental/inspector/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/fs/fs/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/goal/goal/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/goal/goal-round-driver/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/hooks/hook-protocol/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/interaction/commands/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/interaction/permission-presets/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/interaction/user-approval/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/interaction/user-questions/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/jobs/jobs/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/llm/llm/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/llm/llm-retry/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/plan/plan-mode/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/preset/agent-preset-registry/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/sandbox/sandbox-policy/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/schedule/schedule/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/session/session-log-deepseek/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/session/session-title/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/storage/storage-domain/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/subagent/subagent/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/subagent/tool-subagent/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/todo/tool-todo/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/webhook/webhook/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/workflow/tool-workflow/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/workflow/workflow/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/workspace/workspace/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[doc-major-rewrite]** `docs/subsystems/user-questions.md` — 行数 141 -> 250（77%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/user-questions.zh.md` — 行数 141 -> 250（77%），可能存在行为级变更，建议人工复核
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.1.7-rc.2/schedule-optional-bundle/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.1.7-rc.2/schedule-optional-bundle/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.1.7-rc.2/transcript-view-legacy-normal/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.1.7-rc.2/transcript-view-legacy-normal/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.0-rc.2/account-sign-in-errors/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.0-rc.2/account-sign-in-errors/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.0-rc.2/remove-runtime-invariants/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.0-rc.2/remove-runtime-invariants/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.0-rc.2/schedule-bundle-retired/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.0-rc.2/schedule-bundle-retired/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.0-rc.2/subpath-plugin-display-manifest/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.0-rc.2/subpath-plugin-display-manifest/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[ast-signature-changed]** `packages/schedule/tool-schedule` — 签名变化: internalError
    旧: function(detail:string)
    新: function()
- **[ast-signature-changed]** `packages/api/gateway` — 签名变化: RemoteEventClient
    旧: interface RemoteEventClient { readonly id: RemoteEventClientId readonly queue: RemoteEventQueue readonly deliveries: Map<RemoteEventId, PendingRemoteEvent> }
    新: interface RemoteEventClient { readonly id: RemoteEventClientId readonly queue: RemoteEventQueue readonly signal: AbortSignal readonly deliveries: Map<RemoteEventId, PendingRemoteEvent> }
- **[ast-signature-changed]** `packages/boot/hmr` — 签名变化: Reload
    旧: export interface Reload { filename: string runtime?: Plugin.Runtime | undefined }
    新: export interface Reload { filename: string /** Original namespaces and URLs of all entry modules participating in this runtime replacement. */ modules: ReloadModules runtime?: Plugin.Runtime | undefined }
- **[ast-signature-changed]** `packages/boot/hmr` — 签名变化: attempts
    旧: var:Array<(typeof generations)[number] & { replacement: Plugin }>
    新: var:ReloadAttempt[]
- **[ast-signature-changed]** `packages/boot/hmr` — 签名变化: callbacks
    旧: var:SessionCallback[] | undefined
    新: var
- **[ast-signature-changed]** `packages/experimental/claude-code-mods` — 签名变化: submitted
    旧: var
    新: var:PromptSubmitResult
- **[ast-signature-changed]** `packages/experimental/claude-code-mods` — 签名变化: registrations
    旧: var:AdapterRegistration[]
    新: var
- **[ast-signature-changed]** `packages/llm/plugin-package-inventory-deepseek` — 签名变化: ActiveEntry
    旧: interface ActiveEntry { readonly entry: Entry /** Bare-package base used by the Loader path that activated this entry. */ readonly bareBaseUrl?: string }
    新: interface ActiveEntry { readonly moduleName: string readonly baseUrl?: string /** Bare-package base used by the Loader path that activated this entry. */ readonly bareBaseUrl?: string }
- **[ast-signature-changed]** `packages/llm/plugin-package-inventory-deepseek` — 签名变化: activeEntries
    旧: function(tree:EntryTree,?rootBareBaseUrl:string)
    新: function(tree:EntryTree)
- **[ast-signature-changed]** `packages/subagent/tool-subagent` — 签名变化: mounted
    旧: var
    新: var:{ subagentProvider: SubagentProvider; disposeTool: () => void } | undefined
- **[ast-signature-changed]** `packages/interaction/user-questions` — 签名变化: reply
    旧: var:unknown
    新: var
- **[ast-signature-changed]** `packages/api/gateway/src/types.ts` — 签名变化: TypertGateway
    旧: export interface TypertGateway { /** Carrier adapter shared by WebSocket and in-process transports. */ readonly wireStream: TypertGatewayWireStream /** * Register the application-selected forwarded-event source. * @param source - stream factory installed by the Remote assembly. * @param host - stable Host facts included in each Client generation's opening frame. * @returns disposer removing this exact source and cancelling its active streams. */ registerRemoteEvents( source: TypertRemoteEventSource, host: RemoteEventHostInfo, ): () => Promise<void> /** * Invoke one live Remote method without assuming a carrier or response envelope. * @param request - decoded endpoint and named wire arguments. * @returns the business result without output decoding. * @throws {@link TypertGatewayError} for dispatch, provider, or boundary failures; lookup-policy and business errors retain identity. */ invoke(request: InvokeRemoteRequest): Promise<unknown> /** * Open one live stream Remote method without assuming a physical carrier. * @param request - decoded endpoint, named wire arguments, and the Client uplink when the carrier has one. * @returns a cancellation-aware iterable over the business results. */ stream(request: InvokeRemoteRequest): Promise<AsyncIterable<unknown>> }
    新: export interface TypertGateway { /** Carrier adapter shared by WebSocket and in-process transports. */ readonly wireStream: TypertGatewayWireStream /** * Check for an active Client event stream. * @returns whether a stream is open and has not been cancelled. */ hasLiveClient(): boolean /** * Register the application-selected forwarded-event source. * @param source - stream factory installed by the Remote assembly. * @param host - stable Host facts included in each Client generation's opening frame. * @returns disposer removing this exact source and cancelling its active streams. */ registerRemoteEvents( source: TypertRemoteEventSource, host: RemoteEventHostInfo, ): () => Promise<void> /** * Invoke one live Remote method without assuming a carrier or response envelope. * @param request - decoded endpoint and named wire arguments. * @returns the business result without output decoding. * @throws {@link TypertGatewayError} for dispatch, provider, or boundary failures; lookup-policy and business errors retain identity. */ invoke(request: InvokeRemoteRequest): Promise<unknown> /** * Open one live stream Remote method without assuming a physical carrier. * @param request - decoded endpoint, named wire arguments, and the Client uplink when the carrier has one. * @returns a cancellation-aware iterable over the business results. */ stream(request: InvokeRemoteRequest): Promise<AsyncIterable<unknown>> }
- **[ast-signature-changed]** `packages/experimental/claude-code-mods` — 签名变化: textOf
    旧: function(value:unknown,path:string)
    新: function(blocks:readonly ContentBlock[])
- **[ast-signature-changed]** `packages/boot/plugin-manager/src/types.ts` — 签名变化: BundleInfo
    旧: export interface BundleInfo { name: string version?: string /** Local display text with available translations or literal fallbacks, or a metadata diagnostic. */ meta?: PluginLocalizedMeta /** Untranslated `description` of this bundle's package manifest. */ description?: string /** Selected in the profile manifest; a load error means its layer was skipped. */ enabled: boolean /** Whether the profile's own dependencies hold the package; false for a bundle the dsh installation supplies. */ installed: boolean /** * Whether the installation ships the bundle for the person to switch on: named by the launcher's `OPTIONAL_BUNDLES`, * held by the installation's dependencies, selected by no shipped template, and never removable. */ optional: boolean removable: boolean readOnlyReason?: ReadOnlyReason error?: ManagementError /** The rows the bundle's patch inserts, in declaration order; empty when the patch cannot be read. */ rows: BundleRowInfo[] /** Ids of rows the bundle's patch changes without declaring them: the built-in rows it configures or disables. */ overrides: string[] }
    新: export interface BundleInfo { name: string version?: string /** Local display text with available translations or literal fallbacks, or a metadata diagnostic. */ meta?: PluginLocalizedMeta /** Untranslated `description` of this bundle's package manifest. */ description?: string /** Selected in the profile manifest; a load error means its layer was skipped. */ enabled: boolean /** Whether the profile's own dependencies hold the package; false for a bundle the dsh installation supplies. */ installed: boolean /** * Present for a profile dependency the installation does not also supply: the spec `pnpm add` accepts, with local * paths made absolute and the user information of an http(s) URL removed. */ source?: string /** * Whether the installation ships the bundle for the person to switch on: named by the launcher's `OPTIONAL_BUNDLES`, * held by the installation's dependencies, selected by no shipped template, and never removable. */ optional: boolean removable: boolean readOnlyReason?: ReadOnlyReason error?: ManagementError /** The rows the bundle's patch inserts, in declaration order; empty when the patch cannot be read. */ rows: BundleRowInfo[] /** Ids of rows the bundle's patch changes without declaring them: the built-in rows it configures or disables. */ overrides: string[] }
- **[ast-signature-changed]** `packages/boot/plugin-manager/src/types.ts` — 签名变化: ChangeResult
    旧: export interface ChangeResult { changed: boolean /** `cancelled` is an installation the caller stopped, its files restored. */ application: 'applied' | 'restart-required' | 'overridden' | 'failed' | 'cancelled' /** Last attempted step; successful installation can proceed to enablement. */ stage: 'install' | 'enable' | 'remove' target: string enabled?: boolean error?: ManagementError /** Pre-existing inactive entries the operation left as they were. */ warnings?: string[] packageResult?: PackageResult /** The bundle an installation added, once pnpm and the bundle check accepted it. */ bundle?: string /** Exact package names awaiting explicit script approval in the profile's pnpm settings, read after a failed run. */ pendingBuilds?: string[] /** Package script permissions saved before this installation attempt. */ approvedBuilds?: string[] /** The registries the installation asked, in order; `packageResult` is the last one's run. */ registries?: Registry[] /** * What the last failed run could not reach or get an answer from: the registry it asked, or the host a git or * tarball spec is fetched from, which no registry stands in for; absent for a failure neither explains. */ failedAt?: 'registry' | 'spec-host' }
    新: export interface ChangeResult { changed: boolean /** `cancelled` is an installation the caller stopped, its files restored. */ application: 'applied' | 'restart-required' | 'overridden' | 'failed' | 'cancelled' /** Last attempted step; successful installation can proceed to enablement. */ stage: 'install' | 'enable' | 'remove' target: string enabled?: boolean error?: ManagementError /** Pre-existing inactive entries the operation left as they were. */ warnings?: string[] packageResult?: PackageResult /** The bundle an installation added, once pnpm and the bundle check accepted it. */ bundle?: string /** The installed bundle's manifest version, when declared; pnpm's `minimumReleaseAge` can make it older than the newest release. */ version?: string /** Exact package names awaiting explicit script approval in the profile's pnpm settings, read after a failed run. */ pendingBuilds?: string[] /** Package script permissions saved before this installation attempt. */ approvedBuilds?: string[] /** The registries the installation asked, in order; `packageResult` is the last one's run. */ registries?: Registry[] /** * What the last failed run could not reach or get an answer from: the registry it asked, or the host a git or * tarball spec is fetched from, which no registry stands in for; absent for a failure neither explains. */ failedAt?: 'registry' | 'spec-host' }
- **[ast-signature-changed]** `packages/schedule/tool-schedule` — 签名变化: invalid
    旧: function(spec:string,reason:string)
    新: var
- **[ast-signature-changed]** `packages/experimental/claude-code-mods` — 签名变化: ops
    旧: var:LayoutOp[]
    新: var
- **[ast-signature-changed]** `packages/core/agent/src/runtime-types.ts` — 签名变化: Agent
    旧: interface Agent { /** The provider route and model this agent's requests use. */ readonly options: AgentOptions /** The live session this agent drives; its log is the durable source of truth. */ readonly session: Session /** Agent-owned access to durable pending work. */ readonly inbox: Inbox /** The current lifecycle state, mirrored on every `agent/status` transition. */ readonly status: AgentStatus /** Agent-scoped context; its contributions are agent-local, unwind on disposal, and reject registration afterward. */ readonly ctx: Context /** * Clear queued and steering work — unless `keepInbox` — and abort the active * turn or between-turn task. The first cause wins for that activity. With no * active activity, cancellation is a no-op and does not arm later work. * @param cause - the stable caller intent carried by the active operation signal. * @param options - cancellation options; `keepInbox` preserves pending work. */ cancel(cause: AgentCancelCause, options?: CancelOptions): void /** * Resolve after the current whole-agent activity reaches quiescence. This * follows replacement work started before the observed driver retires, * but does not identify the settlement of any particular message. * @returns fulfillment after no active driver or maintenance task remains. */ whenIdle(): Promise<void> /** * Run one non-turn maintenance task from the true idle phase. The task starts * synchronously after claiming that phase; later waking input remains in the * inbox until the task settles, while public status stays `idle`. * `whenIdle()` follows both the task and any waking work released behind it. * @param task - operation whose fulfillment or rejection is preserved, with a signal aborted by {@link cancel}. * @throws synchronously when turn-driving or another maintenance task already owns the agent. * @returns the task promise. */ runMaintenance<T>(task: (signal: AbortSignal) => Promise<T>): Promise<T> /** * Route identified input to an inbox boundary and optionally wake the driver. * Waking input submitted after active cancellation is queued for the next * turn and runs when the aborted activity converges to idle; a `disposed` * cancel leaves it parked. A wake submitted while already idle always opens * its turn boundary, even when its message is cleared before the driver * claims ([cancel-convergence wake latch](../../../../.agents/notes/implemented/bug-fix/2026-08-07-cancel-convergence-wake-latch.md)). * @param message - identified content and the source that supplied it. * @param target - the preferred next-turn or next-step inbox boundary. * @param wakeup - whether delivery may wake the driver. */ send(message: UserMessage, target: InboxTarget, wakeup: boolean): void /** * Queue an ordinary follow-up turn and wake the driver. The item becomes the * sole ordinary message of its own turn. * @param message - identified prompt content and the source that supplied it. */ followup(message: UserMessage): void /** * Submit steering for the nearest step. An idle driver starts a turn; * a running driver consumes it at its next step boundary. * A rejected step leaves steering parked in the inbox until the next * wake; cancellation or disposal may discard pending steering. * @param message - identified steering content and the source that supplied it. */ steer(message: UserMessage): void /** * Queue model-facing context for the next pre-step without waking the * driver. A running driver claims it at the nearest later step boundary; * idle drivers leave it pending until follow-up or steering * wakes them. It may miss a request whose pre-step already claimed its * batch. Cancellation or disposal may discard pending context. * @param message - identified injected context and the source that supplied it. */ inject(message: UserMessage): void }
    新: interface Agent { /** The provider route and model this agent's requests use. */ readonly options: AgentOptions /** The live session this agent drives; its log is the durable source of truth. */ readonly session: Session /** Agent-owned access to durable pending work. */ readonly inbox: Inbox /** The current lifecycle state, mirrored on every `agent/status` transition. */ readonly status: AgentStatus /** Agent-scoped context; its contributions are agent-local, unwind on disposal, and reject registration afterward. */ readonly ctx: Context /** * Clear queued and steering work — unless `keepInbox` — and abort the active * turn or between-turn task. The first cause wins for that activity. With no * active activity, cancellation is a no-op and does not arm later work. * @param cause - the stable caller intent carried by the active operation signal. * @param options - cancellation options; `keepInbox` preserves pending work. */ cancel(cause: AgentCancelCause, options?: CancelOptions): void /** * Resolve after the current whole-agent activity reaches quiescence. This * follows replacement work started before the observed driver retires, * but does not identify the settlement of any particular message. * @returns fulfillment after no active driver or maintenance task remains. */ whenIdle(): Promise<void> /** * Run one non-turn maintenance task from the true idle phase. The task starts * synchronously after claiming that phase; later waking input remains in the * inbox until the task settles, while public status stays `idle`. * `whenIdle()` follows both the task and any waking work released behind it. * @param task - operation whose fulfillment or rejection is preserved, with a signal aborted by {@link cancel}. * @throws synchronously when turn-driving or another maintenance task already owns the agent. * @returns the task promise. */ runMaintenance<T>(task: (signal: AbortSignal) => Promise<T>): Promise<T> /** * Route identified input to an inbox boundary and optionally wake the driver. * Waking input submitted after active cancellation is queued for the next * turn and runs when the aborted activity converges to idle; a `disposed` * cancel leaves it parked. A wake submitted while already idle always opens * its turn boundary, even when its message is cleared before the driver * claims ([driver wake convergence](../../agent-loop/src/agent.ts)). * @param message - identified content and the source that supplied it. * @param target - the preferred next-turn or next-step inbox boundary. * @param wakeup - whether delivery may wake the driver. */ send(message: UserMessage, target: InboxTarget, wakeup: boolean): void /** * Queue an ordinary follow-up turn and wake the driver. The item becomes the * sole ordinary message of its own turn. * @param message - identified prompt content and the source that supplied it. */ followup(message: UserMessage): void /** * Submit steering for the nearest step. An idle driver starts a turn; * a running driver consumes it at its next step boundary. * A rejected step leaves steering parked in the inbox until the next * wake; cancellation or disposal may discard pending steering. * @param message - identified steering content and the source that supplied it. */ steer(message: UserMessage): void /** * Queue model-facing context for the next pre-step without waking the * driver. A running driver claims it at the nearest later step boundary; * idle drivers leave it pending until follow-up or steering * wakes them. It may miss a request whose pre-step already claimed its * batch. Cancellation or disposal may discard pending context. * @param message - identified injected context and the source that supplied it. */ inject(message: UserMessage): void }
- **[ast-signature-changed]** `packages/schedule/tool-schedule` — 签名变化: renderValue
    旧: function(value:JsonValue)
    新: function(_args:unknown,value:unknown)
- **[ast-signature-changed]** `packages/credentials/deepseek-account/src/types.ts` — 签名变化: SignInErrorCode
    旧: export type SignInErrorCode = 'network' | 'protocol' | 'expired' | 'storage'
    新: export type SignInErrorCode = 'no-response' | 'network' | 'protocol' | 'expired' | 'storage'
- **[ast-signature-changed]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 签名变化: sizeOf
    旧: var
    新: function(info:{ size?: number } | undefined)
- **[ast-signature-changed]** `packages/extensions/cordis-host-runner/src/types.ts` — 签名变化: CordisInspectResolveAck
    旧: export interface CordisInspectResolveAck { /** False for unknown, cancelled, stale, or late answers. */ accepted: boolean }
    新: export interface CordisInspectResolveAck { /** * True only for a valid success that settles the query; * false for retained failures and unknown, timed out, cancelled, or late answers. */ accepted: boolean }
- **[ast-signature-changed]** `packages/extensions/cordis-host-runner/src/inspect-registry.ts` — 签名变化: PendingClientQuery
    旧: interface PendingClientQuery { request: CordisInspectQueryRequest method: CordisInspectMethodManifest settle(resolution: CordisInspectQueryResolution): void }
    新: interface PendingClientQuery { request: CordisInspectQueryRequest method: CordisInspectMethodManifest failure?: string settle(resolution: CordisInspectQueryResolution): void }
- **[ast-signature-changed]** `packages/extensions/cordis-host-runner/src/inspect-registry.ts` — 签名变化: CordisInspectRegistryService
    旧: class(ctx:Context)
    新: class(ctx:Context,clientQueryTimeoutMs:number)
- **[ast-signature-changed]** `packages/experimental/claude-code-mods` — 签名变化: DetachedRuns
    旧: export interface DetachedRuns { /** * The abort signal every tracked run must hand to {@link runHook} (via its * `signal` option). {@link drain} fires it so a still-running hook process is * killed rather than awaited out to its timeout (default 10 minutes). */ readonly signal: AbortSignal /** * Register one detached run until it settles. Pass the FULL chain — the hook * run and its continuation/error handler — so {@link drain} waits for the * side effects (an inject, a warn), not just the process exit. A rejected * chain is absorbed here (settlement bookkeeping only), but rejection * handling is still the caller's job: an untracked `.catch` is what turns a * failure into a logged warning instead of silence. * @param run - the detached run chain to hold until settled. */ track(run: Promise<unknown>): void /** * Abort {@link signal}, then resolve once every tracked chain has settled — * including chains tracked while the drain is in progress. The bridge * registers this as its effect disposer; cordis awaits it, so * `fiber.dispose()` resolving means the bridge's detached work is quiescent. * A run tracked AFTER drain resolves is not awaited by anyone — by then the * bridge's listeners are disposed, so nothing can start one. * @returns resolves when all tracked runs have settled. */ drain(): Promise<void> }
    新: class
- **[ast-signature-changed]** `packages/interaction/user-questions/src/types.ts` — 签名变化: AskUserQuestionRequestEvent
    旧: export interface AskUserQuestionRequestEvent { /** Questions to display. */ questions: AskUserQuestionItem[] /** Agent identity projected to the corresponding Client Context in transit. */ agent?: Agent /** Cancellation lifetime of the pending request. */ signal?: AbortSignal }
    新: export interface AskUserQuestionRequestEvent { /** Questions to display. */ questions: AskUserQuestionItem[] /** Agent identity projected to the corresponding Client Context in transit. */ agent?: Agent /** Cancellation lifetime of the pending request. */ signal?: AbortSignal /** * Tool call the Client card is keyed by. Timed answerers attach to the * business wait stream before starting their local countdown. */ wait?: { /** Tool call the Client card is keyed by. */ callId: ToolCallId /** True for a foreground wait that requires a Client claim; absent for indefinite waits. */ timed?: boolean } }
- **[ast-signature-changed]** `packages/schedule/schedule/src/types.ts` — 签名变化: ScheduleToolError
    旧: export type ScheduleToolError = | InvalidPromptError | InvalidSelectorError | InvalidRuleError | InvalidTimeZoneError | NotFutureError | TimeOutOfRangeError | FrequencyTooHighError | InternalScheduleError
    新: export type ScheduleToolError = | InvalidPromptError | InvalidSelectorError | InvalidRuleError | InvalidTimeZoneError | NotFutureError | TimeOutOfRangeError | FrequencyTooHighError | SubagentSessionError | InternalScheduleError
- **[ast-signature-changed]** `packages/schedule/tool-schedule` — 签名变化: registerScheduleTools
    旧: function(rootCtx:Context,toolCtx:Context,agent:Agent)
    新: function(ctx:Context)
- **[ast-signature-changed]** `packages/schedule/schedule/src/domain.ts` — 签名变化: ScheduleInputError
    旧: class(code:| 'invalid_prompt' | 'invalid_selector' | 'invalid_rule' | 'invalid_time_zone' | 'not_future' | 'time_out_of_range' | 'frequency_too_high',message:string,?options:ErrorOptions)
    新: class(code:| 'invalid_prompt' | 'invalid_selector' | 'invalid_rule' | 'invalid_time_zone' | 'not_future' | 'time_out_of_range' | 'frequency_too_high' | 'subagent_session',message:string,?options:ErrorOptions)
- **[ast-signature-changed]** `packages/schedule/schedule` — 签名变化: refusal
    旧: function(message:string)
    新: var
- **[ast-signature-changed]** `packages/util/package-manifest/src/types.ts` — 签名变化: PluginLocalizedMeta
    旧: export interface PluginLocalizedMeta { /** Display title; omission preserves the consumer's technical-name fallback. */ readonly title?: LocalizedText /** Display introduction after locale and package-field fallback. */ readonly description?: LocalizedText /** Base64 image data URL read from the manifest's icon file; render as an image, not inline markup. */ readonly icon?: string /** Unmodified local metadata diagnostic; the plugin remains manageable. */ readonly error?: string }
    新: export interface PluginLocalizedMeta { /** Display title; omission preserves the consumer's technical-name fallback. */ readonly title?: LocalizedText /** Display introduction after locale and package-field fallback. */ readonly description?: LocalizedText /** Base64 image data URL from a package root's manifest icon or an exported `<specifier>/icon`; render as an image, not inline markup. */ readonly icon?: string /** Unmodified local metadata diagnostic; the plugin remains manageable. */ readonly error?: string }
- **[ast-signature-changed]** `packages/llm/llm-pi-ai/src/catalog.ts` — 签名变化: OfferedCompatField
    旧: type OfferedCompatField = | OfferedIn<typeof COMPLETIONS_COMPAT_GATE> | OfferedIn<typeof RESPONSES_COMPAT_GATE> | OfferedIn<typeof ANTHROPIC_COMPAT_GATE> | OfferedIn<typeof BEDROCK_COMPAT_GATE>
    新: type OfferedCompatField = | OfferedIn<typeof COMPLETIONS_COMPAT_GATE> | OfferedIn<typeof RESPONSES_COMPAT_GATE> | OfferedIn<typeof ANTHROPIC_COMPAT_GATE> | OfferedIn<typeof BEDROCK_COMPAT_GATE> // oxlint-disable-next-line typescript/no-redundant-type-constituents -- Include gates whose current offering is empty. | OfferedIn<typeof MISTRAL_COMPAT_GATE>
- **[ast-signature-changed]** `packages/llm/llm-pi-ai/src/catalog.ts` — 签名变化: UpstreamCompat
    旧: type UpstreamCompat = OpenAICompletionsCompat & OpenAIResponsesCompat & AnthropicMessagesCompat & BedrockCompat
    新: type UpstreamCompat = OpenAICompletionsCompat & OpenAIResponsesCompat & AnthropicMessagesCompat & BedrockCompat & MistralConversationsCompat
- **[ast-signature-changed]** `packages/llm/llm-pi-ai/src/catalog.ts` — 签名变化: ModelCompat
    旧: type ModelCompat = OpenAICompletionsCompat | OpenAIResponsesCompat | AnthropicMessagesCompat | BedrockCompat
    新: type ModelCompat = OpenAICompletionsCompat | OpenAIResponsesCompat | AnthropicMessagesCompat | BedrockCompat | MistralConversationsCompat

## info

- **[package-added]** `packages/experimental/claude-code-mods` — 新增包
- **[package-added]** `packages/experimental/client-ui-claude-code-mods` — 新增包
- **[package-added]** `packages/experimental/inspector-profile` — 新增包
- **[package-added]** `packages/experimental/session-inspector` — 新增包
- **[package-added]** `packages/schedule/tool-schedule` — 新增包
- **[doc-added]** `docs/persistence-changes/2026-09-21-user-question-reply.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-09-21-user-question-reply.zh.md` — 新增文档
- **[doc-added]** `docs/subsystems/claude-code-mods.md` — 新增文档
- **[doc-added]** `docs/subsystems/claude-code-mods.zh.md` — 新增文档
- **[doc-added]** `docs/user/guide/public-deployments.md` — 新增文档
- **[doc-added]** `docs/user/guide/public-deployments.zh.md` — 新增文档
- **[config-scope-added]** `config:@deepseek-ai/dsh-experimental-claude-code-mods` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-tool-ask-user` — 新增可配置包
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: EntryNamespaces
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: moduleUrls
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: namespaces
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: ReloadFiber
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: ReloadModule
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: ReloadModules
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: moduleNamespace
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: implementations
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: isManifest
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: ReloadAttempt
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: shipped
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: sourceOf
- **[ast-export-added]** `packages/bundle/web-app` — 新增导出: appRootUrl
- **[ast-export-added]** `packages/bundle/web-app` — 新增导出: publicUrl
- **[ast-export-added]** `packages/experimental/claude-code-mods` — 新增导出: SERVED_EVENTS
- **[ast-export-added]** `packages/experimental/claude-code-mods` — 新增导出: REWRITE_NOTE
- **[ast-export-added]** `packages/experimental/claude-code-mods` — 新增导出: assertPositive
- **[ast-export-added]** `packages/experimental/claude-code-mods` — 新增导出: promptMessages
- **[ast-export-added]** `packages/experimental/claude-code-mods` — 新增导出: rewritePromptText
- **[ast-export-added]** `packages/experimental/claude-code-mods` — 新增导出: appendContext
- **[ast-export-added]** `packages/experimental/claude-code-mods` — 新增导出: acceptPromptSubmit
- **[ast-export-added]** `packages/experimental/claude-code-mods` — 新增导出: TurnRecord
- **[ast-export-added]** `packages/experimental/claude-code-mods` — 新增导出: foldAssistantMessage
- **[ast-export-added]** `packages/experimental/claude-code-mods` — 新增导出: jsonValueOf
- **[ast-export-added]** `packages/experimental/claude-code-mods` — 新增导出: modAnswered
- **[ast-export-added]** `packages/experimental/claude-code-mods` — 新增导出: ClaudeCodeMods
- **[ast-export-added]** `packages/experimental/claude-code-mods` — 新增导出: callOrigins
- **[ast-export-added]** `packages/experimental/claude-code-mods` — 新增导出: modCommands
- **[ast-export-added]** `packages/experimental/claude-code-mods` — 新增导出: modTools
- **[ast-export-added]** `packages/experimental/claude-code-mods` — 新增导出: agentOf
- **[ast-export-added]** `packages/experimental/claude-code-mods` — 新增导出: surfaces
- **[ast-export-added]** `packages/experimental/claude-code-mods` — 新增导出: redraw
- **[ast-export-added]** `packages/experimental/claude-code-mods` — 新增导出: modSubmissions
- **[ast-export-added]** `packages/experimental/claude-code-mods` — 新增导出: engine
- **[ast-export-added]** `packages/experimental/claude-code-mods` — 新增导出: isRoot
- **[ast-export-added]** `packages/experimental/claude-code-mods` — 新增导出: startedRoots
- **[ast-export-added]** `packages/experimental/claude-code-mods` — 新增导出: agentIdOf
- **[ast-export-added]** `packages/experimental/claude-code-mods` — 新增导出: turns
- **[ast-export-added]** `packages/experimental/claude-code-mods` — 新增导出: startedTurns
- **[ast-export-added]** `packages/experimental/claude-code-mods` — 新增导出: submitter
- **[ast-export-added]** `packages/experimental/claude-code-mods` — 新增导出: raisedBy
- **[ast-export-added]** `packages/experimental/claude-code-mods` — 新增导出: modName
- **[ast-export-added]** `packages/experimental/claude-code-mods` — 新增导出: beneath
- **[ast-export-added]** `packages/experimental/claude-code-mods` — 新增导出: turnRecord
- **[ast-export-added]** `packages/experimental/claude-code-mods` — 新增导出: mod
- **[ast-export-added]** `packages/experimental/claude-code-mods` — 新增导出: unserved
- **[ast-export-added]** `packages/interaction/user-questions` — 新增导出: TimedUserQuestionResult
- **[ast-export-added]** `packages/interaction/user-questions` — 新增导出: QueuedReply
- **[ast-export-added]** `packages/interaction/user-questions` — 新增导出: question
- **[ast-export-added]** `packages/interaction/user-questions` — 新增导出: answered
- **[ast-export-added]** `packages/interaction/user-questions` — 新增导出: wait
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: subagentCallerRefusal
- **[ast-export-added]** `packages/boot/app-boot/src/package-meta.ts` — 新增导出: assertPackageOwned
- **[ast-export-added]** `packages/boot/app-boot/src/profile.ts` — 新增导出: RETIRED_BUNDLES
- **[ast-export-added]** `packages/boot/app-boot/src/profile.ts` — 新增导出: ResolutionSource
- **[ast-export-added]** `packages/boot/app-boot/src/profile.ts` — 新增导出: ProfileRuntimeResolution
- **[ast-export-added]** `packages/boot/app-boot/src/profile.ts` — 新增导出: withBundles
- **[ast-export-added]** `packages/boot/app-boot/src/profile.ts` — 新增导出: dropRetiredBundles
- **[ast-export-added]** `packages/boot/plugin-manager/src/install-spec.ts` — 新增导出: NON_REGISTRY_VALUE
- **[ast-export-added]** `packages/boot/plugin-manager/src/install-spec.ts` — 新增导出: HTTP_USER_INFO
- **[ast-export-added]** `packages/boot/plugin-manager/src/install-spec.ts` — 新增导出: dependencySpec
- **[ast-export-added]** `packages/client/ui-primitives/src/StateDot.tsx` — 新增导出: pinSpinner
- **[ast-export-added]** `packages/client/ui-primitives/src/InlineEditor.tsx` — 新增导出: InlineEditor
- **[ast-export-added]** `packages/client/ui-primitives/src/MenuGroup.tsx` — 新增导出: MenuGroup
- **[ast-export-added]** `packages/client/ui-primitives/src/MenuGroup.tsx` — 新增导出: headingId
- **[ast-export-added]** `packages/client/ui-primitives/src/MenuGroup.tsx` — 新增导出: observeStickyMenuGroups
- **[ast-export-added]** `packages/client/ui-primitives/src/MenuGroup.tsx` — 新增导出: heading
- **[ast-export-added]** `packages/client/ui-primitives/src/MenuGroup.tsx` — 新增导出: stripObserver
- **[ast-export-added]** `packages/client/ui-primitives/src/MenuGroup.tsx` — 新增导出: viewportHeight
- **[ast-export-added]** `packages/client/ui-primitives/src/MenuGroup.tsx` — 新增导出: stuck
- **[ast-export-added]** `packages/client/ui-primitives/src/MenuGroup.tsx` — 新增导出: startObserver
- **[ast-export-added]** `packages/client/ui-primitives/src/MenuGroup.tsx` — 新增导出: sizeObserver
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: PluginOptionValue
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: PluginOptions
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: ModTier
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: HookOrigin
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: HookFailure
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: HookBudget
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: HookNext
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: ModHook
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: AnyHook
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: HookRegistration
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: MatcherValue
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: HookMatcher
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: ModEvents
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: ModOn
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: ModRegister
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: ModDefinition
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: SerializedElement
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: SerializedNode
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: SurfaceSnapshot
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: UiRenderInput
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: UiRenderResult
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: PromptOrigin
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: SessionStartInput
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: SessionStartResult
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: SessionEndInput
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: SessionEndResult
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: PromptSubmitInput
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: PromptSubmitResult
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: TurnStartInput
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: TurnStartResult
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: TurnUsage
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: TurnCompleteInput
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: TurnCompleteResult
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: ToolCallInput
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: ToolCallResult
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: CommandRunInput
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: CommandRunResult
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: OpResult
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: CommandSpec
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: CommandInfo
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: ToolSpec
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: ToolInfo
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: SessionMessage
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: ToolUseSummary
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: SessionUsage
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: SessionVersion
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: AskOptions
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: UiLogOptions
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: ToastOptions
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: PaneOpenArgs
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: PaneOpenResult
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: StateRef
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: ModTimer
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: FsEntry
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: FsStat
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: ProcessRunInit
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: ProcessRunResult
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: HttpInit
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: HttpResponse
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: PromptSubmitArgs
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/types.ts` — 新增导出: ModsApi
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/elements.ts` — 新增导出: UiElement
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/elements.ts` — 新增导出: UiNode
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/elements.ts` — 新增导出: BoxProps
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/elements.ts` — 新增导出: TextProps
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/elements.ts` — 新增导出: UiElements
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/elements.ts` — 新增导出: scalarProps
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/elements.ts` — 新增导出: scalars
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/elements.ts` — 新增导出: elementBrand
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/elements.ts` — 新增导出: isUiElement
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/elements.ts` — 新增导出: uiElements
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/elements.ts` — 新增导出: childrenOf
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/elements.ts` — 新增导出: treeProblem
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/elements.ts` — 新增导出: serializeTree
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/elements.ts` — 新增导出: onPress
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/elements.ts` — 新增导出: TreePattern
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/elements.ts` — 新增导出: textMatches
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/elements.ts` — 新增导出: findAll
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/elements.ts` — 新增导出: matchesType
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/elements.ts` — 新增导出: matchesText
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/elements.ts` — 新增导出: matchesLabel
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/define-mod.ts` — 新增导出: ModConfig
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/define-mod.ts` — 新增导出: ModSpec
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/define-mod.ts` — 新增导出: ModPlugin
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/define-mod.ts` — 新增导出: optionValue
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/define-mod.ts` — 新增导出: defineMod
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/define-mod.ts` — 新增导出: userConfig
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/tool-names.ts` — 新增导出: DEFAULT_TOOL_ALIASES
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/tool-names.ts` — 新增导出: ToolNameAliases
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/tool-names.ts` — 新增导出: createToolNameAliases
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/matcher.ts` — 新增导出: ENGINE_EVENTS
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/matcher.ts` — 新增导出: KNOWN_EVENTS
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/matcher.ts` — 新增导出: isEventPattern
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/matcher.ts` — 新增导出: eventMatches
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/matcher.ts` — 新增导出: valueMatches
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/matcher.ts` — 新增导出: matcherMatches
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/matcher.ts` — 新增导出: describeMatcher
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: AgentBinding
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: MODS_API_VERSION
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: FS_MAX_BYTES
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: STORE_MAX_BYTES
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: PROCESS_OUTPUT_MAX_BYTES
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: HTTP_MAX_BYTES
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: modToolName
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: REGISTERED_NAME
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: storeDomainSpec
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: HostOpsOptions
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: toolCallResultOf
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: argumentsOf
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: sessionMessages
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: toolUses
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: kindOf
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: readOutput
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: createHostOps
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: storeDomain
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: domains
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: storeWrites
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: serializeStore
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: questions
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: choices
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: inputSchema
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: fullName
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: pressure
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: tokens
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: followed
- **[ast-export-added]** `packages/experimental/inspector/src/host/plugin.ts` — 新增导出: DEVTOOLS_PATH
- **[ast-export-added]** `packages/experimental/inspector/src/host/plugin.ts` — 新增导出: assets
- **[ast-export-added]** `packages/extensions/cordis-host-runner/src/inspect-registry.ts` — 新增导出: gateway
- **[ast-export-added]** `packages/interaction/user-questions/src/types.ts` — 新增导出: UserQuestionState
- **[ast-export-added]** `packages/interaction/user-questions/src/types.ts` — 新增导出: PendingUserQuestion
- **[ast-export-added]** `packages/interaction/user-questions/src/types.ts` — 新增导出: SettledUserQuestion
- **[ast-export-added]** `packages/interaction/user-questions/src/types.ts` — 新增导出: UserQuestionProjectionView
- **[ast-export-added]** `packages/interaction/user-questions/src/projection.ts` — 新增导出: UserQuestionFold
- **[ast-export-added]** `packages/interaction/user-questions/src/projection.ts` — 新增导出: UserQuestionProjectionState
- **[ast-export-added]** `packages/interaction/user-questions/src/projection.ts` — 新增导出: ASK_USER_QUESTION_TOOL
- **[ast-export-added]** `packages/interaction/user-questions/src/projection.ts` — 新增导出: TIMED_WAIT_PARAMETER
- **[ast-export-added]** `packages/interaction/user-questions/src/projection.ts` — 新增导出: toolOptionSchema
- **[ast-export-added]** `packages/interaction/user-questions/src/projection.ts` — 新增导出: toolQuestionSchema
- **[ast-export-added]** `packages/interaction/user-questions/src/projection.ts` — 新增导出: toolArgumentsSchema
- **[ast-export-added]** `packages/interaction/user-questions/src/projection.ts` — 新增导出: optionSchema
- **[ast-export-added]** `packages/interaction/user-questions/src/projection.ts` — 新增导出: questionSchema
- **[ast-export-added]** `packages/interaction/user-questions/src/projection.ts` — 新增导出: pendingQuestionsSchema
- **[ast-export-added]** `packages/interaction/user-questions/src/projection.ts` — 新增导出: answerSchema
- **[ast-export-added]** `packages/interaction/user-questions/src/projection.ts` — 新增导出: settledQuestionsSchema
- **[ast-export-added]** `packages/interaction/user-questions/src/projection.ts` — 新增导出: projectionViewSchema
- **[ast-export-added]** `packages/interaction/user-questions/src/projection.ts` — 新增导出: answerBatchSchema
- **[ast-export-added]** `packages/interaction/user-questions/src/projection.ts` — 新增导出: emptyView
- **[ast-export-added]** `packages/interaction/user-questions/src/projection.ts` — 新增导出: initialFold
- **[ast-export-added]** `packages/interaction/user-questions/src/projection.ts` — 新增导出: isTimedAskUserQuestionSchema
- **[ast-export-added]** `packages/interaction/user-questions/src/projection.ts` — 新增导出: questionsOf
- **[ast-export-added]** `packages/interaction/user-questions/src/projection.ts` — 新增导出: isPendingResult
- **[ast-export-added]** `packages/interaction/user-questions/src/projection.ts` — 新增导出: answerBatchOf
- **[ast-export-added]** `packages/interaction/user-questions/src/projection.ts` — 新增导出: settleQuestion
- **[ast-export-added]** `packages/interaction/user-questions/src/projection.ts` — 新增导出: applyUserQuestionEvent
- **[ast-export-added]** `packages/interaction/user-questions/src/projection.ts` — 新增导出: answers
- **[ast-export-added]** `packages/interaction/user-questions/src/projection.ts` — 新增导出: foldUserQuestions
- **[ast-export-added]** `packages/interaction/user-questions/src/projection.ts` — 新增导出: userQuestionProjectionDefinition
- **[ast-export-added]** `packages/preset/agent-preset-registry/src/mount.ts` — 新增导出: serviceForMount
- **[ast-export-added]** `packages/preset/agent-preset-registry/src/composition-inventory.ts` — 新增导出: CompositionRowEnablement
- **[ast-export-added]** `packages/preset/agent-preset-registry/src/composition-inventory.ts` — 新增导出: DisabledExpressionEvaluator
- **[ast-export-added]** `packages/preset/agent-preset-registry/src/composition-inventory.ts` — 新增导出: AgentPresetCompositionRow
- **[ast-export-added]** `packages/preset/agent-preset-registry/src/composition-inventory.ts` — 新增导出: AgentPresetComposition
- **[ast-export-added]** `packages/preset/agent-preset-registry/src/composition-inventory.ts` — 新增导出: AgentPresetInspection
- **[ast-export-added]** `packages/preset/agent-preset-registry/src/composition-inventory.ts` — 新增导出: activeCompositionModules
- **[ast-export-added]** `packages/preset/agent-preset-registry/src/composition-inventory.ts` — 新增导出: ownerTree
- **[ast-export-added]** `packages/preset/agent-preset-registry/src/composition-inventory.ts` — 新增导出: disabledContribution
- **[ast-export-added]** `packages/preset/agent-preset-registry/src/composition-inventory.ts` — 新增导出: combineDisabled
- **[ast-export-added]** `packages/preset/agent-preset-registry/src/composition-inventory.ts` — 新增导出: RawRow
- **[ast-export-added]** `packages/preset/agent-preset-registry/src/composition-inventory.ts` — 新增导出: flattenRows
- **[ast-export-added]** `packages/preset/agent-preset-registry/src/composition-inventory.ts` — 新增导出: definitionComposition
- **[ast-export-added]** `packages/preset/agent-preset-registry/src/composition-inventory.ts` — 新增导出: mountedCompositionRows
- **[ast-export-added]** `packages/schedule/schedule/src/types.ts` — 新增导出: SubagentSessionError
- **[ast-export-added]** `packages/schedule/schedule/src/domain.ts` — 新增导出: SCHEDULED_MESSAGE_FRAMING
- **[ast-export-added]** `packages/util/values/src/partial-json.ts` — 新增导出: LengthReadOptions
- **[ast-export-added]** `packages/util/values/src/partial-json.ts` — 新增导出: StringRead
- **[ast-export-added]** `packages/util/values/src/partial-json.ts` — 新增导出: ReadKind
- **[ast-export-added]** `packages/util/values/src/partial-json.ts` — 新增导出: Read
- **[ast-export-added]** `packages/util/values/src/partial-json.ts` — 新增导出: SIMPLE_ESCAPES
- **[ast-export-added]** `packages/util/values/src/partial-json.ts` — 新增导出: CONTENT_ESCAPE
- **[ast-export-added]** `packages/util/values/src/partial-json.ts` — 新增导出: isWhitespace
- **[ast-export-added]** `packages/util/values/src/partial-json.ts` — 新增导出: isHex
- **[ast-export-added]** `packages/util/values/src/partial-json.ts` — 新增导出: PartialArguments
- **[ast-export-added]** `packages/util/values/src/partial-json.ts` — 新增导出: completions
- **[ast-export-added]** `packages/util/values/src/partial-json.ts` — 新增导出: prefixes
- **[ast-export-added]** `packages/util/values/src/partial-json.ts` — 新增导出: slashStart
- **[ast-export-added]** `packages/llm/llm-pi-ai/src/catalog.ts` — 新增导出: MISTRAL_COMPAT_GATE
- **[config-field-added]** `config:@deepseek-ai/dsh-cordis-host-runner` — 新增配置字段: clientInspectTimeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-claude-code-mods` — 新增配置字段: hookTimeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-claude-code-mods` — 新增配置字段: catchTimeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-claude-code-mods` — 新增配置字段: processTimeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-claude-code-mods` — 新增配置字段: toolAliases
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-claude-code-mods` — 新增配置字段: bandColumns
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-claude-code-mods` — 新增配置字段: bandRows
- **[config-field-added]** `config:@deepseek-ai/dsh-tool-ask-user` — 新增配置字段: mode
- **[config-field-added]** `config:@deepseek-ai/dsh-tool-ask-user` — 新增配置字段: timeout
- **[config-field-added]** `config:@deepseek-ai/dsh-web-app` — 新增配置字段: publicUrl
