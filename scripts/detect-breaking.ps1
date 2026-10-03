#Requires -Version 5.1
<#
.SYNOPSIS
  读取 diff-api 产出的 report.json，按严重级别给出退出码（供插件仓库 CI 门禁使用）。
.DESCRIPTION
  在插件仓库的 CI 里：升级 DSH 前先跑 diff-api，再把 report.json 交给本脚本。
  退出码：0 = 无达到阈值的条目；2 = 存在达到阈值的条目（默认阈值 breaking）。
.EXAMPLE
  ./scripts/detect-breaking.ps1 -Report archive/0.1.7_to_0.2.0/report.json -FailOn warning
#>
[CmdletBinding()]
param(
    [Parameter(Mandatory)][string]$Report,
    [ValidateSet('info', 'warning', 'breaking')][string]$FailOn = 'breaking'
)

$ErrorActionPreference = 'Stop'
$json = Get-Content $Report -Raw | ConvertFrom-Json
$rank = @{ info = 0; warning = 1; breaking = 2 }
$hits = @($json.findings | Where-Object { $rank[$_.severity] -ge $rank[$FailOn] })

if ($hits.Count -eq 0) {
    Write-Host "dsh-api-watch: 无 >= $FailOn 的变更，可安全升级。"
    exit 0
}
Write-Host "dsh-api-watch: 发现 $($hits.Count) 条 >= $FailOn 的变更："
$hits | ForEach-Object { Write-Host "  [$($_.severity)] $($_.kind) $($_.path) — $($_.detail)" }
exit 2
