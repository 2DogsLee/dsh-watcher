---
name: dsh-api-watch
description: 在升级 DeepSeek Harness（DSH）之前或插件报接口错误时，用 dsh-api-watch 比对官方 checkout 两个版本的插件 API 面差异，扫描用户插件源码，产出「改动点 / 风险点」影响分析报告，并给出迁移建议。当用户要求升级 DSH / 更新官方 checkout、插件疑似因 DSH 升级而报错（接口不存在、行为变化）、要求做升级影响分析、或点名 dsh-api-watch 时使用。
---

# DSH 插件升级影响分析规程

最终交付物是一份**影响分析报告**（impact.md）：改动点（breaking 命中，附文件：行）、风险点（warning 命中）、未命中 breaking 清单（供确认）。

## 何时触发

1. 用户要求升级 DSH / pull 官方 checkout / 更新桌面版运行时；
2. 插件运行报「接口不存在 / 导出未定义 / 行为变化」，怀疑与 DSH 版本相关；
3. 用户要求「升级影响分析 / 我的插件会不会被这次更新弄坏」；
4. 用户点名 dsh-api-watch。

## 前置条件

- 本仓库（dsh-api-watch）的本地路径，下称 `$TOOL`；
  **自举**：若本地没有本仓库，先 clone 再继续：
  ```powershell
  git clone https://github.com/2DogsLee/dsh-watcher.git "$env:USERPROFILE\.dsh\tools\dsh-watcher"
  ```
  该路径即 `$TOOL`（后续升级在本目录 `git pull` 即可）。
- 官方 checkout 目录名（环境变量 `DSH_CHECKOUT`，或询问用户；用户本地没有官方 checkout 时，clone 官方仓库到 `$TOOL` 同级的 `deepseek-harness-checkout` 目录并 `fetch --tags`）；
- 用户插件目录；若用户有多个插件，逐个扫。

## 操作步骤

### 第 0 步：升级前存本地基线（必做）

静态比对回答「官方改了什么」，回答不了「我这台机器上的配置还能不能挂上」。升级前先存基线：

```powershell
node "$TOOL/scripts/audit-local.mjs"
```

它会把当前 runtime 的 `@deepseek-ai/*` 包清单写入 `$TOOL/.state/runtime-packages.json`，
并检查现有插件声明的挂载链路。**升级后第一次运行会自动 diff 出内核删了哪些包**——这是
`package-removed` 之外更容易被忽略的一层（删包 + 我的声明仍在引用它）。

### 第 1 步：确定版本区间

在官方 checkout 里 `git tag --sort=-creatordate`，确认当前版本（`git describe --tags`）与目标版本（用户指定，或最新 tag）。

### 第 2 步：跑 API 面比对

```powershell
& "$TOOL/scripts/diff-api.ps1" -Repo <官方checkout路径> -From <旧tag> -To <新tag>
```

报告落在 `$TOOL/archive/<旧>_to_<新>/report.{json,md}`。若该区间已有归档报告，直接复用。读 json 只关注 `severity: "breaking"` 与 `relevant: true` 条目。

### 第 2.5 步：生成「我的影响 + 应对」计划

```powershell
node "$TOOL/scripts/prepare-impact.mjs" --report "$TOOL/archive/<旧>_to_<新>/report.json" --registry "$TOOL/registry.json" --out "$TOOL/archive/<旧>_to_<新>/impact-plan.md"
```

它把全量报告压成三块：相关项（按 registry 的 uses 过滤）／每条 breaking 的应对步骤（按 kind 模板，附体检项）／
升级演练命令。**先看它的"一句话结论"**：无相关 breaking 也要继续做第 6 步的运行时体检；
没配 registry 时它只会说"无法判断"——先把 registry 的 uses 补齐再下结论。

### 第 3 步：扫描用户插件，产出影响分析

```powershell
& "$TOOL/scripts/scan-plugin.ps1" -Report <report.json> -PluginRepo <插件目录>
```

产物为 impact.md，含三节：**改动点**（breaking 命中，附文件：行）/ **风险点**（warning 命中）/ **未命中 breaking**。

### 第 4 步：为每个改动点给出迁移建议

对 impact.md 的每条改动点：

1. 在官方 checkout 里 `git diff <旧tag> <新tag> -- <finding.path>` 看变更前后；
2. 查新版 `docs/upgrade-guide/<版本>/` 与 `docs/cordis-api/` 找替代物；
3. 给出「old 调用 → new 调用」的具体改法（找到替代物才写，找不到就明说「官方未提供替代，建议暂缓升级/提 issue」）。

### 第 5 步：向用户汇报

- 结论先行：本轮升级对插件「有 N 处必须改 / 有风险需复核 / 零影响」三选一；
- 引用 impact.md 路径；每条改动点附第 4 步的迁移建议；
- 提醒：warning 与未命中条目不等于「没事」（详见报告内说明）。

### 第 6 步：升级后跑本地体检（必做）

```powershell
node "$TOOL/scripts/audit-local.mjs" --report "$TOOL/archive/<旧>_to_<新>/report.json" --registry "$TOOL/registry.json"
```

退出码非 0 时**先修环境问题、再谈 API 迁移**。检查项：

| 编号 | 检查 | 典型故障（2026-11 实测） |
|---|---|---|
| C1 | manifest 持久化 | 只热启用未写 profile manifest → 重启后插件消失 |
| C2 | 补丁层遮蔽 | profile 补丁层残留旧 `preset-*` 声明 → 花名册不显示 |
| C3 | 插件名可解析 | `./` 相对、裸 `D:/`、`file:` 单斜杠 → 行 never started；子路径已删 |
| C4 | workflowEngine provider | 删包后没人提供服务 → `waiting for workflowEngine` |
| C5 | 已知废弃清单 | 内核删包/改名 |
| C6 | 内核包漂移 | 与基线快照 diff，自动发现"这次删了什么" |
| C7 | 注册表交叉 | 官方 breaking 项 vs 你的 `uses.packages` / 声明行 |

排查顺序：**C1/C2 环境态 → C3 名字解析 → C4 服务提供方 → C6 删包 → C7 交叉 → 最后才是 API 迁移**。
经验：这类故障的数据都在磁盘上，先取证（会话/组合/清单文件）再改配置。

## 红线

- **不要跳过比对与扫描直接改插件代码**——先证据后动手；
- report.json 是唯一事实源，不要凭记忆或旧报告下结论；
- warning 级别不得对用户陈述为 breaking；未命中不得陈述为「确认无影响」；
- 迁移建议必须基于新版代码/文档证据，猜测性的改法要明确标注「未验证」。

## 边界

- 本工具发现「签名/结构/文档层/配置字段层」变更；行为级破坏（签名不变语义变）只能间接提示（文档大改 warning），需人工复核或交叉查阅官方 Discussions（雷达 digest 里有每日汇总）。
- **本地挂载链路**由 `scripts/audit-local.mjs` 覆盖（见 `docs/runtime-audit.md`）：manifest 半持久化、补丁层遮蔽、插件名路径写法、workflow 服务提供方、内核删包、注册表交叉。它不替代花名册诊断，只做静态预检。
