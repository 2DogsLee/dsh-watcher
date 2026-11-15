# DSH 插件 API 面比对：`dsh-v0.2.2-rc.1` → `dsh-v0.2.2-rc.3`

> 生成于 2026-11-15T02:17:57.7890355Z · 工具 dsh-api-watch v1（启发式， breaking 结论建议复核 diff）

| 级别 | 数量 |
|---|---|
| breaking | 223 |
| warning | 278 |
| info | 670 |
| ★ 与我相关 | 92 |

## ★ 优先关注：与你插件相关的 breaking / warning

- **[doc-major-rewrite]** `docs/subsystems/forge.md` — 行数 1051 -> 1780（69%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/forge.zh.md` — 行数 1051 -> 1781（69%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/mcp.md` — 行数 94 -> 173（84%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/mcp.zh.md` — 行数 94 -> 173（84%），可能存在行为级变更，建议人工复核
- **[doc-removed]** `docs/subsystems/office-to-pdf.md` — 契约文档被删除/改名
- **[doc-removed]** `docs/subsystems/office-to-pdf.zh.md` — 契约文档被删除/改名
- **[doc-major-rewrite]** `docs/subsystems/working-directory.md` — 行数 45 -> 68（51%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/working-directory.zh.md` — 行数 45 -> 68（51%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/worktrees.md` — 行数 103 -> 148（44%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/worktrees.zh.md` — 行数 103 -> 148（44%），可能存在行为级变更，建议人工复核
- **[ast-signature-changed]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 签名变化: RowSnapshot
    旧: interface RowSnapshot { positions: Map<string, RowPosition> removed: Map<string, RowPosition> }
    新: interface RowSnapshot { viewport: Viewport positions: Map<string, RowPosition> removed: Map<string, RowPosition> }
- **[ast-signature-changed]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 签名变化: intersects
    旧: function(row:DOMRect,viewport:DOMRect)
    新: function(row:DOMRect,viewport:Viewport)
- **[ast-signature-changed]** `packages/client/ui-primitives/src/Checkbox.tsx` — 签名变化: Checkbox
    旧: function({ checked, onChange, label, disabled = false, title, className }:{ checked: boolean onChange: (next: boolean) => void label: string disabled?: boolean title?: string | undefined className?: string | undefined })
    新: function({ checked, onChange, label, disabled = false, title, className, modalAutofocus = false }:{ checked: boolean onChange: (next: boolean) => void label: string disabled?: boolean title?: string | undefined className?: string | undefined modalAutofocus?: boolean })
- **[ast-signature-changed]** `packages/client/ui-primitives/src/Menu.tsx` — 签名变化: MenuItem
    旧: export interface MenuItem { id: string label: ReactNode disabled?: boolean /** Effective binding supplied by the command owner; omitted for unbound actions. */ shortcut?: { keys: readonly string[]; aria?: string | undefined } /** Leading icon (figma .Menu_cell gap 8). */ icon?: ReactNode /** Destructive row: error-colored text/icon and danger hover fill. */ danger?: boolean /** Nested card opened to the right on hover/focus. */ submenu?: readonly MenuEntry[] }
    新: export interface MenuItem { id: string label: ReactNode disabled?: boolean /** Effective binding supplied by the command owner; omitted for unbound actions. */ shortcut?: { keys: readonly string[]; aria?: string | undefined } /** Leading icon (figma .Menu_cell gap 8). */ icon?: ReactNode /** Destructive row: error-colored text/icon and danger hover fill. */ danger?: boolean /** Child choices opened by hover, focus, click, or ArrowRight; placement follows available space. */ submenu?: readonly MenuEntry[] }
- **[ast-signature-changed]** `packages/client/ui-primitives/src/Menu.tsx` — 签名变化: MenuItemButton
    旧: function({
  children, shortcut, icon, current, disabled = false, disabledReason, danger = false, separatorBefore = false, onSelect,
}:MenuItemButtonProps)
    新: function({ onSelect, ...props }:MenuItemButtonProps)
- **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: reasonId（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: explained（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: isSeparator（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: isLabel（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: iconColumns（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: aligned（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: MEASURE_STYLE（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- **[ast-signature-changed]** `packages/client/ui-primitives/src/Menu.tsx` — 签名变化: Menu
    旧: function({ open, anchor, items = [], children, selectedId, selectedIds, onSelect, onClose, align = 'start', side = 'bottom', portal = false, closeOnPointerLeave = false, dense = false, compact = false, autoFocus = false, selection = 'check', getAnchorRect, minWidthFromAnchor = false, footer, className, listClassName, contextual = false, exiting, returnFocus }:{ open: boolean /** Pointer-positioned popup: cursor clearance, grouped icons, and context gestures. */ contextual?: boolean /** Resolve the original control for focus restoration and inert/hidden dismissal. */ returnFocus?: (() => HTMLElement | null) | undefined /** Retain a dismissed context popup during its short fade. */ exiting?: 'dismiss' | 'replace' | undefined autoFocus?: boolean anchor: ReactNode items?: readonly MenuEntry[] children?: ReactNode footer?: readonly MenuEntry[] selectedId?: string | undefined selectedIds?: readonly string[] | undefined onSelect?: (id: string) => void onClose: () => void align?: 'start' | 'end' side?: 'bottom' | 'top' | 'right' portal?: boolean closeOnPointerLeave?: boolean dense?: boolean compact?: boolean selection?: 'check' | 'fill' getAnchorRect?: () => DOMRect | null minWidthFromAnchor?: boolean className?: string | undefined listClassName?: string | undefined })
    新: function({ open, anchor, items = [], children, submenuBackLabel, selectedId, selectedIds, onSelect, onClose, align = 'start', side = 'bottom', portal = false, closeOnPointerLeave = false, dense = false, compact = false, autoFocus = false, selection = 'check', anchorRef, anchorPoint, minWidthFromAnchor = false, footer, className, listClassName, contextual = false, exiting, returnFocus, isExternalTrigger }:{ open: boolean /** Pointer-positioned popup: cursor clearance, grouped icons, and context gestures. */ contextual?: boolean /** Recognizes external triggers exempt from outside dismissal; omitted exempts no external nodes. */ isExternalTrigger?: (node: Node) => boolean /** Resolve the original control for focus restoration and inert/hidden dismissal. */ returnFocus?: (() => HTMLElement | null) | undefined /** Retain a dismissed context popup during its short fade. */ exiting?: 'dismiss' | 'replace' | undefined autoFocus?: boolean anchor: ReactNode items?: readonly MenuEntry[] /** Localized return action; omitted uses the caller's parent label with a back arrow. */ submenuBackLabel?: string | undefined children?: ReactNode footer?: readonly MenuEntry[] selectedId?: string | undefined selectedIds?: readonly string[] | undefined onSelect?: (id: string) => void onClose: () => void align?: 'start' | 'end' side?: 'bottom' | 'top' | 'right' portal?: boolean closeOnPointerLeave?: boolean dense?: boolean compact?: boolean selection?: 'check' | 'fill' anchorRef?: RefObject<HTMLElement | null> | undefined /** Client coordinates captured for this opening; Safari offsets are applied once. */ anchorPoint?: { readonly x: number; readonly y: number } | undefined minWidthFromAnchor?: boolean className?: string | undefined listClassName?: string | undefined })
- **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: lastAnchorRect（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: readAnchor（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: anchorElement（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: fixedPos（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: scrollable（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: subOpen（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: subColumns（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: collapseSubmenuFrom（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/useAnchoredPosition.ts` — 导出（含 re-export）删除: AnchoredPositionOptions（原声明于 packages/client/ui-primitives/src/useAnchoredPosition.ts）
- **[ast-export-removed]** `packages/client/ui-primitives/src/useAnchoredPosition.ts` — 导出（含 re-export）删除: useAnchoredPosition（原声明于 packages/client/ui-primitives/src/useAnchoredPosition.ts）
- **[ast-export-removed]** `packages/client/ui-primitives/src/useAnchoredPosition.ts` — 导出（含 re-export）删除: lastRect（原声明于 packages/client/ui-primitives/src/useAnchoredPosition.ts）
- **[ast-export-removed]** `packages/client/ui-primitives/src/useAnchoredPosition.ts` — 导出（含 re-export）删除: readRect（原声明于 packages/client/ui-primitives/src/useAnchoredPosition.ts）
- **[ast-export-removed]** `packages/client/ui-primitives/src/useAnchoredPosition.ts` — 导出（含 re-export）删除: x（原声明于 packages/client/ui-primitives/src/useAnchoredPosition.ts）
- **[ast-export-removed]** `packages/client/ui-primitives/src/useAnchoredPosition.ts` — 导出（含 re-export）删除: y（原声明于 packages/client/ui-primitives/src/useAnchoredPosition.ts）
- **[ast-export-removed]** `packages/client/ui-primitives/src/useAnchoredPosition.ts` — 导出（含 re-export）删除: panelWidth（原声明于 packages/client/ui-primitives/src/useAnchoredPosition.ts）
- **[ast-export-removed]** `packages/client/ui-primitives/src/useAnchoredPosition.ts` — 导出（含 re-export）删除: panelHeight（原声明于 packages/client/ui-primitives/src/useAnchoredPosition.ts）
- **[ast-signature-changed]** `packages/client/ui-primitives/src/Modal.tsx` — 签名变化: ModalBaseProps
    旧: interface ModalBaseProps { open: boolean onClose: () => void title: string description?: string children?: ReactNode footer?: ReactNode className?: string contentClassName?: string shortcutModal?: string onKeyDownCapture?: KeyboardEventHandler<HTMLDivElement> backdropBlur?: boolean }
    新: interface ModalBaseProps { open: boolean onClose: () => void title: string tone?: 'warning' description?: string children?: ReactNode footer?: ReactNode className?: string contentClassName?: string shortcutModal?: string onKeyDownCapture?: KeyboardEventHandler<HTMLDivElement> backdropBlur?: boolean }
- **[ast-signature-changed]** `packages/client/ui-primitives/src/Modal.tsx` — 签名变化: Modal
    旧: function({
  open, onClose, title, closeLabel, description, children, footer, className, contentClassName,
  onKeyDownCapture, headless = false, backdropBlur = true, shortcutModal,
}:ModalProps)
    新: function({
  open, onClose, title, closeLabel, description, children, footer, className, contentClassName,
  onKeyDownCapture, headless = false, backdropBlur = true, shortcutModal, tone,
}:ModalProps)
- **[ast-signature-changed]** `packages/client/ui-primitives/src/FileTypeIcon.tsx` — 签名变化: EXTENSION_TYPES
    旧: var:Readonly<Record<string, ClassifiedFileType>>
    新: var:ReadonlyMap<string, ClassifiedFileType>
- **[ast-signature-changed]** `packages/client/ui-primitives/src/FileTypeIcon.tsx` — 签名变化: NAME_TYPES
    旧: var:Readonly<Record<string, ClassifiedFileType>>
    新: var:ReadonlyMap<string, ClassifiedFileType>
- **[ast-signature-changed]** `packages/client/ui-primitives/src/markdown/CodeBlock.tsx` — 签名变化: CodeBlockProps
    旧: export interface CodeBlockProps { /** The source text, rendered verbatim (trailing newline trimmed for display). */ code: string /** Grammar hint (markdown fence info string or a fixed caller id); unknown = plain. */ lang?: string | undefined /** * The code is still growing (a streaming markdown fence): highlight through * a per-instance {@link StreamingHighlightSession}, which re-tokenizes only * appended text and keeps completed line groups (and DOM) untouched. The * caller must keep the component instance stable across growth (a * stream-stable React key); an unchanged streamed fence also retains that * tree when it settles. Cold settled callers get shiki's HTML. */ streaming?: boolean | undefined /** Extra class merged onto the wrapper (callers position; this component draws). */ className?: string | undefined /** Ref for the stable source-content wrapper, for owners that use it as a scrollport. */ contentRef?: Ref<HTMLDivElement> | undefined /** Show a numbered gutter without adding numbers to copied source. Defaults to false. */ lineNumbers?: boolean | undefined /** Show the language and copy header; false when the caller supplies a toolbar. Defaults to true. */ showHeader?: boolean | undefined /** Copy-button idle label; the owner passes localized copy (this package is cordis-free, so copy arrives via props). */ copyLabel: string /** Copy-button label during the post-copy confirmation window. */ copiedLabel: string /** Enable the shared card toolbar and spacing; omit for custom toolbar layouts. */ toolbarLabels?: CodeToolbarLabels | undefined /** With toolbarLabels, use the owner's wrapping preference and omit the toolbar's local wrap action. */ wrap?: boolean | undefined }
    新: export interface CodeBlockProps { /** The source text, rendered verbatim (trailing newline trimmed for display). */ code: string /** Grammar hint (markdown fence info string or a fixed caller id); unknown = plain. */ lang?: string | undefined /** * Render unified-diff rows: row colors by marker column, and each file's * removed and added sides tokenized with the language its header names. * Omitted, a `diff` or `patch` `lang` selects them; `true` or `false` forces * the choice for any `lang`. */ diff?: boolean | undefined /** * The code is still growing (a streaming markdown fence): highlight through * a per-instance {@link StreamingHighlightSession}, which re-tokenizes only * appended text and keeps completed line groups (and DOM) untouched. The * caller must keep the component instance stable across growth (a * stream-stable React key); an unchanged streamed fence also retains that * tree when it settles. Cold settled callers get shiki's HTML. */ streaming?: boolean | undefined /** Extra class merged onto the wrapper (callers position; this component draws). */ className?: string | undefined /** Ref for the stable source-content wrapper, for owners that use it as a scrollport. */ contentRef?: Ref<HTMLDivElement> | undefined /** Show a numbered gutter without adding numbers to copied source. Defaults to false. */ lineNumbers?: boolean | undefined /** Show the language and copy header; false when the caller supplies a toolbar. Defaults to true. */ showHeader?: boolean | undefined /** Copy-button idle label; the owner passes localized copy (this package is cordis-free, so copy arrives via props). */ copyLabel: string /** Copy-button label during the post-copy confirmation window. */ copiedLabel: string /** Enable the shared card toolbar and spacing; omit for custom toolbar layouts. */ toolbarLabels?: CodeToolbarLabels | undefined /** With toolbarLabels, use the owner's wrapping preference and omit the toolbar's local wrap action. */ wrap?: boolean | undefined }
- **[ast-signature-changed]** `packages/client/ui-primitives/src/markdown/CodeBlock.tsx` — 签名变化: CodeBlock
    旧: function({
  code, lang, streaming, className, contentRef, lineNumbers = false, showHeader = true, copyLabel, copiedLabel, toolbarLabels, wrap,
}:CodeBlockProps)
    新: function({
  code, lang, diff, streaming, className, contentRef, lineNumbers = false, showHeader = true, copyLabel, copiedLabel, toolbarLabels, wrap,
}:CodeBlockProps)
- **[ast-signature-changed]** `packages/client/ui-primitives/src/markdown/MarkdownDelegate.tsx` — 签名变化: MarkdownDelegate
    旧: export interface MarkdownDelegate { /** Open an object menu without executing its normal activation. */ readonly getTriggerProps?: ((target: MarkdownMenuTarget) => Pick<HTMLAttributes<HTMLElement>, 'onContextMenu' | 'onKeyDown' | 'tabIndex'>) | undefined /** * Image previews for decoded local paths in this owner's workspace. The renderer * appends a per-mount `load` query parameter to `api/file` route URLs. */ readonly fileImages?: { fileDrag: FileDragActions resolve: (path: string) => string | undefined resourceAddress?: ((path: string) => string) | undefined labels: ImageLightboxLabels & { open: string; loading: string; failed: string } } | undefined /** Ordinary HTTP(S) activation; absent handlers retain native anchor behavior. */ readonly openExternalLink?: MarkdownExternalLinkHandler | undefined /** * Open a decoded local destination from settled Markdown; absent handlers leave plain text. * @param path - Absolute or workspace-relative file path. * @param options - First line to reveal when the destination specifies a line or range. */ readonly openFile?: ((path: string, options?: { line?: number }) => void) | undefined }
    新: export interface MarkdownDelegate { /** Open an object menu without executing its normal activation. */ readonly getTriggerProps?: ((target: MarkdownMenuTarget) => Pick<HTMLAttributes<HTMLElement>, 'onContextMenu' | 'onKeyDown' | 'tabIndex'>) | undefined /** * Image previews for decoded local paths in this owner's workspace. The renderer * appends a per-mount `load` query parameter to `api/file` route URLs. */ readonly fileImages?: { fileDrag: FileDragActions resolve: (path: string) => string | undefined resourceAddress?: ((path: string) => string) | undefined labels: ImageLightboxLabels & { open: string; loading: string; failed: string } } | undefined /** Ordinary HTTP(S) activation; absent handlers retain native anchor behavior. */ readonly openExternalLink?: MarkdownExternalLinkHandler | undefined /** * Open a decoded local destination from settled Markdown; absent handlers leave plain text. * @param path - Absolute or workspace-relative file path. * @param options - First line to reveal when the destination specifies a line or range. */ readonly openFile?: ((path: string, options?: { line?: number }) => void) | undefined /** * Render one fence whose language is final: it has a language and content. * Absent, the document renders fences with its built-in code and math blocks; * present, the owner renders every such fence, including `diff` and `math`. * @param fence - language, body, and streaming state. * @returns the rendered block. */ readonly renderCode?: ((fence: MarkdownDelegateFenceInfo) => ReactNode) | undefined }
- **[ast-signature-changed]** `packages/client/ui-primitives/src/markdown/MarkdownDelegate.tsx` — 签名变化: MarkdownDelegateProvider
    旧: function({
  children,
  openExternalLink,
  openFile,
  fileImages,
  getTriggerProps,
}:MarkdownDelegateProviderProps)
    新: function({
  children,
  openExternalLink,
  openFile,
  fileImages,
  getTriggerProps,
  renderCode,
}:MarkdownDelegateProviderProps)
- **[ast-signature-changed]** `packages/client/ui-primitives/src/QuotePreview.tsx` — 签名变化: QuotePreviewProps
    旧: export interface QuotePreviewProps { /** Exact selected text rendered inline and exposed in a popover while clipped. */ readonly text: string /** Composer-only removal action; omit for inert sent quotes. */ readonly removal?: QuotePreviewRemoval | undefined }
    新: export interface QuotePreviewProps { /** Exact selected text rendered inline and exposed in a popover while clipped, unless `summary` replaces it. */ readonly text: string /** Readable replacement for `text`: its label renders inline and its popover opens on every hover. */ readonly summary?: QuoteSummary | undefined /** Composer-only removal action; omit for inert sent quotes. */ readonly removal?: QuotePreviewRemoval | undefined }
- **[ast-signature-changed]** `packages/client/ui-primitives/src/QuotePreview.tsx` — 签名变化: QuotePreview
    旧: function({ text, removal }:QuotePreviewProps)
    新: function({ text, summary, removal }:QuotePreviewProps)
- **[ast-signature-changed]** `packages/client/ui-primitives/src/code-file-types.ts` — 签名变化: FILE_NAME_TYPES
    旧: var:Readonly<Record<string, CodeFileType>>
    新: var:ReadonlyMap<string, CodeFileType>

## breaking

- **[package-removed]** `packages/api/account-controller` — 包被移除或不再是独立包
- **[package-removed]** `packages/credentials/deepseek-account-platform` — 包被移除或不再是独立包
- **[package-removed]** `packages/document/office-to-pdf` — 包被移除或不再是独立包
- **[package-removed]** `packages/experimental/agent-team` — 包被移除或不再是独立包
- **[package-removed]** `packages/experimental/agent-team-profile` — 包被移除或不再是独立包
- **[package-removed]** `packages/experimental/client-ui-agent-team` — 包被移除或不再是独立包
- **[package-removed]** `packages/experimental/tool-agent-team` — 包被移除或不再是独立包
- **[package-removed]** `packages/web/web-search-exa` — 包被移除或不再是独立包
- **[package-removed]** `packages/web/web-search-perplexity` — 包被移除或不再是独立包
- ★ **[doc-removed]** `docs/subsystems/office-to-pdf.md` — 契约文档被删除/改名
- ★ **[doc-removed]** `docs/subsystems/office-to-pdf.zh.md` — 契约文档被删除/改名
- **[config-scope-removed]** `config:@deepseek-ai/dsh-deepseek-account-platform` — 该包从配置目录移除，其 cordis.yml config 块不再可用
- **[config-scope-removed]** `config:@deepseek-ai/dsh-experimental-agent-team` — 该包从配置目录移除，其 cordis.yml config 块不再可用
- **[config-scope-removed]** `config:@deepseek-ai/dsh-experimental-tool-agent-team` — 该包从配置目录移除，其 cordis.yml config 块不再可用
- **[config-scope-removed]** `config:@deepseek-ai/dsh-office-to-pdf` — 该包从配置目录移除，其 cordis.yml config 块不再可用
- **[config-scope-removed]** `config:@deepseek-ai/dsh-web-search-exa` — 该包从配置目录移除，其 cordis.yml config 块不再可用
- **[config-scope-removed]** `config:@deepseek-ai/dsh-web-search-perplexity` — 该包从配置目录移除，其 cordis.yml config 块不再可用
- **[ast-export-removed]** `packages/api/account-controller` — 导出（含 re-export）删除: AccountController（原声明于 packages/api/account-controller/src/index.ts）
- **[ast-export-removed]** `packages/boot/app-boot` — 导出（含 re-export）删除: proxyName（原声明于 packages/boot/app-boot/src/index.ts）
- **[ast-export-removed]** `packages/core/session` — 导出（含 re-export）删除: surfaceOpts（原声明于 packages/core/session/src/index.ts）
- **[ast-export-removed]** `packages/core/session` — 导出（含 re-export）删除: surfaceMetadata（原声明于 packages/core/session/src/index.ts）
- **[ast-export-removed]** `packages/core/session` — 导出（含 re-export）删除: surfaceMetadataSnapshot（原声明于 packages/core/session/src/index.ts）
- **[ast-export-removed]** `packages/credentials/deepseek-account-platform` — 导出（含 re-export）删除: PlatformAccount（原声明于 packages/credentials/deepseek-account-platform/src/index.ts）
- **[ast-export-removed]** `packages/credentials/deepseek-account-platform` — 导出（含 re-export）删除: accountId（原声明于 packages/credentials/deepseek-account-platform/src/index.ts）
- **[ast-export-removed]** `packages/credentials/deepseek-account-platform` — 导出（含 re-export）删除: bonuses（原声明于 packages/credentials/deepseek-account-platform/src/index.ts）
- **[ast-export-removed]** `packages/credentials/deepseek-account-platform` — 导出（含 re-export）删除: wakeUp（原声明于 packages/credentials/deepseek-account-platform/src/index.ts）
- **[ast-export-removed]** `packages/credentials/deepseek-account` — 导出（含 re-export）删除: mergePlatformCookies（原声明于 packages/credentials/deepseek-account/src/index.ts）
- **[ast-export-removed]** `packages/credentials/deepseek-account` — 导出（含 re-export）删除: desktopClientHeaders（原声明于 packages/credentials/deepseek-account/src/index.ts）
- **[ast-export-removed]** `packages/credentials/deepseek-account` — 导出（含 re-export）删除: platformClientHeaders（原声明于 packages/credentials/deepseek-account/src/index.ts）
- **[ast-export-removed]** `packages/credentials/deepseek-account` — 导出（含 re-export）删除: platformWireLocale（原声明于 packages/credentials/deepseek-account/src/index.ts）
- **[ast-export-removed]** `packages/document/office-to-pdf` — 导出（含 re-export）删除: OfficeToPdf（原声明于 packages/document/office-to-pdf/src/index.ts）
- **[ast-export-removed]** `packages/document/office-to-pdf` — 导出（含 re-export）删除: pdf（原声明于 packages/document/office-to-pdf/src/index.ts）
- **[ast-export-removed]** `packages/experimental/agent-team` — 导出（含 re-export）删除: DEFAULT_MAX_MEMBERS（原声明于 packages/experimental/agent-team/src/index.ts）
- **[ast-export-removed]** `packages/experimental/agent-team` — 导出（含 re-export）删除: DEFAULT_DISPOSAL_TIMEOUT_MS（原声明于 packages/experimental/agent-team/src/index.ts）
- **[ast-export-removed]** `packages/experimental/agent-team` — 导出（含 re-export）删除: teamProjectionHandle（原声明于 packages/experimental/agent-team/src/index.ts）
- **[ast-export-removed]** `packages/experimental/tool-agent-team` — 导出（含 re-export）删除: teamPolicy（原声明于 packages/experimental/tool-agent-team/src/index.ts）
- **[ast-export-removed]** `packages/experimental/tool-agent-team` — 导出（含 re-export）删除: ACTIVE_WAIT_STATUSES（原声明于 packages/experimental/tool-agent-team/src/index.ts）
- **[ast-export-removed]** `packages/experimental/tool-agent-team` — 导出（含 re-export）删除: NO_ACTIVE_PEER_MESSAGE（原声明于 packages/experimental/tool-agent-team/src/index.ts）
- **[ast-export-removed]** `packages/experimental/tool-agent-team` — 导出（含 re-export）删除: MEMBER_VIEW_SCHEMA（原声明于 packages/experimental/tool-agent-team/src/index.ts）
- **[ast-export-removed]** `packages/experimental/tool-agent-team` — 导出（含 re-export）删除: modelMember（原声明于 packages/experimental/tool-agent-team/src/index.ts）
- **[ast-export-removed]** `packages/experimental/tool-agent-team` — 导出（含 re-export）删除: SPAWN_VALUE_SCHEMA（原声明于 packages/experimental/tool-agent-team/src/index.ts）
- **[ast-export-removed]** `packages/experimental/tool-agent-team` — 导出（含 re-export）删除: MEMBER_LIST_VALUE_SCHEMA（原声明于 packages/experimental/tool-agent-team/src/index.ts）
- **[ast-export-removed]** `packages/experimental/tool-agent-team` — 导出（含 re-export）删除: SEND_VALUE_SCHEMA（原声明于 packages/experimental/tool-agent-team/src/index.ts）
- **[ast-export-removed]** `packages/experimental/tool-agent-team` — 导出（含 re-export）删除: WAIT_VALUE_SCHEMA（原声明于 packages/experimental/tool-agent-team/src/index.ts）
- **[ast-export-removed]** `packages/experimental/tool-agent-team` — 导出（含 re-export）删除: INTERRUPT_VALUE_SCHEMA（原声明于 packages/experimental/tool-agent-team/src/index.ts）
- **[ast-export-removed]** `packages/experimental/tool-agent-team` — 导出（含 re-export）删除: hasActivePeer（原声明于 packages/experimental/tool-agent-team/src/index.ts）
- **[ast-export-removed]** `packages/experimental/tool-agent-team` — 导出（含 re-export）删除: maybeInstall（原声明于 packages/experimental/tool-agent-team/src/index.ts）
- **[ast-export-removed]** `packages/experimental/worktree` — 导出（含 re-export）删除: actualRoot（原声明于 packages/experimental/worktree/src/index.ts）
- **[ast-export-removed]** `packages/experimental/worktree` — 导出（含 re-export）删除: recordedPath（原声明于 packages/experimental/worktree/src/index.ts）
- **[ast-export-removed]** `packages/mcp/mcp-client` — 导出（含 re-export）删除: Reconnect（原声明于 packages/mcp/mcp-client/src/index.ts）
- **[ast-export-removed]** `packages/sandbox/sandbox-policy` — 导出（含 re-export）删除: resolveWorkspaceRoot（原声明于 packages/sandbox/sandbox-policy/src/index.ts）
- **[ast-export-removed]** `packages/sandbox/sandbox` — 导出（含 re-export）删除: SandboxUnsupportedPolicyError（原声明于 packages/sandbox/sandbox/src/index.ts）
- **[ast-export-removed]** `packages/skill/skill-office` — 导出（含 re-export）删除: officeRuntime（原声明于 packages/skill/skill-office/src/index.ts）
- **[ast-export-removed]** `packages/test-support/llm-replay` — 导出（含 re-export）删除: inferStartedSubagents（原声明于 packages/test-support/llm-replay/src/index.ts）
- **[ast-export-removed]** `packages/web/web-deepseek-api` — 导出（含 re-export）删除: keyConfig（原声明于 packages/web/web-deepseek-api/src/index.ts）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: reasonId（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: explained（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: isSeparator（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: isLabel（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: iconColumns（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: aligned（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: MEASURE_STYLE（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: lastAnchorRect（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: readAnchor（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: anchorElement（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: fixedPos（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: scrollable（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: subOpen（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: subColumns（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: collapseSubmenuFrom（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/useAnchoredPosition.ts` — 导出（含 re-export）删除: AnchoredPositionOptions（原声明于 packages/client/ui-primitives/src/useAnchoredPosition.ts）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/useAnchoredPosition.ts` — 导出（含 re-export）删除: useAnchoredPosition（原声明于 packages/client/ui-primitives/src/useAnchoredPosition.ts）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/useAnchoredPosition.ts` — 导出（含 re-export）删除: lastRect（原声明于 packages/client/ui-primitives/src/useAnchoredPosition.ts）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/useAnchoredPosition.ts` — 导出（含 re-export）删除: readRect（原声明于 packages/client/ui-primitives/src/useAnchoredPosition.ts）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/useAnchoredPosition.ts` — 导出（含 re-export）删除: x（原声明于 packages/client/ui-primitives/src/useAnchoredPosition.ts）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/useAnchoredPosition.ts` — 导出（含 re-export）删除: y（原声明于 packages/client/ui-primitives/src/useAnchoredPosition.ts）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/useAnchoredPosition.ts` — 导出（含 re-export）删除: panelWidth（原声明于 packages/client/ui-primitives/src/useAnchoredPosition.ts）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/useAnchoredPosition.ts` — 导出（含 re-export）删除: panelHeight（原声明于 packages/client/ui-primitives/src/useAnchoredPosition.ts）
- **[ast-export-removed]** `packages/credentials/deepseek-account/src/types.ts` — 导出（含 re-export）删除: AccountBonusOrderId（原声明于 packages/credentials/deepseek-account/src/types.ts）
- **[ast-export-removed]** `packages/credentials/deepseek-account/src/types.ts` — 导出（含 re-export）删除: AccountBonusNotification（原声明于 packages/credentials/deepseek-account/src/types.ts）
- **[ast-export-removed]** `packages/credentials/deepseek-account/src/types.ts` — 导出（含 re-export）删除: AccountBonusBatch（原声明于 packages/credentials/deepseek-account/src/types.ts）
- **[ast-export-removed]** `packages/credentials/deepseek-account/src/account-tasks.ts` — 导出（含 re-export）删除: isRunningAccountTask（原声明于 packages/credentials/deepseek-account/src/account-tasks.ts）
- **[ast-export-removed]** `packages/credentials/deepseek-account/src/account-tasks.ts` — 导出（含 re-export）删除: installAccountTaskCancellation（原声明于 packages/credentials/deepseek-account/src/account-tasks.ts）
- **[ast-export-removed]** `packages/document/office-to-pdf/src/errors.ts` — 导出（含 re-export）删除: OfficeToPdfError（原声明于 packages/document/office-to-pdf/src/errors.ts）
- **[ast-export-removed]** `packages/document/office-to-pdf/src/identity.ts` — 导出（含 re-export）删除: OfficeToPdfGeneration（原声明于 packages/document/office-to-pdf/src/identity.ts）
- **[ast-export-removed]** `packages/document/office-to-pdf/src/identity.ts` — 导出（含 re-export）删除: OfficeToPdfKey（原声明于 packages/document/office-to-pdf/src/identity.ts）
- **[ast-export-removed]** `packages/document/office-to-pdf/src/types.ts` — 导出（含 re-export）删除: OfficeToPdfPriority（原声明于 packages/document/office-to-pdf/src/types.ts）
- **[ast-export-removed]** `packages/document/office-to-pdf/src/types.ts` — 导出（含 re-export）删除: OfficeToPdfRequest（原声明于 packages/document/office-to-pdf/src/types.ts）
- **[ast-export-removed]** `packages/document/office-to-pdf/src/types.ts` — 导出（含 re-export）删除: OfficeToPdfResult（原声明于 packages/document/office-to-pdf/src/types.ts）
- **[ast-export-removed]** `packages/document/office-to-pdf/src/types.ts` — 导出（含 re-export）删除: OfficeToPdfErrorCode（原声明于 packages/document/office-to-pdf/src/types.ts）
- **[ast-export-removed]** `packages/experimental/agent-team/src/types.ts` — 导出（含 re-export）删除: TeamMemberView（原声明于 packages/experimental/agent-team/src/types.ts）
- **[ast-export-removed]** `packages/experimental/agent-team/src/types.ts` — 导出（含 re-export）删除: TeamMemberProjection（原声明于 packages/experimental/agent-team/src/types.ts）
- **[ast-export-removed]** `packages/experimental/agent-team/src/types.ts` — 导出（含 re-export）删除: SpawnTeammateRequest（原声明于 packages/experimental/agent-team/src/types.ts）
- **[ast-export-removed]** `packages/experimental/agent-team/src/types.ts` — 导出（含 re-export）删除: SpawnTeammateResult（原声明于 packages/experimental/agent-team/src/types.ts）
- **[ast-export-removed]** `packages/experimental/agent-team/src/types.ts` — 导出（含 re-export）删除: SendTeamMessageRequest（原声明于 packages/experimental/agent-team/src/types.ts）
- **[ast-export-removed]** `packages/experimental/agent-team/src/types.ts` — 导出（含 re-export）删除: SendTeamMessageResult（原声明于 packages/experimental/agent-team/src/types.ts）
- **[ast-export-removed]** `packages/experimental/agent-team/src/types.ts` — 导出（含 re-export）删除: TeamWaitResult（原声明于 packages/experimental/agent-team/src/types.ts）
- **[ast-export-removed]** `packages/experimental/agent-team/src/roster.ts` — 导出（含 re-export）删除: MEMBER_NAME（原声明于 packages/experimental/agent-team/src/roster.ts）
- **[ast-export-removed]** `packages/experimental/agent-team/src/roster.ts` — 导出（含 re-export）删除: TeamMembership（原声明于 packages/experimental/agent-team/src/roster.ts）
- **[ast-export-removed]** `packages/experimental/agent-team/src/roster.ts` — 导出（含 re-export）删除: resolveActiveMember（原声明于 packages/experimental/agent-team/src/roster.ts）
- **[ast-export-removed]** `packages/experimental/agent-team/src/roster.ts` — 导出（含 re-export）删除: TeamRoster（原声明于 packages/experimental/agent-team/src/roster.ts）
- **[ast-export-removed]** `packages/experimental/agent-team/src/roster.ts` — 导出（含 re-export）删除: previousStatus（原声明于 packages/experimental/agent-team/src/roster.ts）
- **[ast-export-removed]** `packages/experimental/agent-team/src/roster.ts` — 导出（含 re-export）删除: teams（原声明于 packages/experimental/agent-team/src/roster.ts）
- **[ast-export-removed]** `packages/experimental/agent-team/src/roster.ts` — 导出（含 re-export）删除: rootId（原声明于 packages/experimental/agent-team/src/roster.ts）
- **[ast-export-removed]** `packages/experimental/agent-team/src/roster.ts` — 导出（含 re-export）删除: settledPhase（原声明于 packages/experimental/agent-team/src/roster.ts）
- **[ast-export-removed]** `packages/experimental/agent-team/src/roster.ts` — 导出（含 re-export）删除: progress（原声明于 packages/experimental/agent-team/src/roster.ts）
- **[ast-export-removed]** `packages/experimental/agent-team/src/roster.ts` — 导出（含 re-export）删除: stopEvent（原声明于 packages/experimental/agent-team/src/roster.ts）
- **[ast-export-removed]** `packages/experimental/agent-team/src/roster.ts` — 导出（含 re-export）删除: stopDisposed（原声明于 packages/experimental/agent-team/src/roster.ts）
- **[ast-export-removed]** `packages/experimental/agent-team/src/roster.ts` — 导出（含 re-export）删除: provisioning（原声明于 packages/experimental/agent-team/src/roster.ts）
- **[ast-export-removed]** `packages/experimental/agent-team/src/roster.ts` — 导出（含 re-export）删除: acceptedInitialPrompt（原声明于 packages/experimental/agent-team/src/roster.ts）
- **[ast-export-removed]** `packages/experimental/liveshare/src/host/share-host.ts` — 导出（含 re-export）删除: viewerDeclarations（原声明于 packages/experimental/liveshare/src/host/share-host.ts）
- **[ast-export-removed]** `packages/experimental/liveshare/src/host/viewer-declarations.ts` — 导出（含 re-export）删除: VIEWER_DECLARATIONS_SERVICE（原声明于 packages/experimental/liveshare/src/host/viewer-declarations.ts）
- **[ast-export-removed]** `packages/experimental/liveshare/src/host/viewer-declarations.ts` — 导出（含 re-export）删除: ViewerCapabilityGroup（原声明于 packages/experimental/liveshare/src/host/viewer-declarations.ts）
- **[ast-export-removed]** `packages/experimental/liveshare/src/host/viewer-declarations.ts` — 导出（含 re-export）删除: CapabilityKind（原声明于 packages/experimental/liveshare/src/host/viewer-declarations.ts）
- **[ast-export-removed]** `packages/experimental/liveshare/src/host/viewer-declarations.ts` — 导出（含 re-export）删除: DeclarationKind（原声明于 packages/experimental/liveshare/src/host/viewer-declarations.ts）
- **[ast-export-removed]** `packages/experimental/liveshare/src/host/viewer-declarations.ts` — 导出（含 re-export）删除: ViewerDeclarationsSurface（原声明于 packages/experimental/liveshare/src/host/viewer-declarations.ts）
- **[ast-export-removed]** `packages/experimental/liveshare/src/host/viewer-declarations.ts` — 导出（含 re-export）删除: isViewerDeclarationsSurface（原声明于 packages/experimental/liveshare/src/host/viewer-declarations.ts）
- **[ast-export-removed]** `packages/experimental/liveshare/src/host/viewer-declarations.ts` — 导出（含 re-export）删除: isDeclaredEndpoint（原声明于 packages/experimental/liveshare/src/host/viewer-declarations.ts）
- **[ast-export-removed]** `packages/experimental/liveshare/src/host/viewer-declarations.ts` — 导出（含 re-export）删除: acceptedEndpoints（原声明于 packages/experimental/liveshare/src/host/viewer-declarations.ts）
- **[ast-export-removed]** `packages/experimental/liveshare/src/host/viewer-declarations.ts` — 导出（含 re-export）删除: owningPackageOf（原声明于 packages/experimental/liveshare/src/host/viewer-declarations.ts）
- **[ast-export-removed]** `packages/experimental/liveshare/src/host/viewer-declarations.ts` — 导出（含 re-export）删除: declaringPackage（原声明于 packages/experimental/liveshare/src/host/viewer-declarations.ts）
- **[ast-export-removed]** `packages/experimental/liveshare/src/host/viewer-declarations.ts` — 导出（含 re-export）删除: declaring（原声明于 packages/experimental/liveshare/src/host/viewer-declarations.ts）
- **[ast-export-removed]** `packages/experimental/liveshare/src/host/viewer-declarations.ts` — 导出（含 re-export）删除: ViewerDeclarations（原声明于 packages/experimental/liveshare/src/host/viewer-declarations.ts）
- **[ast-export-removed]** `packages/experimental/liveshare/src/host/viewer-declarations.ts` — 导出（含 re-export）删除: byPlugin（原声明于 packages/experimental/liveshare/src/host/viewer-declarations.ts）
- **[ast-export-removed]** `packages/experimental/liveshare/src/host/viewer-declarations.ts` — 导出（含 re-export）删除: viewerDeclarationsOf（原声明于 packages/experimental/liveshare/src/host/viewer-declarations.ts）
- **[ast-export-removed]** `packages/llm/llm/src/content.ts` — 导出（含 re-export）删除: activeNames（原声明于 packages/llm/llm/src/content.ts）
- **[ast-export-removed]** `packages/llm/llm/src/content.ts` — 导出（含 re-export）删除: messageIds（原声明于 packages/llm/llm/src/content.ts）
- **[ast-export-removed]** `packages/mcp/mcp-client/src/connection.ts` — 导出（含 re-export）删除: GENERATION_CLOSE_TIMEOUT_MS（原声明于 packages/mcp/mcp-client/src/connection.ts）
- **[ast-export-removed]** `packages/mcp/mcp-client/src/connection.ts` — 导出（含 re-export）删除: incompleteDisposalMessage（原声明于 packages/mcp/mcp-client/src/connection.ts）
- **[ast-export-removed]** `packages/mcp/mcp-client/src/connection.ts` — 导出（含 re-export）删除: opts（原声明于 packages/mcp/mcp-client/src/connection.ts）
- **[ast-export-removed]** `packages/mcp/mcp-client/src/connection.ts` — 导出（含 re-export）删除: startupOpts（原声明于 packages/mcp/mcp-client/src/connection.ts）
- **[ast-export-removed]** `packages/mcp/mcp-client/src/connection.ts` — 导出（含 re-export）删除: closeClient（原声明于 packages/mcp/mcp-client/src/connection.ts）
- **[ast-export-removed]** `packages/mcp/mcp-client/src/connection.ts` — 导出（含 re-export）删除: connectedAt（原声明于 packages/mcp/mcp-client/src/connection.ts）
- **[ast-export-removed]** `packages/mcp/mcp-client/src/connection.ts` — 导出（含 re-export）删除: firstAttemptError（原声明于 packages/mcp/mcp-client/src/connection.ts）
- **[ast-export-removed]** `packages/mcp/mcp-client/src/connection.ts` — 导出（含 re-export）删除: generationDown（原声明于 packages/mcp/mcp-client/src/connection.ts）
- **[ast-export-removed]** `packages/mcp/mcp-client/src/connection.ts` — 导出（含 re-export）删除: settleFailedGeneration（原声明于 packages/mcp/mcp-client/src/connection.ts）
- **[ast-export-removed]** `packages/mcp/mcp-client/src/connection.ts` — 导出（含 re-export）删除: waitForClose（原声明于 packages/mcp/mcp-client/src/connection.ts）
- **[ast-export-removed]** `packages/mcp/mcp-client/src/connection.ts` — 导出（含 re-export）删除: lostEstablishedConnection（原声明于 packages/mcp/mcp-client/src/connection.ts）
- **[ast-export-removed]** `packages/mcp/mcp-client/src/connection.ts` — 导出（含 re-export）删除: attemptSettled（原声明于 packages/mcp/mcp-client/src/connection.ts）
- **[ast-export-removed]** `packages/mcp/mcp-client/src/connection.ts` — 导出（含 re-export）删除: closeObserved（原声明于 packages/mcp/mcp-client/src/connection.ts）
- **[ast-export-removed]** `packages/mcp/mcp-client/src/connection.ts` — 导出（含 re-export）删除: hasClosed（原声明于 packages/mcp/mcp-client/src/connection.ts）
- **[ast-export-removed]** `packages/mcp/mcp-client/src/connection.ts` — 导出（含 re-export）删除: closeGeneration（原声明于 packages/mcp/mcp-client/src/connection.ts）
- **[ast-export-removed]** `packages/mcp/mcp-client/src/connection.ts` — 导出（含 re-export）删除: serverText（原声明于 packages/mcp/mcp-client/src/connection.ts）
- **[ast-export-removed]** `packages/mcp/mcp-client/src/connection.ts` — 导出（含 re-export）删除: quiesced（原声明于 packages/mcp/mcp-client/src/connection.ts）
- **[ast-export-removed]** `packages/sdk/server/src/server.ts` — 导出（含 re-export）删除: subagentParentOf（原声明于 packages/sdk/server/src/server.ts）
- **[ast-export-removed]** `packages/sdk/server/src/server.ts` — 导出（含 re-export）删除: liveAgents（原声明于 packages/sdk/server/src/server.ts）
- **[ast-signature-changed]** `packages/experimental/deepseek-chat-import/src/conversation.ts` — 签名变化: toolResult
    旧: function(data:{ readonly message: ToolResultMessage readonly error?: { readonly name: string; readonly code: string; readonly reason?: string } })
    新: function(id:string,call:PendingCall)
- **[ast-export-removed]** `packages/subagent/subagent/src/catalog.ts` — 导出（含 re-export）删除: EXTERNAL_SUBAGENT_CATALOG_VERSION（原声明于 packages/subagent/subagent/src/catalog.ts）
- **[ast-export-removed]** `packages/subagent/subagent/src/child-agent.ts` — 导出（含 re-export）删除: ChildCreateInputs（原声明于 packages/subagent/subagent/src/child-agent.ts）
- **[ast-export-removed]** `packages/subagent/subagent/src/continuation-messages.ts` — 导出（含 re-export）删除: withContinuableReturnGuidance（原声明于 packages/subagent/subagent/src/continuation-messages.ts）
- **[ast-export-removed]** `packages/subagent/subagent/src/continuation-messages.ts` — 导出（含 re-export）删除: encodedParentId（原声明于 packages/subagent/subagent/src/continuation-messages.ts）
- **[ast-signature-changed]** `packages/subagent/subagent/src/control-types.ts` — 签名变化: SubagentCatalogRow
    旧: export type SubagentCatalogRow = & { /** The durable child session id, stable across Activations. */ readonly id: SessionId /** * Whether recursive catalog listing observed a resident Session. This * does not encode a durable outcome or guarantee continuation delivery. */ readonly activity: 'running' | 'inactive' } & ( | { /** A terminal one-shot child. */ readonly mode: 'one-shot' /** Optional durable creation label from the parent catalog. */ readonly label?: string } | { /** An external execution without a local child Session. */ readonly mode: 'external' /** Optional durable creation label from the parent catalog. */ readonly label?: string } | { /** A resumable conversation. */ readonly mode: 'continuable' /** Durable creation label from the parent catalog. */ readonly label: string } )
    新: export type SubagentCatalogRow = & { /** The durable child session id, stable across Activations. */ readonly id: SessionId /** * Whether recursive catalog listing observed a resident Session. This * does not encode a durable outcome or guarantee continuation delivery. */ readonly activity: 'running' | 'inactive' } & KnownSubagentCatalogFields
- **[ast-export-removed]** `packages/test-support/session-snapshot/src/suite.ts` — 导出（含 re-export）删除: normalizedRefreshRecord（原声明于 packages/test-support/session-snapshot/src/suite.ts）
- **[ast-export-removed]** `packages/web/web-deepseek-api/src/search.ts` — 导出（含 re-export）删除: DEEPSEEK_WEB_API_GUIDANCE（原声明于 packages/web/web-deepseek-api/src/search.ts）
- **[ast-export-removed]** `packages/web/web-search-exa/src/provider.ts` — 导出（含 re-export）删除: EXA_PROVIDER_ID（原声明于 packages/web/web-search-exa/src/provider.ts）
- **[ast-export-removed]** `packages/web/web-search-exa/src/provider.ts` — 导出（含 re-export）删除: EXA_DEFAULT_BASE_URL（原声明于 packages/web/web-search-exa/src/provider.ts）
- **[ast-export-removed]** `packages/web/web-search-exa/src/provider.ts` — 导出（含 re-export）删除: EXA_DEFAULT_SEARCH_TYPE（原声明于 packages/web/web-search-exa/src/provider.ts）
- **[ast-export-removed]** `packages/web/web-search-exa/src/provider.ts` — 导出（含 re-export）删除: EXA_DEFAULT_HIGHLIGHTS_PER_RESULT（原声明于 packages/web/web-search-exa/src/provider.ts）
- **[ast-export-removed]** `packages/web/web-search-exa/src/provider.ts` — 导出（含 re-export）删除: ExaSearchProviderOptions（原声明于 packages/web/web-search-exa/src/provider.ts）
- **[ast-export-removed]** `packages/web/web-search-exa/src/provider.ts` — 导出（含 re-export）删除: mapExaResult（原声明于 packages/web/web-search-exa/src/provider.ts）
- **[ast-export-removed]** `packages/web/web-search-exa/src/provider.ts` — 导出（含 re-export）删除: mapExaResponse（原声明于 packages/web/web-search-exa/src/provider.ts）
- **[ast-export-removed]** `packages/web/web-search-exa/src/provider.ts` — 导出（含 re-export）删除: ExaSearchProvider（原声明于 packages/web/web-search-exa/src/provider.ts）
- **[ast-export-removed]** `packages/web/web-search-exa/src/provider.ts` — 导出（含 re-export）删除: numResults（原声明于 packages/web/web-search-exa/src/provider.ts）
- **[ast-export-removed]** `packages/web/web-search-exa/src/provider.ts` — 导出（含 re-export）删除: isValidBaseUrl（原声明于 packages/web/web-search-exa/src/provider.ts）
- **[ast-export-removed]** `packages/web/web-search-perplexity/src/provider.ts` — 导出（含 re-export）删除: PERPLEXITY_PROVIDER_ID（原声明于 packages/web/web-search-perplexity/src/provider.ts）
- **[ast-export-removed]** `packages/web/web-search-perplexity/src/provider.ts` — 导出（含 re-export）删除: PERPLEXITY_DEFAULT_BASE_URL（原声明于 packages/web/web-search-perplexity/src/provider.ts）
- **[ast-export-removed]** `packages/web/web-search-perplexity/src/provider.ts` — 导出（含 re-export）删除: PERPLEXITY_DEFAULT_MODEL（原声明于 packages/web/web-search-perplexity/src/provider.ts）
- **[ast-export-removed]** `packages/web/web-search-perplexity/src/provider.ts` — 导出（含 re-export）删除: PERPLEXITY_DEFAULT_MAX_TOKENS（原声明于 packages/web/web-search-perplexity/src/provider.ts）
- **[ast-export-removed]** `packages/web/web-search-perplexity/src/provider.ts` — 导出（含 re-export）删除: PerplexityRecency（原声明于 packages/web/web-search-perplexity/src/provider.ts）
- **[ast-export-removed]** `packages/web/web-search-perplexity/src/provider.ts` — 导出（含 re-export）删除: PerplexitySearchProviderOptions（原声明于 packages/web/web-search-perplexity/src/provider.ts）
- **[ast-export-removed]** `packages/web/web-search-perplexity/src/provider.ts` — 导出（含 re-export）删除: mapPerplexityResult（原声明于 packages/web/web-search-perplexity/src/provider.ts）
- **[ast-export-removed]** `packages/web/web-search-perplexity/src/provider.ts` — 导出（含 re-export）删除: mapPerplexityResponse（原声明于 packages/web/web-search-perplexity/src/provider.ts）
- **[ast-export-removed]** `packages/web/web-search-perplexity/src/provider.ts` — 导出（含 re-export）删除: PerplexitySearchProvider（原声明于 packages/web/web-search-perplexity/src/provider.ts）
- **[config-field-removed]** `config:@deepseek-ai/dsh-client-ui-settings-account` — 配置字段被删除: bonusAckRetryDelayMs（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-client-ui-settings-account` — 配置字段被删除: bonusAckRetryMaxDelayMs（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-deepseek-account-platform` — 配置字段被删除: platformOrigin（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-deepseek-account-platform` — 配置字段被删除: desktopPlatform（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-deepseek-account-platform` — 配置字段被删除: embeddedPageDist（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-deepseek-account-platform` — 配置字段被删除: inferenceOrigin（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-deepseek-account-platform` — 配置字段被删除: allowLoopbackHttp（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-deepseek-account-platform` — 配置字段被删除: rewriteBrowserOrigin（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-deepseek-account-platform` — 配置字段被删除: requestHeaders（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-deepseek-account-platform` — 配置字段被删除: accountRequestHeaders（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-deepseek-account-platform` — 配置字段被删除: requestTimeoutMs（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-deepseek-account-platform` — 配置字段被删除: balanceTimeoutMs（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-deepseek-account-platform` — 配置字段被删除: logoutMaxRetries（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-deepseek-account-platform` — 配置字段被删除: logoutRetryDelayMs（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-deepseek-account-platform` — 配置字段被删除: attemptTimeoutMs（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-experimental-browser-use-stagehand-native` — 配置字段被删除: extensionId（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-office-to-pdf` — 配置字段被删除: maxConcurrentConversions（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-office-to-pdf` — 配置字段被删除: maxQueuedJobs（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-office-to-pdf` — 配置字段被删除: maxReaders（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-office-to-pdf` — 配置字段被删除: maxSourceBytes（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-office-to-pdf` — 配置字段被删除: maxBackgroundConversions（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-office-to-pdf` — 配置字段被删除: maxCachedEntries（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-office-to-pdf` — 配置字段被删除: maxCachedBytes（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-office-to-pdf` — 配置字段被删除: maxSourceEntries（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-office-to-pdf` — 配置字段被删除: timeoutMs（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-office-to-pdf` — 配置字段被删除: maxInputBytes（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-office-to-pdf` — 配置字段被删除: maxOutputBytes（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-office-to-pdf` — 配置字段被删除: maxImageResolution（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-office-to-pdf` — 配置字段被删除: maxArchiveEntries（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-office-to-pdf` — 配置字段被删除: maxUncompressedBytes（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-office-to-pdf` — 配置字段被删除: fontDirectories（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-office-to-pdf` — 配置字段被删除: fontFallbacks（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-office-to-pdf` — 配置字段被删除: maxFontFiles（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-office-to-pdf` — 配置字段被删除: maxFontFileBytes（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-office-to-pdf` — 配置字段被删除: maxLoadedFontBytes（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-skill-office` — 配置字段被删除: node（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-skill-office` — 配置字段被删除: cli（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-web-deepseek-api` — 配置字段被删除: apiKey（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-web-deepseek-api` — 配置字段被删除: apiKeyEnv（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-web-deepseek-api` — 配置字段被删除: baseURL（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-web-search-exa` — 配置字段被删除: apiKey（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-web-search-exa` — 配置字段被删除: baseURL（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-web-search-exa` — 配置字段被删除: searchType（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-web-search-exa` — 配置字段被删除: numResults（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-web-search-exa` — 配置字段被删除: highlightsPerResult（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-web-search-perplexity` — 配置字段被删除: apiKey（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-web-search-perplexity` — 配置字段被删除: baseURL（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-web-search-perplexity` — 配置字段被删除: model（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-web-search-perplexity` — 配置字段被删除: maxTokens（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-web-search-perplexity` — 配置字段被删除: searchRecency（cordis.yml 里写这些字段将失效）

