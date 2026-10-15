# DSH 插件 API 面比对：`dsh-v0.2.0-rc.1` → `dsh-v0.2.1-alpha.3`

> 生成于 2026-10-15T08:15:52.5457215Z · 工具 dsh-api-watch v1（启发式， breaking 结论建议复核 diff）

| 级别 | 数量 |
|---|---|
| breaking | 142 |
| warning | 522 |
| info | 970 |
| ★ 与我相关 | 14 |

## ★ 优先关注：与你插件相关的 breaking / warning

- **[package-removed]** `packages/experimental/schedule-bundle` — 包被移除或不再是独立包
- **[exports-map-changed]** `packages/skill/skill/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[package-removed]** `packages/skill/skill-badge` — 包被移除或不再是独立包
- **[exports-map-changed]** `packages/skill/skill-filesystem/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/skill/tool-skill/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[ast-signature-changed]** `packages/sdk/protocol/src/types.ts` — 签名变化: HarnessSdkRequestMap
    旧: export interface HarnessSdkRequestMap { 'initialize': { params: InitializeParams; result: InitializeResult } 'session/prompt': { params: SessionPromptParams; result: SessionPromptResult } 'shutdown': { params: undefined; result: Record<string, never> } }
    新: export interface HarnessSdkRequestMap { 'initialize': { params: InitializeParams; result: InitializeResult } 'session/prompt': { params: SessionPromptParams; result: SessionPromptResult } 'session/resume': { params: SessionResumeParams; result: Record<string, never> } 'session/wait': { params: SessionWaitParams; result: Record<string, never> } 'session/working-directory/get': { params: SessionWorkingDirectoryParams; result: SessionWorkingDirectoryResult } 'session/working-directory/set': { params: SessionWorkingDirectorySetParams; result: SessionWorkingDirectoryResult } 'shutdown': { params: undefined; result: Record<string, never> } }

## breaking

- ★ **[package-removed]** `packages/experimental/schedule-bundle` — 包被移除或不再是独立包
- **[package-removed]** `packages/hooks/hook-protocol` — 包被移除或不再是独立包
- **[package-removed]** `packages/hooks/hooks-claude-code` — 包被移除或不再是独立包
- **[package-removed]** `packages/hooks/hooks-codex` — 包被移除或不再是独立包
- **[package-removed]** `packages/runtime-diagnostics/invariants` — 包被移除或不再是独立包
- **[package-removed]** `packages/session-query/tool-session-query` — 包被移除或不再是独立包
- **[package-removed]** `packages/session/session-title-all-prompts-llm` — 包被移除或不再是独立包
- ★ **[package-removed]** `packages/skill/skill-badge` — 包被移除或不再是独立包
- **[package-removed]** `packages/subagent/subagent-in-process-driver` — 包被移除或不再是独立包
- **[package-removed]** `packages/terminal/tool-terminal` — 包被移除或不再是独立包
- **[package-removed]** `packages/webhook/webhook` — 包被移除或不再是独立包
- **[package-removed]** `packages/webhook/webhook-github` — 包被移除或不再是独立包
- **[package-removed]** `packages/workflow/tool-ralph` — 包被移除或不再是独立包
- **[doc-removed]** `docs/defensive-patterns.md` — 契约文档被删除/改名
- **[doc-removed]** `docs/defensive-patterns.zh.md` — 契约文档被删除/改名
- **[doc-removed]** `docs/subsystems/invariants.md` — 契约文档被删除/改名
- **[doc-removed]** `docs/subsystems/invariants.zh.md` — 契约文档被删除/改名
- **[config-scope-removed]** `config:@deepseek-ai/dsh-invariants` — 该包从配置目录移除，其 cordis.yml config 块不再可用
- **[ast-export-removed]** `packages/boot/app-boot` — 导出（含 re-export）删除: HARNESS_SOURCE_SECTION（原声明于 packages/boot/app-boot/src/index.ts）
- **[ast-export-removed]** `packages/boot/app-boot` — 导出（含 re-export）删除: addHarnessSourceSection（原声明于 packages/boot/app-boot/src/index.ts）
- **[ast-signature-changed]** `packages/boot/plugin-manager` — 签名变化: Reload
    旧: export interface Reload { filename: string runtime?: Plugin.Runtime | undefined }
    新: type Reload = Pick<ChangeResult, 'warnings' | 'restartReason'>
- **[ast-export-removed]** `packages/boot/hmr` — 导出（含 re-export）删除: filepath（原声明于 packages/boot/hmr/src/index.ts）
- **[ast-export-removed]** `packages/boot/hmr` — 导出（含 re-export）删除: activated（原声明于 packages/boot/hmr/src/index.ts）
- **[ast-export-removed]** `packages/boot/hmr` — 导出（含 re-export）删除: replacementRuntime（原声明于 packages/boot/hmr/src/index.ts）
- **[ast-export-removed]** `packages/bundle/web-app` — 导出（含 re-export）删除: WEB_RUNTIME_SERVICE（原声明于 packages/bundle/web-app/src/index.ts）
- **[ast-export-removed]** `packages/bundle/web-app` — 导出（含 re-export）删除: WebRuntimeValues（原声明于 packages/bundle/web-app/src/index.ts）
- **[ast-export-removed]** `packages/bundle/web-app` — 导出（含 re-export）删除: LOOPBACK_HOST（原声明于 packages/bundle/web-app/src/index.ts）
- **[ast-export-removed]** `packages/bundle/web-app` — 导出（含 re-export）删除: ALL_INTERFACES_HOST（原声明于 packages/bundle/web-app/src/index.ts）
- **[ast-export-removed]** `packages/bundle/web-app` — 导出（含 re-export）删除: resolveLanTrust（原声明于 packages/bundle/web-app/src/index.ts）
- **[ast-export-removed]** `packages/bundle/web-app` — 导出（含 re-export）删除: lanAddresses（原声明于 packages/bundle/web-app/src/index.ts）
- **[ast-export-removed]** `packages/bundle/web-app` — 导出（含 re-export）删除: webSurfacePrompt（原声明于 packages/bundle/web-app/src/index.ts）
- **[ast-export-removed]** `packages/bundle/web-app` — 导出（含 re-export）删除: updateContract（原声明于 packages/bundle/web-app/src/index.ts）
- **[ast-export-removed]** `packages/bundle/web-app` — 导出（含 re-export）删除: localWebUrl（原声明于 packages/bundle/web-app/src/index.ts）
- **[ast-export-removed]** `packages/bundle/web-app` — 导出（含 re-export）删除: lanCandidate（原声明于 packages/bundle/web-app/src/index.ts）
- **[ast-export-removed]** `packages/bundle/web-app` — 导出（含 re-export）删除: lanUrl（原声明于 packages/bundle/web-app/src/index.ts）
- **[ast-export-removed]** `packages/context/file-reference-local` — 导出（含 re-export）删除: search（原声明于 packages/context/file-reference-local/src/index.ts）
- **[ast-export-removed]** `packages/credentials/authorization` — 导出（含 re-export）删除: invariantFailure（原声明于 packages/credentials/authorization/src/index.ts）
- **[ast-export-removed]** `packages/experimental/agent-team` — 导出（含 re-export）删除: DEFAULT_MAX_PENDING_MESSAGES（原声明于 packages/experimental/agent-team/src/index.ts）
- **[ast-export-removed]** `packages/experimental/ptc-runtime-python` — 导出（含 re-export）删除: PY_SCRIPTS（原声明于 packages/experimental/ptc-runtime-python/src/index.ts）
- **[ast-export-removed]** `packages/experimental/ptc-runtime-python` — 导出（含 re-export）删除: materializePyScripts（原声明于 packages/experimental/ptc-runtime-python/src/index.ts）
- **[ast-export-removed]** `packages/experimental/ptc-runtime-python` — 导出（含 re-export）删除: bootstrapDir（原声明于 packages/experimental/ptc-runtime-python/src/index.ts）
- **[ast-export-removed]** `packages/experimental/ptc-runtime-python` — 导出（含 re-export）删除: finishResolve（原声明于 packages/experimental/ptc-runtime-python/src/index.ts）
- **[ast-export-removed]** `packages/experimental/tool-agent-team` — 导出（含 re-export）删除: POLICY（原声明于 packages/experimental/tool-agent-team/src/index.ts）
- **[ast-export-removed]** `packages/host/webserver` — 导出（含 re-export）删除: upgradedClosed（原声明于 packages/host/webserver/src/index.ts）
- **[ast-export-removed]** `packages/jobs/tool-jobs` — 导出（含 re-export）删除: actionBytes（原声明于 packages/jobs/tool-jobs/src/index.ts）
- **[ast-export-removed]** `packages/llm/plugin-package-inventory-deepseek` — 导出（含 re-export）删除: presetTree（原声明于 packages/llm/plugin-package-inventory-deepseek/src/index.ts）
- **[ast-export-removed]** `packages/runtime-diagnostics/invariants` — 导出（含 re-export）删除: InvariantFailure（原声明于 packages/runtime-diagnostics/invariants/src/index.ts）
- **[ast-export-removed]** `packages/runtime-diagnostics/invariants` — 导出（含 re-export）删除: InvariantInstaller（原声明于 packages/runtime-diagnostics/invariants/src/index.ts）
- **[ast-export-removed]** `packages/runtime-diagnostics/invariants` — 导出（含 re-export）删除: PendingInvariantRegistration（原声明于 packages/runtime-diagnostics/invariants/src/index.ts）
- **[ast-export-removed]** `packages/runtime-diagnostics/invariants` — 导出（含 re-export）删除: InvariantError（原声明于 packages/runtime-diagnostics/invariants/src/index.ts）
- **[ast-export-removed]** `packages/runtime-diagnostics/invariants` — 导出（含 re-export）删除: compilePatterns（原声明于 packages/runtime-diagnostics/invariants/src/index.ts）
- **[ast-export-removed]** `packages/runtime-diagnostics/invariants` — 导出（含 re-export）删除: InvariantRegistry（原声明于 packages/runtime-diagnostics/invariants/src/index.ts）
- **[ast-export-removed]** `packages/runtime-diagnostics/invariants` — 导出（含 re-export）删除: installInvariant（原声明于 packages/runtime-diagnostics/invariants/src/index.ts）
- **[ast-export-removed]** `packages/session/session-title-llm` — 导出（含 re-export）删除: SessionTitleLlmMessageSelector（原声明于 packages/session/session-title-llm/src/index.ts）
- **[ast-export-removed]** `packages/session/session-title-llm` — 导出（含 re-export）删除: registerSessionTitleLlmProvider（原声明于 packages/session/session-title-llm/src/index.ts）
- **[ast-export-removed]** `packages/session/session-title-llm` — 导出（含 re-export）删除: finishError（原声明于 packages/session/session-title-llm/src/index.ts）
- **[ast-export-removed]** `packages/session/session-title-llm` — 导出（含 re-export）删除: generateSessionTitleWithLlm（原声明于 packages/session/session-title-llm/src/index.ts）
- **[ast-export-removed]** `packages/session/session-title-llm` — 导出（含 re-export）删除: framedInput（原声明于 packages/session/session-title-llm/src/index.ts）
- **[ast-export-removed]** `packages/session/session-title-llm` — 导出（含 re-export）删除: terminalError（原声明于 packages/session/session-title-llm/src/index.ts）
- **[ast-signature-changed]** `packages/shell/tool-pwsh` — 签名变化: resolveWorkdir
    旧: function(modelWorkdir:string | undefined,exec:{ agent?: Agent })
    新: function(modelWorkdir:string | undefined,sessionCwd:string | undefined)
- **[ast-export-removed]** `packages/shell/tool-bash` — 导出（含 re-export）删除: headerCwd（原声明于 packages/shell/tool-bash/src/index.ts）
- **[ast-export-removed]** `packages/shell/tool-bash` — 导出（含 re-export）删除: sessionCwd（原声明于 packages/shell/tool-bash/src/index.ts）
- **[ast-export-removed]** `packages/subagent/subagent-acp` — 导出（含 re-export）删除: isDirectory（原声明于 packages/subagent/subagent-acp/src/index.ts）
- **[ast-export-removed]** `packages/subagent/subagent-acp` — 导出（含 re-export）删除: resolveCwd（原声明于 packages/subagent/subagent-acp/src/index.ts）
- **[ast-export-removed]** `packages/subagent/subagent-acp` — 导出（含 re-export）删除: parentCwd（原声明于 packages/subagent/subagent-acp/src/index.ts）
- **[ast-export-removed]** `packages/subagent/subagent-dsh-sdk` — 导出（含 re-export）删除: configuredCwd（原声明于 packages/subagent/subagent-dsh-sdk/src/index.ts）
- **[ast-export-removed]** `packages/subagent/subagent-in-process-driver` — 导出（含 re-export）删除: toStopReason（原声明于 packages/subagent/subagent-in-process-driver/src/index.ts）
- **[ast-export-removed]** `packages/subagent/subagent-in-process-driver` — 导出（含 re-export）删除: InProcessRunOptions（原声明于 packages/subagent/subagent-in-process-driver/src/index.ts）
- **[ast-export-removed]** `packages/subagent/subagent-in-process-driver` — 导出（含 re-export）删除: prePublicationAbort（原声明于 packages/subagent/subagent-in-process-driver/src/index.ts）
- **[ast-export-removed]** `packages/subagent/subagent-in-process-driver` — 导出（含 re-export）删除: attachDescriptorAppend（原声明于 packages/subagent/subagent-in-process-driver/src/index.ts）
- **[ast-export-removed]** `packages/subagent/subagent-in-process-driver` — 导出（含 re-export）删除: appended（原声明于 packages/subagent/subagent-in-process-driver/src/index.ts）
- **[ast-export-removed]** `packages/subagent/subagent-in-process-driver` — 导出（含 re-export）删除: startInProcessRun（原声明于 packages/subagent/subagent-in-process-driver/src/index.ts）
- **[ast-export-removed]** `packages/subagent/subagent-in-process-driver` — 导出（含 re-export）删除: activationBoundary（原声明于 packages/subagent/subagent-in-process-driver/src/index.ts）
- **[ast-export-removed]** `packages/subagent/subagent-in-process-driver` — 导出（含 re-export）删除: structured（原声明于 packages/subagent/subagent-in-process-driver/src/index.ts）
- **[ast-export-removed]** `packages/subagent/subagent-in-process-driver` — 导出（含 re-export）删除: drivePublishedRun（原声明于 packages/subagent/subagent-in-process-driver/src/index.ts）
- **[ast-export-removed]** `packages/subagent/subagent-in-process-driver` — 导出（含 re-export）删除: readResult（原声明于 packages/subagent/subagent-in-process-driver/src/index.ts）
- **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: outputValueText（原声明于 packages/subagent/tool-subagent/src/index.ts）
- **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: settleStart（原声明于 packages/subagent/tool-subagent/src/index.ts）
- **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: withDiagnosticAndPartialText（原声明于 packages/subagent/tool-subagent/src/index.ts）
- **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: ForegroundToolResult（原声明于 packages/subagent/tool-subagent/src/index.ts）
- **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: settleForegroundRun（原声明于 packages/subagent/tool-subagent/src/index.ts）
- **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: DelegationRunRequest（原声明于 packages/subagent/tool-subagent/src/index.ts）
- **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: DelegationRunSpec（原声明于 packages/subagent/tool-subagent/src/index.ts）
- **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: resolveDelegationRun（原声明于 packages/subagent/tool-subagent/src/index.ts）
- **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: continuable（原声明于 packages/subagent/tool-subagent/src/index.ts）
- **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: runSpec（原声明于 packages/subagent/tool-subagent/src/index.ts）
- **[ast-export-removed]** `packages/typert/protocol` — 导出（含 re-export）删除: remoteOptionMode（原声明于 packages/typert/protocol/src/index.ts）
- **[ast-export-removed]** `packages/api/session-controller/src/agent.ts` — 导出（含 re-export）删除: storedPreset（原声明于 packages/api/session-controller/src/agent.ts）
- **[ast-export-removed]** `packages/api/terminal-controller/src/types.ts` — 导出（含 re-export）删除: TerminalAttachmentId（原声明于 packages/api/terminal-controller/src/types.ts）
- **[ast-export-removed]** `packages/client/connection/src/operator-peer.ts` — 导出（含 re-export）删除: OperatorPeer（原声明于 packages/client/connection/src/operator-peer.ts）
- **[ast-signature-changed]** `packages/client/ui-primitives/src/Input.tsx` — 签名变化: Input
    旧: function({ icon, className, ...rest }:{ icon?: ReactNode className?: string } & InputHTMLAttributes<HTMLInputElement>)
    新: var
