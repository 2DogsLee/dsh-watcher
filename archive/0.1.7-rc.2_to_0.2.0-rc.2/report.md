# DSH 插件 API 面比对：`dsh-v0.1.7-rc.2` → `dsh-v0.2.0-rc.2`

> 生成于 2026-10-03T04:52:48.3023696Z · 工具 dsh-api-watch v0（启发式， breaking 结论建议复核 diff）

| 级别 | 数量 |
|---|---|
| breaking | 0 |
| warning | 10 |
| info | 13 |

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

## info

- **[package-added]** `packages/client/product-analytics` — 新增包
- **[package-added]** `packages/client/ui-settings-session-log` — 新增包
- **[package-added]** `packages/experimental/schedule-bundle` — 新增包
- **[package-added]** `packages/telemetry/otel` — 新增包
- **[doc-added]** `docs/persistence-changes/2026-09-21-user-question-reply.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-09-21-user-question-reply.zh.md` — 新增文档
- **[doc-added]** `docs/subsystems/otel.md` — 新增文档
- **[doc-added]** `docs/subsystems/otel.zh.md` — 新增文档
- **[config-scope-added]** `config:@deepseek-ai/dsh-client-product-analytics` — 新增可配置包
- **[config-field-added]** `config:@deepseek-ai/dsh-cordis-host-runner` — 新增配置字段: clientInspectTimeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-session-telemetry-otel` — 新增配置字段: maxRequestBytes
- **[config-field-added]** `config:@deepseek-ai/dsh-terminal-bash` — 新增配置字段: promptTailGraceMs
- **[config-scope-added]** `config:@deepseek-ai/dsh-tool-ask-user` — 新增可配置包
