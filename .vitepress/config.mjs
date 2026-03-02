import { defineConfig } from "vitepress";

export default {
  title: "我的坚果云笔记", // 站点标题（可自定义）
  description: "自动同步自坚果云的笔记",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "前端",
        items: [
          { text: "Vue3", link: "/front-end/Vue3/index.md" },
          { text: "Vue2", link: "/front-end/React/index.md" },
          { text: "Css", link: "/front-end/CSS/index.md" },
          { text: "Css3", link: "/front-end/Css3/index.md" },
          { text: "Html", link: "/front-end/Html/index.md" },
          { text: "JavaScript", link: "/front-end/JavaScript/index.md" },
          { text: "JQuery", link: "/front-end/jQuery/index.md" },
          { text: "Node", link: "/front-end/Node/index.md" },
          { text: "React", link: "/front-end/React/index.md" },
        ],
      },
      { text: "运维", link: "/operation-maintenance/" },
    ],
  },

  base: "/my-notes/", // ⚠️ 必须替换为你的GitHub仓库名，比如仓库叫notes就填/notes/
};
