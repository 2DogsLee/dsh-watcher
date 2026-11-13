# DSH 插件 API 面比对：`dsh-v0.2.1-rc.4` → `dsh-v0.2.2-rc.2`

> 生成于 2026-11-13T05:57:44.3144422Z · 工具 dsh-api-watch v1（启发式， breaking 结论建议复核 diff）

| 级别 | 数量 |
|---|---|
| breaking | 550 |
| warning | 618 |
| info | 1815 |
| ★ 与我相关 | 331 |

## ★ 优先关注：与你插件相关的 breaking / warning

- **[exports-map-changed]** `packages/subagent/tool-subagent-control/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[doc-major-rewrite]** `docs/subsystems/boot.md` — 行数 335 -> 480（43%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/boot.zh.md` — 行数 335 -> 480（43%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/computer-use.md` — 行数 36 -> 100（178%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/computer-use.zh.md` — 行数 36 -> 100（178%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/filesystem.md` — 行数 445 -> 590（33%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/filesystem.zh.md` — 行数 445 -> 590（33%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/mcp.md` — 行数 94 -> 173（84%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/mcp.zh.md` — 行数 94 -> 173（84%），可能存在行为级变更，建议人工复核
- **[doc-removed]** `docs/subsystems/office-to-pdf.md` — 契约文档被删除/改名
- **[doc-removed]** `docs/subsystems/office-to-pdf.zh.md` — 契约文档被删除/改名
- **[doc-major-rewrite]** `docs/subsystems/schedule.md` — 行数 449 -> 227（49%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/schedule.zh.md` — 行数 449 -> 227（49%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/session-projection.md` — 行数 313 -> 438（40%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/session-projection.zh.md` — 行数 313 -> 438（40%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/token-meter.md` — 行数 86 -> 126（47%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/token-meter.zh.md` — 行数 86 -> 126（47%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/working-directory.md` — 行数 45 -> 68（51%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/working-directory.zh.md` — 行数 45 -> 68（51%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/worktrees.md` — 行数 56 -> 148（164%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/subsystems/worktrees.zh.md` — 行数 56 -> 148（164%），可能存在行为级变更，建议人工复核
- **[ast-signature-changed]** `packages/client/modules` — 签名变化: PkgMeta
    旧: interface PkgMeta extends WebBootRowFields { clientPath: string }
    新: interface PkgMeta extends WebBootRowFields { clientPath: string /** The package's own manifest; package-asset requests resolve against it as a self-reference. */ manifestPath: string }
- **[ast-signature-changed]** `packages/client/modules` — 签名变化: ClientPackageSource
    旧: interface ClientPackageSource extends ResolvedPkgMeta { /** Loader specifier from the active row. */ loaderName: string /** Resolution base of the config tree that owns the row. */ baseUrl: string /** Stable cache and contribution key for this source. */ sourceKey: string }
    新: interface ClientPackageSource extends ResolvedPkgMeta { /** Loader specifier from the active row. */ loaderName: string /** Resolution base of the config tree that owns the row. */ baseUrl: string /** Stable source identity and contribution key. */ sourceKey: string }
- **[ast-export-removed]** `packages/client/modules` — 导出（含 re-export）删除: sourceKey（原声明于 packages/client/modules/src/index.ts）
- **[ast-signature-changed]** `packages/client/modules` — 签名变化: headers
    旧: var
    新: var:Record<string, string>
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
- **[ast-signature-changed]** `packages/client/modules/src/client/manifest.ts` — 签名变化: ClientBundleRequire
    旧: export interface ClientBundleRequire { /** Resolve a module-table dependency synchronously. */ (specifier: string): unknown /** Load and resolve a package-local dynamic chunk asynchronously. */ async(specifier: string): Promise<unknown> }
    新: export interface ClientBundleRequire { /** Resolve a module-table dependency synchronously. */ (specifier: string): unknown /** Load and resolve a package-local dynamic chunk asynchronously. */ async(specifier: string): Promise<unknown> /** * Resolve a package-asset reference (`plugins/<package>/assets/<path>`) the * build compiled from an asset import or stylesheet `url()` to the URL the * page loads; the reference itself unless the carrier maps it. */ asset(reference: string): string }
- **[ast-signature-changed]** `packages/client/modules/src/client/manifest.ts` — 签名变化: ClientModuleCreateOptions
    旧: export interface ClientModuleCreateOptions { /** Raw Host-injected boot graph; the modules bundle owns validation and projection. */ boot: unknown /** Module-table seed: platform-singleton specifier → shell instance. */ staticModules: Record<string, unknown> /** Bundle-load hook. Defaults to a same-origin classic `<script src>` element. */ loadBundle?: (url: string) => Promise<void> }
    新: export interface ClientModuleCreateOptions { /** Raw Host-injected boot graph; the modules bundle owns validation and projection. */ boot: unknown /** Module-table seed: platform-singleton specifier → shell instance. */ staticModules: Record<string, unknown> /** Bundle-load hook. Defaults to a same-origin classic `<script src>` element. */ loadBundle?: (url: string) => Promise<void> /** Package-asset reference hook behind {@link ClientBundleRequire.asset}. Defaults to returning the reference. */ resolveAsset?: (reference: string) => string }
- **[ast-signature-changed]** `packages/client/modules/src/client/manifest.ts` — 签名变化: ClientModuleSystemOptions
    旧: export interface ClientModuleSystemOptions { /** Boot graph validated by {@link parseBootManifest}, owned by the resulting module system. */ manifest: BootManifest /** Module-table seed: platform-singleton specifier → shell instance. */ staticModules: Record<string, unknown> /** Stable HTML-installed registration facade to switch from queue to live mode. */ registrationTarget: ClientModuleLoaderTarget /** Already-materialized modules bundle consumed while creating the system. */ bootstrapModule: ClientBootstrapModule /** Bundle-load hook. Defaults to a same-origin classic `<script src>` element. */ loadBundle?: (url: string) => Promise<void> }
    新: export interface ClientModuleSystemOptions { /** Boot graph validated by {@link parseBootManifest}, owned by the resulting module system. */ manifest: BootManifest /** Module-table seed: platform-singleton specifier → shell instance. */ staticModules: Record<string, unknown> /** Stable HTML-installed registration facade to switch from queue to live mode. */ registrationTarget: ClientModuleLoaderTarget /** Already-materialized modules bundle consumed while creating the system. */ bootstrapModule: ClientBootstrapModule /** Bundle-load hook. Defaults to a same-origin classic `<script src>` element. */ loadBundle?: (url: string) => Promise<void> /** Package-asset reference hook behind {@link ClientBundleRequire.asset}. Defaults to returning the reference. */ resolveAsset?: (reference: string) => string }
- **[ast-signature-changed]** `packages/client/ui-primitives/src/SegmentedTabs.tsx` — 签名变化: SegmentedTabs
    旧: function({ items, value, onChange, label, className }:{ items: readonly [SegmentedTab<Value>, ...SegmentedTab<Value>[]] value: Value onChange: (value: Value) => void label: string className?: string | undefined })
    新: function({ items, value, onChange, label, className, size = 'md' }:{ items: readonly [SegmentedTab<Value>, ...SegmentedTab<Value>[]] value: Value onChange: (value: Value) => void label: string className?: string | undefined size?: 'sm' | 'md' | undefined })
- **[ast-signature-changed]** `packages/client/ui-primitives/src/Checkbox.tsx` — 签名变化: Checkbox
    旧: function({ checked, onChange, label, disabled = false, title, className }:{ checked: boolean onChange: (next: boolean) => void label: string disabled?: boolean title?: string | undefined className?: string | undefined })
    新: function({ checked, onChange, label, disabled = false, title, className, modalAutofocus = false }:{ checked: boolean onChange: (next: boolean) => void label: string disabled?: boolean title?: string | undefined className?: string | undefined modalAutofocus?: boolean })
- **[ast-signature-changed]** `packages/client/ui-primitives/src/Menu.tsx` — 签名变化: MenuItem
    旧: export interface MenuItem { id: string label: ReactNode disabled?: boolean /** Effective binding supplied by the command owner; omitted for unbound actions. */ shortcut?: { keys: readonly string[]; aria?: string | undefined } /** Leading icon (figma .Menu_cell gap 8). */ icon?: ReactNode /** Destructive row: error-colored text/icon and danger hover fill. */ danger?: boolean /** Nested card opened to the right on hover/focus. */ submenu?: readonly MenuItem[] }
    新: export interface MenuItem { id: string label: ReactNode disabled?: boolean /** Effective binding supplied by the command owner; omitted for unbound actions. */ shortcut?: { keys: readonly string[]; aria?: string | undefined } /** Leading icon (figma .Menu_cell gap 8). */ icon?: ReactNode /** Destructive row: error-colored text/icon and danger hover fill. */ danger?: boolean /** Child choices opened by hover, focus, click, or ArrowRight; placement follows available space. */ submenu?: readonly MenuEntry[] }
- **[ast-signature-changed]** `packages/client/ui-primitives/src/Menu.tsx` — 签名变化: MenuItemButtonProps
    旧: export interface MenuItemButtonProps { /** Visible row label. */ children: ReactNode /** Effective binding supplied by the command owner; omitted for unbound actions. */ shortcut?: MenuItem['shortcut'] /** Leading icon (figma .Menu_cell gap 8). */ icon?: ReactNode /** Whether this row identifies the currently displayed page or view. */ current?: boolean /** Whether the row cannot be activated. */ disabled?: boolean /** Destructive row: error-colored text/icon and danger hover fill. */ danger?: boolean /** * Start a new group: a hairline above this row, the same one a * `{ type: 'separator' }` data entry draws. It comes and goes with the row, * so a row that renders nothing leaves no stray line; a data separator * directly before it draws no second line, and the list's first row draws none. */ separatorBefore?: boolean /** Row activation (click, Enter, or Tab on the focused row). */ onSelect: () => void }
    新: export interface MenuItemButtonProps { /** Visible row label. */ children: ReactNode /** Effective binding supplied by the command owner; omitted for unbound actions. */ shortcut?: MenuItem['shortcut'] /** Leading icon (figma .Menu_cell gap 8). */ icon?: ReactNode /** Whether this row identifies the currently displayed page or view. */ current?: boolean /** Whether the row cannot be activated. */ disabled?: boolean /** * Why the disabled row cannot be activated. The row then stays hoverable and * focusable, shows the reason in a tooltip, and exposes it as the row's * description; an enabled row ignores it. */ disabledReason?: string | undefined /** Destructive row: error-colored text/icon and danger hover fill. */ danger?: boolean /** * Start a new group: a hairline above this row, the same one a * `{ type: 'separator' }` data entry draws. It comes and goes with the row, * so a row that renders nothing leaves no stray line; a data separator * directly before it draws no second line, and the list's first row draws none. */ separatorBefore?: boolean /** Row activation (click, Enter, or Tab on the focused row). */ onSelect: () => void }
- **[ast-signature-changed]** `packages/client/ui-primitives/src/Menu.tsx` — 签名变化: MenuItemButton
    旧: function({
  children, shortcut, icon, current, disabled = false, danger = false, separatorBefore = false, onSelect,
}:MenuItemButtonProps)
    新: function({ onSelect, ...props }:MenuItemButtonProps)
- **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: isSeparator（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: isLabel（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: MEASURE_STYLE（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- **[ast-signature-changed]** `packages/client/ui-primitives/src/Menu.tsx` — 签名变化: Menu
    旧: function({ open, anchor, items = [], children, selectedId, selectedIds, onSelect, onClose, align = 'start', side = 'bottom', portal = false, closeOnPointerLeave = false, dense = false, compact = false, autoFocus = false, selection = 'check', getAnchorRect, minWidthFromAnchor = false, footer, className, listClassName }:{ open: boolean autoFocus?: boolean anchor: ReactNode items?: readonly MenuEntry[] children?: ReactNode footer?: readonly MenuEntry[] selectedId?: string | undefined selectedIds?: readonly string[] | undefined onSelect?: (id: string) => void onClose: () => void align?: 'start' | 'end' side?: 'bottom' | 'top' | 'right' portal?: boolean closeOnPointerLeave?: boolean dense?: boolean compact?: boolean selection?: 'check' | 'fill' getAnchorRect?: () => DOMRect | null minWidthFromAnchor?: boolean className?: string | undefined listClassName?: string | undefined })
    新: function({ open, anchor, items = [], children, submenuBackLabel, selectedId, selectedIds, onSelect, onClose, align = 'start', side = 'bottom', portal = false, closeOnPointerLeave = false, dense = false, compact = false, autoFocus = false, selection = 'check', anchorRef, anchorPoint, minWidthFromAnchor = false, footer, className, listClassName, contextual = false, exiting, returnFocus, isExternalTrigger }:{ open: boolean /** Pointer-positioned popup: cursor clearance, grouped icons, and context gestures. */ contextual?: boolean /** Recognizes external triggers exempt from outside dismissal; omitted exempts no external nodes. */ isExternalTrigger?: (node: Node) => boolean /** Resolve the original control for focus restoration and inert/hidden dismissal. */ returnFocus?: (() => HTMLElement | null) | undefined /** Retain a dismissed context popup during its short fade. */ exiting?: 'dismiss' | 'replace' | undefined autoFocus?: boolean anchor: ReactNode items?: readonly MenuEntry[] /** Localized return action; omitted uses the caller's parent label with a back arrow. */ submenuBackLabel?: string | undefined children?: ReactNode footer?: readonly MenuEntry[] selectedId?: string | undefined selectedIds?: readonly string[] | undefined onSelect?: (id: string) => void onClose: () => void align?: 'start' | 'end' side?: 'bottom' | 'top' | 'right' portal?: boolean closeOnPointerLeave?: boolean dense?: boolean compact?: boolean selection?: 'check' | 'fill' anchorRef?: RefObject<HTMLElement | null> | undefined /** Client coordinates captured for this opening; Safari offsets are applied once. */ anchorPoint?: { readonly x: number; readonly y: number } | undefined minWidthFromAnchor?: boolean className?: string | undefined listClassName?: string | undefined })
- **[ast-signature-changed]** `packages/client/ui-primitives/src/HoverCard.tsx` — 签名变化: r
    旧: var:DOMRect | null
    新: var
- **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: vw（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: vh（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: listEl（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: lw（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: lh（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: x（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: y（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: scrollable（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: subOpen（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: collapseSubmenuFrom（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- **[ast-signature-changed]** `packages/client/ui-primitives/src/MenuSurface.tsx` — 签名变化: MenuSurfaceProps
    旧: export interface MenuSurfaceProps extends ComponentPropsWithoutRef<'div'> { /** Match the shared compact menu's smaller outer radius. */ compact?: boolean }
    新: export interface MenuSurfaceProps extends ComponentPropsWithoutRef<'div'> { /** Match the shared compact menu's smaller outer radius. */ compact?: boolean /** Fade direct content, material, and native backing without isolating the material's backdrop. */ phase?: 'enter' | 'dismiss' | 'replace' | undefined }
- **[ast-signature-changed]** `packages/client/ui-primitives/src/MenuSurface.tsx` — 签名变化: anchorStyle
    旧: var:CSSProperties & { '--dsh-menu-anchor': string }
    新: var:CSSProperties & Record<`--dsh-menu-${string}`, string>
- **[ast-export-removed]** `packages/client/ui-primitives/src/useAnchoredPosition.ts` — 导出（含 re-export）删除: AnchoredPositionOptions（原声明于 packages/client/ui-primitives/src/useAnchoredPosition.ts）
- **[ast-export-removed]** `packages/client/ui-primitives/src/useAnchoredPosition.ts` — 导出（含 re-export）删除: useAnchoredPosition（原声明于 packages/client/ui-primitives/src/useAnchoredPosition.ts）
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
- **[ast-signature-changed]** `packages/client/ui-primitives/src/user-text.tsx` — 签名变化: ReferenceChipProps
    旧: export interface ReferenceChipProps { readonly appearance: ReferenceIconKind | 'skill' | 'command' readonly label: string readonly title: string /** Absent for display-only references and previews. */ readonly onActivate?: () => void }
    新: export interface ReferenceChipProps { readonly appearance: ReferenceIconKind | 'skill' | 'command' /** Explicit object-menu gesture bindings; absent for display-only references. */ readonly contextMenuProps?: Pick<HTMLAttributes<HTMLElement>, 'onContextMenu' | 'onKeyDown' | 'tabIndex'> readonly label: string readonly title: string /** Absent for display-only references and previews. */ readonly onActivate?: () => void }
- **[ast-signature-changed]** `packages/client/ui-primitives/src/user-text.tsx` — 签名变化: ReferenceChip
    旧: function({ appearance, label, title, onActivate }:ReferenceChipProps)
    新: function({
  appearance, label, title, onActivate, contextMenuProps,
}:ReferenceChipProps)
- **[ast-signature-changed]** `packages/client/ui-primitives/src/Tooltip.tsx` — 签名变化: AnchorProps
    旧: interface AnchorProps { 'aria-describedby'?: string | undefined ref?: Ref<HTMLElement> | undefined onMouseEnter?: MouseEventHandler | undefined onMouseLeave?: MouseEventHandler | undefined onClick?: MouseEventHandler | undefined onFocus?: FocusEventHandler | undefined onBlur?: FocusEventHandler | undefined }
    新: interface AnchorProps { 'aria-describedby'?: string | undefined ref?: Ref<HTMLElement> | undefined onPointerEnter?: PointerEventHandler | undefined onPointerLeave?: PointerEventHandler | undefined onPointerDown?: PointerEventHandler | undefined onClick?: MouseEventHandler | undefined onFocus?: FocusEventHandler | undefined onBlur?: FocusEventHandler | undefined }
- **[ast-signature-changed]** `packages/client/ui-primitives/src/Tooltip.tsx` — 签名变化: Tooltip
    旧: function({ label, shortcutKeys, side = 'right', align = 'center', delayMs = 0, focusDelayMs = 0, gap = 8, disabled = false, portal = false, maxWidth, openOnClick = false, children }:{ label: TooltipLabel; shortcutKeys?: readonly string[] | undefined; side?: TooltipSide; align?: 'center' | 'end'; delayMs?: number; focusDelayMs?: number; gap?: number; disabled?: boolean; portal?: boolean; maxWidth?: number; openOnClick?: boolean; children: ReactElement<AnchorProps> })
    新: function({ label, shortcutKeys, side = 'right', align = 'center', delayMs = 0, focusDelayMs = 0, gap = 8, disabled = false, portal = false, maxWidth, openOnClick = false, onlyWhenClipped = false, children }:{ label: TooltipLabel; shortcutKeys?: readonly string[] | undefined; side?: TooltipSide; align?: 'center' | 'end'; delayMs?: number; focusDelayMs?: number; gap?: number; disabled?: boolean; portal?: boolean; maxWidth?: number; openOnClick?: boolean; onlyWhenClipped?: boolean; children: ReactElement<AnchorProps> })
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
    旧: export interface MarkdownDelegate { /** Image previews for decoded local paths in this owner's workspace. */ readonly fileImages?: { resolve: (path: string) => string | undefined labels: ImageLightboxLabels & { open: string; loading: string; failed: string } } | undefined /** Ordinary HTTP(S) activation; absent handlers retain native anchor behavior. */ readonly openExternalLink?: MarkdownExternalLinkHandler | undefined /** * Open a decoded local destination from settled Markdown; absent handlers leave plain text. * @param path - Absolute or workspace-relative file path. * @param options - First line to reveal when the destination specifies a line or range. */ readonly openFile?: ((path: string, options?: { line?: number }) => void) | undefined }
    新: export interface MarkdownDelegate { /** Open an object menu without executing its normal activation. */ readonly getTriggerProps?: ((target: MarkdownMenuTarget) => Pick<HTMLAttributes<HTMLElement>, 'onContextMenu' | 'onKeyDown' | 'tabIndex'>) | undefined /** * Image previews for decoded local paths in this owner's workspace. The renderer * appends a per-mount `load` query parameter to `api/file` route URLs. */ readonly fileImages?: { fileDrag: FileDragActions resolve: (path: string) => string | undefined resourceAddress?: ((path: string) => string) | undefined labels: ImageLightboxLabels & { open: string; loading: string; failed: string } } | undefined /** Ordinary HTTP(S) activation; absent handlers retain native anchor behavior. */ readonly openExternalLink?: MarkdownExternalLinkHandler | undefined /** * Open a decoded local destination from settled Markdown; absent handlers leave plain text. * @param path - Absolute or workspace-relative file path. * @param options - First line to reveal when the destination specifies a line or range. */ readonly openFile?: ((path: string, options?: { line?: number }) => void) | undefined /** * Render one fence whose language is final: it has a language and content. * Absent, the document renders fences with its built-in code and math blocks; * present, the owner renders every such fence, including `diff` and `math`. * @param fence - language, body, and streaming state. * @returns the rendered block. */ readonly renderCode?: ((fence: MarkdownDelegateFenceInfo) => ReactNode) | undefined }
- **[ast-signature-changed]** `packages/client/ui-primitives/src/markdown/MarkdownDelegate.tsx` — 签名变化: MarkdownDelegateProvider
    旧: function({
  children,
  openExternalLink,
  openFile,
  fileImages,
}:MarkdownDelegateProviderProps)
    新: function({
  children,
  openExternalLink,
  openFile,
  fileImages,
  getTriggerProps,
  renderCode,
}:MarkdownDelegateProviderProps)
- **[ast-signature-changed]** `packages/client/ui-primitives/src/markdown/MarkdownText.tsx` — 签名变化: renderSettled
    旧: function(text:string,labels:MarkdownLabels,fileMentions:MarkdownFileMentions | undefined,pathImages:MarkdownPathImages | undefined)
    新: function(text:string,labels:MarkdownLabels,fileMentions:MarkdownFileMentions | undefined,pathImages:MarkdownPathImages | undefined,omitHtml:boolean)
- **[ast-signature-changed]** `packages/client/ui-primitives/src/markdown/MarkdownText.tsx` — 签名变化: StreamingRenderer
    旧: class(labels:MarkdownLabels)
    新: class(labels:MarkdownLabels,omitHtml:boolean)
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
- **[ast-signature-changed]** `packages/client/ui-primitives/src/ImageLightbox.tsx` — 签名变化: ImageLightbox
    旧: function({ src, alt, labels, onClose }:{ src: string alt: string labels: ImageLightboxLabels onClose: () => void })
    新: function({ src, alt, labels, onClose, contextMenuProps }:{ src: string alt: string labels: ImageLightboxLabels onClose: () => void contextMenuProps?: Pick<HTMLAttributes<HTMLElement>, 'onContextMenu' | 'onKeyDown' | 'tabIndex'> | undefined })
- **[ast-signature-changed]** `packages/context/agent-instructions/src/render.ts` — 签名变化: RenderedInstructionContext
    旧: interface RenderedInstructionContext extends RenderedAgentInstructions { /** * Original files semantically represented by rendered section text. This is * not the complement of `omitted`: a truncated file may be represented here * and in `truncated`, while a notice-only file appears in neither. A genuinely * empty file counts when its heading survives because that heading conveys * that the instruction exists and has no content. */ represented: LoadedInstructionFile[] }
    新: interface RenderedInstructionContext extends RenderedAgentInstructions { /** * Original files semantically represented by rendered section text. This is * not the complement of `omitted`: a truncated file may be represented here * and in `truncated`, while a notice-only file appears in neither. A genuinely * empty file counts when its heading survives because that heading conveys * that the instruction exists and has no content. */ represented: LoadedInstructionFile[] /** Files whose sections the text holds, in text order, each with the content the text holds. */ sections: LoadedInstructionFile[] /** * Intro block of the `<system-reminder>` frame: undefined when the text is * empty or a notice without a frame, and the empty string when the frame has * no intro, as in a change batch or a merged frame whose chains both rendered * without a frame. */ intro: string | undefined }
- **[ast-signature-changed]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 签名变化: overlay
    旧: var:Record<string, string | undefined>
    新: var
- **[ast-signature-changed]** `packages/client/ui-primitives/src/code-file-types.ts` — 签名变化: FILE_NAME_TYPES
    旧: var:Readonly<Record<string, CodeFileType>>
    新: var:ReadonlyMap<string, CodeFileType>
- **[ast-signature-changed]** `packages/client/ui-primitives/src/markdown/render.tsx` — 签名变化: imageSource
    旧: function(url:string,pathImages:MarkdownPathImages | undefined)
    新: function(url:string,pathImages:MarkdownPathImages | undefined,load:number)
- **[ast-signature-changed]** `packages/client/ui-primitives/src/markdown/render.tsx` — 签名变化: MarkdownPathImages
    旧: export interface MarkdownPathImages { /** * Resolve one authored image destination. * @param value - The destination exactly as the markdown author wrote it. * @returns A displayable absolute URL, or undefined when the destination * names no displayable image — it then stays inert alt text. */ resolve(value: string): string | undefined }
    新: export interface MarkdownPathImages { /** * Resolve one authored image destination. * @param value - The destination exactly as the markdown author wrote it. * @returns A displayable absolute URL, or undefined when the destination * names no displayable image — it then stays inert alt text. The renderer * appends a per-mount `load` query parameter to `api/file` route results. */ resolve(value: string): string | undefined }
- **[ast-signature-changed]** `packages/client/ui-primitives/src/markdown/render.tsx` — 签名变化: MarkdownFileMentions
    旧: export interface MarkdownFileMentions { /** * Resolve one inline-code token. * @param value - The authored token, exactly as written. * @returns The opener with its accessible label and full-path title, or * undefined when the token names no known file — it then stays inert code. */ resolve(value: string): { open: () => void; label: string; title: string } | undefined }
    新: export interface MarkdownFileMentions { /** * Resolve one inline-code token. * @param value - The authored token, exactly as written. * @returns The opener with its accessible label and full-path title, or * undefined when the token names no known file — it then stays inert code. */ resolve(value: string): { open: () => void contextMenuProps?: Pick<HTMLAttributes<HTMLElement>, 'onContextMenu' | 'onKeyDown' | 'tabIndex'> label: string title: string } | undefined }
- **[ast-signature-changed]** `packages/client/ui-primitives/src/markdown/render.tsx` — 签名变化: MarkdownRenderContext
    旧: export interface MarkdownRenderContext { /** Streaming arm: fences highlight incrementally as they grow; TeX (including ```math fences) stays literal until the settled pass. */ readonly streaming: boolean /** Localized fence copy-button labels. */ readonly labels: MarkdownLabels /** Inside a blockquote's children: tables there always fill the quote's width. */ readonly inBlockquote?: boolean /** Inline-code file mentions; absent wherever no opener vocabulary exists. */ readonly fileMentions: MarkdownFileMentions | undefined /** Local-path image vocabulary; absent wherever no rewriting owner exists. */ readonly pathImages: MarkdownPathImages | undefined /** Inside an anchor's children: interactive mentions must not nest there. */ readonly inLink?: boolean /** Reference targets visible to this pass. */ readonly targets: ReferenceTargets /** Footnote identifiers in first-reference order; a footnote's number is its 1-based index here. */ readonly footnoteOrder: string[] /** References rendered per identifier; drives the section's back-reference count. */ readonly footnoteCounts: Map<string, number> }
    新: export interface MarkdownRenderContext { /** Streaming arm: fences highlight incrementally as they grow; TeX (including ```math fences) stays literal until the settled pass. */ readonly streaming: boolean /** Localized fence copy-button labels. */ readonly labels: MarkdownLabels /** Inside a blockquote's children: tables there always fill the quote's width. */ readonly inBlockquote?: boolean /** Inline-code file mentions; absent wherever no opener vocabulary exists. */ readonly fileMentions: MarkdownFileMentions | undefined /** Local-path image vocabulary; absent wherever no rewriting owner exists. */ readonly pathImages: MarkdownPathImages | undefined /** Raw HTML renders nothing instead of literal text. */ readonly omitHtml: boolean /** Inside an anchor's children: interactive mentions must not nest there. */ readonly inLink?: boolean /** Reference targets visible to this pass. */ readonly targets: ReferenceTargets /** Footnote identifiers in first-reference order; a footnote's number is its 1-based index here. */ readonly footnoteOrder: string[] /** References rendered per identifier; drives the section's back-reference count. */ readonly footnoteCounts: Map<string, number> }
- **[config-field-removed]** `config:@deepseek-ai/dsh-tool-subagent` — 配置字段被删除: modelSelectionSettings（cordis.yml 里写这些字段将失效）

## breaking

