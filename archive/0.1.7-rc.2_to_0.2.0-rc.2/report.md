# DSH 插件 API 面比对：`dsh-v0.1.7-rc.2` → `dsh-v0.2.0-rc.2`

> 生成于 2026-10-04T02:31:36.2941230Z · 工具 dsh-api-watch v1（启发式， breaking 结论建议复核 diff）

| 级别 | 数量 |
|---|---|
| breaking | 6 |
| warning | 36 |
| info | 101 |
| ★ 与我相关 | 1 |

## breaking

- **[ast-signature-changed]** `packages/host/product-telemetry-otel` — 签名变化: ProductTelemetryRecord
    旧: export interface ProductTelemetryRecord { /** Product/DA-owned event name. */ eventName: string /** Human-readable summary; never a prompt, response, credential, or file contents. */ body: string /** Event occurrence time in Unix milliseconds. Observation time is assigned on enqueue. */ timestamp: number /** OTel severity; omitted values use INFO. */ severityNumber?: SeverityNumber /** Business fields selected by the caller; no automatic device or account identity. */ attributes?: Record<string, ProductTelemetryScalar | Record<string, ProductTelemetryScalar>> }
    新: export type ProductTelemetryRecord = OTelEventRecord
- **[ast-export-removed]** `packages/session/session-telemetry-otel` — 导出（含 re-export）删除: ledger（原声明于 packages/session/session-telemetry-otel/src/index.ts）
- **[ast-signature-changed]** `packages/client/ui-primitives/src/Input.tsx` — 签名变化: Input
    旧: function({ icon, className, ...rest }:{ icon?: ReactNode className?: string } & InputHTMLAttributes<HTMLInputElement>)
    新: var
- **[ast-export-removed]** `packages/client/ui-primitives/src/Tooltip.tsx` — 导出（含 re-export）删除: showAfterHoverDelay（原声明于 packages/client/ui-primitives/src/Tooltip.tsx）
- **[config-field-type-changed]** `config:@deepseek-ai/dsh-session-log-deepseek` — 配置字段类型变化: enabled: ?boolean -> Volatile<boolean>
- **[config-field-type-changed]** `config:@deepseek-ai/dsh-session-log-deepseek` — 配置字段类型变化: maxBytes: ?number -> number

## warning

- **[exports-map-changed]** `packages/client/ui-schedule/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/context/time-context/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/interaction/user-questions/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/schedule/schedule/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[doc-major-rewrite]** `docs/subsystems/user-questions.md` — 行数 141 -> 250（77%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/user-questions.zh.md` — 行数 141 -> 250（77%），可能存在行为级变更，建议人工复核
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.1.7-rc.2/schedule-optional-bundle/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.1.7-rc.2/schedule-optional-bundle/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.1.7-rc.2/transcript-view-legacy-normal/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.1.7-rc.2/transcript-view-legacy-normal/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[ast-signature-changed]** `packages/api/gateway` — 签名变化: RemoteEventClient
    旧: interface RemoteEventClient { readonly id: RemoteEventClientId readonly queue: RemoteEventQueue readonly deliveries: Map<RemoteEventId, PendingRemoteEvent> }
    新: interface RemoteEventClient { readonly id: RemoteEventClientId readonly queue: RemoteEventQueue readonly signal: AbortSignal readonly deliveries: Map<RemoteEventId, PendingRemoteEvent> }
- **[ast-signature-changed]** `packages/host/product-telemetry-otel` — 签名变化: ProductTelemetryScalar
    旧: export type ProductTelemetryScalar = string | number | boolean
    新: export type ProductTelemetryScalar = OTelEventScalar
- **[ast-signature-changed]** `packages/ptc-runtime/ptc-runtime-node` — 签名变化: transport
    旧: var
    新: var:JsonChannel
- **[ast-signature-changed]** `packages/experimental/webworker-runtime/src/worker-host.ts` — 签名变化: exporter
    旧: var
    新: var:LogExporter
