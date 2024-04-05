import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "FlyingPig278",
  description: "FlyingPig278's Blog",

  theme,

  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
    //TODO
    //Add new collection page
    //VPCard
  },
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
