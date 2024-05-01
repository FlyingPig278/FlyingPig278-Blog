import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    "/blogs/":"structure",

    "/note/":"structure",

    "/": ["/about", "/intro"],

    "/collection":"structure",

    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    // },
});
