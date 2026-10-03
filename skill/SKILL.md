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

- 官方 checkout 目录名（环境变量 `DSH_CHECKOUT`，或询问用户）；
- 本仓库（dsh-api-watch）的本地路径，下称 `$TOOL`；
- 用户插件目录；若用户有多个插件，逐个扫。

## 操作步骤

### 第 1 步：确定版本区间

在官方 checkout 里 `git tag --sort=-creatordate`，确认当前版本（`git describe --tags`）与目标版本（用户指定，或最新 tag）。

### 第 2 步：跑 API 面比对

```powershell
& "$TOOL/scripts/diff-api.ps1" -Repo <官方checkout路径> -From <旧tag> -To <新tag>
```

报告落在 `$TOOL/archive/<旧>_to_<新>/report.{json,md}`。若该区间已有归档报告，直接复用。读 json 只关注 `severity: "breaking"` 与 `relevant: true` 条目。

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

## 红线

- **不要跳过比对与扫描直接改插件代码**——先证据后动手；
- report.json 是唯一事实源，不要凭记忆或旧报告下结论；
- warning 级别不得对用户陈述为 breaking；未命中不得陈述为「确认无影响」；
- 迁移建议必须基于新版代码/文档证据，猜测性的改法要明确标注「未验证」。

## 边界

- 本工具发现「签名/结构/文档层/配置字段层」变更；行为级破坏（签名不变语义变）只能间接提示（文档大改 warning），需人工复核或交叉查阅官方 Discussions（雷达 digest 里有每日汇总）。
