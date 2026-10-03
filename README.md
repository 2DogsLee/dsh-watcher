# dsh-api-watch

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
│   └── detect-breaking.ps1   # 启发式破坏性判定（供 diff-api 内部调用，也可单独跑）
├── registry.json             # 你的插件 → 依赖的 API 面 声明清单
├── archive/                  # CI 自动维护：每版本对一份 impact report
├── docs/
│   ├── architecture.md       # 架构与方案（必读）
│   └── api-surface.md        # 「插件 API 面」的范围定义
└── .github/workflows/watch.yml  # 定期盯官方 repo，出新 tag 自动生成报告并提交
```

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
