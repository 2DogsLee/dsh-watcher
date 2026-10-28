# DSH 插件 API 面比对：`dsh-v0.2.1-rc.4` → `dsh-v0.2.2-alpha.2`

> 生成于 2026-10-28T09:40:47.1718046Z · 工具 dsh-api-watch v1（启发式， breaking 结论建议复核 diff）

| 级别 | 数量 |
|---|---|
| breaking | 301 |
| warning | 316 |
| info | 1000 |
| ★ 与我相关 | 24 |

## ★ 优先关注：与你插件相关的 breaking / warning

- **[exports-map-changed]** `packages/sdk/server/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/skill/skill-office/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/skill/tool-workspace-dependencies/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[ast-signature-changed]** `packages/skill/tool-skill` — 签名变化: SkillCatalogSource
    旧: export interface SkillCatalogSource { readonly kind: 'skill-catalog' readonly form: 'catalog' /** Marks a replacement catalog rather than this session's first publication. */ readonly update?: true /** Exactly the entries this message published, in catalog order. */ readonly entries: readonly { readonly name: string; readonly description: string }[] }
    新: export interface SkillCatalogSource { readonly kind: 'skill-catalog' readonly form: 'catalog' /** Marks a replacement catalog rather than this session's first publication. */ readonly update?: true /** Some discovery failed; entries contain only skills found in this observation. Absence means complete. */ readonly incomplete?: true /** Exactly the entries this message published, in catalog order. */ readonly entries: readonly { readonly name: string; readonly description: string }[] }
- **[ast-signature-changed]** `packages/skill/tool-skill` — 签名变化: renderCatalogMessage
    旧: function(entries:SkillCatalogSource['entries'])
    新: function(entries:SkillCatalogSource['entries'],incomplete:boolean)
- **[ast-signature-changed]** `packages/skill/tool-skill` — 签名变化: renderCatalogUpdate
    旧: function(entries:SkillCatalogSource['entries'])
    新: function(entries:SkillCatalogSource['entries'],incomplete:boolean)
- **[ast-signature-changed]** `packages/skill/tool-skill` — 签名变化: digestCatalogEntries
    旧: function(entries:SkillCatalogSource['entries'])
    新: function(entries:SkillCatalogSource['entries'],incomplete:any)
- **[ast-signature-changed]** `packages/sdk/client/src/types.ts` — 签名变化: HarnessClientOptions
    旧: export interface HarnessClientOptions { /** Absolute or caller-relative dsh CLI module; omitted resolves this package's same-version dependency. */ dshBin?: string /** Named profile serving the SDK protocol (default `sdk`). */ profile?: string /** Ordered per-launch profile patches; relative paths resolve before spawn. */ patches?: string[] /** Explicit Harness home for this child; relative paths resolve before spawn. */ dshHome?: string /** Working directory for the dsh process itself. */ processCwd?: string /** * The complete child environment, read when {@link HarnessClient.start} * spawns. `undefined` reads the parent env at that time; passing an object * reads that object at spawn and replaces the parent environment entirely, so callers own * credential policy (see `scrubbedParentEnv` in `@deepseek-ai/dsh-subprocess` * for the shared scrub-then-merge base). */ env?: NodeJS.ProcessEnv /** Bound (ms) on the initial profile handshake (default 10000). */ initializeTimeoutMs?: number /** Per-request timeout (ms); `undefined` waits indefinitely (a turn can legitimately run long). */ requestTimeoutMs?: number /** Bound (ms) on the protocol `shutdown` exchange inside `close()` (default 1000). */ shutdownTimeoutMs?: number /** Grace (ms) for the runtime's stdin-EOF quiesce during `close()` (default 6000). */ disposeEofGraceMs?: number /** Termination confirmation window (ms) after SIGTERM/SIGKILL during `close()` (default 3000). */ disposeGraceMs?: number }
    新: export interface HarnessClientOptions { /** Answer runtime questions without prescribing a UI; observe the signal to release host work on cancellation. */ onUserQuestion?: (request: SdkUserQuestionRequest, context: { signal: AbortSignal }) => Promise<SdkUserQuestionAnswer> /** Absolute or caller-relative dsh CLI module; omitted resolves this package's same-version dependency. */ dshBin?: string /** Named profile serving the SDK protocol (default `sdk`). */ profile?: string /** Ordered per-launch profile patches; relative paths resolve before spawn. */ patches?: string[] /** Explicit Harness home for this child; relative paths resolve before spawn. */ dshHome?: string /** Working directory for the dsh process itself. */ processCwd?: string /** * The complete child environment, read when {@link HarnessClient.start} * spawns. `undefined` reads the parent env at that time; passing an object * reads that object at spawn and replaces the parent environment entirely, so callers own * credential policy (see `scrubbedParentEnv` in `@deepseek-ai/dsh-subprocess` * for the shared scrub-then-merge base). */ env?: NodeJS.ProcessEnv /** Bound (ms) on the initial profile handshake (default 10000). */ initializeTimeoutMs?: number /** Per-request timeout (ms); `undefined` waits indefinitely (a turn can legitimately run long). */ requestTimeoutMs?: number /** Bound (ms) on the protocol `shutdown` exchange inside `close()` (default 1000). */ shutdownTimeoutMs?: number /** Grace (ms) for the runtime's stdin-EOF quiesce during `close()` (default 6000). */ disposeEofGraceMs?: number /** Termination confirmation window (ms) after SIGTERM/SIGKILL during `close()` (default 3000). */ disposeGraceMs?: number }
- **[ast-signature-changed]** `packages/sdk/client/src/types.ts` — 签名变化: DeepSeekHarnessOptions
    旧: export interface DeepSeekHarnessOptions extends HarnessClientOptions { /** Workspace cwd recorded on every SDK-created session (default: the process cwd, else `process.cwd()`). */ cwd?: string /** Provider route for SDK-created agents (default `deepseek-official`). */ provider?: string /** Model for SDK-created agents (default `deepseek-v4-flash`). */ model?: string /** Adapter-owned reasoning effort for the selected provider/model route. */ reasoningEffort?: ReasoningEffortId /** Maximum output tokens for each conversation-model request. */ maxTokens?: number }
    新: export interface DeepSeekHarnessOptions extends HarnessClientOptions { /** Workspace cwd recorded on every SDK-created session (default: the process cwd, else `process.cwd()`). */ cwd?: string /** Provider route for SDK-created agents (default `deepseek-official`). */ provider?: string /** Model for SDK-created agents (default `deepseek-v4-flash`). */ model?: string /** Adapter-owned reasoning effort for the selected provider/model route. */ reasoningEffort?: ReasoningEffortId /** Maximum output tokens for each conversation-model request. */ maxTokens?: number /** Enable server approval requests; install client.onRequest() after client.start() and before harness.start(). */ approvalRequests?: boolean }
- **[ast-signature-changed]** `packages/sdk/protocol/src/transport.ts` — 签名变化: JsonRpcTransportPeer
    旧: export interface JsonRpcTransportPeer { /** * Send a request and await its response. * @param method - the JSON-RPC method name. * @param params - the request parameters object. * @returns the result; rejects with {@link JsonRpcResponseError} on an error * response, and with a plain `Error` on a write failure or closure. */ request(method: string, params: object): Promise<unknown> /** * Send a notification; omitted params produce no `params` member. * @param method - the JSON-RPC method name. * @param params - the optional notification parameters object. */ notify(method: string, params?: object): void }
    新: export interface JsonRpcTransportPeer { /** * Send a request and await its response. * @param method - the JSON-RPC method name. * @param params - the request parameters object. * @param signal - optional cancellation; removes the pending waiter, rejects on abort, and ignores late responses. * @returns the result; rejects with {@link JsonRpcResponseError} on an error * response, and with a plain `Error` on a write failure or closure. */ request(method: string, params: object, signal?: AbortSignal): Promise<unknown> /** * Send a notification; omitted params produce no `params` member. * @param method - the JSON-RPC method name. * @param params - the optional notification parameters object. */ notify(method: string, params?: object): void }
- **[ast-signature-changed]** `packages/sdk/protocol/src/types.ts` — 签名变化: InitializeParams
    旧: export interface InitializeParams { /** Working directory recorded on every SDK-created session's header. */ cwd: string /** Provider route every SDK-created agent runs on. */ provider: string /** Model name every SDK-created agent runs on (the server may mount a fallback adapter; see `HarnessSdkJsonRpcServer.initialize`). */ model: string /** Optional adapter-owned reasoning effort for the selected provider/model route. */ reasoningEffort?: ReasoningEffortId /** Optional positive output-token cap inherited by SDK-created agents and their in-process descendants. */ maxTokens?: number }
    新: export interface InitializeParams { /** Working directory recorded on every SDK-created session's header. */ cwd: string /** Enable server-to-client approval/request calls; omission leaves existing answerers in control. */ approvalRequests?: boolean /** Provider route every SDK-created agent runs on. */ provider: string /** Model name every SDK-created agent runs on (the server may mount a fallback adapter; see `HarnessSdkJsonRpcServer.initialize`). */ model: string /** Optional adapter-owned reasoning effort for the selected provider/model route. */ reasoningEffort?: ReasoningEffortId /** Optional positive output-token cap inherited by SDK-created agents and their in-process descendants. */ maxTokens?: number /** Host-provided capabilities; omission retains native in-process answerers. */ capabilities?: { userQuestions?: boolean } }
- **[ast-signature-changed]** `packages/sdk/protocol/src/types.ts` — 签名变化: HarnessSdkNotificationMap
    旧: export interface HarnessSdkNotificationMap { 'session.event': SessionEventNotification 'session.status': SessionStatusNotification 'subagent.started': SubagentStartedNotification 'subagent.finished': SubagentFinishedNotification }
    新: export interface HarnessSdkNotificationMap { 'user-question.cancelled': SdkUserQuestionCancelled 'session.event': SessionEventNotification 'session.status': SessionStatusNotification 'subagent.started': SubagentStartedNotification 'subagent.finished': SubagentFinishedNotification }

## breaking

- **[package-removed]** `packages/client/ui-deepseek-model-label-1017` — 包被移除或不再是独立包
- **[config-scope-removed]** `config:@deepseek-ai/dsh-tools` — 该包从配置目录移除，其 cordis.yml config 块不再可用
- **[ast-export-removed]** `packages/acp/acp` — 导出（含 re-export）删除: initialSelection（原声明于 packages/acp/acp/src/index.ts）
- **[ast-export-removed]** `packages/api/session-controller` — 导出（含 re-export）删除: addressedSession（原声明于 packages/api/session-controller/src/index.ts）
- **[ast-export-removed]** `packages/boot/plugin-manager` — 导出（含 re-export）删除: protectedModules（原声明于 packages/boot/plugin-manager/src/index.ts）
- **[ast-export-removed]** `packages/boot/plugin-manager` — 导出（含 re-export）删除: refusedBy（原声明于 packages/boot/plugin-manager/src/index.ts）
- **[ast-export-removed]** `packages/client/modules` — 导出（含 re-export）删除: sourceKey（原声明于 packages/client/modules/src/index.ts）
- **[ast-export-removed]** `packages/session/working-directory` — 导出（含 re-export）删除: SessionProjectionStateMap（原声明于 packages/session/working-directory/src/index.ts）
- **[ast-export-removed]** `packages/context/time-context` — 导出（含 re-export）删除: TimeContextProjection（原声明于 packages/context/time-context/src/index.ts）
- **[ast-export-removed]** `packages/context/tmux-context` — 导出（含 re-export）删除: TmuxContextState（原声明于 packages/context/tmux-context/src/index.ts）
- **[ast-export-removed]** `packages/core/agent-loop` — 导出（含 re-export）删除: PreparedAgent（原声明于 packages/core/agent-loop/src/index.ts）
- **[ast-export-removed]** `packages/core/agent-loop` — 导出（含 re-export）删除: unregisterTurnBoundary（原声明于 packages/core/agent-loop/src/index.ts）
- **[ast-export-removed]** `packages/core/agent-loop` — 导出（含 re-export）删除: unregisterInbox（原声明于 packages/core/agent-loop/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: MutableToolRunContext（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: ScheduledToolPreparation（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: ScheduledToolDispatch（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: ToolRuntimeScheduler（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: TOOL_RUNTIME_SCHEDULER（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: projectionError（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: snapshotProjection（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: snapshotToolValue（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: failureMessageFromContent（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: materializePresentation（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: errorInfo（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: ToolPresentationMode（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: ToolAskResolution（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: ToolCancellationState（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: FusedToolSignal（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: resolveMaxParallelSubCalls（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: maxParallelSubCalls（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: ToolRuntime（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: globalReason（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: concurrencySafe（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: deferredContexts（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: rootCallId（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: concludingExecutions（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: capturedFinalizer（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: capturedProjector（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: finalizerFor（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: askResolution（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: denialReason（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: denialInfo（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: wrapperSignal（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: mutableExec（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: resultWithDeferredContexts（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: postResult（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: materializedResult（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: finalResult（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: reportFailure（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: decisionContexts（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: concludesTurn（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: presentation（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: createExecutionToken（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: toolErrorResult（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: fuseToolSignals（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: listening（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: abortFrom（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: abortFromCaller（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: abortFromWrapper（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: toolAbortedResult（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/core/tools` — 导出（含 re-export）删除: toolAbortedBeforeDispatchResult（原声明于 packages/core/tools/src/index.ts）
- **[ast-export-removed]** `packages/experimental/agent-team` — 导出（含 re-export）删除: disposeProjection（原声明于 packages/experimental/agent-team/src/index.ts）
- **[ast-export-removed]** `packages/experimental/auto-review` — 导出（含 re-export）删除: PendingAction（原声明于 packages/experimental/auto-review/src/index.ts）
- **[ast-export-removed]** `packages/experimental/auto-review` — 导出（含 re-export）删除: isHumanInstruction（原声明于 packages/experimental/auto-review/src/index.ts）
- **[ast-export-removed]** `packages/experimental/auto-review` — 导出（含 re-export）删除: directParentInitialPromptSeq（原声明于 packages/experimental/auto-review/src/index.ts）
- **[ast-export-removed]** `packages/experimental/auto-review` — 导出（含 re-export）删除: initialPromptSeq（原声明于 packages/experimental/auto-review/src/index.ts）
- **[ast-export-removed]** `packages/experimental/auto-review` — 导出（含 re-export）删除: projectInstructions（原声明于 packages/experimental/auto-review/src/index.ts）
- **[ast-export-removed]** `packages/experimental/auto-review` — 导出（含 re-export）删除: reviewUserText（原声明于 packages/experimental/auto-review/src/index.ts）
- **[ast-export-removed]** `packages/host/frontend-static` — 导出（含 re-export）删除: renderIndex（原声明于 packages/host/frontend-static/src/index.ts）
- **[ast-export-removed]** `packages/host/frontend-static` — 导出（含 re-export）删除: rawPath（原声明于 packages/host/frontend-static/src/index.ts）
- **[ast-export-removed]** `packages/interaction/user-approval` — 导出（含 re-export）删除: hasOpenTurn（原声明于 packages/interaction/user-approval/src/index.ts）
- **[ast-export-removed]** `packages/llm/token-meter` — 导出（含 re-export）删除: MeasurementAnchor（原声明于 packages/llm/token-meter/src/index.ts）
- **[ast-export-removed]** `packages/llm/token-meter` — 导出（含 re-export）删除: nextHeader（原声明于 packages/llm/token-meter/src/index.ts）
- **[ast-export-removed]** `packages/llm/token-meter` — 导出（含 re-export）删除: nextStepStart（原声明于 packages/llm/token-meter/src/index.ts）
- **[ast-export-removed]** `packages/llm/token-meter` — 导出（含 re-export）删除: nextAnchor（原声明于 packages/llm/token-meter/src/index.ts）
- **[ast-export-removed]** `packages/llm/token-meter` — 导出（含 re-export）删除: stepStart（原声明于 packages/llm/token-meter/src/index.ts）
- **[ast-export-removed]** `packages/llm/token-meter` — 导出（含 re-export）删除: eventTokens（原声明于 packages/llm/token-meter/src/index.ts）
- **[ast-export-removed]** `packages/llm/token-meter` — 导出（含 re-export）删除: providerContent（原声明于 packages/llm/token-meter/src/index.ts）
- **[ast-export-removed]** `packages/ptc-runtime/ptc-runtime-node` — 导出（含 re-export）删除: STRIP_PREFIX（原声明于 packages/ptc-runtime/ptc-runtime-node/src/index.ts）
- **[ast-export-removed]** `packages/ptc-runtime/ptc-runtime-node` — 导出（含 re-export）删除: STRIP_SUFFIX（原声明于 packages/ptc-runtime/ptc-runtime-node/src/index.ts）
- **[ast-export-removed]** `packages/ptc-runtime/ptc-runtime-node` — 导出（含 re-export）删除: replyBinding（原声明于 packages/ptc-runtime/ptc-runtime-node/src/index.ts）
- **[ast-export-removed]** `packages/ptc-runtime/ptc-runtime-node` — 导出（含 re-export）删除: outputOverflow（原声明于 packages/ptc-runtime/ptc-runtime-node/src/index.ts）
- **[ast-export-removed]** `packages/ptc-runtime/ptc-runtime-node` — 导出（含 re-export）删除: overflowResult（原声明于 packages/ptc-runtime/ptc-runtime-node/src/index.ts）
- **[ast-export-removed]** `packages/ptc-runtime/ptc-runtime-node` — 导出（含 re-export）删除: parsing（原声明于 packages/ptc-runtime/ptc-runtime-node/src/index.ts）
- **[ast-export-removed]** `packages/ptc-runtime/ptc-runtime-node` — 导出（含 re-export）删除: heapFlag（原声明于 packages/ptc-runtime/ptc-runtime-node/src/index.ts）
- **[ast-export-removed]** `packages/ptc-runtime/ptc-runtime-node` — 导出（含 re-export）删除: stdoutDecoder（原声明于 packages/ptc-runtime/ptc-runtime-node/src/index.ts）
- **[ast-export-removed]** `packages/ptc-runtime/ptc-runtime-node` — 导出（含 re-export）删除: stderrDecoder（原声明于 packages/ptc-runtime/ptc-runtime-node/src/index.ts）
- **[ast-export-removed]** `packages/ptc-runtime/ptc-runtime-node` — 导出（含 re-export）删除: nextId（原声明于 packages/ptc-runtime/ptc-runtime-node/src/index.ts）
- **[ast-export-removed]** `packages/ptc-runtime/ptc-runtime-node` — 导出（含 re-export）删除: protocolFailure（原声明于 packages/ptc-runtime/ptc-runtime-node/src/index.ts）
- **[ast-export-removed]** `packages/ptc-runtime/ptc-runtime-node` — 导出（含 re-export）删除: processFinished（原声明于 packages/ptc-runtime/ptc-runtime-node/src/index.ts）
- **[ast-export-removed]** `packages/sandbox/sandbox-policy` — 导出（含 re-export）删除: SandboxModeState（原声明于 packages/sandbox/sandbox-policy/src/index.ts）
- **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: modelSelectionCapable（原声明于 packages/subagent/tool-subagent/src/index.ts）
- **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: choiceDescription（原声明于 packages/subagent/tool-subagent/src/index.ts）
- **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: compositionScope（原声明于 packages/subagent/tool-subagent/src/index.ts）
- **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: selectForSession（原声明于 packages/subagent/tool-subagent/src/index.ts）
- **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: freshSession（原声明于 packages/subagent/tool-subagent/src/index.ts）
- **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: allowedModels（原声明于 packages/subagent/tool-subagent/src/index.ts）
- **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: scopedInstalls（原声明于 packages/subagent/tool-subagent/src/index.ts）
- **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: installing（原声明于 packages/subagent/tool-subagent/src/index.ts）
- **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: belongsToComposition（原声明于 packages/subagent/tool-subagent/src/index.ts）
- **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: installScoped（原声明于 packages/subagent/tool-subagent/src/index.ts）
- **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: removeScoped（原声明于 packages/subagent/tool-subagent/src/index.ts）
- **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: reconcileComposedAgents（原声明于 packages/subagent/tool-subagent/src/index.ts）
- **[ast-export-removed]** `packages/api/session-controller/src/agent.ts` — 导出（含 re-export）删除: InstalledSelection（原声明于 packages/api/session-controller/src/agent.ts）
- **[ast-export-removed]** `packages/api/session-controller/src/agent.ts` — 导出（含 re-export）删除: inspectApiSession（原声明于 packages/api/session-controller/src/agent.ts）
- **[ast-export-removed]** `packages/api/session-controller/src/agent.ts` — 导出（含 re-export）删除: projectionState（原声明于 packages/api/session-controller/src/agent.ts）
- **[ast-export-removed]** `packages/api/session-controller/src/agent.ts` — 导出（含 re-export）删除: loggedHeader（原声明于 packages/api/session-controller/src/agent.ts）
- **[ast-export-removed]** `packages/api/session-controller/src/agent.ts` — 导出（含 re-export）删除: agentModelSelection（原声明于 packages/api/session-controller/src/agent.ts）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: WeightedIconProps（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconSearchOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconSettingsOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconPanelLeftOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconEllipsisOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconPlusOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconCheckOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconBranchOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconChevronDownOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconChevronLeftOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconChevronRightOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconTriangleRightFillArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconChevronUpOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconCloseOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconCloseFillArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconCloseCircleFillArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconCopyOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconRefreshOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconLikeOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconLikeFillArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconDislikeOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconDislikeFillArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconShareOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconDeliverDocArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconEditOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconThinkOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconAgentPresetOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconContextInjectionOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconLinkOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconRightUpOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconEnhanceOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconTrashOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconWarningOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconCheckCircleFillArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconWarningTriangleOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconUserOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconUsersOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconPaperPlaneOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconStopFillArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconPaperclipOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconLoadingOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconDownloadOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconPlayOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconPauseOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconFullscreenOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconCodeOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconCordisPluginOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconApiOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconPersonalizationOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconProjectAddOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconFolderOpenOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconFolderOpenArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconTreeCornerArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconLightOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconDarkOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconFollowsystemOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconDataOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconDatabaseOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconClockOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconGaugeOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconSendOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconQueueOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconChecklistOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconListPenOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconGoalOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconSparkleArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconSkillOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconQuestionOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconInfoOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconPluginPinwheelOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconAlarmClockOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconArchiveOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconWrapLinesOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconNowrapFillArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconWrapFillArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconCompareSplitOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconPlanOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconCompactOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconShieldOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconCheckCircleOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconUnarchiveOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconPinOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconPinFillArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconFlatListOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconWorkspaceTreeOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconChevronsUpDownOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconArchiveOffOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: maskId（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconArchiveCheckOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconSlidersTwoOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconMicrophoneOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconAppsAddOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: near（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: far（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: plusX（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: plusY（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- **[ast-export-removed]** `packages/core/agent/src/model-selection.ts` — 导出（含 re-export）删除: ModelSelectionRef（原声明于 packages/core/agent/src/model-selection.ts）
- **[ast-export-removed]** `packages/core/agent/src/model-selection.ts` — 导出（含 re-export）删除: disposeAssembly（原声明于 packages/core/agent/src/model-selection.ts）
- **[ast-export-removed]** `packages/core/agent/src/model-selection.ts` — 导出（含 re-export）删除: disposeRequest（原声明于 packages/core/agent/src/model-selection.ts）
- **[ast-export-removed]** `packages/core/agent/src/model-selection.ts` — 导出（含 re-export）删除: disposeNotice（原声明于 packages/core/agent/src/model-selection.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: RunCodeFlavor（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: runCodeFlavor（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: TYPESCRIPT_FLAVOR（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: TYPESCRIPT_FUNCTION_FLAVOR（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: PYTHON_FLAVOR（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: PtcSdkLanguage（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: RUN_CODE_FLAVORS（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: RUN_CODE_DESCRIPTION_PARAM_DESCRIPTION（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: RUN_CODE_CONTROLS（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: controlParameters（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: escalationGuidance（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: resolveFlavor（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: flavor（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: jsonNormalizeArgs（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: JSON_INDENT（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: MAX_JSON_INDENT_CHARS（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: JsonRenderTask（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: renderJsonValue（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: RunCodeOutput（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: RunCodeBridgeOptions（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: createRunCodeTool（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: stateOwners（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: runController（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: onOuterAbort（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: dispatches（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: PendingDispatch（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: pendingQueue（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: logWork（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: commitQueue（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: exclusiveActive（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: driving（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: driverRun（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: wakeup（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: commitHead（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: flight（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: drainDispatches（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: runOver（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: subCallId（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: DispatchOutcome（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: scheduler（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: parked（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: runtimes（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: logsText（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-export-removed]** `packages/core/tools/src/ptc.ts` — 导出（含 re-export）删除: sandboxText（原声明于 packages/core/tools/src/ptc.ts）
- **[ast-signature-changed]** `packages/core/tools/src/executor.ts` — 签名变化: ToolCallResult
    旧: export type ToolCallResult = | { deny: string; result?: undefined; isError?: undefined } | { result: unknown; isError?: true; deny?: undefined }
    新: export interface ToolCallResult { readonly callId: ToolCallId readonly result: ToolExecutionResult }
- **[ast-export-removed]** `packages/llm/token-meter/src/usage-projection.ts` — 导出（含 re-export）删除: zeroBuckets（原声明于 packages/llm/token-meter/src/usage-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/usage-projection.ts` — 导出（含 re-export）删除: bucketsFrom（原声明于 packages/llm/token-meter/src/usage-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/usage-projection.ts` — 导出（含 re-export）删除: bucketsEqual（原声明于 packages/llm/token-meter/src/usage-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/usage-projection.ts` — 导出（含 re-export）删除: addReplacing（原声明于 packages/llm/token-meter/src/usage-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/usage-projection.ts` — 导出（含 re-export）删除: projectionSchema（原声明于 packages/llm/token-meter/src/usage-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/usage-projection.ts` — 导出（含 re-export）删除: tokenUsageStateSchema（原声明于 packages/llm/token-meter/src/usage-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/usage-projection.ts` — 导出（含 re-export）删除: TokenUsageState（原声明于 packages/llm/token-meter/src/usage-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/usage-projection.ts` — 导出（含 re-export）删除: pressureSchema（原声明于 packages/llm/token-meter/src/usage-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/usage-projection.ts` — 导出（含 re-export）删除: pressureFrom（原声明于 packages/llm/token-meter/src/usage-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/usage-projection.ts` — 导出（含 re-export）删除: usageOf（原声明于 packages/llm/token-meter/src/usage-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/usage-projection.ts` — 导出（含 re-export）删除: contextPressureStateSchema（原声明于 packages/llm/token-meter/src/usage-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/usage-projection.ts` — 导出（含 re-export）删除: ContextPressureState（原声明于 packages/llm/token-meter/src/usage-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/usage-projection.ts` — 导出（含 re-export）删除: tokenUsageProjectionDefinition（原声明于 packages/llm/token-meter/src/usage-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/usage-projection.ts` — 导出（含 re-export）删除: sample（原声明于 packages/llm/token-meter/src/usage-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/usage-projection.ts` — 导出（含 re-export）删除: buckets（原声明于 packages/llm/token-meter/src/usage-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/usage-projection.ts` — 导出（含 re-export）删除: contextPressureProjectionDefinition（原声明于 packages/llm/token-meter/src/usage-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/usage-projection.ts` — 导出（含 re-export）删除: pressureTokens（原声明于 packages/llm/token-meter/src/usage-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/breakdown-projection.ts` — 导出（含 re-export）删除: tokenCount（原声明于 packages/llm/token-meter/src/breakdown-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/breakdown-projection.ts` — 导出（含 re-export）删除: breakdownSchema（原声明于 packages/llm/token-meter/src/breakdown-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/breakdown-projection.ts` — 导出（含 re-export）删除: systemNodeSchema（原声明于 packages/llm/token-meter/src/breakdown-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/breakdown-projection.ts` — 导出（含 re-export）删除: claimSchema（原声明于 packages/llm/token-meter/src/breakdown-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/breakdown-projection.ts` — 导出（含 re-export）删除: contextBreakdownStateSchema（原声明于 packages/llm/token-meter/src/breakdown-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/breakdown-projection.ts` — 导出（含 re-export）删除: ContextBreakdownState（原声明于 packages/llm/token-meter/src/breakdown-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/breakdown-projection.ts` — 导出（含 re-export）删除: SystemNode（原声明于 packages/llm/token-meter/src/breakdown-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/breakdown-projection.ts` — 导出（含 re-export）删除: BreakdownClaim（原声明于 packages/llm/token-meter/src/breakdown-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/breakdown-projection.ts` — 导出（含 re-export）删除: SurfaceTotals（原声明于 packages/llm/token-meter/src/breakdown-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/breakdown-projection.ts` — 导出（含 re-export）删除: placeSurfaceEvent（原声明于 packages/llm/token-meter/src/breakdown-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/breakdown-projection.ts` — 导出（含 re-export）删除: isSystem（原声明于 packages/llm/token-meter/src/breakdown-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/breakdown-projection.ts` — 导出（含 re-export）删除: withTotals（原声明于 packages/llm/token-meter/src/breakdown-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/breakdown-projection.ts` — 导出（含 re-export）删除: surfaceTokens（原声明于 packages/llm/token-meter/src/breakdown-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/breakdown-projection.ts` — 导出（含 re-export）删除: systemTokens（原声明于 packages/llm/token-meter/src/breakdown-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/breakdown-projection.ts` — 导出（含 re-export）删除: messageTokens（原声明于 packages/llm/token-meter/src/breakdown-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/breakdown-projection.ts` — 导出（含 re-export）删除: breakdown（原声明于 packages/llm/token-meter/src/breakdown-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/breakdown-projection.ts` — 导出（含 re-export）删除: withoutClaim（原声明于 packages/llm/token-meter/src/breakdown-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/breakdown-projection.ts` — 导出（含 re-export）删除: contextBreakdownProjectionDefinition（原声明于 packages/llm/token-meter/src/breakdown-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/breakdown-projection.ts` — 导出（含 re-export）删除: unclaimed（原声明于 packages/llm/token-meter/src/breakdown-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/breakdown-projection.ts` — 导出（含 re-export）删除: toolsTokens（原声明于 packages/llm/token-meter/src/breakdown-projection.ts）
- **[ast-export-removed]** `packages/ptc-runtime/ptc-runtime-node/src/launch.ts` — 导出（含 re-export）删除: moduleName（原声明于 packages/ptc-runtime/ptc-runtime-node/src/launch.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/domain.ts` — 导出（含 re-export）删除: IANA_ZONE（原声明于 packages/schedule/schedule/src/domain.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/domain.ts` — 导出（含 re-export）删除: CalendarParts（原声明于 packages/schedule/schedule/src/domain.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/domain.ts` — 导出（含 re-export）删除: calendarEpoch（原声明于 packages/schedule/schedule/src/domain.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/domain.ts` — 导出（含 re-export）删除: localInstant（原声明于 packages/schedule/schedule/src/domain.ts）
- **[ast-export-removed]** `packages/test-support/client-runtime/src/access.ts` — 导出（含 re-export）删除: allowAllRemoteAccess（原声明于 packages/test-support/client-runtime/src/access.ts）
- **[ast-export-removed]** `packages/web/web-fetch-http/src/provider.ts` — 导出（含 re-export）删除: HttpFetchResolver（原声明于 packages/web/web-fetch-http/src/provider.ts）
- **[ast-export-removed]** `packages/web/web-fetch-http/src/provider.ts` — 导出（含 re-export）删除: addresses（原声明于 packages/web/web-fetch-http/src/provider.ts）
- **[config-field-removed]** `config:@deepseek-ai/dsh-tool-subagent` — 配置字段被删除: modelSelectionSettings（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-tools` — 配置字段被删除: mode（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-tools` — 配置字段被删除: maxParallelSubCalls（cordis.yml 里写这些字段将失效）

## warning

- **[exports-map-changed]** `packages/acp/acp/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/api/remote-access/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/boot/plugin-manager/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/boot/plugin-market/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/browser-use/browser-use/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/bundle/acp-app/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/bundle/headless/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/bundle/sdk-app/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-chat/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-plugin-market/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-settings-account/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-trajectory/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/computer-use/computer-use/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/context/harness-dev-context/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/context/tmux-context/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/core/tools/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/experimental/browser-use-stagehand-native/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/experimental/claude-code-mods/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/experimental/client-ui-claude-code-mods/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/experimental/cua/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/experimental/cua-macos/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/experimental/hooks-claude-code/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/experimental/hooks-codex/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/experimental/ptc-runtime-python/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/experimental/session-title-all-prompts-llm/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/experimental/tool-session-query/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/experimental/tool-terminal/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/experimental/translator/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/experimental/webhook/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/experimental/webhook-github/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/experimental/worktree/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/fs/fs-local/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/fs/tool-str-replace-editor/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/host/frontend-static/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/lsp/lsp/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/lsp/lsp-stdio/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/lsp/tool-lsp/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/mcp/mcp-client/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/ptc-runtime/ptc-runtime-node/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/schedule/tool-schedule/package.json` — package.json exports 字段变化，请人工确认入口路径
- ★ **[exports-map-changed]** `packages/sdk/server/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/session/tool-working-directory/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/session/working-directory/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/shell/bash-local/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/shell/pwsh-local/package.json` — package.json exports 字段变化，请人工确认入口路径
- ★ **[exports-map-changed]** `packages/skill/skill-office/package.json` — package.json exports 字段变化，请人工确认入口路径
- ★ **[exports-map-changed]** `packages/skill/tool-workspace-dependencies/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/ssh/fs-ssh/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/ssh/sandbox-ssh/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/ssh/ssh/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/ssh/subprocess-ssh/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/storage/storage-sqlite/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/subagent/subagent-acp/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/subagent/subagent-dsh-sdk/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/subagent/tool-subagent-control/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/web/web-search-exa/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/web/web-search-perplexity/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[doc-major-rewrite]** `docs/subsystems/boot.md` — 行数 335 -> 473（41%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/boot.zh.md` — 行数 335 -> 473（41%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/computer-use.md` — 行数 36 -> 97（169%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/computer-use.zh.md` — 行数 36 -> 97（169%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/session-projection.md` — 行数 313 -> 411（31%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/session-projection.zh.md` — 行数 313 -> 411（31%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/token-meter.md` — 行数 86 -> 126（47%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/token-meter.zh.md` — 行数 86 -> 126（47%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/worktrees.md` — 行数 56 -> 103（84%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/worktrees.zh.md` — 行数 56 -> 103（84%），可能存在行为级变更，建议人工复核
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.2/cordis-timer-wrappers/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.2/cordis-timer-wrappers/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.2/plugin-manager-view-fields/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.2/plugin-manager-view-fields/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.4/model-switch-compaction/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.4/model-switch-compaction/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.4/session-model-selection/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.4/session-model-selection/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.1/agent-instructions-chain-budgets/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.1/agent-instructions-chain-budgets/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.1/subagent-control-tools/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.1/subagent-control-tools/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/approval-projection-dependency/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/approval-projection-dependency/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/auto-review-shutdown/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/auto-review-shutdown/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/auto-review-user-sources/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/auto-review-user-sources/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/built-in-japanese/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/built-in-japanese/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/conditional-tools/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/conditional-tools/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/cua-consent-storage/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/cua-consent-storage/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/cua-preset-scope/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/cua-preset-scope/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/cua-relative-coordinates/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/cua-relative-coordinates/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/file-drag-callbacks/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/file-drag-callbacks/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/headless-policy-composition/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/headless-policy-composition/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/model-badge-package-removal/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/model-badge-package-removal/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/node-24/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/node-24/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/official-bundle-lists/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/official-bundle-lists/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/persistent-terminal-controls/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/persistent-terminal-controls/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/pi-ai-default-capacities/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/pi-ai-default-capacities/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/pi-ai-model-catalog/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/pi-ai-model-catalog/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/pi-ai-protocol-replay/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/pi-ai-protocol-replay/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/ptc-script-format/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/ptc-script-format/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/sdk-desktop-context/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/sdk-desktop-context/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/sdk-minimal-checkpoints/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/sdk-minimal-checkpoints/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/session-projection-handles/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/session-projection-handles/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/session-store-writes/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/session-store-writes/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/tool-executor-plugins/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/tool-executor-plugins/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/web-fetch-private-destinations/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/web-fetch-private-destinations/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/webserver-index-peer/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/webserver-index-peer/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/attachment-read-access/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/attachment-read-access/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/cua-bundle-id-consent/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/cua-bundle-id-consent/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/generated-worktree-names/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/generated-worktree-names/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/independent-session-forks/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/independent-session-forks/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/ptc-caller-cancellation/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/ptc-caller-cancellation/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/session-follow-activation/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/session-follow-activation/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.4/model-listing-refresh/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.4/model-listing-refresh/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[ast-signature-changed]** `packages/acp/acp` — 签名变化: record
    旧: function(value:unknown)
    新: var