- **[package-removed]** `packages/api/account-controller` — 包被移除或不再是独立包
- **[package-removed]** `packages/client/ui-deepseek-model-label-1017` — 包被移除或不再是独立包
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
- **[config-scope-removed]** `config:@deepseek-ai/dsh-tools` — 该包从配置目录移除，其 cordis.yml config 块不再可用
- **[config-scope-removed]** `config:@deepseek-ai/dsh-web-search-exa` — 该包从配置目录移除，其 cordis.yml config 块不再可用
- **[config-scope-removed]** `config:@deepseek-ai/dsh-web-search-perplexity` — 该包从配置目录移除，其 cordis.yml config 块不再可用
- **[ast-export-removed]** `packages/acp/acp` — 导出（含 re-export）删除: initialSelection（原声明于 packages/acp/acp/src/index.ts）
- **[ast-export-removed]** `packages/api/account-controller` — 导出（含 re-export）删除: AccountController（原声明于 packages/api/account-controller/src/index.ts）
- **[ast-export-removed]** `packages/api/session-controller` — 导出（含 re-export）删除: addressedSession（原声明于 packages/api/session-controller/src/index.ts）
- **[ast-export-removed]** `packages/boot/app-boot` — 导出（含 re-export）删除: proxyName（原声明于 packages/boot/app-boot/src/index.ts）
- **[ast-export-removed]** `packages/boot/plugin-manager` — 导出（含 re-export）删除: protectedModules（原声明于 packages/boot/plugin-manager/src/index.ts）
- **[ast-export-removed]** `packages/boot/plugin-manager` — 导出（含 re-export）删除: refusedBy（原声明于 packages/boot/plugin-manager/src/index.ts）
- ★ **[ast-export-removed]** `packages/client/modules` — 导出（含 re-export）删除: sourceKey（原声明于 packages/client/modules/src/index.ts）
- **[ast-export-removed]** `packages/session/working-directory` — 导出（含 re-export）删除: SessionProjectionStateMap（原声明于 packages/session/working-directory/src/index.ts）
- **[ast-export-removed]** `packages/context/time-context` — 导出（含 re-export）删除: TimeContextProjection（原声明于 packages/context/time-context/src/index.ts）
- **[ast-export-removed]** `packages/context/tmux-context` — 导出（含 re-export）删除: TmuxContextState（原声明于 packages/context/tmux-context/src/index.ts）
- **[ast-export-removed]** `packages/core/agent-loop` — 导出（含 re-export）删除: PreparedAgent（原声明于 packages/core/agent-loop/src/index.ts）
- **[ast-export-removed]** `packages/core/agent-loop` — 导出（含 re-export）删除: unregisterTurnBoundary（原声明于 packages/core/agent-loop/src/index.ts）
- **[ast-export-removed]** `packages/core/agent-loop` — 导出（含 re-export）删除: unregisterInbox（原声明于 packages/core/agent-loop/src/index.ts）
- **[ast-export-removed]** `packages/core/session` — 导出（含 re-export）删除: surfaceOpts（原声明于 packages/core/session/src/index.ts）
- **[ast-export-removed]** `packages/core/session` — 导出（含 re-export）删除: surfaceMetadata（原声明于 packages/core/session/src/index.ts）
- **[ast-export-removed]** `packages/core/session` — 导出（含 re-export）删除: surfaceMetadataSnapshot（原声明于 packages/core/session/src/index.ts）
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
- **[ast-export-removed]** `packages/experimental/agent-team` — 导出（含 re-export）删除: disposeProjection（原声明于 packages/experimental/agent-team/src/index.ts）
- **[ast-export-removed]** `packages/experimental/auto-review` — 导出（含 re-export）删除: PendingAction（原声明于 packages/experimental/auto-review/src/index.ts）
- **[ast-export-removed]** `packages/experimental/auto-review` — 导出（含 re-export）删除: isHumanInstruction（原声明于 packages/experimental/auto-review/src/index.ts）
- **[ast-export-removed]** `packages/experimental/auto-review` — 导出（含 re-export）删除: directParentInitialPromptSeq（原声明于 packages/experimental/auto-review/src/index.ts）
- **[ast-export-removed]** `packages/experimental/auto-review` — 导出（含 re-export）删除: initialPromptSeq（原声明于 packages/experimental/auto-review/src/index.ts）
- **[ast-export-removed]** `packages/experimental/auto-review` — 导出（含 re-export）删除: projectInstructions（原声明于 packages/experimental/auto-review/src/index.ts）
- **[ast-export-removed]** `packages/experimental/auto-review` — 导出（含 re-export）删除: reviewUserText（原声明于 packages/experimental/auto-review/src/index.ts）
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
- **[ast-export-removed]** `packages/mcp/mcp-client` — 导出（含 re-export）删除: Reconnect（原声明于 packages/mcp/mcp-client/src/index.ts）
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
- **[ast-export-removed]** `packages/sandbox/sandbox-policy` — 导出（含 re-export）删除: resolveWorkspaceRoot（原声明于 packages/sandbox/sandbox-policy/src/index.ts）
- **[ast-export-removed]** `packages/sandbox/sandbox-policy` — 导出（含 re-export）删除: SandboxModeState（原声明于 packages/sandbox/sandbox-policy/src/index.ts）
- **[ast-export-removed]** `packages/schedule/schedule` — 导出（含 re-export）删除: activeLegacy（原声明于 packages/schedule/schedule/src/index.ts）
- **[ast-export-removed]** `packages/schedule/tool-schedule` — 导出（含 re-export）删除: SHARED_VIEW_PROPERTIES（原声明于 packages/schedule/tool-schedule/src/index.ts）
- **[ast-export-removed]** `packages/schedule/tool-schedule` — 导出（含 re-export）删除: AFTER_VIEW_SCHEMA（原声明于 packages/schedule/tool-schedule/src/index.ts）
- **[ast-export-removed]** `packages/schedule/tool-schedule` — 导出（含 re-export）删除: AT_VIEW_SCHEMA（原声明于 packages/schedule/tool-schedule/src/index.ts）
- **[ast-export-removed]** `packages/schedule/tool-schedule` — 导出（含 re-export）删除: EVERY_VIEW_SCHEMA（原声明于 packages/schedule/tool-schedule/src/index.ts）
- **[ast-export-removed]** `packages/schedule/tool-schedule` — 导出（含 re-export）删除: DAILY_VIEW_SCHEMA（原声明于 packages/schedule/tool-schedule/src/index.ts）
- **[ast-export-removed]** `packages/schedule/tool-schedule` — 导出（含 re-export）删除: WEEKLY_VIEW_SCHEMA（原声明于 packages/schedule/tool-schedule/src/index.ts）
- **[ast-export-removed]** `packages/schedule/tool-schedule` — 导出（含 re-export）删除: CRON_VIEW_SCHEMA（原声明于 packages/schedule/tool-schedule/src/index.ts）
- **[ast-export-removed]** `packages/schedule/tool-schedule` — 导出（含 re-export）删除: VIEW_SCHEMA（原声明于 packages/schedule/tool-schedule/src/index.ts）
- **[ast-export-removed]** `packages/schedule/tool-schedule` — 导出（含 re-export）删除: basicErrorSchema（原声明于 packages/schedule/tool-schedule/src/index.ts）
- **[ast-export-removed]** `packages/schedule/tool-schedule` — 导出（含 re-export）删除: ERROR_SCHEMAS（原声明于 packages/schedule/tool-schedule/src/index.ts）
- **[ast-export-removed]** `packages/schedule/tool-schedule` — 导出（含 re-export）删除: DELETE_OUTPUT_SCHEMA（原声明于 packages/schedule/tool-schedule/src/index.ts）
- **[ast-export-removed]** `packages/schedule/tool-schedule` — 导出（含 re-export）删除: UPDATE_OUTPUT_SCHEMA（原声明于 packages/schedule/tool-schedule/src/index.ts）
- **[ast-export-removed]** `packages/schedule/tool-schedule` — 导出（含 re-export）删除: DELETE_DESCRIPTION（原声明于 packages/schedule/tool-schedule/src/index.ts）
- **[ast-export-removed]** `packages/schedule/tool-schedule` — 导出（含 re-export）删除: UPDATE_DESCRIPTION（原声明于 packages/schedule/tool-schedule/src/index.ts）
- **[ast-export-removed]** `packages/schedule/tool-schedule` — 导出（含 re-export）删除: CREATE_TITLE_DESCRIPTION（原声明于 packages/schedule/tool-schedule/src/index.ts）
- **[ast-export-removed]** `packages/schedule/tool-schedule` — 导出（含 re-export）删除: operationError（原声明于 packages/schedule/tool-schedule/src/index.ts）
- **[ast-export-removed]** `packages/schedule/tool-schedule` — 导出（含 re-export）删除: subagentCallerRefusal（原声明于 packages/schedule/tool-schedule/src/index.ts）
- **[ast-export-removed]** `packages/schedule/tool-schedule` — 导出（含 re-export）删除: invalidInterval（原声明于 packages/schedule/tool-schedule/src/index.ts）
- **[ast-export-removed]** `packages/schedule/tool-schedule` — 导出（含 re-export）删除: validateCreateArgs（原声明于 packages/schedule/tool-schedule/src/index.ts）
- **[ast-export-removed]** `packages/schedule/tool-schedule` — 导出（含 re-export）删除: validateUpdateArgs（原声明于 packages/schedule/tool-schedule/src/index.ts）
- **[ast-export-removed]** `packages/schedule/tool-schedule` — 导出（含 re-export）删除: timingChangeFrom（原声明于 packages/schedule/tool-schedule/src/index.ts）
- **[ast-export-removed]** `packages/schedule/tool-schedule` — 导出（含 re-export）删除: SELECTOR_PARAMETERS（原声明于 packages/schedule/tool-schedule/src/index.ts）
- **[ast-export-removed]** `packages/skill/skill-office` — 导出（含 re-export）删除: officeRuntime（原声明于 packages/skill/skill-office/src/index.ts）
- ★ **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: modelSelectionCapable（原声明于 packages/subagent/tool-subagent/src/index.ts）
- ★ **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: choiceDescription（原声明于 packages/subagent/tool-subagent/src/index.ts）
- ★ **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: compositionScope（原声明于 packages/subagent/tool-subagent/src/index.ts）
- ★ **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: selectForSession（原声明于 packages/subagent/tool-subagent/src/index.ts）
- ★ **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: freshSession（原声明于 packages/subagent/tool-subagent/src/index.ts）
- ★ **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: allowedModels（原声明于 packages/subagent/tool-subagent/src/index.ts）
- ★ **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: scopedInstalls（原声明于 packages/subagent/tool-subagent/src/index.ts）
- ★ **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: installing（原声明于 packages/subagent/tool-subagent/src/index.ts）
- ★ **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: belongsToComposition（原声明于 packages/subagent/tool-subagent/src/index.ts）
- ★ **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: installScoped（原声明于 packages/subagent/tool-subagent/src/index.ts）
- ★ **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: removeScoped（原声明于 packages/subagent/tool-subagent/src/index.ts）
- ★ **[ast-export-removed]** `packages/subagent/tool-subagent` — 导出（含 re-export）删除: reconcileComposedAgents（原声明于 packages/subagent/tool-subagent/src/index.ts）
- **[ast-export-removed]** `packages/test-support/llm-replay` — 导出（含 re-export）删除: inferStartedSubagents（原声明于 packages/test-support/llm-replay/src/index.ts）
- **[ast-export-removed]** `packages/util/values` — 导出（含 re-export）删除: SnapshotDestination（原声明于 packages/util/values/src/index.ts）
- **[ast-export-removed]** `packages/util/values` — 导出（含 re-export）删除: JsonWalkTask（原声明于 packages/util/values/src/index.ts）
- **[ast-export-removed]** `packages/api/session-controller/src/agent.ts` — 导出（含 re-export）删除: InstalledSelection（原声明于 packages/api/session-controller/src/agent.ts）
- **[ast-export-removed]** `packages/api/session-controller/src/agent.ts` — 导出（含 re-export）删除: inspectApiSession（原声明于 packages/api/session-controller/src/agent.ts）
- **[ast-export-removed]** `packages/api/session-controller/src/agent.ts` — 导出（含 re-export）删除: projectionState（原声明于 packages/api/session-controller/src/agent.ts）
- **[ast-export-removed]** `packages/api/session-controller/src/agent.ts` — 导出（含 re-export）删除: loggedHeader（原声明于 packages/api/session-controller/src/agent.ts）
- **[ast-export-removed]** `packages/api/session-controller/src/agent.ts` — 导出（含 re-export）删除: agentModelSelection（原声明于 packages/api/session-controller/src/agent.ts）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: isSeparator（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: isLabel（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: MEASURE_STYLE（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: vw（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: vh（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: listEl（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: lw（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: lh（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: x（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: y（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: scrollable（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: subOpen（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/Menu.tsx` — 导出（含 re-export）删除: collapseSubmenuFrom（原声明于 packages/client/ui-primitives/src/Menu.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/useAnchoredPosition.ts` — 导出（含 re-export）删除: AnchoredPositionOptions（原声明于 packages/client/ui-primitives/src/useAnchoredPosition.ts）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/useAnchoredPosition.ts` — 导出（含 re-export）删除: useAnchoredPosition（原声明于 packages/client/ui-primitives/src/useAnchoredPosition.ts）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: WeightedIconProps（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconSearchOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconSettingsOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconPanelLeftOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconEllipsisOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconPlusOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconCheckOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconBranchOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconChevronDownOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconChevronLeftOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconChevronRightOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconTriangleRightFillArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconChevronUpOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconCloseOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconCloseFillArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconCloseCircleFillArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconCopyOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconRefreshOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconLikeOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconLikeFillArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconDislikeOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconDislikeFillArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconShareOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconDeliverDocArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconEditOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconThinkOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconAgentPresetOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconContextInjectionOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconLinkOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconRightUpOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconEnhanceOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconTrashOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconWarningOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconCheckCircleFillArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconWarningTriangleOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconUserOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconUsersOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconPaperPlaneOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconStopFillArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconPaperclipOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconLoadingOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconDownloadOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconPlayOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconPauseOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconFullscreenOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconCodeOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconCordisPluginOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconApiOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconPersonalizationOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconProjectAddOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconFolderOpenOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconFolderOpenArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconTreeCornerArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconLightOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconDarkOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconFollowsystemOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconDataOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconDatabaseOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconClockOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconGaugeOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconSendOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconQueueOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconChecklistOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconListPenOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconGoalOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconSparkleArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconSkillOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconQuestionOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconInfoOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconPluginPinwheelOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconAlarmClockOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconArchiveOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconWrapLinesOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconNowrapFillArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconWrapFillArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconCompareSplitOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconPlanOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconCompactOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconShieldOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconCheckCircleOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconUnarchiveOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconPinOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconPinFillArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconFlatListOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconWorkspaceTreeOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconChevronsUpDownOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconArchiveOffOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: maskId（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconArchiveCheckOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconSlidersTwoOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconMicrophoneOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: IconAppsAddOutlineArtwork（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: near（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: far（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: plusX（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
- ★ **[ast-export-removed]** `packages/client/ui-primitives/src/icons/index.tsx` — 导出（含 re-export）删除: plusY（原声明于 packages/client/ui-primitives/src/icons/index.tsx）
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
- **[ast-signature-changed]** `packages/core/tools/src/executor.ts` — 签名变化: ToolCallResult
    旧: export type ToolCallResult = | { deny: string; result?: undefined; isError?: undefined } | { result: unknown; isError?: true; deny?: undefined }
    新: export interface ToolCallResult { readonly callId: ToolCallId readonly result: ToolExecutionResult }
- **[ast-export-removed]** `packages/llm/llm-pi-ai/src/adapter.ts` — 导出（含 re-export）删除: attribution（原声明于 packages/llm/llm-pi-ai/src/adapter.ts）
- **[ast-export-removed]** `packages/llm/llm/src/content.ts` — 导出（含 re-export）删除: activeNames（原声明于 packages/llm/llm/src/content.ts）
- **[ast-export-removed]** `packages/llm/llm/src/content.ts` — 导出（含 re-export）删除: messageIds（原声明于 packages/llm/llm/src/content.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/usage-projection.ts` — 导出（含 re-export）删除: zeroBuckets（原声明于 packages/llm/token-meter/src/usage-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/usage-projection.ts` — 导出（含 re-export）删除: bucketsFrom（原声明于 packages/llm/token-meter/src/usage-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/usage-projection.ts` — 导出（含 re-export）删除: bucketsEqual（原声明于 packages/llm/token-meter/src/usage-projection.ts）
- **[ast-export-removed]** `packages/llm/token-meter/src/usage-projection.ts` — 导出（含 re-export）删除: addReplacing（原声明于 packages/llm/token-meter/src/usage-projection.ts）
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
- **[ast-export-removed]** `packages/ptc-runtime/ptc-runtime-node/src/launch.ts` — 导出（含 re-export）删除: moduleName（原声明于 packages/ptc-runtime/ptc-runtime-node/src/launch.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/types.ts` — 导出（含 re-export）删除: ScheduleState（原声明于 packages/schedule/schedule/src/types.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/types.ts` — 导出（含 re-export）删除: ScheduleDeliveryMode（原声明于 packages/schedule/schedule/src/types.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/types.ts` — 导出（含 re-export）删除: ScheduleView（原声明于 packages/schedule/schedule/src/types.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/types.ts` — 导出（含 re-export）删除: ScheduleCreateValue（原声明于 packages/schedule/schedule/src/types.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/types.ts` — 导出（含 re-export）删除: ScheduleListValue（原声明于 packages/schedule/schedule/src/types.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/types.ts` — 导出（含 re-export）删除: ScheduleDeleteValue（原声明于 packages/schedule/schedule/src/types.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/types.ts` — 导出（含 re-export）删除: ScheduleDeleteRequest（原声明于 packages/schedule/schedule/src/types.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/types.ts` — 导出（含 re-export）删除: ScheduleTimingChange（原声明于 packages/schedule/schedule/src/types.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/types.ts` — 导出（含 re-export）删除: ScheduleUpdateContent（原声明于 packages/schedule/schedule/src/types.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/types.ts` — 导出（含 re-export）删除: ScheduleUpdateRequest（原声明于 packages/schedule/schedule/src/types.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/types.ts` — 导出（含 re-export）删除: ScheduleUpdateMiss（原声明于 packages/schedule/schedule/src/types.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/types.ts` — 导出（含 re-export）删除: ScheduleUpdateResult（原声明于 packages/schedule/schedule/src/types.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/types.ts` — 导出（含 re-export）删除: ScheduleUpdateValue（原声明于 packages/schedule/schedule/src/types.ts）
- **[ast-signature-changed]** `packages/schedule/schedule/src/types.ts` — 签名变化: ScheduleDeliveryHistoryResult
    旧: export type ScheduleDeliveryHistoryResult = | { readonly id: ScheduleId readonly records: ScheduleDeliveryRecord[] /** Whether earlier delivery records may be unavailable; missing receipts are never reconstructed. */ readonly earlierRecordsUnavailable: boolean /** True only after an append removed saved records; absent legacy evidence is false. */ readonly earlierRecordsPruned: boolean /** Current Host retention configuration, also used by the delivery writer. */ readonly retention: DeliveryRetentionBounds /** Oldest returned message identity, present only when older saved records remain. */ readonly nextBefore?: MessageId } | { readonly id: ScheduleId; readonly code: 'schedule_not_found' | 'delivery_cursor_not_found' }
    新: export type ScheduleDeliveryHistoryResult = ScheduleDeliveryHistoryPage | ScheduleDeliveryHistoryMiss
- **[ast-export-removed]** `packages/schedule/schedule/src/domain.ts` — 导出（含 re-export）删除: SCHEDULE_CHANGE_VERSION（原声明于 packages/schedule/schedule/src/domain.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/domain.ts` — 导出（含 re-export）删除: IANA_ZONE（原声明于 packages/schedule/schedule/src/domain.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/domain.ts` — 导出（含 re-export）删除: FoldedSchedules（原声明于 packages/schedule/schedule/src/domain.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/domain.ts` — 导出（含 re-export）删除: hasExactKeysWithOptional（原声明于 packages/schedule/schedule/src/domain.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/domain.ts` — 导出（含 re-export）删除: decodeHistoricalRecordTitle（原声明于 packages/schedule/schedule/src/domain.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/domain.ts` — 导出（含 re-export）删除: CalendarParts（原声明于 packages/schedule/schedule/src/domain.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/domain.ts` — 导出（含 re-export）删除: calendarEpoch（原声明于 packages/schedule/schedule/src/domain.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/domain.ts` — 导出（含 re-export）删除: localInstant（原声明于 packages/schedule/schedule/src/domain.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/domain.ts` — 导出（含 re-export）删除: decodeLegacyScheduleRecord（原声明于 packages/schedule/schedule/src/domain.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/domain.ts` — 导出（含 re-export）删除: decodeScheduleChange（原声明于 packages/schedule/schedule/src/domain.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/domain.ts` — 导出（含 re-export）删除: floorTime（原声明于 packages/schedule/schedule/src/domain.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/domain.ts` — 导出（含 re-export）删除: DecodedDispatch（原声明于 packages/schedule/schedule/src/domain.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/domain.ts` — 导出（含 re-export）删除: dispatchedRecord（原声明于 packages/schedule/schedule/src/domain.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/domain.ts` — 导出（含 re-export）删除: hasAcceptedAt（原声明于 packages/schedule/schedule/src/domain.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/domain.ts` — 导出（含 re-export）删除: applyScheduleChanges（原声明于 packages/schedule/schedule/src/domain.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/domain.ts` — 导出（含 re-export）删除: foldScheduleEvents（原声明于 packages/schedule/schedule/src/domain.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/domain.ts` — 导出（含 re-export）删除: allocateScheduleId（原声明于 packages/schedule/schedule/src/domain.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/domain.ts` — 导出（含 re-export）删除: ParsedCronExpression（原声明于 packages/schedule/schedule/src/domain.ts）
- **[ast-export-removed]** `packages/schedule/schedule/src/domain.ts` — 导出（含 re-export）删除: scheduleView（原声明于 packages/schedule/schedule/src/domain.ts）
- **[ast-export-removed]** `packages/sdk/client/src/api.ts` — 导出（含 re-export）删除: contentBlocks（原声明于 packages/sdk/client/src/api.ts）
- **[ast-export-removed]** `packages/sdk/client/src/api.ts` — 导出（含 re-export）删除: notifications（原声明于 packages/sdk/client/src/api.ts）
- **[ast-export-removed]** `packages/sdk/server/src/server.ts` — 导出（含 re-export）删除: subagentParentOf（原声明于 packages/sdk/server/src/server.ts）
- **[ast-export-removed]** `packages/subagent/subagent/src/catalog.ts` — 导出（含 re-export）删除: EXTERNAL_SUBAGENT_CATALOG_VERSION（原声明于 packages/subagent/subagent/src/catalog.ts）
- **[ast-export-removed]** `packages/subagent/subagent/src/child-agent.ts` — 导出（含 re-export）删除: ChildCreateInputs（原声明于 packages/subagent/subagent/src/child-agent.ts）
- **[ast-export-removed]** `packages/subagent/subagent/src/continuation-messages.ts` — 导出（含 re-export）删除: withContinuableReturnGuidance（原声明于 packages/subagent/subagent/src/continuation-messages.ts）
- **[ast-export-removed]** `packages/subagent/subagent/src/continuation-messages.ts` — 导出（含 re-export）删除: encodedParentId（原声明于 packages/subagent/subagent/src/continuation-messages.ts）
- **[ast-signature-changed]** `packages/subagent/subagent/src/control-types.ts` — 签名变化: SubagentCatalogRow
    旧: export type SubagentCatalogRow = & { /** The durable child session id, stable across Activations. */ readonly id: SessionId /** * Whether recursive catalog listing observed a resident Session. This * does not encode a durable outcome or guarantee continuation delivery. */ readonly activity: 'running' | 'inactive' } & ( | { /** A terminal one-shot child. */ readonly mode: 'one-shot' /** Optional durable creation label from the parent catalog. */ readonly label?: string } | { /** An external execution without a local child Session. */ readonly mode: 'external' /** Optional durable creation label from the parent catalog. */ readonly label?: string } | { /** A resumable conversation. */ readonly mode: 'continuable' /** Durable creation label from the parent catalog. */ readonly label: string } )
    新: export type SubagentCatalogRow = & { /** The durable child session id, stable across Activations. */ readonly id: SessionId /** * Whether recursive catalog listing observed a resident Session. This * does not encode a durable outcome or guarantee continuation delivery. */ readonly activity: 'running' | 'inactive' } & KnownSubagentCatalogFields
