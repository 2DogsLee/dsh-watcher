# DSH 插件 API 面比对：`dsh-v0.2.1-alpha.5` → `dsh-v0.2.1-rc.2`

> 生成于 2026-10-19T08:44:20.6885490Z · 工具 dsh-api-watch v1（启发式， breaking 结论建议复核 diff）

| 级别 | 数量 |
|---|---|
| breaking | 1 |
| warning | 1 |
| info | 23 |
| ★ 与我相关 | 0 |

## breaking

- **[ast-signature-changed]** `packages/web/web` — 签名变化: WebRuntimeConfig
    旧: export interface WebRuntimeConfig { /** Explicit search provider id. Omitted = auto-select when exactly one usable. */ readonly searchProvider?: string /** Explicit fetch provider id. Omitted = auto-select when exactly one usable. */ readonly fetchProvider?: string }
    新: export interface WebRuntimeConfig { /** Explicit search provider id. Omitted = auto-select when exactly one usable. */ readonly searchProvider: Volatile<string | undefined> /** Explicit fetch provider id. Omitted = auto-select when exactly one usable. */ readonly fetchProvider: Volatile<string | undefined> }

## warning

- **[ast-signature-changed]** `packages/web/web-search-deepseek/src/provider.ts` — 签名变化: DeepSeekSearchLlmRequest
    旧: export interface DeepSeekSearchLlmRequest { /** Fully resolved Messages endpoint. */ readonly endpoint: string /** `anthropic-version` header value. */ readonly apiVersion: string /** Exact JSON body sent to the provider. */ readonly body: { readonly model: string readonly max_tokens: number readonly messages: readonly [{ readonly role: 'user' readonly content: readonly [{ readonly type: 'text' readonly text: string }] }] readonly tools: readonly [{ readonly type: 'web_search_20250305' readonly name: 'web_search' readonly max_uses: number }] } }
    新: export interface DeepSeekSearchLlmRequest { /** Fully resolved Messages endpoint. */ readonly endpoint: string /** `anthropic-version` header value. */ readonly apiVersion: string /** Exact JSON body sent to the provider. */ readonly body: { readonly model: string readonly max_tokens: number readonly messages: readonly [{ readonly role: 'user' readonly content: readonly [{ readonly type: 'text' readonly text: string }] }] readonly tools: readonly [{ readonly type: 'web_search_20250305' readonly name: 'web_search' readonly max_uses: number }] /** * Thinking mode for the auxiliary turn. The provider always sends * `disabled`: it discards the generated text, so reasoning tokens have no * consumer. Absent means the request omitted the field and the provider * applied its default. */ readonly thinking?: { readonly type: 'disabled' } } }

## info

- **[package-added]** `packages/client/ui-deepseek-model-label-1017` — 新增包
- **[package-added]** `packages/web/web-deepseek-api` — 新增包
- **[doc-added]** `docs/persistence-changes/2026-10-13-deepseek-search-thinking.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-13-deepseek-search-thinking.zh.md` — 新增文档
- **[config-scope-added]** `config:@deepseek-ai/dsh-web-deepseek-api` — 新增可配置包
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: latestUserQuestion
- **[ast-export-added]** `packages/web/web-deepseek-api/src/fetch.ts` — 新增导出: DEEPSEEK_FETCH_API_PROVIDER_ID
- **[ast-export-added]** `packages/web/web-deepseek-api/src/fetch.ts` — 新增导出: DeepSeekFetchApiOptions
- **[ast-export-added]** `packages/web/web-deepseek-api/src/fetch.ts` — 新增导出: DeepSeekFetchApiProvider
- **[ast-export-added]** `packages/web/web-deepseek-api/src/search.ts` — 新增导出: DEEPSEEK_SEARCH_API_PROVIDER_ID
- **[ast-export-added]** `packages/web/web-deepseek-api/src/search.ts` — 新增导出: DEEPSEEK_WEB_API_BASE_URL
- **[ast-export-added]** `packages/web/web-deepseek-api/src/search.ts` — 新增导出: DEEPSEEK_DEFAULT_COUNT
- **[ast-export-added]** `packages/web/web-deepseek-api/src/search.ts` — 新增导出: ORIGINAL_QUESTION_MAX_CHARS
- **[ast-export-added]** `packages/web/web-deepseek-api/src/search.ts` — 新增导出: DEEPSEEK_WEB_API_GUIDANCE
- **[ast-export-added]** `packages/web/web-deepseek-api/src/search.ts` — 新增导出: DeepSeekSearchApiOptions
- **[ast-export-added]** `packages/web/web-deepseek-api/src/search.ts` — 新增导出: mapSearchResponse
- **[ast-export-added]** `packages/web/web-deepseek-api/src/search.ts` — 新增导出: DeepSeekSearchApiProvider
- **[ast-export-added]** `packages/web/web-deepseek-api/src/search.ts` — 新增导出: boundedQuestion
- **[config-field-added]** `config:@deepseek-ai/dsh-web-deepseek-api` — 新增配置字段: apiKey
- **[config-field-added]** `config:@deepseek-ai/dsh-web-deepseek-api` — 新增配置字段: apiKeyEnv
- **[config-field-added]** `config:@deepseek-ai/dsh-web-deepseek-api` — 新增配置字段: baseURL
- **[config-field-added]** `config:@deepseek-ai/dsh-web-deepseek-api` — 新增配置字段: count
- **[config-field-added]** `config:@deepseek-ai/dsh-web-deepseek-api` — 新增配置字段: sendOriginalQuestion