- **[ast-signature-changed]** `packages/experimental/plugin-recommendations` — 签名变化: settled
    旧: var
    新: function(decision:ActionCardDecision)
- **[ast-signature-changed]** `packages/experimental/plugin-recommendations` — 签名变化: refused
    旧: function(problem:PluginInspectProblem,reason:string)
    新: function(reason:string)
- **[ast-signature-changed]** `packages/boot/plugin-manager` — 签名变化: registries
    旧: var:Registry[]
    新: var
- **[ast-signature-changed]** `packages/boot/plugin-manager` — 签名变化: answer
    旧: var:unknown
    新: var
- **[ast-signature-changed]** `packages/boot/plugin-manager` — 签名变化: listing
    旧: var
    新: var:Pick<BundleInfo, 'listedByDefault'>
- **[ast-signature-changed]** `packages/bundle/headless` — 签名变化: AdoptableHeader
    旧: interface AdoptableHeader { cwd?: string | undefined origin?: 'subagent' | undefined parentSession?: SessionId | undefined agentPreset?: string | undefined }
    新: interface AdoptableHeader { cwd?: string | undefined origin?: 'subagent' | undefined agentPreset?: string | undefined }
- **[ast-signature-changed]** `packages/bundle/headless` — 签名变化: resolveAgent
    旧: function(ctx:Context,agents:Context['agents'],sessionId:SessionId,agentOptions:{ provider: string; model: string },setup:(agentCtx: Context) => void,cwd:string)
    新: function(ctx:Context,agents:Context['agents'],sessionId:SessionId,agentOptions:AgentOptions,setup:(agentCtx: Context, agent: Agent) => void | Promise<void>,cwd:string)
- **[ast-signature-changed]** `packages/client/file-upload` — 签名变化: StagedFileUpload
    旧: interface StagedFileUpload { readonly file: FileAttachmentRef /** Prompt that accepted this receipt; absent until successful admission. */ requestId?: string }
    新: interface StagedFileUpload { readonly attachment: StagedAttachment /** Prompt that accepted this receipt; absent until successful admission. */ requestId?: string }
- **[ast-signature-changed]** `packages/client/file-upload` — 签名变化: file
    旧: var:FileAttachmentRef
    新: var
- **[ast-signature-changed]** `packages/client/modules` — 签名变化: PkgMeta
    旧: interface PkgMeta extends WebBootRowFields { clientPath: string }
    新: interface PkgMeta extends WebBootRowFields { clientPath: string /** The package's own manifest; package-asset requests resolve against it as a self-reference. */ manifestPath: string }
- **[ast-signature-changed]** `packages/client/modules` — 签名变化: ClientPackageSource
    旧: interface ClientPackageSource extends ResolvedPkgMeta { /** Loader specifier from the active row. */ loaderName: string /** Resolution base of the config tree that owns the row. */ baseUrl: string /** Stable cache and contribution key for this source. */ sourceKey: string }
    新: interface ClientPackageSource extends ResolvedPkgMeta { /** Loader specifier from the active row. */ loaderName: string /** Resolution base of the config tree that owns the row. */ baseUrl: string /** Stable source identity and contribution key. */ sourceKey: string }
- **[ast-signature-changed]** `packages/boot/plugin-market` — 签名变化: sources
    旧: var:ClientPackageSource[]
    新: var
- **[ast-signature-changed]** `packages/compaction/compaction-basic` — 签名变化: reservedCompletionTokens
    旧: function(agent:Agent,defaultMaxTokens:number | undefined)
    新: function(header:EpochHeader,defaultMaxTokens:number | undefined)
- **[ast-signature-changed]** `packages/core/system-prompt` — 签名变化: assembly
    旧: var
    新: var:PromptPresentation
- **[ast-signature-changed]** `packages/llm/llm` — 签名变化: messages
    旧: var
    新: var:RequestMessage[]
- **[ast-signature-changed]** `packages/boot/plugin-market` — 签名变化: location
    旧: var
    新: var:DetailLocation
- **[ast-signature-changed]** `packages/core/agent` — 签名变化: CreateAgentOptions
    旧: export interface CreateAgentOptions { /** The live agent/session identity. */ readonly sessionId: SessionId /** Live parent Agent for runtime ownership; omit for a root Agent. */ readonly parentAgent?: Agent /** * Session creation metadata: validated absolute `cwd`, `parentSession` * fork lineage, the `isSeeded` fork marker, the coarse `origin` * classification, and the `delegationDepth` recursion budget. Mirrors the * `cwd`/`parentSession`/`isSeeded`/`origin`/`delegationDepth` fields of * {@link CreateSessionOptions.meta} in dsh-session (the internal-only * `createdAt`, used when reconstructing a persisted session, is deliberately * excluded — a factory caller never sets it). This is durable session data, * so the session boundary validates and snapshots it before asynchronous * setup begins. */ readonly meta?: { readonly cwd?: string readonly parentSession?: SessionId readonly isSeeded?: boolean readonly origin?: 'subagent' readonly delegationDepth?: number readonly agentPreset?: string } /** Exact fork-inherited prefix length when the session metadata sets `isSeeded`. */ readonly inheritedEventCount?: SessionLogOffset /** * Initial replay/fork history, contiguous from seq 0 with lossless-JSON data. * A fork supplies an exact parent prefix, its inherited marker, and closers * for the open tail. Previously closed steps and turns remain unchanged. * The factory validates and snapshots the seed before publication. */ readonly seed?: readonly SessionEvent[] /** Per-agent options (model, …). */ readonly agentOptions?: AgentOptions /** Optional creation-only cancellation signal; detached before the returned handle becomes visible. */ readonly signal?: AbortSignal /** * Creation-time composition of the agent's scoped world. The factory awaits * setup after minting `agentCtx` but BEFORE inserting or announcing either * the session or agent, so observers can never see a partially configured * world. Setup may return an {@link AgentSetupCommit}; the factory invokes its * synchronous `commit()` after every setup await settles and immediately * before registry publication. This lets mutable provisioning revalidate at * the exact publication boundary. Everything registered through `agentCtx` * (scoped tools, prompt sections/variables, `restrict()`, listeners, awaited * child plugins) exists before `session/created`, `agent/created`, * and the first prompt assembly. A setup * throw/rejection, commit throw, or owner disposal rolls the scope back * without publishing either id. * * **Setup composes, it never drives**: the callback is trusted same-process * code and receives the full scoped context, so this is a contract rather * than a runtime restriction. Drive the agent only after creation resolves. */ readonly setup?: AgentSetup }
    新: export interface CreateAgentOptions { /** The live agent/session identity. */ readonly sessionId: SessionId /** Live parent Agent for runtime ownership; omit for a root Agent. */ readonly parentAgent?: Agent /** * Session creation metadata: validated absolute `cwd`, `parentSession` * fork lineage, the `isSeeded` fork marker, the coarse `origin` * classification, and the `delegationDepth` recursion budget. Mirrors the * `cwd`/`parentSession`/`isSeeded`/`origin`/`delegationDepth` fields of * {@link CreateSessionOptions.meta} in dsh-session (the internal-only * `createdAt`, used when reconstructing a persisted session, is deliberately * excluded — a factory caller never sets it). This is durable session data, * so the session boundary validates and snapshots it before asynchronous * setup begins. */ readonly meta?: { readonly cwd?: string readonly parentSession?: SessionId readonly isSeeded?: boolean readonly origin?: 'subagent' readonly delegationDepth?: number readonly agentPreset?: string } /** Exact fork-inherited prefix length when the session metadata sets `isSeeded`. */ readonly inheritedEventCount?: SessionLogOffset /** * Initial replay/fork history, contiguous from seq 0 with lossless-JSON data. * A fork supplies an exact parent prefix, its inherited marker, and closers * for the open tail. Previously closed steps and turns remain unchanged. * The factory validates and snapshots the seed before publication. */ readonly seed?: readonly SessionEvent[] /** Route fallback and output controls; see {@link AgentOptions} for live accessor semantics. */ readonly agentOptions?: AgentOptions /** Optional creation-only cancellation signal; detached before the returned handle becomes visible. */ readonly signal?: AbortSignal /** * Creation-time composition of the agent's scoped world. The factory awaits * setup after minting `agentCtx`, entering the SessionStore, and completing * `session/created`. The Session * accepts live events during setup; the Agent remains outside its registry * until setup completes. Agent creation is announced after setup. Setup may return an {@link AgentSetupCommit}; the factory invokes its * synchronous `commit()` after every setup await settles and immediately * before registry publication. This lets mutable provisioning revalidate at * the exact publication boundary. Everything registered through `agentCtx` * (scoped tools, prompt sections/variables, `restrict()`, listeners, awaited * child plugins) exists before `agent/created`, * and the first prompt assembly. A setup * throw/rejection, commit throw, or owner disposal rolls the scope back * without announcing Agent creation. Already committed Session events remain stored. * * **Setup composes, it never drives**: the callback is trusted same-process * code and receives the full scoped context, so this is a contract rather * than a runtime restriction. Drive the agent only after creation resolves. */ readonly setup?: AgentSetup }
- **[ast-signature-changed]** `packages/core/agent` — 签名变化: ResumeAgentOptions
    旧: export interface ResumeAgentOptions { /** The persisted session id to load and use as the live agent/session identity. */ readonly resumeSessionId: SessionId /** Live parent Agent for runtime ownership; omit for a root Agent. */ readonly parentAgent?: Agent /** Per-agent options (model, …). */ readonly agentOptions?: AgentOptions /** Optional creation-only cancellation signal for persistence load/setup; detached before return. */ readonly signal?: AbortSignal /** * Resume-time composition of the agent's fresh scoped world. Persistence is * loaded first; the factory then mints `agentCtx` and awaits setup while the * reconstructed session and agent remain unpublished. The callback has the * same trusted composition-only contract and optional synchronous * publication commit as {@link CreateAgentOptions.setup}: all registrations * exist before either creation announcement, and rejection, commit failure, * or owner disposal rolls the transaction back without publishing either id. */ readonly setup?: AgentSetup }
    新: export interface ResumeAgentOptions { /** The persisted session id to load and use as the live agent/session identity. */ readonly resumeSessionId: SessionId /** Live parent Agent for runtime ownership; omit for a root Agent. */ readonly parentAgent?: Agent /** Route fallback and output controls; see {@link AgentOptions} for live accessor semantics. */ readonly agentOptions?: AgentOptions /** Optional creation-only cancellation signal for persistence load/setup; detached before return. */ readonly signal?: AbortSignal /** * Resume-time composition of the agent's fresh scoped world. Persistence is * loaded first; the factory then enters and announces the reconstructed Session and awaits * setup in the fresh `agentCtx` before registering the Agent. The callback has the * same trusted composition-only contract and optional synchronous * publication commit as {@link CreateAgentOptions.setup}: all registrations * exist before Agent creation is announced, and rejection, commit failure, * or owner disposal unwinds the transaction while preserving pending inbox input. */ readonly setup?: AgentSetup }
- **[ast-signature-changed]** `packages/core/agent` — 签名变化: AgentFactory
    旧: export interface AgentFactory { /** * Create a new agent on a caller-supplied session id. Async because creation * awaits unpublished setup, invokes its optional synchronous commit, inserts * both session and agent, announces session creation, and awaits serial * `agent/created` listeners before releasing queued work. The sequence is * rollback-covered, but notifications delivered before a later listener * failure remain observable; every agent or session creation announcement * that began is paired by `agent/disposed` or `session/disposed` during * rollback. The owner disposes the resolved handle to stop/drain, * unregister, remove the session, and unwind the scope. * The registry passes a context carrying the `create()` caller's fiber and * scope as `ownerCtx`. The implementation attaches the unpublished * transaction and resulting lifecycle to that owner; it must not infer * ownership from the factory object's registration context. * @param ownerCtx - caller-bound context that owns the transaction and live handle. * @param options - agent/session identity, configuration, optional live parent, and setup. * @returns the owned handle after setup and both creation announcements complete. */ createAgent(ownerCtx: Context, options: CreateAgentOptions): Promise<AgentHandle> /** * Resume an agent on a persisted session. Async because it opens the * persisted session for write, reads and repairs the log, publishes it, and * awaits the optional unpublished setup transaction; must be called after * `ctx.sessionPersistence` exists (consumers inject `sessionPersistence`). * Publication follows the same setup-commit and ordered boundary as * {@link createAgent}. * @param ownerCtx - caller-bound context that owns load, setup, and the live handle. * @param options - persisted identity, configuration, optional live parent, and setup. * @returns the owned handle after setup, both announcements, and loop start complete. */ resume(ownerCtx: Context, options: ResumeAgentOptions): Promise<AgentHandle> }
    新: export interface AgentFactory { /** * Create a new agent on a caller-supplied session id. Async because creation * enters and announces the Session, awaits setup and its optional synchronous commit, * inserts the Agent, and awaits serial * `agent/created` listeners before releasing queued work. The sequence is * rollback-covered, but notifications delivered before a later listener * failure remain observable; every agent or session creation announcement * that began is paired by `agent/disposed` or `session/disposed` during * rollback. Once Agent initialization begins, failures reject after its * scope and acquired write handle finish cleanup. Cancellation during * persistence acquisition may reject before a late handle is available to close. * The owner disposes the resolved handle to stop/drain, * unregister, remove the session, and unwind the scope. * The registry passes a context carrying the `create()` caller's fiber and * scope as `ownerCtx`. The implementation attaches the unpublished * transaction and resulting lifecycle to that owner; it must not infer * ownership from the factory object's registration context. * @param ownerCtx - caller-bound context that owns the transaction and live handle. * @param options - agent/session identity, configuration, optional live parent, and setup. * @returns the owned handle after setup and both creation announcements complete. */ createAgent(ownerCtx: Context, options: CreateAgentOptions): Promise<AgentHandle> /** * Resume an agent on a persisted session. Async because it opens the * persisted session for write, reads and repairs the log, publishes it, and * awaits the optional unpublished setup transaction; must be called after * `ctx.sessionPersistence` exists (consumers inject `sessionPersistence`). * Initialization cleanup and publication follow the same timing as * {@link createAgent}. * @param ownerCtx - caller-bound context that owns load, setup, and the live handle. * @param options - persisted identity, configuration, optional live parent, and setup. * @returns the owned handle after setup, both announcements, and loop start complete. */ resume(ownerCtx: Context, options: ResumeAgentOptions): Promise<AgentHandle> }
- **[ast-signature-changed]** `packages/core/session` — 签名变化: SessionEntry
    旧: interface SessionEntry { readonly id: SessionId readonly session: Session readonly carrier: Scoped<Session> readonly emitCtx: Context announced: boolean announcing: boolean appending: boolean detachRequested: boolean detach(): void }
    新: interface SessionEntry { readonly id: SessionId readonly session: Session readonly carrier: Scoped<Session> readonly emitCtx: Context announcement: 'pending' | 'dispatching' | 'complete' | 'failed' appending: boolean detachRequested: boolean detach(): void }
- **[ast-signature-changed]** `packages/core/tools` — 签名变化: AssembleContext
    旧: export interface AssembleContext { /** * Scope whose providers and waterfall listeners participate. When absent, * only global providers and subject-less listeners participate. */ scope?: ScopeKey /** Explicit control signal for the turn that requested this assembly, when any. */ signal?: AbortSignal }
    新: interface AssembleContext { /** Step-owned tool selection; absent when inspecting registered definitions. */ toolSet?: ResolvedToolSet }
- **[ast-signature-changed]** `packages/core/system-prompt` — 签名变化: PromptAssembly
    旧: export interface PromptAssembly { sections: AssembledSection[] contexts: AssembledContext[] tools: ToolSchema[] variables: Record<string, string | undefined> }
    新: export interface PromptAssembly extends PromptPresentation { tools: ToolSchema[] }
- **[ast-signature-changed]** `packages/core/tool-executor-ptc` — 签名变化: SDK_RENDERERS
    旧: var:Record<string, (schemas: ToolSdkSchema[], programFormat: 'function-body' | 'repl') => string>
    新: var
- **[ast-signature-changed]** `packages/core/tools/src/contracts.ts` — 签名变化: ToolDefinition
    旧: export interface ToolDefinition extends ToolSchema { /** Mandatory canonical output declaration. */ readonly output: ToolOutputDefinition /** * Run one accepted call and return only its canonical lossless-JSON value. * Async work must observe or forward `exec.signal` and settle only after its * owned work reaches quiescence. The registry preserves caller cancellation * through around-dispatch signal replacement and does not abandon this * promise, but it cannot hard-kill same-process code. * @param args - losslessly snapshotted, frozen model arguments. * @param exec - execution identity, cancellation signal, and context deferral. * @returns the canonical value declared by `output.schema`. */ execute(args: unknown, exec: ToolRunContext): Promise<unknown> /** * Install execution-prepared content before `tools/post-execute` policies. * The callback is captured when the call starts and runs once for a * normalized outcome entering post-execute. Policy replacements remain * authoritative; pipeline failures that bypass post-execute skip projection. * @param exec - immutable execution identity and arguments. * @param result - normalized result before post-execute policy. * @returns replacement content, or undefined to preserve the renderer output. */ projectContent?(exec: Readonly<ToolExecution>, result: Readonly<ToolExecutionResult>): ContentBlock[] | undefined /** * Synchronous last-mile transform for model-facing content. The registry * snapshots this callback when execution starts and invokes it exactly once * for every normalized outcome, including pipeline failures that bypass * `tools/post-execute`, immediately before lossless materialization. * Returning `undefined` preserves the content; every other result field * remains registry-owned. The callback must be total and must not throw. * @param exec - immutable execution identity and arguments. * @param result - complete normalized outcome before materialization. * @returns replacement content, or `undefined` to preserve it. */ finalizeContent?(exec: Readonly<ToolExecution>, result: Readonly<ToolExecutionResult>): ContentBlock[] | undefined /** * Cooperative tool-call timeout budget in milliseconds. Omit for no deadline. * Enforced by `@deepseek-ai/dsh-tool-call-timeout-policy` (a `tools/execute` wrapper); it * is NEVER sent to the model — `schemas()` whitelists only name/description/ * parameters. Declaring it asserts this tool forwards `exec.signal` to a * cooperative implementation that can reach quiescence when the signal aborts. */ timeoutMs?: number /** * Pure synchronous classifier for overlap with sibling tool calls. Only * `true` opts in; omission, exceptions, non-`true` returns, and invalid * `defineTool` arguments are exclusive. This metadata is never model-visible. * * Opted-in executions must not mutate parent-owned state. Shared state must * tolerate concurrent dispatch; recorder races are permitted only when they * commute or fail closed. See the * [parallel-tool-call Agent Note](../../../../.agents/notes/implemented/feature/2026-07-10-parallel-tool-call-execution.md) * for the full contract. * @param args - parsed arguments; `defineTool` validates before calling. * @returns Whether this call may join a parallel group. */ isConcurrencySafe?(args: unknown): boolean /** * Optional: how to present the PENDING state of one call in a UI, derived from * the call's `args` (parsed arguments, `unknown` — the tool validates/narrows * its own input). Returns a {@link ToolCallView} (a `card`-tagged render intent), * or `undefined` (or omit the method) to fall back to a generic presentation * (title = tool name, raw args as input). Pure and side-effect-free: a UI may * call it during live streaming AND a session-log replay, so it must depend * only on `args`. */ presentCall?(args: unknown): ToolCallView | undefined /** * Optional: how to present the COMPLETED state, given the same `args` and the * durable result projection (`content`, failure state, and optional `meta`). Returns a * {@link ToolResultView}, or `undefined` (or omit the method) to keep the * pending title and render the raw result content. Pure and side-effect-free * for the same replay reason. */ presentResult?(args: unknown, result: ToolResult): ToolResultView | undefined }
    新: export interface ToolDefinition extends ToolSchema { /** Mandatory canonical output declaration. */ readonly output: ToolOutputDefinition /** * Run one accepted call and return only its canonical lossless-JSON value. * Async work must observe or forward `exec.signal` and settle only after its * owned work reaches quiescence. The executor preserves caller cancellation * through around-dispatch signal replacement and does not abandon this * promise, but it cannot hard-kill same-process code. * @param args - losslessly snapshotted, frozen model arguments. * @param exec - execution identity, cancellation signal, and context deferral. * @returns the canonical value declared by `output.schema`. */ execute(args: unknown, exec: ToolRunContext): Promise<unknown> /** * Install execution-prepared content before `tools/post-execute` policies. * The callback is captured when the call starts and runs once for a * normalized outcome entering post-execute. Policy replacements remain * authoritative; pipeline failures that bypass post-execute skip projection. * @param exec - immutable execution identity and arguments. * @param result - normalized result before post-execute policy. * @returns replacement content, or undefined to preserve the renderer output. */ projectContent?(exec: Readonly<ToolExecution>, result: Readonly<ToolExecutionResult>): ContentBlock[] | undefined /** * Synchronous last-mile transform for model-facing content. The executor * snapshots this callback when execution starts and invokes it exactly once * for every normalized outcome, including pipeline failures that bypass * `tools/post-execute`, immediately before lossless materialization. * Returning `undefined` preserves the content; every other result field * remains executor-owned. The callback must be total and must not throw. * @param exec - immutable execution identity and arguments. * @param result - complete normalized outcome before materialization. * @returns replacement content, or `undefined` to preserve it. */ finalizeContent?(exec: Readonly<ToolExecution>, result: Readonly<ToolExecutionResult>): ContentBlock[] | undefined /** * Cooperative tool-call timeout budget in milliseconds. Omit for no deadline. * Enforced by `@deepseek-ai/dsh-tool-call-timeout-policy` (a `tools/execute` wrapper); it * is NEVER sent to the model — `schemas()` whitelists only name/description/ * parameters. Declaring it asserts this tool forwards `exec.signal` to a * cooperative implementation that can reach quiescence when the signal aborts. */ timeoutMs?: number /** * Pure synchronous classifier for overlap with sibling tool calls. Only * `true` opts in; omission, exceptions, non-`true` returns, and invalid * `defineTool` arguments are exclusive. This metadata is never model-visible. * * Opted-in executions must not mutate parent-owned state. Shared state must * tolerate concurrent dispatch; recorder races are permitted only when they * commute or fail closed. See the * [parallel-tool-call Agent Note](../../../../.agents/notes/implemented/feature/2026-07-10-parallel-tool-call-execution.md) * for the full contract. * @param args - parsed arguments; `defineTool` validates before calling. * @returns Whether this call may join a parallel group. */ isConcurrencySafe?(args: unknown): boolean /** * Optional: how to present the PENDING state of one call in a UI, derived from * the call's `args` (parsed arguments, `unknown` — the tool validates/narrows * its own input). Returns a {@link ToolCallView} (a `card`-tagged render intent), * or `undefined` (or omit the method) to fall back to a generic presentation * (title = tool name, raw args as input). Pure and side-effect-free: a UI may * call it during live streaming AND a session-log replay, so it must depend * only on `args`. */ presentCall?(args: unknown): ToolCallView | undefined /** * Optional: how to present the COMPLETED state, given the same `args` and the * durable result projection (`content`, failure state, and optional `meta`). Returns a * {@link ToolResultView}, or `undefined` (or omit the method) to keep the * pending title and render the raw result content. Pure and side-effect-free * for the same replay reason. */ presentResult?(args: unknown, result: ToolResult): ToolResultView | undefined }
- **[ast-signature-changed]** `packages/core/tools/src/contracts.ts` — 签名变化: ToolExecutionInput
    旧: export interface ToolExecutionInput { readonly callId: ToolCallId /** * Root model-requested call owning this execution tree. Callers omit it for * a root execution; nested dispatchers propagate the enclosing value. */ readonly rootCallId?: ToolCallId readonly name: string /** Binding-time tool schema for a PTC inner call; frozen by its producer and never logged. */ readonly schema?: ToolSchema /** Losslessly JSON-serializable parsed arguments (tools validate their own schema). */ readonly arguments: unknown /** The agent on whose behalf the call runs (set by the agent loop). */ readonly agent?: Agent /** * Opaque token of the enclosing transport execution, when one exists. PTC * mode sets this on SDK sub-dispatches so commit-style observers can wait for * the outer `run_code` outcome without receiving its live mutable execution. * The token also marks the call as a transport sub-dispatch rather than a * model-direct call: under `mode: 'ptc'`, only calls WITH a parent may * execute a native tool name — a model-direct call (no parent) is denied as * `UNKNOWN_TOOL` before the policy pipeline. See {@link ToolRuntime.execute}. */ readonly parent?: ToolExecutionToken /** Required caller-owned cancellation for this invocation. */ readonly signal: AbortSignal }
    新: export interface ToolExecutionInput { readonly callId: ToolCallId /** * Root model-requested call owning this execution tree. Callers omit it for * a root execution; nested dispatchers propagate the enclosing value. */ readonly rootCallId?: ToolCallId readonly name: string /** Binding-time tool schema for a PTC inner call; frozen by its producer and never logged. */ readonly schema?: ToolSchema /** Losslessly JSON-serializable parsed arguments (tools validate their own schema). */ readonly arguments: unknown /** The agent on whose behalf the call runs (set by the agent loop). */ readonly agent?: Agent /** Step admission shared by Native and PTC dispatch. Conditional tools require it. */ readonly toolSet?: ResolvedToolSet /** * Opaque token of the enclosing transport execution, when one exists. PTC * mode sets this on SDK sub-dispatches so commit-style observers can wait for * the outer `run_code` outcome without receiving its live mutable execution. * The token also marks the call as a transport sub-dispatch rather than a * model-direct call: with the PTC executor selected, only calls with a parent may * execute a native tool name — a model-direct call (no parent) is denied as * `UNKNOWN_TOOL` before the policy pipeline. */ readonly parent?: ToolExecutionToken /** Required caller-owned cancellation for this invocation. */ readonly signal: AbortSignal }
- **[ast-signature-changed]** `packages/core/tools/src/contracts.ts` — 签名变化: ToolExecution
    旧: export interface ToolExecution extends ToolExecutionInput { /** Root model-requested call, resolved for every root and nested execution. */ readonly rootCallId: ToolCallId /** Registry-assigned identity shared with nested calls only as their opaque `parent` token. */ readonly token: ToolExecutionToken }
    新: export interface ToolExecution extends ToolExecutionInput { /** Root model-requested call, resolved for every root and nested execution. */ readonly rootCallId: ToolCallId /** Executor-assigned identity shared with nested calls only as their opaque `parent` token. */ readonly token: ToolExecutionToken }
- **[ast-signature-changed]** `packages/core/tools/src/contracts.ts` — 签名变化: ToolNotFoundError
    旧: class
    新: class(toolName:string,?reachableFrom:string)
- **[ast-signature-changed]** `packages/core/tools/src/contracts.ts` — 签名变化: ToolOutputError
    旧: class
    新: class(toolName:string,violations:string[])
- **[ast-signature-changed]** `packages/core/tools` — 签名变化: ToolView
    旧: interface ToolView { /** Visible definitions after restrictions, scoped shadowing, and transport insertion. */ readonly visible: ReadonlyMap<string, ToolDefinition> /** Pre-restriction capability names used by prompt-order validation. */ readonly knownNames: ReadonlySet<string> /** Current global names that a scoped restriction may name. */ readonly restrictableNames: ReadonlySet<string> }
    新: interface ToolView { /** Visible definitions after restrictions, scoped shadowing, and inherited restrictions. */ readonly visible: ReadonlyMap<string, ToolDefinition> /** Registrations behind {@link visible}, keyed by the same names. */ readonly registrations: ReadonlyMap<string, ToolRegistration> /** Pre-restriction capability names used by prompt-order validation. */ readonly knownNames: ReadonlySet<string> /** Current global names that a scoped restriction may name. */ readonly restrictableNames: ReadonlySet<string> }
- **[ast-signature-changed]** `packages/credentials/credentials-local` — 签名变化: mode
    旧: var
    新: var:number
- **[ast-signature-changed]** `packages/experimental/cua` — 签名变化: tool
    旧: var
    新: var:ToolDefinition
- **[ast-signature-changed]** `packages/goal/tool-goal` — 签名变化: execution
    旧: var:MutableToolRunContext
    新: var
- **[ast-signature-changed]** `packages/experimental/tool-terminal` — 签名变化: finalizeContent
    旧: var
    新: var:NonNullable<ToolDefinition['finalizeContent']>
- **[ast-signature-changed]** `packages/client/modules` — 签名变化: headers
    旧: var
    新: var:Record<string, string>
- **[ast-signature-changed]** `packages/experimental/auto-review` — 签名变化: ReviewSourceRole
    旧: type ReviewSourceRole = | 'human-instruction' | 'direct-parent-instruction' | 'constraint' | 'checkpoint' | 'fact'
    新: type ReviewSourceRole = | 'user-instruction' | 'direct-parent-instruction' | 'constraint' | 'checkpoint' | 'fact'
- **[ast-signature-changed]** `packages/experimental/auto-review` — 签名变化: HistoricalToolCall
    旧: interface HistoricalToolCall { readonly kind: 'tool-call' readonly role: 'fact' readonly mode: 'native' | 'ptc-inner' readonly name: string readonly arguments: string }
    新: interface HistoricalToolCall { readonly kind: 'tool-call' readonly role: 'fact' readonly mode: CallMode readonly name: string readonly arguments: string }
- **[ast-signature-changed]** `packages/experimental/auto-review` — 签名变化: HistoricalEntry
    旧: type HistoricalEntry = HistoricalUserMessage | HistoricalToolCall
    新: type HistoricalEntry = HistoricalUserMessage | HistoricalToolCall | HistoricalToolSchema
- **[ast-signature-changed]** `packages/experimental/auto-review` — 签名变化: ReviewSnapshot
    旧: interface ReviewSnapshot { readonly provider: string readonly model: string readonly cwd: string readonly projectInstructions: readonly HistoricalUserMessage[] readonly history: readonly HistoricalEntry[] readonly action: PendingAction }
    新: interface ReviewSnapshot { readonly provider: string readonly model: string readonly cwd: string /** Retained items in Session order, ending with the pending call. */ readonly history: readonly HistoricalEntry[] /** Mode-qualified scoped key and schema of the pending call. */ readonly pending: { readonly key: string; readonly schema: HistoricalToolSchema } }
- **[ast-signature-changed]** `packages/experimental/auto-review` — 签名变化: textRole
    旧: function(source:MessageSource,seq:SessionEvent['seq'],initialPromptSeq:SessionEvent['seq'] | undefined,parentSession:string | undefined)
    新: function(source:MessageSource,seq:SessionEvent['seq'],prompts:CreationPrompts,session:Session)
- **[ast-signature-changed]** `packages/experimental/auto-review` — 签名变化: filteredUserEntries
    旧: function(seq:SessionEvent['seq'],source:MessageSource,content:readonly ContentBlock[],initialPromptSeq:SessionEvent['seq'] | undefined,parentSession:string | undefined)
    新: function(seq:SessionEvent['seq'],source:MessageSource,content:readonly ContentBlock[],prompts:CreationPrompts,session:Session)
- **[ast-signature-changed]** `packages/experimental/auto-review` — 签名变化: snapshotAutoReview
    旧: function(agent:Agent,exec:ToolExecution,cwd:string)
    新: function(agent:Agent,exec:ToolExecution,cwd:string,shown:ReadonlyMap<string, HistoricalToolSchema>)
- **[ast-signature-changed]** `packages/experimental/auto-review` — 签名变化: classifyRisk
    旧: function(ctx:Context,agent:Agent,exec:ToolExecution,signal:AbortSignal)
    新: function(ctx:Context,agent:Agent,exec:ToolExecution,signal:AbortSignal,shown:ShownSchemas)
- **[ast-signature-changed]** `packages/experimental/cua` — 签名变化: CuaConfig
    旧: export interface CuaConfig { /** Signed applications explicitly approved for future tasks in this profile. */ allowedApps: Volatile<Array<Omit<CuaApplicationGrant, 'id'> & { /** Unbranded digest at the profile configuration boundary; admitted by the Config schema. */ id: string }>> /** Absolute native helper override; omission prepares the package-owned executable. */ helperPath?: string /** Maximum time in milliseconds for native component preparation. */ buildTimeoutMs: number /** Deadline for one native operation, including capture and AX traversal. */ timeoutMs: number /** Maximum time to connect to or start the shared native helper. */ connectTimeoutMs: number /** Screenshot deadline including time queued behind other native operations. */ screenshotTimeoutMs: number /** Deadline for each individual Accessibility system call. */ axTimeoutMs: number /** Maximum bytes retained for one helper response frame. */ maxResponseBytes: number /** Maximum installed application matches returned for one discovery query. */ maxAppMatches: number /** Maximum bytes preserved from the system clipboard during one paste. */ maxClipboardBytes: number /** Maximum wait for clipboard data consumption after the Paste command returns. */ pasteReadTimeoutMs: number /** Maximum UTF-8 bytes admitted for one helper request frame. */ maxRequestBytes: number /** Duration in milliseconds of one same-window drag. */ dragDurationMs: number /** Number of movement segments dispatched during a drag. */ dragSteps: number /** Delay in milliseconds after each Unicode key-down or key-up event. */ textEventIntervalMs: number /** Native connection cleanup, socket-write and launcher termination budget in milliseconds. */ graceMs: number /** Maximum nodes admitted by a native accessibility snapshot. */ maxElements: number /** Maximum depth traversed by a native accessibility snapshot. */ maxDepth: number }
    新: export interface CuaConfig { /** Register tools for Agents using this preset; defaults to ptc. False enables global registration. */ agentPreset: string | false /** Legacy grants imported once into profile-scoped storage; later edits are ignored. */ allowedApps: Array<Omit<CuaApplicationGrant, 'id'> & { /** Unbranded digest at the profile configuration boundary; admitted by the Config schema. */ id: string }> /** Absolute native helper override; omission prepares the package-owned executable. */ helperPath?: string /** Maximum time in milliseconds for native component preparation. */ buildTimeoutMs: number /** Deadline for one native operation, including capture and AX traversal. */ timeoutMs: number /** Maximum time to connect to or start the shared native helper. */ connectTimeoutMs: number /** Screenshot deadline including time queued behind other native operations. */ screenshotTimeoutMs: number /** Deadline for each individual Accessibility system call. */ axTimeoutMs: number /** Maximum bytes retained for one helper response frame. */ maxResponseBytes: number /** Maximum installed application matches returned for one discovery query. */ maxAppMatches: number /** Maximum bytes preserved from the system clipboard during one paste. */ maxClipboardBytes: number /** Maximum wait for clipboard data consumption after the Paste command returns. */ pasteReadTimeoutMs: number /** Maximum UTF-8 bytes admitted for one helper request frame. */ maxRequestBytes: number /** Duration in milliseconds of one same-window drag. */ dragDurationMs: number /** Maximum explicitly requested mouse-button hold in milliseconds; zero allows immediate release only. */ maxClickHoldMs: number /** Number of movement segments dispatched during a drag. */ dragSteps: number /** Delay in milliseconds after each Unicode key-down or key-up event. */ textEventIntervalMs: number /** Native connection cleanup, socket-write and launcher termination budget in milliseconds. */ graceMs: number /** Maximum nodes admitted by a native accessibility snapshot. */ maxElements: number /** Maximum depth traversed by a native accessibility snapshot. */ maxDepth: number }
