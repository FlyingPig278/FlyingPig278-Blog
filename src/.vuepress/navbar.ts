import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/blogs/",
    children: [
      "",
    ],
  },
  {
    text: "随笔",
    icon: "paper-plane",
    link: "/note/",
  },
  {
    text: "收藏",
    icon: "star",
    link: "/collection/",
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
