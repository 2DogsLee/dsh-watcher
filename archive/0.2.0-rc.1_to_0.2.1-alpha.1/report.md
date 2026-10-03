# DSH 插件 API 面比对：`dsh-v0.2.0-rc.1` → `dsh-v0.2.1-alpha.1`

> 生成于 2026-10-03T06:47:01.3154161Z · 工具 dsh-api-watch v0（启发式， breaking 结论建议复核 diff）

| 级别 | 数量 |
|---|---|
| breaking | 5 |
| warning | 54 |
| info | 15 |

## breaking

- **[package-removed]** `packages/experimental/schedule-bundle` — 包被移除或不再是独立包
- **[package-removed]** `packages/runtime-diagnostics/invariants` — 包被移除或不再是独立包
- **[doc-removed]** `docs/subsystems/invariants.md` — 契约文档被删除/改名
- **[doc-removed]** `docs/subsystems/invariants.zh.md` — 契约文档被删除/改名
- **[config-scope-removed]** `config:@deepseek-ai/dsh-invariants` — 该包从配置目录移除，其 cordis.yml config 块不再可用

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
- **[config-field-added]** `config:@deepseek-ai/dsh-cordis-host-runner` — 新增配置字段: clientInspectTimeoutMs
- **[config-scope-added]** `config:@deepseek-ai/dsh-experimental-claude-code-mods` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-tool-ask-user` — 新增可配置包
- **[config-field-added]** `config:@deepseek-ai/dsh-web-app` — 新增配置字段: publicUrl
