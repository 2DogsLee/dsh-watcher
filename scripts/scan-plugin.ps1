#Requires -Version 5.1
<#
.SYNOPSIS
  拿一份 dsh-api-watch 报告扫描插件源码，产出「改动点 / 风险点」影响分析。
.DESCRIPTION
  从 report.json 提取可探测信号（被删包名、被删导出符号、被删配置字段、变更文档名），
  在插件仓库文本中逐一定位命中行，输出 impact.md：
    - 改动点 = breaking 命中（必须改，附文件:行）
    - 风险点 = warning 命中 + 行为级提示（建议人工复核）
    - 其余 breaking 但插件中无命中 = 声明「本轮扫描未命中」，供确认依赖面
.EXAMPLE
  ./scripts/scan-plugin.ps1 -Report ../archive/0.2.0-rc.1_to_0.2.1-alpha.1/report.json -PluginRepo ../my-plugin
#>
[CmdletBinding()]
param(
    [Parameter(Mandatory)][string]$Report,
    [Parameter(Mandatory)][string]$PluginRepo,
    [string]$OutFile,
    [string[]]$Include = @('*.ts', '*.tsx', '*.js', '*.mjs', '*.cjs', '*.json', '*.yml', '*.yaml', '*.md', '*.ps1'),
    [string[]]$ExcludeDir = @('node_modules', '.git', 'dist', 'build', 'coverage')
)

$ErrorActionPreference = 'Stop'
if (-not (Test-Path $Report)) { throw "报告不存在: $Report" }
if (-not (Test-Path $PluginRepo)) { throw "插件目录不存在: $PluginRepo" }
$json = Get-Content $Report -Raw | ConvertFrom-Json
if (-not $OutFile) { $OutFile = Join-Path (Split-Path $Report) "impact-$($(Split-Path $PluginRepo -Leaf))-$($json.to).md" }

# --- 1. 从 findings 提取探测信号 ---------------------------------------------
$probes = New-Object System.Collections.Generic.List[object]
foreach ($f in $json.findings) {
    switch -Regex ($f.kind) {
        'package-removed' {
            # 探测：包路径末段（目录名），插件可能 import 其 npm 名或 monorepo 相对路径
            $seg = ($f.path -split '/')[-1]
            $probes.Add([pscustomobject]@{ finding = $f; signal = $seg; category = '依赖包移除' })
        }
        'export-removed' {
            # detail 形如「删除导出: A, B, C」
            $syms = ($f.detail -replace '^删除导出:\s*', '') -split ',\s*'
            foreach ($s in $syms) { $probes.Add([pscustomobject]@{ finding = $f; signal = $s.Trim(); category = '导出符号删除' }) }
        }
        'config-field-removed' {
            $fields = ($f.detail -replace '^配置字段被删除:\s*', '') -replace '（.*', '' -split ',\s*'
            foreach ($s in $fields) { $probes.Add([pscustomobject]@{ finding = $f; signal = $s.Trim(); category = '配置字段删除' }) }
        }
        'config-scope-removed' {
            $pkg = $f.path -replace '^config:', ''
            $probes.Add([pscustomobject]@{ finding = $f; signal = $pkg; category = '配置块整体移除' })
        }
        'doc-removed' {
            $probes.Add([pscustomobject]@{ finding = $f; signal = ($f.path -replace '\.md$', ''); category = '契约文档删除' })
        }
        'doc-major-rewrite' {
            $probes.Add([pscustomobject]@{ finding = $f; signal = ($f.path -replace '\.md$', ''); category = '契约文档大改（行为级风险）' })
        }
        'upgrade-guide-added' {
            $probes.Add([pscustomobject]@{ finding = $f; signal = ''; category = '官方升级指南（整包风险提示）' })
        }
    }
}

# --- 2. 扫插件源码 -------------------------------------------------------------
# 排除上次生成的 impact 报告与输出文件自身，避免「报告自命中」假阳性
$allFiles = Get-ChildItem $PluginRepo -Recurse -File -Include $Include |
    Where-Object { $p = $_.FullName; -not ($ExcludeDir | Where-Object { $p -like "*\$_\*" }) -and
        ($_.Name -notlike 'impact-*.md') -and ($_.FullName -ne ((Resolve-Path -LiteralPath $OutFile -ErrorAction SilentlyContinue).Path)) }