- **[ast-export-removed]** `packages/client/ui-primitives/src/user-text.tsx` — 导出（含 re-export）删除: SESSION_WIRE_RE（原声明于 packages/client/ui-primitives/src/user-text.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/user-text.tsx` — 导出（含 re-export）删除: TRAILING_PUNCTUATION_RE（原声明于 packages/client/ui-primitives/src/user-text.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/user-text.tsx` — 导出（含 re-export）删除: DecorationRange（原声明于 packages/client/ui-primitives/src/user-text.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/user-text.tsx` — 导出（含 re-export）删除: UserTextReferences（原声明于 packages/client/ui-primitives/src/user-text.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/user-text.tsx` — 导出（含 re-export）删除: projectUserText（原声明于 packages/client/ui-primitives/src/user-text.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/user-text.tsx` — 导出（含 re-export）删除: re（原声明于 packages/client/ui-primitives/src/user-text.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/user-text.tsx` — 导出（含 re-export）删除: tokenStart（原声明于 packages/client/ui-primitives/src/user-text.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/user-text.tsx` — 导出（含 re-export）删除: rawLabel（原声明于 packages/client/ui-primitives/src/user-text.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/user-text.tsx` — 导出（含 re-export）删除: rankOf（原声明于 packages/client/ui-primitives/src/user-text.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/user-text.tsx` — 导出（含 re-export）删除: pushPlain（原声明于 packages/client/ui-primitives/src/user-text.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/user-text.tsx` — 导出（含 re-export）删除: referenceKind（原声明于 packages/client/ui-primitives/src/user-text.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/user-text.tsx` — 导出（含 re-export）删除: displayLabel（原声明于 packages/client/ui-primitives/src/user-text.tsx）
- **[ast-export-removed]** `packages/context/agent-instructions/src/files.ts` — 导出（含 re-export）删除: userGlobal（原声明于 packages/context/agent-instructions/src/files.ts）
- **[ast-export-removed]** `packages/context/agent-instructions/src/files.ts` — 导出（含 re-export）删除: userGlobalProbe（原声明于 packages/context/agent-instructions/src/files.ts）
- **[ast-export-removed]** `packages/context/agent-instructions/src/files.ts` — 导出（含 re-export）删除: dedupInstructionFilesByDirectory（原声明于 packages/context/agent-instructions/src/files.ts）
- **[ast-export-removed]** `packages/context/agent-instructions/src/files.ts` — 导出（含 re-export）删除: keptDigestsByDir（原声明于 packages/context/agent-instructions/src/files.ts）
- **[ast-export-removed]** `packages/context/agent-instructions/src/files.ts` — 导出（含 re-export）删除: deduped（原声明于 packages/context/agent-instructions/src/files.ts）
- **[ast-export-removed]** `packages/context/agent-instructions/src/files.ts` — 导出（含 re-export）删除: userGlobalDisplayPath（原声明于 packages/context/agent-instructions/src/files.ts）
- **[ast-export-removed]** `packages/experimental/inspector/src/host/plugin.ts` — 导出（含 re-export）删除: disposeInspector（原声明于 packages/experimental/inspector/src/host/plugin.ts）
- **[ast-export-removed]** `packages/host/directory-picker-native/src/native-picker.ts` — 导出（含 re-export）删除: errorStderr（原声明于 packages/host/directory-picker-native/src/native-picker.ts）
- **[ast-signature-changed]** `packages/llm/llm/src/call-config.ts` — 签名变化: LlmCallConfig
    旧: export interface LlmCallConfig { provider: string model: string reasoningEffort?: ReasoningEffortId temperature?: number maxTokens?: number stop?: string[] }
    新: export interface LlmCallConfig extends LlmCallControls { provider: string model: string }
- **[ast-export-removed]** `packages/preset/agent-preset-registry/src/mount.ts` — 导出（含 re-export）删除: livePresetMounts（原声明于 packages/preset/agent-preset-registry/src/mount.ts）
- **[ast-export-removed]** `packages/preset/agent-preset-registry/src/mount.ts` — 导出（含 re-export）删除: JoinedPresetMount（原声明于 packages/preset/agent-preset-registry/src/mount.ts）
- **[ast-export-removed]** `packages/preset/agent-preset-registry/src/mount.ts` — 导出（含 re-export）删除: standingMountFor（原声明于 packages/preset/agent-preset-registry/src/mount.ts）
- **[ast-export-removed]** `packages/preset/agent-preset-registry/src/mount.ts` — 导出（含 re-export）删除: agentKey（原声明于 packages/preset/agent-preset-registry/src/mount.ts）
- **[ast-export-removed]** `packages/preset/agent-preset-registry/src/mount.ts` — 导出（含 re-export）删除: standingKey（原声明于 packages/preset/agent-preset-registry/src/mount.ts）
- **[ast-export-removed]** `packages/preset/agent-preset-registry/src/mount.ts` — 导出（含 re-export）删除: serviceForAgent（原声明于 packages/preset/agent-preset-registry/src/mount.ts）
- **[ast-signature-changed]** `packages/subagent/subagent/src/catalog.ts` — 签名变化: establishCatalogChild
    旧: function(parent:Session,child:SessionHeader,descriptor:| { readonly mode: 'one-shot'; readonly label?: string } | { readonly mode: 'continuable'; readonly label: string })
    新: function(parent:Session,child:SessionHeader,descriptor:{ readonly mode: 'continuable'; readonly label: string })
- **[ast-export-removed]** `packages/subagent/subagent/src/out-of-process.ts` — 导出（含 re-export）删除: validateConfiguredCwd（原声明于 packages/subagent/subagent/src/out-of-process.ts）
- **[ast-export-removed]** `packages/subagent/subagent/src/out-of-process.ts` — 导出（含 re-export）删除: resolveChildCwd（原声明于 packages/subagent/subagent/src/out-of-process.ts）
- **[ast-export-removed]** `packages/subagent/subagent/src/types.ts` — 导出（含 re-export）删除: ContinuableStartSpec（原声明于 packages/subagent/subagent/src/types.ts）
- **[ast-export-removed]** `packages/subagent/subagent/src/types.ts` — 导出（含 re-export）删除: ContinuableStart（原声明于 packages/subagent/subagent/src/types.ts）
- **[ast-export-removed]** `packages/subagent/subagent/src/descriptor.ts` — 导出（含 re-export）删除: SubagentDescriptorInputBase（原声明于 packages/subagent/subagent/src/descriptor.ts）
- **[ast-export-removed]** `packages/subagent/subagent/src/descriptor.ts` — 导出（含 re-export）删除: OneShotSubagentDescriptorInput（原声明于 packages/subagent/subagent/src/descriptor.ts）
- **[ast-signature-changed]** `packages/subagent/subagent/src/descriptor.ts` — 签名变化: ContinuableSubagentDescriptorInput
    旧: export interface ContinuableSubagentDescriptorInput extends SubagentDescriptorInputBase { readonly mode: 'continuable' /** Initial delegation `description` used for durable enumeration. */ readonly label: string /** Requested child `agentOptions.provider`. */ readonly agentProvider?: string /** Requested child `agentOptions.model`. */ readonly agentModel?: string /** Requested child `agentOptions.reasoningEffort`. */ readonly agentReasoningEffort?: ReasoningEffortId /** Requested per-child persona. */ readonly persona?: string /** Requested child tool scoping. */ readonly toolFilter?: ToolRestriction }
    新: export type ContinuableSubagentDescriptorInput = Omit<ContinuableSubagentDescriptorData, 'version'>
- **[ast-export-removed]** `packages/subagent/subagent/src/descriptor.ts` — 导出（含 re-export）删除: SubagentDescriptorInput（原声明于 packages/subagent/subagent/src/descriptor.ts）
- **[ast-export-removed]** `packages/subagent/subagent/src/run-settlement.ts` — 导出（含 re-export）删除: finalText（原声明于 packages/subagent/subagent/src/run-settlement.ts）
- **[ast-export-removed]** `packages/subagent/subagent/src/run-settlement.ts` — 导出（含 re-export）删除: runOutcome（原声明于 packages/subagent/subagent/src/run-settlement.ts）
- **[ast-export-removed]** `packages/subagent/subagent/src/run-settlement.ts` — 导出（含 re-export）删除: settleRun（原声明于 packages/subagent/subagent/src/run-settlement.ts）
- **[ast-export-removed]** `packages/typert/generator/src/analyzer.ts` — 导出（含 re-export）删除: exportArgument（原声明于 packages/typert/generator/src/analyzer.ts）
- **[config-field-removed]** `config:@deepseek-ai/dsh-agent-instructions` — 配置字段被删除: dshHome（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-ptc-runtime-node` — 配置字段被删除: nodeExecutable（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-subagent-acp` — 配置字段被删除: cwd（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-subagent-dsh-sdk` — 配置字段被删除: cwd（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-tool-subagent` — 配置字段被删除: enableRunInBackground（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-tool-subagent` — 配置字段被删除: backgroundMode（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-tool-subagent` — 配置字段被删除: persona（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-tool-subagent` — 配置字段被删除: toolFilter（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-tool-subagent` — 配置字段被删除: allow（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-tool-subagent` — 配置字段被删除: deny（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-web-app` — 配置字段被删除: trustedHosts（cordis.yml 里写这些字段将失效）

## warning

- **[exports-map-changed]** `packages/api/account-controller/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/api/gateway/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/api/job-controller/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/api/remotes/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/api/session-controller/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/api/settings-controller/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/api/terminal-controller/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/api/workspace-controller/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/api/workspace-files/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/attachment/attachment-local/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/boot/config-editor/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/boot/hmr/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/boot/plugin-manager/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/bundle/web-app/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/connection/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/file-upload/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/hmr/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/locale/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/modules/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/product-analytics/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/resources/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/shortcuts/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-agent-preset/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-approval/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-attachment/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-brand-official/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-chat/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-commands/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-conversation/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-deliverables/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-directory-picker-browse/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-directory-picker-native/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-goal/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-input-trigger/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-jobs/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-layout/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-message-feedback/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-model-selection/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-open-in-app/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-permission-presets/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-plan/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-plugin-manager/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-reference/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-renderer/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-session/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-settings/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-settings-account/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-settings-agent-loop/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-settings-general/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-settings-models/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-settings-plugin-inventory/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-settings-plugins/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-settings-session-log/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-settings-shell/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-settings-subagent/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-settings-web-search/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-shortcuts/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-sidebar/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-sidebar-browser/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-sidebar-documentpreview/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-sidebar-files/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-sidebar-right/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-sidebar-terminal/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-skill/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-subagent/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-theme/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-tool/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-trajectory/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-user-questions/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-workflow-run/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-workspace/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/compaction/command-compact/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/compaction/compaction/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/compaction/compaction-basic/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/compaction/compaction-image-offload/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/compaction/compaction-tool-result-pruner/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/context/agent-instructions/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/context/file-reference-local/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/context/session-reference/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/context/time-context/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/core/agent/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/core/agent-default-model/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/core/agent-loop/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/core/agent-tool-presentation/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/core/scope/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/core/session/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/core/system-prompt/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/core/tools/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/credentials/authorization/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/credentials/credentials/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/credentials/credentials-local/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/credentials/deepseek-account-platform/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/deliverables/tool-present/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/deliverables/workspace-changes/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/document/office-to-pdf/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/experimental/agent-team/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/experimental/api-speech-to-text/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/experimental/client-ui-voice-input/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/experimental/inspector/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/experimental/speech-to-text/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/experimental/speech-to-text-sensevoice/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/extensions/cordis-client-runner/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/extensions/cordis-host-runner/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/extensions/tool-cordis/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/extensions/ui-cordis/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/feedback/command-feedback/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/feedback/message-feedback/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/fs/fs/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/fs/fs-observation-policy/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/fs/fs-sandbox/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/fs/tool-fs/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/fs/tool-fs-search/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/goal/command-goal/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/goal/goal/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/goal/goal-round-driver/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/goal/tool-goal/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/guard/repeat-tool-reminder/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/guard/timeout-policy/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/host/directory-picker-auto/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/host/directory-picker-browse/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/host/directory-picker-native/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/host/open-in-app/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/host/plugin-inventory/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/host/product-telemetry-otel/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/host/webserver/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/interaction/commands/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/interaction/permission-presets/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/interaction/tool-ask-user/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/interaction/user-approval/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/interaction/user-questions/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/jobs/jobs/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/jobs/jobs-local/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/jobs/tool-jobs/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/llm/deepseek-llm-api-extensions/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/llm/llm/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/llm/llm-deepseek-account/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/llm/llm-deepseek-api-key/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/llm/llm-pi-ai/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/llm/llm-retry/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/llm/plugin-package-inventory-deepseek/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/llm/token-meter/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/mcp/mcp-resources/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/plan/plan-mode/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/preset/agent-preset/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/preset/agent-preset-registry/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/preset/persona/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/ptc-runtime/ptc-runtime-node/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/sandbox/sandbox-local/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/sandbox/sandbox-policy/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/schedule/schedule/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/session-query/session-log-export/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/session-query/session-query-sqlite/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/session/session-checkpoint-policy/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/session/session-log-deepseek/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/session/session-persistence-jsonl/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/session/session-projection/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/session/session-projection-cache/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/session/session-stats/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/session/session-telemetry-otel/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/session/session-title/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/session/session-title-first-prompt-llm/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/session/session-turn-outline/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/settings/settings/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/shell/bash-sandbox/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/shell/pwsh-sandbox/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/shell/shell-env/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/shell/tool-bash/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/shell/tool-bash-persistent/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/shell/tool-pwsh/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/shell/tool-pwsh-persistent/package.json` — package.json exports 字段变化，请人工确认入口路径
- ★ **[exports-map-changed]** `packages/skill/skill/package.json` — package.json exports 字段变化，请人工确认入口路径
- ★ **[exports-map-changed]** `packages/skill/skill-filesystem/package.json` — package.json exports 字段变化，请人工确认入口路径
- ★ **[exports-map-changed]** `packages/skill/tool-skill/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/spill/spill-local/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/spill/spill-policy/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/storage/storage/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/storage/storage-domain/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/storage/storage-json/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/subagent/subagent/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/subagent/subagent-claude-code/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/subagent/subagent-codex/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/subagent/subagent-fork-in-process/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/subagent/subagent-spawn-in-process/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/subagent/tool-subagent/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/subagent/tool-subagent-control/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/subprocess/subprocess-local/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/telemetry/otel/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/terminal/terminal/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/terminal/terminal-bash/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/todo/tool-todo/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/typert/loader/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/typert/protocol/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/typert/registry/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/web/tool-web/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/web/web/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/web/web-fetch-http/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/web/web-search-deepseek/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/workflow/tool-workflow/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/workflow/workflow/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/workflow/workflow-ptc/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/workspace/workspace/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[doc-major-rewrite]** `docs/subsystems/typert.md` — 行数 422 -> 612（45%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/typert.zh.md` — 行数 422 -> 612（45%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/user-questions.md` — 行数 141 -> 250（77%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/user-questions.zh.md` — 行数 141 -> 250（77%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/web-server.md` — 行数 175 -> 240（37%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/web-server.zh.md` — 行数 175 -> 240（37%），可能存在行为级变更，建议人工复核
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.1.7-rc.2/schedule-optional-bundle/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.1.7-rc.2/schedule-optional-bundle/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.1.7-rc.2/transcript-view-legacy-normal/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.1.7-rc.2/transcript-view-legacy-normal/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.0-rc.2/account-sign-in-errors/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.0-rc.2/account-sign-in-errors/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.0-rc.2/bundled-python-tests/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.0-rc.2/bundled-python-tests/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.0-rc.2/primary-runtime-python-aliases/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.0-rc.2/primary-runtime-python-aliases/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.0-rc.2/remove-runtime-invariants/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.0-rc.2/remove-runtime-invariants/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.0-rc.2/schedule-bundle-retired/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.0-rc.2/schedule-bundle-retired/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.0-rc.2/subpath-plugin-display-manifest/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.0-rc.2/subpath-plugin-display-manifest/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/deepseek-model-discovery/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/deepseek-model-discovery/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/desktop-test-auth-popup/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/desktop-test-auth-popup/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/experimental-package-composition/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/experimental-package-composition/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/instruction-home-override/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/instruction-home-override/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/job-id-identity/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/job-id-identity/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/jsonl-persistence-plugin/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/jsonl-persistence-plugin/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/mock-messages-events/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/mock-messages-events/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/native-subagent-bundle-tools/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/native-subagent-bundle-tools/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/new-session-generations/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/new-session-generations/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/plugin-option-placement/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/plugin-option-placement/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/python-optional-resources/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/python-optional-resources/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/python-ptc-sandbox/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/python-ptc-sandbox/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/session-title-adapters/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/session-title-adapters/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/session-title-provider-strategy/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/session-title-provider-strategy/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/ssh-helper-launch/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/ssh-helper-launch/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/subagent-activations/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/subagent-activations/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/subagent-preset-composition/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/subagent-preset-composition/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/team-direct-inbox/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/team-direct-inbox/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/terminal-command-labels/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/terminal-command-labels/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/tool-presentation-mode/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/tool-presentation-mode/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/web-listener-trust-config/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/web-listener-trust-config/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/working-directory/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.1/working-directory/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.2/deepseek-account-identity-watch/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.2/deepseek-account-identity-watch/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.2/deepseek-account-model-catalog/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.2/deepseek-account-model-catalog/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.2/desktop-font-size-shortcuts/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.2/desktop-font-size-shortcuts/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.2/from-default-profile-replaces-target/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.2/from-default-profile-replaces-target/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.2/operator-connect/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.2/operator-connect/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.2/pi-ai-azure-provider/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.2/pi-ai-azure-provider/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.2/pi-ai-model-discovery/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.2/pi-ai-model-discovery/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.2/plugin-install-over-installed/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.2/plugin-install-over-installed/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.2/sdk-minimal-image-compaction/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.2/sdk-minimal-image-compaction/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.2/stored-credentials-precedence/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-alpha.2/stored-credentials-precedence/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[ast-signature-changed]** `packages/schedule/tool-schedule` — 签名变化: internalError
    旧: function(detail:string)
    新: function()
- **[ast-signature-changed]** `packages/api/gateway` — 签名变化: UplinkSource
    旧: interface UplinkSource { /** Carrier items; an immediately ended iterable when the carrier has none. */ readonly source: AsyncIterable<unknown> /** Descriptor codec, or the JSON-safety codec when the descriptor declares no uplink. */ readonly codec: TypertCodec readonly endpoint: string /** Fail the logical stream with a Remote failure as the reason. */ readonly abort: (reason: unknown) => void }
    新: interface UplinkSource { readonly window: RemoteInvocation['uplinkWindow'] /** Carrier items; an immediately ended iterable when the carrier has none. */ readonly source: AsyncIterable<unknown> /** Descriptor codec, or the JSON-safety codec when the descriptor declares no uplink. */ readonly codec: TypertCodec readonly endpoint: string /** Fail the logical stream with a Remote failure as the reason. */ readonly abort: (reason: unknown) => void }
- **[ast-signature-changed]** `packages/api/gateway` — 签名变化: RemoteEventClient
    旧: interface RemoteEventClient { readonly id: RemoteEventClientId readonly queue: RemoteEventQueue readonly deliveries: Map<RemoteEventId, PendingRemoteEvent> }
    新: interface RemoteEventClient { readonly peer: PeerScope readonly id: RemoteEventClientId readonly queue: RemoteEventQueue readonly signal: AbortSignal readonly deliveries: Map<RemoteEventId, PendingRemoteEvent> /** The stream's Peer principal: only the owner answers scoped waterfalls and receives every broadcast. */ readonly principal: Principal /** Only owner streams receive scoped waterfalls they could answer; other Peers receive admitted broadcasts only. */ readonly answers: boolean }
- **[ast-signature-changed]** `packages/experimental/translator` — 签名变化: endpoint
    旧: var
    新: function(value:string)
- **[ast-signature-changed]** `packages/api/gateway` — 签名变化: remoteRequest
    旧: function(endpoint:string,payload:unknown,signal:AbortSignal,?peer:PeerScope)
    新: function(endpoint:string,payload:unknown,signal:AbortSignal,peer:PeerScope)
- **[ast-signature-changed]** `packages/api/gateway` — 签名变化: methodSignal
    旧: function(request:InvokeRemoteRequest,control:AbortController)
    新: function(request:InvokeRemoteRequest,control:AbortController,stream:boolean)
- **[ast-signature-changed]** `packages/api/remote-access` — 签名变化: entry
    旧: var
    新: var:PolicyEntry
- **[ast-signature-changed]** `packages/boot/app-boot` — 签名变化: formatActivationError
    旧: function(error:unknown)
    新: function(error:unknown,stacks:any)
- **[ast-signature-changed]** `packages/api/remote-access` — 签名变化: seen
    旧: var
    新: var:RemoteAccessResource[]
- **[ast-signature-changed]** `packages/boot/app-boot` — 签名变化: inactiveEntries
    旧: function(ctx:Context)
    新: function(ctx:Context,importNow:any)
- **[ast-signature-changed]** `packages/boot/app-boot` — 签名变化: failureDetail
    旧: function(outcome:Extract<InactiveEntry['outcome'], { kind: 'failed' }>)
    新: function(outcome:Extract<InactiveEntry['outcome'], { kind: 'failed' }>,stacks:any)
- **[ast-signature-changed]** `packages/boot/app-boot` — 签名变化: activationDiagnostic
    旧: function(binName:string,failures:readonly InactiveEntry[])
    新: function(binName:string,failures:readonly InactiveEntry[],stacks:any)
- **[ast-signature-changed]** `packages/boot/app-boot` — 签名变化: inactiveDiagnostic
    旧: function({ entry, outcome }:InactiveEntry)
    新: function({ entry, outcome }:InactiveEntry,stacks:any)
- **[ast-signature-changed]** `packages/session/session-title-first-prompt-llm` — 签名变化: systemPrompt
    旧: function(config:ResolvedSessionTitleLlmConfig)
    新: function(config:ResolvedConfig)
- **[ast-signature-changed]** `packages/boot/hmr` — 签名变化: loadDependencies
    旧: function(job:ModuleJob,ignored:any)
    新: function(job:ModuleJob,ignored:any,includeNodeModules:any)
- **[ast-signature-changed]** `packages/boot/hmr` — 签名变化: attempts
    旧: var:Array<(typeof generations)[number] & { replacement: Plugin }>
    新: var:ReloadAttempt[]
- **[ast-signature-changed]** `packages/boot/hmr` — 签名变化: plan
    旧: var
    新: var:ReplacementPlan
- **[ast-signature-changed]** `packages/boot/app-boot` — 签名变化: stopped
    旧: var
    新: var:StoppedRow[]
- **[ast-signature-changed]** `packages/client/connection` — 签名变化: ConnectionConfig
    旧: export interface ConnectionConfig { /** Browser recovery timing, injected into each served page. */ recovery?: ConnectionRecoveryConfig /** * Authorities this deployment serves beyond loopback: exact `host:port`, or * port-less `host` matching any port. The /api trust fence refuses any * request whose Host is neither loopback nor listed here, so a * non-loopback (`0.0.0.0`) deployment must declare the names it is reached * by; the Web runtime derives LAN IP literals from an active all-interface * bind. An entry that is not a bare, canonical authority fails plugin load. */ trustedHosts?: string[] /** Absolute browser-session lifetime in days. Default: 30. */ cookieMaxAgeDays?: number /** Maximum buffered JSON body for every `/api` request. Default: 300 MiB. */ maxRequestBodyBytes?: number }
    新: export interface ConnectionConfig { /** Browser recovery timing, injected into each served page. */ recovery?: ConnectionRecoveryConfig /** * Authorities this deployment serves beyond loopback: exact `host:port`, or * port-less `host` matching any port. The fence accepts loopback and the * listener's own bind IP independently; other remote authorities require * an entry here. A non-canonical or non-bare authority fails plugin load. */ trustedHosts?: string[] /** Absolute browser and API cookie lifetime in days. Default: 30. */ cookieMaxAgeDays?: number /** Maximum buffered JSON body for every `/api` request. Default: 300 MiB. */ maxRequestBodyBytes?: number }
- **[ast-signature-changed]** `packages/boot/app-boot` — 签名变化: publish
    旧: var
    新: function(ctx:Context,next:RuntimeResolution)
- **[ast-signature-changed]** `packages/api/gateway` — 签名变化: resources
    旧: var
    新: var:readonly RemoteAccessResource[] | undefined
- **[ast-signature-changed]** `packages/client/ui-slots` — 签名变化: SlotEntryDef
    旧: export interface SlotEntryDef { kind: SlotKind scope: SlotScope owner?: object /** * Optional keyed-entry prop table. A keyed registration contributes one * literal key and receives the corresponding prop share; ordinary owner * props remain common to every key. */ keyProps?: Record<string, object> /** * Optional opaque context carried by one renderSlot occurrence. Only * function-valued members of the slot-level injected hooks compartment * receive it; the slot machinery never interprets the value. */ hookContext?: unknown /** * Optional Slot-level inject face supplied by the parent registration's * child declaration. Every registered entry receives its bound component * face; child registrants do not own or replace this common capability. */ inject?: object }
    新: export interface SlotEntryDef { kind: SlotKind scope: SlotScope /** Use span anchors and error placeholders for inline content; omitted uses div. */ inline?: true owner?: object /** * Optional keyed-entry prop table. A keyed registration contributes one * literal key and receives the corresponding prop share; ordinary owner * props remain common to every key. */ keyProps?: Record<string, object> /** * Optional opaque context carried by one renderSlot occurrence. Only * function-valued members of the slot-level injected hooks compartment * receive it; the slot machinery never interprets the value. */ hookContext?: unknown /** * Optional Slot-level inject face supplied by the parent registration's * child declaration. Every registered entry receives its bound component * face; child registrants do not own or replace this common capability. */ inject?: object }
- **[ast-signature-changed]** `packages/client/ui-slots` — 签名变化: SlotSpec
    旧: export type SlotSpec<E extends SlotEntryDef> = { kind: E['kind'] scope: E['scope'] } & ('inject' extends keyof E ? E extends { inject: infer Injected extends object } ? { inject: Injected } : { inject?: object } : { inject?: never })
    新: export type SlotSpec<E extends SlotEntryDef> = { kind: E['kind'] scope: E['scope'] /** Use span anchors and error placeholders for inline content; omitted uses div. */ inline?: true } & ('inject' extends keyof E ? E extends { inject: infer Injected extends object } ? { inject: Injected } : { inject?: object } : { inject?: never })
- **[ast-signature-changed]** `packages/api/gateway` — 签名变化: decision
    旧: var
    新: var:RemoteAccessDecision
- **[ast-signature-changed]** `packages/session/working-directory` — 签名变化: SessionProjectionStateMap
    旧: interface SessionProjectionStateMap { /** Last logged sandbox-mode override, or null before one (deployment default applies at resolve time). */ sandboxMode: SandboxModeState }
    新: interface SessionProjectionStateMap { /** Last committed working directory, or null before an explicit value exists. */ workingDirectory: string | null }
- **[ast-signature-changed]** `packages/boot/hmr` — 签名变化: callbacks
    旧: var:SessionCallback[] | undefined
    新: var
- **[ast-signature-changed]** `packages/core/system-prompt` — 签名变化: PromptContext
    旧: export interface PromptContext { /** Unique name — a duplicate registration throws (see {@link SystemPrompt.context}). */ readonly name: string /** Contexts are joined in ascending order. */ readonly order: number /** Static text or a provider evaluated for each assembly. Empty text contributes nothing. */ readonly text: string | ((context: AssembleContext) => string) }
    新: export interface PromptContext { /** Unique name — a duplicate registration throws (see {@link SystemPrompt.context}). */ readonly name: string /** Contexts are joined in ascending order. */ readonly order: number /** Static text or a provider evaluated at assembly and admission refresh. Empty text contributes nothing. */ readonly text: string | ((context: AssembleContext) => string) /** Whether to interpolate prompt variables. Defaults to true; false preserves literal text. */ readonly interpolate?: boolean /** Keep this operational context when optional runtime context is disabled. */ readonly required?: boolean }
- **[ast-signature-changed]** `packages/core/system-prompt` — 签名变化: AssembledContext
    旧: export interface AssembledContext { /** The contributing context's unique name. */ name: string /** The resolved text before variable interpolation. */ text: string }
    新: export interface AssembledContext { /** The contributing context's unique name. */ name: string /** The resolved text before variable interpolation. */ text: string /** Whether to interpolate prompt variables. Defaults to true; false preserves literal text. */ interpolate?: boolean }
- **[ast-signature-changed]** `packages/core/tools` — 签名变化: ToolOutputDefinition
    旧: export interface ToolOutputDefinition { /** Raw supported JSON Schema enforced against every successful canonical value. */ readonly schema: JsonSchemaNode /** Pure projection from validated arguments and value to Native/model content. */ render(args: unknown, value: JsonValue): ContentBlock[] /** Pure replayable presentation projection, computed only for top-level calls. */ presentationMeta?(args: unknown, value: JsonValue): JsonValue }
    新: export interface ToolOutputDefinition { /** Raw supported JSON Schema enforced against every successful canonical value. */ readonly schema: JsonSchemaNode /** Pure projection from validated arguments and value to Native/model content. */ render(args: unknown, value: JsonValue): ContentBlock[] /** Pure replayable presentation projection for native and nested calls. */ presentationMeta?(args: unknown, value: JsonValue): JsonValue }
- **[ast-signature-changed]** `packages/core/tools` — 签名变化: ToolResult
    旧: export interface ToolResult { /** The final model-facing content (or the rendered error text on failure). */ content: ContentBlock[] /** Whether the call failed. */ isError: boolean /** * The tool-private presentation payload projected by its output declaration. * It is persisted verbatim on `tool/result` for Host presenters and Client * renderers to narrow independently. Absent when the tool declared no * projector or the call was nested under a composite transport. */ meta?: JsonValue }
    新: export interface ToolResult { /** The final model-facing content (or the rendered error text on failure). */ content: ContentBlock[] /** Whether the call failed. */ isError: boolean /** * The tool-private presentation payload projected by its output declaration. * It is persisted on `tool/result` or `tool/ptc-dispatch` for Host presenters * and Client renderers to narrow independently. Absent when the tool * declared no projector. */ meta?: JsonValue }
- **[ast-signature-changed]** `packages/core/tools` — 签名变化: ToolPresentationMode
    旧: export type ToolPresentationMode = 'native' | 'ptc' | 'both'
    新: export type ToolPresentationMode = 'native' | 'ptc'
- **[ast-signature-changed]** `packages/credentials/credentials-local` — 签名变化: CredentialsDocument
    旧: export interface CredentialsDocument { /** Reference entries, keyed by {@link CredentialRef}. */ refs: Map<string, string> /** Stored records, keyed by {@link CredentialKey}. */ records: Map<string, CredentialRecord> }
    新: export interface CredentialsDocument { /** Reference entries, keyed by {@link CredentialRef}. */ refs: Map<string, string> /** Stored records, keyed by {@link CredentialKey}. */ records: Map<string, CredentialRecord> /** Top-level keys this build does not read; they stay on disk and resolve nothing. */ ignoredKeys: string[] }
- **[ast-signature-changed]** `packages/experimental/auto-review` — 签名变化: snapshotAutoReview
    旧: function(agent:Agent,exec:ToolExecution)
    新: function(agent:Agent,exec:ToolExecution,cwd:string)
- **[ast-signature-changed]** `packages/api/remote-access` — 签名变化: action
    旧: var
    新: var:RemoteAccessAction
- **[ast-signature-changed]** `packages/boot/hmr` — 签名变化: native
    旧: var:BrowserResource['native']
    新: var:unknown
- **[ast-signature-changed]** `packages/ssh/ssh` — 签名变化: bootstrapPath
    旧: var:string
    新: var:string | undefined
- **[ast-signature-changed]** `packages/boot/hmr` — 签名变化: status
    旧: var
    新: var:unknown
- **[ast-signature-changed]** `packages/extensions/cordis-host-runner/src/types.ts` — 签名变化: CordisDynamicPluginId
    旧: function(id:string)
    新: export type CordisDynamicPluginId = Branded<'CordisDynamicPluginId'>
- **[ast-signature-changed]** `packages/extensions/cordis-host-runner/src/types.ts` — 签名变化: CordisDynamicPackageId
    旧: function(id:string)
    新: export type CordisDynamicPackageId = Branded<'CordisDynamicPackageId'>
- **[ast-signature-changed]** `packages/extensions/cordis-host-runner/src/types.ts` — 签名变化: CordisDynamicPluginRunId
    旧: function(id:string)
    新: export type CordisDynamicPluginRunId = Branded<'CordisDynamicPluginRunId'>
- **[ast-signature-changed]** `packages/extensions/cordis-host-runner/src/types.ts` — 签名变化: ApprovalRequestId
    旧: function(id:string)
    新: export type ApprovalRequestId = Branded<'ApprovalRequestId'>
- **[ast-signature-changed]** `packages/experimental/ptc-runtime-python` — 签名变化: sandbox
    旧: var
    新: var:PtcRunSandbox
- **[ast-signature-changed]** `packages/extensions/tool-cordis` — 签名变化: requireAgent
    旧: function(agent:Agent | undefined)
    新: function(exec:ToolExecution)
- **[ast-signature-changed]** `packages/experimental/claude-code-mods` — 签名变化: submitted
    旧: var
    新: var:PromptSubmitResult
- **[ast-signature-changed]** `packages/experimental/hooks-codex` — 签名变化: runPoint
    旧: function(point:string,matchQuery:string,payload:unknown,opts:{ agent?: Agent turn?: number readonly signal: AbortSignal plainStdoutAsContext?: boolean })
    新: function(point:string,matchQuery:string,payload:Record<string, unknown>,opts:{ agent?: Agent turn?: number readonly signal: AbortSignal plainStdoutAsContext?: boolean })
- **[ast-signature-changed]** `packages/experimental/hooks-claude-code` — 签名变化: groups
    旧: var:MatcherGroup[]
    新: var
- **[ast-signature-changed]** `packages/boot/app-boot` — 签名变化: ids
    旧: var:string[]
    新: var
- **[ast-signature-changed]** `packages/boot/plugin-manager` — 签名变化: availability
    旧: var
    新: var:BundleInfo['availability']
- **[ast-signature-changed]** `packages/session/working-directory` — 签名变化: SessionEventMap
    旧: interface SessionEventMap { /** * Latest-wins session title snapshot. Log-only: it never enters the model * surface or derived history. */ 'session/title': SessionTitleEventData }
    新: interface SessionEventMap { /** Effective working directory; the immutable Session header retains the original project. */ 'working-directory/change': { /** Absolute directory used by subsequent directory-based operations. */ cwd: string } }
- **[ast-signature-changed]** `packages/jobs/jobs-local` — 签名变化: TrackedJob
    旧: interface TrackedJob { id: JobId kind: JobKind label: string outputLimitBytes: number | undefined /** Exact lifecycle owner; session-id authorization is derived from it. */ owner: Agent | undefined cancel: (reason?: string) => void status: JobStatus ring: OutputRing /** The model's consuming cursor; {@link JobRegistry.readAt} never moves it. */ modelCursor: number /** Whether the first post-settlement read already handed out `result`. */ resultDelivered: boolean /** Producer-shared progress line and commit binding. */ state: ProducerState /** Terminal reason; a recorded kill reason is merged in at settlement. */ detail: string | undefined result: string | undefined startedAt: number finishedAt: number | undefined /** Reason recorded by {@link JobRegistry.kill}, merged into a `killed` settlement's detail. */ killReason: string | undefined /** Set once a kill or teardown cancel ran; settlement reports it as the cause. */ settleCause: JobSettleCause | undefined /** Resolves once the terminal record is committed and announced. */ settled: Promise<void> /** Resolver for {@link settled}, called by the first effective settlement. */ markSettled: () => void /** Removable resolvers for live waits; timeout/abort unregister before the job settles. */ waitResolvers: Set<() => void> /** The registry-owned pump over the spec's pull sources, when it named any. */ pump: PumpHandle | undefined /** * The spill file each pull source reported on its latest read, by source * index; an entry is undefined while that source keeps none. Source * metadata rather than per-chunk metadata, so it survives ring eviction and * follows a source that withdraws its file. */ spillPaths: (string | undefined)[] }
    新: interface TrackedJob { id: JobId toolCall: JobToolCall | undefined kind: JobKind label: string outputLimitBytes: number | undefined /** Exact lifecycle owner; session-id authorization is derived from it. */ owner: Agent | undefined cancel: (reason?: string) => void status: JobStatus ring: OutputRing /** The model's consuming cursor; {@link JobRegistry.readAt} never moves it. */ modelCursor: number /** Whether the first post-settlement read already handed out `result`. */ resultDelivered: boolean /** Producer-shared progress line and commit binding. */ state: ProducerState /** Terminal reason; a recorded kill reason is merged in at settlement. */ detail: string | undefined result: string | undefined startedAt: number finishedAt: number | undefined /** Reason recorded by {@link JobRegistry.kill}, merged into a `killed` settlement's detail. */ killReason: string | undefined /** Set once a kill or teardown cancel ran; settlement reports it as the cause. */ settleCause: JobSettleCause | undefined /** Resolves once the terminal record is committed and announced. */ settled: Promise<void> /** Resolver for {@link settled}, called by the first effective settlement. */ markSettled: () => void /** Removable resolvers for live waits; timeout/abort unregister before the job settles. */ waitResolvers: Set<() => void> /** The registry-owned pump over the spec's pull sources, when it named any. */ pump: PumpHandle | undefined /** * The spill file each pull source reported on its latest read, by source * index; an entry is undefined while that source keeps none. Source * metadata rather than per-chunk metadata, so it survives ring eviction and * follows a source that withdraws its file. */ spillPaths: (string | undefined)[] }
- **[ast-signature-changed]** `packages/experimental/claude-code-mods` — 签名变化: registrations
    旧: var:AdapterRegistration[]
    新: var
- **[ast-signature-changed]** `packages/llm/plugin-package-inventory-deepseek` — 签名变化: ActiveEntry
    旧: interface ActiveEntry { readonly entry: Entry /** Bare-package base used by the Loader path that activated this entry. */ readonly bareBaseUrl?: string }
    新: interface ActiveEntry { readonly moduleName: string readonly baseUrl?: string /** Bare-package base used by the Loader path that activated this entry. */ readonly bareBaseUrl?: string }
- **[ast-signature-changed]** `packages/llm/plugin-package-inventory-deepseek` — 签名变化: identityFromManifest
    旧: function(path:string,allowAnonymous:boolean)
    新: function(path:string)
- **[ast-signature-changed]** `packages/boot/plugin-manager` — 签名变化: packageName
    旧: var
    新: function(dir:string)
- **[ast-signature-changed]** `packages/llm/plugin-package-inventory-deepseek` — 签名变化: activeEntries
    旧: function(tree:EntryTree,?rootBareBaseUrl:string)
    新: function(tree:EntryTree)
- **[ast-signature-changed]** `packages/llm/plugin-package-inventory-deepseek` — 签名变化: collectActivePluginPackages
    旧: function(ctx:Context,resolver:PackageIdentityResolver,hostBaseUrl:string,?sessionId:string)
    新: function(ctx:Context,resolver:PackageIdentityResolver,hostBaseUrl:string,unreadable:Set<string>,?sessionId:string)
- **[ast-signature-changed]** `packages/subagent/tool-subagent` — 签名变化: mounted
    旧: var
    新: var:{ subagentProvider: SubagentProvider; definition: ToolDefinition; disposeTool: () => void } | undefined
- **[ast-signature-changed]** `packages/interaction/user-questions` — 签名变化: reply
    旧: var:unknown
    新: var
- **[ast-signature-changed]** `packages/experimental/worktree` — 签名变化: revision
    旧: var:string
    新: var
- **[ast-signature-changed]** `packages/session/session-persistence` — 签名变化: SessionPersistenceSnapshot
    旧: export interface SessionPersistenceSnapshot { /** Detached metadata for one stored session. */ readonly header: SessionHeader /** Opaque change token; see {@link SessionPersistence.stat}. */ readonly revision: SessionPersistenceRevision /** Logical event count, when the backend can provide it cheaply from metadata; otherwise absent. */ readonly eventCount?: number /** Physical artifact byte size, when the backend can provide it cheaply (JSONL); otherwise absent. */ readonly sizeBytes?: number }
    新: export interface SessionPersistenceSnapshot { /** Detached metadata for one stored session. */ readonly header: SessionHeader /** Header-only format classification; absent without versioned artifact metadata. */ readonly formatStatus?: 'current' | 'migration-required' /** Opaque change token; see {@link SessionPersistence.stat}. */ readonly revision: SessionPersistenceRevision /** Logical event count, when the backend can provide it cheaply from metadata; otherwise absent. */ readonly eventCount?: number /** Physical artifact byte size, when the backend can provide it cheaply (JSONL); otherwise absent. */ readonly sizeBytes?: number }
- **[ast-signature-changed]** `packages/session/session-title-llm` — 签名变化: SessionTitleLlmRequestEventData
    旧: export interface SessionTitleLlmRequestEventData { /** Registered title-provider identity responsible for the request. */ readonly titleProvider: SessionTitleProviderId /** Exact human `user/message` seqs represented in `messages`. */ readonly messageSeqs: SessionSeq[] /** Exact auxiliary LLM route. */ readonly route: SessionTitleModelIdentity /** Exact auxiliary system prompt. */ readonly system: string /** Exact auxiliary message list. */ readonly messages: Message[] /** Exact auxiliary output-token cap. */ readonly maxTokens: number }
    新: export interface SessionTitleLlmRequestEventData { /** Registered title-provider identity responsible for the request. */ readonly titleProvider: SessionTitleProviderId /** Exact human `user/message` seqs represented in `messages`. */ readonly messageSeqs: SessionSeq[] /** Exact auxiliary LLM route. */ readonly route: SessionTitleModelIdentity /** Exact auxiliary system prompt. */ readonly system: string /** Exact auxiliary message list. */ readonly messages: Message[] /** Exact auxiliary output-token cap. */ readonly maxTokens: number /** Resolved reasoning effort when recorded; older requests can omit it. */ readonly reasoningEffort?: ReasoningEffortId }
- **[ast-signature-changed]** `packages/session/session-title-llm` — 签名变化: SessionTitleLlmConfig
    旧: export interface SessionTitleLlmConfig { /** Target word count for non-CJK titles. */ readonly targetWords: number /** Target character count for Chinese, Japanese, or Korean titles. */ readonly targetCjkCharacters: number /** Maximum UTF-8 bytes in the final JSON-framed user prompt. */ readonly maxInputBytes: number /** Auxiliary generation output-token cap. */ readonly maxOutputTokens: number /** End-to-end auxiliary request deadline in milliseconds. */ readonly timeoutMs: number /** Optional explicit provider route; must be paired with `model`. */ readonly provider?: string /** Optional explicit model id; must be paired with `provider`. */ readonly model?: string }
    新: export interface SessionTitleLlmConfig { /** Maximum UTF-8 bytes in the provider-prepared user input. */ readonly maxInputBytes: number /** Output-token cap for the title request, independent of conversation requests. */ readonly maxOutputTokens: number /** End-to-end auxiliary request deadline in milliseconds. */ readonly timeoutMs: number /** Optional explicit provider route; must be paired with `model`. */ readonly provider?: string /** Optional explicit model id; must be paired with `provider`. */ readonly model?: string }
- **[ast-signature-changed]** `packages/session/session-title` — 签名变化: SessionTitleProviderRequest
    旧: export interface SessionTitleProviderRequest { /** Live session being titled. */ readonly session: Session /** All eligible human messages through this generation revision. */ readonly messages: readonly SessionTitleUserMessage[] /** Exact current logged main-request route, when one has been recorded. */ readonly route?: SessionTitleModelIdentity /** Cancellation for supersession, disposal, timeout composition, or the explicit caller. */ readonly signal: AbortSignal }
    新: export interface SessionTitleProviderRequest { /** Live session being titled. */ readonly session: Session /** All eligible human messages through this generation revision. */ readonly messages: readonly SessionTitleUserMessage[] /** Exact current logged main-request route, when one has been recorded. */ readonly route?: SessionTitleModelIdentity /** * Latest accepted title captured at invocation, including an accepted * fallback whose event may follow the last eligible message. Absent before * any title is accepted. The provider decides whether and how to use it. */ readonly currentTitle?: SessionTitleSnapshot /** Cancellation for supersession, disposal, timeout composition, or the explicit caller. */ readonly signal: AbortSignal }
- **[ast-signature-changed]** `packages/session/session-title` — 签名变化: SessionTitleProvider
    旧: export interface SessionTitleProvider { /** Stable id of the provider recorded with the title. */ readonly id: SessionTitleProviderId /** When new human prompts start automatic generation. */ readonly automatic: SessionTitleAutomaticMode /** * Produce one title revision. * @param request - message snapshot, current route, session, and cancellation. * @returns proposed title plus exact input seqs and the optional provider/model route used to generate it. */ generate(request: SessionTitleProviderRequest): Promise<SessionTitleProviderResult> }
    新: export interface SessionTitleProvider { /** Stable id of the provider recorded with the title. */ readonly id: SessionTitleProviderId /** When new human prompts start automatic generation. */ readonly automatic: SessionTitleAutomaticMode /** * Produce one title revision. * @param request - message snapshot, current title, current route, session, and cancellation. * @returns proposed title plus exact input seqs and the optional provider/model route used to generate it. */ generate(request: SessionTitleProviderRequest): Promise<SessionTitleProviderResult> }
- **[ast-signature-changed]** `packages/experimental/session-title-all-prompts-llm` — 签名变化: messageSeqs
    旧: var:SessionSeq[]
    新: var
- **[ast-signature-changed]** `packages/shell/tool-bash` — 签名变化: canonicalBashResult
    旧: function(result:ShellRunResult)
    新: function(result:ShellRunResult,cwd:string)
- **[ast-signature-changed]** `packages/shell/tool-pwsh` — 签名变化: PwshForegroundResult
    旧: interface PwshForegroundResult { kind: 'foreground' exitCode: number | null signal: NodeJS.Signals | null timedOut: boolean aborted: boolean /** The reason the command was stopped from outside this call, such as a human kill of its job. */ stopped?: string timeoutMs: number stdout: { text: string; truncated: boolean; spillPath?: string } stderr: { text: string; truncated: boolean; spillPath?: string } sandbox?: { mode: string; denied: boolean; enforcement?: string; runnerFailed?: boolean } }
    新: interface PwshForegroundResult { cwd: string kind: 'foreground' exitCode: number | null signal: NodeJS.Signals | null timedOut: boolean aborted: boolean /** The reason the command was stopped from outside this call, such as a human kill of its job. */ stopped?: string timeoutMs: number stdout: { text: string; truncated: boolean; spillPath?: string } stderr: { text: string; truncated: boolean; spillPath?: string } sandbox?: { mode: string; denied: boolean; enforcement?: string; runnerFailed?: boolean } }
- **[ast-signature-changed]** `packages/shell/tool-pwsh` — 签名变化: canonicalPwshResult
    旧: function(result:ShellRunResult)
    新: function(result:ShellRunResult,cwd:string)
- **[ast-signature-changed]** `packages/subagent/subagent/src/out-of-process.ts` — 签名变化: assertUsableCwd
    旧: function(label:string,cwd:string)
    新: function(prefix:string,label:string,cwd:string)
- **[ast-signature-changed]** `packages/api/gateway` — 签名变化: validated
    旧: var:ResolvedConfig
    新: var
- **[ast-signature-changed]** `packages/experimental/hook-protocol/src/codec.ts` — 签名变化: stopReason
    旧: var:SubagentStopReason
    新: var
- **[ast-signature-changed]** `packages/subagent/subagent` — 签名变化: BrowserPromptSource
    旧: interface BrowserPromptSource { readonly kind: 'user' readonly rpcId: SubagentPromptRequestId readonly clientTimeZone?: string }
    新: interface BrowserPromptSource { readonly kind: 'user' readonly rpcId: SubagentPromptRequestId readonly clientTimeZone?: string /** Caller that submitted this follow-up, written only when it is not the owner; absent means the owner. */ readonly principal?: Principal }
- **[ast-signature-changed]** `packages/test-support/agent-loop-testkit` — 签名变化: AgentLoopTestDependenciesOptions
    旧: export interface AgentLoopTestDependenciesOptions { /** Configuration for the system-prompt registry. */ readonly systemPrompt?: SystemPromptConfig /** Configuration for the tool registry. */ readonly tools?: ToolRuntimeConfig }
    新: export interface AgentLoopTestDependenciesOptions { /** Mount the real directory owner and a local filesystem for directory-aware tests. */ readonly workingDirectory?: boolean /** Configuration for the system-prompt registry. */ readonly systemPrompt?: SystemPromptConfig /** Configuration for the tool registry. */ readonly tools?: ToolRuntimeConfig }
- **[ast-signature-changed]** `packages/boot/hmr` — 签名变化: host
    旧: var
    新: var:Promise<Set<string>> | undefined
- **[ast-signature-changed]** `packages/test-support/llm-mock-server` — 签名变化: writeSse
    旧: function(record:MockLlmRequestRecord,response:ServerResponse,payload:unknown)
    新: function(record:MockLlmRequestRecord,response:ServerResponse,payload:string | MessageSseEvent)
- **[ast-signature-changed]** `packages/test-support/llm-replay` — 签名变化: ReplayModelConfig
    旧: export interface ReplayModelConfig { /** Model id used for replay requests. */ id: string /** Selector label; defaults to {@link id}. */ name?: string /** Optional selector description. */ description?: string /** Optional positive integer context capacity published by the replay adapter. */ contextWindow?: number /** Optional declared input modalities, so a scenario can exercise capability gates (e.g. image-capable `read_image`). */ inputModalities?: readonly ModelModality[] /** * Optional per-request output cap the replay route materializes when callers * omit one, so replay reconstructs the request header a live catalog produced. */ defaultMaxTokens?: number /** * Optional flat visual-token price the replay route declares for every * retained request image, so keyless scenarios exercise route-priced * request pressure; each occurrence is priced at this value plus its * request-preview handle text. Requires {@link inputModalities} to include * `image` — a text-only route never sends visual tokens. Absent declares * no image pricing. */ imageRequestTokens?: number /** Optional reasoning-effort ids the replay route accepts, in display order. */ reasoningEfforts?: string[] /** * Optional effort materialized when callers omit one; must appear in * {@link reasoningEfforts} or call resolution rejects the route. */ defaultReasoningEffort?: string /** Optional in-history system prompt replacement for a keyless replay route. */ systemPromptUpdate?: SystemPromptUpdate /** Optional mid-conversation tool declaration mode for a keyless replay route. */ toolUpdate?: ToolUpdate }
    新: export interface ReplayModelConfig { /** Model id used for replay requests. */ id: string /** Selector label; defaults to {@link id}. */ name?: string /** Optional selector description. */ description?: string /** Optional positive integer context capacity published by the replay adapter. */ contextWindow?: number /** Optional declared input modalities, so a scenario can exercise capability gates (e.g. image-capable `read_image`). */ inputModalities?: readonly ModelModality[] /** * Optional per-request output cap the replay route materializes when callers * omit one, so replay reconstructs the request header a live catalog produced. */ defaultMaxTokens?: number /** * Optional flat visual-token price the replay route declares for every * retained request image, so keyless scenarios exercise route-priced * request pressure; each occurrence is priced at this value plus its * request-preview handle text. Requires {@link inputModalities} to include * `image` — a text-only route never sends visual tokens. Absent declares * no image pricing. */ imageRequestTokens?: number /** Optional reasoning-effort ids from least to greatest selectable effort. */ reasoningEfforts?: string[] /** * Optional effort materialized when callers omit one; must appear in * {@link reasoningEfforts} or call resolution rejects the route. */ defaultReasoningEffort?: string /** Optional in-history system prompt replacement for a keyless replay route. */ systemPromptUpdate?: SystemPromptUpdate /** Optional mid-conversation tool declaration mode for a keyless replay route. */ toolUpdate?: ToolUpdate }
- **[ast-signature-changed]** `packages/boot/hmr` — 签名变化: manifests
    旧: var
    新: var:string[]
- **[ast-signature-changed]** `packages/typert/protocol` — 签名变化: RemoteMethodMarker
    旧: export interface RemoteMethodMarker { /** Public instance method carrying the implementation. */ readonly method: string /** Endpoint method when it differs from the implementation member. */ readonly exportName?: string /** Stream methods yield many independently validated result items. */ readonly mode?: 'stream' readonly invocation: RemoteInvocationMarker }
    新: export interface RemoteMethodMarker { /** Public instance method carrying the implementation. */ readonly method: string /** Endpoint method when it differs from the implementation member. */ readonly exportName?: string /** Stream methods yield many independently validated result items. */ readonly mode?: 'stream' readonly invocation: RemoteInvocationMarker /** * Declared `resources` readers keyed by resource kind. Callers spread the * method's wire arguments into each one and validate its result. */ readonly resources?: Readonly<Record<string, TypertResourceReader>> }
- **[ast-signature-changed]** `packages/typert/protocol` — 签名变化: RemoteMethodOptions
    旧: export interface RemoteMethodOptions { /** `stream`: deliver each Iterable item over the shared logical-stream carrier. */ readonly mode: 'stream' }
    新: export interface RemoteMethodOptions<WireArgs extends readonly unknown[] = never> extends RemoteScopeOptions<WireArgs> { /** `stream`: deliver each Iterable item over the shared logical-stream carrier. */ readonly mode?: 'stream' }
- **[ast-signature-changed]** `packages/typert/protocol` — 签名变化: StoredRemoteMethodMarker
    旧: interface StoredRemoteMethodMarker { readonly exportName?: string readonly mode?: 'stream' readonly invocation: RemoteInvocationMarker }
    新: interface StoredRemoteMethodMarker { readonly exportName?: string readonly mode?: 'stream' readonly invocation: RemoteInvocationMarker readonly resources?: Readonly<Record<string, TypertResourceReader>> }
- **[ast-signature-changed]** `packages/typert/protocol` — 签名变化: remoteDecorator
    旧: function(invocation:RemoteInvocationMarker,?mode:'stream',?exportName:string)
    新: function(invocation:RemoteInvocationMarker,options:RemoteMarkerOptions)
- **[ast-signature-changed]** `packages/typert/protocol` — 签名变化: RemoteScope
    旧: function(key:Extract<keyof TypertContextMap, string>,?exportName:string)
    新: function(key:Extract<keyof TypertContextMap, string>,?option:string | RemoteScopeOptions)
- **[ast-signature-changed]** `packages/typert/protocol` — 签名变化: addMarkerInitializer
    旧: function(context:RemoteInitializerContext<This>,invocation:RemoteInvocationMarker,?mode:'stream',?exportName:string)
    新: function(context:RemoteInitializerContext<This>,invocation:RemoteInvocationMarker,options:RemoteMarkerOptions)
- **[ast-signature-changed]** `packages/typert/protocol` — 签名变化: mark
    旧: function(prototype:object,method:string,invocation:RemoteInvocationMarker,?mode:'stream',?exportName:string)
    新: function(prototype:object,method:string,invocation:RemoteInvocationMarker,{ mode, exportName, resources }:RemoteMarkerOptions)
- **[ast-signature-changed]** `packages/util/atomic-write` — 签名变化: writeFileAtomic
    旧: function(filename:string,content:string,options:WriteFileAtomicOptions)
    新: function(filename:string,content:string | Uint8Array,options:WriteFileAtomicOptions)
- **[ast-signature-changed]** `packages/util/atomic-write` — 签名变化: FileLockOptions
    旧: export interface FileLockOptions { /** * Maximum time to wait for the lock, in milliseconds. State one when the * holder's operation legitimately runs longer than file work — a credential * mutation that refreshes a token performs a network round trip while * holding the lock, and leaving the default in place would fail every other * writer of the same file for the duration. Waiting is productive: a * contender that acquires the lock afterwards re-reads the committed state. */ waitMs?: number }
    新: export interface FileLockOptions { /** Cancel acquisition and contention waits; the operation owns cancellation after it starts. */ signal?: AbortSignal /** * Maximum time to wait for the lock, in milliseconds. State one when the * holder's operation legitimately runs longer than file work — a credential * mutation that refreshes a token performs a network round trip while * holding the lock, and leaving the default in place would fail every other * writer of the same file for the duration. Waiting is productive: a * contender that acquires the lock afterwards re-reads the committed state. */ waitMs?: number }
- **[ast-signature-changed]** `packages/util/timeout` — 签名变化: IdleWatchdog
    旧: export interface IdleWatchdog { /** Stable signal aborted by upstream cancellation or this watchdog's timeout. */ readonly signal: AbortSignal /** * Await one iterator demand while the idle timer is armed. * @param iterator - iterator whose next value represents provider progress. * @returns the iterator's next result. */ next<T>(iterator: AsyncIterator<T>): Promise<IteratorResult<T>> /** Rearm an outstanding demand after transport activity that yields no iterator value; otherwise a no-op. */ pulse(): void /** Clear an armed timer; safe to call once at the owning stream's exit. */ [Symbol.dispose](): void }
    新: export interface IdleWatchdog { /** Stable signal aborted by upstream cancellation or this watchdog's timeout. */ readonly signal: AbortSignal /** * Await one iterator demand while the idle timer is armed. The deadline * settles the demand even when the awaited work ignores its abort signal. * @param iterator - iterator whose next value represents provider progress. * @returns the iterator's next result. * @throws The {@link TimeoutReason} of this watchdog when the idle interval * elapses first. Only that deadline settles the demand: an upstream * cancellation reaches the iterator through {@link IdleWatchdog.signal} and * never shortens the wait. The abandoned demand stays the caller's to release * through that signal; an async generator queues its own return behind it, so * callers must not await it. Disposal clears the timer without settling an * outstanding demand. */ next<T>(iterator: AsyncIterator<T>): Promise<IteratorResult<T>> /** Rearm an outstanding demand after transport activity that yields no iterator value; otherwise a no-op. */ pulse(): void /** Clear an armed timer; safe to call once at the owning stream's exit. */ [Symbol.dispose](): void }
- **[ast-signature-changed]** `packages/workflow/tool-workflow` — 签名变化: startBackgroundRun
    旧: function(ctx:Context,args:WorkflowCallArgs,parent:Agent,recordsRun:boolean,deps:{ recorder: WorkflowRecorder; mirror: WorkflowRecordMirror; maxResultChars: number })
    新: function(ctx:Context,args:WorkflowCallArgs,parent:Agent,toolCall:JobToolCall,recordsRun:boolean,deps:{ recorder: WorkflowRecorder; mirror: WorkflowRecordMirror; maxResultChars: number })
- **[ast-signature-changed]** `packages/api/gateway/src/remote-error-codes.ts` — 签名变化: RemoteErrorDetailsMap
    旧: interface RemoteErrorDetailsMap { 'gateway/ambiguous-endpoint': TypertGatewayFaultDetails 'gateway/arguments-invalid': TypertGatewayFaultDetails 'gateway/binding-invalid': TypertGatewayFaultDetails 'gateway/context-failed': TypertGatewayFaultDetails 'gateway/context-not-found': TypertGatewayFaultDetails 'gateway/context-unavailable': TypertGatewayFaultDetails 'gateway/definition-unavailable': TypertGatewayFaultDetails 'gateway/input-invalid': TypertGatewayFaultDetails 'gateway/invocation-unavailable': TypertGatewayFaultDetails 'gateway/lookup-failed': TypertGatewayFaultDetails 'gateway/lookup-not-found': TypertGatewayFaultDetails 'gateway/lookup-unavailable': TypertGatewayFaultDetails 'gateway/method-unavailable': TypertGatewayFaultDetails 'gateway/protocol': TypertGatewayFaultDetails 'gateway/provider-mismatch': TypertGatewayFaultDetails 'gateway/result-invalid': TypertGatewayFaultDetails 'gateway/service-unavailable': TypertGatewayFaultDetails 'gateway/signature-invalid': TypertGatewayFaultDetails 'gateway/uplink-overflow': TypertGatewayFaultDetails }
    新: interface RemoteErrorDetailsMap { 'gateway/ambiguous-endpoint': TypertGatewayFaultDetails 'gateway/arguments-invalid': TypertGatewayFaultDetails 'gateway/binding-invalid': TypertGatewayFaultDetails 'gateway/context-failed': TypertGatewayFaultDetails 'gateway/context-not-found': TypertGatewayFaultDetails 'gateway/context-unavailable': TypertGatewayFaultDetails 'gateway/definition-unavailable': TypertGatewayFaultDetails 'gateway/input-invalid': TypertGatewayFaultDetails 'gateway/interactions-forbidden': TypertGatewayFaultDetails 'gateway/invocation-unavailable': TypertGatewayFaultDetails 'gateway/lookup-failed': TypertGatewayFaultDetails 'gateway/lookup-not-found': TypertGatewayFaultDetails 'gateway/lookup-unavailable': TypertGatewayFaultDetails 'gateway/method-unavailable': TypertGatewayFaultDetails 'gateway/peer-disposed': TypertGatewayFaultDetails 'gateway/protocol': TypertGatewayFaultDetails 'gateway/provider-mismatch': TypertGatewayFaultDetails 'gateway/result-invalid': TypertGatewayFaultDetails 'gateway/service-unavailable': TypertGatewayFaultDetails 'gateway/signature-invalid': TypertGatewayFaultDetails 'gateway/uplink-overflow': TypertGatewayFaultDetails }
- **[ast-signature-changed]** `packages/api/gateway/src/types.ts` — 签名变化: InvokeRemoteRequest
    旧: export interface InvokeRemoteRequest { /** Remote namespace selected by the generated descriptor. */ readonly namespace: string /** Exported Service method name. */ readonly method: string /** Named wire values; fields must exactly match the descriptor. */ readonly args: Readonly<Record<string, unknown>> /** * Client uplink items of this logical stream, delivered to the method through * `invocation.uplink()`; absent means an immediately ended iterable. */ readonly uplink?: AsyncIterable<unknown> /** Peer the call speaks for; absent means an in-process carrier, answered as the operator. */ readonly peer?: PeerScope /** Carrier or direct-caller cancellation injected only into cancellation-aware methods. */ readonly signal?: AbortSignal }
    新: export interface InvokeRemoteRequest { /** Remote namespace selected by the generated descriptor. */ readonly namespace: string /** Exported Service method name. */ readonly method: string /** Named wire values; fields must exactly match the descriptor. */ readonly args: Readonly<Record<string, unknown>> /** * Client uplink items of this logical stream, delivered to the method through * `invocation.uplink()`; absent means an immediately ended iterable. */ readonly uplink?: AsyncIterable<unknown> /** Carrier-provided frame capacity; absent for carriers without an encoded-frame inbox limit. */ readonly uplinkWindow?: RemoteUplinkWindow | undefined /** Peer the call speaks for; every carrier and in-process caller names it explicitly. */ readonly peer: PeerScope /** Carrier or direct-caller cancellation injected only into cancellation-aware methods. */ readonly signal?: AbortSignal }
- **[ast-signature-changed]** `packages/api/gateway/src/types.ts` — 签名变化: TypertRemoteEventFrame
    旧: export interface TypertRemoteEventFrame { /** Original Host Cordis event name. */ readonly event: string /** Original event argument list after the owner validates it for JSON transport. */ readonly args: readonly unknown[] }
    新: export interface TypertRemoteEventFrame { /** Original Host Cordis event name. */ readonly event: string /** Original event argument list after the owner validates it for JSON transport. */ readonly args: readonly unknown[] /** * Readers of the resources the arguments carry, keyed by resource kind and * called with the arguments as positional parameters. Absent or empty for * a notification that touches the global resource. */ readonly resources?: Readonly<Record<string, TypertResourceReader>> }
- **[ast-signature-changed]** `packages/api/gateway/src/types.ts` — 签名变化: TypertGatewayWireStream
    旧: export interface TypertGatewayWireStream { /** * Open one logical stream from its wire endpoint and payload. * @param endpoint - canonical Remote endpoint or Gateway-owned stream name. * @param payload - decoded carrier payload. * @param uplink - Client-to-Host items of the logical stream; a Gateway-owned endpoint returns its iterator * as soon as it opens, so the carrier drops those items instead of buffering them. * @param peer - Peer the stream speaks for; `undefined` means the operator's in-process carrier. * @param signal - logical-stream cancellation. * @returns validated stream values. */ readonly open: ( endpoint: string, payload: unknown, uplink: AsyncIterable<unknown>, peer: PeerScope | undefined, signal: AbortSignal, ) => Promise<AsyncIterable<unknown>> /** * Convert a stream failure to the carrier-safe Remote failure fields. * @param error - failure raised while opening or consuming a stream. * @returns stable code, message, and details for the Client. */ readonly failure: (error: unknown) => { readonly code: string readonly message: string readonly details: object } }
    新: export interface TypertGatewayWireStream { /** * Open one logical stream from its wire endpoint and payload. * @param endpoint - canonical Remote endpoint or Gateway-owned stream name. * @param payload - decoded carrier payload. * @param uplink - Client-to-Host items of the logical stream; a Gateway-owned endpoint returns its iterator * as soon as it opens, so the carrier drops those items instead of buffering them. * @param peer - Peer the stream speaks for; required, never defaulted. * @param signal - logical-stream cancellation. * @returns validated stream values. */ readonly open: ( endpoint: string, payload: unknown, uplink: AsyncIterable<unknown>, peer: PeerScope, signal: AbortSignal, ) => Promise<AsyncIterable<unknown>> /** * Convert a stream failure to the carrier-safe Remote failure fields. * @param error - failure raised while opening or consuming a stream. * @returns stable code, message, and details for the Client. */ readonly failure: (error: unknown) => { readonly code: string readonly message: string readonly details: object } }
- **[ast-signature-changed]** `packages/api/gateway/src/types.ts` — 签名变化: TypertGatewayErrorCode
    旧: export type TypertGatewayErrorCode = | 'gateway/ambiguous-endpoint' | 'gateway/arguments-invalid' | 'gateway/binding-invalid' | 'gateway/context-failed' | 'gateway/context-not-found' | 'gateway/context-unavailable' | 'gateway/definition-unavailable' | 'gateway/input-invalid' | 'gateway/invocation-unavailable' | 'gateway/lookup-failed' | 'gateway/lookup-not-found' | 'gateway/lookup-unavailable' | 'gateway/method-unavailable' | 'gateway/protocol' | 'gateway/provider-mismatch' | 'gateway/result-invalid' | 'gateway/service-unavailable' | 'gateway/signature-invalid' | 'gateway/uplink-overflow'
    新: export type TypertGatewayErrorCode = | 'gateway/ambiguous-endpoint' | 'gateway/arguments-invalid' | 'gateway/binding-invalid' | 'gateway/context-failed' | 'gateway/context-not-found' | 'gateway/context-unavailable' | 'gateway/definition-unavailable' | 'gateway/input-invalid' | 'gateway/interactions-forbidden' | 'gateway/invocation-unavailable' | 'gateway/lookup-failed' | 'gateway/lookup-not-found' | 'gateway/lookup-unavailable' | 'gateway/method-unavailable' | 'gateway/peer-disposed' | 'gateway/protocol' | 'gateway/provider-mismatch' | 'gateway/result-invalid' | 'gateway/service-unavailable' | 'gateway/signature-invalid' | 'gateway/uplink-overflow'
- **[ast-signature-changed]** `packages/api/gateway/src/types.ts` — 签名变化: TypertGateway
    旧: export interface TypertGateway { /** Carrier adapter shared by WebSocket and in-process transports. */ readonly wireStream: TypertGatewayWireStream /** * Register the application-selected forwarded-event source. * @param source - stream factory installed by the Remote assembly. * @param host - stable Host facts included in each Client generation's opening frame. * @returns disposer removing this exact source and cancelling its active streams. */ registerRemoteEvents( source: TypertRemoteEventSource, host: RemoteEventHostInfo, ): () => Promise<void> /** * Invoke one live Remote method without assuming a carrier or response envelope. * @param request - decoded endpoint and named wire arguments. * @returns the business result without output decoding. * @throws {@link TypertGatewayError} for dispatch, provider, or boundary failures; lookup-policy and business errors retain identity. */ invoke(request: InvokeRemoteRequest): Promise<unknown> /** * Open one live stream Remote method without assuming a physical carrier. * @param request - decoded endpoint, named wire arguments, and the Client uplink when the carrier has one. * @returns a cancellation-aware iterable over the business results. */ stream(request: InvokeRemoteRequest): Promise<AsyncIterable<unknown>> }
    新: export interface TypertGateway { /** Carrier adapter shared by WebSocket and in-process transports. */ readonly wireStream: TypertGatewayWireStream /** * Check for an active owner Client event stream, the only kind that can answer forwarded waterfalls. * @returns whether an owner stream is open and has not been cancelled. */ hasLiveClient(): boolean /** * Register the application-selected forwarded-event source. * @param source - stream factory installed by the Remote assembly. * @param host - stable Host facts included in each Client generation's opening frame. * @returns disposer removing this exact source and cancelling its active streams. */ registerRemoteEvents( source: TypertRemoteEventSource, host: RemoteEventHostInfo, ): () => Promise<void> /** * Invoke one live Remote method without assuming a carrier or response envelope. * @param request - decoded endpoint and named wire arguments. * @returns the business result without output decoding. * @throws {@link TypertGatewayError} for dispatch, provider, or boundary failures; lookup-policy and business errors retain identity. */ invoke(request: InvokeRemoteRequest): Promise<unknown> /** * Open one live stream Remote method without assuming a physical carrier. * @param request - decoded endpoint, named wire arguments, and the Client uplink when the carrier has one. * @returns a cancellation-aware iterable over the business results. */ stream(request: InvokeRemoteRequest): Promise<AsyncIterable<unknown>> }
- **[ast-signature-changed]** `packages/session/working-directory` — 签名变化: SessionProjectionMap
    旧: interface SessionProjectionMap { /** Persisted facts used to summarize a Session without activating it. */ sessionListMetadata: SessionListMetadata /** Image-intake limits enforced by the Session prompt endpoint. */ imageLimits: ImageAttachmentLimits /** Durable model selection already used and selected for the next request. */ modelSelection: ModelSelectionProjection }
    新: interface SessionProjectionMap { /** Recorded current directory for Session observations, or null when none is recorded. */ workingDirectory: string | null }
- **[ast-signature-changed]** `packages/api/session-controller/src/types.ts` — 签名变化: SessionSummary
    旧: export interface SessionSummary { /** Whether this Session currently owns a live Agent. */ readonly agentAvailable: boolean readonly sessionId: SessionId readonly updatedAt: number readonly running: boolean readonly blank: boolean readonly parentSessionId?: SessionId readonly origin?: 'subagent' readonly cwd?: string readonly projections?: SessionProjectionHints }
    新: export interface SessionSummary { /** Whether this Session currently owns a live Agent. */ readonly agentAvailable: boolean /** Current for attached Sessions; otherwise the persistence format status when reported. */ readonly formatStatus?: 'current' | 'migration-required' readonly sessionId: SessionId readonly updatedAt: number readonly running: boolean readonly blank: boolean readonly parentSessionId?: SessionId readonly origin?: 'subagent' readonly cwd?: string readonly projections?: SessionProjectionHints }
- **[ast-signature-changed]** `packages/api/session-controller/src/types.ts` — 签名变化: SessionCreateRequest
    旧: export interface SessionCreateRequest { readonly workspaceId?: WorkspaceId readonly cwd?: string readonly sessionId?: SessionId readonly agentPreset?: string }
    新: export interface SessionCreateRequest { /** Workspace the Session joins; exclusive with `cwd`. */ readonly workspaceId?: WorkspaceId /** Directory the Session owns when no Workspace is named. */ readonly cwd?: string /** Blank Session to reuse while it is reusable, or the identity of a new Session when none is stored under it. */ readonly sessionId?: SessionId /** Preset the Session runs, replacing a reused Session's recorded preset; the configured default when omitted. */ readonly agentPreset?: string }
- **[ast-signature-changed]** `packages/api/session-controller/src/types.ts` — 签名变化: SessionCreateValue
    旧: export interface SessionCreateValue { readonly sessionId: SessionId readonly agentPreset?: string }
    新: export interface SessionCreateValue { /** The created or reused Session, which may differ from the requested `sessionId`. */ readonly sessionId: SessionId /** Preset the Session runs, when the deployment composes a preset roster. */ readonly agentPreset?: string }
- **[ast-signature-changed]** `packages/api/session-controller/src/types.ts` — 签名变化: SessionForkRequest
    旧: export interface SessionForkRequest { readonly sessionId: SessionId /** Exact inclusive source event seq; omission selects the latest completed-turn prefix. */ readonly atSeq?: number }
    新: export interface SessionForkRequest { readonly sessionId: SessionId /** Exact inclusive source event seq; omission selects the latest completed-turn prefix. */ readonly atSeq?: number /** False asks the Host to check for required migration before forking. Defaults to true. */ readonly allowMigration?: boolean }
- **[ast-signature-changed]** `packages/api/session-controller/src/types.ts` — 签名变化: SessionProjectionsValue
    旧: export type SessionProjectionsValue = SessionProjectionBaseline | null
    新: export type SessionProjectionsValue = | (SessionProjectionBaseline & { readonly kind: 'sequenced' }) | { readonly kind: 'migration-required'; readonly values: SessionProjectionValues } | null
- **[ast-signature-changed]** `packages/api/session-controller/src/agent.ts` — 签名变化: ApiSessionPresetConflict
    旧: class(sessionId:SessionId,requestedPreset:string,existingPreset:string | undefined)
    新: class(sessionId:SessionId,requestedPreset:string)
- **[ast-signature-changed]** `packages/boot/app-boot` — 签名变化: resume
    旧: var
    新: function(ctx:Context,invalidated:readonly Entry[])
- **[ast-signature-changed]** `packages/subagent/tool-subagent` — 签名变化: agentPreset
    旧: var:string | undefined
    新: var
- **[ast-signature-changed]** `packages/api/terminal-controller/src/types.ts` — 签名变化: TerminalEnvironment
    旧: export interface TerminalEnvironment { readonly cwd: string readonly maxInputBytes: number readonly maxCols: number readonly maxRows: number readonly scrollback: number }
    新: export interface TerminalEnvironment { /** Logged current directory, read without filesystem validation. */ readonly cwd: string readonly maxInputBytes: number /** Maximum complete encoded Client input bytes retained until acknowledgement. */ readonly maxBufferedBytes: number readonly maxCols: number readonly maxRows: number readonly scrollback: number }
- **[ast-signature-changed]** `packages/api/terminal-controller/src/types.ts` — 签名变化: WebTerminalInfo
    旧: export interface WebTerminalInfo { readonly id: WebTerminalId readonly title: string readonly shell: TerminalShell /** Initial working directory; shell directory changes do not update this field. */ readonly cwd: string readonly cols: number readonly rows: number readonly state: 'running' | 'exited' | 'failed' readonly exitCode: number | null readonly error?: string readonly controllerId?: TerminalAttachmentId }
    新: export interface WebTerminalInfo { readonly id: WebTerminalId readonly title: string readonly shell: TerminalShell /** Initial working directory; shell directory changes do not update this field. */ readonly cwd: string readonly cols: number readonly rows: number readonly state: 'running' | 'exited' | 'failed' readonly exitCode: number | null readonly error?: string }
- **[ast-signature-changed]** `packages/api/terminal-controller/src/types.ts` — 签名变化: TerminalFrame
    旧: export type TerminalFrame = | { readonly type: 'snapshot'; readonly sequence: number; readonly screen: string; readonly info: WebTerminalInfo } | { readonly type: 'output'; readonly sequence: number; readonly data: string } | { readonly type: 'state'; readonly info: WebTerminalInfo }
    新: export type TerminalFrame = | { readonly type: 'snapshot'; readonly sequence: number; readonly screen: string; readonly info: WebTerminalInfo; readonly writable: boolean; readonly inputWindow?: RemoteUplinkWindow } | { readonly type: 'output'; readonly sequence: number; readonly data: string } | { readonly type: 'state'; readonly info: WebTerminalInfo; readonly writable: boolean } | { readonly type: 'ack'; readonly sequence: number; readonly refusal?: 'read-only' | 'not-running' }
- **[ast-signature-changed]** `packages/api/workspace-controller/src/types.ts` — 签名变化: WorkspaceFollowIncrement
    旧: export type WorkspaceFollowIncrement = | { readonly type: 'upsert'; readonly workspace: WorkspaceView } | { readonly type: 'remove'; readonly workspaceId: WorkspaceId } | { readonly type: 'order'; readonly workspaceIds: readonly WorkspaceId[] } | { readonly type: 'archived'; readonly archivedSessionIds: readonly SessionId[] } | { readonly type: 'pinned'; readonly pinnedSessionIds: readonly SessionId[] }
    新: export type WorkspaceFollowIncrement = | { readonly type: 'replace'; readonly value: WorkspaceBaseline } | { readonly type: 'upsert'; readonly workspace: WorkspaceView } | { readonly type: 'remove'; readonly workspaceId: WorkspaceId } | { readonly type: 'order'; readonly workspaceIds: readonly WorkspaceId[] } | { readonly type: 'archived'; readonly archivedSessionIds: readonly SessionId[] } | { readonly type: 'pinned'; readonly pinnedSessionIds: readonly SessionId[] }
- **[ast-signature-changed]** `packages/experimental/claude-code-mods` — 签名变化: textOf
    旧: function(value:unknown,path:string)
    新: function(blocks:readonly ContentBlock[])
- **[ast-signature-changed]** `packages/boot/plugin-manager/src/types.ts` — 签名变化: ManagementError
    旧: export interface ManagementError { code: ReadOnlyReason | 'unknown-plugin' | 'invalid-spec' | 'ambiguous-install' | 'not-bundle' | 'not-removable' | 'stop-profile' | 'bundle-in-use' | 'stale-approval' | 'incompatible-version' | 'operation-error' diagnostic?: string /** Present with `incompatible-version`: the packages the running DSH version rejects. */ incompatible?: IncompatiblePlugin[] }
    新: export interface ManagementError { code: ReadOnlyReason | 'unknown-plugin' | 'invalid-spec' | 'already-installed' | 'ambiguous-install' | 'not-bundle' | 'not-removable' | 'stop-profile' | 'bundle-in-use' | 'stale-approval' | 'incompatible-version' | 'operation-error' diagnostic?: string /** Present with `incompatible-version`: the packages the running DSH version rejects. */ incompatible?: IncompatiblePlugin[] }
- **[ast-signature-changed]** `packages/boot/plugin-manager/src/types.ts` — 签名变化: BundleInfo
    旧: export interface BundleInfo { name: string version?: string /** Local display text with available translations or literal fallbacks, or a metadata diagnostic. */ meta?: PluginLocalizedMeta /** Untranslated `description` of this bundle's package manifest. */ description?: string /** Selected in the profile manifest; a load error means its layer was skipped. */ enabled: boolean /** Whether the profile's own dependencies hold the package; false for a bundle the dsh installation supplies. */ installed: boolean /** * Whether the installation ships the bundle for the person to switch on: named by the launcher's `OPTIONAL_BUNDLES`, * held by the installation's dependencies, selected by no shipped template, and never removable. */ optional: boolean removable: boolean readOnlyReason?: ReadOnlyReason error?: ManagementError /** The rows the bundle's patch inserts, in declaration order; empty when the patch cannot be read. */ rows: BundleRowInfo[] /** Ids of rows the bundle's patch changes without declaring them: the built-in rows it configures or disables. */ overrides: string[] }
    新: export interface BundleInfo { name: string /** Project-maintained shipped optional bundle or on-demand catalog entry, independent of installation and selection. */ official: boolean /** Readable package location; on-demand catalog entries exclude undeclared transitive copies, and declared files may be missing. */ availability: 'installation' | 'profile' | 'missing' /** Exact released Host version or same-checkout development link offered for an on-demand catalog entry. */ installTarget?: { spec: string; version: string } version?: string /** Local display text with available translations or literal fallbacks, or a metadata diagnostic. */ meta?: PluginLocalizedMeta /** Untranslated `description` of this bundle's package manifest. */ description?: string /** Selected in the profile manifest; a load error means its layer was skipped. */ enabled: boolean /** Whether the profile declares this dependency; availability separately reports whether its files can be read. */ installed: boolean /** * Present for a profile dependency the installation does not also supply: the spec `pnpm add` accepts, with local * paths made absolute and the user information of an http(s) URL removed. */ source?: string /** * Whether the installation ships the bundle for the person to switch on: named by the launcher's `OPTIONAL_BUNDLES`, * held by the installation's dependencies, selected by no shipped template, and never removable. */ optional: boolean removable: boolean readOnlyReason?: ReadOnlyReason error?: ManagementError /** The rows the bundle's patch inserts, in declaration order; empty when the patch cannot be read. */ rows: BundleRowInfo[] /** Ids of rows the bundle's patch changes without declaring them: the built-in rows it configures or disables. */ overrides: string[] }
- **[ast-signature-changed]** `packages/boot/plugin-manager/src/types.ts` — 签名变化: ChangeResult
    旧: export interface ChangeResult { changed: boolean /** `cancelled` is an installation the caller stopped, its files restored. */ application: 'applied' | 'restart-required' | 'overridden' | 'failed' | 'cancelled' /** Last attempted step; successful installation can proceed to enablement. */ stage: 'install' | 'enable' | 'remove' target: string enabled?: boolean error?: ManagementError /** Pre-existing inactive entries the operation left as they were. */ warnings?: string[] packageResult?: PackageResult /** The bundle an installation added, once pnpm and the bundle check accepted it. */ bundle?: string /** Exact package names awaiting explicit script approval in the profile's pnpm settings, read after a failed run. */ pendingBuilds?: string[] /** Package script permissions saved before this installation attempt. */ approvedBuilds?: string[] /** The registries the installation asked, in order; `packageResult` is the last one's run. */ registries?: Registry[] /** * What the last failed run could not reach or get an answer from: the registry it asked, or the host a git or * tarball spec is fetched from, which no registry stands in for; absent for a failure neither explains. */ failedAt?: 'registry' | 'spec-host' }
    新: export interface ChangeResult { changed: boolean /** `cancelled` is an installation the caller stopped, its files restored. */ application: 'applied' | 'restart-required' | 'overridden' | 'failed' | 'cancelled' /** Present with `restart-required`: why the change takes effect only at the next start. */ restartReason?: RestartReason /** Last attempted step; successful installation can proceed to enablement. */ stage: 'install' | 'enable' | 'remove' target: string enabled?: boolean error?: ManagementError /** Pre-existing inactive entries the operation left as they were. */ warnings?: string[] packageResult?: PackageResult /** The bundle an installation added, once pnpm and the bundle check accepted it. */ bundle?: string /** The installed bundle's manifest version, when declared; pnpm's `minimumReleaseAge` can make it older than the newest release. */ version?: string /** Exact package names awaiting explicit script approval in the profile's pnpm settings, read after a failed run. */ pendingBuilds?: string[] /** Package script permissions saved before this installation attempt. */ approvedBuilds?: string[] /** The registries the installation asked, in order; `packageResult` is the last one's run. */ registries?: Registry[] /** * What the last failed run could not reach or get an answer from: the registry it asked, or the host a git or * tarball spec is fetched from, which no registry stands in for; absent for a failure neither explains. */ failedAt?: 'registry' | 'spec-host' }
- **[ast-signature-changed]** `packages/boot/plugin-manager/src/types.ts` — 签名变化: InstallBundleOptions
    旧: export interface InstallBundleOptions { enabled?: boolean requestId?: PluginInstallRequestId /** Explicitly allow these pending packages' scripts for this profile, then install; a name no longer pending refuses the call. */ approvedBuilds?: string[] /** The registry asked first; absent, the configured one. The configured fallbacks follow while a registry is unreachable or stale. */ registry?: Registry }
    新: export interface InstallBundleOptions { enabled?: boolean /** Save the resolved dependency version without a range; applies to any bundle installation. */ saveExact?: boolean requestId?: PluginInstallRequestId /** Explicitly allow these pending packages' scripts for this profile, then install; a name no longer pending refuses the call. */ approvedBuilds?: string[] /** The registry asked first; absent, the configured one. The configured fallbacks follow while a registry is unreachable or stale. */ registry?: Registry }
- **[ast-signature-changed]** `packages/schedule/tool-schedule` — 签名变化: invalid
    旧: function(spec:string,reason:string)
    新: var
- **[ast-signature-changed]** `packages/client/connection/src/rpc.ts` — 签名变化: ConnectionFetchRoute
    旧: export interface ConnectionFetchRoute { /** Absolute path below `/api`; query parameters remain available on the request URL. */ readonly path: string /** Methods this route owns. Other methods continue through normal shared-channel dispatch. */ readonly methods: readonly ConnectionFetchMethod[] /** Buffered requests obey the configured JSON cap; streaming requests arrive with backpressure and no aggregate cap. */ readonly requestBody: ConnectionRequestBodyMode /** Handle one request after the physical carrier has applied its trust and authentication policy. */ readonly fetch: (request: Request) => Promise<Response> }
    新: export interface ConnectionFetchRoute { /** Absolute path below `/api`; query parameters remain available on the request URL. */ readonly path: string /** Methods this route owns. Other methods continue through normal shared-channel dispatch. */ readonly methods: readonly ConnectionFetchMethod[] /** Buffered requests obey the configured JSON cap; streaming requests arrive with backpressure and no aggregate cap. */ readonly requestBody: ConnectionRequestBodyMode /** * Handle one request after the physical carrier has applied its trust and * authentication policy. Only owner Peers reach an exact route; the shared * handler answers 403 for every other principal. */ readonly fetch: (request: Request) => Promise<Response> }
- **[ast-signature-changed]** `packages/client/connection/src/rpc.ts` — 签名变化: HostConnectionHandle
    旧: export interface HostConnectionHandle { /** Generic RPC channel registry. */ readonly rpc: HostConnectionRpc /** Exact Fetch routes for streaming or browser-native responses. */ readonly fetch: HostConnectionFetch /** The operator Peer every admitted request speaks for; its scope lives as long as Connection. */ readonly operator: PeerScope /** * Compose exact Fetch routes and the shared-channel RPC interceptor. * @param channel - shared channel mounted by Connection. * @returns Fetch handler for trusted, authenticated requests. */ createSharedFetchHandler(channel: '/api'): ConnectionFetchHandler /** * Apply Connection's Host/Origin checks and browser authentication to * another Web route. * @param request - request headers from the HTTP or upgrade request. * @returns rejection status, or undefined when the route may accept the request. */ requestRejection(request: ConnectionTrustRequest): ConnectionRequestRejection /** * Admit one request: it passes {@link requestRejection} and speaks for the * operator, or it is refused with that status. * @param request - request headers from the HTTP or upgrade request. * @returns the operator Peer, or the rejection status. */ admit(request: ConnectionTrustRequest): PeerAdmission /** * Authenticate one frontend index request, owning a token redirect or 401. * @param request - root or configured-index HTTP request. * @param response - response owned when the result is false. * @returns true only when the frontend may serve index.html. */ authorizeIndex(request: ConnectionIndexRequest, response: ConnectionIndexResponse): boolean /** * Add the fresh process token to an ordinary Web application URL. * @param baseUrl - clean application URL whose authority and mount are preserved. * @returns tokenized URL for initial login; a mount proxy strips its prefix before {@link authorizeIndex}. */ authenticatedUrl(baseUrl: string): string }
    新: export interface HostConnectionHandle { /** Generic RPC channel registry. */ readonly rpc: HostConnectionRpc /** Exact Fetch routes for streaming or browser-native responses. */ readonly fetch: HostConnectionFetch /** The owner Peer every authenticated browser connection shares. */ readonly browserPeer: PeerScope /** * Whether this deployment accepts authorities beyond loopback: true only * when a validated `trustedHosts` entry names a non-loopback hostname. */ readonly allowsRemoteAuthorities: boolean /** * Compose exact Fetch routes and the shared-channel RPC interceptor. * @param channel - shared channel mounted by Connection. * @returns Fetch handler for trusted, authenticated requests. */ createSharedFetchHandler(channel: '/api'): ConnectionFetchHandler /** * Apply Connection's Host/Origin checks and browser authentication to * another Web route. * @param request - request headers from the HTTP or upgrade request. * @returns rejection status, or undefined when the route may accept the request. */ requestRejection(request: ConnectionTrustRequest): ConnectionRequestRejection /** * Admit an HTTP request against its signed browser or API credential and live Peer. * @param request - request headers from the HTTP or upgrade request. * @returns the credential's Peer, or the rejection status. */ admit(request: ConnectionTrustRequest): PeerAdmission /** * Create an independent in-process Peer, disposed with the Context that read `ctx.connection`. * @param options - fixed principal and optional interaction participation (default `answer`). * @returns a new Peer distinct from every other Peer. */ createPeer(options: { readonly principal: Principal; readonly interactions?: 'answer' | 'none' }): PeerScope /** * Claim a physical socket for an API Peer; browser sockets share their owner Peer. * @param request - authenticated upgrade request headers. * @returns the Peer and idempotent release, or 409 for duplicate API ownership. * The carrier releases on socket termination or failed upgrade; release removes * API admission synchronously without cancelling independent HTTP calls. */ admitConnection(request: ConnectionTrustRequest): ConnectionAdmission /** * Authenticate one frontend index request, owning a token redirect or 401. * The cookie this mints is `Secure` when the mounted Web carrier serves TLS, * which only that listener's protocol decides. * @param request - root or configured-index HTTP request. * @param response - response owned when the result is false. * @returns true only when the frontend may serve index.html. */ authorizeIndex(request: ConnectionIndexRequest, response: ConnectionIndexResponse): boolean /** * Add the fresh process token to an ordinary Web application URL. * @param baseUrl - clean application URL whose authority and mount are preserved. * @returns tokenized URL for initial login; a mount proxy strips its prefix before {@link authorizeIndex}. */ authenticatedUrl(baseUrl: string): string }
- **[ast-signature-changed]** `packages/client/connection/src/rpc.ts` — 签名变化: ConnectionFetchHandler
    旧: export interface ConnectionFetchHandler { /** * Resolve body handling before the bridge reads any request bytes. * @param request - request method and URL available from node:http headers. * @returns the registered route's body handling mode. */ requestBodyMode(request: { readonly method: string; readonly url: URL }): ConnectionRequestBodyMode /** * Dispatch one already-authenticated request. * @param request - Fetch request below the shared channel. * @returns the registered response or a 404 response. */ fetch(request: Request): Promise<Response> }
    新: export interface ConnectionFetchHandler { /** * Resolve body handling before the bridge reads any request bytes. * @param request - request method and URL available from node:http headers. * @returns the registered route's body handling mode. */ requestBodyMode(request: { readonly method: string; readonly url: URL }): ConnectionRequestBodyMode /** * Dispatch one already-authenticated request. * @param request - Fetch request below the shared channel. * @param peer - Peer to dispatch as; required, never defaulted. * @returns the registered response, a 403 response for an exact route and a non-owner Peer, or a 404 response. */ fetch(request: Request, peer: PeerScope): Promise<Response> }
- **[ast-signature-changed]** `packages/client/connection/src/rpc-host.ts` — 签名变化: rpcFetchHandler
    旧: function(channel:string,handler:ConnectionRpcHandler,peer:PeerScope)
    新: function(channel:string,handler:ConnectionRpcHandler)
- **[ast-signature-changed]** `packages/client/ui-chat/src/chat-settings.ts` — 签名变化: ChatSettings
    旧: export interface ChatSettings { /** Work-details preference; absence uses the client default, and legacy saved values remain accepted. */ transcriptView?: TranscriptViewMode | typeof LEGACY_TRANSCRIPT_VIEW_MODE | typeof LEGACY_EXPANDED_TRANSCRIPT_VIEW_MODE | null /** Detail level for composer statistics and completed-Turn usage. */ performanceUsage: PerformanceUsageMode /** Default destination for Chat HTTP(S) links. */ linkOpening: LinkOpening }
    新: export interface ChatSettings { /** Work-details preference; absence uses the client default, and legacy saved values remain accepted. */ transcriptView?: TranscriptViewMode | typeof LEGACY_TRANSCRIPT_VIEW_MODE | typeof LEGACY_EXPANDED_TRANSCRIPT_VIEW_MODE | null /** Independent collapse timing; absence preserves completion-time folding. */ collapseTiming?: CollapseTiming /** Detail level for composer statistics and completed-Turn usage. */ performanceUsage: PerformanceUsageMode /** Default destination for Chat HTTP(S) links. */ linkOpening: LinkOpening }
- **[ast-signature-changed]** `packages/host/webserver` — 签名变化: zoneAt
    旧: function(x:number,y:number,edge:number)
    新: var
- **[ast-signature-changed]** `packages/experimental/claude-code-mods` — 签名变化: ops
    旧: var:LayoutOp[]
    新: var
- **[ast-signature-changed]** `packages/client/ui-primitives/src/DisclosureRow.tsx` — 签名变化: DisclosureRowProps
    旧: export interface DisclosureRowProps { icon: ReactNode title: string open: boolean expandable: boolean onToggle: () => void /** Animate the complete header while its owning operation is running. */ running?: boolean | undefined /** Makes the complete title row the disclosure target. */ expandOnRowClick?: boolean | undefined /** Replaces the collapsed icon with a chevron while the row is hovered. */ previewChevron?: boolean | undefined /** Keeps `collapsedContent` inline while open. */ keepContentWhenOpen?: boolean | undefined collapsedContent?: ReactNode children?: ReactNode className?: string | undefined rowClassName?: string | undefined /** Sizing class for the header text area, beside the leading icon. */ contentClassName?: string | undefined /** Layout class shared by the header text and its decorative copy. */ contentLayoutClassName?: string | undefined leadingClassName?: string | undefined chevronClassName?: string | undefined titleClassName?: string | undefined }
    新: export interface DisclosureRowProps { icon: ReactNode title: string open: boolean expandable: boolean onToggle: () => void /** Animate the complete header while its owning operation is running. */ running?: boolean | undefined /** Makes the title row the disclosure target; with an accessory, it shrinks to its content width. */ expandOnRowClick?: boolean | undefined /** Replaces the collapsed icon with a chevron while the row is hovered. */ previewChevron?: boolean | undefined /** Keeps `collapsedContent` inline while open. */ keepContentWhenOpen?: boolean | undefined collapsedContent?: ReactNode /** Independent action beside the title, outside the disclosure target and shimmer. */ headerAccessory?: ReactNode children?: ReactNode className?: string | undefined rowClassName?: string | undefined /** Sizing class for the header text area, beside the leading icon. */ contentClassName?: string | undefined /** Layout class shared by the header text and its decorative copy. */ contentLayoutClassName?: string | undefined leadingClassName?: string | undefined chevronClassName?: string | undefined titleClassName?: string | undefined }
- **[ast-signature-changed]** `packages/client/ui-primitives/src/HoverCard.tsx` — 签名变化: HoverCard
    旧: function({
  anchor, content, openDelayMs = 500, disabled = false,
  copyText, copyLabel, copiedLabel, variant = 'compact', widthAnchorRef, inline = false,
}:{ anchor: ReactNode /** Inline media preview using the shared menu material and keyboard focus. */ inline?: boolean content: ReactNode openDelayMs?: number disabled?: boolean variant?: 'compact' | 'preview' widthAnchorRef?: RefObject<HTMLElement | null> } & ({ copyText?: string | undefined; copyLabel: string; copiedLabel: string } | { copyText?: undefined copyLabel?: string copiedLabel?: string }))
    新: function({
  anchor, content, openDelayMs = 500, disabled = false, grouped = false,
  copyText, copyLabel, copiedLabel, variant = 'compact', widthAnchorRef, inline = false,
}:{ anchor: ReactNode /** Inline media preview using the shared menu material and keyboard focus. */ inline?: boolean content: ReactNode openDelayMs?: number disabled?: boolean grouped?: boolean variant?: 'compact' | 'preview' widthAnchorRef?: RefObject<HTMLElement | null> } & ({ copyText?: string | undefined; copyLabel: string; copiedLabel: string } | { copyText?: undefined copyLabel?: string copiedLabel?: string }))
- **[ast-signature-changed]** `packages/typert/generator/src/analyzer.ts` — 签名变化: ranges
    旧: var:DecorationRange[]
    新: var
- **[ast-signature-changed]** `packages/experimental/ptc-runtime-python/src/protocol.ts` — 签名变化: m
    旧: var:RegExpExecArray | null
    新: var
- **[ast-signature-changed]** `packages/client/ui-primitives/src/HoverCardGroup.tsx` — 签名变化: pointer
    旧: var
    新: var:'outside' | 'list' | 'card'
- **[ast-signature-changed]** `packages/client/ui-primitives/src/TerminalBlock.tsx` — 签名变化: TerminalBlockLabels
    旧: export interface TerminalBlockLabels { /** Status pill text for a signal-terminated command. */ signal: (signal: string) => string /** Status pill text for a non-zero exit code. */ exitCode: (exitCode: number) => string /** Status pill text for a command that ended without an exit code: killed by a signal the view does not know, or never started. */ noExitCode: string /** Run-state text while the command is still running. */ running: string /** Run-state text for a signal or non-zero-exit settle. */ failed: string /** Run-state text for a clean settle. */ done: string /** Copy-button idle label. */ copy: string /** Copy-button label during the post-copy confirmation window. */ copied: string /** Placeholder when a settled command produced no visible output. */ noOutput: string /** Collapse-toggle aria label while expanded. */ collapseAria: string /** Collapse-toggle text while expanded. */ collapse: string /** Expand-toggle aria label while capped, given the hidden line count. */ expandAria: (hidden: number) => string /** Expand-toggle text while capped, given the hidden line count. */ expand: (hidden: number) => string }
    新: export interface TerminalBlockLabels { /** Accessible name for an overflowing authored command line, numbered from one. */ commandLine: (line: number) => string /** Status pill text for a signal-terminated command. */ signal: (signal: string) => string /** Status pill text for a non-zero exit code. */ exitCode: (exitCode: number) => string /** Status pill text for a command that ended without an exit code: killed by a signal the view does not know, or never started. */ noExitCode: string /** Run-state text while the command is still running. */ running: string /** Run-state text for a signal or non-zero-exit settle. */ failed: string /** Run-state text for a clean settle. */ done: string /** Copy-button idle label. */ copy: string /** Copy-button label during the post-copy confirmation window. */ copied: string /** Placeholder when a settled command produced no visible output. */ noOutput: string /** Collapse-toggle aria label while expanded. */ collapseAria: string /** Collapse-toggle text while expanded. */ collapse: string /** Expand-toggle aria label while capped, given the hidden line count. */ expandAria: (hidden: number) => string /** Expand-toggle text while capped, given the hidden line count. */ expand: (hidden: number) => string }
- **[ast-signature-changed]** `packages/client/ui-primitives/src/TerminalBlock.tsx` — 签名变化: TerminalBlockProps
    旧: export interface TerminalBlockProps { /** The command line, rendered verbatim after the prompt label. */ command: string /** Working directory for the prompt label; absent renders a plain `$`. */ cwd?: string | undefined /** Absolute home directory, so a cwd equal to it collapses to `~`; absent disables that collapse. */ home?: string | undefined /** The command's output text; may contain ANSI escape sequences. */ output?: string | undefined /** Settled exit code; a non-zero value renders the status pill, and null (settled without one) the no-exit-code pill. */ exitCode?: number | null | undefined /** Settled terminating signal name; any value renders the status pill, taking precedence over the exit code. */ signal?: string | undefined /** * The command is still running: with no `output` the block shows the prompt * line alone; with output it renders the live text under the running state. */ running?: boolean | undefined /** Height cap in output lines before the middle collapses (default {@link DEFAULT_TERMINAL_MAX_LINES}); Infinity disables the cap. */ maxLines?: number | undefined /** * Copy-control payload override; the control copies the raw output when * absent. Supplying it also keeps the control rendered before any output * exists — a command is copyable before it prints. */ copyText?: string | undefined /** * Draw the run-state dot and its assistive label in the card gutter * (default true). Hosts whose surrounding row already carries the same * state omit both and reclaim the gutter via `--dsl-terminal-gutter`. */ runStateDot?: boolean | undefined /** Extra class merged onto the wrapper (callers position; this component draws). */ className?: string | undefined /** Localized display copy supplied by the owning render site. */ labels: TerminalBlockLabels }
    新: export interface TerminalBlockProps { /** The command, rendered verbatim after the prompt label; long lines scroll horizontally unless the host enables wrapping. */ command: string /** Working directory for the prompt label; absent renders a plain `$`. */ cwd?: string | undefined /** Absolute home directory, so a cwd equal to it collapses to `~`; absent disables that collapse. */ home?: string | undefined /** The command's output text; may contain ANSI escape sequences. */ output?: string | undefined /** Settled exit code; a non-zero value renders the status pill, and null (settled without one) the no-exit-code pill. */ exitCode?: number | null | undefined /** Settled terminating signal name; any value renders the status pill, taking precedence over the exit code. */ signal?: string | undefined /** * The command is still running: with no `output` the block shows the prompt * line alone; with output it renders the live text under the running state. */ running?: boolean | undefined /** * The call launches background work (default false). `running` describes the * launch call only; after it returns, retain the command without job status * or output. An explicit `copyText` override remains available. */ background?: boolean | undefined /** Height cap in output lines before the middle collapses (default {@link DEFAULT_TERMINAL_MAX_LINES}); Infinity disables the cap. */ maxLines?: number | undefined /** * Copy-control payload override; the control copies the raw output when * absent. Supplying it also keeps the control rendered before any output * exists — a command is copyable before it prints. */ copyText?: string | undefined /** * Draw the run-state dot and its assistive label in the card gutter * (default true). Hosts whose surrounding row already carries the same * state omit both and reclaim the gutter via `--dsl-terminal-gutter`. */ runStateDot?: boolean | undefined /** Extra class merged onto the wrapper (callers position; this component draws). */ className?: string | undefined /** Localized display copy supplied by the owning render site. */ labels: TerminalBlockLabels }
- **[ast-signature-changed]** `packages/client/ui-primitives/src/TerminalBlock.tsx` — 签名变化: TerminalBlock
    旧: function({
  command,
  cwd,
  home,
  output,
  exitCode,
  signal,
  running = false,
  maxLines = DEFAULT_TERMINAL_MAX_LINES,
  copyText,
  runStateDot = true,
  className,
  labels,
}:TerminalBlockProps)
    新: function({
  command,
  cwd,
  home,
  output,
  exitCode,
  signal,
  running = false,
  background = false,
  maxLines = DEFAULT_TERMINAL_MAX_LINES,
  copyText,
  runStateDot = true,
  className,
  labels,
}:TerminalBlockProps)
- **[ast-signature-changed]** `packages/client/ui-slots/src/renderer.ts` — 签名变化: KeyedStandardSource
    旧: export type KeyedStandardSource = (key: string) => HostObservable<unknown> | undefined
    新: export type KeyedStandardSource = (key: string, member?: string) => HostObservable<unknown> | undefined
- **[ast-signature-changed]** `packages/client/ui-slots/src/renderer.ts` — 签名变化: StandardSourceBinding
    旧: export interface StandardSourceBinding { /** Scope identity; absent for root data and an optional scope with no selection. */ readonly key: string | undefined /** Fixed-name sources; each `name` becomes a `useName` selector Hook. */ readonly hooks: Readonly<Record<string, HostObservable<unknown> | undefined>> /** Open-key source families; each `name` becomes a `useName(key, selector)` Hook. */ readonly keyedHooks: Readonly<Record<string, KeyedStandardSource | undefined>> /** Stable plain values copied into standard props. */ readonly props: Readonly<Record<string, unknown>> }
    新: export interface StandardSourceBinding { /** Scope identity; absent for root data and an optional scope with no selection. */ readonly key: string | undefined /** Fixed-name sources; each `name` becomes a `useName` selector Hook. */ readonly hooks: Readonly<Record<string, HostObservable<unknown> | undefined>> /** * Open-key source families; each `name` becomes a `useName(key, selector?, equal?)` * Hook, which also accepts `useName(key, member)` to read the resolver's * `(key, member)` source without a selector. */ readonly keyedHooks: Readonly<Record<string, KeyedStandardSource | undefined>> /** Stable plain values copied into standard props. */ readonly props: Readonly<Record<string, unknown>> }
- **[ast-signature-changed]** `packages/client/ui-theme/src/theme-settings.ts` — 签名变化: ThemeSettings
    旧: export interface ThemeSettings { /** Selected built-in preference. */ preference: ThemePreference /** Conversation content font size in px (integer within {@link FONT_SIZE_MIN}..{@link FONT_SIZE_MAX}). */ fontSize: number }
    新: export interface ThemeSettings { /** Selected built-in preference. */ preference: ThemePreference /** Conversation content font size in px (integer within {@link FONT_SIZE_MIN}..{@link FONT_SIZE_MAX}). */ fontSize: number /** Code-block font size in px (integer within the {@link FONT_SIZE_SPECS} `code` range). */ codeFontSize: number /** Sidebar terminal font size in px (integer within the {@link FONT_SIZE_SPECS} `terminal` range). */ terminalFontSize: number /** Interface and body text fonts placed before the built-in stack; `''` keeps the built-in stack. */ textFontFamily: string /** Code fonts placed before the built-in code stack; `''` keeps the built-in stack. */ codeFontFamily: string /** Sidebar terminal fonts placed before the built-in terminal stack; `''` keeps the built-in stack. */ terminalFontFamily: string }
- **[ast-signature-changed]** `packages/context/agent-instructions/src/files.ts` — 签名变化: DiscoverOptions
    旧: interface DiscoverOptions { cwd: string dshHome?: string projectRootMarkers?: string[] instructionFileCandidates?: string[] localInstructionFileCandidates?: string[] projectRoot?: string signal?: AbortSignal }
    新: interface DiscoverOptions { cwd: string /** * Already-resolved harness home. The plugin resolves it once at mount and * passes it down so reconciliation and baseline loading cannot disagree. */ dshHome?: string /** * Already-resolved shared agents root. The plugin resolves it once at mount * and passes it down so reconciliation and baseline loading cannot disagree. */ agentsHome?: string projectRootMarkers?: string[] instructionFileCandidates?: string[] localInstructionFileCandidates?: string[] projectRoot?: string signal?: AbortSignal }
- **[ast-signature-changed]** `packages/context/agent-instructions/src/files.ts` — 签名变化: RenderedInstructionSet
    旧: export interface RenderedInstructionSet { rendered: RenderedAgentInstructions /** Successfully read candidates before content deduplication and byte budgeting. */ observed: LoadedInstructionFile[] /** Candidates retained by content deduplication and byte budgeting. */ included: LoadedInstructionFile[] }
    新: export interface RenderedInstructionSet { rendered: RenderedAgentInstructions /** Successfully read candidates before content deduplication and byte budgeting. */ observed: LoadedInstructionFile[] /** * Candidates dropped as content duplicates of an earlier candidate in their * group. Duplicates of budget-retained content remain eligible for probing, * because deleting or changing the retained candidate can make them visible. */ deduped: LoadedInstructionFile[] /** Candidates retained by content deduplication and byte budgeting. */ included: LoadedInstructionFile[] }
- **[ast-signature-changed]** `packages/boot/hmr` — 签名变化: directories
    旧: var:{ absolute: string; relative: string }[]
    新: var
- **[ast-signature-changed]** `packages/core/agent/src/runtime-types.ts` — 签名变化: Agent
    旧: interface Agent { /** The provider route and model this agent's requests use. */ readonly options: AgentOptions /** The live session this agent drives; its log is the durable source of truth. */ readonly session: Session /** Agent-owned access to durable pending work. */ readonly inbox: Inbox /** The current lifecycle state, mirrored on every `agent/status` transition. */ readonly status: AgentStatus /** Agent-scoped context; its contributions are agent-local, unwind on disposal, and reject registration afterward. */ readonly ctx: Context /** * Clear queued and steering work — unless `keepInbox` — and abort the active * turn or between-turn task. The first cause wins for that activity. With no * active activity, cancellation is a no-op and does not arm later work. * @param cause - the stable caller intent carried by the active operation signal. * @param options - cancellation options; `keepInbox` preserves pending work. */ cancel(cause: AgentCancelCause, options?: CancelOptions): void /** * Resolve after the current whole-agent activity reaches quiescence. This * follows replacement work started before the observed driver retires, * but does not identify the settlement of any particular message. * @returns fulfillment after no active driver or maintenance task remains. */ whenIdle(): Promise<void> /** * Run one non-turn maintenance task from the true idle phase. The task starts * synchronously after claiming that phase; later waking input remains in the * inbox until the task settles, while public status stays `idle`. * `whenIdle()` follows both the task and any waking work released behind it. * @param task - operation whose fulfillment or rejection is preserved, with a signal aborted by {@link cancel}. * @throws synchronously when turn-driving or another maintenance task already owns the agent. * @returns the task promise. */ runMaintenance<T>(task: (signal: AbortSignal) => Promise<T>): Promise<T> /** * Route identified input to an inbox boundary and optionally wake the driver. * Waking input submitted after active cancellation is queued for the next * turn and runs when the aborted activity converges to idle; a `disposed` * cancel leaves it parked. A wake submitted while already idle always opens * its turn boundary, even when its message is cleared before the driver * claims ([cancel-convergence wake latch](../../../../.agents/notes/implemented/bug-fix/2026-08-07-cancel-convergence-wake-latch.md)). * @param message - identified content and the source that supplied it. * @param target - the preferred next-turn or next-step inbox boundary. * @param wakeup - whether delivery may wake the driver. */ send(message: UserMessage, target: InboxTarget, wakeup: boolean): void /** * Queue an ordinary follow-up turn and wake the driver. The item becomes the * sole ordinary message of its own turn. * @param message - identified prompt content and the source that supplied it. */ followup(message: UserMessage): void /** * Submit steering for the nearest step. An idle driver starts a turn; * a running driver consumes it at its next step boundary. * A rejected step leaves steering parked in the inbox until the next * wake; cancellation or disposal may discard pending steering. * @param message - identified steering content and the source that supplied it. */ steer(message: UserMessage): void /** * Queue model-facing context for the next pre-step without waking the * driver. A running driver claims it at the nearest later step boundary; * idle drivers leave it pending until follow-up or steering * wakes them. It may miss a request whose pre-step already claimed its * batch. Cancellation or disposal may discard pending context. * @param message - identified injected context and the source that supplied it. */ inject(message: UserMessage): void }
    新: interface Agent { /** The provider route and model this agent's requests use. */ readonly options: AgentOptions /** The live session this agent drives; its log is the durable source of truth. */ readonly session: Session /** Agent-owned access to durable pending work. */ readonly inbox: Inbox /** The current lifecycle state, mirrored on every `agent/status` transition. */ readonly status: AgentStatus /** Agent-scoped context; its contributions are agent-local, unwind on disposal, and reject registration afterward. */ readonly ctx: Context /** * Clear queued and steering work — unless `keepInbox` — and abort the active * turn or between-turn task. The first cause wins for that activity. With no * active activity, cancellation is a no-op and does not arm later work. * @param cause - the stable caller intent carried by the active operation signal. * @param options - cancellation options; `keepInbox` preserves pending work. */ cancel(cause: AgentCancelCause, options?: CancelOptions): void /** * Resolve after the current whole-agent activity reaches quiescence. This * follows replacement work started before the observed driver retires, * but does not identify the settlement of any particular message. * @returns fulfillment after no active driver or maintenance task remains. */ whenIdle(): Promise<void> /** * Run one non-turn maintenance task from the true idle phase. The task starts * synchronously after claiming that phase; later waking input remains in the * inbox until the task settles, while public status stays `idle`. * `whenIdle()` follows both the task and any waking work released behind it. * @param task - operation whose fulfillment or rejection is preserved, with a signal aborted by {@link cancel}. * @throws synchronously when turn-driving or another maintenance task already owns the agent. * @returns the task promise. */ runMaintenance<T>(task: (signal: AbortSignal) => Promise<T>): Promise<T> /** * Route identified input to an inbox boundary and optionally wake the driver. * Waking input submitted after active cancellation is queued for the next * turn and runs when the aborted activity converges to idle; a `disposed` * cancel leaves it parked. A wake submitted while already idle always opens * its turn boundary, even when its message is cleared before the driver * claims ([driver wake convergence](../../agent-loop/src/agent.ts)). * @param message - identified content and the source that supplied it. * @param target - the preferred next-turn or next-step inbox boundary. * @param wakeup - whether delivery may wake the driver. */ send(message: UserMessage, target: InboxTarget, wakeup: boolean): void /** * Queue an ordinary follow-up turn and wake the driver. The item becomes the * sole ordinary message of its own turn. * @param message - identified prompt content and the source that supplied it. */ followup(message: UserMessage): void /** * Submit steering for the nearest step. An idle driver starts a turn; * a running driver consumes it at its next step boundary. * A rejected step leaves steering parked in the inbox until the next * wake; cancellation or disposal may discard pending steering. * @param message - identified steering content and the source that supplied it. */ steer(message: UserMessage): void /** * Queue model-facing context for the next pre-step without waking the * driver. A running driver claims it at the nearest later step boundary; * idle drivers leave it pending until follow-up or steering * wakes them. It may miss a request whose pre-step already claimed its * batch. Cancellation or disposal may discard pending context. * @param message - identified injected context and the source that supplied it. */ inject(message: UserMessage): void }
- **[ast-signature-changed]** `packages/core/tools/src/schema.ts` — 签名变化: DefineToolOptions
    旧: export interface DefineToolOptions<S extends ParameterSchemaSpec, O extends ValueSchemaSpec> { /** Tool name (must be unique). */ readonly name: string /** Human-readable description sent to the model. */ readonly description: string /** Per-property parameter schema compiled to an implicit open object root. */ readonly parameters: S /** Canonical output schema plus pure Native and presentation projections. */ readonly output: { /** Schema enforced against every successful body or policy-replaced value. */ readonly schema: O /** Pure Native/model rendering of one validated canonical value. */ render(args: InferArgs<S>, value: InferValue<NoInfer<O>>): ContentBlock[] /** Pure replayable presentation metadata for direct top-level calls. */ presentationMeta?(args: InferArgs<S>, value: InferValue<NoInfer<O>>): JsonValue } /** Requests deferred loading of the tool definition; see {@link @deepseek-ai/dsh-llm#ToolSchema.deferLoading}. */ readonly deferLoading?: true /** Optional positive cooperative timeout budget in milliseconds. */ readonly timeoutMs?: number /** * Pure classifier for sibling overlap. * @param args - typed validated arguments. * @returns Whether the call may join a parallel group. */ isConcurrencySafe?(args: InferArgs<S>): boolean /** * Execute the tool after argument validation. * @param args - typed validated arguments. * @param exec - execution identity, caller, cancellation, and nesting data. * @returns The canonical value declared by `output.schema`. */ execute(args: InferArgs<S>, exec: ToolRunContext): Promise<InferValue<NoInfer<O>>> /** * Install execution-prepared content before result policies. * @param exec - immutable execution identity and arguments. * @param result - normalized outcome entering post-execute. * @returns replacement content, or undefined to preserve it. */ projectContent?(exec: Readonly<ToolExecution>, result: Readonly<ToolExecutionResult>): ContentBlock[] | undefined /** * Optional last-mile content transform for every normalized outcome. Unlike * `execute`, arguments remain `unknown` because invalid-input failures also * reach this callback. See {@link ToolDefinition.finalizeContent}. * @param exec - immutable execution identity and arguments. * @param result - complete normalized outcome before materialization. * @returns replacement content, or `undefined` to preserve it. */ finalizeContent?(exec: Readonly<ToolExecution>, result: Readonly<ToolExecutionResult>): ContentBlock[] | undefined /** * Pure pending-state presenter. * @param args - typed validated arguments. * @returns Tool-owned render intent, or `undefined` for the generic card. */ presentCall?(args: InferArgs<S>): ToolCallView | undefined /** * Pure completed-state presenter. * @param args - typed validated arguments. * @param result - final model-facing tool result. * @returns Tool-owned render intent, or `undefined` for the generic card. */ presentResult?(args: InferArgs<S>, result: ToolResult): ToolResultView | undefined }
    新: export interface DefineToolOptions<S extends ParameterSchemaSpec, O extends ValueSchemaSpec> { /** Tool name (must be unique). */ readonly name: string /** Human-readable description sent to the model. */ readonly description: string /** Per-property parameter schema compiled to an implicit open object root. */ readonly parameters: S /** Canonical output schema plus pure Native and presentation projections. */ readonly output: { /** Schema enforced against every successful body or policy-replaced value. */ readonly schema: O /** Pure Native/model rendering of one validated canonical value. */ render(args: InferArgs<S>, value: InferValue<NoInfer<O>>): ContentBlock[] /** Pure replayable presentation metadata for native and nested calls. */ presentationMeta?(args: InferArgs<S>, value: InferValue<NoInfer<O>>): JsonValue } /** Requests deferred loading of the tool definition; see {@link @deepseek-ai/dsh-llm#ToolSchema.deferLoading}. */ readonly deferLoading?: true /** Optional positive cooperative timeout budget in milliseconds. */ readonly timeoutMs?: number /** * Pure classifier for sibling overlap. * @param args - typed validated arguments. * @returns Whether the call may join a parallel group. */ isConcurrencySafe?(args: InferArgs<S>): boolean /** * Execute the tool after argument validation. * @param args - typed validated arguments. * @param exec - execution identity, caller, cancellation, and nesting data. * @returns The canonical value declared by `output.schema`. */ execute(args: InferArgs<S>, exec: ToolRunContext): Promise<InferValue<NoInfer<O>>> /** * Install execution-prepared content before result policies. * @param exec - immutable execution identity and arguments. * @param result - normalized outcome entering post-execute. * @returns replacement content, or undefined to preserve it. */ projectContent?(exec: Readonly<ToolExecution>, result: Readonly<ToolExecutionResult>): ContentBlock[] | undefined /** * Optional last-mile content transform for every normalized outcome. Unlike * `execute`, arguments remain `unknown` because invalid-input failures also * reach this callback. See {@link ToolDefinition.finalizeContent}. * @param exec - immutable execution identity and arguments. * @param result - complete normalized outcome before materialization. * @returns replacement content, or `undefined` to preserve it. */ finalizeContent?(exec: Readonly<ToolExecution>, result: Readonly<ToolExecutionResult>): ContentBlock[] | undefined /** * Pure pending-state presenter. * @param args - typed validated arguments. * @returns Tool-owned render intent, or `undefined` for the generic card. */ presentCall?(args: InferArgs<S>): ToolCallView | undefined /** * Pure completed-state presenter. * @param args - typed validated arguments. * @param result - final model-facing tool result. * @returns Tool-owned render intent, or `undefined` for the generic card. */ presentResult?(args: InferArgs<S>, result: ToolResult): ToolResultView | undefined }
- **[ast-signature-changed]** `packages/core/tools/src/types.ts` — 签名变化: PtcDispatchEventData
    旧: export interface PtcDispatchEventData extends PtcDispatchStartEventData { isError: boolean content: ContentBlock[] /** Optional failure identity and raw user-facing detail, outside model-facing content. */ error?: { name: string; code: string; reason?: string } }
    新: export interface PtcDispatchEventData extends PtcDispatchStartEventData { isError: boolean content: ContentBlock[] /** Replayable tool-owned presentation metadata, separate from model content. */ meta?: JsonValue /** Optional failure identity and raw user-facing detail, outside model-facing content. */ error?: { name: string; code: string; reason?: string } }
- **[ast-signature-changed]** `packages/core/tools/src/ptc.ts` — 签名变化: TYPESCRIPT_FLAVOR
    旧: var:RunCodeFlavor
    新: var
- **[ast-signature-changed]** `packages/core/tools/src/ptc.ts` — 签名变化: PYTHON_FLAVOR
    旧: var:RunCodeFlavor
    新: var
- **[ast-signature-changed]** `packages/schedule/tool-schedule` — 签名变化: renderValue
    旧: function(value:JsonValue)
    新: function(_args:unknown,value:unknown)
- **[ast-signature-changed]** `packages/core/tools/src/ptc.ts` — 签名变化: RunCodeBridgeOptions
    旧: export interface RunCodeBridgeOptions { /** Reads the approval channel when a program requests a wider sandbox mode. */ peekApprover: () => ApprovalService | undefined /** Resolves standing Session authority only for a runtime that enforces file policy. */ resolveSandboxPolicy: (exec: ToolRunContext) => SandboxExecutionPolicy /** Resolves `ctx.ptcRuntime` or throws the loud misconfiguration error (shared with the registry's assembly-time checks). */ requireRuntime: () => PtcRuntime /** * Reads `ctx.ptcRuntime` without throwing: `undefined` when none is mounted. * Lets schema emission tell "no runtime" (degrade to TS; the readers that * reach it are {@link resolveFlavor}'s) apart from "unknown language" (fail * loud). */ peekRuntime: () => PtcRuntime | undefined /** The run's overlap cap for parallel-classified sub-calls (the registry passes its validated `maxParallelSubCalls`). */ maxParallel: number /** Runs the contained `tools/ptc-dispatch-log` waterfall over one settled sub-dispatch (the registry's private invoker). */ shapeDispatchLog: (dispatch: PtcDispatchLog) => Promise<ContentBlock[]> }
    新: export interface RunCodeBridgeOptions { /** Captures the calling Session current directory before program creation. */ resolveWorkingDirectory: (exec: ToolRunContext) => Promise<string | undefined> /** Reads the approval channel when a program requests a wider sandbox mode. */ peekApprover: () => ApprovalService | undefined /** Resolves standing Session authority only for a runtime that enforces file policy. */ resolveSandboxPolicy: (exec: ToolRunContext) => SandboxExecutionPolicy /** Resolves `ctx.ptcRuntime` or throws the loud misconfiguration error (shared with the registry's assembly-time checks). */ requireRuntime: () => PtcRuntime /** * Reads `ctx.ptcRuntime` without throwing: `undefined` when none is mounted. * Lets schema emission tell "no runtime" (degrade to TS; the readers that * reach it are {@link resolveFlavor}'s) apart from "unknown language" (fail * loud). */ peekRuntime: () => PtcRuntime | undefined /** The run's overlap cap for parallel-classified sub-calls (the registry passes its validated `maxParallelSubCalls`). */ maxParallel: number /** Runs the contained `tools/ptc-dispatch-log` waterfall over one settled sub-dispatch (the registry's private invoker). */ shapeDispatchLog: (dispatch: PtcDispatchLog) => Promise<ContentBlock[]> }
- **[ast-signature-changed]** `packages/core/tools/src/ptc.ts` — 签名变化: createRunCodeTool
    旧: function(registry:ToolRuntime,options:RunCodeBridgeOptions)
    新: function(registry:ToolRuntime,options:RunCodeBridgeOptions,ctx:Context)
- **[ast-signature-changed]** `packages/credentials/deepseek-account/src/types.ts` — 签名变化: SignInErrorCode
    旧: export type SignInErrorCode = 'network' | 'protocol' | 'expired' | 'storage'
    新: export type SignInErrorCode = 'no-response' | 'network' | 'protocol' | 'expired' | 'storage'
- **[ast-signature-changed]** `packages/experimental/agent-team/src/types.ts` — 签名变化: SendTeamMessageResult
    旧: export interface SendTeamMessageResult { readonly messageId: TeamMessageId readonly status: 'accepted' | 'queued' }
    新: export interface SendTeamMessageResult { readonly messageId: MessageId }
- **[ast-signature-changed]** `packages/experimental/ptc-runtime-python/src/protocol.ts` — 签名变化: DoneErrorField
    旧: interface DoneErrorField { kind: 'exception' | 'invalid-output' | 'output-limit' message: string }
    新: interface DoneErrorField { kind: 'exception' | 'invalid-output' | 'output-limit' | 'timeout' message: string }
- **[ast-signature-changed]** `packages/experimental/worktree` — 签名变化: relativePath
    旧: var
    新: function(value:string)
- **[ast-signature-changed]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 签名变化: sizeOf
    旧: var
    新: function(info:{ size?: number } | undefined)
- **[ast-signature-changed]** `packages/boot/hmr` — 签名变化: exports
    旧: var:Record<string, unknown>
    新: var:unknown
- **[ast-signature-changed]** `packages/boot/hmr` — 签名变化: cache
    旧: var
    新: var:unknown
- **[ast-signature-changed]** `packages/experimental/webworker-runtime/src/worker-host.ts` — 签名变化: WorkerHostOptions
    旧: export interface WorkerHostOptions { /** * Modules served from the worker bundle rather than the image: the `node:*` * proxies, the not-implemented stubs for excluded npm packages, and anything else whose * platform behavior differs. `node:process` and `process` are added when absent, * as factories reading the installed global. */ readonly staticModules: Readonly<Record<string, StaticModuleFactory>> /** Prefix-matched proxies, for packages whose subpaths are open-ended. */ readonly staticModulePrefixes?: Readonly<Record<string, StaticModuleFactory>> /** * The webserver's request listener, captured by the app's fake `node:http`. * Awaited on first tunnel use, so it may resolve after the tree binds. */ readonly requestListener: () => Promise<RequestListener> /** Image bytes, or the URL the worker fetches them from. */ readonly image: Uint8Array | string /** Ordered data overlays applied after the base image and before boot. */ readonly overlays?: readonly (Uint8Array | string)[] /** Virtual root; defaults to {@link DEFAULT_ROOT}. */ readonly root?: string /** Composed configuration inside the image; defaults to `<root>/config/cordis.yml`. */ readonly configPath?: string /** * Inner arguments the tree parses. The default binds the web server to the * loopback authority the tunnel synthesizes, which also keeps * `networkInterfaces()` out of the trust snapshot. */ readonly cmdlineArgs?: readonly string[] /** Port named on the default command line; defaults to {@link DEFAULT_PORT}. */ readonly port?: number /** Environment for the process shim; `DSH_HOME` defaults to `<root>/home`. */ readonly env?: Readonly<Record<string, string>> /** * Image manifest path; defaults to `<root>/config/vfs-manifest.json`. Its * `lowered` field must name this build's wrapper contract. */ readonly manifestPath?: string /** * Ambient-store snapshot face exported by the app's `node:async_hooks` proxy. * The rewrite that carries stores across suspension points moves state through * it; the proxy remains the only owner of that state. */ readonly alsCausality?: AlsCausality /** Privileged API methods that skip the route lane; see {@link TunnelServer}. */ readonly privilegedMethods?: ReadonlySet<string> /** Escape hatch for the unary `/api` lane; see {@link TunnelServer}. */ readonly unaryApiLane?: 'route' | 'direct' /** Channel back to the page; defaults to the worker global scope. */ readonly channel?: TunnelPort }
    新: export interface WorkerHostOptions { /** * Modules served from the worker bundle rather than the image: the `node:*` * proxies, the not-implemented stubs for excluded npm packages, and anything else whose * platform behavior differs. `node:process` and `process` are added when absent, * as factories reading the installed global. */ readonly staticModules: Readonly<Record<string, StaticModuleFactory>> /** Prefix-matched proxies, for packages whose subpaths are open-ended. */ readonly staticModulePrefixes?: Readonly<Record<string, StaticModuleFactory>> /** * The webserver's request listener, captured by the app's fake `node:http`. * Awaited on first tunnel use, so it may resolve after the tree binds. */ readonly requestListener: () => Promise<RequestListener> /** Image bytes, or the URL the worker fetches them from. */ readonly image: Uint8Array | string /** Ordered data overlays applied after the base image and before boot. */ readonly overlays?: readonly (Uint8Array | string)[] /** Virtual root; defaults to {@link DEFAULT_ROOT}. */ readonly root?: string /** Composed configuration inside the image; defaults to `<root>/config/cordis.yml`. */ readonly configPath?: string /** * Inner arguments the tree parses. The default binds the web server to the * loopback authority the tunnel synthesizes. */ readonly cmdlineArgs?: readonly string[] /** Port named on the default command line; defaults to {@link DEFAULT_PORT}. */ readonly port?: number /** Environment for the process shim; `DSH_HOME` defaults to `<root>/home`. */ readonly env?: Readonly<Record<string, string>> /** * Image manifest path; defaults to `<root>/config/vfs-manifest.json`. Its * `lowered` field must name this build's wrapper contract. */ readonly manifestPath?: string /** * Ambient-store snapshot face exported by the app's `node:async_hooks` proxy. * The rewrite that carries stores across suspension points moves state through * it; the proxy remains the only owner of that state. */ readonly alsCausality?: AlsCausality /** Privileged API methods that skip the route lane; see {@link TunnelServer}. */ readonly privilegedMethods?: ReadonlySet<string> /** Escape hatch for the unary `/api` lane; see {@link TunnelServer}. */ readonly unaryApiLane?: 'route' | 'direct' /** Channel back to the page; defaults to the worker global scope. */ readonly channel?: TunnelPort }
- **[ast-signature-changed]** `packages/llm/llm-deepseek-account` — 签名变化: refuse
    旧: var
    新: function(model:string,refusal:CatalogRefusal | undefined)
- **[ast-signature-changed]** `packages/extensions/cordis-host-runner/src/types.ts` — 签名变化: CordisInspectResolveAck
    旧: export interface CordisInspectResolveAck { /** False for unknown, cancelled, stale, or late answers. */ accepted: boolean }
    新: export interface CordisInspectResolveAck { /** * True only for a valid success that settles the query; * false for retained failures and unknown, timed out, cancelled, or late answers. */ accepted: boolean }
- **[ast-signature-changed]** `packages/extensions/cordis-host-runner/src/inspect-registry.ts` — 签名变化: PendingClientQuery
    旧: interface PendingClientQuery { request: CordisInspectQueryRequest method: CordisInspectMethodManifest settle(resolution: CordisInspectQueryResolution): void }
    新: interface PendingClientQuery { request: CordisInspectQueryRequest method: CordisInspectMethodManifest failure?: string settle(resolution: CordisInspectQueryResolution): void }
- **[ast-signature-changed]** `packages/extensions/cordis-host-runner/src/inspect-registry.ts` — 签名变化: CordisInspectRegistryService
    旧: class(ctx:Context)
    新: class(ctx:Context,clientQueryTimeoutMs:number)
- **[ast-signature-changed]** `packages/experimental/hook-protocol/src/events.ts` — 签名变化: HookInvocation
    旧: export interface HookInvocation { /** The open turn the invocation lives inside. */ turn: number /** The hook point (`PreToolUse`, `Stop`, …). */ point: string /** The bridge dialect that ran it. */ dialect: HookDialect /** A stable id correlating the invoked event with its result. */ handlerId: string /** The matcher-group pattern that selected it (absent for match-all). */ matcher?: string }
    新: export interface HookInvocation { /** The open turn the invocation lives inside. */ turn: number /** The hook point (`PreToolUse`, `Stop`, …). */ point: string /** The bridge dialect that ran it. */ dialect: HookDialect /** A stable id correlating the invoked event with its result. */ handlerId: string /** The matcher-group pattern; absent or `undefined` is omitted from the event. */ matcher?: string | undefined }
- **[ast-signature-changed]** `packages/experimental/claude-code-mods` — 签名变化: DetachedRuns
    旧: export interface DetachedRuns { /** * The abort signal every tracked run must hand to {@link runHook} (via its * `signal` option). {@link drain} fires it so a still-running hook process is * killed rather than awaited out to its timeout (default 10 minutes). */ readonly signal: AbortSignal /** * Register one detached run until it settles. Pass the FULL chain — the hook * run and its continuation/error handler — so {@link drain} waits for the * side effects (an inject, a warn), not just the process exit. A rejected * chain is absorbed here (settlement bookkeeping only), but rejection * handling is still the caller's job: an untracked `.catch` is what turns a * failure into a logged warning instead of silence. * @param run - the detached run chain to hold until settled. */ track(run: Promise<unknown>): void /** * Abort {@link signal}, then resolve once every tracked chain has settled — * including chains tracked while the drain is in progress. The bridge * registers this as its effect disposer; cordis awaits it, so * `fiber.dispose()` resolving means the bridge's detached work is quiescent. * A run tracked AFTER drain resolves is not awaited by anyone — by then the * bridge's listeners are disposed, so nothing can start one. * @returns resolves when all tracked runs have settled. */ drain(): Promise<void> }
    新: class
- **[ast-signature-changed]** `packages/host/directory-picker-auto/src/resolve.ts` — 签名变化: DirectoryPickerHostFacts
    旧: export interface DirectoryPickerHostFacts { /** Effective webserver bind host (the schema's closed loopback/all-interfaces union). */ bindHost: HttpServerConfig['host'] /** Host process platform. */ platform: NodeJS.Platform /** SSH launch fact from the inherited process layer, independent of `.env` values. */ ssh: boolean /** Environment sample; DISPLAY/WAYLAND_DISPLAY marks a Linux display. */ env: DirectoryPickerEnv /** Whether a Linux chooser binary the native backend can drive (zenity/kdialog) is on PATH; consulted only when `platform` is linux. */ linuxChooser: boolean }
    新: export interface DirectoryPickerHostFacts { /** Effective webserver bind address (a concrete IP literal of one local interface). */ bindHost: HttpServerConfig['host'] /** * Whether the Connection trust policy admits a non-loopback authority (a * validated `trustedHosts` entry naming a remote hostname). */ allowsRemoteAuthorities: boolean /** Host process platform. */ platform: NodeJS.Platform /** SSH launch fact from the inherited process layer, independent of `.env` values. */ ssh: boolean /** Environment sample; DISPLAY/WAYLAND_DISPLAY marks a Linux display. */ env: DirectoryPickerEnv /** Whether a Linux chooser binary the native backend can drive (zenity/kdialog) is on PATH; consulted only when `platform` is linux. */ linuxChooser: boolean }
- **[ast-signature-changed]** `packages/interaction/user-questions/src/types.ts` — 签名变化: AskUserQuestionRequestEvent
    旧: export interface AskUserQuestionRequestEvent { /** Questions to display. */ questions: AskUserQuestionItem[] /** Agent identity projected to the corresponding Client Context in transit. */ agent?: Agent /** Cancellation lifetime of the pending request. */ signal?: AbortSignal }
    新: export interface AskUserQuestionRequestEvent { /** Questions to display. */ questions: AskUserQuestionItem[] /** Agent identity projected to the corresponding Client Context in transit. */ agent?: Agent /** Cancellation lifetime of the pending request. */ signal?: AbortSignal /** * Tool call the Client card is keyed by. Timed answerers attach to the * business wait stream before starting their local countdown. */ wait?: { /** Tool call the Client card is keyed by. */ callId: ToolCallId /** True for a foreground wait that requires a Client claim; absent for indefinite waits. */ timed?: boolean } }
- **[ast-signature-changed]** `packages/jobs/jobs/src/types.ts` — 签名变化: JobHandle
    旧: export interface JobHandle { /** The registry-issued id (`<kind>-N`). */ readonly id: JobId /** * Append one chunk to the output ring. Offsets advance by the chunk's UTF-8 * byte length; an empty chunk is dropped without waking observers. * @param text - the chunk text, exactly as produced. * @param options - stream label and gap marker. */ append(text: string, options?: JobAppendOptions): void /** * Replace the live progress line (`3/10`, the current phase). Settlement * clears it; the terminal reason travels in {@link JobOutcome.detail}. * @param line - the new progress line. */ updateProgress(line: string): void }
    新: export interface JobHandle { /** The registry-issued id (`<kind>-<short-uuid>`). */ readonly id: JobId /** * Append one chunk to the output ring. Offsets advance by the chunk's UTF-8 * byte length; an empty chunk is dropped without waking observers. * @param text - the chunk text, exactly as produced. * @param options - stream label and gap marker. */ append(text: string, options?: JobAppendOptions): void /** * Replace the live progress line (`3/10`, the current phase). Settlement * clears it; the terminal reason travels in {@link JobOutcome.detail}. * @param line - the new progress line. */ updateProgress(line: string): void }
- **[ast-signature-changed]** `packages/jobs/jobs/src/types.ts` — 签名变化: JobSpec
    旧: export interface JobSpec { /** Producer kind — also the id prefix (`bash`, `subagent`, …). */ kind: JobKind /** One-line model-facing label (the command; the delegation description). */ label: string /** * Owning session. Access is fenced by it, and the owner's live Agent must be * the one currently registered under that id: its disposal cancels and * awaits the job. Omitting the owner creates an unowned job, open to any * caller until service disposal. */ owner?: SessionId /** * Optional UTF-8 byte cap for each complete model-facing completion notice or * output read, including controller status metadata. Independent of ring * retention: it bounds the consuming model surface, never observers. */ outputLimitBytes?: number /** * Pull sources the registry pumps into the ring at its own cadence. * Producers that narrate their own progress use {@link JobHandle.append} * instead; a job may use both. */ output?: readonly JobOutputSource[] /** * Start the work after preflight and synchronously return its hooks. Called * once with the job's producer face; a throw leaves nothing registered (the * spent ordinal is skipped), and the producer must clean up any partially * started resources. * @param job - the issued id plus the ring append and progress writers. */ run(job: JobHandle): JobHooks }
    新: export interface JobSpec { /** Producer kind — also the id prefix (`bash`, …). */ kind: JobKind /** One-line model-facing label (the command; the delegation description). */ label: string /** * Owning session. Access is fenced by it, and the owner's live Agent must be * the one currently registered under that id: its disposal cancels and * awaits the job. Omitting the owner creates an unowned job, open to any * caller until service disposal. */ owner?: SessionId /** Creating tool invocation, retained in the durable lifecycle records. */ toolCall?: JobToolCall /** * Optional UTF-8 byte cap for each complete model-facing completion notice or * output read, including controller status metadata. Independent of ring * retention: it bounds the consuming model surface, never observers. */ outputLimitBytes?: number /** * Pull sources the registry pumps into the ring at its own cadence. * Producers that narrate their own progress use {@link JobHandle.append} * instead; a job may use both. */ output?: readonly JobOutputSource[] /** * Start the work after preflight and synchronously return its hooks. Called * once with the job's producer face; a throw leaves nothing registered (the * spent ordinal is skipped), and the producer must clean up any partially * started resources. * @param job - the issued id plus the ring append and progress writers. */ run(job: JobHandle): JobHooks }
- **[ast-signature-changed]** `packages/llm/llm-deepseek/src/types.ts` — 签名变化: DeepSeekAdapterOptions
    旧: export interface DeepSeekAdapterOptions<Connection extends DeepSeekConnectionOptions = DeepSeekConnectionOptions> { /** Report unusable native Messages replay metadata without exposing content or signatures. */ onReplayDegrade?: (detail: { provider: string; model: string; reason: string }) => void /** Report extension fields omitted from one request because the merged request failed to serialize. */ onExtensionsOmitted?: (detail: { provider: string; model: string; fields: readonly string[]; error: unknown }) => void /** Provider label for selectors; omission uses the protocol family name. */ providerName?: string /** Provider-owned catalog availability; omission exposes no discovery entries. */ discoverModels?: (provider: string) => Promise<LlmModelInfo[]> /** Current validated connection facts; called once per operation. */ options: () => Connection /** Resolve authentication from this request's connection snapshot; never re-read the endpoint. */ resolveAuth: (connection: Connection) => Promise<DeepSeekRequestAuth> /** Resolve the harness-home anonymous id shared with telemetry and feedback. */ resolveUserId: () => AnonymousUserId /** Resolve the current durable attachment service; absence rejects image input. */ resolveAttachments?: () => AttachmentStore | undefined /** Bridge one attachment reference into the current model-tool execution world. */ resolveImageAccess?: (attachments: AttachmentStore, ref: ImageAttachmentRef) => ImageAttachmentAccess | undefined /** Resolve the process-wide upload reuse store. */ resolveFiles?: () => DeepSeekFileStore /** Prepare the official API's plugin-contributed top-level fields for one exact wire request. */ prepareExtensions: (request: DeepSeekLlmApiExtensionRequest) => Promise<PreparedDeepSeekLlmApiExtensions> }
    新: export interface DeepSeekAdapterOptions<Connection extends DeepSeekConnectionOptions = DeepSeekConnectionOptions> { /** Report unusable native Messages replay metadata without exposing content or signatures. */ onReplayDegrade?: (detail: { provider: string; model: string; reason: string }) => void /** Report extension fields omitted from one request because the merged request failed to serialize. */ onExtensionsOmitted?: (detail: { provider: string; model: string; fields: readonly string[]; error: unknown }) => void /** Report an extension acceptance failure after HTTP 2xx; the request continues. */ onExtensionsUnaccepted?: (detail: { provider: string; model: string; error: unknown }) => void /** Provider label for selectors; omission uses the protocol family name. */ providerName?: string /** Provider-owned catalog availability; omission exposes no discovery entries. */ discoverModels?: (provider: string) => Promise<LlmModelInfo[]> /** Current validated connection facts; called once per operation. */ options: () => Connection /** * Resolve the connection for one exact-model lookup or prepared call, for * example after a provider-owned catalog load; must settle promptly after * `signal` aborts. Omission uses {@link options}. */ connect?: (signal?: AbortSignal) => Promise<Connection> /** Refuse a model before any network I/O by throwing an `LlmError`; omission admits every model. */ admit?: (connection: Connection, model: string) => void /** Resolve authentication from this request's connection snapshot; never re-read the endpoint. */ resolveAuth: (connection: Connection) => Promise<DeepSeekRequestAuth> /** Resolve the harness-home anonymous id shared with telemetry and feedback. */ resolveUserId: () => AnonymousUserId /** Resolve the current durable attachment service; absence rejects image input. */ resolveAttachments?: () => AttachmentStore | undefined /** Bridge one attachment reference into the current model-tool execution world. */ resolveImageAccess?: (attachments: AttachmentStore, ref: ImageAttachmentRef) => ImageAttachmentAccess | undefined /** Resolve the process-wide upload reuse store. */ resolveFiles?: () => DeepSeekFileStore /** Prepare the official API's plugin-contributed top-level fields for one exact wire request. */ prepareExtensions: (request: DeepSeekLlmApiExtensionRequest) => Promise<PreparedDeepSeekLlmApiExtensions> }
- **[ast-signature-changed]** `packages/llm/llm-deepseek/src/host.ts` — 签名变化: registerDeepSeekProvider
    旧: function(ctx:Context,provider:string,dependencies:Pick<DeepSeekAdapterOptions<C>, 'options' | 'resolveAuth' | 'providerName' | 'discoverModels'>)
    新: function(ctx:Context,provider:string,dependencies:Pick<DeepSeekAdapterOptions<C>, 'options' | 'resolveAuth' | 'providerName' | 'discoverModels' | 'connect' | 'admit'>)
- **[ast-signature-changed]** `packages/llm/llm-pi-ai/src/adapter.ts` — 签名变化: PiAiAdapterOptions
    旧: export interface PiAiAdapterOptions { /** Current validated profiles by provider route; called once per operation. */ profiles: () => ReadonlyMap<string, ResolvedPiAiProviderProfile> /** * Resolve the credential for one already-resolved profile; called once per * stream call and frozen for that call. `undefined` defers to the route's own * pi-ai auth, which for an installed catalog route is its provider-native * ambient discovery; the plugin allows that only for a profile naming no * credential at all, because a named reference that misses throws `LlmError` * `MISSING_CREDENTIAL` rather than falling back. */ resolveApiKey: (provider: string, profile: ResolvedPiAiProviderProfile) => Promise<string | undefined> /** * How every collection this adapter builds resolves auth the request-level * `apiKey` override does not cover. Required rather than optional: a * collection built without them gets pi-ai's in-memory default store, which * is empty at every boot and discarded on every configuration change, so a * route whose only method is a login would report itself unconfigured on * every request no matter how often the human signed in. */ auth: PiAiAuthInjection /** Resolve the optional durable attachment service at request time. */ resolveAttachments?: () => AttachmentStore | undefined /** Bridge one attachment reference into the current model-tool execution world. */ resolveImageAccess?: (attachments: AttachmentStore, ref: ImageAttachmentRef) => ImageAttachmentAccess | undefined /** * Observe one assistant history message degrading to provider-neutral * conversion because its stored replay state is unusable by this build. */ onReplayDegrade?: (detail: { provider: string; model: string; reason: string }) => void }
    新: export interface PiAiAdapterOptions { /** Current validated profiles by provider route; called once per operation. */ profiles: () => ReadonlyMap<string, ResolvedPiAiProviderProfile> /** * Resolve the credential for one already-resolved profile; called once per * stream call and frozen for that call, and by `listModels`, which offers no * models while it throws `MISSING_CREDENTIAL`. `undefined` defers to the route's own * pi-ai auth, which for an installed catalog route is its provider-native * ambient discovery; the plugin allows that only for a profile naming no * credential at all, because a named reference that misses throws `LlmError` * `MISSING_CREDENTIAL` rather than falling back. */ resolveApiKey: (provider: string, profile: ResolvedPiAiProviderProfile) => Promise<string | undefined> /** * How every collection this adapter builds resolves auth the request-level * `apiKey` override does not cover. Required rather than optional: a * collection built without them gets pi-ai's in-memory default store, which * is empty at every boot and discarded on every configuration change, so a * route whose only method is a login would report itself unconfigured on * every request no matter how often the human signed in. */ auth: PiAiAuthInjection /** Resolve the optional durable attachment service at request time. */ resolveAttachments?: () => AttachmentStore | undefined /** Bridge one attachment reference into the current model-tool execution world. */ resolveImageAccess?: (attachments: AttachmentStore, ref: ImageAttachmentRef) => ImageAttachmentAccess | undefined /** * Observe one assistant history message degrading to provider-neutral * conversion because its stored replay state is unusable by this build. */ onReplayDegrade?: (detail: { provider: string; model: string; reason: string }) => void }
- **[ast-signature-changed]** `packages/llm/llm-deepseek-account/src/config.ts` — 签名变化: modelOverride
    旧: var:z<PiAiModelOverride>
    新: var:z<ModelOverride>
- **[ast-signature-changed]** `packages/experimental/cua` — 签名变化: image
    旧: var:Record<string, unknown>
    新: var
- **[ast-signature-changed]** `packages/llm/llm/src/types.ts` — 签名变化: LlmConfigurableProvider
    旧: export interface LlmConfigurableProvider { /** Provider route key this entry activates when configured. */ provider: string /** Human-readable provider name for configuration surfaces. */ displayName: string /** User-settings namespace whose section configures this provider. */ settingsNs: string /** * Path from that namespace's section root to this provider's profile * object; empty when the whole section is the profile. */ settingsPath: readonly string[] /** * Whether the owning adapter knows this route only because configuration * declared it — a gateway or self-hosted server it ships nothing about. * Absent means the adapter draws no such distinction; false means it does * and this route is one of its own. Only the adapter can answer: a stored * profile is how a user-added route AND a corrected shipped one both look * from outside. */ declared?: boolean /** Configuration diagnostic for repair; unaffected models may remain serviceable. */ error?: string }
    新: export interface LlmConfigurableProvider { /** Provider route key this entry activates when configured. */ provider: string /** Human-readable provider name for configuration surfaces. */ displayName: string /** User-settings namespace whose section configures this provider. */ settingsNs: string /** * Path from that namespace's section root to this provider's profile * object; empty when the whole section is the profile. */ settingsPath: readonly string[] /** * Whether the owning adapter knows this route only because configuration * declared it — a gateway or self-hosted server it ships nothing about. * Absent means the adapter draws no such distinction; false means it does * and this route is one of its own. Only the adapter can answer: a stored * profile is how a user-added route AND a corrected shipped one both look * from outside. */ declared?: boolean /** * Route endpoint the adapter uses when the profile sets no `baseURL`; the * adapter may still send an individual model to that model's own endpoint. * Absent when the route has no fixed endpoint. */ defaultBaseURL?: string /** Environment variables used to construct a provider endpoint; absent when none are reported. */ baseURLEnv?: readonly string[] /** Authentication the adapter performs when the profile names no credential reference; absent when it reports none. */ nativeAuth?: LlmNativeAuth /** Configuration diagnostic for repair; unaffected models may remain serviceable. */ error?: string }
- **[ast-signature-changed]** `packages/llm/llm/src/types.ts` — 签名变化: LlmModelReasoningInfo
    旧: export interface LlmModelReasoningInfo { /** Supported efforts in adapter-preferred display order. */ efforts: readonly LlmReasoningEffortInfo[] /** * Adapter-configured default materialized into requests when callers omit * an effort. Absence preserves the provider's own default. */ defaultEffort?: ReasoningEffortId }
    新: export interface LlmModelReasoningInfo { /** Supported efforts from least to greatest selectable reasoning effort, not predicted token use or latency. */ efforts: readonly LlmReasoningEffortInfo[] /** * Adapter-configured default materialized into requests when callers omit * an effort. Absence preserves the provider's own default. */ defaultEffort?: ReasoningEffortId }
- **[ast-signature-changed]** `packages/llm/llm/src/types.ts` — 签名变化: GenerateOptions
    旧: export interface GenerateOptions { /** Registered provider route selecting the adapter instance. */ provider: string model: string /** Adapter-owned reasoning effort selected for this exact model. */ reasoningEffort?: ReasoningEffortId /** * Ordered conversation messages, exactly as the provider sees them. A * loop-built request passes the derived history (dsh-agent-loop), whose * leading system-role message carries the system prompt; a hand-built * one-shot may include identity-free user inputs. */ messages: RequestMessage[] /** * System prompt text for one-shot callers; adapters map it to the provider's * system slot ahead of `messages`. Loop-built requests leave it undefined. */ system?: string /** Tool schemas (adapters map to the provider's `tools` field). */ tools?: ToolSchema[] /** Session-folded tool history used for route projection; omission sends complete declarations without tool updates. */ toolHistory?: ToolHistory temperature?: number maxTokens?: number /** * Stop sequences: generation halts as soon as the model produces any one of * these strings (adapters map to the provider's stop field, e.g. OpenAI * `stop`). The stop string itself is not included in the output. */ stop?: string[] signal?: AbortSignal /** * Session identity stamped by the loop for request routing. Replay uses it * to separate cursors; adapters may map it to model-hidden transport metadata. */ sessionId?: Branded<'SessionId'> /** * Provider-neutral classification for an auxiliary model call. Adapters may * map the purpose to model-hidden transport metadata or purpose-specific * generation policy. Ordinary conversation requests leave it unset. */ purpose?: 'compaction' | 'session-title' }
    新: export interface GenerateOptions { /** Registered provider route selecting the adapter instance. */ provider: string model: string /** Adapter-owned reasoning effort selected for this exact model. */ reasoningEffort?: ReasoningEffortId /** * Ordered conversation messages, exactly as the provider sees them. A * loop-built request passes the derived history (dsh-agent-loop), whose * leading system-role message carries the system prompt; a hand-built * one-shot may include identity-free user inputs. */ messages: RequestMessage[] /** * System prompt text for one-shot callers; adapters map it to the provider's * system slot ahead of `messages`. Loop-built requests leave it undefined. */ system?: string /** Tool schemas (adapters map to the provider's `tools` field). */ tools?: ToolSchema[] /** Session-folded tool history used for route projection; omission sends complete declarations without tool updates. */ toolHistory?: ToolHistory temperature?: number maxTokens?: number /** * Stop sequences: generation halts as soon as the model produces any one of * these strings (adapters map to the provider's stop field, e.g. OpenAI * `stop`). The stop string itself is not included in the output. */ stop?: string[] signal?: AbortSignal /** * Session identity stamped by the loop for request routing. Replay uses it * to separate cursors; adapters may map it to model-hidden transport metadata. */ sessionId?: Branded<'SessionId'> /** * Provider-neutral classification for an auxiliary model call. Adapters may * map the purpose to model-hidden transport metadata. Ordinary conversation * requests leave it unset. */ purpose?: 'compaction' | 'session-title' }
- **[ast-signature-changed]** `packages/llm/plugin-package-inventory-deepseek/src/types.ts` — 签名变化: DeepSeekPluginPackageIdentity
    旧: export interface DeepSeekPluginPackageIdentity { readonly name: string readonly version: string }
    新: export interface DeepSeekPluginPackageIdentity { readonly name: string readonly version?: string }
- **[ast-signature-changed]** `packages/ptc-runtime/ptc-runtime/src/types.ts` — 签名变化: PtcRunRequest
    旧: export interface PtcRunRequest { /** * The program source, in the runtime's {@link ../index.ts | language}. It * runs as the body of an async function: top-level `await` and `return` * are available, and the completion value becomes * {@link PtcRunResult.value}. */ program: string /** Host functions exposed to the program, one global object per namespace. */ bindings: PtcBindingNamespace[] /** Working directory in the mounted filesystem and subprocess execution world. */ cwd?: string /** * Elapsed execution budget in milliseconds. Omission uses provider defaults; * null requests no deadline. Providers validate and cap numeric budgets or reject unsupported choices. */ timeoutMs?: number | null /** Resolved authority for this execution. Providers without confinement reject an explicit policy. */ sandboxPolicy?: SandboxExecutionPolicy /** * Abort the run: the runtime stops the program (hard, even mid-loop) and * resolves with a {@link PtcRunFailure} of kind `'abort'`. In-flight * binding calls are the CALLER's to settle — the runtime only stops asking. */ signal?: AbortSignal }
    新: export interface PtcRunRequest { /** * The program source, in the runtime's {@link ../index.ts | language}. It * follows the provider's programFormat: an async function body supports * top-level `await` and `return`; a REPL supports top-level declarations, * `await`, and a final expression. The completion value becomes * {@link PtcRunResult.value}. */ program: string /** * Object-identity owner for optional in-memory state. Omission requests a fresh * environment. Consumers must await runtime.release(owner) when the owner ends. * Stateless providers ignore this field; retained state is never durable. */ stateOwner?: object /** Host functions exposed to the program, one global object per namespace. */ bindings: PtcBindingNamespace[] /** Working directory in the mounted filesystem and subprocess execution world. */ cwd?: string /** * Elapsed execution budget in milliseconds. Omission uses provider defaults; * null requests no deadline. Providers validate and cap numeric budgets or reject unsupported choices. */ timeoutMs?: number | null /** Resolved authority for this execution. Providers without confinement reject an explicit policy. */ sandboxPolicy?: SandboxExecutionPolicy /** * Abort the run: the runtime stops the program (hard, even mid-loop) and * resolves with a {@link PtcRunFailure} of kind `'abort'`. In-flight * binding calls are the CALLER's to settle — the runtime only stops asking. */ signal?: AbortSignal }
- **[ast-signature-changed]** `packages/ptc-runtime/ptc-runtime/src/types.ts` — 签名变化: PtcRunResult
    旧: export interface PtcRunResult { /** Applied file policy and observed denial, when the provider enforces file policy. */ sandbox?: PtcRunSandbox /** * The program's completion value (its top-level `return`), when it ran to * completion and the value crossed the runtime's lossless-JSON boundary. * Invalid or over-limit completions fail the run instead of substituting a * rendered string; a failed or value-less run leaves this absent. */ value?: PtcJsonValue /** * Captured text. Each source channel preserves emission order; interleaving * across independent channels is backend-dependent. Bounded only as part of * the outer result. */ logs: string[] /** Present iff the run failed; see {@link PtcRunFailure} for the taxonomy. */ error?: PtcRunFailure }
    新: export interface PtcRunResult { /** Applied file policy and observed denial, when the provider enforces file policy. */ sandbox?: PtcRunSandbox /** * The program's completion value (a return or final REPL expression), when it ran to * completion and the value crossed the runtime's lossless-JSON boundary. * Invalid or over-limit completions fail the run instead of substituting a * rendered string; a failed or value-less run leaves this absent. */ value?: PtcJsonValue /** * Captured text. Each source channel preserves emission order; interleaving * across independent channels is backend-dependent. Bounded only as part of * the outer result. */ logs: string[] /** Present iff the run failed; see {@link PtcRunFailure} for the taxonomy. */ error?: PtcRunFailure }
- **[ast-signature-changed]** `packages/schedule/schedule/src/types.ts` — 签名变化: ScheduleToolError
    旧: export type ScheduleToolError = | InvalidPromptError | InvalidSelectorError | InvalidRuleError | InvalidTimeZoneError | NotFutureError | TimeOutOfRangeError | FrequencyTooHighError | InternalScheduleError
    新: export type ScheduleToolError = | InvalidPromptError | InvalidSelectorError | InvalidRuleError | InvalidTimeZoneError | NotFutureError | TimeOutOfRangeError | FrequencyTooHighError | SubagentSessionError | InternalScheduleError
- **[ast-signature-changed]** `packages/schedule/tool-schedule` — 签名变化: registerScheduleTools
    旧: function(rootCtx:Context,toolCtx:Context,agent:Agent)
    新: function(ctx:Context)
- **[ast-signature-changed]** `packages/schedule/schedule/src/domain.ts` — 签名变化: ScheduleInputError
    旧: class(code:| 'invalid_prompt' | 'invalid_selector' | 'invalid_rule' | 'invalid_time_zone' | 'not_future' | 'time_out_of_range' | 'frequency_too_high',message:string,?options:ErrorOptions)
    新: class(code:| 'invalid_prompt' | 'invalid_selector' | 'invalid_rule' | 'invalid_time_zone' | 'not_future' | 'time_out_of_range' | 'frequency_too_high' | 'subagent_session',message:string,?options:ErrorOptions)
- ★ **[ast-signature-changed]** `packages/sdk/protocol/src/types.ts` — 签名变化: HarnessSdkRequestMap
    旧: export interface HarnessSdkRequestMap { 'initialize': { params: InitializeParams; result: InitializeResult } 'session/prompt': { params: SessionPromptParams; result: SessionPromptResult } 'shutdown': { params: undefined; result: Record<string, never> } }
    新: export interface HarnessSdkRequestMap { 'initialize': { params: InitializeParams; result: InitializeResult } 'session/prompt': { params: SessionPromptParams; result: SessionPromptResult } 'session/resume': { params: SessionResumeParams; result: Record<string, never> } 'session/wait': { params: SessionWaitParams; result: Record<string, never> } 'session/working-directory/get': { params: SessionWorkingDirectoryParams; result: SessionWorkingDirectoryResult } 'session/working-directory/set': { params: SessionWorkingDirectorySetParams; result: SessionWorkingDirectoryResult } 'shutdown': { params: undefined; result: Record<string, never> } }
- **[ast-signature-changed]** `packages/api/remote-access` — 签名变化: refusal
    旧: function(message:string)
    新: var:Refusal | undefined
- **[ast-signature-changed]** `packages/boot/plugin-manager` — 签名变化: used
    旧: var
    新: var:Registry
- **[ast-signature-changed]** `packages/util/home-paths` — 签名变化: resolveRoot
    旧: function(path:string,allowSymlink:boolean,warn:WarnFn)
    新: function(configured:string | undefined,env:Record<string, string | undefined>,envName:string,fallback:() => string)
- **[ast-signature-changed]** `packages/subagent/subagent/src/structured.ts` — 签名变化: StructuredAttachment
    旧: export interface StructuredAttachment { /** * The captured value, once the child called the tool with valid arguments * and the authoritative final tool result accepted that call. * @returns the committed value, or undefined while none was accepted. */ captured(): { value: unknown } | undefined }
    新: export interface StructuredAttachment { /** * Input stays closed from capture staging through its final result, including * an enclosing PTC execution. A failed result discards its capture and reopens input. * @returns whether the activation can accept another message. */ acceptsInput(): boolean /** * The captured value, once the child called the tool with valid arguments * and the authoritative final tool result accepted that call. * @returns the committed value, or undefined while none was accepted. */ captured(): { value: unknown } | undefined }
- **[ast-signature-changed]** `packages/subagent/subagent/src/structured.ts` — 签名变化: attachStructuredRuntime
    旧: function(childCtx:Context,schema:ObjectJsonSchema)
    新: function(childCtx:Context,schema:ObjectJsonSchema,canComplete:() => boolean)
- **[ast-signature-changed]** `packages/subagent/subagent/src/catalog.ts` — 签名变化: SubagentCatalogEvent
    旧: export type SubagentCatalogEvent = & { readonly childId: SessionId readonly childCreatedAt: number } & ( | ({ readonly version: 0 } & KnownCatalogMode) | ({ readonly version: 1 } & (KnownCatalogMode | { readonly mode: 'unknown'; readonly label?: string })) )
    新: export type SubagentCatalogEvent = & { readonly childId: SessionId readonly childCreatedAt: number } & ( | ({ readonly version: 0 } & KnownCatalogMode) | ({ readonly version: 1 } & (KnownCatalogMode | { readonly mode: 'unknown'; readonly label?: string })) | { readonly version: 2; readonly mode: 'external'; readonly label?: string } )
- **[ast-signature-changed]** `packages/subagent/subagent/src/types.ts` — 签名变化: SubagentRunInfo
    旧: export interface SubagentRunInfo { /** Unique identity shared with the paired terminal event. */ readonly runId: SubagentRunId /** * Provider name recorded when the child was first created. The provider may * be absent when an accepted one-shot run becomes ready or a persisted * Activation cold-resumes, because neither lifecycle depends on continued * registration. */ readonly provider: string /** The child agent's id. */ readonly id: SessionId /** Snapshot of whether `SubagentRun.localAgent` was present when start fulfilled. */ readonly local: boolean }
    新: export interface SubagentRunInfo { /** Unique identity shared with the paired terminal event. */ readonly runId: SubagentRunId /** * Provider name recorded when the child was first created, retained even * after that provider is unregistered. */ readonly provider: string /** The child agent's id. */ readonly id: SessionId /** Whether this activation owns a local Agent, fixed at publication. */ readonly local: boolean }
- **[ast-signature-changed]** `packages/subagent/subagent/src/types.ts` — 签名变化: SubagentRunEndInfo
    旧: export interface SubagentRunEndInfo { /** Unique identity shared with the paired start event. */ readonly runId: SubagentRunId /** The same provider name carried by the paired start event. */ readonly provider: string /** The child agent's id. */ readonly id: SessionId /** Snapshot of whether `SubagentRun.localAgent` was present when start fulfilled. */ readonly local: boolean /** The terminal stop reason. */ readonly stopReason: SubagentResult['stopReason'] /** * The child's final assistant output, selected by the same rule as * {@link SubagentResult.output}; absent on infrastructure rejection or when * the child produced none. */ readonly lastAssistantMessage?: readonly ContentBlock[] }
    新: export interface SubagentRunEndInfo { /** Unique identity shared with the paired start event. */ readonly runId: SubagentRunId /** The same provider name carried by the paired start event. */ readonly provider: string /** The child agent's id. */ readonly id: SessionId /** Whether this activation owns a local Agent, fixed at publication. */ readonly local: boolean /** The terminal stop reason. */ readonly stopReason: SubagentResult['stopReason'] /** * The child's final assistant output, selected by the same rule as * {@link SubagentResult.output}; absent on infrastructure rejection or when * the child produced none. */ readonly lastAssistantMessage?: readonly ContentBlock[] }
- **[ast-signature-changed]** `packages/subagent/subagent/src/types.ts` — 签名变化: SubagentCapabilities
    旧: export interface SubagentCapabilities { readonly agentOptions: boolean readonly outputSchema: boolean readonly depthLimit: boolean readonly toolFilter: boolean readonly persona: boolean }
    新: export interface SubagentCapabilities { readonly agentOptions: boolean /** Supports selecting a preset independently of the parent's composition. */ readonly agentPreset: boolean readonly outputSchema: boolean readonly depthLimit: boolean }
- **[ast-signature-changed]** `packages/subagent/subagent/src/types.ts` — 签名变化: SubagentStartRequest
    旧: export interface SubagentStartRequest { /** Optional short display label persisted with a session-backed child. */ readonly label?: string /** Content delivered as the child's user message. */ readonly prompt: ContentBlock[] /** * The spawning agent. In-process providers derive workspace, lineage, and * delegation depth from its durable session state. ACP reads only its cwd, * and only when no deployment `cwd` override is configured. */ readonly parent: Agent /** * Cancellation signal from the spawning context (the tool's `exec.signal`). * This is the canonical cancellation channel both before and after startup: * a provider rejects `start()` after cleaning partial resources when it * fires before the run is published, and cancels the published run's * remaining turn work when it fires afterward. */ readonly signal: AbortSignal /** * Optional host-Agent provider, model, reasoning-effort, and output-token * overrides. Requires {@link SubagentCapabilities.agentOptions}; in-process * providers merge them over the parent Agent's options when they create the * child, while the DSH SDK provider merges them over its instance defaults * before initializing the separate child runtime. */ readonly agentOptions?: AgentOptions /** * Object-rooted JSON Schema within `assertObjectJsonSchema`'s enforced subset. Start rejects * unsupported schemas or providers without the capability. Data must be plain host-realm JSON; * a successful child returns the matching value as {@link SubagentResult.structured}. */ readonly outputSchema?: ObjectJsonSchema /** * Optional absolute delegation-depth cap for the child being started: its * computed depth must be less than or equal to this non-negative safe * integer. Requires {@link SubagentCapabilities.depthLimit}; rejected at * start otherwise. */ readonly maxDepth?: number /** * Optional child tool scoping. Requires {@link SubagentCapabilities.toolFilter}; * rejected at start otherwise. In-process backends apply it as a scoped * `tools.restrict()` in the child's creation window: the named tools vanish * from the child's prompt AND refuse to execute (one visibility), with loud * unknown-name validation. */ readonly toolFilter?: ToolRestriction /** * Optional per-child persona. Requires {@link SubagentCapabilities.persona}; * rejected at start otherwise. In-process backends register it as a scoped * `deployment:persona-prefix` section on the child, SHADOWING the deployment's * persona for this child alone — same template semantics as the deployment * persona (strict `{{…}}` interpolation against the registered variables). */ readonly persona?: string }
    新: export interface SubagentStartRequest { /** Initial child directory; relative paths resolve against the parent's current directory. Omitted inherits that directory at start. */ readonly cwd?: string /** * Independent preset id; omission joins the parent's current generation. * Requires a provider with `capabilities.agentPreset` that does not inherit * parent context. */ readonly agentPreset?: string /** Optional short display label persisted with a session-backed child. */ readonly label?: string /** Content delivered as the child's user message. */ readonly prompt: ContentBlock[] /** * The spawning agent. Its effective directory supplies the default cwd; * in-process children retain its origin, lineage, and delegation depth. */ readonly parent: Agent /** * Cancellation signal from the spawning context (the tool's `exec.signal`). * This is the canonical cancellation channel both before and after startup: * a provider rejects `start()` after cleaning partial resources when it * fires before the run is published, and cancels the published run's * remaining turn work when it fires afterward. */ readonly signal: AbortSignal /** * Optional host-Agent provider, model, reasoning-effort, and output-token * overrides. Requires {@link SubagentCapabilities.agentOptions}; in-process * providers merge them over the parent Agent's options when they create the * child, while the DSH SDK provider merges them over its instance defaults * before initializing the separate child runtime. */ readonly agentOptions?: AgentOptions /** * Object-rooted JSON Schema within `assertObjectJsonSchema`'s enforced subset. Start rejects * unsupported schemas or providers without the capability. Data must be plain host-realm JSON; * a successful child returns the matching value as {@link SubagentResult.structured}. */ readonly outputSchema?: ObjectJsonSchema /** * Optional absolute delegation-depth cap for the child being started: its * computed depth must be less than or equal to this non-negative safe * integer. Requires {@link SubagentCapabilities.depthLimit}; rejected at * start otherwise. */ readonly maxDepth?: number }
- **[ast-signature-changed]** `packages/subagent/subagent/src/types.ts` — 签名变化: ResolvedSubagentStartRequest
    旧: export interface ResolvedSubagentStartRequest extends SubagentStartRequest { /** Detached descriptor a session-backed provider persists in the child log. */ readonly descriptor: SubagentDescriptorData }
    新: export interface ResolvedSubagentStartRequest extends SubagentStartRequest { /** Absolute child directory captured from the parent or explicit request. */ readonly cwd: string }
- **[ast-signature-changed]** `packages/subagent/subagent/src/types.ts` — 签名变化: ContinuableCreateRequest
    旧: export interface ContinuableCreateRequest { /** The reserved durable child session id, for provider diagnostics. */ readonly sessionId: SessionId /** The delegating parent agent whose history a seeding provider reads. */ readonly parent: Agent /** * Caller cancellation, which owns preparation only until the manager accepts * the initial prompt into the child's inbox. */ readonly signal: AbortSignal }
    新: export interface ContinuableCreateRequest { /** Absolute initial directory captured before provider preparation. */ readonly cwd: string /** The reserved durable child session id, for provider diagnostics. */ readonly sessionId: SessionId /** The delegating parent agent whose history a seeding provider reads. */ readonly parent: Agent /** * Caller cancellation, which owns preparation only until the manager accepts * the initial prompt into the child's inbox. */ readonly signal: AbortSignal }
- **[ast-signature-changed]** `packages/subagent/subagent/src/types.ts` — 签名变化: SubagentRun
    旧: export interface SubagentRun { /** * Parent-scoped run id. For a local run, this MUST equal the published child * session id, whose `parentSession` records `request.parent.session.id`; a * remote provider mints an id unique in the parent namespace. */ readonly id: SessionId /** * The exact published in-process child, or `undefined` for a remote run. * When present, its id is {@link id}; the provider retains no ownership * implication beyond the run's ordinary {@link dispose} contract. */ readonly localAgent: Agent | undefined /** * Resolves with the child's terminal {@link SubagentResult} when the run * settles. Does NOT reject on a child-level failure — a model/transport * failure resolves with `stopReason: 'error'` so the consumer maps it to an * `isError` tool result. Rejects on an infrastructure fault the seam cannot * represent as a stop reason. */ readonly result: Promise<SubagentResult> /** * Cancel remaining work, reach child quiescence, and release resources. * Idempotent. */ dispose(): Promise<void> }
    新: export interface SubagentRun { /** Provider-minted id, unique across all parents, providers, and local Sessions in this runtime. */ readonly id: SessionId /** * Resolves with the child's terminal {@link SubagentResult} when the run * settles. Does NOT reject on a child-level failure — a model/transport * failure resolves with `stopReason: 'error'` so the consumer maps it to an * `isError` tool result. Rejects on an infrastructure fault the seam cannot * represent as a stop reason. */ readonly result: Promise<SubagentResult> /** * Cancel remaining work, reach child quiescence, and release resources. * Idempotent. */ dispose(): Promise<void> }
- **[ast-signature-changed]** `packages/subagent/subagent/src/types.ts` — 签名变化: SubagentProvider
    旧: export interface SubagentProvider { /** Unique registry name (e.g. `spawn`, `fork`, `acp`). */ readonly name: string /** The start-time features this provider supports (see {@link SubagentCapabilities}). */ readonly capabilities: SubagentCapabilities /** * Whether the child sees the parent's completed-turn prefix. This is descriptive, not a * service-validated start capability: the model-facing tool derives truthful wording from it. * It says nothing about tool registration, injected services, or authority inheritance. */ readonly inheritsParentContext: boolean /** * Optional static provider-owned provider/model route for one-shot Agent * options. Consumers merge tool/model overrides over these values before * preflight; providers whose route derives from the parent omit it. The value * is detached immutable data and requires `agentOptions` support. */ readonly agentRouteDefaults?: Readonly<{ provider: string; model: string }> /** * Establish a ONE-SHOT child and return its handle after publication. * The service has already validated that every requested start-time * capability is supported and resolved `request.descriptor`, so a * session-backed implementation appends that descriptor inside the child's * initial turn. Before fulfillment, the provider owns setup and cleans any * unpublished partial resources before rejecting. Ownership transfers on * fulfillment; subsequent turn or infrastructure failure settles through * the returned run. Distinct starts may overlap; cancellation, failure, * result settlement, and disposal remain independent for each run. */ start(request: ResolvedSubagentStartRequest): Promise<SubagentRun> /** * OPTIONAL (continuable-creation capability): contribute the detached * creation inputs that distinguish this provider's continuable children — * only whether the child session is seeded with parent history. Method * presence IS the capability: the service rejects continuable starts on * providers without it, while a provider that has it may still serve * ordinary one-shot delegations. * * This is the provider's ONLY participation in a continuable child. The * continuation manager owns identity reservation, composition, Agent * creation, prompt delivery, cold resume, ownership, and disposal, so a * provider never sees the child's Agent, handle, turns, or teardown. * Distinct preparations may overlap; each follows its own signal and returns * data belonging only to `request.sessionId`. */ prepareContinuable?(request: ContinuableCreateRequest): Promise<ContinuableCreateSpec> }
    新: export interface SubagentProvider { /** Unique registry name (e.g. `spawn`, `fork`, `acp`). */ readonly name: string /** The start-time features this provider supports (see {@link SubagentCapabilities}). */ readonly capabilities: SubagentCapabilities /** * Whether the child sees the parent's completed-turn prefix. This is descriptive, not a * service-validated start capability: the model-facing tool derives truthful wording from it. * It says nothing about tool registration, injected services, or authority inheritance. */ readonly inheritsParentContext: boolean /** * Optional static provider-owned provider/model route for child Agent * options. Consumers merge tool/model overrides over these values before * preflight; providers whose route derives from the parent omit it. The value * is detached immutable data and requires `agentOptions` support. */ readonly agentRouteDefaults?: Readonly<{ provider: string; model: string }> /** * Establish one external execution and return its owned handle. * The service has already validated that every requested start-time * capability is supported. Before fulfillment, the provider owns setup and * cleans any unpublished partial resources before rejecting. Ownership transfers on * fulfillment; subsequent turn or infrastructure failure settles through * the returned run. Distinct starts may overlap; cancellation, failure, * result settlement, and disposal remain independent for each run. */ start?(request: ResolvedSubagentStartRequest): Promise<SubagentRun> /** * OPTIONAL (continuable-creation capability): contribute the detached * creation inputs that distinguish this provider's continuable children — * only whether the child session is seeded with parent history. Method * presence selects local activation execution. Providers without it execute * through start and do not accept subsequent messages. * * This is the provider's ONLY participation in a continuable child. The * continuation manager owns identity reservation, composition, Agent * creation, prompt delivery, cold resume, ownership, and disposal, so a * provider never sees the child's Agent, handle, turns, or teardown. * Distinct preparations may overlap; each follows its own signal and returns * data belonging only to `request.sessionId`. */ prepareContinuable?(request: ContinuableCreateRequest): Promise<ContinuableCreateSpec> }
- **[ast-signature-changed]** `packages/subagent/subagent/src/descriptor.ts` — 签名变化: snapshotSubagentDescriptor
    旧: function(input:OneShotSubagentDescriptorInput)
    新: function(input:ContinuableSubagentDescriptorInput)
- **[ast-signature-changed]** `packages/subagent/subagent/src/projection-types.ts` — 签名变化: SubagentCatalogEntry
    旧: export type SubagentCatalogEntry = & { readonly id: SessionId readonly createdAt: number } & ( | { readonly mode: 'one-shot'; readonly label?: string } | { readonly mode: 'continuable'; readonly label: string } | { readonly mode: 'unknown'; readonly label?: string } )
    新: export type SubagentCatalogEntry = & { readonly id: SessionId readonly createdAt: number } & ( | { readonly mode: 'one-shot'; readonly label?: string } | { readonly mode: 'external'; readonly label?: string } | { readonly mode: 'continuable'; readonly label: string } | { readonly mode: 'unknown'; readonly label?: string } )
- **[ast-signature-changed]** `packages/subagent/subagent/src/child-agent.ts` — 签名变化: childSessionMeta
    旧: function(parent:Agent,childDepth:number,isSeeded:boolean)
    新: function(parent:Agent,childDepth:number,isSeeded:boolean,?selectedPreset:string)
- **[ast-signature-changed]** `packages/subagent/subagent/src/child-agent.ts` — 签名变化: ChildComposition
    旧: export interface ChildComposition { /** Per-child persona shadowing the deployment persona. */ readonly persona?: string | undefined /** Per-child tool scoping. */ readonly toolFilter?: ToolRestriction | undefined }
    新: export interface ChildComposition { /** Independently mounted preset; omission shares the parent's standing generation. */ readonly agentPreset?: string | undefined /** Historical descriptor persona reapplied only during cold resume. */ readonly persona?: string | undefined /** Historical descriptor tool restriction reapplied only during cold resume. */ readonly toolFilter?: ToolRestriction | undefined }
- **[ast-signature-changed]** `packages/subagent/subagent/src/continuation-messages.ts` — 签名变化: settlementSummary
    旧: function(childId:SessionId,stopReason:SubagentResult['stopReason'])
    新: function(childId:SessionId,stopReason:SubagentResult['stopReason'],continuable:boolean)
- **[ast-signature-changed]** `packages/subagent/subagent/src/continuation-messages.ts` — 签名变化: createSettlementMessage
    旧: function(childId:SessionId,terminal:ActivationTerminal)
    新: function(childId:SessionId,terminal:SubagentResult,continuable:any)
- **[ast-signature-changed]** `packages/subagent/subagent/src/control-types.ts` — 签名变化: SubagentCatalogRow
    旧: export type SubagentCatalogRow = & { /** The durable child session id, stable across Activations. */ readonly id: SessionId /** * Whether recursive catalog listing observed a resident Session. This * does not encode a durable outcome or guarantee continuation delivery. */ readonly activity: 'running' | 'inactive' } & ( | { /** A terminal one-shot child. */ readonly mode: 'one-shot' /** Optional durable creation label from the parent catalog. */ readonly label?: string } | { /** A resumable conversation. */ readonly mode: 'continuable' /** Durable creation label from the parent catalog. */ readonly label: string } )
    新: export type SubagentCatalogRow = & { /** The durable child session id, stable across Activations. */ readonly id: SessionId /** * Whether recursive catalog listing observed a resident Session. This * does not encode a durable outcome or guarantee continuation delivery. */ readonly activity: 'running' | 'inactive' } & ( | { /** A terminal one-shot child. */ readonly mode: 'one-shot' /** Optional durable creation label from the parent catalog. */ readonly label?: string } | { /** An external execution without a local child Session. */ readonly mode: 'external' /** Optional durable creation label from the parent catalog. */ readonly label?: string } | { /** A resumable conversation. */ readonly mode: 'continuable' /** Durable creation label from the parent catalog. */ readonly label: string } )
- **[ast-signature-changed]** `packages/telemetry/otel/src/event-log.ts` — 签名变化: EventLogOptions
    旧: export interface EventLogOptions { exporter: SessionLogOptions['exporter'] resourceAttributes: Attributes scope: { name: string; version?: string } processor: Omit<BatchLogRecordProcessorOptions, 'exporter'> onFailure: SessionLogOptions['onFailure'] }
    新: export interface EventLogOptions { exporter: LogExporterOptions resourceAttributes: Attributes scope: { name: string; version?: string } processor: Omit<BatchLogRecordProcessorOptions, 'exporter'> onFailure: SessionLogOptions['onFailure'] }
- **[ast-signature-changed]** `packages/telemetry/otel/src/session-log.ts` — 签名变化: SessionLogOptions
    旧: export interface SessionLogOptions { /** Explicit destination and SDK transport options. */ exporter: OTLPExporterNodeConfigBase & { /** Full HTTP(S) logs destination. */ url: string } /** Session-only queue settings, independent of product-event aggregation. */ processor?: Omit<BatchLogRecordProcessorOptions, 'exporter'> /** May lower, but never exceed, the collector's 4,000,000-byte limit. */ maxRequestBytes?: number /** Instrumentation scope supplied by the business owner. */ scope: { name: string; version?: string } /** Application and anonymous identity carried on the OTLP resource. */ resourceAttributes: Attributes /** Report rejected single records and network failures without recording their content. */ onFailure: (message: string, error?: Error) => void }
    新: export interface SessionLogOptions { /** Explicit destination and SDK transport settings; exporter self-observability metering is not supported. */ exporter: LogExporterOptions /** Session-only queue settings, independent of product-event aggregation. */ processor?: SessionLogProcessorOptions /** May lower, but never exceed, the collector's 4,000,000-byte limit. */ maxRequestBytes?: number /** Instrumentation scope supplied by the business owner. */ scope: { name: string; version?: string } /** Application and anonymous identity carried on the OTLP resource. */ resourceAttributes: Attributes /** Report rejected single records and network failures without recording their content. */ onFailure: (message: string, error?: Error) => void }
- **[ast-signature-changed]** `packages/telemetry/otel/src/session-log.ts` — 签名变化: SessionLogProcessor
    旧: class(exporter:LogRecordExporter,limit:number,config:Required<Pick<BatchLogRecordProcessorOptions, 'maxQueueSize' | 'maxExportBatchSize' | 'scheduledDelayMillis' | 'exportTimeoutMillis'>>,warn:SessionLogOptions['onFailure'])
    新: class(exporter:LogRecordExporter,limit:number,config:Required<Pick<SessionLogProcessorOptions, 'maxQueueSize' | 'maxExportBatchSize' | 'scheduledDelayMillis' | 'exportTimeoutMillis'>>,warn:SessionLogOptions['onFailure'])
- **[ast-signature-changed]** `packages/llm/llm-pi-ai/src/adapter.ts` — 签名变化: updates
    旧: var:SessionNotification['update'][]
    新: var
- **[ast-signature-changed]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 签名变化: spellings
    旧: var
    新: function(dir:string)
- **[ast-signature-changed]** `packages/test-support/session-snapshot/src/manifest.ts` — 签名变化: SnapshotProfile
    旧: export type SnapshotProfile = 'headless' | 'sdk' | 'acp' | 'web'
    新: export type SnapshotProfile = 'headless' | 'sdk' | 'sdk-minimal' | 'acp' | 'web'
- **[ast-signature-changed]** `packages/typert/generator/src/analyzer.ts` — 签名变化: WorkspaceAnalyzerOptions
    旧: export interface WorkspaceAnalyzerOptions { /** Workspace root containing the face tsconfigs. */ readonly root: string /** Host aggregate path, relative to {@link root}; absent files are skipped. */ readonly hostConfig?: string /** Client aggregate path, relative to {@link root}; absent files are skipped. */ readonly clientConfig?: string /** Optional package-name subset for an incremental generation pass. */ readonly packages?: readonly string[] /** Independently compiled faces to materialize; both are analyzed by default. */ readonly faces?: readonly TypertFace[] /** Whether to repeat TypeScript project diagnostics before model extraction. */ readonly checkDiagnostics?: boolean /** Whether missing annotations fail or are written before a clean re-analysis. */ readonly mode?: AnalysisMode /** Shared workspace memo; supply one instance to reuse parses across analyzers. */ readonly caches?: WorkspaceCaches }
    新: export interface WorkspaceAnalyzerOptions { /** Workspace root containing the face tsconfigs. */ readonly root: string /** Host aggregate path, relative to {@link root}; absent files are skipped. */ readonly hostConfig?: string /** Client aggregate path, relative to {@link root}; absent files are skipped. */ readonly clientConfig?: string /** Optional package-name subset for an incremental generation pass. */ readonly packages?: readonly string[] /** Independently compiled faces to materialize; both are analyzed by default. */ readonly faces?: readonly TypertFace[] /** Whether to repeat TypeScript project diagnostics before model extraction. */ readonly checkDiagnostics?: boolean /** Whether missing annotations fail or are written before a clean re-analysis. */ readonly mode?: AnalysisMode /** Shared workspace memo; supply one instance to reuse parses across analyzers. */ readonly caches?: WorkspaceCaches /** * Fail analysis when a face program loads a file from a workspace * package's `lib/` directory, or cannot resolve an import of a workspace * package (default false). Enable it for faces that import no generated * output, so that the result depends only on workspace source and never on * whether package compilation ran; the failure names each importing * specifier and the source a `paths` alias should map it to. */ readonly rejectBuildOutputs?: boolean }
- **[ast-signature-changed]** `packages/typert/generator/src/analyzer.ts` — 签名变化: PackageRegistration
    旧: export interface PackageRegistration { /** The face whose aggregate references this package project. */ readonly face: TypertFace /** The package manifest name. */ readonly name: string /** Real package root directory. */ readonly root: string /** The package's own parsed tsconfig. */ readonly config: ParsedConfig /** The parsed package.json content. */ readonly manifest: Record<string, unknown> /** Export subpaths owned by this face for dual-face packages. */ readonly exportSubpaths?: readonly string[] }
    新: export interface PackageRegistration { /** The face whose aggregate references this package project. */ readonly face: TypertFace /** The package manifest name. */ readonly name: string /** Real package root directory. */ readonly root: string /** * The package's own tsconfig, parsed on first read. Typert parses only the * tsconfigs of packages it analyzes; validating every referenced tsconfig * belongs to the preceding `tsc -b`. */ readonly config: ParsedConfig /** The parsed package.json content. */ readonly manifest: Record<string, unknown> /** Export subpaths owned by this face for dual-face packages. */ readonly exportSubpaths?: readonly string[] }
- **[ast-signature-changed]** `packages/typert/generator/src/analyzer.ts` — 签名变化: parseConfig
    旧: function(path:string)
    新: function(path:string,aggregate:any)
- **[ast-signature-changed]** `packages/typert/generator/src/emitter.ts` — 签名变化: BoundarySchemaRoot
    旧: interface BoundarySchemaRoot { readonly key: string readonly type: TypeNodeId }
    新: interface BoundarySchemaRoot { readonly key: string readonly type: TypeNodeId /** Reject unknown fields in declared objects reached from this root. */ readonly closedObjects?: true }
- **[ast-signature-changed]** `packages/typert/generator/src/emitter.ts` — 签名变化: SchemaEmitter
    旧: class(renderer:TypeGraphRenderer,schemas:readonly SchemaModel[],boundaries:readonly BoundarySchemaRoot[])
    新: class(renderer:TypeGraphRenderer,schemas:readonly SchemaModel[],boundaries:readonly BoundarySchemaRoot[],options:{ readonly closedObjects?: boolean },identifiers:any)
- **[ast-signature-changed]** `packages/typert/generator/src/emitter.ts` — 签名变化: parameterBoundaryKey
    旧: function(invocation:InvocationModel,index:number)
    新: function(invocation:InvocationModel,index:number,strict:any)
- **[ast-signature-changed]** `packages/typert/generator/src/emitter.ts` — 签名变化: strictCodec
    旧: function(boundary:RemoteBoundaryModel,schema:string,?encoder:string)
    新: function(boundary:RemoteBoundaryModel,schema:string,?encoder:string,?projection:string,?description:string)
- **[ast-signature-changed]** `packages/context/harness-dev-context` — 签名变化: paragraph
    旧: var:string[]
    新: var
- **[ast-signature-changed]** `packages/typert/generator/src/emitter.ts` — 签名变化: returns
    旧: var:string | null
    新: var
- **[ast-signature-changed]** `packages/typert/generator/src/workspace.ts` — 签名变化: WorkspaceTypertGeneratorOptions
    旧: export interface WorkspaceTypertGeneratorOptions { /** * Run the per-package syntactic/semantic diagnostic pass before analysis * (default true). Pass false only when the same orchestration already * verified the workspace with tsc; the Typert-specific analysis checks * (annotation coverage, private cross-package references, unretainable * merges) run regardless. */ readonly checkDiagnostics?: boolean }
    新: export interface WorkspaceTypertGeneratorOptions { /** * Run the per-package syntactic/semantic diagnostic pass before analysis * (default true). Pass false only when the same orchestration already * verified the workspace with tsc; the Typert-specific analysis checks * (annotation coverage, private cross-package references, unretainable * merges) run regardless. */ readonly checkDiagnostics?: boolean /** * Fail when an analyzed face program loads a file from a workspace * package's `lib/` directory or cannot resolve an import of a workspace * package (default false); see * `WorkspaceAnalyzerOptions.rejectBuildOutputs`. */ readonly rejectBuildOutputs?: boolean }
- **[ast-signature-changed]** `packages/typert/generator/src/model.ts` — 签名变化: InvocationParameterModel
    旧: export interface InvocationParameterModel { readonly name: string readonly wire: string readonly source: 'json' | 'lookup' readonly lookup?: string /** Authored as an optional parameter, so consumers may omit the wire field. */ readonly optional?: true readonly boundary: RemoteBoundaryModel }
    新: export interface InvocationParameterModel { readonly name: string readonly wire: string readonly source: 'json' | 'lookup' readonly lookup?: string /** Authored as an optional parameter, so consumers may omit the wire field. */ readonly optional?: true readonly boundary: RemoteBoundaryModel readonly description?: string }
- **[ast-signature-changed]** `packages/typert/generator/src/model.ts` — 签名变化: InvocationModel
    旧: export interface InvocationModel { readonly id: string readonly service: string readonly namespace: string readonly method: string readonly implementation?: string readonly mode?: 'stream' readonly invocation: | { readonly kind: 'direct' } | { readonly kind: 'context' readonly context: string readonly wire: string readonly boundary: RemoteBoundaryModel } readonly scope?: { readonly context: string readonly wire: string } readonly parameters: readonly InvocationParameterModel[] /** Per-item boundary of the Client uplink, from the `In` type argument of `RemoteStream<Out, In>`; absent when the method reads none. */ readonly uplink?: { readonly boundary: RemoteBoundaryModel } readonly cancellation?: { readonly parameter: 'signal' } readonly result: RemoteBoundaryModel readonly location: SourceLocation }
    新: export interface InvocationModel extends DocumentationModel { readonly id: string readonly service: string readonly namespace: string readonly method: string readonly implementation?: string readonly mode?: 'stream' readonly invocation: | { readonly kind: 'direct' } | { readonly kind: 'context' readonly context: string readonly wire: string readonly boundary: RemoteBoundaryModel } readonly scope?: { readonly context: string readonly wire: string } readonly parameters: readonly InvocationParameterModel[] /** Per-item boundary of the Client uplink, from the `In` type argument of `RemoteStream<Out, In>`; absent when the method reads none. */ readonly uplink?: { readonly boundary: RemoteBoundaryModel } readonly cancellation?: { readonly parameter: 'signal' } readonly result: RemoteBoundaryModel readonly location: SourceLocation }
- **[ast-signature-changed]** `packages/typert/generator/src/model.ts` — 签名变化: TypeNodeModel
    旧: export type TypeNodeModel = | { readonly id: TypeNodeId; readonly kind: 'keyword'; readonly name: KeywordTypeName } | { readonly id: TypeNodeId; readonly kind: 'literal'; readonly value: string | number | bigint | boolean | null; readonly text: string } | { readonly id: TypeNodeId; readonly kind: 'parenthesized'; readonly type: TypeNodeId } | { readonly id: TypeNodeId; readonly kind: 'reference'; readonly name: string; readonly target: TypeTargetModel; readonly arguments: readonly TypeNodeId[] } | { readonly id: TypeNodeId; readonly kind: 'union' | 'intersection'; readonly types: readonly TypeNodeId[] } | { readonly id: TypeNodeId; readonly kind: 'array'; readonly element: TypeNodeId } | { readonly id: TypeNodeId; readonly kind: 'tuple'; readonly elements: readonly TupleElementModel[] } | { readonly id: TypeNodeId; readonly kind: 'object'; readonly members: readonly MemberModel[] } | { readonly id: TypeNodeId; readonly kind: 'function'; readonly signature: SignatureModel } | { readonly id: TypeNodeId; readonly kind: 'constructor'; readonly abstract: boolean; readonly signature: SignatureModel } | { readonly id: TypeNodeId; readonly kind: 'indexed-access'; readonly object: TypeNodeId; readonly index: TypeNodeId } | { readonly id: TypeNodeId; readonly kind: 'operator'; readonly operator: TypeOperatorName; readonly type: TypeNodeId } | { readonly id: TypeNodeId; readonly kind: 'conditional'; readonly check: TypeNodeId; readonly extends: TypeNodeId; readonly whenTrue: TypeNodeId; readonly whenFalse: TypeNodeId } | { readonly id: TypeNodeId; readonly kind: 'infer'; readonly parameter: TypeParameterModel } | { readonly id: TypeNodeId readonly kind: 'mapped' readonly parameter: TypeParameterModel readonly nameType?: TypeNodeId readonly value?: TypeNodeId readonly readonly: 'add' | 'remove' | 'preserve' readonly optional: 'add' | 'remove' | 'preserve' } | { readonly id: TypeNodeId; readonly kind: 'template-literal'; readonly head: string; readonly spans: readonly TemplateSpanModel[] } | { readonly id: TypeNodeId; readonly kind: 'type-query'; readonly expression: string; readonly arguments: readonly TypeNodeId[] } | { readonly id: TypeNodeId readonly kind: 'import-type' readonly module: string readonly qualifier?: string readonly arguments: readonly TypeNodeId[] readonly typeof: boolean readonly attributes?: string readonly target?: TypeTargetModel } | { readonly id: TypeNodeId; readonly kind: 'predicate'; readonly asserts: boolean; readonly parameter: string; readonly type?: TypeNodeId } | { readonly id: TypeNodeId; readonly kind: 'this' }
    新: export type TypeNodeModel = ( | { readonly id: TypeNodeId; readonly kind: 'keyword'; readonly name: KeywordTypeName } | { readonly id: TypeNodeId; readonly kind: 'literal'; readonly value: string | number | bigint | boolean | null; readonly text: string } | { readonly id: TypeNodeId; readonly kind: 'parenthesized'; readonly type: TypeNodeId } | { readonly id: TypeNodeId; readonly kind: 'reference'; readonly name: string; readonly target: TypeTargetModel; readonly arguments: readonly TypeNodeId[] } | { readonly id: TypeNodeId; readonly kind: 'union' | 'intersection'; readonly types: readonly TypeNodeId[] } | { readonly id: TypeNodeId; readonly kind: 'array'; readonly element: TypeNodeId } | { readonly id: TypeNodeId; readonly kind: 'tuple'; readonly elements: readonly TupleElementModel[] } | { readonly id: TypeNodeId; readonly kind: 'object'; readonly members: readonly MemberModel[] } | { readonly id: TypeNodeId; readonly kind: 'function'; readonly signature: SignatureModel } | { readonly id: TypeNodeId; readonly kind: 'constructor'; readonly abstract: boolean; readonly signature: SignatureModel } | { readonly id: TypeNodeId; readonly kind: 'indexed-access'; readonly object: TypeNodeId; readonly index: TypeNodeId } | { readonly id: TypeNodeId; readonly kind: 'operator'; readonly operator: TypeOperatorName; readonly type: TypeNodeId } | { readonly id: TypeNodeId; readonly kind: 'conditional'; readonly check: TypeNodeId; readonly extends: TypeNodeId; readonly whenTrue: TypeNodeId; readonly whenFalse: TypeNodeId } | { readonly id: TypeNodeId; readonly kind: 'infer'; readonly parameter: TypeParameterModel } | { readonly id: TypeNodeId readonly kind: 'mapped' readonly parameter: TypeParameterModel readonly nameType?: TypeNodeId readonly value?: TypeNodeId readonly readonly: 'add' | 'remove' | 'preserve' readonly optional: 'add' | 'remove' | 'preserve' } | { readonly id: TypeNodeId; readonly kind: 'template-literal'; readonly head: string; readonly spans: readonly TemplateSpanModel[] } | { readonly id: TypeNodeId; readonly kind: 'type-query'; readonly expression: string; readonly arguments: readonly TypeNodeId[] } | { readonly id: TypeNodeId readonly kind: 'import-type' readonly module: string readonly qualifier?: string readonly arguments: readonly TypeNodeId[] readonly typeof: boolean readonly attributes?: string readonly target?: TypeTargetModel } | { readonly id: TypeNodeId; readonly kind: 'predicate'; readonly asserts: boolean; readonly parameter: string; readonly type?: TypeNodeId } | { readonly id: TypeNodeId; readonly kind: 'this' } ) & { /** Canonical lossless JsonValue, represented without recursive tool-schema references. */ readonly json?: true }
- **[ast-signature-changed]** `packages/typert/protocol/src/types.ts` — 签名变化: TypertForwardableEventEntry
    旧: export type TypertForwardableEventEntry = { [Event in keyof Events]: TypertForwardingMode<Event> extends infer Mode ? Mode extends 'emit' | 'waterfall' ? { readonly event: Event; readonly mode: Mode } : never : never }[keyof Events]
    新: export type TypertForwardableEventEntry = { [Event in keyof Events]: TypertForwardingMode<Event> extends infer Mode ? Mode extends 'emit' ? { readonly event: Event readonly mode: Mode readonly resources?: TypertResourceReaders<TypertEventParameters<Event>> } : Mode extends 'waterfall' ? { readonly event: Event; readonly mode: Mode } : never : never }[keyof Events]
- **[ast-signature-changed]** `packages/typert/protocol/src/types.ts` — 签名变化: TypertCodec
    旧: export type TypertCodec = | { readonly mode: 'strict' readonly typeSymbol: string /** Materialize and return the process-realm schema on first boundary use. */ readonly create: () => TypertSchema /** * Decode a unary result whose fields require type-specific handling. * @param value - result reconstructed by the RPC carrier. * @returns the validated result, retaining native byte views. */ readonly decode?: (value: unknown) => unknown /** * Project typed binary fields into RPC result attachments. * @param value - native unary result. * @param writeBytes - records a byte view at its result-relative path and returns its JSON placeholder. * @returns JSON metadata with untouched JSON subtrees retained. */ readonly encode?: (value: unknown, writeBytes: (bytes: Uint8Array, path: readonly (string | number)[]) => null) => unknown } | { readonly mode: 'src-json' }
    新: export type TypertCodec<Value = unknown> = | TypertRemoteValue<Value> & { readonly mode: 'strict' readonly typeSymbol: string /** * Decode a unary result whose fields require type-specific handling. * @param value - result reconstructed by the RPC carrier. * @returns the validated result, retaining native byte views. */ readonly decode?: ((value: unknown) => unknown) | undefined /** * Project typed binary fields into RPC result attachments. * @param value - native unary result. * @param writeBytes - records a byte view at its result-relative path and returns its JSON placeholder. * @returns JSON metadata with untouched JSON subtrees retained. */ readonly encode?: ((value: unknown, writeBytes: (bytes: Uint8Array, path: readonly (string | number)[]) => null) => unknown) | undefined } | { readonly mode: 'src-json' }
- **[ast-signature-changed]** `packages/typert/protocol/src/types.ts` — 签名变化: InvocationParameterDescriptor
    旧: export interface InvocationParameterDescriptor { /** Source-level parameter name. */ readonly name: string /** Required key in the wire `args` object. */ readonly wire: string /** Whether the value is JSON or requires a registered Host lookup. */ readonly source: 'json' | 'lookup' /** Lookup key when `source` is `lookup`. */ readonly lookup?: string /** Boundary codec for the wire representation. */ readonly codec: TypertCodec /** Missing wire fields decode to `undefined` only for an explicitly declared `T | undefined`. */ readonly acceptsUndefined?: true }
    新: export interface InvocationParameterDescriptor { /** Source-level parameter name. */ readonly name: string /** Source parameter documentation, independent of JSON Schema support. */ readonly description?: string /** Required key in the wire `args` object. */ readonly wire: string /** Whether the value is JSON or requires a registered Host lookup. */ readonly source: 'json' | 'lookup' /** Lookup key when `source` is `lookup`. */ readonly lookup?: string /** Boundary codec for the wire representation. */ readonly codec: TypertCodec /** Missing wire fields decode to `undefined` only for an explicitly declared `T | undefined`. */ readonly acceptsUndefined?: true }
- **[ast-signature-changed]** `packages/typert/protocol/src/types.ts` — 签名变化: InvocationDescriptor
    旧: export interface InvocationDescriptor { /** Globally stable generated identity. */ readonly id: string /** Cordis service key owning the method. */ readonly service: string /** Wire namespace, defaulting to the service key. */ readonly namespace: string /** Public instance method name. */ readonly method: string /** Service member invoked when the exported method name is an alias. */ readonly implementation?: string /** Absent for unary calls; stream calls deliver every yielded item as the Host produced it. */ readonly mode?: 'stream' /** Receiver selection mode. */ readonly invocation: | { readonly kind: 'direct' } | { readonly kind: 'context' readonly context: string readonly wire: string readonly codec: TypertCodec } /** Optional consuming-Context projection for one direct lookup parameter. */ readonly scope?: { /** Context kind whose Client adapter supplies the identity. */ readonly context: string /** Lookup parameter wire field replaced by the Context identity. */ readonly wire: string } /** Ordered business parameters. */ readonly parameters: readonly InvocationParameterDescriptor[] /** * Client-to-Host items of the same logical stream, generated from the `In` * type argument of the method's `RemoteStream<Out, In>` return type; absent * when `In` is `never`. The method reads the items through * `RemoteInvocation.uplink()`, so nothing enters the parameter list. */ readonly uplink?: { /** Codec validating every uplink item before `uplink()` delivers it. */ readonly codec: TypertCodec } /** Transport cancellation injected after business parameters instead of entering wire args. */ readonly cancellation?: { /** Reserved final Host method parameter. */ readonly parameter: 'signal' } /** Codec for the unary result or each yielded stream item. */ readonly result: TypertCodec /** Source declaration used only for diagnostics. */ readonly sourceLocation?: InvocationSourceLocation }
    新: export interface InvocationDescriptor { /** Globally stable generated identity. */ readonly id: string /** Cordis service key owning the method. */ readonly service: string /** Wire namespace, defaulting to the service key. */ readonly namespace: string /** Public instance method name. */ readonly method: string /** Service member invoked when the exported method name is an alias. */ readonly implementation?: string /** Absent for unary calls; stream calls deliver every yielded item as the Host produced it. */ readonly mode?: 'stream' /** Receiver selection mode. */ readonly invocation: | { readonly kind: 'direct' } | { readonly kind: 'context' readonly context: string readonly wire: string readonly codec: TypertCodec } /** Optional consuming-Context projection for one direct lookup parameter. */ readonly scope?: { /** Context kind whose Client adapter supplies the identity. */ readonly context: string /** Lookup parameter wire field replaced by the Context identity. */ readonly wire: string } /** Ordered business parameters. */ readonly parameters: readonly InvocationParameterDescriptor[] /** * Client-to-Host items of the same logical stream, generated from the `In` * type argument of the method's `RemoteStream<Out, In>` return type; absent * when `In` is `never`. The method reads the items through * `RemoteInvocation.uplink()`, so nothing enters the parameter list. */ readonly uplink?: { /** Codec validating every uplink item before `uplink()` delivers it. */ readonly codec: TypertCodec } /** Transport cancellation injected after business parameters instead of entering wire args. */ readonly cancellation?: { /** Reserved final Host method parameter. */ readonly parameter: 'signal' } /** Codec for the unary result or each yielded stream item. */ readonly result: TypertCodec /** Source-owned method documentation; ordinary methods need not have JSDoc. */ readonly description?: string /** Source declaration used only for diagnostics. */ readonly sourceLocation?: InvocationSourceLocation }
- **[ast-signature-changed]** `packages/typert/protocol/src/types.ts` — 签名变化: PeerScope
    旧: export interface PeerScope { readonly id: PeerId readonly ctx: Context /** * Tear down every registration made through `ctx`. * @returns settles once the scope has quiesced; racing calls share one completion. */ dispose(): Promise<void> }
    新: export interface PeerScope { readonly id: PeerId /** Connection-lifetime registrations; disposed with the Peer. */ readonly ctx: Context /** Caller identity fixed at creation by in-process Host code; no wire field can set it. */ readonly principal: Principal /** Aborted once the Peer is disposed; Remote streams that speak for the Peer end with it. */ readonly signal: AbortSignal /** Whether the Peer may open a forwarded-event stream; this does not grant business permissions. */ readonly interactions: 'answer' | 'none' /** * Tear down every registration made through `ctx`. * @returns settles once the scope has quiesced; racing calls share one completion. */ dispose(): Promise<void> }
- **[ast-signature-changed]** `packages/typert/protocol/src/types.ts` — 签名变化: RemoteInvocation
    旧: export interface RemoteInvocation { readonly request: { readonly namespace: string readonly method: string readonly args: Readonly<Record<string, unknown>> } /** Cordis service key of the receiving Service. */ readonly service: string /** Peer the call speaks for; an in-process carrier speaks for the operator. */ readonly peer: PeerScope /** Carrier cancellation: Client cancel, socket close, or an uplink failure. */ readonly signal: AbortSignal /** * The Client's uplink items for this call. Available once; a second call * throws. With an uplink codec on the descriptor every item is decoded to * `In`; without one items arrive as `unknown` after a JSON-safety check. * Iteration ends when the Client ends its uplink; when the method finishes * its downlink the Gateway calls the iterator's `return()` and unread items * are dropped. `In` is the caller's assertion: the runtime decodes by the * descriptor and does not cross-check it. * @template In - item type the caller reads; the descriptor codec decides what arrives. * @returns the single-consumer uplink iterable. */ uplink<In = unknown>(): AsyncIterable<In> }
    新: export interface RemoteInvocation { readonly request: { readonly namespace: string readonly method: string readonly args: Readonly<Record<string, unknown>> } /** Cordis service key of the receiving Service. */ readonly service: string /** Peer the call speaks for; every carrier names it explicitly. */ readonly peer: PeerScope /** Carrier cancellation: Client cancel, socket close, or an uplink failure. */ readonly signal: AbortSignal /** Carrier frame capacity; absent when the carrier imposes no encoded-frame inbox limit. */ readonly uplinkWindow?: RemoteUplinkWindow | undefined /** * The Client's uplink items for this call. Available once; a second call * throws. With an uplink codec on the descriptor every item is decoded to * `In`; without one items arrive as `unknown` after a JSON-safety check. * Iteration ends when the Client ends its uplink; when the method finishes * its downlink the Gateway calls the iterator's `return()` and unread items * are dropped. `In` is the caller's assertion: the runtime decodes by the * descriptor and does not cross-check it. * @template In - item type the caller reads; the descriptor codec decides what arrives. * @returns the single-consumer uplink iterable. */ uplink<In = unknown>(): AsyncIterable<In> }
- **[ast-signature-changed]** `packages/typert/protocol/src/types.ts` — 签名变化: TypertLookupProvider
    旧: export interface TypertLookupProvider<Host = unknown, Wire = unknown> { /** Source parameter name recognized by the SRC weak parser. */ readonly parameter: string /** Wire field replacing the Host object parameter. */ readonly wire: string /** Canonical Host type symbol used by strict generation. */ readonly hostTypeSymbol: string /** Canonical wire type symbol used by strict generation. */ readonly wireTypeSymbol: string /** * Resolve a wire identity through the provider's default policy. * @param id - validated wire identity. * @returns the object, `undefined` when unavailable, or either asynchronously. */ resolve(id: Wire): Host | undefined | Promise<Host | undefined> }
    新: export interface TypertLookupProvider<Host = unknown, Wire = unknown> { /** Source parameter name recognized by the SRC weak parser. */ readonly parameter: string /** Wire field replacing the Host object parameter. */ readonly wire: string /** Resource kind the wire identity names; a parameter of this lookup carries that resource. */ readonly resource?: TypertResourceKindFor<Wire> /** Canonical Host type symbol used by strict generation. */ readonly hostTypeSymbol: string /** Canonical wire type symbol used by strict generation. */ readonly wireTypeSymbol: string /** * Resolve a wire identity through the provider's default policy. * @param id - validated wire identity. * @returns the object, `undefined` when unavailable, or either asynchronously. */ resolve(id: Wire): Host | undefined | Promise<Host | undefined> }
- **[ast-signature-changed]** `packages/typert/protocol/src/types.ts` — 签名变化: TypertHostContextAdapter
    旧: export interface TypertHostContextAdapter<Wire = unknown> { /** Wire field carrying the Context identity. */ readonly wire: string /** Canonical wire type symbol used by strict generation. */ readonly wireTypeSymbol: string /** * Resolve a validated wire identity to a live Host Context. * @param id - validated wire identity. * @returns the Context, or `undefined` when it is unavailable. */ resolve(id: Wire): Context | undefined | Promise<Context | undefined> }
    新: export interface TypertHostContextAdapter<Wire = unknown> { /** Wire field carrying the Context identity. */ readonly wire: string /** Canonical wire type symbol used by strict generation. */ readonly wireTypeSymbol: string /** Resource kind the wire identity names; a call scoped to this Context carries that resource. */ readonly resource?: TypertResourceKindFor<Wire> /** * Resolve a validated wire identity to a live Host Context. * @param id - validated wire identity. * @returns the Context, or `undefined` when it is unavailable. */ resolve(id: Wire): Context | undefined | Promise<Context | undefined> }
- **[ast-signature-changed]** `packages/typert/protocol/src/types.ts` — 签名变化: TypertRegistryChange
    旧: export interface TypertRegistryChange { readonly kind: 'local' | 'remote' | 'lookup' | 'host-context' | 'client-context' readonly key: string }
    新: export interface TypertRegistryChange { readonly kind: 'local' | 'remote' | 'lookup' | 'host-context' | 'client-context' | 'resource' readonly key: string }
- **[ast-signature-changed]** `packages/typert/protocol/src/types.ts` — 签名变化: TypertContextRegistry
    旧: export interface TypertContextRegistry { /** * Register a Host Context adapter. * @param key - merge-declared Context key. * @param adapter - owning package's Host resolver and wire declaration. * @returns disposer withdrawing the exact adapter. */ registerHost<K extends StringKeyOf<TypertContextMap>>( key: K, adapter: TypertHostContextAdapter<TypertContextWire<TypertContextMap[K]>>, ): TypertDisposer /** * Override one Host Context key's resolution policy for the calling fiber. * Configuration may precede provider registration and restores the provider's default resolver on disposal. * @param key - merge-declared Context key. * @param resolver - composition-owned resolver used by every Host Context lookup of this key. * @returns disposer restoring the provider's default resolver. */ configureHost<K extends StringKeyOf<TypertContextMap>>( key: K, resolver: TypertHostContextResolver<TypertContextWire<TypertContextMap[K]>>, ): TypertDisposer /** * Register a Client Context adapter. * @param key - merge-declared Context key. * @param adapter - owning package's bidirectional Client projection. * @returns disposer withdrawing the exact adapter. */ registerClient<K extends StringKeyOf<TypertContextMap>>( key: K, adapter: TypertClientContextAdapter<TypertContextWire<TypertContextMap[K]>>, ): TypertDisposer /** * Look up a Host Context adapter. * @param key - descriptor Context key. * @returns the adapter, or `undefined` when absent. */ getHost(key: string): TypertHostContextAdapter | undefined /** * Look up a Client Context adapter. * @param key - descriptor Context key. * @returns the adapter, or `undefined` when absent. */ getClient(key: string): TypertClientContextAdapter | undefined /** * Observe later Context adapter changes. * @param listener - synchronous contained observer. * @returns disposer for this subscription. */ subscribe(listener: TypertRegistryListener): TypertDisposer }
    新: export interface TypertContextRegistry { /** * Register a Host Context adapter. * @param key - merge-declared Context key. * @param adapter - owning package's Host resolver and wire declaration. * @returns disposer withdrawing the exact adapter. */ registerHost<K extends StringKeyOf<TypertContextMap>>( key: K, adapter: TypertHostContextAdapter<TypertContextWire<TypertContextMap[K]>>, ): TypertDisposer /** * Override one Host Context key's resolution policy for the calling fiber. * Configuration may precede provider registration and restores the provider's default resolver on disposal. * @param key - merge-declared Context key. * @param resolver - composition-owned resolver used by every Host Context lookup of this key. * @returns disposer restoring the provider's default resolver. */ configureHost<K extends StringKeyOf<TypertContextMap>>( key: K, resolver: TypertHostContextResolver<TypertContextWire<TypertContextMap[K]>>, ): TypertDisposer /** * Register a Client Context adapter. * @param key - merge-declared Context key. * @param adapter - owning package's bidirectional Client projection. * @returns disposer withdrawing the exact adapter. */ registerClient<K extends StringKeyOf<TypertContextMap>>( key: K, adapter: TypertClientContextAdapter<TypertContextWire<TypertContextMap[K]>>, ): TypertDisposer /** * Look up a Host Context adapter; a configured resolver keeps the adapter's declaration and `resource`. * @param key - descriptor Context key. * @returns the adapter, or `undefined` when absent. */ getHost(key: string): TypertHostContextAdapter | undefined /** * Look up a Client Context adapter. * @param key - descriptor Context key. * @returns the adapter, or `undefined` when absent. */ getClient(key: string): TypertClientContextAdapter | undefined /** * Observe later Context adapter changes. * @param listener - synchronous contained observer. * @returns disposer for this subscription. */ subscribe(listener: TypertRegistryListener): TypertDisposer }
- **[ast-signature-changed]** `packages/util/package-manifest/src/types.ts` — 签名变化: PluginLocalizedMeta
    旧: export interface PluginLocalizedMeta { /** Display title; omission preserves the consumer's technical-name fallback. */ readonly title?: LocalizedText /** Display introduction after locale and package-field fallback. */ readonly description?: LocalizedText /** Base64 image data URL read from the manifest's icon file; render as an image, not inline markup. */ readonly icon?: string /** Unmodified local metadata diagnostic; the plugin remains manageable. */ readonly error?: string }
    新: export interface PluginLocalizedMeta { /** Display title; omission preserves the consumer's technical-name fallback. */ readonly title?: LocalizedText /** Display introduction after locale and package-field fallback. */ readonly description?: LocalizedText /** Base64 image data URL from a package root's manifest icon or an exported `<specifier>/icon`; render as an image, not inline markup. */ readonly icon?: string /** Unmodified local metadata diagnostic; the plugin remains manageable. */ readonly error?: string }
- **[ast-signature-changed]** `packages/workspace/workspace/src/entity.ts` — 签名变化: WorkspaceEntityHost
    旧: export interface WorkspaceEntityHost { /** * Resolve the open `workspaces` table. * @returns the table; throws while the registry has not started yet. */ table(): KvTable<WorkspaceId, WorkspaceRecord> /** * Read a session's canonical directory from the registry's header index. * @param id - Session whose indexed path is requested. * @returns the canonical directory, or `undefined` when the header is * missing or its cwd cannot identify an existing directory. */ sessionPath(id: SessionId): string | undefined /** * Read one stored session header for attach validation. * @param id - The session whose header to read. * @returns the header; rejects when session persistence is absent or holds * no session with this id. */ readSessionHeader(id: SessionId): Promise<SessionHeader> /** * Publish a successfully validated canonical cwd to the projection index. * @param id - Validated session id. * @param path - Canonical existing directory from the immutable header cwd. */ rememberSessionPath(id: SessionId, path: string): void }
    新: export interface WorkspaceEntityHost { /** * Resolve the open `workspaces` table. * @returns the table; throws while the registry has not started yet. */ table(): KvTable<WorkspaceId, WorkspaceRecord> /** * Validate an already-accounted session, preserving ownership when its fully * qualified cwd cannot resolve because a path component is missing. * @param id - Session already present in this workspace's candidate account. * @param path - Workspace's stored canonical directory. * @returns whether the candidate remains a member. */ candidateMatches(id: SessionId, path: string): boolean /** * Read one stored session header for attach validation. * @param id - The session whose header to read. * @returns the header; rejects when session persistence is absent or holds * no session with this id. */ readSessionHeader(id: SessionId): Promise<SessionHeader> /** * Publish a successfully validated canonical cwd to the projection index. * @param id - Validated session id. * @param path - Canonical existing directory from the immutable header cwd. */ rememberSessionPath(id: SessionId, path: string): void }
- **[ast-signature-changed]** `packages/workspace/workspace/src/types.ts` — 签名变化: Workspace
    旧: export interface Workspace { /** Stable record id (generated uuid). */ readonly id: WorkspaceId /** * Canonical directory path: the `fs.realpath` of the path given at create * time (trailing slashes, `..`, and symlinks all resolved). Never rewritten * afterwards, even when the directory disappears (see {@link status}). */ readonly path: string /** Display title. Defaults to the final path segment, or a filesystem root's own spelling; duplicates are allowed. */ readonly title: string /** ISO-8601 creation instant, stamped at create and never rewritten. */ readonly createdAt: string /** ISO-8601 instant of the last durable mutation (create counts as one). */ readonly updatedAt: string /** * Header-validated sessions in manually owned order: a new session is * prepended at attach, explicit reordering goes through * `insertSessionBefore`, and activity never reorders. The durable candidate * account is filtered synchronously: missing headers, invalid cwd values, * and canonical cwd mismatches are never returned. A subsequent workspace * mutation prunes those filtered candidates durably. */ readonly sessionIds: readonly SessionId[] /** * Replace the display title durably. * @param title - New title; any string, duplicates across workspaces allowed. * @returns resolution after durability. */ setTitle(title: string): Promise<void> /** * Prepend a session to this workspace's candidate account. An already * accounted id resolves without writing, aside from the durable * filtered-candidate prune every accepted mutation performs. A new id's * live or persisted * header cwd must resolve to an existing directory equal to {@link path}; * unknown ids, missing or invalid cwd values, and mismatches reject without * writing. * @param sessionId - The session to record. * @returns resolution after durability. */ attachSession(sessionId: SessionId): Promise<void> /** * Move an accounted session within the manual order, DOM-insertBefore-like: * with an anchor the session lands before it, without one it appends to the * end. Only the moved id changes position. A session or anchor absent from * the account rejects without writing; a move to the current position * resolves without writing, aside from the durable filtered-candidate * prune every accepted mutation performs; decided on the domain write * chain. * @param sessionId - The accounted session to move. * @param beforeSessionId - Accounted anchor to insert before; omitted appends. * @returns resolution after durability. */ insertSessionBefore(sessionId: SessionId, beforeSessionId?: SessionId): Promise<void> /** * Remove a session from this workspace's account. Idempotent: an id not on * the account resolves without writing, aside from the durable * filtered-candidate prune every accepted mutation performs; decided on * the domain write chain like attach. Never touches the session's own stored log. * @param sessionId - The session to remove. * @returns resolution after durability. */ detachSession(sessionId: SessionId): Promise<void> /** * Live directory check, uncached: whether {@link path} currently exists and * is a directory. A missing directory never mutates the record — the * directory may only be temporarily moved. * @returns `'ok'` when the directory exists, `'missing-dir'` otherwise. */ status(): Promise<'ok' | 'missing-dir'> }
    新: export interface Workspace { /** Stable record id (generated uuid). */ readonly id: WorkspaceId /** * Canonical directory path: the `fs.realpath` of the path given at create * time (trailing slashes, `..`, and symlinks all resolved). Never rewritten * afterwards, even when the directory disappears (see {@link status}). */ readonly path: string /** Display title. Defaults to the final path segment, or a filesystem root's own spelling; duplicates are allowed. */ readonly title: string /** ISO-8601 creation instant, stamped at create and never rewritten. */ readonly createdAt: string /** ISO-8601 instant of the last durable mutation (create counts as one). */ readonly updatedAt: string /** * Header-validated sessions in manually owned order: a new session is * prepended at attach, explicit reordering goes through * `insertSessionBefore`, and activity never reorders. The durable candidate * account is filtered synchronously: missing headers, invalid cwd values, * and canonical cwd mismatches are never returned. A fully qualified cwd * whose realpath or directory stat fails with ENOENT preserves an existing * candidate, including a dangling symlink; other filesystem failures do not. * A subsequent mutation prunes filtered candidates, not missing-directory * candidates. This does not admit new sessions or recreate directories. */ readonly sessionIds: readonly SessionId[] /** * Replace the display title durably. * @param title - New title; any string, duplicates across workspaces allowed. * @returns resolution after durability. */ setTitle(title: string): Promise<void> /** * Prepend a session to this workspace's candidate account. An already * accounted id resolves without writing, aside from the durable * filtered-candidate prune every accepted mutation performs. A new id's * live or persisted * header cwd must resolve to an existing directory equal to {@link path}; * unknown ids, missing or invalid cwd values, and mismatches reject without * writing. * @param sessionId - The session to record. * @returns resolution after durability. */ attachSession(sessionId: SessionId): Promise<void> /** * Move an accounted session within the manual order, DOM-insertBefore-like: * with an anchor the session lands before it, without one it appends to the * end. Only the moved id changes position. A session or anchor absent from * the account rejects without writing; a move to the current position * resolves without writing, aside from the durable filtered-candidate * prune every accepted mutation performs; decided on the domain write * chain. * @param sessionId - The accounted session to move. * @param beforeSessionId - Accounted anchor to insert before; omitted appends. * @returns resolution after durability. */ insertSessionBefore(sessionId: SessionId, beforeSessionId?: SessionId): Promise<void> /** * Remove a session from this workspace's account. Idempotent: an id not on * the account resolves without writing, aside from the durable * filtered-candidate prune every accepted mutation performs; decided on * the domain write chain like attach. Never touches the session's own stored log. * @param sessionId - The session to remove. * @returns resolution after durability. */ detachSession(sessionId: SessionId): Promise<void> /** * Live directory check, uncached: whether {@link path} currently exists and * is a directory. A missing directory never mutates the record — the * directory may only be temporarily moved. * @returns `'ok'` when the directory exists, `'missing-dir'` otherwise. */ status(): Promise<'ok' | 'missing-dir'> }
- **[ast-signature-changed]** `packages/jobs/jobs/src/view.ts` — 签名变化: JobView
    旧: export interface JobView { /** The registry-issued id (`<kind>-N`). */ readonly id: JobId /** * The producer kind the job was registered with: a Host-registered * `JobKind`, carried as an open string because a browser bundle or a Remote * codec sees only the `JobKindMap` merges its own program compiles. */ readonly kind: string /** The producer-supplied one-line label. */ readonly label: string /** Owning session; absent for an unowned job, which every caller can see. */ readonly owner?: SessionId /** Producer-owned cap for complete model-facing notices and reads, in UTF-8 bytes. */ readonly outputLimitBytes?: number /** Current lifecycle state. */ readonly status: JobStatus /** The producer's live progress line (`3/10`, the current phase); cleared at settlement. */ readonly progress?: string /** Terminal reason (`exit code: 3`); a recorded kill reason is merged in. */ readonly detail?: string /** Epoch ms when the job was registered. */ readonly startedAt: number /** Epoch ms when the job settled; absent while live. */ readonly finishedAt?: number /** * The output ring's absolute coordinates and the complete-stream files * behind it. `total` is the offset the next chunk starts at (0 while * nothing was written); `earliest` is the oldest retained byte, greater * than zero exactly when retention dropped the head. `spillPaths` lists the * spill files the job's pull sources currently keep, in source order and * deduplicated, and is absent while no source keeps one: it outlives any * chunk, so a reader below `earliest` can still name where the bytes went. */ readonly output: { readonly total: number; readonly earliest: number; readonly spillPaths?: readonly string[] } }
    新: export interface JobView { /** The registry-issued id (`<kind>-<short-uuid>`). */ readonly id: JobId /** * The producer kind the job was registered with: a Host-registered * `JobKind`, carried as an open string because a browser bundle or a Remote * codec sees only the `JobKindMap` merges its own program compiles. */ readonly kind: string /** The producer-supplied one-line label. */ readonly label: string /** Owning session; absent for an unowned job, which every caller can see. */ readonly owner?: SessionId /** Producer-owned cap for complete model-facing notices and reads, in UTF-8 bytes. */ readonly outputLimitBytes?: number /** Current lifecycle state. */ readonly status: JobStatus /** The producer's live progress line (`3/10`, the current phase); cleared at settlement. */ readonly progress?: string /** Terminal reason (`exit code: 3`); a recorded kill reason is merged in. */ readonly detail?: string /** Epoch ms when the job was registered. */ readonly startedAt: number /** Epoch ms when the job settled; absent while live. */ readonly finishedAt?: number /** * The output ring's absolute coordinates and the complete-stream files * behind it. `total` is the offset the next chunk starts at (0 while * nothing was written); `earliest` is the oldest retained byte, greater * than zero exactly when retention dropped the head. `spillPaths` lists the * spill files the job's pull sources currently keep, in source order and * deduplicated, and is absent while no source keeps one: it outlives any * chunk, so a reader below `earliest` can still name where the bytes went. */ readonly output: { readonly total: number; readonly earliest: number; readonly spillPaths?: readonly string[] } }
- **[ast-signature-changed]** `packages/llm/llm-pi-ai/src/catalog.ts` — 签名变化: OfferedCompatField
    旧: type OfferedCompatField = | OfferedIn<typeof COMPLETIONS_COMPAT_GATE> | OfferedIn<typeof RESPONSES_COMPAT_GATE> | OfferedIn<typeof ANTHROPIC_COMPAT_GATE> | OfferedIn<typeof BEDROCK_COMPAT_GATE>
    新: type OfferedCompatField = | OfferedIn<typeof COMPLETIONS_COMPAT_GATE> | OfferedIn<typeof RESPONSES_COMPAT_GATE> | OfferedIn<typeof ANTHROPIC_COMPAT_GATE> | OfferedIn<typeof BEDROCK_COMPAT_GATE> // oxlint-disable-next-line typescript/no-redundant-type-constituents -- Include gates whose current offering is empty. | OfferedIn<typeof MISTRAL_COMPAT_GATE>
- **[ast-signature-changed]** `packages/llm/llm-pi-ai/src/catalog.ts` — 签名变化: UpstreamCompat
    旧: type UpstreamCompat = OpenAICompletionsCompat & OpenAIResponsesCompat & AnthropicMessagesCompat & BedrockCompat
    新: type UpstreamCompat = OpenAICompletionsCompat & OpenAIResponsesCompat & AnthropicMessagesCompat & BedrockCompat & MistralConversationsCompat
- **[ast-signature-changed]** `packages/llm/llm-pi-ai/src/catalog.ts` — 签名变化: ModelCompat
    旧: type ModelCompat = OpenAICompletionsCompat | OpenAIResponsesCompat | AnthropicMessagesCompat | BedrockCompat
    新: type ModelCompat = OpenAICompletionsCompat | OpenAIResponsesCompat | AnthropicMessagesCompat | BedrockCompat | MistralConversationsCompat
- **[config-field-type-changed]** `config:@deepseek-ai/dsh-host-webserver` — 配置字段类型变化: host: '127.0.0.1' | '0.0.0.0' -> string
- **[config-field-type-changed]** `config:@deepseek-ai/dsh-session-telemetry-otel` — 配置字段类型变化: exporter: ?OTLPExporterNodeConfigBase & { -> ?Omit<LogExporterOptions, 'url'> & {
- **[config-field-type-changed]** `config:@deepseek-ai/dsh-session-telemetry-otel` — 配置字段类型变化: processor: ?Omit<BatchLogRecordProcessorOptions, 'exporter'> -> ?SessionLogProcessorOptions

## info

- **[package-added]** `packages/api/remote-access` — 新增包
- **[package-added]** `packages/client/ui-secret-mask` — 新增包
- **[package-added]** `packages/context/harness-dev-context` — 新增包
- **[package-added]** `packages/experimental/badge-skill-bundle` — 新增包
- **[package-added]** `packages/experimental/claude-code-mods` — 新增包
- **[package-added]** `packages/experimental/client-ui-claude-code-mods` — 新增包
- **[package-added]** `packages/experimental/client-ui-cot-translation` — 新增包
- **[package-added]** `packages/experimental/cot-translation-bundle` — 新增包
- **[package-added]** `packages/experimental/cua` — 新增包
- **[package-added]** `packages/experimental/cua-macos` — 新增包
- **[package-added]** `packages/experimental/hook-protocol` — 新增包
- **[package-added]** `packages/experimental/hooks-claude-code` — 新增包
- **[package-added]** `packages/experimental/hooks-codex` — 新增包
- **[package-added]** `packages/experimental/inspector-profile` — 新增包
- **[package-added]** `packages/experimental/ralph-bundle` — 新增包
- **[package-added]** `packages/experimental/session-inspector` — 新增包
- **[package-added]** `packages/experimental/session-search` — 新增包
- **[package-added]** `packages/experimental/session-title-all-prompts-llm` — 新增包
- **[package-added]** `packages/experimental/session-titles-bundle` — 新增包
- **[package-added]** `packages/experimental/skill-badge` — 新增包
- **[package-added]** `packages/experimental/terminal-bundle` — 新增包
- **[package-added]** `packages/experimental/tool-ralph` — 新增包
- **[package-added]** `packages/experimental/tool-session-query` — 新增包
- **[package-added]** `packages/experimental/tool-terminal` — 新增包
- **[package-added]** `packages/experimental/tool-worktree` — 新增包
- **[package-added]** `packages/experimental/translator` — 新增包
- **[package-added]** `packages/experimental/webhook` — 新增包
- **[package-added]** `packages/experimental/webhook-github` — 新增包
- **[package-added]** `packages/experimental/worktree` — 新增包
- **[package-added]** `packages/schedule/tool-schedule` — 新增包
- **[package-added]** `packages/session/tool-working-directory` — 新增包
- **[package-added]** `packages/session/working-directory` — 新增包
- **[package-added]** `packages/ssh/ssh-helper-runtime` — 新增包
- **[doc-added]** `docs/cli-help.md` — 新增文档
- **[doc-added]** `docs/cli-help.zh.md` — 新增文档
- **[doc-added]** `docs/defensive-patterns/client-components.md` — 新增文档
- **[doc-added]** `docs/defensive-patterns/client-components.zh.md` — 新增文档
- **[doc-added]** `docs/defensive-patterns/conversation-and-session.md` — 新增文档
- **[doc-added]** `docs/defensive-patterns/conversation-and-session.zh.md` — 新增文档
- **[doc-added]** `docs/defensive-patterns/general.md` — 新增文档
- **[doc-added]** `docs/defensive-patterns/general.zh.md` — 新增文档
- **[doc-added]** `docs/defensive-patterns/package-surface.md` — 新增文档
- **[doc-added]** `docs/defensive-patterns/package-surface.zh.md` — 新增文档
- **[doc-added]** `docs/defensive-patterns/README.md` — 新增文档
- **[doc-added]** `docs/defensive-patterns/README.zh.md` — 新增文档
- **[doc-added]** `docs/defensive-patterns/remote-and-api.md` — 新增文档
- **[doc-added]** `docs/defensive-patterns/remote-and-api.zh.md` — 新增文档
- **[doc-added]** `docs/experimental-persistence-catalog.md` — 新增文档
- **[doc-added]** `docs/experimental-persistence-catalog.zh.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-09-13-working-directory.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-09-13-working-directory.zh.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-09-19-external-subagent-catalog.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-09-19-external-subagent-catalog.zh.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-09-21-user-question-reply.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-09-21-user-question-reply.zh.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-09-30-job-session-lifecycle.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-09-30-job-session-lifecycle.zh.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-05-ptc-operation-metadata.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-05-ptc-operation-metadata.zh.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-05-working-directory-attribution.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-05-working-directory-attribution.zh.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-07-title-reasoning-effort.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-07-title-reasoning-effort.zh.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-13-user-rpc-principal.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-13-user-rpc-principal.zh.md` — 新增文档
- **[doc-added]** `docs/subsystems/claude-code-mods.md` — 新增文档
- **[doc-added]** `docs/subsystems/claude-code-mods.zh.md` — 新增文档
- **[doc-added]** `docs/subsystems/translation.md` — 新增文档
- **[doc-added]** `docs/subsystems/translation.zh.md` — 新增文档
- **[doc-added]** `docs/subsystems/working-directory.md` — 新增文档
- **[doc-added]** `docs/subsystems/working-directory.zh.md` — 新增文档
- **[doc-added]** `docs/subsystems/worktrees.md` — 新增文档
- **[doc-added]** `docs/subsystems/worktrees.zh.md` — 新增文档
- **[doc-added]** `docs/user/guide/public-deployments.md` — 新增文档
- **[doc-added]** `docs/user/guide/public-deployments.zh.md` — 新增文档
- **[config-scope-added]** `config:@deepseek-ai/dsh-experimental-claude-code-mods` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-experimental-client-ui-cot-translation` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-experimental-cua-macos` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-experimental-translator` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-experimental-worktree` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-tool-ask-user` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-working-directory` — 新增可配置包
- **[ast-export-added]** `packages/api/gateway` — 新增导出: requireInteractions
- **[ast-export-added]** `packages/api/gateway` — 新增导出: assertPeerLive
- **[ast-export-added]** `packages/api/gateway` — 新增导出: validateArguments
- **[ast-export-added]** `packages/api/remote-access` — 新增导出: RemoteAccessBaseline
- **[ast-export-added]** `packages/api/remote-access` — 新增导出: FOLLOW_ACTION
- **[ast-export-added]** `packages/api/remote-access` — 新增导出: ALLOW
- **[ast-export-added]** `packages/api/remote-access` — 新增导出: NO_ALLOW
- **[ast-export-added]** `packages/api/remote-access` — 新增导出: POLICY_FAILED
- **[ast-export-added]** `packages/api/remote-access` — 新增导出: OWNER
- **[ast-export-added]** `packages/api/remote-access` — 新增导出: OWNER_BASELINE
- **[ast-export-added]** `packages/api/remote-access` — 新增导出: ErasedBinding
- **[ast-export-added]** `packages/api/remote-access` — 新增导出: PolicyEntry
- **[ast-export-added]** `packages/api/remote-access` — 新增导出: Refusal
- **[ast-export-added]** `packages/api/remote-access` — 新增导出: Evaluation
- **[ast-export-added]** `packages/api/remote-access` — 新增导出: ALLOWED
- **[ast-export-added]** `packages/api/remote-access` — 新增导出: FAILED
- **[ast-export-added]** `packages/api/remote-access` — 新增导出: AccessFollower
- **[ast-export-added]** `packages/api/remote-access` — 新增导出: RemoteAccessService
- **[ast-export-added]** `packages/api/remote-access` — 新增导出: policies
- **[ast-export-added]** `packages/api/remote-access` — 新增导出: evaluation
- **[ast-export-added]** `packages/api/remote-access` — 新增导出: principal
- **[ast-export-added]** `packages/api/remote-access` — 新增导出: follower
- **[ast-export-added]** `packages/api/remote-access` — 新增导出: grants
- **[ast-export-added]** `packages/api/remote-access` — 新增导出: sameResource
- **[ast-export-added]** `packages/api/remote-access` — 新增导出: sameActions
- **[ast-export-added]** `packages/api/remote-access` — 新增导出: abortion
- **[ast-export-added]** `packages/api/session-controller` — 新增导出: addressedSession
- **[ast-export-added]** `packages/api/session-controller` — 新增导出: clientTimeZone
- **[ast-export-added]** `packages/api/terminal-controller` — 新增导出: workingDirectory
- **[ast-export-added]** `packages/boot/app-boot` — 新增导出: ProfileRecompositionOptions
- **[ast-export-added]** `packages/boot/app-boot` — 新增导出: ProfileRecomposition
- **[ast-export-added]** `packages/boot/app-boot` — 新增导出: recomposeProfile
- **[ast-export-added]** `packages/boot/app-boot` — 新增导出: recompose
- **[ast-export-added]** `packages/boot/app-boot` — 新增导出: applying
- **[ast-export-added]** `packages/boot/app-boot` — 新增导出: successor
- **[ast-export-added]** `packages/boot/app-boot` — 新增导出: topmost
- **[ast-export-added]** `packages/boot/app-boot` — 新增导出: fibers
- **[ast-export-added]** `packages/boot/app-boot` — 新增导出: retried
- **[ast-export-added]** `packages/boot/app-boot` — 新增导出: ran
- **[ast-export-added]** `packages/boot/app-boot` — 新增导出: RecordedFailure
- **[ast-export-added]** `packages/boot/app-boot` — 新增导出: sameFailure
- **[ast-export-added]** `packages/boot/app-boot` — 新增导出: StoppedRow
- **[ast-export-added]** `packages/boot/app-boot` — 新增导出: rowIds
- **[ast-export-added]** `packages/boot/app-boot` — 新增导出: importFailed
- **[ast-export-added]** `packages/boot/app-boot` — 新增导出: enabledEntry
- **[ast-export-added]** `packages/boot/app-boot` — 新增导出: importFailure
- **[ast-export-added]** `packages/boot/app-boot` — 新增导出: reloadDiagnostic
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
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: importers
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: managed
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: affected
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: affectedFibers
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: urls
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: comparison
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: comparedAt
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: compared
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: unavailable
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: restartReason
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: ProfileComparison
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: ReplacementPlan
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: ProfileReconciliation
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: PendingModule
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: MODULE_ERRORED
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: namespaceOf
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: linkedJobs
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: commonJsCache
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: moduleJobs
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: mappedDirectories
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: dirs
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: realSpellings
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: profileRoots
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: real
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: packageManifests
- **[ast-export-added]** `packages/boot/hmr` — 新增导出: contains
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: bundleSelection
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: specPackageName
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: specs
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: runtimeVersion
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: shipped
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: official
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: targetError
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: catalogMeta
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: sourceOf
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: restart
- **[ast-export-added]** `packages/bundle/headless` — 新增导出: stopErrors
- **[ast-export-added]** `packages/bundle/headless` — 新增导出: stopTerminals
- **[ast-export-added]** `packages/bundle/headless` — 新增导出: idleSeq
- **[ast-export-added]** `packages/bundle/web-app` — 新增导出: WebApp
- **[ast-export-added]** `packages/bundle/web-app` — 新增导出: publicUrl
- **[ast-export-added]** `packages/bundle/web-app` — 新增导出: boundHost
- **[ast-export-added]** `packages/bundle/web-app` — 新增导出: appRootUrl
- **[ast-export-added]** `packages/context/agent-instructions` — 新增导出: includedDigestsByGroup
- **[ast-export-added]** `packages/context/harness-dev-context` — 新增导出: HARNESS_SOURCE
- **[ast-export-added]** `packages/context/harness-dev-context` — 新增导出: WEB_SURFACE
- **[ast-export-added]** `packages/context/harness-dev-context` — 新增导出: HARNESS_SOURCE_GUIDANCE
- **[ast-export-added]** `packages/context/harness-dev-context` — 新增导出: HARNESS_SOURCE_PROMPT
- **[ast-export-added]** `packages/context/harness-dev-context` — 新增导出: WEB_SURFACE_GUIDANCE
- **[ast-export-added]** `packages/context/harness-dev-context` — 新增导出: WEB_SURFACE_PROMPT
- **[ast-export-added]** `packages/context/harness-dev-context` — 新增导出: LEGACY_SOURCE
- **[ast-export-added]** `packages/context/harness-dev-context` — 新增导出: LEGACY_WEB_SURFACE
- **[ast-export-added]** `packages/context/harness-dev-context` — 新增导出: LEGACY_PROMPT
- **[ast-export-added]** `packages/context/harness-dev-context` — 新增导出: legacyPromptSchema
- **[ast-export-added]** `packages/context/harness-dev-context` — 新增导出: LegacyPrompt
- **[ast-export-added]** `packages/context/harness-dev-context` — 新增导出: legacyParagraph
- **[ast-export-added]** `packages/context/harness-dev-context` — 新增导出: foldLegacyPrompt
- **[ast-export-added]** `packages/context/harness-dev-context` — 新增导出: web
- **[ast-export-added]** `packages/context/harness-dev-context` — 新增导出: ADMITS_NOTHING
- **[ast-export-added]** `packages/context/harness-dev-context` — 新增导出: admitted
- **[ast-export-added]** `packages/context/session-reference` — 新增导出: LABEL_KEYS
- **[ast-export-added]** `packages/context/session-reference` — 新增导出: cachedSnapshot
- **[ast-export-added]** `packages/core/agent-loop` — 新增导出: throwCollectedFailures
- **[ast-export-added]** `packages/core/agent-loop` — 新增导出: ownership
- **[ast-export-added]** `packages/core/agent-loop` — 新增导出: unregisterTurnBoundary
- **[ast-export-added]** `packages/core/agent-loop` — 新增导出: unregisterInbox
- **[ast-export-added]** `packages/core/agent-loop` — 新增导出: teardown
- **[ast-export-added]** `packages/core/agent-loop` — 新增导出: unfollowScope
- **[ast-export-added]** `packages/core/session` — 新增导出: PLUGIN_RECORD_TYPE
- **[ast-export-added]** `packages/core/session` — 新增导出: isPluginRecordType
- **[ast-export-added]** `packages/core/session` — 新增导出: assertPluginRecordEvent
- **[ast-export-added]** `packages/core/session` — 新增导出: commitPluginRecord
- **[ast-export-added]** `packages/core/session` — 新增导出: appendPluginRecord
- **[ast-export-added]** `packages/core/session` — 新增导出: pluginRecordOf
- **[ast-export-added]** `packages/core/system-prompt` — 新增导出: resolveContext
- **[ast-export-added]** `packages/core/system-prompt` — 新增导出: suppressed
- **[ast-export-added]** `packages/core/system-prompt` — 新增导出: contexts
- **[ast-export-added]** `packages/core/system-prompt` — 新增导出: requiredContexts
- **[ast-export-added]** `packages/credentials/credentials-local` — 新增导出: reportWatcherError
- **[ast-export-added]** `packages/credentials/deepseek-account-platform` — 新增导出: wakeUp
- **[ast-export-added]** `packages/deliverables/workspace-changes` — 新增导出: mutations
- **[ast-export-added]** `packages/deliverables/workspace-changes` — 新增导出: capture
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
- **[ast-export-added]** `packages/experimental/client-ui-cot-translation` — 新增导出: CotTranslationController
- **[ast-export-added]** `packages/experimental/client-ui-cot-translation` — 新增导出: availableProviders
- **[ast-export-added]** `packages/experimental/client-ui-cot-translation` — 新增导出: _listener
- **[ast-export-added]** `packages/experimental/client-ui-cot-translation` — 新增导出: targetLanguage
- **[ast-export-added]** `packages/experimental/cua-macos` — 新增导出: architecture
- **[ast-export-added]** `packages/experimental/cua-macos` — 新增导出: helperPath
- **[ast-export-added]** `packages/experimental/cua` — 新增导出: CuaConfig
- **[ast-export-added]** `packages/experimental/cua` — 新增导出: executionAgent
- **[ast-export-added]** `packages/experimental/cua` — 新增导出: CuaExecution
- **[ast-export-added]** `packages/experimental/cua` — 新增导出: ScreenshotValue
- **[ast-export-added]** `packages/experimental/cua` — 新增导出: screenshotStore
- **[ast-export-added]** `packages/experimental/cua` — 新增导出: CuaBackend
- **[ast-export-added]** `packages/experimental/cua` — 新增导出: installCua
- **[ast-export-added]** `packages/experimental/cua` — 新增导出: closedOwners
- **[ast-export-added]** `packages/experimental/cua` — 新增导出: ownerFor
- **[ast-export-added]** `packages/experimental/cua` — 新增导出: permissions
- **[ast-export-added]** `packages/experimental/cua` — 新增导出: owners
- **[ast-export-added]** `packages/experimental/cua` — 新增导出: callNative
- **[ast-export-added]** `packages/experimental/cua` — 新增导出: nativeParams
- **[ast-export-added]** `packages/experimental/cua` — 新增导出: requestNative
- **[ast-export-added]** `packages/experimental/cua` — 新增导出: screenshot
- **[ast-export-added]** `packages/experimental/cua` — 新增导出: nativeClient
- **[ast-export-added]** `packages/experimental/ptc-runtime-python` — 新增导出: runnerStderr
- **[ast-export-added]** `packages/experimental/ptc-runtime-python` — 新增导出: bootstrapWriteFailed
- **[ast-export-added]** `packages/experimental/ptc-runtime-python` — 新增导出: failBootstrapWrite
- **[ast-export-added]** `packages/session/session-title-first-prompt-llm` — 新增导出: assertTarget
- **[ast-export-added]** `packages/experimental/session-title-all-prompts-llm` — 新增导出: selectReasoningEffort
- **[ast-export-added]** `packages/experimental/session-title-all-prompts-llm` — 新增导出: EMPHASIS_WRAPPER
- **[ast-export-added]** `packages/session/session-title-first-prompt-llm` — 新增导出: titleFromOutput
- **[ast-export-added]** `packages/session/session-title-first-prompt-llm` — 新增导出: titleFromResponse
- **[ast-export-added]** `packages/experimental/tool-agent-team` — 新增导出: teamPolicy
- **[ast-export-added]** `packages/experimental/translator` — 新增导出: Translator
- **[ast-export-added]** `packages/experimental/translator` — 新增导出: inSession
- **[ast-export-added]** `packages/experimental/translator` — 新增导出: requestSeq
- **[ast-export-added]** `packages/experimental/worktree` — 新增导出: WorktreeSpec
- **[ast-export-added]** `packages/experimental/worktree` — 新增导出: WorktreeService
- **[ast-export-added]** `packages/experimental/worktree` — 新增导出: rootOutput
- **[ast-export-added]** `packages/experimental/worktree` — 新增导出: rootTarget
- **[ast-export-added]** `packages/experimental/worktree` — 新增导出: repositoryRoot
- **[ast-export-added]** `packages/experimental/worktree` — 新增导出: baseCommit
- **[ast-export-added]** `packages/experimental/worktree` — 新增导出: pool
- **[ast-export-added]** `packages/experimental/worktree` — 新增导出: poolPath
- **[ast-export-added]** `packages/experimental/worktree` — 新增导出: drivers
- **[ast-export-added]** `packages/extensions/cordis-host-runner` — 新增导出: brandCordisDynamicPluginId
- **[ast-export-added]** `packages/extensions/cordis-host-runner` — 新增导出: brandCordisDynamicPackageId
- **[ast-export-added]** `packages/extensions/cordis-host-runner` — 新增导出: brandCordisDynamicPluginRunId
- **[ast-export-added]** `packages/extensions/cordis-host-runner` — 新增导出: brandApprovalRequestId
- **[ast-export-added]** `packages/goal/goal-round-driver` — 新增导出: unloading
- **[ast-export-added]** `packages/goal/goal-round-driver` — 新增导出: drivable
- **[ast-export-added]** `packages/host/webserver` — 新增导出: TlsConfig
- **[ast-export-added]** `packages/host/webserver` — 新增导出: IPV4_TAIL
- **[ast-export-added]** `packages/host/webserver` — 新增导出: withHexTail
- **[ast-export-added]** `packages/host/webserver` — 新增导出: parseIpLiteral
- **[ast-export-added]** `packages/host/webserver` — 新增导出: notLiteralError
- **[ast-export-added]** `packages/host/webserver` — 新增导出: isWildcardAddress
- **[ast-export-added]** `packages/host/webserver` — 新增导出: isWildcardHost
- **[ast-export-added]** `packages/host/webserver` — 新增导出: isLoopbackHost
- **[ast-export-added]** `packages/host/webserver` — 新增导出: normalizeBindAddress
- **[ast-export-added]** `packages/host/webserver` — 新增导出: bindUrlHost
- **[ast-export-added]** `packages/host/webserver` — 新增导出: readTlsFile
- **[ast-export-added]** `packages/host/webserver` — 新增导出: tls
- **[ast-export-added]** `packages/host/webserver` — 新增导出: certFile
- **[ast-export-added]** `packages/host/webserver` — 新增导出: keyFile
- **[ast-export-added]** `packages/host/webserver` — 新增导出: socketsClosed
- **[ast-export-added]** `packages/interaction/user-questions` — 新增导出: TimedUserQuestionResult
- **[ast-export-added]** `packages/interaction/user-questions` — 新增导出: QueuedReply
- **[ast-export-added]** `packages/interaction/user-questions` — 新增导出: question
- **[ast-export-added]** `packages/interaction/user-questions` — 新增导出: answered
- **[ast-export-added]** `packages/interaction/user-questions` — 新增导出: wait
- **[ast-export-added]** `packages/jobs/jobs-local` — 新增导出: toolCall
- **[ast-export-added]** `packages/llm/llm-deepseek-account` — 新增导出: TOKEN_HEADER
- **[ast-export-added]** `packages/llm/llm-deepseek-account` — 新增导出: LOG_TAG
- **[ast-export-added]** `packages/llm/llm-deepseek-account` — 新增导出: AccountConnection
- **[ast-export-added]** `packages/llm/llm-deepseek-account` — 新增导出: loggedListing
- **[ast-export-added]** `packages/llm/llm-deepseek-account` — 新增导出: reportedError
- **[ast-export-added]** `packages/llm/llm` — 新增导出: proposed
- **[ast-export-added]** `packages/llm/llm` — 新增导出: detachDirectoryEntry
- **[ast-export-added]** `packages/ptc-runtime/ptc-runtime-node` — 新增导出: replyBinding
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: CREATE_TITLE_DESCRIPTION
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: subagentCallerRefusal
- **[ast-export-added]** `packages/session/session-log-deepseek` — 新增导出: blockedWarnings
- **[ast-export-added]** `packages/session/session-persistence-jsonl` — 新增导出: DEFAULT_LIST_CONCURRENCY
- **[ast-export-added]** `packages/session/session-persistence-jsonl` — 新增导出: GenerationHeader
- **[ast-export-added]** `packages/session/session-persistence-jsonl` — 新增导出: settleLimited
- **[ast-export-added]** `packages/session/session-persistence-jsonl` — 新增导出: settledValues
- **[ast-export-added]** `packages/session/session-persistence-jsonl` — 新增导出: statted
- **[ast-export-added]** `packages/session/session-persistence-jsonl` — 新增导出: projectDirs
- **[ast-export-added]** `packages/session/session-persistence-jsonl` — 新增导出: projects
- **[ast-export-added]** `packages/session/session-persistence-jsonl` — 新增导出: projectFailure
- **[ast-export-added]** `packages/session/session-persistence-jsonl` — 新增导出: tracker
- **[ast-export-added]** `packages/session/session-title-llm` — 新增导出: SessionTitleLlmPreparedRequest
- **[ast-export-added]** `packages/session/session-title-llm` — 新增导出: SessionTitleLlmFinish
- **[ast-export-added]** `packages/session/session-title-llm` — 新增导出: SessionTitleLlmResponse
- **[ast-export-added]** `packages/session/session-title-llm` — 新增导出: terminalFinish
- **[ast-export-added]** `packages/session/session-title-llm` — 新增导出: executeSessionTitleLlm
- **[ast-export-added]** `packages/session/session-title-llm` — 新增导出: effort
- **[ast-export-added]** `packages/session/session-title` — 新增导出: currentTitle
- **[ast-export-added]** `packages/session/working-directory` — 新增导出: WorkingDirectoryService
- **[ast-export-added]** `packages/session/working-directory` — 新增导出: directorySchema
- **[ast-export-added]** `packages/session/working-directory` — 新增导出: contribution
- ★ **[ast-export-added]** `packages/skill/tool-workspace-dependencies` — 新增导出: primaryRuntimePythonAliases
- ★ **[ast-export-added]** `packages/skill/tool-workspace-dependencies` — 新增导出: interpreter
- ★ **[ast-export-added]** `packages/skill/tool-workspace-dependencies` — 新增导出: copyPrimaryRuntime
- **[ast-export-added]** `packages/ssh/ssh-helper-runtime` — 新增导出: runSshHelperRuntime
- **[ast-export-added]** `packages/ssh/ssh-helper-runtime` — 新增导出: nativeManifest
- **[ast-export-added]** `packages/ssh/ssh-helper-runtime` — 新增导出: platformPackage
- **[ast-export-added]** `packages/ssh/ssh` — 新增导出: HelperLaunch
- **[ast-export-added]** `packages/ssh/ssh` — 新增导出: bootstrapHash
- **[ast-export-added]** `packages/subagent/tool-subagent` — 新增导出: delegationTools
- **[ast-export-added]** `packages/test-support/llm-mock-server` — 新增导出: MessageSseEvent
- **[ast-export-added]** `packages/typert/loader` — 新增导出: requireOptionalString
- **[ast-export-added]** `packages/typert/loader` — 新增导出: requireSchemaProjection
- **[ast-export-added]** `packages/typert/protocol` — 新增导出: RemoteScopeOptions
- **[ast-export-added]** `packages/typert/protocol` — 新增导出: RemoteTypedMethodDecorator
- **[ast-export-added]** `packages/typert/protocol` — 新增导出: RemoteMarkerOptions
- **[ast-export-added]** `packages/typert/protocol` — 新增导出: REMOTE_OPTION_KEYS
- **[ast-export-added]** `packages/typert/protocol` — 新增导出: REMOTE_SCOPE_OPTION_KEYS
- **[ast-export-added]** `packages/typert/protocol` — 新增导出: markerOptions
- **[ast-export-added]** `packages/typert/protocol` — 新增导出: resourceReaders
- **[ast-export-added]** `packages/typert/protocol` — 新增导出: readers
- **[ast-export-added]** `packages/util/home-paths` — 新增导出: AGENTS_HOME_DIR_NAME
- **[ast-export-added]** `packages/util/home-paths` — 新增导出: DEFAULT_AGENTS_HOME_DISPLAY
- **[ast-export-added]** `packages/util/home-paths` — 新增导出: AGENTS_HOME_ENV
- **[ast-export-added]** `packages/util/home-paths` — 新增导出: defaultAgentsHome
- **[ast-export-added]** `packages/util/home-paths` — 新增导出: rootDisplay
- **[ast-export-added]** `packages/util/home-paths` — 新增导出: resolveAgentsHome
- **[ast-export-added]** `packages/util/home-paths` — 新增导出: agentsHomeDisplay
- **[ast-export-added]** `packages/util/timeout` — 新增导出: expired
- **[ast-export-added]** `packages/api/remote-access/src/types.ts` — 新增导出: RemoteAccessEndpoint
- **[ast-export-added]** `packages/api/remote-access/src/types.ts` — 新增导出: RemoteAccessAction
- **[ast-export-added]** `packages/api/remote-access/src/types.ts` — 新增导出: RemoteAccessRole
- **[ast-export-added]** `packages/api/remote-access/src/types.ts` — 新增导出: RemoteAccessDecision
- **[ast-export-added]** `packages/api/remote-access/src/types.ts` — 新增导出: RemoteAccessCondition
- **[ast-export-added]** `packages/api/remote-access/src/types.ts` — 新增导出: RemoteAccessBinding
- **[ast-export-added]** `packages/api/remote-access/src/types.ts` — 新增导出: RemoteAccessRequest
- **[ast-export-added]** `packages/api/remote-access/src/types.ts` — 新增导出: RemoteAccessPolicy
- **[ast-export-added]** `packages/api/remote-access/src/types.ts` — 新增导出: RemoteAccessDeniedDetails
- **[ast-export-added]** `packages/api/remote-access/src/types.ts` — 新增导出: RemoteAccessGrant
- **[ast-export-added]** `packages/api/remote-access/src/types.ts` — 新增导出: RemoteAccessFrame
- **[ast-export-added]** `packages/api/remote-access/src/snapshot.ts` — 新增导出: REMOTE_ACCESS_SNAPSHOT_KEY
- **[ast-export-added]** `packages/api/session-controller/src/agent.ts` — 新增导出: ApiSessionStartedSinceObserved
- **[ast-export-added]** `packages/api/session-controller/src/agent.ts` — 新增导出: ApiSessionCreateRequest
- **[ast-export-added]** `packages/api/session-controller/src/agent.ts` — 新增导出: ApiSessionCreated
- **[ast-export-added]** `packages/api/session-controller/src/agent.ts` — 新增导出: ApiSessionComposition
- **[ast-export-added]** `packages/api/terminal-controller/src/types.ts` — 新增导出: TerminalInput
- **[ast-export-added]** `packages/boot/app-boot/src/profile-context.ts` — 新增导出: readBundlePatches
- **[ast-export-added]** `packages/boot/app-boot/src/package-meta.ts` — 新增导出: assertPackageOwned
- **[ast-export-added]** `packages/boot/app-boot/src/official-bundles.ts` — 新增导出: OfficialBundleCatalogEntry
- **[ast-export-added]** `packages/boot/app-boot/src/profile.ts` — 新增导出: RETIRED_BUNDLES
- **[ast-export-added]** `packages/boot/app-boot/src/profile.ts` — 新增导出: ResolutionSource
- **[ast-export-added]** `packages/boot/app-boot/src/profile.ts` — 新增导出: ProfileRuntimeResolution
- **[ast-export-added]** `packages/boot/app-boot/src/profile.ts` — 新增导出: withBundles
- **[ast-export-added]** `packages/boot/app-boot/src/profile.ts` — 新增导出: dropRetiredBundles
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: WORKER_RESOLUTION_KEY
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: EMPTY_ATTRIBUTES
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: CommonJsParent
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: CommonJsOptions
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: CommonJsModule
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: InternalModules
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: EsmResolve
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: ResolutionRoute
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: ResolutionRouteState
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: CommonJsLookup
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: LayerPositions
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: InterceptionLayer
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: ParentRoutes
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: ResolutionRoutes
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: CompiledEntry
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: CompiledResolution
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: ResolutionRestartRequired
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: RuntimeInterception
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: prefixes
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: compileResolution
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: computeProfileLayer
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: profileParent
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: findInterceptionLayer
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: treeRoot
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: activeProfile
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: readPeerNames
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: startsWithin
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: profileChild
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: nativePackageDir
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: localPackageCandidate
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: selfReferenceName
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: packageImportsTarget
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: packageSearchPaths
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: localCandidateOwnsResolution
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: isUnselectedPackageMiss
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: sameResolution
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: MovedDirectories
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: ResolutionRouter
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: moves
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: parentRoutes
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: localSearchPaths
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: ancestorSet
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: searchPaths
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: internalModules
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: addon
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: esmModule
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: cjsModule
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: cjsHelpers
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: esmUtils
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: esmResolve
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: esm
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: modern
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: replaceErrorMessage
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: throwWithImporter
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: routedPath
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: parentPath
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: throwWithoutCjsAnchor
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: requireStack
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: originalMessage
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: originalBlock
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: installRuntimeInterception
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: router
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: delegatedEsm
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: adaptEsm
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: adapted
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: delegated
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: restoreImporter
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: routedParent
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: relocate
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: restoreEsm
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: resolveRequest
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: originalSync
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: resolveRequestSync
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: wrappedSync
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: originalFilename
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: delegatedCjs
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: resolveRoutedCjs
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: synthetic
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: resolveNativeCjs
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: resolvePackageImportCjs
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: resolveFrom
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: wrappedFilename
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: parentFilename
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: routedOptions
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: relocatedFilename
- **[ast-export-added]** `packages/boot/app-boot/src/profile-resolution/resolver.ts` — 新增导出: registerWorkerResolution
- **[ast-export-added]** `packages/boot/plugin-manager/src/types.ts` — 新增导出: RestartReason
- **[ast-export-added]** `packages/boot/plugin-manager/src/install-spec.ts` — 新增导出: NON_REGISTRY_VALUE
- **[ast-export-added]** `packages/boot/plugin-manager/src/install-spec.ts` — 新增导出: HTTP_USER_INFO
- **[ast-export-added]** `packages/boot/plugin-manager/src/install-spec.ts` — 新增导出: dependencySpec
- **[ast-export-added]** `packages/client/connection/src/rpc.ts` — 新增导出: ConnectionAdmission
- **[ast-export-added]** `packages/client/connection/src/peer.ts` — 新增导出: PeerOptions
- **[ast-export-added]** `packages/client/connection/src/peer.ts` — 新增导出: Peer
- **[ast-export-added]** `packages/client/connection/src/connect-protocol.ts` — 新增导出: ConnectionInteractions
- **[ast-export-added]** `packages/client/connection/src/connect-protocol.ts` — 新增导出: CONNECT_PATH
- **[ast-export-added]** `packages/client/connection/src/rpc-host.ts` — 新增导出: PeerRecord
- **[ast-export-added]** `packages/client/connection/src/rpc-host.ts` — 新增导出: secure
- **[ast-export-added]** `packages/client/connection/src/rpc-host.ts` — 新增导出: peer
- **[ast-export-added]** `packages/client/ui-chat/src/chat-settings.ts` — 新增导出: COLLAPSE_TIMING_FIELD
- **[ast-export-added]** `packages/client/ui-chat/src/chat-settings.ts` — 新增导出: COLLAPSE_TIMINGS
- **[ast-export-added]** `packages/client/ui-chat/src/chat-settings.ts` — 新增导出: CollapseTiming
- **[ast-export-added]** `packages/client/ui-chat/src/chat-settings.ts` — 新增导出: DEFAULT_COLLAPSE_TIMING
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
- **[ast-export-added]** `packages/client/ui-primitives/src/HoverCard.tsx` — 新增导出: parentGroup
- **[ast-export-added]** `packages/client/ui-primitives/src/HoverCard.tsx` — 新增导出: dismissImmediately
- **[ast-export-added]** `packages/client/ui-primitives/src/HoverCard.tsx` — 新增导出: groupVisible
- **[ast-export-added]** `packages/client/ui-primitives/src/HoverCardGroup.tsx` — 新增导出: GroupState
- **[ast-export-added]** `packages/client/ui-primitives/src/HoverCardGroup.tsx` — 新增导出: HoverCardGroupContext
- **[ast-export-added]** `packages/client/ui-primitives/src/HoverCardGroup.tsx` — 新增导出: HoverCardGroup
- **[ast-export-added]** `packages/client/ui-primitives/src/HoverCardGroup.tsx` — 新增导出: warm
- **[ast-export-added]** `packages/client/ui-primitives/src/HoverCardGroup.tsx` — 新增导出: overCard
- **[ast-export-added]** `packages/client/ui-primitives/src/HoverCardGroup.tsx` — 新增导出: fromGroup
- **[ast-export-added]** `packages/client/ui-primitives/src/HoverCardGroup.tsx` — 新增导出: intoGroup
- **[ast-export-added]** `packages/client/ui-primitives/src/PermissionIcon.tsx` — 新增导出: AutoReviewArtwork
- **[ast-export-added]** `packages/client/ui-primitives/src/PermissionIcon.tsx` — 新增导出: PermissionIconAutoReviewRegular
- **[ast-export-added]** `packages/client/ui-primitives/src/PermissionIcon.tsx` — 新增导出: PermissionIconAutoReviewMedium
- **[ast-export-added]** `packages/client/ui-primitives/src/user-text.tsx` — 新增导出: UserTextRunProps
- **[ast-export-added]** `packages/client/ui-primitives/src/user-text.tsx` — 新增导出: UserTextRun
- **[ast-export-added]** `packages/client/ui-primitives/src/user-text.tsx` — 新增导出: ReferenceChipProps
- **[ast-export-added]** `packages/client/ui-primitives/src/user-text.tsx` — 新增导出: ReferenceChip
- **[ast-export-added]** `packages/client/ui-primitives/src/TerminalBlock.tsx` — 新增导出: showState
- **[ast-export-added]** `packages/client/ui-primitives/src/CommandText.tsx` — 新增导出: CommandTextProps
- **[ast-export-added]** `packages/client/ui-primitives/src/CommandText.tsx` — 新增导出: CommandText
- **[ast-export-added]** `packages/client/ui-primitives/src/CommandText.tsx` — 新增导出: fonts
- **[ast-export-added]** `packages/client/ui-theme/src/theme-settings.ts` — 新增导出: FONT_ROLES
- **[ast-export-added]** `packages/client/ui-theme/src/theme-settings.ts` — 新增导出: FontRole
- **[ast-export-added]** `packages/client/ui-theme/src/theme-settings.ts` — 新增导出: FontSizeSpec
- **[ast-export-added]** `packages/client/ui-theme/src/theme-settings.ts` — 新增导出: FONT_SIZE_SPECS
- **[ast-export-added]** `packages/client/ui-theme/src/theme-settings.ts` — 新增导出: FontSizes
- **[ast-export-added]** `packages/client/ui-theme/src/theme-settings.ts` — 新增导出: DEFAULT_FONT_SIZES
- **[ast-export-added]** `packages/client/ui-theme/src/theme-settings.ts` — 新增导出: FONT_FAMILY_FIELDS
- **[ast-export-added]** `packages/client/ui-theme/src/theme-settings.ts` — 新增导出: fontFamilyVariable
- **[ast-export-added]** `packages/client/ui-theme/src/theme-settings.ts` — 新增导出: FontFamilies
- **[ast-export-added]** `packages/client/ui-theme/src/theme-settings.ts` — 新增导出: fontSizeSchema
- **[ast-export-added]** `packages/client/ui-theme/src/theme-settings.ts` — 新增导出: sectionFontSizes
- **[ast-export-added]** `packages/client/ui-theme/src/theme-settings.ts` — 新增导出: isFontSize
- **[ast-export-added]** `packages/client/ui-theme/src/theme-settings.ts` — 新增导出: GENERIC_FAMILIES
- **[ast-export-added]** `packages/client/ui-theme/src/theme-settings.ts` — 新增导出: normalizeFontFamily
- **[ast-export-added]** `packages/context/agent-instructions/src/files.ts` — 新增导出: UserGlobalRoot
- **[ast-export-added]** `packages/context/agent-instructions/src/files.ts` — 新增导出: userGlobalRoots
- **[ast-export-added]** `packages/context/agent-instructions/src/files.ts` — 新增导出: dedupInstructionFilesByCandidateGroup
- **[ast-export-added]** `packages/context/agent-instructions/src/files.ts` — 新增导出: keptDigestsByGroup
- **[ast-export-added]** `packages/context/agent-instructions/src/files.ts` — 新增导出: keptPaths
- **[ast-export-added]** `packages/context/agent-instructions/src/files.ts` — 新增导出: scopeInstructionFile
- **[ast-export-added]** `packages/context/agent-instructions/src/files.ts` — 新增导出: globalRoot
- **[ast-export-added]** `packages/context/agent-instructions/src/render.ts` — 新增导出: AGENTS_GLOBAL_DIRECTORY
- **[ast-export-added]** `packages/context/agent-instructions/src/render.ts` — 新增导出: USER_GLOBAL_DIRECTORIES
- **[ast-export-added]** `packages/context/agent-instructions/src/render.ts` — 新增导出: isUserGlobalDirectory
- **[ast-export-added]** `packages/context/agent-instructions/src/render.ts` — 新增导出: instructionCandidateGroup
- **[ast-export-added]** `packages/context/agent-instructions/src/render.ts` — 新增导出: RESERVED_SCOPE_DIRECTORIES
- **[ast-export-added]** `packages/context/agent-instructions/src/render.ts` — 新增导出: escapeProjectDisplayPath
- **[ast-export-added]** `packages/context/agent-instructions/src/render.ts` — 新增导出: separatorIndex
- **[ast-export-added]** `packages/context/agent-instructions/src/render.ts` — 新增导出: ADDITIONAL_INSTRUCTIONS_GUIDANCE
- **[ast-export-added]** `packages/context/agent-instructions/src/render.ts` — 新增导出: applicability
- **[ast-export-added]** `packages/core/session/src/types.ts` — 新增导出: PluginRecordType
- **[ast-export-added]** `packages/core/session/src/types.ts` — 新增导出: PluginRecordMap
- **[ast-export-added]** `packages/core/session/src/types.ts` — 新增导出: PluginRecord
- **[ast-export-added]** `packages/core/session/src/types.ts` — 新增导出: TypertResourceMap
- **[ast-export-added]** `packages/core/tools/src/ptc.ts` — 新增导出: runCodeFlavor
- **[ast-export-added]** `packages/core/tools/src/ptc.ts` — 新增导出: stateOwners
- **[ast-export-added]** `packages/core/tools/src/ptc.ts` — 新增导出: runtimes
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
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: currentDirectory
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: storeWrites
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: serializeStore
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: questions
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: choices
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: inputSchema
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: fullName
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: pressure
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: tokens
- **[ast-export-added]** `packages/experimental/claude-code-mods/src/host-ops.ts` — 新增导出: followed
- **[ast-export-added]** `packages/experimental/hook-protocol/src/matcher.ts` — 新增导出: selectHookGroups
- **[ast-export-added]** `packages/experimental/inspector/src/host/plugin.ts` — 新增导出: DEVTOOLS_PATH
- **[ast-export-added]** `packages/experimental/inspector/src/host/plugin.ts` — 新增导出: assets
- **[ast-export-added]** `packages/experimental/translator/src/types.ts` — 新增导出: AnonymousTranslationProvider
- **[ast-export-added]** `packages/experimental/translator/src/types.ts` — 新增导出: PaidTranslationProvider
- **[ast-export-added]** `packages/experimental/translator/src/types.ts` — 新增导出: TranslationProvider
- **[ast-export-added]** `packages/experimental/translator/src/types.ts` — 新增导出: TranslationRequest
- **[ast-export-added]** `packages/experimental/translator/src/types.ts` — 新增导出: TranslationSpecFields
- **[ast-export-added]** `packages/experimental/translator/src/types.ts` — 新增导出: AnonymousTranslationSpec
- **[ast-export-added]** `packages/experimental/translator/src/types.ts` — 新增导出: PaidTranslationSpec
- **[ast-export-added]** `packages/experimental/translator/src/types.ts` — 新增导出: TranslationSpec
- **[ast-export-added]** `packages/experimental/translator/src/types.ts` — 新增导出: TranslationIdentity
- **[ast-export-added]** `packages/experimental/translator/src/types.ts` — 新增导出: TranslationRequestRecord
- **[ast-export-added]** `packages/experimental/translator/src/types.ts` — 新增导出: TranslationResultRecord
- **[ast-export-added]** `packages/experimental/translator/src/types.ts` — 新增导出: TranslationErrorCode
- **[ast-export-added]** `packages/experimental/translator/src/error.ts` — 新增导出: TranslationError
- **[ast-export-added]** `packages/experimental/worktree/src/types.ts` — 新增导出: CreateWorktreeRequest
- **[ast-export-added]** `packages/experimental/worktree/src/types.ts` — 新增导出: CreatedWorktree
- **[ast-export-added]** `packages/extensions/cordis-host-runner/src/inspect-registry.ts` — 新增导出: gateway
- **[ast-export-added]** `packages/host/directory-picker-native/src/native-picker.ts` — 新增导出: DIALOG_TITLE
- **[ast-export-added]** `packages/host/directory-picker-native/src/native-picker.ts` — 新增导出: MAC_PANEL
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
- **[ast-export-added]** `packages/jobs/jobs/src/types.ts` — 新增导出: JobToolCall
- **[ast-export-added]** `packages/jobs/jobs/src/types.ts` — 新增导出: JobRegisteredData
- **[ast-export-added]** `packages/jobs/jobs/src/types.ts` — 新增导出: JobSettledData
- **[ast-export-added]** `packages/llm/llm-deepseek-account/src/config.ts` — 新增导出: DEFAULT_MODELS_TIMEOUT_MS
- **[ast-export-added]** `packages/llm/llm-deepseek-account/src/config.ts` — 新增导出: DEFAULT_MODELS_MAX_AGE_MS
- **[ast-export-added]** `packages/llm/llm-deepseek-account/src/config.ts` — 新增导出: ModelOverride
- **[ast-export-added]** `packages/llm/llm-deepseek-account/src/config.ts` — 新增导出: AccountOptions
- **[ast-export-added]** `packages/llm/llm-deepseek-account/src/config.ts` — 新增导出: CatalogSettings
- **[ast-export-added]** `packages/llm/llm-deepseek-account/src/config.ts` — 新增导出: ResolvedAccountOptions
- **[ast-export-added]** `packages/llm/llm-deepseek-account/src/config.ts` — 新增导出: plainAccountOptions
- **[ast-export-added]** `packages/llm/llm-deepseek-account/src/config.ts` — 新增导出: listingEndpoint
- **[ast-export-added]** `packages/llm/llm-deepseek-account/src/config.ts` — 新增导出: resolveOverride
- **[ast-export-added]** `packages/llm/llm-deepseek-account/src/config.ts` — 新增导出: resolveAccountOptions
- **[ast-export-added]** `packages/llm/llm-deepseek/src/config.ts` — 新增导出: catalogModelFields
- **[ast-export-added]** `packages/llm/llm-deepseek/src/host.ts` — 新增导出: degradedReplays
- **[ast-export-added]** `packages/llm/llm-deepseek/src/host.ts` — 新增导出: omittedRoutes
- **[ast-export-added]** `packages/llm/llm-deepseek/src/host.ts` — 新增导出: unacceptedRoutes
- **[ast-export-added]** `packages/llm/llm-pi-ai/src/adapter.ts` — 新增导出: ANTHROPIC_TOOL_UPDATE_PLACEHOLDER
- **[ast-export-added]** `packages/llm/llm-pi-ai/src/adapter.ts` — 新增导出: needsPlaceholder
- **[ast-export-added]** `packages/llm/llm/src/types.ts` — 新增导出: LlmNativeAuth
- **[ast-export-added]** `packages/llm/llm/src/call-config.ts` — 新增导出: LlmCallControls
- **[ast-export-added]** `packages/llm/llm/src/call-config.ts` — 新增导出: ConfigureCall
- **[ast-export-added]** `packages/llm/token-meter/src/breakdown-projection.ts` — 新增导出: systemNodeSchema
- **[ast-export-added]** `packages/llm/token-meter/src/breakdown-projection.ts` — 新增导出: claimSchema
- **[ast-export-added]** `packages/llm/token-meter/src/breakdown-projection.ts` — 新增导出: SystemNode
- **[ast-export-added]** `packages/llm/token-meter/src/breakdown-projection.ts` — 新增导出: BreakdownClaim
- **[ast-export-added]** `packages/llm/token-meter/src/breakdown-projection.ts` — 新增导出: SurfaceTotals
- **[ast-export-added]** `packages/llm/token-meter/src/breakdown-projection.ts` — 新增导出: placeSurfaceEvent
- **[ast-export-added]** `packages/llm/token-meter/src/breakdown-projection.ts` — 新增导出: isSystem
- **[ast-export-added]** `packages/llm/token-meter/src/breakdown-projection.ts` — 新增导出: withTotals
- **[ast-export-added]** `packages/llm/token-meter/src/breakdown-projection.ts` — 新增导出: surfaceTokens
- **[ast-export-added]** `packages/llm/token-meter/src/breakdown-projection.ts` — 新增导出: withoutClaim
- **[ast-export-added]** `packages/llm/token-meter/src/breakdown-projection.ts` — 新增导出: unclaimed
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
- **[ast-export-added]** `packages/ptc-runtime/ptc-runtime-node/src/config.ts` — 新增导出: NodeConfig
- **[ast-export-added]** `packages/ptc-runtime/ptc-runtime-node/src/launch.ts` — 新增导出: LaunchConfig
- **[ast-export-added]** `packages/ptc-runtime/ptc-runtime-node/src/launch.ts` — 新增导出: resolveLaunch
- **[ast-export-added]** `packages/ptc-runtime/ptc-runtime-node/src/launch.ts` — 新增导出: bootstrapArgs
- **[ast-export-added]** `packages/ptc-runtime/ptc-runtime-node/src/launch.ts` — 新增导出: scriptBootstrapArgs
- **[ast-export-added]** `packages/ptc-runtime/ptc-runtime-node/src/launch.ts` — 新增导出: moduleName
- **[ast-export-added]** `packages/ptc-runtime/ptc-runtime-node/src/launch.ts` — 新增导出: helper
- **[ast-export-added]** `packages/schedule/schedule/src/types.ts` — 新增导出: SubagentSessionError
- **[ast-export-added]** `packages/schedule/schedule/src/domain.ts` — 新增导出: SCHEDULED_MESSAGE_FRAMING
- ★ **[ast-export-added]** `packages/sdk/protocol/src/types.ts` — 新增导出: SessionResumeParams
- ★ **[ast-export-added]** `packages/sdk/protocol/src/types.ts` — 新增导出: SessionWaitParams
- ★ **[ast-export-added]** `packages/sdk/protocol/src/types.ts` — 新增导出: SessionWorkingDirectoryParams
- ★ **[ast-export-added]** `packages/sdk/protocol/src/types.ts` — 新增导出: SessionWorkingDirectorySetParams
- ★ **[ast-export-added]** `packages/sdk/protocol/src/types.ts` — 新增导出: SessionWorkingDirectoryResult
- **[ast-export-added]** `packages/subagent/subagent/src/catalog.ts` — 新增导出: externalCatalogSchema
- **[ast-export-added]** `packages/subagent/subagent/src/catalog.ts` — 新增导出: EXTERNAL_SUBAGENT_CATALOG_VERSION
- **[ast-export-added]** `packages/subagent/subagent/src/catalog.ts` — 新增导出: establishExternalCatalogChild
- **[ast-export-added]** `packages/subagent/subagent/src/types.ts` — 新增导出: SubagentActivationSpec
- **[ast-export-added]** `packages/subagent/subagent/src/types.ts` — 新增导出: SubagentActivation
- **[ast-export-added]** `packages/subagent/subagent/src/child-agent.ts` — 新增导出: applyChildOverrides
- **[ast-export-added]** `packages/subagent/subagent/src/control-types.ts` — 新增导出: SubagentDelivery
- **[ast-export-added]** `packages/telemetry/otel/src/session-log.ts` — 新增导出: SessionLogProcessorOptions
- **[ast-export-added]** `packages/telemetry/otel/src/transport.ts` — 新增导出: OTLP_HTTP_LOG_EXPORTER_COMPONENT_TYPE
- **[ast-export-added]** `packages/telemetry/otel/src/transport.ts` — 新增导出: LogExporterOptions
- **[ast-export-added]** `packages/telemetry/otel/src/transport.ts` — 新增导出: createLogExporter
- **[ast-export-added]** `packages/telemetry/otel/src/transport.ts` — 新增导出: createLogExporterMetrics
- **[ast-export-added]** `packages/telemetry/otel/src/transport.ts` — 新增导出: logTransportOptions
- **[ast-export-added]** `packages/test-support/agent-loop-testkit/src/working-directory-fixture.ts` — 新增导出: provideWorkingDirectoryFixture
- **[ast-export-added]** `packages/test-support/client-runtime/src/access.ts` — 新增导出: AccessStandardProps
- **[ast-export-added]** `packages/test-support/client-runtime/src/access.ts` — 新增导出: allowAllAccess
- **[ast-export-added]** `packages/test-support/client-runtime/src/access.ts` — 新增导出: allowAllRemoteAccess
- **[ast-export-added]** `packages/test-support/client-runtime/src/access.ts` — 新增导出: allowAllAccessPlugin
- **[ast-export-added]** `packages/test-support/session-snapshot/src/identity.ts` — 新增导出: SHORT_JOB_ID_RE
- **[ast-export-added]** `packages/test-support/session-snapshot/src/normalize.ts` — 新增导出: jobTokens
- **[ast-export-added]** `packages/test-support/session-snapshot/src/normalize.ts` — 新增导出: reservedTokens
- **[ast-export-added]** `packages/test-support/session-snapshot/src/normalize.ts` — 新增导出: nextJobToken
- **[ast-export-added]** `packages/test-support/session-snapshot/src/normalize.ts` — 新增导出: replaceJobs
- **[ast-export-added]** `packages/typert/generator/src/analyzer.ts` — 新增导出: AggregateConfig
- **[ast-export-added]** `packages/typert/generator/src/analyzer.ts` — 新增导出: alias
- **[ast-export-added]** `packages/typert/generator/src/analyzer.ts` — 新增导出: aliasDeclaration
- **[ast-export-added]** `packages/typert/generator/src/analyzer.ts` — 新增导出: UNLISTED_CONFIG_HOST
- **[ast-export-added]** `packages/typert/generator/src/analyzer.ts` — 新增导出: absolutePathCache
- **[ast-export-added]** `packages/typert/generator/src/analyzer.ts` — 新增导出: rejectBuildOutputLoads
- **[ast-export-added]** `packages/typert/generator/src/analyzer.ts` — 新增导出: addAlias
- **[ast-export-added]** `packages/typert/generator/src/emitter.ts` — 新增导出: toolProjection
- **[ast-export-added]** `packages/typert/generator/src/emitter.ts` — 新增导出: invocationSchemas
- **[ast-export-added]** `packages/typert/generator/src/emitter.ts` — 新增导出: ordinary
- **[ast-export-added]** `packages/typert/generator/src/emitter.ts` — 新增导出: closedRoots
- **[ast-export-added]** `packages/typert/generator/src/emitter.ts` — 新增导出: stringIndexValue
- **[ast-export-added]** `packages/typert/generator/src/emitter.ts` — 新增导出: stringIndexType
- **[ast-export-added]** `packages/typert/generator/src/emitter.ts` — 新增导出: ownProperties
- **[ast-export-added]** `packages/typert/generator/src/emitter.ts` — 新增导出: valueProperties
- **[ast-export-added]** `packages/typert/generator/src/emitter.ts` — 新增导出: indexedFields
- **[ast-export-added]** `packages/typert/generator/src/emitter.ts` — 新增导出: overlaps
- **[ast-export-added]** `packages/typert/generator/src/workspace.ts` — 新增导出: contributors
- **[ast-export-added]** `packages/typert/generator/src/workspace.ts` — 新增导出: findWorkspaceRoot
- **[ast-export-added]** `packages/typert/generator/src/workspace.ts` — 新增导出: hasTypertExport
- **[ast-export-added]** `packages/typert/generator/src/artifact-files.ts` — 新增导出: REMOTE_CLIENT_FILES
- **[ast-export-added]** `packages/typert/generator/src/artifact-files.ts` — 新增导出: writePackageArtifacts
- **[ast-export-added]** `packages/typert/generator/src/artifact-files.ts` — 新增导出: emittedRemote
- **[ast-export-added]** `packages/typert/generator/src/artifact-files.ts` — 新增导出: writeWorkspaceArtifacts
- **[ast-export-added]** `packages/typert/protocol/src/remote-info.ts` — 新增导出: Method
- **[ast-export-added]** `packages/typert/protocol/src/remote-info.ts` — 新增导出: Parameter
- **[ast-export-added]** `packages/typert/protocol/src/remote-info.ts` — 新增导出: Index
- **[ast-export-added]** `packages/typert/protocol/src/remote-info.ts` — 新增导出: createTypertRemoteInfo
- **[ast-export-added]** `packages/typert/protocol/src/remote-info.ts` — 新增导出: RemoteInfo
- **[ast-export-added]** `packages/typert/protocol/src/remote-info.ts` — 新增导出: zod
- **[ast-export-added]** `packages/typert/protocol/src/remote-info.ts` — 新增导出: isTypertRemoteMethod
- **[ast-export-added]** `packages/typert/protocol/src/remote-info.ts` — 新增导出: NamedInput
- **[ast-export-added]** `packages/typert/protocol/src/remote-info.ts` — 新增导出: ResultValue
- **[ast-export-added]** `packages/typert/protocol/src/principal.ts` — 新增导出: principalOf
- **[ast-export-added]** `packages/typert/protocol/src/remote-access.ts` — 新增导出: RemoteAccessResourceKind
- **[ast-export-added]** `packages/typert/protocol/src/remote-access.ts` — 新增导出: RemoteAccessResource
- **[ast-export-added]** `packages/typert/protocol/src/remote-access.ts` — 新增导出: RemoteAccessResourceOf
- **[ast-export-added]** `packages/typert/protocol/src/types.ts` — 新增导出: RESOURCE_ID
- **[ast-export-added]** `packages/typert/protocol/src/types.ts` — 新增导出: TypertResource
- **[ast-export-added]** `packages/typert/protocol/src/types.ts` — 新增导出: TypertResourceId
- **[ast-export-added]** `packages/typert/protocol/src/types.ts` — 新增导出: TypertResourceKind
- **[ast-export-added]** `packages/typert/protocol/src/types.ts` — 新增导出: TypertResourceReaders
- **[ast-export-added]** `packages/typert/protocol/src/types.ts` — 新增导出: TypertResourceReader
- **[ast-export-added]** `packages/typert/protocol/src/types.ts` — 新增导出: TypertLookupEntry
- **[ast-export-added]** `packages/typert/protocol/src/types.ts` — 新增导出: TypertWireForHost
- **[ast-export-added]** `packages/typert/protocol/src/types.ts` — 新增导出: RemoteWireValue
- **[ast-export-added]** `packages/typert/protocol/src/types.ts` — 新增导出: RemoteWireArgs
- **[ast-export-added]** `packages/typert/protocol/src/types.ts` — 新增导出: RemoteDecoded
- **[ast-export-added]** `packages/typert/protocol/src/types.ts` — 新增导出: PrincipalMap
- **[ast-export-added]** `packages/typert/protocol/src/types.ts` — 新增导出: Principal
- **[ast-export-added]** `packages/typert/protocol/src/types.ts` — 新增导出: RemoteUplinkWindow
- **[ast-export-added]** `packages/typert/protocol/src/types.ts` — 新增导出: TypertRemoteValue
- **[ast-export-added]** `packages/typert/protocol/src/types.ts` — 新增导出: TypertRemoteInputOptions
- **[ast-export-added]** `packages/typert/protocol/src/types.ts` — 新增导出: TypertRemoteMethod
- **[ast-export-added]** `packages/typert/protocol/src/types.ts` — 新增导出: TypertRemoteInfo
- **[ast-export-added]** `packages/typert/protocol/src/types.ts` — 新增导出: TypertRemoteCodecSpec
- **[ast-export-added]** `packages/typert/protocol/src/types.ts` — 新增导出: TypertRemoteParameterSpec
- **[ast-export-added]** `packages/typert/protocol/src/types.ts` — 新增导出: TypertRemoteMethodSpec
- **[ast-export-added]** `packages/typert/protocol/src/types.ts` — 新增导出: TypertRemoteSpec
- **[ast-export-added]** `packages/typert/protocol/src/types.ts` — 新增导出: TypertResourceKindFor
- **[ast-export-added]** `packages/typert/protocol/src/types.ts` — 新增导出: TypertResourceDeclaration
- **[ast-export-added]** `packages/typert/protocol/src/types.ts` — 新增导出: TypertResourceEntry
- **[ast-export-added]** `packages/typert/protocol/src/types.ts` — 新增导出: TypertResourceRegistry
- **[ast-export-added]** `packages/typert/registry/src/service.ts` — 新增导出: GLOBAL_RESOURCE_KIND
- **[ast-export-added]** `packages/typert/registry/src/service.ts` — 新增导出: ResourceStore
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
- **[ast-export-added]** `packages/util/values/src/partial-json.ts` — 新增导出: slashStart
- **[ast-export-added]** `packages/boot/app-boot/src/official-bundle-packages.ts` — 新增导出: ON_DEMAND_BUNDLES
- **[ast-export-added]** `packages/boot/app-boot/src/official-bundles.generated.ts` — 新增导出: OFFICIAL_ON_DEMAND_CATALOG
- **[ast-export-added]** `packages/llm/llm-pi-ai/src/catalog.ts` — 新增导出: servesChat
- **[ast-export-added]** `packages/llm/llm-pi-ai/src/catalog.ts` — 新增导出: MISTRAL_COMPAT_GATE
- **[config-field-added]** `config:@deepseek-ai/dsh-client-ui-theme` — 新增配置字段: codeFontSize
- **[config-field-added]** `config:@deepseek-ai/dsh-client-ui-theme` — 新增配置字段: terminalFontSize
- **[config-field-added]** `config:@deepseek-ai/dsh-client-ui-theme` — 新增配置字段: textFontFamily
- **[config-field-added]** `config:@deepseek-ai/dsh-client-ui-theme` — 新增配置字段: codeFontFamily
- **[config-field-added]** `config:@deepseek-ai/dsh-client-ui-theme` — 新增配置字段: terminalFontFamily
- **[config-field-added]** `config:@deepseek-ai/dsh-cordis-host-runner` — 新增配置字段: clientInspectTimeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-claude-code-mods` — 新增配置字段: hookTimeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-claude-code-mods` — 新增配置字段: catchTimeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-claude-code-mods` — 新增配置字段: processTimeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-claude-code-mods` — 新增配置字段: toolAliases
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-claude-code-mods` — 新增配置字段: bandColumns
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-claude-code-mods` — 新增配置字段: bandRows
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-client-ui-cot-translation` — 新增配置字段: provider
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-client-ui-cot-translation` — 新增配置字段: targetLanguage
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-speech-to-text-sensevoice` — 新增配置字段: vadOnsetPaddingSeconds
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-translator` — 新增配置字段: provider
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-translator` — 新增配置字段: googleEndpoint
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-translator` — 新增配置字段: bingEndpoint
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-translator` — 新增配置字段: timeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-translator` — 新增配置字段: maxTextChars
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-translator` — 新增配置字段: maxResponseBytes
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-translator` — 新增配置字段: deepseekTimeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-translator` — 新增配置字段: deepseekMaxOutputTokens
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-worktree` — 新增配置字段: directory
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-worktree` — 新增配置字段: namePrefix
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-worktree` — 新增配置字段: gitCommand
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-worktree` — 新增配置字段: nodeCommand
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-worktree` — 新增配置字段: timeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-worktree` — 新增配置字段: graceMs
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-worktree` — 新增配置字段: maxOutputBytes
- **[config-field-added]** `config:@deepseek-ai/dsh-host-webserver` — 新增配置字段: tls
- **[config-field-added]** `config:@deepseek-ai/dsh-host-webserver` — 新增配置字段: certFile
- **[config-field-added]** `config:@deepseek-ai/dsh-host-webserver` — 新增配置字段: keyFile
- **[config-field-added]** `config:@deepseek-ai/dsh-llm-deepseek-account` — 新增配置字段: modelsTimeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-llm-deepseek-account` — 新增配置字段: modelsMaxAgeMs
- **[config-field-added]** `config:@deepseek-ai/dsh-llm-deepseek-account` — 新增配置字段: modelOverrides
- **[config-field-added]** `config:@deepseek-ai/dsh-ptc-runtime-node` — 新增配置字段: launch
- **[config-field-added]** `config:@deepseek-ai/dsh-ptc-runtime-node` — 新增配置字段: executionMode
- **[config-field-added]** `config:@deepseek-ai/dsh-ptc-runtime-node` — 新增配置字段: kind
- **[config-field-added]** `config:@deepseek-ai/dsh-ptc-runtime-node` — 新增配置字段: executable
- **[config-field-added]** `config:@deepseek-ai/dsh-session-persistence-jsonl` — 新增配置字段: listConcurrency
- **[config-field-added]** `config:@deepseek-ai/dsh-ssh` — 新增配置字段: launch
- **[config-field-added]** `config:@deepseek-ai/dsh-ssh` — 新增配置字段: kind
- **[config-field-added]** `config:@deepseek-ai/dsh-tool-ask-user` — 新增配置字段: mode
- **[config-field-added]** `config:@deepseek-ai/dsh-tool-ask-user` — 新增配置字段: timeout
- **[config-field-added]** `config:@deepseek-ai/dsh-tool-fs` — 新增配置字段: read
- **[config-field-added]** `config:@deepseek-ai/dsh-tool-fs` — 新增配置字段: readImage
- **[config-field-added]** `config:@deepseek-ai/dsh-tool-fs` — 新增配置字段: write
- **[config-field-added]** `config:@deepseek-ai/dsh-tool-fs` — 新增配置字段: edit
- **[config-field-added]** `config:@deepseek-ai/dsh-tool-subagent` — 新增配置字段: agentPreset
- **[config-field-added]** `config:@deepseek-ai/dsh-tool-subagent` — 新增配置字段: allowedAgentPresets
- **[config-field-added]** `config:@deepseek-ai/dsh-web-app` — 新增配置字段: publicUrl
- **[config-field-added]** `config:@deepseek-ai/dsh-working-directory` — 新增配置字段: defaultDirectory