- **[ast-export-removed]** `packages/test-support/client-runtime/src/access.ts` — 导出（含 re-export）删除: allowAllRemoteAccess（原声明于 packages/test-support/client-runtime/src/access.ts）
- **[ast-export-removed]** `packages/test-support/session-snapshot/src/suite.ts` — 导出（含 re-export）删除: normalizedRefreshRecord（原声明于 packages/test-support/session-snapshot/src/suite.ts）
- **[ast-export-removed]** `packages/web/web-deepseek-api/src/search.ts` — 导出（含 re-export）删除: DEEPSEEK_WEB_API_GUIDANCE（原声明于 packages/web/web-deepseek-api/src/search.ts）
- **[ast-export-removed]** `packages/web/web-fetch-http/src/provider.ts` — 导出（含 re-export）删除: HttpFetchResolver（原声明于 packages/web/web-fetch-http/src/provider.ts）
- **[ast-export-removed]** `packages/web/web-fetch-http/src/provider.ts` — 导出（含 re-export）删除: addresses（原声明于 packages/web/web-fetch-http/src/provider.ts）
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
- ★ **[config-field-removed]** `config:@deepseek-ai/dsh-tool-subagent` — 配置字段被删除: modelSelectionSettings（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-tools` — 配置字段被删除: mode（cordis.yml 里写这些字段将失效）
- **[config-field-removed]** `config:@deepseek-ai/dsh-tools` — 配置字段被删除: maxParallelSubCalls（cordis.yml 里写这些字段将失效）
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

- **[exports-map-changed]** `packages/acp/acp/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/api/remote-access/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/boot/plugin-manager/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/boot/plugin-market/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/browser-use/browser-use/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/bundle/acp-app/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/bundle/headless/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/bundle/sdk-app/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-brand-official/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-chat/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-plugin-market/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-settings-account/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/client/ui-trajectory/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/computer-use/computer-use/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/context/harness-dev-context/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/context/tmux-context/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/core/tools/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/credentials/deepseek-account/package.json` — package.json exports 字段变化，请人工确认入口路径
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
- **[exports-map-changed]** `packages/interaction/commands/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/lsp/lsp/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/lsp/lsp-stdio/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/lsp/tool-lsp/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/mcp/mcp-client/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/ptc-runtime/ptc-runtime-node/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/schedule/tool-schedule/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/sdk/server/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/session/tool-working-directory/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/session/working-directory/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/shell/bash-local/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/shell/pwsh-local/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/skill/skill-office/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/skill/tool-workspace-dependencies/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/ssh/fs-ssh/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/ssh/sandbox-ssh/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/ssh/ssh/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/ssh/subprocess-ssh/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/storage/storage-sqlite/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/subagent/subagent/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/subagent/subagent-acp/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/subagent/subagent-dsh-sdk/package.json` — package.json exports 字段变化，请人工确认入口路径
- ★ **[exports-map-changed]** `packages/subagent/tool-subagent-control/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[exports-map-changed]** `packages/web/web/package.json` — package.json exports 字段变化，请人工确认入口路径
- **[doc-major-rewrite]** `docs/experimental-persistence-catalog.md` — 行数 11 -> 15（36%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/experimental-persistence-catalog.zh.md` — 行数 11 -> 15（36%），可能存在行为级变更，建议人工复核
- ★ **[doc-major-rewrite]** `docs/subsystems/boot.md` — 行数 335 -> 480（43%），可能存在行为级变更，建议人工复核
- ★ **[doc-major-rewrite]** `docs/subsystems/boot.zh.md` — 行数 335 -> 480（43%），可能存在行为级变更，建议人工复核
- ★ **[doc-major-rewrite]** `docs/subsystems/computer-use.md` — 行数 36 -> 100（178%），可能存在行为级变更，建议人工复核
- ★ **[doc-major-rewrite]** `docs/subsystems/computer-use.zh.md` — 行数 36 -> 100（178%），可能存在行为级变更，建议人工复核
- ★ **[doc-major-rewrite]** `docs/subsystems/filesystem.md` — 行数 445 -> 590（33%），可能存在行为级变更，建议人工复核
- ★ **[doc-major-rewrite]** `docs/subsystems/filesystem.zh.md` — 行数 445 -> 590（33%），可能存在行为级变更，建议人工复核
- ★ **[doc-major-rewrite]** `docs/subsystems/mcp.md` — 行数 94 -> 173（84%），可能存在行为级变更，建议人工复核
- ★ **[doc-major-rewrite]** `docs/subsystems/mcp.zh.md` — 行数 94 -> 173（84%），可能存在行为级变更，建议人工复核
- ★ **[doc-major-rewrite]** `docs/subsystems/schedule.md` — 行数 449 -> 227（49%），可能存在行为级变更，建议人工复核
- ★ **[doc-major-rewrite]** `docs/subsystems/schedule.zh.md` — 行数 449 -> 227（49%），可能存在行为级变更，建议人工复核
- ★ **[doc-major-rewrite]** `docs/subsystems/session-projection.md` — 行数 313 -> 438（40%），可能存在行为级变更，建议人工复核
- ★ **[doc-major-rewrite]** `docs/subsystems/session-projection.zh.md` — 行数 313 -> 438（40%），可能存在行为级变更，建议人工复核
- ★ **[doc-major-rewrite]** `docs/subsystems/token-meter.md` — 行数 86 -> 126（47%），可能存在行为级变更，建议人工复核
- ★ **[doc-major-rewrite]** `docs/subsystems/token-meter.zh.md` — 行数 86 -> 126（47%），可能存在行为级变更，建议人工复核
- ★ **[doc-major-rewrite]** `docs/subsystems/working-directory.md` — 行数 45 -> 68（51%），可能存在行为级变更，建议人工复核
- ★ **[doc-major-rewrite]** `docs/subsystems/working-directory.zh.md` — 行数 45 -> 68（51%），可能存在行为级变更，建议人工复核
- ★ **[doc-major-rewrite]** `docs/subsystems/worktrees.md` — 行数 56 -> 148（164%），可能存在行为级变更，建议人工复核
- ★ **[doc-major-rewrite]** `docs/subsystems/worktrees.zh.md` — 行数 56 -> 148（164%），可能存在行为级变更，建议人工复核
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
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/agent-runtime-owner/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/agent-runtime-owner/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/agent-team-subagents/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/agent-team-subagents/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
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
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/context-menu-services/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/context-menu-services/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
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
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/session-team-mode/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/session-team-mode/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/subagent-activation-options/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/subagent-activation-options/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/subagent-service-methods/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/subagent-service-methods/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/subagent-user-controls/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/subagent-user-controls/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/tool-executor-plugins/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/tool-executor-plugins/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/web-fetch-private-destinations/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/web-fetch-private-destinations/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/webserver-index-peer/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.2/webserver-index-peer/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/attachment-read-access/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/attachment-read-access/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/computer-use-helper-permissions/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/computer-use-helper-permissions/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/cua-bundle-id-consent/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/cua-bundle-id-consent/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/generated-worktree-names/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/generated-worktree-names/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/inbox-only-agent-wait/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/inbox-only-agent-wait/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/independent-session-forks/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/independent-session-forks/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/ptc-caller-cancellation/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/ptc-caller-cancellation/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/session-follow-activation/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/session-follow-activation/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/subagent-runtime-ownership/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/subagent-runtime-ownership/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/team-mode-menu/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/team-mode-menu/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/team-projection/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/team-projection/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/web-file-downloads/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/web-file-downloads/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/web-search-defaults/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.3/web-search-defaults/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.4/model-listing-refresh/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.4/model-listing-refresh/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.4/reasoning-body-props/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.4/reasoning-body-props/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.4/sandbox-unsupported-policy-error/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.1-rc.4/sandbox-unsupported-policy-error/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/context-menu-target/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/context-menu-target/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/cordis-loader-entry-trees/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/cordis-loader-entry-trees/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/css-anchored-menus/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/css-anchored-menus/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/cua-source-dev-helper/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/cua-source-dev-helper/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/desktop-stable-channel/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/desktop-stable-channel/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/forge-git-permissions/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/forge-git-permissions/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/forge-worktree-entry/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/forge-worktree-entry/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/fs-observation-policy-default-off/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/fs-observation-policy-default-off/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/llm-error-builtin-codes/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/llm-error-builtin-codes/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/llm-request-purpose-declarations/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/llm-request-purpose-declarations/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/pi-ai-request-image-count/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/pi-ai-request-image-count/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/projection-event-frames/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/projection-event-frames/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/projection-released-checkpoint/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/projection-released-checkpoint/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/projection-snapshot-scope/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/projection-snapshot-scope/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/retained-ptc-timeout/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/retained-ptc-timeout/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/schedule-agent-tools/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/schedule-agent-tools/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/schedule-remote-host-tasks/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/schedule-remote-host-tasks/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/sdk-run-commands/guide.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
- **[upgrade-guide-added]** `docs/upgrade-guide/v0.2.2-alpha.2/sdk-run-commands/guide.zh.md` — 官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读
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
- **[doc-major-rewrite]** `docs/web-styling.md` — 行数 28 -> 39（39%），可能存在行为级变更，建议人工复核
- **[doc-major-rewrite]** `docs/web-styling.zh.md` — 行数 28 -> 39（39%），可能存在行为级变更，建议人工复核
- **[ast-signature-changed]** `packages/acp/acp` — 签名变化: record
    旧: function(value:unknown)
    新: var
- **[ast-signature-changed]** `packages/api/gateway` — 签名变化: pending
    旧: var
    新: var:PendingRemoteEvent
- **[ast-signature-changed]** `packages/web/web-deepseek-api` — 签名变化: assertNever
    旧: function(value:never,?context:string)
    新: function(value:never)
- **[ast-signature-changed]** `packages/experimental/plugin-recommendations` — 签名变化: settled
    旧: var
    新: function(decision:ActionCardDecision)
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
- **[ast-signature-changed]** `packages/experimental/plugin-recommendations` — 签名变化: refused
    旧: function(problem:PluginInspectProblem,reason:string)
    新: function(reason:string)
- **[ast-signature-changed]** `packages/boot/plugin-manager` — 签名变化: read
    旧: var:object
    新: var:BundleInfo['meta']
- **[ast-signature-changed]** `packages/boot/plugin-manager` — 签名变化: registries
    旧: var:Registry[]
    新: var
- **[ast-signature-changed]** `packages/boot/plugin-manager` — 签名变化: answer
    旧: var:unknown
    新: var
- **[ast-signature-changed]** `packages/boot/plugin-manager` — 签名变化: connectionFailure
    旧: var:PackageResult | undefined
    新: var:GithubConnectionFailure | undefined
- **[ast-signature-changed]** `packages/boot/plugin-manager` — 签名变化: listing
    旧: var
    新: var:Pick<BundleInfo, 'listedByDefault'>
- **[ast-signature-changed]** `packages/boot/plugin-market` — 签名变化: installationOf
    旧: function(name:string,version:string,bundles:readonly BundleInfo[])
    新: function(bundle:BundleInfo | undefined,version:string)
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
- ★ **[ast-signature-changed]** `packages/client/modules` — 签名变化: PkgMeta
    旧: interface PkgMeta extends WebBootRowFields { clientPath: string }
    新: interface PkgMeta extends WebBootRowFields { clientPath: string /** The package's own manifest; package-asset requests resolve against it as a self-reference. */ manifestPath: string }
- ★ **[ast-signature-changed]** `packages/client/modules` — 签名变化: ClientPackageSource
    旧: interface ClientPackageSource extends ResolvedPkgMeta { /** Loader specifier from the active row. */ loaderName: string /** Resolution base of the config tree that owns the row. */ baseUrl: string /** Stable cache and contribution key for this source. */ sourceKey: string }
    新: interface ClientPackageSource extends ResolvedPkgMeta { /** Loader specifier from the active row. */ loaderName: string /** Resolution base of the config tree that owns the row. */ baseUrl: string /** Stable source identity and contribution key. */ sourceKey: string }
- **[ast-signature-changed]** `packages/boot/plugin-market` — 签名变化: sources
    旧: var:ClientPackageSource[]
    新: var
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
    新: export interface CreateAgentOptions { /** The live agent/session identity. */ readonly sessionId: SessionId /** * Session creation metadata: validated absolute `cwd`, `parentSession` * fork lineage, the `isSeeded` fork marker, the coarse `origin` * classification, and the `delegationDepth` recursion budget. Mirrors the * `cwd`/`parentSession`/`isSeeded`/`origin`/`delegationDepth` fields of * {@link CreateSessionOptions.meta} in dsh-session (the internal-only * `createdAt`, used when reconstructing a persisted session, is deliberately * excluded — a factory caller never sets it). This is durable session data, * so the session boundary validates and snapshots it before asynchronous * setup begins. */ readonly meta?: { readonly cwd?: string readonly parentSession?: SessionId readonly isSeeded?: boolean readonly origin?: 'subagent' readonly delegationDepth?: number readonly agentPreset?: string } /** Exact fork-inherited prefix length when the session metadata sets `isSeeded`. */ readonly inheritedEventCount?: SessionLogOffset /** * Initial replay/fork history, contiguous from seq 0 with lossless-JSON data. * A fork supplies an exact parent prefix, its inherited marker, and closers * for the open tail. Previously closed steps and turns remain unchanged. * The factory validates and snapshots the seed before publication. */ readonly seed?: readonly SessionEvent[] /** Route fallback and output controls; see {@link AgentOptions} for live accessor semantics. */ readonly agentOptions?: AgentOptions /** Optional creation-only cancellation signal; detached before the returned handle becomes visible. */ readonly signal?: AbortSignal /** * Creation-time composition of the agent's scoped world. The factory awaits * setup after minting `agentCtx`, entering the SessionStore, and completing * `session/created`. The Session * accepts live events during setup; the Agent remains outside its registry * until setup completes. Agent creation is announced after setup. Setup may return an {@link AgentSetupCommit}; the factory invokes its * synchronous `commit()` after every setup await settles and immediately * before registry publication. This lets mutable provisioning revalidate at * the exact publication boundary. Everything registered through `agentCtx` * (scoped tools, prompt sections/variables, `restrict()`, listeners, awaited * child plugins) exists before `agent/created`, * and the first prompt assembly. A setup * throw/rejection, commit throw, or owner disposal rolls the scope back * without announcing Agent creation. Already committed Session events remain stored. * * **Setup composes, it never drives**: the callback is trusted same-process * code and receives the full scoped context, so this is a contract rather * than a runtime restriction. Drive the agent only after creation resolves. */ readonly setup?: AgentSetup }
- **[ast-signature-changed]** `packages/core/agent` — 签名变化: ResumeAgentOptions
    旧: export interface ResumeAgentOptions { /** The persisted session id to load and use as the live agent/session identity. */ readonly resumeSessionId: SessionId /** Live parent Agent for runtime ownership; omit for a root Agent. */ readonly parentAgent?: Agent /** Per-agent options (model, …). */ readonly agentOptions?: AgentOptions /** Optional creation-only cancellation signal for persistence load/setup; detached before return. */ readonly signal?: AbortSignal /** * Resume-time composition of the agent's fresh scoped world. Persistence is * loaded first; the factory then mints `agentCtx` and awaits setup while the * reconstructed session and agent remain unpublished. The callback has the * same trusted composition-only contract and optional synchronous * publication commit as {@link CreateAgentOptions.setup}: all registrations * exist before either creation announcement, and rejection, commit failure, * or owner disposal rolls the transaction back without publishing either id. */ readonly setup?: AgentSetup }
    新: export interface ResumeAgentOptions { /** The persisted session id to load and use as the live agent/session identity. */ readonly resumeSessionId: SessionId /** Route fallback and output controls; see {@link AgentOptions} for live accessor semantics. */ readonly agentOptions?: AgentOptions /** Optional creation-only cancellation signal for persistence load/setup; detached before return. */ readonly signal?: AbortSignal /** * Resume-time composition of the agent's fresh scoped world. Persistence is * loaded first; the factory then enters and announces the reconstructed Session and awaits * setup in the fresh `agentCtx` before registering the Agent. The callback has the * same trusted composition-only contract and optional synchronous * publication commit as {@link CreateAgentOptions.setup}: all registrations * exist before Agent creation is announced, and rejection, commit failure, * or owner disposal unwinds the transaction while preserving pending inbox input. */ readonly setup?: AgentSetup }
- **[ast-signature-changed]** `packages/core/agent` — 签名变化: AgentFactory
    旧: export interface AgentFactory { /** * Create a new agent on a caller-supplied session id. Async because creation * awaits unpublished setup, invokes its optional synchronous commit, inserts * both session and agent, announces session creation, and awaits serial * `agent/created` listeners before releasing queued work. The sequence is * rollback-covered, but notifications delivered before a later listener * failure remain observable; every agent or session creation announcement * that began is paired by `agent/disposed` or `session/disposed` during * rollback. The owner disposes the resolved handle to stop/drain, * unregister, remove the session, and unwind the scope. * The registry passes a context carrying the `create()` caller's fiber and * scope as `ownerCtx`. The implementation attaches the unpublished * transaction and resulting lifecycle to that owner; it must not infer * ownership from the factory object's registration context. * @param ownerCtx - caller-bound context that owns the transaction and live handle. * @param options - agent/session identity, configuration, optional live parent, and setup. * @returns the owned handle after setup and both creation announcements complete. */ createAgent(ownerCtx: Context, options: CreateAgentOptions): Promise<AgentHandle> /** * Resume an agent on a persisted session. Async because it opens the * persisted session for write, reads and repairs the log, publishes it, and * awaits the optional unpublished setup transaction; must be called after * `ctx.sessionPersistence` exists (consumers inject `sessionPersistence`). * Publication follows the same setup-commit and ordered boundary as * {@link createAgent}. * @param ownerCtx - caller-bound context that owns load, setup, and the live handle. * @param options - persisted identity, configuration, optional live parent, and setup. * @returns the owned handle after setup, both announcements, and loop start complete. */ resume(ownerCtx: Context, options: ResumeAgentOptions): Promise<AgentHandle> }
    新: export interface AgentFactory { /** * Create a new agent on a caller-supplied session id. Async because creation * enters and announces the Session, awaits setup and its optional synchronous commit, * inserts the Agent, and awaits serial * `agent/created` listeners before releasing queued work. The sequence is * rollback-covered, but notifications delivered before a later listener * failure remain observable; every agent or session creation announcement * that began is paired by `agent/disposed` or `session/disposed` during * rollback. Once Agent initialization begins, failures reject after its * scope and acquired write handle finish cleanup. Cancellation during * persistence acquisition may reject before a late handle is available to close. * The owner disposes the resolved handle to stop/drain, * unregister, remove the session, and unwind the scope. * The registry passes a context carrying the `create()` caller's fiber and * scope as `ownerCtx`. The implementation attaches the unpublished * transaction and resulting lifecycle to that owner; it must not infer * ownership from the factory object's registration context. * @param ownerCtx - caller-bound context that owns the transaction and live handle. * @param options - agent/session identity, configuration, and setup. * @returns the owned handle after setup and both creation announcements complete. */ createAgent(ownerCtx: Context, options: CreateAgentOptions): Promise<AgentHandle> /** * Resume an agent on a persisted session. Async because it opens the * persisted session for write, reads and repairs the log, publishes it, and * awaits the optional unpublished setup transaction; must be called after * `ctx.sessionPersistence` exists (consumers inject `sessionPersistence`). * Initialization cleanup and publication follow the same timing as * {@link createAgent}. * @param ownerCtx - caller-bound context that owns load, setup, and the live handle. * @param options - persisted identity, configuration, and setup. * @returns the owned handle after setup, both announcements, and loop start complete. */ resume(ownerCtx: Context, options: ResumeAgentOptions): Promise<AgentHandle> }
- **[ast-signature-changed]** `packages/core/agent` — 签名变化: AgentEntry
    旧: interface AgentEntry { readonly id: SessionId readonly agent: Agent /** Runtime creator-agent ownership; independent of durable session lineage. */ readonly owner: Agent | undefined readonly carrier: Scoped<Agent> announced: boolean announcing: boolean detachRequested: boolean }
    新: interface AgentEntry { readonly id: SessionId readonly agent: Agent readonly carrier: Scoped<Agent> announced: boolean announcing: boolean detachRequested: boolean }
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
- **[ast-signature-changed]** `packages/core/tools/src/contracts.ts` — 签名变化: PostToolDecision
    旧: export type PostToolDecision = | { kind: 'accept'; content?: ContentBlock[]; value?: never; additionalContexts?: UserMessage[] } | { kind: 'accept'; value: JsonValue; content?: never; additionalContexts?: UserMessage[] } | { kind: 'block'; feedback: ContentBlock[]; additionalContexts?: UserMessage[] }
    新: export type PostToolDecision = | { kind: 'accept'; content?: ContentBlock[]; value?: never; additionalContexts?: UserMessage[] } | { kind: 'accept'; value: JsonValue; content?: never; additionalContexts?: UserMessage[] } | { kind: 'block'; feedback: ContentBlock[]; info?: ToolErrorInfo; additionalContexts?: UserMessage[] }
- **[ast-signature-changed]** `packages/core/tools` — 签名变化: ToolView
    旧: interface ToolView { /** Visible definitions after restrictions, scoped shadowing, and transport insertion. */ readonly visible: ReadonlyMap<string, ToolDefinition> /** Pre-restriction capability names used by prompt-order validation. */ readonly knownNames: ReadonlySet<string> /** Current global names that a scoped restriction may name. */ readonly restrictableNames: ReadonlySet<string> }
    新: interface ToolView { /** Visible definitions after restrictions, scoped shadowing, and inherited restrictions. */ readonly visible: ReadonlyMap<string, ToolDefinition> /** Registrations behind {@link visible}, keyed by the same names. */ readonly registrations: ReadonlyMap<string, ToolRegistration> /** Pre-restriction capability names used by prompt-order validation. */ readonly knownNames: ReadonlySet<string> /** Current global names that a scoped restriction may name. */ readonly restrictableNames: ReadonlySet<string> }
- **[ast-signature-changed]** `packages/core/tools/src/contracts.ts` — 签名变化: ToolGuard
    旧: export type ToolGuard = (execution: Readonly<ToolExecution>) => string | undefined
    新: export type ToolGuard = (execution: Readonly<ToolExecution>) => string | ToolGuardDenial | undefined
- **[ast-signature-changed]** `packages/credentials/credentials-local` — 签名变化: mode
    旧: var
    新: var:number
- **[ast-signature-changed]** `packages/document/tool-office` — 签名变化: render
    旧: var
    新: function(ctx:Context,kit:OfficeKit,config:Config,agent:Agent,signal:AbortSignal,args:OfficeRenderArgs,target:FsTarget,source:OfficeKitSource)
- **[ast-signature-changed]** `packages/experimental/cua` — 签名变化: tool
    旧: var
    新: var:ToolDefinition
- **[ast-signature-changed]** `packages/goal/tool-goal` — 签名变化: execution
    旧: var:MutableToolRunContext
    新: var
- **[ast-signature-changed]** `packages/experimental/tool-terminal` — 签名变化: finalizeContent
    旧: var
    新: var:NonNullable<ToolDefinition['finalizeContent']>
- ★ **[ast-signature-changed]** `packages/client/modules` — 签名变化: headers
    旧: var
    新: var:Record<string, string>
- **[ast-signature-changed]** `packages/document/tool-office` — 签名变化: assertUnchanged
    旧: var
    新: function(ctx:Context,target:FsTarget,info:FsInfo,signal:AbortSignal)
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
- **[ast-signature-changed]** `packages/api/terminal-controller` — 签名变化: history
    旧: var:HistoricalEntry[]
    新: var
- **[ast-signature-changed]** `packages/experimental/auto-review` — 签名变化: classifyRisk
    旧: function(ctx:Context,agent:Agent,exec:ToolExecution,signal:AbortSignal)
    新: function(ctx:Context,agent:Agent,exec:ToolExecution,signal:AbortSignal,shown:ShownSchemas)
- **[ast-signature-changed]** `packages/experimental/cua` — 签名变化: CuaConfig
    旧: export interface CuaConfig { /** Signed applications explicitly approved for future tasks in this profile. */ allowedApps: Volatile<Array<Omit<CuaApplicationGrant, 'id'> & { /** Unbranded digest at the profile configuration boundary; admitted by the Config schema. */ id: string }>> /** Absolute native helper override; omission prepares the package-owned executable. */ helperPath?: string /** Maximum time in milliseconds for native component preparation. */ buildTimeoutMs: number /** Deadline for one native operation, including capture and AX traversal. */ timeoutMs: number /** Maximum time to connect to or start the shared native helper. */ connectTimeoutMs: number /** Screenshot deadline including time queued behind other native operations. */ screenshotTimeoutMs: number /** Deadline for each individual Accessibility system call. */ axTimeoutMs: number /** Maximum bytes retained for one helper response frame. */ maxResponseBytes: number /** Maximum installed application matches returned for one discovery query. */ maxAppMatches: number /** Maximum bytes preserved from the system clipboard during one paste. */ maxClipboardBytes: number /** Maximum wait for clipboard data consumption after the Paste command returns. */ pasteReadTimeoutMs: number /** Maximum UTF-8 bytes admitted for one helper request frame. */ maxRequestBytes: number /** Duration in milliseconds of one same-window drag. */ dragDurationMs: number /** Number of movement segments dispatched during a drag. */ dragSteps: number /** Delay in milliseconds after each Unicode key-down or key-up event. */ textEventIntervalMs: number /** Native connection cleanup, socket-write and launcher termination budget in milliseconds. */ graceMs: number /** Maximum nodes admitted by a native accessibility snapshot. */ maxElements: number /** Maximum depth traversed by a native accessibility snapshot. */ maxDepth: number }
    新: export interface CuaConfig { /** Ask once per live Session before an explicitly requested system-pointer move. */ requireSystemPointerApproval: boolean /** Register tools for Agents using this preset; defaults to ptc. False enables global registration. */ agentPreset: string | false /** Legacy grants imported once into profile-scoped storage; later edits are ignored. */ allowedApps: Array<Omit<CuaApplicationGrant, 'id'> & { /** Unbranded digest at the profile configuration boundary; admitted by the Config schema. */ id: string }> /** Absolute executable inside the signed macOS helper .app; omission prepares the package-owned application. */ helperPath?: string /** Maximum time in milliseconds for native component preparation. */ buildTimeoutMs: number /** Deadline for one native operation, including capture and AX traversal. */ timeoutMs: number /** Maximum time to connect to or start the shared native helper. */ connectTimeoutMs: number /** Screenshot deadline including time queued behind other native operations. */ screenshotTimeoutMs: number /** Deadline for each individual Accessibility system call. */ axTimeoutMs: number /** Maximum bytes retained for one helper response frame. */ maxResponseBytes: number /** Maximum installed application matches returned for one discovery query. */ maxAppMatches: number /** Maximum bytes preserved from the system clipboard during one paste. */ maxClipboardBytes: number /** Maximum wait for clipboard data consumption after the Paste command returns. */ pasteReadTimeoutMs: number /** Maximum UTF-8 bytes admitted for one helper request frame. */ maxRequestBytes: number /** Duration in milliseconds of one same-window drag. */ dragDurationMs: number /** Maximum explicitly requested mouse-button hold in milliseconds; zero allows immediate release only. */ maxClickHoldMs: number /** Number of movement segments dispatched during a drag. */ dragSteps: number /** Delay in milliseconds after each Unicode key-down or key-up event. */ textEventIntervalMs: number /** Native connection cleanup, socket-write and launcher termination budget in milliseconds. */ graceMs: number /** Default node limit when an accessibility read omits maxElements. */ maxElements: number /** Default depth limit when an accessibility read omits maxDepth. */ maxDepth: number }
- **[ast-signature-changed]** `packages/experimental/cua` — 签名变化: CuaBackend
    旧: export interface CuaBackend { helperPath: string createChannel: NativeChannelFactory guidance: string description: string }
    新: export interface CuaBackend { helperPath: string createChannel: NativeChannelFactory guidance: string capabilities: CuaStartupCapabilities /** Dispatch a directional key through the provider's execution-scoped input owner, after application authorization. */ sendKeyEvent?: (client: NativeClient, params: Record<string, JsonValue>, execution: Readonly<ToolExecution>) => Promise<JsonValue> /** * Build native permission parameters for the selected action and Client language. * @param method Native permission action. * @param permission System privilege selected by the user. * @param locale Current Client language. * @returns Parameters accepted by the provider's native implementation. */ permissionParameters: (method: 'requestPermission' | 'openPermissionSettings', permission: CuaSystemPermission, locale: string) => Record<string, JsonValue> }
- **[ast-signature-changed]** `packages/api/terminal-controller` — 签名变化: sandbox
    旧: var:PtcRunSandbox
    新: var
- **[ast-signature-changed]** `packages/api/terminal-controller` — 签名变化: confined
    旧: var:ConfinedArgv | undefined
    新: var
- **[ast-signature-changed]** `packages/session/session-projection` — 签名变化: Registration
    旧: interface Registration { readonly def: ErasedDefinition readonly cells: WeakMap<Session, UnitCell> /** Live registrants sharing this unit; the last one out removes the key. */ refs: number }
    新: interface Registration { readonly def: ErasedDefinition readonly cells: WeakMap<Session, UnitCell> /** * Live registrants sharing this unit. `0` marks a released predecessor: only * `checkpoint()` reads its cells through the registry, while a retained handle * read can still advance them. */ refs: number }
- **[ast-signature-changed]** `packages/boot/plugin-market` — 签名变化: install
    旧: function(agent:Agent,ctx:Context,config:Required<Config>)
    新: var
- **[ast-signature-changed]** `packages/web/web-deepseek-api` — 签名变化: resolveTarget
    旧: function(ctx:Context,path:string,signal:AbortSignal)
    新: function(ctx:Context,capability:Capability,own:{ baseURL: string | undefined; ref: string | undefined; billing: Billing },llmProvider:string | undefined)
- **[ast-signature-changed]** `packages/host/frontend-static` — 签名变化: serveStatic
    旧: function(pathname:string,res:ServerResponse,distRoot:string,distIndex:string,authorizeIndex:() => boolean,renderIndex:() => Promise<string>)
    新: function(request:Request,distRoot:string,distIndex:string,authorizeIndex:() => Response | undefined,renderIndex:(html: string) => string)
- **[ast-signature-changed]** `packages/host/webserver` — 签名变化: best
    旧: var:WebRoute | undefined
    新: var:WebRoute | WebResourceRoute | undefined
- **[ast-signature-changed]** `packages/host/webserver` — 签名变化: out
    旧: var
    新: var:OutgoingHttpHeaders
- **[ast-signature-changed]** `packages/document/office-kit` — 签名变化: images
    旧: var:EncodedImageAttachment[]
    新: var
- **[ast-signature-changed]** `packages/llm/llm-deepseek-api-key` — 签名变化: OfficialConnection
    旧: interface OfficialConnection extends ResolvedDeepSeekOptions { /** Selectable models: the configured catalog, or the offered part of the followed listing. */ readonly offered: readonly DeepSeekCatalogModel[] /** Listed models refused before network I/O, by id. */ readonly refusals: ReadonlyMap<string, CatalogRefusal> }
    新: interface OfficialConnection extends ResolvedDeepSeekOptions { /** Selectable models: the configured catalog, or the offered part of the followed listing. */ readonly offered: readonly DeepSeekCatalogModel[] /** Listed models refused before network I/O, by id. */ readonly refusals: ReadonlyMap<string, CatalogRefusal> /** Listed badges of offered models, by id; empty without a followed listing. */ readonly badges: ReadonlyMap<string, LlmModelBadge> }
- **[ast-signature-changed]** `packages/experimental/client-ui-forge` — 签名变化: held
    旧: var:LlmConfigurableProvider[]
    新: var
- **[ast-signature-changed]** `packages/llm/token-meter` — 签名变化: ReplayState
    旧: interface ReplayState { consumedEvents: SessionLogOffsetType header: EpochHeader | undefined surface: MeterSurfaceNode[] stepStart: { turn: number; step: number } | undefined anchor: MeasurementAnchor | undefined }
    新: interface ReplayState { consumedEvents: SessionLogOffsetType surface: MeterSurfaceNode[] header: { seq: SessionSeqType | null; value: EpochHeader } | undefined anchorHeader: { seq: SessionSeqType | null; value: EpochHeader } | undefined anchorNodes: readonly MeterSurfaceNode[] /** Preserve synchronous construction-time reads before registration completes. */ pendingMeasurement: MeasurementState }
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
- **[ast-signature-changed]** `packages/experimental/inspector/src/host/bridge/controller.ts` — 签名变化: channel
    旧: var:JsonChannel | undefined
    新: var
- **[ast-signature-changed]** `packages/boot/plugin-manager` — 签名变化: transport
    旧: var:JsonChannel
    新: var
- **[ast-signature-changed]** `packages/sandbox/sandbox-local` — 签名变化: tempDir
    旧: var
    新: var:string
- **[ast-signature-changed]** `packages/sandbox/sandbox` — 签名变化: SandboxExecutionPolicy
    旧: export interface SandboxExecutionPolicy { /** The file-effect mode this execution runs under. */ mode: SandboxMode /** Absolute root directory `workspace-write` may write under. */ workspaceRoot: string /** * Opaque identity of the calling session (the branded `dsh-session` * SessionId). Backends key per-session state off it (e.g. windows-acl gives * each live session/workspace pair a random private temp directory and SID, * while the workspace SID and standing grant remain per-workspace); absent * for agentless calls, which fall back to per-call backend state. */ sessionId?: SessionId }
    新: export interface SandboxExecutionPolicy { /** The file-effect mode this execution runs under. */ mode: SandboxMode /** Absolute root directory `workspace-write` may write under. */ workspaceRoot: string /** * Extra physical absolute directories `workspace-write` may also write under. * Absence means none. The enforcing host rejects missing, non-directory, and * symlinked entries on each call. Remote paths are checked on the remote host. * Windows process confinement ignores these; harness filesystem operations honor them. * These grant nothing under `read-only` or `danger-full-access`. */ additionalWritableRoots?: readonly string[] /** * Opaque identity of the calling session (the branded `dsh-session` * SessionId). Backends key per-session state off it (e.g. windows-acl gives * each live session/workspace pair a random private temp directory and SID, * while the workspace SID and standing grant remain per-workspace); absent * for agentless calls, which fall back to per-call backend state. */ sessionId?: SessionId }
- **[ast-signature-changed]** `packages/boot/plugin-manager/src/install-spec.ts` — 签名变化: invalid
    旧: var
    新: function(spec:string,reason:string)
- **[ast-signature-changed]** `packages/core/session` — 签名变化: snapshots
    旧: var:SessionPersistenceSnapshot[]
    新: var
- **[ast-signature-changed]** `packages/session/session-persistence` — 签名变化: SessionPersistenceSnapshot
    旧: export interface SessionPersistenceSnapshot { /** Detached metadata for one stored session. */ readonly header: SessionHeader /** Header-only format classification; absent without versioned artifact metadata. */ readonly formatStatus?: 'current' | 'migration-required' /** Opaque change token; see {@link SessionPersistence.stat}. */ readonly revision: SessionPersistenceRevision /** Logical event count, when the backend can provide it cheaply from metadata; otherwise absent. */ readonly eventCount?: number /** Physical artifact byte size, when the backend can provide it cheaply (JSONL); otherwise absent. */ readonly sizeBytes?: number }
    新: export interface SessionPersistenceSnapshot { /** Detached metadata for one stored session. */ readonly header: SessionHeader /** Header-only format classification; absent without versioned artifact metadata. */ readonly formatStatus?: 'current' | 'migration-required' /** Opaque change token; see {@link SessionPersistence.stat}. */ readonly revision: SessionPersistenceRevision /** Logical event count, when the backend can provide it cheaply from metadata; otherwise absent. */ readonly eventCount?: number /** Physical artifact byte size, when the backend can provide it cheaply (JSONL); otherwise absent. */ readonly sizeBytes?: number /** * Backend-resolved location of the selected materialized per-Session * artifact, for diagnostics and export. Absent when the backend has no * materialized per-Session file, including an unmaterialized pending Session. */ readonly location?: SessionLocation }
- **[ast-signature-changed]** `packages/session/session-projection` — 签名变化: ProjectionDefinition
    旧: export interface ProjectionDefinition< K extends keyof SessionProjectionStateMap, S extends SessionProjectionStateMap[K] = SessionProjectionStateMap[K], > { /** The projection key this unit owns (its `SessionProjectionStateMap` entry). */ key: K /** Validates persisted state before it seeds a fold. */ stateSchema: ZodType<S> /** * State for the empty log and its immutable Session metadata. * @param header - immutable metadata for the Session being projected. * @param inheritedEventCount - exact fork-inherited prefix length. * @returns the initial state. */ init(header: SessionHeader, inheritedEventCount: SessionLogOffset): NoInfer<S> /** * Pure transition: previous state + one committed event → next state. A * unit uninterested in an event MUST return the same state reference — an * unchanged reference (`Object.is`) produces zero downstream work. * @param state - the state covering all prior events. * @param event - the next committed session event. * @returns the next state (same reference when the event is not the unit's). */ apply(state: NoInfer<S>, event: SessionEvent): NoInfer<S> /** Client view. Omit for host-only units. */ wire?: K extends keyof SessionProjectionMap ? { /** Validates the wire payload before it leaves the host. */ viewSchema: ZodType<SessionProjectionMap[K]> /** * State → wire payload (the read-side projection). The live drive keeps * the two latest raw results and compares them with `Object.is`; an * object-valued view must reuse its reference to suppress publication * across internal-only state changes. * @param state - the current state. * @returns the whole current value for this unit's key. */ view(state: NoInfer<S>): SessionProjectionMap[K] } : never /** * Persisted-cache invalidation version: bump whenever the serialized state fields or the * fold semantics change, so persisted `(sessionId, key, ver, seq, val)` * rows from an older unit are discarded instead of being forward-applied * into garbage. Non-negative integer. */ stateVersion: number }
    新: export interface ProjectionDefinition<K extends string, S> { /** The projection key this unit owns. */ key: K /** Validates persisted state before it seeds a fold. */ stateSchema: ZodType<S> /** * State for the empty log and its immutable Session metadata. * @param header - immutable metadata for the Session being projected. * @param inheritedEventCount - exact fork-inherited prefix length. * @returns the initial state. */ init(header: SessionHeader, inheritedEventCount: SessionLogOffset): NoInfer<S> /** * Pure transition: previous state + one committed event → next state. A * unit uninterested in an event MUST return the same state reference — an * unchanged reference (`Object.is`) produces zero downstream work. * @param state - the state covering all prior events. * @param event - the next committed session event. * @returns the next state (same reference when the event is not the unit's). */ apply(state: NoInfer<S>, event: SessionEvent): NoInfer<S> /** Client view. Omit for host-only units. */ wire?: K extends keyof SessionProjectionMap ? { /** Validates the wire payload before it leaves the host. */ viewSchema: ZodType<SessionProjectionViewValue<SessionProjectionMap[K]>> /** * State → wire payload (the read-side projection). The live drive keeps * the two latest raw results and compares them with `Object.is`; an * object-valued view must reuse its reference to suppress publication * across internal-only state changes. * @param state - the current state. * @returns the whole current value for this unit's key. */ view(state: NoInfer<S>): SessionProjectionViewValue<SessionProjectionMap[K]> /** * Whether a Session summary carries this unit; omitted means `true`. * Declare `false` on a key whose map entry carries the * `SessionProjectionSummaryExcluded` mark: the runtime key set follows this * field, while the client view type follows the mark. * @default true */ summary?: boolean } : never /** * Non-negative persisted-cache invalidation version. Bump when state fields or fold * semantics change, except for optional additions whose absence preserves historical * meaning and whose old-checkpoint suffix replay matches full replay. Test that * equivalence before retaining a version; schema acceptance alone is insufficient. */ stateVersion: number }
- **[ast-signature-changed]** `packages/session/session-projection` — 签名变化: ErasedDefinition
    旧: interface ErasedDefinition { key: string stateSchema: { parse(value: unknown): unknown } init(header: SessionHeader, inheritedEventCount: SessionLogOffset): unknown apply(state: unknown, event: SessionEvent): unknown wire: { viewSchema: { parse(value: unknown): unknown }; view(state: unknown): unknown } | undefined stateVersion: number }
    新: interface ErasedDefinition { key: string stateSchema: { parse(value: unknown): unknown } init(header: SessionHeader, inheritedEventCount: SessionLogOffset): unknown apply(state: unknown, event: SessionEvent): unknown wire: { viewSchema: { parse(value: unknown): unknown } view(state: unknown): unknown /** Whether a Session summary carries this unit (false when the unit declared `summary: false`). */ summary: boolean } | undefined stateVersion: number }
- **[ast-signature-changed]** `packages/shell/tool-pwsh` — 签名变化: StartedJob
    旧: interface StartedJob { readonly id: JobId readonly process: () => ShellExecution | undefined readonly stopped: () => string | undefined }
    新: interface StartedJob { readonly id: JobId readonly process: () => ShellExecution | undefined readonly stopped: () => string | undefined /** The original error of a registration whose preparation failed before the process published. */ readonly failure: () => { error: unknown } | undefined }
- **[ast-signature-changed]** `packages/document/tool-office` — 签名变化: skills
    旧: var:SkillCandidate[]
    新: var
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
- **[ast-signature-changed]** `packages/ssh/fs-ssh` — 签名变化: errorCodes
    旧: var:Record<FsErrorCode, true>
    新: var
- **[ast-signature-changed]** `packages/experimental/creation-recommendations` — 签名变化: parentId
    旧: var
    新: var:SessionId | undefined
- **[ast-signature-changed]** `packages/subprocess/subprocess/src/error.ts` — 签名变化: SubprocessExecutableNotFoundError
    旧: class
    新: class(message:string,?options:ErrorOptions)
- **[ast-signature-changed]** `packages/terminal/terminal-bash` — 签名变化: SandboxModeFenceState
    旧: interface SandboxModeFenceState { pty: Context['terminals'] sandboxPolicy: Context['sandboxPolicy'] sessionProjections: Context['sessionProjections'] }
    新: interface SandboxModeFenceState { pty: Context['terminals'] sandboxPolicy: Context['sandboxPolicy'] }
- **[ast-signature-changed]** `packages/terminal/terminal/src/error.ts` — 签名变化: TerminalErrorCode
    旧: export type TerminalErrorCode = | 'DUPLICATE_BACKEND' | 'DUPLICATE_NAME' | 'FOREIGN_SESSION' | 'NO_BACKEND' | 'NO_SESSION' | 'OWNER_NOT_LIVE' | 'SEND_ACTIVE' | 'SERVICE_DISPOSING'
    新: export type TerminalErrorCode = | 'CLEANUP_FAILED' | 'DUPLICATE_BACKEND' | 'DUPLICATE_NAME' | 'FOREIGN_SESSION' | 'INIT_REJECTED' | 'NO_BACKEND' | 'NO_SANDBOX' | 'NO_SESSION' | 'OWNER_NOT_LIVE' | 'SEND_ACTIVE' | 'SERVICE_DISPOSING' | 'SESSION_CLOSING' | 'SESSION_EXITED' | 'STARTUP_EXITED' | 'STARTUP_TIMEOUT'
- **[ast-signature-changed]** `packages/terminal/terminal/src/error.ts` — 签名变化: TerminalError
    旧: class
    新: class(message:string,code:TerminalErrorCode,?options:ErrorOptions)
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
- **[ast-signature-changed]** `packages/api/session-controller/src/types.ts` — 签名变化: SessionPromptRequest
    旧: export interface SessionPromptRequest { /** Client-minted identity persisted on the exact accepted user message. */ readonly requestId: SessionRequestId readonly sessionId: SessionId readonly mode: 'queue' | 'steer' /** At least one non-whitespace text part or attachment. */ readonly content: readonly PromptContentPart[] readonly clientTimeZone?: string }
    新: export interface SessionPromptRequest { /** Client-minted identity persisted on the accepted inbox input, including empty continuation. */ readonly requestId: SessionRequestId readonly sessionId: SessionId readonly mode: 'queue' | 'steer' /** Non-whitespace text or attachments; an empty array continues an eligible failed idle Session. */ readonly content: readonly PromptContentPart[] readonly clientTimeZone?: string }
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
- **[ast-signature-changed]** `packages/api/session-controller/src/types.ts` — 签名变化: SessionProjectionUpdate
    旧: export interface SessionProjectionUpdate { readonly sessionId: SessionId readonly key: string readonly value: JsonValue readonly seq: number }
    新: export interface SessionProjectionUpdate { readonly sessionId: SessionId /** Seq of the committed event that caused every listed change. */ readonly seq: number /** * One entry per client-visible key whose view the event changed, in * registration order without duplicate keys, with the key's new value as * `val`. A key absent from `changes` is unchanged; unlike a baseline, absence * does not mean an absent capability. */ readonly changes: readonly { readonly key: string; readonly val: SessionProjectionValue }[] }
- **[ast-signature-changed]** `packages/api/session-controller/src/agent.ts` — 签名变化: hasApiSessionSubagentOwner
    旧: function(ctx:Context,session:Pick<Session, 'header'>,agent:Agent | undefined)
    新: function(session:Pick<Session, 'header'>)
- **[ast-signature-changed]** `packages/api/terminal-controller/src/types.ts` — 签名变化: WebTerminalInfo
    旧: export interface WebTerminalInfo { readonly id: WebTerminalId readonly title: string readonly shell: TerminalShell /** Initial working directory; shell directory changes do not update this field. */ readonly cwd: string readonly cols: number readonly rows: number readonly state: 'running' | 'exited' | 'failed' readonly exitCode: number | null readonly error?: string }
    新: export interface WebTerminalInfo { readonly id: WebTerminalId readonly title: string readonly shell: TerminalShell /** Initial working directory; shell directory changes do not update this field. */ readonly cwd: string readonly cols: number readonly rows: number readonly state: 'running' | 'exited' | 'failed' readonly exitCode: number | null readonly error?: string /** Party that created the terminal. */ readonly origin: TerminalParty /** Input owner; an agent terminal passes to the user on the user's first typed input and never returns. */ readonly control: TerminalParty /** Sandbox mode an agent terminal started under; user terminals run with system-user permissions and omit it. */ readonly sandboxMode?: TerminalSandboxMode }
- **[ast-signature-changed]** `packages/api/terminal-controller/src/types.ts` — 签名变化: TerminalInput
    旧: export type TerminalInput = | { readonly type: 'write'; readonly sequence: number; readonly data: string } | { readonly type: 'resize'; readonly sequence: number; readonly cols: number; readonly rows: number }
    新: export type TerminalInput = | { readonly type: 'write'; readonly sequence: number; readonly data: string; readonly typed?: boolean } | { readonly type: 'resize'; readonly sequence: number; readonly cols: number; readonly rows: number }
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
    新: export interface ManagementError { code: ReadOnlyReason | 'unknown-plugin' | 'invalid-spec' | 'already-installed' | 'ambiguous-install' | 'not-bundle' | 'not-removable' | 'stop-profile' | 'bundle-in-use' | 'stale-approval' | 'incompatible-version' | 'unsupported-platform' | 'unexpected-package' | 'operation-error' diagnostic?: string /** Present with `incompatible-version`: the packages the running DSH version rejects. */ incompatible?: IncompatiblePlugin[] }
- **[ast-signature-changed]** `packages/boot/plugin-manager/src/types.ts` — 签名变化: BundleInfo
    旧: export interface BundleInfo { name: string /** Project-maintained shipped optional bundle or on-demand catalog entry, independent of installation and selection. */ official: boolean /** Readable package location; on-demand catalog entries exclude undeclared transitive copies, and declared files may be missing. */ availability: 'installation' | 'profile' | 'missing' /** Exact released Host version or same-checkout development link offered for an on-demand catalog entry. */ installTarget?: { spec: string; version: string } version?: string /** Local display text with available translations or literal fallbacks, or a metadata diagnostic. */ meta?: PluginLocalizedMeta /** Untranslated `description` of this bundle's package manifest. */ description?: string /** Selected in the profile manifest; a load error means its layer was skipped. */ enabled: boolean /** Whether the profile declares this dependency; availability separately reports whether its files can be read. */ installed: boolean /** * Present for a profile dependency the installation does not also supply: the spec `pnpm add` accepts, with local * paths made absolute and the user information of an http(s) URL removed. */ source?: string /** * Whether the installation ships the bundle for the person to switch on: named by the launcher's `OPTIONAL_BUNDLES`, * held by the installation's dependencies, selected by no shipped template, and never removable. */ optional: boolean removable: boolean readOnlyReason?: ReadOnlyReason error?: ManagementError /** The rows the bundle's patch inserts, in declaration order; empty when the patch cannot be read. */ rows: BundleRowInfo[] /** Ids of rows the bundle's patch changes without declaring them: the built-in rows it configures or disables. */ overrides: string[] }
    新: export interface BundleInfo { name: string /** Project-maintained shipped optional bundle or on-demand catalog entry, independent of installation and selection. */ official: boolean /** Readable package location; on-demand catalog entries exclude undeclared transitive copies, and declared files may be missing. */ availability: 'installation' | 'profile' | 'missing' /** Exact released Host version or same-checkout development link offered for an on-demand catalog entry. */ installTarget?: { spec: string; version: string } version?: string /** Local display text with available translations or literal fallbacks, or a metadata diagnostic. */ meta?: PluginLocalizedMeta /** Untranslated `description` of this bundle's package manifest. */ description?: string /** Default GUI visibility after package and Host checks; selected or profile-installed bundles remain manageable. */ listedByDefault?: boolean /** * Selected in the profile manifest; a selected bundle whose layer was skipped carries the load `error`, and none of * its `rows` has an `entryId`. */ enabled: boolean /** Whether the profile declares this dependency; availability separately reports whether its files can be read. */ installed: boolean /** * Present for a profile dependency the installation does not also supply: the spec `pnpm add` accepts, with local * paths made absolute and the user information of an http(s) URL removed. */ source?: string /** * Whether the installation ships the bundle for the person to switch on: named by the launcher's `OPTIONAL_BUNDLES`, * held by the installation's dependencies, selected by no shipped template, and never removable. */ optional: boolean removable: boolean /** * How `updateBundle` replaces the bundle, absent when it cannot: `registry` for a third-party profile dependency saved * as a registry spec under its own name, whose newer versions `listVersions` reads; `git` for one saved as a Git spec * pinned to a full commit, which updates to another commit of the same repository directory. Either needs a semver * manifest version and no plugin management. */ update?: 'registry' | 'git' readOnlyReason?: ReadOnlyReason error?: ManagementError /** The rows the bundle's patch inserts, in declaration order; empty when the patch cannot be read. */ rows: BundleRowInfo[] /** Ids of rows the bundle's patch changes without declaring them: the built-in rows it configures or disables. */ overrides: string[] }
- **[ast-signature-changed]** `packages/boot/plugin-manager/src/types.ts` — 签名变化: PackageResult
    旧: export interface PackageResult { exitCode: number output: string truncated: boolean logPath: string /** Present when the run failed: what kind of failure its exit and output describe. */ kind?: PluginInstallFailureKind /** The manager terminated the run after it printed nothing for its silence bound; `exitCode` still reports how it ended. */ timedOut?: boolean /** Present when a compatibility check refused the run: the packages the running DSH version rejects. */ incompatible?: IncompatiblePlugin[] }
    新: export interface PackageResult { /** The status the run is read as having ended with; a run the manager terminated records the coerced status 1. */ exitCode: number output: string truncated: boolean logPath: string /** Present when the run failed: what kind of failure its exit and output describe. */ kind?: PluginInstallFailureKind /** * The run outlived its bound: the manager terminated it after it printed nothing for its silence bound, or the GitHub * connection check hit its deadline. Such a run reports no exit status of its own, so `exitCode` records the status * its failure is read as rather than a status the process returned. */ timedOut?: boolean /** Present when a compatibility check refused the run: the packages the running DSH version rejects. */ incompatible?: IncompatiblePlugin[] /** * Present when an `expected` check refused the run: `unexpected-package` when the run left the expected package * missing or at another version, or added or changed another direct dependency; otherwise `not-bundle` when the * expected package declares no bundle. The output names what the run installed. */ unmet?: 'unexpected-package' | 'not-bundle' }
- **[ast-signature-changed]** `packages/boot/plugin-manager/src/types.ts` — 签名变化: ChangeResult
    旧: export interface ChangeResult { changed: boolean /** `cancelled` is an installation the caller stopped, its files restored. */ application: 'applied' | 'restart-required' | 'overridden' | 'failed' | 'cancelled' /** Present with `restart-required`: why the change takes effect only at the next start. */ restartReason?: RestartReason /** Last attempted step; successful installation can proceed to enablement. */ stage: 'install' | 'enable' | 'remove' target: string enabled?: boolean error?: ManagementError /** Pre-existing inactive entries the operation left as they were. */ warnings?: string[] packageResult?: PackageResult /** The bundle an installation added, once pnpm and the bundle check accepted it. */ bundle?: string /** The installed bundle's manifest version, when declared; pnpm's `minimumReleaseAge` can make it older than the newest release. */ version?: string /** Exact package names awaiting explicit script approval in the profile's pnpm settings, read after a failed run. */ pendingBuilds?: string[] /** Package script permissions saved before this installation attempt. */ approvedBuilds?: string[] /** The registries the installation asked, in order; `packageResult` is the last one's run. */ registries?: Registry[] /** * What the last failed run could not reach or get an answer from: the registry it asked, or the host a git or * tarball spec is fetched from, which no registry stands in for; absent for a failure neither explains. */ failedAt?: 'registry' | 'spec-host' }
    新: export interface ChangeResult { changed: boolean /** `cancelled` is an installation the caller stopped, its files restored. */ application: 'applied' | 'restart-required' | 'overridden' | 'failed' | 'cancelled' /** Present with `restart-required`: why the change takes effect only at the next start. */ restartReason?: RestartReason /** Last attempted step; successful installation can proceed to enablement. */ stage: 'install' | 'enable' | 'remove' target: string enabled?: boolean error?: ManagementError /** Pre-existing inactive entries the operation left as they were. */ warnings?: string[] packageResult?: PackageResult /** The bundle an installation added, once pnpm and the bundle check accepted it. */ bundle?: string /** The installed bundle's manifest version, when declared; pnpm's `minimumReleaseAge` can make it older than the newest release. */ version?: string /** Exact `allowBuilds` keys awaiting explicit script approval in the profile's pnpm settings, read after a failed run. */ pendingBuilds?: string[] /** Package script permissions saved before this installation attempt. */ approvedBuilds?: string[] /** The registries the installation asked, in order; `packageResult` is the last one's run. */ registries?: Registry[] /** * What the last failed run could not reach or get an answer from: the registry it asked, or the host a git or * tarball spec is fetched from, which no registry stands in for; absent for a failure neither explains. */ failedAt?: 'registry' | 'spec-host' }
- **[ast-signature-changed]** `packages/boot/plugin-manager/src/types.ts` — 签名变化: InstallBundleOptions
    旧: export interface InstallBundleOptions { enabled?: boolean /** Save the resolved dependency version without a range; applies to any bundle installation. */ saveExact?: boolean requestId?: PluginInstallRequestId /** Explicitly allow these pending packages' scripts for this profile, then install; a name no longer pending refuses the call. */ approvedBuilds?: string[] /** The registry asked first; absent, the configured one. The configured fallbacks follow while a registry is unreachable or stale. */ registry?: Registry }
    新: export interface InstallBundleOptions { enabled?: boolean /** Save the resolved dependency version without a range; applies to any bundle installation. */ saveExact?: boolean requestId?: PluginInstallRequestId /** Explicitly allow these pending packages' scripts for this profile, then install; a name no longer pending refuses the call. */ approvedBuilds?: string[] /** The registry asked first; absent, the configured one. The configured fallbacks follow while a registry is unreachable or stale. */ registry?: Registry /** * The package and manifest version the spec must install. An installation that leaves this package missing or at * another version, or that adds or changes another direct dependency, is undone with its profile files and modules * before its bundle loads, and fails with `unexpected-package`; one whose package declares no bundle is undone the * same way and fails with `not-bundle`, and one whose bundle patches cannot load fails as an operation error. */ expected?: { readonly name: string; readonly version: string } }
- **[ast-signature-changed]** `packages/boot/plugin-manager/src/types.ts` — 签名变化: PluginInstallLogChunk
    旧: export interface PluginInstallLogChunk { /** The installation the run belongs to, when its caller supplied a request id. */ readonly requestId?: PluginInstallRequestId /** The run the chunk belongs to. */ readonly jobId: string /** The command line the run executes: pnpm's command name, then its arguments. */ readonly argv: readonly string[] /** The directory the run executes in: the profile directory. */ readonly cwd: string readonly stream: 'stdout' | 'stderr' readonly text: string /** Present on the run's last chunk: pnpm's exit code, null when it ended without one. */ readonly exitCode?: number | null }
    新: export interface PluginInstallLogChunk { /** The installation the run belongs to, when its caller supplied a request id. */ readonly requestId?: PluginInstallRequestId /** The run the chunk belongs to. */ readonly jobId: string /** The command line the run executes: its command name, then its arguments. */ readonly argv: readonly string[] /** The directory the run executes in: the profile directory. */ readonly cwd: string readonly stream: 'stdout' | 'stderr' readonly text: string /** Present on the chunk that ends a run: its exit code, null when the run ended without one. */ readonly exitCode?: number | null }
- **[ast-signature-changed]** `packages/boot/plugin-market/src/types.ts` — 签名变化: MarketListingVersion
    旧: export interface MarketListingVersion extends MarketVersion { readonly install: MarketInstallTarget readonly compatibility: MarketCompatibility }
    新: export interface MarketListingVersion extends MarketVersion { readonly install: MarketInstallTarget readonly compatibility: MarketCompatibility /** * Whether `pluginManager.updateBundle` accepts this version for the installed copy: the copy came from a Git commit * (`pluginManager` lists it with `update: 'git'`), this version is newer, and it pins a commit in the same repository * and `path:` directory. `compatibility` reports separately whether the running DSH accepts it. */ readonly update: boolean }
- ★ **[ast-signature-changed]** `packages/client/modules/src/client/manifest.ts` — 签名变化: ClientBundleRequire
    旧: export interface ClientBundleRequire { /** Resolve a module-table dependency synchronously. */ (specifier: string): unknown /** Load and resolve a package-local dynamic chunk asynchronously. */ async(specifier: string): Promise<unknown> }
    新: export interface ClientBundleRequire { /** Resolve a module-table dependency synchronously. */ (specifier: string): unknown /** Load and resolve a package-local dynamic chunk asynchronously. */ async(specifier: string): Promise<unknown> /** * Resolve a package-asset reference (`plugins/<package>/assets/<path>`) the * build compiled from an asset import or stylesheet `url()` to the URL the * page loads; the reference itself unless the carrier maps it. */ asset(reference: string): string }
- ★ **[ast-signature-changed]** `packages/client/modules/src/client/manifest.ts` — 签名变化: ClientModuleCreateOptions
    旧: export interface ClientModuleCreateOptions { /** Raw Host-injected boot graph; the modules bundle owns validation and projection. */ boot: unknown /** Module-table seed: platform-singleton specifier → shell instance. */ staticModules: Record<string, unknown> /** Bundle-load hook. Defaults to a same-origin classic `<script src>` element. */ loadBundle?: (url: string) => Promise<void> }
    新: export interface ClientModuleCreateOptions { /** Raw Host-injected boot graph; the modules bundle owns validation and projection. */ boot: unknown /** Module-table seed: platform-singleton specifier → shell instance. */ staticModules: Record<string, unknown> /** Bundle-load hook. Defaults to a same-origin classic `<script src>` element. */ loadBundle?: (url: string) => Promise<void> /** Package-asset reference hook behind {@link ClientBundleRequire.asset}. Defaults to returning the reference. */ resolveAsset?: (reference: string) => string }
- ★ **[ast-signature-changed]** `packages/client/modules/src/client/manifest.ts` — 签名变化: ClientModuleSystemOptions
    旧: export interface ClientModuleSystemOptions { /** Boot graph validated by {@link parseBootManifest}, owned by the resulting module system. */ manifest: BootManifest /** Module-table seed: platform-singleton specifier → shell instance. */ staticModules: Record<string, unknown> /** Stable HTML-installed registration facade to switch from queue to live mode. */ registrationTarget: ClientModuleLoaderTarget /** Already-materialized modules bundle consumed while creating the system. */ bootstrapModule: ClientBootstrapModule /** Bundle-load hook. Defaults to a same-origin classic `<script src>` element. */ loadBundle?: (url: string) => Promise<void> }
    新: export interface ClientModuleSystemOptions { /** Boot graph validated by {@link parseBootManifest}, owned by the resulting module system. */ manifest: BootManifest /** Module-table seed: platform-singleton specifier → shell instance. */ staticModules: Record<string, unknown> /** Stable HTML-installed registration facade to switch from queue to live mode. */ registrationTarget: ClientModuleLoaderTarget /** Already-materialized modules bundle consumed while creating the system. */ bootstrapModule: ClientBootstrapModule /** Bundle-load hook. Defaults to a same-origin classic `<script src>` element. */ loadBundle?: (url: string) => Promise<void> /** Package-asset reference hook behind {@link ClientBundleRequire.asset}. Defaults to returning the reference. */ resolveAsset?: (reference: string) => string }
- **[ast-signature-changed]** `packages/client/ui-chat/src/chat-settings.ts` — 签名变化: ChatSettings
    旧: export interface ChatSettings { /** Work-details preference; absence uses the client default, and legacy saved values remain accepted. */ transcriptView?: TranscriptViewMode | typeof LEGACY_TRANSCRIPT_VIEW_MODE | typeof LEGACY_EXPANDED_TRANSCRIPT_VIEW_MODE | null /** Independent collapse timing; absence preserves completion-time folding. */ collapseTiming?: CollapseTiming /** Detail level for composer statistics and completed-Turn usage. */ performanceUsage: PerformanceUsageMode /** Default destination for Chat HTTP(S) links. */ linkOpening: LinkOpening }
    新: export interface ChatSettings { /** Work-details preference; absence uses the client default, and legacy saved values remain accepted. */ transcriptView?: TranscriptViewMode | typeof LEGACY_TRANSCRIPT_VIEW_MODE | typeof LEGACY_EXPANDED_TRANSCRIPT_VIEW_MODE | null /** Independent collapse timing; absence preserves completion-time folding. */ collapseTiming?: CollapseTiming /** Replies kept visible in a folded Turn; absence keeps every reply. */ foldedReplies?: FoldedReplies /** Detail level for composer statistics and completed-Turn usage. */ performanceUsage: PerformanceUsageMode /** Default destination for Chat HTTP(S) links. */ linkOpening: LinkOpening }
- **[ast-signature-changed]** `packages/client/ui-dockkit/src/components/DockSurface.tsx` — 签名变化: DockSurfaceProps
    旧: export interface DockSurfaceProps { readonly state: LayoutState /** * Whether another pane may still be created: the pane budget. Width is the * kit's own concern — a pane too narrow for two working halves keeps its * split control disabled with `labels.splitPaneNarrow` (see README). */ readonly canSplit: boolean /** Hide a blocked split control — pane budget spent or pane too narrow — instead of rendering it disabled; defaults to false. */ readonly hideSplitWhenBlocked?: boolean /** Body drop geometry: all edge bands, or left/right halves with whole-pane moves once splitting is unavailable. */ readonly dropZones?: 'edges' | 'horizontal' /** Smallest share a divider may leave a pane; defaults to the kit's fraction. */ readonly minPaneFraction?: number /** * Whether a pane's strip draws the add control. Called per docked pane on * every render; omit to draw one in every pane. `false` leaves the strip's * end controls where they are and the chips as the only shrinking part. */ readonly canAddTab?: (paneId: PaneId) => boolean /** * Whether a tab draws its close control and its menu's close item. Called * per rendered chip on every render; omit to keep every tab closable. * `false` removes both routes without moving the chip: the close control * paints over the title's end rather than beside it, so the chip is the same * width either way. The menu still opens and carries the embedder's items. */ readonly canCloseTab?: (tabId: TabId) => boolean readonly intents: DockIntents readonly labels: DockLabels readonly renderTab: TabRenderer /** * What a tab's chip shows as its title; omit to show the record's `title` * text. An embedder-internal seam: the Sidebar dispatches it to a per-kind * slot, and nothing outside that embedder is expected to supply it. */ readonly renderTabTitle?: TabRenderer /** Extra items for a tab's context menu; omit for the kit's own item only. */ readonly renderTabMenuItems?: TabMenuExtras /** * Surface-wide controls, drawn at the far end of the top-right pane's tab * strip so the surface needs no header of its own. The kit places them; what * they do is the embedder's. */ readonly chrome?: ReactNode /** * Called with the room rule's latest readings whenever they change, so an * embedder driving splits programmatically can honour the same rule the * split control does. A pane absent from the map has not been measured. */ readonly onRoom?: (fits: ReadonlyMap<PaneId, HalvesFit>) => void }
    新: export interface DockSurfaceProps { readonly state: LayoutState /** * Whether another pane may still be created: the pane budget. Width is the * kit's own concern — a pane too narrow for two working halves keeps its * split control disabled with `labels.splitPaneNarrow` (see README). */ readonly canSplit: boolean /** Hide a blocked split control — pane budget spent or pane too narrow — instead of rendering it disabled; defaults to false. */ readonly hideSplitWhenBlocked?: boolean /** Body drop geometry: all edge bands, or left/right halves with whole-pane moves once splitting is unavailable. */ readonly dropZones?: 'edges' | 'horizontal' /** Smallest share a divider may leave a pane; defaults to the kit's fraction. */ readonly minPaneFraction?: number /** * Whether a pane's strip draws the add control. Called per docked pane on * every render; omit to draw one in every pane. `false` leaves the strip's * end controls where they are and the chips as the only shrinking part. */ readonly canAddTab?: (paneId: PaneId) => boolean /** * Whether a tab may close via its close control, menu item, or middle click. Called * per rendered chip on every render; omit to keep every tab closable. * `false` blocks these routes without moving the chip: the close control * paints over the title's end rather than beside it, so the chip is the same * width either way. The menu still opens and carries the embedder's items. */ readonly canCloseTab?: (tabId: TabId) => boolean readonly intents: DockIntents readonly labels: DockLabels readonly renderTab: TabRenderer /** * What a tab's chip shows as its title; omit to show the record's `title` * text. An embedder-internal seam: the Sidebar dispatches it to a per-kind * slot, and nothing outside that embedder is expected to supply it. */ readonly renderTabTitle?: TabRenderer /** Whether the embedder popup is preparing or visible; suppresses tab tooltips. */ readonly tabMenuOpen?: boolean | undefined /** Override the kit popup; the embedder owns rendering and dismissal. */ readonly getTabTriggerProps?: ((tab: TabRecord, paneId: PaneId, handlers?: Pick<HTMLAttributes<HTMLElement>, 'onContextMenu' | 'onKeyDown' | 'tabIndex'>) => Pick<HTMLAttributes<HTMLElement>, 'onContextMenu' | 'onKeyDown' | 'tabIndex'>) | undefined /** Extra rows for the kit popup; ignored when getTabTriggerProps is supplied. */ readonly renderTabMenuItems?: TabMenuExtras /** * Surface-wide controls, drawn at the far end of the top-right pane's tab * strip so the surface needs no header of its own. The kit places them; what * they do is the embedder's. */ readonly chrome?: ReactNode /** * Called with the room rule's latest readings whenever they change, so an * embedder driving splits programmatically can honour the same rule the * split control does. A pane absent from the map has not been measured. */ readonly onRoom?: (fits: ReadonlyMap<PaneId, HalvesFit>) => void }
- **[ast-signature-changed]** `packages/client/ui-dockkit/src/components/DockSurface.tsx` — 签名变化: hitTest
    旧: function(root:HTMLElement,x:number,y:number,canSplit:boolean,fits:ReadonlyMap<PaneId, HalvesFit>,dropZones:'edges' | 'horizontal')
    新: function(root:HTMLElement,x:number,y:number,tabId:TabId,canSplit:boolean,fits:ReadonlyMap<PaneId, HalvesFit>,dropZones:'edges' | 'horizontal')
- **[ast-signature-changed]** `packages/client/ui-dockkit/src/components/DockSurface.tsx` — 签名变化: Surface
    旧: function({
  state, canSplit, canAddTab, canCloseTab, intents, labels, renderTab, renderTabTitle, renderTabMenuItems, chrome, onRoom,
  draw,
  dropZones = 'edges', minPaneFraction = MIN_PANE_FRACTION, hideSplitWhenBlocked = false,
}:DockSurfaceProps & { readonly draw: (callbacks: PaneCallbacks, preview: SizePreview | undefined) => ReactNode })
    新: function({
  state, canSplit, canAddTab, canCloseTab, intents, labels, renderTab, renderTabTitle, renderTabMenuItems,
  getTabTriggerProps, tabMenuOpen, chrome, onRoom,
  draw,
  dropZones = 'edges', minPaneFraction = MIN_PANE_FRACTION, hideSplitWhenBlocked = false,
}:DockSurfaceProps & { readonly draw: (callbacks: PaneCallbacks, preview: SizePreview | undefined) => ReactNode })
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/SegmentedTabs.tsx` — 签名变化: SegmentedTabs
    旧: function({ items, value, onChange, label, className }:{ items: readonly [SegmentedTab<Value>, ...SegmentedTab<Value>[]] value: Value onChange: (value: Value) => void label: string className?: string | undefined })
    新: function({ items, value, onChange, label, className, size = 'md' }:{ items: readonly [SegmentedTab<Value>, ...SegmentedTab<Value>[]] value: Value onChange: (value: Value) => void label: string className?: string | undefined size?: 'sm' | 'md' | undefined })
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/Checkbox.tsx` — 签名变化: Checkbox
    旧: function({ checked, onChange, label, disabled = false, title, className }:{ checked: boolean onChange: (next: boolean) => void label: string disabled?: boolean title?: string | undefined className?: string | undefined })
    新: function({ checked, onChange, label, disabled = false, title, className, modalAutofocus = false }:{ checked: boolean onChange: (next: boolean) => void label: string disabled?: boolean title?: string | undefined className?: string | undefined modalAutofocus?: boolean })
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/Menu.tsx` — 签名变化: MenuItem
    旧: export interface MenuItem { id: string label: ReactNode disabled?: boolean /** Effective binding supplied by the command owner; omitted for unbound actions. */ shortcut?: { keys: readonly string[]; aria?: string | undefined } /** Leading icon (figma .Menu_cell gap 8). */ icon?: ReactNode /** Destructive row: error-colored text/icon and danger hover fill. */ danger?: boolean /** Nested card opened to the right on hover/focus. */ submenu?: readonly MenuItem[] }
    新: export interface MenuItem { id: string label: ReactNode disabled?: boolean /** Effective binding supplied by the command owner; omitted for unbound actions. */ shortcut?: { keys: readonly string[]; aria?: string | undefined } /** Leading icon (figma .Menu_cell gap 8). */ icon?: ReactNode /** Destructive row: error-colored text/icon and danger hover fill. */ danger?: boolean /** Child choices opened by hover, focus, click, or ArrowRight; placement follows available space. */ submenu?: readonly MenuEntry[] }
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/Menu.tsx` — 签名变化: MenuItemButtonProps
    旧: export interface MenuItemButtonProps { /** Visible row label. */ children: ReactNode /** Effective binding supplied by the command owner; omitted for unbound actions. */ shortcut?: MenuItem['shortcut'] /** Leading icon (figma .Menu_cell gap 8). */ icon?: ReactNode /** Whether this row identifies the currently displayed page or view. */ current?: boolean /** Whether the row cannot be activated. */ disabled?: boolean /** Destructive row: error-colored text/icon and danger hover fill. */ danger?: boolean /** * Start a new group: a hairline above this row, the same one a * `{ type: 'separator' }` data entry draws. It comes and goes with the row, * so a row that renders nothing leaves no stray line; a data separator * directly before it draws no second line, and the list's first row draws none. */ separatorBefore?: boolean /** Row activation (click, Enter, or Tab on the focused row). */ onSelect: () => void }
    新: export interface MenuItemButtonProps { /** Visible row label. */ children: ReactNode /** Effective binding supplied by the command owner; omitted for unbound actions. */ shortcut?: MenuItem['shortcut'] /** Leading icon (figma .Menu_cell gap 8). */ icon?: ReactNode /** Whether this row identifies the currently displayed page or view. */ current?: boolean /** Whether the row cannot be activated. */ disabled?: boolean /** * Why the disabled row cannot be activated. The row then stays hoverable and * focusable, shows the reason in a tooltip, and exposes it as the row's * description; an enabled row ignores it. */ disabledReason?: string | undefined /** Destructive row: error-colored text/icon and danger hover fill. */ danger?: boolean /** * Start a new group: a hairline above this row, the same one a * `{ type: 'separator' }` data entry draws. It comes and goes with the row, * so a row that renders nothing leaves no stray line; a data separator * directly before it draws no second line, and the list's first row draws none. */ separatorBefore?: boolean /** Row activation (click, Enter, or Tab on the focused row). */ onSelect: () => void }
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/Menu.tsx` — 签名变化: MenuItemButton
    旧: function({
  children, shortcut, icon, current, disabled = false, danger = false, separatorBefore = false, onSelect,
}:MenuItemButtonProps)
    新: function({ onSelect, ...props }:MenuItemButtonProps)
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/Menu.tsx` — 签名变化: Menu
    旧: function({ open, anchor, items = [], children, selectedId, selectedIds, onSelect, onClose, align = 'start', side = 'bottom', portal = false, closeOnPointerLeave = false, dense = false, compact = false, autoFocus = false, selection = 'check', getAnchorRect, minWidthFromAnchor = false, footer, className, listClassName }:{ open: boolean autoFocus?: boolean anchor: ReactNode items?: readonly MenuEntry[] children?: ReactNode footer?: readonly MenuEntry[] selectedId?: string | undefined selectedIds?: readonly string[] | undefined onSelect?: (id: string) => void onClose: () => void align?: 'start' | 'end' side?: 'bottom' | 'top' | 'right' portal?: boolean closeOnPointerLeave?: boolean dense?: boolean compact?: boolean selection?: 'check' | 'fill' getAnchorRect?: () => DOMRect | null minWidthFromAnchor?: boolean className?: string | undefined listClassName?: string | undefined })
    新: function({ open, anchor, items = [], children, submenuBackLabel, selectedId, selectedIds, onSelect, onClose, align = 'start', side = 'bottom', portal = false, closeOnPointerLeave = false, dense = false, compact = false, autoFocus = false, selection = 'check', anchorRef, anchorPoint, minWidthFromAnchor = false, footer, className, listClassName, contextual = false, exiting, returnFocus, isExternalTrigger }:{ open: boolean /** Pointer-positioned popup: cursor clearance, grouped icons, and context gestures. */ contextual?: boolean /** Recognizes external triggers exempt from outside dismissal; omitted exempts no external nodes. */ isExternalTrigger?: (node: Node) => boolean /** Resolve the original control for focus restoration and inert/hidden dismissal. */ returnFocus?: (() => HTMLElement | null) | undefined /** Retain a dismissed context popup during its short fade. */ exiting?: 'dismiss' | 'replace' | undefined autoFocus?: boolean anchor: ReactNode items?: readonly MenuEntry[] /** Localized return action; omitted uses the caller's parent label with a back arrow. */ submenuBackLabel?: string | undefined children?: ReactNode footer?: readonly MenuEntry[] selectedId?: string | undefined selectedIds?: readonly string[] | undefined onSelect?: (id: string) => void onClose: () => void align?: 'start' | 'end' side?: 'bottom' | 'top' | 'right' portal?: boolean closeOnPointerLeave?: boolean dense?: boolean compact?: boolean selection?: 'check' | 'fill' anchorRef?: RefObject<HTMLElement | null> | undefined /** Client coordinates captured for this opening; Safari offsets are applied once. */ anchorPoint?: { readonly x: number; readonly y: number } | undefined minWidthFromAnchor?: boolean className?: string | undefined listClassName?: string | undefined })
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/HoverCard.tsx` — 签名变化: r
    旧: var:DOMRect | null
    新: var
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/MenuSurface.tsx` — 签名变化: MenuSurfaceProps
    旧: export interface MenuSurfaceProps extends ComponentPropsWithoutRef<'div'> { /** Match the shared compact menu's smaller outer radius. */ compact?: boolean }
    新: export interface MenuSurfaceProps extends ComponentPropsWithoutRef<'div'> { /** Match the shared compact menu's smaller outer radius. */ compact?: boolean /** Fade direct content, material, and native backing without isolating the material's backdrop. */ phase?: 'enter' | 'dismiss' | 'replace' | undefined }
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/MenuSurface.tsx` — 签名变化: anchorStyle
    旧: var:CSSProperties & { '--dsh-menu-anchor': string }
    新: var:CSSProperties & Record<`--dsh-menu-${string}`, string>
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/HoverCard.tsx` — 签名变化: HoverCard
    旧: function({
  anchor, content, openDelayMs = 500, disabled = false, grouped = false,
  copyText, copyLabel, copiedLabel, variant = 'compact', widthAnchorRef, inline = false,
}:{ anchor: ReactNode /** Inline media preview using the shared menu material and keyboard focus. */ inline?: boolean content: ReactNode openDelayMs?: number disabled?: boolean grouped?: boolean variant?: 'compact' | 'preview' widthAnchorRef?: RefObject<HTMLElement | null> } & ({ copyText?: string | undefined; copyLabel: string; copiedLabel: string } | { copyText?: undefined copyLabel?: string copiedLabel?: string }))
    新: function({
  anchor, content, openDelayMs = 500, disabled = false, grouped = false,
  copyText, copyLabel, copiedLabel, variant = 'compact', widthAnchorRef, inline = false, fitContent = false,
}:{ anchor: ReactNode /** Inline media preview using the shared menu material and keyboard focus. */ inline?: boolean fitContent?: boolean content: ReactNode openDelayMs?: number disabled?: boolean grouped?: boolean variant?: 'compact' | 'preview' widthAnchorRef?: RefObject<HTMLElement | null> } & ({ copyText?: string | undefined; copyLabel: string; copiedLabel: string } | { copyText?: undefined copyLabel?: string copiedLabel?: string }))
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/HoverCardGroup.tsx` — 签名变化: HoverCardGroup
    旧: function({ children, className }:{ children: ReactNode; className?: string })
    新: function({ children, className, as: Container = 'div' }:{ children: ReactNode className?: string | undefined as?: 'div' | 'span' })
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
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/user-text.tsx` — 签名变化: ReferenceChipProps
    旧: export interface ReferenceChipProps { readonly appearance: ReferenceIconKind | 'skill' | 'command' readonly label: string readonly title: string /** Absent for display-only references and previews. */ readonly onActivate?: () => void }
    新: export interface ReferenceChipProps { readonly appearance: ReferenceIconKind | 'skill' | 'command' /** Explicit object-menu gesture bindings; absent for display-only references. */ readonly contextMenuProps?: Pick<HTMLAttributes<HTMLElement>, 'onContextMenu' | 'onKeyDown' | 'tabIndex'> readonly label: string readonly title: string /** Absent for display-only references and previews. */ readonly onActivate?: () => void }
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/user-text.tsx` — 签名变化: ReferenceChip
    旧: function({ appearance, label, title, onActivate }:ReferenceChipProps)
    新: function({
  appearance, label, title, onActivate, contextMenuProps,
}:ReferenceChipProps)
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/Tooltip.tsx` — 签名变化: AnchorProps
    旧: interface AnchorProps { 'aria-describedby'?: string | undefined ref?: Ref<HTMLElement> | undefined onMouseEnter?: MouseEventHandler | undefined onMouseLeave?: MouseEventHandler | undefined onClick?: MouseEventHandler | undefined onFocus?: FocusEventHandler | undefined onBlur?: FocusEventHandler | undefined }
    新: interface AnchorProps { 'aria-describedby'?: string | undefined ref?: Ref<HTMLElement> | undefined onPointerEnter?: PointerEventHandler | undefined onPointerLeave?: PointerEventHandler | undefined onPointerDown?: PointerEventHandler | undefined onClick?: MouseEventHandler | undefined onFocus?: FocusEventHandler | undefined onBlur?: FocusEventHandler | undefined }
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/Tooltip.tsx` — 签名变化: Tooltip
    旧: function({ label, shortcutKeys, side = 'right', align = 'center', delayMs = 0, focusDelayMs = 0, gap = 8, disabled = false, portal = false, maxWidth, openOnClick = false, children }:{ label: TooltipLabel; shortcutKeys?: readonly string[] | undefined; side?: TooltipSide; align?: 'center' | 'end'; delayMs?: number; focusDelayMs?: number; gap?: number; disabled?: boolean; portal?: boolean; maxWidth?: number; openOnClick?: boolean; children: ReactElement<AnchorProps> })
    新: function({ label, shortcutKeys, side = 'right', align = 'center', delayMs = 0, focusDelayMs = 0, gap = 8, disabled = false, portal = false, maxWidth, openOnClick = false, onlyWhenClipped = false, children }:{ label: TooltipLabel; shortcutKeys?: readonly string[] | undefined; side?: TooltipSide; align?: 'center' | 'end'; delayMs?: number; focusDelayMs?: number; gap?: number; disabled?: boolean; portal?: boolean; maxWidth?: number; openOnClick?: boolean; onlyWhenClipped?: boolean; children: ReactElement<AnchorProps> })
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
    旧: export interface MarkdownDelegate { /** Image previews for decoded local paths in this owner's workspace. */ readonly fileImages?: { resolve: (path: string) => string | undefined labels: ImageLightboxLabels & { open: string; loading: string; failed: string } } | undefined /** Ordinary HTTP(S) activation; absent handlers retain native anchor behavior. */ readonly openExternalLink?: MarkdownExternalLinkHandler | undefined /** * Open a decoded local destination from settled Markdown; absent handlers leave plain text. * @param path - Absolute or workspace-relative file path. * @param options - First line to reveal when the destination specifies a line or range. */ readonly openFile?: ((path: string, options?: { line?: number }) => void) | undefined }
    新: export interface MarkdownDelegate { /** Open an object menu without executing its normal activation. */ readonly getTriggerProps?: ((target: MarkdownMenuTarget) => Pick<HTMLAttributes<HTMLElement>, 'onContextMenu' | 'onKeyDown' | 'tabIndex'>) | undefined /** * Image previews for decoded local paths in this owner's workspace. The renderer * appends a per-mount `load` query parameter to `api/file` route URLs. */ readonly fileImages?: { fileDrag: FileDragActions resolve: (path: string) => string | undefined resourceAddress?: ((path: string) => string) | undefined labels: ImageLightboxLabels & { open: string; loading: string; failed: string } } | undefined /** Ordinary HTTP(S) activation; absent handlers retain native anchor behavior. */ readonly openExternalLink?: MarkdownExternalLinkHandler | undefined /** * Open a decoded local destination from settled Markdown; absent handlers leave plain text. * @param path - Absolute or workspace-relative file path. * @param options - First line to reveal when the destination specifies a line or range. */ readonly openFile?: ((path: string, options?: { line?: number }) => void) | undefined /** * Render one fence whose language is final: it has a language and content. * Absent, the document renders fences with its built-in code and math blocks; * present, the owner renders every such fence, including `diff` and `math`. * @param fence - language, body, and streaming state. * @returns the rendered block. */ readonly renderCode?: ((fence: MarkdownDelegateFenceInfo) => ReactNode) | undefined }
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/markdown/MarkdownDelegate.tsx` — 签名变化: MarkdownDelegateProvider
    旧: function({
  children,
  openExternalLink,
  openFile,
  fileImages,
}:MarkdownDelegateProviderProps)
    新: function({
  children,
  openExternalLink,
  openFile,
  fileImages,
  getTriggerProps,
  renderCode,
}:MarkdownDelegateProviderProps)
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/markdown/MarkdownText.tsx` — 签名变化: renderSettled
    旧: function(text:string,labels:MarkdownLabels,fileMentions:MarkdownFileMentions | undefined,pathImages:MarkdownPathImages | undefined)
    新: function(text:string,labels:MarkdownLabels,fileMentions:MarkdownFileMentions | undefined,pathImages:MarkdownPathImages | undefined,omitHtml:boolean)
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/markdown/MarkdownText.tsx` — 签名变化: StreamingRenderer
    旧: class(labels:MarkdownLabels)
    新: class(labels:MarkdownLabels,omitHtml:boolean)
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/ImageLightbox.tsx` — 签名变化: ImageLightbox
    旧: function({ src, alt, labels, onClose }:{ src: string alt: string labels: ImageLightboxLabels onClose: () => void })
    新: function({ src, alt, labels, onClose, contextMenuProps }:{ src: string alt: string labels: ImageLightboxLabels onClose: () => void contextMenuProps?: Pick<HTMLAttributes<HTMLElement>, 'onContextMenu' | 'onKeyDown' | 'tabIndex'> | undefined })