$hits = New-Object System.Collections.Generic.List[object]
foreach ($pr in $probes) {
    if (-not $pr.signal -or $pr.signal.Length -lt 3) { continue }
    foreach ($file in $allFiles) {
        $lines = Get-Content $file.FullName -ErrorAction SilentlyContinue
        for ($i = 0; $i -lt $lines.Count; $i++) {
            if ($lines[$i] -like "*$($pr.signal)*") {
                $hits.Add([pscustomobject]@{
                    probe = $pr; file = (Resolve-Path -Relative $file.FullName); line = $i + 1; text = $lines[$i].Trim()
                })
            }
        }
    }
}

# --- 2b. 插件 DSH 依赖面 + 动态访问点（自动复核依据）---------------------------
$depSurface = New-Object System.Collections.Generic.List[string]   # @deepseek-ai/* 模块名 + inject 服务名
$dynamicPoints = New-Object System.Collections.Generic.List[object] # ctx[...] 动态访问
foreach ($file in $allFiles) {
    $lines = Get-Content $file.FullName -ErrorAction SilentlyContinue
    for ($i = 0; $i -lt $lines.Count; $i++) {
        $t = $lines[$i]
        foreach ($m in [regex]::Matches($t, "@deepseek-ai/([A-Za-z0-9/_-]+)")) {
            $depSurface.Add($m.Value)
            foreach ($seg in ($m.Groups[1].Value -split '/')) { if ($seg.Length -ge 3) { $depSurface.Add($seg) } }
        }
        foreach ($m in [regex]::Matches($t, "inject\s*=\s*\[([^\]]*)\]")) {
            # inject 数组单双引号都可能出现（["invariants"] / ['invariants']）
            foreach ($s in [regex]::Matches($m.Groups[1].Value, "[""']([^""']+)[""']")) { $depSurface.Add($s.Groups[1].Value) }
        }
        if ($t -match 'ctx\s*\[' -or $t -match '\[["'']invariants["'']\]') {
            $dynamicPoints.Add([pscustomobject]@{ file = (Resolve-Path -Relative $file.FullName); line = $i + 1; text = $t.Trim() })
        }
    }
}
$depSet = [System.Collections.Generic.HashSet[string]]::new([StringComparer]::OrdinalIgnoreCase)
foreach ($d in $depSurface) { $null = $depSet.Add($d) }

# 未命中 finding 的路径片段是否出现在依赖面（标识符再按 - 分词，如 dsh-invariants -> invariants）
function Test-InDepSurface([string]$path) {
    $core = $path -replace '^config:@deepseek-ai/', '' -replace '^packages/', '' -replace '^docs/', ''
    foreach ($seg in ($core -split '[/]')) {
        if ($seg.Length -ge 3 -and $depSet.Contains($seg)) { return $true }
        foreach ($tok in ($seg -split '-')) {
            if ($tok.Length -ge 5 -and $depSet.Contains($tok)) { return $true }
        }
    }
    foreach ($seg in ($path -split '[/]')) {
        if ($seg.Length -ge 4 -and $depSet.Contains($seg)) { return $true }
    }
    return $false
}

# --- 3. 产物 ----------------------------------------------------------------
$breakingHits  = @($hits | Where-Object { $_.probe.finding.severity -eq 'breaking' })
$warningHits   = @($hits | Where-Object { $_.probe.finding.severity -eq 'warning' })
$touchedFindingPaths = @($hits | ForEach-Object { $_.probe.finding.path } | Sort-Object -Unique)
$untouchedBreaking = @($json.findings | Where-Object { $_.severity -eq 'breaking' -and $_.path -notin $touchedFindingPaths })
# 提前计算复核分组（结论行需要）
$verified = @($untouchedBreaking | Where-Object { -not (Test-InDepSurface $_.path) })
$needsHuman = @($untouchedBreaking | Where-Object { Test-InDepSurface $_.path })

$md = New-Object System.Collections.Generic.List[string]
$md.Add("# 插件升级影响分析：$($(Split-Path $PluginRepo -Leaf)) × DSH ``$($json.from)`` → ``$($json.to)``")
$md.Add('')
$md.Add("> 基于 report.json（$($json.generated)）扫描 ``$PluginRepo``（$($allFiles.Count) 个文件）")
$md.Add('> 结论：**改动点 ' + $breakingHits.Count + ' 处 · 风险点 ' + $warningHits.Count + ' 处 · 未命中 breaking ' + $untouchedBreaking.Count + ' 条（其中自动复核通过 ' + $verified.Count + ' 条）**')
$md.Add('')