- **[ast-signature-changed]** `packages/interaction/user-questions` — 签名变化: reply
    旧: var:unknown
    新: var
- **[ast-signature-changed]** `packages/session/session-telemetry-otel` — 签名变化: SEVERITY
    旧: var:Record<SessionTelemetrySeverity, { severityNumber: SeverityNumber; severityText: string }>
    新: var:Record<SessionTelemetrySeverity, SeverityNumber>
- **[ast-signature-changed]** `packages/session/session-telemetry` — 签名变化: SessionTelemetryRecord
    旧: export interface SessionTelemetryRecord { /** Ledger (session-log mirror) or ops (operational signal) channel; backends keep the two under separate instrumentation scopes. */ channel: 'ledger' | 'ops' /** Unix epoch milliseconds — the source event's append time for ledger records, the emission time for ops records. */ time: number /** Pre-mapped alerting severity; see {@link SessionTelemetrySeverity}. */ severity: SessionTelemetrySeverity /** * Identity attributes, deliberately minimal: ledger records carry * `session.id`, `session.format_version`, `event.type`, `event.seq`, plus optional * `session.cwd` / `session.parent_id`; a seeded Session also carries * `session.seed_length` from its exact inherited event count; * ops records carry `telemetry.op`, `session.id`, and (for `agent-error`) * `agent.id`, `turn`, `step`, `error.name`. Anything recoverable from the * body is intentionally NOT duplicated here. */ attributes: Record<string, string | number> /** * The complete payload: a deep copy of the session event's `data` for * ledger records (JSON-serializable by `Session.append`'s own * validation), or the op payload for ops records. Never mutated after * handoff. */ body: unknown }
    新: export interface SessionTelemetryRecord { /** Canonical envelope without data; body carries the separately redacted payload. Absent for operational records. */ sourceEvent?: { sessionId: SessionId; envelope: Omit<SessionEvent, 'data'> } /** Ledger (session-log mirror) or ops (operational signal) channel; backends keep the two under separate instrumentation scopes. */ channel: 'ledger' | 'ops' /** Unix epoch milliseconds — the source event's append time for ledger records, the emission time for ops records. */ time: number /** Pre-mapped alerting severity; see {@link SessionTelemetrySeverity}. */ severity: SessionTelemetrySeverity /** * Identity attributes, deliberately minimal: ledger records carry * `session.id`, `session.format_version`, `event.type`, `event.seq`, plus optional * `session.cwd` / `session.parent_id`; a seeded Session also carries * `session.seed_length` from its exact inherited event count; * ops records carry `telemetry.op`, `session.id`, and (for `agent-error`) * `agent.id`, `turn`, `step`, `error.name`. Anything recoverable from the * body is intentionally NOT duplicated here. */ attributes: Record<string, string | number> /** * The complete payload: a deep copy of the session event's `data` for * ledger records (JSON-serializable by `Session.append`'s own * validation), or the op payload for ops records. Never mutated after * handoff. */ body: unknown }