## warning

- **[exports-map-changed]** `packages/client/ui-brand-official/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/credentials/deepseek-account/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/experimental/cua/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/experimental/liveshare/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/experimental/worktree/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/mcp/mcp-client/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/subagent/subagent/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/web/web/package.json` — package.json exports 字段变化，请人工确认入口路径
- ★ **[doc-major-rewrite]** `docs/subsystems/forge.md` — 行数 1051 -> 1780（69%），可能存在行为级变更，建议人工复核
- ★ **[doc-major-rewrite]** `docs/subsystems/forge.zh.md` — 行数 1051 -> 1781（69%），可能存在行为级变更，建议人工复核
- ★ **[doc-major-rewrite]** `docs/subsystems/mcp.md` — 行数 94 -> 173（84%），可能存在行为级变更，建议人工复核
- ★ **[doc-major-rewrite]** `docs/subsystems/mcp.zh.md` — 行数 94 -> 173（84%），可能存在行为级变更，建议人工复核
- ★ **[doc-major-rewrite]** `docs/subsystems/working-directory.md` — 行数 45 -> 68（51%），可能存在行为级变更，建议人工复核
- ★ **[doc-major-rewrite]** `docs/subsystems/working-directory.zh.md` — 行数 45 -> 68（51%），可能存在行为级变更，建议人工复核
- ★ **[doc-major-rewrite]** `docs/subsystems/worktrees.md` — 行数 103 -> 148（44%），可能存在行为级变更，建议人工复核
- ★ **[doc-major-rewrite]** `docs/subsystems/worktrees.zh.md` — 行数 103 -> 148（44%），可能存在行为级变更，建议人工复核
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/agent-runtime-owner/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/agent-runtime-owner/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/agent-team-subagents/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/agent-team-subagents/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/session-team-mode/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/session-team-mode/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/subagent-activation-options/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/subagent-activation-options/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/subagent-service-methods/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/subagent-service-methods/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/subagent-user-controls/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/subagent-user-controls/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/inbox-only-agent-wait/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/inbox-only-agent-wait/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/subagent-runtime-ownership/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/subagent-runtime-ownership/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/team-mode-menu/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/team-mode-menu/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/team-projection/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/team-projection/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/web-search-defaults/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/web-search-defaults/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.4/sandbox-unsupported-policy-error/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.4/sandbox-unsupported-policy-error/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/css-anchored-menus/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/css-anchored-menus/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/cua-source-dev-helper/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/cua-source-dev-helper/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/desktop-stable-channel/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/desktop-stable-channel/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/llm-error-builtin-codes/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/llm-error-builtin-codes/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/retained-ptc-timeout/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/retained-ptc-timeout/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/session-header-menu/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/session-header-menu/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/subagent-explicit-reasoning/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/subagent-explicit-reasoning/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/web-search-credential-modes/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/web-search-credential-modes/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/web-search-default-provider/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/web-search-default-provider/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.3/chat-process-activity-context/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.3/chat-process-activity-context/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.3/office-kit-package/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.3/office-kit-package/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.3/office-operation-tools/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.3/office-operation-tools/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.3/office-skill-resources/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.3/office-skill-resources/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.3/subagent-names/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.3/subagent-names/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/account-notification-fields/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/account-notification-fields/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/account-remote-provider/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/account-remote-provider/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/archive-worktrees/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/archive-worktrees/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/attachment-error-codes/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/attachment-error-codes/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/cua-ax-read-limits/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/cua-ax-read-limits/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/cua-hover-ax-only/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/cua-hover-ax-only/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/cua-native-platform/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/cua-native-platform/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/dsh-doc-skill/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/dsh-doc-skill/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/forge-change-request-overview/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/forge-change-request-overview/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/forge-pinned-diff/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/forge-pinned-diff/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/forge-review-reads/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/forge-review-reads/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/plugin-update-method/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/plugin-update-method/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/runtime-context-reminders/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/runtime-context-reminders/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/session-append-overloads/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/session-append-overloads/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/subagent-interrupt-default/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/subagent-interrupt-default/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/terminal-backend-cleanup-error/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/terminal-backend-cleanup-error/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/terminal-bundle-sidebar-backend/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/terminal-bundle-sidebar-backend/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/web-search-billing/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/web-search-billing/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/window-drag-regions/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-rc.1/window-drag-regions/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[ast-signature-changed]** `packages/api/gateway` — 签名变化: pending
    旧: var
    新: var:PendingRemoteEvent
- **[ast-signature-changed]** `packages/web/web-deepseek-api` — 签名变化: assertNever
    旧: function(value:never,?context:string)
    新: function(value:never)
- **[ast-signature-changed]** `packages/api/terminal-controller` — 签名变化: OwnedSession
    旧: interface OwnedSession { readonly lifetime: AbortController readonly closedIds: Set<WebTerminalId> cleanup?: Promise<void> readonly terminals: Map<WebTerminalId, BrowserTerminal> readonly pending: Map<WebTerminalId, Promise<BrowserTerminal>> readonly allocations: Map<WebTerminalId, TerminalAllocation> }
    新: interface OwnedSession { readonly lifetime: AbortController readonly closedIds: Set<WebTerminalId> cleanup?: Promise<void> readonly terminals: Map<WebTerminalId, BrowserTerminal> readonly pending: Map<WebTerminalId, Promise<BrowserTerminal>> readonly allocations: Map<WebTerminalId, TerminalAllocation> /** Agent allocations not yet committed; with running Agent-controlled terminals, they count toward `maxAgentTerminals`. */ readonly agentPending: Set<WebTerminalId> }
- **[ast-signature-changed]** `packages/api/workspace-files` — 签名变化: info
    旧: var:WebTerminalInfo
    新: var
- **[ast-signature-changed]** `packages/workspace/workspace` — 签名变化: Events
    旧: interface Events { /** * Ask the composed providers what still runs for a session before it is * archived. A listener prepends its own {@link SessionActivity} entries to * the result of `next()`; the registry's innermost callback returns an * empty list, so a composition without providers archives freely. Any * non-empty result refuses the archive without a write. * @param request - the session about to be archived. * @param next - delegate to the remaining providers. * @mode waterfall */ 'workspace/session-activity'( request: SessionActivityRequest, next: () => Promise<readonly SessionActivity[]>, ): Promise<readonly SessionActivity[]> /** * Stop a session's running work because the caller archived it with * `stopActivity`; the archive set is durable when this dispatches. Each * provider stops its own families — cancelling a turn, its subagent * descendants, owned jobs, or active schedules — through the same cancel * paths the user's own stop actions use, so the session log ends every * open turn regularly and a later unarchive can continue the * conversation. Listeners issue their stop requests without waiting for * running work to settle; a listener may await its own durability * barrier. A rejection is logged by the registry and does not undo the * archive. * @param request - the session being archived. * @mode parallel */ 'workspace/session-stop'(request: SessionActivityRequest): Promise<void> | void }
    新: interface Events { /** * Ask the composed providers what still runs for a session before it is * archived. A listener prepends its own {@link SessionActivity} entries to * the result of `next()`; the registry's innermost callback returns an * empty list, so a composition without providers archives freely. Any * non-empty result refuses the archive without a write. * @param request - the session about to be archived. * @param next - delegate to the remaining providers. * @mode waterfall */ 'workspace/session-activity'( request: SessionActivityRequest, next: () => Promise<readonly SessionActivity[]>, ): Promise<readonly SessionActivity[]> /** * Stop a session's running work because the caller archived it with * `stopActivity`; the archive set is durable when this dispatches. Each * provider stops its own families — cancelling a turn, its subagent * descendants, owned jobs, or active schedules — through the same cancel * paths the user's own stop actions use, so the session log ends every * open turn regularly and a later unarchive can continue the * conversation. Listeners issue their stop requests without waiting for * running work to settle; a listener may await its own durability * barrier. A rejection is logged by the registry and does not undo the * archive. * @param request - the session being archived. * @mode parallel */ 'workspace/session-stop'(request: SessionActivityRequest): Promise<void> | void /** * Admit optional follow-up work after durable archival and any stop requests. * Dispatched inside the registry's write queue: a listener registers its work * and returns, and runs the work and any unbounded I/O afterwards. Listener * failures are logged without undoing archival. Listeners own and drain their background work. * @param request - newly archived Session; repeated archive requests do not dispatch. * @mode parallel */ 'workspace/session-archived'(request: SessionActivityRequest): Promise<void> | void /** * Cancel or settle archive follow-up work before making a Session available again. * A rejection retains the archived state. * @param request - Session about to leave the archive set. * @mode parallel */ 'workspace/session-unarchiving'(request: SessionActivityRequest): Promise<void> | void }
- **[ast-signature-changed]** `packages/skill/skill-office` — 签名变化: failed
    旧: function(exec:ToolExecution,error:unknown)
    新: function(skillName:string,error:unknown,persistent:boolean)
- **[ast-signature-changed]** `packages/boot/plugin-manager` — 签名变化: UpdateTarget
    旧: interface UpdateTarget<B> { bundle: B installed: string parsed: Extract<ParsedInstallSpec, { kind: 'registry' }> }
    新: type UpdateTarget<B> = | { kind: 'registry'; bundle: B; installed: string; parsed: Extract<ParsedInstallSpec, { kind: 'registry' }> } | { kind: 'git'; bundle: B; installed: string; source: string; origin: string }
- **[ast-signature-changed]** `packages/boot/plugin-manager` — 签名变化: read
    旧: var:object
    新: var:BundleInfo['meta']
- **[ast-signature-changed]** `packages/boot/plugin-market` — 签名变化: installationOf
    旧: function(name:string,version:string,bundles:readonly BundleInfo[])
    新: function(bundle:BundleInfo | undefined,version:string)
- **[ast-signature-changed]** `packages/client/ui-slots` — 签名变化: SlotKind
    旧: export type SlotKind = 'single' | 'list' | 'keyed' | 'chain'
    新: export type SlotKind = 'single' | 'list' | 'keyed' | 'chain' | 'hoc'
- **[ast-signature-changed]** `packages/client/ui-slots` — 签名变化: OrdinaryKeysOf
    旧: type OrdinaryKeysOf<S extends keyof SlotMap & string> = Exclude<S, ContextualKeysOf<S>>
    新: type OrdinaryKeysOf<S extends keyof SlotMap & string> = Exclude<S, ContextualKeysOf<S> | HocKeysOf<S>>
- **[ast-signature-changed]** `packages/client/ui-slots` — 签名变化: RenderSlotFn
    旧: type RenderSlotFn<S extends keyof SlotMap & string> = ([ContextualKeysOf<S>] extends [never] ? object : { < K extends ContextualKeysOf<S>, EntryKey extends EntryKeyOf<K> = EntryKeyOf<K>, >( key: K, owner: OwnerOf<K> & KeyPropsOf<K, NoInfer<EntryKey>>, opts: RenderOpts<EntryKey> & { hookContext: HookContextOf<K> }, ): ReactNode }) & ([OrdinaryKeysOf<S>] extends [never] ? object : { < K extends OrdinaryKeysOf<S>, EntryKey extends EntryKeyOf<K> = EntryKeyOf<K>, >( key: K, owner: OwnerOf<K> & KeyPropsOf<K, NoInfer<EntryKey>>, opts?: Omit<RenderOpts<EntryKey>, 'hookContext'>, ): ReactNode })
    新: type RenderSlotFn<S extends keyof SlotMap & string> = ([HocKeysOf<S>] extends [never] ? object : { <K extends HocKeysOf<S>>(key: K, owner: OwnerOf<K>, opts?: HocRenderOpts<EntryKeyOf<K>>): ReactNode }) & ([Exclude<ContextualKeysOf<S>, HocKeysOf<S>>] extends [never] ? object : { < K extends Exclude<ContextualKeysOf<S>, HocKeysOf<S>>, EntryKey extends EntryKeyOf<K> = EntryKeyOf<K>, >( key: K, owner: OwnerOf<K> & KeyPropsOf<K, NoInfer<EntryKey>>, opts: RenderOpts<EntryKey> & { hookContext: HookContextOf<K> }, ): ReactNode }) & ([OrdinaryKeysOf<S>] extends [never] ? object : { < K extends OrdinaryKeysOf<S>, EntryKey extends EntryKeyOf<K> = EntryKeyOf<K>, >( key: K, owner: OwnerOf<K> & KeyPropsOf<K, NoInfer<EntryKey>>, opts?: Omit<RenderOpts<EntryKey>, 'hookContext'>, ): ReactNode })
- **[ast-signature-changed]** `packages/client/ui-slots` — 签名变化: PropsRenderSlots
    旧: export type PropsRenderSlots<S extends keyof SlotMap & string> = { /** * Render a declared non-chain child slot (chain keys dispatch through * `renderSlotChain` — their routing lives in entry selectors). * @param key - declared child key. * @param owner - owner props share for that key (decided at the render site). * @param opts - kind dispatch options. * @returns rendered node(s). */ renderSlot: RenderSlotFn<Exclude<S, ChainKeysOf<S>>> readonly __renders?: ((key: S) => void) | undefined } & ([ChainKeysOf<S>] extends [never] ? object : { /** * Render a declared chain child slot: entry selectors run in chain order * over `owner`; the first non-null match renders its component with the * selector result injected as `matched`; all-null renders `opts.fallback`. * @param key - declared chain child key. * @param owner - owner props share (the selectors' routing input). * @param opts - fallback body for the all-null case. * @returns rendered node(s). */ renderSlotChain: <K extends ChainKeysOf<S>>(key: K, owner: OwnerOf<K>, opts?: ChainRenderOpts) => ReactNode }) & ([Extract<ScopeOf<S>, 'session' | 'session-maybe'>] extends [never] ? object : { SessionProvider: SessionProviderComponent })
    新: export type PropsRenderSlots<S extends keyof SlotMap & string> = { /** * Render a declared non-chain child slot (chain keys dispatch through * `renderSlotChain` — their routing lives in entry selectors). A hoc key * takes the content its entries wrap as `opts.children`. * @param key - declared child key. * @param owner - owner props share for that key (decided at the render site). * @param opts - kind dispatch options; `{ children }` for hoc keys. * @returns rendered node(s). */ renderSlot: RenderSlotFn<Exclude<S, ChainKeysOf<S>>> readonly __renders?: ((key: S) => void) | undefined } & ([ChainKeysOf<S>] extends [never] ? object : { /** * Render a declared chain child slot: entry selectors run in chain order * over `owner`; the first non-null match renders its component with the * selector result injected as `matched`; all-null renders `opts.fallback`. * @param key - declared chain child key. * @param owner - owner props share (the selectors' routing input). * @param opts - fallback body for the all-null case. * @returns rendered node(s). */ renderSlotChain: <K extends ChainKeysOf<S>>(key: K, owner: OwnerOf<K>, opts?: ChainRenderOpts) => ReactNode }) & ([Extract<ScopeOf<S>, 'session' | 'session-maybe'>] extends [never] ? object : { SessionProvider: SessionProviderComponent })
- **[ast-signature-changed]** `packages/client/ui-slots` — 签名变化: ComposedProps
    旧: export type ComposedProps< K extends keyof SlotMap & string, EntryKey extends EntryKeyOf<K>, S extends keyof SlotMap & string, H, I extends object, M = never, N = undefined, > = PropsRuntime<K, EntryKey> & PropsRenderSlots<S> & PropsRenderFactories & PropsStore<H> & InjectFace<I> & MatchedShare<SlotMap[K], M> & PropsLocale<N>
    新: export type ComposedProps< K extends keyof SlotMap & string, EntryKey extends EntryKeyOf<K>, S extends keyof SlotMap & string, H, I extends object, M = never, N = undefined, > = PropsRuntime<K, EntryKey> & PropsRenderSlots<S> & PropsRenderFactories & PropsStore<H> & InjectFace<I> & MatchedShare<SlotMap[K], M> & HocShare<SlotMap[K]> & PropsLocale<N>
- **[ast-signature-changed]** `packages/client/ui-slots` — 签名变化: KindOptions
    旧: export type KindOptions< K extends keyof SlotMap & string, EntryKey extends EntryKeyOf<K>, M = never, > = SlotMap[K]['kind'] extends 'keyed' ? { key: EntryKey /** Cell shadowing rank (ascending, default 0, lowest renders; same key + same priority throws — see {@link SlotCore.register}). */ priority?: number } : SlotMap[K]['kind'] extends 'list' ? { id: string order?: number label?: SlotLabel /** Cell shadowing rank (ascending, default 0, lowest renders; same id + same priority throws — see {@link SlotCore.register}). */ priority?: number } : SlotMap[K]['kind'] extends 'chain' ? { /** Routing selector, mandatory on chain entries; `M` (the component's `matched` prop) infers from its return. */ select: ChainSelect<SlotMap[K] extends { owner: infer O extends object } ? O : object, M> /** Explicit chain position (ascending, default 0, lower tries first); ties keep registration = assembly order. */ priority?: number } : { /** * Cell shadowing rank (ascending, default 0, lowest renders; a * same-priority second registration throws — see {@link SlotCore.register}). */ priority?: number }
    新: export type KindOptions< K extends keyof SlotMap & string, EntryKey extends EntryKeyOf<K>, M = never, > = SlotMap[K]['kind'] extends 'keyed' ? { key: EntryKey /** Cell shadowing rank (ascending, default 0, lowest renders; same key + same priority throws — see {@link SlotCore.register}). */ priority?: number } : SlotMap[K]['kind'] extends 'list' ? { id: string order?: number label?: SlotLabel /** Cell shadowing rank (ascending, default 0, lowest renders; same id + same priority throws — see {@link SlotCore.register}). */ priority?: number } : SlotMap[K]['kind'] extends 'chain' ? { /** Routing selector, mandatory on chain entries; `M` (the component's `matched` prop) infers from its return. */ select: ChainSelect<SlotMap[K] extends { owner: infer O extends object } ? O : object, M> /** Explicit chain position (ascending, default 0, lower tries first); ties keep registration = assembly order. */ priority?: number } : SlotMap[K]['kind'] extends 'hoc' ? { id: string /** * Dispatch key this layer serves; omitted, the layer serves every * dispatch (wildcard). Within one `id`, an exact-key layer replaces * the wildcard layer for that key. */ key?: EntryKey /** Nesting position: ascending, default 0; the lowest order is the outermost layer. */ order?: number /** * Cell shadowing rank (ascending, default 0, lowest renders; same key + id + priority throws — see {@link SlotCore.register}). */ priority?: number } : { /** * Cell shadowing rank (ascending, default 0, lowest renders; a * same-priority second registration throws — see {@link SlotCore.register}). */ priority?: number }
- **[ast-signature-changed]** `packages/core/agent-loop` — 签名变化: AgentInitializationOptions
    旧: interface AgentInitializationOptions { readonly session: Session readonly agentOptions: AgentOptions readonly source: SessionStartSource readonly stored?: StoredSession | undefined readonly setup?: AgentSetup | undefined readonly signal?: AbortSignal | undefined readonly parentAgent?: Agent | undefined }
    新: interface AgentInitializationOptions { readonly session: Session readonly agentOptions: AgentOptions readonly source: SessionStartSource readonly stored?: StoredSession | undefined readonly setup?: AgentSetup | undefined readonly signal?: AbortSignal | undefined }
