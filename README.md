# MIRA / Intelligence in the Making

一份 AI-native 创意技术作品集：100 个项目 + 1 个可分享的总站。所有页面都是自包含静态 HTML，图片和动效由 Canvas / SVG / CSS / Three.js（本地依赖）生成，不依赖 CDN。

## 直接打开

双击 [index.html](./index.html) 即可查看总站。首页卡片点击后会生成可分享的 hash 链接：

```text
index.html#project/kinetic-atlas
index.html#project/afterimage
```

在项目弹窗中点 **Copy project link**，即可复制当前项目的完整地址。下面这些完整交互项目也可以直接打开：

- `works/gen-art/kinetic-atlas/index.html`
- `works/gen-art/latent-garden/index.html`
- `works/web-design/afterimage-editorial/index.html`
- `works/agent-demos/orbit-orchestrator/index.html`
- `works/3d/soft-machine-07/index.html`
- `works/ai-video/firefly-night/index.html`

## 发给面试官

把 `ai-portfolio` 文件夹部署到任意静态托管即可获得 HTTPS 网址。GitHub Pages 的最短路径：新建仓库 → 上传本目录内容 → Settings → Pages → Deploy from branch。上线后，首页的 Copy project link 会自动复制可直接发送的线上地址。

上线后的分享格式会是：`https://<用户名>.github.io/<仓库名>/#project/kinetic-atlas`。把 `<用户名>` 和 `<仓库名>` 换成你的实际信息即可直接发给面试官。

## 项目结构

`works/<category>/<slug>/` 下的已完成 demo 以独立 `index.html` + `card.json` 保存；总站中的 100 个项目同时提供稳定的 hash 路由，概念项目无需额外构建即可直接分享首页地址打开。

## 视觉研究入口

这套视觉语言取材于公开可访问的设计研究入口，作为方法参考而不是素材复制：

- [Awwwards / Interaction](https://www.awwwards.com/websites/interaction/)
- [Codrops / Creative Web Experiments](https://tympanus.net/codrops/)
- [Three.js Examples](https://threejs.org/examples/)
- [OpenProcessing / Generative Art](https://openprocessing.org/)
- [GitHub / creative-coding](https://github.com/topics/creative-coding)
