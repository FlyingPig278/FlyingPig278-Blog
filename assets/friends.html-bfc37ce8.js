import{f as l,o as n,c as r,u as o,F as p,g as h,h as m,a as e,t as c,_,d as g,b as k}from"./app-aceff91d.js";const u=[{name:"FlyingPig278",desc:"FlyingPig278",icon:"https://cdn.jsdelivr.net/gh/FlyingPig278/blog-assets/logo.png",link:"https://flyingpig.me"},{name:"上冬十二",desc:"到最后，竟庆幸于夕阳仍留在身上",icon:"https://oragekk.me/logo.svg",link:"https://oragekk.me/"},{name:"Mr.Hope",desc:"VuePress Theme Hope 主题作者。",icon:"https://mister-hope.com/logo.svg",link:"https://mister-hope.com/"}],f={class:"vp-project-panel"},v=["href"],y=["src"],x={class:"card-content"},b={class:"link-avatar my-auto"},C=["src"],F={class:"link-text"},L={class:"link-name"},M={class:"link-desc"},V=l({__name:"MyCoverLink",props:{type:{type:String,require:!0}},setup(a){const i=a;let s;switch(i.type){case"friend":s=u;break;default:s=[];break}return(B,$)=>(n(),r("div",f,[o(s).length>0?(n(!0),r(p,{key:0},h(o(s),(t,d)=>(n(),r("div",{key:d,class:"link-card"},[e("a",{class:"card-body",href:t.link,target:"_blank"},[e("img",{class:"link-picture",src:`https://s0.wp.com/mshots/v1/${t.link}?w=323px&h=200px`,alt:"",rel:"noopener noreferrer external"},null,8,y),e("div",x,[e("div",b,[e("img",{src:t.icon,onerror:'this.onerror=null,this.src=this.srcset="/assets/avatar.webp"'},null,8,C)]),e("div",F,[e("div",L,c(t.name),1),e("div",M,c(t.desc),1)])])],8,v)]))),128)):m("v-if",!0)]))}});const w=_(V,[["__scopeId","data-v-bf032488"],["__file","MyCoverLink.vue"]]),N=e("h2",{id:"小伙伴",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#小伙伴","aria-hidden":"true"},"#"),k(" 小伙伴")],-1),P=l({__name:"friends.html",setup(a){return(i,s)=>(n(),r("div",null,[N,g(o(w),{type:"friend"})]))}}),D=_(P,[["__file","friends.html.vue"]]);export{D as default};
