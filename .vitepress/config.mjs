import { defineConfig } from "vitepress";

export default {
  title: "我的坚果云笔记", // 站点标题（可自定义）
  description: "自动同步自坚果云的笔记",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "前端", link: "/front-end/" },
      { text: "运维", link: "/operation-maintenance/" },
    ],
    sidebar: {
      "/前端/": [
        {
          text: "前端",
          items: [
            { text: "Vue3", link: "/front-end/Vue3/" },
            { text: "JavaScript", link: "/front-end/JavaScript/" },
          ],
        },
      ],
    },
  },

  base: "/my-notes/", // ⚠️ 必须替换为你的GitHub仓库名，比如仓库叫notes就填/notes/
};
