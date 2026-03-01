import { defineConfig } from "vitepress";

export default {
  title: "我的坚果云笔记", // 站点标题（可自定义）
  description: "自动同步自坚果云的笔记",
  themeConfig: {
    nav: [{ text: "首页", link: "/" }], // 顶部导航
    sidebar: "auto", // 自动生成侧边栏（识别所有md文件）
  },
  base: "/my-notes/", // ⚠️ 必须替换为你的GitHub仓库名，比如仓库叫notes就填/notes/
};
