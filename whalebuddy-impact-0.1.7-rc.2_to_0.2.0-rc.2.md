# 插件升级影响分析：whalebuddy × DSH `dsh-v0.1.7-rc.2` → `dsh-v0.2.0-rc.2`

> 基于 report.json（10/04/2026 02:31:36）扫描 `C:\Users\liuhaoyang\.dsh\profiles\node_modules\whalebuddy`（0 个文件）
> 结论：**改动点 0 处 · 风险点 0 处 · 未命中 breaking 6 条（其中自动复核通过 6 条）**

## 一、改动点

本轮 breaking 条目在你的代码中**零命中**——如果 registry 声明完整，可判定本轮升级不破坏你的插件。

## 二、风险点

warning 级条目在你的代码中零命中。

## 三、未命中 breaking 的自动复核

复核依据：插件 DSH 依赖面（import 模块 + inject 服务名，共 0 个标识）与各 breaking 条目的路径片段求交集。

### ✅ 自动复核通过（依赖面零交集，6 条）

以下条目涉及的包/文档/配置在你的依赖面中**完全没有出现**，且全文文本扫描零引用，可判定与本插件无关：

- ✅ **[ast-signature-changed]** `packages/host/product-telemetry-otel`
- ✅ **[ast-export-removed]** `packages/session/session-telemetry-otel`
- ✅ **[ast-signature-changed]** `packages/client/ui-primitives/src/Input.tsx`
- ✅ **[ast-export-removed]** `packages/client/ui-primitives/src/Tooltip.tsx`
- ✅ **[config-field-type-changed]** `config:@deepseek-ai/dsh-session-log-deepseek`
- ✅ **[config-field-type-changed]** `config:@deepseek-ai/dsh-session-log-deepseek`

## 建议动作

1. 补全 `registry.json` 声明后重扫，确认依赖面覆盖；
3. 行为级变化（文档大改/升级指南）无法靠文本扫描兜底，按「风险点」提示人工读对应文档。