- **[ast-signature-changed]** `packages/client/ui-slots/src/renderer.ts` — 签名变化: SlotRendererHost
    旧: export interface SlotRendererHost { /** * Subscribe to a key's registration changes (microtask-batched). * @param key - slot key. * @param fn - change callback. * @returns unsubscribe. */ subscribe(key: string, fn: () => void): () => void /** * Monotonic version for uSES pairing. * @param key - slot key. * @returns current version. */ getVersion(key: string): number /** * Snapshot the registered entries for a key (stable reference between mutations). * @param key - slot key. * @returns entries in registration (list: order) sequence. */ entriesOf(key: string): readonly StoredEntry[] /** * Shadowing winners per cell for a key — the render read for single/keyed/ * list dispatch: the first live (non-abdicated) entry of each cell in * priority order; chain keys pass through unchanged (election consumes * every entry). Fresh array per call — a render-body read, not a uSES * getSnapshot source. * @param key - slot key. * @returns the winning entry per occupied cell. */ entriesOfSlot(key: string): readonly StoredEntry[] /** * Report an entry boundary crash. With `info.abdicate` (shadowing kinds) * the entry retires from its cell, one-shot, so the next survivor renders; * chain crashes report without abdicating. The registration stays on the * ledger either way. * @param key - slot key the entry rendered under. * @param entry - the crashed entry. * @param error - the crash cause. * @param info - `abdicate`: whether the crash retires the entry from its cell. */ reportEntryError(key: string, entry: StoredEntry, error: unknown, info: { abdicate: boolean }): void /** * Report a contained Factory occurrence crash without retiring its shared definition. * @param name - Factory name whose occurrence crashed. * @param registration - Factory definition or caller registration that owns the crashing Component. * @param error - the crash cause. */ reportFactoryError(name: string, registration: StoredEntry | StoredFactory, error: unknown): void /** * Declared runtime spec from the declarations ledger. * @param key - slot key. * @returns the spec, or undefined while the key is undeclared (outlets render empty). */ specOf(key: string): SlotSpec<SlotEntryDef> | undefined /** * Stale-authorization check: whether the entry is still in the ledger. * @param entry - a previously rendered entry. * @returns false once the entry's registration was disposed. */ isLive(entry: StoredEntry): boolean /** * Resolve (create or return cached) the store instance for an entry's * declared handle under a scope key; lifecycle rides the ledger axis. * @param entry - entry whose declaration carries the handle. * @param scopeBinding - exact Session binding for scoped slots, undefined for root scope. * @returns the instance, or undefined when the entry declares no store. */ storeOf(entry: StoredEntry, scopeBinding: ScopedStandardSourceBinding | undefined): StoreInstanceLike | undefined /** * Resolve a Factory Store for one render occurrence and inherited scope. * @param definition - live Factory definition. * @param scopeBinding - exact Session binding for scoped Factories, undefined for root scope. * @param occurrence - identity token owned by the render position. * @returns the occurrence Store instance, or undefined without a Store declaration. */ factoryStoreOf( definition: StoredFactory, scopeBinding: ScopedStandardSourceBinding | undefined, occurrence: object, ): StoreInstanceLike | undefined /** * Retain an exclusive Factory Store occurrence after React commits it. * Repeated setup and cleanup preserve the occurrence's Store identity. * @param definition - the live Factory definition. * @param occurrence - identity token owned by the mounted render position. * @returns an idempotent cleanup function. */ retainFactoryOccurrence(definition: StoredFactory, occurrence: object): () => void /** * Subscribe to one Factory definition's registration lifetime. * @param name - Factory name. * @param fn - change callback. * @returns the unsubscribe function. */ subscribeFactory(name: string, fn: () => void): () => void /** * Read the monotonic version for one Factory definition. * @param name - Factory name. * @returns the current definition version. */ getFactoryVersion(name: string): number /** * Read one live Factory definition. * @param name - Factory name. * @returns the definition, or undefined while unregistered. */ factoryOf(name: string): StoredFactory | undefined /** * Check retained Factory render authority. * @param definition - a previously resolved Factory definition. * @returns whether that exact definition remains live. */ isFactoryLive(definition: StoredFactory): boolean /** Root standard data assembled from domain-owned contributions. */ readonly root: HostObservable<StandardSourceBinding> /** Monotonic source updated whenever the installed scope-adapter roster changes. */ readonly scopeRevision: HostObservable<number> /** * Resolve the adapter installed for one non-root scope. * `session` and `session-maybe` intentionally resolve the same adapter. * @param scope - Slot scope. * @returns adapter, or `undefined` when the composition omitted its owner. */ scope(scope: Exclude<SlotScope, 'root'>): SlotScopeAdapter | undefined /** * Installed locale face backing the `t` standard seat (absent until the * locale plugin installs one; rendering an entry that declared `locale:` * without it is an assembly failure). */ locale?: LocaleFace | undefined }
    新: export interface SlotRendererHost { /** * Subscribe to a key's registration changes (microtask-batched). * @param key - slot key. * @param fn - change callback. * @returns unsubscribe. */ subscribe(key: string, fn: () => void): () => void /** * Monotonic version for uSES pairing. * @param key - slot key. * @returns current version. */ getVersion(key: string): number /** * Snapshot the registered entries for a key (stable reference between mutations). * @param key - slot key. * @returns entries in registration (list: order) sequence. */ entriesOf(key: string): readonly StoredEntry[] /** * Shadowing winners per cell for a key — the render read for single/keyed/ * list dispatch: the first live (non-abdicated) entry of each cell in * priority order; chain keys pass through unchanged (election consumes * every entry). Fresh array per call — a render-body read, not a uSES * getSnapshot source. * @param key - slot key. * @returns the winning entry per occupied cell. */ entriesOfSlot(key: string): readonly StoredEntry[] /** * Report an entry boundary crash. With `info.abdicate` (single, keyed, and * list) the entry retires from its cell, one-shot, so the next survivor * renders; chain and hoc crashes report without abdicating. The registration stays on the * ledger either way. * @param key - slot key the entry rendered under. * @param entry - the crashed entry. * @param error - the crash cause. * @param info - `abdicate`: whether the crash retires the entry from its cell. */ reportEntryError(key: string, entry: StoredEntry, error: unknown, info: { abdicate: boolean }): void /** * Report a contained Factory occurrence crash without retiring its shared definition. * @param name - Factory name whose occurrence crashed. * @param registration - Factory definition or caller registration that owns the crashing Component. * @param error - the crash cause. */ reportFactoryError(name: string, registration: StoredEntry | StoredFactory, error: unknown): void /** * Declared runtime spec from the declarations ledger. * @param key - slot key. * @returns the spec, or undefined while the key is undeclared (outlets render empty). */ specOf(key: string): SlotSpec<SlotEntryDef> | undefined /** * Stale-authorization check: whether the entry is still in the ledger. * @param entry - a previously rendered entry. * @returns false once the entry's registration was disposed. */ isLive(entry: StoredEntry): boolean /** * Resolve (create or return cached) the store instance for an entry's * declared handle under a scope key; lifecycle rides the ledger axis. * @param entry - entry whose declaration carries the handle. * @param scopeBinding - exact Session binding for scoped slots, undefined for root scope. * @returns the instance, or undefined when the entry declares no store. */ storeOf(entry: StoredEntry, scopeBinding: ScopedStandardSourceBinding | undefined): StoreInstanceLike | undefined /** * Resolve a Factory Store for one render occurrence and inherited scope. * @param definition - live Factory definition. * @param scopeBinding - exact Session binding for scoped Factories, undefined for root scope. * @param occurrence - identity token owned by the render position. * @returns the occurrence Store instance, or undefined without a Store declaration. */ factoryStoreOf( definition: StoredFactory, scopeBinding: ScopedStandardSourceBinding | undefined, occurrence: object, ): StoreInstanceLike | undefined /** * Retain an exclusive Factory Store occurrence after React commits it. * Repeated setup and cleanup preserve the occurrence's Store identity. * @param definition - the live Factory definition. * @param occurrence - identity token owned by the mounted render position. * @returns an idempotent cleanup function. */ retainFactoryOccurrence(definition: StoredFactory, occurrence: object): () => void /** * Subscribe to one Factory definition's registration lifetime. * @param name - Factory name. * @param fn - change callback. * @returns the unsubscribe function. */ subscribeFactory(name: string, fn: () => void): () => void /** * Read the monotonic version for one Factory definition. * @param name - Factory name. * @returns the current definition version. */ getFactoryVersion(name: string): number /** * Read one live Factory definition. * @param name - Factory name. * @returns the definition, or undefined while unregistered. */ factoryOf(name: string): StoredFactory | undefined /** * Check retained Factory render authority. * @param definition - a previously resolved Factory definition. * @returns whether that exact definition remains live. */ isFactoryLive(definition: StoredFactory): boolean /** Root standard data assembled from domain-owned contributions. */ readonly root: HostObservable<StandardSourceBinding> /** Monotonic source updated whenever the installed scope-adapter roster changes. */ readonly scopeRevision: HostObservable<number> /** * Resolve the adapter installed for one non-root scope. * `session` and `session-maybe` intentionally resolve the same adapter. * @param scope - Slot scope. * @returns adapter, or `undefined` when the composition omitted its owner. */ scope(scope: Exclude<SlotScope, 'root'>): SlotScopeAdapter | undefined /** * Installed locale face backing the `t` standard seat (absent until the * locale plugin installs one; rendering an entry that declared `locale:` * without it is an assembly failure). */ locale?: LocaleFace | undefined }
- **[ast-signature-changed]** `packages/client/web/src/boot.ts` — 签名变化: BootSeams
    旧: export type BootSeams = Pick<ClientModuleCreateOptions, 'loadBundle'>
    新: export type BootSeams = Pick<ClientModuleCreateOptions, 'loadBundle' | 'resolveAsset'>
- ★ **[ast-signature-changed]** `packages/context/agent-instructions/src/render.ts` — 签名变化: RenderedInstructionContext
    旧: interface RenderedInstructionContext extends RenderedAgentInstructions { /** * Original files semantically represented by rendered section text. This is * not the complement of `omitted`: a truncated file may be represented here * and in `truncated`, while a notice-only file appears in neither. A genuinely * empty file counts when its heading survives because that heading conveys * that the instruction exists and has no content. */ represented: LoadedInstructionFile[] }
    新: interface RenderedInstructionContext extends RenderedAgentInstructions { /** * Original files semantically represented by rendered section text. This is * not the complement of `omitted`: a truncated file may be represented here * and in `truncated`, while a notice-only file appears in neither. A genuinely * empty file counts when its heading survives because that heading conveys * that the instruction exists and has no content. */ represented: LoadedInstructionFile[] /** Files whose sections the text holds, in text order, each with the content the text holds. */ sections: LoadedInstructionFile[] /** * Intro block of the `<system-reminder>` frame: undefined when the text is * empty or a notice without a frame, and the empty string when the frame has * no intro, as in a change batch or a merged frame whose chains both rendered * without a frame. */ intro: string | undefined }
- **[ast-signature-changed]** `packages/core/agent/src/runtime-types.ts` — 签名变化: AgentOptions
    旧: export interface AgentOptions { /** Provider route (must have a registered adapter at call time). */ provider?: string /** Model id interpreted by the selected provider adapter. */ model?: string /** Adapter-owned reasoning effort for the selected provider/model route. */ reasoningEffort?: ReasoningEffortId /** Maximum output tokens for each conversation-model request. */ maxTokens?: number }
    新: export interface AgentOptions { /** Provider route (must have a registered adapter at call time). */ provider?: string /** Model id interpreted by the selected provider adapter. */ model?: string /** Adapter-owned reasoning effort for the selected provider/model route. */ reasoningEffort?: ReasoningEffortId | undefined /** Maximum output tokens for each conversation-model request. */ maxTokens?: number }
- **[ast-signature-changed]** `packages/core/agent/src/runtime-types.ts` — 签名变化: Agent
    旧: interface Agent { /** The provider route and model this agent's requests use. */ readonly options: AgentOptions /** The live session this agent drives; its log is the durable source of truth. */ readonly session: Session /** Agent-owned access to durable pending work. */ readonly inbox: Inbox /** The current lifecycle state, mirrored on every `agent/status` transition. */ readonly status: AgentStatus /** Agent-scoped context; its contributions are agent-local, unwind on disposal, and reject registration afterward. */ readonly ctx: Context /** * Clear queued and steering work — unless `keepInbox` — and abort the active * turn or between-turn task. The first cause wins for that activity. With no * active activity, cancellation is a no-op and does not arm later work. * @param cause - the stable caller intent carried by the active operation signal. * @param options - cancellation options; `keepInbox` preserves pending work. */ cancel(cause: AgentCancelCause, options?: CancelOptions): void /** * Resolve after the current whole-agent activity reaches quiescence. This * follows replacement work started before the observed driver retires, * but does not identify the settlement of any particular message. * @returns fulfillment after no active driver or maintenance task remains. */ whenIdle(): Promise<void> /** * Run one non-turn maintenance task from the true idle phase. The task starts * synchronously after claiming that phase; later waking input remains in the * inbox until the task settles, while public status stays `idle`. * `whenIdle()` follows both the task and any waking work released behind it. * @param task - operation whose fulfillment or rejection is preserved, with a signal aborted by {@link cancel}. * @throws synchronously when turn-driving or another maintenance task already owns the agent. * @returns the task promise. */ runMaintenance<T>(task: (signal: AbortSignal) => Promise<T>): Promise<T> /** * Route identified input to an inbox boundary and optionally wake the driver. * Waking input submitted after active cancellation is queued for the next * turn and runs when the aborted activity converges to idle; a `disposed` * cancel leaves it parked. A wake submitted while already idle always opens * its turn boundary, even when its message is cleared before the driver * claims ([driver wake convergence](../../agent-loop/src/agent.ts)). * @param message - identified content and the source that supplied it. * @param target - the preferred next-turn or next-step inbox boundary. * @param wakeup - whether delivery may wake the driver. */ send(message: UserMessage, target: InboxTarget, wakeup: boolean): void /** * Queue an ordinary follow-up turn and wake the driver. The item becomes the * sole ordinary message of its own turn. * @param message - identified prompt content and the source that supplied it. */ followup(message: UserMessage): void /** * Submit steering for the nearest step. An idle driver starts a turn; * a running driver consumes it at its next step boundary. * A rejected step leaves steering parked in the inbox until the next * wake; cancellation or disposal may discard pending steering. * @param message - identified steering content and the source that supplied it. */ steer(message: UserMessage): void /** * Queue model-facing context for the next pre-step without waking the * driver. A running driver claims it at the nearest later step boundary; * idle drivers leave it pending until follow-up or steering * wakes them. It may miss a request whose pre-step already claimed its * batch. Cancellation or disposal may discard pending context. * @param message - identified injected context and the source that supplied it. */ inject(message: UserMessage): void }
    新: interface Agent { /** Route fallback and output controls; live accessors apply until the Session records a selection or request. */ readonly options: AgentOptions /** The live session this agent drives; its log is the durable source of truth. */ readonly session: Session /** Agent-owned access to durable model selection for future steps. */ readonly model: Model /** Agent-owned access to durable pending work. */ readonly inbox: Inbox /** The current lifecycle state, mirrored on every `agent/status` transition. */ readonly status: AgentStatus /** Agent-scoped context; its contributions are agent-local, unwind on disposal, and reject registration afterward. */ readonly ctx: Context /** * Clear queued and steering work — unless `keepInbox` — and abort the active * turn or between-turn task. The first cause wins for that activity. With no * active activity, cancellation is a no-op and does not arm later work. * Queue-write failures still abort the activity and propagate to the caller. * @param cause - the stable caller intent carried by the active operation signal. * @param options - cancellation options; `keepInbox` preserves pending work. */ cancel(cause: AgentCancelCause, options?: CancelOptions): void /** * Resolve after the current whole-agent activity reaches quiescence. This * follows replacement work started before the observed driver retires, * but does not identify the settlement of any particular message. * @returns fulfillment after no active driver or maintenance task remains. */ whenIdle(): Promise<void> /** * Run one non-turn maintenance task from the true idle phase. The task starts * synchronously after claiming that phase; later waking input remains in the * inbox until the task settles, while public status stays `idle`. * `whenIdle()` follows both the task and any waking work released behind it. * @param task - operation whose fulfillment or rejection is preserved, with a signal aborted by {@link cancel}. * @throws synchronously when turn-driving or another maintenance task already owns the agent. * @returns the task promise. */ runMaintenance<T>(task: (signal: AbortSignal) => Promise<T>): Promise<T> /** * Route identified input to an inbox boundary and optionally wake the driver. * Waking input submitted after active cancellation is queued for the next * turn and runs when the aborted activity converges to idle; a `disposed` * cancel leaves it parked. A wake submitted while already idle always opens * its turn boundary, even when its message is cleared before the driver * claims ([driver wake convergence](../../agent-loop/src/agent.ts)). * @param message - identified content and the source that supplied it. * @param target - the preferred next-turn or next-step inbox boundary. * @param wakeup - whether delivery may wake the driver. */ send(message: UserMessage, target: InboxTarget, wakeup: boolean): void /** * Queue an ordinary follow-up turn and wake the driver. The item becomes the * sole ordinary message of its own turn. * @param message - identified prompt content and the source that supplied it. */ followup(message: UserMessage): void /** * Submit steering for the nearest step. An idle driver starts a turn; * a running driver consumes it at its next step boundary. * A rejected step leaves steering parked in the inbox until the next * wake; cancellation or disposal may discard pending steering. * @param message - identified steering content and the source that supplied it. */ steer(message: UserMessage): void /** * Queue model-facing context for the next pre-step without waking the * driver. A running driver claims it at the nearest later step boundary; * idle drivers leave it pending until follow-up or steering * wakes them. It may miss a request whose pre-step already claimed its * batch. Cancellation or disposal may discard pending context. * @param message - identified injected context and the source that supplied it. */ inject(message: UserMessage): void }
