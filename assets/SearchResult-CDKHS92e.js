import{u as U,f as se,g as te,h as Y,i as ae,P as le,t as re,j as ue,k as F,l as q,m as ie,n as M,p as t,q as oe,R as j,s as ne,v as ce,x as ve,C as pe,y as de,z as he,A as ye,B as me,D as ge,E as fe,F as He,G as B,H as I,I as Re,J as x,K as ke}from"./app-CxCoBM0Q.js";const Qe=["/","/about.html","/intro.html","/blogs/","/collection/","/note/1.html","/note/","/collection/blog/","/404.html","/category/","/category/%E9%9A%8F%E7%AC%94/","/tag/","/tag/%E4%BA%BA%E7%94%9F/","/tag/%E9%A6%96%E9%A1%B5/","/article/","/star/","/timeline/"],we="SEARCH_PRO_QUERY_HISTORY",g=U(we,[]),qe=()=>{const{queryHistoryCount:a}=x,l=a>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,a-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},P=a=>Qe[a.id]+("anchor"in a?`#${a.anchor}`:""),xe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:_}=x,f=U(xe,[]),Ae=()=>{const a=_>0;return{enabled:a,resultHistory:f,addResultHistory:l=>{if(a){const r={link:P(l),display:l.display};"header"in l&&(r.header=l.header),f.value=[r,...f.value.slice(0,_-1)]}},removeResultHistory:l=>{f.value=[...f.value.slice(0,l),...f.value.slice(l+1)]}}},Ee=a=>{const l=pe(),r=Y(),A=de(),i=F(0),k=q(()=>i.value>0),h=he([]);return ye(()=>{const{search:y,terminate:E}=me(),H=Re(c=>{const R=c.join(" "),{searchFilter:C=d=>d,splitWord:S,suggestionsFilter:O,...m}=l.value;R?(i.value+=1,y(c.join(" "),r.value,m).then(d=>C(d,R,r.value,A.value)).then(d=>{i.value-=1,h.value=d}).catch(d=>{console.warn(d),i.value-=1,i.value||(h.value=[])})):h.value=[]},x.searchDelay-x.suggestDelay);M([a,r],([c])=>H(c),{immediate:!0}),ge(()=>{E()})}),{isSearching:k,results:h}};var Se=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=te(),A=Y(),i=ae(le),{enabled:k,addQueryHistory:h,queryHistory:y,removeQueryHistory:E}=qe(),{enabled:H,resultHistory:c,addResultHistory:R,removeResultHistory:C}=Ae(),S=k||H,O=re(a,"queries"),{results:m,isSearching:d}=Ee(O),u=ue({isQuery:!0,index:0}),v=F(0),p=F(0),T=q(()=>S&&(y.value.length>0||c.value.length>0)),b=q(()=>m.value.length>0),D=q(()=>m.value[v.value]||null),z=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?c.value.length-1:y.value.length-1):u.index=s-1},G=()=>{const{isQuery:e,index:s}=u;s===(e?y.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},J=()=>{v.value=v.value>0?v.value-1:m.value.length-1,p.value=D.value.contents.length-1},K=()=>{v.value=v.value<m.value.length-1?v.value+1:0,p.value=0},V=()=>{p.value<D.value.contents.length-1?p.value+=1:K()},N=()=>{p.value>0?p.value-=1:J()},L=e=>e.map(s=>ke(s)?s:t(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=fe[e.index]||"$content",[o,w=""]=He(s)?s[A.value].split("$content"):s.split("$content");return e.display.map(n=>t("div",L([o,...n,w])))}return e.display.map(s=>t("div",L(s)))},Q=()=>{v.value=0,p.value=0,l("updateQuery",""),l("close")},X=()=>k?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.queryHistory),y.value.map((e,s)=>t("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{l("updateQuery",e)}},[t(B,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:o=>{o.preventDefault(),o.stopPropagation(),E(s)}})]))])):null,Z=()=>H?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,s)=>t(j,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{Q()}},()=>[t(B,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(o=>L(o)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:o=>{o.preventDefault(),o.stopPropagation(),C(s)}})]))])):null;return ie("keydown",e=>{if(a.isFocusing){if(b.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const s=D.value.contents[p.value];h(a.queries.join(" ")),R(s),r.push(P(s)),Q()}}else if(H){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(l("updateQuery",y.value[s]),e.preventDefault()):(r.push(c.value[s].link),Q())}}}}),M([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!b.value:!T.value}],id:"search-pro-results"},a.queries.length?d.value?t(oe,{hint:i.value.searching}):b.value?t("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:s},o)=>{const w=v.value===o;return t("li",{class:["search-pro-result-list-item",{active:w}]},[t("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((n,ee)=>{const $=w&&p.value===ee;return t(j,{to:P(n),class:["search-pro-result-item",{active:$,"aria-selected":$}],onClick:()=>{h(a.queries.join(" ")),R(n),Q()}},()=>[n.type==="text"?null:t(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",W(n))])])})])})):i.value.emptyResult:S?T.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{Se as default};
