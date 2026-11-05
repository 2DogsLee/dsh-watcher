# 本地环境体检（runtime audit）

`diff-api.ps1` 回答的是「**官方**这次改了什么」；`audit-local` 回答的是「**我这台机器**上
按现在这份配置，插件还能不能挂上」。两者检查的层面不同，缺一不可。

## 为什么需要它（2026-11 真实事故）

DSH 0.2.0-rc.2 → 0.2.2-rc.1 升级后，用户的 6 个自定义 agent preset 全部失效。
`diff-api` 的静态报告里**没有一条**能直接对应，因为故障全在"本地配置形态"这一层：

| 现象 | 根因 | 静态 API 比对能看到吗 |
|---|---|---|
| 模式整体消失 | 0.2.2 起内核不再读取 `$DSH_HOME/.agent-presets/` | ❌ 目录读不读是运行时行为 |
| 卡片在、标「加载失败」 | 插件行用相对路径 → 按 profile 根解析 | ❌ 不是 API 变更 |
| 行状态 `unaddressable` | profile 补丁层残留旧 preset 声明，遮蔽 bundle | ❌ 是本机配置历史 |
| 重启后又没了 | 只热启用、未写入 profile manifest | ❌ 安装事务半完成 |
| `waiting for workflowEngine` | 内核删了 `dsh-workflow-worker-thread`，旧行无替代 | ✅ 但是**包删除**，且要再做"我的声明→该包"的映射 |
| `xxx.cjs: never started` | `file:` 单斜杠 / 裸盘符路径不被补丁加载器接受 | ❌ 是声明写法规则 |

结论：静态 diff 管"签名/结构"，本地体检管"挂载链路"。这次事故 6 条里 5 条只有本地体检能抓。

## 跑起来

```powershell
# 升级前：存基线（同时把 runtime 包清单写入 .state/runtime-packages.json）
node scripts/audit-local.mjs

# 升级后：再跑一次，C6 会自动 diff 出内核删了哪些包、版本变化
node scripts/audit-local.mjs --out audit-after.md

# 与静态 diff 交叉：把最新报告里的 breaking 项和 registry 依赖对照（C7）
node scripts/audit-local.mjs --report archive/<旧>_to_<新>/report.json --registry registry.json

# PowerShell 入口（报告自动归档到 archive/local-audit/）
pwsh -File scripts/audit-local.ps1
```

退出码：`0` 通过 / `1` 有 error / `2` 仅 warning。可直接接 CI 或任务计划。

## 检查项

| 编号 | 检查 | 判据 |
|---|---|---|
| C1 | manifest 持久化 | bundle 在 `dependencies` 与 `dsh.profile.bundles` 中"一半有一半无"= 只热启用，重启即丢 |
| C2 | 补丁层遮蔽 | `$DSH_HOME/cordis.patch.yml`、`profiles/<p>/cordis.patch.yml` 残留 `preset-*` 声明 |
| C3 | 插件名可解析 | `./` 相对、裸 `D:/`、`file:` 单斜杠 → 直接判错；`file:///` 校验目标存在；包名查安装目录；子路径查 `exports` |
| C4 | workflowEngine provider | 含 `tool-workflow`/`tool-ralph` 但行列表里没有 `workflow-ptc` |
| C5 | 已知废弃清单 | 命中 `KNOWN_REMOVED`（随内核升级维护） |
| C6 | 内核包漂移 | 与 `.state/runtime-packages.json` 快照比对：删掉的包若仍被引用 → error，否则 warning；版本变化也告警 |
| C7 | 注册表交叉 | 把 report 的 breaking 项与 `registry.json` 的 `uses.packages`、声明行引用的包对照 |

## 与 skill 的配合

`skill/SKILL.md` 的规程已把体检插进两步：

- **第 0 步（升级前）**：跑一次存基线；
- **第 6 步（升级后）**：重跑，先修 C1–C6 的环境问题，再进入第 4 步的迁移建议。

## 局限

- 只读本地文件与运行时目录，**不做**真实挂载；最终判定仍以花名册诊断为准。
- C6 依赖上一次运行的快照；首次运行只建立基线，不产生 diff。
- 包名解析按安装目录存在性判断，不校验包是否真的可加载（`never started` 的深层原因，如服务缺失，仍需看诊断）。
