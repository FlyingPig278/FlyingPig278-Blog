import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    "/blogs/": "structure",
    "/note/": "structure",
    "/": ["/about", "/intro"],
    "/collection": [
        "",
        "game",
        {
            text: "工具",
            icon: "screwdriver-wrench",
            collapsible: true,
            prefix: "tool/",
            children: ["website", "software"]
        },
        "blog",
    ],
});
