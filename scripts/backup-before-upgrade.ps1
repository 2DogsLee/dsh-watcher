# backup-before-upgrade.ps1 — DSH 升级前备份（补丁层 + bundle 源 + 体检基线）
#
# 用法示例：
#   pwsh -File scripts/backup-before-upgrade.ps1 `
#     -DshHome "$env:USERPROFILE\.dsh" `
#     -OutDir "D:\dsh-backups\$(Get-Date -Format yyyyMMdd-HHmmss)-pre-upgrade" `
#     -BundleRoot "D:\path\to\my-bundles" `
#     -ExtraCopy "D:\path\to\extra-plugin-dir" `
#     -Runtime "<DSH 安装目录>\resources\dsh-runtime"
#
# 产出：补丁层文件、profile manifest、bundle 源目录副本、审计基线、MANIFEST.md（含 SHA256 与回滚步骤）。
param(
  [string]$DshHome = (Join-Path $env:USERPROFILE '.dsh'),
  [Parameter(Mandatory)][string]$OutDir,
  [string[]]$BundleRoot = @(),
  [string[]]$ExtraCopy = @(),
  [string]$Runtime = $env:DSH_RUNTIME,
  [string]$ProfileName = 'web'
)
$ErrorActionPreference = 'Stop'
New-Item -ItemType Directory -Force -Path $OutDir | Out-Null

function Copy-IfExists([string]$From, [string]$To) {
  if (Test-Path $From) { Copy-Item $From $To -Force; return $true }
  return $false
}

$copied = New-Object System.Collections.Generic.List[string]
$profileDir = Join-Path $DshHome (Join-Path 'profiles' $ProfileName)
if (Copy-IfExists (Join-Path $profileDir 'cordis.patch.yml') (Join-Path $OutDir 'profile-cordis.patch.yml')) { $copied.Add('profile-cordis.patch.yml') }
if (Copy-IfExists (Join-Path $DshHome 'cordis.patch.yml') (Join-Path $OutDir 'home-cordis.patch.yml')) { $copied.Add('home-cordis.patch.yml') }
if (Copy-IfExists (Join-Path $profileDir 'package.json') (Join-Path $OutDir 'profile-package.json')) { $copied.Add('profile-package.json') }
if (Copy-IfExists (Join-Path $profileDir '.plugin-manager') (Join-Path $OutDir '.plugin-manager')) { $copied.Add('.plugin-manager/') }

foreach ($root in $BundleRoot) {
  if (-not (Test-Path $root)) { Write-Warning "bundle 目录不存在：$root"; continue }
  $name = Split-Path $root -Leaf
  Copy-Item $root (Join-Path $OutDir $name) -Recurse -Force
  $copied.Add($name + '/')
}
foreach ($extra in $ExtraCopy) {
  if (-not (Test-Path $extra)) { Write-Warning "附加目录不存在：$extra"; continue }
  $name = Split-Path $extra -Leaf
  Copy-Item $extra (Join-Path $OutDir $name) -Recurse -Force
  $copied.Add($name + '/')
}

# 运行时版本 + 体检基线（可选）
$ver = 'unknown'
if ($Runtime) {
  $pkg = Join-Path $Runtime 'node_modules\@deepseek-ai\dsh\package.json'
  if (Test-Path $pkg) { $ver = (Get-Content $pkg -Raw | ConvertFrom-Json).version }
  if (Test-Path 'scripts/audit-local.mjs') {
    node scripts/audit-local.mjs --runtime $Runtime --out (Join-Path $OutDir 'audit-baseline.md') 2>$null | Out-Null
  }
}
Set-Content -Path (Join-Path $OutDir 'VERSION.txt') -Value "runtime=$ver" -Encoding UTF8

# MANIFEST.md（含回滚步骤与 SHA256）
$L = New-Object System.Collections.Generic.List[string]
$L.Add('# DSH 升级前备份清单')
$L.Add('')
$L.Add("创建时间：$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')")
$L.Add("运行时版本：$ver")
$L.Add("DSH_HOME：``$DshHome``（回滚时复制回同位置）")
$L.Add('')
$L.Add('## 内容')
$L.Add('')
$L.Add('| 条目 | 说明 |')
$L.Add('|---|---|')
foreach ($c in $copied) { $L.Add("| ``$c`` | 升级前副本 |") }
$L.Add('')
$L.Add('## 回滚步骤（升级后模式 / 插件异常时）')
$L.Add('')
$L.Add('1. 完全退出 DSH。')
$L.Add('2. 把 `profile-cordis.patch.yml`、`home-cordis.patch.yml`、`profile-package.json` 复制回 DSH_HOME 对应位置（覆盖前先备份现状）。')
$L.Add('3. 把各 bundle 目录复制回原路径（覆盖前先备份现状）。')
$L.Add('4. 启动 DSH；若 manifest 与磁盘不一致，对每个 bundle 执行 plugin_manager `remove_bundle` + `install_bundle`。')
$L.Add('5. 验证：`node scripts/audit-local.mjs --runtime "<DSH安装目录>\resources\dsh-runtime"`，再新建会话逐个模式冒烟。')
$L.Add('')
$L.Add('## SHA256 校验')
$L.Add('')
$L.Add('```')
Get-ChildItem $OutDir -Recurse -File |
  Where-Object { $_.Name -ne 'MANIFEST.md' } |
  ForEach-Object {
    $h = (Get-FileHash $_.FullName -Algorithm SHA256).Hash.ToLower()
    $rel = $_.FullName.Substring($OutDir.Length + 1)
    $L.Add("$h  $rel")
  }
$L.Add('```')
$L.Add('')
$L.Add('> 复核：`Get-FileHash <文件> -Algorithm SHA256` 与上表比对。')
Set-Content -Path (Join-Path $OutDir 'MANIFEST.md') -Value $L -Encoding UTF8

Write-Host "备份完成：$OutDir"
Write-Host ("条目数：" + ((Get-ChildItem $OutDir -Recurse -File | Where-Object { $_.Name -ne 'MANIFEST.md' } | Measure-Object).Count))
