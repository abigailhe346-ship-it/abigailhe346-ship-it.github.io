# YOUR NAME / Raw Intelligence

一份 AI-native 创意技术作品集：100 个项目 + 1 个可分享的总站。所有页面都是自包含静态 HTML，图片和动效由 Canvas / SVG / CSS / Three.js（本地依赖）生成，不依赖 CDN。视觉基调是粗野主义 × 自然主义。

## 直接打开

双击 [index.html](./index.html) 即可查看总站。首页卡片会在新标签页打开对应项目页面：

```text
works/gen-art/kinetic-atlas/index.html
works/web-design/brutalist-arch/index.html
```

所有 100 个项目均有独立页面。下面是几个可以直接打开的入口：

- `works/gen-art/kinetic-atlas/index.html`
- `works/gen-art/latent-garden/index.html`
- `works/web-design/afterimage-editorial/index.html`
- `works/agent-demos/orbit-orchestrator/index.html`
- `works/3d/soft-machine-07/index.html`
- `works/ai-video/firefly-night/index.html`

每个项目页面右下角都有 `LAB / OPEN` 实验台：可以调整 Grain / Tempo / Tension，触发 Regenerate，检查页面层级，全屏、复制分享链接并导出 PNG。快捷键：`L` 打开实验台、`R` 重生、`F` 全屏、`S` 导出。

## 发给面试官

把 `ai-portfolio` 文件夹部署到任意静态托管即可获得 HTTPS 网址。GitHub Pages 的最短路径：新建仓库 → 上传本目录内容 → Settings → Pages → Deploy from branch。上线后，首页的 Copy project link 会自动复制可直接发送的线上地址。

上线后的分享格式会是：`https://<用户名>.github.io/<仓库名>/works/gen-art/kinetic-atlas/`。把 `<用户名>` 和 `<仓库名>` 换成你的实际信息即可直接发给面试官。

## 项目结构

`works/<category>/<slug>/` 下的每个项目都包含独立 `index.html`；总站的 100 张卡片链接都已经对应到真实路径，项目元数据保存在同目录的 `card.json`。

## 视觉研究入口

这套视觉语言取材于公开可访问的设计研究入口，作为方法参考而不是素材复制：

- [Awwwards / Interaction](https://www.awwwards.com/websites/interaction/)
- [Codrops / Creative Web Experiments](https://tympanus.net/codrops/)
- [Three.js Examples](https://threejs.org/examples/)
- [OpenProcessing / Generative Art](https://openprocessing.org/)
- [GitHub / creative-coding](https://github.com/topics/creative-coding)
