# 插件 API 面（API Surface）范围定义

diff 脚本比对的范围以本文件为准。**修改范围必须同时更新 `scripts/diff-api.ps1` 的 `$surfacePaths` 与本文件。**

| 层 | 路径模式 | 理由 |
|---|---|---|
| 包清单 | `packages/**/package.json`（嵌套结构，排除 node_modules/fixtures/tests） | name/exports 决定插件可 import 什么 |
| 包入口 | `packages/**/src/index.ts` 的 `export` 符号 | 插件直接消费的符号 |
| cordis 契约 | `docs/cordis-api/*.md`（registry / events / fiber / service / context） | 插件框架级文档契约 |
| 子系统契约 | `docs/subsystems/*.md` | approval / commands / sandbox / settings 等行为契约 |
| 官方升级指南 | `docs/upgrade-guide/**/*.md` | **官方逐版本迁移指南**，新增/删除直接对应破坏性变更信号 |
| 顶层文档 | `docs/*.md`（architecture / capability-seams / config-catalog 等） | 全局架构与能力接缝说明 |

> 2026-10-03 实测发现：官方 checkout 存在 `docs/upgrade-guide/<version>/` 逐版本目录，
> 这是比启发式更强的破坏性信号，已在 v0 纳入（新增文档=info；后续 v1 将把 upgrade-guide
> 的目录名直接解析为版本，与 tag 对齐）。

## 明确不在范围内（v0）

- 各包内部实现文件（`src` 下非 index.ts）——噪音过大，信号太低；
- `apps/`、`website/`、测试与 vendor；
- 行为级语义变化（签名不变但逻辑变）——只能靠文档大改 warning 间接提示，详见 architecture.md 第 6 节。

## 维护约定

官方新增面向插件的机制时：先在本文件登记「层 + 路径 + 理由」，再同步脚本。每个版本的报告 `report.json` 里 `tool` 字段带版本号，便于追溯规则变化。
