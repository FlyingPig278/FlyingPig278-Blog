import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://flyingpig278.github.io/FlyingPig278-Blog",
  author: {
    name: "FlyingPig278",
    url: "https://flyingpig278.github.io/FlyingPig278-Blog/",
    email: "hello_ysy@163.com"
  },

  // iconAssets: "fontawesome-with-brands",

  logo: "/logo.ico",

  repo: "FlyingPig278/FlyingPig278-Blog",
  docsDir: "src",
  docsBranch: "master",

  darkmode: "toggle",

  // 导航栏
  navbar,
  // 侧边栏
  sidebar,

  // 页脚
  footer: "✨长风破浪会有时，直挂云帆济沧海✨",
  displayFooter: true,

  // 博客相关
  blog: {
    description: "高三学生，业余开发者",
    intro: "/intro.html",
    medias: {
      // Baidu: "https://example.com",
      BiliBili: "https://space.bilibili.com/1822838905",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      Email: "mailto:hello_ysy@163.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      GitHub: "https://github.com/FlyingPig278",
      // Gitlab: "https://example.com",
      // Gmail: "mailto:info@example.com",
      // Instagram: "https://example.com",
      // Lark: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      Qzone: "https://user.qzone.qq.com/2785117906",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      Zhihu: "https://www.zhihu.com/people/yi-ge-wu-you-wu-lu-de-ren",
      // MrHope: ["https://mister-hope.com", MR_HOPE_AVATAR],
    },
  },

  // 加密配置
  encrypt: {
    config: {
      // "/demo/encrypt.html": ["1234"],
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "编辑此页",
  },
  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,
  markdown:{
      align: true,
      attrs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
  },
  // 在这里配置主题提供的插件
  plugins: {
    icon:{
      assets:"fontawesome-with-brands"
    },

    blog: true,

    slimsearch: true,
    
    // 启用之前需安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://comment.flyingpig.top/",
    // },

    components: {
      components: ["Badge", "VPCard"],
    },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    
    // mdEnhance: {
    //   align: true,
    //   attrs: true,
    //   codetabs: true,
    //   component: true,
    //   demo: true,
    //   figure: true,
    //   imgLazyload: true,
    //   imgSize: true,
    //   include: true,
    //   mark: true,
    //   stylize: [
    //     {
    //       matcher: "Recommended",
    //       replacer: ({ tag }) => {
    //         if (tag === "em")
    //           return {
    //             tag: "Badge",
    //             attrs: { type: "tip" },
    //             content: "Recommended",
    //           };
    //       },
    //     },
    //   ],
    //   sub: true,
    //   sup: true,
    //   tabs: true,
    //   vPre: true,

    //   // 在启用之前安装 chart.js
    //   // chart: true,

    //   // insert component easily

    //   // 在启用之前安装 echarts
    //   // echarts: true,

    //   // 在启用之前安装 flowchart.ts
    //   // flowchart: true,

    //   // gfm requires mathjax-full to provide tex support
    //   // gfm: true,

    //   // 在启用之前安装 katex
    //   // katex: true,

    //   // 在启用之前安装 mathjax-full
    //   // mathjax: true,

    //   // 在启用之前安装 mermaid
    //   // mermaid: true,

    //   // playground: {
    //   //   presets: ["ts", "vue"],
    //   // },

    //   // 在启用之前安装 reveal.js
    //   revealJs: {
    //     plugins: ["highlight", "math", "search", "notes", "zoom"],
    //   },

    //   // 在启用之前安装 @vue/repl
    //   // vuePlayground: true,

    //   // install sandpack-vue3 before enabling it
    //   // sandpack: true,
    // },
  },
}, {
  //主题行为选项
  custom: true
}
);
