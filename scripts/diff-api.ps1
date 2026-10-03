#Requires -Version 5.1
<#
.SYNOPSIS
  对比 DSH 官方 checkout 两个 ref 之间的「插件 API 面」差异。
.DESCRIPTION
  API 面范围见 docs/api-surface.md。产出 archive/<From>_to_<To>/report.{json,md}。
  启发式保守：可能多报 warning，不应漏报 breaking。误报请记录 issue 收紧规则。
.EXAMPLE
  ./scripts/diff-api.ps1 -Repo <官方checkout路径> -From dsh-v0.1.7-rc.2 -To dsh-v0.2.0-rc.2
#>
[CmdletBinding()]
param(
    [string]$Repo = $env:DSH_CHECKOUT,
    [Parameter(Mandatory)][string]$From,
    [Parameter(Mandatory)][string]$To,
    [string]$OutDir,
    [string]$ToolRoot = $PSScriptRoot
)

$ErrorActionPreference = 'Stop'
if (-not $Repo) { throw "未指定 -Repo 且环境变量 DSH_CHECKOUT 为空。" }
if (-not (Test-Path (Join-Path $Repo '.git'))) { throw "Repo 不是 git checkout: $Repo" }

$repoName = Split-Path $Repo -Leaf
$fromShort = $From -replace '^dsh-v', ''
$toShort   = $To   -replace '^dsh-v', ''
if (-not $OutDir) { $OutDir = Join-Path (Split-Path $ToolRoot -Parent) "archive/$fromShort`_to_$toShort" }
New-Item -ItemType Directory -Force -Path $OutDir | Out-Null

function GitArgs([string[]]$Args_) {
    # 在指定 repo 上执行 git，返回 stdout 行数组
    & git -C $Repo @Args_ 2>&1 | ForEach-Object { "$_" }
}

# --- 0. 校验 ref 存在 -------------------------------------------------------
foreach ($ref in @($From, $To)) {
    $null = GitArgs @('rev-parse', '--verify', "$ref^{commit}")
    if ($LASTEXITCODE -ne 0) { throw "ref 不存在: $ref (repo: $Repo)" }
}

# --- 1. API 面路径（与 docs/api-surface.md 保持一致）------------------------
# 注意：包是嵌套结构，如 packages/api/gateway/src/index.ts
$surfacePaths = @(
    'packages/**/package.json',
    'packages/**/src/index.ts',
    'docs/cordis-api/*.md',
    'docs/subsystems/*.md',
    'docs/upgrade-guide/**/*.md',
    'docs/*.md'
)

# --- 2. 收集两个 ref 的 API 面清单 -------------------------------------------
function Get-SurfaceSnapshot([string]$ref) {
    $snap = @{ Packages = @{}; Docs = @{}; Config = @{} }
    # 2a. 包：以「存在的 src/index.ts」为准（嵌套结构），读取同级 package.json 的 exports
    $idxFiles = GitArgs @('ls-tree', '-r', '--name-only', $ref, 'packages') |
        Where-Object { $_ -match '/src/index\.ts$' -and $_ -notmatch 'node_modules|/fixtures/|/tests?/' }
    foreach ($idxPath in $idxFiles) {
        $pkgName = ($idxPath -replace '/src/index\.ts$', '') -replace '^packages/', ''
        $pkgJsonPath = "packages/$pkgName/package.json"
        $exports = @()
        $pkgJson = GitArgs @('show', "${ref}:$pkgJsonPath") -join "`n"
        if ($pkgJson) {
            try { $parsed = $pkgJson | ConvertFrom-Json; if ($parsed.exports) { $exports = @($parsed.exports.PSObject.Properties.Name) } } catch {}
        }
        $idx = GitArgs @('show', "${ref}:$idxPath") -join "`n"
        $symbols = @()
        if ($idx) {
            $symbols = [regex]::Matches($idx, '(?m)^\s*export\s+(?:async\s+)?(?:const|function|class|type|interface|enum)\s+([A-Za-z0-9_]+)') |
                ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique
        }
        $snap.Packages[$pkgName] = @{ exports = $exports; symbols = @($symbols) }
    }
    # 2b. 文档
    $docFiles = GitArgs @('ls-tree', '-r', '--name-only', $ref, 'docs') |
        Where-Object { $_ -match '\.md$' -and $_ -notmatch '\.i18n\.yaml$' }
    foreach ($d in $docFiles) {
        $lineCount = (GitArgs @('show', "${ref}:$d") | Measure-Object -Line).Lines
        $snap.Docs[$d] = $lineCount
    }
    # 2c. 插件配置字段面：从 docs/config-catalog.md（生成物，运行时 schema 权威契约）提取
    #     每个包的 config 字段集合。字段定义在 native 或深层源码里也能被覆盖。
    $catalog = GitArgs @('show', "${ref}:docs/config-catalog.md")
    if ($catalog) {
        $currentPkg = $null
        foreach ($line in $catalog) {
            if ($line -match '^## `(@[^`]+)`') { $currentPkg = $Matches[1]; if (-not $snap.Config.ContainsKey($currentPkg)) { $snap.Config[$currentPkg] = @() }; continue }
            if ($null -eq $currentPkg) { continue }
            if ($line -match '^\s+([A-Za-z_][A-Za-z0-9_]*)\??:') {
                $f = $Matches[1]
                if ($f -notin $snap.Config[$currentPkg]) { $snap.Config[$currentPkg] += $f }
            }
        }
    }
    return $snap
}

