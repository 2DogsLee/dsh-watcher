# 升级预告（impact plan）

`diff-api` 产出的是"官方改了什么"的**全量**报告（breaking 可达数百条）。`prepare-impact`
把它压成"**我需要做什么**"的一页：

1. **相关性**：用 `registry.json` 的 `uses`（packages/docs/config/keywords）过滤出与你插件相关的条目；
   未配置 registry 时明确说"无法判断"，而不是假装无影响。
2. **应对方式**：按 finding 的 `kind` 给操作步骤（找替代包、看新导出、改配置字段、读 upgrade-guide），
   并标注对应的本地体检项（C2/C3/C5/C6）。替代 API **不在此猜测**——要求以上游代码/文档为证据。
3. **升级演练**：把 `audit-local` 的两条命令写进计划，覆盖静态报告看不到的挂载链路问题。

## 生成

```powershell
node scripts/prepare-impact.mjs `
  --report archive/0.2.1-rc.4_to_0.2.2-rc.1/report.json `
  --registry registry.json `
  --out archive/0.2.1-rc.4_to_0.2.2-rc.1/impact-plan.md
```

输出最后一行是 `相关 breaking=N，相关命中=M，registry 插件=K`，CI 用它决定是否开 issue。

## 定时链路（watch.yml）

| 环节 | 行为 |
|---|---|
| 触发 | 每 6 小时 + 每日 03:00 UTC + 手动 dispatch；**无新 tag 时秒退**（`skip=true`） |
| 生成 | `diff-api` → `prepare-impact`（两者都归档到 `archive/<from>_to_<to>/`） |
| 发布 | GitHub Release 的正文 = 报告摘要 + **影响计划摘要**；附件含 `report.json`、`impact-plan.md` |
| 告警 | 相关 breaking > 0 时自动开 issue（标题含止版 tag，`upgrade-preview` label，同版本去重） |

也就是说：**上游一发新 tag，你在 6 小时内就会拿到"这次升级对我有什么影响、先改哪里"**，
不用等自己想起去比对。

## registry.json 怎么填（决定相关性质量）

```json
{
  "plugins": [{
    "name": "my-preset-suite",
    "uses": {
      "packages": ["packages/client", "packages/experimental/schedule-bundle"],
      "docs": ["docs/subsystems/approval.md"],
      "config": ["@deepseek-ai/dsh-settings"],
      "keywords": ["model", "permission"]
    }
  }]
}
```

- `packages`：路径前缀匹配 finding.path —— 你的插件 import 哪些官方包就写哪些；
- `config`：你在 cordis 组合里配过哪些官方包的 config 块；
- 你的插件若主要是 **YAML 声明 + 本地 .cjs**（例如本机 preset bundle），把涉及的官方包写进 `packages`，
  再用 `audit-local` 校验声明行——两层都过才算"升级安全"。

## 局限

- 启发式相关性：`packages` 写得太宽（如 `packages`）会让报告淹没在噪声里；太窄会漏。
- 应对步骤是模板：具体替代 API 需要按提示去上游查证。
- issue 只在相关 breaking > 0 时开；warning 级别的漂移看 Release。
