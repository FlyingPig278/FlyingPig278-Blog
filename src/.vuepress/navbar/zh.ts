import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      "New-Start",
    ],
  },
  {
    text: "Theme-Hope 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