Write-Host "[1/4] 采集 $From 快照..."
$old = Get-SurfaceSnapshot $From
Write-Host "[2/4] 采集 $To 快照..."
$new = Get-SurfaceSnapshot $To

# --- 3. 逐项对比 -------------------------------------------------------------
$findings = New-Object System.Collections.Generic.List[object]
function Add-Finding([string]$severity, [string]$kind, [string]$path, [string]$detail) {
    $findings.Add([pscustomobject]@{ severity = $severity; kind = $kind; path = $path; detail = $detail })
}

# 3a. 包级
$allPkgs = @($old.Packages.Keys + $new.Packages.Keys | Sort-Object -Unique)
foreach ($p in $allPkgs) {
    $hadOld = $old.Packages.ContainsKey($p); $hasNew = $new.Packages.ContainsKey($p)
    if ($hadOld -and -not $hasNew) { Add-Finding 'breaking' 'package-removed' "packages/$p" "包被移除或不再是独立包" ; continue }
    if (-not $hadOld -and $hasNew) { Add-Finding 'info' 'package-added' "packages/$p" '新增包'; continue }

    $o = $old.Packages[$p]; $n = $new.Packages[$p]
    $removedSyms = @($o.symbols | Where-Object { $_ -notin $n.symbols })
    $addedSyms   = @($n.symbols | Where-Object { $_ -notin $o.symbols })
    if ($removedSyms.Count -gt 0) {
        Add-Finding 'breaking' 'export-removed' "packages/$p/src/index.ts" "删除导出: $($removedSyms -join ', ')"
    }
    if ($addedSyms.Count -gt 0) { Add-Finding 'info' 'export-added' "packages/$p/src/index.ts" "新增导出: $($addedSyms -join ', ')" }
    $oldExp = (@($o.exports) | Sort-Object) -join '|'
    $newExp = (@($n.exports) | Sort-Object) -join '|'
    if ($oldExp -ne $newExp) { Add-Finding 'warning' 'exports-map-changed' "packages/$p/package.json" "package.json exports 字段变化，请人工确认入口路径" }
}

# 3b. 文档级
$allDocs = @($old.Docs.Keys + $new.Docs.Keys | Sort-Object -Unique)
foreach ($d in $allDocs) {
    $hadOld = $old.Docs.ContainsKey($d); $hasNew = $new.Docs.ContainsKey($d)
    if ($hadOld -and -not $hasNew) { Add-Finding 'breaking' 'doc-removed' $d '契约文档被删除/改名'; continue }
    if (-not $hadOld -and $hasNew) {
        if ($d -match '^docs/upgrade-guide/') {
            Add-Finding 'warning' 'upgrade-guide-added' $d '官方新增升级指南 = 上游承认存在需要迁移的变更，务必人工阅读'
        } else { Add-Finding 'info' 'doc-added' $d '新增文档' }
        continue
    }
    $o = [int]$old.Docs[$d]; $n = [int]$new.Docs[$d]
    if ($o -gt 0) {
        $change = [math]::Abs($n - $o) / $o
        if ($change -ge 0.3) { Add-Finding 'warning' 'doc-major-rewrite' $d ("行数 {0} -> {1}（{2:P0}），可能存在行为级变更，建议人工复核" -f $o, $n, $change) }
    }
}