- **[ast-signature-changed]** `packages/core/agent` — 签名变化: CreateAgentOptions
    旧: export interface CreateAgentOptions { /** The live agent/session identity. */ readonly sessionId: SessionId /** Live parent Agent for runtime ownership; omit for a root Agent. */ readonly parentAgent?: Agent /** * Session creation metadata: validated absolute `cwd`, `parentSession` * fork lineage, the `isSeeded` fork marker, the coarse `origin` * classification, and the `delegationDepth` recursion budget. Mirrors the * `cwd`/`parentSession`/`isSeeded`/`origin`/`delegationDepth` fields of * {@link CreateSessionOptions.meta} in dsh-session (the internal-only * `createdAt`, used when reconstructing a persisted session, is deliberately * excluded — a factory caller never sets it). This is durable session data, * so the session boundary validates and snapshots it before asynchronous * setup begins. */ readonly meta?: { readonly cwd?: string readonly parentSession?: SessionId readonly isSeeded?: boolean readonly origin?: 'subagent' readonly delegationDepth?: number readonly agentPreset?: string } /** Exact fork-inherited prefix length when the session metadata sets `isSeeded`. */ readonly inheritedEventCount?: SessionLogOffset /** * Initial replay/fork history, contiguous from seq 0 with lossless-JSON data. * A fork supplies an exact parent prefix, its inherited marker, and closers * for the open tail. Previously closed steps and turns remain unchanged. * The factory validates and snapshots the seed before publication. */ readonly seed?: readonly SessionEvent[] /** Route fallback and output controls; see {@link AgentOptions} for live accessor semantics. */ readonly agentOptions?: AgentOptions /** Optional creation-only cancellation signal; detached before the returned handle becomes visible. */ readonly signal?: AbortSignal /** * Creation-time composition of the agent's scoped world. The factory awaits * setup after minting `agentCtx`, entering the SessionStore, and completing * `session/created`. The Session * accepts live events during setup; the Agent remains outside its registry * until setup completes. Agent creation is announced after setup. Setup may return an {@link AgentSetupCommit}; the factory invokes its * synchronous `commit()` after every setup await settles and immediately * before registry publication. This lets mutable provisioning revalidate at * the exact publication boundary. Everything registered through `agentCtx` * (scoped tools, prompt sections/variables, `restrict()`, listeners, awaited * child plugins) exists before `agent/created`, * and the first prompt assembly. A setup * throw/rejection, commit throw, or owner disposal rolls the scope back * without announcing Agent creation. Already committed Session events remain stored. * * **Setup composes, it never drives**: the callback is trusted same-process * code and receives the full scoped context, so this is a contract rather * than a runtime restriction. Drive the agent only after creation resolves. */ readonly setup?: AgentSetup }
    新: export interface CreateAgentOptions { /** The live agent/session identity. */ readonly sessionId: SessionId /** * Session creation metadata: validated absolute `cwd`, `parentSession` * fork lineage, the `isSeeded` fork marker, the coarse `origin` * classification, and the `delegationDepth` recursion budget. Mirrors the * `cwd`/`parentSession`/`isSeeded`/`origin`/`delegationDepth` fields of * {@link CreateSessionOptions.meta} in dsh-session (the internal-only * `createdAt`, used when reconstructing a persisted session, is deliberately * excluded — a factory caller never sets it). This is durable session data, * so the session boundary validates and snapshots it before asynchronous * setup begins. */ readonly meta?: { readonly cwd?: string readonly parentSession?: SessionId readonly isSeeded?: boolean readonly origin?: 'subagent' readonly delegationDepth?: number readonly agentPreset?: string } /** Exact fork-inherited prefix length when the session metadata sets `isSeeded`. */ readonly inheritedEventCount?: SessionLogOffset /** * Initial replay/fork history, contiguous from seq 0 with lossless-JSON data. * A fork supplies an exact parent prefix, its inherited marker, and closers * for the open tail. Previously closed steps and turns remain unchanged. * The factory validates and snapshots the seed before publication. */ readonly seed?: readonly SessionEvent[] /** Route fallback and output controls; see {@link AgentOptions} for live accessor semantics. */ readonly agentOptions?: AgentOptions /** Optional creation-only cancellation signal; detached before the returned handle becomes visible. */ readonly signal?: AbortSignal /** * Creation-time composition of the agent's scoped world. The factory awaits * setup after minting `agentCtx`, entering the SessionStore, and completing * `session/created`. The Session * accepts live events during setup; the Agent remains outside its registry * until setup completes. Agent creation is announced after setup. Setup may return an {@link AgentSetupCommit}; the factory invokes its * synchronous `commit()` after every setup await settles and immediately * before registry publication. This lets mutable provisioning revalidate at * the exact publication boundary. Everything registered through `agentCtx` * (scoped tools, prompt sections/variables, `restrict()`, listeners, awaited * child plugins) exists before `agent/created`, * and the first prompt assembly. A setup * throw/rejection, commit throw, or owner disposal rolls the scope back * without announcing Agent creation. Already committed Session events remain stored. * * **Setup composes, it never drives**: the callback is trusted same-process * code and receives the full scoped context, so this is a contract rather * than a runtime restriction. Drive the agent only after creation resolves. */ readonly setup?: AgentSetup }
- **[ast-signature-changed]** `packages/core/agent` — 签名变化: ResumeAgentOptions
    旧: export interface ResumeAgentOptions { /** The persisted session id to load and use as the live agent/session identity. */ readonly resumeSessionId: SessionId /** Live parent Agent for runtime ownership; omit for a root Agent. */ readonly parentAgent?: Agent /** Route fallback and output controls; see {@link AgentOptions} for live accessor semantics. */ readonly agentOptions?: AgentOptions /** Optional creation-only cancellation signal for persistence load/setup; detached before return. */ readonly signal?: AbortSignal /** * Resume-time composition of the agent's fresh scoped world. Persistence is * loaded first; the factory then enters and announces the reconstructed Session and awaits * setup in the fresh `agentCtx` before registering the Agent. The callback has the * same trusted composition-only contract and optional synchronous * publication commit as {@link CreateAgentOptions.setup}: all registrations * exist before Agent creation is announced, and rejection, commit failure, * or owner disposal unwinds the transaction while preserving pending inbox input. */ readonly setup?: AgentSetup }
    新: export interface ResumeAgentOptions { /** The persisted session id to load and use as the live agent/session identity. */ readonly resumeSessionId: SessionId /** Route fallback and output controls; see {@link AgentOptions} for live accessor semantics. */ readonly agentOptions?: AgentOptions /** Optional creation-only cancellation signal for persistence load/setup; detached before return. */ readonly signal?: AbortSignal /** * Resume-time composition of the agent's fresh scoped world. Persistence is * loaded first; the factory then enters and announces the reconstructed Session and awaits * setup in the fresh `agentCtx` before registering the Agent. The callback has the * same trusted composition-only contract and optional synchronous * publication commit as {@link CreateAgentOptions.setup}: all registrations * exist before Agent creation is announced, and rejection, commit failure, * or owner disposal unwinds the transaction while preserving pending inbox input. */ readonly setup?: AgentSetup }
- **[ast-signature-changed]** `packages/core/agent` — 签名变化: AgentFactory
    旧: export interface AgentFactory { /** * Create a new agent on a caller-supplied session id. Async because creation * enters and announces the Session, awaits setup and its optional synchronous commit, * inserts the Agent, and awaits serial * `agent/created` listeners before releasing queued work. The sequence is * rollback-covered, but notifications delivered before a later listener * failure remain observable; every agent or session creation announcement * that began is paired by `agent/disposed` or `session/disposed` during * rollback. Once Agent initialization begins, failures reject after its * scope and acquired write handle finish cleanup. Cancellation during * persistence acquisition may reject before a late handle is available to close. * The owner disposes the resolved handle to stop/drain, * unregister, remove the session, and unwind the scope. * The registry passes a context carrying the `create()` caller's fiber and * scope as `ownerCtx`. The implementation attaches the unpublished * transaction and resulting lifecycle to that owner; it must not infer * ownership from the factory object's registration context. * @param ownerCtx - caller-bound context that owns the transaction and live handle. * @param options - agent/session identity, configuration, optional live parent, and setup. * @returns the owned handle after setup and both creation announcements complete. */ createAgent(ownerCtx: Context, options: CreateAgentOptions): Promise<AgentHandle> /** * Resume an agent on a persisted session. Async because it opens the * persisted session for write, reads and repairs the log, publishes it, and * awaits the optional unpublished setup transaction; must be called after * `ctx.sessionPersistence` exists (consumers inject `sessionPersistence`). * Initialization cleanup and publication follow the same timing as * {@link createAgent}. * @param ownerCtx - caller-bound context that owns load, setup, and the live handle. * @param options - persisted identity, configuration, optional live parent, and setup. * @returns the owned handle after setup, both announcements, and loop start complete. */ resume(ownerCtx: Context, options: ResumeAgentOptions): Promise<AgentHandle> }
    新: export interface AgentFactory { /** * Create a new agent on a caller-supplied session id. Async because creation * enters and announces the Session, awaits setup and its optional synchronous commit, * inserts the Agent, and awaits serial * `agent/created` listeners before releasing queued work. The sequence is * rollback-covered, but notifications delivered before a later listener * failure remain observable; every agent or session creation announcement * that began is paired by `agent/disposed` or `session/disposed` during * rollback. Once Agent initialization begins, failures reject after its * scope and acquired write handle finish cleanup. Cancellation during * persistence acquisition may reject before a late handle is available to close. * The owner disposes the resolved handle to stop/drain, * unregister, remove the session, and unwind the scope. * The registry passes a context carrying the `create()` caller's fiber and * scope as `ownerCtx`. The implementation attaches the unpublished * transaction and resulting lifecycle to that owner; it must not infer * ownership from the factory object's registration context. * @param ownerCtx - caller-bound context that owns the transaction and live handle. * @param options - agent/session identity, configuration, and setup. * @returns the owned handle after setup and both creation announcements complete. */ createAgent(ownerCtx: Context, options: CreateAgentOptions): Promise<AgentHandle> /** * Resume an agent on a persisted session. Async because it opens the * persisted session for write, reads and repairs the log, publishes it, and * awaits the optional unpublished setup transaction; must be called after * `ctx.sessionPersistence` exists (consumers inject `sessionPersistence`). * Initialization cleanup and publication follow the same timing as * {@link createAgent}. * @param ownerCtx - caller-bound context that owns load, setup, and the live handle. * @param options - persisted identity, configuration, and setup. * @returns the owned handle after setup, both announcements, and loop start complete. */ resume(ownerCtx: Context, options: ResumeAgentOptions): Promise<AgentHandle> }
- **[ast-signature-changed]** `packages/core/agent` — 签名变化: AgentEntry
    旧: interface AgentEntry { readonly id: SessionId readonly agent: Agent /** Runtime creator-agent ownership; independent of durable session lineage. */ readonly owner: Agent | undefined readonly carrier: Scoped<Agent> announced: boolean announcing: boolean detachRequested: boolean }
    新: interface AgentEntry { readonly id: SessionId readonly agent: Agent readonly carrier: Scoped<Agent> announced: boolean announcing: boolean detachRequested: boolean }
- **[ast-signature-changed]** `packages/document/tool-office` — 签名变化: render
    旧: var
    新: function(ctx:Context,kit:OfficeKit,config:Config,agent:Agent,signal:AbortSignal,args:OfficeRenderArgs,target:FsTarget,source:OfficeKitSource)
- **[ast-signature-changed]** `packages/document/tool-office` — 签名变化: assertUnchanged
    旧: var
    新: function(ctx:Context,target:FsTarget,info:FsInfo,signal:AbortSignal)
- **[ast-signature-changed]** `packages/api/terminal-controller` — 签名变化: history
    旧: var:HistoricalEntry[]
    新: var
- **[ast-signature-changed]** `packages/experimental/client-ui-forge` — 签名变化: ControllerConfig
    旧: type ControllerConfig = PanelConfig & { readonly maxBranches: number; readonly worktreePrefix: string }
    新: type ControllerConfig = PanelConfig & { readonly maxBranches: number; readonly maxCommits: number; readonly worktreePrefix: string }
- **[ast-signature-changed]** `packages/experimental/cua` — 签名变化: CuaConfig
    旧: export interface CuaConfig { /** Register tools for Agents using this preset; defaults to ptc. False enables global registration. */ agentPreset: string | false /** Legacy grants imported once into profile-scoped storage; later edits are ignored. */ allowedApps: Array<Omit<CuaApplicationGrant, 'id'> & { /** Unbranded digest at the profile configuration boundary; admitted by the Config schema. */ id: string }> /** Absolute executable inside the signed macOS helper .app; omission prepares the package-owned application. */ helperPath?: string /** Maximum time in milliseconds for native component preparation. */ buildTimeoutMs: number /** Deadline for one native operation, including capture and AX traversal. */ timeoutMs: number /** Maximum time to connect to or start the shared native helper. */ connectTimeoutMs: number /** Screenshot deadline including time queued behind other native operations. */ screenshotTimeoutMs: number /** Deadline for each individual Accessibility system call. */ axTimeoutMs: number /** Maximum bytes retained for one helper response frame. */ maxResponseBytes: number /** Maximum installed application matches returned for one discovery query. */ maxAppMatches: number /** Maximum bytes preserved from the system clipboard during one paste. */ maxClipboardBytes: number /** Maximum wait for clipboard data consumption after the Paste command returns. */ pasteReadTimeoutMs: number /** Maximum UTF-8 bytes admitted for one helper request frame. */ maxRequestBytes: number /** Duration in milliseconds of one same-window drag. */ dragDurationMs: number /** Maximum explicitly requested mouse-button hold in milliseconds; zero allows immediate release only. */ maxClickHoldMs: number /** Number of movement segments dispatched during a drag. */ dragSteps: number /** Delay in milliseconds after each Unicode key-down or key-up event. */ textEventIntervalMs: number /** Native connection cleanup, socket-write and launcher termination budget in milliseconds. */ graceMs: number /** Maximum nodes admitted by a native accessibility snapshot. */ maxElements: number /** Maximum depth traversed by a native accessibility snapshot. */ maxDepth: number }
    新: export interface CuaConfig { /** Ask once per live Session before an explicitly requested system-pointer move. */ requireSystemPointerApproval: boolean /** Register tools for Agents using this preset; defaults to ptc. False enables global registration. */ agentPreset: string | false /** Legacy grants imported once into profile-scoped storage; later edits are ignored. */ allowedApps: Array<Omit<CuaApplicationGrant, 'id'> & { /** Unbranded digest at the profile configuration boundary; admitted by the Config schema. */ id: string }> /** Absolute executable inside the signed macOS helper .app; omission prepares the package-owned application. */ helperPath?: string /** Maximum time in milliseconds for native component preparation. */ buildTimeoutMs: number /** Deadline for one native operation, including capture and AX traversal. */ timeoutMs: number /** Maximum time to connect to or start the shared native helper. */ connectTimeoutMs: number /** Screenshot deadline including time queued behind other native operations. */ screenshotTimeoutMs: number /** Deadline for each individual Accessibility system call. */ axTimeoutMs: number /** Maximum bytes retained for one helper response frame. */ maxResponseBytes: number /** Maximum installed application matches returned for one discovery query. */ maxAppMatches: number /** Maximum bytes preserved from the system clipboard during one paste. */ maxClipboardBytes: number /** Maximum wait for clipboard data consumption after the Paste command returns. */ pasteReadTimeoutMs: number /** Maximum UTF-8 bytes admitted for one helper request frame. */ maxRequestBytes: number /** Duration in milliseconds of one same-window drag. */ dragDurationMs: number /** Maximum explicitly requested mouse-button hold in milliseconds; zero allows immediate release only. */ maxClickHoldMs: number /** Number of movement segments dispatched during a drag. */ dragSteps: number /** Delay in milliseconds after each Unicode key-down or key-up event. */ textEventIntervalMs: number /** Native connection cleanup, socket-write and launcher termination budget in milliseconds. */ graceMs: number /** Default node limit when an accessibility read omits maxElements. */ maxElements: number /** Default depth limit when an accessibility read omits maxDepth. */ maxDepth: number }
- **[ast-signature-changed]** `packages/experimental/cua` — 签名变化: CuaBackend
    旧: export interface CuaBackend { helperPath: string createChannel: NativeChannelFactory guidance: string description: string /** * Build native permission parameters for the selected action and Client language. * @param method Native permission action. * @param permission System privilege selected by the user. * @param locale Current Client language. * @returns Parameters accepted by the provider's native implementation. */ permissionParameters: (method: 'requestPermission' | 'openPermissionSettings', permission: CuaSystemPermission, locale: string) => Record<string, JsonValue> }
    新: export interface CuaBackend { helperPath: string createChannel: NativeChannelFactory guidance: string capabilities: CuaStartupCapabilities /** Dispatch a directional key through the provider's execution-scoped input owner, after application authorization. */ sendKeyEvent?: (client: NativeClient, params: Record<string, JsonValue>, execution: Readonly<ToolExecution>) => Promise<JsonValue> /** * Build native permission parameters for the selected action and Client language. * @param method Native permission action. * @param permission System privilege selected by the user. * @param locale Current Client language. * @returns Parameters accepted by the provider's native implementation. */ permissionParameters: (method: 'requestPermission' | 'openPermissionSettings', permission: CuaSystemPermission, locale: string) => Record<string, JsonValue> }
- **[ast-signature-changed]** `packages/experimental/forge` — 签名变化: Watch
    旧: interface Watch { readonly key: ChangeRequestKey readonly ref: ChangeRequestRef readonly listeners: Set<ChangeRequestListener> latest: ChangeRequestUpdate | undefined /** Epoch milliseconds of the next poll; undefined while in flight or after a terminal state. */ dueAt: number | undefined failures: number }
    新: interface Watch { readonly key: ChangeRequestKey readonly ref: ChangeRequestRef readonly listeners: Set<ChangeRequestListener> latest: ChangeRequestUpdate | undefined /** Epoch milliseconds of the next poll; undefined while in flight or after a terminal state. */ dueAt: number | undefined failures: number /** Head commit whose `stale` diff or review read last polled at once, so further stale reads at it wait for the regular poll. */ staleHead: string | undefined }
- **[ast-signature-changed]** `packages/api/terminal-controller` — 签名变化: sandbox
    旧: var:PtcRunSandbox
    新: var
- **[ast-signature-changed]** `packages/api/terminal-controller` — 签名变化: confined
    旧: var:ConfinedArgv | undefined
    新: var
- **[ast-signature-changed]** `packages/boot/plugin-market` — 签名变化: install
    旧: function(agent:Agent,ctx:Context,config:Required<Config>)
    新: var
- **[ast-signature-changed]** `packages/web/web-deepseek-api` — 签名变化: resolveTarget
    旧: function(ctx:Context,path:string,signal:AbortSignal)
    新: function(ctx:Context,capability:Capability,own:{ baseURL: string | undefined; ref: string | undefined; billing: Billing },llmProvider:string | undefined)
- **[ast-signature-changed]** `packages/document/office-kit` — 签名变化: images
    旧: var:EncodedImageAttachment[]
    新: var
- **[ast-signature-changed]** `packages/mcp/mcp-client` — 签名变化: StdioConfig
    旧: export interface StdioConfig { /** Selects child-process stdio transport. */ transport: 'stdio' /** * Stable local namespace for this server's model-facing tool names * (`mcp__<serverName>__<rawName>`). Must match `[A-Za-z0-9_-]{1,32}` and be * unique across live mcp-client instances. */ serverName: string /** Executable used to start the server. */ command: string /** Arguments passed directly, without shell interpolation. */ args: string[] /** Extra env vars merged on top of scrubbed ambient env. */ env: Record<string, string> /** Working directory for the child process. */ cwd: string /** Timeout per tool call or resource request in milliseconds. */ toolCallTimeoutMs: number /** Fail plugin activation when the initial connection or tool synchronization fails. */ failOnStartupError: boolean /** Maximum UTF-8 bytes of attributed server instructions (default 32768). */ maxInstructionBytes?: number /** Automatic reconnect policy after a lost connection; omission uses the defaults. */ reconnect?: ReconnectConfig }
    新: export interface StdioConfig { /** Selects child-process stdio transport. */ transport: 'stdio' /** * Stable local namespace for this server's model-facing tool names * (`mcp__<serverName>__<rawName>`). Must match `[A-Za-z0-9_-]{1,32}` and be * unique among live mcp-client instances in the same registration scope. */ serverName: string /** Executable used to start the server. */ command: string /** Arguments passed directly, without shell interpolation. */ args: string[] /** Extra env vars merged on top of scrubbed ambient env. */ env: Record<string, string> /** Working directory for the child process. */ cwd: string /** Timeout per tool call or resource request in milliseconds. */ toolCallTimeoutMs: number /** Optional budget for one connection attempt plus its initial tool sync, in milliseconds. */ startupTimeoutMs?: number /** Budget for transport closure and local cleanup, in milliseconds (default 5000). */ closeTimeoutMs: number /** Resolve `${credential:…}` in transport strings at runtime and redact resolved values from diagnostics (default false). */ expandTemplates: boolean /** Fail plugin activation when the initial connection or tool synchronization fails. */ failOnStartupError: boolean /** Maximum UTF-8 bytes of attributed server instructions (default 32768). */ maxInstructionBytes?: number /** Automatic reconnect policy after a lost connection; omission uses the defaults. */ reconnect?: ReconnectConfig }
- **[ast-signature-changed]** `packages/mcp/mcp-client` — 签名变化: StreamableHttpConfig
    旧: export interface StreamableHttpConfig { /** Selects Streamable HTTP transport. */ transport: 'streamable-http' /** * Stable local namespace for this server's model-facing tool names * (`mcp__<serverName>__<rawName>`). Must match `[A-Za-z0-9_-]{1,32}` and be * unique across live mcp-client instances. */ serverName: string /** MCP endpoint URL. */ url: string /** Additional headers attached to MCP requests. */ headers: Record<string, string> /** Timeout per tool call or resource request in milliseconds. */ toolCallTimeoutMs: number /** Fail plugin activation when the initial connection or tool synchronization fails. */ failOnStartupError: boolean /** Maximum UTF-8 bytes of attributed server instructions (default 32768). */ maxInstructionBytes?: number /** Automatic reconnect policy after a lost connection; omission uses the defaults. */ reconnect?: ReconnectConfig }
    新: export interface StreamableHttpConfig { /** Selects Streamable HTTP transport. */ transport: 'streamable-http' /** * Stable local namespace for this server's model-facing tool names * (`mcp__<serverName>__<rawName>`). Must match `[A-Za-z0-9_-]{1,32}` and be * unique among live mcp-client instances in the same registration scope. */ serverName: string /** MCP endpoint URL. */ url: string /** Additional headers attached to MCP requests. */ headers: Record<string, string> /** Timeout per tool call or resource request in milliseconds. */ toolCallTimeoutMs: number /** Optional budget for one connection attempt plus its initial tool sync, in milliseconds. */ startupTimeoutMs?: number /** Budget for transport closure and local cleanup, in milliseconds (default 5000). */ closeTimeoutMs: number /** Resolve `${credential:…}` in transport strings at runtime and redact resolved values from diagnostics (default false). */ expandTemplates: boolean /** Fail plugin activation when the initial connection or tool synchronization fails. */ failOnStartupError: boolean /** Maximum UTF-8 bytes of attributed server instructions (default 32768). */ maxInstructionBytes?: number /** Automatic reconnect policy after a lost connection; omission uses the defaults. */ reconnect?: ReconnectConfig }
- **[ast-signature-changed]** `packages/mcp/mcp-client` — 签名变化: StdioConfigInput
    旧: type StdioConfigInput = Omit<StdioConfig, 'args' | 'env' | 'cwd' | 'toolCallTimeoutMs' | 'failOnStartupError'> & Partial<Pick<StdioConfig, 'args' | 'env' | 'cwd' | 'toolCallTimeoutMs' | 'failOnStartupError'>>
    新: type StdioConfigInput = Omit<StdioConfig, 'args' | 'env' | 'cwd' | 'toolCallTimeoutMs' | 'startupTimeoutMs' | 'failOnStartupError' | 'closeTimeoutMs' | 'expandTemplates'> & Partial<Pick<StdioConfig, 'args' | 'env' | 'cwd' | 'toolCallTimeoutMs' | 'startupTimeoutMs' | 'failOnStartupError' | 'closeTimeoutMs' | 'expandTemplates'>>
- **[ast-signature-changed]** `packages/mcp/mcp-client` — 签名变化: StreamableHttpConfigInput
    旧: type StreamableHttpConfigInput = Omit<StreamableHttpConfig, 'headers' | 'toolCallTimeoutMs' | 'failOnStartupError'> & Partial<Pick<StreamableHttpConfig, 'headers' | 'toolCallTimeoutMs' | 'failOnStartupError'>>
    新: type StreamableHttpConfigInput = Omit<StreamableHttpConfig, 'headers' | 'toolCallTimeoutMs' | 'startupTimeoutMs' | 'failOnStartupError' | 'closeTimeoutMs' | 'expandTemplates'> & Partial<Pick<StreamableHttpConfig, 'headers' | 'toolCallTimeoutMs' | 'startupTimeoutMs' | 'failOnStartupError' | 'closeTimeoutMs' | 'expandTemplates'>>
- **[ast-signature-changed]** `packages/mcp/mcp-manager` — 签名变化: ConfigInput
    旧: type ConfigInput = StdioConfigInput | StreamableHttpConfigInput
    新: interface ConfigInput { servers?: Record<string, EntryInput> }
- **[ast-signature-changed]** `packages/mcp/mcp-resources` — 签名变化: McpResourceProvider
    旧: export interface McpResourceProvider { /** * Run an operation against one live connection generation. * @param request - MCP resource method and parameters. * @param exec - caller identity and cancellation for this invocation. * @returns the protocol result as lossless JSON. */ request(request: McpResourceRequest, exec: ToolExecution): Promise<JsonValue> }
    新: export interface McpResourceProvider { /** * Run an operation against one live connection generation. The resource tools * dispatch in parallel, so one provider may receive several concurrent requests; * each must settle independently. * @param request - MCP resource method and parameters. * @param exec - caller identity and cancellation for this invocation. * @returns the protocol result as lossless JSON. */ request(request: McpResourceRequest, exec: ToolExecution): Promise<JsonValue> }
- **[ast-signature-changed]** `packages/sandbox/sandbox-local` — 签名变化: tempDir
    旧: var
    新: var:string
- **[ast-signature-changed]** `packages/sandbox/sandbox` — 签名变化: SandboxExecutionPolicy
    旧: export interface SandboxExecutionPolicy { /** The file-effect mode this execution runs under. */ mode: SandboxMode /** Absolute root directory `workspace-write` may write under. */ workspaceRoot: string /** * Extra physical absolute directories `workspace-write` may also write under. * Absence means none. The enforcing host rejects missing, non-directory, and * symlinked entries on each call. Remote paths are checked on the remote host. * These grant nothing under `read-only` or `danger-full-access`. */ additionalWritableRoots?: readonly string[] /** * Opaque identity of the calling session (the branded `dsh-session` * SessionId). Backends key per-session state off it (e.g. windows-acl gives * each live session/workspace pair a random private temp directory and SID, * while the workspace SID and standing grant remain per-workspace); absent * for agentless calls, which fall back to per-call backend state. */ sessionId?: SessionId }
    新: export interface SandboxExecutionPolicy { /** The file-effect mode this execution runs under. */ mode: SandboxMode /** Absolute root directory `workspace-write` may write under. */ workspaceRoot: string /** * Extra physical absolute directories `workspace-write` may also write under. * Absence means none. The enforcing host rejects missing, non-directory, and * symlinked entries on each call. Remote paths are checked on the remote host. * Windows process confinement ignores these; harness filesystem operations honor them. * These grant nothing under `read-only` or `danger-full-access`. */ additionalWritableRoots?: readonly string[] /** * Opaque identity of the calling session (the branded `dsh-session` * SessionId). Backends key per-session state off it (e.g. windows-acl gives * each live session/workspace pair a random private temp directory and SID, * while the workspace SID and standing grant remain per-workspace); absent * for agentless calls, which fall back to per-call backend state. */ sessionId?: SessionId }
- **[ast-signature-changed]** `packages/boot/plugin-manager` — 签名变化: unreachable
    旧: var:never
    新: var
- **[ast-signature-changed]** `packages/core/session` — 签名变化: snapshots
    旧: var:SessionPersistenceSnapshot[]
    新: var
- **[ast-signature-changed]** `packages/session/session-projection` — 签名变化: ProjectionDefinition
    旧: export interface ProjectionDefinition<K extends string, S> { /** The projection key this unit owns. */ key: K /** Validates persisted state before it seeds a fold. */ stateSchema: ZodType<S> /** * State for the empty log and its immutable Session metadata. * @param header - immutable metadata for the Session being projected. * @param inheritedEventCount - exact fork-inherited prefix length. * @returns the initial state. */ init(header: SessionHeader, inheritedEventCount: SessionLogOffset): NoInfer<S> /** * Pure transition: previous state + one committed event → next state. A * unit uninterested in an event MUST return the same state reference — an * unchanged reference (`Object.is`) produces zero downstream work. * @param state - the state covering all prior events. * @param event - the next committed session event. * @returns the next state (same reference when the event is not the unit's). */ apply(state: NoInfer<S>, event: SessionEvent): NoInfer<S> /** Client view. Omit for host-only units. */ wire?: K extends keyof SessionProjectionMap ? { /** Validates the wire payload before it leaves the host. */ viewSchema: ZodType<SessionProjectionViewValue<SessionProjectionMap[K]>> /** * State → wire payload (the read-side projection). The live drive keeps * the two latest raw results and compares them with `Object.is`; an * object-valued view must reuse its reference to suppress publication * across internal-only state changes. * @param state - the current state. * @returns the whole current value for this unit's key. */ view(state: NoInfer<S>): SessionProjectionViewValue<SessionProjectionMap[K]> /** * Whether a Session summary carries this unit; omitted means `true`. * Declare `false` on a key whose map entry carries the * `SessionProjectionSummaryExcluded` mark: the runtime key set follows this * field, while the client view type follows the mark. * @default true */ summary?: boolean } : never /** * Persisted-cache invalidation version: bump whenever the serialized state fields or the * fold semantics change, so persisted `(sessionId, key, ver, seq, val)` * rows from an older unit are discarded instead of being forward-applied * into garbage. Non-negative integer. */ stateVersion: number }
    新: export interface ProjectionDefinition<K extends string, S> { /** The projection key this unit owns. */ key: K /** Validates persisted state before it seeds a fold. */ stateSchema: ZodType<S> /** * State for the empty log and its immutable Session metadata. * @param header - immutable metadata for the Session being projected. * @param inheritedEventCount - exact fork-inherited prefix length. * @returns the initial state. */ init(header: SessionHeader, inheritedEventCount: SessionLogOffset): NoInfer<S> /** * Pure transition: previous state + one committed event → next state. A * unit uninterested in an event MUST return the same state reference — an * unchanged reference (`Object.is`) produces zero downstream work. * @param state - the state covering all prior events. * @param event - the next committed session event. * @returns the next state (same reference when the event is not the unit's). */ apply(state: NoInfer<S>, event: SessionEvent): NoInfer<S> /** Client view. Omit for host-only units. */ wire?: K extends keyof SessionProjectionMap ? { /** Validates the wire payload before it leaves the host. */ viewSchema: ZodType<SessionProjectionViewValue<SessionProjectionMap[K]>> /** * State → wire payload (the read-side projection). The live drive keeps * the two latest raw results and compares them with `Object.is`; an * object-valued view must reuse its reference to suppress publication * across internal-only state changes. * @param state - the current state. * @returns the whole current value for this unit's key. */ view(state: NoInfer<S>): SessionProjectionViewValue<SessionProjectionMap[K]> /** * Whether a Session summary carries this unit; omitted means `true`. * Declare `false` on a key whose map entry carries the * `SessionProjectionSummaryExcluded` mark: the runtime key set follows this * field, while the client view type follows the mark. * @default true */ summary?: boolean } : never /** * Non-negative persisted-cache invalidation version. Bump when state fields or fold * semantics change, except for optional additions whose absence preserves historical * meaning and whose old-checkpoint suffix replay matches full replay. Test that * equivalence before retaining a version; schema acceptance alone is insufficient. */ stateVersion: number }
- **[ast-signature-changed]** `packages/shell/tool-pwsh` — 签名变化: StartedJob
    旧: interface StartedJob { readonly id: JobId readonly process: () => ShellExecution | undefined readonly stopped: () => string | undefined }
    新: interface StartedJob { readonly id: JobId readonly process: () => ShellExecution | undefined readonly stopped: () => string | undefined /** The original error of a registration whose preparation failed before the process published. */ readonly failure: () => { error: unknown } | undefined }
- **[ast-signature-changed]** `packages/subprocess/subprocess/src/error.ts` — 签名变化: SubprocessExecutableNotFoundError
    旧: class
    新: class(message:string,?options:ErrorOptions)
- **[ast-signature-changed]** `packages/terminal/terminal/src/error.ts` — 签名变化: TerminalErrorCode
    旧: export type TerminalErrorCode = | 'DUPLICATE_BACKEND' | 'DUPLICATE_NAME' | 'FOREIGN_SESSION' | 'NO_BACKEND' | 'NO_SESSION' | 'OWNER_NOT_LIVE' | 'SEND_ACTIVE' | 'SERVICE_DISPOSING'
    新: export type TerminalErrorCode = | 'CLEANUP_FAILED' | 'DUPLICATE_BACKEND' | 'DUPLICATE_NAME' | 'FOREIGN_SESSION' | 'INIT_REJECTED' | 'NO_BACKEND' | 'NO_SANDBOX' | 'NO_SESSION' | 'OWNER_NOT_LIVE' | 'SEND_ACTIVE' | 'SERVICE_DISPOSING' | 'SESSION_CLOSING' | 'SESSION_EXITED' | 'STARTUP_EXITED' | 'STARTUP_TIMEOUT'
- **[ast-signature-changed]** `packages/terminal/terminal/src/error.ts` — 签名变化: TerminalError
    旧: class
    新: class(message:string,code:TerminalErrorCode,?options:ErrorOptions)
- **[ast-signature-changed]** `packages/util/official-bundles` — 签名变化: OfficialBundleCatalogEntry
    旧: export interface OfficialBundleCatalogEntry { /** Exact npm package name accepted by the existing bundle installer. */ readonly packageName: string /** Package-owned Host platform declaration, available before installation. */ readonly platforms?: DshBundleManifest['platforms'] /** Package-owned discovery visibility before installation. */ readonly listedByDefault?: boolean /** Package-owned localized text and a self-contained icon, embedded without provider code. */ readonly meta: Required<Pick<PluginLocalizedMeta, 'title' | 'description' | 'icon'>> }
    新: export interface OfficialBundleCatalogEntry { /** Exact npm package name accepted by the existing bundle installer. */ readonly packageName: string /** Package-owned Host platform declaration, available before installation. */ readonly platforms?: DshBundleManifest['platforms'] /** Package-owned localized text and a self-contained icon, embedded without provider code. */ readonly meta: Required<Pick<PluginLocalizedMeta, 'title' | 'description' | 'icon'>> }
- **[ast-signature-changed]** `packages/api/session-controller/src/types.ts` — 签名变化: SessionPromptRequest
    旧: export interface SessionPromptRequest { /** Client-minted identity persisted on the exact accepted user message. */ readonly requestId: SessionRequestId readonly sessionId: SessionId readonly mode: 'queue' | 'steer' /** At least one non-whitespace text part or attachment. */ readonly content: readonly PromptContentPart[] readonly clientTimeZone?: string }
    新: export interface SessionPromptRequest { /** Client-minted identity persisted on the accepted inbox input, including empty continuation. */ readonly requestId: SessionRequestId readonly sessionId: SessionId readonly mode: 'queue' | 'steer' /** Non-whitespace text or attachments; an empty array continues an eligible failed idle Session. */ readonly content: readonly PromptContentPart[] readonly clientTimeZone?: string }
- **[ast-signature-changed]** `packages/api/session-controller/src/agent.ts` — 签名变化: hasApiSessionSubagentOwner
    旧: function(ctx:Context,session:Pick<Session, 'header'>,agent:Agent | undefined)
    新: function(session:Pick<Session, 'header'>)
- **[ast-signature-changed]** `packages/experimental/creation-recommendations` — 签名变化: parentId
    旧: var
    新: var:SessionId | undefined
- **[ast-signature-changed]** `packages/api/terminal-controller/src/types.ts` — 签名变化: WebTerminalInfo
    旧: export interface WebTerminalInfo { readonly id: WebTerminalId readonly title: string readonly shell: TerminalShell /** Initial working directory; shell directory changes do not update this field. */ readonly cwd: string readonly cols: number readonly rows: number readonly state: 'running' | 'exited' | 'failed' readonly exitCode: number | null readonly error?: string }
    新: export interface WebTerminalInfo { readonly id: WebTerminalId readonly title: string readonly shell: TerminalShell /** Initial working directory; shell directory changes do not update this field. */ readonly cwd: string readonly cols: number readonly rows: number readonly state: 'running' | 'exited' | 'failed' readonly exitCode: number | null readonly error?: string /** Party that created the terminal. */ readonly origin: TerminalParty /** Input owner; an agent terminal passes to the user on the user's first typed input and never returns. */ readonly control: TerminalParty /** Sandbox mode an agent terminal started under; user terminals run with system-user permissions and omit it. */ readonly sandboxMode?: TerminalSandboxMode }
