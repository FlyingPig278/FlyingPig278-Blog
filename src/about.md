---
date: 2023-11-4
icon: info
sidebar: false
category:
  - Blog
tag:
  - Blog
---
# 关于本站
::::info 
未完待续，持续更新中……
::::
## 开始  
我第一次尝试架设博客是在2023年的年初，我刚申请到[GitHub Student Developer Pack](https://education.github.com/pack)，其中赠送了一年的.me域名，就借此机会从0开始尝试搭建一个博客。对于一个毫无基础的新手来说，Hexo的确是一个很好的选择，我也因此使用了很长时间的Hexo作为我的博客框架。但是后面不久，我发现我很难去自定义主题内的一些样式，我也没有能力自己实现我想要的功能，于是那个博客很快没了动静。趁这次学习Vue的机会，我接触到了VuePress，让我发现了很多我可以实现的功能，于是这个博客网站就这么诞生啦:tada::tada::tada:在之后相当长的时间内，我会一直维护这个博客，为其添加各种我喜欢的功能的。
## 框架支持
Vue 驱动的静态网站生成器-[VuePress v2](https://v2.vuepress.vuejs.org/zh/)
## 主题支持
一个具有强大功能的 vuepress 主题✨-[VuePress Theme Hope](https://theme-hope.vuejs.press/zh/)
## 自定义内容
1. **自定义组件**
    - BlogHero.vue
2. **自定义插件**
    - vuepress-plugin-hitokoto （一言插件），基于[Oragekk的一言插件](https://github.com/OrageKK/oragekk.github.io)
3. **其他**
    - 评论功能目前基于[Waline](https://waline.js.org/)，运行在[Vercel](https://vercel.com/)上
    - 博客首页显示Bing今日美图的功能基于[Oragekk的博客](https://github.com/OrageKK/oragekk.github.io)进行修改，使用了[VuePress Theme Hope](https://theme-hope.vuejs.press/zh/)提供的API获取壁纸链接