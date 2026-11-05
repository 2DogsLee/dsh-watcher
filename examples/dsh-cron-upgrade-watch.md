# 示例：dsh-cron 定时任务 prompt（DSH 版本巡检与升级预告）

把 `$TOOL` 替换为本仓库的绝对路径（如 `D:\tools\dsh-watcher`），
按 `docs/local-setup.md` 第 4 节建任务（cron：`0 9 * * *`，cwd：`$TOOL`，preset：`default`）。

---

【自动触发·DSH 版本巡检与升级预告】工作目录 `$TOOL`。目标：上游 DSH 出新版本时，结合**本机**状态给出"对我来说要改什么、现在该做什么"，并在对话里提示用户。无新版本时只输出一行即结束，不要制造噪音。

## 步骤 1：检测官方最新 tag（无需认证，约 2 秒）

用 pwsh 执行：

```
$tags = git ls-remote --tags --refs https://github.com/deepseek-ai/deepseek-harness.git | ForEach-Object { ($_ -split '\s+')[1] -replace '^refs/tags/','' } | Where-Object { $_ -match '^dsh-v\d+\.\d+\.\d+' }
$sorted = $tags | ForEach-Object { $v = $_ -replace '^dsh-v',''; $m = [regex]::Match($v,'^(\d+)\.(\d+)\.(\d+)(?:-([a-z]+)\.(\d+))?$'); if (-not $m.Success) { return }; $stage = switch ($m.Groups[4].Value) { '' {3} 'rc' {2} 'alpha' {1} default {0} }; $pre = if ($m.Groups[5].Success) { [int]$m.Groups[5].Value } else { 0 }; [pscustomobject]@{ tag = "dsh-v$v"; key = ('{0:D4}.{1:D4}.{2:D4}.{3}.{4:D4}' -f [int]$m.Groups[1].Value,[int]$m.Groups[2].Value,[int]$m.Groups[3].Value,$stage,$pre) } } | Sort-Object key
$latest = ($sorted | Select-Object -Last 1).tag
```

## 步骤 2：与本地已知基线比较

基线文件：`$TOOL/.state/latest-known-tag.txt`

- 若不存在：写入 `$latest`，输出「首次建立基线：<latest>，下次起只在有新版本时提示」，结束。
- 若与 `$latest` 相同，或 `$latest` 比基线更旧：输出一行「无新版本（基线 <baseline>，官方最新 <latest>）」，结束，不改任何文件。

## 步骤 3：有新版本时，收集云端结论

1) 云端报告（CI 每 6 小时生成）：

```
Invoke-RestMethod "https://api.github.com/repos/<你的用户名>/dsh-watcher/releases/tags/$latest-api-watch" -Headers @{ 'User-Agent'='dsh-agent'; Accept='application/vnd.github+json' }
```

取 `.body` 作为影响计划摘要（含「必须处理=N」与应对步骤）。

2) 若 404（报告尚未生成）：再看

```
Invoke-RestMethod "https://api.github.com/repos/<你的用户名>/dsh-watcher/issues?state=open&per_page=20" -Headers @{ 'User-Agent'='dsh-agent'; Accept='application/vnd.github+json' }
```

找标题含该 tag 的 issue，取 `.body`。

3) 两个都没有：如实说明「云端报告尚未生成（CI 最多 6 小时），本次仅给本机预检」。

## 步骤 4：跑本机体检

pwsh 执行：`node scripts/audit-local.mjs`（记录退出码与 error/warning 文本；退出码 2=仅 warning 属正常）。
目的：确认当前这台的挂载链路是健康的、可作升级前基线；若已有 error，先修再谈升级。

## 步骤 5：输出报告（固定格式，中文，结论先行）

```
# DSH 版本预告：<baseline> → <latest>
- 结论：建议升级 / 建议暂缓 / 建议等官方修
- 云端必须处理：N 处（列最多 10 条：kind + path + 一句话应对）
- 符号级待复核：M 条（提示用 scan-plugin.ps1 扫源码，不要逐条念）
- 本机体检：通过 / 有 X 个 error（列关键项）
- 升级前动作清单（按顺序）：① 备份 profile 补丁与自定义 bundle ② 跑 audit-local 留基线
  ③ 按必须处理清单改声明/代码 ④ 升级后重跑 audit-local --report <新报告> 看 C6 删包差异
- 参考链接：issue / Release / impact-plan 的 URL
```

## 步骤 6：记录

把 `$latest` 写入 `$TOOL/.state/latest-known-tag.txt`，避免同一版本重复提示
（即使报告尚未生成也记录，并在下次运行注明"已提示过、报告可能已就绪"）。

## 约束

- 只读 + 只写上述 state 文件；**不得**自动升级 DSH、不得修改 bundle/registry、不得 git push。
- 网络仅访问 github.com（ls-remote / api.github.com）。
- 报告里的替代 API 不要猜测：云端摘要说要去查证的，就写"待查证（见 impact-plan）"。
- 若 git ls-remote 失败（网络问题），输出一行失败原因并结束，不重试超过 1 次。