- **[ast-signature-changed]** `packages/api/terminal-controller/src/types.ts` — 签名变化: TerminalInput
    旧: export type TerminalInput = | { readonly type: 'write'; readonly sequence: number; readonly data: string } | { readonly type: 'resize'; readonly sequence: number; readonly cols: number; readonly rows: number }
    新: export type TerminalInput = | { readonly type: 'write'; readonly sequence: number; readonly data: string; readonly typed?: boolean } | { readonly type: 'resize'; readonly sequence: number; readonly cols: number; readonly rows: number }
- **[ast-signature-changed]** `packages/boot/app-boot/src/bundle-platform.ts` — 签名变化: assertBundlePlatform
    旧: function(platforms:unknown,platform:string)
    新: function(platforms:unknown,platform:string,facts:Omit<HostEnvironmentFacts, 'platform'>)
- **[ast-signature-changed]** `packages/boot/plugin-manager/src/types.ts` — 签名变化: ManagementError
    旧: export interface ManagementError { code: ReadOnlyReason | 'unknown-plugin' | 'invalid-spec' | 'already-installed' | 'ambiguous-install' | 'not-bundle' | 'not-removable' | 'stop-profile' | 'bundle-in-use' | 'stale-approval' | 'incompatible-version' | 'unsupported-platform' | 'operation-error' diagnostic?: string /** Present with `incompatible-version`: the packages the running DSH version rejects. */ incompatible?: IncompatiblePlugin[] }
    新: export interface ManagementError { code: ReadOnlyReason | 'unknown-plugin' | 'invalid-spec' | 'already-installed' | 'ambiguous-install' | 'not-bundle' | 'not-removable' | 'stop-profile' | 'bundle-in-use' | 'stale-approval' | 'incompatible-version' | 'unsupported-platform' | 'unexpected-package' | 'operation-error' diagnostic?: string /** Present with `incompatible-version`: the packages the running DSH version rejects. */ incompatible?: IncompatiblePlugin[] }
- **[ast-signature-changed]** `packages/boot/plugin-manager/src/types.ts` — 签名变化: BundleInfo
    旧: export interface BundleInfo { name: string /** Project-maintained shipped optional bundle or on-demand catalog entry, independent of installation and selection. */ official: boolean /** Readable package location; on-demand catalog entries exclude undeclared transitive copies, and declared files may be missing. */ availability: 'installation' | 'profile' | 'missing' /** Exact released Host version or same-checkout development link offered for an on-demand catalog entry. */ installTarget?: { spec: string; version: string } version?: string /** Local display text with available translations or literal fallbacks, or a metadata diagnostic. */ meta?: PluginLocalizedMeta /** Untranslated `description` of this bundle's package manifest. */ description?: string /** Default GUI visibility after package and Host checks; selected or profile-installed bundles remain manageable. */ listedByDefault?: boolean /** Selected in the profile manifest; a load error means its layer was skipped. */ enabled: boolean /** Whether the profile declares this dependency; availability separately reports whether its files can be read. */ installed: boolean /** * Present for a profile dependency the installation does not also supply: the spec `pnpm add` accepts, with local * paths made absolute and the user information of an http(s) URL removed. */ source?: string /** * Whether the installation ships the bundle for the person to switch on: named by the launcher's `OPTIONAL_BUNDLES`, * held by the installation's dependencies, selected by no shipped template, and never removable. */ optional: boolean removable: boolean /** * Whether `listVersions` and `updateBundle` accept the bundle: a third-party profile dependency saved as a registry * spec under its own name, whose installed manifest declares a semver version, and that carries no plugin management. */ updatable: boolean readOnlyReason?: ReadOnlyReason error?: ManagementError /** The rows the bundle's patch inserts, in declaration order; empty when the patch cannot be read. */ rows: BundleRowInfo[] /** Ids of rows the bundle's patch changes without declaring them: the built-in rows it configures or disables. */ overrides: string[] }
    新: export interface BundleInfo { name: string /** Project-maintained shipped optional bundle or on-demand catalog entry, independent of installation and selection. */ official: boolean /** Readable package location; on-demand catalog entries exclude undeclared transitive copies, and declared files may be missing. */ availability: 'installation' | 'profile' | 'missing' /** Exact released Host version or same-checkout development link offered for an on-demand catalog entry. */ installTarget?: { spec: string; version: string } version?: string /** Local display text with available translations or literal fallbacks, or a metadata diagnostic. */ meta?: PluginLocalizedMeta /** Untranslated `description` of this bundle's package manifest. */ description?: string /** Default GUI visibility after package and Host checks; selected or profile-installed bundles remain manageable. */ listedByDefault?: boolean /** * Selected in the profile manifest; a selected bundle whose layer was skipped carries the load `error`, and none of * its `rows` has an `entryId`. */ enabled: boolean /** Whether the profile declares this dependency; availability separately reports whether its files can be read. */ installed: boolean /** * Present for a profile dependency the installation does not also supply: the spec `pnpm add` accepts, with local * paths made absolute and the user information of an http(s) URL removed. */ source?: string /** * Whether the installation ships the bundle for the person to switch on: named by the launcher's `OPTIONAL_BUNDLES`, * held by the installation's dependencies, selected by no shipped template, and never removable. */ optional: boolean removable: boolean /** * How `updateBundle` replaces the bundle, absent when it cannot: `registry` for a third-party profile dependency saved * as a registry spec under its own name, whose newer versions `listVersions` reads; `git` for one saved as a Git spec * pinned to a full commit, which updates to another commit of the same repository directory. Either needs a semver * manifest version and no plugin management. */ update?: 'registry' | 'git' readOnlyReason?: ReadOnlyReason error?: ManagementError /** The rows the bundle's patch inserts, in declaration order; empty when the patch cannot be read. */ rows: BundleRowInfo[] /** Ids of rows the bundle's patch changes without declaring them: the built-in rows it configures or disables. */ overrides: string[] }
- **[ast-signature-changed]** `packages/boot/plugin-manager/src/types.ts` — 签名变化: PackageResult
    旧: export interface PackageResult { /** The status the run is read as having ended with; a run the manager terminated records the coerced status 1. */ exitCode: number output: string truncated: boolean logPath: string /** Present when the run failed: what kind of failure its exit and output describe. */ kind?: PluginInstallFailureKind /** * The run outlived its bound: the manager terminated it after it printed nothing for its silence bound, or the GitHub * connection check hit its deadline. Such a run reports no exit status of its own, so `exitCode` records the status * its failure is read as rather than a status the process returned. */ timedOut?: boolean /** Present when a compatibility check refused the run: the packages the running DSH version rejects. */ incompatible?: IncompatiblePlugin[] }
    新: export interface PackageResult { /** The status the run is read as having ended with; a run the manager terminated records the coerced status 1. */ exitCode: number output: string truncated: boolean logPath: string /** Present when the run failed: what kind of failure its exit and output describe. */ kind?: PluginInstallFailureKind /** * The run outlived its bound: the manager terminated it after it printed nothing for its silence bound, or the GitHub * connection check hit its deadline. Such a run reports no exit status of its own, so `exitCode` records the status * its failure is read as rather than a status the process returned. */ timedOut?: boolean /** Present when a compatibility check refused the run: the packages the running DSH version rejects. */ incompatible?: IncompatiblePlugin[] /** * Present when an `expected` check refused the run: `unexpected-package` when the run left the expected package * missing or at another version, or added or changed another direct dependency; otherwise `not-bundle` when the * expected package declares no bundle. The output names what the run installed. */ unmet?: 'unexpected-package' | 'not-bundle' }
- **[ast-signature-changed]** `packages/boot/plugin-manager/src/types.ts` — 签名变化: InstallBundleOptions
    旧: export interface InstallBundleOptions { enabled?: boolean /** Save the resolved dependency version without a range; applies to any bundle installation. */ saveExact?: boolean requestId?: PluginInstallRequestId /** Explicitly allow these pending packages' scripts for this profile, then install; a name no longer pending refuses the call. */ approvedBuilds?: string[] /** The registry asked first; absent, the configured one. The configured fallbacks follow while a registry is unreachable or stale. */ registry?: Registry }
    新: export interface InstallBundleOptions { enabled?: boolean /** Save the resolved dependency version without a range; applies to any bundle installation. */ saveExact?: boolean requestId?: PluginInstallRequestId /** Explicitly allow these pending packages' scripts for this profile, then install; a name no longer pending refuses the call. */ approvedBuilds?: string[] /** The registry asked first; absent, the configured one. The configured fallbacks follow while a registry is unreachable or stale. */ registry?: Registry /** * The package and manifest version the spec must install. An installation that leaves this package missing or at * another version, or that adds or changes another direct dependency, is undone with its profile files and modules * before its bundle loads, and fails with `unexpected-package`; one whose package declares no bundle is undone the * same way and fails with `not-bundle`, and one whose bundle patches cannot load fails as an operation error. */ expected?: { readonly name: string; readonly version: string } }
- **[ast-signature-changed]** `packages/boot/plugin-manager/src/types.ts` — 签名变化: UpdateBundleOptions
    旧: export interface UpdateBundleOptions { /** The registry asked first, normally the one that answered `listVersions`; absent, as for `listVersions`. */ readonly registry?: Registry /** Names the update's progress and the target installation's logs; `cancelInstall` stops only that installation. */ readonly requestId?: PluginInstallRequestId }
    新: export interface UpdateBundleOptions { /** The registry asked first, normally the one that answered `listVersions`; absent, as for `listVersions`. */ readonly registry?: Registry /** * The Git spec of the target version: required for a bundle listed with `update: 'git'`, where it must pin a full * commit of the installed copy's repository directory, and refused for any other. */ readonly spec?: string /** Names the update's progress and the target installation's logs; `cancelInstall` stops only that installation. */ readonly requestId?: PluginInstallRequestId }
- **[ast-signature-changed]** `packages/boot/plugin-market/src/types.ts` — 签名变化: MarketListingVersion
    旧: export interface MarketListingVersion extends MarketVersion { readonly install: MarketInstallTarget readonly compatibility: MarketCompatibility }
    新: export interface MarketListingVersion extends MarketVersion { readonly install: MarketInstallTarget readonly compatibility: MarketCompatibility /** * Whether `pluginManager.updateBundle` accepts this version for the installed copy: the copy came from a Git commit * (`pluginManager` lists it with `update: 'git'`), this version is newer, and it pins a commit in the same repository * and `path:` directory. `compatibility` reports separately whether the running DSH accepts it. */ readonly update: boolean }
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 签名变化: RowSnapshot
    旧: interface RowSnapshot { positions: Map<string, RowPosition> removed: Map<string, RowPosition> }
    新: interface RowSnapshot { viewport: Viewport positions: Map<string, RowPosition> removed: Map<string, RowPosition> }
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 签名变化: intersects
    旧: function(row:DOMRect,viewport:DOMRect)
    新: function(row:DOMRect,viewport:Viewport)
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/Checkbox.tsx` — 签名变化: Checkbox
    旧: function({ checked, onChange, label, disabled = false, title, className }:{ checked: boolean onChange: (next: boolean) => void label: string disabled?: boolean title?: string | undefined className?: string | undefined })
    新: function({ checked, onChange, label, disabled = false, title, className, modalAutofocus = false }:{ checked: boolean onChange: (next: boolean) => void label: string disabled?: boolean title?: string | undefined className?: string | undefined modalAutofocus?: boolean })
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/Menu.tsx` — 签名变化: MenuItem
    旧: export interface MenuItem { id: string label: ReactNode disabled?: boolean /** Effective binding supplied by the command owner; omitted for unbound actions. */ shortcut?: { keys: readonly string[]; aria?: string | undefined } /** Leading icon (figma .Menu_cell gap 8). */ icon?: ReactNode /** Destructive row: error-colored text/icon and danger hover fill. */ danger?: boolean /** Nested card opened to the right on hover/focus. */ submenu?: readonly MenuEntry[] }
    新: export interface MenuItem { id: string label: ReactNode disabled?: boolean /** Effective binding supplied by the command owner; omitted for unbound actions. */ shortcut?: { keys: readonly string[]; aria?: string | undefined } /** Leading icon (figma .Menu_cell gap 8). */ icon?: ReactNode /** Destructive row: error-colored text/icon and danger hover fill. */ danger?: boolean /** Child choices opened by hover, focus, click, or ArrowRight; placement follows available space. */ submenu?: readonly MenuEntry[] }
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/Menu.tsx` — 签名变化: MenuItemButton
    旧: function({
  children, shortcut, icon, current, disabled = false, disabledReason, danger = false, separatorBefore = false, onSelect,
}:MenuItemButtonProps)
    新: function({ onSelect, ...props }:MenuItemButtonProps)
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/Menu.tsx` — 签名变化: Menu
    旧: function({ open, anchor, items = [], children, selectedId, selectedIds, onSelect, onClose, align = 'start', side = 'bottom', portal = false, closeOnPointerLeave = false, dense = false, compact = false, autoFocus = false, selection = 'check', getAnchorRect, minWidthFromAnchor = false, footer, className, listClassName, contextual = false, exiting, returnFocus }:{ open: boolean /** Pointer-positioned popup: cursor clearance, grouped icons, and context gestures. */ contextual?: boolean /** Resolve the original control for focus restoration and inert/hidden dismissal. */ returnFocus?: (() => HTMLElement | null) | undefined /** Retain a dismissed context popup during its short fade. */ exiting?: 'dismiss' | 'replace' | undefined autoFocus?: boolean anchor: ReactNode items?: readonly MenuEntry[] children?: ReactNode footer?: readonly MenuEntry[] selectedId?: string | undefined selectedIds?: readonly string[] | undefined onSelect?: (id: string) => void onClose: () => void align?: 'start' | 'end' side?: 'bottom' | 'top' | 'right' portal?: boolean closeOnPointerLeave?: boolean dense?: boolean compact?: boolean selection?: 'check' | 'fill' getAnchorRect?: () => DOMRect | null minWidthFromAnchor?: boolean className?: string | undefined listClassName?: string | undefined })
    新: function({ open, anchor, items = [], children, submenuBackLabel, selectedId, selectedIds, onSelect, onClose, align = 'start', side = 'bottom', portal = false, closeOnPointerLeave = false, dense = false, compact = false, autoFocus = false, selection = 'check', anchorRef, anchorPoint, minWidthFromAnchor = false, footer, className, listClassName, contextual = false, exiting, returnFocus, isExternalTrigger }:{ open: boolean /** Pointer-positioned popup: cursor clearance, grouped icons, and context gestures. */ contextual?: boolean /** Recognizes external triggers exempt from outside dismissal; omitted exempts no external nodes. */ isExternalTrigger?: (node: Node) => boolean /** Resolve the original control for focus restoration and inert/hidden dismissal. */ returnFocus?: (() => HTMLElement | null) | undefined /** Retain a dismissed context popup during its short fade. */ exiting?: 'dismiss' | 'replace' | undefined autoFocus?: boolean anchor: ReactNode items?: readonly MenuEntry[] /** Localized return action; omitted uses the caller's parent label with a back arrow. */ submenuBackLabel?: string | undefined children?: ReactNode footer?: readonly MenuEntry[] selectedId?: string | undefined selectedIds?: readonly string[] | undefined onSelect?: (id: string) => void onClose: () => void align?: 'start' | 'end' side?: 'bottom' | 'top' | 'right' portal?: boolean closeOnPointerLeave?: boolean dense?: boolean compact?: boolean selection?: 'check' | 'fill' anchorRef?: RefObject<HTMLElement | null> | undefined /** Client coordinates captured for this opening; Safari offsets are applied once. */ anchorPoint?: { readonly x: number; readonly y: number } | undefined minWidthFromAnchor?: boolean className?: string | undefined listClassName?: string | undefined })
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/Modal.tsx` — 签名变化: ModalBaseProps
    旧: interface ModalBaseProps { open: boolean onClose: () => void title: string description?: string children?: ReactNode footer?: ReactNode className?: string contentClassName?: string shortcutModal?: string onKeyDownCapture?: KeyboardEventHandler<HTMLDivElement> backdropBlur?: boolean }
    新: interface ModalBaseProps { open: boolean onClose: () => void title: string tone?: 'warning' description?: string children?: ReactNode footer?: ReactNode className?: string contentClassName?: string shortcutModal?: string onKeyDownCapture?: KeyboardEventHandler<HTMLDivElement> backdropBlur?: boolean }
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/Modal.tsx` — 签名变化: Modal
    旧: function({
  open, onClose, title, closeLabel, description, children, footer, className, contentClassName,
  onKeyDownCapture, headless = false, backdropBlur = true, shortcutModal,
}:ModalProps)
    新: function({
  open, onClose, title, closeLabel, description, children, footer, className, contentClassName,
  onKeyDownCapture, headless = false, backdropBlur = true, shortcutModal, tone,
}:ModalProps)
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/FileTypeIcon.tsx` — 签名变化: EXTENSION_TYPES
    旧: var:Readonly<Record<string, ClassifiedFileType>>
    新: var:ReadonlyMap<string, ClassifiedFileType>
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/FileTypeIcon.tsx` — 签名变化: NAME_TYPES
    旧: var:Readonly<Record<string, ClassifiedFileType>>
    新: var:ReadonlyMap<string, ClassifiedFileType>
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/markdown/CodeBlock.tsx` — 签名变化: CodeBlockProps
    旧: export interface CodeBlockProps { /** The source text, rendered verbatim (trailing newline trimmed for display). */ code: string /** Grammar hint (markdown fence info string or a fixed caller id); unknown = plain. */ lang?: string | undefined /** * The code is still growing (a streaming markdown fence): highlight through * a per-instance {@link StreamingHighlightSession}, which re-tokenizes only * appended text and keeps completed line groups (and DOM) untouched. The * caller must keep the component instance stable across growth (a * stream-stable React key); an unchanged streamed fence also retains that * tree when it settles. Cold settled callers get shiki's HTML. */ streaming?: boolean | undefined /** Extra class merged onto the wrapper (callers position; this component draws). */ className?: string | undefined /** Ref for the stable source-content wrapper, for owners that use it as a scrollport. */ contentRef?: Ref<HTMLDivElement> | undefined /** Show a numbered gutter without adding numbers to copied source. Defaults to false. */ lineNumbers?: boolean | undefined /** Show the language and copy header; false when the caller supplies a toolbar. Defaults to true. */ showHeader?: boolean | undefined /** Copy-button idle label; the owner passes localized copy (this package is cordis-free, so copy arrives via props). */ copyLabel: string /** Copy-button label during the post-copy confirmation window. */ copiedLabel: string /** Enable the shared card toolbar and spacing; omit for custom toolbar layouts. */ toolbarLabels?: CodeToolbarLabels | undefined /** With toolbarLabels, use the owner's wrapping preference and omit the toolbar's local wrap action. */ wrap?: boolean | undefined }
    新: export interface CodeBlockProps { /** The source text, rendered verbatim (trailing newline trimmed for display). */ code: string /** Grammar hint (markdown fence info string or a fixed caller id); unknown = plain. */ lang?: string | undefined /** * Render unified-diff rows: row colors by marker column, and each file's * removed and added sides tokenized with the language its header names. * Omitted, a `diff` or `patch` `lang` selects them; `true` or `false` forces * the choice for any `lang`. */ diff?: boolean | undefined /** * The code is still growing (a streaming markdown fence): highlight through * a per-instance {@link StreamingHighlightSession}, which re-tokenizes only * appended text and keeps completed line groups (and DOM) untouched. The * caller must keep the component instance stable across growth (a * stream-stable React key); an unchanged streamed fence also retains that * tree when it settles. Cold settled callers get shiki's HTML. */ streaming?: boolean | undefined /** Extra class merged onto the wrapper (callers position; this component draws). */ className?: string | undefined /** Ref for the stable source-content wrapper, for owners that use it as a scrollport. */ contentRef?: Ref<HTMLDivElement> | undefined /** Show a numbered gutter without adding numbers to copied source. Defaults to false. */ lineNumbers?: boolean | undefined /** Show the language and copy header; false when the caller supplies a toolbar. Defaults to true. */ showHeader?: boolean | undefined /** Copy-button idle label; the owner passes localized copy (this package is cordis-free, so copy arrives via props). */ copyLabel: string /** Copy-button label during the post-copy confirmation window. */ copiedLabel: string /** Enable the shared card toolbar and spacing; omit for custom toolbar layouts. */ toolbarLabels?: CodeToolbarLabels | undefined /** With toolbarLabels, use the owner's wrapping preference and omit the toolbar's local wrap action. */ wrap?: boolean | undefined }
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/markdown/CodeBlock.tsx` — 签名变化: CodeBlock
    旧: function({
  code, lang, streaming, className, contentRef, lineNumbers = false, showHeader = true, copyLabel, copiedLabel, toolbarLabels, wrap,
}:CodeBlockProps)
    新: function({
  code, lang, diff, streaming, className, contentRef, lineNumbers = false, showHeader = true, copyLabel, copiedLabel, toolbarLabels, wrap,
}:CodeBlockProps)
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/markdown/MarkdownDelegate.tsx` — 签名变化: MarkdownDelegate
    旧: export interface MarkdownDelegate { /** Open an object menu without executing its normal activation. */ readonly getTriggerProps?: ((target: MarkdownMenuTarget) => Pick<HTMLAttributes<HTMLElement>, 'onContextMenu' | 'onKeyDown' | 'tabIndex'>) | undefined /** * Image previews for decoded local paths in this owner's workspace. The renderer * appends a per-mount `load` query parameter to `api/file` route URLs. */ readonly fileImages?: { fileDrag: FileDragActions resolve: (path: string) => string | undefined resourceAddress?: ((path: string) => string) | undefined labels: ImageLightboxLabels & { open: string; loading: string; failed: string } } | undefined /** Ordinary HTTP(S) activation; absent handlers retain native anchor behavior. */ readonly openExternalLink?: MarkdownExternalLinkHandler | undefined /** * Open a decoded local destination from settled Markdown; absent handlers leave plain text. * @param path - Absolute or workspace-relative file path. * @param options - First line to reveal when the destination specifies a line or range. */ readonly openFile?: ((path: string, options?: { line?: number }) => void) | undefined }
    新: export interface MarkdownDelegate { /** Open an object menu without executing its normal activation. */ readonly getTriggerProps?: ((target: MarkdownMenuTarget) => Pick<HTMLAttributes<HTMLElement>, 'onContextMenu' | 'onKeyDown' | 'tabIndex'>) | undefined /** * Image previews for decoded local paths in this owner's workspace. The renderer * appends a per-mount `load` query parameter to `api/file` route URLs. */ readonly fileImages?: { fileDrag: FileDragActions resolve: (path: string) => string | undefined resourceAddress?: ((path: string) => string) | undefined labels: ImageLightboxLabels & { open: string; loading: string; failed: string } } | undefined /** Ordinary HTTP(S) activation; absent handlers retain native anchor behavior. */ readonly openExternalLink?: MarkdownExternalLinkHandler | undefined /** * Open a decoded local destination from settled Markdown; absent handlers leave plain text. * @param path - Absolute or workspace-relative file path. * @param options - First line to reveal when the destination specifies a line or range. */ readonly openFile?: ((path: string, options?: { line?: number }) => void) | undefined /** * Render one fence whose language is final: it has a language and content. * Absent, the document renders fences with its built-in code and math blocks; * present, the owner renders every such fence, including `diff` and `math`. * @param fence - language, body, and streaming state. * @returns the rendered block. */ readonly renderCode?: ((fence: MarkdownDelegateFenceInfo) => ReactNode) | undefined }
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/markdown/MarkdownDelegate.tsx` — 签名变化: MarkdownDelegateProvider
    旧: function({
  children,
  openExternalLink,
  openFile,
  fileImages,
  getTriggerProps,
}:MarkdownDelegateProviderProps)
    新: function({
  children,
  openExternalLink,
  openFile,
  fileImages,
  getTriggerProps,
  renderCode,
}:MarkdownDelegateProviderProps)
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/QuotePreview.tsx` — 签名变化: QuotePreviewProps
    旧: export interface QuotePreviewProps { /** Exact selected text rendered inline and exposed in a popover while clipped. */ readonly text: string /** Composer-only removal action; omit for inert sent quotes. */ readonly removal?: QuotePreviewRemoval | undefined }
    新: export interface QuotePreviewProps { /** Exact selected text rendered inline and exposed in a popover while clipped, unless `summary` replaces it. */ readonly text: string /** Readable replacement for `text`: its label renders inline and its popover opens on every hover. */ readonly summary?: QuoteSummary | undefined /** Composer-only removal action; omit for inert sent quotes. */ readonly removal?: QuotePreviewRemoval | undefined }
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/QuotePreview.tsx` — 签名变化: QuotePreview
    旧: function({ text, removal }:QuotePreviewProps)
    新: function({ text, summary, removal }:QuotePreviewProps)
- **[ast-signature-changed]** `packages/client/ui-slots/src/renderer.ts` — 签名变化: SlotRendererHost
    旧: export interface SlotRendererHost { /** * Subscribe to a key's registration changes (microtask-batched). * @param key - slot key. * @param fn - change callback. * @returns unsubscribe. */ subscribe(key: string, fn: () => void): () => void /** * Monotonic version for uSES pairing. * @param key - slot key. * @returns current version. */ getVersion(key: string): number /** * Snapshot the registered entries for a key (stable reference between mutations). * @param key - slot key. * @returns entries in registration (list: order) sequence. */ entriesOf(key: string): readonly StoredEntry[] /** * Shadowing winners per cell for a key — the render read for single/keyed/ * list dispatch: the first live (non-abdicated) entry of each cell in * priority order; chain keys pass through unchanged (election consumes * every entry). Fresh array per call — a render-body read, not a uSES * getSnapshot source. * @param key - slot key. * @returns the winning entry per occupied cell. */ entriesOfSlot(key: string): readonly StoredEntry[] /** * Report an entry boundary crash. With `info.abdicate` (shadowing kinds) * the entry retires from its cell, one-shot, so the next survivor renders; * chain crashes report without abdicating. The registration stays on the * ledger either way. * @param key - slot key the entry rendered under. * @param entry - the crashed entry. * @param error - the crash cause. * @param info - `abdicate`: whether the crash retires the entry from its cell. */ reportEntryError(key: string, entry: StoredEntry, error: unknown, info: { abdicate: boolean }): void /** * Report a contained Factory occurrence crash without retiring its shared definition. * @param name - Factory name whose occurrence crashed. * @param registration - Factory definition or caller registration that owns the crashing Component. * @param error - the crash cause. */ reportFactoryError(name: string, registration: StoredEntry | StoredFactory, error: unknown): void /** * Declared runtime spec from the declarations ledger. * @param key - slot key. * @returns the spec, or undefined while the key is undeclared (outlets render empty). */ specOf(key: string): SlotSpec<SlotEntryDef> | undefined /** * Stale-authorization check: whether the entry is still in the ledger. * @param entry - a previously rendered entry. * @returns false once the entry's registration was disposed. */ isLive(entry: StoredEntry): boolean /** * Resolve (create or return cached) the store instance for an entry's * declared handle under a scope key; lifecycle rides the ledger axis. * @param entry - entry whose declaration carries the handle. * @param scopeBinding - exact Session binding for scoped slots, undefined for root scope. * @returns the instance, or undefined when the entry declares no store. */ storeOf(entry: StoredEntry, scopeBinding: ScopedStandardSourceBinding | undefined): StoreInstanceLike | undefined /** * Resolve a Factory Store for one render occurrence and inherited scope. * @param definition - live Factory definition. * @param scopeBinding - exact Session binding for scoped Factories, undefined for root scope. * @param occurrence - identity token owned by the render position. * @returns the occurrence Store instance, or undefined without a Store declaration. */ factoryStoreOf( definition: StoredFactory, scopeBinding: ScopedStandardSourceBinding | undefined, occurrence: object, ): StoreInstanceLike | undefined /** * Retain an exclusive Factory Store occurrence after React commits it. * Repeated setup and cleanup preserve the occurrence's Store identity. * @param definition - the live Factory definition. * @param occurrence - identity token owned by the mounted render position. * @returns an idempotent cleanup function. */ retainFactoryOccurrence(definition: StoredFactory, occurrence: object): () => void /** * Subscribe to one Factory definition's registration lifetime. * @param name - Factory name. * @param fn - change callback. * @returns the unsubscribe function. */ subscribeFactory(name: string, fn: () => void): () => void /** * Read the monotonic version for one Factory definition. * @param name - Factory name. * @returns the current definition version. */ getFactoryVersion(name: string): number /** * Read one live Factory definition. * @param name - Factory name. * @returns the definition, or undefined while unregistered. */ factoryOf(name: string): StoredFactory | undefined /** * Check retained Factory render authority. * @param definition - a previously resolved Factory definition. * @returns whether that exact definition remains live. */ isFactoryLive(definition: StoredFactory): boolean /** Root standard data assembled from domain-owned contributions. */ readonly root: HostObservable<StandardSourceBinding> /** Monotonic source updated whenever the installed scope-adapter roster changes. */ readonly scopeRevision: HostObservable<number> /** * Resolve the adapter installed for one non-root scope. * `session` and `session-maybe` intentionally resolve the same adapter. * @param scope - Slot scope. * @returns adapter, or `undefined` when the composition omitted its owner. */ scope(scope: Exclude<SlotScope, 'root'>): SlotScopeAdapter | undefined /** * Installed locale face backing the `t` standard seat (absent until the * locale plugin installs one; rendering an entry that declared `locale:` * without it is an assembly failure). */ locale?: LocaleFace | undefined }
    新: export interface SlotRendererHost { /** * Subscribe to a key's registration changes (microtask-batched). * @param key - slot key. * @param fn - change callback. * @returns unsubscribe. */ subscribe(key: string, fn: () => void): () => void /** * Monotonic version for uSES pairing. * @param key - slot key. * @returns current version. */ getVersion(key: string): number /** * Snapshot the registered entries for a key (stable reference between mutations). * @param key - slot key. * @returns entries in registration (list: order) sequence. */ entriesOf(key: string): readonly StoredEntry[] /** * Shadowing winners per cell for a key — the render read for single/keyed/ * list dispatch: the first live (non-abdicated) entry of each cell in * priority order; chain keys pass through unchanged (election consumes * every entry). Fresh array per call — a render-body read, not a uSES * getSnapshot source. * @param key - slot key. * @returns the winning entry per occupied cell. */ entriesOfSlot(key: string): readonly StoredEntry[] /** * Report an entry boundary crash. With `info.abdicate` (single, keyed, and * list) the entry retires from its cell, one-shot, so the next survivor * renders; chain and hoc crashes report without abdicating. The registration stays on the * ledger either way. * @param key - slot key the entry rendered under. * @param entry - the crashed entry. * @param error - the crash cause. * @param info - `abdicate`: whether the crash retires the entry from its cell. */ reportEntryError(key: string, entry: StoredEntry, error: unknown, info: { abdicate: boolean }): void /** * Report a contained Factory occurrence crash without retiring its shared definition. * @param name - Factory name whose occurrence crashed. * @param registration - Factory definition or caller registration that owns the crashing Component. * @param error - the crash cause. */ reportFactoryError(name: string, registration: StoredEntry | StoredFactory, error: unknown): void /** * Declared runtime spec from the declarations ledger. * @param key - slot key. * @returns the spec, or undefined while the key is undeclared (outlets render empty). */ specOf(key: string): SlotSpec<SlotEntryDef> | undefined /** * Stale-authorization check: whether the entry is still in the ledger. * @param entry - a previously rendered entry. * @returns false once the entry's registration was disposed. */ isLive(entry: StoredEntry): boolean /** * Resolve (create or return cached) the store instance for an entry's * declared handle under a scope key; lifecycle rides the ledger axis. * @param entry - entry whose declaration carries the handle. * @param scopeBinding - exact Session binding for scoped slots, undefined for root scope. * @returns the instance, or undefined when the entry declares no store. */ storeOf(entry: StoredEntry, scopeBinding: ScopedStandardSourceBinding | undefined): StoreInstanceLike | undefined /** * Resolve a Factory Store for one render occurrence and inherited scope. * @param definition - live Factory definition. * @param scopeBinding - exact Session binding for scoped Factories, undefined for root scope. * @param occurrence - identity token owned by the render position. * @returns the occurrence Store instance, or undefined without a Store declaration. */ factoryStoreOf( definition: StoredFactory, scopeBinding: ScopedStandardSourceBinding | undefined, occurrence: object, ): StoreInstanceLike | undefined /** * Retain an exclusive Factory Store occurrence after React commits it. * Repeated setup and cleanup preserve the occurrence's Store identity. * @param definition - the live Factory definition. * @param occurrence - identity token owned by the mounted render position. * @returns an idempotent cleanup function. */ retainFactoryOccurrence(definition: StoredFactory, occurrence: object): () => void /** * Subscribe to one Factory definition's registration lifetime. * @param name - Factory name. * @param fn - change callback. * @returns the unsubscribe function. */ subscribeFactory(name: string, fn: () => void): () => void /** * Read the monotonic version for one Factory definition. * @param name - Factory name. * @returns the current definition version. */ getFactoryVersion(name: string): number /** * Read one live Factory definition. * @param name - Factory name. * @returns the definition, or undefined while unregistered. */ factoryOf(name: string): StoredFactory | undefined /** * Check retained Factory render authority. * @param definition - a previously resolved Factory definition. * @returns whether that exact definition remains live. */ isFactoryLive(definition: StoredFactory): boolean /** Root standard data assembled from domain-owned contributions. */ readonly root: HostObservable<StandardSourceBinding> /** Monotonic source updated whenever the installed scope-adapter roster changes. */ readonly scopeRevision: HostObservable<number> /** * Resolve the adapter installed for one non-root scope. * `session` and `session-maybe` intentionally resolve the same adapter. * @param scope - Slot scope. * @returns adapter, or `undefined` when the composition omitted its owner. */ scope(scope: Exclude<SlotScope, 'root'>): SlotScopeAdapter | undefined /** * Installed locale face backing the `t` standard seat (absent until the * locale plugin installs one; rendering an entry that declared `locale:` * without it is an assembly failure). */ locale?: LocaleFace | undefined }
- **[ast-signature-changed]** `packages/core/agent/src/runtime-types.ts` — 签名变化: Agent
    旧: interface Agent { /** Route fallback and output controls; live accessors apply until the Session records a selection or request. */ readonly options: AgentOptions /** The live session this agent drives; its log is the durable source of truth. */ readonly session: Session /** Agent-owned access to durable model selection for future steps. */ readonly model: Model /** Agent-owned access to durable pending work. */ readonly inbox: Inbox /** The current lifecycle state, mirrored on every `agent/status` transition. */ readonly status: AgentStatus /** Agent-scoped context; its contributions are agent-local, unwind on disposal, and reject registration afterward. */ readonly ctx: Context /** * Clear queued and steering work — unless `keepInbox` — and abort the active * turn or between-turn task. The first cause wins for that activity. With no * active activity, cancellation is a no-op and does not arm later work. * @param cause - the stable caller intent carried by the active operation signal. * @param options - cancellation options; `keepInbox` preserves pending work. */ cancel(cause: AgentCancelCause, options?: CancelOptions): void /** * Resolve after the current whole-agent activity reaches quiescence. This * follows replacement work started before the observed driver retires, * but does not identify the settlement of any particular message. * @returns fulfillment after no active driver or maintenance task remains. */ whenIdle(): Promise<void> /** * Run one non-turn maintenance task from the true idle phase. The task starts * synchronously after claiming that phase; later waking input remains in the * inbox until the task settles, while public status stays `idle`. * `whenIdle()` follows both the task and any waking work released behind it. * @param task - operation whose fulfillment or rejection is preserved, with a signal aborted by {@link cancel}. * @throws synchronously when turn-driving or another maintenance task already owns the agent. * @returns the task promise. */ runMaintenance<T>(task: (signal: AbortSignal) => Promise<T>): Promise<T> /** * Route identified input to an inbox boundary and optionally wake the driver. * Waking input submitted after active cancellation is queued for the next * turn and runs when the aborted activity converges to idle; a `disposed` * cancel leaves it parked. A wake submitted while already idle always opens * its turn boundary, even when its message is cleared before the driver * claims ([driver wake convergence](../../agent-loop/src/agent.ts)). * @param message - identified content and the source that supplied it. * @param target - the preferred next-turn or next-step inbox boundary. * @param wakeup - whether delivery may wake the driver. */ send(message: UserMessage, target: InboxTarget, wakeup: boolean): void /** * Queue an ordinary follow-up turn and wake the driver. The item becomes the * sole ordinary message of its own turn. * @param message - identified prompt content and the source that supplied it. */ followup(message: UserMessage): void /** * Submit steering for the nearest step. An idle driver starts a turn; * a running driver consumes it at its next step boundary. * A rejected step leaves steering parked in the inbox until the next * wake; cancellation or disposal may discard pending steering. * @param message - identified steering content and the source that supplied it. */ steer(message: UserMessage): void /** * Queue model-facing context for the next pre-step without waking the * driver. A running driver claims it at the nearest later step boundary; * idle drivers leave it pending until follow-up or steering * wakes them. It may miss a request whose pre-step already claimed its * batch. Cancellation or disposal may discard pending context. * @param message - identified injected context and the source that supplied it. */ inject(message: UserMessage): void }
    新: interface Agent { /** Route fallback and output controls; live accessors apply until the Session records a selection or request. */ readonly options: AgentOptions /** The live session this agent drives; its log is the durable source of truth. */ readonly session: Session /** Agent-owned access to durable model selection for future steps. */ readonly model: Model /** Agent-owned access to durable pending work. */ readonly inbox: Inbox /** The current lifecycle state, mirrored on every `agent/status` transition. */ readonly status: AgentStatus /** Agent-scoped context; its contributions are agent-local, unwind on disposal, and reject registration afterward. */ readonly ctx: Context /** * Clear queued and steering work — unless `keepInbox` — and abort the active * turn or between-turn task. The first cause wins for that activity. With no * active activity, cancellation is a no-op and does not arm later work. * Queue-write failures still abort the activity and propagate to the caller. * @param cause - the stable caller intent carried by the active operation signal. * @param options - cancellation options; `keepInbox` preserves pending work. */ cancel(cause: AgentCancelCause, options?: CancelOptions): void /** * Resolve after the current whole-agent activity reaches quiescence. This * follows replacement work started before the observed driver retires, * but does not identify the settlement of any particular message. * @returns fulfillment after no active driver or maintenance task remains. */ whenIdle(): Promise<void> /** * Run one non-turn maintenance task from the true idle phase. The task starts * synchronously after claiming that phase; later waking input remains in the * inbox until the task settles, while public status stays `idle`. * `whenIdle()` follows both the task and any waking work released behind it. * @param task - operation whose fulfillment or rejection is preserved, with a signal aborted by {@link cancel}. * @throws synchronously when turn-driving or another maintenance task already owns the agent. * @returns the task promise. */ runMaintenance<T>(task: (signal: AbortSignal) => Promise<T>): Promise<T> /** * Route identified input to an inbox boundary and optionally wake the driver. * Waking input submitted after active cancellation is queued for the next * turn and runs when the aborted activity converges to idle; a `disposed` * cancel leaves it parked. A wake submitted while already idle always opens * its turn boundary, even when its message is cleared before the driver * claims ([driver wake convergence](../../agent-loop/src/agent.ts)). * @param message - identified content and the source that supplied it. * @param target - the preferred next-turn or next-step inbox boundary. * @param wakeup - whether delivery may wake the driver. */ send(message: UserMessage, target: InboxTarget, wakeup: boolean): void /** * Queue an ordinary follow-up turn and wake the driver. The item becomes the * sole ordinary message of its own turn. * @param message - identified prompt content and the source that supplied it. */ followup(message: UserMessage): void /** * Submit steering for the nearest step. An idle driver starts a turn; * a running driver consumes it at its next step boundary. * A rejected step leaves steering parked in the inbox until the next * wake; cancellation or disposal may discard pending steering. * @param message - identified steering content and the source that supplied it. */ steer(message: UserMessage): void /** * Queue model-facing context for the next pre-step without waking the * driver. A running driver claims it at the nearest later step boundary; * idle drivers leave it pending until follow-up or steering * wakes them. It may miss a request whose pre-step already claimed its * batch. Cancellation or disposal may discard pending context. * @param message - identified injected context and the source that supplied it. */ inject(message: UserMessage): void }
