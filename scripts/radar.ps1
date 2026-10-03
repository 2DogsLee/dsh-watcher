#Requires -Version 7.0
<#
.SYNOPSIS
  dsh-api-watch 雷达：聚合官方 Discussions 与全 GitHub 的 DSH 相关问题反馈，产出每日摘要。
.DESCRIPTION
  信号源（v0）：
    1. 官方 repo（deepseek-ai/deepseek-harness）Discussions，关键词命中 breaking/migration 等；
    2. 全 GitHub 开放的 issues，正文提到 deepseek-harness 的第三方反馈。
  产物：archive/radar/digest.{md,json}。需要环境变量 GH_TOKEN。
.EXAMPLE
  ./scripts/radar.ps1
#>
[CmdletBinding()]
param(
    [string]$Upstream = 'deepseek-ai/deepseek-harness',
    [string]$OutDir,
    [string]$ToolRoot = $PSScriptRoot
)

$ErrorActionPreference = 'Stop'
if (-not $env:GH_TOKEN) { throw '需要环境变量 GH_TOKEN。' }
if (-not $OutDir) { $OutDir = Join-Path (Split-Path $ToolRoot -Parent) 'archive/radar' }
New-Item -ItemType Directory -Force -Path $OutDir | Out-Null

$h = @{ Authorization = "Bearer $($env:GH_TOKEN)"; 'User-Agent' = 'dsh-api-watch'; Accept = 'application/vnd.github+json' }
$items = New-Object System.Collections.Generic.List[object]

# --- 1. 官方 Discussions（GraphQL search，按更新时间）------------------------
# GitHub 搜索的 OR 链超过 3 个词会静默返回 0 条，必须分批查询后去重
$keywords = @('breaking', 'migration', 'migrate', 'plugin', 'compatible', '适配', '破坏性', '迁移')
$seen = @{}
$batches = @(); for ($i = 0; $i -lt $keywords.Count; $i += 3) { $batches += ,@($keywords[$i..([Math]::Min($i+2, $keywords.Count-1))]) }
foreach ($batch in $batches) {
    $q = "repo:$Upstream $($batch -join ' OR ')"
    $gql = @{
        query = @'
query($q: String!) {
  search(query: $q, type: DISCUSSION, first: 30) {
    nodes {
      ... on Discussion {
        title url createdAt updatedAt upvoteCount comments { totalCount }
        repository { nameWithOwner }
      }
    }
  }
}
'@
        variables = @{ q = $q }
    } | ConvertTo-Json -Depth 6
    $gqlHeaders = @{ Authorization = "Bearer $($env:GH_TOKEN)"; 'User-Agent' = 'dsh-api-watch' }
    $disc = (Invoke-RestMethod -Method Post -Headers $gqlHeaders -Uri 'https://api.github.com/graphql' -Body $gql -ContentType 'application/json').data.search.nodes
    foreach ($d in $disc) {
        if ($seen.ContainsKey($d.url)) { continue }
        $seen[$d.url] = $true
        $items.Add([pscustomobject]@{
            source = 'discussion'; repo = $d.repository.nameWithOwner
            title = $d.title; url = $d.url
            upvotes = $d.upvoteCount; comments = $d.comments.totalCount
            updated = $d.updatedAt
        })
    }
}

# --- 2. 全 GitHub（REST search，引号短语精确匹配，issue 与 PR 分开）------------
foreach ($kind in @('issue', 'pr')) {
    $q = [uri]::EscapeDataString('"deepseek-harness" state:open is:' + $kind + ' sort:updated-desc')
    $iss = (Invoke-RestMethod -Headers $h -Uri "https://api.github.com/search/issues?per_page=30&q=$q")
    foreach ($i in $iss.items) {
        $items.Add([pscustomobject]@{
            source = $kind
            repo = ($i.repository_url -replace '^.*/repos/', '')
            title = $i.title; url = $i.html_url
            upvotes = $i.reactions.total_count; comments = $i.comments
            updated = $i.updated_at
        })
    }
}

# --- 3. 产物 ----------------------------------------------------------------
$digest = [pscustomobject]@{
    tool = 'dsh-api-watch radar v0'
    generated = (Get-Date).ToUniversalTime().ToString('o')
    upstream = $Upstream
    counts = @{ discussion = @($items | Where-Object source -eq 'discussion').Count
                issue = @($items | Where-Object source -eq 'issue').Count
                pr = @($items | Where-Object source -eq 'pr').Count }
    items = $items
}
$digest | ConvertTo-Json -Depth 5 | Set-Content -Encoding UTF8 (Join-Path $OutDir 'digest.json')

$md = New-Object System.Collections.Generic.List[string]
$md.Add('# DSH 反馈雷达摘要')
$md.Add('')
$md.Add("> 生成于 $($digest.generated) · 官方 Discussions $($digest.counts.discussion) 条命中 · 全站开放 issues $($digest.counts.issue) 条 · PR $($digest.counts.pr) 条")
$md.Add('')
foreach ($src in @('discussion', 'issue', 'pr')) {
    $rows = @($items | Where-Object source -eq $src | Sort-Object upvotes -Descending)
    if ($rows.Count -eq 0) { continue }
    $label = switch ($src) { 'discussion' { '官方 Discussions' } 'issue' { '全站开放 Issues' } 'pr' { '全站 PRs' } }
    $md.Add("## $label（按热度）"); $md.Add('')
    foreach ($r in $rows) {
        $md.Add("- [$($r.upvotes)🔺 $($r.comments)💬] [$($r.title)]($($r.url)) — ``$($r.repo)``（更新 $((([datetime]$r.updated).ToString('yyyy-MM-dd'))))")
    }
    $md.Add('')
}
$digest | ConvertTo-Json -Depth 5 | Out-Null
$md | Set-Content -Encoding UTF8 (Join-Path $OutDir 'digest.md')
Write-Host "radar: discussions=$($digest.counts.discussion) issues=$($digest.counts.issue) prs=$($digest.counts.pr) -> $OutDir"
