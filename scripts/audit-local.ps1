# audit-local.ps1 — audit-local.mjs 的 PowerShell 包装（仓库脚本惯例入口）
#
# 升级前先跑一次存基线，升级后再跑一次比对。
# 报告归档：archive/local-audit/<时间戳>.md
param(
  [string]$OutFile,
  [switch]$Json,
  [string]$Report,
  [string]$Registry
)

$ErrorActionPreference = 'Stop'
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$repo = Split-Path -Parent $here
$tool = Join-Path $here 'audit-local.mjs'

$argsList = @($tool)
if ($Json) { $argsList += '--json' }
if ($Report) { $argsList += @('--report', $Report) }
if ($Registry) { $argsList += @('--registry', $Registry) }
if (-not $OutFile -and -not $Json) {
  $dir = Join-Path $repo 'archive/local-audit'
  New-Item -ItemType Directory -Force -Path $dir | Out-Null
  $OutFile = Join-Path $dir ((Get-Date -Format 'yyyyMMdd-HHmmss') + '.md')
}
if ($OutFile) { $argsList += @('--out', $OutFile) }

node @argsList
exit $LASTEXITCODE