- **[ast-signature-changed]** `packages/core/session/src/surface.ts` — 签名变化: assertDeveloperHeader
    旧: function(event:SessionEvent,events:readonly SessionEvent[],baseSeq:SessionLogOffset)
    新: function(event:SessionEvent,read:(seq: number) => SessionEvent | undefined)
- **[ast-signature-changed]** `packages/core/session/src/surface.ts` — 签名变化: assertToolResultRewrite
    旧: function(event:SessionEvent,shadowedSeqs:readonly SessionSeq[],events:readonly SessionEvent[],baseSeq:SessionLogOffset)
    新: function(event:SessionEvent,shadowedSeqs:readonly SessionSeq[],read:(seq: number) => SessionEvent | undefined)
- **[ast-signature-changed]** `packages/core/session/src/surface.ts` — 签名变化: assertSystemHeadRewrite
    旧: function(event:SessionEvent,state:SurfaceFoldState,startIdx:number,shadowedSeqs:readonly SessionSeq[],events:readonly SessionEvent[],baseSeq:SessionLogOffset)
    新: function(event:SessionEvent,state:SurfaceFoldState,startIdx:number,shadowedSeqs:readonly SessionSeq[],read:(seq: number) => SessionEvent | undefined)
- **[ast-signature-changed]** `packages/core/session/src/surface.ts` — 签名变化: planSurfaceEvent
    旧: function(state:SurfaceFoldState,event:SessionEvent,expectedSeq:SessionSeq,events:readonly SessionEvent[],baseSeq:SessionLogOffset,projections:readonly SessionMessageProjection[])
    新: function(state:SurfaceFoldState,event:SessionEvent,expectedSeq:SessionSeq,events:readonly SessionEvent[],baseSeq:SessionLogOffset,projections:readonly SessionMessageProjection[],?candidates:readonly SessionEvent[])
- **[ast-signature-changed]** `packages/core/tools/src/contracts.ts` — 签名变化: PostToolDecision
    旧: export type PostToolDecision = | { kind: 'accept'; content?: ContentBlock[]; value?: never; additionalContexts?: UserMessage[] } | { kind: 'accept'; value: JsonValue; content?: never; additionalContexts?: UserMessage[] } | { kind: 'block'; feedback: ContentBlock[]; additionalContexts?: UserMessage[] }
    新: export type PostToolDecision = | { kind: 'accept'; content?: ContentBlock[]; value?: never; additionalContexts?: UserMessage[] } | { kind: 'accept'; value: JsonValue; content?: never; additionalContexts?: UserMessage[] } | { kind: 'block'; feedback: ContentBlock[]; info?: ToolErrorInfo; additionalContexts?: UserMessage[] }
- **[ast-signature-changed]** `packages/core/tools/src/contracts.ts` — 签名变化: ToolGuard
    旧: export type ToolGuard = (execution: Readonly<ToolExecution>) => string | undefined
    新: export type ToolGuard = (execution: Readonly<ToolExecution>) => string | ToolGuardDenial | undefined
- **[ast-signature-changed]** `packages/credentials/credentials/src/types.ts` — 签名变化: CredentialInfo
    旧: export interface CredentialInfo { /** Whether resolving the reference would currently return a value. */ configured: boolean /** Source layer currently supplying the value; absent while unconfigured. */ source?: string /** Whether the active provider can write this reference. */ writable: boolean }
    新: export interface CredentialInfo { /** Whether resolving the reference would currently return a value. */ configured: boolean /** Source layer currently supplying the value; absent while unconfigured. */ source?: string /** Whether the active provider can write this reference. */ writable: boolean /** Provider-generated masked preview of a stored value; never the full value. */ masked?: string }
- **[ast-signature-changed]** `packages/document/office-kit/src/types.ts` — 签名变化: RenderedDocumentBytes
    旧: export interface RenderedDocumentBytes extends WorkspaceFileBytes { readonly missingFonts: string[] readonly generation: OfficeToPdfGeneration }
    新: export interface RenderedDocumentBytes extends WorkspaceFileBytes { readonly missingFonts: string[] readonly generation: OfficeKitGeneration }
- **[ast-signature-changed]** `packages/team/agent-team/src/types.ts` — 签名变化: TeamTaskSnapshot
    旧: export interface TeamTaskSnapshot { readonly id: TeamTaskId readonly revision: number readonly subject: string readonly description: string readonly status: TeamTaskStatus readonly ownerId?: SessionId readonly blockedBy: TeamTaskId[] readonly writeScopes: string[] }
    新: export interface TeamTaskSnapshot { readonly id: TeamTaskId readonly revision: number readonly subject: string readonly description: string readonly status: TeamTaskStatus readonly ownerId?: SessionId /** Immutable agent path captured at assignment; absent on unnamed historical owners. */ readonly ownerName?: string readonly blockedBy: TeamTaskId[] readonly writeScopes: string[] }
- **[ast-signature-changed]** `packages/team/agent-team/src/types.ts` — 签名变化: TeamTaskView
    旧: export interface TeamTaskView { readonly id: TeamTaskId readonly revision: number readonly subject: string readonly description: string readonly status: TeamTaskStatus readonly blockedBy: TeamTaskId[] readonly writeScopes: string[] readonly ownerName?: string readonly ready: boolean readonly writeScopeWarnings: string[] }
    新: export interface TeamTaskView { readonly id: TeamTaskId readonly revision: number readonly subject: string readonly description: string readonly status: TeamTaskStatus readonly blockedBy: TeamTaskId[] readonly writeScopes: string[] readonly ownerId?: SessionId /** Immutable agent path captured at assignment; absent on unnamed historical owners. */ readonly ownerName?: string readonly ready: boolean readonly writeScopeWarnings: string[] }
- **[ast-signature-changed]** `packages/team/agent-team/src/types.ts` — 签名变化: TeamProjection
    旧: export interface TeamProjection { readonly members: TeamMemberProjection[] readonly tasks: TeamTaskView[] readonly failure?: string }
    新: export interface TeamProjection { readonly enabled: boolean readonly tasks: TeamTaskView[] readonly failure?: string }
- **[ast-signature-changed]** `packages/team/agent-team/src/types.ts` — 签名变化: UpdateTeamTaskRequest
    旧: export interface UpdateTeamTaskRequest { readonly taskId: TeamTaskId readonly expectedRevision: number readonly action: TeamTaskAction readonly subject?: string readonly description?: string readonly blockedBy?: readonly TeamTaskId[] readonly writeScopes?: readonly string[] readonly owner?: string }
    新: export interface UpdateTeamTaskRequest { readonly taskId: TeamTaskId readonly expectedRevision: number readonly action: TeamTaskAction readonly subject?: string readonly description?: string readonly blockedBy?: readonly TeamTaskId[] readonly writeScopes?: readonly string[] readonly owner?: SessionId }
- **[ast-signature-changed]** `packages/experimental/client-ui-forge/src/types.ts` — 签名变化: ForgeLocalScope
    旧: export type ForgeLocalScope = /** * The working tree and untracked files against the fork point: the base commit of the worktree the * Session created, else the merge base of HEAD with the default branch of the code host remote. */ | { readonly kind: 'branch' } /** The working tree and untracked files against HEAD. */ | { readonly kind: 'uncommitted' } /** The working tree and untracked files against the index. */ | { readonly kind: 'unstaged' } /** The index against HEAD. */ | { readonly kind: 'staged' }
    新: export type ForgeLocalScope = /** * The working tree and untracked files against a fork point: the merge base of HEAD with the * `base` ref, or while `base` is null, the base commit of the worktree the Session created, * else the merge base of HEAD with the default branch of the code host remote. With `commits`, only the changes * of those commits between the fork point and HEAD, without uncommitted or untracked files. */ | { readonly kind: 'branch'; readonly base: string | null; readonly commits: ForgeCommitRange | null } /** The working tree and untracked files against HEAD. */ | { readonly kind: 'uncommitted' } /** The working tree and untracked files against the index. */ | { readonly kind: 'unstaged' } /** The index against HEAD. */ | { readonly kind: 'staged' }
- **[ast-signature-changed]** `packages/experimental/client-ui-forge/src/types.ts` — 签名变化: ForgeDiffFile
    旧: export interface ForgeDiffFile { /** Path relative to the repository root after the change, or before it for a deleted file. */ readonly path: string /** Path before a rename, else null. */ readonly previousPath: string | null /** How the file changed. */ readonly status: ForgeDiffStatus /** Whether the content is binary, which carries no hunks. */ readonly binary: boolean /** Whether an untracked file exceeds `maxDiffBytes`, so it carries no hunks. */ readonly oversized: boolean /** Whether Git does not track the file yet; only local diffs list such files. */ readonly untracked: boolean /** Lines added. */ readonly additions: number /** Lines deleted. */ readonly deletions: number /** Hunks in file order; none for a binary file or a change of mode or name only. */ readonly hunks: readonly ForgeDiffHunk[] }
    新: export interface ForgeDiffFile { /** Path relative to the repository root after the change, or before it for a deleted file. */ readonly path: string /** Path before a rename, else null. */ readonly previousPath: string | null /** How the file changed. */ readonly status: ForgeDiffStatus /** Whether the content is binary, which carries no hunks. */ readonly binary: boolean /** Whether an untracked file exceeds `maxDiffBytes`, so it carries no hunks. */ readonly oversized: boolean /** Whether Git does not track the file yet; only local diffs list such files. */ readonly untracked: boolean /** Lines added. */ readonly additions: number /** Lines deleted. */ readonly deletions: number /** Hunks in file order; none for a binary file or a change of mode or name only. */ readonly hunks: readonly ForgeDiffHunk[] /** Review layer the path falls in. */ readonly layer: ForgeFileLayer /** * Digest of the file's change: its paths, status, and hunks, plus the blob names of a binary change, or the content * of an untracked binary file. Equal digests describe the same change; reading the same comparison again keeps it. */ readonly digest: string }
- **[ast-signature-changed]** `packages/experimental/client-ui-forge/src/types.ts` — 签名变化: ForgeChangeRequestDiff
    旧: export interface ForgeChangeRequestDiff { /** Head commit the diff describes. */ readonly headSha: string /** Changed files in the host's order. */ readonly files: readonly ForgeDiffFile[] /** * Commits the checkout's branch has beyond the head when that branch is the change request's head * branch and the head commit is present locally; null otherwise. */ readonly localAhead: number | null /** Web page of each changed file at the head commit, by path. */ readonly fileUrls: Readonly<Record<string, string>> }
    新: export interface ForgeChangeRequestDiff { /** Commit whose new side the diff describes: the head, or the last chosen commit. */ readonly headSha: string /** Changed files in the host's order. */ readonly files: readonly ForgeDiffFile[] /** * Commits the checkout's branch has beyond the head when that branch is the change request's head * branch and the head commit is present locally; null otherwise and for chosen commits. */ readonly localAhead: number | null /** Web page of each changed file at `headSha`, by path. */ readonly fileUrls: Readonly<Record<string, string>> }
- **[ast-signature-changed]** `packages/experimental/creation-recommendations/src/types.ts` — 签名变化: PageVerb
    旧: export type PageVerb = 'create' | 'keep' | 'undo' | 'cancel' | 'restore'
    新: export type PageVerb = 'create' | 'undo' | 'cancel' | 'restore'
- **[ast-signature-changed]** `packages/experimental/forge/src/types.ts` — 签名变化: ChangeRequestCheck
    旧: export interface ChangeRequestCheck { /** Check name as the host displays it. */ readonly name: string /** Normalized check outcome. */ readonly state: CheckState /** Web page for the check, or null when the host reports none. */ readonly url: string | null /** Workflow that produced the check, or null when the host reports none. */ readonly workflow: string | null /** ISO 8601 time the check started, or null before it starts and when the host reports none. */ readonly startedAt: string | null /** ISO 8601 time the check completed, or null while it runs and when the host reports none. */ readonly completedAt: string | null }
    新: export interface ChangeRequestCheck { /** Check name as the host displays it. */ readonly name: string /** Normalized check outcome. */ readonly state: CheckState /** Web page for the check, or null when the host reports none. */ readonly url: string | null /** Workflow that produced the check, or null when the host reports none. */ readonly workflow: string | null /** ISO 8601 time the check started, or null before it starts and when the host reports none. */ readonly startedAt: string | null /** ISO 8601 time the check completed, or null while it runs and when the host reports none. */ readonly completedAt: string | null /** * Identity a rerun of this check names, or null when the provider cannot rerun it, as for a commit status. Checks that * name one identity rerun together, and their failed checks can be rerun once none of them is pending. */ readonly rerun: ForgeCheckId | null }
- **[ast-signature-changed]** `packages/experimental/forge/src/types.ts` — 签名变化: ChangeRequestSnapshot
    旧: export interface ChangeRequestSnapshot { /** Change request the snapshot describes. */ readonly ref: ChangeRequestRef /** Web page of the change request. */ readonly url: string /** Title as the author wrote it. */ readonly title: string /** Lifecycle state. */ readonly state: ChangeRequestState /** Whether the author marked the change request as a draft. */ readonly draft: boolean /** Author login, or null when the host hides it. */ readonly author: string | null /** Branch that carries the proposed commits. */ readonly headBranch: string /** Commit object name at the head of the change request. */ readonly headSha: string /** Branch the change request merges into. */ readonly baseBranch: string /** Lines the change request adds. */ readonly additions: number /** Lines the change request deletes. */ readonly deletions: number /** Merge conflict status; `unknown` while the host computes it. */ readonly mergeability: Mergeability /** * Whether the host would merge the change request now for the signed-in * user: open, not a draft, and meeting the base branch's merge rules. */ readonly mergeReady: boolean /** Merge methods the repository accepts, the signed-in user's usual one first. */ readonly mergeMethods: readonly MergeMethod[] /** Aggregate review outcome. */ readonly reviewDecision: ReviewDecision /** Checks on the head commit in host order. */ readonly checks: readonly ChangeRequestCheck[] /** Combined check outcome. */ readonly checksRollup: ChecksRollup /** Whether the host reported more checks than `checks` contains. */ readonly checksTruncated: boolean /** Number of review threads that are not resolved. */ readonly unresolvedThreads: number /** ISO 8601 time of the host's last update to the change request. */ readonly updatedAt: string /** ISO 8601 time the change request was merged or closed, or null while it is open. */ readonly closedAt: string | null }
    新: export interface ChangeRequestSnapshot { /** Change request the snapshot describes. */ readonly ref: ChangeRequestRef /** Web page of the change request. */ readonly url: string /** Title as the author wrote it. */ readonly title: string /** Lifecycle state. */ readonly state: ChangeRequestState /** Whether the author marked the change request as a draft. */ readonly draft: boolean /** Author login, or null when the host hides it. */ readonly author: string | null /** Branch that carries the proposed commits. */ readonly headBranch: string /** Commit object name at the head of the change request. */ readonly headSha: string /** Branch the change request merges into. */ readonly baseBranch: string /** * Base commit the host recorded with `headSha`, whose merge base with the head starts the change request's diff; * omitted when the provider does not report it. */ readonly baseSha?: string /** Lines the change request adds. */ readonly additions: number /** Lines the change request deletes. */ readonly deletions: number /** Merge conflict status; `unknown` while the host computes it. */ readonly mergeability: Mergeability /** * Whether the host would merge the change request now for the signed-in * user: open, not a draft, and meeting the base branch's merge rules. */ readonly mergeReady: boolean /** Merge methods the repository accepts, the signed-in user's usual one first. */ readonly mergeMethods: readonly MergeMethod[] /** * Ways the signed-in user can bring the base branch's new commits into the head branch now; empty while the head is * up to date, while the branches conflict, when the user cannot update the head branch, or when the provider cannot, * so a head behind its base cannot be told apart from a current one for a user without the right to update it. */ readonly branchUpdates: readonly BranchUpdateMethod[] /** Aggregate review outcome. */ readonly reviewDecision: ReviewDecision /** Reviewers whose review is requested, in host order, then other accounts that reviewed, each once; the author is never listed. */ readonly reviewers: readonly ChangeRequestReviewer[] /** Whether the host reported more review requests or reviews than the provider read, so `reviewers` may be incomplete. */ readonly reviewersTruncated: boolean /** Whether the signed-in user may request reviews of the change request through its provider. */ readonly canRequestReviews: boolean /** Checks on the head commit in host order. */ readonly checks: readonly ChangeRequestCheck[] /** Combined check outcome. */ readonly checksRollup: ChecksRollup /** Whether the host reported more checks than `checks` contains. */ readonly checksTruncated: boolean /** Whether the signed-in user may rerun the failed checks that name a `rerun`. */ readonly canRerunChecks: boolean /** Number of counted review threads that are not resolved. */ readonly unresolvedThreads: number /** Whether the change request has more review threads than the provider counted, so `unresolvedThreads` is a lower bound. */ readonly threadsTruncated: boolean /** Issues linked to the change request, which the host closes once it merges, in host order. */ readonly closingIssues: readonly ChangeRequestIssue[] /** Whether the host reported more closing issues than `closingIssues` holds. */ readonly closingIssuesTruncated: boolean /** ISO 8601 time of the host's last update to the change request. */ readonly updatedAt: string /** ISO 8601 time the change request was merged or closed, or null while it is open. */ readonly closedAt: string | null }
- **[ast-signature-changed]** `packages/experimental/forge/src/types.ts` — 签名变化: ForgeFailure
    旧: export interface ForgeFailure { /** * `not-found`: the host does not expose it; `unauthenticated`: credentials are missing or rejected; * `too-large`: the host or the provider refuses an answer over its size limit, so reading again fails * the same way; `unavailable`: any other failure. */ readonly code: 'not-found' | 'unauthenticated' | 'too-large' | 'unavailable' /** Human-readable cause. */ readonly message: string }
    新: export interface ForgeFailure { /** * `not-found`: the host does not expose it; `unauthenticated`: credentials are missing or rejected; * `too-large`: the host or the provider refuses an answer over its size limit, so reading again fails * the same way; `stale`: the head is no longer the commit the read named, so reading again at the head of * a later status can succeed; `unsupported`: the provider does not offer the read; `unavailable`: any other failure. */ readonly code: 'not-found' | 'unauthenticated' | 'too-large' | 'stale' | 'unsupported' | 'unavailable' /** Human-readable cause. */ readonly message: string }
- **[ast-signature-changed]** `packages/experimental/forge/src/types.ts` — 签名变化: ForgeReviewRequest
    旧: export type ForgeReviewRequest = { /** Commit the user reviewed; providers must check it before writing and address that commit explicitly. */ readonly headSha: string } & ( | { readonly kind: 'comment'; readonly comment: ForgeLineComment } | { readonly kind: 'review'; readonly event: 'comment' | 'approve' | 'request-changes'; readonly body: string; readonly comments: readonly ForgeLineComment[] } )
    新: export type ForgeReviewRequest = { /** Commit the user reviewed; providers must check it before writing and address that commit explicitly. */ readonly headSha: string } & ( | { readonly kind: 'comment'; readonly comment: ForgeLineComment } | { readonly kind: 'review'; readonly event: ForgeReviewEvent; readonly body: string; readonly comments: readonly ForgeLineComment[] } )
- **[ast-signature-changed]** `packages/experimental/forge/src/types.ts` — 签名变化: ForgeActionFailure
    旧: export interface ForgeActionFailure { /** * `unauthenticated`: credentials are missing or rejected; `stale`: the head * moved past the confirmed commit; `failed`: the host refused or could not be reached. */ readonly code: 'unauthenticated' | 'stale' | 'failed' /** Human-readable cause, usually the host's own message. */ readonly message: string }
    新: export interface ForgeActionFailure { /** * `unauthenticated`: credentials are missing or rejected; `stale`: the head * moved past the confirmed commit; `failed`: the host refused or could not be reached, so nothing changed; * `unknown`: the request reached the host but its answer did not confirm the outcome, so the change may have been * applied and must be checked on the host before it is tried again. */ readonly code: 'unauthenticated' | 'stale' | 'failed' | 'unknown' /** Human-readable cause, usually the host's own message. */ readonly message: string }
- **[ast-signature-changed]** `packages/experimental/forge/src/types.ts` — 签名变化: ForgeProvider
    旧: export interface ForgeProvider { /** Forge family name stored in every repository this provider returns. */ readonly forge: string /** Publish a comment or completed review. Omission declares that this provider cannot write reviews. */ submitReview?(ref: ChangeRequestRef, request: ForgeReviewRequest, signal: AbortSignal): Promise<ForgeReviewResult> /** Map a Git remote URL to its repository, or undefined when this provider does not serve it. */ repositoryFromRemote(url: string): ForgeRepository | undefined /** Map a change request web URL to its reference, or undefined when this provider does not serve it. */ changeRequestFromUrl(url: string): ChangeRequestRef | undefined /** Build the canonical web URL of a change request this provider serves. */ changeRequestUrl(ref: ChangeRequestRef): string /** Read the status of several change requests, returning one result per requested key. */ fetch( refs: readonly ChangeRequestRef[], signal: AbortSignal, ): Promise<ReadonlyMap<ChangeRequestKey, ChangeRequestSnapshot | ForgeFailure>> /** Read all checks for one change request on demand; omission declares that only the polling preview is available. */ fetchChecks?(ref: ChangeRequestRef, signal: AbortSignal): Promise<ChangeRequestSnapshot | ForgeFailure> /** Find open change requests whose head is `branch` in `repository`, excluding the default branch and forks. */ findByHead(repository: ForgeRepository, branch: string, signal: AbortSignal): Promise<readonly ChangeRequestRef[]> /** Report whether the provider can reach `host` with current credentials. */ readiness(host: string, signal: AbortSignal): Promise<ForgeReadiness> /** Mark a draft change request ready for review, resolving to undefined once the host accepted it. */ markReady(ref: ChangeRequestRef, signal: AbortSignal): Promise<ForgeActionFailure | undefined> /** Merge a change request while its head is still `request.headSha`, resolving to undefined once merged. */ merge(ref: ChangeRequestRef, request: MergeRequest, signal: AbortSignal): Promise<ForgeActionFailure | undefined> /** Read the changes of a change request as the host computes them, as one unified patch with `a/` and `b/` path prefixes. */ diff(ref: ChangeRequestRef, signal: AbortSignal): Promise<string | ForgeFailure> /** Read the text of `path` at `commit` in the change request's repository. */ fileText(ref: ChangeRequestRef, commit: string, path: string, signal: AbortSignal): Promise<string | ForgeFailure> /** Build the web page of `path` at `commit` in the change request's repository. */ fileUrl(ref: ChangeRequestRef, commit: string, path: string): string }
    新: export interface ForgeProvider { /** Forge family name stored in every repository this provider returns. */ readonly forge: string /** Publish a comment or completed review. Omission declares that this provider cannot write reviews. */ submitReview?(ref: ChangeRequestRef, request: ForgeReviewRequest, signal: AbortSignal): Promise<ForgeReviewResult> /** * Read the review threads of a change request at head commit `headSha`. The threads are returned only when the * read names `headSha` as the head; once the head is another commit, the read resolves to a `stale` failure. * Omission declares that this provider cannot read reviews. */ readReview?(ref: ChangeRequestRef, headSha: string, signal: AbortSignal): Promise<ForgeReviewData | ForgeFailure> /** * Write to the review threads or the pending review of a change request while its head is `write.headSha`; once the * head is another commit, the write resolves to `stale` without writing. A write is never retried. Omission declares * that this provider cannot write reviews, and its `readReview` then reports no viewer permission. */ writeReview?(ref: ChangeRequestRef, write: ForgeReviewWrite, signal: AbortSignal): Promise<ForgeReviewWriteResult> /** Map a Git remote URL to its repository, or undefined when this provider does not serve it. */ repositoryFromRemote(url: string): ForgeRepository | undefined /** Map a change request web URL to its reference, or undefined when this provider does not serve it. */ changeRequestFromUrl(url: string): ChangeRequestRef | undefined /** Build the canonical web URL of a change request this provider serves. */ changeRequestUrl(ref: ChangeRequestRef): string /** Read the status of several change requests, returning one result per requested key. */ fetch( refs: readonly ChangeRequestRef[], signal: AbortSignal, ): Promise<ReadonlyMap<ChangeRequestKey, ChangeRequestSnapshot | ForgeFailure>> /** Read all checks for one change request on demand; omission declares that only the polling preview is available. */ fetchChecks?(ref: ChangeRequestRef, signal: AbortSignal): Promise<ChangeRequestSnapshot | ForgeFailure> /** Find open change requests whose head is `branch` in `repository`, excluding the default branch and forks. */ findByHead(repository: ForgeRepository, branch: string, signal: AbortSignal): Promise<readonly ChangeRequestRef[]> /** Report whether the provider can reach `host` with current credentials. */ readiness(host: string, signal: AbortSignal): Promise<ForgeReadiness> /** Mark a draft change request ready for review, resolving to undefined once the host accepted it. */ markReady(ref: ChangeRequestRef, signal: AbortSignal): Promise<ForgeActionFailure | undefined> /** Merge a change request while its head is still `request.headSha`, resolving to undefined once merged. */ merge(ref: ChangeRequestRef, request: MergeRequest, signal: AbortSignal): Promise<ForgeActionFailure | undefined> /** * Read the changes of a change request at head commit `headSha` as the host computes them, as one unified * patch with `a/` and `b/` path prefixes. A patch is returned only when it describes `headSha`; once the * head is another commit, the read resolves to a `stale` failure. `base`, when given, is the `baseSha` the * latest status recorded with `headSha`; a provider may start reading from it before it confirms the head. */ diff(ref: ChangeRequestRef, headSha: string, signal: AbortSignal, base?: string): Promise<string | ForgeFailure> /** Read the text of `path` at `commit` in the change request's repository. */ fileText(ref: ChangeRequestRef, commit: string, path: string, signal: AbortSignal): Promise<string | ForgeFailure> /** Build the web page of `path` at `commit` in the change request's repository. */ fileUrl(ref: ChangeRequestRef, commit: string, path: string): string /** * List the commits of a change request at its current head. A provider implements `commits` and `compare` * together; omitting either declares that the change request can be read only as a whole. */ commits?(ref: ChangeRequestRef, signal: AbortSignal): Promise<ForgeCommitList | ForgeFailure> /** * Read the changes from commit `base` to commit `head` in the change request's repository, as one unified patch * with `a/` and `b/` path prefixes. Both are full object names; `head` descends from `base`. */ compare?(ref: ChangeRequestRef, base: string, head: string, signal: AbortSignal): Promise<string | ForgeFailure> /** * Read the signed-in user's viewed marks on the change request's files at head commit `headSha`. The marks are * returned only when the read names `headSha` as the head; once the head is another commit, the read resolves to a * `stale` failure. A provider implements `viewedFiles` and `setViewed` together; omitting either declares that the * host keeps no viewed marks. */ viewedFiles?(ref: ChangeRequestRef, headSha: string, signal: AbortSignal): Promise<ForgeViewedFiles | ForgeFailure> /** * Set or clear the signed-in user's viewed mark on one file while the head is still `request.headSha`, resolving to * undefined once the host saved it. */ setViewed?(ref: ChangeRequestRef, request: ForgeViewedRequest, signal: AbortSignal): Promise<ForgeActionFailure | undefined> /** * Rerun the failed checks of the head commit that name a `rerun` none of whose checks is pending, while the head is * still `request.headSha`, resolving to undefined once the host accepted every rerun. Omission declares that the * provider reruns no checks, and its snapshots then name none. */ rerunChecks?(ref: ChangeRequestRef, request: ForgeRerunRequest, signal: AbortSignal): Promise<ForgeActionFailure | undefined> /** * Request reviews from more reviewers, resolving to undefined once the host accepted the request. A provider implements * `requestReviews` and `reviewerCandidates` together; omitting either declares that it requests no reviews, and its * snapshots then deny `canRequestReviews`. */ requestReviews?(ref: ChangeRequestRef, request: ForgeReviewersRequest, signal: AbortSignal): Promise<ForgeActionFailure | undefined> /** List accounts whose login or name matches `query`, the host's suggestions first, for a review request. */ reviewerCandidates?(ref: ChangeRequestRef, query: string, signal: AbortSignal): Promise<readonly ForgeReviewerCandidate[] | ForgeFailure> /** * Bring the base branch's new commits into the head branch while its head is still `request.headSha`, resolving to * undefined once the host accepted the update. Omission declares that the provider updates no branches, and its * snapshots then offer no `branchUpdates`. */ updateBranch?(ref: ChangeRequestRef, request: BranchUpdateRequest, signal: AbortSignal): Promise<ForgeActionFailure | undefined> }
- **[ast-signature-changed]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 签名变化: rank
    旧: function(decision:HookOutput['decision'])
    新: var
- **[ast-signature-changed]** `packages/experimental/liveshare/src/host/share-host.ts` — 签名变化: sourceConfined
    旧: function(shareId:string)
    新: function(shareId:string,sessionId:string)
- **[ast-signature-changed]** `packages/web/web-deepseek-api` — 签名变化: baseURL
    旧: var
    新: var:string
- **[ast-signature-changed]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 签名变化: parseIndex
    旧: function(text:string)
    新: function(bytes:Uint8Array)
- **[ast-signature-changed]** `packages/llm/llm-pi-ai/src/adapter.ts` — 签名变化: PiAiAdapterOptions
    旧: export interface PiAiAdapterOptions { /** Current validated profiles by provider route; called once per operation. */ profiles: () => ReadonlyMap<string, ResolvedPiAiProviderProfile> /** * Resolve the credential for one already-resolved profile; called once per * stream call and frozen for that call, and by `listModels`, which offers no * models while it throws `MISSING_CREDENTIAL`. `undefined` defers to the route's own * pi-ai auth, which for an installed catalog route is its provider-native * ambient discovery; the plugin allows that only for a profile naming no * credential at all, because a named reference that misses throws `LlmError` * `MISSING_CREDENTIAL` rather than falling back. */ resolveApiKey: (provider: string, profile: ResolvedPiAiProviderProfile) => Promise<string | undefined> /** * How every collection this adapter builds resolves auth the request-level * `apiKey` override does not cover. Required rather than optional: a * collection built without them gets pi-ai's in-memory default store, which * is empty at every boot and discarded on every configuration change, so a * route whose only method is a login would report itself unconfigured on * every request no matter how often the human signed in. */ auth: PiAiAuthInjection /** * Synchronously prepare this call's headers before SDK dispatch. The input * contains a fresh copy of profile headers; attribution is enforced afterward. * Omission preserves profile headers. Throws fail the call with REQUEST_HEADERS * before inference I/O. Do not retain or mutate headers after returning. * Non-TypeError messages become public diagnostics and must exclude secrets; * TypeError details and non-Error values are replaced with safe guidance. * @param request - immutable routing metadata from the prepared call. * @param headers - request-owned headers initialized from the profile. * @returns headers to pass to pi-ai after applying Harness attribution. */ prepareHeaders?: (request: PiAiRequestHeaderContext, headers: Headers) => Headers /** Resolve the optional durable attachment service at request time. */ resolveAttachments?: () => AttachmentStore | undefined /** Bridge one attachment reference into the current model-tool execution world. */ resolveImageAccess?: (attachments: AttachmentStore, ref: ImageAttachmentRef) => ImageAttachmentAccess | undefined /** * Observe one assistant history message degrading to provider-neutral * conversion because its stored replay state is unusable by this build. */ onReplayDegrade?: (detail: { provider: string; model: string; reason: string }) => void }
    新: export interface PiAiAdapterOptions { /** Current validated profiles by provider route; called once per operation. */ profiles: () => ReadonlyMap<string, ResolvedPiAiProviderProfile> /** * Resolve the credential for one already-resolved profile; called once per * stream call and frozen for that call, and by `listModels`, which offers no * models while it throws `MISSING_CREDENTIAL`. `undefined` defers to the route's own * pi-ai auth, which for an installed catalog route is its provider-native * ambient discovery; the plugin allows that only for a profile naming no * credential at all, because a named reference that misses throws `LlmError` * `MISSING_CREDENTIAL` rather than falling back. */ resolveApiKey: (provider: string, profile: ResolvedPiAiProviderProfile) => Promise<string | undefined> /** * How every collection this adapter builds resolves auth the request-level * `apiKey` override does not cover. Required rather than optional: a * collection built without them gets pi-ai's in-memory default store, which * is empty at every boot and discarded on every configuration change, so a * route whose only method is a login would report itself unconfigured on * every request no matter how often the human signed in. */ auth: PiAiAuthInjection /** * Synchronously prepare this call's headers before SDK dispatch. The input * contains a fresh copy of profile headers; attribution is enforced afterward. * Omission preserves profile headers. Throws fail the call with REQUEST_HEADERS * before inference I/O. Do not retain or mutate headers after returning. * Non-TypeError messages become public diagnostics and must exclude secrets; * TypeError details and non-Error values are replaced with safe guidance. * @param request - immutable routing metadata from the prepared call. * @param headers - request-owned headers initialized from the profile. * @returns headers to pass to pi-ai after applying Harness attribution. */ prepareHeaders?: (request: PiAiRequestHeaderContext, headers: Headers) => Headers /** Resolve the optional durable attachment service at request time. */ resolveAttachments?: () => AttachmentStore | undefined /** Bridge one attachment reference into the current model-tool execution world. */ resolveImageAccess?: (attachments: AttachmentStore, ref: ImageAttachmentRef) => ImageAttachmentAccess | undefined /** * Observe one assistant history message degrading to provider-neutral * conversion because its stored replay state is unusable by this build. */ onReplayDegrade?: (detail: { provider: string; model: string; reason: string }) => void /** * Observe one request that sent replayed assistant messages without their * signed Anthropic thinking because the request prefix changed or was never * recorded. Stale messages stay omitted, so later requests of the * conversation report them again. */ onThinkingOmitted?: (detail: { provider: string; model: string; count: number }) => void }
