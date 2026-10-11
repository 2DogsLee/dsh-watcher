# 插件升级影响分析：whalebuddy × DSH `dsh-v0.2.0-rc.1` → `dsh-v0.2.1-alpha.1`

> 基于 report.json（10/03/2026 08:45:14）扫描 `C:\Users\liuhaoyang\.dsh\profiles\node_modules\whalebuddy`（0 个文件）
> 结论：**改动点 0 处 · 风险点 0 处 · 未命中 breaking 24 条（其中自动复核通过 24 条）**

## 一、改动点

本轮 breaking 条目在你的代码中**零命中**——如果 registry 声明完整，可判定本轮升级不破坏你的插件。

## 二、风险点

warning 级条目在你的代码中零命中。

## 三、未命中 breaking 的自动复核

复核依据：插件 DSH 依赖面（import 模块 + inject 服务名，共 0 个标识）与各 breaking 条目的路径片段求交集。

### ✅ 自动复核通过（依赖面零交集，24 条）

以下条目涉及的包/文档/配置在你的依赖面中**完全没有出现**，且全文文本扫描零引用，可判定与本插件无关：

- ✅ **[package-removed]** `packages/experimental/schedule-bundle`
- ✅ **[package-removed]** `packages/runtime-diagnostics/invariants`
- ✅ **[doc-removed]** `docs/subsystems/invariants.md`
- ✅ **[doc-removed]** `docs/subsystems/invariants.zh.md`
- ✅ **[config-scope-removed]** `config:@deepseek-ai/dsh-invariants`
- ✅ **[ast-export-removed]** `packages/boot/hmr`
- ✅ **[ast-export-removed]** `packages/boot/hmr`
- ✅ **[ast-export-removed]** `packages/credentials/authorization`
- ✅ **[ast-export-removed]** `packages/llm/plugin-package-inventory-deepseek`
- ✅ **[ast-export-removed]** `packages/runtime-diagnostics/invariants`
- ✅ **[ast-export-removed]** `packages/runtime-diagnostics/invariants`
- ✅ **[ast-export-removed]** `packages/runtime-diagnostics/invariants`
- ✅ **[ast-export-removed]** `packages/runtime-diagnostics/invariants`
- ✅ **[ast-export-removed]** `packages/runtime-diagnostics/invariants`
- ✅ **[ast-export-removed]** `packages/runtime-diagnostics/invariants`
- ✅ **[ast-export-removed]** `packages/runtime-diagnostics/invariants`
- ✅ **[ast-signature-changed]** `packages/client/ui-primitives/src/Input.tsx`
- ✅ **[ast-export-removed]** `packages/experimental/inspector/src/host/plugin.ts`
- ✅ **[ast-export-removed]** `packages/preset/agent-preset-registry/src/mount.ts`
- ✅ **[ast-export-removed]** `packages/preset/agent-preset-registry/src/mount.ts`
- ✅ **[ast-export-removed]** `packages/preset/agent-preset-registry/src/mount.ts`
- ✅ **[ast-export-removed]** `packages/preset/agent-preset-registry/src/mount.ts`
- ✅ **[ast-export-removed]** `packages/preset/agent-preset-registry/src/mount.ts`
- ✅ **[ast-export-removed]** `packages/preset/agent-preset-registry/src/mount.ts`

## 建议动作

1. 补全 `registry.json` 声明后重扫，确认依赖面覆盖；
3. 行为级变化（文档大改/升级指南）无法靠文本扫描兜底，按「风险点」提示人工读对应文档。
