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
    text: "收藏",
    icon: "star",
    link: "/collect",
  },
  {
    text: "友链",
    icon: "link",
    link: "/friends/",
  },
  {
    text: "关于",
    icon: "info",
    children:[
      { text: "关于我", icon: "user", link: "/intro" },
      { text: "关于本站", icon: "info", link: "/about" },
    ]
  },
]);