- **[ast-signature-changed]** `packages/llm/llm/src/attribution.ts` — 签名变化: AppIdentity
    旧: export interface AppIdentity { /** `User-Agent` product token (lowercase, hyphenated). */ product: string /** Product version; sourced from package metadata, never hand-copied. */ version: string /** Repository home URL of the app, used as the `User-Agent` comment. */ url: string }
    新: export interface AppIdentity { /** `User-Agent` product token (lowercase, hyphenated). */ product: string /** Product version; sourced from package metadata, never hand-copied. */ version: string /** Repository home URL of the app, used as the `User-Agent` comment. */ url: string /** RFC 9110 product token appended after the comment, such as `dsh-profile/web`. */ suffix?: string | undefined }
- **[ast-signature-changed]** `packages/util/error` — 签名变化: HarnessError
    旧: class(message:string,code:string,?options:ErrorOptions)
    新: class
- **[ast-signature-changed]** `packages/llm/llm/src/content.ts` — 签名变化: toolDeclarations
    旧: function(tools:readonly ToolSchema[] | undefined,mode:ToolUpdate,history:ToolHistory)
    新: function(history:ToolHistory)
- **[ast-signature-changed]** `packages/experimental/deepseek-chat-import/src/conversation.ts` — 签名变化: fragments
    旧: var
    新: var:KnownFragment[]
- **[ast-signature-changed]** `packages/llm/llm/src/retry-policy.ts` — 签名变化: DEFAULT_RETRYABLE_CODES
    旧: var
    新: var:readonly BuiltinLlmFailureCode[]
- **[ast-signature-changed]** `packages/lsp/lsp-stdio/src/connection.ts` — 签名变化: Pending
    旧: interface Pending { resolve: (value: unknown) => void reject: (error: Error) => void }
    新: interface Pending { method: string resolve: (value: unknown) => void reject: (error: Error) => void }
- **[ast-signature-changed]** `packages/mcp/mcp-client/src/tools.ts` — 签名变化: ToolBridgeOptions
    旧: export interface ToolBridgeOptions { /** Whether a registry conflict is contained or rejects this synchronization. */ registrationFailure: 'contain' | 'throw' serverName: string toolCallTimeoutMs: number }
    新: export interface ToolBridgeOptions { serverName: string toolCallTimeoutMs: number /** Generation cancellation combined with each tool execution's signal. */ signal: AbortSignal /** * Remove secret values from tool-call failures before they reach callers. * @param text - transport or protocol failure text, or MCP `isError` result text. * @returns the text with secret values replaced. */ redact?: (text: string) => string }
- **[ast-signature-changed]** `packages/document/tool-office` — 签名变化: IMAGE_MEDIA_TYPES
    旧: var:readonly ImageMediaType[]
    新: var
- **[ast-signature-changed]** `packages/mcp/mcp-client/src/tools.ts` — 签名变化: syncTools
    旧: function(client:Client,ctx:Context,opts:ToolBridgeOptions,previous:ToolDisposers)
    新: function(client:Client,ctx:Context,opts:ToolBridgeOptions,previous:ToolDisposers,eligible:() => boolean)
- **[ast-signature-changed]** `packages/mcp/mcp-client/src/connection.ts` — 签名变化: ConnectionHandle
    旧: export interface ConnectionHandle extends ServerContext { /** * Settles when the first connection attempt completes (success or failure). * The supervisor enters its reconnect loop regardless; the caller decides * whether a failed startup is fatal via `failOnStartupError`. */ ready: Promise<ConnectionOutcome> /** * Stop reconnection, close the negotiating transport or live client, wait * for the in-flight attempt and queued tool syncs to quiesce, then * unregister every tool this server still owns. */ dispose(): Promise<void> }
    新: export interface ConnectionHandle extends ServerContext { /** * Settles when the first connection attempt completes or the instance is disposed. * The supervisor applies its retry or credential-wait policy; the caller * decides whether a failed startup is fatal via `failOnStartupError`. */ ready: Promise<ConnectionOutcome> /** * Stop reconnection, cancel owned work, and unregister this server's tools. * Cleanup is bounded by `closeTimeoutMs`; incomplete cleanup is recorded in * the status cell and blocks replacement. */ dispose(): Promise<void> }
- **[ast-signature-changed]** `packages/mcp/mcp-client/src/connection.ts` — 签名变化: startConnection
    旧: function(ctx:Context,config:Config,policy:ResolvedReconnectPolicy)
    新: function(ctx:Context,config:Config,policy:ResolvedReconnectPolicy,status:McpStatusCell)
- **[ast-signature-changed]** `packages/mcp/mcp-client/src/connection.ts` — 签名变化: enqueueSync
    旧: function(generation:Client,syncOpts:ToolBridgeOptions)
    新: function(record:Generation)
- **[ast-signature-changed]** `packages/mcp/mcp-client/src/connection.ts` — 签名变化: scheduleReconnect
    旧: function()
    新: function(error:string,?connectedAt:number)
- **[ast-signature-changed]** `packages/mcp/mcp-client/src/connection.ts` — 签名变化: connectGeneration
    旧: function(startup:boolean)
    新: function()
- **[ast-signature-changed]** `packages/ptc-runtime/ptc-runtime-node/src/launch.ts` — 签名变化: bootstrapArgs
    旧: function(fs:Pick<FileSystem, 'processPathFromHostPath'>,config:LaunchConfig,maxMessageBytes:number,persistent:any)
    新: function(fs:Pick<FileSystem, 'processPathFromHostPath'>,config:LaunchConfig,maxMessageBytes:number)
- **[ast-signature-changed]** `packages/sandbox/sandbox/src/roots.ts` — 签名变化: SandboxInvalidRootError
    旧: class(path:string,detail:string)
    新: class(path:string,detail:string,subject:any)
- **[ast-signature-changed]** `packages/experimental/deepseek-chat-import/src/conversation.ts` — 签名变化: steps
    旧: var
    新: var:ReplyStep[]
- **[ast-signature-changed]** `packages/experimental/client-ui-forge` — 签名变化: attributes
    旧: var:Record<string, string | number>
    新: var
- **[ast-signature-changed]** `packages/subagent/subagent/src/catalog.ts` — 签名变化: SubagentCatalogEvent
    旧: export type SubagentCatalogEvent = & { readonly childId: SessionId readonly childCreatedAt: number } & ( | ({ readonly version: 0 } & KnownCatalogMode) | ({ readonly version: 1 } & (KnownCatalogMode | { readonly mode: 'unknown'; readonly label?: string })) | { readonly version: 2; readonly mode: 'external'; readonly label?: string } )
    新: export type SubagentCatalogEvent = & { readonly childId: SessionId readonly childCreatedAt: number } & ( | ({ readonly version: 0 } & KnownCatalogMode) | ({ readonly version: 1 } & (KnownCatalogMode | { readonly mode: 'unknown'; readonly label?: string })) | { readonly version: 2; readonly mode: 'external'; readonly label?: string } | ({ readonly version: 3; readonly name: string } & ( | { readonly mode: 'continuable'; readonly label: string } | { readonly mode: 'external'; readonly label?: string } )) )
- **[ast-signature-changed]** `packages/experimental/worktree/src/projection.ts` — 签名变化: stateSchema
    旧: var:z.ZodType<SubagentCatalogState>
    新: var:z.ZodType<WorktreeProjectionState>
- **[ast-signature-changed]** `packages/subagent/subagent/src/catalog.ts` — 签名变化: establishCatalogChild
    旧: function(parent:Session,child:SessionHeader,descriptor:{ readonly mode: 'continuable'; readonly label: string })
    新: function(parent:Session,child:SessionHeader,descriptor:{ readonly mode: 'continuable'; readonly label: string },name:string)
- **[ast-signature-changed]** `packages/subagent/subagent/src/catalog.ts` — 签名变化: establishExternalCatalogChild
    旧: function(parent:Session,childId:SessionId,label:string)
    新: function(parent:Session,childId:SessionId,label:string,name:string)
- **[ast-signature-changed]** `packages/subagent/subagent/src/types.ts` — 签名变化: SubagentActivationSpec
    旧: export interface SubagentActivationSpec { /** Registered backend to use. */ readonly provider: string /** Short task label retained in cataloged child membership. */ readonly label: string /** Optional reserved identity for a local child; external backends allocate their own ids. */ readonly childId?: SessionId /** Task, parent, and backend-supported execution options. */ readonly request: Omit<SubagentStartRequest, 'label' | 'signal'> /** Cancellation before publication; callers own later cancellation through dispose. */ readonly signal: AbortSignal /** Parent delivery notifies the model; caller delivery only returns the result. Local children always enter the parent catalog. */ readonly delivery: 'parent' | 'caller' }
    新: export interface SubagentActivationSpec extends Omit<SubagentStartRequest, 'label' | 'signal'> { /** Registered backend to use. */ readonly provider: string /** Short task label retained in cataloged child membership. */ readonly label: string /** * Requested name, unique among the parent's children: 1–32 lower-case * letters, digits, or hyphens starting with a letter, other than `lead`. * Omission selects the first free `agent-N`. */ readonly name?: string /** Optional reserved identity for a local child; external backends allocate their own ids. */ readonly childId?: SessionId /** Cancellation before publication; callers own later cancellation through dispose. */ readonly signal: AbortSignal /** Parent delivery notifies the model; caller delivery only returns the result. Local children always enter the parent catalog. */ readonly delivery: 'parent' | 'caller' }
- **[ast-signature-changed]** `packages/subagent/subagent/src/types.ts` — 签名变化: SubagentActivation
    旧: export interface SubagentActivation { /** Stable identity of the child. */ readonly childId: SessionId /** Accepted inbox message, when the backend has a local inbox. */ readonly messageId?: MessageId /** * Execution result after teardown settles and notifications are sent; capture failures reject. * Teardown failures are reported by dispose() without replacing a captured result. */ readonly result: Promise<SubagentResult> /** Stop and release this activation and its owned descendants; rejects on teardown failure. */ dispose(): Promise<void> }
    新: export interface SubagentActivation { /** Stable identity of the child. */ readonly childId: SessionId /** * Model-facing name: slash-separated names from the root when every creator * below the root is named, otherwise the child Session id. */ readonly name: string /** Accepted inbox message, when the backend has a local inbox. */ readonly messageId?: MessageId /** * Execution result after teardown settles and notifications are sent; capture failures reject. * Teardown failures are reported by dispose() without replacing a captured result. */ readonly result: Promise<SubagentResult> /** Stop and release only this activation; rejects on teardown failure. */ dispose(): Promise<void> }
- **[ast-signature-changed]** `packages/subagent/subagent/src/types.ts` — 签名变化: SubagentInterruptAuthority
    旧: export type SubagentInterruptAuthority = | { readonly kind: 'user'; readonly parentSessionId: SessionId } | { readonly kind: 'ancestor'; readonly agent: Agent }
    新: export type SubagentInterruptAuthority = | { readonly kind: 'user' } | { readonly kind: 'ancestor'; readonly agent: Agent }
- **[ast-signature-changed]** `packages/subagent/subagent/src/types.ts` — 签名变化: SubagentRunInfo
    旧: export interface SubagentRunInfo { /** Unique identity shared with the paired terminal event. */ readonly runId: SubagentRunId /** * Provider name recorded when the child was first created, retained even * after that provider is unregistered. */ readonly provider: string /** The child agent's id. */ readonly id: SessionId /** Whether this activation owns a local Agent, fixed at publication. */ readonly local: boolean }
    新: export interface SubagentRunInfo { /** Unique identity shared by one residency epoch's start/end pair. */ readonly runId: SubagentRunId /** * Provider name recorded when the child was first created, retained even * after that provider is unregistered. */ readonly provider: string /** Durable direct creator, independent of the live subagent tree root. */ readonly parentSessionId: SessionId /** The child agent's id. */ readonly id: SessionId /** Whether this activation owns a local Agent, fixed at publication. */ readonly local: boolean }
- **[ast-signature-changed]** `packages/subagent/subagent/src/types.ts` — 签名变化: SubagentRunEndInfo
    旧: export interface SubagentRunEndInfo { /** Unique identity shared with the paired start event. */ readonly runId: SubagentRunId /** The same provider name carried by the paired start event. */ readonly provider: string /** The child agent's id. */ readonly id: SessionId /** Whether this activation owns a local Agent, fixed at publication. */ readonly local: boolean /** The terminal stop reason. */ readonly stopReason: SubagentResult['stopReason'] /** * The child's final assistant output, selected by the same rule as * {@link SubagentResult.output}; absent on infrastructure rejection or when * the child produced none. */ readonly lastAssistantMessage?: readonly ContentBlock[] }
    新: export interface SubagentRunEndInfo extends SubagentRunInfo { /** The terminal stop reason. */ readonly stopReason: SubagentResult['stopReason'] /** * The child's final assistant output, selected by the same rule as * {@link SubagentResult.output}; absent on infrastructure rejection or when * the child produced none. */ readonly lastAssistantMessage?: readonly ContentBlock[] }
- **[ast-signature-changed]** `packages/subagent/subagent/src/child-agent.ts` — 签名变化: ChildComposition
    旧: export interface ChildComposition { /** Independently mounted preset; omission shares the parent's standing generation. */ readonly agentPreset?: string | undefined /** Historical descriptor persona reapplied only during cold resume. */ readonly persona?: string | undefined /** Historical descriptor tool restriction reapplied only during cold resume. */ readonly toolFilter?: ToolRestriction | undefined }
    新: export interface ChildComposition { /** Preset to mount; omission shares a supplied creator or uses host composition. */ readonly agentPreset?: string | undefined /** Historical descriptor persona reapplied only during cold resume. */ readonly persona?: string | undefined /** Historical descriptor tool restriction reapplied only during cold resume. */ readonly toolFilter?: ToolRestriction | undefined }
- **[ast-signature-changed]** `packages/subagent/subagent/src/child-agent.ts` — 签名变化: applyChildComposition
    旧: function(childCtx:Context,parent:Agent,composition:ChildComposition)
    新: function(childCtx:Context,parent:Agent | undefined,composition:ChildComposition)
- **[ast-signature-changed]** `packages/subagent/subagent/src/continuation-messages.ts` — 签名变化: SubagentSettledMessageSource
    旧: export interface SubagentSettledMessageSource { readonly kind: 'subagent-settled' /** A runtime account shown without expanding the row (`notice` context form). */ readonly form: 'notice' /** One-line account of how the child ended. */ readonly summary: string /** Session id of the child that settled. */ readonly senderSessionId: SessionId }
    新: export interface SubagentSettledMessageSource { readonly kind: 'subagent-settled' /** A runtime account shown without expanding the row (`notice` context form). */ readonly form: 'notice' /** One-line account of how the child ended. */ readonly summary: string /** Exact execution stop reason; absent on historical notices. Writers always include it. */ readonly stopReason?: SubagentResult['stopReason'] /** Session id of the child that settled. */ readonly senderSessionId: SessionId }
- **[ast-signature-changed]** `packages/subagent/subagent/src/continuation-messages.ts` — 签名变化: createAgentMessage
    旧: function(sender:Agent,content:ContentBlock[])
    新: function(sender:Agent,senderName:string,content:ContentBlock[])
- **[ast-signature-changed]** `packages/subagent/subagent/src/continuation-messages.ts` — 签名变化: settlementSummary
    旧: function(childId:SessionId,stopReason:SubagentResult['stopReason'],continuable:boolean)
    新: function(childName:string,stopReason:SubagentResult['stopReason'],continuable:boolean)
- **[ast-signature-changed]** `packages/subagent/subagent/src/continuation-messages.ts` — 签名变化: createSettlementMessage
    旧: function(childId:SessionId,terminal:SubagentResult,continuable:any,omitClosingText:any)
    新: function(childId:SessionId,childName:string,terminal:SubagentResult,continuable:any,omitClosingText:any)
- **[ast-signature-changed]** `packages/subagent/subagent/src/control-types.ts` — 签名变化: SubagentDelivery
    旧: export type SubagentDelivery = SubagentPromptRequest['delivery']
    新: export type SubagentDelivery = 'queue' | 'steer'
- **[ast-signature-changed]** `packages/subagent/subagent/src/control-types.ts` — 签名变化: SubagentPromptRequest
    旧: export interface SubagentPromptRequest { /** Identity persisted on the accepted message, minted before the call. */ readonly requestId: SubagentPromptRequestId readonly parentSessionId: SessionId readonly childSessionId: SessionId /** Required discriminator retained from the browser control address. */ readonly mode: 'continuable' /** Whether this message queues a later turn or targets the nearest step. */ readonly delivery: 'queue' | 'steer' /** * Browser prompt parts delivered as the child's user message. The Host * admits and persists image parts before delivery, so the wire never * carries a durable attachment reference the caller could fabricate. */ readonly content: readonly PromptContentPart[] /** Optional browser zone sampled for this exact human prompt. */ readonly clientTimeZone?: string }
    新: export interface SubagentPromptRequest { /** Identity persisted on the accepted message, minted before the call. */ readonly requestId: SubagentPromptRequestId readonly childSessionId: SessionId /** Whether this message queues a later turn or targets the nearest step. */ readonly delivery: SubagentDelivery /** * Browser prompt parts delivered as the child's user message. The Host * admits and persists image parts before delivery, so the wire never * carries a durable attachment reference the caller could fabricate. */ readonly content: readonly PromptContentPart[] /** Optional browser zone sampled for this exact human prompt. */ readonly clientTimeZone?: string }
- **[ast-signature-changed]** `packages/subagent/subagent/src/list-children.ts` — 签名变化: SubagentDescendantListEntry
    旧: export type SubagentDescendantListEntry = SubagentListEntry & { /** Parent whose catalog contains this child. */ readonly parentId: SessionId /** Edge distance from the requested root; direct children are `1`. */ readonly depth: number }
    新: export type SubagentDescendantListEntry = SubagentListEntry & { /** Parent whose catalog contains this child. */ readonly parentId: SessionId /** Edge distance from the requested root; direct children are `1`. */ readonly depth: number /** Slash-separated names from the requested root; absent when this child or an ancestor below the root has no name. */ readonly path?: string }
- **[ast-signature-changed]** `packages/subagent/subagent/src/projection-types.ts` — 签名变化: SubagentCatalogEntry
    旧: export type SubagentCatalogEntry = & { readonly id: SessionId readonly createdAt: number } & ( | { readonly mode: 'one-shot'; readonly label?: string } | { readonly mode: 'external'; readonly label?: string } | { readonly mode: 'continuable'; readonly label: string } | { readonly mode: 'unknown'; readonly label?: string } )
    新: export type SubagentCatalogEntry = & { readonly id: SessionId readonly createdAt: number } & ( | KnownSubagentCatalogFields | { readonly mode: 'unknown'; readonly label?: string } )
- **[ast-signature-changed]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 签名变化: errorText
    旧: function(api:Win32ProcessBindings,win32Code:number)
    新: function(error:unknown)
- **[ast-signature-changed]** `packages/terminal/terminal/src/types.ts` — 签名变化: TerminalBackend
    旧: export interface TerminalBackend { /** Stable type selected by {@link TerminalSpawnRequest.type}. */ readonly type: string /** Create an unpublished session or reject after cleaning partial resources; cleanup failure uses {@link TerminalBackendCleanupError}. */ spawn(spec: TerminalBackendSpawnSpec): Promise<TerminalBackendSession> }
    新: export interface TerminalBackend { /** Stable type selected by {@link TerminalSpawnRequest.type}. */ readonly type: string /** Create an unpublished session or reject after cleaning partial resources; cleanup failure uses `TerminalBackendCleanupError`. */ spawn(spec: TerminalBackendSpawnSpec): Promise<TerminalBackendSession> }
- **[ast-signature-changed]** `packages/web/web-deepseek-api` — 签名变化: rule
    旧: var
    新: var:Rule
- **[ast-signature-changed]** `packages/test-support/session-snapshot/src/suite.ts` — 签名变化: normalizedStringMappings
    旧: function(records:Record<string, unknown>[],freshRecords:Record<string, unknown>[],existingRecords:Record<string, unknown>[],freshContext:NormalizeContext,existingContext:NormalizeContext)
    新: function(records:Record<string, unknown>[],freshRecords:Record<string, unknown>[],existingRecords:Record<string, unknown>[],normalizedFresh:Record<string, unknown>[],normalizedExisting:Record<string, unknown>[])
- **[ast-signature-changed]** `packages/util/http-proxy/src/install.ts` — 签名变化: createPolicyDispatcher
    旧: function(policy:ProxyPolicy)
    新: function(policy:ProxyPolicy,options:DispatcherOptions)
- **[ast-signature-changed]** `packages/util/http-proxy/src/install.ts` — 签名变化: installGlobalProxy
    旧: function(policy:ProxyPolicy)
    新: function(policy:ProxyPolicy,options:DispatcherOptions)
- **[ast-signature-changed]** `packages/util/http-proxy/src/install.ts` — 签名变化: installProxyFromEnvironment
    旧: function(env:EnvLookup,report:(message: string) => void)
    新: function(env:EnvLookup,report:(message: string) => void,options:DispatcherOptions)
- **[ast-signature-changed]** `packages/util/native-command/src/host-environment.ts` — 签名变化: isWsl
    旧: function(internals:PathOpenerInternals)
    新: function(facts:HostEnvironmentFacts)
- **[ast-signature-changed]** `packages/util/plugin-market-index/src/types.ts` — 签名变化: MarketPluginMetadata
    旧: export interface MarketPluginMetadata { readonly category?: string /** Free-form strings, conventionally from package keywords; absent input becomes an empty array. */ readonly keywords: readonly string[] readonly labels: readonly string[] readonly sortKeys: Readonly<Record<string, number>> }
    新: export interface MarketPluginMetadata { readonly category?: string /** Free-form strings, conventionally from package keywords; absent or null input becomes an empty array. */ readonly keywords: readonly string[] readonly labels: readonly string[] /** Unavailable values (absent or null in JSON) are omitted; zero remains a measured value. */ readonly sortKeys: Readonly<Record<string, number>> }
- **[ast-signature-changed]** `packages/web/web-deepseek-api/src/fetch.ts` — 签名变化: DeepSeekFetchApiOptions
    旧: export interface DeepSeekFetchApiOptions extends DeepSeekWebAuth { /** API base including its path prefix; `/fetch` is appended. */ baseURL: string }
    新: export interface DeepSeekFetchApiOptions { /** Ordered authentication sources of the fetch; `/fetch` is appended to the base of the source sent. */ auth: DeepSeekWebAuth /** Settings that endpoint failures of the fetch name. */ guidance: DeepSeekWebGuidance }
- **[ast-signature-changed]** `packages/web/web-deepseek-api/src/search.ts` — 签名变化: DeepSeekSearchApiOptions
    旧: export interface DeepSeekSearchApiOptions extends DeepSeekWebAuth { /** API base including its path prefix; `/search` is appended. */ baseURL: string /** Results requested per search, from 1 through 50; a smaller request bound wins. */ count: number /** Read the user question that triggered the search; undefined or blank sends none. */ originalQuestion?: () => string | undefined }
    新: export interface DeepSeekSearchApiOptions { /** Ordered authentication sources of the search; `/search` is appended to the base of the source sent. */ auth: DeepSeekWebAuth /** Settings that endpoint failures of the search name. */ guidance: DeepSeekWebGuidance /** Results requested per search, from 1 through 50; a smaller request bound wins. */ count: number /** Most Search requests this provider starts in any one-second window. */ requestsPerSecond: number /** Read the user question that triggered the search; undefined or blank sends none. */ originalQuestion?: () => string | undefined }
- **[ast-signature-changed]** `packages/web/web-search-deepseek/src/provider.ts` — 签名变化: DeepSeekSearchProviderOptions
    旧: export interface DeepSeekSearchProviderOptions { /** * Resolve the DeepSeek account token for one search endpoint. A token takes * precedence over every API key and is sent only as `x-dsh-auth-token`; * `undefined` selects API-key authentication. */ resolveAccountToken?: (endpoint: string) => Promise<string | undefined> /** Literal DeepSeek API key; when present it wins over {@link resolveApiKey}. */ apiKey?: string /** Resolve the current DeepSeek API key for one search operation. */ resolveApiKey?: () => Promise<string | undefined> /** Credential reference named by missing-credential diagnostics. */ apiKeyEnv?: CredentialRef /** Endpoint base; `/messages` is appended. */ baseURL: string /** Anthropic-format model name. */ model: string /** `anthropic-version` header value. */ apiVersion: string /** Upper bound on generated tokens for the Messages request. */ maxTokens: number /** Maximum `web_search` server-tool uses per request. */ maxUses: number /** * Record the exact secret-free request immediately before dispatch. A throw * prevents dispatch so model-visible auxiliary input cannot escape logging. */ recordRequest?: (request: DeepSeekSearchLlmRequest) => void }
    新: export interface DeepSeekSearchProviderOptions { /** * Resolve the DeepSeek account token for one search endpoint. A token takes * precedence over every API key and is sent only as `x-dsh-auth-token`; * `undefined` selects API-key authentication. */ resolveAccountToken?: (endpoint: string) => Promise<string | undefined> /** Invalidate the exact account token rejected by HTTP 401; failures must not replace the search error. */ rejectAccountToken?: (token: string) => Promise<void> /** Literal DeepSeek API key; when present it wins over {@link resolveApiKey}. */ apiKey?: string /** Resolve the current DeepSeek API key for one search operation. */ resolveApiKey?: () => Promise<string | undefined> /** Credential reference named by missing-credential diagnostics. */ apiKeyEnv?: CredentialRef /** Endpoint base; `/messages` is appended. */ baseURL: string /** Anthropic-format model name. */ model: string /** `anthropic-version` header value. */ apiVersion: string /** Upper bound on generated tokens for the Messages request. */ maxTokens: number /** Maximum `web_search` server-tool uses per request. */ maxUses: number /** * Record the exact secret-free request immediately before dispatch. A throw * prevents dispatch so model-visible auxiliary input cannot escape logging. */ recordRequest?: (request: DeepSeekSearchLlmRequest) => void }
- **[ast-signature-changed]** `packages/web/web-search-deepseek/src/provider.ts` — 签名变化: SearchAuth
    旧: interface SearchAuth { /** `account` for a DeepSeek account token, `api-key` for an API key. */ readonly kind: 'account' | 'api-key' /** Headers carrying the credential. */ readonly headers: Readonly<Record<string, string>> }
    新: interface SearchAuth { /** `account` for a DeepSeek account token, `api-key` for an API key. */ readonly kind: 'account' | 'api-key' /** Headers carrying the credential. */ readonly headers: Readonly<Record<string, string>> /** Request-bound invalidation, present only when an account token was sent. */ readonly reject?: () => Promise<void> }
- **[ast-signature-changed]** `packages/web/web/src/types.ts` — 签名变化: WebSearchRequest
    旧: export interface WebSearchRequest { readonly query: string /** * Upper bound on returned sources; the seam truncates to it. Omitted = no * bound. `dsh-tool-web` always sets it. A provider whose API supports a * result-count control (Exa's `numResults`) should apply it at the request * layer as a cost/latency optimization; the seam enforces the bound * regardless. */ readonly maxResults?: number }
    新: export interface WebSearchRequest { readonly query: string /** * Upper bound on returned sources; the seam truncates to it. Omitted = no * bound. `dsh-tool-web` always sets it. A provider whose API supports a * result-count control (the DeepSeek Search API's `count`) should apply it * at the request layer as a cost/latency optimization; the seam enforces the * bound regardless. */ readonly maxResults?: number }
- **[ast-signature-changed]** `packages/web/web/src/types.ts` — 签名变化: WebSearchProvider
    旧: export interface WebSearchProvider { readonly id: string /** Cheap local usability check; must not make network calls. */ available(): boolean /** * Whether a search made for a model request on the `llmProvider` chat route has a * credential to send. Checks configuration only and must not make network calls. * Omitted = ready. * @param llmProvider - the provider route id of the model request, when known. * @returns false when that request's searches could not authenticate. */ ready?(llmProvider: string | undefined): Promise<boolean> /** Run one search; honor `signal` for cancellation. */ search(request: WebSearchRequest, signal?: AbortSignal): Promise<WebSearchResult> }
    新: export interface WebSearchProvider { readonly id: string /** Display name of this provider; consumers display `id` when it is omitted. */ readonly title?: string /** * What a provider picker shows under this provider when it is selected: what the provider * is suited for and what it costs or cannot do. Translations are keyed by lowercase language * id with a required English entry; consumers show nothing when it is omitted. */ readonly description?: LocalizedText /** Cheap local usability check; must not make network calls. */ available(): boolean /** * Whether a search made for a model request on the `llmProvider` chat route has a * credential to send. Checks configuration only and must not make network calls. * Omitted = ready. * @param llmProvider - the provider route id of the model request, when known. * @returns false when that request's searches could not authenticate. */ ready?(llmProvider: string | undefined): Promise<boolean> /** Run one search; honor `signal` for cancellation. */ search(request: WebSearchRequest, signal?: AbortSignal): Promise<WebSearchResult> }
