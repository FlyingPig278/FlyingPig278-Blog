const V=Object.entries,et=Object.fromEntries,st="ENTRIES",L="KEYS",T="VALUES",_="";class D{set;_type;_path;constructor(t,s){const n=t._tree,o=Array.from(n.keys());this.set=t,this._type=s,this._path=o.length>0?[{node:n,keys:o}]:[]}next(){const t=this.dive();return this.backtrack(),t}dive(){if(this._path.length===0)return{done:!0,value:void 0};const{node:t,keys:s}=E(this._path);if(E(s)===_)return{done:!1,value:this.result()};const n=t.get(E(s));return this._path.push({node:n,keys:Array.from(n.keys())}),this.dive()}backtrack(){if(this._path.length===0)return;const t=E(this._path).keys;t.pop(),!(t.length>0)&&(this._path.pop(),this.backtrack())}key(){return this.set._prefix+this._path.map(({keys:t})=>E(t)).filter(t=>t!==_).join("")}value(){return E(this._path).node.get(_)}result(){switch(this._type){case T:return this.value();case L:return this.key();default:return[this.key(),this.value()]}}[Symbol.iterator](){return this}}const E=e=>e[e.length-1],nt=(e,t,s)=>{const n=new Map;if(t===void 0)return n;const o=t.length+1,u=o+s,i=new Uint8Array(u*o).fill(s+1);for(let r=0;r<o;++r)i[r]=r;for(let r=1;r<u;++r)i[r*o]=r;return R(e,t,s,n,i,1,o,""),n},R=(e,t,s,n,o,u,i,r)=>{const d=u*i;t:for(const c of e.keys())if(c===_){const a=o[d-1];a<=s&&n.set(r,[e.get(c),a])}else{let a=u;for(let h=0;h<c.length;++h,++a){const g=c[h],m=i*a,p=m-i;let l=o[m];const f=Math.max(0,a-s-1),y=Math.min(i-1,a+s);for(let F=f;F<y;++F){const v=g!==t[F],z=o[p+F]+ +v,A=o[p+F+1]+1,w=o[m+F]+1,j=o[m+F+1]=Math.min(z,A,w);j<l&&(l=j)}if(l>s)continue t}R(e.get(c),t,s,n,o,a,i,r+c)}};class C{_tree;_prefix;_size=void 0;constructor(t=new Map,s=""){this._tree=t,this._prefix=s}atPrefix(t){if(!t.startsWith(this._prefix))throw new Error("Mismatched prefix");const[s,n]=x(this._tree,t.slice(this._prefix.length));if(s===void 0){const[o,u]=O(n);for(const i of o.keys())if(i!==_&&i.startsWith(u)){const r=new Map;return r.set(i.slice(u.length),o.get(i)),new C(r,t)}}return new C(s,t)}clear(){this._size=void 0,this._tree.clear()}delete(t){return this._size=void 0,ot(this._tree,t)}entries(){return new D(this,st)}forEach(t){for(const[s,n]of this)t(s,n,this)}fuzzyGet(t,s){return nt(this._tree,t,s)}get(t){const s=k(this._tree,t);return s!==void 0?s.get(_):void 0}has(t){const s=k(this._tree,t);return s!==void 0&&s.has(_)}keys(){return new D(this,L)}set(t,s){if(typeof t!="string")throw new Error("key must be a string");return this._size=void 0,I(this._tree,t).set(_,s),this}get size(){if(this._size)return this._size;this._size=0;const t=this.entries();for(;!t.next().done;)this._size+=1;return this._size}update(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=I(this._tree,t);return n.set(_,s(n.get(_))),this}fetch(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=I(this._tree,t);let o=n.get(_);return o===void 0&&n.set(_,o=s()),o}values(){return new D(this,T)}[Symbol.iterator](){return this.entries()}static from(t){const s=new C;for(const[n,o]of t)s.set(n,o);return s}static fromObject(t){return C.from(Object.entries(t))}}const x=(e,t,s=[])=>{if(t.length===0||e==null)return[e,s];for(const n of e.keys())if(n!==_&&t.startsWith(n))return s.push([e,n]),x(e.get(n),t.slice(n.length),s);return s.push([e,t]),x(void 0,"",s)},k=(e,t)=>{if(t.length===0||e==null)return e;for(const s of e.keys())if(s!==_&&t.startsWith(s))return k(e.get(s),t.slice(s.length))},I=(e,t)=>{const s=t.length;t:for(let n=0;e&&n<s;){for(const u of e.keys())if(u!==_&&t[n]===u[0]){const i=Math.min(s-n,u.length);let r=1;for(;r<i&&t[n+r]===u[r];)++r;const d=e.get(u);if(r===u.length)e=d;else{const c=new Map;c.set(u.slice(r),d),e.set(t.slice(n,n+r),c),e.delete(u),e=c}n+=r;continue t}const o=new Map;return e.set(t.slice(n),o),o}return e},ot=(e,t)=>{const[s,n]=x(e,t);if(s!==void 0){if(s.delete(_),s.size===0)W(n);else if(s.size===1){const[o,u]=s.entries().next().value;q(n,o,u)}}},W=e=>{if(e.length===0)return;const[t,s]=O(e);if(t.delete(s),t.size===0)W(e.slice(0,-1));else if(t.size===1){const[n,o]=t.entries().next().value;n!==_&&q(e.slice(0,-1),n,o)}},q=(e,t,s)=>{if(e.length===0)return;const[n,o]=O(e);n.set(o+t,s),n.delete(o)},O=e=>e[e.length-1],ut=(e,t)=>{const s=e._idToShortId.get(t);if(s!=null)return e._storedFields.get(s)},it=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u,M="or",$="and",rt="and_not",ct=(e,t)=>{e.includes(t)||e.push(t)},N=(e,t)=>{for(const s of t)e.includes(s)||e.push(s)},P=({score:e},{score:t})=>t-e,lt=()=>new Map,b=e=>{const t=new Map;for(const s of Object.keys(e))t.set(parseInt(s,10),e[s]);return t},G=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0,ht={[M]:(e,t)=>{for(const s of t.keys()){const n=e.get(s);if(n==null)e.set(s,t.get(s));else{const{score:o,terms:u,match:i}=t.get(s);n.score=n.score+o,n.match=Object.assign(n.match,i),N(n.terms,u)}}return e},[$]:(e,t)=>{const s=new Map;for(const n of t.keys()){const o=e.get(n);if(o==null)continue;const{score:u,terms:i,match:r}=t.get(n);N(o.terms,i),s.set(n,{score:o.score+u,terms:o.terms,match:Object.assign(o.match,r)})}return s},[rt]:(e,t)=>{for(const s of t.keys())e.delete(s);return e}},dt=(e,t,s,n,o,u)=>{const{k:i,b:r,d}=u;return Math.log(1+(s-t+.5)/(t+.5))*(d+e*(i+1)/(e+i*(1-r+r*n/o)))},at=e=>(t,s,n)=>{const o=typeof e.fuzzy=="function"?e.fuzzy(t,s,n):e.fuzzy||!1,u=typeof e.prefix=="function"?e.prefix(t,s,n):e.prefix===!0;return{term:t,fuzzy:o,prefix:u}},H=(e,t,s,n)=>{for(const o of Object.keys(e._fieldIds))if(e._fieldIds[o]===s){e._options.logger("warn",`SlimSearch: document with ID ${e._documentIds.get(t)} has changed before removal: term "${n}" was not present in field "${o}". Removing a document after it has changed can corrupt the index!`,"version_conflict");return}},ft=(e,t,s,n)=>{if(!e._index.has(n)){H(e,s,t,n);return}const o=e._index.fetch(n,lt),u=o.get(t);u==null||u.get(s)==null?H(e,s,t,n):u.get(s)<=1?u.size<=1?o.delete(t):u.delete(s):u.set(s,u.get(s)-1),e._index.get(n).size===0&&e._index.delete(n)},gt={k:1.2,b:.7,d:.5},mt={idField:"id",extractField:(e,t)=>e[t],tokenize:e=>e.split(it),processTerm:e=>e.toLowerCase(),fields:void 0,searchOptions:void 0,storeFields:[],logger:(e,t)=>{typeof console?.[e]=="function"&&console[e](t)},autoVacuum:!0},J={combineWith:M,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:gt},pt={combineWith:$,prefix:(e,t,s)=>t===s.length-1},Ft={batchSize:1e3,batchWait:10},U={minDirtFactor:.1,minDirtCount:20},_t={...Ft,...U},K=Symbol("*"),yt=(e,t)=>{const s=new Map,n={...e._options.searchOptions,...t};for(const[o,u]of e._documentIds){const i=n.boostDocument?n.boostDocument(u,"",e._storedFields.get(o)):1;s.set(o,{score:i,terms:[],match:{}})}return s},X=(e,t=M)=>{if(e.length===0)return new Map;const s=t.toLowerCase(),n=ht[s];if(!n)throw new Error(`Invalid combination operator: ${t}`);return e.reduce(n)||new Map},S=(e,t,s,n,o,u,i,r,d=new Map)=>{if(o==null)return d;for(const c of Object.keys(u)){const a=u[c],h=e._fieldIds[c],g=o.get(h);if(g==null)continue;let m=g.size;const p=e._avgFieldLength[h];for(const l of g.keys()){if(!e._documentIds.has(l)){ft(e,h,l,s),m-=1;continue}const f=i?i(e._documentIds.get(l),s,e._storedFields.get(l)):1;if(!f)continue;const y=g.get(l),F=e._fieldLength.get(l)[h],v=dt(y,m,e._documentCount,F,p,r),z=n*a*f*v,A=d.get(l);if(A){A.score+=z,ct(A.terms,t);const w=G(A.match,s);w?w.push(c):A.match[s]=[c]}else d.set(l,{score:z,terms:[t],match:{[s]:[c]}})}}return d},At=(e,t,s)=>{const n={...e._options.searchOptions,...s},o=(n.fields||e._options.fields).reduce((l,f)=>({...l,[f]:G(n.boost,f)||1}),{}),{boostDocument:u,weights:i,maxFuzzy:r,bm25:d}=n,{fuzzy:c,prefix:a}={...J.weights,...i},h=e._index.get(t.term),g=S(e,t.term,t.term,1,h,o,u,d);let m,p;if(t.prefix&&(m=e._index.atPrefix(t.term)),t.fuzzy){const l=t.fuzzy===!0?.2:t.fuzzy,f=l<1?Math.min(r,Math.round(t.term.length*l)):l;f&&(p=e._index.fuzzyGet(t.term,f))}if(m)for(const[l,f]of m){const y=l.length-t.term.length;if(!y)continue;p?.delete(l);const F=a*l.length/(l.length+.3*y);S(e,t.term,l,F,f,o,u,d,g)}if(p)for(const l of p.keys()){const[f,y]=p.get(l);if(!y)continue;const F=c*l.length/(l.length+y);S(e,t.term,l,F,f,o,u,d,g)}return g},Y=(e,t,s={})=>{if(t===K)return yt(e,s);if(typeof t!="string"){const a={...s,...t,queries:void 0},h=t.queries.map(g=>Y(e,g,a));return X(h,a.combineWith)}const{tokenize:n,processTerm:o,searchOptions:u}=e._options,i={tokenize:n,processTerm:o,...u,...s},{tokenize:r,processTerm:d}=i,c=r(t).flatMap(a=>d(a)).filter(a=>!!a).map(at(i)).map(a=>At(e,a,i));return X(c,i.combineWith)},Q=(e,t,s={})=>{const n=Y(e,t,s),o=[];for(const[u,{score:i,terms:r,match:d}]of n){const c=r.length||1,a={id:e._documentIds.get(u),score:i*c,terms:Object.keys(d),queryTerms:r,match:d};Object.assign(a,e._storedFields.get(u)),(s.filter==null||s.filter(a))&&o.push(a)}return t===K&&s.boostDocument==null&&e._options.searchOptions.boostDocument==null||o.sort(P),o},Ct=(e,t,s={})=>{s={...e._options.autoSuggestOptions,...s};const n=new Map;for(const{score:u,terms:i}of Q(e,t,s)){const r=i.join(" "),d=n.get(r);d!=null?(d.score+=u,d.count+=1):n.set(r,{score:u,terms:i,count:1})}const o=[];for(const[u,{score:i,terms:r,count:d}]of n)o.push({suggestion:u,terms:r,score:i/d});return o.sort(P),o};class Et{_options;_index;_documentCount;_documentIds;_idToShortId;_fieldIds;_fieldLength;_avgFieldLength;_nextId;_storedFields;_dirtCount;_currentVacuum;_enqueuedVacuum;_enqueuedVacuumConditions;constructor(t){if(t?.fields==null)throw new Error('SlimSearch: option "fields" must be provided');const s=t.autoVacuum==null||t.autoVacuum===!0?_t:t.autoVacuum;this._options={...mt,...t,autoVacuum:s,searchOptions:{...J,...t.searchOptions||{}},autoSuggestOptions:{...pt,...t.autoSuggestOptions||{}}},this._index=new C,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=U,this.addFields(this._options.fields)}get isVacuuming(){return this._currentVacuum!=null}get dirtCount(){return this._dirtCount}get dirtFactor(){return this._dirtCount/(1+this._documentCount+this._dirtCount)}get documentCount(){return this._documentCount}get termCount(){return this._index.size}toJSON(){const t=[];for(const[s,n]of this._index){const o={};for(const[u,i]of n)o[u]=Object.fromEntries(i);t.push([s,o])}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:t,serializationVersion:2}}addFields(t){for(let s=0;s<t.length;s++)this._fieldIds[t[s]]=s}}const zt=({index:e,documentCount:t,nextId:s,documentIds:n,fieldIds:o,fieldLength:u,averageFieldLength:i,storedFields:r,dirtCount:d,serializationVersion:c},a)=>{if(c!==1&&c!==2)throw new Error("SlimSearch: cannot deserialize an index created with an incompatible version");const h=new Et(a);h._documentCount=t,h._nextId=s,h._documentIds=b(n),h._idToShortId=new Map,h._fieldIds=o,h._fieldLength=b(u),h._avgFieldLength=i,h._storedFields=b(r),h._dirtCount=d||0,h._index=new C;for(const[g,m]of h._documentIds)h._idToShortId.set(m,g);for(const[g,m]of e){const p=new Map;for(const l of Object.keys(m)){let f=m[l];c===1&&(f=f.ds),p.set(parseInt(l,10),b(f))}h._index.set(g,p)}return h},B=(e,t)=>{const s=e.toLowerCase(),n=t.toLowerCase(),o=[];let u=0,i=0;const r=(c,a=!1)=>{let h="";i===0?h=c.length>20?`… ${c.slice(-20)}`:c:a?h=c.length+i>100?`${c.slice(0,100-i)}… `:c:h=c.length>20?`${c.slice(0,20)} … ${c.slice(-20)}`:c,h&&o.push(h),i+=h.length,a||(o.push(["mark",t]),i+=t.length,i>=100&&o.push(" …"))};let d=s.indexOf(n,u);if(d===-1)return null;for(;d>=0;){const c=d+n.length;if(r(e.slice(u,d)),u=c,i>100)break;d=s.indexOf(n,u)}return i<100&&r(e.slice(u),!0),o},wt=(e,t)=>t.contents.reduce((s,[,n])=>s+n,0)-e.contents.reduce((s,[,n])=>s+n,0),xt=(e,t)=>Math.max(...t.contents.map(([,s])=>s))-Math.max(...e.contents.map(([,s])=>s)),Z=(e,t,s={})=>{const n={};return Q(t,e,{boost:{h:2,t:1,c:4},prefix:!0,...s}).forEach(o=>{const{id:u,terms:i,score:r}=o,d=u.includes("@"),c=u.includes("#"),[a,h]=u.split(/[#@]/),g=Number(a),m=i.sort((l,f)=>l.length-f.length).filter((l,f)=>i.slice(f+1).every(y=>!y.includes(l))),{contents:p}=n[g]??={title:"",contents:[]};if(d)p.push([{type:"customField",id:g,index:h,display:m.map(l=>o.c.map(f=>B(f,l))).flat().filter(l=>l!==null)},r]);else{const l=m.map(f=>B(o.h,f)).filter(f=>f!==null);if(l.length&&p.push([{type:c?"heading":"title",id:g,...c&&{anchor:h},display:l},r]),"t"in o)for(const f of o.t){const y=m.map(F=>B(f,F)).filter(F=>F!==null);y.length&&p.push([{type:"text",id:g,...c&&{anchor:h},display:y},r])}}}),V(n).sort(([,o],[,u])=>"max"==="total"?wt(o,u):xt(o,u)).map(([o,{title:u,contents:i}])=>{if(!u){const r=ut(t,o);r&&(u=r.h)}return{title:u,contents:i.map(([r])=>r)}})},tt=(e,t,s={})=>{const n=Ct(t,e,{fuzzy:.2,maxFuzzy:3,...s}).map(({suggestion:o})=>o);return e.includes(" ")?n:n.filter(o=>!o.includes(" "))},bt=et(V(JSON.parse("{\"/\":{\"documentCount\":23,\"nextId\":23,\"documentIds\":{\"0\":\"1\",\"1\":\"1#开始\",\"2\":\"1#框架支持\",\"3\":\"1#主题支持\",\"4\":\"1#自定义内容\",\"5\":\"2\",\"6\":\"3\",\"7\":\"4\",\"8\":\"5\",\"9\":\"6\",\"10\":\"6#原神-genshin-impact\",\"11\":\"6#我的世界-minecraft\",\"12\":\"6#戴森球计划-dyson-sphere-program\",\"13\":\"6#魔兽世界-world-of-warcraft\",\"14\":\"6#steam\",\"15\":\"7\",\"16\":\"8\",\"17\":\"8@0\",\"18\":\"8@1\",\"19\":\"9\",\"20\":\"9@0\",\"21\":\"9@1\",\"22\":\"10\"},\"fieldIds\":{\"h\":0,\"t\":1,\"c\":2},\"fieldLength\":{\"0\":[1,4],\"1\":[1,22],\"2\":[1,4],\"3\":[1,6],\"4\":[1,2],\"5\":[1,19],\"6\":[1,12],\"7\":[1,4],\"8\":[1,25],\"9\":[1,1],\"10\":[3,7],\"11\":[2,19],\"12\":[4,15],\"13\":[4,6],\"14\":[1,5],\"15\":[1,41],\"16\":[1,1],\"17\":[null,null,1],\"18\":[null,null,1],\"19\":[1,2],\"20\":[null,null,1],\"21\":[null,null,1],\"22\":[1,3]},\"averageFieldLength\":[1.4810741687979538,10.542455242966753,0.1866028708133971],\"storedFields\":{\"0\":{\"h\":\"关于本站\",\"t\":[\"相关信息\",\"未完待续，持续更新中……\"]},\"1\":{\"h\":\"开始\",\"t\":[\"我第一次尝试架设博客是在2023年的年初，我刚申请到GitHub Student Developer Pack，其中赠送了一年的.me域名，就借此机会从0开始尝试搭建一个博客。对于一个毫无基础的新手来说，Hexo的确是一个很好的选择，我也因此使用了很长时间的Hexo作为我的博客框架。但是后面不久，我发现我很难去自定义主题内的一些样式，我也没有能力自己实现我想要的功能，于是那个博客很快没了动静。趁这次学习Vue的机会，我接触到了VuePress，让我发现了很多我可以实现的功能，于是这个博客网站就这么诞生啦🎉🎉🎉在之后相当长的时间内，我会一直维护这个博客，为其添加各种我喜欢的功能的。\"]},\"2\":{\"h\":\"框架支持\",\"t\":[\"Vue 驱动的静态网站生成器-VuePress v2\"]},\"3\":{\"h\":\"主题支持\",\"t\":[\"一个具有强大功能的 vuepress 主题✨-VuePress Theme Hope\"]},\"4\":{\"h\":\"自定义内容\",\"t\":[\"评论功能目前基于Waline，运行在Vercel上\"]},\"5\":{\"h\":\"FlyingPig278\",\"t\":[\"你好\",\"欢迎来到FlyingPig278的博客😄~\",\"自我介绍一下，我是FlyingPig278：\",\"一名来自重庆的高二学生兼业余开发者。\",\"Minecraft玩家，正版ID同名，从JE1.11.2入坑，基本能写一些简单的Bukkit插件或Forge模组，曾经长期开设一个MC服务器 (然而并没有什么人来玩)\",\"入坑一年多的原神玩家，UID217109366，欢迎来找我玩\",\"还有很多等待你去发现~\",\"更多信息：关于本站\"]},\"6\":{\"h\":\"新的开始\",\"t\":[\"又是一个新的博客，基于VuePress@Next搭建，目前网站假设在GitHub Pages上，国内访问速度堪忧。 希望等我成年后能尽快给我的备案，将这个网站架设在云服务器上。 不给80/443端口的运营商是屑。\",\"更多信息：关于本站\"]},\"7\":{\"h\":\"收藏夹\",\"t\":[\"博客相关 点击前往\",\"工具相关 点击前往\",\"游戏相关 点击前往\"]},\"8\":{\"h\":\"博客相关\",\"t\":[\"VuePress 文档: https://vuepress.github.io/zh/\",\"VuePress Theme Hope 文档: https://theme-hope.vuejs.press/zh/\",\"Mr.Hope 的博客: https://mister-hope.com/\",\"Waline 文档: https://waline.js.org/\",\"FontAwesome 图标: https://fontawesome.com/icons\"]},\"9\":{\"h\":\"游戏相关\",\"t\":[\"这里是和我平时玩的游戏有关的链接~\"]},\"10\":{\"h\":\"原神 Genshin Impact\",\"t\":[\"米游社: https://www.miyoushe.com/ys/\"]},\"11\":{\"h\":\"我的世界 Minecraft\",\"t\":[\"中文 Minecraft Wiki: https://zh.minecraft.wiki/\",\"MC百科|最大的Minecraft中文MOD百科: https://www.mcmod.cn/\",\"CurseForge: https://www.curseforge.com/minecraft\",\"LittleSkin皮肤站: https://littleskin.cn/\",\"Minecraft Apps: https://www.chunkbase.com/apps\"]},\"12\":{\"h\":\"戴森球计划 Dyson Sphere Program\",\"t\":[\"Dyson Sphere Blueprints: https://www.dysonsphereblueprints.com\",\"Thunderstore: https://thunderstore.io/c/dyson-sphere-program/\"]},\"13\":{\"h\":\"魔兽世界 World Of Warcraft\",\"t\":[\"WOWHead: https://www.wowhead.com/\"]},\"14\":{\"h\":\"Steam\",\"t\":[\"SteamDB: https://steamdb.info/\"]},\"15\":{\"h\":\"工具相关\",\"t\":[\"GitHub Student Developer Pack: https://education.github.com/pack/offers\",\"视频字母截图生成: https://join-screenshots.zhanghai.me/\",\"ICO converter: https://www.icoconverter.com/\",\"SM.MS图床: https://smms.app/\",\"图片拼接: http://www.zuohaotu.com/image-merge.aspx\",\"Face The World: https://ftwc.cc/\",\"开发人员速查表: https://wangchujiang.com/reference/ ( 国内镜像: https://dev.bi/ )\"]},\"16\":{\"h\":\"测试页面\",\"t\":[\"测试页面\"]},\"17\":{\"c\":[\"随笔\"]},\"18\":{\"c\":[\"人生\"]},\"19\":{\"h\":\"随笔\",\"t\":[\"这是本人在高中生活的过程中的一些随笔。\"]},\"20\":{\"c\":[\"随笔\"]},\"21\":{\"c\":[\"首页\"]},\"22\":{\"h\":\"\",\"t\":[\"404 Not Found\"]}},\"dirtCount\":0,\"index\":[[\"not\",{\"1\":{\"22\":1}}],[\"next搭建\",{\"1\":{\"6\":1}}],[\"404\",{\"1\":{\"22\":1}}],[\"443端口的运营商是屑\",{\"1\":{\"6\":1}}],[\"首页\",{\"2\":{\"21\":1}}],[\"这是本人在高中生活的过程中的一些随笔\",{\"1\":{\"19\":1}}],[\"这里是和我平时玩的游戏有关的链接~\",{\"1\":{\"9\":1}}],[\"人生\",{\"2\":{\"18\":1}}],[\"随笔\",{\"0\":{\"19\":1},\"2\":{\"17\":1,\"20\":1}}],[\"测试页面\",{\"0\":{\"16\":1},\"1\":{\"16\":1}}],[\"bi\",{\"1\":{\"15\":1}}],[\"blueprints\",{\"1\":{\"12\":1}}],[\"国内镜像\",{\"1\":{\"15\":1}}],[\"国内访问速度堪忧\",{\"1\":{\"6\":1}}],[\"reference\",{\"1\":{\"15\":1}}],[\"开发人员速查表\",{\"1\":{\"15\":1}}],[\"开始\",{\"0\":{\"1\":1}}],[\"aspx\",{\"1\":{\"15\":1}}],[\"app\",{\"1\":{\"15\":1}}],[\"apps\",{\"1\":{\"11\":2}}],[\"zuohaotu\",{\"1\":{\"15\":1}}],[\"zhanghai\",{\"1\":{\"15\":1}}],[\"zh\",{\"1\":{\"8\":2,\"11\":1}}],[\"图片拼接\",{\"1\":{\"15\":1}}],[\"图标\",{\"1\":{\"8\":1}}],[\"join\",{\"1\":{\"15\":1}}],[\"js\",{\"1\":{\"8\":1}}],[\"视频字母截图生成\",{\"1\":{\"15\":1}}],[\"education\",{\"1\":{\"15\":1}}],[\"offers\",{\"1\":{\"15\":1}}],[\"of\",{\"0\":{\"13\":1}}],[\"org\",{\"1\":{\"8\":1}}],[\"魔兽世界\",{\"0\":{\"13\":1}}],[\"the\",{\"1\":{\"15\":1}}],[\"theme\",{\"1\":{\"3\":1,\"8\":2}}],[\"thunderstore\",{\"1\":{\"12\":2}}],[\"smms\",{\"1\":{\"15\":1}}],[\"sm\",{\"1\":{\"15\":1}}],[\"screenshots\",{\"1\":{\"15\":1}}],[\"steamdb\",{\"1\":{\"14\":2}}],[\"steam\",{\"0\":{\"14\":1}}],[\"student\",{\"1\":{\"1\":1,\"15\":1}}],[\"sphere\",{\"0\":{\"12\":1},\"1\":{\"12\":2}}],[\"dev\",{\"1\":{\"15\":1}}],[\"developer\",{\"1\":{\"1\":1,\"15\":1}}],[\"dysonsphereblueprints\",{\"1\":{\"12\":1}}],[\"dyson\",{\"0\":{\"12\":1},\"1\":{\"12\":2}}],[\"戴森球计划\",{\"0\":{\"12\":1}}],[\"littleskin\",{\"1\":{\"11\":1}}],[\"littleskin皮肤站\",{\"1\":{\"11\":1}}],[\"cc\",{\"1\":{\"15\":1}}],[\"converter\",{\"1\":{\"15\":1}}],[\"com\",{\"1\":{\"8\":2,\"10\":1,\"11\":2,\"12\":1,\"13\":1,\"15\":4}}],[\"c\",{\"1\":{\"12\":1}}],[\"chunkbase\",{\"1\":{\"11\":1}}],[\"curseforge\",{\"1\":{\"11\":2}}],[\"cn\",{\"1\":{\"11\":2}}],[\"中文\",{\"1\":{\"11\":1}}],[\"ys\",{\"1\":{\"10\":1}}],[\"wowhead\",{\"1\":{\"13\":2}}],[\"world\",{\"0\":{\"13\":1},\"1\":{\"15\":1}}],[\"wangchujiang\",{\"1\":{\"15\":1}}],[\"warcraft\",{\"0\":{\"13\":1}}],[\"waline\",{\"1\":{\"8\":2}}],[\"wiki\",{\"1\":{\"11\":2}}],[\"www\",{\"1\":{\"10\":1,\"11\":3,\"12\":1,\"13\":1,\"15\":2}}],[\"米游社\",{\"1\":{\"10\":1}}],[\"genshin\",{\"0\":{\"10\":1}}],[\"github\",{\"1\":{\"8\":1,\"15\":2}}],[\"原神\",{\"0\":{\"10\":1}}],[\"image\",{\"1\":{\"15\":1}}],[\"impact\",{\"0\":{\"10\":1}}],[\"icoconverter\",{\"1\":{\"15\":1}}],[\"ico\",{\"1\":{\"15\":1}}],[\"icons\",{\"1\":{\"8\":1}}],[\"info\",{\"1\":{\"14\":1}}],[\"io\",{\"1\":{\"8\":1,\"12\":1}}],[\"found\",{\"1\":{\"22\":1}}],[\"fontawesome\",{\"1\":{\"8\":2}}],[\"ftwc\",{\"1\":{\"15\":1}}],[\"face\",{\"1\":{\"15\":1}}],[\"flyingpig278\",{\"0\":{\"5\":1}}],[\"的博客\",{\"1\":{\"8\":1}}],[\"program\",{\"0\":{\"12\":1},\"1\":{\"12\":1}}],[\"press\",{\"1\":{\"8\":1}}],[\"pages上\",{\"1\":{\"6\":1}}],[\"pack\",{\"1\":{\"1\":1,\"15\":2}}],[\"文档\",{\"1\":{\"8\":3}}],[\"游戏相关\",{\"0\":{\"9\":1},\"1\":{\"7\":1}}],[\"工具相关\",{\"0\":{\"15\":1},\"1\":{\"7\":1}}],[\"点击前往\",{\"1\":{\"7\":3}}],[\"博客相关\",{\"0\":{\"8\":1},\"1\":{\"7\":1}}],[\"收藏夹\",{\"0\":{\"7\":1}}],[\"不给80\",{\"1\":{\"6\":1}}],[\"将这个网站架设在云服务器上\",{\"1\":{\"6\":1}}],[\"希望等我成年后能尽快给我的备案\",{\"1\":{\"6\":1}}],[\"目前网站假设在github\",{\"1\":{\"6\":1}}],[\"基于vuepress\",{\"1\":{\"6\":1}}],[\"基本能写一些简单的bukkit插件或forge模组\",{\"1\":{\"5\":1}}],[\"又是一个新的博客\",{\"1\":{\"6\":1}}],[\"新的开始\",{\"0\":{\"6\":1}}],[\"更多信息\",{\"1\":{\"5\":1,\"6\":1}}],[\"还有很多等待你去发现~\",{\"1\":{\"5\":1}}],[\"欢迎来找我玩\",{\"1\":{\"5\":1}}],[\"欢迎来到flyingpig278的博客😄~\",{\"1\":{\"5\":1}}],[\"uid217109366\",{\"1\":{\"5\":1}}],[\"入坑一年多的原神玩家\",{\"1\":{\"5\":1}}],[\"然而并没有什么人来玩\",{\"1\":{\"5\":1}}],[\"曾经长期开设一个mc服务器\",{\"1\":{\"5\":1}}],[\"2入坑\",{\"1\":{\"5\":1}}],[\"11\",{\"1\":{\"5\":1}}],[\"从je1\",{\"1\":{\"5\":1}}],[\"正版id同名\",{\"1\":{\"5\":1}}],[\"ms图床\",{\"1\":{\"15\":1}}],[\"merge\",{\"1\":{\"15\":1}}],[\"me\",{\"1\":{\"15\":1}}],[\"me域名\",{\"1\":{\"1\":1}}],[\"mcmod\",{\"1\":{\"11\":1}}],[\"mc百科|最大的minecraft中文mod百科\",{\"1\":{\"11\":1}}],[\"minecraft\",{\"0\":{\"11\":1},\"1\":{\"11\":4}}],[\"minecraft玩家\",{\"1\":{\"5\":1}}],[\"miyoushe\",{\"1\":{\"10\":1}}],[\"mister\",{\"1\":{\"8\":1}}],[\"mr\",{\"1\":{\"8\":1}}],[\"一名来自重庆的高二学生兼业余开发者\",{\"1\":{\"5\":1}}],[\"一个具有强大功能的\",{\"1\":{\"3\":1}}],[\"自我介绍一下\",{\"1\":{\"5\":1}}],[\"自定义内容\",{\"0\":{\"4\":1}}],[\"你好\",{\"1\":{\"5\":1}}],[\"运行在vercel上\",{\"1\":{\"4\":1}}],[\"评论功能目前基于waline\",{\"1\":{\"4\":1}}],[\"http\",{\"1\":{\"15\":1}}],[\"https\",{\"1\":{\"8\":5,\"10\":1,\"11\":5,\"12\":2,\"13\":1,\"14\":1,\"15\":7}}],[\"hope\",{\"1\":{\"3\":1,\"8\":4}}],[\"hexo的确是一个很好的选择\",{\"1\":{\"1\":1}}],[\"主题✨\",{\"1\":{\"3\":1}}],[\"主题支持\",{\"0\":{\"3\":1}}],[\"v2\",{\"1\":{\"2\":1}}],[\"vuejs\",{\"1\":{\"8\":1}}],[\"vuepress\",{\"1\":{\"2\":1,\"3\":2,\"8\":3}}],[\"vue\",{\"1\":{\"2\":1}}],[\"驱动的静态网站生成器\",{\"1\":{\"2\":1}}],[\"框架支持\",{\"0\":{\"2\":1}}],[\"为其添加各种我喜欢的功能的\",{\"1\":{\"1\":1}}],[\"于是这个博客网站就这么诞生啦🎉🎉🎉在之后相当长的时间内\",{\"1\":{\"1\":1}}],[\"于是那个博客很快没了动静\",{\"1\":{\"1\":1}}],[\"让我发现了很多我可以实现的功能\",{\"1\":{\"1\":1}}],[\"趁这次学习vue的机会\",{\"1\":{\"1\":1}}],[\"但是后面不久\",{\"1\":{\"1\":1}}],[\"对于一个毫无基础的新手来说\",{\"1\":{\"1\":1}}],[\"就借此机会从0开始尝试搭建一个博客\",{\"1\":{\"1\":1}}],[\"其中赠送了一年的\",{\"1\":{\"1\":1}}],[\"我的世界\",{\"0\":{\"11\":1}}],[\"我是flyingpig278\",{\"1\":{\"5\":1}}],[\"我会一直维护这个博客\",{\"1\":{\"1\":1}}],[\"我接触到了vuepress\",{\"1\":{\"1\":1}}],[\"我也没有能力自己实现我想要的功能\",{\"1\":{\"1\":1}}],[\"我也因此使用了很长时间的hexo作为我的博客框架\",{\"1\":{\"1\":1}}],[\"我发现我很难去自定义主题内的一些样式\",{\"1\":{\"1\":1}}],[\"我刚申请到github\",{\"1\":{\"1\":1}}],[\"我第一次尝试架设博客是在2023年的年初\",{\"1\":{\"1\":1}}],[\"持续更新中\",{\"1\":{\"0\":1}}],[\"未完待续\",{\"1\":{\"0\":1}}],[\"相关信息\",{\"1\":{\"0\":1}}],[\"关于本站\",{\"0\":{\"0\":1},\"1\":{\"5\":1,\"6\":1}}]],\"serializationVersion\":2}}")).map(([e,t])=>[e,zt(t,{fields:["h","t","c"],storeFields:["h","t","c"]})]));self.onmessage=({data:{type:e="all",query:t,locale:s,options:n,id:o}})=>{const u=bt[s];e==="suggest"?self.postMessage([e,o,tt(t,u,n)]):e==="search"?self.postMessage([e,o,Z(t,u,n)]):self.postMessage({suggestions:[e,o,tt(t,u,n)],results:[e,o,Z(t,u,n)]})};
//# sourceMappingURL=index.js.map