- **[ast-signature-changed]** `packages/api/gateway/src/types.ts` — 签名变化: TypertGateway
    旧: export interface TypertGateway { /** Carrier adapter shared by WebSocket and in-process transports. */ readonly wireStream: TypertGatewayWireStream /** * Register the application-selected forwarded-event source. * @param source - stream factory installed by the Remote assembly. * @param host - stable Host facts included in each Client generation's opening frame. * @returns disposer removing this exact source and cancelling its active streams. */ registerRemoteEvents( source: TypertRemoteEventSource, host: RemoteEventHostInfo, ): () => Promise<void> /** * Invoke one live Remote method without assuming a carrier or response envelope. * @param request - decoded endpoint and named wire arguments. * @returns the business result without output decoding. * @throws {@link TypertGatewayError} for dispatch, provider, or boundary failures; lookup-policy and business errors retain identity. */ invoke(request: InvokeRemoteRequest): Promise<unknown> /** * Open one live stream Remote method without assuming a physical carrier. * @param request - decoded endpoint, named wire arguments, and the Client uplink when the carrier has one. * @returns a cancellation-aware iterable over the business results. */ stream(request: InvokeRemoteRequest): Promise<AsyncIterable<unknown>> }
    新: export interface TypertGateway { /** Carrier adapter shared by WebSocket and in-process transports. */ readonly wireStream: TypertGatewayWireStream /** * Check for an active Client event stream. * @returns whether a stream is open and has not been cancelled. */ hasLiveClient(): boolean /** * Register the application-selected forwarded-event source. * @param source - stream factory installed by the Remote assembly. * @param host - stable Host facts included in each Client generation's opening frame. * @returns disposer removing this exact source and cancelling its active streams. */ registerRemoteEvents( source: TypertRemoteEventSource, host: RemoteEventHostInfo, ): () => Promise<void> /** * Invoke one live Remote method without assuming a carrier or response envelope. * @param request - decoded endpoint and named wire arguments. * @returns the business result without output decoding. * @throws {@link TypertGatewayError} for dispatch, provider, or boundary failures; lookup-policy and business errors retain identity. */ invoke(request: InvokeRemoteRequest): Promise<unknown> /** * Open one live stream Remote method without assuming a physical carrier. * @param request - decoded endpoint, named wire arguments, and the Client uplink when the carrier has one. * @returns a cancellation-aware iterable over the business results. */ stream(request: InvokeRemoteRequest): Promise<AsyncIterable<unknown>> }
- **[ast-signature-changed]** `packages/client/ui-chat/src/chat-settings.ts` — 签名变化: ChatSettings
    旧: export interface ChatSettings { /** Work-details preference; legacy values are accepted only from existing saved settings. */ transcriptView: TranscriptViewMode | typeof LEGACY_TRANSCRIPT_VIEW_MODE | typeof LEGACY_EXPANDED_TRANSCRIPT_VIEW_MODE /** Detail level for composer statistics and completed-Turn usage. */ performanceUsage: PerformanceUsageMode /** Default destination for Chat HTTP(S) links. */ linkOpening: LinkOpening }
    新: export interface ChatSettings { /** Work-details preference; absence uses the client default, and legacy saved values remain accepted. */ transcriptView?: TranscriptViewMode | typeof LEGACY_TRANSCRIPT_VIEW_MODE | typeof LEGACY_EXPANDED_TRANSCRIPT_VIEW_MODE | null /** Detail level for composer statistics and completed-Turn usage. */ performanceUsage: PerformanceUsageMode /** Default destination for Chat HTTP(S) links. */ linkOpening: LinkOpening }
- **[ast-signature-changed]** `packages/client/ui-primitives/src/DisclosureRow.tsx` — 签名变化: DisclosureRowProps
    旧: export interface DisclosureRowProps { icon: ReactNode title: string open: boolean expandable: boolean onToggle: () => void /** Animate the title while its owning operation is running. */ running?: boolean | undefined /** Makes the complete title row the disclosure target. */ expandOnRowClick?: boolean | undefined /** Replaces the collapsed icon with a chevron while the row is hovered. */ previewChevron?: boolean | undefined /** Keeps `collapsedContent` inline while open. */ keepContentWhenOpen?: boolean | undefined collapsedContent?: ReactNode children?: ReactNode className?: string | undefined rowClassName?: string | undefined leadingClassName?: string | undefined chevronClassName?: string | undefined titleClassName?: string | undefined }
    新: export interface DisclosureRowProps { icon: ReactNode title: string open: boolean expandable: boolean onToggle: () => void /** Animate the complete header while its owning operation is running. */ running?: boolean | undefined /** Makes the complete title row the disclosure target. */ expandOnRowClick?: boolean | undefined /** Replaces the collapsed icon with a chevron while the row is hovered. */ previewChevron?: boolean | undefined /** Keeps `collapsedContent` inline while open. */ keepContentWhenOpen?: boolean | undefined collapsedContent?: ReactNode children?: ReactNode className?: string | undefined rowClassName?: string | undefined /** Sizing class for the header text area, beside the leading icon. */ contentClassName?: string | undefined /** Layout class shared by the header text and its decorative copy. */ contentLayoutClassName?: string | undefined leadingClassName?: string | undefined chevronClassName?: string | undefined titleClassName?: string | undefined }