- **[ast-signature-changed]** `packages/web/web/src/types.ts` — 签名变化: WebFetchProvider
    旧: export interface WebFetchProvider { readonly id: string /** Cheap local usability check; must not make network calls. */ available(): boolean /** * Whether a fetch made for a model request on the `llmProvider` chat route has a * credential to send. Checks configuration only and must not make network calls. * Omitted = ready. * @param llmProvider - the provider route id of the model request, when known. * @returns false when that request's fetches could not authenticate. */ ready?(llmProvider: string | undefined): Promise<boolean> /** Retrieve one URL; honor `signal` for cancellation. */ fetch(request: WebFetchRequest, signal?: AbortSignal): Promise<WebFetchResult> }
    新: export interface WebFetchProvider { readonly id: string /** Display name of this provider; consumers display `id` when it is omitted. */ readonly title?: string /** * What a provider picker shows under this provider when it is selected: what the provider * is suited for and what it costs or cannot do. Translations are keyed by lowercase language * id with a required English entry; consumers show nothing when it is omitted. */ readonly description?: LocalizedText /** Cheap local usability check; must not make network calls. */ available(): boolean /** * Whether a fetch made for a model request on the `llmProvider` chat route has a * credential to send. Checks configuration only and must not make network calls. * Omitted = ready. * @param llmProvider - the provider route id of the model request, when known. * @returns false when that request's fetches could not authenticate. */ ready?(llmProvider: string | undefined): Promise<boolean> /** Retrieve one URL; honor `signal` for cancellation. */ fetch(request: WebFetchRequest, signal?: AbortSignal): Promise<WebFetchResult> }
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/code-file-types.ts` — 签名变化: FILE_NAME_TYPES
    旧: var:Readonly<Record<string, CodeFileType>>
    新: var:ReadonlyMap<string, CodeFileType>
- **[ast-signature-changed]** `packages/experimental/cua/src/access-types.ts` — 签名变化: CuaSystemPermissionState
    旧: export interface CuaSystemPermissionState { accessibility: boolean screenRecording: boolean helper: CuaPermissionProcess parent: CuaPermissionProcess /** Application macOS reports as responsible for the helper, captured at startup; absent when it cannot be identified. */ launchApplication?: { name: string; path: string; icon?: string | undefined } | undefined }
    新: export type CuaSystemPermissionState = { platform: 'darwin' accessibility: boolean screenRecording: boolean helper: CuaPermissionProcess parent: CuaPermissionProcess /** Application macOS reports as responsible for the helper, captured at startup; absent when it cannot be identified. */ launchApplication?: { name: string; path: string; icon?: string | undefined } | undefined } | { platform: 'win32' sessionLocked: boolean | null captureAvailable: boolean elevated: boolean helper: CuaPermissionProcess }
- **[ast-signature-changed]** `packages/experimental/inspector/src/host/bridge/controller.ts` — 签名变化: InspectorOptions
    旧: export interface InspectorOptions { /** Loopback address used by the Worker HTTP and WebSocket endpoint. */ readonly host?: '127.0.0.1' /** First port to bind; occupied ports advance until one is available. */ readonly port?: number /** Additional exact browser origins admitted to the Client ingest socket. */ readonly clientOrigins?: readonly string[] /** Whether to observe calls made through the current global fetch function. */ readonly captureFetch?: boolean /** Maximum request-body prefix retained for one fetch. */ readonly maxRequestBodyBytes?: number /** Maximum response-body prefix retained for one fetch. */ readonly maxResponseBodyBytes?: number /** Maximum raw bytes encoded into one body observation. */ readonly maxBodyChunkBytes?: number /** Maximum total request and response body bytes retained by the Worker. */ readonly maxJournalBytes?: number /** Maximum active and completed fetch requests retained by the Worker. */ readonly maxRetainedRequests?: number /** Maximum encoded bytes accepted in one source transport frame. */ readonly maxSourceFrameBytes?: number /** Maximum observation records accepted in one source batch. */ readonly maxSourceRecordsPerFrame?: number /** Maximum records waiting in one producer queue. */ readonly maxQueuedRecords?: number /** Maximum encoded bytes waiting in one producer queue. */ readonly maxQueuedBytes?: number /** Maximum time allowed for the Worker to become ready. */ readonly startupTimeoutMs?: number /** Grace period before a stopping Worker is terminated. */ readonly stopTimeoutMs?: number /** Initial upper bound for randomized Client reconnect delay. */ readonly clientReconnectBaseMs?: number /** Maximum upper bound for randomized Client reconnect delay. */ readonly clientReconnectMaxMs?: number /** Deadline for one Worker-to-Client Runtime or Sources request. */ readonly clientRuntimeTimeoutMs?: number /** Deadline for one non-CDP semantic query. */ readonly queryTimeoutMs?: number /** Maximum live object handles retained per Client Runtime session. */ readonly maxClientRuntimeObjects?: number /** Maximum descriptors returned by one Client property request. */ readonly maxClientRuntimeProperties?: number /** Maximum encoded bytes read for one Client script or source map. */ readonly maxClientSourceBytes?: number /** Maximum Context and Fiber nodes retained in one realm snapshot. */ readonly maxCordisNodes?: number /** Disconnected Cordis snapshots retained after their live realm closes. */ readonly maxDisconnectedCordisTrees?: number }
    新: export interface InspectorOptions { /** Loopback address used by the Worker HTTP and WebSocket endpoint. */ readonly host?: '127.0.0.1' /** First port to bind; occupied ports advance until one is available. */ readonly port?: number /** Additional exact browser origins admitted to the Client ingest socket. */ readonly clientOrigins?: readonly string[] /** Whether to observe calls made through the current global fetch function. */ readonly captureFetch?: boolean /** Maximum request-body prefix retained for one fetch. */ readonly maxRequestBodyBytes?: number /** Maximum response-body prefix retained for one fetch. */ readonly maxResponseBodyBytes?: number /** Maximum raw bytes encoded into one body observation. */ readonly maxBodyChunkBytes?: number /** Maximum total request and response body bytes retained by the Worker. */ readonly maxJournalBytes?: number /** Maximum active and completed fetch requests retained by the Worker. */ readonly maxRetainedRequests?: number /** Maximum encoded bytes accepted in one source transport frame; values below 5121 leave no Cordis snapshot budget and fail. */ readonly maxSourceFrameBytes?: number /** Maximum observation records accepted in one source batch. */ readonly maxSourceRecordsPerFrame?: number /** Maximum records waiting in one producer queue. */ readonly maxQueuedRecords?: number /** Maximum encoded bytes waiting in one producer queue. */ readonly maxQueuedBytes?: number /** Maximum time allowed for the Worker to become ready. */ readonly startupTimeoutMs?: number /** Grace period before a stopping Worker is terminated. */ readonly stopTimeoutMs?: number /** Initial upper bound for randomized Client reconnect delay. */ readonly clientReconnectBaseMs?: number /** Maximum upper bound for randomized Client reconnect delay. */ readonly clientReconnectMaxMs?: number /** Deadline for one Worker-to-Client Runtime or Sources request. */ readonly clientRuntimeTimeoutMs?: number /** Deadline for one non-CDP semantic query. */ readonly queryTimeoutMs?: number /** Maximum live object handles retained per Client Runtime session. */ readonly maxClientRuntimeObjects?: number /** Maximum descriptors returned by one Client property request. */ readonly maxClientRuntimeProperties?: number /** Maximum encoded bytes read for one Client script or source map. */ readonly maxClientSourceBytes?: number /** Maximum Context and Fiber nodes retained in one realm snapshot. */ readonly maxCordisNodes?: number /** Disconnected Cordis snapshots retained after their live realm closes. */ readonly maxDisconnectedCordisTrees?: number }
- **[ast-signature-changed]** `packages/experimental/liveshare/src/host/relay-authority.ts` — 签名变化: RelayAuthorityDeps
    旧: export interface RelayAuthorityDeps { /** Shares this host publishes, which a frame and a read both update or verify. */ readonly ownerShares: Map<string, OwnerShare> /** Whether the host has been disposed. */ readonly disposed: () => boolean /** Children this host created, whose grants a narrowed frame ends. */ readonly forks: ForkRegistry /** This host's own identity, used to read subject ids as identities. */ readonly ownerIdentity: IdentityActor | undefined /** Subjects this deployment admits to every share. */ readonly allowedSubjectIds: readonly string[] /** The viewer reader, which releases work admitted against a superseded snapshot. */ readonly viewerRead: () => ViewerReadService /** Tell remote access that reader answers may have changed. */ readonly accessChanged: () => void /** Stop the running turn one share may no longer drive. */ readonly cancelShareTurn: (shareId: string, revokedSubject?: string) => void /** Stop child work whose grant is narrowed or removed. */ readonly cancelChildTurns: (shareId: string, viewer?: ShareRpcActor) => void /** Arm or re-arm one share's expiry cancellation. */ readonly scheduleShareExpiry: (share: OwnerShare) => void /** Reconcile one Session's sandbox after its shares' tiers, deadlines, or admissions changed. */ readonly reconcileSourceAccess: (sessionId: string) => void }
    新: export interface RelayAuthorityDeps { /** Shares this host publishes, which a frame and a read both update or verify. */ readonly ownerShares: Map<string, OwnerShare> /** Relay transport owned by this share host; absent callers use the module transport. */ readonly relayFetch?: RelayFetch /** Whether the host has been disposed. */ readonly disposed: () => boolean /** Children this host created, whose grants a narrowed frame ends. */ readonly forks: ForkRegistry /** This host's own identity, used to read subject ids as identities. */ readonly ownerIdentity: IdentityActor | undefined /** Subjects this deployment admits to every share. */ readonly allowedSubjectIds: readonly string[] /** The viewer reader, which releases work admitted against a superseded snapshot. */ readonly viewerRead: () => ViewerReadService /** Tell remote access that reader answers may have changed. */ readonly accessChanged: () => void /** Stop the running turn one share may no longer drive. */ readonly cancelShareTurn: (shareId: string, revokedSubject?: string) => void /** Stop child work whose grant is narrowed or removed. */ readonly cancelChildTurns: (shareId: string, viewer?: ShareRpcActor) => void /** Arm or re-arm one share's expiry cancellation. */ readonly scheduleShareExpiry: (share: OwnerShare) => void /** Reconcile one Session's sandbox after its shares' tiers, deadlines, or admissions changed. */ readonly reconcileSourceAccess: (sessionId: string) => void }
- **[ast-signature-changed]** `packages/experimental/liveshare/src/host/relay-authority.ts` — 签名变化: relayRequests
    旧: function(defaultRelay:string,share:OwnerShare,?signal:AbortSignal)
    新: function(defaultRelay:string,share:OwnerShare,signal:AbortSignal | undefined,fetchRelay:RelayFetch)
- **[ast-signature-changed]** `packages/experimental/liveshare/src/host/relay-authority.ts` — 签名变化: relayAuthorityRead
    旧: function(defaultRelay:string,share:OwnerShare,?signal:AbortSignal)
    新: function(defaultRelay:string,share:OwnerShare,signal:AbortSignal | undefined,fetchRelay:RelayFetch)
- **[ast-signature-changed]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 签名变化: ShareRegistrationSource
    旧: type ShareRegistrationSource = Pick< OwnerShare, 'shareId' | 'sessionId' | 'sessionTitle' | 'accessMode' | 'relay' | 'gatewayToken' | 'allowedSubjectIds' > & { readonly expiresAt?: string readonly allowsFork: boolean readonly sessionMode: ViewerSessionMode }
    新: type ShareRegistrationSource = Pick< OwnerShare, 'shareId' | 'sessionIds' | 'sessionTitle' | 'accessMode' | 'relay' | 'gatewayToken' | 'allowedSubjectIds' > & { readonly expiresAt?: string readonly allowsFork: boolean readonly sessionMode: ViewerSessionMode }
- **[ast-signature-changed]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 签名变化: TunnelSupervisionDeps
    旧: export interface TunnelSupervisionDeps { /** Host context, read for the optional title services the reconcile step uses. */ readonly ctx: Context /** Shares this host publishes; registration replay walks them. */ readonly ownerShares: Map<string, OwnerShare> /** Relay rows this host stopped but has not deleted. */ readonly pendingRemovals: Map<string, PendingRelayRemoval> /** This owner instance's id, carried by every registration. */ readonly instanceId: string /** Subjects this deployment admits to every share. */ readonly allowedSubjectIds: readonly string[] /** Owner identity fields every registration carries, when this host has an identity. */ readonly ownerContext: { readonly ownerProviderId?: string; readonly ownerTenantId?: string } /** This host's own identity, used when a credential carries no name. */ readonly ownerIdentity: IdentityActor | undefined /** Relay authority reads and adopted state. */ readonly relay: RelayAuthority /** The viewer reader, answered for forwarded requests. */ readonly viewerRead: () => ViewerReadService /** Tell remote access that reader answers may have changed. */ readonly accessChanged: () => void /** Stop whatever turn one share's Session is running. */ readonly cancelShareTurn: (shareId: string) => void /** Reconcile one Session's sandbox after a share stopped or expired. */ readonly reconcileSourceAccess: (sessionId: string) => void /** Stop child work whose grant is narrowed or removed. */ readonly cancelChildTurns: (shareId: string, viewer?: ShareRpcActor) => void /** Whether this host has been disposed. */ readonly disposed: () => boolean /** Owner credential file, written when a Relay reports a horizon. */ readonly ownerCredentialFile: string /** Credential this host holds now. */ readonly storedCredential: () => StoredOwnerCredential | undefined /** Replace the credential this host holds. */ readonly setStoredCredential: (credential: StoredOwnerCredential) => void /** Persist this host's owner state. */ readonly persistOwnerState: () => Promise<void> }
    新: export interface TunnelSupervisionDeps { /** Host context, read for the optional title services the reconcile step uses. */ readonly ctx: Context /** Relay transport owned by this share host; absent callers use the module transport. */ readonly relayFetch?: RelayFetch /** Shares this host publishes; registration replay walks them. */ readonly ownerShares: Map<string, OwnerShare> /** Relay rows this host stopped but has not deleted. */ readonly pendingRemovals: Map<string, PendingRelayRemoval> /** This owner instance's id, carried by every registration. */ readonly instanceId: string /** Subjects this deployment admits to every share. */ readonly allowedSubjectIds: readonly string[] /** Owner identity fields every registration carries, when this host has an identity. */ readonly ownerContext: { readonly ownerProviderId?: string; readonly ownerTenantId?: string } /** This host's own identity, used when a credential carries no name. */ readonly ownerIdentity: IdentityActor | undefined /** Relay authority reads and adopted state. */ readonly relay: RelayAuthority /** The viewer reader, answered for forwarded requests. */ readonly viewerRead: () => ViewerReadService /** Tell remote access that reader answers may have changed. */ readonly accessChanged: () => void /** Stop whatever turn one share's Session is running. */ readonly cancelShareTurn: (shareId: string) => void /** Reconcile one Session's sandbox after a share stopped or expired. */ readonly reconcileSourceAccess: (sessionId: string) => void /** Stop child work whose grant is narrowed or removed. */ readonly cancelChildTurns: (shareId: string, viewer?: ShareRpcActor) => void /** Whether this host has been disposed. */ readonly disposed: () => boolean /** Owner credential file, written when a Relay reports a horizon. */ readonly ownerCredentialFile: string /** Credential this host holds now. */ readonly storedCredential: () => StoredOwnerCredential | undefined /** Replace the credential this host holds. */ readonly setStoredCredential: (credential: StoredOwnerCredential) => void /** Persist this host's owner state. */ readonly persistOwnerState: () => Promise<void> }
- **[ast-signature-changed]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 签名变化: skipped
    旧: var
    新: var:DeepseekChatImportSkip[]
- **[ast-signature-changed]** `packages/experimental/liveshare/src/host/source-access.ts` — 签名变化: SourceAccessApplier
    旧: export type SourceAccessApplier = ( share: OwnerShare, ready: { readonly context: Context; readonly session: Session } | undefined, trigger: WriteAccessTrigger, ) => Promise<WriteAccessOutcome>
    新: export type SourceAccessApplier = ( share: OwnerShare, sessionId: string, ready: { readonly context: Context; readonly session: Session } | undefined, trigger: WriteAccessTrigger, ) => Promise<WriteAccessOutcome>
- **[ast-signature-changed]** `packages/experimental/liveshare/src/host/source-access.ts` — 签名变化: SourceAccess
    旧: export interface SourceAccess { /** * Install the access layer one share's source Session needs. * @param share - Share the layer is being installed for. * @param ready - The announced agent's own scope and session, when the caller has them. * @param trigger - Where this attempt came from, named in the diagnostic a refusal logs. * @returns What this attempt did. */ apply( share: OwnerShare, ready?: { readonly context: Context; readonly session: Session }, trigger?: WriteAccessTrigger, ): Promise<WriteAccessOutcome> /** * Whether one share's source Session carries a usable confined access layer right now. * @param shareId - Share the request arrived through. * @returns True only while the layer is installed and confined. */ confined(shareId: string): boolean /** * Why one share's source Session is not confined for driving, or undefined while it is. * @param shareId - Share the question is asked about. * @returns The refusal code, or undefined while the source Session is confined for this share. */ confinementRefusal(shareId: string): string | undefined /** * The recorded installation's own refusal code for one share's Session. * @param shareId - Share whose source Session is asked about. * @returns The refusal, or undefined when none was recorded. */ refusalOf(shareId: string): string | undefined /** * Stop child work whose grant is being narrowed or removed. * @param shareId - Share whose children are stopped. * @param viewer - Only this viewer's children, when one grant ended. */ cancelChildTurns(shareId: string, viewer?: ShareRpcActor): void /** * The recorded child may use only tools its share currently permits. * @param childSessionId - Child whose tool is being judged. * @param tool - Tool name the call names. * @returns True while the child may run that tool. */ childToolAuthorized(childSessionId: string, tool: string): boolean /** * Stop whatever turn one share's Session is running, when the share stops driving it. * * The host records only whether a turn was viewer-started, not which viewer admitted it, so it cannot * tell a revoked viewer's turn from the owner's: a share that ends its grant stops the running turn * itself. * @param shareId - Share whose capability just ended. */ cancelShareTurn(shareId: string): void /** * Make the Session's layer match its shares after one of them stopped, expired, or changed tier. * * A Session whose shares are all inactive loses its layer, which restores the Session's own tools; a * Session whose shares no longer need the bounded write is re-installed read-only. * @param sessionId - Session whose published shares changed. */ reconcileSessionAccess(sessionId: string): void /** * Prepare one share's source Session for driving, waiting only for the activation it needs. * @param sessionId - Session one published share names. * @param trigger - Where this preparation came from. */ prepareSourceSession(sessionId: string, trigger: WriteAccessTrigger): Promise<void> /** * Start preparing one share's source Session, at most once at a time, without waiting for it. * @param shareId - Share one reader just asked about. */ prepareSourceForReader(shareId: string): void /** * The paths one tool call names, as every enforcement installation in this host reads them. * @param execution - The call being judged. * @returns The paths it names, or nothing when they cannot be established. */ forkToolPaths(execution: ForkToolExecution): ForkToolPaths }
    新: export interface SourceAccess { /** * Install the access layer one source Session of a share needs. * @param share - Share the layer is being installed for. * @param sessionId - Source Session of that share the layer confines. * @param ready - The announced agent's own scope and session, when the caller has them. * @param trigger - Where this attempt came from, named in the diagnostic a refusal logs. * @returns What this attempt did. */ apply( share: OwnerShare, sessionId: string, ready?: { readonly context: Context; readonly session: Session }, trigger?: WriteAccessTrigger, ): Promise<WriteAccessOutcome> /** * Whether one source Session of a share carries a usable confined access layer right now. * @param shareId - Share the request arrived through. * @param sessionId - Source Session asked about. * @returns True only while the layer is installed and confined. */ confined(shareId: string, sessionId: string): boolean /** * Why one source Session of a share is not confined for driving, or undefined while it is. * @param shareId - Share the question is asked about. * @param sessionId - Source Session asked about. * @returns The refusal code, or undefined while that source Session is confined for this share. */ confinementRefusal(shareId: string, sessionId: string): string | undefined /** * The recorded installation's own refusal code for one source Session. * @param shareId - Share whose source Session is asked about. * @param sessionId - Source Session asked about. * @returns The refusal, or undefined when none was recorded. */ refusalOf(shareId: string, sessionId: string): string | undefined /** * Stop child work whose grant is being narrowed or removed. * @param shareId - Share whose children are stopped. * @param viewer - Only this viewer's children, when one grant ended. */ cancelChildTurns(shareId: string, viewer?: ShareRpcActor): void /** * The recorded child may use only tools its share currently permits. * @param childSessionId - Child whose tool is being judged. * @param tool - Tool name the call names. * @returns True while the child may run that tool. */ childToolAuthorized(childSessionId: string, tool: string): boolean /** * Stop whatever turn one share's Session is running, when the share stops driving it. * * The host records only whether a turn was viewer-started, not which viewer admitted it, so it cannot * tell a revoked viewer's turn from the owner's: a share that ends its grant stops the running turn * itself. * @param shareId - Share whose capability just ended. */ cancelShareTurn(shareId: string): void /** * Make the Session's layer match its shares after one of them stopped, expired, or changed tier. * * A Session whose shares are all inactive loses its layer, which restores the Session's own tools; a * Session whose shares no longer need the bounded write is re-installed read-only. * @param sessionId - Session whose published shares changed. */ reconcileSessionAccess(sessionId: string): void /** * Prepare one share's source Session for driving, waiting only for the activation it needs. * @param sessionId - Session one published share names. * @param trigger - Where this preparation came from. */ prepareSourceSession(sessionId: string, trigger: WriteAccessTrigger): Promise<void> /** * Start preparing one share's source Session, at most once at a time, without waiting for it. * @param shareId - Share one reader just asked about. */ prepareSourceForReader(shareId: string): void /** * The paths one tool call names, as every enforcement installation in this host reads them. * @param execution - The call being judged. * @returns The paths it names, or nothing when they cannot be established. */ forkToolPaths(execution: ForkToolExecution): ForkToolPaths }
- **[ast-signature-changed]** `packages/experimental/liveshare/src/host/source-access.ts` — 签名变化: sourceConfinementRefusal
    旧: function(shareId:string)
    新: function(shareId:string,sessionId:string)
- **[ast-signature-changed]** `packages/experimental/liveshare/src/host/source-access.ts` — 签名变化: refusalOf
    旧: function(shareId:string)
    新: function(shareId:string,sessionId:string)
- **[ast-signature-changed]** `packages/experimental/liveshare/src/host/owner-types.ts` — 签名变化: OwnerShare
    旧: export interface OwnerShare { readonly shareId: string readonly sessionId: string readonly sessionTitle: string readonly accessMode: 'open' | 'selected' readonly link: string /** Relay base URL this share was published to; an owner override never rewrites existing shares. */ readonly relay: string readonly gatewayToken: string readonly allowedSubjectIds: readonly string[] readonly access?: ShareAccessSummary readonly revision: number readonly createdAt: string /** ISO time after which the Relay denies viewers; absent means the share never expires. */ readonly expiresAt?: string /** * Whether an admitted viewer may fork this share; false unless the owner turned it on. * * Independent of the tier: forking is its own switch, so a view-tier share may allow it and a * writable one may refuse it. */ allowsFork: boolean /** * Which of the two tiers this share carries, as the owner chose it. * * `view` reads the source session and drives its loop inside the granted workspace without writing * it; `write` also modifies the files inside that workspace. */ sessionMode: ViewerSessionMode /** * Plugin endpoints this share exposes to its viewers, grouped by declaring plugin. * * Absent means the owner exposed none: the endpoints plugins offer stay refused. A selection grants * nothing on its own — the `share-viewer` policy intersects it with the plugin's live declaration. */ readonly viewerCapabilities?: readonly ViewerCapabilityGroup[] online: boolean }
    新: export interface OwnerShare { readonly shareId: string /** * Every source Session this share serves, primary first. * * The first entry is the Session the Relay registers and the viewer page opens first; read it through * `primarySessionIdOf` rather than keeping a second id field. The share's tier, fork switch, lifetime, * ACL, and exposed endpoints apply to all sources, and a viewer sees each source plus its own forks. */ readonly sessionIds: readonly string[] readonly sessionTitle: string readonly accessMode: 'open' | 'selected' readonly link: string /** Relay base URL this share was published to; an owner override never rewrites existing shares. */ readonly relay: string readonly gatewayToken: string readonly allowedSubjectIds: readonly string[] readonly access?: ShareAccessSummary readonly revision: number readonly createdAt: string /** ISO time after which the Relay denies viewers; absent means the share never expires. */ readonly expiresAt?: string /** * Whether an admitted viewer may fork this share; false unless the owner turned it on. * * Independent of the tier: forking is its own switch, so a view-tier share may allow it and a * writable one may refuse it. */ allowsFork: boolean /** * Which of the two tiers this share carries, as the owner chose it. * * `view` reads the source session and drives its loop inside the granted workspace without writing * it; `write` also modifies the files inside that workspace. */ sessionMode: ViewerSessionMode /** * Plugin endpoints this share exposes to its viewers, grouped by declaring plugin. * * Absent means the owner exposed none: the endpoints plugins offer stay refused. A selection grants * nothing on its own — the `share-viewer` policy intersects it with the plugin's live declaration. */ readonly viewerPlugins?: readonly ViewerPluginPolicy[] /** Whether every installed plugin's methods are open; absent reads as none. */ readonly viewerPluginAccess?: ViewerPluginAccess online: boolean }

## info

- **[package-added]** `packages/client/ui-account-notifications` — 新增包
- **[package-added]** `packages/client/ui-agent-team` — 新增包
- **[package-added]** `packages/document/office-kit` — 新增包
- **[package-added]** `packages/document/tool-office` — 新增包
- **[package-added]** `packages/experimental/deepseek-chat-import` — 新增包
- **[package-added]** `packages/experimental/terminal-panel` — 新增包
- **[package-added]** `packages/mcp/mcp-manager` — 新增包
- **[package-added]** `packages/team/agent-team` — 新增包
- **[package-added]** `packages/team/tool-agent-team` — 新增包
- **[package-added]** `packages/util/error` — 新增包
- **[package-added]** `packages/util/ripgrep` — 新增包
- **[doc-added]** `docs/cookbook/reviewing-ui-design.md` — 新增文档
- **[doc-added]** `docs/cookbook/reviewing-ui-design.zh.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-19-session-team-mode.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-19-session-team-mode.zh.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-27-retry-control-input.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-27-retry-control-input.zh.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-27-subagent-settlement-attribution.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-27-subagent-settlement-attribution.zh.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-11-02-subagent-catalog-names.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-11-02-subagent-catalog-names.zh.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-11-02-team-task-owner-names.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-11-02-team-task-owner-names.zh.md` — 新增文档
- ★ **[doc-added]** `docs/subsystems/office-kit.md` — 新增文档
- ★ **[doc-added]** `docs/subsystems/office-kit.zh.md` — 新增文档
- **[doc-added]** `docs/ui-design-review-cases.md` — 新增文档
- **[doc-added]** `docs/ui-design-review-cases.zh.md` — 新增文档
- **[doc-added]** `docs/user/guide/desktop-uninstall-cleanup.md` — 新增文档
- **[doc-added]** `docs/user/guide/desktop-uninstall-cleanup.zh.md` — 新增文档
- **[config-scope-added]** `config:@deepseek-ai/dsh-agent-team` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-client-ui-account-notifications` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-deepseek-account` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-deepseek-chat-import` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-mcp-manager` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-office-kit` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-terminal-panel` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-tool-agent-team` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-tool-office` — 新增可配置包
- ★ **[config-scope-added]** `config:@deepseek-ai/dsh-tool-subagent-control` — 新增可配置包
- **[ast-export-added]** `packages/api/terminal-controller` — 新增导出: TerminalLaunch
- **[ast-export-added]** `packages/api/terminal-controller` — 新增导出: terminalTitle
- **[ast-export-added]** `packages/api/terminal-controller` — 新增导出: controlled
- **[ast-export-added]** `packages/api/terminal-controller` — 新增导出: historyFile
- **[ast-export-added]** `packages/api/terminal-controller` — 新增导出: keepsHistory
- **[ast-export-added]** `packages/boot/app-boot` — 新增导出: HOME_LAYER_ENDPOINT_NAMES
- **[ast-export-added]** `packages/boot/app-boot` — 新增导出: isHomeLayerRouteName
- **[ast-export-added]** `packages/boot/app-boot` — 新增导出: homeLayerName
- **[ast-export-added]** `packages/boot/app-boot` — 新增导出: homeEnv
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: UpdatePlan
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: listingDiagnostic
- **[ast-export-added]** `packages/client/ui-slots` — 新增导出: HocRenderOpts
- **[ast-export-added]** `packages/client/ui-slots` — 新增导出: HocKeysOf
- **[ast-export-added]** `packages/client/ui-slots` — 新增导出: HocShare
- **[ast-export-added]** `packages/client/ui-slots` — 新增导出: hocCell
- **[ast-export-added]** `packages/core/session` — 新增导出: snapshotAppend
- **[ast-export-added]** `packages/core/session` — 新增导出: sourceEventSeqs
- **[ast-export-added]** `packages/core/session` — 新增导出: createAppendEvent
- **[ast-export-added]** `packages/core/session` — 新增导出: acceptSurface
- **[ast-export-added]** `packages/core/session` — 新增导出: publications
- **[ast-export-added]** `packages/credentials/credentials-local` — 新增导出: maskCredential
- **[ast-export-added]** `packages/credentials/credentials-local` — 新增导出: providerEnd
- **[ast-export-added]** `packages/document/office-kit` — 新增导出: KitModule
- **[ast-export-added]** `packages/document/office-kit` — 新增导出: LoadedKit
- **[ast-export-added]** `packages/document/office-kit` — 新增导出: KIT_INSTALL_HINT
- **[ast-export-added]** `packages/document/office-kit` — 新增导出: OfficeKit
- **[ast-export-added]** `packages/document/office-kit` — 新增导出: kit
- **[ast-export-added]** `packages/document/office-kit` — 新增导出: createConverter
- **[ast-export-added]** `packages/document/office-kit` — 新增导出: outputDir
- **[ast-export-added]** `packages/document/office-kit` — 新增导出: within
- **[ast-export-added]** `packages/document/office-kit` — 新增导出: png
- **[ast-export-added]** `packages/document/tool-office` — 新增导出: IMAGE_SCHEMA
- **[ast-export-added]** `packages/document/tool-office` — 新增导出: MISSING_FONTS_SCHEMA
- **[ast-export-added]** `packages/document/tool-office` — 新增导出: OFFICE_TOOL_NAMES
- **[ast-export-added]** `packages/document/tool-office` — 新增导出: RENDER_PARAMETERS
- **[ast-export-added]** `packages/document/tool-office` — 新增导出: CONVERT_PARAMETERS
- **[ast-export-added]** `packages/document/tool-office` — 新增导出: RECALCULATE_PARAMETERS
- **[ast-export-added]** `packages/document/tool-office` — 新增导出: PARAMETER_NAMES
- **[ast-export-added]** `packages/document/tool-office` — 新增导出: fileOutput
- **[ast-export-added]** `packages/document/tool-office` — 新增导出: when
- **[ast-export-added]** `packages/document/tool-office` — 新增导出: prepareInput
- **[ast-export-added]** `packages/document/tool-office` — 新增导出: readableInput
- **[ast-export-added]** `packages/document/tool-office` — 新增导出: authorizeContent
- **[ast-export-added]** `packages/document/tool-office` — 新增导出: officeSource
- **[ast-export-added]** `packages/document/tool-office` — 新增导出: codeOf
- **[ast-export-added]** `packages/document/tool-office` — 新增导出: officeFailure
- **[ast-export-added]** `packages/document/tool-office` — 新增导出: hint
- **[ast-export-added]** `packages/document/tool-office` — 新增导出: assertRenderRoute
- **[ast-export-added]** `packages/document/tool-office` — 新增导出: oversized
- **[ast-export-added]** `packages/document/tool-office` — 新增导出: stem
- **[ast-export-added]** `packages/document/tool-office` — 新增导出: outputOwner
- **[ast-export-added]** `packages/document/tool-office` — 新增导出: convertFile
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: readAt
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: unneeded
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: isCommit
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: validComment
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: validWrite
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: reviewError
- **[ast-export-added]** `packages/experimental/cua-macos` — 新增导出: CAPABILITIES
- **[ast-export-added]** `packages/experimental/cua` — 新增导出: systemPointer
- **[ast-export-added]** `packages/experimental/cua` — 新增导出: mouseControl
- **[ast-export-added]** `packages/experimental/cua` — 新增导出: requestSchema
- **[ast-export-added]** `packages/experimental/deepseek-chat-import` — 新增导出: DeepseekChatImportService
- **[ast-export-added]** `packages/experimental/worktree` — 新增导出: reclamation
- **[ast-export-added]** `packages/fs/tool-str-replace-editor` — 新增导出: alreadyExists
- **[ast-export-added]** `packages/jobs/jobs-local` — 新增导出: waitAborted
- **[ast-export-added]** `packages/lsp/lsp-stdio` — 新增导出: LspQueryTeardownError
- **[ast-export-added]** `packages/lsp/lsp-stdio` — 新增导出: queryAndTeardownFailure
- **[ast-export-added]** `packages/lsp/lsp-stdio` — 新增导出: both
- **[ast-export-added]** `packages/mcp/mcp-client` — 新增导出: DEFAULT_CLOSE_TIMEOUT_MS
- **[ast-export-added]** `packages/mcp/mcp-client` — 新增导出: connectionStatusOf
- **[ast-export-added]** `packages/mcp/mcp-client` — 新增导出: ReconnectSchema
- **[ast-export-added]** `packages/mcp/mcp-manager` — 新增导出: McpManagedServerEntry
- **[ast-export-added]** `packages/mcp/mcp-manager` — 新增导出: EntryInput
- **[ast-export-added]** `packages/mcp/mcp-manager` — 新增导出: McpServerRegistration
- **[ast-export-added]** `packages/mcp/mcp-manager` — 新增导出: ResolvedEntry
- **[ast-export-added]** `packages/mcp/mcp-manager` — 新增导出: ServerEntrySchema
- **[ast-export-added]** `packages/mcp/mcp-manager` — 新增导出: templatedStrings
- **[ast-export-added]** `packages/mcp/mcp-manager` — 新增导出: validateEntries
- **[ast-export-added]** `packages/mcp/mcp-manager` — 新增导出: ManagedRecord
- **[ast-export-added]** `packages/mcp/mcp-manager` — 新增导出: McpServerManager
- **[ast-export-added]** `packages/mcp/mcp-manager` — 新增导出: servers
- **[ast-export-added]** `packages/mcp/mcp-manager` — 新增导出: closure
- **[ast-export-added]** `packages/mcp/mcp-manager` — 新增导出: hadFailure
- **[ast-export-added]** `packages/sandbox/sandbox-local` — 新增导出: aclPreparationFailure
- **[ast-export-added]** `packages/sandbox/sandbox-local` — 新增导出: tempInsideWorkspace
- **[ast-export-added]** `packages/sandbox/sandbox-policy` — 新增导出: isExecutionWorldPath
- **[ast-export-added]** `packages/sandbox/sandbox-policy` — 新增导出: additionalWritableRoots
- **[ast-export-added]** `packages/sandbox/sandbox` — 新增导出: SANDBOX_PREPARATION_ERROR_CODES
- **[ast-export-added]** `packages/sandbox/sandbox` — 新增导出: SandboxPreparationErrorCode
- **[ast-export-added]** `packages/sandbox/sandbox` — 新增导出: SandboxPreparationError
- **[ast-export-added]** `packages/shell/shell-env` — 新增导出: DSH_INSTALL_DIR_KEY
- **[ast-export-added]** `packages/shell/shell-env` — 新增导出: DSH_NODE_EXECUTABLE_KEY
- **[ast-export-added]** `packages/shell/shell-env` — 新增导出: sea
- **[ast-export-added]** `packages/shell/tool-pwsh` — 新增导出: launchFailure
- **[ast-export-added]** `packages/skill/skill-office` — 新增导出: PYTHON_SKILLS
- **[ast-export-added]** `packages/skill/skill-office` — 新增导出: PythonEnvironment
- **[ast-export-added]** `packages/skill/skill-office` — 新增导出: PYTHON_ENVIRONMENT_SECTIONS
- **[ast-export-added]** `packages/skill/skill-office` — 新增导出: SkillRead
- **[ast-export-added]** `packages/skill/skill-office` — 新增导出: persistentReadFailure
- **[ast-export-added]** `packages/skill/skill-office` — 新增导出: reportedFailures
- **[ast-export-added]** `packages/skill/skill-office` — 新增导出: readSkill
- **[ast-export-added]** `packages/subagent/subagent` — 新增导出: catalogProjection
- **[ast-export-added]** `packages/subagent/subagent` — 新增导出: identityProjection
- **[ast-export-added]** `packages/subagent/subagent` — 新增导出: prepare
- ★ **[ast-export-added]** `packages/subagent/tool-subagent-control` — 新增导出: interrupt
- ★ **[ast-export-added]** `packages/subagent/tool-subagent-control` — 新增导出: listAgents
- ★ **[ast-export-added]** `packages/subagent/tool-subagent-control` — 新增导出: sendMessage
- ★ **[ast-export-added]** `packages/subagent/tool-subagent-control` — 新增导出: targetId
- ★ **[ast-export-added]** `packages/subagent/tool-subagent-control` — 新增导出: rootUnavailable
- ★ **[ast-export-added]** `packages/subagent/tool-subagent` — 新增导出: inheritParentReasoningEffort
- **[ast-export-added]** `packages/subprocess/subprocess-local` — 新增导出: loadNodePty
- **[ast-export-added]** `packages/team/agent-team` — 新增导出: REMOVED_CONFIG_KEYS
- **[ast-export-added]** `packages/team/tool-agent-team` — 新增导出: TEAM_POLICY
- **[ast-export-added]** `packages/team/tool-agent-team` — 新增导出: NamedTaskView
- **[ast-export-added]** `packages/team/tool-agent-team` — 新增导出: withOwnerName
- **[ast-export-added]** `packages/team/tool-agent-team` — 新增导出: taskId
- **[ast-export-added]** `packages/terminal/terminal-bash` — 新增导出: startupTimeout
- **[ast-export-added]** `packages/util/ripgrep` — 新增导出: spawnRipgrep
- **[ast-export-added]** `packages/util/ripgrep` — 新增导出: RipgrepLinesResult
- **[ast-export-added]** `packages/util/ripgrep` — 新增导出: readRipgrepLines
- **[ast-export-added]** `packages/util/ripgrep` — 新增导出: reading
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: Capability
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: Billing
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: RouteName
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: Rule
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: TOOLS_PATH
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: DEEPSEEK_API_KEY
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: OFFICIAL_PROVIDER
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: ROUTE_PACKAGES
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: CAPABILITY
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: ownRef
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: ruleSources
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: accountConfig
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: officialSource
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: accountSource
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: apiKeySource
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: misconfigured
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: missingMessage
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: addKey
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: billing
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: routeConfig
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: toolsBase
- **[ast-export-added]** `packages/web/web` — 新增导出: emitChanged
- **[ast-export-added]** `packages/web/web` — 新增导出: providerInfo
- **[ast-export-added]** `packages/api/terminal-controller/src/types.ts` — 新增导出: TerminalParty
- **[ast-export-added]** `packages/api/terminal-controller/src/types.ts` — 新增导出: TerminalSandboxMode
- **[ast-export-added]** `packages/api/terminal-controller/src/types.ts` — 新增导出: TerminalScreenRequest
- **[ast-export-added]** `packages/api/terminal-controller/src/types.ts` — 新增导出: TerminalScreenPage
- **[ast-export-added]** `packages/api/terminal-controller/src/types.ts` — 新增导出: TerminalScreenMark
- **[ast-export-added]** `packages/api/terminal-controller/src/agent.ts` — 新增导出: AgentTerminalErrorCode
- **[ast-export-added]** `packages/api/terminal-controller/src/agent.ts` — 新增导出: AgentTerminalError
- **[ast-export-added]** `packages/api/terminal-controller/src/agent.ts` — 新增导出: AgentTerminalRequest
- **[ast-export-added]** `packages/api/terminal-controller/src/agent.ts` — 新增导出: AgentTerminal
- **[ast-export-added]** `packages/api/terminal-controller/src/agent.ts` — 新增导出: AgentTerminalHandle
- **[ast-export-added]** `packages/api/workspace-files/src/types.ts` — 新增导出: WorkspaceFileSearchRequest
- **[ast-export-added]** `packages/api/workspace-files/src/types.ts` — 新增导出: WorkspaceFileSearchMatch
- **[ast-export-added]** `packages/api/workspace-files/src/types.ts` — 新增导出: WorkspaceFileSearchResult
- **[ast-export-added]** `packages/boot/plugin-manager/src/install-spec.ts` — 新增导出: FULL_COMMIT
- **[ast-export-added]** `packages/boot/plugin-manager/src/install-spec.ts` — 新增导出: pinnedGitOrigin
- **[ast-export-added]** `packages/boot/plugin-manager/src/install-spec.ts` — 新增导出: others
- **[ast-export-added]** `packages/client/ui-account-notifications/src/config.ts` — 新增导出: NOTIFICATIONS_CONFIG_GLOBAL
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 新增导出: Viewport
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 新增导出: visibleViewport
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/Menu.tsx` — 新增导出: pointX
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/Menu.tsx` — 新增导出: pointY
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/Menu.tsx` — 新增导出: point
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/Menu.tsx` — 新增导出: remembered
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/Menu.tsx` — 新增导出: submenu
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/Menu.tsx` — 新增导出: submenuEvents
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/Menu.tsx` — 新增导出: anchorName
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/Menu.tsx` — 新增导出: currentAnchor
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/pointer-grace.ts` — 新增导出: POINTER_GRACE_MS
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/pointer-grace.ts` — 新增导出: PointerGrace
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/pointer-grace.ts` — 新增导出: usePointerGrace
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/markdown/CodeBlock.tsx` — 新增导出: DIFF_ROW_CLASS
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/markdown/CodeBlock.tsx` — 新增导出: renderDiffRow
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/markdown/CodeBlock.tsx` — 新增导出: kindClass
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/markdown/CodeBlock.tsx` — 新增导出: diffRows
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/markdown/CodeBlock.tsx` — 新增导出: diffTokens
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/markdown/FenceBlocks.tsx` — 新增导出: FenceCodeBlockProps
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/markdown/FenceBlocks.tsx` — 新增导出: FenceCodeBlock
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/markdown/FenceBlocks.tsx` — 新增导出: FenceMathBlock
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/markdown/MarkdownDelegate.tsx` — 新增导出: MarkdownDelegateFenceInfo
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: IconLayersOutlineRegular
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: IconLayersOutlineMedium
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: IconEyeOutlineRegular
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: IconEyeOutlineMedium
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: IconEyeOffOutlineRegular
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: IconEyeOffOutlineMedium
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: IconUploadOutlineRegular
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: IconUploadOutlineMedium
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/QuotePreview.tsx` — 新增导出: QuoteSummary
- **[ast-export-added]** `packages/core/session/src/types.ts` — 新增导出: SessionEventInput
- **[ast-export-added]** `packages/core/session/src/surface.ts` — 新增导出: projectionEvents
- **[ast-export-added]** `packages/core/session/src/surface.ts` — 新增导出: lastProcessedSeq
- **[ast-export-added]** `packages/core/session/src/surface.ts` — 新增导出: plans
- **[ast-export-added]** `packages/core/tool-executor-ptc/src/errors.ts` — 新增导出: ToolCallLimitExceededError
- **[ast-export-added]** `packages/core/tool-executor-ptc/src/errors.ts` — 新增导出: CodeResetFailedError
- **[ast-export-added]** `packages/core/tools/src/contracts.ts` — 新增导出: ToolContextUnavailableError
- **[ast-export-added]** `packages/core/tools/src/contracts.ts` — 新增导出: ToolGuardDenial
- **[ast-export-added]** `packages/credentials/deepseek-account/src/types.ts` — 新增导出: AccountUpdate
- **[ast-export-added]** `packages/credentials/deepseek-account/src/types.ts` — 新增导出: AccountNotificationId
- **[ast-export-added]** `packages/credentials/deepseek-account/src/types.ts` — 新增导出: AccountNotificationEvent
- **[ast-export-added]** `packages/credentials/deepseek-account/src/types.ts` — 新增导出: AccountNotificationAction
- **[ast-export-added]** `packages/credentials/deepseek-account/src/types.ts` — 新增导出: AccountNotification
- **[ast-export-added]** `packages/credentials/deepseek-account/src/types.ts` — 新增导出: AccountNotificationBatch
- **[ast-export-added]** `packages/document/office-kit/src/errors.ts` — 新增导出: OfficeKitError
- **[ast-export-added]** `packages/document/office-kit/src/identity.ts` — 新增导出: OfficeKitGeneration
- **[ast-export-added]** `packages/document/office-kit/src/identity.ts` — 新增导出: OfficeKitKey
- **[ast-export-added]** `packages/document/office-kit/src/types.ts` — 新增导出: OfficeKitPriority
- **[ast-export-added]** `packages/document/office-kit/src/types.ts` — 新增导出: OfficeKitSource
- **[ast-export-added]** `packages/document/office-kit/src/types.ts` — 新增导出: OfficeKitRequest
- **[ast-export-added]** `packages/document/office-kit/src/types.ts` — 新增导出: OfficeImageInputExtension
- **[ast-export-added]** `packages/document/office-kit/src/types.ts` — 新增导出: OfficeDocumentExtension
- **[ast-export-added]** `packages/document/office-kit/src/types.ts` — 新增导出: OfficeWorkbookExtension
- **[ast-export-added]** `packages/document/office-kit/src/types.ts` — 新增导出: OfficeConversionFormat
- **[ast-export-added]** `packages/document/office-kit/src/types.ts` — 新增导出: OfficeRecalculationFormat
- **[ast-export-added]** `packages/document/office-kit/src/types.ts` — 新增导出: OfficeImagesRequest
- **[ast-export-added]** `packages/document/office-kit/src/types.ts` — 新增导出: OfficeImage
- **[ast-export-added]** `packages/document/office-kit/src/types.ts` — 新增导出: OfficeImagesResult
- **[ast-export-added]** `packages/document/office-kit/src/types.ts` — 新增导出: OfficeOutputTarget
- **[ast-export-added]** `packages/document/office-kit/src/types.ts` — 新增导出: OfficeConversionRequest
- **[ast-export-added]** `packages/document/office-kit/src/types.ts` — 新增导出: OfficeRecalculationRequest
- **[ast-export-added]** `packages/document/office-kit/src/types.ts` — 新增导出: OfficeFileResult
- **[ast-export-added]** `packages/document/office-kit/src/types.ts` — 新增导出: OfficeKitResult
- **[ast-export-added]** `packages/document/office-kit/src/types.ts` — 新增导出: OfficeKitErrorCode
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeBaseBranch
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeAutomaticBase
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeBaseBranches
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeCommitRange
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeFileLayer
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeLocalCommits
- **[ast-export-added]** `packages/experimental/cua-macos/src/guidance.ts` — 新增导出: PLATFORM_GUIDANCE
- **[ast-export-added]** `packages/experimental/cua-macos/src/guidance.ts` — 新增导出: methodDetails
- **[ast-export-added]** `packages/experimental/cua/src/types.ts` — 新增导出: CuaAppHandle
- **[ast-export-added]** `packages/experimental/cua/src/types.ts` — 新增导出: CuaSnapshotId
- **[ast-export-added]** `packages/experimental/cua/src/types.ts` — 新增导出: CuaElementId
- **[ast-export-added]** `packages/experimental/cua/src/types.ts` — 新增导出: CuaOperation
- **[ast-export-added]** `packages/experimental/cua/src/types.ts` — 新增导出: CuaParameters
- **[ast-export-added]** `packages/experimental/cua/src/types.ts` — 新增导出: CuaDispatch
- **[ast-export-added]** `packages/experimental/cua/src/types.ts` — 新增导出: CuaScreenshot
- **[ast-export-added]** `packages/experimental/cua/src/types.ts` — 新增导出: CuaObservationSink
- **[ast-export-added]** `packages/experimental/cua/src/types.ts` — 新增导出: CuaObservationOptions
- **[ast-export-added]** `packages/experimental/cua/src/types.ts` — 新增导出: CuaAxOptions
- **[ast-export-added]** `packages/experimental/cua/src/types.ts` — 新增导出: CuaCapabilities
- **[ast-export-added]** `packages/experimental/cua/src/types.ts` — 新增导出: CuaStartupCapabilities
- **[ast-export-added]** `packages/experimental/cua/src/types.ts` — 新增导出: CuaAppInfo
- **[ast-export-added]** `packages/experimental/cua/src/types.ts` — 新增导出: CuaFoundAppInfo
- **[ast-export-added]** `packages/experimental/cua/src/types.ts` — 新增导出: CuaBounds
- **[ast-export-added]** `packages/experimental/cua/src/types.ts` — 新增导出: CuaWindowInfo
- **[ast-export-added]** `packages/experimental/cua/src/types.ts` — 新增导出: CuaActionResult
- **[ast-export-added]** `packages/experimental/cua/src/types.ts` — 新增导出: CuaHoverResult
- **[ast-export-added]** `packages/experimental/cua/src/types.ts` — 新增导出: CuaCoordinateOptions
- **[ast-export-added]** `packages/experimental/cua/src/types.ts` — 新增导出: CuaShowResult
- **[ast-export-added]** `packages/experimental/cua/src/types.ts` — 新增导出: CuaPointerModifier
- **[ast-export-added]** `packages/experimental/cua/src/types.ts` — 新增导出: CuaMouseButton
- **[ast-export-added]** `packages/experimental/cua/src/types.ts` — 新增导出: CuaClickOptions
- **[ast-export-added]** `packages/experimental/cua/src/types.ts` — 新增导出: CuaDragOptions
- **[ast-export-added]** `packages/experimental/cua/src/types.ts` — 新增导出: CuaPasteOptions
- **[ast-export-added]** `packages/experimental/cua/src/types.ts` — 新增导出: CuaSelectTextOptions
- **[ast-export-added]** `packages/experimental/cua/src/types.ts` — 新增导出: CuaScrollOptions
- **[ast-export-added]** `packages/experimental/cua/src/types.ts` — 新增导出: CuaSurface
- **[ast-export-added]** `packages/experimental/cua/src/types.ts` — 新增导出: CuaWindow
- **[ast-export-added]** `packages/experimental/cua/src/types.ts` — 新增导出: CuaApp
- **[ast-export-added]** `packages/experimental/cua/src/types.ts` — 新增导出: CuaApi
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/archive.ts` — 新增导出: ExportEntryInfo
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/archive.ts` — 新增导出: ExportStreamHandler
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/archive.ts` — 新增导出: ExportSourceError
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/archive.ts` — 新增导出: ExportEntryError
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/archive.ts` — 新增导出: ExportArchive
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/archive.ts` — 新增导出: SLICE_BYTES
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/archive.ts` — 新增导出: Inflating
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/archive.ts` — 新增导出: Finished
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/archive.ts` — 新增导出: openExportArchive
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/archive.ts` — 新增导出: streamEntries
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/archive.ts` — 新增导出: inflate
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/archive.ts` — 新增导出: deliver
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/archive.ts` — 新增导出: sizeFailure
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/archive.ts` — 新增导出: entrySizeError
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/archive.ts` — 新增导出: unzipAsync
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/archive.ts` — 新增导出: terminate
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/conversation.ts` — 新增导出: IMPORTED_MODEL_SOURCE
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/conversation.ts` — 新增导出: FETCH_OUTPUT_CHARS
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/conversation.ts` — 新增导出: SYNTHETIC_FILE_ID_PREFIX
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/conversation.ts` — 新增导出: UNFINISHED_STATUS_CODES
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/conversation.ts` — 新增导出: ExportConversationError
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/conversation.ts` — 新增导出: ConvertConversationOptions
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/conversation.ts` — 新增导出: ConvertedConversation
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/conversation.ts` — 新增导出: DistributiveOmit
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/conversation.ts` — 新增导出: EventInput
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/conversation.ts` — 新增导出: ReplyStep
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/conversation.ts` — 新增导出: PendingCall
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/conversation.ts` — 新增导出: selectBranch
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/conversation.ts` — 新增导出: messageTime
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/conversation.ts` — 新增导出: convertConversation
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/conversation.ts` — 新增导出: LogBuilder
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/conversation.ts` — 新增导出: callSeqs
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/conversation.ts` — 新增导出: pushStep
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/conversation.ts` — 新增导出: appendContent
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/conversation.ts` — 新增导出: appendCall
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/conversation.ts` — 新增导出: fragmentsOf
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/conversation.ts` — 新增导出: excludedReply
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/conversation.ts` — 新增导出: syntheticFileRef
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/conversation.ts` — 新增导出: fileDisplayName
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/conversation.ts` — 新增导出: emptyStep
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/conversation.ts` — 新增导出: linkLines
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/conversation.ts` — 新增导出: assistantMessage
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/conversation.ts` — 新增导出: searchCall
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/conversation.ts` — 新增导出: publishedAt
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/conversation.ts` — 新增导出: openCall
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: MANIFEST_ENTRY
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: INDEX_ENTRY
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: CONVERSATION_ENTRY
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: IMAGE_ENTRY
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: DeepseekChatImportDependencies
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: DeepseekChatImportWorkspace
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: DeepseekChatImportLimits
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: DeepseekChatImportRequest
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: RankedRow
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: PlannedImage
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: StoredImage
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: MetadataReasons
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: importDeepseekChatExport
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: handled
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: assertWorkspace
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: storedImages
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: importConversation
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: conversion
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: conversation
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: attemptRow
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: storeImages
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: convertWithStoredImages
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: readMetadata
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: entryError
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: compareRanks
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: conversationIdOf
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: imageConversationIdOf
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: imageMediaTypeOf
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: IMAGE_FILE_ID
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: imageNameOf
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: conversationEntry
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: parseConversation
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: imagePlan
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: referencedImages
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: attachSession
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: writeSession
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: isDirectory
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/importer.ts` — 新增导出: parseJson
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/upload.ts` — 新增导出: ImportClaim
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/upload.ts` — 新增导出: UploadRouteHandler
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/upload.ts` — 新增导出: NDJSON_HEADERS
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/upload.ts` — 新增导出: createUploadRoute
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/upload.ts` — 新增导出: importStream
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/upload.ts` — 新增导出: grown
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/upload.ts` — 新增导出: encodeLine
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/upload.ts` — 新增导出: outcomeLine
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/types.ts` — 新增导出: DeepseekChatImportFailureReason
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/types.ts` — 新增导出: DeepseekChatImportSkip
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/types.ts` — 新增导出: DeepseekChatImportResult
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/types.ts` — 新增导出: DeepseekChatImportResponse
- **[ast-export-added]** `packages/experimental/deepseek-chat-import/src/types.ts` — 新增导出: DeepseekChatImportLine
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeCheckId
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: BranchUpdateMethod
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ReviewVerdict
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ChangeRequestReviewer
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ChangeRequestIssue
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: BranchUpdateRequest
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeRerunRequest
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeReviewersRequest
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeReviewerCandidate
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeThreadId
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeCommentId
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeReviewId
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeAnchor
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeCommentAuthor
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeReviewComment
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeReviewThread
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgePendingReview
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeReviewData
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeReviewEvent
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeReviewWrite
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeReviewWriteResult
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeCommit
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeCommitList
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeViewedState
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeViewedFiles
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeViewedRequest
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: relayEnvironment
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: relayTransport
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: bundleTitles
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: pluginManager
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: offeredCapabilities
- **[ast-export-added]** `packages/experimental/terminal-panel/src/config.ts` — 新增导出: MAX_TIMER_MS
- **[ast-export-added]** `packages/experimental/worktree/src/types.ts` — 新增导出: WorktreeCreation
- **[ast-export-added]** `packages/experimental/worktree/src/types.ts` — 新增导出: WorktreeCleanup
- **[ast-export-added]** `packages/experimental/worktree/src/projection.ts` — 新增导出: CREATED_RECORD
- **[ast-export-added]** `packages/experimental/worktree/src/projection.ts` — 新增导出: WorktreeProjectionState
- **[ast-export-added]** `packages/experimental/worktree/src/projection.ts` — 新增导出: createdWorktreeSchema
- **[ast-export-added]** `packages/experimental/worktree/src/projection.ts` — 新增导出: creationSchema
- **[ast-export-added]** `packages/experimental/worktree/src/projection.ts` — 新增导出: worktreeProjection
- **[ast-export-added]** `packages/fs/fs/src/errno.ts` — 新增导出: fsErrorFromErrno
- **[ast-export-added]** `packages/jobs/jobs/src/error.ts` — 新增导出: JOB_ERROR_CODES
- **[ast-export-added]** `packages/jobs/jobs/src/error.ts` — 新增导出: JobErrorCode
- **[ast-export-added]** `packages/jobs/jobs/src/error.ts` — 新增导出: JobError
- **[ast-export-added]** `packages/llm/llm-deepseek/src/credential.ts` — 新增导出: resolveDeepSeekApiKey
- **[ast-export-added]** `packages/llm/llm-deepseek/src/credential.ts` — 新增导出: deepSeekApiKeyConfigured
- **[ast-export-added]** `packages/llm/llm-deepseek/src/credential.ts` — 新增导出: resolveDeepSeekAccountToken
- **[ast-export-added]** `packages/llm/llm-deepseek/src/credential.ts` — 新增导出: rejectDeepSeekAccountToken
- **[ast-export-added]** `packages/llm/llm-pi-ai/src/adapter.ts` — 新增导出: prefixDigests
- **[ast-export-added]** `packages/llm/llm-pi-ai/src/adapter.ts` — 新增导出: manualThinking
- **[ast-export-added]** `packages/llm/llm/src/attribution.ts` — 新增导出: PRODUCT
- **[ast-export-added]** `packages/llm/llm/src/attribution.ts` — 新增导出: launchSuffix
- **[ast-export-added]** `packages/llm/llm/src/error.ts` — 新增导出: LLM_FAILURE_CODES
- **[ast-export-added]** `packages/llm/llm/src/error.ts` — 新增导出: BuiltinLlmFailureCode
- **[ast-export-added]** `packages/llm/llm/src/error.ts` — 新增导出: RETRY_CODE_CHOICES
- **[ast-export-added]** `packages/llm/llm/src/content.ts` — 新增导出: rebaseAdditionOnlyHistory
- **[ast-export-added]** `packages/llm/llm/src/content.ts` — 新增导出: retainedFrom
- **[ast-export-added]** `packages/llm/llm/src/content.ts` — 新增导出: additions
- **[ast-export-added]** `packages/llm/llm/src/content.ts` — 新增导出: projectedHistory
- **[ast-export-added]** `packages/llm/llm/src/content.ts` — 新增导出: retainedUpdateIds
- **[ast-export-added]** `packages/lsp/lsp-stdio/src/host.ts` — 新增导出: rethrowWithFsContext
- **[ast-export-added]** `packages/lsp/lsp-stdio/src/framing.ts` — 新增导出: protocolError
- **[ast-export-added]** `packages/lsp/lsp-stdio/src/translate.ts` — 新增导出: initializeCapabilities
- **[ast-export-added]** `packages/lsp/lsp-stdio/src/connection.ts` — 新增导出: spawnFailure
- **[ast-export-added]** `packages/lsp/lsp-stdio/src/connection.ts` — 新增导出: responseError
- **[ast-export-added]** `packages/mcp/mcp-client/src/connection.ts` — 新增导出: bindingValue
- **[ast-export-added]** `packages/mcp/mcp-client/src/connection.ts` — 新增导出: closureFailure
- **[ast-export-added]** `packages/mcp/mcp-client/src/connection.ts` — 新增导出: checkingCredentials
- **[ast-export-added]** `packages/mcp/mcp-client/src/connection.ts` — 新增导出: credentialsDirty
- **[ast-export-added]** `packages/mcp/mcp-client/src/connection.ts` — 新增导出: stopTimers
- **[ast-export-added]** `packages/mcp/mcp-client/src/connection.ts` — 新增导出: clearTools
- **[ast-export-added]** `packages/mcp/mcp-client/src/connection.ts` — 新增导出: lost
- **[ast-export-added]** `packages/mcp/mcp-client/src/connection.ts` — 新增导出: isStopped
- **[ast-export-added]** `packages/mcp/mcp-client/src/connection.ts` — 新增导出: requestCredentialRefresh
- **[ast-export-added]** `packages/mcp/mcp-client/src/connection.ts` — 新增导出: confirmed
- **[ast-export-added]** `packages/mcp/mcp-client/src/tools.ts` — 新增导出: McpToolRegistrationError
- **[ast-export-added]** `packages/mcp/mcp-client/src/status.ts` — 新增导出: McpConnectionStatusHandle
- **[ast-export-added]** `packages/mcp/mcp-client/src/status.ts` — 新增导出: McpStatusCell
- **[ast-export-added]** `packages/mcp/mcp-client/src/status.ts` — 新增导出: cellsByFiber
- **[ast-export-added]** `packages/mcp/mcp-client/src/status.ts` — 新增导出: registerStatusCell
- **[ast-export-added]** `packages/mcp/mcp-client/src/status.ts` — 新增导出: connectionStatusIn
- **[ast-export-added]** `packages/mcp/mcp-client/src/types.ts` — 新增导出: McpCloseResult
- **[ast-export-added]** `packages/mcp/mcp-client/src/types.ts` — 新增导出: McpConnectionStatus
- **[ast-export-added]** `packages/mcp/mcp-client/src/types.ts` — 新增导出: McpProbeStage
- **[ast-export-added]** `packages/mcp/mcp-client/src/types.ts` — 新增导出: McpProbeSuccess
- **[ast-export-added]** `packages/mcp/mcp-client/src/types.ts` — 新增导出: McpProbeFailure
- **[ast-export-added]** `packages/mcp/mcp-client/src/types.ts` — 新增导出: McpProbeResult
- **[ast-export-added]** `packages/mcp/mcp-client/src/probe.ts` — 新增导出: McpProbeOptions
- **[ast-export-added]** `packages/mcp/mcp-client/src/probe.ts` — 新增导出: DEFAULT_PROBE_TIMEOUT_MS
- **[ast-export-added]** `packages/mcp/mcp-client/src/probe.ts` — 新增导出: PROBE_MAX_PAGES
- **[ast-export-added]** `packages/mcp/mcp-client/src/probe.ts` — 新增导出: PROBE_MAX_TOOL_NAMES
- **[ast-export-added]** `packages/mcp/mcp-client/src/probe.ts` — 新增导出: resolveProbeOptions
- **[ast-export-added]** `packages/mcp/mcp-client/src/probe.ts` — 新增导出: maxPages
- **[ast-export-added]** `packages/mcp/mcp-client/src/probe.ts` — 新增导出: maxToolNames
- **[ast-export-added]** `packages/mcp/mcp-client/src/probe.ts` — 新增导出: probeServer
- **[ast-export-added]** `packages/mcp/mcp-client/src/probe.ts` — 新增导出: serverInfo
- **[ast-export-added]** `packages/mcp/mcp-client/src/probe.ts` — 新增导出: toolNames
- **[ast-export-added]** `packages/mcp/mcp-client/src/templates.ts` — 新增导出: MissingTemplateValue
- **[ast-export-added]** `packages/mcp/mcp-client/src/templates.ts` — 新增导出: TOKEN
- **[ast-export-added]** `packages/mcp/mcp-client/src/templates.ts` — 新增导出: TOKEN_EXACT
- **[ast-export-added]** `packages/mcp/mcp-client/src/templates.ts` — 新增导出: SUSPECT
- **[ast-export-added]** `packages/mcp/mcp-client/src/templates.ts` — 新增导出: credentialRefsIn
- **[ast-export-added]** `packages/mcp/mcp-client/src/templates.ts` — 新增导出: assertTemplateSyntax
- **[ast-export-added]** `packages/mcp/mcp-client/src/templates.ts` — 新增导出: resolveTemplateString
- **[ast-export-added]** `packages/mcp/mcp-manager/src/types.ts` — 新增导出: McpManagedServerStatus
- **[ast-export-added]** `packages/mcp/mcp-manager/src/types.ts` — 新增导出: McpManagedServerView
- **[ast-export-added]** `packages/sandbox/sandbox-windows-acl/src/path-boundary.ts` — 新增导出: isTempRootInsideWorkspace
- **[ast-export-added]** `packages/sandbox/sandbox/src/escalation.ts` — 新增导出: SANDBOX_ESCALATION_ERROR_CODES
- **[ast-export-added]** `packages/sandbox/sandbox/src/escalation.ts` — 新增导出: SandboxEscalationErrorCode
- **[ast-export-added]** `packages/sandbox/sandbox/src/escalation.ts` — 新增导出: SandboxEscalationError
- **[ast-export-added]** `packages/session-query/session-log-export/src/archive.ts` — 新增导出: openStreams
- **[ast-export-added]** `packages/session-query/session-log-export/src/archive.ts` — 新增导出: MISSING_ATTACHMENTS_FILENAME
- **[ast-export-added]** `packages/session-query/session-log-export/src/archive.ts` — 新增导出: UNREADABLE_ATTACHMENT_CODES
- **[ast-export-added]** `packages/session-query/session-log-export/src/archive.ts` — 新增导出: isUnreadableReference
- **[ast-export-added]** `packages/session-query/session-log-export/src/archive.ts` — 新增导出: headOf
- **[ast-export-added]** `packages/session/session-format-v3-to-v4/src/validation.ts` — 新增导出: nativeCatalogFact
- **[ast-export-added]** `packages/session/working-directory/src/error.ts` — 新增导出: WORKING_DIRECTORY_ERROR_CODES
- **[ast-export-added]** `packages/session/working-directory/src/error.ts` — 新增导出: WorkingDirectoryErrorCode
- **[ast-export-added]** `packages/session/working-directory/src/error.ts` — 新增导出: WorkingDirectoryError
- **[ast-export-added]** `packages/shell/shell-env/src/error.ts` — 新增导出: SHELL_ENV_ERROR_CODES
- **[ast-export-added]** `packages/shell/shell-env/src/error.ts` — 新增导出: ShellEnvErrorCode
- **[ast-export-added]** `packages/shell/shell-env/src/error.ts` — 新增导出: ShellEnvError
- **[ast-export-added]** `packages/subagent/subagent/src/catalog.ts` — 新增导出: nameSchema
- **[ast-export-added]** `packages/subagent/subagent/src/catalog.ts` — 新增导出: namedContinuableCatalogSchema
- **[ast-export-added]** `packages/subagent/subagent/src/catalog.ts` — 新增导出: namedExternalCatalogSchema
- **[ast-export-added]** `packages/subagent/subagent/src/catalog.ts` — 新增导出: catalogNames
- **[ast-export-added]** `packages/subagent/subagent/src/projection.ts` — 新增导出: TimingState
- **[ast-export-added]** `packages/subagent/subagent/src/projection.ts` — 新增导出: activeIntervalSchema
- **[ast-export-added]** `packages/subagent/subagent/src/projection.ts` — 新增导出: projectionSchema
- **[ast-export-added]** `packages/subagent/subagent/src/projection.ts` — 新增导出: timingStateSchema
- **[ast-export-added]** `packages/subagent/subagent/src/projection.ts` — 新增导出: subagentTimingProjectionDefinition
- **[ast-export-added]** `packages/subagent/subagent/src/projection.ts` — 新增导出: activeSince
- **[ast-export-added]** `packages/subagent/subagent/src/projection.ts` — 新增导出: IdentityState
- **[ast-export-added]** `packages/subagent/subagent/src/projection.ts` — 新增导出: identityValueSchema
- **[ast-export-added]** `packages/subagent/subagent/src/projection.ts` — 新增导出: identitySchema
- **[ast-export-added]** `packages/subagent/subagent/src/projection.ts` — 新增导出: identityStateSchema
- **[ast-export-added]** `packages/subagent/subagent/src/projection.ts` — 新增导出: descriptorIdentity
- **[ast-export-added]** `packages/subagent/subagent/src/projection.ts` — 新增导出: subagentIdentityProjectionDefinition
- **[ast-export-added]** `packages/subagent/subagent/src/types.ts` — 新增导出: SubagentMemberNames
- **[ast-export-added]** `packages/subagent/subagent/src/names.ts` — 新增导出: ROOT_AGENT_NAME
- **[ast-export-added]** `packages/subagent/subagent/src/names.ts` — 新增导出: NAME_PATTERN
- **[ast-export-added]** `packages/subagent/subagent/src/names.ts` — 新增导出: isAgentName
- **[ast-export-added]** `packages/subagent/subagent/src/names.ts` — 新增导出: joinAgentPath
- **[ast-export-added]** `packages/subagent/subagent/src/names.ts` — 新增导出: agentAddress
- **[ast-export-added]** `packages/subagent/subagent/src/names.ts` — 新增导出: parentAgentPath
- **[ast-export-added]** `packages/subagent/subagent/src/names.ts` — 新增导出: SiblingNameReservation
- **[ast-export-added]** `packages/subagent/subagent/src/names.ts` — 新增导出: SiblingNameReservations
- **[ast-export-added]** `packages/subagent/subagent/src/continuation-messages.ts` — 新增导出: withResultDeliveryGuidance
- **[ast-export-added]** `packages/subagent/subagent/src/list-children.ts` — 新增导出: Position
- **[ast-export-added]** `packages/subagent/subagent/src/list-children.ts` — 新增导出: resolveAgentPath
- **[ast-export-added]** `packages/subagent/subagent/src/projection-types.ts` — 新增导出: KnownSubagentCatalogFields
- **[ast-export-added]** `packages/subprocess/subprocess/src/error.ts` — 新增导出: SUBPROCESS_ERROR_CODES
- **[ast-export-added]** `packages/subprocess/subprocess/src/error.ts` — 新增导出: SubprocessErrorCode
- **[ast-export-added]** `packages/subprocess/subprocess/src/error.ts` — 新增导出: SubprocessError
- **[ast-export-added]** `packages/subprocess/subprocess/src/error.ts` — 新增导出: subprocessSpawnFailure
- **[ast-export-added]** `packages/subprocess/subprocess/src/error.ts` — 新增导出: errno
- **[ast-export-added]** `packages/subprocess/win32-process/src/errors.ts` — 新增导出: WIN32_ERROR
- **[ast-export-added]** `packages/test-support/session-snapshot/src/suite.ts` — 新增导出: normalizedRefreshRecords
- **[ast-export-added]** `packages/test-support/session-snapshot/src/suite.ts` — 新增导出: normalizedFresh
- **[ast-export-added]** `packages/test-support/session-snapshot/src/suite.ts` — 新增导出: normalizedExisting
- **[ast-export-added]** `packages/util/http-proxy/src/install.ts` — 新增导出: DispatcherOptions
- **[ast-export-added]** `packages/util/http-proxy/src/install.ts` — 新增导出: h2Options
- **[ast-export-added]** `packages/util/http-proxy/src/install.ts` — 新增导出: h2
- **[ast-export-added]** `packages/util/http-proxy/src/install.ts` — 新增导出: createRouteDispatcher
- **[ast-export-added]** `packages/util/native-command/src/host-environment.ts` — 新增导出: HostEnvironmentFacts
- **[ast-export-added]** `packages/web/web-deepseek-api/src/search.ts` — 新增导出: DEEPSEEK_SEARCH_REQUESTS_PER_SECOND
- **[ast-export-added]** `packages/web/web-deepseek-api/src/search.ts` — 新增导出: abortableDelay
- **[ast-export-added]** `packages/web/web/src/types.ts` — 新增导出: WebProviderInfo
- **[ast-export-added]** `packages/web/web/src/types.ts` — 新增导出: WebProviderList
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/markdown/render.tsx` — 新增导出: MarkdownFenceSeat
- **[ast-export-added]** `packages/experimental/cua/src/application-access.ts` — 新增导出: requireAccess
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: fetchRelay
- **[config-field-added]** `config:@deepseek-ai/dsh-client-ui-account-notifications` — 新增配置字段: notificationPollIntervalMs
- **[config-field-added]** `config:@deepseek-ai/dsh-deepseek-account` — 新增配置字段: platformOrigin
- **[config-field-added]** `config:@deepseek-ai/dsh-deepseek-account` — 新增配置字段: harnessOrigin
- **[config-field-added]** `config:@deepseek-ai/dsh-deepseek-account` — 新增配置字段: desktopPlatform
- **[config-field-added]** `config:@deepseek-ai/dsh-deepseek-account` — 新增配置字段: embeddedPageDist
- **[config-field-added]** `config:@deepseek-ai/dsh-deepseek-account` — 新增配置字段: inferenceOrigin
- **[config-field-added]** `config:@deepseek-ai/dsh-deepseek-account` — 新增配置字段: allowLoopbackHttp
- **[config-field-added]** `config:@deepseek-ai/dsh-deepseek-account` — 新增配置字段: rewriteBrowserOrigin
- **[config-field-added]** `config:@deepseek-ai/dsh-deepseek-account` — 新增配置字段: requestHeaders
- **[config-field-added]** `config:@deepseek-ai/dsh-deepseek-account` — 新增配置字段: accountRequestHeaders
- **[config-field-added]** `config:@deepseek-ai/dsh-deepseek-account` — 新增配置字段: requestTimeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-deepseek-account` — 新增配置字段: balanceTimeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-deepseek-account` — 新增配置字段: logoutMaxRetries
- **[config-field-added]** `config:@deepseek-ai/dsh-deepseek-account` — 新增配置字段: logoutRetryDelayMs
- **[config-field-added]** `config:@deepseek-ai/dsh-deepseek-account` — 新增配置字段: attemptTimeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-deepseek-chat-import` — 新增配置字段: maxSessions
- **[config-field-added]** `config:@deepseek-ai/dsh-deepseek-chat-import` — 新增配置字段: maxUploadBytes
- **[config-field-added]** `config:@deepseek-ai/dsh-deepseek-chat-import` — 新增配置字段: maxEntryBytes
- **[config-field-added]** `config:@deepseek-ai/dsh-deepseek-chat-import` — 新增配置字段: maxTitleBytes
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-client-ui-forge` — 新增配置字段: maxCommits
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-client-ui-forge` — 新增配置字段: testPaths
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-client-ui-forge` — 新增配置字段: interfacePaths
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-client-ui-forge` — 新增配置字段: maxCachedReviewBytes
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-client-ui-forge` — 新增配置字段: reviewRefreshMs
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-cua-macos` — 新增配置字段: sourceSigning
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-cua-macos` — 新增配置字段: identity
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-cua-macos` — 新增配置字段: keychain
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-forge-github` — 新增配置字段: maxReviewThreads
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-forge-github` — 新增配置字段: maxCommits
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-forge-github` — 新增配置字段: maxViewedFiles
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-worktree` — 新增配置字段: retainOnArchive
- **[config-field-added]** `config:@deepseek-ai/dsh-mcp-client` — 新增配置字段: startupTimeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-mcp-client` — 新增配置字段: closeTimeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-mcp-client` — 新增配置字段: expandTemplates
- **[config-field-added]** `config:@deepseek-ai/dsh-mcp-manager` — 新增配置字段: servers
- **[config-field-added]** `config:@deepseek-ai/dsh-mcp-manager` — 新增配置字段: transport
- **[config-field-added]** `config:@deepseek-ai/dsh-mcp-manager` — 新增配置字段: command
- **[config-field-added]** `config:@deepseek-ai/dsh-mcp-manager` — 新增配置字段: args
- **[config-field-added]** `config:@deepseek-ai/dsh-mcp-manager` — 新增配置字段: env
- **[config-field-added]** `config:@deepseek-ai/dsh-mcp-manager` — 新增配置字段: cwd
- **[config-field-added]** `config:@deepseek-ai/dsh-mcp-manager` — 新增配置字段: url
- **[config-field-added]** `config:@deepseek-ai/dsh-mcp-manager` — 新增配置字段: headers
- **[config-field-added]** `config:@deepseek-ai/dsh-mcp-manager` — 新增配置字段: enabled
- **[config-field-added]** `config:@deepseek-ai/dsh-mcp-manager` — 新增配置字段: toolCallTimeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-mcp-manager` — 新增配置字段: startupTimeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-mcp-manager` — 新增配置字段: closeTimeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-mcp-manager` — 新增配置字段: reconnect
- **[config-field-added]** `config:@deepseek-ai/dsh-office-kit` — 新增配置字段: maxConcurrentConversions
- **[config-field-added]** `config:@deepseek-ai/dsh-office-kit` — 新增配置字段: maxQueuedJobs
- **[config-field-added]** `config:@deepseek-ai/dsh-office-kit` — 新增配置字段: maxReaders
- **[config-field-added]** `config:@deepseek-ai/dsh-office-kit` — 新增配置字段: maxSourceBytes
- **[config-field-added]** `config:@deepseek-ai/dsh-office-kit` — 新增配置字段: maxBackgroundConversions
- **[config-field-added]** `config:@deepseek-ai/dsh-office-kit` — 新增配置字段: maxCachedEntries
- **[config-field-added]** `config:@deepseek-ai/dsh-office-kit` — 新增配置字段: maxCachedBytes
- **[config-field-added]** `config:@deepseek-ai/dsh-office-kit` — 新增配置字段: maxSourceEntries
- **[config-field-added]** `config:@deepseek-ai/dsh-office-kit` — 新增配置字段: outputDirectory
- **[config-field-added]** `config:@deepseek-ai/dsh-office-kit` — 新增配置字段: outputRetentionMs
- **[config-field-added]** `config:@deepseek-ai/dsh-office-kit` — 新增配置字段: maxOutputStoreBytes
- **[config-field-added]** `config:@deepseek-ai/dsh-office-kit` — 新增配置字段: timeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-office-kit` — 新增配置字段: maxInputBytes
- **[config-field-added]** `config:@deepseek-ai/dsh-office-kit` — 新增配置字段: maxOutputBytes
- **[config-field-added]** `config:@deepseek-ai/dsh-office-kit` — 新增配置字段: maxImageResolution
- **[config-field-added]** `config:@deepseek-ai/dsh-office-kit` — 新增配置字段: maxArchiveEntries
- **[config-field-added]** `config:@deepseek-ai/dsh-office-kit` — 新增配置字段: maxUncompressedBytes
- **[config-field-added]** `config:@deepseek-ai/dsh-office-kit` — 新增配置字段: fontDirectories
- **[config-field-added]** `config:@deepseek-ai/dsh-office-kit` — 新增配置字段: fontFallbacks
- **[config-field-added]** `config:@deepseek-ai/dsh-office-kit` — 新增配置字段: maxFontFiles
- **[config-field-added]** `config:@deepseek-ai/dsh-office-kit` — 新增配置字段: maxFontFileBytes
- **[config-field-added]** `config:@deepseek-ai/dsh-office-kit` — 新增配置字段: maxLoadedFontBytes
- **[config-field-added]** `config:@deepseek-ai/dsh-ptc-runtime-node` — 新增配置字段: stopGraceMs
- **[config-field-added]** `config:@deepseek-ai/dsh-skill-office` — 新增配置字段: pythonEnvironment
- **[config-field-added]** `config:@deepseek-ai/dsh-terminal-panel` — 新增配置字段: backendType
- **[config-field-added]** `config:@deepseek-ai/dsh-terminal-panel` — 新增配置字段: cols
- **[config-field-added]** `config:@deepseek-ai/dsh-terminal-panel` — 新增配置字段: rows
- **[config-field-added]** `config:@deepseek-ai/dsh-terminal-panel` — 新增配置字段: preferredShells
- **[config-field-added]** `config:@deepseek-ai/dsh-terminal-panel` — 新增配置字段: environment
- **[config-field-added]** `config:@deepseek-ai/dsh-terminal-panel` — 新增配置字段: startupSilenceMs
- **[config-field-added]** `config:@deepseek-ai/dsh-terminal-panel` — 新增配置字段: startupTimeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-terminal-panel` — 新增配置字段: promptSilenceMs
- **[config-field-added]** `config:@deepseek-ai/dsh-terminal-panel` — 新增配置字段: probeIntervalMs
- **[config-field-added]** `config:@deepseek-ai/dsh-terminal-panel` — 新增配置字段: idleSilenceMs
- **[config-field-added]** `config:@deepseek-ai/dsh-terminal-panel` — 新增配置字段: timeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-terminal-panel` — 新增配置字段: maxReadBytes
- **[config-field-added]** `config:@deepseek-ai/dsh-terminal-panel` — 新增配置字段: readUserTerminals
- **[config-field-added]** `config:@deepseek-ai/dsh-tool-executor-ptc` — 新增配置字段: maxSubCallsPerMinute
- **[config-field-added]** `config:@deepseek-ai/dsh-tool-office` — 新增配置字段: activationSkills
- **[config-field-added]** `config:@deepseek-ai/dsh-tool-office` — 新增配置字段: maxImages
- **[config-field-added]** `config:@deepseek-ai/dsh-tool-office` — 新增配置字段: maxImagePixels
- **[config-field-added]** `config:@deepseek-ai/dsh-tool-office` — 新增配置字段: maxImageDimension
- **[config-field-added]** `config:@deepseek-ai/dsh-tool-office` — 新增配置字段: maxImageBytes
- ★ **[config-field-added]** `config:@deepseek-ai/dsh-tool-subagent-control` — 新增配置字段: interrupt
- **[config-field-added]** `config:@deepseek-ai/dsh-web-deepseek-api` — 新增配置字段: searchRequestsPerSecond
- **[config-field-added]** `config:@deepseek-ai/dsh-web-deepseek-api` — 新增配置字段: searchBilling
- **[config-field-added]** `config:@deepseek-ai/dsh-web-deepseek-api` — 新增配置字段: fetchBilling
- **[config-field-added]** `config:@deepseek-ai/dsh-web-deepseek-api` — 新增配置字段: searchBaseURL
- **[config-field-added]** `config:@deepseek-ai/dsh-web-deepseek-api` — 新增配置字段: searchApiKeyEnv
- **[config-field-added]** `config:@deepseek-ai/dsh-web-deepseek-api` — 新增配置字段: fetchBaseURL
- **[config-field-added]** `config:@deepseek-ai/dsh-web-deepseek-api` — 新增配置字段: fetchApiKeyEnv
