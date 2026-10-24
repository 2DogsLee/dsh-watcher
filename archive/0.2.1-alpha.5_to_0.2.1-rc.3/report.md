# DSH 插件 API 面比对：`dsh-v0.2.1-alpha.5` → `dsh-v0.2.1-rc.3`

> 生成于 2026-10-24T08:12:44.9648036Z · 工具 dsh-api-watch v1（启发式， breaking 结论建议复核 diff）

| 级别 | 数量 |
|---|---|
| breaking | 8 |
| warning | 13 |
| info | 92 |
| ★ 与我相关 | 0 |

## breaking

- **[ast-signature-changed]** `packages/web/web` — 签名变化: WebRuntimeConfig
    旧: export interface WebRuntimeConfig { /** Explicit search provider id. Omitted = auto-select when exactly one usable. */ readonly searchProvider?: string /** Explicit fetch provider id. Omitted = auto-select when exactly one usable. */ readonly fetchProvider?: string }
    新: export interface WebRuntimeConfig { /** Explicit search provider id. Omitted = auto-select when exactly one usable. */ readonly searchProvider: Volatile<string | undefined> /** Explicit fetch provider id. Omitted = auto-select when exactly one usable. */ readonly fetchProvider: Volatile<string | undefined> }
- **[ast-export-removed]** `packages/client/ui-primitives/src/Tooltip.tsx` — 导出（含 re-export）删除: edgeMargin（原声明于 packages/client/ui-primitives/src/Tooltip.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/Tooltip.tsx` — 导出（含 re-export）删除: fitsBelow（原声明于 packages/client/ui-primitives/src/Tooltip.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/Tooltip.tsx` — 导出（含 re-export）删除: fitsAbove（原声明于 packages/client/ui-primitives/src/Tooltip.tsx）
- **[ast-export-removed]** `packages/llm/llm-deepseek-account/src/config.ts` — 导出（含 re-export）删除: CatalogSettings（原声明于 packages/llm/llm-deepseek-account/src/config.ts）
- **[ast-export-removed]** `packages/llm/llm-deepseek-account/src/config.ts` — 导出（含 re-export）删除: listingEndpoint（原声明于 packages/llm/llm-deepseek-account/src/config.ts）
- **[config-field-removed]** `config:@deepseek-ai/dsh-llm-deepseek-account` — 配置字段被删除: modelsTimeoutMs（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-llm-deepseek-account` — 配置字段被删除: modelsMaxAgeMs（cordis.yml 里写这些字段将失效）

## warning

- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/new-session-blank-reuse/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/new-session-blank-reuse/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[ast-signature-changed]** `packages/llm/llm-deepseek-account` — 签名变化: AccountConnection
    旧: interface AccountConnection extends ResolvedDeepSeekOptions { readonly catalog: AccountCatalog }
    新: interface AccountConnection extends ResolvedDeepSeekOptions { readonly catalog: ListedCatalog }
- **[ast-signature-changed]** `packages/experimental/webworker-runtime/src/storage/image-gzip.ts` — 签名变化: refuse
    旧: function(model:string,refusal:CatalogRefusal | undefined)
    新: var
- **[ast-signature-changed]** `packages/client/ui-primitives/src/Menu.tsx` — 签名变化: MenuItemButtonProps
    旧: export interface MenuItemButtonProps { /** Visible row label. */ children: ReactNode /** Effective binding supplied by the command owner; omitted for unbound actions. */ shortcut?: MenuItem['shortcut'] /** Leading icon (figma .Menu_cell gap 8). */ icon?: ReactNode /** Whether the row cannot be activated. */ disabled?: boolean /** Destructive row: error-colored text/icon and danger hover fill. */ danger?: boolean /** * Start a new group: a hairline above this row, the same one a * `{ type: 'separator' }` data entry draws. It comes and goes with the row, * so a row that renders nothing leaves no stray line; a data separator * directly before it draws no second line, and the list's first row draws none. */ separatorBefore?: boolean /** Row activation (click, Enter, or Tab on the focused row). */ onSelect: () => void }
    新: export interface MenuItemButtonProps { /** Visible row label. */ children: ReactNode /** Effective binding supplied by the command owner; omitted for unbound actions. */ shortcut?: MenuItem['shortcut'] /** Leading icon (figma .Menu_cell gap 8). */ icon?: ReactNode /** Whether this row identifies the currently displayed page or view. */ current?: boolean /** Whether the row cannot be activated. */ disabled?: boolean /** Destructive row: error-colored text/icon and danger hover fill. */ danger?: boolean /** * Start a new group: a hairline above this row, the same one a * `{ type: 'separator' }` data entry draws. It comes and goes with the row, * so a row that renders nothing leaves no stray line; a data separator * directly before it draws no second line, and the list's first row draws none. */ separatorBefore?: boolean /** Row activation (click, Enter, or Tab on the focused row). */ onSelect: () => void }
- **[ast-signature-changed]** `packages/client/ui-primitives/src/Menu.tsx` — 签名变化: MenuItemButton
    旧: function({
  children, shortcut, icon, disabled = false, danger = false, separatorBefore = false, onSelect,
}:MenuItemButtonProps)
    新: function({
  children, shortcut, icon, current, disabled = false, danger = false, separatorBefore = false, onSelect,
}:MenuItemButtonProps)
- **[ast-signature-changed]** `packages/client/ui-primitives/src/Menu.tsx` — 签名变化: Menu
    旧: function({ open, anchor, items = [], children, selectedId, selectedIds, onSelect, onClose, align = 'start', side = 'bottom', portal = false, closeOnPointerLeave = false, dense = false, compact = false, autoFocus = false, selection = 'check', getAnchorRect, footer, className, listClassName }:{ open: boolean autoFocus?: boolean anchor: ReactNode items?: readonly MenuEntry[] children?: ReactNode footer?: readonly MenuEntry[] selectedId?: string | undefined selectedIds?: readonly string[] | undefined onSelect?: (id: string) => void onClose: () => void align?: 'start' | 'end' side?: 'bottom' | 'top' | 'right' portal?: boolean closeOnPointerLeave?: boolean dense?: boolean compact?: boolean selection?: 'check' | 'fill' getAnchorRect?: () => DOMRect | null className?: string | undefined listClassName?: string | undefined })
    新: function({ open, anchor, items = [], children, selectedId, selectedIds, onSelect, onClose, align = 'start', side = 'bottom', portal = false, closeOnPointerLeave = false, dense = false, compact = false, autoFocus = false, selection = 'check', getAnchorRect, minWidthFromAnchor = false, footer, className, listClassName }:{ open: boolean autoFocus?: boolean anchor: ReactNode items?: readonly MenuEntry[] children?: ReactNode footer?: readonly MenuEntry[] selectedId?: string | undefined selectedIds?: readonly string[] | undefined onSelect?: (id: string) => void onClose: () => void align?: 'start' | 'end' side?: 'bottom' | 'top' | 'right' portal?: boolean closeOnPointerLeave?: boolean dense?: boolean compact?: boolean selection?: 'check' | 'fill' getAnchorRect?: () => DOMRect | null minWidthFromAnchor?: boolean className?: string | undefined listClassName?: string | undefined })
- **[ast-signature-changed]** `packages/client/ui-primitives/src/tooltip-placement.ts` — 签名变化: TooltipSide
    旧: export type TooltipSide = 'right' | 'bottom' | 'top'
    新: export type TooltipSide = 'right' | 'left' | 'bottom' | 'top'
- **[ast-signature-changed]** `packages/llm/llm-deepseek-account/src/config.ts` — 签名变化: AccountOptions
    旧: export type AccountOptions = Omit<ProtocolOptions, 'models'> & { modelsTimeoutMs?: number modelsMaxAgeMs?: number modelOverrides?: Record<string, ModelOverride> }
    新: export type AccountOptions = Omit<ProtocolOptions, 'models'> & ModelListingOptions & { modelOverrides?: Record<string, ModelOverride> }
- **[ast-signature-changed]** `packages/llm/llm-deepseek-account/src/config.ts` — 签名变化: ResolvedAccountOptions
    旧: export interface ResolvedAccountOptions { /** Messages settings; request resolution replaces `models` with the resolved account catalog. */ readonly protocol: ResolvedDeepSeekOptions /** Listing endpoint and cache timing. */ readonly catalog: CatalogSettings /** Overrides by model id, holding only the fields each one declares. */ readonly modelOverrides: Readonly<Record<string, ModelOverride>> }
    新: export interface ResolvedAccountOptions { /** Messages settings; request resolution replaces `models` with the resolved account catalog. */ readonly protocol: ResolvedDeepSeekOptions /** Listing endpoint and cache timing. */ readonly catalog: ListingSettings /** Overrides by model id, holding only the fields each one declares. */ readonly modelOverrides: Readonly<Record<string, ModelOverride>> }
- **[ast-signature-changed]** `packages/llm/llm-deepseek-api-key/src/config.ts` — 签名变化: Options
    旧: export type Options = ProtocolOptions & { apiKeyEnv?: string }
    新: export type Options = ProtocolOptions & ModelListingOptions & { apiKeyEnv?: string }
- **[ast-signature-changed]** `packages/llm/llm-deepseek-api-key/src/config.ts` — 签名变化: ResolvedDeepSeekOptions
    旧: export interface ResolvedDeepSeekOptions extends DeepSeekConnectionOptions { /** Credential reference used only for this connection snapshot. */ apiKeyEnv: CredentialRef }
    新: export interface ResolvedDeepSeekOptions extends DeepSeekConnectionOptions { /** Credential reference used only for this connection snapshot. */ apiKeyEnv: CredentialRef /** * The official `/models` listing this generation follows; absent when `models` * differs from the built-in catalog or the endpoint is not the official API. */ listing?: ListingSettings }
- **[ast-signature-changed]** `packages/web/web-search-deepseek/src/provider.ts` — 签名变化: DeepSeekSearchLlmRequest
    旧: export interface DeepSeekSearchLlmRequest { /** Fully resolved Messages endpoint. */ readonly endpoint: string /** `anthropic-version` header value. */ readonly apiVersion: string /** Exact JSON body sent to the provider. */ readonly body: { readonly model: string readonly max_tokens: number readonly messages: readonly [{ readonly role: 'user' readonly content: readonly [{ readonly type: 'text' readonly text: string }] }] readonly tools: readonly [{ readonly type: 'web_search_20250305' readonly name: 'web_search' readonly max_uses: number }] } }
    新: export interface DeepSeekSearchLlmRequest { /** Fully resolved Messages endpoint. */ readonly endpoint: string /** `anthropic-version` header value. */ readonly apiVersion: string /** Exact JSON body sent to the provider. */ readonly body: { readonly model: string readonly max_tokens: number readonly messages: readonly [{ readonly role: 'user' readonly content: readonly [{ readonly type: 'text' readonly text: string }] }] readonly tools: readonly [{ readonly type: 'web_search_20250305' readonly name: 'web_search' readonly max_uses: number }] /** * Thinking mode for the auxiliary turn. The provider always sends * `disabled`: it discards the generated text, so reasoning tokens have no * consumer. Absent means the request omitted the field and the provider * applied its default. */ readonly thinking?: { readonly type: 'disabled' } } }

## info

- **[package-added]** `packages/client/ui-deepseek-model-label-1017` — 新增包
- **[package-added]** `packages/client/ui-entry-customization` — 新增包
- **[package-added]** `packages/web/web-deepseek-api` — 新增包
- **[doc-added]** `docs/persistence-changes/2026-10-13-deepseek-search-thinking.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-13-deepseek-search-thinking.zh.md` — 新增文档
- **[config-scope-added]** `config:@deepseek-ai/dsh-web-deepseek-api` — 新增可配置包
- **[ast-export-added]** `packages/llm/llm-deepseek-api-key` — 新增导出: OfficialConnection
- **[ast-export-added]** `packages/llm/llm-deepseek-api-key` — 新增导出: presentApiKey
- **[ast-export-added]** `packages/llm/llm-deepseek-api-key` — 新增导出: listings
- **[ast-export-added]** `packages/llm/llm-deepseek-api-key` — 新增导出: reportedListing
- **[ast-export-added]** `packages/llm/llm-deepseek-api-key` — 新增导出: following
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: latestUserQuestion
- **[ast-export-added]** `packages/client/ui-primitives/src/Tooltip.tsx` — 新增导出: anchorRect
- **[ast-export-added]** `packages/client/ui-primitives/src/Tooltip.tsx` — 新增导出: horizontal
- **[ast-export-added]** `packages/client/ui-primitives/src/Tooltip.tsx` — 新增导出: offsetX
- **[ast-export-added]** `packages/client/ui-primitives/src/Tooltip.tsx` — 新增导出: offsetY
- **[ast-export-added]** `packages/client/ui-primitives/src/Tooltip.tsx` — 新增导出: onResize
- **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: AppsAddIconProps
- **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: IconAppsAddOutlineArtwork
- **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: near
- **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: far
- **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: plusX
- **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: plusY
- **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: IconAppsAddOutlineRegular
- **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: IconAppsAddOutlineMedium
- **[ast-export-added]** `packages/llm/llm-deepseek-account/src/config.ts` — 新增导出: timing
- **[ast-export-added]** `packages/llm/llm-deepseek-api-key/src/config.ts` — 新增导出: OFFICIAL_ORIGIN
- **[ast-export-added]** `packages/llm/llm-deepseek/src/config.ts` — 新增导出: isBuiltInCatalog
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing.ts` — 新增导出: LISTED_MODALITIES
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing.ts` — 新增导出: LISTING_TIMEOUT
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing.ts` — 新增导出: modelListingURL
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing.ts` — 新增导出: ClientRequirement
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing.ts` — 新增导出: ListedFacts
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing.ts` — 新增导出: ListedCapabilities
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing.ts` — 新增导出: ListingEntry
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing.ts` — 新增导出: ModelListing
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing.ts` — 新增导出: Fields
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing.ts` — 新增导出: fieldsOf
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing.ts` — 新增导出: knownModalities
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing.ts` — 新增导出: requirementOf
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing.ts` — 新增导出: capabilitiesOf
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing.ts` — 新增导出: maxOutputTokens
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing.ts` — 新增导出: promptUpdate
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing.ts` — 新增导出: parseModelListing
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing.ts` — 新增导出: requestModelListing
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing-config.ts` — 新增导出: ModelListingConfig
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing-config.ts` — 新增导出: modelListingConfigFields
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing-config.ts` — 新增导出: ModelListingOptions
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing-config.ts` — 新增导出: ListingTiming
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing-config.ts` — 新增导出: ListingSettings
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing-config.ts` — 新增导出: resolveListingTiming
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing-cache.ts` — 新增导出: ListingCacheDependencies
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing-cache.ts` — 新增导出: ListingView
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing-cache.ts` — 新增导出: abandonable
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing-cache.ts` — 新增导出: ModelListingCache
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listing-cache.ts` — 新增导出: credential
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listed-catalog.ts` — 新增导出: CatalogRefusal
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listed-catalog.ts` — 新增导出: ListedCatalogInput
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listed-catalog.ts` — 新增导出: ListedCatalog
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listed-catalog.ts` — 新增导出: layered
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listed-catalog.ts` — 新增导出: gateOf
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listed-catalog.ts` — 新增导出: resolveListedCatalog
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listed-catalog.ts` — 新增导出: overrideErrors
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listed-catalog.ts` — 新增导出: withOverride
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listed-catalog.ts` — 新增导出: refusals
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listed-catalog.ts` — 新增导出: offeredIds
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listed-catalog.ts` — 新增导出: listedIds
- **[ast-export-added]** `packages/llm/llm-deepseek/src/listed-catalog.ts` — 新增导出: refuseListedModel
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
- **[ast-export-added]** `packages/client/ui-primitives/src/tooltip-placement.ts` — 新增导出: PlacementInput
- **[ast-export-added]** `packages/client/ui-primitives/src/tooltip-placement.ts` — 新增导出: TooltipPlacement
- **[ast-export-added]** `packages/client/ui-primitives/src/tooltip-placement.ts` — 新增导出: placeTooltip
- **[ast-export-added]** `packages/client/ui-primitives/src/tooltip-placement.ts` — 新增导出: margin
- **[ast-export-added]** `packages/client/ui-primitives/src/tooltip-placement.ts` — 新增导出: maxWidth
- **[ast-export-added]** `packages/client/ui-primitives/src/tooltip-placement.ts` — 新增导出: clampX
- **[ast-export-added]** `packages/client/ui-primitives/src/tooltip-placement.ts` — 新增导出: clampY
- **[config-field-added]** `config:@deepseek-ai/dsh-web-deepseek-api` — 新增配置字段: apiKey
- **[config-field-added]** `config:@deepseek-ai/dsh-web-deepseek-api` — 新增配置字段: apiKeyEnv
- **[config-field-added]** `config:@deepseek-ai/dsh-web-deepseek-api` — 新增配置字段: baseURL
- **[config-field-added]** `config:@deepseek-ai/dsh-web-deepseek-api` — 新增配置字段: count
- **[config-field-added]** `config:@deepseek-ai/dsh-web-deepseek-api` — 新增配置字段: sendOriginalQuestion