- **[ast-signature-changed]** `packages/client/ui-primitives/src/TextShimmer.tsx` — 签名变化: TextShimmerProps
    旧: export interface TextShimmerProps { children: string active: boolean className?: string | undefined }
    新: export interface TextShimmerProps { /** Text or presentational children with text in nested TextShimmer instances. No effects or element ids. */ children: ReactNode /** Whether to animate; nested instances share the containing row's activity. */ active?: boolean | undefined className?: string | undefined /** Layout class applied equally to the base and decorative content. */ contentClassName?: string | undefined }
- **[ast-signature-changed]** `packages/client/ui-primitives/src/useAnchoredPosition.ts` — 签名变化: AnchoredPositionOptions
    旧: export interface AnchoredPositionOptions { /** Whether the floating element is mounted and should track its anchor. */ open: boolean /** The element the panel is placed from. */ anchorRef: RefObject<HTMLElement | null> /** The floating element, measured so the clamp uses real dimensions. */ panelRef: RefObject<HTMLElement | null> /** Which anchor edge the panel hangs from: below it (`bottom`, the default) or above it (`top`). */ side?: 'top' | 'bottom' /** Which anchor edge the panel lines up with: its left edge (`start`, the default) or its right edge (`end`). */ align?: 'start' | 'end' /** Distance kept between the anchor edge named by `side` and the panel. */ gap: number /** Distance kept between the panel and each viewport edge. */ margin: number }
    新: export interface AnchoredPositionOptions { /** Whether the floating element is mounted and should track its anchor. */ open: boolean /** The element the panel is placed from. */ anchorRef: RefObject<HTMLElement | null> /** The floating element, measured so the clamp uses real dimensions. */ panelRef: RefObject<HTMLElement | null> /** Which anchor edge the panel hangs from: below it (`bottom`, the default) or above it (`top`). */ side?: 'top' | 'bottom' /** Which anchor edge the panel lines up with: its left edge (`start`, the default) or its right edge (`end`). */ align?: 'start' | 'end' /** Distance kept between the anchor edge named by `side` and the panel. */ gap: number /** Distance kept between the panel and each viewport edge; the frame's overlay inset widens the top margin. */ margin: number }
- **[ast-signature-changed]** `packages/client/ui-primitives/src/Tooltip.tsx` — 签名变化: AnchorProps
    旧: interface AnchorProps { ref?: Ref<HTMLElement> | undefined onMouseEnter?: MouseEventHandler | undefined onMouseLeave?: MouseEventHandler | undefined onClick?: MouseEventHandler | undefined onFocus?: FocusEventHandler | undefined onBlur?: FocusEventHandler | undefined }
    新: interface AnchorProps { 'aria-describedby'?: string | undefined ref?: Ref<HTMLElement> | undefined onMouseEnter?: MouseEventHandler | undefined onMouseLeave?: MouseEventHandler | undefined onClick?: MouseEventHandler | undefined onFocus?: FocusEventHandler | undefined onBlur?: FocusEventHandler | undefined }