- **[ast-signature-changed]** `packages/core/agent/src/model-selection.ts` — 签名变化: installModelSelection
    旧: function(agentCtx:Context,selection:ModelSelectionRef)
    新: function(agentCtx:Context)
- **[ast-signature-changed]** `packages/core/session/src/types.ts` — 签名变化: SessionHeader
    旧: export interface SessionHeader { /** * Current logical format version, stamped from {@link SESSION_FORMAT_VERSION}. * Historical physical headers are translated before entering this interface. */ readonly version: typeof SESSION_FORMAT_VERSION /** The session's id (mirrors the {@link Session}'s id). */ readonly id: SessionId /** Non-negative safe-integer Unix epoch milliseconds when the session was created. */ readonly createdAt: number /** Absolute working directory the session was created in (if any). */ readonly cwd?: string /** The session this one was forked from (seed lineage), if any. */ readonly parentSession?: SessionId /** * Whether this Session contains a fork-inherited event prefix. The exact prefix * length is Session state rather than ordinary header metadata. */ readonly isSeeded: boolean /** * Coarse product classification for a session created as a subagent child. * This is presentation metadata, not proof that the child is continuable. */ readonly origin?: 'subagent' /** * Delegation depth: absent (zero) for a top-level session, parent depth + 1 * for a subagent child. Persisted so a recursion budget survives restart and * resume — a runtime-only depth would reset a resumed child to top-level. */ readonly delegationDepth?: number /** * Id of the agent preset this session's agent was composed from, when the * deployment composes per session. Durable because the preset decides the * session's tools and prompt: a resume that restored a different composition * would replay history the model can no longer act on. */ readonly agentPreset?: string }
    新: export interface SessionHeader { /** * Current logical format version, stamped from {@link SESSION_FORMAT_VERSION}. * Historical physical headers are translated before entering this interface. */ readonly version: typeof SESSION_FORMAT_VERSION /** The session's id (mirrors the {@link Session}'s id). */ readonly id: SessionId /** Non-negative safe-integer Unix epoch milliseconds when the session was created. */ readonly createdAt: number /** Absolute working directory the session was created in (if any). */ readonly cwd?: string /** * Direct creator of a subagent Session. Ordinary forks omit this field; * historical ordinary forks may retain their source id here. Presence alone * does not classify a Session as a subagent; use `origin` for that distinction. */ readonly parentSession?: SessionId /** * Whether this Session contains a fork-inherited event prefix. The exact prefix * length is Session state rather than ordinary header metadata. */ readonly isSeeded: boolean /** * Coarse product classification for a session created as a subagent child. * This is presentation metadata, not proof that the child is continuable. */ readonly origin?: 'subagent' /** * Delegation depth: absent (zero) for a top-level session, parent depth + 1 * for a subagent child. Persisted so a recursion budget survives restart and * resume — a runtime-only depth would reset a resumed child to top-level. */ readonly delegationDepth?: number /** * Id of the agent preset this session's agent was composed from, when the * deployment composes per session. Durable because the preset decides the * session's tools and prompt: a resume that restored a different composition * would replay history the model can no longer act on. */ readonly agentPreset?: string }
- **[ast-signature-changed]** `packages/core/session/src/types.ts` — 签名变化: TurnEndReasonMap
    旧: export interface TurnEndReasonMap { completed: { kind: 'completed' } /** A cancellation request interrupted the live turn. */ aborted: { kind: 'aborted'; reason: TurnEndCancelCause } blocked: { kind: 'blocked' } /** * The turn failed. `error` is always a structured failure: the `LlmError` * facts verbatim, or `{ message: errorChain(error), code: 'UNKNOWN' }` * flattened from any other error. */ error: { kind: 'error'; error: LlmFailure } /** At least one step reached its output-token ceiling, even if a plugin continued the turn. */ 'max-tokens': { kind: 'max-tokens' } /** * A crash-orphaned turn was closed after the fact: agent-loop resume appends * this closer for a stored log whose last turn never ended, and session-query * synthesizes it on cold reads. The loop never emits this marker live, and * the events recorded before the crash remain intact. */ interrupted: { kind: 'interrupted' } /** * Fork-seed construction closed a turn that was still open at the fork * boundary in the source session. Only fork seeds carry this marker — the * loop never emits it — and the source events before the boundary remain * intact in the child. */ forked: { kind: 'forked' } }
    新: export interface TurnEndReasonMap { completed: { kind: 'completed' } /** A cancellation request interrupted the live turn. */ aborted: { kind: 'aborted'; reason: TurnEndCancelCause } blocked: { kind: 'blocked' } /** * The turn failed. `error` is always a structured failure: the `LlmError` * facts verbatim, or `{ message: errorChain(error), code }` flattened from * any other error, where `code` is `TOOL_ACTIVATION_FAILED` for a failed * tool condition and `UNKNOWN` otherwise. */ error: { kind: 'error'; error: LlmFailure } /** At least one step reached its output-token ceiling, even if a plugin continued the turn. */ 'max-tokens': { kind: 'max-tokens' } /** * A crash-orphaned turn was closed after the fact: agent-loop resume appends * this closer for a stored log whose last turn never ended, and session-query * synthesizes it on cold reads. The loop never emits this marker live, and * the events recorded before the crash remain intact. */ interrupted: { kind: 'interrupted' } /** * Fork-seed construction closed a turn that was still open at the fork * boundary in the source session. Only fork seeds carry this marker — the * loop never emits it — and the source events before the boundary remain * intact in the child. */ forked: { kind: 'forked' } }
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
- **[ast-signature-changed]** `packages/util/values` — 签名变化: frames
    旧: var:ValueFrame[]
    新: var:JsonWalkFrame[]
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
- **[ast-signature-changed]** `packages/fs/fs/src/types.ts` — 签名变化: FsErrorCode
    旧: export type FsErrorCode = | 'FS_NOT_FOUND' | 'FS_NOT_DIRECTORY' | 'FS_NOT_TEXT' | 'FS_NOT_REGULAR_FILE' | 'FS_TOO_LARGE' | 'FS_PERMISSION_DENIED' | 'FS_SANDBOX_DENIED' | 'FS_IO_ERROR' | 'FS_STALE_VERSION' | 'FS_NOT_OBSERVED' | 'FS_AMBIGUOUS_EDIT' | 'FS_EDIT_NOT_FOUND' | 'FS_ABORTED'
    新: export type FsErrorCode = typeof FS_ERROR_CODES[number]
- **[ast-signature-changed]** `packages/host/plugin-inventory/src/types.ts` — 签名变化: PluginInventoryEntry
    旧: export interface PluginInventoryEntry { readonly entryId: PluginEntryId /** Exact module specifier imported by the Loader entry. */ readonly moduleName: string /** Local package display metadata, independent of whether the entry is enabled. */ readonly meta?: PluginLocalizedMeta /** Effective Loader enablement, including disabled ancestor groups. */ readonly enabled: boolean readonly fiberPhase: PluginFiberPhase }
    新: export interface PluginInventoryEntry { readonly entryId: PluginEntryId /** Exact module specifier imported by the Loader entry. */ readonly moduleName: string /** Local package display metadata, independent of whether the entry is enabled. */ readonly meta?: PluginLocalizedMeta /** Effective Loader enablement, including disabled ancestor groups. */ readonly enabled: boolean readonly fiberPhase: PluginFiberPhase /** Current startup failure message; absent when this entry has no failed fiber. */ readonly diagnostic?: string }
- **[ast-signature-changed]** `packages/interaction/user-questions/src/types.ts` — 签名变化: AskUserQuestionIntent
    旧: export type AskUserQuestionIntent = { /** A plan submitted for review: `detail` is the plan markdown `ask()` requires, and the decision approves or declines it. */ kind: 'plan-review' /** * The option label that approves the plan; every other option declines it. * Named rather than positional so no UI infers the verdict from option order. * An `approve` naming no option of its own question is rejected at `ask()`. */ approve: string /** Logged tool invocation whose arguments contain the reviewed plan. */ callId?: ToolCallId }
    新: export type AskUserQuestionIntent = { /** A plan submitted for review: `detail` is the plan markdown `ask()` requires, and the decision approves or declines it. */ kind: 'plan-review' /** * The option label that approves the plan; every other option declines it. * Named rather than positional so no UI infers the verdict from option order. * An `approve` naming no option of its own question is rejected at `ask()`. */ approve: string /** Logged tool invocation whose arguments contain the reviewed plan. */ callId?: ToolCallId } | { /** A blocking permission decision with fixed actions and no free-text answer. */ kind: 'approval' /** Option label granting the scope described by the caller. */ approve: string /** Option label refusing the requested access. */ reject: string /** Optional persistent grant offered only when the caller supports it. */ always?: string /** Metadata for human recognition; the caller admits icon sources, which the UI may load as URLs. Never an authorization identity. */ subject?: { name: string; icon?: string } /** Localized question and limited-grant label; fixed cards own reject/always wording. Option labels remain answer values. */ display?: { question: { en: string; [locale: string]: string } detail?: { en: string; [locale: string]: string } approve?: { en: string; [locale: string]: string } } }
- **[ast-signature-changed]** `packages/boot/plugin-manager` — 签名变化: answers
    旧: var
    新: var:(R | undefined)[]
- **[ast-signature-changed]** `packages/llm/deepseek-llm-api-extensions/src/types.ts` — 签名变化: DeepSeekLlmApiExtensionRequest
    旧: export interface DeepSeekLlmApiExtensionRequest { /** Base DeepSeek request body before extension fields are merged. */ readonly body: Readonly<Record<string, DeepSeekLlmApiJson>> /** Session identity carried by the model request, when present. */ readonly sessionId?: string /** Auxiliary request classification, when present. */ readonly purpose?: 'compaction' | 'session-title' /** Cancellation for request preparation; providers must stop promptly after abort. */ readonly signal: AbortSignal }
    新: export interface DeepSeekLlmApiExtensionRequest { /** Base DeepSeek request body before extension fields are merged. */ readonly body: Readonly<Record<string, DeepSeekLlmApiJson>> /** Session identity carried by the model request, when present. */ readonly sessionId?: string /** Auxiliary request classification, when present. */ readonly purpose?: string /** Cancellation for request preparation; providers must stop promptly after abort. */ readonly signal: AbortSignal }
- **[ast-signature-changed]** `packages/web/web-deepseek-api` — 签名变化: baseURL
    旧: var
    新: var:string
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
- **[ast-signature-changed]** `packages/llm/llm-pi-ai/src/adapter.ts` — 签名变化: PiAiAdapterOptions
    旧: export interface PiAiAdapterOptions { /** Current validated profiles by provider route; called once per operation. */ profiles: () => ReadonlyMap<string, ResolvedPiAiProviderProfile> /** * Resolve the credential for one already-resolved profile; called once per * stream call and frozen for that call, and by `listModels`, which offers no * models while it throws `MISSING_CREDENTIAL`. `undefined` defers to the route's own * pi-ai auth, which for an installed catalog route is its provider-native * ambient discovery; the plugin allows that only for a profile naming no * credential at all, because a named reference that misses throws `LlmError` * `MISSING_CREDENTIAL` rather than falling back. */ resolveApiKey: (provider: string, profile: ResolvedPiAiProviderProfile) => Promise<string | undefined> /** * How every collection this adapter builds resolves auth the request-level * `apiKey` override does not cover. Required rather than optional: a * collection built without them gets pi-ai's in-memory default store, which * is empty at every boot and discarded on every configuration change, so a * route whose only method is a login would report itself unconfigured on * every request no matter how often the human signed in. */ auth: PiAiAuthInjection /** Resolve the optional durable attachment service at request time. */ resolveAttachments?: () => AttachmentStore | undefined /** Bridge one attachment reference into the current model-tool execution world. */ resolveImageAccess?: (attachments: AttachmentStore, ref: ImageAttachmentRef) => ImageAttachmentAccess | undefined /** * Observe one assistant history message degrading to provider-neutral * conversion because its stored replay state is unusable by this build. */ onReplayDegrade?: (detail: { provider: string; model: string; reason: string }) => void }
    新: export interface PiAiAdapterOptions { /** Current validated profiles by provider route; called once per operation. */ profiles: () => ReadonlyMap<string, ResolvedPiAiProviderProfile> /** * Resolve the credential for one already-resolved profile; called once per * stream call and frozen for that call, and by `listModels`, which offers no * models while it throws `MISSING_CREDENTIAL`. `undefined` defers to the route's own * pi-ai auth, which for an installed catalog route is its provider-native * ambient discovery; the plugin allows that only for a profile naming no * credential at all, because a named reference that misses throws `LlmError` * `MISSING_CREDENTIAL` rather than falling back. */ resolveApiKey: (provider: string, profile: ResolvedPiAiProviderProfile) => Promise<string | undefined> /** * How every collection this adapter builds resolves auth the request-level * `apiKey` override does not cover. Required rather than optional: a * collection built without them gets pi-ai's in-memory default store, which * is empty at every boot and discarded on every configuration change, so a * route whose only method is a login would report itself unconfigured on * every request no matter how often the human signed in. */ auth: PiAiAuthInjection /** * Synchronously prepare this call's headers before SDK dispatch. The input * contains a fresh copy of profile headers; attribution is enforced afterward. * Omission preserves profile headers. Throws fail the call with REQUEST_HEADERS * before inference I/O. Do not retain or mutate headers after returning. * Non-TypeError messages become public diagnostics and must exclude secrets; * TypeError details and non-Error values are replaced with safe guidance. * @param request - immutable routing metadata from the prepared call. * @param headers - request-owned headers initialized from the profile. * @returns headers to pass to pi-ai after applying Harness attribution. */ prepareHeaders?: (request: PiAiRequestHeaderContext, headers: Headers) => Headers /** Resolve the optional durable attachment service at request time. */ resolveAttachments?: () => AttachmentStore | undefined /** Bridge one attachment reference into the current model-tool execution world. */ resolveImageAccess?: (attachments: AttachmentStore, ref: ImageAttachmentRef) => ImageAttachmentAccess | undefined /** * Observe one assistant history message degrading to provider-neutral * conversion because its stored replay state is unusable by this build. */ onReplayDegrade?: (detail: { provider: string; model: string; reason: string }) => void /** * Observe one request that sent replayed assistant messages without their * signed Anthropic thinking because the request prefix changed or was never * recorded. Stale messages stay omitted, so later requests of the * conversation report them again. */ onThinkingOmitted?: (detail: { provider: string; model: string; count: number }) => void }
- **[ast-signature-changed]** `packages/llm/llm-pi-ai/src/config.ts` — 签名变化: PiAiProviderProfile
    旧: export interface PiAiProviderProfile { /** Credential reference (environment-variable name) resolved per request through `ctx.credentials`. */ apiKeyEnv?: string /** Name shown by configuration surfaces; defaults to the route key. */ displayName?: string /** * Wire protocol every model on this route speaks. Omission keeps each * installed catalog model's own protocol, which is why a catalog route needs * no protocol at all; a route the catalog does not ship must name one. */ api?: string /** Endpoint for this route's models; defaults to the installed catalog's endpoint. */ baseURL?: string /** * This route's model catalog. Omission serves the installed catalog for the * route unchanged; an explicit list replaces it, each entry defaulting its * unset fields from the installed model of the same id. */ models?: PiAiModelProfile[] /** * Installed-catalog customizations by model id: each entry reshapes that * one model with the same fields a {@link models} entry takes, while the * rest of the catalog keeps serving untouched. Only meaningful on a catalog * route with no `models` list — `models` already replaces the catalog, so * an override beside it, on a route the catalog does not ship, or naming a * model the catalog does not describe is refused rather than skipped. */ modelOverrides?: Record<string, PiAiModelOverride> /** * pi-ai wire-compatibility switches defaulting every model on this route * whose protocol declares them; each model's own `compat` overrides per * field. What neither sets keeps the installed catalog entry's value, then * pi-ai's own detection. A switch no model on the route could read is * refused rather than left looking applied. */ compat?: PiAiCompatProfile /** * Context capacity for a model this route lists that neither the entry nor * the installed catalog sizes (default 262,144). A guess by construction, so * a deployment whose gateway serves smaller models corrects it here. */ defaultContextWindow?: number /** * Output capability for a model this route lists that neither the entry nor * the installed catalog sizes (default 32,768). This sizes the model; it * never becomes a per-request cap on its own. */ defaultMaxTokens?: number /** * Request modalities for a model this route lists that neither its entry's * {@link PiAiModelProfile.input} nor the installed catalog declares (default * `[text]`). A fallback like the capacities above, not an override: a * catalog model keeps the modalities the catalog records for it, and this * value never narrows one. A gateway serving vision models the catalog does * not describe declares `[text, image]` once here instead of on every entry. * Unlike an entry's list, this one may not be empty — nothing sits below it * to answer instead. */ defaultInput?: PiAiModality[] /** Provider request headers, validated against Fetch when the profile resolves; Harness attribution wins reserved names. */ headers?: Record<string, string> /** Provider-neutral pi-ai reasoning level. */ reasoning?: ModelThinkingLevel /** Token budgets used by reasoning providers that support them. */ thinkingBudgets?: ThinkingBudgets /** Prompt-cache retention preference. */ cacheRetention?: CacheRetention /** Streaming transport preference. */ transport?: Transport /** HTTP/provider SDK timeout in milliseconds. */ timeoutMs?: number /** WebSocket connection timeout in milliseconds. */ websocketConnectTimeoutMs?: number /** Maximum provider idle time while one stream read is outstanding. */ streamIdleTimeoutMs?: number /** * Maximum base64-encoded image payload per request. When a request's * accumulated images exceed it, the oldest images are replaced by text * placeholders until the request fits, so a long session keeps completing * requests instead of being rejected by a request-size cap. */ maxRequestImageBytes?: number /** Total-pixel budget for each deterministic inline request version. */ requestImagePixelBudget?: number /** * Raw encoded-byte target for each deterministic inline request version; * the smallest quality-ladder output is used when no quality fits. */ requestImageMaxBytes?: number /** Provider-owned model-request retry policy; omission uses normal mode with five retries. */ retryPolicy?: RetryPolicyConfig }
    新: export interface PiAiProviderProfile { /** Credential reference (environment-variable name) resolved per request through `ctx.credentials`. */ apiKeyEnv?: string /** Name shown by configuration surfaces; defaults to the route key. */ displayName?: string /** * Wire protocol every model on this route speaks. Omission keeps each * installed catalog model's own protocol, which is why a catalog route needs * no protocol at all; a route the catalog does not ship must name one. */ api?: string /** Endpoint for this route's models; defaults to the installed catalog's endpoint. */ baseURL?: string /** * This route's model catalog. Omission serves the installed catalog for the * route unchanged; an explicit list replaces it, each entry defaulting its * unset fields from the installed model of the same id. */ models?: PiAiModelProfile[] /** * Installed-catalog customizations by model id: each entry reshapes that * one model with the same fields a {@link models} entry takes, while the * rest of the catalog keeps serving untouched. Only meaningful on a catalog * route with no `models` list — `models` already replaces the catalog, so * an override beside it, on a route the catalog does not ship, or naming a * model the catalog does not describe is refused rather than skipped. */ modelOverrides?: Record<string, PiAiModelOverride> /** * pi-ai wire-compatibility switches defaulting every model on this route * whose protocol declares them; each model's own `compat` overrides per * field. What neither sets keeps the installed catalog entry's value, then * pi-ai's own detection. A switch no model on the route could read is * refused rather than left looking applied. */ compat?: PiAiCompatProfile /** * Context capacity for a model this route lists that neither the entry nor * the installed catalog sizes (default 1,000,000). A guess by construction, so * a deployment whose gateway serves smaller models corrects it here. */ defaultContextWindow?: number /** * Output capability for a model this route lists that neither the entry nor * the installed catalog sizes (default 128,000). This sizes the model; it * never becomes a per-request cap on its own. */ defaultMaxTokens?: number /** * Request modalities for a model this route lists that neither its entry's * {@link PiAiModelProfile.input} nor the installed catalog declares (default * `[text]`). A fallback like the capacities above, not an override: a * catalog model keeps the modalities the catalog records for it, and this * value never narrows one. A gateway serving vision models the catalog does * not describe declares `[text, image]` once here instead of on every entry. * Unlike an entry's list, this one may not be empty — nothing sits below it * to answer instead. */ defaultInput?: PiAiModality[] /** Provider request headers, validated against Fetch when the profile resolves; Harness attribution wins reserved names. */ headers?: Record<string, string> /** Provider-neutral pi-ai reasoning level. */ reasoning?: ModelThinkingLevel /** Token budgets used by reasoning providers that support them. */ thinkingBudgets?: ThinkingBudgets /** Prompt-cache retention preference. */ cacheRetention?: CacheRetention /** Streaming transport preference. */ transport?: Transport /** HTTP/provider SDK timeout in milliseconds. */ timeoutMs?: number /** WebSocket connection timeout in milliseconds. */ websocketConnectTimeoutMs?: number /** Maximum provider idle time while one stream read is outstanding. */ streamIdleTimeoutMs?: number /** * Maximum base64-encoded image payload per request. When a request's * accumulated images exceed it, the oldest images are replaced by text * placeholders until the request fits, so a long session keeps completing * requests instead of being rejected by a request-size cap. */ maxRequestImageBytes?: number /** * Maximum retained image occurrences per request. A request carrying more * fails with `IMAGE_OFFLOAD_REQUIRED` naming how many of the oldest * occurrences to offload. */ maxRequestImages?: number /** * Oldest occurrences offloaded per count overflow (default 10, capped at * {@link maxRequestImages}); an explicit value must not exceed it. Larger * steps rewrite the request prefix less often. */ imageOffloadCountQuantum?: number /** Total-pixel budget for each deterministic inline request version. */ requestImagePixelBudget?: number /** * Raw encoded-byte target for each deterministic inline request version; * the smallest quality-ladder output is used when no quality fits. */ requestImageMaxBytes?: number /** Provider-owned model-request retry policy; omission uses normal mode with five retries. */ retryPolicy?: RetryPolicyConfig }
- **[ast-signature-changed]** `packages/llm/llm-pi-ai/src/config.ts` — 签名变化: ResolvedPiAiProviderProfile
    旧: export interface ResolvedPiAiProviderProfile extends Omit<PiAiProviderProfile, 'apiKeyEnv' | 'retryPolicy' | 'models' | 'displayName'> { /** Harness route key and the `Models` collection key (the configuration dict key). */ provider: string /** Resolved display name for selectors and configuration surfaces. */ displayName: string /** Validated credential reference, when one is configured. */ apiKeyEnv?: CredentialRef /** Positive finite provider-idle interval after defaulting. */ streamIdleTimeoutMs: number /** Positive request-level base64 image payload bound after defaulting. */ maxRequestImageBytes: number /** Positive total-pixel request-version budget after defaulting. */ requestImagePixelBudget: number /** Positive raw request-version byte target after defaulting; the smallest quality-ladder output is used when no quality fits. */ requestImageMaxBytes: number /** Immutable retry policy captured with this provider route. */ retryPolicy: ResolvedRetryPolicy /** * The pi-ai provider containing this route's serviceable models. Absent when * a stored route cannot be constructed; its configuration remains editable. */ piProvider?: Provider /** First model diagnostic, or the route failure when no model diagnostic is available. */ catalogError?: string /** Per-model failures reported before attempting a request. */ modelErrors: ReadonlyMap<string, string> /** * Per-request output caps this profile explicitly configured, by model id. * The seam materializes one only into a request that names no cap of its * own, so a catalog capability must not appear here. */ configuredMaxTokens: ReadonlyMap<string, number> }
    新: export interface ResolvedPiAiProviderProfile extends Omit<PiAiProviderProfile, 'apiKeyEnv' | 'retryPolicy' | 'models' | 'displayName'> { /** Harness route key and the `Models` collection key (the configuration dict key). */ provider: string /** Resolved display name for selectors and configuration surfaces. */ displayName: string /** Validated credential reference, when one is configured. */ apiKeyEnv?: CredentialRef /** Positive finite provider-idle interval after defaulting. */ streamIdleTimeoutMs: number /** Positive request-level base64 image payload bound after defaulting. */ maxRequestImageBytes: number /** Positive request-level retained image count bound after defaulting. */ maxRequestImages: number /** Positive count-overflow offload step, at most {@link maxRequestImages}, after defaulting. */ imageOffloadCountQuantum: number /** Positive total-pixel request-version budget after defaulting. */ requestImagePixelBudget: number /** Positive raw request-version byte target after defaulting; the smallest quality-ladder output is used when no quality fits. */ requestImageMaxBytes: number /** Immutable retry policy captured with this provider route. */ retryPolicy: ResolvedRetryPolicy /** * The pi-ai provider containing this route's serviceable models. Absent when * a stored route cannot be constructed; its configuration remains editable. */ piProvider?: Provider /** First model diagnostic, or the route failure when no model diagnostic is available. */ catalogError?: string /** Per-model failures reported before attempting a request. */ modelErrors: ReadonlyMap<string, string> /** * Per-request output caps this profile explicitly configured, by model id. * The seam materializes one only into a request that names no cap of its * own, so a catalog capability must not appear here. */ configuredMaxTokens: ReadonlyMap<string, number> }
- **[ast-signature-changed]** `packages/llm/llm/src/attribution.ts` — 签名变化: AppIdentity
    旧: export interface AppIdentity { /** `User-Agent` product token (lowercase, hyphenated). */ product: string /** Product version; sourced from package metadata, never hand-copied. */ version: string /** Repository home URL of the app, used as the `User-Agent` comment. */ url: string }
    新: export interface AppIdentity { /** `User-Agent` product token (lowercase, hyphenated). */ product: string /** Product version; sourced from package metadata, never hand-copied. */ version: string /** Repository home URL of the app, used as the `User-Agent` comment. */ url: string /** RFC 9110 product token appended after the comment, such as `dsh-profile/web`. */ suffix?: string | undefined }
- **[ast-signature-changed]** `packages/util/error` — 签名变化: HarnessError
    旧: class(message:string,code:string,?options:ErrorOptions)
    新: class
- **[ast-signature-changed]** `packages/llm/llm/src/types.ts` — 签名变化: LlmModelInfo
    旧: export interface LlmModelInfo { /** Provider route that owns this model entry. */ provider: string /** Model id passed to {@link GenerateOptions.model}. */ id: string /** Human-readable model name for selectors. */ name: string /** Optional user-facing distinction from otherwise similar models. */ description?: string /** Accepted request modalities; absent means unknown, while an explicit omission is negative capability. */ inputModalities?: readonly ModelModality[] }
    新: export interface LlmModelInfo { /** Provider route that owns this model entry. */ provider: string /** Model id passed to {@link GenerateOptions.model}. */ id: string /** Human-readable model name for selectors. */ name: string /** Optional user-facing distinction from otherwise similar models. */ description?: string /** Accepted request modalities; absent means unknown, while an explicit omission is negative capability. */ inputModalities?: readonly ModelModality[] /** * Selector label advertised by catalog discovery; exact-route resolution * omits it, and no model request or Session event carries it. */ badge?: LlmModelBadge }
- **[ast-signature-changed]** `packages/llm/llm/src/types.ts` — 签名变化: GenerateOptions
    旧: export interface GenerateOptions { /** Registered provider route selecting the adapter instance. */ provider: string model: string /** Adapter-owned reasoning effort selected for this exact model. */ reasoningEffort?: ReasoningEffortId /** * Ordered conversation messages, exactly as the provider sees them. A * loop-built request passes the derived history (dsh-agent-loop), whose * leading system-role message carries the system prompt; a hand-built * one-shot may include identity-free user inputs. */ messages: RequestMessage[] /** * System prompt text for one-shot callers; adapters map it to the provider's * system slot ahead of `messages`. Loop-built requests leave it undefined. */ system?: string /** Tool schemas (adapters map to the provider's `tools` field). */ tools?: ToolSchema[] /** Session-folded tool history used for route projection; omission sends complete declarations without tool updates. */ toolHistory?: ToolHistory temperature?: number maxTokens?: number /** * Stop sequences: generation halts as soon as the model produces any one of * these strings (adapters map to the provider's stop field, e.g. OpenAI * `stop`). The stop string itself is not included in the output. */ stop?: string[] signal?: AbortSignal /** * Session identity stamped by the loop for request routing. Replay uses it * to separate cursors; adapters may map it to model-hidden transport metadata. */ sessionId?: Branded<'SessionId'> /** * Provider-neutral classification for an auxiliary model call. Adapters may * map the purpose to model-hidden transport metadata. Ordinary conversation * requests leave it unset. */ purpose?: 'compaction' | 'session-title' }
    新: export interface GenerateOptions<Purpose extends string = LlmRequestPurpose> { /** Registered provider route selecting the adapter instance. */ provider: string model: string /** Adapter-owned reasoning effort selected for this exact model. */ reasoningEffort?: ReasoningEffortId /** * Ordered conversation messages, exactly as the provider sees them. A * loop-built request passes the derived history (dsh-agent-loop), whose * leading system-role message carries the system prompt; a hand-built * one-shot may include identity-free user inputs. */ messages: RequestMessage[] /** * System prompt text for one-shot callers; adapters map it to the provider's * system slot ahead of `messages`. Loop-built requests leave it undefined. */ system?: string /** Tool schemas (adapters map to the provider's `tools` field). */ tools?: ToolSchema[] /** Session-folded tool history used for route projection; omission sends complete declarations without tool updates. */ toolHistory?: ToolHistory temperature?: number maxTokens?: number /** * Stop sequences: generation halts as soon as the model produces any one of * these strings (adapters map to the provider's stop field, e.g. OpenAI * `stop`). The stop string itself is not included in the output. */ stop?: string[] signal?: AbortSignal /** * Session identity stamped by the loop for request routing. Replay uses it * to separate cursors; adapters may map it to model-hidden transport metadata. */ sessionId?: Branded<'SessionId'> /** * Provider-neutral classification for an auxiliary model call. Adapters may * map the purpose to model-hidden transport metadata. Ordinary conversation * requests leave it unset. */ purpose?: Purpose }
- **[ast-signature-changed]** `packages/llm/llm/src/content.ts` — 签名变化: toolDeclarations
    旧: function(tools:readonly ToolSchema[] | undefined,mode:ToolUpdate,history:ToolHistory)
    新: function(history:ToolHistory)
- **[ast-signature-changed]** `packages/test-support/llm-replay` — 签名变化: texts
    旧: var
    新: var:unknown[]
- **[ast-signature-changed]** `packages/llm/llm/src/retry-policy.ts` — 签名变化: DEFAULT_RETRYABLE_CODES
    旧: var
    新: var:readonly BuiltinLlmFailureCode[]
- **[ast-signature-changed]** `packages/subagent/subagent/src/projection.ts` — 签名变化: projectionSchema
    旧: var
    新: var:z.ZodType<SubagentTimingProjection>
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
- **[ast-signature-changed]** `packages/plan/plan-mode/src/types.ts` — 签名变化: PlanUnitState
    旧: export interface PlanUnitState { /** Logged plan mode. */ active: boolean /** The selection's target mode; null when no selection is outstanding. */ wanted: boolean | null /** The latest plan command awaiting its paired settlement. */ running: { commandId: CommandId; wanted: boolean } | null /** Active state recorded by the latest `request/header`, or null. */ activeAtLastHeader: boolean | null }
    新: export interface PlanUnitState { /** Logged plan mode. */ active: boolean /** The selection's target mode; null when no selection is outstanding. */ wanted: boolean | null /** The latest plan command awaiting its paired settlement. */ running: { commandId: CommandId; wanted: boolean } | null /** Active state recorded by the latest `request/header`, or null. */ activeAtLastHeader: boolean | null /** Whether a logged `plan/mode` has ever activated plan mode in this Session. */ entered: boolean }
- **[ast-signature-changed]** `packages/ptc-runtime/ptc-runtime-node/src/launch.ts` — 签名变化: bootstrapArgs
    旧: function(fs:Pick<FileSystem, 'processPathFromHostPath'>,config:LaunchConfig,maxMessageBytes:number,persistent:any)
    新: function(fs:Pick<FileSystem, 'processPathFromHostPath'>,config:LaunchConfig,maxMessageBytes:number)
- **[ast-signature-changed]** `packages/ptc-runtime/ptc-runtime-node/src/launch.ts` — 签名变化: scriptBootstrapArgs
    旧: function(fs:Pick<FileSystem, 'processPathFromHostPath'>,bootstrapPath:string | undefined,maxMessageBytes:number,persistent:boolean)
    新: function(fs:Pick<FileSystem, 'processPathFromHostPath'>,bootstrapPath:string | undefined,maxMessageBytes:number)
- **[ast-signature-changed]** `packages/ptc-runtime/ptc-runtime/src/types.ts` — 签名变化: PtcRunRequest
    旧: export interface PtcRunRequest { /** * The program source, in the runtime's {@link ../index.ts | language}. It * follows the provider's programFormat: an async function body supports * top-level `await` and `return`; a REPL supports top-level declarations, * `await`, and a final expression. The completion value becomes * {@link PtcRunResult.value}. */ program: string /** * Object-identity owner for optional in-memory state. Omission requests a fresh * environment. Consumers must await runtime.release(owner) when the owner ends. * Stateless providers ignore this field; retained state is never durable. */ stateOwner?: object /** Host functions exposed to the program, one global object per namespace. */ bindings: PtcBindingNamespace[] /** Working directory in the mounted filesystem and subprocess execution world. */ cwd?: string /** * Elapsed execution budget in milliseconds. Omission uses provider defaults; * null requests no deadline. Providers validate and cap numeric budgets or reject unsupported choices. */ timeoutMs?: number | null /** Resolved authority for this execution. Providers without confinement reject an explicit policy. */ sandboxPolicy?: SandboxExecutionPolicy /** * Abort the run: the runtime stops the program (hard, even mid-loop) and * resolves with a {@link PtcRunFailure} of kind `'abort'`. In-flight * binding calls are the CALLER's to settle — the runtime only stops asking. */ signal?: AbortSignal }
    新: export interface PtcRunRequest { /** * The program source, in the runtime's {@link ../index.ts | language}. It * follows the provider's programFormat: an async function body supports * top-level `await` and `return`; REPL and Script programs support top-level * declarations, `await`, and a final expression, but not top-level `return`. * The Script provider lowers top-level await; its executionInstructions and * documentation define retained-binding semantics. The completion value * becomes {@link PtcRunResult.value}. */ program: string /** * Object-identity owner for optional in-memory state. Omission requests a fresh * environment. Consumers must await runtime.release(owner) when the owner ends. * Stateless providers ignore this field; retained state is never durable. */ stateOwner?: object /** Host functions exposed to the program, one global object per namespace. */ bindings: PtcBindingNamespace[] /** Working directory in the mounted filesystem and subprocess execution world. */ cwd?: string /** * Elapsed execution budget in milliseconds. Omission uses provider defaults; * null requests no deadline. Providers validate and cap numeric budgets or reject unsupported choices. */ timeoutMs?: number | null /** Resolved authority for this execution. Providers without confinement reject an explicit policy. */ sandboxPolicy?: SandboxExecutionPolicy /** * Abort the run: the runtime stops the program (hard, even mid-loop) and * resolves with a {@link PtcRunFailure} of kind `'abort'`. In-flight * binding calls are the CALLER's to settle — the runtime only stops asking. */ signal?: AbortSignal }
