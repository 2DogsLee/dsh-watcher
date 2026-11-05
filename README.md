# dsh-api-watch

[![watch-dsh-releases](https://github.com/2DogsLee/dsh-watcher/actions/workflows/watch.yml/badge.svg)](https://github.com/2DogsLee/dsh-watcher/actions/workflows/watch.yml)
[![Latest release](https://img.shields.io/github/v/release/2DogsLee/dsh-watcher?filter=*-api-watch&label=latest%20report)](https://github.com/2DogsLee/dsh-watcher/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> DSH（DeepSeek Harness）插件 API 面的自动化比对引擎 + 变更档案 + Agent Skill。
> 目标：让第三方插件开发者在升级 DSH 之前，一条命令看清「我依赖的 API 变了没有、坏在哪里、怎么改」。

## 为什么需要

DSH 处于高频迭代期（0.1.x → 0.2.x），插件 API 经常破坏性变更，但官方：

- 不维护 `CHANGELOG.md`；
- Discussions 里的破坏性变更说明靠社区人肉撰写，覆盖不全、时滞不定。

而官方 checkout 的 git 历史 + `docs/cordis-api` / `docs/subsystems` 文档层是**最准**的事实源。
本项目把它自动化。

## 组成

```
dsh-api-watch/
├── skill/SKILL.md            # Agent Skill 入口：升级前比对的规程
├── scripts/
│   ├── diff-api.ps1          # 核心：对比两个 dsh ref 的插件 API 面，产出 json + md 报告
│   ├── scan-plugin.ps1       # 拿报告扫你的插件源码，产出「改动点/风险点」影响分析
│   ├── audit-local.mjs       # 本地环境体检：manifest / 补丁层遮蔽 / 插件名解析 / workflow provider / 内核删包
│   ├── audit-local.ps1       # 上述体检的 PowerShell 入口（报告归档到 archive/local-audit/）
│   ├── audit-local.selftest.mjs  # 体检器自测：9 个注入故障用例
│   └── detect-breaking.ps1   # CI 门禁：读 report.json，按严重级别给退出码
├── scripts/radar.ps1         # 反馈雷达：官方 Discussions + 全站 issues/PR 每日摘要
├── registry.json             # 你的插件 → 依赖的 API 面 声明清单（v1 过滤 + 扫描共用）
├── archive/                  # CI 自动维护：每版本对一份 impact report；local-audit/ 存本地体检报告
├── docs/
│   ├── architecture.md       # 架构与方案（必读）
│   ├── api-surface.md        # 「插件 API 面」的范围定义
│   └── runtime-audit.md      # 本地环境体检：为什么需要、检查项、局限
└── .github/workflows/watch.yml  # 定期盯官方 repo，出新 tag 自动生成报告并提交
```

## 安装

作为 DSH 插件安装（主进程入口会把随包的 dsh-api-watch skill 注册到 `ctx.skills`）：

```bash
dsh plugin --profile web add github:2DogsLee/dsh-watcher
```

### 仅安装 skill

手动安装（复制目录）：

```powershell
git clone https://github.com/2DogsLee/dsh-watcher.git
Copy-Item dsh-watcher/skill "$env:USERPROFILE\.dsh\skills\dsh-api-watch" -Recurse
```

或一键拉取单个 SKILL.md：

```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.dsh\skills\dsh-api-watch" | Out-Null
irm https://raw.githubusercontent.com/2DogsLee/dsh-watcher/main/skill/SKILL.md -OutFile "$env:USERPROFILE\.dsh\skills\dsh-api-watch\SKILL.md"
```

安装后重启 DSH，说「升级 DSH 前帮我做升级影响分析」即触发规程。
注意：比对与扫描需要本地有官方 checkout 和本仓库脚本，skill 只含规程——建议整个仓库 clone 后使用，并让 Agent 知道 `$TOOL` 路径。

## 每日情报

- **逐版本插件 API 面报告**：[Releases](https://github.com/2DogsLee/dsh-watcher/releases)（随官方新 tag 自动发布）
- **每日反馈雷达**（官方 Discussions + 全站 issues/PR，★ 为通用插件相关条目）：[archive/radar/digest.md](archive/radar/digest.md)

## 快速使用

```powershell
# 1. 配置官方 checkout 路径（一次性）
$env:DSH_CHECKOUT = "D:\path\to\deepseek-harness-checkout"

# 2. 比对两个版本
./scripts/diff-api.ps1 -From dsh-v0.1.7-rc.2 -To dsh-v0.2.0-rc.2

# 3. 读报告
#    archive/0.1.7-rc.2_to_0.2.0-rc.2/report.md   （人读）
#    archive/0.1.7-rc.2_to_0.2.0-rc.2/report.json （机读，可接 CI 门禁）
```

### 作为 skill 使用

把本仓库 clone 到任意位置，在你的 `AGENTS.md` / skill 目录里引用 `skill/SKILL.md`。
DSH Agent 会在「升级 DSH / 插件报接口错误」时按规程先跑比对再动手改代码。

### CI 自动跟进（fork 即用）

`.github/workflows/watch.yml` 每天（可配）拉官方 repo 的新 tag，自动生成上一稳定版 → 新版的
报告并 commit 到 `archive/`，同时发 GitHub Release。**零人工维护**。

## 在本机启用定时巡检（dsh-cron 通知你）

云端负责发现与出报告；本机定时任务负责"落到这台机器"并在 DSH 会话里提示你。完整步骤见
[docs/local-setup.md](docs/local-setup.md)，可直接复制的任务 prompt 见
[examples/dsh-cron-upgrade-watch.md](examples/dsh-cron-upgrade-watch.md)。

最短路径：

```powershell
# 1) 初始化"已知最新版本"基线（例：当前官方最新 tag）
Set-Content .state/latest-known-tag.txt 'dsh-v0.2.2-rc.1'

# 2) 填 registry.json（决定"与我相关"是否准确）
node scripts/build-registry.mjs --pkg-map <checkout 生成的 name→path.json> --bundle <你的bundle目录>... --out registry.json

# 3) 确认本地体检可用
node scripts/audit-local.mjs

# 4) 对你的 DSH agent 说：
#    「在 dsh-watcher 建一个每天 09:00 的定时任务，cwd=本仓库，按 examples/dsh-cron-upgrade-watch.md 的 prompt 执行」
```

任务约定：**无新版本只输出一行**；有新版本才给完整预告（云端必须处理 + 本机体检 + 升级前动作）。
它不会自动升级、不改配置、不 push。

## 升级预告（自动跟进 + 我的影响）

watch.yml 每 6 小时探一次上游新 tag；发现新版后自动生成三样东西：

1. `archive/<from>_to_<to>/report.{md,json}` —— 官方 API 面全量 diff（原有能力）
2. `archive/<from>_to_<to>/impact-plan.md` —— **registry 视角的「我的影响 + 应对步骤」**
3. 相关 breaking > 0 时自动开 issue（标题含止版 tag，`upgrade-preview` 去重）；Release 正文含影响计划摘要

本地手动生成：

```powershell
node scripts/prepare-impact.mjs --report archive/<from>_to_<to>/report.json --out archive/<from>_to_<to>/impact-plan.md
#   默认优先读 registry.local.json（私有，.gitignore），回退 registry.json 示例
# 或 PowerShell 包装
pwsh -File scripts/prepare-impact.ps1 -Report archive/<from>_to_<to>/report.json
```

它做三件事：用 `registry.json` 的 `uses` 过滤相关条目 → 按变更类型给应对步骤（附对应体检项）→
附上升级演练命令（audit-local 基线/复检）。替代 API 不猜测，要求以上游代码/文档为证据。
详见 [docs/impact-plan.md](docs/impact-plan.md)。

## 本地环境体检（audit-local）

`diff-api` 看的是「官方改了什么」；`audit-local` 看的是「**我这台机器**的插件声明还能不能挂上」。
两者缺一不可——2026-11 的 0.2.0-rc.2 → 0.2.2-rc.1 事故里，6 个 preset 全部失效，静态 API 报告
一条都没命中，因为故障在本地配置形态层（旧目录不再读取、补丁层遮蔽、只热启用未持久化、
插件名路径写法、内核删包后行仍在引用）。

```powershell
# 升级前存基线（同时记录 runtime 包清单）
node scripts/audit-local.mjs

# 升级后再跑：C6 自动 diff 出内核删了哪些包
node scripts/audit-local.mjs --out audit-after.md

# 与静态报告交叉（C7）
node scripts/audit-local.mjs --report archive/<旧>_to_<新>/report.json --registry registry.json

# PowerShell 入口，报告归档到 archive/local-audit/
pwsh -File scripts/audit-local.ps1
```

退出码 `0/1/2`（通过/error/仅warning）。自测：`node scripts/audit-local.selftest.mjs`（9 个注入故障用例）。
检查项与局限见 [docs/runtime-audit.md](docs/runtime-audit.md)。

## 破坏性判定（当前启发式）

| 信号 | 级别 |
|---|---|
| 包被删除 / 从 workspace 移除 | breaking |
| 导出符号（export）被删除 | breaking |
| `docs/cordis-api` / `docs/subsystems` 文档删除或改名 | breaking |
| **插件配置字段被删除 / 配置包从 config-catalog 移除** | **breaking**（cordis.yml/settings 里写的这些字段将失效） |
| settings schema 字段删除/改名 | breaking |
| 官方新增 upgrade-guide 条目 | warning（上游承认存在需迁移的变更） |
| 文档大改（>30% 行变化） | warning |
| exports map / 包级变化需人工确认 | warning |
| 新增包/导出/文档/配置字段 | info |

启发式刻意保守：**宁报 warning 不漏报 breaking**，但每条 breaking 都附 diff 位置供人工确认。
误报请提 issue，我们会收紧规则。

## License

MIT
