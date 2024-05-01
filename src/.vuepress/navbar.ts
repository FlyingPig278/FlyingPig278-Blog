import { navbar } from "vuepress-theme-hope";

export default navbar([
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
    text: "随笔",
    icon: "note",
    prefix: "/note/",
    children: [
      {
        text: "杂谈",
        icon: "user",
        link: "",
      },
      {
        text: "生活",
        icon: "life",
        link: "life/",
      },
    ],
  },
  {
    text: "收藏",
    icon: "star",
    link: "/collect",
  },
  {
    text: "关于",
    icon: "info",
    children:[
      { text: "关于我", icon: "user", link: "/intro" },
      { text: "关于本站", icon: "info", link: "/about" },
    ]
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