- **[ast-signature-changed]** `packages/ptc-runtime/ptc-runtime/src/types.ts` — 签名变化: PtcRunResult
    旧: export interface PtcRunResult { /** Applied file policy and observed denial, when the provider enforces file policy. */ sandbox?: PtcRunSandbox /** * The program's completion value (a return or final REPL expression), when it ran to * completion and the value crossed the runtime's lossless-JSON boundary. * Invalid or over-limit completions fail the run instead of substituting a * rendered string; a failed or value-less run leaves this absent. */ value?: PtcJsonValue /** * Captured text. Each source channel preserves emission order; interleaving * across independent channels is backend-dependent. Bounded only as part of * the outer result. */ logs: string[] /** Present iff the run failed; see {@link PtcRunFailure} for the taxonomy. */ error?: PtcRunFailure }
    新: export interface PtcRunResult { /** Applied file policy and observed denial, when the provider enforces file policy. */ sandbox?: PtcRunSandbox /** * The program's completion value (a return or final REPL/Script expression), when it ran to * completion and the value crossed the runtime's lossless-JSON boundary. * Invalid or over-limit completions fail the run instead of substituting a * rendered string; a failed or value-less run leaves this absent. */ value?: PtcJsonValue /** * Captured text. Each source channel preserves emission order; interleaving * across independent channels is backend-dependent. Bounded only as part of * the outer result. */ logs: string[] /** Present iff the run failed; see {@link PtcRunFailure} for the taxonomy. */ error?: PtcRunFailure }
- **[ast-signature-changed]** `packages/schedule/schedule/src/domain.ts` — 签名变化: ScheduleId
    旧: export type ScheduleId = Branded<'ScheduleId'>
    新: function(value:string)
- **[ast-signature-changed]** `packages/schedule/schedule/src/types.ts` — 签名变化: RecurringScheduleRecord
    旧: export type RecurringScheduleRecord = EveryScheduleRecord | DailyScheduleRecord | WeeklyScheduleRecord | CronScheduleRecord
    新: export type RecurringScheduleRecord = | EveryScheduleRecord | DailyScheduleRecord | WeeklyScheduleRecord | CronScheduleRecord | RRuleScheduleRecord
- **[ast-signature-changed]** `packages/schedule/schedule/src/types.ts` — 签名变化: ScheduleDeliveryReceipt
    旧: export interface ScheduleDeliveryReceipt { /** Canonical UTC target of the delivered occurrence. */ readonly scheduledAt: string /** Canonical UTC time sampled after Session persistence acknowledged delivery. */ readonly deliveredAt: string /** Identity of the delivered message, shared by tasks in one recurring batch. */ readonly messageId: MessageId }
    新: export interface ScheduleDeliveryReceipt { /** Canonical UTC target of the delivered occurrence. */ readonly scheduledAt: string /** Canonical UTC time sampled after Session persistence acknowledged delivery. */ readonly deliveredAt: string /** Identity of the delivered message, shared by tasks in one recurring batch. */ readonly messageId: MessageId /** Session that durably accepted the delivered message. */ readonly targetSessionId: SessionId }
- **[ast-signature-changed]** `packages/schedule/schedule/src/types.ts` — 签名变化: ScheduleCatalogEntry
    旧: export type ScheduleCatalogEntry = ScheduleRecord & { /** Session receiving this reminder when it becomes due. */ readonly sessionId: SessionId /** Inactive reminders remain visible but never schedule another delivery. */ readonly status: 'active' | 'inactive' /** Most recent durably acknowledged inbox delivery, when available. */ readonly lastDelivery?: ScheduleDeliveryReceipt }
    新: export type ScheduleCatalogEntry = ScheduleRecord & { /** Destination of the next delivery. */ readonly target: ScheduleTarget /** * Sessions told about later changes while their Agent is live: the creating and editing Agent Sessions and each * existing or reserved target Session. Sessions created by a `new` target are excluded. */ readonly involvedSessionIds: SessionId[] /** Only `active` tasks have a timer obligation; `paused` and `ended` tasks stay visible. */ readonly status: 'active' | 'paused' | 'ended' /** Canonical UTC creation time. */ readonly createdAt?: string /** Canonical UTC time of the latest stored change; editors send it back as `expectedUpdatedAt`. */ readonly updatedAt?: string /** * The latest delivery is queued or running in its reused target Session; a `new` target, whose deliveries run beside one * another, never sets it. */ readonly executionActive?: true /** End of the minimum delivery interval, present while it remains in the future. */ readonly deliveryFloorEndsAt?: string /** Most recent durably acknowledged inbox delivery, when available. */ readonly lastDelivery?: ScheduleDeliveryReceipt }
- **[ast-signature-changed]** `packages/schedule/schedule/src/types.ts` — 签名变化: ScheduleCreateRequest
    旧: export interface ScheduleCreateRequest { /** Non-empty reminder text. */ prompt: string /** Required task name of at most 120 characters, non-empty after trimming; names the card, detail heading, and task lists. */ title: string /** Relative one-shot delay in seconds. */ after_seconds?: number /** Absolute one-shot target. */ at?: AtInput /** Fixed recurrence interval in seconds. */ every_seconds?: number /** Daily wall-clock time in an explicit IANA zone. */ daily?: DailyInput /** Weekly wall-clock time and explicit ISO weekday set in an IANA zone. */ weekly?: WeeklyInput /** Five-field cron expression evaluated in an explicit IANA zone. */ cron?: CronInput }
    新: export interface ScheduleCreateRequest { /** Task name of at most 120 characters, non-empty after trimming. */ readonly title: string /** Instruction sent at each occurrence; non-empty after trimming. */ readonly prompt: string /** Authoritative typed timing with at least one future occurrence. */ readonly timing: ScheduleTiming /** Delivery destination; omission creates one Session at first delivery and reuses it. */ readonly target?: ScheduleTargetRequest }
- **[ast-signature-changed]** `packages/schedule/schedule/src/types.ts` — 签名变化: ScheduleListRequest
    旧: export interface ScheduleListRequest { /** Original Session binding. */ sessionId: SessionId }
    新: export interface ScheduleListRequest { /** `true` lists only active tasks; `false` lists only paused and ended tasks; omission lists all tasks. */ readonly active?: boolean /** Page size from 1 through 500; the default is 100. */ readonly limit?: number /** Number of sorted tasks to skip; the default is 0. */ readonly offset?: number }
- **[ast-signature-changed]** `packages/schedule/schedule/src/types.ts` — 签名变化: ScheduleDeliveryHistoryRequest
    旧: export interface ScheduleDeliveryHistoryRequest extends ScheduleDeleteRequest { /** Required safe-integer page size from 1 through 100. */ limit: number /** Message identity of the oldest entry in the previous page; excluded from this page. */ before?: MessageId }
    新: export interface ScheduleDeliveryHistoryRequest { /** Task whose saved deliveries are read. */ readonly id: ScheduleId /** Required safe-integer page size from 1 through 100. */ readonly limit: number /** Message identity of the oldest entry in the previous page; excluded from this page. */ readonly before?: MessageId }
- **[ast-signature-changed]** `packages/schedule/schedule/src/domain.ts` — 签名变化: ScheduleInputError
    旧: class(code:| 'invalid_prompt' | 'invalid_selector' | 'invalid_rule' | 'invalid_time_zone' | 'not_future' | 'time_out_of_range' | 'frequency_too_high' | 'subagent_session',message:string,?options:ErrorOptions)
    新: class(code:ScheduleInputErrorCode,message:string,?options:ErrorOptions)
- **[ast-signature-changed]** `packages/util/time/src/instant.ts` — 签名变化: resolveLocalInstant
    旧: function(parts:CalendarParts,timeZone:string)
    新: function(time:LocalCalendarTime | Temporal.PlainDateTime,timeZone:string)
- **[ast-signature-changed]** `packages/schedule/schedule/src/domain.ts` — 签名变化: decodeAfterRecord
    旧: function(value:unknown)
    新: function(value:Record<string, unknown>)
- **[ast-signature-changed]** `packages/schedule/schedule/src/domain.ts` — 签名变化: decodeAtRecord
    旧: function(value:unknown)
    新: function(value:Record<string, unknown>)
- **[ast-signature-changed]** `packages/schedule/schedule/src/domain.ts` — 签名变化: decodeEveryRecord
    旧: function(value:unknown)
    新: function(value:Record<string, unknown>)
- **[ast-signature-changed]** `packages/util/time/src/cron.ts` — 签名变化: cronDateMatch
    旧: function(parsed:ParsedCronExpression)
    新: function(parsed:CronFields)
- **[ast-signature-changed]** `packages/util/time/src/cron.ts` — 签名变化: cronTimes
    旧: function(parsed:ParsedCronExpression)
    新: function(parsed:CronFields,reverse:any)
- **[ast-signature-changed]** `packages/test-support/session-snapshot/src/suite.ts` — 签名变化: times
    旧: var:Temporal.PlainTime[]
    新: var
- **[ast-signature-changed]** `packages/util/time/src/cron.ts` — 签名变化: nextCronTarget
    旧: function(parsed:ParsedCronExpression,timeZone:string,floor:number)
    新: function(parsed:CronFields,timeZone:string,floor:number)
- **[ast-signature-changed]** `packages/util/time/src/cron.ts` — 签名变化: latestCronOccurrence
    旧: function(parsed:ParsedCronExpression,timeZone:string,decision:number,savedTarget:number)
    新: function(parsed:CronFields,timeZone:string,decision:number,savedTarget:number)
- **[ast-signature-changed]** `packages/util/time/src/cron.ts` — 签名变化: earliest
    旧: var
    新: var:number | undefined
- **[ast-signature-changed]** `packages/boot/plugin-manager` — 签名变化: unreachable
    旧: var:never
    新: var
- **[ast-signature-changed]** `packages/schedule/schedule/src/domain.ts` — 签名变化: renderReminderFraming
    旧: function(record:OneShotScheduleRecord)
    新: function(record:{ readonly id: ScheduleIdType; readonly prompt: string; readonly scheduledAt: string })
- **[ast-signature-changed]** `packages/schedule/schedule/src/domain.ts` — 签名变化: renderRecurringReminderBatchFraming
    旧: function(reminders:readonly { readonly record: RecurringScheduleRecord; readonly occurrenceAt: string }[])
    新: function(reminders:readonly { readonly record: { readonly id: ScheduleIdType; readonly prompt: string } readonly occurrenceAt: string }[])
- **[ast-signature-changed]** `packages/sdk/client/src/api.ts` — 签名变化: RunOptions
    旧: export interface RunOptions { /** Session id to run on; omitted mints a fresh session per call. */ sessionId?: string /** Observer invoked with every notification for this session tree, in wire order. */ onNotification?: (notification: HarnessNotification) => void }
    新: export interface RunOptions { /** Session id to run on; omitted mints a fresh session per call. */ sessionId?: string /** * Observe the input's Session-tree activity in wire order until completion. * The interval can include overlapping work from other inputs. */ onNotification?: (notification: HarnessNotification) => void }
- **[ast-signature-changed]** `packages/sdk/client/src/types.ts` — 签名变化: HarnessClientOptions
    旧: export interface HarnessClientOptions { /** Absolute or caller-relative dsh CLI module; omitted resolves this package's same-version dependency. */ dshBin?: string /** Named profile serving the SDK protocol (default `sdk`). */ profile?: string /** Ordered per-launch profile patches; relative paths resolve before spawn. */ patches?: string[] /** Explicit Harness home for this child; relative paths resolve before spawn. */ dshHome?: string /** Working directory for the dsh process itself. */ processCwd?: string /** * The complete child environment, read when {@link HarnessClient.start} * spawns. `undefined` reads the parent env at that time; passing an object * reads that object at spawn and replaces the parent environment entirely, so callers own * credential policy (see `scrubbedParentEnv` in `@deepseek-ai/dsh-subprocess` * for the shared scrub-then-merge base). */ env?: NodeJS.ProcessEnv /** Bound (ms) on the initial profile handshake (default 10000). */ initializeTimeoutMs?: number /** Per-request timeout (ms); `undefined` waits indefinitely (a turn can legitimately run long). */ requestTimeoutMs?: number /** Bound (ms) on the protocol `shutdown` exchange inside `close()` (default 1000). */ shutdownTimeoutMs?: number /** Grace (ms) for the runtime's stdin-EOF quiesce during `close()` (default 6000). */ disposeEofGraceMs?: number /** Termination confirmation window (ms) after SIGTERM/SIGKILL during `close()` (default 3000). */ disposeGraceMs?: number }
    新: export interface HarnessClientOptions { /** Answer or dismiss runtime questions; observe the signal to release host work on runtime cancellation. */ onUserQuestion?: (request: SdkUserQuestionRequest, context: { signal: AbortSignal }) => Promise<SdkUserQuestionResult> /** Absolute or caller-relative dsh CLI module; omitted resolves this package's same-version dependency. */ dshBin?: string /** Named profile serving the SDK protocol (default `sdk`). */ profile?: string /** Ordered per-launch profile patches; relative paths resolve before spawn. */ patches?: string[] /** Explicit Harness home for this child; relative paths resolve before spawn. */ dshHome?: string /** Working directory for the dsh process itself. */ processCwd?: string /** * The complete child environment, read when {@link HarnessClient.start} * spawns. `undefined` reads the parent env at that time; passing an object * reads that object at spawn and replaces the parent environment entirely, so callers own * credential policy (see `scrubbedParentEnv` in `@deepseek-ai/dsh-subprocess` * for the shared scrub-then-merge base). */ env?: NodeJS.ProcessEnv /** Bound (ms) on the initial profile handshake (default 10000). */ initializeTimeoutMs?: number /** Per-request timeout (ms); `undefined` waits indefinitely (a turn can legitimately run long). */ requestTimeoutMs?: number /** Bound (ms) on the protocol `shutdown` exchange inside `close()` (default 1000). */ shutdownTimeoutMs?: number /** Grace (ms) for the runtime's stdin-EOF quiesce during `close()` (default 6000). */ disposeEofGraceMs?: number /** Termination confirmation window (ms) after SIGTERM/SIGKILL during `close()` (default 3000). */ disposeGraceMs?: number }
- **[ast-signature-changed]** `packages/sdk/client/src/types.ts` — 签名变化: DeepSeekHarnessOptions
    旧: export interface DeepSeekHarnessOptions extends HarnessClientOptions { /** Workspace cwd recorded on every SDK-created session (default: the process cwd, else `process.cwd()`). */ cwd?: string /** Provider route for SDK-created agents (default `deepseek-official`). */ provider?: string /** Model for SDK-created agents (default `deepseek-v4-flash`). */ model?: string /** Adapter-owned reasoning effort for the selected provider/model route. */ reasoningEffort?: ReasoningEffortId /** Maximum output tokens for each conversation-model request. */ maxTokens?: number }
    新: export interface DeepSeekHarnessOptions extends HarnessClientOptions { /** Workspace cwd recorded on every SDK-created session (default: the process cwd, else `process.cwd()`). */ cwd?: string /** Provider route for SDK-created agents (default `deepseek-official`). */ provider?: string /** Model for SDK-created agents (default `deepseek-v4-flash`). */ model?: string /** Adapter-owned reasoning effort for the selected provider/model route. */ reasoningEffort?: ReasoningEffortId /** Maximum output tokens for each conversation-model request. */ maxTokens?: number /** Enable server approval requests; install client.onRequest() after client.start() and before harness.start(). */ approvalRequests?: boolean }
- **[ast-signature-changed]** `packages/sdk/client/src/types.ts` — 签名变化: RunResult
    旧: export interface RunResult { /** The session the activity ran on. */ sessionId: string /** Concatenated text of the interval's last assistant message (empty when none). */ finalResponse: string /** Every `session.event` payload for the root session, in wire order. */ events: SessionEvent[] /** Every notification for the root session and discovered descendants, in wire order. */ notifications: HarnessNotification[] }
    新: export interface RunResult { /** The session the activity ran on. */ sessionId: string /** Final assistant text (empty when absent), native state-only result text, or a failure diagnostic. */ finalResponse: string /** Model turn ending or native operation outcome; null when no terminal reason was recorded. */ finishReason: string | null /** Every `session.event` payload for the root session, in wire order. */ events: SessionEvent[] /** Every notification for the root session and discovered descendants, in wire order. */ notifications: HarnessNotification[] }
- **[ast-signature-changed]** `packages/sdk/protocol/src/transport.ts` — 签名变化: JsonRpcTransportPeer
    旧: export interface JsonRpcTransportPeer { /** * Send a request and await its response. * @param method - the JSON-RPC method name. * @param params - the request parameters object. * @returns the result; rejects with {@link JsonRpcResponseError} on an error * response, and with a plain `Error` on a write failure or closure. */ request(method: string, params: object): Promise<unknown> /** * Send a notification; omitted params produce no `params` member. * @param method - the JSON-RPC method name. * @param params - the optional notification parameters object. */ notify(method: string, params?: object): void }
    新: export interface JsonRpcTransportPeer { /** * Send a request and await its response. * @param method - the JSON-RPC method name. * @param params - the request parameters object. * @param signal - optional cancellation; removes the pending waiter, rejects on abort, and ignores late responses. * @returns the result; rejects with {@link JsonRpcResponseError} on an error * response, and with a plain `Error` on a write failure or closure. */ request(method: string, params: object, signal?: AbortSignal): Promise<unknown> /** * Send a notification; omitted params produce no `params` member. * @param method - the JSON-RPC method name. * @param params - the optional notification parameters object. */ notify(method: string, params?: object): void }
- **[ast-signature-changed]** `packages/sdk/protocol/src/types.ts` — 签名变化: InitializeParams
    旧: export interface InitializeParams { /** Working directory recorded on every SDK-created session's header. */ cwd: string /** Provider route every SDK-created agent runs on. */ provider: string /** Model name every SDK-created agent runs on (the server may mount a fallback adapter; see `HarnessSdkJsonRpcServer.initialize`). */ model: string /** Optional adapter-owned reasoning effort for the selected provider/model route. */ reasoningEffort?: ReasoningEffortId /** Optional positive output-token cap inherited by SDK-created agents and their in-process descendants. */ maxTokens?: number }
    新: export interface InitializeParams { /** Working directory recorded on every SDK-created session's header. */ cwd: string /** Enable server-to-client approval/request calls; omission leaves existing answerers in control. */ approvalRequests?: boolean /** Provider route every SDK-created agent runs on. */ provider: string /** Model name every SDK-created agent runs on (the server may mount a fallback adapter; see `HarnessSdkJsonRpcServer.initialize`). */ model: string /** Optional adapter-owned reasoning effort for the selected provider/model route. */ reasoningEffort?: ReasoningEffortId /** Optional positive output-token cap inherited by SDK-created agents and their in-process descendants. */ maxTokens?: number /** Host-provided capabilities; omission retains native in-process answerers. */ capabilities?: { userQuestions?: boolean } }
- **[ast-signature-changed]** `packages/sdk/protocol/src/types.ts` — 签名变化: SdkEncodedImageBlock
    旧: export interface SdkEncodedImageBlock { type: 'image' /** Canonical base64-encoded raster bytes. */ data: string /** Declared raster MIME type, verified during admission. */ mimeType: 'image/png' | 'image/jpeg' | 'image/webp' | 'image/gif' }
    新: export interface SdkEncodedImageBlock { type: 'image' /** Canonical base64-encoded raster bytes. */ data: string /** Declared raster MIME type, verified during admission. */ mimeType: 'image/png' | 'image/jpeg' | 'image/webp' | 'image/gif' /** Optional display name; never interpreted as a filesystem path. */ name?: string }
- **[ast-signature-changed]** `packages/sdk/protocol/src/types.ts` — 签名变化: HarnessSdkNotificationMap
    旧: export interface HarnessSdkNotificationMap { 'session.event': SessionEventNotification 'session.status': SessionStatusNotification 'subagent.started': SubagentStartedNotification 'subagent.finished': SubagentFinishedNotification }
    新: export interface HarnessSdkNotificationMap { 'user-question.cancelled': SdkUserQuestionCancelled 'session.event': SessionEventNotification 'session.status': SessionStatusNotification /** Completion of a command query, including model activity and automatic goal rounds it starts. */ 'session.query.completed': { sessionId: SessionId commandId: CommandExecution['commandId'] finalResponse: string finishReason: string } 'subagent.started': SubagentStartedNotification 'subagent.finished': SubagentFinishedNotification }
- **[ast-signature-changed]** `packages/sdk/protocol/src/types.ts` — 签名变化: HarnessSdkRequestMap
    旧: export interface HarnessSdkRequestMap { 'initialize': { params: InitializeParams; result: InitializeResult } 'session/prompt': { params: SessionPromptParams; result: SessionPromptResult } 'session/resume': { params: SessionResumeParams; result: Record<string, never> } 'session/wait': { params: SessionWaitParams; result: Record<string, never> } 'session/working-directory/get': { params: SessionWorkingDirectoryParams; result: SessionWorkingDirectoryResult } 'session/working-directory/set': { params: SessionWorkingDirectorySetParams; result: SessionWorkingDirectoryResult } 'shutdown': { params: undefined; result: Record<string, never> } }
    新: export interface HarnessSdkRequestMap { 'initialize': { params: InitializeParams; result: InitializeResult } 'session/prompt': { params: SessionPromptParams; result: SessionPromptResult } 'session/query': { params: SessionQueryParams; result: SessionQueryResult } 'session/resume': { params: SessionResumeParams; result: Record<string, never> } 'session/wait': { params: SessionWaitParams; result: Record<string, never> } 'session/working-directory/get': { params: SessionWorkingDirectoryParams; result: SessionWorkingDirectoryResult } 'session/working-directory/set': { params: SessionWorkingDirectorySetParams; result: SessionWorkingDirectoryResult } 'shutdown': { params: undefined; result: Record<string, never> } }
- **[ast-signature-changed]** `packages/sandbox/sandbox/src/roots.ts` — 签名变化: physical
    旧: var
    新: var:string
- **[ast-signature-changed]** `packages/experimental/client-ui-forge` — 签名变化: attributes
    旧: var:Record<string, string | number>
    新: var
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
- **[ast-signature-changed]** `packages/host/plugin-inventory` — 签名变化: diagnostic
    旧: var
    新: var:string | undefined
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
    旧: function(childId:SessionId,terminal:SubagentResult,continuable:any)
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
- **[ast-signature-changed]** `packages/terminal/terminal/src/types.ts` — 签名变化: TerminalBackend
    旧: export interface TerminalBackend { /** Stable type selected by {@link TerminalSpawnRequest.type}. */ readonly type: string /** Create an unpublished session or reject after cleaning partial resources; cleanup failure uses {@link TerminalBackendCleanupError}. */ spawn(spec: TerminalBackendSpawnSpec): Promise<TerminalBackendSession> }
    新: export interface TerminalBackend { /** Stable type selected by {@link TerminalSpawnRequest.type}. */ readonly type: string /** Create an unpublished session or reject after cleaning partial resources; cleanup failure uses `TerminalBackendCleanupError`. */ spawn(spec: TerminalBackendSpawnSpec): Promise<TerminalBackendSession> }
- **[ast-signature-changed]** `packages/test-support/client-runtime/src/access.ts` — 签名变化: allowAllAccessPlugin
    旧: var
    新: var:StaticAccessPlugin
- **[ast-signature-changed]** `packages/session-query/session-log-export/src/markdown.ts` — 签名变化: assistantText
    旧: function(event:Extract<SessionEvent, { type: 'assistant/message' }>)
    新: function(message:AssistantMessage)
- **[ast-signature-changed]** `packages/web/web-deepseek-api` — 签名变化: rule
    旧: var
    新: var:Rule
- **[ast-signature-changed]** `packages/experimental/liveshare-protocol/src/viewer-carrier.ts` — 签名变化: openStream
    旧: function(initial:readonly unknown[])
    新: var
- **[ast-signature-changed]** `packages/test-support/session-snapshot/src/suite.ts` — 签名变化: normalizedStringMappings
    旧: function(records:Record<string, unknown>[],freshRecords:Record<string, unknown>[],existingRecords:Record<string, unknown>[],freshContext:NormalizeContext,existingContext:NormalizeContext)
    新: function(records:Record<string, unknown>[],freshRecords:Record<string, unknown>[],existingRecords:Record<string, unknown>[],normalizedFresh:Record<string, unknown>[],normalizedExisting:Record<string, unknown>[])
- **[ast-signature-changed]** `packages/util/values` — 签名变化: indices
    旧: var:string[]
    新: var:number[] | undefined
- **[ast-signature-changed]** `packages/typert/protocol/src/types.ts` — 签名变化: TypertResourceDeclaration
    旧: export interface TypertResourceDeclaration { /** Top-level or first-object wire field holding one identity of the kind. */ readonly field: string }
    新: export type TypertResourceDeclaration = | { readonly field: string readonly resolve?: never } | { readonly field?: never /** * Called once before lookups resolve. It takes no receiver, so it reads only its * input. Returns one identity, or undefined when absent; throws or returns an * array to reject the call. */ resolve(this: void, input: TypertResourceResolveInput): string | undefined }
- **[ast-signature-changed]** `packages/typert/protocol/src/types.ts` — 签名变化: TypertResourceEntry
    旧: export interface TypertResourceEntry extends TypertResourceDeclaration { /** Registered resource kind. */ readonly kind: string }
    新: export type TypertResourceEntry = TypertResourceDeclaration & { /** Resource kind contributed by its owning domain. */ readonly kind: string }
- **[ast-signature-changed]** `packages/typert/protocol/src/types.ts` — 签名变化: TypertResourceRegistry
    旧: export interface TypertResourceRegistry { /** * Register one kind's default wire field for the calling fiber. Only the * domain that owns the kind registers it. * @param kind - merge-declared resource kind. * @param declaration - the kind's default wire field. * @returns disposer withdrawing the exact registration. * @throws Error when the kind is already registered or is `global`, the built-in resource kind. */ register(kind: TypertResourceKind, declaration: TypertResourceDeclaration): TypertDisposer /** * Look up one kind's declaration. * @param kind - resource kind. * @returns the live declaration, or `undefined` when unregistered. */ get(kind: string): TypertResourceDeclaration | undefined /** @returns a registration-order snapshot of registered kinds with their fields. */ entries(): readonly TypertResourceEntry[] /** * Observe later resource-kind changes. * @param listener - synchronous contained observer. * @returns disposer for this subscription. */ subscribe(listener: TypertRegistryListener): TypertDisposer }
    新: export interface TypertResourceRegistry { /** * Register one kind's default identity extraction for the calling fiber. Only the * domain that owns the kind registers it. * @param kind - merge-declared resource kind. * @param declaration - either a default wire field or a resolver, never both. * @returns disposer withdrawing the exact registration. * @throws Error when the kind is already registered or is `global`, the built-in resource kind. */ register(kind: TypertResourceKind, declaration: TypertResourceDeclaration): TypertDisposer /** * Look up one kind's declaration. * @param kind - resource kind. * @returns the live declaration, or `undefined` when unregistered. */ get(kind: string): TypertResourceDeclaration | undefined /** @returns a registration-order snapshot of registered kinds with their extraction declarations. */ entries(): readonly TypertResourceEntry[] /** * Observe later resource-kind changes. * @param listener - synchronous contained observer. * @returns disposer for this subscription. */ subscribe(listener: TypertRegistryListener): TypertDisposer }
- **[ast-signature-changed]** `packages/util/http-proxy/src/install.ts` — 签名变化: createPolicyDispatcher
    旧: function(policy:ProxyPolicy)
    新: function(policy:ProxyPolicy,options:DispatcherOptions)
- **[ast-signature-changed]** `packages/util/http-proxy/src/install.ts` — 签名变化: installGlobalProxy
    旧: function(policy:ProxyPolicy)
    新: function(policy:ProxyPolicy,options:DispatcherOptions)
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 签名变化: overlay
    旧: var:Record<string, string | undefined>
    新: var
- **[ast-signature-changed]** `packages/util/http-proxy/src/install.ts` — 签名变化: installProxyFromEnvironment
    旧: function(env:EnvLookup,report:(message: string) => void)
    新: function(env:EnvLookup,report:(message: string) => void,options:DispatcherOptions)
- **[ast-signature-changed]** `packages/util/native-command/src/host-environment.ts` — 签名变化: isWsl
    旧: function(internals:PathOpenerInternals)
    新: function(facts:HostEnvironmentFacts)
- **[ast-signature-changed]** `packages/util/package-manifest/src/types.ts` — 签名变化: DshPackageManifest
    旧: export interface DshPackageManifest { /** Published npm package name. */ name: string /** Published npm package version. */ version: string /** Package summary for discovery and display. */ description?: string /** SVG, PNG, JPEG, or WebP file relative to this manifest's directory, at most 256 KiB and contained there after realpath resolution. */ icon?: string /** Prevent npm publication, for example for local profile projects. */ private?: boolean /** Packages installed alongside this package. */ dependencies?: Record<string, string> /** Compatible versions of packages supplied by the consuming project. */ peerDependencies?: Record<string, string> /** Runtime requirements; DSH compatibility is declarative until a reader enforces it. */ engines?: DshEnginesManifest /** DSH-specific author declarations. */ dsh?: DshManifest }
    新: export interface DshPackageManifest { /** Published npm package name. */ name: string /** Published npm package version. */ version: string /** Package summary for discovery and display. */ description?: string /** SVG, PNG, JPEG, or WebP file relative to this manifest's directory, at most 256 KiB and contained there after realpath resolution. */ icon?: string /** Prevent npm publication, for example for local profile projects. */ private?: boolean /** Packages installed alongside this package. */ dependencies?: Record<string, string> /** Packages that may be absent when installation or platform checks skip them. */ optionalDependencies?: Record<string, string> /** Compatible versions of packages supplied by the consuming project. */ peerDependencies?: Record<string, string> /** Runtime requirements; DSH compatibility is declarative until a reader enforces it. */ engines?: DshEnginesManifest /** DSH-specific author declarations. */ dsh?: DshManifest }
- **[ast-signature-changed]** `packages/util/package-manifest/src/types.ts` — 签名变化: DshBundleManifest
    旧: export interface DshBundleManifest { /** One patch file path, or an ordered list applied in sequence, each relative to the declaring package root. */ patch: string | string[] }
    新: export interface DshBundleManifest { /** Supported Node Host platform names; omission allows every operating system. */ platforms?: string[] /** One patch file path, or an ordered list applied in sequence, each relative to the declaring package root. */ patch: string | string[] /** Show the bundle in GUI lists before the profile enables or installs it; omission means true. */ listedByDefault?: boolean }
- **[ast-signature-changed]** `packages/util/plugin-market-index/src/types.ts` — 签名变化: MarketPluginMetadata
    旧: export interface MarketPluginMetadata { readonly category?: string /** Free-form strings, conventionally from package keywords; absent input becomes an empty array. */ readonly keywords: readonly string[] readonly labels: readonly string[] readonly sortKeys: Readonly<Record<string, number>> }
    新: export interface MarketPluginMetadata { readonly category?: string /** Free-form strings, conventionally from package keywords; absent or null input becomes an empty array. */ readonly keywords: readonly string[] readonly labels: readonly string[] /** Unavailable values (absent or null in JSON) are omitted; zero remains a measured value. */ readonly sortKeys: Readonly<Record<string, number>> }
- **[ast-signature-changed]** `packages/web/tool-web/src/search.ts` — 签名变化: applyWebSearchTool
    旧: function(ctx:Context,maxResults:number,maxQueries:number,timeoutMs:number,fetchEnabled:boolean)
    新: function(ctx:Context,maxResults:number,maxQueries:number,summaryMaxChars:number,timeoutMs:number,fetchEnabled:boolean)
- **[ast-signature-changed]** `packages/web/web-deepseek-api/src/fetch.ts` — 签名变化: DeepSeekFetchApiOptions
    旧: export interface DeepSeekFetchApiOptions extends DeepSeekWebAuth { /** API base including its path prefix; `/fetch` is appended. */ baseURL: string }
    新: export interface DeepSeekFetchApiOptions { /** Ordered authentication sources of the fetch; `/fetch` is appended to the base of the source sent. */ auth: DeepSeekWebAuth /** Settings that endpoint failures of the fetch name. */ guidance: DeepSeekWebGuidance }
- **[ast-signature-changed]** `packages/web/web-deepseek-api/src/search.ts` — 签名变化: DeepSeekSearchApiOptions
    旧: export interface DeepSeekSearchApiOptions extends DeepSeekWebAuth { /** API base including its path prefix; `/search` is appended. */ baseURL: string /** Results requested per search, from 1 through 50; a smaller request bound wins. */ count: number /** Read the user question that triggered the search; undefined or blank sends none. */ originalQuestion?: () => string | undefined }
    新: export interface DeepSeekSearchApiOptions { /** Ordered authentication sources of the search; `/search` is appended to the base of the source sent. */ auth: DeepSeekWebAuth /** Settings that endpoint failures of the search name. */ guidance: DeepSeekWebGuidance /** Results requested per search, from 1 through 50; a smaller request bound wins. */ count: number /** Most Search requests this provider starts in any one-second window. */ requestsPerSecond: number /** Read the user question that triggered the search; undefined or blank sends none. */ originalQuestion?: () => string | undefined }
- **[ast-signature-changed]** `packages/web/web-fetch-http/src/provider.ts` — 签名变化: HttpFetchProvider
    旧: class(limits:HttpFetchLimits,resolveAddresses:HttpFetchResolver)
    新: class(limits:HttpFetchLimits)
- **[ast-signature-changed]** `packages/web/web-search-deepseek/src/provider.ts` — 签名变化: DeepSeekSearchProviderOptions
    旧: export interface DeepSeekSearchProviderOptions { /** * Resolve the DeepSeek account token for one search endpoint. A token takes * precedence over every API key and is sent only as `x-dsh-auth-token`; * `undefined` selects API-key authentication. */ resolveAccountToken?: (endpoint: string) => Promise<string | undefined> /** Literal DeepSeek API key; when present it wins over {@link resolveApiKey}. */ apiKey?: string /** Resolve the current DeepSeek API key for one search operation. */ resolveApiKey?: () => Promise<string | undefined> /** Credential reference named by missing-credential diagnostics. */ apiKeyEnv?: CredentialRef /** Endpoint base; `/messages` is appended. */ baseURL: string /** Anthropic-format model name. */ model: string /** `anthropic-version` header value. */ apiVersion: string /** Upper bound on generated tokens for the Messages request. */ maxTokens: number /** Maximum `web_search` server-tool uses per request. */ maxUses: number /** * Record the exact secret-free request immediately before dispatch. A throw * prevents dispatch so model-visible auxiliary input cannot escape logging. */ recordRequest?: (request: DeepSeekSearchLlmRequest) => void }
    新: export interface DeepSeekSearchProviderOptions { /** * Resolve the DeepSeek account token for one search endpoint. A token takes * precedence over every API key and is sent only as `x-dsh-auth-token`; * `undefined` selects API-key authentication. */ resolveAccountToken?: (endpoint: string) => Promise<string | undefined> /** Invalidate the exact account token rejected by HTTP 401; failures must not replace the search error. */ rejectAccountToken?: (token: string) => Promise<void> /** Literal DeepSeek API key; when present it wins over {@link resolveApiKey}. */ apiKey?: string /** Resolve the current DeepSeek API key for one search operation. */ resolveApiKey?: () => Promise<string | undefined> /** Credential reference named by missing-credential diagnostics. */ apiKeyEnv?: CredentialRef /** Endpoint base; `/messages` is appended. */ baseURL: string /** Anthropic-format model name. */ model: string /** `anthropic-version` header value. */ apiVersion: string /** Upper bound on generated tokens for the Messages request. */ maxTokens: number /** Maximum `web_search` server-tool uses per request. */ maxUses: number /** * Record the exact secret-free request immediately before dispatch. A throw * prevents dispatch so model-visible auxiliary input cannot escape logging. */ recordRequest?: (request: DeepSeekSearchLlmRequest) => void }
- **[ast-signature-changed]** `packages/web/web-search-deepseek/src/provider.ts` — 签名变化: SearchAuth
    旧: interface SearchAuth { /** `account` for a DeepSeek account token, `api-key` for an API key. */ readonly kind: 'account' | 'api-key' /** Headers carrying the credential. */ readonly headers: Readonly<Record<string, string>> }
    新: interface SearchAuth { /** `account` for a DeepSeek account token, `api-key` for an API key. */ readonly kind: 'account' | 'api-key' /** Headers carrying the credential. */ readonly headers: Readonly<Record<string, string>> /** Request-bound invalidation, present only when an account token was sent. */ readonly reject?: () => Promise<void> }
- **[ast-signature-changed]** `packages/web/web/src/types.ts` — 签名变化: WebSearchRequest
    旧: export interface WebSearchRequest { readonly query: string /** * Upper bound on returned sources; the seam truncates to it. Omitted = no * bound. `dsh-tool-web` always sets it. A provider whose API supports a * result-count control (Exa's `numResults`) should apply it at the request * layer as a cost/latency optimization; the seam enforces the bound * regardless. */ readonly maxResults?: number }
    新: export interface WebSearchRequest { readonly query: string /** * Upper bound on returned sources; the seam truncates to it. Omitted = no * bound. `dsh-tool-web` always sets it. A provider whose API supports a * result-count control (the DeepSeek Search API's `count`) should apply it * at the request layer as a cost/latency optimization; the seam enforces the * bound regardless. */ readonly maxResults?: number }
- **[ast-signature-changed]** `packages/web/web/src/types.ts` — 签名变化: WebSearchSource
    旧: export interface WebSearchSource { readonly url: string readonly title?: string readonly snippet?: string /** Publication/crawl timestamp as a provider-supplied ISO-8601 string. */ readonly publishedAt?: string }
    新: export interface WebSearchSource { readonly url: string readonly title?: string /** Short excerpt suited to display. */ readonly snippet?: string /** Longer excerpt suited to model reading; consumers bound its length. */ readonly summary?: string /** Publication/crawl timestamp as a provider-supplied ISO-8601 string. */ readonly publishedAt?: string }
- **[ast-signature-changed]** `packages/web/web/src/types.ts` — 签名变化: WebSearchProvider
    旧: export interface WebSearchProvider { readonly id: string /** Cheap local usability check; must not make network calls. */ available(): boolean /** Run one search; honor `signal` for cancellation. */ search(request: WebSearchRequest, signal?: AbortSignal): Promise<WebSearchResult> }
    新: export interface WebSearchProvider { readonly id: string /** Display name of this provider; consumers display `id` when it is omitted. */ readonly title?: string /** * What a provider picker shows under this provider when it is selected: what the provider * is suited for and what it costs or cannot do. Translations are keyed by lowercase language * id with a required English entry; consumers show nothing when it is omitted. */ readonly description?: LocalizedText /** Cheap local usability check; must not make network calls. */ available(): boolean /** * Whether a search made for a model request on the `llmProvider` chat route has a * credential to send. Checks configuration only and must not make network calls. * Omitted = ready. * @param llmProvider - the provider route id of the model request, when known. * @returns false when that request's searches could not authenticate. */ ready?(llmProvider: string | undefined): Promise<boolean> /** Run one search; honor `signal` for cancellation. */ search(request: WebSearchRequest, signal?: AbortSignal): Promise<WebSearchResult> }