- **[ast-signature-changed]** `packages/client/ui-primitives/src/Tooltip.tsx` — 签名变化: Tooltip
    旧: function({ label, shortcutKeys, side = 'right', align = 'center', delayMs = 0, gap = 8, disabled = false, portal = false, maxWidth, children }:{ label: TooltipLabel; shortcutKeys?: readonly string[] | undefined; side?: TooltipSide; align?: 'center' | 'end'; delayMs?: number; gap?: number; disabled?: boolean; portal?: boolean; maxWidth?: number; children: ReactElement<AnchorProps> })
    新: function({ label, shortcutKeys, side = 'right', align = 'center', delayMs = 0, focusDelayMs = 0, gap = 8, disabled = false, portal = false, maxWidth, openOnClick = false, children }:{ label: TooltipLabel; shortcutKeys?: readonly string[] | undefined; side?: TooltipSide; align?: 'center' | 'end'; delayMs?: number; focusDelayMs?: number; gap?: number; disabled?: boolean; portal?: boolean; maxWidth?: number; openOnClick?: boolean; children: ReactElement<AnchorProps> })
- **[ast-signature-changed]** `packages/experimental/webworker-runtime/src/transport/frames.ts` — 签名变化: TunnelOutboundFrame
    旧: export type TunnelOutboundFrame = | TunnelResponseFrame | TunnelResponseHeadFrame | TunnelResponseChunkFrame | TunnelResponseEndFrame | TunnelResponseErrorFrame | TunnelStreamItemFrame | TunnelStreamEndFrame | TunnelStreamErrorFrame
    新: export type TunnelOutboundFrame = | TunnelViewTextFrame | TunnelResponseFrame | TunnelResponseHeadFrame | TunnelResponseChunkFrame | TunnelResponseEndFrame | TunnelResponseErrorFrame | TunnelStreamItemFrame | TunnelStreamEndFrame | TunnelStreamErrorFrame
- **[ast-signature-changed]** `packages/experimental/webworker-runtime/src/node/globals/process.ts` — 签名变化: ProcessShimOptions
    旧: export interface ProcessShimOptions { /** Virtual root reported by `cwd()`. */ readonly cwd: string /** Environment the tree reads; `DSH_HOME` belongs here. */ readonly env: Readonly<Record<string, string>> /** Argument vector reported to the tree. */ readonly argv?: readonly string[] }
    新: export interface ProcessShimOptions { /** Virtual root reported by `cwd()`. */ readonly cwd: string /** Environment the tree reads; `DSH_HOME` belongs here. */ readonly env: Readonly<Record<string, string>> /** Argument vector reported to the tree; defaults to the executable alone, since no entry script exists. */ readonly argv?: readonly string[] }
- **[ast-signature-changed]** `packages/extensions/cordis-host-runner/src/types.ts` — 签名变化: CordisInspectResolveAck
    旧: export interface CordisInspectResolveAck { /** False for unknown, cancelled, stale, or late answers. */ accepted: boolean }
    新: export interface CordisInspectResolveAck { /** * True only for a valid success that settles the query; * false for retained failures and unknown, timed out, cancelled, or late answers. */ accepted: boolean }
- **[ast-signature-changed]** `packages/extensions/cordis-host-runner/src/inspect-registry.ts` — 签名变化: PendingClientQuery
    旧: interface PendingClientQuery { request: CordisInspectQueryRequest method: CordisInspectMethodManifest settle(resolution: CordisInspectQueryResolution): void }
    新: interface PendingClientQuery { request: CordisInspectQueryRequest method: CordisInspectMethodManifest failure?: string settle(resolution: CordisInspectQueryResolution): void }
- **[ast-signature-changed]** `packages/extensions/cordis-host-runner/src/inspect-registry.ts` — 签名变化: CordisInspectRegistryService
    旧: class(ctx:Context)
    新: class(ctx:Context,clientQueryTimeoutMs:number)
- **[ast-signature-changed]** `packages/interaction/user-questions/src/types.ts` — 签名变化: AskUserQuestionRequestEvent
    旧: export interface AskUserQuestionRequestEvent { /** Questions to display. */ questions: AskUserQuestionItem[] /** Agent identity projected to the corresponding Client Context in transit. */ agent?: Agent /** Cancellation lifetime of the pending request. */ signal?: AbortSignal }
    新: export interface AskUserQuestionRequestEvent { /** Questions to display. */ questions: AskUserQuestionItem[] /** Agent identity projected to the corresponding Client Context in transit. */ agent?: Agent /** Cancellation lifetime of the pending request. */ signal?: AbortSignal /** * Tool call the Client card is keyed by. Timed answerers attach to the * business wait stream before starting their local countdown. */ wait?: { /** Tool call the Client card is keyed by. */ callId: ToolCallId /** True for a foreground wait that requires a Client claim; absent for indefinite waits. */ timed?: boolean } }