- **[ast-signature-changed]** `packages/host/frontend-static` — 签名变化: serveStatic
    旧: function(pathname:string,res:ServerResponse,distRoot:string,distIndex:string,authorizeIndex:() => boolean,renderIndex:() => Promise<string>)
    新: function(request:Request,distRoot:string,distIndex:string,authorizeIndex:() => Response | undefined,renderIndex:(html: string) => string)
- **[ast-signature-changed]** `packages/host/webserver` — 签名变化: best
    旧: var:WebRoute | undefined
    新: var:WebRoute | WebResourceRoute | undefined
- **[ast-signature-changed]** `packages/host/webserver` — 签名变化: out
    旧: var
    新: var:OutgoingHttpHeaders
- **[ast-signature-changed]** `packages/llm/llm-deepseek-api-key` — 签名变化: OfficialConnection
    旧: interface OfficialConnection extends ResolvedDeepSeekOptions { /** Selectable models: the configured catalog, or the offered part of the followed listing. */ readonly offered: readonly DeepSeekCatalogModel[] /** Listed models refused before network I/O, by id. */ readonly refusals: ReadonlyMap<string, CatalogRefusal> }
    新: interface OfficialConnection extends ResolvedDeepSeekOptions { /** Selectable models: the configured catalog, or the offered part of the followed listing. */ readonly offered: readonly DeepSeekCatalogModel[] /** Listed models refused before network I/O, by id. */ readonly refusals: ReadonlyMap<string, CatalogRefusal> /** Listed badges of offered models, by id; empty without a followed listing. */ readonly badges: ReadonlyMap<string, LlmModelBadge> }
- **[ast-signature-changed]** `packages/experimental/client-ui-forge` — 签名变化: held
    旧: var:LlmConfigurableProvider[]
    新: var
- **[ast-signature-changed]** `packages/llm/token-meter` — 签名变化: ReplayState
    旧: interface ReplayState { consumedEvents: SessionLogOffsetType header: EpochHeader | undefined surface: MeterSurfaceNode[] stepStart: { turn: number; step: number } | undefined anchor: MeasurementAnchor | undefined }
    新: interface ReplayState { consumedEvents: SessionLogOffsetType surface: MeterSurfaceNode[] header: { seq: SessionSeqType | null; value: EpochHeader } | undefined anchorHeader: { seq: SessionSeqType | null; value: EpochHeader } | undefined anchorNodes: readonly MeterSurfaceNode[] /** Preserve synchronous construction-time reads before registration completes. */ pendingMeasurement: MeasurementState }
- **[ast-signature-changed]** `packages/experimental/inspector/src/host/bridge/controller.ts` — 签名变化: channel
    旧: var:JsonChannel | undefined
    新: var
- **[ast-signature-changed]** `packages/boot/plugin-manager` — 签名变化: transport
    旧: var:JsonChannel
    新: var
- **[ast-signature-changed]** `packages/sandbox/sandbox` — 签名变化: SandboxExecutionPolicy
    旧: export interface SandboxExecutionPolicy { /** The file-effect mode this execution runs under. */ mode: SandboxMode /** Absolute root directory `workspace-write` may write under. */ workspaceRoot: string /** * Opaque identity of the calling session (the branded `dsh-session` * SessionId). Backends key per-session state off it (e.g. windows-acl gives * each live session/workspace pair a random private temp directory and SID, * while the workspace SID and standing grant remain per-workspace); absent * for agentless calls, which fall back to per-call backend state. */ sessionId?: SessionId }
    新: export interface SandboxExecutionPolicy { /** The file-effect mode this execution runs under. */ mode: SandboxMode /** Absolute root directory `workspace-write` may write under. */ workspaceRoot: string /** * Extra physical absolute directories `workspace-write` may also write under. * Absence means none. The enforcing host rejects missing, non-directory, and * symlinked entries on each call. Remote paths are checked on the remote host. * These grant nothing under `read-only` or `danger-full-access`. */ additionalWritableRoots?: readonly string[] /** * Opaque identity of the calling session (the branded `dsh-session` * SessionId). Backends key per-session state off it (e.g. windows-acl gives * each live session/workspace pair a random private temp directory and SID, * while the workspace SID and standing grant remain per-workspace); absent * for agentless calls, which fall back to per-call backend state. */ sessionId?: SessionId }
- **[ast-signature-changed]** `packages/session/session-persistence` — 签名变化: SessionPersistenceSnapshot
    旧: export interface SessionPersistenceSnapshot { /** Detached metadata for one stored session. */ readonly header: SessionHeader /** Header-only format classification; absent without versioned artifact metadata. */ readonly formatStatus?: 'current' | 'migration-required' /** Opaque change token; see {@link SessionPersistence.stat}. */ readonly revision: SessionPersistenceRevision /** Logical event count, when the backend can provide it cheaply from metadata; otherwise absent. */ readonly eventCount?: number /** Physical artifact byte size, when the backend can provide it cheaply (JSONL); otherwise absent. */ readonly sizeBytes?: number }
    新: export interface SessionPersistenceSnapshot { /** Detached metadata for one stored session. */ readonly header: SessionHeader /** Header-only format classification; absent without versioned artifact metadata. */ readonly formatStatus?: 'current' | 'migration-required' /** Opaque change token; see {@link SessionPersistence.stat}. */ readonly revision: SessionPersistenceRevision /** Logical event count, when the backend can provide it cheaply from metadata; otherwise absent. */ readonly eventCount?: number /** Physical artifact byte size, when the backend can provide it cheaply (JSONL); otherwise absent. */ readonly sizeBytes?: number /** * Backend-resolved location of the selected materialized per-Session * artifact, for diagnostics and export. Absent when the backend has no * materialized per-Session file, including an unmaterialized pending Session. */ readonly location?: SessionLocation }
- **[ast-signature-changed]** `packages/session/session-projection` — 签名变化: ProjectionDefinition
    旧: export interface ProjectionDefinition< K extends keyof SessionProjectionStateMap, S extends SessionProjectionStateMap[K] = SessionProjectionStateMap[K], > { /** The projection key this unit owns (its `SessionProjectionStateMap` entry). */ key: K /** Validates persisted state before it seeds a fold. */ stateSchema: ZodType<S> /** * State for the empty log and its immutable Session metadata. * @param header - immutable metadata for the Session being projected. * @param inheritedEventCount - exact fork-inherited prefix length. * @returns the initial state. */ init(header: SessionHeader, inheritedEventCount: SessionLogOffset): NoInfer<S> /** * Pure transition: previous state + one committed event → next state. A * unit uninterested in an event MUST return the same state reference — an * unchanged reference (`Object.is`) produces zero downstream work. * @param state - the state covering all prior events. * @param event - the next committed session event. * @returns the next state (same reference when the event is not the unit's). */ apply(state: NoInfer<S>, event: SessionEvent): NoInfer<S> /** Client view. Omit for host-only units. */ wire?: K extends keyof SessionProjectionMap ? { /** Validates the wire payload before it leaves the host. */ viewSchema: ZodType<SessionProjectionMap[K]> /** * State → wire payload (the read-side projection). The live drive keeps * the two latest raw results and compares them with `Object.is`; an * object-valued view must reuse its reference to suppress publication * across internal-only state changes. * @param state - the current state. * @returns the whole current value for this unit's key. */ view(state: NoInfer<S>): SessionProjectionMap[K] } : never /** * Persisted-cache invalidation version: bump whenever the serialized state fields or the * fold semantics change, so persisted `(sessionId, key, ver, seq, val)` * rows from an older unit are discarded instead of being forward-applied * into garbage. Non-negative integer. */ stateVersion: number }
    新: export interface ProjectionDefinition<K extends string, S> { /** The projection key this unit owns. */ key: K /** Validates persisted state before it seeds a fold. */ stateSchema: ZodType<S> /** * State for the empty log and its immutable Session metadata. * @param header - immutable metadata for the Session being projected. * @param inheritedEventCount - exact fork-inherited prefix length. * @returns the initial state. */ init(header: SessionHeader, inheritedEventCount: SessionLogOffset): NoInfer<S> /** * Pure transition: previous state + one committed event → next state. A * unit uninterested in an event MUST return the same state reference — an * unchanged reference (`Object.is`) produces zero downstream work. * @param state - the state covering all prior events. * @param event - the next committed session event. * @returns the next state (same reference when the event is not the unit's). */ apply(state: NoInfer<S>, event: SessionEvent): NoInfer<S> /** Client view. Omit for host-only units. */ wire?: K extends keyof SessionProjectionMap ? { /** Validates the wire payload before it leaves the host. */ viewSchema: ZodType<SessionProjectionViewValue<SessionProjectionMap[K]>> /** * State → wire payload (the read-side projection). The live drive keeps * the two latest raw results and compares them with `Object.is`; an * object-valued view must reuse its reference to suppress publication * across internal-only state changes. * @param state - the current state. * @returns the whole current value for this unit's key. */ view(state: NoInfer<S>): SessionProjectionViewValue<SessionProjectionMap[K]> /** * Whether a Session summary carries this unit; omitted means `true`. * Declare `false` on a key whose map entry carries the * `SessionProjectionSummaryExcluded` mark: the runtime key set follows this * field, while the client view type follows the mark. * @default true */ summary?: boolean } : never /** * Persisted-cache invalidation version: bump whenever the serialized state fields or the * fold semantics change, so persisted `(sessionId, key, ver, seq, val)` * rows from an older unit are discarded instead of being forward-applied * into garbage. Non-negative integer. */ stateVersion: number }
- **[ast-signature-changed]** `packages/session/session-projection` — 签名变化: ErasedDefinition
    旧: interface ErasedDefinition { key: string stateSchema: { parse(value: unknown): unknown } init(header: SessionHeader, inheritedEventCount: SessionLogOffset): unknown apply(state: unknown, event: SessionEvent): unknown wire: { viewSchema: { parse(value: unknown): unknown }; view(state: unknown): unknown } | undefined stateVersion: number }
    新: interface ErasedDefinition { key: string stateSchema: { parse(value: unknown): unknown } init(header: SessionHeader, inheritedEventCount: SessionLogOffset): unknown apply(state: unknown, event: SessionEvent): unknown wire: { viewSchema: { parse(value: unknown): unknown } view(state: unknown): unknown /** Whether a Session summary carries this unit (false when the unit declared `summary: false`). */ summary: boolean } | undefined stateVersion: number }
- **[ast-signature-changed]** `packages/experimental/action-cards` — 签名变化: skills
    旧: var:SkillCandidate[]
    新: var
- ★ **[ast-signature-changed]** `packages/skill/tool-skill` — 签名变化: SkillCatalogSource
    旧: export interface SkillCatalogSource { readonly kind: 'skill-catalog' readonly form: 'catalog' /** Marks a replacement catalog rather than this session's first publication. */ readonly update?: true /** Exactly the entries this message published, in catalog order. */ readonly entries: readonly { readonly name: string; readonly description: string }[] }
    新: export interface SkillCatalogSource { readonly kind: 'skill-catalog' readonly form: 'catalog' /** Marks a replacement catalog rather than this session's first publication. */ readonly update?: true /** Some discovery failed; entries contain only skills found in this observation. Absence means complete. */ readonly incomplete?: true /** Exactly the entries this message published, in catalog order. */ readonly entries: readonly { readonly name: string; readonly description: string }[] }
- ★ **[ast-signature-changed]** `packages/skill/tool-skill` — 签名变化: renderCatalogMessage
    旧: function(entries:SkillCatalogSource['entries'])
    新: function(entries:SkillCatalogSource['entries'],incomplete:boolean)
- ★ **[ast-signature-changed]** `packages/skill/tool-skill` — 签名变化: renderCatalogUpdate
    旧: function(entries:SkillCatalogSource['entries'])
    新: function(entries:SkillCatalogSource['entries'],incomplete:boolean)
- ★ **[ast-signature-changed]** `packages/skill/tool-skill` — 签名变化: digestCatalogEntries
    旧: function(entries:SkillCatalogSource['entries'])
    新: function(entries:SkillCatalogSource['entries'],incomplete:any)
- **[ast-signature-changed]** `packages/terminal/terminal-bash` — 签名变化: SandboxModeFenceState
    旧: interface SandboxModeFenceState { pty: Context['terminals'] sandboxPolicy: Context['sandboxPolicy'] sessionProjections: Context['sessionProjections'] }
    新: interface SandboxModeFenceState { pty: Context['terminals'] sandboxPolicy: Context['sandboxPolicy'] }
- **[ast-signature-changed]** `packages/test-support/agent-loop-testkit` — 签名变化: AgentLoopTestDependenciesOptions
    旧: export interface AgentLoopTestDependenciesOptions { /** Mount the real directory owner and a local filesystem for directory-aware tests. */ readonly workingDirectory?: boolean /** Configuration for the system-prompt registry. */ readonly systemPrompt?: SystemPromptConfig /** Configuration for the tool registry. */ readonly tools?: ToolRuntimeConfig }
    新: export interface AgentLoopTestDependenciesOptions { /** Mount the real directory owner and a local filesystem for directory-aware tests. */ readonly workingDirectory?: boolean /** Configuration for the system-prompt registry. */ readonly systemPrompt?: SystemPromptConfig /** Configuration for the tool registry. */ readonly tools?: { mode?: 'native' | 'ptc'; maxParallelSubCalls?: number } }
- **[ast-signature-changed]** `packages/test-support/client-runtime` — 签名变化: TestFileUpload
    旧: export interface TestFileUpload { /** Test-supplied upload behavior; the default rejects every call. */ upload: (sessionId: SessionId, ...args: unknown[]) => Promise<unknown> }
    新: export interface TestFileUpload { /** Test-supplied upload behavior; the default rejects every call. */ upload: (sessionId: SessionId, ...args: unknown[]) => Promise<unknown> /** Test-supplied image upload behavior; the default rejects every call. */ uploadImage: (sessionId: SessionId, ...args: unknown[]) => Promise<unknown> }
- **[ast-signature-changed]** `packages/test-support/llm-replay` — 签名变化: ReplayModelConfig
    旧: export interface ReplayModelConfig { /** Model id used for replay requests. */ id: string /** Selector label; defaults to {@link id}. */ name?: string /** Optional selector description. */ description?: string /** Optional positive integer context capacity published by the replay adapter. */ contextWindow?: number /** Optional declared input modalities, so a scenario can exercise capability gates (e.g. image-capable `read_image`). */ inputModalities?: readonly ModelModality[] /** * Optional per-request output cap the replay route materializes when callers * omit one, so replay reconstructs the request header a live catalog produced. */ defaultMaxTokens?: number /** * Optional flat visual-token price the replay route declares for every * retained request image, so keyless scenarios exercise route-priced * request pressure; each occurrence is priced at this value plus its * request-preview handle text. Requires {@link inputModalities} to include * `image` — a text-only route never sends visual tokens. Absent declares * no image pricing. */ imageRequestTokens?: number /** Optional reasoning-effort ids from least to greatest selectable effort. */ reasoningEfforts?: string[] /** * Optional effort materialized when callers omit one; must appear in * {@link reasoningEfforts} or call resolution rejects the route. */ defaultReasoningEffort?: string /** Optional in-history system prompt replacement for a keyless replay route. */ systemPromptUpdate?: SystemPromptUpdate /** Optional mid-conversation tool declaration mode for a keyless replay route. */ toolUpdate?: ToolUpdate }
    新: export interface ReplayModelConfig { /** Model id used for replay requests. */ id: string /** Selector label; defaults to {@link id}. */ name?: string /** Optional selector description. */ description?: string /** Optional positive integer context capacity published by the replay adapter. */ contextWindow?: number /** Optional declared input modalities, so a scenario can exercise capability gates (e.g. image-capable `read_image`). */ inputModalities?: readonly ModelModality[] /** * Optional per-request output cap the replay route materializes when callers * omit one, so replay reconstructs the request header a live catalog produced. */ defaultMaxTokens?: number /** * Optional flat visual-token price the replay route declares for every * retained request image, so keyless scenarios exercise route-priced * request pressure; each occurrence is priced at this value plus its * request-preview handle text. Requires {@link inputModalities} to include * `image` — a text-only route never sends visual tokens. Absent declares * no image pricing. */ imageRequestTokens?: number /** Optional reasoning-effort ids from least to greatest selectable effort. */ reasoningEfforts?: string[] /** * Optional effort materialized when callers omit one; must appear in * {@link reasoningEfforts} or call resolution rejects the route. */ defaultReasoningEffort?: string /** Optional in-history system prompt replacement for a keyless replay route. */ systemPromptUpdate?: SystemPromptUpdate /** Optional mid-conversation tool declaration mode for a keyless replay route. */ toolUpdate?: ToolUpdate /** Optional selector badge the replay catalog advertises, so keyless Web scenarios render one. */ badge?: LlmModelBadge }
- **[ast-signature-changed]** `packages/boot/plugin-manager` — 签名变化: restore
    旧: var:ReturnType<typeof sessionFormatCatalog.createRestore> | undefined
    新: var
- **[ast-signature-changed]** `packages/typert/protocol` — 签名变化: RemoteScopeOptions
    旧: export interface RemoteScopeOptions<WireArgs extends readonly unknown[] = never> { /** Exported endpoint method; omission retains the implementation member name. */ readonly name?: string /** * Per-kind readers of the resources one call touches. Each receives the * method's arguments as its own parameters, JSON arguments as their Typert * codecs validated them, a lookup parameter as its wire identity and a * cancellation parameter as the call's signal, so it performs plain reads * only, and returns one identity, several, or `undefined` for none. A * throw, an empty list, or an identity other than a non-empty string * refuses the call. For a kind without a reader, the Gateway reads the * identity of a scoped Context whose Host adapter declares that `resource` * and of lookup parameters declaring it, else the field registered in * `typert.resources`: a top-level argument or, failing that, the first * object argument. A call that carries no identity touches `global`. The * readers and these defaults together must name every resource the method * accesses: access control never checks a resource they omit. */ readonly resources?: TypertResourceReaders<WireArgs> }
    新: export interface RemoteScopeOptions<WireArgs extends readonly unknown[] = never> { /** Exported endpoint method; omission retains the implementation member name. */ readonly name?: string /** * Per-kind readers of the resources one call touches. Each receives the * method's arguments as its own parameters, JSON arguments as their Typert * codecs validated them, a lookup parameter as its wire identity and a * cancellation parameter as the call's signal, so it performs plain reads * only, and returns one identity, several, or `undefined` for none. A * throw, an empty list, or an identity other than a non-empty string * refuses the call. For a kind without a reader, the Gateway reads the * identity of a scoped Context whose Host adapter declares that `resource` * and of lookup parameters declaring it, else the registered default of * `typert.resources`: a `resolve` function receiving the validated named * wire values and their ordered parameters, or a `field` naming a top-level * argument or, failing that, a field of the first object argument. A * throwing resolver, an array result, or a field holding an array refuses * the call. A call that carries no identity touches `global`. The readers * and these defaults together must name every resource the method accesses: * access control never checks a resource they omit. */ readonly resources?: TypertResourceReaders<WireArgs> }
- **[ast-signature-changed]** `packages/attachment/attachment` — 签名变化: limits
    旧: var:HttpFetchLimits
    新: var
- **[ast-signature-changed]** `packages/web/web` — 签名变化: ResolvableProvider
    旧: interface ResolvableProvider { readonly id: string available(): boolean }
    新: interface ResolvableProvider { readonly id: string available(): boolean ready?(llmProvider: string | undefined): Promise<boolean> }
- **[ast-signature-changed]** `packages/api/gateway/src/types.ts` — 签名变化: TypertGateway
    旧: export interface TypertGateway { /** Carrier adapter shared by WebSocket and in-process transports. */ readonly wireStream: TypertGatewayWireStream /** * Check for an active owner Client event stream, the only kind that can answer forwarded waterfalls. * @returns whether an owner stream is open and has not been cancelled. */ hasLiveClient(): boolean /** * Register the application-selected forwarded-event source. * @param source - stream factory installed by the Remote assembly. * @param host - stable Host facts included in each Client generation's opening frame. * @returns disposer removing this exact source and cancelling its active streams. */ registerRemoteEvents( source: TypertRemoteEventSource, host: RemoteEventHostInfo, ): () => Promise<void> /** * Invoke one live Remote method without assuming a carrier or response envelope. * @param request - decoded endpoint and named wire arguments. * @returns the business result without output decoding. * @throws {@link TypertGatewayError} for dispatch, provider, or boundary failures; lookup-policy and business errors retain identity. */ invoke(request: InvokeRemoteRequest): Promise<unknown> /** * Open one live stream Remote method without assuming a physical carrier. * @param request - decoded endpoint, named wire arguments, and the Client uplink when the carrier has one. * @returns a cancellation-aware iterable over the business results. */ stream(request: InvokeRemoteRequest): Promise<AsyncIterable<unknown>> }
    新: export interface TypertGateway { /** Carrier adapter shared by WebSocket and in-process transports. */ readonly wireStream: TypertGatewayWireStream /** * Check for an active owner Client event stream, the only kind that can answer forwarded waterfalls. * @returns whether an owner stream is open and has not been cancelled. */ hasLiveClient(): boolean /** @returns detached metadata for all unsettled forwarded events in arrival order. */ getPendingRemoteEvents(): readonly PendingRemoteEventInfo[] /** * Register the application-selected forwarded-event source. * @param source - stream factory installed by the Remote assembly. * @param host - stable Host facts included in each Client generation's opening frame. * @returns disposer removing this exact source and cancelling its active streams. */ registerRemoteEvents( source: TypertRemoteEventSource, host: RemoteEventHostInfo, ): () => Promise<void> /** * Invoke one live Remote method without assuming a carrier or response envelope. * @param request - decoded endpoint and named wire arguments. * @returns the business result without output decoding. * @throws {@link TypertGatewayError} for dispatch, provider, or boundary failures; lookup-policy and business errors retain identity. */ invoke(request: InvokeRemoteRequest): Promise<unknown> /** * Open one live stream Remote method without assuming a physical carrier. * @param request - decoded endpoint, named wire arguments, and the Client uplink when the carrier has one. * @returns a cancellation-aware iterable over the business results. */ stream(request: InvokeRemoteRequest): Promise<AsyncIterable<unknown>> }
- **[ast-signature-changed]** `packages/api/session-controller/src/types.ts` — 签名变化: SessionProjectionHints
    旧: export interface SessionProjectionHints { /** * `sequenced`: the Host's live registry produced the block for an attached * Session, so `asOfSeq` is comparable with baselines and frames of the same * connection. `cached`: a header-only listing viewed the block from the * persisted projection cache, so `asOfSeq` is the stored record's own * watermark and must not be compared with the connected Session's values. */ readonly kind: 'cached' | 'sequenced' /** Watermark of the block in the sequence space named by `kind`. */ readonly asOfSeq: number /** Provider-validated values present in the block; omitted keys remain unknown. */ readonly values: SessionProjectionValues }
    新: export interface SessionProjectionHints { /** * `sequenced`: the Host's live registry produced the block for an attached * Session, so `asOfSeq` is comparable with baselines and frames of the same * connection. `cached`: a header-only listing viewed the block from the * persisted projection cache, so `asOfSeq` is the stored record's own * watermark and must not be compared with the connected Session's values. */ readonly kind: 'cached' | 'sequenced' /** Watermark of the block in the sequence space named by `kind`. */ readonly asOfSeq: number /** Provider-validated summary values present in the block; omitted keys remain unknown. */ readonly values: Partial<SessionProjectionSummaryValues> }
- **[ast-signature-changed]** `packages/core/agent/src/model-selection.ts` — 签名变化: ModelSelectionProjectionState
    旧: export interface ModelSelectionProjectionState { /** Selection consumed by the latest recorded model request. */ readonly lastUsed: ModelSelection | null /** Later user selection not yet consumed by a matching model request. */ readonly pending: ModelSelection | null }
    新: export interface ModelSelectionProjectionState { /** Selection used by the latest recorded model request. */ readonly lastUsed: ModelSelection | null /** Later recorded selection not yet used by a matching model request. */ readonly pending: ModelSelection | null }
- **[ast-signature-changed]** `packages/core/agent/src/types.ts` — 签名变化: ModelSelectionProjection
    旧: export interface ModelSelectionProjection { /** Selection consumed by the latest recorded model request. */ readonly lastUsed: ModelSelection | null /** Selection the next request should use, falling back to {@link lastUsed}. */ readonly next: ModelSelection | null }
    新: export interface ModelSelectionProjection { /** Selection used by the latest recorded model request. */ readonly lastUsed: ModelSelection | null /** Selection the next model step uses; null while the Agent's initial options supply the route. */ readonly next: ModelSelection | null }
- **[ast-signature-changed]** `packages/api/session-controller/src/types.ts` — 签名变化: ModelCatalogModel
    旧: export interface ModelCatalogModel { readonly id: string readonly name: string readonly description?: string readonly reasoning?: ModelReasoning }
    新: export interface ModelCatalogModel { readonly id: string readonly name: string readonly description?: string readonly reasoning?: ModelReasoning /** Provider-authored label shown beside the name; display data only. */ readonly badge?: LlmModelBadge }
- **[ast-signature-changed]** `packages/api/session-controller/src/types.ts` — 签名变化: SessionAttachmentRequest
    旧: export interface SessionAttachmentRequest { readonly sessionId: SessionId readonly attachmentId: AttachmentIdType }
    新: export interface SessionAttachmentRequest { /** Gateway permission scope only; neither Session existence nor its image references are checked. */ readonly sessionId: SessionId readonly attachment: ImageAttachmentRef }
- **[ast-signature-changed]** `packages/api/session-controller/src/types.ts` — 签名变化: SessionAttachmentValue
    旧: export interface SessionAttachmentValue { readonly attachment: ImageAttachmentRef readonly data: string }
    新: export interface SessionAttachmentValue { /** Supplied reference after ID, format, byte length, and dimensions verification; display fields are preserved. */ readonly attachment: ImageAttachmentRef readonly data: string }
- **[ast-signature-changed]** `packages/api/session-controller/src/types.ts` — 签名变化: SessionPageRequest
    旧: export interface SessionPageRequest { readonly address: SessionAddress /** Inclusive log cut obtained from the corresponding follow opening frame. */ readonly throughSeq: number readonly beforeSeq?: number readonly maxMessages?: number /** Stop at a Turn start after both minima, unless maxMessages or history exhaustion wins. */ readonly turnWindow?: { /** Minimum append-origin user/assistant messages; must not exceed maxMessages. */ readonly minMessages: number /** Minimum Turn starts crossed, including the partial Turn at beforeSeq. */ readonly minTurns: number } }
    新: export interface SessionPageRequest { readonly address: SessionAddress /** * Inclusive log cut; omission selects the observed log end. A follow opening * reports the cut it covered so a caller can pin the same point. */ readonly throughSeq?: number readonly beforeSeq?: number readonly maxMessages?: number /** Stop at a Turn start after both minima, unless maxMessages or history exhaustion wins. */ readonly turnWindow?: { /** Minimum append-origin user/assistant messages; must not exceed maxMessages. */ readonly minMessages: number /** Minimum Turn starts crossed, including the partial Turn at beforeSeq. */ readonly minTurns: number } }
- **[ast-signature-changed]** `packages/api/session-controller/src/types.ts` — 签名变化: SessionFollowRequest
    旧: export interface SessionFollowRequest extends Pick<SessionPageRequest, 'maxMessages' | 'turnWindow'> { readonly address: SessionAddress /** Include process-local assistant presentation frames for the Web client. */ readonly assistantStream?: true }
    新: export interface SessionFollowRequest extends Pick<SessionPageRequest, 'maxMessages' | 'turnWindow'> { readonly address: SessionAddress /** Request background activation; omission leaves the read passive. */ readonly activate?: boolean /** Include process-local assistant presentation frames for the Web client. */ readonly assistantStream?: true }
- **[ast-signature-changed]** `packages/test-support/tool-testkit` — 签名变化: pipeline
    旧: function(attachment:StoredImageAttachment,target:ImageRequestTarget)
    新: var
- **[ast-signature-changed]** `packages/attachment/attachment/src/types.ts` — 签名变化: AttachmentAdmissionPart
    旧: export type AttachmentAdmissionPart = | PromptContentPart | { readonly type: 'file'; readonly attachment: FileAttachmentRef }
    新: export type AttachmentAdmissionPart = | PromptContentPart | { readonly type: 'file'; readonly attachment: FileAttachmentRef } | { readonly type: 'image'; readonly attachment: ImageAttachmentRef; readonly encodedBytes: number }
- **[ast-signature-changed]** `packages/util/official-bundles` — 签名变化: OfficialBundleCatalogEntry
    旧: export interface OfficialBundleCatalogEntry { /** Exact npm package name accepted by the existing bundle installer. */ readonly packageName: string /** Package-owned localized text and a self-contained icon, embedded without provider code. */ readonly meta: Required<Pick<PluginLocalizedMeta, 'title' | 'description' | 'icon'>> }
    新: export interface OfficialBundleCatalogEntry { /** Exact npm package name accepted by the existing bundle installer. */ readonly packageName: string /** Package-owned Host platform declaration, available before installation. */ readonly platforms?: DshBundleManifest['platforms'] /** Package-owned localized text and a self-contained icon, embedded without provider code. */ readonly meta: Required<Pick<PluginLocalizedMeta, 'title' | 'description' | 'icon'>> }
- **[ast-signature-changed]** `packages/util/official-bundles/src/bundles.ts` — 签名变化: INSTALLATION_OWNED_PROFILE_TUPLES
    旧: var:Record<string, readonly string[]>
    新: var:Readonly<Record<string, readonly string[]>>
- **[ast-signature-changed]** `packages/boot/plugin-manager/src/types.ts` — 签名变化: ManagementError
    旧: export interface ManagementError { code: ReadOnlyReason | 'unknown-plugin' | 'invalid-spec' | 'already-installed' | 'ambiguous-install' | 'not-bundle' | 'not-removable' | 'stop-profile' | 'bundle-in-use' | 'stale-approval' | 'incompatible-version' | 'operation-error' diagnostic?: string /** Present with `incompatible-version`: the packages the running DSH version rejects. */ incompatible?: IncompatiblePlugin[] }
    新: export interface ManagementError { code: ReadOnlyReason | 'unknown-plugin' | 'invalid-spec' | 'already-installed' | 'ambiguous-install' | 'not-bundle' | 'not-removable' | 'stop-profile' | 'bundle-in-use' | 'stale-approval' | 'incompatible-version' | 'unsupported-platform' | 'operation-error' diagnostic?: string /** Present with `incompatible-version`: the packages the running DSH version rejects. */ incompatible?: IncompatiblePlugin[] }
- **[ast-signature-changed]** `packages/boot/plugin-manager/src/types.ts` — 签名变化: BundleInfo
    旧: export interface BundleInfo { name: string /** Project-maintained shipped optional bundle or on-demand catalog entry, independent of installation and selection. */ official: boolean /** Readable package location; on-demand catalog entries exclude undeclared transitive copies, and declared files may be missing. */ availability: 'installation' | 'profile' | 'missing' /** Exact released Host version or same-checkout development link offered for an on-demand catalog entry. */ installTarget?: { spec: string; version: string } version?: string /** Local display text with available translations or literal fallbacks, or a metadata diagnostic. */ meta?: PluginLocalizedMeta /** Untranslated `description` of this bundle's package manifest. */ description?: string /** Selected in the profile manifest; a load error means its layer was skipped. */ enabled: boolean /** Whether the profile declares this dependency; availability separately reports whether its files can be read. */ installed: boolean /** * Present for a profile dependency the installation does not also supply: the spec `pnpm add` accepts, with local * paths made absolute and the user information of an http(s) URL removed. */ source?: string /** * Whether the installation ships the bundle for the person to switch on: named by the launcher's `OPTIONAL_BUNDLES`, * held by the installation's dependencies, selected by no shipped template, and never removable. */ optional: boolean removable: boolean readOnlyReason?: ReadOnlyReason error?: ManagementError /** The rows the bundle's patch inserts, in declaration order; empty when the patch cannot be read. */ rows: BundleRowInfo[] /** Ids of rows the bundle's patch changes without declaring them: the built-in rows it configures or disables. */ overrides: string[] }
    新: export interface BundleInfo { name: string /** Project-maintained shipped optional bundle or on-demand catalog entry, independent of installation and selection. */ official: boolean /** Readable package location; on-demand catalog entries exclude undeclared transitive copies, and declared files may be missing. */ availability: 'installation' | 'profile' | 'missing' /** Exact released Host version or same-checkout development link offered for an on-demand catalog entry. */ installTarget?: { spec: string; version: string } version?: string /** Local display text with available translations or literal fallbacks, or a metadata diagnostic. */ meta?: PluginLocalizedMeta /** Untranslated `description` of this bundle's package manifest. */ description?: string /** Default GUI visibility after package and Host checks; selected or profile-installed bundles remain manageable. */ listedByDefault?: boolean /** Selected in the profile manifest; a load error means its layer was skipped. */ enabled: boolean /** Whether the profile declares this dependency; availability separately reports whether its files can be read. */ installed: boolean /** * Present for a profile dependency the installation does not also supply: the spec `pnpm add` accepts, with local * paths made absolute and the user information of an http(s) URL removed. */ source?: string /** * Whether the installation ships the bundle for the person to switch on: named by the launcher's `OPTIONAL_BUNDLES`, * held by the installation's dependencies, selected by no shipped template, and never removable. */ optional: boolean removable: boolean /** * Whether `listVersions` and `updateBundle` accept the bundle: a third-party profile dependency saved as a registry * spec under its own name, whose installed manifest declares a semver version, and that carries no plugin management. */ updatable: boolean readOnlyReason?: ReadOnlyReason error?: ManagementError /** The rows the bundle's patch inserts, in declaration order; empty when the patch cannot be read. */ rows: BundleRowInfo[] /** Ids of rows the bundle's patch changes without declaring them: the built-in rows it configures or disables. */ overrides: string[] }