- **[ast-signature-changed]** `packages/web/web/src/types.ts` — 签名变化: WebFetchProvider
    旧: export interface WebFetchProvider { readonly id: string /** Cheap local usability check; must not make network calls. */ available(): boolean /** Retrieve one URL; honor `signal` for cancellation. */ fetch(request: WebFetchRequest, signal?: AbortSignal): Promise<WebFetchResult> }
    新: export interface WebFetchProvider { readonly id: string /** Display name of this provider; consumers display `id` when it is omitted. */ readonly title?: string /** * What a provider picker shows under this provider when it is selected: what the provider * is suited for and what it costs or cannot do. Translations are keyed by lowercase language * id with a required English entry; consumers show nothing when it is omitted. */ readonly description?: LocalizedText /** Cheap local usability check; must not make network calls. */ available(): boolean /** * Whether a fetch made for a model request on the `llmProvider` chat route has a * credential to send. Checks configuration only and must not make network calls. * Omitted = ready. * @param llmProvider - the provider route id of the model request, when known. * @returns false when that request's fetches could not authenticate. */ ready?(llmProvider: string | undefined): Promise<boolean> /** Retrieve one URL; honor `signal` for cancellation. */ fetch(request: WebFetchRequest, signal?: AbortSignal): Promise<WebFetchResult> }
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/code-file-types.ts` — 签名变化: FILE_NAME_TYPES
    旧: var:Readonly<Record<string, CodeFileType>>
    新: var:ReadonlyMap<string, CodeFileType>
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/markdown/render.tsx` — 签名变化: imageSource
    旧: function(url:string,pathImages:MarkdownPathImages | undefined)
    新: function(url:string,pathImages:MarkdownPathImages | undefined,load:number)
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/markdown/render.tsx` — 签名变化: MarkdownPathImages
    旧: export interface MarkdownPathImages { /** * Resolve one authored image destination. * @param value - The destination exactly as the markdown author wrote it. * @returns A displayable absolute URL, or undefined when the destination * names no displayable image — it then stays inert alt text. */ resolve(value: string): string | undefined }
    新: export interface MarkdownPathImages { /** * Resolve one authored image destination. * @param value - The destination exactly as the markdown author wrote it. * @returns A displayable absolute URL, or undefined when the destination * names no displayable image — it then stays inert alt text. The renderer * appends a per-mount `load` query parameter to `api/file` route results. */ resolve(value: string): string | undefined }
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/markdown/render.tsx` — 签名变化: MarkdownFileMentions
    旧: export interface MarkdownFileMentions { /** * Resolve one inline-code token. * @param value - The authored token, exactly as written. * @returns The opener with its accessible label and full-path title, or * undefined when the token names no known file — it then stays inert code. */ resolve(value: string): { open: () => void; label: string; title: string } | undefined }
    新: export interface MarkdownFileMentions { /** * Resolve one inline-code token. * @param value - The authored token, exactly as written. * @returns The opener with its accessible label and full-path title, or * undefined when the token names no known file — it then stays inert code. */ resolve(value: string): { open: () => void contextMenuProps?: Pick<HTMLAttributes<HTMLElement>, 'onContextMenu' | 'onKeyDown' | 'tabIndex'> label: string title: string } | undefined }
- ★ **[ast-signature-changed]** `packages/client/ui-primitives/src/markdown/render.tsx` — 签名变化: MarkdownRenderContext
    旧: export interface MarkdownRenderContext { /** Streaming arm: fences highlight incrementally as they grow; TeX (including ```math fences) stays literal until the settled pass. */ readonly streaming: boolean /** Localized fence copy-button labels. */ readonly labels: MarkdownLabels /** Inside a blockquote's children: tables there always fill the quote's width. */ readonly inBlockquote?: boolean /** Inline-code file mentions; absent wherever no opener vocabulary exists. */ readonly fileMentions: MarkdownFileMentions | undefined /** Local-path image vocabulary; absent wherever no rewriting owner exists. */ readonly pathImages: MarkdownPathImages | undefined /** Inside an anchor's children: interactive mentions must not nest there. */ readonly inLink?: boolean /** Reference targets visible to this pass. */ readonly targets: ReferenceTargets /** Footnote identifiers in first-reference order; a footnote's number is its 1-based index here. */ readonly footnoteOrder: string[] /** References rendered per identifier; drives the section's back-reference count. */ readonly footnoteCounts: Map<string, number> }
    新: export interface MarkdownRenderContext { /** Streaming arm: fences highlight incrementally as they grow; TeX (including ```math fences) stays literal until the settled pass. */ readonly streaming: boolean /** Localized fence copy-button labels. */ readonly labels: MarkdownLabels /** Inside a blockquote's children: tables there always fill the quote's width. */ readonly inBlockquote?: boolean /** Inline-code file mentions; absent wherever no opener vocabulary exists. */ readonly fileMentions: MarkdownFileMentions | undefined /** Local-path image vocabulary; absent wherever no rewriting owner exists. */ readonly pathImages: MarkdownPathImages | undefined /** Raw HTML renders nothing instead of literal text. */ readonly omitHtml: boolean /** Inside an anchor's children: interactive mentions must not nest there. */ readonly inLink?: boolean /** Reference targets visible to this pass. */ readonly targets: ReferenceTargets /** Footnote identifiers in first-reference order; a footnote's number is its 1-based index here. */ readonly footnoteOrder: string[] /** References rendered per identifier; drives the section's back-reference count. */ readonly footnoteCounts: Map<string, number> }
- **[ast-signature-changed]** `packages/experimental/inspector/src/host/bridge/controller.ts` — 签名变化: InspectorOptions
    旧: export interface InspectorOptions { /** Loopback address used by the Worker HTTP and WebSocket endpoint. */ readonly host?: '127.0.0.1' /** First port to bind; occupied ports advance until one is available. */ readonly port?: number /** Additional exact browser origins admitted to the Client ingest socket. */ readonly clientOrigins?: readonly string[] /** Whether to observe calls made through the current global fetch function. */ readonly captureFetch?: boolean /** Maximum request-body prefix retained for one fetch. */ readonly maxRequestBodyBytes?: number /** Maximum response-body prefix retained for one fetch. */ readonly maxResponseBodyBytes?: number /** Maximum raw bytes encoded into one body observation. */ readonly maxBodyChunkBytes?: number /** Maximum total request and response body bytes retained by the Worker. */ readonly maxJournalBytes?: number /** Maximum active and completed fetch requests retained by the Worker. */ readonly maxRetainedRequests?: number /** Maximum encoded bytes accepted in one source transport frame. */ readonly maxSourceFrameBytes?: number /** Maximum observation records accepted in one source batch. */ readonly maxSourceRecordsPerFrame?: number /** Maximum records waiting in one producer queue. */ readonly maxQueuedRecords?: number /** Maximum encoded bytes waiting in one producer queue. */ readonly maxQueuedBytes?: number /** Maximum time allowed for the Worker to become ready. */ readonly startupTimeoutMs?: number /** Grace period before a stopping Worker is terminated. */ readonly stopTimeoutMs?: number /** Initial upper bound for randomized Client reconnect delay. */ readonly clientReconnectBaseMs?: number /** Maximum upper bound for randomized Client reconnect delay. */ readonly clientReconnectMaxMs?: number /** Deadline for one Worker-to-Client Runtime or Sources request. */ readonly clientRuntimeTimeoutMs?: number /** Deadline for one non-CDP semantic query. */ readonly queryTimeoutMs?: number /** Maximum live object handles retained per Client Runtime session. */ readonly maxClientRuntimeObjects?: number /** Maximum descriptors returned by one Client property request. */ readonly maxClientRuntimeProperties?: number /** Maximum encoded bytes read for one Client script or source map. */ readonly maxClientSourceBytes?: number /** Maximum Context and Fiber nodes retained in one realm snapshot. */ readonly maxCordisNodes?: number /** Disconnected Cordis snapshots retained after their live realm closes. */ readonly maxDisconnectedCordisTrees?: number }
    新: export interface InspectorOptions { /** Loopback address used by the Worker HTTP and WebSocket endpoint. */ readonly host?: '127.0.0.1' /** First port to bind; occupied ports advance until one is available. */ readonly port?: number /** Additional exact browser origins admitted to the Client ingest socket. */ readonly clientOrigins?: readonly string[] /** Whether to observe calls made through the current global fetch function. */ readonly captureFetch?: boolean /** Maximum request-body prefix retained for one fetch. */ readonly maxRequestBodyBytes?: number /** Maximum response-body prefix retained for one fetch. */ readonly maxResponseBodyBytes?: number /** Maximum raw bytes encoded into one body observation. */ readonly maxBodyChunkBytes?: number /** Maximum total request and response body bytes retained by the Worker. */ readonly maxJournalBytes?: number /** Maximum active and completed fetch requests retained by the Worker. */ readonly maxRetainedRequests?: number /** Maximum encoded bytes accepted in one source transport frame; values below 5121 leave no Cordis snapshot budget and fail. */ readonly maxSourceFrameBytes?: number /** Maximum observation records accepted in one source batch. */ readonly maxSourceRecordsPerFrame?: number /** Maximum records waiting in one producer queue. */ readonly maxQueuedRecords?: number /** Maximum encoded bytes waiting in one producer queue. */ readonly maxQueuedBytes?: number /** Maximum time allowed for the Worker to become ready. */ readonly startupTimeoutMs?: number /** Grace period before a stopping Worker is terminated. */ readonly stopTimeoutMs?: number /** Initial upper bound for randomized Client reconnect delay. */ readonly clientReconnectBaseMs?: number /** Maximum upper bound for randomized Client reconnect delay. */ readonly clientReconnectMaxMs?: number /** Deadline for one Worker-to-Client Runtime or Sources request. */ readonly clientRuntimeTimeoutMs?: number /** Deadline for one non-CDP semantic query. */ readonly queryTimeoutMs?: number /** Maximum live object handles retained per Client Runtime session. */ readonly maxClientRuntimeObjects?: number /** Maximum descriptors returned by one Client property request. */ readonly maxClientRuntimeProperties?: number /** Maximum encoded bytes read for one Client script or source map. */ readonly maxClientSourceBytes?: number /** Maximum Context and Fiber nodes retained in one realm snapshot. */ readonly maxCordisNodes?: number /** Disconnected Cordis snapshots retained after their live realm closes. */ readonly maxDisconnectedCordisTrees?: number }
- **[config-field-type-changed]** `config:@deepseek-ai/dsh-agent-tool-presentation` — 配置字段类型变化: mode: ToolPresentationMode -> 'native' | 'ptc'
- **[config-field-type-changed]** `config:@deepseek-ai/dsh-ptc-runtime-node` — 配置字段类型变化: executionMode: ?'per-call' | 'persistent-in-memory' -> ?'per-call' | 'persistent-in-memory' | 'vm-script'

## info

