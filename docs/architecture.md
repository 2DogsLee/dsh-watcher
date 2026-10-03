# dsh-api-watch 架构与方案

## 1. 问题定义

第三方插件开发者的核心风险：**DSH 升级后，插件依赖的内部 API / 文档契约 / 配置 schema 发生破坏性变更，且没有任何官方 changelog 提前告知。**

现有渠道的缺陷：

| 渠道 | 缺陷 |
|---|---|
| 官方 Discussions 帖 | 人肉、滞后、覆盖不全、非结构化 |
| 直接读 git log | 提交粒度太细，无法回答「对我的插件意味着什么」 |
| 升级后跑崩再修 | 事后救火，成本最高 |

本项目的答案：把「升级前后 diff 插件 API 面」做成可自动化、可存档、可被 Agent 消费的流水线。

## 2. 设计原则

1. **事实源唯一**：一切结论来自官方 checkout 的 git diff，不靠转述、不靠猜测。
2. **报告分两层**：`report.json`（机读，供 CI 门禁 / Agent 消费）+ `report.md`（人读，带 diff 定位）。
3. **skill 只放规程，不放内容**：变更内容放 `archive/`（机器维护、永远鲜活）；skill 描述「何时跑、怎么跑、如何读」。
4. **启发式保守**：宁可多 warning，不可漏 breaking；每条结论必须附证据位置（文件 + diff 行）。
5. **零维护运行**：CI 定时盯官方 tag，出报告、commit、发 release；维护者只在误报时收紧规则。

## 3. 核心概念：插件 API 面（API Surface）

「插件 API 面」= 第三方插件开发者实际可能依赖的一切 DSH 契约。范围定义（详见 `docs/api-surface.md`）：

| 层 | 来源 | 说明 |
|---|---|---|
| 包契约 | `packages/*/package.json` 的 name/exports；`packages/*/src/index.ts` 导出符号 | 插件 import 的入口 |
| cordis 契约 | `docs/cordis-api/*.md`（registry / events / fiber / service / context） | 插件框架级文档契约 |
| 子系统契约 | `docs/subsystems/*.md`（approval / commands / sandbox / settings 等） | 各子系统的行为契约 |
| 配置契约 | `packages/settings` 的 schema | settings.yaml / permission 字段 |
| tool / skill 契约 | tool 注册接口、skill 目录约定 | Agent 侧扩展点 |

范围本身也允许进化：官方新增面向插件的机制时，在 `api-surface.md` 里登记，diff 脚本随之扩展。

## 4. 流水线架构

```
                ┌──────────────────────────────────────────┐
                │  GitHub Actions（watch.yml，cron 每日）   │
                │  1. git fetch 官方 repo 全部 tags          │
                │  2. 发现「上一已归档版本」之后的新 tag       │
                └──────────────┬───────────────────────────┘
                               ▼
   diff-api.ps1 -From <refA> -To <refB>
   ├─ git diff --stat 限定 API 面路径
   ├─ 逐包提取导出符号（index.ts 的 export 语句 / package.json exports）
   ├─ 对比：删除包 / 删除导出 / 签名变化 / 文档删除 / schema 字段变化
   ├─ detect-breaking.ps1 打级别标签（breaking / warning / info）
   └─ 产出 archive/<A>_to_<B>/report.{json,md}
                               ▼
                ┌──────────────────────────────────────────┐
                │  消费端（三选一，互不依赖）                │
                │  a. 人：读 report.md 决定升级策略           │
                │  b. CI 门禁：插件仓库引用 report.json       │
                │     判定是否有 breaking，决定是否允许升级    │
                │  c. Agent：读 SKILL.md 规程，取 json 后      │
                │     定位到自家插件受影响的调用点并给出改法    │
                └──────────────────────────────────────────┘
```

### 关键决策记录

- **为什么不用 npm 包对比**：DSH 插件多直接依赖 monorepo 内部路径而非发布包；且导出符号提取在 TS 源码层最直接。
- **为什么 md + json 双产物**：人读 md、机器读 json，同一份 diff 只算一次。
- **为什么档案 commit 进仓库而非 artifact**：artifact 会过期，commit 进 `archive/` 形成「可追溯的版本史」，且 fork 者天然共享。

## 5. Skill 的角色

`skill/SKILL.md` 是给 Agent 的**操作规程**，触发条件：

- 用户要求升级 DSH / 更新官方 checkout；
- 插件运行时报接口不存在 / 行为变化，怀疑是 DSH 升级导致；
- 用户点名 dsh-api-watch。

规程要点：先确认本地 checkout 版本 → 跑 diff-api → 读 json 中 breaking 条目 → 在用户插件里 grep 受影响调用点 → 给出迁移建议 → 顺手把报告路径告诉用户。skill 不包含任何版本事实，只包含流程。

## 6. 边界与诚实声明

- **启发式 ≠ 官方语义化版本承诺**。DSH 没有公开 API 稳定性政策，本工具回答的是「这个范围内变了什么」，不能保证覆盖所有行为级变更（如纯逻辑变化不改签名）。
- **行为级破坏**（签名不变但语义变了）只能靠 `docs/subsystems` 文档 diff 与 Discussions 帖交叉确认，报告中会以 warning 提示「文档大改，建议人工复核」。
- 项目自身不 fork DSH 代码，只读取；与官方 checkout 解耦，官方任意重构不影响本项目结构（受影响的只是比对结果）。

## 7. 演进路线

1. **v0（当前）**：单机 PowerShell 脚本 + 手动跑 + CI watch。
2. **v1**：`registry.json` 生效——用户声明自家插件依赖哪些包/文档，报告只呈现「与我相关」的条目（降噪）。
3. **v2**：TS AST 解析替代正则提取导出符号，签名比对精确到参数类型；支持生成迁移建议草案（old → new 调用片段）。
4. **v3（可选）**：聚合官方 Discussions 的破坏性变更帖，作为人工信号源与启发式结果交叉验证。
