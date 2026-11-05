# 在本机启用定时巡检（dsh-cron）

云端 watch.yml 负责"发现新版本 + 生成报告/影响计划"；本机定时任务负责"落到这台机器"：
读云端结论 → 跑本地体检 → 在 DSH 会话里提示你。本文档给出从零接入的完整步骤。

## 0. 前提

- 本机装了 DSH Desktop（含 dsh-cron 插件，能读 `tasks.json`）；
- 已 clone 本仓库（本文以 `D:\tools\dsh-watcher` 为例，下文记 `$TOOL`）；
- 有官方 DSH checkout（任意位置，用于生成 registry，见第 2 节）。

## 1. 建立"已知最新版本"基线

```powershell
cd $TOOL
New-Item -ItemType Directory -Force .state | Out-Null
# 用当前官方最新 tag 初始化，避免首次运行就误报
$latest = (git ls-remote --tags --refs https://github.com/deepseek-ai/deepseek-harness.git |
  ForEach-Object { ($_ -split '\s+')[1] -replace '^refs/tags/','' } |
  Where-Object { $_ -match '^dsh-v\d+\.\d+\.\d+' } |
  Sort-Object { [version](($_ -replace '^dsh-v','') -replace '-.*$','') } |
  Select-Object -Last 1)
Set-Content .state/latest-known-tag.txt $latest
```

> 脚本里正式的排序逻辑（含 rc/alpha 权重）见 `examples/dsh-cron-upgrade-watch.md`，这里只是快速初始化。

## 2. 填 registry.json（决定"相关"是否准确）

`registry.json` 的 `uses` 决定云端影响计划里哪些条目算"与你相关"。

### 2a. 自动生成（推荐，适用于 bundle/preset 型插件）

```powershell
# 1) 在官方 checkout 里生成 npm 名 → 仓库路径 映射
cd <官方checkout>
git ls-tree -r --name-only <最新tag> | Where-Object { $_ -match '^packages/.*/package\.json$' } | ForEach-Object {
  $j = git show "<tag>:$($_)" | ConvertFrom-Json
  if ($j.name -like '@deepseek-ai/*') { @{ $j.name = ($_ -replace '/package\.json$','') } }
} | ...
# 2) 用本仓库脚本从补丁生成 registry
node $TOOL/scripts/build-registry.mjs --pkg-map pkg-map.json --bundle D:\path\to\my-preset --out registry.json
```

### 2b. 手工填（适用于代码型插件）

```json
{
  "plugins": [{
    "name": "my-plugin",
    "uses": {
      "packages": ["packages/client/ui-primitives"],
      "config": ["@deepseek-ai/dsh-tool-subagent"],
      "docs": ["docs/subsystems/boot.md"],
      "keywords": ["model", "permission"]
    }
  }]
}
```

注意：

- `packages` 是**官方仓库路径**（`packages/preset/persona`），不是 npm 包名；
- 前缀匹配，**写太宽会淹没**（`packages/client` 会命中整个客户端层）；按你真正 import 的包写；
- 可选 `kind: "declaration"`（声明型，如 YAML 组合）或 `"source"`（代码型，缺省）。它只影响低优先分组的说明文案；
- `audit-local --registry` 的 C7 也读这个文件。

## 3. 确认本地体检可用

```powershell
node $TOOL/scripts/audit-local.mjs          # 期望 EXIT=0（或 2=仅 warning）
```

默认读 `$env:USERPROFILE\.dsh` 与内置运行时路径；非默认布局用参数或环境变量：

```powershell
node $TOOL/scripts/audit-local.mjs --dsh-home <你的 DSH_HOME> --runtime <DSH 安装目录>\resources\dsh-runtime
# 或 $env:DSH_HOME / $env:DSH_RUNTIME（runtime 不做默认猜测，必须显式给）
```

首次运行会在 `$TOOL/.state/runtime-packages.json` 写包清单快照（C6 的基线）。

## 4. 建定时任务（三选一）

### 方式 A：DSH 内直接建（最简单）

对你的 DSH agent 说：

> 在 dsh-watcher 项目建一个每天 09:00 的定时任务，cwd 设为 $TOOL，按 examples/dsh-cron-upgrade-watch.md 里的 prompt 执行

对应底层调用是 `cron_create`（dsh-cron 插件提供的 6 个工具之一）。

### 方式 B：写进 dsh-cron 的 tasks.json

在你的 dsh-cron 数据目录（如 `<dsh-cron 仓库>/tasks.json`，或 DSH 设置里该插件指向的路径）的 `tasks` 数组里加一条，
字段：`id` / `name` / `enabled` / `cron` / `cwd` / `preset` / `prompt`。prompt 直接取
[`examples/dsh-cron-upgrade-watch.md`](../examples/dsh-cron-upgrade-watch.md)，把 `$TOOL` 替换成本机路径。
dsh-cron 30s 热重载，无需重启。

### 方式 C：系统级定时（不依赖 DSH）

Windows 任务计划程序调用：

```powershell
pwsh -NoProfile -Command "cd $TOOL; node scripts/prepare-impact.mjs --report <report> --out out.md"
```

但这拿不到 DSH 会话里的提示，也没有本地运行时上下文；只适合 CI/服务器场景。

**推荐 A 或 B**。任务参数建议：

| 字段 | 建议值 |
|---|---|
| cron | `0 9 * * *`（每天 09:00）或 `0 */6 * * *` |
| cwd | `$TOOL` |
| preset | default（标准模式，需 shell + 文件读写） |

## 5. 静音与频率

任务逻辑约定：**无新版本时只输出一行**；有新版本才输出完整预告（报告 + 本机体检 + 升级前动作）。
如果你觉得每天太频繁：

- 改成 `0 9 * * 1-5`（仅工作日）；
- 或改为每 6 小时与云端同频：`0 */6 * * *`；
- 暂停：`cron_toggle(id, false)`；删除：`cron_delete(id)`。

## 6. 升级前后的手动动作（任务只提示，不代做）

1. **升级前**：`node scripts/audit-local.mjs` 留基线；备份 `~/.dsh/profiles/<p>/cordis.patch.yml`
   与自定义 bundle 目录。
2. 按 issue/impact-plan 的"必须处理"改声明/代码。
3. **升级后**：再跑一次；有新报告时加 `--report archive/<from>_to_<to>/report.json`，
   C6 会自动列出内核删掉了哪些包。

## 7. 已知边界

- 任务**不会**自动升级 DSH、不会改你的 bundle/registry、不会 push；
- 云端报告依赖官方 tag（不是 release），GitHub Actions 每 6h 检查一次；
- 影响计划的"必须处理"是**结构级**（删包/配置/入口/文档）；符号级变更需用
  `scan-plugin.ps1` 扫你的源码确认（任务 prompt 里已写明）。

### 2c. 私有配置放 registry.local.json

真实插件的 uses 可能带你的仓库名/内部包名。**推荐**：

`powershell
Copy-Item registry.json registry.local.json   # 先复制示例
# 然后把 registry.local.json 改成你自己的内容
`

egistry.local.json 已在 .gitignore；prepare-impact / udit-local 默认优先读它，
读不到才回退到仓库自带的 egistry.json 示例。CI 里的 watch 只用仓库示例，不涉及你的私有配置。