- **[package-added]** `packages/client/ui-account-notifications` — 新增包
- **[package-added]** `packages/client/ui-agent-team` — 新增包
- **[package-added]** `packages/client/ui-context-menu` — 新增包
- **[package-added]** `packages/client/ui-file-actions` — 新增包
- **[package-added]** `packages/client/ui-file-drag` — 新增包
- **[package-added]** `packages/core/tool-executor-native` — 新增包
- **[package-added]** `packages/core/tool-executor-ptc` — 新增包
- **[package-added]** `packages/deliverables/deliverable-file-references` — 新增包
- **[package-added]** `packages/document/office-kit` — 新增包
- **[package-added]** `packages/document/tool-office` — 新增包
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
- **[package-added]** `packages/experimental/terminal-panel` — 新增包
- **[package-added]** `packages/experimental/tool-subagent-oar` — 新增包
- **[package-added]** `packages/fs/fs-patch` — 新增包
- **[package-added]** `packages/mcp/mcp-manager` — 新增包
- **[package-added]** `packages/session/message-quotes` — 新增包
- **[package-added]** `packages/team/agent-team` — 新增包
- **[package-added]** `packages/team/tool-agent-team` — 新增包
- **[package-added]** `packages/test-support/tool-testkit` — 新增包
- **[package-added]** `packages/util/error` — 新增包
- **[package-added]** `packages/util/file-drag` — 新增包
- **[package-added]** `packages/util/official-bundles` — 新增包
- **[package-added]** `packages/util/plugin-detail` — 新增包
- **[package-added]** `packages/util/ripgrep` — 新增包
- **[doc-added]** `docs/cookbook/reviewing-ui-design.md` — 新增文档
- **[doc-added]** `docs/cookbook/reviewing-ui-design.zh.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-13-liveshare-share-viewer-principal.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-13-liveshare-share-viewer-principal.zh.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-19-session-team-mode.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-19-session-team-mode.zh.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-22-action-card-status.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-22-action-card-status.zh.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-25-skill-catalog-incomplete.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-25-skill-catalog-incomplete.zh.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-27-retry-control-input.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-27-retry-control-input.zh.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-27-subagent-settlement-attribution.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-10-27-subagent-settlement-attribution.zh.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-11-02-subagent-catalog-names.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-11-02-subagent-catalog-names.zh.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-11-02-team-task-owner-names.md` — 新增文档
- **[doc-added]** `docs/persistence-changes/2026-11-02-team-task-owner-names.zh.md` — 新增文档
- ★ **[doc-added]** `docs/subsystems/forge.md` — 新增文档
- ★ **[doc-added]** `docs/subsystems/forge.zh.md` — 新增文档
- ★ **[doc-added]** `docs/subsystems/liveshare.md` — 新增文档
- ★ **[doc-added]** `docs/subsystems/liveshare.zh.md` — 新增文档
- ★ **[doc-added]** `docs/subsystems/office-kit.md` — 新增文档
- ★ **[doc-added]** `docs/subsystems/office-kit.zh.md` — 新增文档
- **[doc-added]** `docs/ui-design-review-cases.md` — 新增文档
- **[doc-added]** `docs/ui-design-review-cases.zh.md` — 新增文档
- **[doc-added]** `docs/user/guide/desktop-uninstall-cleanup.md` — 新增文档
- **[doc-added]** `docs/user/guide/desktop-uninstall-cleanup.zh.md` — 新增文档
- **[config-scope-added]** `config:@deepseek-ai/dsh-action-cards` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-agent-team` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-client-ui-account-notifications` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-client-ui-trajectory` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-deepseek-account` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-experimental-client-ui-forge` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-experimental-forge` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-experimental-forge-github` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-experimental-forge-session` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-experimental-subagent-oar` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-experimental-tool-subagent-oar` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-mcp-manager` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-office-kit` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-terminal-panel` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-tool-agent-team` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-tool-executor-ptc` — 新增可配置包
- **[config-scope-added]** `config:@deepseek-ai/dsh-tool-office` — 新增可配置包
- ★ **[config-scope-added]** `config:@deepseek-ai/dsh-tool-subagent-control` — 新增可配置包
- **[ast-export-added]** `packages/api/session-controller` — 新增导出: resolveSessionResource
- **[ast-export-added]** `packages/api/session-controller` — 新增导出: sessionParameter
- **[ast-export-added]** `packages/api/terminal-controller` — 新增导出: TerminalLaunch
- **[ast-export-added]** `packages/api/terminal-controller` — 新增导出: terminalTitle
- **[ast-export-added]** `packages/api/terminal-controller` — 新增导出: controlled
- **[ast-export-added]** `packages/api/terminal-controller` — 新增导出: historyFile
- **[ast-export-added]** `packages/api/terminal-controller` — 新增导出: keepsHistory
- **[ast-export-added]** `packages/attachment/attachment` — 新增导出: isEncodedImage
- **[ast-export-added]** `packages/attachment/attachment` — 新增导出: isStoredImage
- **[ast-export-added]** `packages/attachment/attachment` — 新增导出: assertMessageImages
- **[ast-export-added]** `packages/boot/app-boot` — 新增导出: HOME_LAYER_ENDPOINT_NAMES
- **[ast-export-added]** `packages/boot/app-boot` — 新增导出: isHomeLayerRouteName
- **[ast-export-added]** `packages/boot/app-boot` — 新增导出: homeLayerName
- **[ast-export-added]** `packages/boot/app-boot` — 新增导出: homeEnv
- **[ast-export-added]** `packages/boot/app-boot` — 新增导出: priorData
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: DETAIL_FILE_PATH
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: INSPECT_FIELDS
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: UpdateTarget
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: UpdatePlan
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: updateRefusal
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: RegistryAnswer
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: mapConcurrent
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: alternative
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: installOperationTarget
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: exemptionOperationIdentity
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: diagnosticVersion
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: platformError
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: listedByDefault
- **[ast-export-added]** `packages/boot/plugin-manager` — 新增导出: listingDiagnostic
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
- ★ **[ast-export-added]** `packages/client/modules` — 新增导出: PACKAGE_ASSET_PATH
- ★ **[ast-export-added]** `packages/client/modules` — 新增导出: transforStreamBody
- ★ **[ast-export-added]** `packages/client/modules` — 新增导出: heldBody
- ★ **[ast-export-added]** `packages/client/modules` — 新增导出: entriesByName
- ★ **[ast-export-added]** `packages/client/modules` — 新增导出: asset
- **[ast-export-added]** `packages/client/ui-slots` — 新增导出: HocRenderOpts
- **[ast-export-added]** `packages/client/ui-slots` — 新增导出: HocKeysOf
- **[ast-export-added]** `packages/client/ui-slots` — 新增导出: HocShare
- **[ast-export-added]** `packages/client/ui-slots` — 新增导出: hocCell
- **[ast-export-added]** `packages/client/ui-trajectory` — 新增导出: LiveResults
- **[ast-export-added]** `packages/client/ui-trajectory` — 新增导出: emptyResults
- **[ast-export-added]** `packages/client/ui-trajectory` — 新增导出: SessionToolResults
- **[ast-export-added]** `packages/client/ui-trajectory` — 新增导出: _cancellation
- **[ast-export-added]** `packages/context/harness-dev-context` — 新增导出: legacyPromptProjectionHandle
- **[ast-export-added]** `packages/context/time-context` — 新增导出: projectionReady
- **[ast-export-added]** `packages/context/time-context` — 新增导出: timeContextProjectionHandle
- **[ast-export-added]** `packages/context/tmux-context` — 新增导出: tmuxContextProjectionHandle
- **[ast-export-added]** `packages/core/agent-loop` — 新增导出: AgentInitializationOptions
- **[ast-export-added]** `packages/core/session` — 新增导出: snapshotAppend
- **[ast-export-added]** `packages/core/session` — 新增导出: sourceEventSeqs
- **[ast-export-added]** `packages/core/session` — 新增导出: createAppendEvent
- **[ast-export-added]** `packages/core/session` — 新增导出: acceptSurface
- **[ast-export-added]** `packages/core/session` — 新增导出: publications
- **[ast-export-added]** `packages/core/system-prompt` — 新增导出: PromptPresentation
- **[ast-export-added]** `packages/core/tool-executor-native` — 新增导出: NativeToolExecutor
- **[ast-export-added]** `packages/core/tool-executor-ptc` — 新增导出: PtcExecutor
- **[ast-export-added]** `packages/core/tools` — 新增导出: ToolRegistration
- **[ast-export-added]** `packages/core/tools` — 新增导出: GuardLayer
- **[ast-export-added]** `packages/core/tools` — 新增导出: ToolsService
- **[ast-export-added]** `packages/core/tools` — 新增导出: executor
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
- **[ast-export-added]** `packages/session/session-title-llm` — 新增导出: LlmRequestPurposeMap
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
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: localAhead
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: fileUrls
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: readAt
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: comments
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: worktrees
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: unneeded
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: patch
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: storage
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: visibleUrls
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: isCommit
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: validComment
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: validWrite
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: readError
- **[ast-export-added]** `packages/experimental/client-ui-forge` — 新增导出: reviewError
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
- **[ast-export-added]** `packages/experimental/cua-macos` — 新增导出: CAPABILITIES
- **[ast-export-added]** `packages/experimental/cua` — 新增导出: systemPointer
- **[ast-export-added]** `packages/experimental/cua` — 新增导出: mouseControl
- **[ast-export-added]** `packages/experimental/cua` — 新增导出: requestSchema
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
- **[ast-export-added]** `packages/experimental/worktree` — 新增导出: reclamation
- **[ast-export-added]** `packages/experimental/worktree` — 新增导出: scan
- **[ast-export-added]** `packages/experimental/worktree` — 新增导出: branchRecreated
- **[ast-export-added]** `packages/experimental/worktree` — 新增导出: filterOverrides
- **[ast-export-added]** `packages/fs/fs-local` — 新增导出: acquire
- **[ast-export-added]** `packages/fs/fs-local` — 新增导出: sourceInfo
- **[ast-export-added]** `packages/fs/fs-local` — 新增导出: sourceBefore
- **[ast-export-added]** `packages/fs/fs-sandbox` — 新增导出: checkedSource
- **[ast-export-added]** `packages/fs/fs-sandbox` — 新增导出: checkedDestination
- **[ast-export-added]** `packages/fs/tool-str-replace-editor` — 新增导出: alreadyExists
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
- **[ast-export-added]** `packages/jobs/jobs-local` — 新增导出: waitAborted
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
- **[ast-export-added]** `packages/sandbox/sandbox-policy` — 新增导出: resolveAdditionalWritableRoots
- **[ast-export-added]** `packages/sandbox/sandbox-policy` — 新增导出: additional
- **[ast-export-added]** `packages/sandbox/sandbox-policy` — 新增导出: additionalWritableRoots
- **[ast-export-added]** `packages/sandbox/sandbox` — 新增导出: SANDBOX_PREPARATION_ERROR_CODES
- **[ast-export-added]** `packages/sandbox/sandbox` — 新增导出: SandboxPreparationErrorCode
- **[ast-export-added]** `packages/sandbox/sandbox` — 新增导出: SandboxPreparationError
- **[ast-export-added]** `packages/schedule/schedule` — 新增导出: DEFAULT_NEW_SESSION_INTERVAL_SECONDS
- **[ast-export-added]** `packages/schedule/schedule` — 新增导出: DEFAULT_LIST_LIMIT
- **[ast-export-added]** `packages/schedule/schedule` — 新增导出: MAX_LIST_LIMIT
- **[ast-export-added]** `packages/schedule/schedule` — 新增导出: SUBAGENT_SESSION_REFUSAL
- **[ast-export-added]** `packages/schedule/schedule` — 新增导出: ScheduleChangeKind
- **[ast-export-added]** `packages/schedule/schedule` — 新增导出: compareEntries
- **[ast-export-added]** `packages/schedule/schedule` — 新增导出: leftRecent
- **[ast-export-added]** `packages/schedule/schedule` — 新增导出: rightRecent
- **[ast-export-added]** `packages/schedule/schedule` — 新增导出: resolveListPage
- **[ast-export-added]** `packages/schedule/schedule` — 新增导出: throwRemoteScheduleInput
- **[ast-export-added]** `packages/schedule/schedule` — 新增导出: activeSessionTasks
- **[ast-export-added]** `packages/schedule/schedule` — 新增导出: createSpec
- **[ast-export-added]** `packages/schedule/schedule` — 新增导出: involved
- **[ast-export-added]** `packages/schedule/schedule` — 新增导出: revisedAt
- **[ast-export-added]** `packages/schedule/schedule` — 新增导出: revisedTask
- **[ast-export-added]** `packages/schedule/schedule` — 新增导出: nextTarget
- **[ast-export-added]** `packages/schedule/schedule` — 新增导出: changedRule
- **[ast-export-added]** `packages/schedule/schedule` — 新增导出: retargeted
- **[ast-export-added]** `packages/schedule/schedule` — 新增导出: effectiveTarget
- **[ast-export-added]** `packages/schedule/schedule` — 新增导出: floorEnd
- **[ast-export-added]** `packages/schedule/schedule` — 新增导出: needsFlush
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: SESSION_CREATE_SCHEMA
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: TARGET_SCHEMA
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: DELIVERY_SCHEMA
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: TASK_PROPERTIES
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: TASK_SCHEMA
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: LIST_PAGE_SCHEMA
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: NOT_FOUND_SCHEMA
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: DELETED_SCHEMA
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: CONFLICT_SCHEMA
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: CALLER_ERRORS
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: CREATE_ERRORS
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: LIST_ERRORS
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: EDIT_ERRORS
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: DeclaredError
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: errorSchema
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: VIEW_OUTPUT_SCHEMA
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: EDIT_OUTPUT_SCHEMA
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: MANAGEMENT_AUTHORIZATION
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: VIEW_DESCRIPTION
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: EDIT_DESCRIPTION
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: TITLE_HELP
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: RRULE_HELP
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: TARGET_CHOICES
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: targetHelp
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: spacing
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: PATCH_FIELDS
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: ModelTask
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: modelTask
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: runForCaller
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: targetFor
- **[ast-export-added]** `packages/schedule/tool-schedule` — 新增导出: targetDescription
- **[ast-export-added]** `packages/session-query/session-log-export` — 新增导出: sessionMarkdownResponse
- **[ast-export-added]** `packages/session-query/session-log-export` — 新增导出: sessionQuery
- **[ast-export-added]** `packages/session-query/session-log-export` — 新增导出: isSessionNotFound
- **[ast-export-added]** `packages/session/session-log-deepseek` — 新增导出: SessionLogDeepSeekService
- **[ast-export-added]** `packages/session/session-log-deepseek` — 新增导出: exclusions
- **[ast-export-added]** `packages/session/session-projection` — 新增导出: ProjectionHandle
- **[ast-export-added]** `packages/session/session-projection` — 新增导出: ProjectionEventChangeListener
- **[ast-export-added]** `packages/session/session-projection` — 新增导出: ProjectionKeySelection
- **[ast-export-added]** `packages/session/session-projection` — 新增导出: selectedKeys
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
- **[ast-export-added]** `packages/skill/skill-office` — 新增导出: reads
- **[ast-export-added]** `packages/skill/tool-skill` — 新增导出: incomplete
- **[ast-export-added]** `packages/skill/tool-skill` — 新增导出: incompleteCatalogNotice
- **[ast-export-added]** `packages/subagent/subagent` — 新增导出: catalogProjection
- **[ast-export-added]** `packages/subagent/subagent` — 新增导出: identityProjection
- **[ast-export-added]** `packages/subagent/subagent` — 新增导出: prepare
- ★ **[ast-export-added]** `packages/subagent/tool-subagent-control` — 新增导出: interrupt
- ★ **[ast-export-added]** `packages/subagent/tool-subagent-control` — 新增导出: listAgents
- ★ **[ast-export-added]** `packages/subagent/tool-subagent-control` — 新增导出: sendMessage
- ★ **[ast-export-added]** `packages/subagent/tool-subagent-control` — 新增导出: targetId
- ★ **[ast-export-added]** `packages/subagent/tool-subagent-control` — 新增导出: rootUnavailable
- ★ **[ast-export-added]** `packages/subagent/tool-subagent` — 新增导出: subagentModelSelectionProjectionHandle
- ★ **[ast-export-added]** `packages/subagent/tool-subagent` — 新增导出: modelSelectionPolicy
- ★ **[ast-export-added]** `packages/subagent/tool-subagent` — 新增导出: inheritParentReasoningEffort
- **[ast-export-added]** `packages/subprocess/subprocess-local` — 新增导出: loadNodePty
- **[ast-export-added]** `packages/team/agent-team` — 新增导出: REMOVED_CONFIG_KEYS
- **[ast-export-added]** `packages/team/tool-agent-team` — 新增导出: TEAM_POLICY
- **[ast-export-added]** `packages/team/tool-agent-team` — 新增导出: NamedTaskView
- **[ast-export-added]** `packages/team/tool-agent-team` — 新增导出: withOwnerName
- **[ast-export-added]** `packages/team/tool-agent-team` — 新增导出: taskId
- **[ast-export-added]** `packages/terminal/terminal-bash` — 新增导出: startupTimeout
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
- **[ast-export-added]** `packages/util/ripgrep` — 新增导出: spawnRipgrep
- **[ast-export-added]** `packages/util/ripgrep` — 新增导出: RipgrepLinesResult
- **[ast-export-added]** `packages/util/ripgrep` — 新增导出: readRipgrepLines
- **[ast-export-added]** `packages/util/ripgrep` — 新增导出: reading
- **[ast-export-added]** `packages/util/values` — 新增导出: JsonWalkFrame
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: Capability
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: Billing
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: RouteName
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: Rule
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: TOOLS_PATH
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: DEEPSEEK_API_KEY
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: OFFICIAL_PROVIDER
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: ROUTE_PACKAGES
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: CAPABILITY
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: searchApi
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: fetchApi
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
- **[ast-export-added]** `packages/web/web-deepseek-api` — 新增导出: nonEmpty
- **[ast-export-added]** `packages/web/web-search-deepseek` — 新增导出: SearchOptions
- **[ast-export-added]** `packages/web/web-search-deepseek` — 新增导出: searchConfigured
- **[ast-export-added]** `packages/web/web` — 新增导出: emitChanged
- **[ast-export-added]** `packages/web/web` — 新增导出: providerInfo
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
- **[ast-export-added]** `packages/boot/plugin-manager/src/install-spec.ts` — 新增导出: FULL_COMMIT
- **[ast-export-added]** `packages/boot/plugin-manager/src/install-spec.ts` — 新增导出: pinnedGitOrigin
- **[ast-export-added]** `packages/boot/plugin-manager/src/install-spec.ts` — 新增导出: others
- **[ast-export-added]** `packages/boot/plugin-market/src/types.ts` — 新增导出: PluginDetailDocumentId
- **[ast-export-added]** `packages/boot/plugin-market/src/types.ts` — 新增导出: PluginDetailOrigin
- **[ast-export-added]** `packages/boot/plugin-market/src/types.ts` — 新增导出: PluginDetail
- **[ast-export-added]** `packages/client/file-upload/src/types.ts` — 新增导出: ImageUploadValue
- **[ast-export-added]** `packages/client/file-upload/src/types.ts` — 新增导出: StagedAttachment
- **[ast-export-added]** `packages/client/ui-account-notifications/src/config.ts` — 新增导出: NOTIFICATIONS_CONFIG_GLOBAL
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
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/UserMessageBubble.tsx` — 新增导出: UserMessageBubbleProps
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/UserMessageBubble.tsx` — 新增导出: UserMessageBubble
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 新增导出: ROW_FADE_MS
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 新增导出: ROW_GLIDE_MS
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 新增导出: AnimatedRowsProps
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 新增导出: RowPosition
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 新增导出: Viewport
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 新增导出: RowSnapshot
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 新增导出: sameRows
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 新增导出: visibleViewport
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 新增导出: intersects
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 新增导出: AnimatedRows
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 新增导出: nextKeys
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 新增导出: previousRow
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/AnimatedRows.tsx` — 新增导出: animation
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/useRowDragPreview.ts` — 新增导出: useRowDragPreview
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/useRowDragPreview.ts` — 新增导出: clear
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/useRowDragPreview.ts` — 新增导出: wasDragging
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/ZoomControls.tsx` — 新增导出: steppedZoom
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/ZoomControls.tsx` — 新增导出: ZoomControlsHandle
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/ZoomControls.tsx` — 新增导出: ZoomControls
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/ZoomControls.tsx` — 新增导出: displayZoom
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/ZoomControls.tsx` — 新增导出: selectedId
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/document-zoom.ts` — 新增导出: DOCUMENT_ZOOM
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/document-zoom.ts` — 新增导出: DocumentZoomLabels
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/Menu.tsx` — 新增导出: menuId
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/Menu.tsx` — 新增导出: pointX
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/Menu.tsx` — 新增导出: pointY
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/Menu.tsx` — 新增导出: point
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/Menu.tsx` — 新增导出: visualOrigin
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/Menu.tsx` — 新增导出: remembered
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/Menu.tsx` — 新增导出: exitingRef
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/Menu.tsx` — 新增导出: submenu
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/Menu.tsx` — 新增导出: submenuEvents
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/Menu.tsx` — 新增导出: anchorName
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/Menu.tsx` — 新增导出: currentAnchor
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/Menu.tsx` — 新增导出: itemColumns
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/Menu.tsx` — 新增导出: footerColumns
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/MenuSurface.tsx` — 新增导出: MENU_TRANSITION_MS
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/HoverCard.tsx` — 新增导出: CardPosition
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/HoverCard.tsx` — 新增导出: portalRef
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/HoverCard.tsx` — 新增导出: bridgeTop
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/HoverCard.tsx` — 新增导出: bridgeLeft
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/pointer-grace.ts` — 新增导出: POINTER_GRACE_MS
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/pointer-grace.ts` — 新增导出: PointerGrace
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/pointer-grace.ts` — 新增导出: usePointerGrace
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/focus.ts` — 新增导出: mobileDevice
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/focus.ts` — 新增导出: isMobileDevice
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/useModalLayer.ts` — 新增导出: pendingRestore
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/file-drag-actions.ts` — 新增导出: FileDragSource
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/file-drag-actions.ts` — 新增导出: PreparedFileDrag
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/file-drag-actions.ts` — 新增导出: FileDragActions
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/DraggableImage.tsx` — 新增导出: DraggableImageProps
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/DraggableImage.tsx` — 新增导出: DraggableImage
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/use-clipboard-copy.ts` — 新增导出: ClipboardCopyState
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/use-clipboard-copy.ts` — 新增导出: useClipboardCopy
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/use-clipboard-copy.ts` — 新增导出: copyPending
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/use-clipboard-copy.ts` — 新增导出: copyTimer
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/markdown/CodeBlock.tsx` — 新增导出: DIFF_ROW_CLASS
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/markdown/CodeBlock.tsx` — 新增导出: renderDiffRow
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/markdown/CodeBlock.tsx` — 新增导出: kindClass
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/markdown/CodeBlock.tsx` — 新增导出: diffRows
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/markdown/CodeBlock.tsx` — 新增导出: diffTokens
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/markdown/FenceBlocks.tsx` — 新增导出: FenceCodeBlockProps
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/markdown/FenceBlocks.tsx` — 新增导出: FenceCodeBlock
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/markdown/FenceBlocks.tsx` — 新增导出: FenceMathBlock
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/markdown/MarkdownDelegate.tsx` — 新增导出: MarkdownMenuTarget
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/markdown/MarkdownDelegate.tsx` — 新增导出: MarkdownDelegateFenceInfo
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/DetailDocument.tsx` — 新增导出: DetailDocumentState
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/DetailDocument.tsx` — 新增导出: DetailDocumentRead
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/DetailDocument.tsx` — 新增导出: detailDocumentState
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/DetailDocument.tsx` — 新增导出: DetailDocumentCopy
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/DetailDocument.tsx` — 新增导出: useDetailDocumentLabels
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/DetailDocument.tsx` — 新增导出: markdown
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/DetailDocument.tsx` — 新增导出: DetailDocumentLabels
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/DetailDocument.tsx` — 新增导出: DetailDocument
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: productIcon
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: IconLayersOutlineRegular
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: IconLayersOutlineMedium
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: IconEyeOutlineRegular
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: IconEyeOutlineMedium
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: IconEyeOffOutlineRegular
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: IconEyeOffOutlineMedium
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: IconDragHandleOutlineRegular
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: IconDragHandleOutlineMedium
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: appsAddIcon
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: Wide
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: Compact
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: IconSaveOutlineRegular
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/icons/index.tsx` — 新增导出: IconSaveOutlineMedium
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/QuotePreview.tsx` — 新增导出: QuoteMarkIcon
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/QuotePreview.tsx` — 新增导出: QuotePreviewRemoval
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/QuotePreview.tsx` — 新增导出: QuoteSummary
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/QuotePreview.tsx` — 新增导出: QuotePreviewProps
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/QuotePreview.tsx` — 新增导出: QuotePreview
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/QuotePreview.tsx` — 新增导出: sourceRef
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/markdown/quote-text.ts` — 新增导出: formatQuoteText
- **[ast-export-added]** `packages/client/ui-trajectory/src/types.ts` — 新增导出: SessionToolResultRequest
- **[ast-export-added]** `packages/client/ui-trajectory/src/types.ts` — 新增导出: SessionToolResultValue
- ★ **[ast-export-added]** `packages/context/agent-instructions/src/render.ts` — 新增导出: isDisabledBudget
- ★ **[ast-export-added]** `packages/context/agent-instructions/src/render.ts` — 新增导出: isUserGlobalInstruction
- ★ **[ast-export-added]** `packages/context/agent-instructions/src/render.ts` — 新增导出: renderInstructionChains
- ★ **[ast-export-added]** `packages/context/agent-instructions/src/render.ts` — 新增导出: userGlobal
- ★ **[ast-export-added]** `packages/context/agent-instructions/src/render.ts` — 新增导出: inLoadedOrder
- ★ **[ast-export-added]** `packages/context/agent-instructions/src/render.ts` — 新增导出: userGlobalLast
- ★ **[ast-export-added]** `packages/context/agent-instructions/src/render.ts` — 新增导出: projectLast
- ★ **[ast-export-added]** `packages/context/agent-instructions/src/render.ts` — 新增导出: intros
- ★ **[ast-export-added]** `packages/context/agent-instructions/src/render.ts` — 新增导出: intro
- **[ast-export-added]** `packages/core/agent/src/runtime-types.ts` — 新增导出: Model
- **[ast-export-added]** `packages/core/agent/src/model-selection.ts` — 新增导出: toSelection
- **[ast-export-added]** `packages/core/agent/src/model-selection.ts` — 新增导出: sameModelSelection
- **[ast-export-added]** `packages/core/agent/src/model-selection.ts` — 新增导出: selectionOfHeader
- **[ast-export-added]** `packages/core/agent/src/model-selection.ts` — 新增导出: modelSelectionProjectionDefinition
- **[ast-export-added]** `packages/core/agent/src/model-selection.ts` — 新增导出: lastUsed
- **[ast-export-added]** `packages/core/agent/src/model-selection.ts` — 新增导出: AgentModel
- **[ast-export-added]** `packages/core/agent/src/projection.ts` — 新增导出: sessionSeqSchema
- **[ast-export-added]** `packages/core/session/src/types.ts` — 新增导出: SessionEventInput
- **[ast-export-added]** `packages/core/session/src/surface.ts` — 新增导出: projectionEvents
- **[ast-export-added]** `packages/core/session/src/surface.ts` — 新增导出: lastProcessedSeq
- **[ast-export-added]** `packages/core/session/src/surface.ts` — 新增导出: plans
- **[ast-export-added]** `packages/core/tool-executor-ptc/src/errors.ts` — 新增导出: ToolCallLimitExceededError
- **[ast-export-added]** `packages/core/tool-executor-ptc/src/errors.ts` — 新增导出: CodeResetFailedError
- **[ast-export-added]** `packages/core/tools/src/contracts.ts` — 新增导出: ToolActivationContext
- **[ast-export-added]** `packages/core/tools/src/contracts.ts` — 新增导出: ToolRegistrationOptions
- **[ast-export-added]** `packages/core/tools/src/contracts.ts` — 新增导出: ResolvedToolSet
- **[ast-export-added]** `packages/core/tools/src/contracts.ts` — 新增导出: ToolActivationError
- **[ast-export-added]** `packages/core/tools/src/contracts.ts` — 新增导出: ToolContextUnavailableError
- **[ast-export-added]** `packages/core/tools/src/contracts.ts` — 新增导出: ToolGuardDenial
- **[ast-export-added]** `packages/core/tools/src/executor.ts` — 新增导出: ToolModelInput
- **[ast-export-added]** `packages/core/tools/src/executor.ts` — 新增导出: ToolPromptSection
- **[ast-export-added]** `packages/core/tools/src/executor.ts` — 新增导出: ToolBatchInput
- **[ast-export-added]** `packages/core/tools/src/executor.ts` — 新增导出: ToolBatchResult
- **[ast-export-added]** `packages/core/tools/src/executor.ts` — 新增导出: ToolExecutor
- **[ast-export-added]** `packages/core/tools/src/executor.ts` — 新增导出: ToolBatchExecutionError
- **[ast-export-added]** `packages/core/tools/src/executor.ts` — 新增导出: ToolExecutorUnavailableError
- **[ast-export-added]** `packages/core/tools/src/schema.ts` — 新增导出: projectToolSchema
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
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeBaseBranch
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeAutomaticBase
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeBaseBranches
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeCommitRange
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeLocalScope
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeDiffHunk
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeDiffStatus
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeFileLayer
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeDiffFile
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeLocalDiff
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeChangeRequestDiff
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeLocalCommits
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeChangedFile
- **[ast-export-added]** `packages/experimental/client-ui-forge/src/types.ts` — 新增导出: ForgeLocalChanges
- **[ast-export-added]** `packages/experimental/creation-recommendations/src/types.ts` — 新增导出: CreationSlot
- **[ast-export-added]** `packages/experimental/creation-recommendations/src/types.ts` — 新增导出: PageDetails
- **[ast-export-added]** `packages/experimental/creation-recommendations/src/types.ts` — 新增导出: PagePhase
- **[ast-export-added]** `packages/experimental/creation-recommendations/src/types.ts` — 新增导出: PageData
- **[ast-export-added]** `packages/experimental/creation-recommendations/src/types.ts` — 新增导出: PageVerb
- **[ast-export-added]** `packages/experimental/creation-recommendations/src/types.ts` — 新增导出: PageLocation
- **[ast-export-added]** `packages/experimental/cua-macos/src/guidance.ts` — 新增导出: PLATFORM_GUIDANCE
- **[ast-export-added]** `packages/experimental/cua-macos/src/guidance.ts` — 新增导出: methodDetails
- **[ast-export-added]** `packages/experimental/cua/src/access.ts` — 新增导出: ControlOptions
- **[ast-export-added]** `packages/experimental/cua/src/access.ts` — 新增导出: Control
- **[ast-export-added]** `packages/experimental/cua/src/access.ts` — 新增导出: permissionProcess
- **[ast-export-added]** `packages/experimental/cua/src/access.ts` — 新增导出: systemPermissions
- **[ast-export-added]** `packages/experimental/cua/src/access.ts` — 新增导出: CuaAccess
- **[ast-export-added]** `packages/experimental/cua/src/access.ts` — 新增导出: installCuaAccess
- **[ast-export-added]** `packages/experimental/cua/src/access.ts` — 新增导出: perform
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
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeCheckId
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ChangeRequestCheck
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ChecksRollup
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: Mergeability
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ReviewDecision
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: MergeMethod
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: BranchUpdateMethod
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ReviewVerdict
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ChangeRequestReviewer
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ChangeRequestIssue
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ChangeRequestSnapshot
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeFailure
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ChangeRequestUpdate
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: MergeRequest
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: BranchUpdateRequest
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeRerunRequest
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeReviewersRequest
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeReviewerCandidate
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeLineComment
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeReviewRequest
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
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeReviewResult
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeActionFailure
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeCommit
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeCommitList
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeViewedState
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeViewedFiles
- **[ast-export-added]** `packages/experimental/forge/src/types.ts` — 新增导出: ForgeViewedRequest
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
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: relayEnvironment
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: relayTransport
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
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: bundleTitles
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: pluginManager
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: offeredCapabilities
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
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: describeError
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: ownerIdentityFromConfig
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: providerId
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: tenantId
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-host.ts` — 新增导出: subjectId
- **[ast-export-added]** `packages/experimental/liveshare/src/host/share-remote.ts` — 新增导出: LiveshareShares
- **[ast-export-added]** `packages/experimental/plugin-recommendations/src/types.ts` — 新增导出: PluginDetails
- **[ast-export-added]** `packages/experimental/plugin-recommendations/src/types.ts` — 新增导出: PluginPhase
- **[ast-export-added]** `packages/experimental/plugin-recommendations/src/types.ts` — 新增导出: PluginData
- **[ast-export-added]** `packages/experimental/plugin-recommendations/src/types.ts` — 新增导出: RecommendationDetails
- **[ast-export-added]** `packages/experimental/terminal-panel/src/config.ts` — 新增导出: MAX_TIMER_MS
- **[ast-export-added]** `packages/experimental/webworker-runtime/src/compile/transform.ts` — 新增导出: ImportedBinding
- **[ast-export-added]** `packages/experimental/webworker-runtime/src/compile/transform.ts` — 新增导出: ImportCandidate
- **[ast-export-added]** `packages/experimental/webworker-runtime/src/compile/transform.ts` — 新增导出: called
- **[ast-export-added]** `packages/experimental/webworker-runtime/src/compile/transform.ts` — 新增导出: moduleScope
- **[ast-export-added]** `packages/experimental/webworker-runtime/src/compile/transform.ts` — 新增导出: getters
- **[ast-export-added]** `packages/experimental/webworker-runtime/src/compile/transform.ts` — 新增导出: specifierName
- **[ast-export-added]** `packages/experimental/webworker-runtime/src/compile/transform.ts` — 新增导出: assignRanges
- **[ast-export-added]** `packages/experimental/webworker-runtime/src/compile/transform.ts` — 新增导出: isBindingPosition
- **[ast-export-added]** `packages/experimental/webworker-runtime/src/compile/transform.ts` — 新增导出: isReadPosition
- **[ast-export-added]** `packages/experimental/webworker-runtime/src/compile/transform.ts` — 新增导出: inStatementList
- **[ast-export-added]** `packages/experimental/worktree/src/types.ts` — 新增导出: CreateWorktreePhase
- **[ast-export-added]** `packages/experimental/worktree/src/types.ts` — 新增导出: RestoreWorktreeRequest
- **[ast-export-added]** `packages/experimental/worktree/src/types.ts` — 新增导出: RestoredWorktree
- **[ast-export-added]** `packages/experimental/worktree/src/types.ts` — 新增导出: WorktreeCreation
- **[ast-export-added]** `packages/experimental/worktree/src/types.ts` — 新增导出: WorktreeCleanup
- **[ast-export-added]** `packages/experimental/worktree/src/name.ts` — 新增导出: UUID
- **[ast-export-added]** `packages/experimental/worktree/src/name.ts` — 新增导出: generatedWorktreeName
- **[ast-export-added]** `packages/experimental/worktree/src/name.ts` — 新增导出: uuid
- **[ast-export-added]** `packages/experimental/worktree/src/projection.ts` — 新增导出: CREATED_RECORD
- **[ast-export-added]** `packages/experimental/worktree/src/projection.ts` — 新增导出: WorktreeProjectionState
- **[ast-export-added]** `packages/experimental/worktree/src/projection.ts` — 新增导出: createdWorktreeSchema
- **[ast-export-added]** `packages/experimental/worktree/src/projection.ts` — 新增导出: creationSchema
- **[ast-export-added]** `packages/experimental/worktree/src/projection.ts` — 新增导出: worktreeProjection
- **[ast-export-added]** `packages/fs/fs-patch/src/parse.ts` — 新增导出: BEGIN
- **[ast-export-added]** `packages/fs/fs-patch/src/parse.ts` — 新增导出: END
- **[ast-export-added]** `packages/fs/fs-patch/src/parse.ts` — 新增导出: EOF
- **[ast-export-added]** `packages/fs/fs-patch/src/parse.ts` — 新增导出: MOVE
- **[ast-export-added]** `packages/fs/fs-patch/src/parse.ts` — 新增导出: ADD
- **[ast-export-added]** `packages/fs/fs-patch/src/parse.ts` — 新增导出: DELETE
- **[ast-export-added]** `packages/fs/fs-patch/src/parse.ts` — 新增导出: UPDATE
- **[ast-export-added]** `packages/fs/fs-patch/src/parse.ts` — 新增导出: WHITE_SPACE
- **[ast-export-added]** `packages/fs/fs-patch/src/parse.ts` — 新增导出: PatchParseError
- **[ast-export-added]** `packages/fs/fs-patch/src/parse.ts` — 新增导出: trim
- **[ast-export-added]** `packages/fs/fs-patch/src/parse.ts` — 新增导出: trimEnd
- **[ast-export-added]** `packages/fs/fs-patch/src/parse.ts` — 新增导出: InputLine
- **[ast-export-added]** `packages/fs/fs-patch/src/parse.ts` — 新增导出: patchLines
- **[ast-export-added]** `packages/fs/fs-patch/src/parse.ts` — 新增导出: emptyHunk
- **[ast-export-added]** `packages/fs/fs-patch/src/parse.ts` — 新增导出: ensureUpdate
- **[ast-export-added]** `packages/fs/fs-patch/src/parse.ts` — 新增导出: newHunk
- **[ast-export-added]** `packages/fs/fs-patch/src/parse.ts` — 新增导出: readUpdate
- **[ast-export-added]** `packages/fs/fs-patch/src/parse.ts` — 新增导出: hunk
- **[ast-export-added]** `packages/fs/fs-patch/src/parse.ts` — 新增导出: parsePatch
- **[ast-export-added]** `packages/fs/fs-patch/src/apply.ts` — 新增导出: trimWhitespace
- **[ast-export-added]** `packages/fs/fs-patch/src/apply.ts` — 新增导出: normalizePunctuation
- **[ast-export-added]** `packages/fs/fs-patch/src/apply.ts` — 新增导出: MATCH_PASSES
- **[ast-export-added]** `packages/fs/fs-patch/src/apply.ts` — 新增导出: seekSequence
- **[ast-export-added]** `packages/fs/fs-patch/src/apply.ts` — 新增导出: Replacement
- **[ast-export-added]** `packages/fs/fs-patch/src/apply.ts` — 新增导出: applyHunks
- **[ast-export-added]** `packages/fs/fs-patch/src/apply.ts` — 新增导出: lineIndex
- **[ast-export-added]** `packages/fs/fs-patch/src/types.ts` — 新增导出: PatchHunk
- **[ast-export-added]** `packages/fs/fs-patch/src/types.ts` — 新增导出: PatchOperation
- **[ast-export-added]** `packages/fs/fs-patch/src/types.ts` — 新增导出: HunkApplyFailure
- **[ast-export-added]** `packages/fs/fs-patch/src/types.ts` — 新增导出: ApplyHunksResult
- **[ast-export-added]** `packages/fs/fs/src/errno.ts` — 新增导出: fsErrorFromErrno
- **[ast-export-added]** `packages/fs/fs/src/types.ts` — 新增导出: FsDeleteOutcome
- **[ast-export-added]** `packages/fs/fs/src/types.ts` — 新增导出: FsMoveSourceFailure
- **[ast-export-added]** `packages/fs/fs/src/types.ts` — 新增导出: FsMoveOutcome
- **[ast-export-added]** `packages/fs/fs/src/types.ts` — 新增导出: FS_ERROR_CODES
- **[ast-export-added]** `packages/fs/tool-fs-search/src/glob.ts` — 新增导出: pruning
- **[ast-export-added]** `packages/fs/tool-fs-search/src/glob.ts` — 新增导出: directoryGlob
- **[ast-export-added]** `packages/jobs/jobs/src/error.ts` — 新增导出: JOB_ERROR_CODES
- **[ast-export-added]** `packages/jobs/jobs/src/error.ts` — 新增导出: JobErrorCode
- **[ast-export-added]** `packages/jobs/jobs/src/error.ts` — 新增导出: JobError
- **[ast-export-added]** `packages/llm/llm-deepseek/src/credential.ts` — 新增导出: resolveDeepSeekApiKey
- **[ast-export-added]** `packages/llm/llm-deepseek/src/credential.ts` — 新增导出: deepSeekApiKeyConfigured
- **[ast-export-added]** `packages/llm/llm-deepseek/src/credential.ts` — 新增导出: resolveDeepSeekAccountToken
- **[ast-export-added]** `packages/llm/llm-deepseek/src/credential.ts` — 新增导出: rejectDeepSeekAccountToken
- **[ast-export-added]** `packages/llm/llm-deepseek/src/adapter.ts` — 新增导出: requestIdentity
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
- **[ast-export-added]** `packages/llm/llm-pi-ai/src/adapter.ts` — 新增导出: requestHeaderDiagnostic
- **[ast-export-added]** `packages/llm/llm-pi-ai/src/adapter.ts` — 新增导出: prefixDigests
- **[ast-export-added]** `packages/llm/llm-pi-ai/src/adapter.ts` — 新增导出: manualThinking
- **[ast-export-added]** `packages/llm/llm-pi-ai/src/types.ts` — 新增导出: PiAiRequestHeaderContext
- **[ast-export-added]** `packages/llm/llm-pi-ai/src/config.ts` — 新增导出: DEFAULT_MAX_REQUEST_IMAGES
- **[ast-export-added]** `packages/llm/llm-pi-ai/src/config.ts` — 新增导出: maxRequestImages
- **[ast-export-added]** `packages/llm/llm/src/attribution.ts` — 新增导出: PRODUCT
- **[ast-export-added]** `packages/llm/llm/src/attribution.ts` — 新增导出: launchSuffix
- **[ast-export-added]** `packages/llm/llm/src/error.ts` — 新增导出: LLM_FAILURE_CODES
- **[ast-export-added]** `packages/llm/llm/src/error.ts` — 新增导出: BuiltinLlmFailureCode
- **[ast-export-added]** `packages/llm/llm/src/error.ts` — 新增导出: RETRY_CODE_CHOICES
- **[ast-export-added]** `packages/llm/llm/src/types.ts` — 新增导出: LlmModelBadgeTone
- **[ast-export-added]** `packages/llm/llm/src/types.ts` — 新增导出: LlmModelBadge
- **[ast-export-added]** `packages/llm/llm/src/types.ts` — 新增导出: LlmRequestPurpose
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
- **[ast-export-added]** `packages/ptc-runtime/ptc-runtime/src/types.ts` — 新增导出: PtcProgramFormat
- **[ast-export-added]** `packages/sandbox/sandbox-windows-acl/src/path-boundary.ts` — 新增导出: isTempRootInsideWorkspace
- **[ast-export-added]** `packages/sandbox/sandbox/src/escalation.ts` — 新增导出: SANDBOX_ESCALATION_ERROR_CODES
- **[ast-export-added]** `packages/sandbox/sandbox/src/escalation.ts` — 新增导出: SandboxEscalationErrorCode
- **[ast-export-added]** `packages/sandbox/sandbox/src/escalation.ts` — 新增导出: SandboxEscalationError
- **[ast-export-added]** `packages/sandbox/sandbox/src/roots.ts` — 新增导出: SandboxInvalidRootError
- **[ast-export-added]** `packages/sandbox/sandbox/src/roots.ts` — 新增导出: additionalRoot
- **[ast-export-added]** `packages/sandbox/sandbox/src/roots.ts` — 新增导出: workspaceWritableRoots
- **[ast-export-added]** `packages/schedule/schedule/src/storage.ts` — 新增导出: messageIdSchema
- **[ast-export-added]** `packages/schedule/schedule/src/storage.ts` — 新增导出: createSpecSchema
- **[ast-export-added]** `packages/schedule/schedule/src/storage.ts` — 新增导出: targetSchema
- **[ast-export-added]** `packages/schedule/schedule/src/storage.ts` — 新增导出: defaultSessionId
- **[ast-export-added]** `packages/schedule/schedule/src/storage.ts` — 新增导出: hasReceiptTarget
- **[ast-export-added]** `packages/schedule/schedule/src/storage.ts` — 新增导出: receipt
- **[ast-export-added]** `packages/schedule/schedule/src/domain.ts` — 新增导出: NON_CANONICAL_INSTANT_MESSAGE
- **[ast-export-added]** `packages/schedule/schedule/src/domain.ts` — 新增导出: instantDiagnostic
- **[ast-export-added]** `packages/schedule/schedule/src/domain.ts` — 新增导出: timeZoneError
- **[ast-export-added]** `packages/schedule/schedule/src/domain.ts` — 新增导出: localCalendarDiagnostic
- **[ast-export-added]** `packages/schedule/schedule/src/domain.ts` — 新增导出: resolveLocalAt
- **[ast-export-added]** `packages/schedule/schedule/src/domain.ts` — 新增导出: parseAtOffsetInstant
- **[ast-export-added]** `packages/schedule/schedule/src/domain.ts` — 新增导出: readRecurrence
- **[ast-export-added]** `packages/schedule/schedule/src/domain.ts` — 新增导出: codes
- **[ast-export-added]** `packages/schedule/schedule/src/domain.ts` — 新增导出: firstRecord
- **[ast-export-added]** `packages/schedule/schedule/src/domain.ts` — 新增导出: normalizeRRule
- **[ast-export-added]** `packages/schedule/schedule/src/domain.ts` — 新增导出: createRRuleScheduleRecord
- **[ast-export-added]** `packages/schedule/schedule/src/domain.ts` — 新增导出: normalizedTitle
- **[ast-export-added]** `packages/schedule/schedule/src/domain.ts` — 新增导出: updateRRuleScheduleRecord
- **[ast-export-added]** `packages/schedule/schedule/src/domain.ts` — 新增导出: resolveRRuleOccurrence
- **[ast-export-added]** `packages/schedule/schedule/src/domain.ts` — 新增导出: decodeRRuleScheduleRecord
- **[ast-export-added]** `packages/schedule/schedule/src/domain.ts` — 新增导出: rrule
- **[ast-export-added]** `packages/schedule/schedule/src/domain.ts` — 新增导出: formatScheduleLocalTime
- **[ast-export-added]** `packages/sdk/client/src/api.ts` — 新增导出: RunActivity
- **[ast-export-added]** `packages/sdk/client/src/client.ts` — 新增导出: queryInput
- **[ast-export-added]** `packages/sdk/client/src/client.ts` — 新增导出: commandExecution
- **[ast-export-added]** `packages/sdk/client/src/client.ts` — 新增导出: isUserQuestionRequest
- **[ast-export-added]** `packages/sdk/protocol/src/types.ts` — 新增导出: SdkUserQuestionRequest
- **[ast-export-added]** `packages/sdk/protocol/src/types.ts` — 新增导出: SdkUserQuestionAnswer
- **[ast-export-added]** `packages/sdk/protocol/src/types.ts` — 新增导出: SdkUserQuestionResult
- **[ast-export-added]** `packages/sdk/protocol/src/types.ts` — 新增导出: SdkUserQuestionCancelled
- **[ast-export-added]** `packages/sdk/protocol/src/types.ts` — 新增导出: HarnessSdkHostRequestMap
- **[ast-export-added]** `packages/sdk/protocol/src/types.ts` — 新增导出: SessionQueryParams
- **[ast-export-added]** `packages/sdk/protocol/src/types.ts` — 新增导出: SessionQueryResult
- **[ast-export-added]** `packages/sdk/protocol/src/types.ts` — 新增导出: ApprovalRequestParams
- **[ast-export-added]** `packages/sdk/protocol/src/types.ts` — 新增导出: ApprovalRequestResult
- **[ast-export-added]** `packages/sdk/protocol/src/types.ts` — 新增导出: HarnessSdkClientRequestMap
- **[ast-export-added]** `packages/sdk/server/src/server.ts` — 新增导出: restoration
- **[ast-export-added]** `packages/sdk/server/src/server.ts` — 新增导出: commands
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
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: escapeWrapperTagsOutsideFences
- **[ast-export-added]** `packages/session-query/session-log-export/src/markdown.ts` — 新增导出: escapeWrapperTags
- **[ast-export-added]** `packages/session-query/session-log-export/src/routes.ts` — 新增导出: SESSION_MARKDOWN_EXPORT_PATH
- **[ast-export-added]** `packages/session-query/session-log-export/src/routes.ts` — 新增导出: SESSION_MARKDOWN_EXPORT_ROUTE
- **[ast-export-added]** `packages/session/session-format-v0-to-v1/src/payload-validation.ts` — 新增导出: SUBAGENT_DESCRIPTOR_VERSIONS
- **[ast-export-added]** `packages/session/session-format-v3-to-v4/src/validation.ts` — 新增导出: nativeCatalogFact
- **[ast-export-added]** `packages/session/session-log-deepseek/src/types.ts` — 新增导出: SessionLogUploadRequest
- **[ast-export-added]** `packages/session/session-log-deepseek/src/types.ts` — 新增导出: SessionLogUploadExclusion
- **[ast-export-added]** `packages/session/session-projection/src/types.ts` — 新增导出: sessionProjectionSummaryExcluded
- **[ast-export-added]** `packages/session/session-projection/src/types.ts` — 新增导出: SessionProjectionSummaryExcluded
- **[ast-export-added]** `packages/session/session-projection/src/types.ts` — 新增导出: SessionProjectionViewValue
- **[ast-export-added]** `packages/session/session-projection/src/types.ts` — 新增导出: SessionProjectionViewValues
- **[ast-export-added]** `packages/session/session-projection/src/types.ts` — 新增导出: SessionProjectionSummaryExcludedKey
- **[ast-export-added]** `packages/session/session-projection/src/types.ts` — 新增导出: SessionProjectionSummaryValues
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
- **[ast-export-added]** `packages/test-support/agent-loop-testkit/src/model.ts` — 新增导出: unsupportedModel
- **[ast-export-added]** `packages/test-support/client-runtime/src/context-menu.ts` — 新增导出: contextMenuHook
- **[ast-export-added]** `packages/test-support/client-runtime/src/access.ts` — 新增导出: REFUSED
- **[ast-export-added]** `packages/test-support/client-runtime/src/access.ts` — 新增导出: StaticRemoteAccess
- **[ast-export-added]** `packages/test-support/client-runtime/src/access.ts` — 新增导出: StaticAccessPlugin
- **[ast-export-added]** `packages/test-support/client-runtime/src/access.ts` — 新增导出: staticAccessPlugin
- **[ast-export-added]** `packages/test-support/session-snapshot/src/harness.ts` — 新增导出: REPLAY_CREDENTIAL_ENV
- **[ast-export-added]** `packages/test-support/session-snapshot/src/suite.ts` — 新增导出: normalizedRefreshRecords
- **[ast-export-added]** `packages/test-support/session-snapshot/src/suite.ts` — 新增导出: normalizedFresh
- **[ast-export-added]** `packages/test-support/session-snapshot/src/suite.ts` — 新增导出: normalizedExisting
- **[ast-export-added]** `packages/typert/protocol/src/types.ts` — 新增导出: TypertResourceResolveInput
- **[ast-export-added]** `packages/util/http-proxy/src/install.ts` — 新增导出: DispatcherOptions
- **[ast-export-added]** `packages/util/http-proxy/src/install.ts` — 新增导出: h2Options
- **[ast-export-added]** `packages/util/http-proxy/src/install.ts` — 新增导出: h2
- **[ast-export-added]** `packages/util/http-proxy/src/install.ts` — 新增导出: createRouteDispatcher
- **[ast-export-added]** `packages/util/native-command/src/host-environment.ts` — 新增导出: HostEnvironmentFacts
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
- **[ast-export-added]** `packages/util/time/src/cron.ts` — 新增导出: CronFields
- **[ast-export-added]** `packages/util/time/src/cron.ts` — 新增导出: localFloor
- **[ast-export-added]** `packages/util/time/src/cron.ts` — 新增导出: floorMinute
- **[ast-export-added]** `packages/util/time/src/cron.ts` — 新增导出: Cron
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: validatedZone
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: MAX_RRULE_COUNT
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: MAX_PERIOD_CANDIDATES
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: MAX_SET_POSITIONS
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: MIN_RRULE_YEAR
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: DAY_MS
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: LAST_RRULE_WALL_MS
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: Frequency
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: CYCLE_PERIODS
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: CYCLE_MS
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: WEEKDAYS
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: SUPPORTED_PARTS
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: ListRange
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: LIST_RANGES
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: TIME_PARTS
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: DTSTART_UTC
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: DTSTART_ZONED
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: BASIC_UTC
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: UNSIGNED_INTEGER
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: SIGNED_INTEGER
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: WEEKDAY_SELECTOR
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: ByDayCounts
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: RuleValues
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: PreparedRRule
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: OccurrenceWindow
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: basicTime
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: year
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: month
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: day
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: hour
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: minute
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: recurrenceLines
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: parseStart
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: ruleParts
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: isFrequency
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: frequencyOf
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: positiveValue
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: untilOf
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: weekStartOf
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: listValues
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: signed
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: byDayOf
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: ordinals
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: ruleValues
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: frequency
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: until
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: weekStart
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: lists
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: checkCombination
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: byDayDays
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: periodDays
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: checkCost
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: startDefaults
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: gcd
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: prepareRRule
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: recurrenceParts
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: recurrenceValues
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: recurrence
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: wallOf
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: instantOf
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: basic
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: dayOf
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: weekStartDay
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: monthOf
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: yearOf
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: floorStep
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: periodStart
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: periodAnchor
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: libraryRule
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: hasCandidate
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: firstYear
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: years
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: cycleYears
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: cycles
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: scanWindow
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: boundWall
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: wall
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: dispatchWindow
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: savedWall
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: fromWall
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: countWindow
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: nextOccurrence
- **[ast-export-added]** `packages/util/time/src/rrule.ts` — 新增导出: RRule
- **[ast-export-added]** `packages/util/time/src/recurrence.ts` — 新增导出: RecurrenceOccurrence
- **[ast-export-added]** `packages/util/time/src/recurrence.ts` — 新增导出: RecurrenceRejection
- **[ast-export-added]** `packages/util/time/src/recurrence.ts` — 新增导出: RecurrenceResult
- **[ast-export-added]** `packages/util/time/src/recurrence.ts` — 新增导出: RecurrenceInputError
- **[ast-export-added]** `packages/util/time/src/recurrence.ts` — 新增导出: parseRecurrence
- **[ast-export-added]** `packages/util/time/src/recurrence.ts` — 新增导出: recurrenceDecision
- **[ast-export-added]** `packages/web/tool-web/src/search.ts` — 新增导出: WEB_SEARCH_SUMMARY_MAX_CHARS
- **[ast-export-added]** `packages/web/tool-web/src/search.ts` — 新增导出: SUMMARY_ELLIPSIS
- **[ast-export-added]** `packages/web/tool-web/src/search.ts` — 新增导出: excerpt
- **[ast-export-added]** `packages/web/tool-web/src/search.ts` — 新增导出: modelSource
- **[ast-export-added]** `packages/web/web-deepseek-api/src/search.ts` — 新增导出: DEEPSEEK_SEARCH_REQUESTS_PER_SECOND
- **[ast-export-added]** `packages/web/web-deepseek-api/src/search.ts` — 新增导出: abortableDelay
- **[ast-export-added]** `packages/web/web/src/types.ts` — 新增导出: WebProviderInfo
- **[ast-export-added]** `packages/web/web/src/types.ts` — 新增导出: WebProviderList
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/markdown/render.tsx` — 新增导出: DESKTOP_MEDIA_ROUTES
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/markdown/render.tsx` — 新增导出: imageLoads
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/markdown/render.tsx` — 新增导出: nextImageLoad
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/markdown/render.tsx` — 新增导出: freshImageUrl
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/markdown/render.tsx` — 新增导出: MarkdownFenceSeat
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/markdown/render.tsx` — 新增导出: contextMenuProps
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/markdown/render.tsx` — 新增导出: imageProps
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/markdown/render.tsx` — 新增导出: localFileName
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/markdown/render.tsx` — 新增导出: urlFileName
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/icons/artwork.ts` — 新增导出: IconArtwork
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/icons/artwork.ts` — 新增导出: ICON_ARTWORK
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/icons/artwork.ts` — 新增导出: IconGlyph
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/icons/artwork.ts` — 新增导出: IconWeight
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/icons/artwork.ts` — 新增导出: STROKES
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/icons/artwork.ts` — 新增导出: iconSymbolId
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/icons/artwork.ts` — 新增导出: IconSymbolId
- ★ **[ast-export-added]** `packages/client/ui-primitives/src/icons/artwork.ts` — 新增导出: ICON_SYMBOLS
- **[ast-export-added]** `packages/experimental/cua/src/application-access.ts` — 新增导出: ApplicationAuthorizationResult
- **[ast-export-added]** `packages/experimental/cua/src/application-access.ts` — 新增导出: AccessOptions
- **[ast-export-added]** `packages/experimental/cua/src/application-access.ts` — 新增导出: ClientSelections
- **[ast-export-added]** `packages/experimental/cua/src/application-access.ts` — 新增导出: ActiveOperation
- **[ast-export-added]** `packages/experimental/cua/src/application-access.ts` — 新增导出: ApplicationAccess
- **[ast-export-added]** `packages/experimental/cua/src/application-access.ts` — 新增导出: blockedApps
- **[ast-export-added]** `packages/experimental/cua/src/application-access.ts` — 新增导出: requireAccess
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
- **[ast-export-added]** `packages/experimental/liveshare/src/host/tunnel-supervision.ts` — 新增导出: fetchRelay
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
- **[ast-export-added]** `packages/schedule/schedule/src/types.ts` — 新增导出: ScheduleInputErrorCode
- **[ast-export-added]** `packages/schedule/schedule/src/types.ts` — 新增导出: RRuleScheduleRecord
- **[ast-export-added]** `packages/schedule/schedule/src/types.ts` — 新增导出: ScheduleTiming
- **[ast-export-added]** `packages/schedule/schedule/src/types.ts` — 新增导出: ScheduleSessionCreateSpec
- **[ast-export-added]** `packages/schedule/schedule/src/types.ts` — 新增导出: ScheduleTarget
- **[ast-export-added]** `packages/schedule/schedule/src/types.ts` — 新增导出: ScheduleTargetRequest
- **[ast-export-added]** `packages/schedule/schedule/src/types.ts` — 新增导出: ScheduleDeliveryHistoryPage
- **[ast-export-added]** `packages/schedule/schedule/src/types.ts` — 新增导出: ScheduleDeliveryHistoryMiss
- **[ast-export-added]** `packages/schedule/schedule/src/types.ts` — 新增导出: ScheduleListResult
- **[ast-export-added]** `packages/schedule/schedule/src/types.ts` — 新增导出: ScheduleViewRequest
- **[ast-export-added]** `packages/schedule/schedule/src/types.ts` — 新增导出: ScheduleNotFoundResult
- **[ast-export-added]** `packages/schedule/schedule/src/types.ts` — 新增导出: ScheduleViewResult
- **[ast-export-added]** `packages/schedule/schedule/src/types.ts` — 新增导出: SchedulePatch
- **[ast-export-added]** `packages/schedule/schedule/src/types.ts` — 新增导出: ScheduleEditRequest
- **[ast-export-added]** `packages/schedule/schedule/src/types.ts` — 新增导出: ScheduleConflictResult
- **[ast-export-added]** `packages/schedule/schedule/src/types.ts` — 新增导出: ScheduleEditResult
- **[ast-export-added]** `packages/schedule/schedule/src/types.ts` — 新增导出: ScheduleRunRequest
- **[ast-export-added]** `packages/schedule/schedule/src/types.ts` — 新增导出: ScheduleExecutionPendingResult
- **[ast-export-added]** `packages/schedule/schedule/src/types.ts` — 新增导出: ScheduleRunResult
- **[ast-export-added]** `packages/schedule/schedule/src/types.ts` — 新增导出: ScheduleDeleteInactiveResult
- **[ast-export-added]** `packages/experimental/cua/src/application-types.ts` — 新增导出: CuaApplicationId
- **[ast-export-added]** `packages/experimental/cua/src/application-types.ts` — 新增导出: CuaApplicationGrant
- **[config-field-added]** `config:@deepseek-ai/dsh-client-ui-account-notifications` — 新增配置字段: notificationPollIntervalMs
- **[config-field-added]** `config:@deepseek-ai/dsh-client-ui-trajectory` — 新增配置字段: maxResultsPerSession
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
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-client-ui-forge` — 新增配置字段: maxCommits
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-client-ui-forge` — 新增配置字段: testPaths
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-client-ui-forge` — 新增配置字段: interfacePaths
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-client-ui-forge` — 新增配置字段: maxCachedReviewBytes
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-client-ui-forge` — 新增配置字段: reviewRefreshMs
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-cua-macos` — 新增配置字段: permissionPollIntervalMs
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-cua-macos` — 新增配置字段: sourceSigning
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-cua-macos` — 新增配置字段: identity
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-cua-macos` — 新增配置字段: keychain
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-forge` — 新增配置字段: activeIntervalMs
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-forge` — 新增配置字段: idleIntervalMs
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-forge` — 新增配置字段: maxBackoffMs
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-forge` — 新增配置字段: fetchTimeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-forge-github` — 新增配置字段: ghCommand
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-forge-github` — 新增配置字段: hosts
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-forge-github` — 新增配置字段: timeoutMs
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-forge-github` — 新增配置字段: maxOutputBytes
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-forge-github` — 新增配置字段: maxReviewThreads
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-forge-github` — 新增配置字段: maxCommits
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-forge-github` — 新增配置字段: maxViewedFiles
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
- **[config-field-added]** `config:@deepseek-ai/dsh-experimental-worktree` — 新增配置字段: retainOnArchive
- **[config-field-added]** `config:@deepseek-ai/dsh-headless` — 新增配置字段: permissionMode
- **[config-field-added]** `config:@deepseek-ai/dsh-headless` — 新增配置字段: approvalPolicy
- **[config-field-added]** `config:@deepseek-ai/dsh-llm-pi-ai` — 新增配置字段: maxRequestImages
- **[config-field-added]** `config:@deepseek-ai/dsh-llm-pi-ai` — 新增配置字段: imageOffloadCountQuantum
- **[config-field-added]** `config:@deepseek-ai/dsh-llm-replay` — 新增配置字段: badge
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
- **[config-field-added]** `config:@deepseek-ai/dsh-ptc-runtime-node` — 新增配置字段: stopGraceMs
- **[config-field-added]** `config:@deepseek-ai/dsh-sandbox-policy` — 新增配置字段: additionalWritableRoots
- **[config-field-added]** `config:@deepseek-ai/dsh-schedule` — 新增配置字段: newSessionIntervalSeconds
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
- **[config-field-added]** `config:@deepseek-ai/dsh-tool-executor-ptc` — 新增配置字段: maxParallelSubCalls
- **[config-field-added]** `config:@deepseek-ai/dsh-tool-fs` — 新增配置字段: applyPatch
- **[config-field-added]** `config:@deepseek-ai/dsh-tool-jobs` — 新增配置字段: inlineOutputBytes
- **[config-field-added]** `config:@deepseek-ai/dsh-tool-office` — 新增配置字段: activationSkills
- **[config-field-added]** `config:@deepseek-ai/dsh-tool-office` — 新增配置字段: maxImages
- **[config-field-added]** `config:@deepseek-ai/dsh-tool-office` — 新增配置字段: maxImagePixels
- **[config-field-added]** `config:@deepseek-ai/dsh-tool-office` — 新增配置字段: maxImageDimension
- **[config-field-added]** `config:@deepseek-ai/dsh-tool-office` — 新增配置字段: maxImageBytes
- ★ **[config-field-added]** `config:@deepseek-ai/dsh-tool-subagent` — 新增配置字段: modelSelection
- ★ **[config-field-added]** `config:@deepseek-ai/dsh-tool-subagent` — 新增配置字段: modelDiscovery
- ★ **[config-field-added]** `config:@deepseek-ai/dsh-tool-subagent-control` — 新增配置字段: interrupt
- **[config-field-added]** `config:@deepseek-ai/dsh-tool-web` — 新增配置字段: searchSummaryMaxChars
- **[config-field-added]** `config:@deepseek-ai/dsh-web-deepseek-api` — 新增配置字段: searchRequestsPerSecond
- **[config-field-added]** `config:@deepseek-ai/dsh-web-deepseek-api` — 新增配置字段: searchBilling
- **[config-field-added]** `config:@deepseek-ai/dsh-web-deepseek-api` — 新增配置字段: fetchBilling
- **[config-field-added]** `config:@deepseek-ai/dsh-web-deepseek-api` — 新增配置字段: searchBaseURL
- **[config-field-added]** `config:@deepseek-ai/dsh-web-deepseek-api` — 新增配置字段: searchApiKeyEnv
- **[config-field-added]** `config:@deepseek-ai/dsh-web-deepseek-api` — 新增配置字段: fetchBaseURL
- **[config-field-added]** `config:@deepseek-ai/dsh-web-deepseek-api` — 新增配置字段: fetchApiKeyEnv