- **[ast-signature-changed]** `packages/boot/plugin-manager/src/types.ts` — 签名变化: ChangeResult
    旧: export interface ChangeResult { changed: boolean /** `cancelled` is an installation the caller stopped, its files restored. */ application: 'applied' | 'restart-required' | 'overridden' | 'failed' | 'cancelled' /** Present with `restart-required`: why the change takes effect only at the next start. */ restartReason?: RestartReason /** Last attempted step; successful installation can proceed to enablement. */ stage: 'install' | 'enable' | 'remove' target: string enabled?: boolean error?: ManagementError /** Pre-existing inactive entries the operation left as they were. */ warnings?: string[] packageResult?: PackageResult /** The bundle an installation added, once pnpm and the bundle check accepted it. */ bundle?: string /** The installed bundle's manifest version, when declared; pnpm's `minimumReleaseAge` can make it older than the newest release. */ version?: string /** Exact package names awaiting explicit script approval in the profile's pnpm settings, read after a failed run. */ pendingBuilds?: string[] /** Package script permissions saved before this installation attempt. */ approvedBuilds?: string[] /** The registries the installation asked, in order; `packageResult` is the last one's run. */ registries?: Registry[] /** * What the last failed run could not reach or get an answer from: the registry it asked, or the host a git or * tarball spec is fetched from, which no registry stands in for; absent for a failure neither explains. */ failedAt?: 'registry' | 'spec-host' }
    新: export interface ChangeResult { changed: boolean /** `cancelled` is an installation the caller stopped, its files restored. */ application: 'applied' | 'restart-required' | 'overridden' | 'failed' | 'cancelled' /** Present with `restart-required`: why the change takes effect only at the next start. */ restartReason?: RestartReason /** Last attempted step; successful installation can proceed to enablement. */ stage: 'install' | 'enable' | 'remove' target: string enabled?: boolean error?: ManagementError /** Pre-existing inactive entries the operation left as they were. */ warnings?: string[] packageResult?: PackageResult /** The bundle an installation added, once pnpm and the bundle check accepted it. */ bundle?: string /** The installed bundle's manifest version, when declared; pnpm's `minimumReleaseAge` can make it older than the newest release. */ version?: string /** Exact `allowBuilds` keys awaiting explicit script approval in the profile's pnpm settings, read after a failed run. */ pendingBuilds?: string[] /** Package script permissions saved before this installation attempt. */ approvedBuilds?: string[] /** The registries the installation asked, in order; `packageResult` is the last one's run. */ registries?: Registry[] /** * What the last failed run could not reach or get an answer from: the registry it asked, or the host a git or * tarball spec is fetched from, which no registry stands in for; absent for a failure neither explains. */ failedAt?: 'registry' | 'spec-host' }
- **[ast-signature-changed]** `packages/client/modules/src/client/manifest.ts` — 签名变化: ClientBundleRequire
    旧: export interface ClientBundleRequire { /** Resolve a module-table dependency synchronously. */ (specifier: string): unknown /** Load and resolve a package-local dynamic chunk asynchronously. */ async(specifier: string): Promise<unknown> }
    新: export interface ClientBundleRequire { /** Resolve a module-table dependency synchronously. */ (specifier: string): unknown /** Load and resolve a package-local dynamic chunk asynchronously. */ async(specifier: string): Promise<unknown> /** * Resolve a package-asset reference (`plugins/<package>/assets/<path>`) the * build compiled from an asset import or stylesheet `url()` to the URL the * page loads; the reference itself unless the carrier maps it. */ asset(reference: string): string }
- **[ast-signature-changed]** `packages/client/modules/src/client/manifest.ts` — 签名变化: ClientModuleCreateOptions
    旧: export interface ClientModuleCreateOptions { /** Raw Host-injected boot graph; the modules bundle owns validation and projection. */ boot: unknown /** Module-table seed: platform-singleton specifier → shell instance. */ staticModules: Record<string, unknown> /** Bundle-load hook. Defaults to a same-origin classic `<script src>` element. */ loadBundle?: (url: string) => Promise<void> }
    新: export interface ClientModuleCreateOptions { /** Raw Host-injected boot graph; the modules bundle owns validation and projection. */ boot: unknown /** Module-table seed: platform-singleton specifier → shell instance. */ staticModules: Record<string, unknown> /** Bundle-load hook. Defaults to a same-origin classic `<script src>` element. */ loadBundle?: (url: string) => Promise<void> /** Package-asset reference hook behind {@link ClientBundleRequire.asset}. Defaults to returning the reference. */ resolveAsset?: (reference: string) => string }
- **[ast-signature-changed]** `packages/client/modules/src/client/manifest.ts` — 签名变化: ClientModuleSystemOptions
    旧: export interface ClientModuleSystemOptions { /** Boot graph validated by {@link parseBootManifest}, owned by the resulting module system. */ manifest: BootManifest /** Module-table seed: platform-singleton specifier → shell instance. */ staticModules: Record<string, unknown> /** Stable HTML-installed registration facade to switch from queue to live mode. */ registrationTarget: ClientModuleLoaderTarget /** Already-materialized modules bundle consumed while creating the system. */ bootstrapModule: ClientBootstrapModule /** Bundle-load hook. Defaults to a same-origin classic `<script src>` element. */ loadBundle?: (url: string) => Promise<void> }
    新: export interface ClientModuleSystemOptions { /** Boot graph validated by {@link parseBootManifest}, owned by the resulting module system. */ manifest: BootManifest /** Module-table seed: platform-singleton specifier → shell instance. */ staticModules: Record<string, unknown> /** Stable HTML-installed registration facade to switch from queue to live mode. */ registrationTarget: ClientModuleLoaderTarget /** Already-materialized modules bundle consumed while creating the system. */ bootstrapModule: ClientBootstrapModule /** Bundle-load hook. Defaults to a same-origin classic `<script src>` element. */ loadBundle?: (url: string) => Promise<void> /** Package-asset reference hook behind {@link ClientBundleRequire.asset}. Defaults to returning the reference. */ resolveAsset?: (reference: string) => string }
- **[ast-signature-changed]** `packages/client/ui-chat/src/chat-settings.ts` — 签名变化: ChatSettings
    旧: export interface ChatSettings { /** Work-details preference; absence uses the client default, and legacy saved values remain accepted. */ transcriptView?: TranscriptViewMode | typeof LEGACY_TRANSCRIPT_VIEW_MODE | typeof LEGACY_EXPANDED_TRANSCRIPT_VIEW_MODE | null /** Independent collapse timing; absence preserves completion-time folding. */ collapseTiming?: CollapseTiming /** Detail level for composer statistics and completed-Turn usage. */ performanceUsage: PerformanceUsageMode /** Default destination for Chat HTTP(S) links. */ linkOpening: LinkOpening }
    新: export interface ChatSettings { /** Work-details preference; absence uses the client default, and legacy saved values remain accepted. */ transcriptView?: TranscriptViewMode | typeof LEGACY_TRANSCRIPT_VIEW_MODE | typeof LEGACY_EXPANDED_TRANSCRIPT_VIEW_MODE | null /** Independent collapse timing; absence preserves completion-time folding. */ collapseTiming?: CollapseTiming /** Replies kept visible in a folded Turn; absence keeps every reply. */ foldedReplies?: FoldedReplies /** Detail level for composer statistics and completed-Turn usage. */ performanceUsage: PerformanceUsageMode /** Default destination for Chat HTTP(S) links. */ linkOpening: LinkOpening }
- **[ast-signature-changed]** `packages/client/ui-dockkit/src/components/DockSurface.tsx` — 签名变化: DockSurfaceProps
    旧: export interface DockSurfaceProps { readonly state: LayoutState /** * Whether another pane may still be created: the pane budget. Width is the * kit's own concern — a pane too narrow for two working halves keeps its * split control disabled with `labels.splitPaneNarrow` (see README). */ readonly canSplit: boolean /** Hide a blocked split control — pane budget spent or pane too narrow — instead of rendering it disabled; defaults to false. */ readonly hideSplitWhenBlocked?: boolean /** Body drop geometry: all edge bands, or left/right halves with whole-pane moves once splitting is unavailable. */ readonly dropZones?: 'edges' | 'horizontal' /** Smallest share a divider may leave a pane; defaults to the kit's fraction. */ readonly minPaneFraction?: number /** * Whether a pane's strip draws the add control. Called per docked pane on * every render; omit to draw one in every pane. `false` leaves the strip's * end controls where they are and the chips as the only shrinking part. */ readonly canAddTab?: (paneId: PaneId) => boolean /** * Whether a tab draws its close control and its menu's close item. Called * per rendered chip on every render; omit to keep every tab closable. * `false` removes both routes without moving the chip: the close control * paints over the title's end rather than beside it, so the chip is the same * width either way. The menu still opens and carries the embedder's items. */ readonly canCloseTab?: (tabId: TabId) => boolean readonly intents: DockIntents readonly labels: DockLabels readonly renderTab: TabRenderer /** * What a tab's chip shows as its title; omit to show the record's `title` * text. An embedder-internal seam: the Sidebar dispatches it to a per-kind * slot, and nothing outside that embedder is expected to supply it. */ readonly renderTabTitle?: TabRenderer /** Extra items for a tab's context menu; omit for the kit's own item only. */ readonly renderTabMenuItems?: TabMenuExtras /** * Surface-wide controls, drawn at the far end of the top-right pane's tab * strip so the surface needs no header of its own. The kit places them; what * they do is the embedder's. */ readonly chrome?: ReactNode /** * Called with the room rule's latest readings whenever they change, so an * embedder driving splits programmatically can honour the same rule the * split control does. A pane absent from the map has not been measured. */ readonly onRoom?: (fits: ReadonlyMap<PaneId, HalvesFit>) => void }
    新: export interface DockSurfaceProps { readonly state: LayoutState /** * Whether another pane may still be created: the pane budget. Width is the * kit's own concern — a pane too narrow for two working halves keeps its * split control disabled with `labels.splitPaneNarrow` (see README). */ readonly canSplit: boolean /** Hide a blocked split control — pane budget spent or pane too narrow — instead of rendering it disabled; defaults to false. */ readonly hideSplitWhenBlocked?: boolean /** Body drop geometry: all edge bands, or left/right halves with whole-pane moves once splitting is unavailable. */ readonly dropZones?: 'edges' | 'horizontal' /** Smallest share a divider may leave a pane; defaults to the kit's fraction. */ readonly minPaneFraction?: number /** * Whether a pane's strip draws the add control. Called per docked pane on * every render; omit to draw one in every pane. `false` leaves the strip's * end controls where they are and the chips as the only shrinking part. */ readonly canAddTab?: (paneId: PaneId) => boolean /** * Whether a tab may close via its close control, menu item, or middle click. Called * per rendered chip on every render; omit to keep every tab closable. * `false` blocks these routes without moving the chip: the close control * paints over the title's end rather than beside it, so the chip is the same * width either way. The menu still opens and carries the embedder's items. */ readonly canCloseTab?: (tabId: TabId) => boolean readonly intents: DockIntents readonly labels: DockLabels readonly renderTab: TabRenderer /** * What a tab's chip shows as its title; omit to show the record's `title` * text. An embedder-internal seam: the Sidebar dispatches it to a per-kind * slot, and nothing outside that embedder is expected to supply it. */ readonly renderTabTitle?: TabRenderer /** Extra items for a tab's context menu; omit for the kit's own item only. */ readonly renderTabMenuItems?: TabMenuExtras /** * Surface-wide controls, drawn at the far end of the top-right pane's tab * strip so the surface needs no header of its own. The kit places them; what * they do is the embedder's. */ readonly chrome?: ReactNode /** * Called with the room rule's latest readings whenever they change, so an * embedder driving splits programmatically can honour the same rule the * split control does. A pane absent from the map has not been measured. */ readonly onRoom?: (fits: ReadonlyMap<PaneId, HalvesFit>) => void }
- **[ast-signature-changed]** `packages/client/ui-dockkit/src/components/DockSurface.tsx` — 签名变化: hitTest
    旧: function(root:HTMLElement,x:number,y:number,canSplit:boolean,fits:ReadonlyMap<PaneId, HalvesFit>,dropZones:'edges' | 'horizontal')
    新: function(root:HTMLElement,x:number,y:number,tabId:TabId,canSplit:boolean,fits:ReadonlyMap<PaneId, HalvesFit>,dropZones:'edges' | 'horizontal')
- **[ast-signature-changed]** `packages/client/ui-primitives/src/SegmentedTabs.tsx` — 签名变化: SegmentedTabs
    旧: function({ items, value, onChange, label, className }:{ items: readonly [SegmentedTab<Value>, ...SegmentedTab<Value>[]] value: Value onChange: (value: Value) => void label: string className?: string | undefined })
    新: function({ items, value, onChange, label, className, size = 'md' }:{ items: readonly [SegmentedTab<Value>, ...SegmentedTab<Value>[]] value: Value onChange: (value: Value) => void label: string className?: string | undefined size?: 'sm' | 'md' | undefined })
- **[ast-signature-changed]** `packages/client/ui-primitives/src/HoverCard.tsx` — 签名变化: HoverCard
    旧: function({
  anchor, content, openDelayMs = 500, disabled = false, grouped = false,
  copyText, copyLabel, copiedLabel, variant = 'compact', widthAnchorRef, inline = false,
}:{ anchor: ReactNode /** Inline media preview using the shared menu material and keyboard focus. */ inline?: boolean content: ReactNode openDelayMs?: number disabled?: boolean grouped?: boolean variant?: 'compact' | 'preview' widthAnchorRef?: RefObject<HTMLElement | null> } & ({ copyText?: string | undefined; copyLabel: string; copiedLabel: string } | { copyText?: undefined copyLabel?: string copiedLabel?: string }))
    新: function({
  anchor, content, openDelayMs = 500, disabled = false, grouped = false,
  copyText, copyLabel, copiedLabel, variant = 'compact', widthAnchorRef, inline = false, fitContent = false,
}:{ anchor: ReactNode /** Inline media preview using the shared menu material and keyboard focus. */ inline?: boolean fitContent?: boolean content: ReactNode openDelayMs?: number disabled?: boolean grouped?: boolean variant?: 'compact' | 'preview' widthAnchorRef?: RefObject<HTMLElement | null> } & ({ copyText?: string | undefined; copyLabel: string; copiedLabel: string } | { copyText?: undefined copyLabel?: string copiedLabel?: string }))
- **[ast-signature-changed]** `packages/client/ui-primitives/src/HoverCardGroup.tsx` — 签名变化: HoverCardGroup
    旧: function({ children, className }:{ children: ReactNode; className?: string })
    新: function({ children, className, as: Container = 'div' }:{ children: ReactNode className?: string | undefined as?: 'div' | 'span' })
- **[ast-signature-changed]** `packages/client/ui-primitives/src/Tooltip.tsx` — 签名变化: AnchorProps
    旧: interface AnchorProps { 'aria-describedby'?: string | undefined ref?: Ref<HTMLElement> | undefined onMouseEnter?: MouseEventHandler | undefined onMouseLeave?: MouseEventHandler | undefined onClick?: MouseEventHandler | undefined onFocus?: FocusEventHandler | undefined onBlur?: FocusEventHandler | undefined }
    新: interface AnchorProps { 'aria-describedby'?: string | undefined ref?: Ref<HTMLElement> | undefined onPointerEnter?: PointerEventHandler | undefined onPointerLeave?: PointerEventHandler | undefined onPointerDown?: PointerEventHandler | undefined onClick?: MouseEventHandler | undefined onFocus?: FocusEventHandler | undefined onBlur?: FocusEventHandler | undefined }
- **[ast-signature-changed]** `packages/client/ui-primitives/src/Tooltip.tsx` — 签名变化: Tooltip
    旧: function({ label, shortcutKeys, side = 'right', align = 'center', delayMs = 0, focusDelayMs = 0, gap = 8, disabled = false, portal = false, maxWidth, openOnClick = false, children }:{ label: TooltipLabel; shortcutKeys?: readonly string[] | undefined; side?: TooltipSide; align?: 'center' | 'end'; delayMs?: number; focusDelayMs?: number; gap?: number; disabled?: boolean; portal?: boolean; maxWidth?: number; openOnClick?: boolean; children: ReactElement<AnchorProps> })
    新: function({ label, shortcutKeys, side = 'right', align = 'center', delayMs = 0, focusDelayMs = 0, gap = 8, disabled = false, portal = false, maxWidth, openOnClick = false, onlyWhenClipped = false, children }:{ label: TooltipLabel; shortcutKeys?: readonly string[] | undefined; side?: TooltipSide; align?: 'center' | 'end'; delayMs?: number; focusDelayMs?: number; gap?: number; disabled?: boolean; portal?: boolean; maxWidth?: number; openOnClick?: boolean; onlyWhenClipped?: boolean; children: ReactElement<AnchorProps> })
- **[ast-signature-changed]** `packages/client/ui-primitives/src/markdown/MarkdownDelegate.tsx` — 签名变化: MarkdownDelegate
    旧: export interface MarkdownDelegate { /** Image previews for decoded local paths in this owner's workspace. */ readonly fileImages?: { resolve: (path: string) => string | undefined labels: ImageLightboxLabels & { open: string; loading: string; failed: string } } | undefined /** Ordinary HTTP(S) activation; absent handlers retain native anchor behavior. */ readonly openExternalLink?: MarkdownExternalLinkHandler | undefined /** * Open a decoded local destination from settled Markdown; absent handlers leave plain text. * @param path - Absolute or workspace-relative file path. * @param options - First line to reveal when the destination specifies a line or range. */ readonly openFile?: ((path: string, options?: { line?: number }) => void) | undefined }
    新: export interface MarkdownDelegate { /** * Image previews for decoded local paths in this owner's workspace. The renderer * appends a per-mount `load` query parameter to `api/file` route URLs. */ readonly fileImages?: { fileDrag: import('../file-drag-actions.ts').FileDragActions resolve: (path: string) => string | undefined resourceAddress?: ((path: string) => string) | undefined labels: ImageLightboxLabels & { open: string; loading: string; failed: string } } | undefined /** Ordinary HTTP(S) activation; absent handlers retain native anchor behavior. */ readonly openExternalLink?: MarkdownExternalLinkHandler | undefined /** * Open a decoded local destination from settled Markdown; absent handlers leave plain text. * @param path - Absolute or workspace-relative file path. * @param options - First line to reveal when the destination specifies a line or range. */ readonly openFile?: ((path: string, options?: { line?: number }) => void) | undefined }
- **[ast-signature-changed]** `packages/client/ui-primitives/src/markdown/MarkdownText.tsx` — 签名变化: renderSettled
    旧: function(text:string,labels:MarkdownLabels,fileMentions:MarkdownFileMentions | undefined,pathImages:MarkdownPathImages | undefined)
    新: function(text:string,labels:MarkdownLabels,fileMentions:MarkdownFileMentions | undefined,pathImages:MarkdownPathImages | undefined,omitHtml:boolean)
- **[ast-signature-changed]** `packages/client/ui-primitives/src/markdown/MarkdownText.tsx` — 签名变化: StreamingRenderer
    旧: class(labels:MarkdownLabels)
    新: class(labels:MarkdownLabels,omitHtml:boolean)
- **[ast-signature-changed]** `packages/client/web/src/boot.ts` — 签名变化: BootSeams
    旧: export type BootSeams = Pick<ClientModuleCreateOptions, 'loadBundle'>
    新: export type BootSeams = Pick<ClientModuleCreateOptions, 'loadBundle' | 'resolveAsset'>
- **[ast-signature-changed]** `packages/context/agent-instructions/src/render.ts` — 签名变化: RenderedInstructionContext
    旧: interface RenderedInstructionContext extends RenderedAgentInstructions { /** * Original files semantically represented by rendered section text. This is * not the complement of `omitted`: a truncated file may be represented here * and in `truncated`, while a notice-only file appears in neither. A genuinely * empty file counts when its heading survives because that heading conveys * that the instruction exists and has no content. */ represented: LoadedInstructionFile[] }
    新: interface RenderedInstructionContext extends RenderedAgentInstructions { /** * Original files semantically represented by rendered section text. This is * not the complement of `omitted`: a truncated file may be represented here * and in `truncated`, while a notice-only file appears in neither. A genuinely * empty file counts when its heading survives because that heading conveys * that the instruction exists and has no content. */ represented: LoadedInstructionFile[] /** Files whose sections the text holds, in text order, each with the content the text holds. */ sections: LoadedInstructionFile[] /** * Intro block of the `<system-reminder>` frame: undefined when the text is * empty or a notice without a frame, and the empty string when the frame has * no intro, as in a change batch or a merged frame whose chains both rendered * without a frame. */ intro: string | undefined }
- **[ast-signature-changed]** `packages/core/agent/src/runtime-types.ts` — 签名变化: AgentOptions
    旧: export interface AgentOptions { /** Provider route (must have a registered adapter at call time). */ provider?: string /** Model id interpreted by the selected provider adapter. */ model?: string /** Adapter-owned reasoning effort for the selected provider/model route. */ reasoningEffort?: ReasoningEffortId /** Maximum output tokens for each conversation-model request. */ maxTokens?: number }
    新: export interface AgentOptions { /** Provider route (must have a registered adapter at call time). */ provider?: string /** Model id interpreted by the selected provider adapter. */ model?: string /** Adapter-owned reasoning effort for the selected provider/model route. */ reasoningEffort?: ReasoningEffortId | undefined /** Maximum output tokens for each conversation-model request. */ maxTokens?: number }
- **[ast-signature-changed]** `packages/core/agent/src/runtime-types.ts` — 签名变化: Agent
    旧: interface Agent { /** The provider route and model this agent's requests use. */ readonly options: AgentOptions /** The live session this agent drives; its log is the durable source of truth. */ readonly session: Session /** Agent-owned access to durable pending work. */ readonly inbox: Inbox /** The current lifecycle state, mirrored on every `agent/status` transition. */ readonly status: AgentStatus /** Agent-scoped context; its contributions are agent-local, unwind on disposal, and reject registration afterward. */ readonly ctx: Context /** * Clear queued and steering work — unless `keepInbox` — and abort the active * turn or between-turn task. The first cause wins for that activity. With no * active activity, cancellation is a no-op and does not arm later work. * @param cause - the stable caller intent carried by the active operation signal. * @param options - cancellation options; `keepInbox` preserves pending work. */ cancel(cause: AgentCancelCause, options?: CancelOptions): void /** * Resolve after the current whole-agent activity reaches quiescence. This * follows replacement work started before the observed driver retires, * but does not identify the settlement of any particular message. * @returns fulfillment after no active driver or maintenance task remains. */ whenIdle(): Promise<void> /** * Run one non-turn maintenance task from the true idle phase. The task starts * synchronously after claiming that phase; later waking input remains in the * inbox until the task settles, while public status stays `idle`. * `whenIdle()` follows both the task and any waking work released behind it. * @param task - operation whose fulfillment or rejection is preserved, with a signal aborted by {@link cancel}. * @throws synchronously when turn-driving or another maintenance task already owns the agent. * @returns the task promise. */ runMaintenance<T>(task: (signal: AbortSignal) => Promise<T>): Promise<T> /** * Route identified input to an inbox boundary and optionally wake the driver. * Waking input submitted after active cancellation is queued for the next * turn and runs when the aborted activity converges to idle; a `disposed` * cancel leaves it parked. A wake submitted while already idle always opens * its turn boundary, even when its message is cleared before the driver * claims ([driver wake convergence](../../agent-loop/src/agent.ts)). * @param message - identified content and the source that supplied it. * @param target - the preferred next-turn or next-step inbox boundary. * @param wakeup - whether delivery may wake the driver. */ send(message: UserMessage, target: InboxTarget, wakeup: boolean): void /** * Queue an ordinary follow-up turn and wake the driver. The item becomes the * sole ordinary message of its own turn. * @param message - identified prompt content and the source that supplied it. */ followup(message: UserMessage): void /** * Submit steering for the nearest step. An idle driver starts a turn; * a running driver consumes it at its next step boundary. * A rejected step leaves steering parked in the inbox until the next * wake; cancellation or disposal may discard pending steering. * @param message - identified steering content and the source that supplied it. */ steer(message: UserMessage): void /** * Queue model-facing context for the next pre-step without waking the * driver. A running driver claims it at the nearest later step boundary; * idle drivers leave it pending until follow-up or steering * wakes them. It may miss a request whose pre-step already claimed its * batch. Cancellation or disposal may discard pending context. * @param message - identified injected context and the source that supplied it. */ inject(message: UserMessage): void }
    新: interface Agent { /** Route fallback and output controls; live accessors apply until the Session records a selection or request. */ readonly options: AgentOptions /** The live session this agent drives; its log is the durable source of truth. */ readonly session: Session /** Agent-owned access to durable model selection for future steps. */ readonly model: Model /** Agent-owned access to durable pending work. */ readonly inbox: Inbox /** The current lifecycle state, mirrored on every `agent/status` transition. */ readonly status: AgentStatus /** Agent-scoped context; its contributions are agent-local, unwind on disposal, and reject registration afterward. */ readonly ctx: Context /** * Clear queued and steering work — unless `keepInbox` — and abort the active * turn or between-turn task. The first cause wins for that activity. With no * active activity, cancellation is a no-op and does not arm later work. * @param cause - the stable caller intent carried by the active operation signal. * @param options - cancellation options; `keepInbox` preserves pending work. */ cancel(cause: AgentCancelCause, options?: CancelOptions): void /** * Resolve after the current whole-agent activity reaches quiescence. This * follows replacement work started before the observed driver retires, * but does not identify the settlement of any particular message. * @returns fulfillment after no active driver or maintenance task remains. */ whenIdle(): Promise<void> /** * Run one non-turn maintenance task from the true idle phase. The task starts * synchronously after claiming that phase; later waking input remains in the * inbox until the task settles, while public status stays `idle`. * `whenIdle()` follows both the task and any waking work released behind it. * @param task - operation whose fulfillment or rejection is preserved, with a signal aborted by {@link cancel}. * @throws synchronously when turn-driving or another maintenance task already owns the agent. * @returns the task promise. */ runMaintenance<T>(task: (signal: AbortSignal) => Promise<T>): Promise<T> /** * Route identified input to an inbox boundary and optionally wake the driver. * Waking input submitted after active cancellation is queued for the next * turn and runs when the aborted activity converges to idle; a `disposed` * cancel leaves it parked. A wake submitted while already idle always opens * its turn boundary, even when its message is cleared before the driver * claims ([driver wake convergence](../../agent-loop/src/agent.ts)). * @param message - identified content and the source that supplied it. * @param target - the preferred next-turn or next-step inbox boundary. * @param wakeup - whether delivery may wake the driver. */ send(message: UserMessage, target: InboxTarget, wakeup: boolean): void /** * Queue an ordinary follow-up turn and wake the driver. The item becomes the * sole ordinary message of its own turn. * @param message - identified prompt content and the source that supplied it. */ followup(message: UserMessage): void /** * Submit steering for the nearest step. An idle driver starts a turn; * a running driver consumes it at its next step boundary. * A rejected step leaves steering parked in the inbox until the next * wake; cancellation or disposal may discard pending steering. * @param message - identified steering content and the source that supplied it. */ steer(message: UserMessage): void /** * Queue model-facing context for the next pre-step without waking the * driver. A running driver claims it at the nearest later step boundary; * idle drivers leave it pending until follow-up or steering * wakes them. It may miss a request whose pre-step already claimed its * batch. Cancellation or disposal may discard pending context. * @param message - identified injected context and the source that supplied it. */ inject(message: UserMessage): void }
- **[ast-signature-changed]** `packages/core/agent/src/model-selection.ts` — 签名变化: installModelSelection
    旧: function(agentCtx:Context,selection:ModelSelectionRef)
    新: function(agentCtx:Context)
- **[ast-signature-changed]** `packages/core/session/src/types.ts` — 签名变化: SessionHeader
    旧: export interface SessionHeader { /** * Current logical format version, stamped from {@link SESSION_FORMAT_VERSION}. * Historical physical headers are translated before entering this interface. */ readonly version: typeof SESSION_FORMAT_VERSION /** The session's id (mirrors the {@link Session}'s id). */ readonly id: SessionId /** Non-negative safe-integer Unix epoch milliseconds when the session was created. */ readonly createdAt: number /** Absolute working directory the session was created in (if any). */ readonly cwd?: string /** The session this one was forked from (seed lineage), if any. */ readonly parentSession?: SessionId /** * Whether this Session contains a fork-inherited event prefix. The exact prefix * length is Session state rather than ordinary header metadata. */ readonly isSeeded: boolean /** * Coarse product classification for a session created as a subagent child. * This is presentation metadata, not proof that the child is continuable. */ readonly origin?: 'subagent' /** * Delegation depth: absent (zero) for a top-level session, parent depth + 1 * for a subagent child. Persisted so a recursion budget survives restart and * resume — a runtime-only depth would reset a resumed child to top-level. */ readonly delegationDepth?: number /** * Id of the agent preset this session's agent was composed from, when the * deployment composes per session. Durable because the preset decides the * session's tools and prompt: a resume that restored a different composition * would replay history the model can no longer act on. */ readonly agentPreset?: string }
    新: export interface SessionHeader { /** * Current logical format version, stamped from {@link SESSION_FORMAT_VERSION}. * Historical physical headers are translated before entering this interface. */ readonly version: typeof SESSION_FORMAT_VERSION /** The session's id (mirrors the {@link Session}'s id). */ readonly id: SessionId /** Non-negative safe-integer Unix epoch milliseconds when the session was created. */ readonly createdAt: number /** Absolute working directory the session was created in (if any). */ readonly cwd?: string /** * Direct creator of a subagent Session. Ordinary forks omit this field; * historical ordinary forks may retain their source id here. Presence alone * does not classify a Session as a subagent; use `origin` for that distinction. */ readonly parentSession?: SessionId /** * Whether this Session contains a fork-inherited event prefix. The exact prefix * length is Session state rather than ordinary header metadata. */ readonly isSeeded: boolean /** * Coarse product classification for a session created as a subagent child. * This is presentation metadata, not proof that the child is continuable. */ readonly origin?: 'subagent' /** * Delegation depth: absent (zero) for a top-level session, parent depth + 1 * for a subagent child. Persisted so a recursion budget survives restart and * resume — a runtime-only depth would reset a resumed child to top-level. */ readonly delegationDepth?: number /** * Id of the agent preset this session's agent was composed from, when the * deployment composes per session. Durable because the preset decides the * session's tools and prompt: a resume that restored a different composition * would replay history the model can no longer act on. */ readonly agentPreset?: string }
- **[ast-signature-changed]** `packages/core/session/src/types.ts` — 签名变化: TurnEndReasonMap
    旧: export interface TurnEndReasonMap { completed: { kind: 'completed' } /** A cancellation request interrupted the live turn. */ aborted: { kind: 'aborted'; reason: TurnEndCancelCause } blocked: { kind: 'blocked' } /** * The turn failed. `error` is always a structured failure: the `LlmError` * facts verbatim, or `{ message: errorChain(error), code: 'UNKNOWN' }` * flattened from any other error. */ error: { kind: 'error'; error: LlmFailure } /** At least one step reached its output-token ceiling, even if a plugin continued the turn. */ 'max-tokens': { kind: 'max-tokens' } /** * A crash-orphaned turn was closed after the fact: agent-loop resume appends * this closer for a stored log whose last turn never ended, and session-query * synthesizes it on cold reads. The loop never emits this marker live, and * the events recorded before the crash remain intact. */ interrupted: { kind: 'interrupted' } /** * Fork-seed construction closed a turn that was still open at the fork * boundary in the source session. Only fork seeds carry this marker — the * loop never emits it — and the source events before the boundary remain * intact in the child. */ forked: { kind: 'forked' } }
    新: export interface TurnEndReasonMap { completed: { kind: 'completed' } /** A cancellation request interrupted the live turn. */ aborted: { kind: 'aborted'; reason: TurnEndCancelCause } blocked: { kind: 'blocked' } /** * The turn failed. `error` is always a structured failure: the `LlmError` * facts verbatim, or `{ message: errorChain(error), code }` flattened from * any other error, where `code` is `TOOL_ACTIVATION_FAILED` for a failed * tool condition and `UNKNOWN` otherwise. */ error: { kind: 'error'; error: LlmFailure } /** At least one step reached its output-token ceiling, even if a plugin continued the turn. */ 'max-tokens': { kind: 'max-tokens' } /** * A crash-orphaned turn was closed after the fact: agent-loop resume appends * this closer for a stored log whose last turn never ended, and session-query * synthesizes it on cold reads. The loop never emits this marker live, and * the events recorded before the crash remain intact. */ interrupted: { kind: 'interrupted' } /** * Fork-seed construction closed a turn that was still open at the fork * boundary in the source session. Only fork seeds carry this marker — the * loop never emits it — and the source events before the boundary remain * intact in the child. */ forked: { kind: 'forked' } }
- **[ast-signature-changed]** `packages/core/tool-executor-ptc/src/ts-types.ts` — 签名变化: frames
    旧: var:ValueFrame[]
    新: var:SchemaRenderFrame[]
- **[ast-signature-changed]** `packages/llm/llm-deepseek/src/listing.ts` — 签名变化: capacity
    旧: var
    新: function(value:unknown)
- **[ast-signature-changed]** `packages/core/tool-executor-ptc/src/ts-types.ts` — 签名变化: ToolSdkSchema
    旧: export interface ToolSdkSchema extends ToolSchema { /** Validated canonical value returned by the tool binding. */ output: JsonSchemaNode }
    新: export interface ToolSdkSchema extends Readonly<ToolSchema> { /** Validated canonical value returned by the tool binding. */ readonly output: JsonSchemaNode }
- **[ast-signature-changed]** `packages/core/tool-executor-ptc/src/ts-types.ts` — 签名变化: renderSdkInstructions
    旧: function(programFormat:'function-body' | 'repl')
    新: function(programFormat:PtcProgramFormat)
- **[ast-signature-changed]** `packages/core/tool-executor-ptc/src/ts-types.ts` — 签名变化: renderSdkProgramInstructions
    旧: function(programFormat:'function-body' | 'repl')
    新: function(programFormat:PtcProgramFormat)
- **[ast-signature-changed]** `packages/core/tool-executor-ptc/src/ts-types.ts` — 签名变化: renderBashExample
    旧: function(schemas:ToolSdkSchema[],programFormat:'function-body' | 'repl')
    新: function(schemas:ToolSdkSchema[],programFormat:PtcProgramFormat)
- **[ast-signature-changed]** `packages/core/tool-executor-ptc/src/ts-types.ts` — 签名变化: renderToolsSdk
    旧: function(schemas:ToolSdkSchema[],programFormat:'function-body' | 'repl')
    新: function(schemas:readonly ToolSdkSchema[],programFormat:PtcProgramFormat)
- **[ast-signature-changed]** `packages/core/tool-executor-ptc/src/py-types.ts` — 签名变化: renderToolsSdkPy
    旧: function(schemas:ToolSdkSchema[])
    新: function(schemas:readonly ToolSdkSchema[])