- **[ast-signature-changed]** `packages/client/ui-primitives/src/input-modality.ts` — 签名变化: pointer
    旧: function(location:SourceLocation)
    新: var
- **[ast-signature-changed]** `packages/util/native-command/src/runner.ts` — 签名变化: NativeCommandRunner
    旧: export type NativeCommandRunner = ( command: string, args: readonly string[], signal: AbortSignal, ) => Promise<{ stdout: string; stderr: string }>
    新: export type NativeCommandRunner = ( command: string, args: readonly string[], signal: AbortSignal, window: 'hidden' | 'visible', ) => Promise<{ stdout: string; stderr: string }>
- **[ast-signature-changed]** `packages/web/web-search-deepseek/src/provider.ts` — 签名变化: DeepSeekSearchProviderOptions
    旧: export interface DeepSeekSearchProviderOptions { /** Literal DeepSeek API key; when present it wins over {@link resolveApiKey}. */ apiKey?: string /** Resolve the current DeepSeek API key for one search operation. */ resolveApiKey?: () => Promise<string | undefined> /** Credential reference named by missing-credential diagnostics. */ apiKeyEnv?: CredentialRef /** Endpoint base; `/messages` is appended. */ baseURL: string /** Anthropic-format model name. */ model: string /** `anthropic-version` header value. */ apiVersion: string /** Upper bound on generated tokens for the Messages request. */ maxTokens: number /** Maximum `web_search` server-tool uses per request. */ maxUses: number /** * Record the exact secret-free request immediately before dispatch. A throw * prevents dispatch so model-visible auxiliary input cannot escape logging. */ recordRequest?: (request: DeepSeekSearchLlmRequest) => void }
    新: export interface DeepSeekSearchProviderOptions { /** * Resolve the DeepSeek account token for one search endpoint. A token takes * precedence over every API key and is sent only as `x-dsh-auth-token`; * `undefined` selects API-key authentication. */ resolveAccountToken?: (endpoint: string) => Promise<string | undefined> /** Literal DeepSeek API key; when present it wins over {@link resolveApiKey}. */ apiKey?: string /** Resolve the current DeepSeek API key for one search operation. */ resolveApiKey?: () => Promise<string | undefined> /** Credential reference named by missing-credential diagnostics. */ apiKeyEnv?: CredentialRef /** Endpoint base; `/messages` is appended. */ baseURL: string /** Anthropic-format model name. */ model: string /** `anthropic-version` header value. */ apiVersion: string /** Upper bound on generated tokens for the Messages request. */ maxTokens: number /** Maximum `web_search` server-tool uses per request. */ maxUses: number /** * Record the exact secret-free request immediately before dispatch. A throw * prevents dispatch so model-visible auxiliary input cannot escape logging. */ recordRequest?: (request: DeepSeekSearchLlmRequest) => void }
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

