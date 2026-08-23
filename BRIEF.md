# AI Portfolio — 制作简报（所有制作代理必读）

你在为一位设计师/工程师制作 AI 作品集，共 100 件作品 + 1 个总站。你负责其中 5 件。目标是"发给面试官一眼惊艳"——每件作品都必须达到 Awwwards 提名级别的完成度，而不是 demo 骨架。

## 硬性规则
1. 每件作品 = 一个目录 `works/<category>/<slug>/`，内含：
   - `index.html`：**单文件、完全自包含**（所有 CSS/JS 内联）。禁止引用任何外部网络资源（无 CDN、无 Google Fonts、无外链图片）。字体用系统字体栈（衬线: Didot/Bodoni MT/Georgia/Songti SC/serif；无衬线: -apple-system/Helvetica Neue/PingFang SC/sans-serif；等宽: SF Mono/Menlo/monospace）。
   - 唯一例外：3D 类作品可引用本地 three.js：`<script src="../../../vendor/three.min.js"></script>`（r128，全局 `THREE`）。其他类一律不用框架。
   - `card.json`：`{"slug","category","title_en","title_cn","desc_cn"(≤40字,写得有文案感),"tags"[3],"palette":["#hex","#hex","#hex"]}`（palette 取作品主色 3 个，总站卡片用）
2. 纯前端 Canvas 2D / WebGL / CSS / SVG 实现；动画必须流畅（requestAnimationFrame，注意 devicePixelRatio，resize 自适应）。
3. 交互性：每件作品至少 2 个真实交互（鼠标跟随/参数滑杆/点击响应/键盘/随机生成按钮等）。生成器类必须有"随机再生"和"下载 PNG/SVG"按钮。
4. 视觉：统一的设计素养——克制的配色（先定 3-5 色 palette 再动手）、充裕留白、清晰字阶、细腻动效（cubic-bezier 缓动）。每件作品要有自己的名字/署名小标（如左上角作品名 + 序号）。
5. 移动端不破碎（canvas 自适应，控件不溢出），桌面端为主。
6. 不要 emoji 图标（用 SVG 或纯文字）。文案中英皆可，但要有文案质量，不要 lorem ipsum。

## 制作流程
1. 先花几分钟做风格调研（WebSearch：Awwwards / GitHub 上该风格流派的代表作），提炼 2-3 个参考点再动手。
2. 逐件制作：每件独立完整做完再做下一件。完成后自查：文件能直接在浏览器打开、无外链、无语法错误（可把 JS 抽出来 `node --check` 验证）。
3. 全部完成后回报：每件作品的 slug、标题、一句话描述、交互点。

## 反面清单（出现即不合格）
- 只有静态布局没有交互/动效
- 默认蓝紫渐变 + 圆角卡片 + 居中大字的"AI 模板味"
- 引用 unsplash/picsum/任何外链资源
- 滑杆按钮等控件无样式（浏览器默认外观）
- 首屏空白或需要用户操作才出现内容