- **[ast-signature-changed]** `packages/test-support/tool-testkit` — 签名变化: ContentToolFixtureOptions
    旧: export type ContentToolFixtureOptions<S extends ParameterSchemaSpec> = Omit< DefineToolOptions<S, typeof CONTENT_VALUE_SCHEMA>, 'output' | 'execute' > & { /** Produce the fixture's content blocks as its canonical test value. */ execute(args: import('./schema.ts').InferArgs<S>, exec: ToolRunContext): Promise<ContentBlock[]> }
    新: export type ContentToolFixtureOptions<S extends ParameterSchemaSpec> = Omit< DefineToolOptions<S, typeof CONTENT_VALUE_SCHEMA>, 'output' | 'execute' > & { /** Produce the fixture's content blocks as its canonical test value. */ execute(args: InferArgs<S>, exec: ToolRunContext): Promise<ContentBlock[]> }
- **[ast-signature-changed]** `packages/experimental/inspector/src/host/plugin.ts` — 签名变化: bootstrapResponse
    旧: function(ready:Promise<InspectorClientBootstrap | undefined>,signal:AbortSignal)
    新: function(ready:Promise<InspectorClientBootstrap | undefined>,request:Request)
- **[ast-signature-changed]** `packages/experimental/webworker-runtime/src/transport/tunnel.ts` — 签名变化: TunnelSeams
    旧: export interface TunnelSeams { /** * Direct entry to the API fetch handler for privileged methods and any unary * call the route lane refused with 401 or 403. */ readonly directFetch: (request: Request) => Promise<Response> /** Boot payload for `GET /__boot__`: the structured index injection table. */ readonly bootPayload: () => unknown /** Open one decoded Gateway Remote stream without another network carrier; `uplink` carries the page's items. */ readonly openStream: ( endpoint: string, payload: unknown, uplink: AsyncIterable<unknown>, signal: AbortSignal, ) => Promise<AsyncIterable<unknown>> /** Convert a Gateway stream failure to stable Client fields. */ readonly streamFailure: (error: unknown) => { readonly code: string readonly message: string readonly details: object } }
    新: export interface TunnelSeams { /** * Direct entry to the API fetch handler for privileged methods and any unary * call the route lane refused with 401 or 403. */ readonly directFetch: (request: Request) => Promise<Response> /** Boot payload for `GET /__boot__`: the structured index injection table. */ readonly bootPayload: () => unknown /** Archive for `GET /__assets__`: every package asset of the image, named by its unencoded `plugins/<package>/assets/<path>`. */ readonly packageAssets: () => Uint8Array /** Open one decoded Gateway Remote stream without another network carrier; `uplink` carries the page's items. */ readonly openStream: ( endpoint: string, payload: unknown, uplink: AsyncIterable<unknown>, signal: AbortSignal, ) => Promise<AsyncIterable<unknown>> /** Convert a Gateway stream failure to stable Client fields. */ readonly streamFailure: (error: unknown) => { readonly code: string readonly message: string readonly details: object } }
- **[ast-signature-changed]** `packages/experimental/webworker-runtime/src/worker-host.ts` — 签名变化: readBootPayload
    旧: function(ctx:HostContext)
    新: function(ctx:HostContext,peer:PeerScope)
- **[ast-signature-changed]** `packages/client/ui-dockkit/src/components/FloatLayer.tsx` — 签名变化: resize
    旧: function(bytes:Uint8Array,length:number)
    新: var
- **[ast-signature-changed]** `packages/experimental/liveshare/src/host/share-host.ts` — 签名变化: gateway
    旧: var
    新: var:ViewerReadGateway | undefined
- **[ast-signature-changed]** `packages/host/plugin-inventory/src/types.ts` — 签名变化: PluginInventoryEntry
    旧: export interface PluginInventoryEntry { readonly entryId: PluginEntryId /** Exact module specifier imported by the Loader entry. */ readonly moduleName: string /** Local package display metadata, independent of whether the entry is enabled. */ readonly meta?: PluginLocalizedMeta /** Effective Loader enablement, including disabled ancestor groups. */ readonly enabled: boolean readonly fiberPhase: PluginFiberPhase }
    新: export interface PluginInventoryEntry { readonly entryId: PluginEntryId /** Exact module specifier imported by the Loader entry. */ readonly moduleName: string /** Local package display metadata, independent of whether the entry is enabled. */ readonly meta?: PluginLocalizedMeta /** Effective Loader enablement, including disabled ancestor groups. */ readonly enabled: boolean readonly fiberPhase: PluginFiberPhase /** Current startup failure message; absent when this entry has no failed fiber. */ readonly diagnostic?: string }
- **[ast-signature-changed]** `packages/interaction/user-questions/src/types.ts` — 签名变化: AskUserQuestionIntent
    旧: export type AskUserQuestionIntent = { /** A plan submitted for review: `detail` is the plan markdown `ask()` requires, and the decision approves or declines it. */ kind: 'plan-review' /** * The option label that approves the plan; every other option declines it. * Named rather than positional so no UI infers the verdict from option order. * An `approve` naming no option of its own question is rejected at `ask()`. */ approve: string /** Logged tool invocation whose arguments contain the reviewed plan. */ callId?: ToolCallId }
    新: export type AskUserQuestionIntent = { /** A plan submitted for review: `detail` is the plan markdown `ask()` requires, and the decision approves or declines it. */ kind: 'plan-review' /** * The option label that approves the plan; every other option declines it. * Named rather than positional so no UI infers the verdict from option order. * An `approve` naming no option of its own question is rejected at `ask()`. */ approve: string /** Logged tool invocation whose arguments contain the reviewed plan. */ callId?: ToolCallId } | { /** A blocking permission decision with fixed actions and no free-text answer. */ kind: 'approval' /** Option label granting the scope described by the caller. */ approve: string /** Option label refusing the requested access. */ reject: string /** Optional persistent grant offered only when the caller supports it. */ always?: string /** Metadata for human recognition; the caller admits icon sources, which the UI may load as URLs. Never an authorization identity. */ subject?: { name: string; icon?: string } /** Localized question and limited-grant label; fixed cards own reject/always wording. Option labels remain answer values. */ display?: { question: { en: string; [locale: string]: string } detail?: { en: string; [locale: string]: string } approve?: { en: string; [locale: string]: string } } }
- **[ast-signature-changed]** `packages/boot/plugin-manager` — 签名变化: answers
    旧: var
    新: var:(R | undefined)[]
- **[ast-signature-changed]** `packages/llm/llm-deepseek/src/model-info.ts` — 签名变化: catalogModelInfo
    旧: function(provider:string,model:DeepSeekCatalogModel)
    新: function(provider:string,model:DeepSeekCatalogModel,?badge:LlmModelBadge)
- **[ast-signature-changed]** `packages/llm/llm-deepseek/src/listing.ts` — 签名变化: ListingEntry
    旧: export interface ListingEntry { /** Wire model id. */ readonly id: string /** Display name, when the entry declares a non-empty one. */ readonly name?: string /** Requirement declared under `client_requirements[APP_IDENTITY.product]`. */ readonly requirement: ClientRequirement /** Declared capabilities. */ readonly capabilities: ListedCapabilities }
    新: export interface ListingEntry { /** Wire model id. */ readonly id: string /** Display name, when the entry declares a non-empty one. */ readonly name?: string /** Requirement declared under `client_requirements[APP_IDENTITY.product]`. */ readonly requirement: ClientRequirement /** Declared capabilities. */ readonly capabilities: ListedCapabilities /** * Selector badge declared under `client_metadata[APP_IDENTITY.product].badge`; absent when the * entry declares none, and never a reason to hide the entry. */ readonly badge?: ListedBadge }
- **[ast-signature-changed]** `packages/experimental/creation-recommendations` — 签名变化: fieldsOf
    旧: function(value:unknown)
    新: function({ slot, customLocation, bundleName, application }:PageData)
- **[ast-signature-changed]** `packages/llm/llm-deepseek/src/listing-config.ts` — 签名变化: ModelListingConfig
    旧: export interface ModelListingConfig { /** Deadline of one listing request, which also bounds a first-use wait (default five seconds). */ modelsTimeoutMs: Volatile<number> /** * Listing age after which the next access refreshes it in the background; * a failed load retries after the same age (default ten minutes). */ modelsMaxAgeMs: Volatile<number> }
    新: export interface ModelListingConfig { /** Deadline of one listing request, which also bounds a first-use wait (default five seconds). */ modelsTimeoutMs: Volatile<number> /** * Listing refresh interval after first use; failures retry at the same interval (default ten minutes). * Zero refreshes on each access and disables automatic refresh. */ modelsMaxAgeMs: Volatile<number> }
- **[ast-signature-changed]** `packages/llm/llm-deepseek/src/listing-cache.ts` — 签名变化: ListingCacheDependencies
    旧: export interface ListingCacheDependencies { /** The credential the route sends to `url`, or `undefined` when it has none. */ readonly credential: (url: string) => Promise<string | undefined> /** Perform one listing request authenticated with `credential`; `signal` carries the {@link LISTING_TIMEOUT} request deadline. */ readonly load: (url: string, credential: string, signal: AbortSignal) => Promise<ModelListing> /** Wall clock used for listing age. */ readonly now: () => number /** Report a loaded listing. */ readonly info: (message: string) => void /** Report the first failure of a failing streak. */ readonly warn: (message: string) => void }
    新: export interface ListingCacheDependencies { /** Latest route configuration for automatic refresh; `undefined` stops following the listing. */ readonly settings: () => ListingSettings | undefined /** The credential the route sends to `url`, or `undefined` when it has none. */ readonly credential: (url: string) => Promise<string | undefined> /** Perform one listing request authenticated with `credential`; `signal` carries the {@link LISTING_TIMEOUT} request deadline. */ readonly load: (url: string, credential: string, signal: AbortSignal) => Promise<ModelListing> /** Wall clock used for listing age. */ readonly now: () => number /** Report a loaded listing. */ readonly info: (message: string) => void /** Report the first failure of a failing streak. */ readonly warn: (message: string) => void /** Publish a changed view; readers can immediately read `current()`. */ readonly changed: () => void }
- **[ast-signature-changed]** `packages/llm/llm-deepseek/src/listing-cache.ts` — 签名变化: ListingView
    旧: export interface ListingView { /** Whether a credential is available for the listing endpoint. */ readonly authenticated: boolean /** Last successful listing for this credential and endpoint; `undefined` until one succeeds. */ readonly listing: ModelListing | undefined }
    新: export interface ListingView { /** Whether a credential is available for the listing endpoint. */ readonly authenticated: boolean /** Last successful listing for this scope; `undefined` until one succeeds. */ readonly listing: ModelListing | undefined }
- **[ast-signature-changed]** `packages/llm/llm-deepseek/src/listed-catalog.ts` — 签名变化: ListedCatalog
    旧: export interface ListedCatalog { /** Selectable models in listing order, or this build's models when no listing succeeded. */ readonly offered: readonly DeepSeekCatalogModel[] /** Entries request resolution consults: offered models, then supported models the listing does not offer. */ readonly resolution: readonly DeepSeekCatalogModel[] /** Listed models refused before network I/O, by id. */ readonly refusals: ReadonlyMap<string, CatalogRefusal> /** Listing entries hidden because their declarations are unreadable or unusable. */ readonly problems: readonly string[] /** Configuration diagnostics for `modelOverrides`. */ readonly overrideErrors: readonly string[] }
    新: export interface ListedCatalog { /** Selectable models in listing order, or this build's models when no listing succeeded. */ readonly offered: readonly DeepSeekCatalogModel[] /** Entries request resolution consults: offered models, then supported models the listing does not offer. */ readonly resolution: readonly DeepSeekCatalogModel[] /** Listed models refused before network I/O, by id. */ readonly refusals: ReadonlyMap<string, CatalogRefusal> /** Listed badges of offered models, by id. */ readonly badges: ReadonlyMap<string, LlmModelBadge> /** Listing entries hidden because their declarations are unreadable or unusable, and offered models whose badge is dropped. */ readonly problems: readonly string[] /** Configuration diagnostics for `modelOverrides`. */ readonly overrideErrors: readonly string[] }
- **[ast-signature-changed]** `packages/llm/llm-pi-ai/src/config.ts` — 签名变化: PiAiProviderProfile
    旧: export interface PiAiProviderProfile { /** Credential reference (environment-variable name) resolved per request through `ctx.credentials`. */ apiKeyEnv?: string /** Name shown by configuration surfaces; defaults to the route key. */ displayName?: string /** * Wire protocol every model on this route speaks. Omission keeps each * installed catalog model's own protocol, which is why a catalog route needs * no protocol at all; a route the catalog does not ship must name one. */ api?: string /** Endpoint for this route's models; defaults to the installed catalog's endpoint. */ baseURL?: string /** * This route's model catalog. Omission serves the installed catalog for the * route unchanged; an explicit list replaces it, each entry defaulting its * unset fields from the installed model of the same id. */ models?: PiAiModelProfile[] /** * Installed-catalog customizations by model id: each entry reshapes that * one model with the same fields a {@link models} entry takes, while the * rest of the catalog keeps serving untouched. Only meaningful on a catalog * route with no `models` list — `models` already replaces the catalog, so * an override beside it, on a route the catalog does not ship, or naming a * model the catalog does not describe is refused rather than skipped. */ modelOverrides?: Record<string, PiAiModelOverride> /** * pi-ai wire-compatibility switches defaulting every model on this route * whose protocol declares them; each model's own `compat` overrides per * field. What neither sets keeps the installed catalog entry's value, then * pi-ai's own detection. A switch no model on the route could read is * refused rather than left looking applied. */ compat?: PiAiCompatProfile /** * Context capacity for a model this route lists that neither the entry nor * the installed catalog sizes (default 262,144). A guess by construction, so * a deployment whose gateway serves smaller models corrects it here. */ defaultContextWindow?: number /** * Output capability for a model this route lists that neither the entry nor * the installed catalog sizes (default 32,768). This sizes the model; it * never becomes a per-request cap on its own. */ defaultMaxTokens?: number /** * Request modalities for a model this route lists that neither its entry's * {@link PiAiModelProfile.input} nor the installed catalog declares (default * `[text]`). A fallback like the capacities above, not an override: a * catalog model keeps the modalities the catalog records for it, and this * value never narrows one. A gateway serving vision models the catalog does * not describe declares `[text, image]` once here instead of on every entry. * Unlike an entry's list, this one may not be empty — nothing sits below it * to answer instead. */ defaultInput?: PiAiModality[] /** Provider request headers, validated against Fetch when the profile resolves; Harness attribution wins reserved names. */ headers?: Record<string, string> /** Provider-neutral pi-ai reasoning level. */ reasoning?: ModelThinkingLevel /** Token budgets used by reasoning providers that support them. */ thinkingBudgets?: ThinkingBudgets /** Prompt-cache retention preference. */ cacheRetention?: CacheRetention /** Streaming transport preference. */ transport?: Transport /** HTTP/provider SDK timeout in milliseconds. */ timeoutMs?: number /** WebSocket connection timeout in milliseconds. */ websocketConnectTimeoutMs?: number /** Maximum provider idle time while one stream read is outstanding. */ streamIdleTimeoutMs?: number /** * Maximum base64-encoded image payload per request. When a request's * accumulated images exceed it, the oldest images are replaced by text * placeholders until the request fits, so a long session keeps completing * requests instead of being rejected by a request-size cap. */ maxRequestImageBytes?: number /** Total-pixel budget for each deterministic inline request version. */ requestImagePixelBudget?: number /** * Raw encoded-byte target for each deterministic inline request version; * the smallest quality-ladder output is used when no quality fits. */ requestImageMaxBytes?: number /** Provider-owned model-request retry policy; omission uses normal mode with five retries. */ retryPolicy?: RetryPolicyConfig }
    新: export interface PiAiProviderProfile { /** Credential reference (environment-variable name) resolved per request through `ctx.credentials`. */ apiKeyEnv?: string /** Name shown by configuration surfaces; defaults to the route key. */ displayName?: string /** * Wire protocol every model on this route speaks. Omission keeps each * installed catalog model's own protocol, which is why a catalog route needs * no protocol at all; a route the catalog does not ship must name one. */ api?: string /** Endpoint for this route's models; defaults to the installed catalog's endpoint. */ baseURL?: string /** * This route's model catalog. Omission serves the installed catalog for the * route unchanged; an explicit list replaces it, each entry defaulting its * unset fields from the installed model of the same id. */ models?: PiAiModelProfile[] /** * Installed-catalog customizations by model id: each entry reshapes that * one model with the same fields a {@link models} entry takes, while the * rest of the catalog keeps serving untouched. Only meaningful on a catalog * route with no `models` list — `models` already replaces the catalog, so * an override beside it, on a route the catalog does not ship, or naming a * model the catalog does not describe is refused rather than skipped. */ modelOverrides?: Record<string, PiAiModelOverride> /** * pi-ai wire-compatibility switches defaulting every model on this route * whose protocol declares them; each model's own `compat` overrides per * field. What neither sets keeps the installed catalog entry's value, then * pi-ai's own detection. A switch no model on the route could read is * refused rather than left looking applied. */ compat?: PiAiCompatProfile /** * Context capacity for a model this route lists that neither the entry nor * the installed catalog sizes (default 1,000,000). A guess by construction, so * a deployment whose gateway serves smaller models corrects it here. */ defaultContextWindow?: number /** * Output capability for a model this route lists that neither the entry nor * the installed catalog sizes (default 128,000). This sizes the model; it * never becomes a per-request cap on its own. */ defaultMaxTokens?: number /** * Request modalities for a model this route lists that neither its entry's * {@link PiAiModelProfile.input} nor the installed catalog declares (default * `[text]`). A fallback like the capacities above, not an override: a * catalog model keeps the modalities the catalog records for it, and this * value never narrows one. A gateway serving vision models the catalog does * not describe declares `[text, image]` once here instead of on every entry. * Unlike an entry's list, this one may not be empty — nothing sits below it * to answer instead. */ defaultInput?: PiAiModality[] /** Provider request headers, validated against Fetch when the profile resolves; Harness attribution wins reserved names. */ headers?: Record<string, string> /** Provider-neutral pi-ai reasoning level. */ reasoning?: ModelThinkingLevel /** Token budgets used by reasoning providers that support them. */ thinkingBudgets?: ThinkingBudgets /** Prompt-cache retention preference. */ cacheRetention?: CacheRetention /** Streaming transport preference. */ transport?: Transport /** HTTP/provider SDK timeout in milliseconds. */ timeoutMs?: number /** WebSocket connection timeout in milliseconds. */ websocketConnectTimeoutMs?: number /** Maximum provider idle time while one stream read is outstanding. */ streamIdleTimeoutMs?: number /** * Maximum base64-encoded image payload per request. When a request's * accumulated images exceed it, the oldest images are replaced by text * placeholders until the request fits, so a long session keeps completing * requests instead of being rejected by a request-size cap. */ maxRequestImageBytes?: number /** Total-pixel budget for each deterministic inline request version. */ requestImagePixelBudget?: number /** * Raw encoded-byte target for each deterministic inline request version; * the smallest quality-ladder output is used when no quality fits. */ requestImageMaxBytes?: number /** Provider-owned model-request retry policy; omission uses normal mode with five retries. */ retryPolicy?: RetryPolicyConfig }
- **[ast-signature-changed]** `packages/llm/llm/src/types.ts` — 签名变化: LlmModelInfo
    旧: export interface LlmModelInfo { /** Provider route that owns this model entry. */ provider: string /** Model id passed to {@link GenerateOptions.model}. */ id: string /** Human-readable model name for selectors. */ name: string /** Optional user-facing distinction from otherwise similar models. */ description?: string /** Accepted request modalities; absent means unknown, while an explicit omission is negative capability. */ inputModalities?: readonly ModelModality[] }
    新: export interface LlmModelInfo { /** Provider route that owns this model entry. */ provider: string /** Model id passed to {@link GenerateOptions.model}. */ id: string /** Human-readable model name for selectors. */ name: string /** Optional user-facing distinction from otherwise similar models. */ description?: string /** Accepted request modalities; absent means unknown, while an explicit omission is negative capability. */ inputModalities?: readonly ModelModality[] /** * Selector label advertised by catalog discovery; exact-route resolution * omits it, and no model request or Session event carries it. */ badge?: LlmModelBadge }
- **[ast-signature-changed]** `packages/test-support/llm-replay` — 签名变化: texts
    旧: var
    新: var:unknown[]
- **[ast-signature-changed]** `packages/plan/plan-mode/src/types.ts` — 签名变化: PlanUnitState
    旧: export interface PlanUnitState { /** Logged plan mode. */ active: boolean /** The selection's target mode; null when no selection is outstanding. */ wanted: boolean | null /** The latest plan command awaiting its paired settlement. */ running: { commandId: CommandId; wanted: boolean } | null /** Active state recorded by the latest `request/header`, or null. */ activeAtLastHeader: boolean | null }
    新: export interface PlanUnitState { /** Logged plan mode. */ active: boolean /** The selection's target mode; null when no selection is outstanding. */ wanted: boolean | null /** The latest plan command awaiting its paired settlement. */ running: { commandId: CommandId; wanted: boolean } | null /** Active state recorded by the latest `request/header`, or null. */ activeAtLastHeader: boolean | null /** Whether a logged `plan/mode` has ever activated plan mode in this Session. */ entered: boolean }
- **[ast-signature-changed]** `packages/ptc-runtime/ptc-runtime-node/src/launch.ts` — 签名变化: scriptBootstrapArgs
    旧: function(fs:Pick<FileSystem, 'processPathFromHostPath'>,bootstrapPath:string | undefined,maxMessageBytes:number,persistent:boolean)
    新: function(fs:Pick<FileSystem, 'processPathFromHostPath'>,bootstrapPath:string | undefined,maxMessageBytes:number)
- **[ast-signature-changed]** `packages/ptc-runtime/ptc-runtime/src/types.ts` — 签名变化: PtcRunRequest
    旧: export interface PtcRunRequest { /** * The program source, in the runtime's {@link ../index.ts | language}. It * follows the provider's programFormat: an async function body supports * top-level `await` and `return`; a REPL supports top-level declarations, * `await`, and a final expression. The completion value becomes * {@link PtcRunResult.value}. */ program: string /** * Object-identity owner for optional in-memory state. Omission requests a fresh * environment. Consumers must await runtime.release(owner) when the owner ends. * Stateless providers ignore this field; retained state is never durable. */ stateOwner?: object /** Host functions exposed to the program, one global object per namespace. */ bindings: PtcBindingNamespace[] /** Working directory in the mounted filesystem and subprocess execution world. */ cwd?: string /** * Elapsed execution budget in milliseconds. Omission uses provider defaults; * null requests no deadline. Providers validate and cap numeric budgets or reject unsupported choices. */ timeoutMs?: number | null /** Resolved authority for this execution. Providers without confinement reject an explicit policy. */ sandboxPolicy?: SandboxExecutionPolicy /** * Abort the run: the runtime stops the program (hard, even mid-loop) and * resolves with a {@link PtcRunFailure} of kind `'abort'`. In-flight * binding calls are the CALLER's to settle — the runtime only stops asking. */ signal?: AbortSignal }
    新: export interface PtcRunRequest { /** * The program source, in the runtime's {@link ../index.ts | language}. It * follows the provider's programFormat: an async function body supports * top-level `await` and `return`; REPL and Script programs support top-level * declarations, `await`, and a final expression, but not top-level `return`. * The Script provider lowers top-level await; its executionInstructions and * documentation define retained-binding semantics. The completion value * becomes {@link PtcRunResult.value}. */ program: string /** * Object-identity owner for optional in-memory state. Omission requests a fresh * environment. Consumers must await runtime.release(owner) when the owner ends. * Stateless providers ignore this field; retained state is never durable. */ stateOwner?: object /** Host functions exposed to the program, one global object per namespace. */ bindings: PtcBindingNamespace[] /** Working directory in the mounted filesystem and subprocess execution world. */ cwd?: string /** * Elapsed execution budget in milliseconds. Omission uses provider defaults; * null requests no deadline. Providers validate and cap numeric budgets or reject unsupported choices. */ timeoutMs?: number | null /** Resolved authority for this execution. Providers without confinement reject an explicit policy. */ sandboxPolicy?: SandboxExecutionPolicy /** * Abort the run: the runtime stops the program (hard, even mid-loop) and * resolves with a {@link PtcRunFailure} of kind `'abort'`. In-flight * binding calls are the CALLER's to settle — the runtime only stops asking. */ signal?: AbortSignal }
- **[ast-signature-changed]** `packages/ptc-runtime/ptc-runtime/src/types.ts` — 签名变化: PtcRunResult
    旧: export interface PtcRunResult { /** Applied file policy and observed denial, when the provider enforces file policy. */ sandbox?: PtcRunSandbox /** * The program's completion value (a return or final REPL expression), when it ran to * completion and the value crossed the runtime's lossless-JSON boundary. * Invalid or over-limit completions fail the run instead of substituting a * rendered string; a failed or value-less run leaves this absent. */ value?: PtcJsonValue /** * Captured text. Each source channel preserves emission order; interleaving * across independent channels is backend-dependent. Bounded only as part of * the outer result. */ logs: string[] /** Present iff the run failed; see {@link PtcRunFailure} for the taxonomy. */ error?: PtcRunFailure }
    新: export interface PtcRunResult { /** Applied file policy and observed denial, when the provider enforces file policy. */ sandbox?: PtcRunSandbox /** * The program's completion value (a return or final REPL/Script expression), when it ran to * completion and the value crossed the runtime's lossless-JSON boundary. * Invalid or over-limit completions fail the run instead of substituting a * rendered string; a failed or value-less run leaves this absent. */ value?: PtcJsonValue /** * Captured text. Each source channel preserves emission order; interleaving * across independent channels is backend-dependent. Bounded only as part of * the outer result. */ logs: string[] /** Present iff the run failed; see {@link PtcRunFailure} for the taxonomy. */ error?: PtcRunFailure }
- **[ast-signature-changed]** `packages/util/time/src/instant.ts` — 签名变化: resolveLocalInstant
    旧: function(parts:CalendarParts,timeZone:string)
    新: function(time:LocalCalendarTime | Temporal.PlainDateTime,timeZone:string)
- ★ **[ast-signature-changed]** `packages/sdk/client/src/types.ts` — 签名变化: HarnessClientOptions
    旧: export interface HarnessClientOptions { /** Absolute or caller-relative dsh CLI module; omitted resolves this package's same-version dependency. */ dshBin?: string /** Named profile serving the SDK protocol (default `sdk`). */ profile?: string /** Ordered per-launch profile patches; relative paths resolve before spawn. */ patches?: string[] /** Explicit Harness home for this child; relative paths resolve before spawn. */ dshHome?: string /** Working directory for the dsh process itself. */ processCwd?: string /** * The complete child environment, read when {@link HarnessClient.start} * spawns. `undefined` reads the parent env at that time; passing an object * reads that object at spawn and replaces the parent environment entirely, so callers own * credential policy (see `scrubbedParentEnv` in `@deepseek-ai/dsh-subprocess` * for the shared scrub-then-merge base). */ env?: NodeJS.ProcessEnv /** Bound (ms) on the initial profile handshake (default 10000). */ initializeTimeoutMs?: number /** Per-request timeout (ms); `undefined` waits indefinitely (a turn can legitimately run long). */ requestTimeoutMs?: number /** Bound (ms) on the protocol `shutdown` exchange inside `close()` (default 1000). */ shutdownTimeoutMs?: number /** Grace (ms) for the runtime's stdin-EOF quiesce during `close()` (default 6000). */ disposeEofGraceMs?: number /** Termination confirmation window (ms) after SIGTERM/SIGKILL during `close()` (default 3000). */ disposeGraceMs?: number }
    新: export interface HarnessClientOptions { /** Answer runtime questions without prescribing a UI; observe the signal to release host work on cancellation. */ onUserQuestion?: (request: SdkUserQuestionRequest, context: { signal: AbortSignal }) => Promise<SdkUserQuestionAnswer> /** Absolute or caller-relative dsh CLI module; omitted resolves this package's same-version dependency. */ dshBin?: string /** Named profile serving the SDK protocol (default `sdk`). */ profile?: string /** Ordered per-launch profile patches; relative paths resolve before spawn. */ patches?: string[] /** Explicit Harness home for this child; relative paths resolve before spawn. */ dshHome?: string /** Working directory for the dsh process itself. */ processCwd?: string /** * The complete child environment, read when {@link HarnessClient.start} * spawns. `undefined` reads the parent env at that time; passing an object * reads that object at spawn and replaces the parent environment entirely, so callers own * credential policy (see `scrubbedParentEnv` in `@deepseek-ai/dsh-subprocess` * for the shared scrub-then-merge base). */ env?: NodeJS.ProcessEnv /** Bound (ms) on the initial profile handshake (default 10000). */ initializeTimeoutMs?: number /** Per-request timeout (ms); `undefined` waits indefinitely (a turn can legitimately run long). */ requestTimeoutMs?: number /** Bound (ms) on the protocol `shutdown` exchange inside `close()` (default 1000). */ shutdownTimeoutMs?: number /** Grace (ms) for the runtime's stdin-EOF quiesce during `close()` (default 6000). */ disposeEofGraceMs?: number /** Termination confirmation window (ms) after SIGTERM/SIGKILL during `close()` (default 3000). */ disposeGraceMs?: number }
- ★ **[ast-signature-changed]** `packages/sdk/client/src/types.ts` — 签名变化: DeepSeekHarnessOptions
    旧: export interface DeepSeekHarnessOptions extends HarnessClientOptions { /** Workspace cwd recorded on every SDK-created session (default: the process cwd, else `process.cwd()`). */ cwd?: string /** Provider route for SDK-created agents (default `deepseek-official`). */ provider?: string /** Model for SDK-created agents (default `deepseek-v4-flash`). */ model?: string /** Adapter-owned reasoning effort for the selected provider/model route. */ reasoningEffort?: ReasoningEffortId /** Maximum output tokens for each conversation-model request. */ maxTokens?: number }
    新: export interface DeepSeekHarnessOptions extends HarnessClientOptions { /** Workspace cwd recorded on every SDK-created session (default: the process cwd, else `process.cwd()`). */ cwd?: string /** Provider route for SDK-created agents (default `deepseek-official`). */ provider?: string /** Model for SDK-created agents (default `deepseek-v4-flash`). */ model?: string /** Adapter-owned reasoning effort for the selected provider/model route. */ reasoningEffort?: ReasoningEffortId /** Maximum output tokens for each conversation-model request. */ maxTokens?: number /** Enable server approval requests; install client.onRequest() after client.start() and before harness.start(). */ approvalRequests?: boolean }
- ★ **[ast-signature-changed]** `packages/sdk/protocol/src/transport.ts` — 签名变化: JsonRpcTransportPeer
    旧: export interface JsonRpcTransportPeer { /** * Send a request and await its response. * @param method - the JSON-RPC method name. * @param params - the request parameters object. * @returns the result; rejects with {@link JsonRpcResponseError} on an error * response, and with a plain `Error` on a write failure or closure. */ request(method: string, params: object): Promise<unknown> /** * Send a notification; omitted params produce no `params` member. * @param method - the JSON-RPC method name. * @param params - the optional notification parameters object. */ notify(method: string, params?: object): void }
    新: export interface JsonRpcTransportPeer { /** * Send a request and await its response. * @param method - the JSON-RPC method name. * @param params - the request parameters object. * @param signal - optional cancellation; removes the pending waiter, rejects on abort, and ignores late responses. * @returns the result; rejects with {@link JsonRpcResponseError} on an error * response, and with a plain `Error` on a write failure or closure. */ request(method: string, params: object, signal?: AbortSignal): Promise<unknown> /** * Send a notification; omitted params produce no `params` member. * @param method - the JSON-RPC method name. * @param params - the optional notification parameters object. */ notify(method: string, params?: object): void }
- ★ **[ast-signature-changed]** `packages/sdk/protocol/src/types.ts` — 签名变化: InitializeParams
    旧: export interface InitializeParams { /** Working directory recorded on every SDK-created session's header. */ cwd: string /** Provider route every SDK-created agent runs on. */ provider: string /** Model name every SDK-created agent runs on (the server may mount a fallback adapter; see `HarnessSdkJsonRpcServer.initialize`). */ model: string /** Optional adapter-owned reasoning effort for the selected provider/model route. */ reasoningEffort?: ReasoningEffortId /** Optional positive output-token cap inherited by SDK-created agents and their in-process descendants. */ maxTokens?: number }
    新: export interface InitializeParams { /** Working directory recorded on every SDK-created session's header. */ cwd: string /** Enable server-to-client approval/request calls; omission leaves existing answerers in control. */ approvalRequests?: boolean /** Provider route every SDK-created agent runs on. */ provider: string /** Model name every SDK-created agent runs on (the server may mount a fallback adapter; see `HarnessSdkJsonRpcServer.initialize`). */ model: string /** Optional adapter-owned reasoning effort for the selected provider/model route. */ reasoningEffort?: ReasoningEffortId /** Optional positive output-token cap inherited by SDK-created agents and their in-process descendants. */ maxTokens?: number /** Host-provided capabilities; omission retains native in-process answerers. */ capabilities?: { userQuestions?: boolean } }
- ★ **[ast-signature-changed]** `packages/sdk/protocol/src/types.ts` — 签名变化: HarnessSdkNotificationMap
    旧: export interface HarnessSdkNotificationMap { 'session.event': SessionEventNotification 'session.status': SessionStatusNotification 'subagent.started': SubagentStartedNotification 'subagent.finished': SubagentFinishedNotification }
    新: export interface HarnessSdkNotificationMap { 'user-question.cancelled': SdkUserQuestionCancelled 'session.event': SessionEventNotification 'session.status': SessionStatusNotification 'subagent.started': SubagentStartedNotification 'subagent.finished': SubagentFinishedNotification }
- **[ast-signature-changed]** `packages/sandbox/sandbox/src/roots.ts` — 签名变化: physical
    旧: var
    新: var:string
