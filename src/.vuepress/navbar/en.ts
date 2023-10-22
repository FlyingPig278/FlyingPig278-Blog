import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  {
    text: "Posts",
    icon: "pen-to-square",
    prefix: "/en/posts/",
    children: [
      "New-Start",
    ],
  },
  {
    text: "Theme-Hope Docs",
    icon: "book",
    link: "https://theme-hope.vuejs.press/",
  },
]);
