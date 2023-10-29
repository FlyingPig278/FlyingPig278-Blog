import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { hitokotoPlugin } from "./plugins/vuepress-plugin-hitokoto";

export default defineUserConfig({
  base: "/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "FlyingPig278",
      description: "FlyingPig278",
    },
    "/": {
      lang: "zh-CN",
      title: "FlyingPig278",
      description: "FlyingPig278",
    },
  },

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
    hitokotoPlugin({}),
  ],

  theme,
  
  // Enable it with pwa
  // shouldPrefetch: false,
});