import { defineUserConfig, viteBundler } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { hitokotoPlugin } from "./plugins/vuepress-plugin-hitokoto";

export default defineUserConfig({
  base: "/",

  locales: {
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
          getter: (page) => <string | string[]> page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => <string | string[]> page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
    hitokotoPlugin({}),
  ],

  theme: theme,
  
  bundler: viteBundler({
    viteOptions: {
      server: {
        proxy: {
          "/bing": {
            target: "https://cn.bing.com",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/bing/, ""),
          },
        },
      },
    },
    // vuePluginOptions: {},
  }),
  // Enable it with pwa
  // shouldPrefetch: false,
});