- **[ast-signature-changed]** `packages/storage/storage-domain/src/spec.ts` — 签名变化: DomainSpec
    旧: export interface DomainSpec { /** Domain name; must match `UNIT_NAME_RE` (doubles as the backend unit name). */ readonly name: string /** Current domain format version; reads enforce it according to the selected layout. */ readonly version: number /** * Medium layout for the backend unit: `single` (the default) stores the * whole unit as one document; `per-record` stores each record as its own * document, for units whose records are large, sparse, or individually * disposable — the projection cache — and scopes version checks per record * (an unaccepted record document is discarded, never migrated). */ readonly layout?: 'single' | 'per-record' /** * Older domain versions whose stored records the current record schemas * also accept (the declaring owner vouches for that, typically by * declaring the fields older records lack as optional). `per-record` backends * read documents stamped with a listed version instead of discarding them, * and accept a legacy whole-unit file so stamped for the one-time * bootstrap; writes always stamp {@link version}. */ readonly compatibleVersions?: readonly number[] /** * What `open` does with a stored table record that fails its zod schema. * Absent (the default), the whole open rejects with `invalid-record` — * right for authoritative data. `'backup-and-skip'` is for domains whose * records are disposable derived data: the backend moves the record's * document aside (`KvUnit.backupRecord`), the failure is logged with * its cause, and the open continues with the record absent. A backend * without `backupRecord` (no per-record document to move) falls back * to the rejecting default. The global slot always rejects. */ readonly invalidRecords?: 'backup-and-skip' /** Optional global singleton slot. */ readonly global?: DomainGlobalSpec<unknown> /** Table declarations keyed by table name; each name must match `UNIT_NAME_RE`. */ readonly tables: Record<string, DomainTableSpec> }
    新: export interface DomainSpec { /** Domain name; must match `UNIT_NAME_RE` (doubles as the backend unit name). */ readonly name: string /** Current domain format version; reads enforce it according to the selected layout. */ readonly version: number /** * Document layout for the backend unit: `single` (the default) stores the * whole unit as one document; `per-record` stores each record as its own * document, for units whose records are large, sparse, or individually * disposable — the projection cache — with per-record version checks. * Row stores retain unit-wide versioning for either layout request. */ readonly layout?: 'single' | 'per-record' /** * Older domain versions whose stored records the current record schemas * also accept (the declaring owner vouches for that, typically by * declaring the fields older records lack as optional). Ordinary reads admit * listed versions without restamping saved data; writes stamp {@link version} * while leaving untouched records as saved. Current schemas must therefore * accept mixed generations even under the current unit stamp. */ readonly compatibleVersions?: readonly number[] /** * What `open` does with a stored table record that fails its zod schema. * Absent (the default), the whole open rejects with `invalid-record` — * right for authoritative data. `'backup-and-skip'` is for domains whose * records are disposable derived data: the backend moves the record's * document aside (`KvUnit.backupRecord`), the failure is logged with * its cause, and the open continues with the record absent. A backend * without `backupRecord` (no per-record document to move) falls back * to the rejecting default. The global slot always rejects. */ readonly invalidRecords?: 'backup-and-skip' /** Optional global singleton slot. */ readonly global?: DomainGlobalSpec<unknown> /** Table declarations keyed by table name; each name must match `UNIT_NAME_RE`. */ readonly tables: Record<string, DomainTableSpec> }
- **[ast-signature-changed]** `packages/client/ui-dockkit/src/components/FloatLayer.tsx` — 签名变化: layout
    旧: var:string
    新: var
- **[ast-signature-changed]** `packages/storage/storage-domain/src/domain.ts` — 签名变化: KvTable
    旧: export interface KvTable<K extends string, V> { /** * Read one record, synchronously from memory. * @param key - Record key. * @returns the record, or `undefined` when absent. */ get(key: K): V | undefined /** * Snapshot iterator over `[key, record]` pairs. A snapshot, not a live * view: iteration stays stable while queued writes land. * @returns the pair iterator. */ entries(): IterableIterator<[K, V]> /** * Snapshot iterator over keys. * @returns the key iterator. */ keys(): IterableIterator<K> /** Current record count. */ readonly size: number /** * Insert or overwrite one record durably. * @param key - Record key. * @param value - The full new record (no partial merge). * @returns resolution after durability and event emission. */ put(key: K, value: V): Promise<void> /** * Delete one record durably. * @param key - Record key. * @returns `true` when the record existed, `false` when it was already * absent (no write and no event in that case). */ delete(key: K): Promise<boolean> /** * Atomic read-modify-write on the domain's write chain: `fn` sees the * value current at its queue slot, so concurrent updates never interleave. * @param key - Record key; a missing key rejects with `missing-key`. * @param fn - Synchronous pure transform from current to next record. * @returns the stored next record. */ update(key: K, fn: (current: V) => V): Promise<V> }
    新: export interface KvTable<K extends string, V> { /** * Read one record, synchronously from memory. * @param key - Record key. * @returns the record, or `undefined` when absent. */ get(key: K): V | undefined /** * Snapshot iterator over `[key, record]` pairs. A snapshot, not a live * view: iteration stays stable while queued writes land. * @returns the pair iterator. */ entries(): IterableIterator<[K, V]> /** * Snapshot iterator over keys. * @returns the key iterator. */ keys(): IterableIterator<K> /** Current record count. */ readonly size: number /** * Insert or overwrite one record durably. * @param key - Record key. * @param value - The full new record (no partial merge). * @returns resolution after durability and event emission. */ put(key: K, value: V): Promise<void> /** * Delete one record durably. * @param key - Record key. * @returns `true` when the record existed, `false` when it was already * absent (no write and no event in that case). */ delete(key: K): Promise<boolean> /** * Delete several records durably in one write slot. * * The batch is one job on the domain's write chain: it runs at its slot, not * at call time, so an earlier queued write of the same domain is visible to * it and no other write interleaves. Missing keys are ignored. The in-memory * records reach the committed state before any `domain/changed` listener * runs. A backend failure normally rejects with the batch unapplied, leaving * every record in place. A backend that cannot establish or restore the * batch's state rejects with `unknown-state` and quarantines the domain: * synchronous reads and every later write reject with that error, while * `close()` still works. * @param keys - Record keys; duplicates are harmless. * @returns the number of keys that existed and were removed. */ deleteMany(keys: readonly K[]): Promise<number> /** * Atomic read-modify-write on the domain's write chain: `fn` sees the * value current at its queue slot, so concurrent updates never interleave. * @param key - Record key; a missing key rejects with `missing-key`. * @param fn - Synchronous pure transform from current to next record. * @returns the stored next record. */ update(key: K, fn: (current: V) => V): Promise<V> }
- **[ast-signature-changed]** `packages/storage/storage-domain/src/domain.ts` — 签名变化: TableHost
    旧: interface TableHost { readonly domainName: string readonly unit: KvUnit /** Queue one job on the domain's single write chain. */ enqueue<T>(job: () => Promise<T>): Promise<T> /** Throw `closed` once the domain has fully closed (reads stay valid while draining). */ assertReadable(): void /** Emit `domain/changed` for one durably landed write. */ emitChanged(change: DomainChanged): void }
    新: interface TableHost { readonly domainName: string readonly unit: KvUnit /** Queue one job on the domain's single write chain. */ enqueue<T>(job: () => Promise<T>): Promise<T> /** Throw `closed` after teardown, or the recorded `unknown-state` while quarantined. */ assertReadable(): void /** Emit `domain/changed` for one durably landed write. */ emitChanged(change: DomainChanged): void }
- **[ast-signature-changed]** `packages/storage/storage/src/error.ts` — 签名变化: StorageErrorCode
    旧: export type StorageErrorCode = | 'backend-not-found' | 'form-not-mounted' | 'duplicate-backend' | 'duplicate-mount' | 'version-mismatch' | 'malformed-medium' | 'closed'
    新: export type StorageErrorCode = | 'backend-not-found' | 'form-not-mounted' | 'duplicate-backend' | 'duplicate-mount' | 'version-mismatch' | 'malformed-medium' | 'unknown-state' | 'closed'
- **[ast-signature-changed]** `packages/storage/storage/src/backend.ts` — 签名变化: KvFacet
    旧: export interface KvFacet { /** * Open one unit, creating it when the medium holds no trace of it yet * (materialization may defer to the first write, but {@link KvUnit.loadAll} * must immediately serve the empty shape). A version already stamped on the * medium that differs from `descriptor.version` rejects with * `version-mismatch`; a medium that cannot be parsed as this unit rejects * with `malformed-medium`. Opening the same unit name twice without closing * is a caller bug and rejects. * @param descriptor - Static identity and shape of the unit to open. * @returns the opened unit. */ open(descriptor: KvUnitDescriptor): Promise<KvUnit> }
    新: export interface KvFacet { /** * Open one unit, creating it when the medium holds no trace of it yet * (materialization may defer to the first write, but {@link KvUnit.loadAll} * must immediately serve the empty shape). Backends with a unit-wide stamp * reject an existing version outside `descriptor.version` and * `compatibleVersions` with `version-mismatch`; document-based per-record * layouts read an unaccepted document as absent. A medium that cannot be * parsed as this unit rejects with `malformed-medium`. Opening the same unit name twice without closing * is a caller bug and rejects. * @param descriptor - Static identity and shape of the unit to open. * @returns the opened unit. */ open(descriptor: KvUnitDescriptor): Promise<KvUnit> }
- **[ast-signature-changed]** `packages/storage/storage/src/backend.ts` — 签名变化: KvUnitDescriptor
    旧: export interface KvUnitDescriptor { /** Unit name; must match {@link UNIT_NAME_RE}. Also the file-name / SQL-identifier segment. */ readonly name: string /** Unit format version; a non-negative integer stamped on the medium at first materialization. */ readonly version: number /** Table names; each must match {@link UNIT_NAME_RE}. */ readonly tables: readonly string[] /** Whether this unit carries the global singleton slot. */ readonly hasGlobal: boolean /** * Medium layout. `single` (the default) keeps the whole unit in one * document; `per-record` keeps each record in its own document, so a unit * whose records are large or sparse never rewrites the rest on one write, * and an unaccepted version stamp discards only that record instead of * rejecting the whole unit. Backends that only serve one layout accept the * other's units as foreign documents. */ readonly layout?: 'single' | 'per-record' /** * Older unit versions whose stored records are also readable under the * declaring owner's current record schemas (the owner vouches for that — * typically by declaring the fields old records lack as optional). Reads of * a `per-record` unit accept documents stamped with any listed version, and * the legacy whole-unit bootstrap accepts a legacy file stamped with one; * writes always stamp {@link version}. `single`-layout reads stay * exact-version. */ readonly compatibleVersions?: readonly number[] }
    新: export interface KvUnitDescriptor { /** Unit name; must match {@link UNIT_NAME_RE}. Also the file-name / SQL-identifier segment. */ readonly name: string /** Current unit format version; a non-negative integer stamped on initial materialization and subsequent mutations. */ readonly version: number /** Table names; each must match {@link UNIT_NAME_RE}. */ readonly tables: readonly string[] /** Whether this unit carries the global singleton slot. */ readonly hasGlobal: boolean /** * Document layout. `single` (the default) keeps the whole unit in one * document; `per-record` keeps each record in its own document, so a unit * whose records are large or sparse never rewrites the rest on one write, * and an unaccepted document reads as absent instead of * rejecting the whole unit. Row stores retain unit-wide versioning for * either layout request. */ readonly layout?: 'single' | 'per-record' /** * Older unit versions whose stored records are also readable under the * declaring owner's current schemas (the owner vouches for that — * typically by declaring the fields old records lack as optional). Both * layouts accept listed versions without restamping ordinary reads. Whole-unit * mutations atomically stamp {@link version} with their data; per-record * replacements stamp their document. Untouched records keep their saved * values, so the current schemas must accept mixed generations. * The legacy per-record bootstrap also accepts listed versions. */ readonly compatibleVersions?: readonly number[] }
- **[ast-signature-changed]** `packages/storage/storage/src/backend.ts` — 签名变化: KvUnit
    旧: export interface KvUnit { /** * Read the full current snapshot. * @returns every table's records keyed by table name, plus the global * singleton (`null` when never written or not declared). */ loadAll(): Promise<{ tables: Record<string, Record<string, unknown>>; global: unknown }> /** * Upsert one record durably. Overwrite semantics: an existing key is replaced. * @param table - Declared table name. * @param key - Record key. In the `per-record` layout a key becomes a path * segment and must match `[a-zA-Z0-9_-]+` (an unsafe key rejects); in the * `single` layout keys stay opaque. * @param value - Opaque JSON-serializable record. * @returns resolution after durability. */ putRecord(table: string, key: string, value: unknown): Promise<void> /** * Delete one record durably. Idempotent: a missing key is a no-op. * @param table - Declared table name. * @param key - Record key. * @returns resolution after durability. */ deleteRecord(table: string, key: string): Promise<void> /** * Move one record's stored document out of the unit's readable set, * preserving its bytes for inspection instead of deleting them. Backends * whose medium has no per-record document to move (the `single` layout, a * row store) omit this member, and the caller falls back to its * reject-loud path. Absent after the move: a later {@link loadAll} reads * the key as missing and a later {@link putRecord} recreates it fresh. * @param table - Declared table name. * @param key - Record key. * @returns the medium location the document was moved to (diagnostics). */ backupRecord?(table: string, key: string): Promise<string> /** * Write the global singleton durably. Only valid when the descriptor * declared `hasGlobal`. * @param value - Opaque JSON-serializable value. * @returns resolution after durability. */ setGlobal(value: unknown): Promise<void> /** * Drain this unit's in-flight writes and release it. Idempotent. * @returns resolution after the unit is released. */ close(): Promise<void> }
    新: export interface KvUnit { /** * Read the full current snapshot. * @returns every table's records keyed by table name, plus the global * singleton (`null` when never written or not declared). */ loadAll(): Promise<{ tables: Record<string, Record<string, unknown>>; global: unknown }> /** * Upsert one record durably. Overwrite semantics: an existing key is replaced. * @param table - Declared table name. * @param key - Record key. In the `per-record` layout a key becomes a path * segment and must match `[a-zA-Z0-9_-]+` (an unsafe key rejects); in the * `single` layout keys stay opaque. * @param value - Opaque JSON-serializable record. * @returns resolution after durability. */ putRecord(table: string, key: string, value: unknown): Promise<void> /** * Delete one record durably. Idempotent: a missing key is a no-op and does * not advance the version stamp. * @param table - Declared table name. * @param key - Record key. * @returns resolution after durability. */ deleteRecord(table: string, key: string): Promise<void> /** * Delete several records durably as one batch. Idempotent: missing keys and * empty batches are no-ops and do not advance the version stamp. Resolves * once every listed record is absent from the readable * state and the backend accepted the batch. A rejection normally leaves the * batch unapplied, so no listed record was removed. A backend that cannot * establish or restore the batch's state rejects with `unknown-state` * instead: the readable or durable state is then unknown, every later operation on that * unit rejects with the same error until {@link close} releases it, and * calls after close reject `closed`. On the `single` layout a * directory-fsync failure can arrive after the atomic replacement: the new * file may already hold the batch while the caller sees a rejection. Close * the backend and its domains, then reopen to inspect saved state before * retrying. Per-record batches are not crash-atomic before resolution. * A backend whose medium can apply a whole batch * in one operation (the `single` document, a row store) must do that instead * of repeating {@link deleteRecord} per key. * @param table - Declared table name. * @param keys - Record keys; duplicates are harmless. In the `per-record` * layout every key becomes a path segment and must match `[a-zA-Z0-9_-]+` * (an unsafe key rejects before any deletion); in the `single` layout keys * stay opaque. * @returns resolution after the backend accepted the batch. */ deleteRecords(table: string, keys: readonly string[]): Promise<void> /** * Move one record's stored document out of the unit's readable set, * preserving its bytes for inspection instead of deleting them. Backends * whose medium has no per-record document to move (the `single` layout, a * row store) omit this member, and the caller falls back to its * reject-loud path. Absent after the move: a later {@link loadAll} reads * the key as missing and a later {@link putRecord} recreates it fresh. * @param table - Declared table name. * @param key - Record key. * @returns the medium location the document was moved to (diagnostics). */ backupRecord?(table: string, key: string): Promise<string> /** * Write the global singleton durably. Only valid when the descriptor * declared `hasGlobal`. * @param value - Opaque JSON-serializable value. * @returns resolution after durability. */ setGlobal(value: unknown): Promise<void> /** * Drain this unit's in-flight writes and release it. Idempotent. * @returns resolution after the unit is released. */ close(): Promise<void> }
- **[ast-signature-changed]** `packages/host/plugin-inventory` — 签名变化: diagnostic
    旧: var
    新: var:string | undefined
- **[ast-signature-changed]** `packages/subagent/subagent/src/continuation-messages.ts` — 签名变化: createSettlementMessage
    旧: function(childId:SessionId,terminal:SubagentResult,continuable:any)
    新: function(childId:SessionId,terminal:SubagentResult,continuable:any,omitClosingText:any)
- **[ast-signature-changed]** `packages/test-support/client-runtime/src/access.ts` — 签名变化: allowAllAccessPlugin
    旧: var
    新: var:StaticAccessPlugin
- **[ast-signature-changed]** `packages/session-query/session-log-export/src/markdown.ts` — 签名变化: assistantText
    旧: function(event:Extract<SessionEvent, { type: 'assistant/message' }>)
    新: function(message:AssistantMessage)
- **[ast-signature-changed]** `packages/experimental/liveshare-protocol/src/viewer-carrier.ts` — 签名变化: openStream
    旧: function(initial:readonly unknown[])
    新: var
- **[ast-signature-changed]** `packages/typert/protocol/src/types.ts` — 签名变化: TypertResourceDeclaration
    旧: export interface TypertResourceDeclaration { /** Top-level or first-object wire field holding one identity of the kind. */ readonly field: string }
    新: export type TypertResourceDeclaration = | { readonly field: string readonly resolve?: never } | { readonly field?: never /** * Called once before lookups resolve. It takes no receiver, so it reads only its * input. Returns one identity, or undefined when absent; throws or returns an * array to reject the call. */ resolve(this: void, input: TypertResourceResolveInput): string | undefined }
- **[ast-signature-changed]** `packages/typert/protocol/src/types.ts` — 签名变化: TypertResourceEntry
    旧: export interface TypertResourceEntry extends TypertResourceDeclaration { /** Registered resource kind. */ readonly kind: string }
    新: export type TypertResourceEntry = TypertResourceDeclaration & { /** Resource kind contributed by its owning domain. */ readonly kind: string }
- **[ast-signature-changed]** `packages/typert/protocol/src/types.ts` — 签名变化: TypertResourceRegistry
    旧: export interface TypertResourceRegistry { /** * Register one kind's default wire field for the calling fiber. Only the * domain that owns the kind registers it. * @param kind - merge-declared resource kind. * @param declaration - the kind's default wire field. * @returns disposer withdrawing the exact registration. * @throws Error when the kind is already registered or is `global`, the built-in resource kind. */ register(kind: TypertResourceKind, declaration: TypertResourceDeclaration): TypertDisposer /** * Look up one kind's declaration. * @param kind - resource kind. * @returns the live declaration, or `undefined` when unregistered. */ get(kind: string): TypertResourceDeclaration | undefined /** @returns a registration-order snapshot of registered kinds with their fields. */ entries(): readonly TypertResourceEntry[] /** * Observe later resource-kind changes. * @param listener - synchronous contained observer. * @returns disposer for this subscription. */ subscribe(listener: TypertRegistryListener): TypertDisposer }
    新: export interface TypertResourceRegistry { /** * Register one kind's default identity extraction for the calling fiber. Only the * domain that owns the kind registers it. * @param kind - merge-declared resource kind. * @param declaration - either a default wire field or a resolver, never both. * @returns disposer withdrawing the exact registration. * @throws Error when the kind is already registered or is `global`, the built-in resource kind. */ register(kind: TypertResourceKind, declaration: TypertResourceDeclaration): TypertDisposer /** * Look up one kind's declaration. * @param kind - resource kind. * @returns the live declaration, or `undefined` when unregistered. */ get(kind: string): TypertResourceDeclaration | undefined /** @returns a registration-order snapshot of registered kinds with their extraction declarations. */ entries(): readonly TypertResourceEntry[] /** * Observe later resource-kind changes. * @param listener - synchronous contained observer. * @returns disposer for this subscription. */ subscribe(listener: TypertRegistryListener): TypertDisposer }
- **[ast-signature-changed]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 签名变化: overlay
    旧: var:Record<string, string | undefined>
    新: var
- **[ast-signature-changed]** `packages/util/package-manifest/src/types.ts` — 签名变化: DshPackageManifest
    旧: export interface DshPackageManifest { /** Published npm package name. */ name: string /** Published npm package version. */ version: string /** Package summary for discovery and display. */ description?: string /** SVG, PNG, JPEG, or WebP file relative to this manifest's directory, at most 256 KiB and contained there after realpath resolution. */ icon?: string /** Prevent npm publication, for example for local profile projects. */ private?: boolean /** Packages installed alongside this package. */ dependencies?: Record<string, string> /** Compatible versions of packages supplied by the consuming project. */ peerDependencies?: Record<string, string> /** Runtime requirements; DSH compatibility is declarative until a reader enforces it. */ engines?: DshEnginesManifest /** DSH-specific author declarations. */ dsh?: DshManifest }
    新: export interface DshPackageManifest { /** Published npm package name. */ name: string /** Published npm package version. */ version: string /** Package summary for discovery and display. */ description?: string /** SVG, PNG, JPEG, or WebP file relative to this manifest's directory, at most 256 KiB and contained there after realpath resolution. */ icon?: string /** Prevent npm publication, for example for local profile projects. */ private?: boolean /** Packages installed alongside this package. */ dependencies?: Record<string, string> /** Packages that may be absent when installation or platform checks skip them. */ optionalDependencies?: Record<string, string> /** Compatible versions of packages supplied by the consuming project. */ peerDependencies?: Record<string, string> /** Runtime requirements; DSH compatibility is declarative until a reader enforces it. */ engines?: DshEnginesManifest /** DSH-specific author declarations. */ dsh?: DshManifest }
- **[ast-signature-changed]** `packages/util/package-manifest/src/types.ts` — 签名变化: DshBundleManifest
    旧: export interface DshBundleManifest { /** One patch file path, or an ordered list applied in sequence, each relative to the declaring package root. */ patch: string | string[] }
    新: export interface DshBundleManifest { /** Supported Node Host platform names; omission allows every operating system. */ platforms?: string[] /** One patch file path, or an ordered list applied in sequence, each relative to the declaring package root. */ patch: string | string[] /** Show the bundle in GUI lists before the profile enables or installs it; omission means true. */ listedByDefault?: boolean }
- **[ast-signature-changed]** `packages/web/tool-web/src/search.ts` — 签名变化: applyWebSearchTool
    旧: function(ctx:Context,maxResults:number,maxQueries:number,timeoutMs:number,fetchEnabled:boolean)
    新: function(ctx:Context,maxResults:number,maxQueries:number,summaryMaxChars:number,timeoutMs:number,fetchEnabled:boolean)
- **[ast-signature-changed]** `packages/web/web-fetch-http/src/provider.ts` — 签名变化: HttpFetchProvider
    旧: class(limits:HttpFetchLimits,resolveAddresses:HttpFetchResolver)
    新: class(limits:HttpFetchLimits)
- **[ast-signature-changed]** `packages/web/web/src/types.ts` — 签名变化: WebSearchSource
    旧: export interface WebSearchSource { readonly url: string readonly title?: string readonly snippet?: string /** Publication/crawl timestamp as a provider-supplied ISO-8601 string. */ readonly publishedAt?: string }
    新: export interface WebSearchSource { readonly url: string readonly title?: string /** Short excerpt suited to display. */ readonly snippet?: string /** Longer excerpt suited to model reading; consumers bound its length. */ readonly summary?: string /** Publication/crawl timestamp as a provider-supplied ISO-8601 string. */ readonly publishedAt?: string }
- **[ast-signature-changed]** `packages/web/web/src/types.ts` — 签名变化: WebSearchProvider
    旧: export interface WebSearchProvider { readonly id: string /** Cheap local usability check; must not make network calls. */ available(): boolean /** Run one search; honor `signal` for cancellation. */ search(request: WebSearchRequest, signal?: AbortSignal): Promise<WebSearchResult> }
    新: export interface WebSearchProvider { readonly id: string /** Cheap local usability check; must not make network calls. */ available(): boolean /** * Whether a search made for a model request on the `llmProvider` chat route has a * credential to send. Checks configuration only and must not make network calls. * Omitted = ready. * @param llmProvider - the provider route id of the model request, when known. * @returns false when that request's searches could not authenticate. */ ready?(llmProvider: string | undefined): Promise<boolean> /** Run one search; honor `signal` for cancellation. */ search(request: WebSearchRequest, signal?: AbortSignal): Promise<WebSearchResult> }
- **[ast-signature-changed]** `packages/web/web/src/types.ts` — 签名变化: WebFetchProvider
    旧: export interface WebFetchProvider { readonly id: string /** Cheap local usability check; must not make network calls. */ available(): boolean /** Retrieve one URL; honor `signal` for cancellation. */ fetch(request: WebFetchRequest, signal?: AbortSignal): Promise<WebFetchResult> }
    新: export interface WebFetchProvider { readonly id: string /** Cheap local usability check; must not make network calls. */ available(): boolean /** * Whether a fetch made for a model request on the `llmProvider` chat route has a * credential to send. Checks configuration only and must not make network calls. * Omitted = ready. * @param llmProvider - the provider route id of the model request, when known. * @returns false when that request's fetches could not authenticate. */ ready?(llmProvider: string | undefined): Promise<boolean> /** Retrieve one URL; honor `signal` for cancellation. */ fetch(request: WebFetchRequest, signal?: AbortSignal): Promise<WebFetchResult> }
- **[ast-signature-changed]** `packages/client/ui-primitives/src/markdown/render.tsx` — 签名变化: imageSource
    旧: function(url:string,pathImages:MarkdownPathImages | undefined)
    新: function(url:string,pathImages:MarkdownPathImages | undefined,load:number)
- **[ast-signature-changed]** `packages/client/ui-primitives/src/markdown/render.tsx` — 签名变化: MarkdownPathImages
    旧: export interface MarkdownPathImages { /** * Resolve one authored image destination. * @param value - The destination exactly as the markdown author wrote it. * @returns A displayable absolute URL, or undefined when the destination * names no displayable image — it then stays inert alt text. */ resolve(value: string): string | undefined }
    新: export interface MarkdownPathImages { /** * Resolve one authored image destination. * @param value - The destination exactly as the markdown author wrote it. * @returns A displayable absolute URL, or undefined when the destination * names no displayable image — it then stays inert alt text. The renderer * appends a per-mount `load` query parameter to `api/file` route results. */ resolve(value: string): string | undefined }
- **[ast-signature-changed]** `packages/client/ui-primitives/src/markdown/render.tsx` — 签名变化: MarkdownRenderContext
    旧: export interface MarkdownRenderContext { /** Streaming arm: fences highlight incrementally as they grow; TeX (including ```math fences) stays literal until the settled pass. */ readonly streaming: boolean /** Localized fence copy-button labels. */ readonly labels: MarkdownLabels /** Inside a blockquote's children: tables there always fill the quote's width. */ readonly inBlockquote?: boolean /** Inline-code file mentions; absent wherever no opener vocabulary exists. */ readonly fileMentions: MarkdownFileMentions | undefined /** Local-path image vocabulary; absent wherever no rewriting owner exists. */ readonly pathImages: MarkdownPathImages | undefined /** Inside an anchor's children: interactive mentions must not nest there. */ readonly inLink?: boolean /** Reference targets visible to this pass. */ readonly targets: ReferenceTargets /** Footnote identifiers in first-reference order; a footnote's number is its 1-based index here. */ readonly footnoteOrder: string[] /** References rendered per identifier; drives the section's back-reference count. */ readonly footnoteCounts: Map<string, number> }
    新: export interface MarkdownRenderContext { /** Streaming arm: fences highlight incrementally as they grow; TeX (including ```math fences) stays literal until the settled pass. */ readonly streaming: boolean /** Localized fence copy-button labels. */ readonly labels: MarkdownLabels /** Inside a blockquote's children: tables there always fill the quote's width. */ readonly inBlockquote?: boolean /** Inline-code file mentions; absent wherever no opener vocabulary exists. */ readonly fileMentions: MarkdownFileMentions | undefined /** Local-path image vocabulary; absent wherever no rewriting owner exists. */ readonly pathImages: MarkdownPathImages | undefined /** Raw HTML renders nothing instead of literal text. */ readonly omitHtml: boolean /** Inside an anchor's children: interactive mentions must not nest there. */ readonly inLink?: boolean /** Reference targets visible to this pass. */ readonly targets: ReferenceTargets /** Footnote identifiers in first-reference order; a footnote's number is its 1-based index here. */ readonly footnoteOrder: string[] /** References rendered per identifier; drives the section's back-reference count. */ readonly footnoteCounts: Map<string, number> }
- **[config-field-type-changed]** `config:@deepseek-ai/dsh-agent-tool-presentation` — 配置字段类型变化: mode: ToolPresentationMode -> 'native' | 'ptc'
- **[config-field-type-changed]** `config:@deepseek-ai/dsh-ptc-runtime-node` — 配置字段类型变化: executionMode: ?'per-call' | 'persistent-in-memory' -> ?'per-call' | 'persistent-in-memory' | 'vm-script'

## info

