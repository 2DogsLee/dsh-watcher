# 上架清单（市场收录待办）

> 状态记录：什么时候提交了、被拒原因、收录链接都记在这里。

## 1. SkillHub（api.skillhub.cn）— 待提交

覆盖 dsh-skill-store 等市场插件的默认源（13.4 万 skills，中文友好）。

- [ ] 注册 SkillHub 账号
- [ ] 提交物：`skill/SKILL.md`（name 已是 kebab-case `dsh-api-watch`，description 已含中英路由词）
- [ ] 建议分类：`developer-tools` / `coding`；tags：`deepseek-harness`、`upgrade`、`api-diff`、`breaking-changes`
- [ ] 英文短描述（提交框用）：
      > Detect DeepSeek Harness breaking changes before you upgrade: diff the plugin API surface between two versions, scan your plugin source, and get a change/risk impact report.
- [ ] 收录链接：＿＿＿

## 2. ClawHub（clawhub.ai）— 待提交

覆盖 dsh-skill-store 的第二源（6600+，热度排序可见）。

- [ ] 注册 ClawHub 账号
- [ ] 同一份 SKILL.md；注意重名问题（市场插件按名字取第一个匹配，名字 `dsh-api-watch` 无冲突即可）
- [ ] 收录链接：＿＿＿

## 3. dsh-plugin.org（项目收录站）— 待提交

- [ ] 提交仓库地址 https://github.com/2DogsLee/dsh-watcher
- [ ] 收录后把 README 徽章行的 listed 徽章加上（格式参照 dsh-skill-store README：
      `https://dsh-plugin.org/badges/listed.svg` 链到 `/plugins/2DogsLee/dsh-watcher`）
- [ ] 收录链接：＿＿＿

## 4. awesome-skills-cn 镜像 — 暂缓

结构是「知名收藏集镜像」（anthropics-skills、openai-skills 等），散装项目收录路径不明确。等 SkillHub/ClawHub 有一定热度后再看是否被镜像方主动抓取。

## 通用前置（已具备）

- ✅ SKILL.md：frontmatter name（kebab-case）+ description 含中英触发词
- ✅ 仓库：description + 12 topics + 徽章行（CI / latest report / MIT）
- ✅ CI 自治：每日 watch 报告 Release + 每日雷达 digest
- ✅ MIT LICENSE