- **[package-added]** `packages/client/product-analytics` — 新增包
- **[package-added]** `packages/client/ui-settings-session-log` — 新增包
- ★ **[package-added]** `packages/experimental/schedule-bundle` — 新增包
- **[package-added]** `packages/telemetry/otel` — 新增包
- **[doc-added]** `docs/persistence-changes/2026-09-21-user-question-reply.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-09-21-user-question-reply.zh.md` — 新增文档
- **[doc-added]** `docs/subsystems/otel.md` — 新增文档
- **[doc-added]** `docs/subsystems/otel.zh.md` — 新增文档
- **[config-scope-added]** `config:@deepseek-ai/dsh-client-product-analytics` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-tool-ask-user` — 新增可配置包
- **[ast-export-added]** `packages/boot/config-editor` — 新增导出: overridden
- **[ast-export-added]** `packages/client/product-analytics` — 新增导出: ProductAnalytics
- **[ast-export-added]** `packages/credentials/deepseek-account-platform` — 新增导出: deviceOsVersion
- **[ast-export-added]** `packages/host/product-telemetry-otel` — 新增导出: reporter
- **[ast-export-added]** `packages/interaction/user-questions` — 新增导出: TimedUserQuestionResult
- **[ast-export-added]** `packages/interaction/user-questions` — 新增导出: QueuedReply
- **[ast-export-added]** `packages/interaction/user-questions` — 新增导出: question
- **[ast-export-added]** `packages/interaction/user-questions` — 新增导出: answered
- **[ast-export-added]** `packages/interaction/user-questions` — 新增导出: wait
- **[ast-export-added]** `packages/telemetry/otel` — 新增导出: OTel
- **[ast-export-added]** `packages/web/web-search-deepseek` — 新增导出: ACCOUNT_PROVIDER
- **[ast-export-added]** `packages/client/ui-dockkit/src/components/FloatLayer.tsx` — 新增导出: caption
- **[ast-export-added]** `packages/client/ui-primitives/src/TextShimmer.tsx` — 新增导出: DecorativeCopy
- **[ast-export-added]** `packages/client/ui-primitives/src/TextShimmer.tsx` — 新增导出: TextContent
- **[ast-export-added]** `packages/client/ui-primitives/src/TextShimmer.tsx` — 新增导出: decorative
- **[ast-export-added]** `packages/client/ui-primitives/src/TextShimmer.tsx` — 新增导出: generated
- **[ast-export-added]** `packages/client/ui-primitives/src/MenuGroup.tsx` — 新增导出: MenuGroup
- **[ast-export-added]** `packages/client/ui-primitives/src/MenuGroup.tsx` — 新增导出: headingId
- **[ast-export-added]** `packages/client/ui-primitives/src/MenuGroup.tsx` — 新增导出: observeStickyMenuGroups
- **[ast-export-added]** `packages/client/ui-primitives/src/MenuGroup.tsx` — 新增导出: heading
- **[ast-export-added]** `packages/client/ui-primitives/src/MenuGroup.tsx` — 新增导出: stripObserver
- **[ast-export-added]** `packages/client/ui-primitives/src/MenuGroup.tsx` — 新增导出: viewportHeight
- **[ast-export-added]** `packages/client/ui-primitives/src/MenuGroup.tsx` — 新增导出: stuck
- **[ast-export-added]** `packages/client/ui-primitives/src/MenuGroup.tsx` — 新增导出: startObserver
- **[ast-export-added]** `packages/client/ui-primitives/src/MenuGroup.tsx` — 新增导出: sizeObserver
- **[ast-export-added]** `packages/client/ui-primitives/src/Tooltip.tsx` — 新增导出: showAfterDelay
- **[ast-export-added]** `packages/client/ui-primitives/src/input-modality.ts` — 新增导出: INPUT_MODALITY
- **[ast-export-added]** `packages/client/ui-primitives/src/input-modality.ts` — 新增导出: INPUT_MODALITY_ATTRIBUTE
- **[ast-export-added]** `packages/client/ui-primitives/src/input-modality.ts` — 新增导出: FOCUS_NAVIGATION
- **[ast-export-added]** `packages/client/ui-primitives/src/input-modality.ts` — 新增导出: pointerOwnsFocus
- **[ast-export-added]** `packages/client/ui-primitives/src/input-modality.ts` — 新增导出: keyFocusOrigin
- **[ast-export-added]** `packages/client/ui-primitives/src/input-modality.ts` — 新增导出: pointerModality
- **[ast-export-added]** `packages/core/session/src/repair.ts` — 新增导出: ToolCallRecovery
- **[ast-export-added]** `packages/experimental/webworker-runtime/src/transport/frames.ts` — 新增导出: TunnelViewTextFrame
- **[ast-export-added]** `packages/experimental/webworker-runtime/src/node/globals/process.ts` — 新增导出: EXEC_PATH
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
- **[ast-export-added]** `packages/interaction/user-questions/src/projection.ts` — 新增导出: questions
- **[ast-export-added]** `packages/interaction/user-questions/src/projection.ts` — 新增导出: answers
- **[ast-export-added]** `packages/interaction/user-questions/src/projection.ts` — 新增导出: foldUserQuestions
- **[ast-export-added]** `packages/interaction/user-questions/src/projection.ts` — 新增导出: userQuestionProjectionDefinition
- **[ast-export-added]** `packages/llm/llm-deepseek/src/upload-index.ts` — 新增导出: invalidated
- **[ast-export-added]** `packages/sandbox/sandbox-windows-acl/src/acl-skill.ts` — 新增导出: ACL_DIAGNOSIS_SKILL
- **[ast-export-added]** `packages/sandbox/sandbox-windows-acl/src/acl-skill.ts` — 新增导出: registerAclDiagnosisSkill
- **[ast-export-added]** `packages/schedule/schedule/src/domain.ts` — 新增导出: SCHEDULED_MESSAGE_FRAMING
- **[ast-export-added]** `packages/telemetry/otel/src/event-log.ts` — 新增导出: OTelEventScalar
- **[ast-export-added]** `packages/telemetry/otel/src/event-log.ts` — 新增导出: OTelEventRecord
- **[ast-export-added]** `packages/telemetry/otel/src/event-log.ts` — 新增导出: EventLogOptions
- **[ast-export-added]** `packages/telemetry/otel/src/event-log.ts` — 新增导出: EventLogReporter
- **[ast-export-added]** `packages/telemetry/otel/src/session-log.ts` — 新增导出: SESSION_LOG_MAX_REQUEST_BYTES
- **[ast-export-added]** `packages/telemetry/otel/src/session-log.ts` — 新增导出: SessionLogRecord
- **[ast-export-added]** `packages/telemetry/otel/src/session-log.ts` — 新增导出: SessionLogOptions
- **[ast-export-added]** `packages/telemetry/otel/src/session-log.ts` — 新增导出: resolveSessionLogLimits
- **[ast-export-added]** `packages/telemetry/otel/src/session-log.ts` — 新增导出: SessionLogProcessor
- **[ast-export-added]** `packages/telemetry/otel/src/session-log.ts` — 新增导出: SessionLogReporter
- **[ast-export-added]** `packages/web/web-search-deepseek/src/provider.ts` — 新增导出: SearchAuth
- **[ast-export-added]** `packages/web/web-search-deepseek/src/provider.ts` — 新增导出: resolveCredential
- **[ast-export-added]** `packages/web/web-search-deepseek/src/provider.ts` — 新增导出: accountRejectedError
- **[ast-export-added]** `packages/llm/llm-pi-ai/src/catalog.ts` — 新增导出: MISTRAL_COMPAT_GATE
- **[config-field-added]** `config:@deepseek-ai/dsh-client-product-analytics` — 新增配置字段: enabled
- **[config-field-added]** `config:@deepseek-ai/dsh-client-product-analytics` — 新增配置字段: appVersion
- **[config-field-added]** `config:@deepseek-ai/dsh-cordis-host-runner` — 新增配置字段: clientInspectTimeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-session-telemetry-otel` — 新增配置字段: maxRequestBytes
- **[config-field-added]** `config:@deepseek-ai/dsh-terminal-bash` — 新增配置字段: promptTailGraceMs
- **[config-field-added]** `config:@deepseek-ai/dsh-tool-ask-user` — 新增配置字段: mode
- **[config-field-added]** `config:@deepseek-ai/dsh-tool-ask-user` — 新增配置字段: timeout