- **[package-added]** `packages/client/ui-file-drag` — 新增包
- **[package-added]** `packages/core/tool-executor-native` — 新增包
- **[package-added]** `packages/core/tool-executor-ptc` — 新增包
- **[package-added]** `packages/deliverables/deliverable-file-references` — 新增包
- **[package-added]** `packages/experimental/action-cards` — 新增包
- **[package-added]** `packages/experimental/client-ui-action-cards` — 新增包
- **[package-added]** `packages/experimental/client-ui-creation-recommendations` — 新增包
- **[package-added]** `packages/experimental/client-ui-forge` — 新增包
- **[package-added]** `packages/experimental/client-ui-plugin-recommendations` — 新增包
- **[package-added]** `packages/experimental/client-ui-stats` — 新增包
- **[package-added]** `packages/experimental/creation-recommendations` — 新增包
- **[package-added]** `packages/experimental/cua-bundle` — 新增包
- **[package-added]** `packages/experimental/forge` — 新增包
- **[package-added]** `packages/experimental/forge-bundle` — 新增包
- **[package-added]** `packages/experimental/forge-github` — 新增包
- **[package-added]** `packages/experimental/forge-session` — 新增包
- **[package-added]** `packages/experimental/liveshare` — 新增包
- **[package-added]** `packages/experimental/liveshare-protocol` — 新增包
- **[package-added]** `packages/experimental/personalized-recommendations` — 新增包
- **[package-added]** `packages/experimental/plugin-recommendations` — 新增包
- **[package-added]** `packages/experimental/subagent-oar` — 新增包
- **[package-added]** `packages/experimental/tool-subagent-oar` — 新增包
- **[package-added]** `packages/session/message-quotes` — 新增包
- **[package-added]** `packages/test-support/tool-testkit` — 新增包
- **[package-added]** `packages/util/file-drag` — 新增包
- **[package-added]** `packages/util/official-bundles` — 新增包
- **[package-added]** `packages/util/plugin-detail` — 新增包
- **[doc-added]** `docs/persistence-changes/2026-10-13-liveshare-share-viewer-principal.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-13-liveshare-share-viewer-principal.zh.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-22-action-card-status.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-22-action-card-status.zh.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-25-skill-catalog-incomplete.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-25-skill-catalog-incomplete.zh.md` — 新增文档
- **[doc-added]** `docs/subsystems/forge.md` — 新增文档
- **[doc-added]** `docs/subsystems/forge.zh.md` — 新增文档
- **[doc-added]** `docs/subsystems/liveshare.md` — 新增文档
- **[doc-added]** `docs/subsystems/liveshare.zh.md` — 新增文档
- **[config-scope-added]** `config:@deepseek-ai/dsh-action-cards` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-client-ui-trajectory` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-experimental-client-ui-forge` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-experimental-forge` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-experimental-forge-github` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-experimental-forge-session` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-experimental-subagent-oar` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-experimental-tool-subagent-oar` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-tool-executor-ptc` — 新增可配置包
- **[ast-export-added]** `packages/api/session-controller` — 新增导出: resolveSessionResource
- **[ast-export-added]** `packages/api/session-controller` — 新增导出: sessionParameter
- **[ast-export-added]** `packages/attachment/attachment` — 新增导出: isEncodedImage
- **[ast-export-added]** `packages/attachment/attachment` — 新增导出: isStoredImage
- **[ast-export-added]** `packages/attachment/attachment` — 新增导出: assertMessageImages
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: DETAIL_FILE_PATH
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: INSPECT_FIELDS
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: UpdateTarget
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: updateRefusal
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: RegistryAnswer
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: mapConcurrent
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: alternative
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: installOperationTarget
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: exemptionOperationIdentity
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: diagnosticVersion
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: platformError
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: listedByDefault
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: asked
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: looked
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: refusedBefore
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: installTarget
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: previousRegistry
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: removal
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: installSpec
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: refusedVersion
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: observedVersion
- **[ast-export-added]** `packages/boot/plugin-market` — 新增导出: PUBLIC_REGISTRIES
- **[ast-export-added]** `packages/boot/plugin-market` — 新增导出: cacheDir
- **[ast-export-added]** `packages/boot/plugin-market` — 新增导出: languages
- **[ast-export-added]** `packages/bundle/headless` — 新增导出: permissionMode
- **[ast-export-added]** `packages/bundle/headless` — 新增导出: approvalPolicy
- **[ast-export-added]** `packages/bundle/headless` — 新增导出: requestedRoots
- **[ast-export-added]** `packages/client/file-upload` — 新增导出: readAtMost
- **[ast-export-added]** `packages/client/modules` — 新增导出: PACKAGE_ASSET_PATH
- **[ast-export-added]** `packages/client/modules` — 新增导出: transforStreamBody
- **[ast-export-added]** `packages/client/modules` — 新增导出: heldBody
- **[ast-export-added]** `packages/client/modules` — 新增导出: asset
- **[ast-export-added]** `packages/client/ui-trajectory` — 新增导出: LiveResults
- **[ast-export-added]** `packages/client/ui-trajectory` — 新增导出: emptyResults
- **[ast-export-added]** `packages/client/ui-trajectory` — 新增导出: SessionToolResults
- **[ast-export-added]** `packages/client/ui-trajectory` — 新增导出: _cancellation
- **[ast-export-added]** `packages/context/harness-dev-context` — 新增导出: legacyPromptProjectionHandle
- **[ast-export-added]** `packages/context/time-context` — 新增导出: projectionReady
- **[ast-export-added]** `packages/context/time-context` — 新增导出: timeContextProjectionHandle
- **[ast-export-added]** `packages/context/tmux-context` — 新增导出: tmuxContextProjectionHandle
- **[ast-export-added]** `packages/core/agent-loop` — 新增导出: AgentInitializationOptions
- **[ast-export-added]** `packages/core/system-prompt` — 新增导出: PromptPresentation
- **[ast-export-added]** `packages/core/tool-executor-native` — 新增导出: NativeToolExecutor
- **[ast-export-added]** `packages/core/tool-executor-ptc` — 新增导出: PtcExecutor
- **[ast-export-added]** `packages/core/tools` — 新增导出: ToolRegistration
- **[ast-export-added]** `packages/core/tools` — 新增导出: GuardLayer
- **[ast-export-added]** `packages/core/tools` — 新增导出: ToolsService
- **[ast-export-added]** `packages/core/tools` — 新增导出: executor
- **[ast-export-added]** `packages/experimental/action-cards` — 新增导出: DISMISS
- **[ast-export-added]** `packages/experimental/action-cards` — 新增导出: DERIVED_PHASES
- **[ast-export-added]** `packages/experimental/action-cards` — 新增导出: FINAL_PHASES
- **[ast-export-added]** `packages/experimental/action-cards` — 新增导出: SKILL_TOOL
- **[ast-export-added]** `packages/experimental/action-cards` — 新增导出: skillArguments
- **[ast-export-added]** `packages/experimental/action-cards` — 新增导出: STATUS_PREAMBLE
- **[ast-export-added]** `packages/experimental/action-cards` — 新增导出: STATUS_CLOSING
- **[ast-export-added]** `packages/experimental/action-cards` — 新增导出: PluginFiber
- **[ast-export-added]** `packages/experimental/action-cards` — 新增导出: isPluginStopping
- **[ast-export-added]** `packages/experimental/action-cards` — 新增导出: ActionCardError
- **[ast-export-added]** `packages/experimental/action-cards` — 新增导出: ActionCardVerb
- **[ast-export-added]** `packages/experimental/action-cards` — 新增导出: ActionCardProposalOf
- **[ast-export-added]** `packages/experimental/action-cards` — 新增导出: ActionCardKind
- **[ast-export-added]** `packages/experimental/action-cards` — 新增导出: RegisteredKind
- **[ast-export-added]** `packages/experimental/plugin-recommendations` — 新增导出: ownEntry
- **[ast-export-added]** `packages/experimental/action-cards` — 新增导出: issuesOf
- **[ast-export-added]** `packages/experimental/action-cards` — 新增导出: ActionCards
- **[ast-export-added]** `packages/experimental/action-cards` — 新增导出: loads
- **[ast-export-added]** `packages/experimental/action-cards` — 新增导出: receipts
- **[ast-export-added]** `packages/experimental/action-cards` — 新增导出: typed
- **[ast-export-added]** `packages/experimental/action-cards` — 新增导出: reconcile
- **[ast-export-added]** `packages/experimental/action-cards` — 新增导出: proposal
- **[ast-export-added]** `packages/experimental/action-cards` — 新增导出: dismissed
- **[ast-export-added]** `packages/experimental/action-cards` — 新增导出: issues
- **[ast-export-added]** `packages/experimental/agent-team` — 新增导出: teamProjectionHandle
- **[ast-export-added]** `packages/experimental/auto-review` — 新增导出: AUTO_REVIEW_FAILED_ERROR_NAME
- **[ast-export-added]** `packages/experimental/auto-review` — 新增导出: AUTO_REVIEW_FAILED_CODE
- **[ast-export-added]** `packages/experimental/auto-review` — 新增导出: CallMode
- **[ast-export-added]** `packages/experimental/auto-review` — 新增导出: HistoricalToolSchema
- **[ast-export-added]** `packages/experimental/auto-review` — 新增导出: ShownSchemas
- **[ast-export-added]** `packages/experimental/auto-review` — 新增导出: isBrowserPrompt
- **[ast-export-added]** `packages/experimental/auto-review` — 新增导出: CreationPrompts
- **[ast-export-added]** `packages/experimental/auto-review` — 新增导出: creationPrompts
- **[ast-export-added]** `packages/experimental/auto-review` — 新增导出: toolSchemaEntry
- **[ast-export-added]** `packages/experimental/auto-review` — 新增导出: shownSchemaKey
- **[ast-export-added]** `packages/experimental/auto-review` — 新增导出: emittedSchemas
- **[ast-export-added]** `packages/experimental/auto-review` — 新增导出: pushCall
- **[ast-export-added]** `packages/experimental/auto-review` — 新增导出: reviewMessages
- **[ast-export-added]** `packages/experimental/auto-review` — 新增导出: shownBySession
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: ControllerConfig
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: ForgePanelController
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: panels
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: stateOwner
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: inbox
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: fork
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: patch
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: localAhead
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: fileUrls
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: worktrees
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: storage
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: visibleUrls
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: readError
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: diffing
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: actionError
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: branchPrefix
- **[ast-export-added]** `packages/experimental/creation-recommendations` — 新增导出: ACTION
- **[ast-export-added]** `packages/experimental/creation-recommendations` — 新增导出: RESERVED_PREFIX
- **[ast-export-added]** `packages/experimental/creation-recommendations` — 新增导出: slotSchema
- **[ast-export-added]** `packages/experimental/creation-recommendations` — 新增导出: customLocationSchema
- **[ast-export-added]** `packages/experimental/creation-recommendations` — 新增导出: detailsSchema
- **[ast-export-added]** `packages/experimental/creation-recommendations` — 新增导出: dataSchema
- **[ast-export-added]** `packages/experimental/creation-recommendations` — 新增导出: locationSchema
- **[ast-export-added]** `packages/experimental/creation-recommendations` — 新增导出: PageCard
- **[ast-export-added]** `packages/experimental/creation-recommendations` — 新增导出: PageProposal
- **[ast-export-added]** `packages/experimental/creation-recommendations` — 新增导出: CreationJob
- **[ast-export-added]** `packages/experimental/creation-recommendations` — 新增导出: CreationRecommendationError
- **[ast-export-added]** `packages/experimental/creation-recommendations` — 新增导出: PersonalizedPages
- **[ast-export-added]** `packages/experimental/creation-recommendations` — 新增导出: custom
- **[ast-export-added]** `packages/experimental/creation-recommendations` — 新增导出: creators
- **[ast-export-added]** `packages/experimental/creation-recommendations` — 新增导出: sourceDirectory
- **[ast-export-added]** `packages/experimental/creation-recommendations` — 新增导出: bundleName
- **[ast-export-added]** `packages/experimental/cua` — 新增导出: sync
- **[ast-export-added]** `packages/experimental/forge-github` — 新增导出: HOST
- **[ast-export-added]** `packages/experimental/forge-session` — 新增导出: SessionWatch
- **[ast-export-added]** `packages/experimental/forge-session` — 新增导出: ForgeSessionService
- **[ast-export-added]** `packages/experimental/forge-session` — 新增导出: changeRequests
- **[ast-export-added]** `packages/experimental/forge` — 新增导出: FetchResults
- **[ast-export-added]** `packages/experimental/forge` — 新增导出: Watch
- **[ast-export-added]** `packages/experimental/forge` — 新增导出: ForgeService
- **[ast-export-added]** `packages/experimental/forge` — 新增导出: due
- **[ast-export-added]** `packages/experimental/forge` — 新增导出: forge
- **[ast-export-added]** `packages/experimental/plugin-recommendations` — 新增导出: PluginProposal
- **[ast-export-added]** `packages/experimental/plugin-recommendations` — 新增导出: PluginRecommendations
- **[ast-export-added]** `packages/experimental/plugin-recommendations` — 新增导出: cards
- **[ast-export-added]** `packages/experimental/subagent-oar` — 新增导出: providerName
- **[ast-export-added]** `packages/experimental/worktree` — 新增导出: GitRun
- **[ast-export-added]** `packages/experimental/worktree` — 新增导出: actualRoot
- **[ast-export-added]** `packages/experimental/worktree` — 新增导出: recordedPath
- **[ast-export-added]** `packages/experimental/worktree` — 新增导出: branchRecreated
- **[ast-export-added]** `packages/experimental/worktree` — 新增导出: filterOverrides
- **[ast-export-added]** `packages/host/frontend-static` — 新增导出: bytesBody
- **[ast-export-added]** `packages/host/frontend-static` — 新增导出: authorizeIndex
- **[ast-export-added]** `packages/host/plugin-inventory` — 新增导出: fiberPhase
- **[ast-export-added]** `packages/host/webserver` — 新增导出: WebResource
- **[ast-export-added]** `packages/host/webserver` — 新增导出: WebResourceRoute
- **[ast-export-added]** `packages/host/webserver` — 新增导出: RESOURCE_METHODS
- **[ast-export-added]** `packages/host/webserver` — 新增导出: nodeHeaders
- **[ast-export-added]** `packages/host/webserver` — 新增导出: writeResponse
- **[ast-export-added]** `packages/host/webserver` — 新增导出: responder
- **[ast-export-added]** `packages/interaction/user-approval` — 新增导出: POLICY_NOTICE_NAMES
- **[ast-export-added]** `packages/interaction/user-approval` — 新增导出: ApprovalState
- **[ast-export-added]** `packages/interaction/user-approval` — 新增导出: approvalStateDefinition
- **[ast-export-added]** `packages/interaction/user-questions` — 新增导出: unoffered
- **[ast-export-added]** `packages/jobs/tool-jobs` — 新增导出: noticeDetail
- **[ast-export-added]** `packages/jobs/tool-jobs` — 新增导出: inlineCompletionNotice
- **[ast-export-added]** `packages/jobs/tool-jobs` — 新增导出: PendingNotice
- **[ast-export-added]** `packages/jobs/tool-jobs` — 新增导出: releasedReads
- **[ast-export-added]** `packages/jobs/tool-jobs` — 新增导出: suppressedSettlements
- **[ast-export-added]** `packages/jobs/tool-jobs` — 新增导出: SettledEvent
- **[ast-export-added]** `packages/jobs/tool-jobs` — 新增导出: beginReleasedRead
- **[ast-export-added]** `packages/jobs/tool-jobs` — 新增导出: deliverSettlement
- **[ast-export-added]** `packages/jobs/tool-jobs` — 新增导出: endReleasedRead
- **[ast-export-added]** `packages/jobs/tool-jobs` — 新增导出: releasedBy
- **[ast-export-added]** `packages/jobs/tool-jobs` — 新增导出: checkInput
- **[ast-export-added]** `packages/llm/llm-retry` — 新增导出: llmRetryProjectionHandle
- **[ast-export-added]** `packages/llm/llm` — 新增导出: badge
- **[ast-export-added]** `packages/sandbox/sandbox-policy` — 新增导出: resolveAdditionalWritableRoots
- **[ast-export-added]** `packages/sandbox/sandbox-policy` — 新增导出: additional
- **[ast-export-added]** `packages/sandbox/sandbox` — 新增导出: SandboxUnsupportedPolicyError
- **[ast-export-added]** `packages/session-query/session-log-export` — 新增导出: sessionMarkdownResponse
- **[ast-export-added]** `packages/session-query/session-log-export` — 新增导出: sessionQuery
- **[ast-export-added]** `packages/session-query/session-log-export` — 新增导出: isSessionNotFound
- **[ast-export-added]** `packages/session/session-projection` — 新增导出: ProjectionHandle
- **[ast-export-added]** `packages/session/session-projection` — 新增导出: ProjectionKeySelection
- **[ast-export-added]** `packages/session/session-projection` — 新增导出: selectedKeys
- ★ **[ast-export-added]** `packages/skill/tool-skill` — 新增导出: incomplete
- ★ **[ast-export-added]** `packages/skill/tool-skill` — 新增导出: incompleteCatalogNotice
- **[ast-export-added]** `packages/subagent/tool-subagent` — 新增导出: subagentModelSelectionProjectionHandle
- **[ast-export-added]** `packages/subagent/tool-subagent` — 新增导出: modelSelectionPolicy
- **[ast-export-added]** `packages/test-support/llm-replay` — 新增导出: BADGE_TONES
- **[ast-export-added]** `packages/test-support/llm-replay` — 新增导出: displayableBadge
- **[ast-export-added]** `packages/test-support/tool-testkit` — 新增导出: JsonFields
- **[ast-export-added]** `packages/test-support/tool-testkit` — 新增导出: ContentValue
- **[ast-export-added]** `packages/test-support/tool-testkit` — 新增导出: executeToolFixture
- **[ast-export-added]** `packages/test-support/tool-testkit` — 新增导出: executeModelToolFixture
- **[ast-export-added]** `packages/util/file-drag` — 新增导出: FILE_DRAG_TOKEN_TYPE
- **[ast-export-added]** `packages/util/file-drag` — 新增导出: FileDragHandle
- **[ast-export-added]** `packages/util/file-drag` — 新增导出: FileDragRequestId
- **[ast-export-added]** `packages/util/file-drag` — 新增导出: DragFileName
- **[ast-export-added]** `packages/util/file-drag` — 新增导出: DesktopFileSource
- **[ast-export-added]** `packages/util/file-drag` — 新增导出: DesktopFileDrag
- **[ast-export-added]** `packages/util/file-drag` — 新增导出: resolveDragFileName
- **[ast-export-added]** `packages/util/file-drag` — 新增导出: preferred
- **[ast-export-added]** `packages/util/file-drag` — 新增导出: finalDot
- **[ast-export-added]** `packages/util/file-drag` — 新增导出: truncate
- **[ast-export-added]** `packages/util/file-drag` — 新增导出: extensionTail
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: keyConfig
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: searchApi
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: fetchApi
- **[ast-export-added]** `packages/web/web-search-deepseek` — 新增导出: SearchOptions
- **[ast-export-added]** `packages/web/web-search-deepseek` — 新增导出: searchConfigured
- **[ast-export-added]** `packages/web/web` — 新增导出: selectedProviderReady
- **[ast-export-added]** `packages/api/gateway/src/types.ts` — 新增导出: PendingRemoteEventInfo
- **[ast-export-added]** `packages/api/session-controller/src/types.ts` — 新增导出: SessionQueuedItem
- **[ast-export-added]** `packages/api/session-controller/src/types.ts` — 新增导出: SessionPendingInput
- **[ast-export-added]** `packages/api/session-controller/src/types.ts` — 新增导出: SessionState
- **[ast-export-added]** `packages/api/session-controller/src/types.ts` — 新增导出: SessionStateRequest
- **[ast-export-added]** `packages/api/session-controller/src/types.ts` — 新增导出: SessionWaitRequest
- **[ast-export-added]** `packages/api/session-controller/src/types.ts` — 新增导出: SessionWaitOutput
- **[ast-export-added]** `packages/api/session-controller/src/types.ts` — 新增导出: SessionWaitValue
- **[ast-export-added]** `packages/api/session-controller/src/types.ts` — 新增导出: SessionEventsPage
- **[ast-export-added]** `packages/api/session-controller/src/types.ts` — 新增导出: SessionObserveEventRequest
- **[ast-export-added]** `packages/api/session-controller/src/types.ts` — 新增导出: SessionEventFrame
- **[ast-export-added]** `packages/api/session-controller/src/types.ts` — 新增导出: SessionProjectionChange
- **[ast-export-added]** `packages/api/session-controller/src/types.ts` — 新增导出: SessionProjectionFrame
- **[ast-export-added]** `packages/boot/app-boot/src/startup-diagnostics.ts` — 新增导出: StartupPluginState
- **[ast-export-added]** `packages/boot/app-boot/src/startup-diagnostics.ts` — 新增导出: StartupServiceState
- **[ast-export-added]** `packages/boot/app-boot/src/startup-diagnostics.ts` — 新增导出: StartupCompositionDiagnostic
- **[ast-export-added]** `packages/boot/app-boot/src/startup-diagnostics.ts` — 新增导出: stateName
- **[ast-export-added]** `packages/boot/app-boot/src/startup-diagnostics.ts` — 新增导出: pluginState
- **[ast-export-added]** `packages/boot/app-boot/src/startup-diagnostics.ts` — 新增导出: captureStartupComposition
- **[ast-export-added]** `packages/boot/app-boot/src/startup-diagnostics.ts` — 新增导出: omittedServices
- **[ast-export-added]** `packages/boot/app-boot/src/bundle-platform.ts` — 新增导出: NODE_PLATFORMS
- **[ast-export-added]** `packages/boot/app-boot/src/bundle-platform.ts` — 新增导出: UnsupportedBundlePlatformError
- **[ast-export-added]** `packages/boot/app-boot/src/bundle-platform.ts` — 新增导出: assertBundlePlatform
- **[ast-export-added]** `packages/boot/plugin-manager/src/types.ts` — 新增导出: RegistryAttempt
- **[ast-export-added]** `packages/boot/plugin-manager/src/types.ts` — 新增导出: PluginVersion
- **[ast-export-added]** `packages/boot/plugin-manager/src/types.ts` — 新增导出: PluginVersionList
- **[ast-export-added]** `packages/boot/plugin-manager/src/types.ts` — 新增导出: ListVersionsOptions
- **[ast-export-added]** `packages/boot/plugin-manager/src/types.ts` — 新增导出: UpdateBundleOptions
- **[ast-export-added]** `packages/boot/plugin-manager/src/types.ts` — 新增导出: PluginUpdateStep
- **[ast-export-added]** `packages/boot/plugin-manager/src/types.ts` — 新增导出: PluginUpdateProgress
- **[ast-export-added]** `packages/boot/plugin-manager/src/types.ts` — 新增导出: PluginUpdateResult
- **[ast-export-added]** `packages/boot/plugin-manager/src/types.ts` — 新增导出: BundleDetail
- **[ast-export-added]** `packages/boot/plugin-manager/src/types.ts` — 新增导出: PluginOperationId
- **[ast-export-added]** `packages/boot/plugin-manager/src/types.ts` — 新增导出: PluginOperation
- **[ast-export-added]** `packages/boot/plugin-market/src/types.ts` — 新增导出: PluginDetailDocumentId
- **[ast-export-added]** `packages/boot/plugin-market/src/types.ts` — 新增导出: PluginDetailOrigin
- **[ast-export-added]** `packages/boot/plugin-market/src/types.ts` — 新增导出: PluginDetail
- **[ast-export-added]** `packages/client/file-upload/src/types.ts` — 新增导出: ImageUploadValue
- **[ast-export-added]** `packages/client/file-upload/src/types.ts` — 新增导出: StagedAttachment
- **[ast-export-added]** `packages/client/ui-chat/src/chat-settings.ts` — 新增导出: FOLDED_REPLIES_FIELD
- **[ast-export-added]** `packages/client/ui-chat/src/chat-settings.ts` — 新增导出: FOLDED_REPLIES
- **[ast-export-added]** `packages/client/ui-chat/src/chat-settings.ts` — 新增导出: FoldedReplies
- **[ast-export-added]** `packages/client/ui-chat/src/chat-settings.ts` — 新增导出: DEFAULT_FOLDED_REPLIES
- **[ast-export-added]** `packages/client/ui-dockkit/src/engine/geometry.ts` — 新增导出: FloatBounds
- **[ast-export-added]** `packages/client/ui-dockkit/src/engine/geometry.ts` — 新增导出: FLOAT_RESISTANCE
- **[ast-export-added]** `packages/client/ui-dockkit/src/engine/geometry.ts` — 新增导出: clampAxis
- **[ast-export-added]** `packages/client/ui-dockkit/src/engine/geometry.ts` — 新增导出: legalFloatRect
- **[ast-export-added]** `packages/client/ui-dockkit/src/engine/geometry.ts` — 新增导出: resist
- **[ast-export-added]** `packages/client/ui-dockkit/src/engine/geometry.ts` — 新增导出: resistedRect
- **[ast-export-added]** `packages/client/ui-dockkit/src/engine/geometry.ts` — 新增导出: legal
- **[ast-export-added]** `packages/client/ui-dockkit/src/engine/geometry.ts` — 新增导出: MAX_INVERTIBLE
- **[ast-export-added]** `packages/client/ui-dockkit/src/engine/geometry.ts` — 新增导出: unresist
- **[ast-export-added]** `packages/client/ui-dockkit/src/engine/geometry.ts` — 新增导出: unresistedRect
- **[ast-export-added]** `packages/client/ui-dockkit/src/engine/geometry.ts` — 新增导出: boundedResize
- **[ast-export-added]** `packages/client/ui-dockkit/src/components/DockSurface.tsx` — 新增导出: sourceIndex
- **[ast-export-added]** `packages/client/ui-dockkit/src/components/FloatLayer.tsx` — 新增导出: floatBounds
- **[ast-export-added]** `packages/client/ui-dockkit/src/components/FloatLayer.tsx` — 新增导出: reducedMotion
- **[ast-export-added]** `packages/client/ui-dockkit/src/components/FloatLayer.tsx` — 新增导出: VELOCITY_WINDOW_MS
- **[ast-export-added]** `packages/client/ui-dockkit/src/components/FloatLayer.tsx` — 新增导出: DrawnSample
- **[ast-export-added]** `packages/client/ui-dockkit/src/components/FloatLayer.tsx` — 新增导出: sampleDrawn
- **[ast-export-added]** `packages/client/ui-dockkit/src/components/FloatLayer.tsx` — 新增导出: releaseVelocity
- **[ast-export-added]** `packages/client/ui-dockkit/src/components/FloatLayer.tsx` — 新增导出: rate
- **[ast-export-added]** `packages/client/ui-dockkit/src/components/FloatLayer.tsx` — 新增导出: Settling
- **[ast-export-added]** `packages/client/ui-dockkit/src/components/FloatLayer.tsx` — 新增导出: floatStyle
- **[ast-export-added]** `packages/client/ui-dockkit/src/components/FloatLayer.tsx` — 新增导出: area
- **[ast-export-added]** `packages/client/ui-dockkit/src/components/FloatLayer.tsx` — 新增导出: cancelSettling
- **[ast-export-added]** `packages/client/ui-dockkit/src/components/FloatLayer.tsx` — 新增导出: dt
- **[ast-export-added]** `packages/client/ui-dockkit/src/components/FloatLayer.tsx` — 新增导出: axis
- **[ast-export-added]** `packages/client/ui-dockkit/src/components/FloatLayer.tsx` — 新增导出: rectOf
- **[ast-export-added]** `packages/client/ui-dockkit/src/components/FloatLayer.tsx` — 新增导出: drawn
- **[ast-export-added]** `packages/client/ui-dockkit/src/components/FloatLayer.tsx` — 新增导出: reduce
- **[ast-export-added]** `packages/client/ui-dockkit/src/components/FloatLayer.tsx` — 新增导出: pressed
- **[ast-export-added]** `packages/client/ui-dockkit/src/components/FloatLayer.tsx` — 新增导出: samples
- **[ast-export-added]** `packages/client/ui-primitives/src/UserMessageBubble.tsx` — 新增导出: UserMessageBubbleProps
- **[ast-export-added]** `packages/client/ui-primitives/src/UserMessageBubble.tsx` — 新增导出: UserMessageBubble
- **[ast-export-added]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 新增导出: ROW_FADE_MS
- **[ast-export-added]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 新增导出: ROW_GLIDE_MS
- **[ast-export-added]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 新增导出: AnimatedRowsProps
- **[ast-export-added]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 新增导出: RowPosition
- **[ast-export-added]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 新增导出: RowSnapshot
- **[ast-export-added]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 新增导出: sameRows
- **[ast-export-added]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 新增导出: intersects
- **[ast-export-added]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 新增导出: AnimatedRows
- **[ast-export-added]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 新增导出: nextKeys
- **[ast-export-added]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 新增导出: previousRow
- **[ast-export-added]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 新增导出: animation
- **[ast-export-added]** `packages/client/ui-primitives/src/useRowDragPreview.ts` — 新增导出: useRowDragPreview
- **[ast-export-added]** `packages/client/ui-primitives/src/useRowDragPreview.ts` — 新增导出: clear
- **[ast-export-added]** `packages/client/ui-primitives/src/useRowDragPreview.ts` — 新增导出: wasDragging
- **[ast-export-added]** `packages/client/ui-primitives/src/ZoomControls.tsx` — 新增导出: steppedZoom
- **[ast-export-added]** `packages/client/ui-primitives/src/ZoomControls.tsx` — 新增导出: ZoomControlsHandle
- **[ast-export-added]** `packages/client/ui-primitives/src/ZoomControls.tsx` — 新增导出: ZoomControls
- **[ast-export-added]** `packages/client/ui-primitives/src/ZoomControls.tsx` — 新增导出: displayZoom
- **[ast-export-added]** `packages/client/ui-primitives/src/ZoomControls.tsx` — 新增导出: selectedId
- **[ast-export-added]** `packages/client/ui-primitives/src/document-zoom.ts` — 新增导出: DOCUMENT_ZOOM
- **[ast-export-added]** `packages/client/ui-primitives/src/document-zoom.ts` — 新增导出: DocumentZoomLabels
- **[ast-export-added]** `packages/client/ui-primitives/src/HoverCard.tsx` — 新增导出: CardPosition
- **[ast-export-added]** `packages/client/ui-primitives/src/HoverCard.tsx` — 新增导出: portalRef
- **[ast-export-added]** `packages/client/ui-primitives/src/HoverCard.tsx` — 新增导出: bridgeTop
- **[ast-export-added]** `packages/client/ui-primitives/src/HoverCard.tsx` — 新增导出: bridgeLeft
- **[ast-export-added]** `packages/client/ui-primitives/src/focus.ts` — 新增导出: mobileDevice
- **[ast-export-added]** `packages/client/ui-primitives/src/focus.ts` — 新增导出: isMobileDevice
- **[ast-export-added]** `packages/client/ui-primitives/src/file-drag-actions.ts` — 新增导出: FileDragSource
- **[ast-export-added]** `packages/client/ui-primitives/src/file-drag-actions.ts` — 新增导出: PreparedFileDrag
- **[ast-export-added]** `packages/client/ui-primitives/src/file-drag-actions.ts` — 新增导出: FileDragActions
- **[ast-export-added]** `packages/client/ui-primitives/src/DraggableImage.tsx` — 新增导出: DraggableImageProps
- **[ast-export-added]** `packages/client/ui-primitives/src/DraggableImage.tsx` — 新增导出: DraggableImage
- **[ast-export-added]** `packages/client/ui-primitives/src/use-clipboard-copy.ts` — 新增导出: ClipboardCopyState
- **[ast-export-added]** `packages/client/ui-primitives/src/use-clipboard-copy.ts` — 新增导出: useClipboardCopy
- **[ast-export-added]** `packages/client/ui-primitives/src/use-clipboard-copy.ts` — 新增导出: copyPending
- **[ast-export-added]** `packages/client/ui-primitives/src/use-clipboard-copy.ts` — 新增导出: copyTimer
- **[ast-export-added]** `packages/client/ui-primitives/src/DetailDocument.tsx` — 新增导出: DetailDocumentState
- **[ast-export-added]** `packages/client/ui-primitives/src/DetailDocument.tsx` — 新增导出: DetailDocumentRead
- **[ast-export-added]** `packages/client/ui-primitives/src/DetailDocument.tsx` — 新增导出: detailDocumentState
- **[ast-export-added]** `packages/client/ui-primitives/src/DetailDocument.tsx` — 新增导出: DetailDocumentCopy
- **[ast-export-added]** `packages/client/ui-primitives/src/DetailDocument.tsx` — 新增导出: useDetailDocumentLabels
- **[ast-export-added]** `packages/client/ui-primitives/src/DetailDocument.tsx` — 新增导出: markdown
- **[ast-export-added]** `packages/client/ui-primitives/src/DetailDocument.tsx` — 新增导出: DetailDocumentLabels
- **[ast-export-added]** `packages/client/ui-primitives/src/DetailDocument.tsx` — 新增导出: DetailDocument
- **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: productIcon
- **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: IconDragHandleOutlineRegular
- **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: IconDragHandleOutlineMedium
- **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: appsAddIcon
- **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: Wide
- **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: Compact
- **[ast-export-added]** `packages/client/ui-primitives/src/QuotePreview.tsx` — 新增导出: QuoteMarkIcon
- **[ast-export-added]** `packages/client/ui-primitives/src/QuotePreview.tsx` — 新增导出: QuotePreviewRemoval
- **[ast-export-added]** `packages/client/ui-primitives/src/QuotePreview.tsx` — 新增导出: QuotePreviewProps
- **[ast-export-added]** `packages/client/ui-primitives/src/QuotePreview.tsx` — 新增导出: QuotePreview
- **[ast-export-added]** `packages/client/ui-primitives/src/QuotePreview.tsx` — 新增导出: sourceRef
- **[ast-export-added]** `packages/client/ui-primitives/src/markdown/quote-text.ts` — 新增导出: formatQuoteText
- **[ast-export-added]** `packages/client/ui-trajectory/src/types.ts` — 新增导出: SessionToolResultRequest
- **[ast-export-added]** `packages/client/ui-trajectory/src/types.ts` — 新增导出: SessionToolResultValue
- **[ast-export-added]** `packages/context/agent-instructions/src/render.ts` — 新增导出: isDisabledBudget
- **[ast-export-added]** `packages/context/agent-instructions/src/render.ts` — 新增导出: isUserGlobalInstruction
- **[ast-export-added]** `packages/context/agent-instructions/src/render.ts` — 新增导出: renderInstructionChains
- **[ast-export-added]** `packages/context/agent-instructions/src/render.ts` — 新增导出: userGlobal
- **[ast-export-added]** `packages/context/agent-instructions/src/render.ts` — 新增导出: inLoadedOrder
- **[ast-export-added]** `packages/context/agent-instructions/src/render.ts` — 新增导出: userGlobalLast
- **[ast-export-added]** `packages/context/agent-instructions/src/render.ts` — 新增导出: projectLast
- **[ast-export-added]** `packages/context/agent-instructions/src/render.ts` — 新增导出: intros
- **[ast-export-added]** `packages/context/agent-instructions/src/render.ts` — 新增导出: intro
- **[ast-export-added]** `packages/core/agent/src/runtime-types.ts` — 新增导出: Model
- **[ast-export-added]** `packages/core/agent/src/model-selection.ts` — 新增导出: toSelection
- **[ast-export-added]** `packages/core/agent/src/model-selection.ts` — 新增导出: sameModelSelection
- **[ast-export-added]** `packages/core/agent/src/model-selection.ts` — 新增导出: selectionOfHeader
- **[ast-export-added]** `packages/core/agent/src/model-selection.ts` — 新增导出: modelSelectionProjectionDefinition
- **[ast-export-added]** `packages/core/agent/src/model-selection.ts` — 新增导出: lastUsed
- **[ast-export-added]** `packages/core/agent/src/model-selection.ts` — 新增导出: AgentModel
- **[ast-export-added]** `packages/core/agent/src/projection.ts` — 新增导出: sessionSeqSchema
- **[ast-export-added]** `packages/core/tools/src/contracts.ts` — 新增导出: ToolActivationContext
- **[ast-export-added]** `packages/core/tools/src/contracts.ts` — 新增导出: ToolRegistrationOptions
- **[ast-export-added]** `packages/core/tools/src/contracts.ts` — 新增导出: ResolvedToolSet
- **[ast-export-added]** `packages/core/tools/src/contracts.ts` — 新增导出: ToolActivationError
- **[ast-export-added]** `packages/core/tools/src/executor.ts` — 新增导出: ToolModelInput
- **[ast-export-added]** `packages/core/tools/src/executor.ts` — 新增导出: ToolPromptSection
- **[ast-export-added]** `packages/core/tools/src/executor.ts` — 新增导出: ToolBatchInput
- **[ast-export-added]** `packages/core/tools/src/executor.ts` — 新增导出: ToolBatchResult
- **[ast-export-added]** `packages/core/tools/src/executor.ts` — 新增导出: ToolExecutor
- **[ast-export-added]** `packages/core/tools/src/executor.ts` — 新增导出: ToolBatchExecutionError
- **[ast-export-added]** `packages/core/tools/src/executor.ts` — 新增导出: ToolExecutorUnavailableError
- **[ast-export-added]** `packages/core/tools/src/schema.ts` — 新增导出: projectToolSchema
- **[ast-export-added]** `packages/experimental/action-cards/src/types.ts` — 新增导出: ActionCardFields
- **[ast-export-added]** `packages/experimental/action-cards/src/types.ts` — 新增导出: ActionCardProposal
- **[ast-export-added]** `packages/experimental/action-cards/src/types.ts` — 新增导出: ActionCardDecision
- **[ast-export-added]** `packages/experimental/action-cards/src/types.ts` — 新增导出: ActionCardView
- **[ast-export-added]** `packages/experimental/action-cards/src/types.ts` — 新增导出: ActionCardResult
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeCheckout
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeCheckoutState
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeSessionWorktree
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: WorktreeRecord
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeWorktreeRequest
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeWorktreeState
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeWorktreeBlocker
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeWorktreeCreation
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeWorktreeRestoration
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeWorktreeFailure
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeWorktreeWaiting
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeMissingWorktree
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgePanelWorktree
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeChangeRequestListState
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeChangeRequestStatesFrame
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgePanelChangeRequest
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgePanelState
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeBranches
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeLocalScope
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeDiffHunk
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeDiffStatus
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeDiffFile
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeLocalDiff
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeChangeRequestDiff
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeChangedFile
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeLocalChanges
- **[ast-export-added]** `packages/experimental/creation-recommendations/src/types.ts` — 新增导出: CreationSlot
- **[ast-export-added]** `packages/experimental/creation-recommendations/src/types.ts` — 新增导出: PageDetails
- **[ast-export-added]** `packages/experimental/creation-recommendations/src/types.ts` — 新增导出: PagePhase
- **[ast-export-added]** `packages/experimental/creation-recommendations/src/types.ts` — 新增导出: PageData
- **[ast-export-added]** `packages/experimental/creation-recommendations/src/types.ts` — 新增导出: PageVerb
- **[ast-export-added]** `packages/experimental/creation-recommendations/src/types.ts` — 新增导出: PageLocation
- **[ast-export-added]** `packages/experimental/cua/src/access.ts` — 新增导出: ControlOptions
- **[ast-export-added]** `packages/experimental/cua/src/access.ts` — 新增导出: Control
- **[ast-export-added]** `packages/experimental/cua/src/access.ts` — 新增导出: permissionProcess
- **[ast-export-added]** `packages/experimental/cua/src/access.ts` — 新增导出: systemPermissions
- **[ast-export-added]** `packages/experimental/cua/src/access.ts` — 新增导出: CuaAccess
- **[ast-export-added]** `packages/experimental/cua/src/access.ts` — 新增导出: installCuaAccess
- **[ast-export-added]** `packages/experimental/cua/src/access.ts` — 新增导出: perform
- **[ast-export-added]** `packages/experimental/forge-session/src/types.ts` — 新增导出: BindingOrigin
- **[ast-export-added]** `packages/experimental/forge-session/src/types.ts` — 新增导出: CommandEvidence
- **[ast-export-added]** `packages/experimental/forge-session/src/types.ts` — 新增导出: BindingRecord
- **[ast-export-added]** `packages/experimental/forge-session/src/types.ts` — 新增导出: PendingCommand
- **[ast-export-added]** `packages/experimental/forge-session/src/types.ts` — 新增导出: BindingState
- **[ast-export-added]** `packages/experimental/forge-session/src/types.ts` — 新增导出: PushedBranch
- **[ast-export-added]** `packages/experimental/forge-session/src/types.ts` — 新增导出: ForgeChangeRequestsState
- **[ast-export-added]** `packages/experimental/forge-session/src/types.ts` — 新增导出: SessionChangeRequest
- **[ast-export-added]** `packages/experimental/forge-session/src/types.ts` — 新增导出: SessionChangeRequestsListener
- **[ast-export-added]** `packages/experimental/forge/src/keys.ts` — 新增导出: changeRequestKey
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeRepository
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ChangeRequestRef
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ChangeRequestKey
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ChangeRequestState
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: CheckState
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ChangeRequestCheck
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ChecksRollup
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: Mergeability
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ReviewDecision
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: MergeMethod
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ChangeRequestSnapshot
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeFailure
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ChangeRequestUpdate
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: MergeRequest
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeActionFailure
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeReadiness
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeProvider
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ChangeRequestListener
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: TunnelRequestToken
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: TunnelRegistrationToken
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: LIVESHARE_PROTOCOL_VERSION
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: LIVESHARE_CAPABILITIES
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: LiveshareCapability
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: SharePermissions
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: TunnelShareSpec
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: TunnelWorkerCommand
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: TunnelRegistrationIdentity
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: TunnelWorkerEvent
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: ShareRpcFrame
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: ShareRpcActor
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: ShareConnection
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: viewerRequestFields
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: ShareRpcResFrame
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: ShareRpcCancelFrame
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: ShareAccessStateFrame
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: RelayFrame
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: FrameSocket
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: SOCKET_OPEN
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: sendFrame
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: rawText
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: frameEnvelope
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: decodeFrameEnvelope
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: parseGatewayFrame
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: parseRelayValue
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: parseRelayFrame
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: unsupportedFrameRefusal
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: rejectedCommandShareId
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: share
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: parseTunnelWorkerCommand
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: parseTunnelWorkerEvent
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: isTunnelShareSpec
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: isShareRpcActor
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: actor
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: isRegistrationToken
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: isTunnelRegistrationIdentity
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: isTunnelRequestIdentity
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: parseShareAccessState
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/tunnel-protocol.ts` — 新增导出: isSubjectIds
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/viewer-carrier.ts` — 新增导出: LIVESHARE_VIEWER_GLOBAL
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/viewer-carrier.ts` — 新增导出: ViewerPageTarget
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/viewer-carrier.ts` — 新增导出: ViewerCarrierOptions
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/viewer-carrier.ts` — 新增导出: installViewerCarrier
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/viewer-carrier.ts` — 新增导出: carrierStatus
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/viewer-carrier.ts` — 新增导出: carrierCodes
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/viewer-carrier.ts` — 新增导出: codeShaped
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/viewer-carrier.ts` — 新增导出: nextStreamId
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/viewer-carrier.ts` — 新增导出: Answer
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/viewer-carrier.ts` — 新增导出: Marked
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/viewer-carrier.ts` — 新增导出: forwardedRoutes
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/viewer-carrier.ts` — 新增导出: segmentOffset
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/viewer-carrier.ts` — 新增导出: forwardedRoute
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/viewer-carrier.ts` — 新增导出: forwardRoute
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/viewer-carrier.ts` — 新增导出: pageFetch
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/viewer-carrier.ts` — 新增导出: carrierFetch
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/viewer-carrier.ts` — 新增导出: pageOrigin
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/viewer-carrier.ts` — 新增导出: fetchCall
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/viewer-carrier.ts` — 新增导出: pageBase
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/viewer-carrier.ts` — 新增导出: openedBody
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/viewer-carrier.ts` — 新增导出: refusedOpen
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/viewer-carrier.ts` — 新增导出: viewerCarrierScript
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: OWNER_CREDENTIAL_FILENAME
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: FORK_REGISTRY_FILENAME
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: publishedShareState
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: ownerIdentity
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: ownerContext
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: allowedSubjectIds
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: ownerStateFile
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: ownerState
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: ownerCredentialFile
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: forks
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: storedCredential
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: relayOverride
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: effectiveRelay
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: relayRevision
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: currentRelay
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: captureOwnerOperation
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: OwnerOperation
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: ownerOperationCurrent
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: ownerShares
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: pendingRemovals
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: relay
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: accessChanged
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: viewerDeclarations
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: shareFactsOf
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: sessionMode
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: sourceConfined
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: accessFacts
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: viewerTurns
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: confinedExecution
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: noteViewerTurn
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: sourceAccess
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: forkEnforcementHost
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: viewerRead
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: childSessionId
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: arriving
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: externalTargetAllowed
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: viewer
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: shareIds
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: ownerAuthorizations
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: persistOwnerState
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: startupRelay
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: startupCredential
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: relayState
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: selectRelayAddress
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: operations
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: defaultOwnerStateFile
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: nonEmpty
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: describeError
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: ownerIdentityFromConfig
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: providerId
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: tenantId
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: subjectId
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-remote.ts` — 新增导出: LiveshareShares
- **[ast-export-added]** `packages/experimental/liveshare/src/host/viewer-declarations.ts` — 新增导出: VIEWER_DECLARATIONS_SERVICE
- **[ast-export-added]** `packages/experimental/liveshare/src/host/viewer-declarations.ts` — 新增导出: ViewerCapabilityGroup
- **[ast-export-added]** `packages/experimental/liveshare/src/host/viewer-declarations.ts` — 新增导出: CapabilityKind
- **[ast-export-added]** `packages/experimental/liveshare/src/host/viewer-declarations.ts` — 新增导出: DeclarationKind
- **[ast-export-added]** `packages/experimental/liveshare/src/host/viewer-declarations.ts` — 新增导出: ViewerDeclarationsSurface
- **[ast-export-added]** `packages/experimental/liveshare/src/host/viewer-declarations.ts` — 新增导出: isViewerDeclarationsSurface
- **[ast-export-added]** `packages/experimental/liveshare/src/host/viewer-declarations.ts` — 新增导出: isDeclaredEndpoint
- **[ast-export-added]** `packages/experimental/liveshare/src/host/viewer-declarations.ts` — 新增导出: acceptedEndpoints
- **[ast-export-added]** `packages/experimental/liveshare/src/host/viewer-declarations.ts` — 新增导出: owningPackageOf
- **[ast-export-added]** `packages/experimental/liveshare/src/host/viewer-declarations.ts` — 新增导出: declaringPackage
- **[ast-export-added]** `packages/experimental/liveshare/src/host/viewer-declarations.ts` — 新增导出: declaring
- **[ast-export-added]** `packages/experimental/liveshare/src/host/viewer-declarations.ts` — 新增导出: ViewerDeclarations
- **[ast-export-added]** `packages/experimental/liveshare/src/host/viewer-declarations.ts` — 新增导出: byPlugin
- **[ast-export-added]** `packages/experimental/liveshare/src/host/viewer-declarations.ts` — 新增导出: viewerDeclarationsOf
- **[ast-export-added]** `packages/experimental/plugin-recommendations/src/types.ts` — 新增导出: PluginDetails
- **[ast-export-added]** `packages/experimental/plugin-recommendations/src/types.ts` — 新增导出: PluginPhase
- **[ast-export-added]** `packages/experimental/plugin-recommendations/src/types.ts` — 新增导出: PluginData
- **[ast-export-added]** `packages/experimental/plugin-recommendations/src/types.ts` — 新增导出: RecommendationDetails
- **[ast-export-added]** `packages/experimental/worktree/src/types.ts` — 新增导出: CreateWorktreePhase
- **[ast-export-added]** `packages/experimental/worktree/src/types.ts` — 新增导出: RestoreWorktreeRequest
- **[ast-export-added]** `packages/experimental/worktree/src/types.ts` — 新增导出: RestoredWorktree
- **[ast-export-added]** `packages/experimental/worktree/src/name.ts` — 新增导出: UUID
- **[ast-export-added]** `packages/experimental/worktree/src/name.ts` — 新增导出: generatedWorktreeName
- **[ast-export-added]** `packages/experimental/worktree/src/name.ts` — 新增导出: uuid
- **[ast-export-added]** `packages/fs/tool-fs-search/src/glob.ts` — 新增导出: pruning
- **[ast-export-added]** `packages/fs/tool-fs-search/src/glob.ts` — 新增导出: directoryGlob
- **[ast-export-added]** `packages/llm/llm-deepseek/src/host.ts` — 新增导出: createModelListingCache
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing.ts` — 新增导出: UNREADABLE_BADGE_CHARACTER
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing.ts` — 新增导出: VISIBLE_BADGE_CHARACTER
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing.ts` — 新增导出: GRAPHEMES
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing.ts` — 新增导出: MAX_BADGE_TEXT_LENGTH
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing.ts` — 新增导出: ListedBadge
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing.ts` — 新增导出: badgeText
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing.ts` — 新增导出: localizedBadgeText
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing.ts` — 新增导出: translations
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing.ts` — 新增导出: en
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing.ts` — 新增导出: OWN_METADATA
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing.ts` — 新增导出: optionalFields
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing.ts` — 新增导出: badgeOf
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing.ts` — 新增导出: tone
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing-cache.ts` — 新增导出: age
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing-cache.ts` — 新增导出: wasAuthenticated
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listed-catalog.ts` — 新增导出: badges
- **[ast-export-added]** `packages/llm/llm/src/types.ts` — 新增导出: LlmModelBadgeTone
- **[ast-export-added]** `packages/llm/llm/src/types.ts` — 新增导出: LlmModelBadge
- **[ast-export-added]** `packages/ptc-runtime/ptc-runtime/src/types.ts` — 新增导出: PtcProgramFormat
- **[ast-export-added]** `packages/sandbox/sandbox/src/roots.ts` — 新增导出: SandboxInvalidRootError
- **[ast-export-added]** `packages/sandbox/sandbox/src/roots.ts` — 新增导出: additionalRoot
- **[ast-export-added]** `packages/sandbox/sandbox/src/roots.ts` — 新增导出: workspaceWritableRoots
- **[ast-export-added]** `packages/schedule/schedule/src/types.ts` — 新增导出: ScheduleDeleteInactiveResult
- **[ast-export-added]** `packages/schedule/schedule/src/domain.ts` — 新增导出: NON_CANONICAL_INSTANT_MESSAGE
- **[ast-export-added]** `packages/schedule/schedule/src/domain.ts` — 新增导出: instantDiagnostic
- **[ast-export-added]** `packages/schedule/schedule/src/domain.ts` — 新增导出: timeZoneError
- **[ast-export-added]** `packages/schedule/schedule/src/domain.ts` — 新增导出: localCalendarDiagnostic
- **[ast-export-added]** `packages/schedule/schedule/src/domain.ts` — 新增导出: resolveLocalAt
- **[ast-export-added]** `packages/schedule/schedule/src/domain.ts` — 新增导出: parseAtOffsetInstant
- ★ **[ast-export-added]** `packages/sdk/client/src/client.ts` — 新增导出: isUserQuestionRequest
- ★ **[ast-export-added]** `packages/sdk/protocol/src/types.ts` — 新增导出: SdkUserQuestionRequest
- ★ **[ast-export-added]** `packages/sdk/protocol/src/types.ts` — 新增导出: SdkUserQuestionAnswer
- ★ **[ast-export-added]** `packages/sdk/protocol/src/types.ts` — 新增导出: SdkUserQuestionCancelled
- ★ **[ast-export-added]** `packages/sdk/protocol/src/types.ts` — 新增导出: HarnessSdkHostRequestMap
- ★ **[ast-export-added]** `packages/sdk/protocol/src/types.ts` — 新增导出: ApprovalRequestParams
- ★ **[ast-export-added]** `packages/sdk/protocol/src/types.ts` — 新增导出: ApprovalRequestResult
- ★ **[ast-export-added]** `packages/sdk/protocol/src/types.ts` — 新增导出: HarnessSdkClientRequestMap
- ★ **[ast-export-added]** `packages/sdk/server/src/server.ts` — 新增导出: restoration
- ★ **[ast-export-added]** `packages/sdk/server/src/server.ts` — 新增导出: liveAgents
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: UNTITLED_SESSION_MARKDOWN_TITLE
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: AssistantEntry
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: ToolEntry
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: UserSegment
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: TurnEntry
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: TurnSegment
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: Turn
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: formatSessionMarkdown
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: finalIndex
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: finalText
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: normalizedTitle
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: collectTurns
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: toolCalls
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: finalReplyIndex
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: collapsibleSection
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: resultHeading
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: resultBody
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: visibleContent
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: toolResult
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: imageLabel
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: fileLabel
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: labelName
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: jsonArguments
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: fenced
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: longest
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: fence
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: Fence
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: ScannedLine
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: MarkdownScan
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: trimBlankEdgeLines
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: scanMarkdown
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: scanned
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: indented
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: openingFence
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: closesFence
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: closeUnfinishedFence
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: scan
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: escapeWrapperTagsOutsideFences
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: escapeWrapperTags
- **[ast-export-added]** `packages/session-query/session-log-export/src/routes.ts` — 新增导出: SESSION_MARKDOWN_EXPORT_PATH
- **[ast-export-added]** `packages/session-query/session-log-export/src/routes.ts` — 新增导出: SESSION_MARKDOWN_EXPORT_ROUTE
- **[ast-export-added]** `packages/session/session-projection/src/types.ts` — 新增导出: sessionProjectionSummaryExcluded
- **[ast-export-added]** `packages/session/session-projection/src/types.ts` — 新增导出: SessionProjectionSummaryExcluded
- **[ast-export-added]** `packages/session/session-projection/src/types.ts` — 新增导出: SessionProjectionViewValue
- **[ast-export-added]** `packages/session/session-projection/src/types.ts` — 新增导出: SessionProjectionViewValues
- **[ast-export-added]** `packages/session/session-projection/src/types.ts` — 新增导出: SessionProjectionSummaryExcludedKey
- **[ast-export-added]** `packages/session/session-projection/src/types.ts` — 新增导出: SessionProjectionSummaryValues
- **[ast-export-added]** `packages/test-support/agent-loop-testkit/src/model.ts` — 新增导出: unsupportedModel
- **[ast-export-added]** `packages/test-support/client-runtime/src/access.ts` — 新增导出: REFUSED
- **[ast-export-added]** `packages/test-support/client-runtime/src/access.ts` — 新增导出: StaticRemoteAccess
- **[ast-export-added]** `packages/test-support/client-runtime/src/access.ts` — 新增导出: StaticAccessPlugin
- **[ast-export-added]** `packages/test-support/client-runtime/src/access.ts` — 新增导出: staticAccessPlugin
- **[ast-export-added]** `packages/test-support/session-snapshot/src/harness.ts` — 新增导出: REPLAY_CREDENTIAL_ENV
- **[ast-export-added]** `packages/typert/protocol/src/types.ts` — 新增导出: TypertResourceResolveInput
- **[ast-export-added]** `packages/util/official-bundles/src/plugin-manager.ts` — 新增导出: PROTECTED_PLUGINS
- **[ast-export-added]** `packages/util/official-bundles/src/plugin-manager.ts` — 新增导出: HIDDEN_BUNDLES
- **[ast-export-added]** `packages/util/official-bundles/src/plugin-manager.ts` — 新增导出: EXTENSION_BUNDLES
- **[ast-export-added]** `packages/util/official-bundles/src/plugin-manager.ts` — 新增导出: MORE_BUNDLES
- **[ast-export-added]** `packages/util/official-bundles/src/plugin-manager.ts` — 新增导出: EXPERIMENTAL_BUNDLES
- **[ast-export-added]** `packages/util/plugin-detail/src/files.ts` — 新增导出: DetailFailure
- **[ast-export-added]** `packages/util/plugin-detail/src/files.ts` — 新增导出: FoundFile
- **[ast-export-added]** `packages/util/plugin-detail/src/files.ts` — 新增导出: DetailFiles
- **[ast-export-added]** `packages/util/plugin-detail/src/files.ts` — 新增导出: README_NAMES
- **[ast-export-added]** `packages/util/plugin-detail/src/files.ts` — 新增导出: README_PATTERN
- **[ast-export-added]** `packages/util/plugin-detail/src/files.ts` — 新增导出: joinPath
- **[ast-export-added]** `packages/util/plugin-detail/src/files.ts` — 新增导出: readmeName
- **[ast-export-added]** `packages/util/plugin-detail/src/files.ts` — 新增导出: ReadFile
- **[ast-export-added]** `packages/util/plugin-detail/src/files.ts` — 新增导出: readmeByName
- **[ast-export-added]** `packages/util/plugin-detail/src/files.ts` — 新增导出: localFiles
- **[ast-export-added]** `packages/util/plugin-detail/src/files.ts` — 新增导出: inside
- **[ast-export-added]** `packages/util/plugin-detail/src/files.ts` — 新增导出: RemoteFileOptions
- **[ast-export-added]** `packages/util/plugin-detail/src/files.ts` — 新增导出: FetchedBody
- **[ast-export-added]** `packages/util/plugin-detail/src/files.ts` — 新增导出: MAX_REDIRECTS
- **[ast-export-added]** `packages/util/plugin-detail/src/files.ts` — 新增导出: fetchBody
- **[ast-export-added]** `packages/util/plugin-detail/src/files.ts` — 新增导出: NPM_FILE_SOURCES
- **[ast-export-added]** `packages/util/plugin-detail/src/files.ts` — 新增导出: npmFileSourceOrder
- **[ast-export-added]** `packages/util/plugin-detail/src/files.ts` — 新增导出: NPM_FILE_URLS
- **[ast-export-added]** `packages/util/plugin-detail/src/files.ts` — 新增导出: npmFiles
- **[ast-export-added]** `packages/util/plugin-detail/src/document.ts` — 新增导出: languageChain
- **[ast-export-added]** `packages/util/plugin-detail/src/document.ts` — 新增导出: detailPath
- **[ast-export-added]** `packages/util/plugin-detail/src/document.ts` — 新增导出: localeDetail
- **[ast-export-added]** `packages/util/plugin-detail/src/document.ts` — 新增导出: markdownOf
- **[ast-export-added]** `packages/util/plugin-detail/src/document.ts` — 新增导出: PackageDocument
- **[ast-export-added]** `packages/util/plugin-detail/src/document.ts` — 新增导出: readPackageDocument
- **[ast-export-added]** `packages/util/plugin-detail/src/document.ts` — 新增导出: readme
- **[ast-export-added]** `packages/util/plugin-detail/src/document.ts` — 新增导出: IMAGE_TYPES
- **[ast-export-added]** `packages/util/plugin-detail/src/document.ts` — 新增导出: detailImage
- **[ast-export-added]** `packages/util/plugin-detail/src/response.ts` — 新增导出: DetailImage
- **[ast-export-added]** `packages/util/plugin-detail/src/response.ts` — 新增导出: FAILURE_STATUS
- **[ast-export-added]** `packages/util/plugin-detail/src/response.ts` — 新增导出: detailImageResponse
- **[ast-export-added]** `packages/util/plugin-detail/src/types.ts` — 新增导出: DetailFailureReason
- **[ast-export-added]** `packages/util/plugin-detail/src/types.ts` — 新增导出: NpmFileSource
- **[ast-export-added]** `packages/util/time/src/duration.ts` — 新增导出: MS_PER_SECOND
- **[ast-export-added]** `packages/util/time/src/duration.ts` — 新增导出: SECONDS_PER_DAY
- **[ast-export-added]** `packages/util/time/src/duration.ts` — 新增导出: SECONDS_PER_HOUR
- **[ast-export-added]** `packages/util/time/src/duration.ts` — 新增导出: SECONDS_PER_MINUTE
- **[ast-export-added]** `packages/util/time/src/duration.ts` — 新增导出: DurationParts
- **[ast-export-added]** `packages/util/time/src/duration.ts` — 新增导出: MAX_SPAN_MS
- **[ast-export-added]** `packages/util/time/src/duration.ts` — 新增导出: Duration
- **[ast-export-added]** `packages/util/time/src/instant.ts` — 新增导出: LocalCalendarTime
- **[ast-export-added]** `packages/util/time/src/instant.ts` — 新增导出: InstantRejection
- **[ast-export-added]** `packages/util/time/src/instant.ts` — 新增导出: LocalCalendarRejection
- **[ast-export-added]** `packages/util/time/src/instant.ts` — 新增导出: TimeZoneRejection
- **[ast-export-added]** `packages/util/time/src/instant.ts` — 新增导出: InstantResult
- **[ast-export-added]** `packages/util/time/src/instant.ts` — 新增导出: LocalCalendarResult
- **[ast-export-added]** `packages/util/time/src/instant.ts` — 新增导出: TimeZoneResult
- **[ast-export-added]** `packages/util/time/src/instant.ts` — 新增导出: fractionalMilliseconds
- **[ast-export-added]** `packages/util/time/src/instant.ts` — 新增导出: inFourDigitYearRange
- **[ast-export-added]** `packages/util/time/src/instant.ts` — 新增导出: plainDateTime
- **[ast-export-added]** `packages/util/time/src/instant.ts` — 新增导出: parseLocalCalendar
- **[ast-export-added]** `packages/util/time/src/instant.ts` — 新增导出: dateGroups
- **[ast-export-added]** `packages/util/time/src/instant.ts` — 新增导出: timeGroups
- **[ast-export-added]** `packages/util/time/src/instant.ts` — 新增导出: fourDigitYearEpoch
- **[ast-export-added]** `packages/util/time/src/instant.ts` — 新增导出: isFourDigitYearInstant
- **[ast-export-added]** `packages/util/time/src/instant.ts` — 新增导出: formatFourDigitYearInstant
- **[ast-export-added]** `packages/web/tool-web/src/search.ts` — 新增导出: WEB_SEARCH_SUMMARY_MAX_CHARS
- **[ast-export-added]** `packages/web/tool-web/src/search.ts` — 新增导出: SUMMARY_ELLIPSIS
- **[ast-export-added]** `packages/web/tool-web/src/search.ts` — 新增导出: excerpt
- **[ast-export-added]** `packages/web/tool-web/src/search.ts` — 新增导出: modelSource
- **[ast-export-added]** `packages/client/ui-primitives/src/markdown/render.tsx` — 新增导出: DESKTOP_MEDIA_ROUTES
- **[ast-export-added]** `packages/client/ui-primitives/src/markdown/render.tsx` — 新增导出: imageLoads
- **[ast-export-added]** `packages/client/ui-primitives/src/markdown/render.tsx` — 新增导出: nextImageLoad
- **[ast-export-added]** `packages/client/ui-primitives/src/markdown/render.tsx` — 新增导出: freshImageUrl
- **[ast-export-added]** `packages/client/ui-primitives/src/markdown/render.tsx` — 新增导出: imageProps
- **[ast-export-added]** `packages/client/ui-primitives/src/markdown/render.tsx` — 新增导出: localFileName
- **[ast-export-added]** `packages/client/ui-primitives/src/markdown/render.tsx` — 新增导出: urlFileName
- **[ast-export-added]** `packages/client/ui-primitives/src/icons/artwork.ts` — 新增导出: IconArtwork
- **[ast-export-added]** `packages/client/ui-primitives/src/icons/artwork.ts` — 新增导出: ICON_ARTWORK
- **[ast-export-added]** `packages/client/ui-primitives/src/icons/artwork.ts` — 新增导出: IconGlyph
- **[ast-export-added]** `packages/client/ui-primitives/src/icons/artwork.ts` — 新增导出: IconWeight
- **[ast-export-added]** `packages/client/ui-primitives/src/icons/artwork.ts` — 新增导出: STROKES
- **[ast-export-added]** `packages/client/ui-primitives/src/icons/artwork.ts` — 新增导出: iconSymbolId
- **[ast-export-added]** `packages/client/ui-primitives/src/icons/artwork.ts` — 新增导出: IconSymbolId
- **[ast-export-added]** `packages/client/ui-primitives/src/icons/artwork.ts` — 新增导出: ICON_SYMBOLS
- **[ast-export-added]** `packages/experimental/cua/src/application-access.ts` — 新增导出: ApplicationAuthorizationResult
- **[ast-export-added]** `packages/experimental/cua/src/application-access.ts` — 新增导出: AccessOptions
- **[ast-export-added]** `packages/experimental/cua/src/application-access.ts` — 新增导出: ClientSelections
- **[ast-export-added]** `packages/experimental/cua/src/application-access.ts` — 新增导出: ActiveOperation
- **[ast-export-added]** `packages/experimental/cua/src/application-access.ts` — 新增导出: ApplicationAccess
- **[ast-export-added]** `packages/experimental/cua/src/application-access.ts` — 新增导出: blockedApps
- **[ast-export-added]** `packages/experimental/cua/src/application-access.ts` — 新增导出: permitted
- **[ast-export-added]** `packages/experimental/cua/src/application-access.ts` — 新增导出: selections
- **[ast-export-added]** `packages/experimental/cua/src/access-types.ts` — 新增导出: CuaSystemPermission
- **[ast-export-added]** `packages/experimental/cua/src/access-types.ts` — 新增导出: CuaPermissionProcess
- **[ast-export-added]** `packages/experimental/cua/src/access-types.ts` — 新增导出: CuaSystemPermissionState
- **[ast-export-added]** `packages/experimental/cua/src/access-types.ts` — 新增导出: CuaApplicationState
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/viewer-states.ts` — 新增导出: ViewerState
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/viewer-states.ts` — 新增导出: ViewerStateReach
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/viewer-states.ts` — 新增导出: VIEWER_STATE_REACH
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/identity/types.ts` — 新增导出: IdentityTriple
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/identity/types.ts` — 新增导出: IdentityActor
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/identity/types.ts` — 新增导出: IdentityAuthorizationRequest
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/identity/types.ts` — 新增导出: IdentityExchangeRequest
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/identity/types.ts` — 新增导出: IdentityProvider
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/identity/keys.ts` — 新增导出: identityKeyOf
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/identity/keys.ts` — 新增导出: identityFromKey
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/identity/keys.ts` — 新增导出: IDENTITY_TENANT_PLACEHOLDER
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/identity/keys.ts` — 新增导出: normalizeIdentity
- **[ast-export-added]** `packages/experimental/liveshare-protocol/src/identity/keys.ts` — 新增导出: requireIdentityTenant
- **[ast-export-added]** `packages/experimental/liveshare/src/host/relay-authority.ts` — 新增导出: RelayAuthorityRead
- **[ast-export-added]** `packages/experimental/liveshare/src/host/relay-authority.ts` — 新增导出: requesterStillAdmitted
- **[ast-export-added]** `packages/experimental/liveshare/src/host/relay-authority.ts` — 新增导出: RelayAuthorityDeps
- **[ast-export-added]** `packages/experimental/liveshare/src/host/relay-authority.ts` — 新增导出: RelayAuthority
- **[ast-export-added]** `packages/experimental/liveshare/src/host/relay-authority.ts` — 新增导出: sameStringSet
- **[ast-export-added]** `packages/experimental/liveshare/src/host/relay-authority.ts` — 新增导出: admissionNarrowed
- **[ast-export-added]** `packages/experimental/liveshare/src/host/relay-authority.ts` — 新增导出: wasOpen
- **[ast-export-added]** `packages/experimental/liveshare/src/host/relay-authority.ts` — 新增导出: isOpen
- **[ast-export-added]** `packages/experimental/liveshare/src/host/relay-authority.ts` — 新增导出: relayRequests
- **[ast-export-added]** `packages/experimental/liveshare/src/host/relay-authority.ts` — 新增导出: relayUrl
- **[ast-export-added]** `packages/experimental/liveshare/src/host/relay-authority.ts` — 新增导出: relayAuthorityRead
- **[ast-export-added]** `packages/experimental/liveshare/src/host/relay-authority.ts` — 新增导出: accessState
- **[ast-export-added]** `packages/experimental/liveshare/src/host/relay-authority.ts` — 新增导出: accessSummaryForAcl
- **[ast-export-added]** `packages/experimental/liveshare/src/host/relay-authority.ts` — 新增导出: fallbackKey
- **[ast-export-added]** `packages/experimental/liveshare/src/host/relay-authority.ts` — 新增导出: identityForGrantedSubject
- **[ast-export-added]** `packages/experimental/liveshare/src/host/relay-authority.ts` — 新增导出: createRelayAuthority
- **[ast-export-added]** `packages/experimental/liveshare/src/host/relay-authority.ts` — 新增导出: relayAccess
- **[ast-export-added]** `packages/experimental/liveshare/src/host/relay-authority.ts` — 新增导出: relayGenerations
- **[ast-export-added]** `packages/experimental/liveshare/src/host/relay-authority.ts` — 新增导出: generationOf
- **[ast-export-added]** `packages/experimental/liveshare/src/host/relay-authority.ts` — 新增导出: viewerAdmitted
- **[ast-export-added]** `packages/experimental/liveshare/src/host/relay-authority.ts` — 新增导出: forgetRelayAccess
- **[ast-export-added]** `packages/experimental/liveshare/src/host/relay-authority.ts` — 新增导出: invalidateRelayAccess
- **[ast-export-added]** `packages/experimental/liveshare/src/host/relay-authority.ts` — 新增导出: heldAuthority
- **[ast-export-added]** `packages/experimental/liveshare/src/host/relay-authority.ts` — 新增导出: applyRelayAccess
- **[ast-export-added]** `packages/experimental/liveshare/src/host/relay-authority.ts` — 新增导出: nextAllowsFork
- **[ast-export-added]** `packages/experimental/liveshare/src/host/relay-authority.ts` — 新增导出: readRelayAuthority
- **[ast-export-added]** `packages/experimental/liveshare/src/host/relay-authority.ts` — 新增导出: refreshRelayAccess
- **[ast-export-added]** `packages/experimental/liveshare/src/host/relay-authority.ts` — 新增导出: drivableModeOf
- **[ast-export-added]** `packages/experimental/liveshare/src/host/relay-authority.ts` — 新增导出: reported
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: MAX_EXPIRY_TIMER_MS
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: PENDING_REMOVAL_RETRY_MS
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: PENDING_REMOVAL_MAX_WAIT_MS
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: PendingShare
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: ShareRegistrationSource
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: TunnelProcessCommand
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: gatewayWorkerCommand
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: tunnelCommand
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: TunnelSupervisionDeps
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: TunnelSupervision
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: bundleVersion
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: refreshedShareTitle
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: SessionLookup
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: SessionTitleLookup
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: describeTransportFailure
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: createTunnelSupervision
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: forwardedRequests
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: forwardedTasks
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: expiryTimers
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: pendingRemovalTimer
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: pendingRemovalWait
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: dshVersion
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: ensureWorker
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: waitForShare
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: scheduleShareExpiry
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: armed
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: armShareExpiry
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: clearShareExpiry
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: deleteRelayRow
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: flushPendingRemovals
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: armPendingRemovalRetry
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: reconcileShareTitles
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: titles
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: readerFacingOwnerName
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: ownerIdentityRow
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: shareSpec
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: ownerCredential
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: reregisterOfflineShares
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: relayFacts
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: factsFor
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: credentialForRelay
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: claimableCredentialForRelay
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: registrableCredentialForRelay
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: adoptReportedCredentialHorizon
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: probeRelayCredentialSupport
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: presented
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: claimOwnedShares
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: skipped
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: ownerIdentityStatus
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: httpReachable
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: probeRelayConnectivity
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: probeRegistration
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: shareId
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: probeRelayPublish
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: WriteAccessTrigger
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: WriteAccessRefusal
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: WriteAccessOutcome
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: SourceAccessApplier
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: LiveAgent
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: AgentLookupProvider
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: activateSession
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: typert
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: forkToolPaths
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: SourceAccessDeps
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: SourceAccess
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: createSourceAccess
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: activeSharesOf
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: refusedSourceAccess
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: sessionNeedsWrite
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: sessionWritable
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: sourceAccessUsable
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: applySourceAccess
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: liveContext
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: scopeKey
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: granted
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: needsWrite
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: concurrent
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: registrationFailure
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: sourceConfinementRefusal
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: refusalOf
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: cancelChildTurns
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: childToolAuthorized
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: cancelShareTurn
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: reconcileSessionAccess
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: prepareSourceSession
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: preparingSources
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: prepareSourceForReader
- **[ast-export-added]** `packages/experimental/liveshare/src/host/source-access.ts` — 新增导出: confinement
- **[ast-export-added]** `packages/experimental/liveshare/src/host/owner-types.ts` — 新增导出: ShareAccessSummary
- **[ast-export-added]** `packages/experimental/liveshare/src/host/owner-types.ts` — 新增导出: OwnerShare
- **[ast-export-added]** `packages/experimental/cua/src/application-types.ts` — 新增导出: CuaApplicationId
- **[ast-export-added]** `packages/experimental/cua/src/application-types.ts` — 新增导出: CuaApplicationGrant
- **[config-field-added]** `config:@deepseek-ai/dsh-client-ui-trajectory` — 新增配置字段: maxResultsPerSession
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-client-ui-forge` — 新增配置字段: gitCommand
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-client-ui-forge` — 新增配置字段: gitTimeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-client-ui-forge` — 新增配置字段: graceMs
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-client-ui-forge` — 新增配置字段: maxOutputBytes
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-client-ui-forge` — 新增配置字段: readinessTimeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-client-ui-forge` — 新增配置字段: maxBranches
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-client-ui-forge` — 新增配置字段: worktreePrefix
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-client-ui-forge` — 新增配置字段: maxDiffBytes
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-client-ui-forge` — 新增配置字段: maxUntrackedFiles
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-client-ui-forge` — 新增配置字段: maxCachedDiffBytes
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-forge` — 新增配置字段: activeIntervalMs
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-forge` — 新增配置字段: idleIntervalMs
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-forge` — 新增配置字段: maxBackoffMs
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-forge` — 新增配置字段: fetchTimeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-forge-github` — 新增配置字段: ghCommand
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-forge-github` — 新增配置字段: hosts
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-forge-github` — 新增配置字段: timeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-forge-github` — 新增配置字段: maxOutputBytes
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-forge-session` — 新增配置字段: discoveryTimeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-subagent-oar` — 新增配置字段: runtime
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-subagent-oar` — 新增配置字段: providerName
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-subagent-oar` — 新增配置字段: model
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-subagent-oar` — 新增配置字段: effort
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-subagent-oar` — 新增配置字段: env
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-subagent-oar` — 新增配置字段: launchArgs
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-subagent-oar` — 新增配置字段: timeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-tool-subagent-oar` — 新增配置字段: providers
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-tool-subagent-oar` — 新增配置字段: toolName
- **[config-field-added]** `config:@deepseek-ai/dsh-headless` — 新增配置字段: permissionMode
- **[config-field-added]** `config:@deepseek-ai/dsh-headless` — 新增配置字段: approvalPolicy
- **[config-field-added]** `config:@deepseek-ai/dsh-llm-replay` — 新增配置字段: badge
- **[config-field-added]** `config:@deepseek-ai/dsh-plugin-manager` — 新增配置字段: gitTransportTimeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-plugin-manager` — 新增配置字段: versionListLimit
- **[config-field-added]** `config:@deepseek-ai/dsh-plugin-manager` — 新增配置字段: versionLookupConcurrency
- **[config-field-added]** `config:@deepseek-ai/dsh-plugin-manager` — 新增配置字段: detailMaxBytes
- **[config-field-added]** `config:@deepseek-ai/dsh-plugin-manager` — 新增配置字段: detailImageMaxBytes
- **[config-field-added]** `config:@deepseek-ai/dsh-plugin-manager` — 新增配置字段: detailFetchTimeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-plugin-manager` — 新增配置字段: detailNpmFileSources
- **[config-field-added]** `config:@deepseek-ai/dsh-plugin-market` — 新增配置字段: detailMaxBytes
- **[config-field-added]** `config:@deepseek-ai/dsh-plugin-market` — 新增配置字段: detailImageMaxBytes
- **[config-field-added]** `config:@deepseek-ai/dsh-plugin-market` — 新增配置字段: detailRepositoryMaxBytes
- **[config-field-added]** `config:@deepseek-ai/dsh-plugin-market` — 新增配置字段: detailCacheMaxBytes
- **[config-field-added]** `config:@deepseek-ai/dsh-plugin-market` — 新增配置字段: detailCacheDir
- **[config-field-added]** `config:@deepseek-ai/dsh-plugin-market` — 新增配置字段: detailGitTimeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-plugin-market` — 新增配置字段: detailNpmFileSources
- **[config-field-added]** `config:@deepseek-ai/dsh-plugin-market` — 新增配置字段: detailGitlabHosts
- **[config-field-added]** `config:@deepseek-ai/dsh-ptc-runtime-node` — 新增配置字段: scriptPersistence
- **[config-field-added]** `config:@deepseek-ai/dsh-sandbox-policy` — 新增配置字段: additionalWritableRoots
- **[config-field-added]** `config:@deepseek-ai/dsh-tool-executor-ptc` — 新增配置字段: maxParallelSubCalls
- **[config-field-added]** `config:@deepseek-ai/dsh-tool-jobs` — 新增配置字段: inlineOutputBytes
- **[config-field-added]** `config:@deepseek-ai/dsh-tool-subagent` — 新增配置字段: modelSelection
- **[config-field-added]** `config:@deepseek-ai/dsh-tool-subagent` — 新增配置字段: modelDiscovery
- **[config-field-added]** `config:@deepseek-ai/dsh-tool-web` — 新增配置字段: searchSummaryMaxChars
