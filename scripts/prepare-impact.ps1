# prepare-impact.ps1 — prepare-impact.mjs 的 PowerShell 包装（仓库脚本惯例入口）
param(
  [Parameter(Mandatory)][string]$Report,
  [string]$Registry,
  [string]$OutFile
)

$ErrorActionPreference = 'Stop'
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$tool = Join-Path $here 'prepare-impact.mjs'

$argsList = @($tool, '--report', $Report)
if ($Registry) { $argsList += @('--registry', $Registry) }
if ($OutFile) { $argsList += @('--out', $OutFile) }

node @argsList
exit $LASTEXITCODE