# 3c. 配置字段级（插件 cordis.yml 可写的 config，即用户「直接改 settings 内容」的面）
$allCfg = @($old.Config.Keys + $new.Config.Keys | Sort-Object -Unique)
foreach ($pkg in $allCfg) {
    $hadOld = $old.Config.ContainsKey($pkg); $hasNew = $new.Config.ContainsKey($pkg)
    if ($hadOld -and -not $hasNew) { Add-Finding 'breaking' 'config-scope-removed' "config:$pkg" '该包从配置目录移除，其 cordis.yml config 块不再可用'; continue }
    if (-not $hadOld -and $hasNew) { Add-Finding 'info' 'config-scope-added' "config:$pkg" '新增可配置包'; continue }

    $o = $old.Config[$pkg]; $n = $new.Config[$pkg]
    $removedFields = @($o | Where-Object { $_ -notin $n })
    $addedFields   = @($n | Where-Object { $_ -notin $o })
    if ($removedFields.Count -gt 0) {
        Add-Finding 'breaking' 'config-field-removed' "config:$pkg" "配置字段被删除: $($removedFields -join ', ')（cordis.yml 里写这些字段将失效）"
    }
    if ($addedFields.Count -gt 0) {
        Add-Finding 'info' 'config-field-added' "config:$pkg" "新增配置字段: $($addedFields -join ', ')"
    }
}

# --- 4. 产物 ----------------------------------------------------------------
Write-Host "[3/4] 汇总 $($findings.Count) 条 findings..."
$report = [pscustomobject]@{
    tool      = 'dsh-api-watch v0'
    repo      = Split-Path $Repo -Leaf   # 只记目录名，不泄露本地绝对路径
    from      = $From
    to        = $To
    generated = (Get-Date).ToUniversalTime().ToString('o')
    counts    = @{
        breaking = @($findings | Where-Object severity -eq 'breaking').Count
        warning  = @($findings | Where-Object severity -eq 'warning').Count
        info     = @($findings | Where-Object severity -eq 'info').Count
    }
    findings  = $findings
}
$jsonPath = Join-Path $OutDir 'report.json'
$report | ConvertTo-Json -Depth 5 | Set-Content -Encoding UTF8 $jsonPath

$md = New-Object System.Collections.Generic.List[string]
$md.Add("# DSH 插件 API 面比对：``$From`` → ``$To``")
$md.Add("")
$md.Add("> 生成于 $($report.generated) · 工具 dsh-api-watch v0（启发式， breaking 结论建议复核 diff）")
$md.Add("")
$md.Add("| 级别 | 数量 |")
$md.Add("|---|---|")
$md.Add("| breaking | $($report.counts.breaking) |")
$md.Add("| warning | $($report.counts.warning) |")
$md.Add("| info | $($report.counts.info) |")
foreach ($sev in @('breaking', 'warning', 'info')) {
    $items = @($findings | Where-Object severity -eq $sev)
    if ($items.Count -eq 0) { continue }
    $md.Add(""); $md.Add("## $sev"); $md.Add("")
    foreach ($f in $items) {
        $md.Add("- **[$($f.kind)]** ``$($f.path)`` — $($f.detail)")
    }
}
$mdPath = Join-Path $OutDir 'report.md'
$md | Set-Content -Encoding UTF8 $mdPath

Write-Host "[4/4] 完成："
Write-Host "  json: $jsonPath"
Write-Host "  md  : $mdPath"
if ($report.counts.breaking -gt 0) { exit 2 } # 供 CI 门禁区分「有 breaking」
