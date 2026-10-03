# dsh-api-watch 市场提交材料包

> 各平台提交时直接复制对应字段。提交后在 docs/submission-checklist.md 勾选并回填收录链接。

## 通用信息

| 字段 | 值 |
|---|---|
| Skill 名称 | `dsh-api-watch` |
| 仓库 | https://github.com/2DogsLee/dsh-watcher |
| License | MIT |
| 安装物 | 单文件 `skill/SKILL.md`（自举：Agent 首次执行自动 clone 脚本仓库） |
| 运行依赖 | Git、PowerShell 5.1+；AST 增强需 Node 18+（无 Node 自动回退） |
| 版本 | 随仓库 main 分支（当前对应 DSH v0.2.1-alpha.1 报告能力） |

## 一句话描述（列表卡片用，≤100 字符）

**中文**：升级 DeepSeek Harness 前，自动比对插件 API 面并扫描你的插件，产出改动点/风险点分析。

**English**: Detect DeepSeek Harness breaking changes before upgrading — diff the plugin API surface and scan your plugin for change/risk impact.

## 详细描述（详情页用）

**中文**：

> DSH 迭代快、插件 API 常有破坏性变更且无官方 changelog。本 skill 让 Agent 在你升级 DSH 前自动完成完整影响分析：
> 1. **API 面比对**：对比官方 checkout 两个版本的导出符号（AST 签名级，含 re-export）、cordis 配置字段（含类型收紧）、契约文档、升级指南，产出 breaking/warning 分级报告；
> 2. **插件扫描**：拿报告扫描你的插件源码，定位每处受影响代码（文件:行）；
> 3. **自动复核**：构建插件依赖面，与 breaking 条目求交集，无关条目自动判定通过，只把真需要人看的留给你；
> 4. **迁移建议**：逐条改动点对照官方 upgrade-guide 与新版文档，给出 old→new 改法。
>
> 附带每日反馈雷达：自动聚合官方 Discussions 与全站 issues 中 DSH 相关的破坏性变更反馈。
> 纯本地运行，不上传任何代码。

**English**:

> DSH iterates fast and frequently breaks plugin APIs without an official changelog. This skill lets your agent run a full upgrade impact analysis: (1) diff the plugin API surface between any two DSH versions (AST-level export signatures incl. re-exports, cordis config fields with type-tightening detection, contract docs, upgrade guides); (2) scan your plugin source and locate every affected line; (3) auto-verify untouched findings against your plugin's dependency surface so you only review what matters; (4) produce per-finding migration advice from official upgrade guides. Includes a daily feedback radar aggregating breaking-change reports from official Discussions and GitHub-wide issues. Runs fully locally.

## 分类 / 标签

| 平台 | 建议值 |
|---|---|
| SkillHub 分类 | `developer-tools`（备选 `coding`）；子分类 `devops` |
| SkillHub 标签 | `deepseek-harness`, `dsh`, `upgrade`, `api-diff`, `breaking-changes`, `migration` |
| ClawHub topics | `developer-tools`, `api`, `migration`, `ci` |
| dsh-plugin.org | 提交仓库地址即可；收录后 README 徽章：`[![Listed on dsh-plugin.org](https://dsh-plugin.org/badges/listed.svg)](https://dsh-plugin.org/plugins/2DogsLee/dsh-watcher)` |

## 安装命令（详情页展示）

```powershell
# 方式一：完整安装（推荐，含全部脚本）
git clone https://github.com/2DogsLee/dsh-watcher.git
Copy-Item dsh-watcher/skill "$env:USERPROFILE\.dsh\skills\dsh-api-watch" -Recurse

# 方式二：仅装 SKILL.md（Agent 首次执行时自举 clone 脚本仓库）
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.dsh\skills\dsh-api-watch" | Out-Null
irm https://raw.githubusercontent.com/2DogsLee/dsh-watcher/main/skill/SKILL.md -OutFile "$env:USERPROFILE\.dsh\skills\dsh-api-watch\SKILL.md"
```

## 触发示例（详情页「使用示例」）

- 「我要把 DSH 升到 0.2.1，先帮我做升级影响分析」
- 「插件报 ctx.invariants 不存在，是不是 DSH 升级导致的？」
- 「对比 dsh-v0.1.7 和最新版，我的插件有哪些要改的？」

## 提交记录

| 平台 | 日期 | 状态 | 收录链接 |
|---|---|---|---|
| SkillHub | | 待提交 | |
| ClawHub | | 待提交 | |
| dsh-plugin.org | | 待提交 | |
