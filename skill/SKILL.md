---
name: dsh-api-watch
description: 在升级 DeepSeek Harness（DSH）之前或插件报接口错误时，用 dsh-api-watch 比对官方 checkout 两个版本的插件 API 面差异，产出破坏性变更报告，并定位用户插件中受影响的调用点。当用户要求升级 DSH / 更新官方 checkout、插件疑似因 DSH 升级而报错（接口不存在、行为变化）、或点名 dsh-api-watch 时使用。
---

# DSH 插件 API 升级比对规程

## 何时触发

1. 用户要求升级 DSH / pull 官方 checkout / 更新桌面版运行时；
2. 插件运行报「接口不存在 / 导出未定义 / 行为变化」，怀疑与 DSH 版本相关；
3. 用户点名 dsh-api-watch。

## 前置条件

- 官方 checkout 路径（环境变量 `DSH_CHECKOUT`，或询问用户；常见 `D:\projects\deepseek harness`）；
- 本仓库（dsh-api-watch）的本地路径，下称 `$TOOL`。

## 操作步骤

1. **确定版本区间**：在 `$DSH_CHECKOUT` 里 `git tag --sort=-creatordate`，确认当前 checkout 所在版本（`git describe --tags`）与目标版本（用户想升到的 tag，或最新 tag）。
2. **跑比对**：
   ```powershell
   & "$TOOL/scripts/diff-api.ps1" -Repo $DSH_CHECKOUT -From <旧tag> -To <新tag>
   ```
   报告落在 `$TOOL/archive/<旧>_to_<新>/report.md` 和 `report.json`。
3. **读报告（以 json 为准，md 给用户看）**：
   - 只关注 `severity: "breaking"` 条目；warning 需提示用户人工复核；
   - 每条 breaking 有 `path` 与 `detail`，说明哪个包/导出/文档变了。
4. **定位用户插件受影响点**：对每条 breaking，在用户插件源码里 grep 受影响的 import 路径 / 导出符号 / settings 字段；把命中行与报告条目一一对应。
5. **给出结论**：向用户报告「受影响 N 处、各在哪、建议怎么改（依据 diff 里的新签名/新文档）」。如果零命中，明确说「本次升级对你的插件无影响」。
6. **收尾**：把报告路径告诉用户；如果发现启发式误报，提醒用户去项目提 issue。

## 红线

- **不要跳过比对直接改插件代码**——先证据后动手；
- report.json 是唯一事实源，不要凭记忆或旧报告下结论；
- warning 级别不得对用户陈述为 breaking。

## 边界

- 本工具只能发现「签名/结构/文档层」的变更；行为级破坏（签名不变语义变）以 warning 提示文档大改，需人工复核或交叉查阅官方 Discussions。