if ($breakingHits.Count -gt 0) {
    $md.Add('## 一、改动点（breaking 命中，必须处理）'); $md.Add('')
    $groups = $breakingHits | Group-Object { $_.probe.finding.path }
    foreach ($g in $groups) {
        $f = $g.Group[0].probe.finding
        $md.Add("### [$($f.kind)] ``$($f.path)`` — $($f.detail)"); $md.Add('')
        foreach ($h in ($g.Group | Sort-Object file, line)) {
            $md.Add("- ``$($h.file):$($h.line)``：``$($h.text)``")
        }
        $md.Add('')
    }
} else {
    $md.Add('## 一、改动点'); $md.Add(''); $md.Add('本轮 breaking 条目在你的代码中**零命中**——如果 registry 声明完整，可判定本轮升级不破坏你的插件。'); $md.Add('')
}

if ($warningHits.Count -gt 0) {
    $md.Add('## 二、风险点（warning 命中，建议人工复核）'); $md.Add('')
    foreach ($h in $warningHits) {
        $md.Add("- ``$($h.file):$($h.line)`` — $($h.probe.category)：``$($h.text)``（来源：``$($h.probe.finding.path)``）")
    }
    $md.Add('')
} else {
    $md.Add('## 二、风险点'); $md.Add(''); $md.Add('warning 级条目在你的代码中零命中。'); $md.Add('')
}

# 未命中 breaking 自动复核：依赖面零交集 → ✅；有交集但未定位到行 → ⚠️ 留人工
$verified = @($untouchedBreaking | Where-Object { -not (Test-InDepSurface $_.path) })
$needsHuman = @($untouchedBreaking | Where-Object { Test-InDepSurface $_.path })

if ($untouchedBreaking.Count -gt 0) {
    $md.Add('## 三、未命中 breaking 的自动复核'); $md.Add('')
    $md.Add("复核依据：插件 DSH 依赖面（import 模块 + inject 服务名，共 $($depSet.Count) 个标识）与各 breaking 条目的路径片段求交集。")
    $md.Add('')
    if ($verified.Count -gt 0) {
        $md.Add("### ✅ 自动复核通过（依赖面零交集，$($verified.Count) 条）"); $md.Add('')
        $md.Add('以下条目涉及的包/文档/配置在你的依赖面中**完全没有出现**，且全文文本扫描零引用，可判定与本插件无关：'); $md.Add('')
        foreach ($f in $verified) { $md.Add("- ✅ **[$($f.kind)]** ``$($f.path)``") }
        $md.Add('')
    }
    if ($needsHuman.Count -gt 0) {
        $md.Add("### ⚠️ 需人工确认（依赖面有交集但未定位到具体行，$($needsHuman.Count) 条）"); $md.Add('')
        $md.Add('以下条目涉及的包名/服务名出现在你的依赖面中（可能只是同名词），但源码里没有直接引用行——请对照确认：'); $md.Add('')
        foreach ($f in $needsHuman) { $md.Add("- ⚠️ **[$($f.kind)]** ``$($f.path)`` — $($f.detail)") }
        $md.Add('')
    }
}

if ($dynamicPoints.Count -gt 0) {
    $md.Add('### 动态访问点（文本扫描无法兜底的位置）'); $md.Add('')
    $md.Add('以下代码通过运行时字符串/动态索引访问 ctx，静态扫描无法判定是否触及被删 API：'); $md.Add('')
    foreach ($d in $dynamicPoints) { $md.Add("- ``$($d.file):$($d.line)``：``$($d.text)``") }
    $md.Add('')
}

$md.Add('## 建议动作')
$md.Add('')
if ($breakingHits.Count -gt 0) {
    $md.Add('1. 逐条处理「改动点」：对照 report 里被删符号/字段，查官方 `docs/upgrade-guide/` 与新版 `docs/cordis-api` 里的替代物；')
    $md.Add('2. 处理完在本仓库重跑 diff-api 确认下轮报告不再命中；')
} else {
    $md.Add('1. 补全 `registry.json` 声明后重扫，确认依赖面覆盖；')
}
$md.Add('3. 行为级变化（文档大改/升级指南）无法靠文本扫描兜底，按「风险点」提示人工读对应文档。')

$md | Set-Content -Encoding UTF8 $OutFile
Write-Host "scan: 改动点=$($breakingHits.Count) 风险点=$($warningHits.Count) 未命中breaking=$($untouchedBreaking.Count)（自动复核通过=$($verified.Count) 待人工=$($needsHuman.Count)）动态访问点=$($dynamicPoints.Count) -> $OutFile"
