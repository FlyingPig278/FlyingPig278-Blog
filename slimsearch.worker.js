/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const ze={},Ie=()=>{},Ce=Object.assign,Oe=Array.isArray,D=e=>typeof e=="function",Se=e=>typeof e=="string",Me=e=>typeof e=="symbol";let X;const L=()=>X||(X=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Me));function P(e){const t=e&&e.__v_raw;return t?P(t):e}function Ne(e){return e?e.__v_isRef===!0:!1}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const v=[];function xt(e){v.push(e)}function kt(){v.pop()}let W=!1;function Et(e,...t){if(W)return;W=!0;const n=v.length?v[v.length-1].component:null,o=n&&n.appContext.config.warnHandler,s=Te();if(o)A(o,n,11,[e+t.map(r=>{var i,c;return(c=(i=r.toString)==null?void 0:i.call(r))!=null?c:JSON.stringify(r)}).join(""),n&&n.proxy,s.map(({vnode:r})=>`at <${re(n,r.type)}>`).join(`
`),s]);else{const r=[`[Vue warn]: ${e}`,...t];s.length&&r.push(`
`,...Fe(s)),console.warn(...r)}W=!1}function Te(){let e=v[v.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return t}function Fe(e){const t=[];return e.forEach((n,o)=>{t.push(...o===0?[]:[`
`],...$e(n))}),t}function $e({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",o=e.component?e.component.parent==null:!1,s=` at <${re(e.component,e.type,o)}`,r=">"+n;return e.props?[s,...Ve(e.props),r]:[s+r]}function Ve(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(o=>{t.push(...Z(o,e[o]))}),n.length>3&&t.push(" ..."),t}function Z(e,t,n){return Se(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:Ne(t)?(t=Z(e,P(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):D(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=P(t),n?t:[`${e}=`,t])}const vt={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush",15:"component update",16:"app unmount cleanup function"};function A(e,t,n,o){try{return o?e(...o):e()}catch(s){ee(s,t,n)}}function ee(e,t,n,o=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||ze;if(t){let c=t.parent;const a=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const u=c.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](e,a,l)===!1)return}c=c.parent}if(r){A(r,null,10,[e,a,l]);return}}Re(e,n,s,o,i)}function Re(e,t,n,o=!0,s=!1){if(s)throw e;console.error(e)}const b=[];let x=-1;const I=[];let k=null,C=0;const je=Promise.resolve();let q=null;const De=100;function Le(e){let t=x+1,n=b.length;for(;t<n;){const o=t+n>>>1,s=b[o],r=M(s);r<e||r===e&&s.flags&2?t=o+1:n=o}return t}function Pe(e){if(!(e.flags&1)){const t=M(e),n=b[b.length-1];!n||!(e.flags&2)&&t>=M(n)?b.push(e):b.splice(Le(t),0,e),e.flags|=1,te()}}function te(){q||(q=je.then(ne))}function We(e){Oe(e)?I.push(...e):k&&e.id===-1?k.splice(C+1,0,e):e.flags&1||(I.push(e),e.flags|=1),te()}function Ae(e){if(I.length){const t=[...new Set(I)].sort((n,o)=>M(n)-M(o));if(I.length=0,k){k.push(...t);return}for(k=t,C=0;C<k.length;C++){const n=k[C];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}k=null,C=0}}const M=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ne(e){const t=Ie;try{for(x=0;x<b.length;x++){const n=b[x];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),A(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;x<b.length;x++){const n=b[x];n&&(n.flags&=-2)}x=-1,b.length=0,Ae(e),q=null,(b.length||I.length)&&ne(e)}}function zt(e,t){const n=e.get(t)||0;if(n>De){const o=t.i,s=o&&se(o.type);return ee(`Maximum recursive updates exceeded${s?` in component <${s}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,null,10),!0}return e.set(t,n+1),!1}const H=new Map,T=new Map;function It(e,t){return T.has(e)?!1:(T.set(e,{initialDef:F(t),instances:new Set}),!0)}function F(e){return Ue(e)?e.__vccOpts:e}function Ct(e,t){const n=T.get(e);n&&(n.initialDef.render=t,[...n.instances].forEach(o=>{t&&(o.render=t,F(o.type).render=t),o.renderCache=[],o.update()}))}function Ot(e,t){const n=T.get(e);if(!n)return;t=F(t),oe(n.initialDef,t);const o=[...n.instances];for(let s=0;s<o.length;s++){const r=o[s],i=F(r.type);let c=H.get(i);c||(i!==n.initialDef&&oe(i,t),H.set(i,c=new Set)),c.add(r),r.appContext.propsCache.delete(r.type),r.appContext.emitsCache.delete(r.type),r.appContext.optionsCache.delete(r.type),r.ceReload?(c.add(r),r.ceReload(t.styles),c.delete(r)):r.parent?Pe(()=>{r.parent.update(),c.delete(r)}):r.appContext.reload?r.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required."),r.root.ce&&r!==r.root&&r.root.ce._removeChildStyle(i)}We(()=>{H.clear()})}function oe(e,t){Ce(e,t);for(const n in e)n!=="__file"&&!(n in t)&&delete e[n]}function St(e){return(t,n)=>{try{return e(t,n)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}L().requestIdleCallback,L().cancelIdleCallback;const Mt={};{const e=L(),t=(n,o)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(o),r=>{s.length>1?s.forEach(i=>i(r)):s[0](r)}};t("__VUE_INSTANCE_SETTERS__",n=>n),t("__VUE_SSR_SETTERS__",n=>n)}const qe=/(?:^|[-_])(\w)/g,He=e=>e.replace(qe,t=>t.toUpperCase()).replace(/[-_]/g,"");function se(e,t=!0){return D(e)?e.displayName||e.name:e.name||t&&e.__name}function re(e,t,n=!1){let o=se(t);if(!o&&t.__file){const s=t.__file.match(/([^/\\]+)\.\w+$/);s&&(o=s[1])}if(!o&&e&&e.parent){const s=r=>{for(const i in r)if(r[i]===t)return i};o=s(e.components||e.parent.type.components)||s(e.appContext.components)}return o?He(o):n?"App":"Anonymous"}function Ue(e){return D(e)&&"__vccOpts"in e}[...new Array(6)].map((e,t)=>`[vp-content] h${t+1}`).join(",");const{entries:Je}=Object,{fromEntries:Ge}=Object,Be="ENTRIES",ie="KEYS",ce="VALUES",_="";class U{set;_type;_path;constructor(t,n){const o=t._tree,s=Array.from(o.keys());this.set=t,this._type=n,this._path=s.length>0?[{node:o,keys:s}]:[]}next(){const t=this.dive();return this.backtrack(),t}dive(){if(this._path.length===0)return{done:!0,value:void 0};const{node:t,keys:n}=O(this._path);if(O(n)===_)return{done:!1,value:this.result()};const o=t.get(O(n));return this._path.push({node:o,keys:Array.from(o.keys())}),this.dive()}backtrack(){if(this._path.length===0)return;const t=O(this._path).keys;t.pop(),!(t.length>0)&&(this._path.pop(),this.backtrack())}key(){return this.set._prefix+this._path.map(({keys:t})=>O(t)).filter(t=>t!==_).join("")}value(){return O(this._path).node.get(_)}result(){switch(this._type){case ce:return this.value();case ie:return this.key();default:return[this.key(),this.value()]}}[Symbol.iterator](){return this}}const O=e=>e[e.length-1],Ke=(e,t,n)=>{const o=new Map;if(typeof t!="string")return o;const s=t.length+1,r=s+n,i=new Uint8Array(r*s).fill(n+1);for(let c=0;c<s;++c)i[c]=c;for(let c=1;c<r;++c)i[c*s]=c;return le(e,t,n,o,i,1,s,""),o},le=(e,t,n,o,s,r,i,c)=>{const a=r*i;e:for(const l of e.keys())if(l===_){const u=s[a-1];u<=n&&o.set(c,[e.get(l),u])}else{let u=r;for(let h=0;h<l.length;++h,++u){const p=l[h],g=i*u,y=g-i;let f=s[g];const d=Math.max(0,u-n-1),w=Math.min(i-1,u+n);for(let m=d;m<w;++m){const R=p!==t[m],j=s[y+m]+ +R,N=s[y+m+1]+1,E=s[g+m]+1,S=s[g+m+1]=Math.min(j,N,E);S<f&&(f=S)}if(f>n)continue e}le(e.get(l),t,n,o,s,u,i,c+l)}};class z{_tree;_prefix;_size=void 0;constructor(t=new Map,n=""){this._tree=t,this._prefix=n}atPrefix(t){if(!t.startsWith(this._prefix))throw new Error("Mismatched prefix");const[n,o]=$(this._tree,t.slice(this._prefix.length));if(n===void 0){const[s,r]=B(o);for(const i of s.keys())if(i!==_&&i.startsWith(r)){const c=new Map;return c.set(i.slice(r.length),s.get(i)),new z(c,t)}}return new z(n,t)}clear(){this._size=void 0,this._tree.clear()}delete(t){return this._size=void 0,Ye(this._tree,t)}entries(){return new U(this,Be)}forEach(t){for(const[n,o]of this)t(n,o,this)}fuzzyGet(t,n){return Ke(this._tree,t,n)}get(t){const n=J(this._tree,t);return n!==void 0?n.get(_):void 0}has(t){return J(this._tree,t)?.has(_)??!1}keys(){return new U(this,ie)}set(t,n){if(typeof t!="string")throw new Error("key must be a string");return this._size=void 0,G(this._tree,t).set(_,n),this}get size(){if(this._size)return this._size;this._size=0;const t=this.entries();for(;!t.next().done;)this._size+=1;return this._size}update(t,n){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const o=G(this._tree,t);return o.set(_,n(o.get(_))),this}fetch(t,n){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const o=G(this._tree,t);let s=o.get(_);return s===void 0&&o.set(_,s=n()),s}values(){return new U(this,ce)}[Symbol.iterator](){return this.entries()}static from(t){const n=new z;for(const[o,s]of t)n.set(o,s);return n}static fromObject(t){return z.from(Object.entries(t))}}const $=(e,t,n=[])=>{if(t.length===0||e==null)return[e,n];for(const o of e.keys())if(o!==_&&t.startsWith(o))return n.push([e,o]),$(e.get(o),t.slice(o.length),n);return n.push([e,t]),$(void 0,"",n)},J=(e,t)=>{if(t.length===0||!e)return e;for(const n of e.keys())if(n!==_&&t.startsWith(n))return J(e.get(n),t.slice(n.length))},G=(e,t)=>{const n=t.length;e:for(let o=0;e&&o<n;){for(const r of e.keys())if(r!==_&&t[o]===r[0]){const i=Math.min(n-o,r.length);let c=1;for(;c<i&&t[o+c]===r[c];)++c;const a=e.get(r);if(c===r.length)e=a;else{const l=new Map;l.set(r.slice(c),a),e.set(t.slice(o,o+c),l),e.delete(r),e=l}o+=c;continue e}const s=new Map;return e.set(t.slice(o),s),s}return e},Ye=(e,t)=>{const[n,o]=$(e,t);if(n!==void 0){if(n.delete(_),n.size===0)ue(o);else if(n.size===1){const[s,r]=n.entries().next().value;ae(o,s,r)}}},ue=e=>{if(e.length===0)return;const[t,n]=B(e);if(t.delete(n),t.size===0)ue(e.slice(0,-1));else if(t.size===1){const[o,s]=t.entries().next().value;o!==_&&ae(e.slice(0,-1),o,s)}},ae=(e,t,n)=>{if(e.length===0)return;const[o,s]=B(e);o.set(s+t,n),o.delete(s)},B=e=>e[e.length-1],Qe=(e,t)=>{const n=e._idToShortId.get(t);if(n!=null)return e._storedFields.get(n)},Xe=/[\n\r\p{Z}\p{P}]+/u,K="or",fe="and",Ze="and_not",et=(e,t)=>{e.includes(t)||e.push(t)},de=(e,t)=>{for(const n of t)e.includes(n)||e.push(n)},he=({score:e},{score:t})=>t-e,tt=()=>new Map,V=e=>{const t=new Map;for(const n of Object.keys(e))t.set(parseInt(n,10),e[n]);return t},pe=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0,ge={[K]:(e,t)=>{for(const n of t.keys()){const o=e.get(n);if(o==null)e.set(n,t.get(n));else{const{score:s,terms:r,match:i}=t.get(n);o.score=o.score+s,o.match=Object.assign(o.match,i),de(o.terms,r)}}return e},[fe]:(e,t)=>{const n=new Map;for(const o of t.keys()){const s=e.get(o);if(s==null)continue;const{score:r,terms:i,match:c}=t.get(o);de(s.terms,i),n.set(o,{score:s.score+r,terms:s.terms,match:Object.assign(s.match,c)})}return n},[Ze]:(e,t)=>{for(const n of t.keys())e.delete(n);return e}},nt=(e,t,n,o,s,r)=>{const{k:i,b:c,d:a}=r;return Math.log(1+(n-t+.5)/(t+.5))*(a+e*(i+1)/(e+i*(1-c+c*o/s)))},ot=e=>(t,n,o)=>({term:t,fuzzy:typeof e.fuzzy=="function"?e.fuzzy(t,n,o):e.fuzzy??!1,prefix:typeof e.prefix=="function"?e.prefix(t,n,o):e.prefix===!0,termBoost:typeof e.boostTerm=="function"?e.boostTerm(t,n,o):1}),me=(e,t,n,o)=>{for(const s of Object.keys(e._fieldIds))if(e._fieldIds[s]===n){e._options.logger("warn",`SlimSearch: document with ID ${e._documentIds.get(t)} has changed before removal: term "${o}" was not present in field "${s}". Removing a document after it has changed can corrupt the index!`,"version_conflict");return}},st=(e,t,n,o)=>{if(!e._index.has(o)){me(e,n,t,o);return}const s=e._index.fetch(o,tt),r=s.get(t),i=r?.get(n);!r||typeof i>"u"?me(e,n,t,o):i<=1?r.size<=1?s.delete(t):r.delete(n):r.set(n,i-1),e._index.get(o).size===0&&e._index.delete(o)},rt={k:1.2,b:.7,d:.5},it={idField:"id",extractField:(e,t)=>e[t],tokenize:e=>e.split(Xe),processTerm:e=>e.toLowerCase(),fields:void 0,searchOptions:void 0,storeFields:[],logger:(e,t)=>{console?.[e]?.(t)},autoVacuum:!0},_e={combineWith:K,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:rt},ct={combineWith:fe,prefix:(e,t,n)=>t===n.length-1},lt={batchSize:1e3,batchWait:10},ye={minDirtFactor:.1,minDirtCount:20},ut={...lt,...ye},we=Symbol("*"),at=(e,t)=>{const n=new Map,o={...e._options.searchOptions,...t};for(const[s,r]of e._documentIds){const i=o.boostDocument?o.boostDocument(r,"",e._storedFields.get(s)):1;n.set(s,{score:i,terms:[],match:{}})}return n},be=(e,t=K)=>{if(e.length===0)return new Map;const n=t.toLowerCase();if(!(n in ge))throw new Error(`Invalid combination operator: ${t}`);return e.reduce(ge[n])},Y=(e,t,n,o,s,r,i,c,a,l=new Map)=>{if(r==null)return l;for(const u of Object.keys(i)){const h=i[u],p=e._fieldIds[u],g=r.get(p);if(g==null)continue;let y=g.size;const f=e._avgFieldLength[p];for(const d of g.keys()){if(!e._documentIds.has(d)){st(e,p,d,n),y-=1;continue}const w=c?c(e._documentIds.get(d),n,e._storedFields.get(d)):1;if(!w)continue;const m=g.get(d),R=e._fieldLength.get(d)[p],j=nt(m,y,e._documentCount,R,f,a),N=o*s*h*w*j,E=l.get(d);if(E){E.score+=N,et(E.terms,t);const S=pe(E.match,n);S?S.push(u):E.match[n]=[u]}else l.set(d,{score:N,terms:[t],match:{[n]:[u]}})}}return l},ft=(e,t,n)=>{const o={...e._options.searchOptions,...n},s=(o.fields??e._options.fields).reduce((f,d)=>({...f,[d]:pe(o.boost,d)||1}),{}),{boostDocument:r,weights:i,maxFuzzy:c,bm25:a}=o,{fuzzy:l,prefix:u}={..._e.weights,...i},h=e._index.get(t.term),p=Y(e,t.term,t.term,1,t.termBoost,h,s,r,a);let g,y;if(t.prefix&&(g=e._index.atPrefix(t.term)),t.fuzzy){const f=t.fuzzy===!0?.2:t.fuzzy,d=f<1?Math.min(c,Math.round(t.term.length*f)):f;d&&(y=e._index.fuzzyGet(t.term,d))}if(g)for(const[f,d]of g){const w=f.length-t.term.length;if(!w)continue;y?.delete(f);const m=u*f.length/(f.length+.3*w);Y(e,t.term,f,m,t.termBoost,d,s,r,a,p)}if(y)for(const f of y.keys()){const[d,w]=y.get(f);if(!w)continue;const m=l*f.length/(f.length+w);Y(e,t.term,f,m,t.termBoost,d,s,r,a,p)}return p},xe=(e,t,n={})=>{if(t===we)return at(e,n);if(typeof t!="string"){const u={...n,...t,queries:void 0},h=t.queries.map(p=>xe(e,p,u));return be(h,u.combineWith)}const{tokenize:o,processTerm:s,searchOptions:r}=e._options,i={tokenize:o,processTerm:s,...r,...n},{tokenize:c,processTerm:a}=i,l=c(t).flatMap(u=>a(u)).filter(u=>!!u).map(ot(i)).map(u=>ft(e,u,i));return be(l,i.combineWith)},ke=(e,t,n={})=>{const{searchOptions:o}=e._options,s={...o,...n},r=xe(e,t,n),i=[];for(const[c,{score:a,terms:l,match:u}]of r){const h=l.length||1,p={id:e._documentIds.get(c),score:a*h,terms:Object.keys(u),queryTerms:l,match:u};Object.assign(p,e._storedFields.get(c)),(s.filter==null||s.filter(p))&&i.push(p)}return t===we&&s.boostDocument==null||i.sort(he),i},dt=(e,t,n={})=>{n={...e._options.autoSuggestOptions,...n};const o=new Map;for(const{score:r,terms:i}of ke(e,t,n)){const c=i.join(" "),a=o.get(c);a!=null?(a.score+=r,a.count+=1):o.set(c,{score:r,terms:i,count:1})}const s=[];for(const[r,{score:i,terms:c,count:a}]of o)s.push({suggestion:r,terms:c,score:i/a});return s.sort(he),s};class ht{_options;_index;_documentCount;_documentIds;_idToShortId;_fieldIds;_fieldLength;_avgFieldLength;_nextId;_storedFields;_dirtCount;_currentVacuum;_enqueuedVacuum;_enqueuedVacuumConditions;constructor(t){if(!t?.fields)throw new Error('SlimSearch: option "fields" must be provided');const n=t.autoVacuum==null||t.autoVacuum===!0?ut:t.autoVacuum;this._options={...it,...t,autoVacuum:n,searchOptions:{..._e,...t.searchOptions},autoSuggestOptions:{...ct,...t.autoSuggestOptions}},this._index=new z,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=ye,this.addFields(this._options.fields)}get isVacuuming(){return this._currentVacuum!=null}get dirtCount(){return this._dirtCount}get dirtFactor(){return this._dirtCount/(1+this._documentCount+this._dirtCount)}get documentCount(){return this._documentCount}get termCount(){return this._index.size}toJSON(){const t=[];for(const[n,o]of this._index){const s={};for(const[r,i]of o)s[r]=Object.fromEntries(i);t.push([n,s])}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:t,version:2}}addFields(t){for(let n=0;n<t.length;n++)this._fieldIds[t[n]]=n}}const pt=e=>new ht(e),gt=({documentCount:e,nextId:t,fieldIds:n,averageFieldLength:o,dirtCount:s,version:r},i)=>{if(r!==2)throw new Error("SlimSearch: cannot deserialize an index created with an incompatible version");const c=pt(i);return c._documentCount=e,c._nextId=t,c._idToShortId=new Map,c._fieldIds=n,c._avgFieldLength=o,c._dirtCount=s??0,c._index=new z,c},mt=(e,t)=>{const{index:n,documentIds:o,fieldLength:s,storedFields:r}=e,i=gt(e,t);i._documentIds=V(o),i._fieldLength=V(s),i._storedFields=V(r);for(const[c,a]of i._documentIds)i._idToShortId.set(a,c);for(const[c,a]of n){const l=new Map;for(const u of Object.keys(a))l.set(parseInt(u,10),V(a[u]));i._index.set(c,l)}return i},{entries:_t}=Object,Q=(e,t)=>{const n=e.toLowerCase(),o=t.toLowerCase(),s=[];let r=0,i=0;const c=(l,u=!1)=>{let h;i===0?h=l.length>20?`… ${l.slice(-20)}`:l:u?h=l.length+i>100?`${l.slice(0,100-i)}… `:l:h=l.length>20?`${l.slice(0,20)} … ${l.slice(-20)}`:l,h&&s.push(h),i+=h.length,u||(s.push(["mark",t]),i+=t.length,i>=100&&s.push(" …"))};let a=n.indexOf(o,r);if(a===-1)return null;for(;a>=0;){const l=a+o.length;if(c(e.slice(r,a)),r=l,i>100)break;a=n.indexOf(o,r)}return i<100&&c(e.slice(r),!0),s},yt=(e,t)=>t.contents.reduce((n,[,o])=>n+o,0)-e.contents.reduce((n,[,o])=>n+o,0),wt=(e,t)=>Math.max(...t.contents.map(([,n])=>n))-Math.max(...e.contents.map(([,n])=>n)),Ee=(e,t,n={})=>{const o={};return ke(t,e,{boost:{h:2,t:1,c:4},prefix:!0,...n}).forEach(s=>{const{id:r,terms:i,score:c}=s,a=r.includes("@"),l=r.includes("#"),[u,h]=r.split(/[#@]/),p=Number(u),g=i.sort((f,d)=>f.length-d.length).filter((f,d)=>i.slice(d+1).every(w=>!w.includes(f))),{contents:y}=o[p]??={title:"",contents:[]};if(a)y.push([{type:"customField",id:p,index:h,display:g.map(f=>s.c.map(d=>Q(d,f))).flat().filter(f=>f!==null)},c]);else{const f=g.map(d=>Q(s.h,d)).filter(d=>d!==null);if(f.length&&y.push([{type:l?"heading":"title",id:p,...l&&{anchor:h},display:f},c]),"t"in s&&s.t)for(const d of s.t){const w=g.map(m=>Q(d,m)).filter(m=>m!==null);w.length&&y.push([{type:"text",id:p,...l&&{anchor:h},display:w},c])}}}),_t(o).sort(([,s],[,r])=>"max"==="total"?yt(s,r):wt(s,r)).map(([s,{title:r,contents:i}])=>{if(!r){const c=Qe(t,s);c&&(r=c.h)}return{title:r,contents:i.map(([c])=>c)}})},ve=(e,t,n={})=>{const o=dt(t,e,{fuzzy:.2,maxFuzzy:3,...n}).map(({suggestion:s})=>s);return e.includes(" ")?o:o.filter(s=>!s.includes(" "))},bt=Ge(Je(JSON.parse("{\"/\":{\"documentCount\":47,\"nextId\":47,\"documentIds\":{\"0\":\"1\",\"1\":\"1#开始\",\"2\":\"1#框架支持\",\"3\":\"1#主题支持\",\"4\":\"1#自定义内容\",\"5\":\"2\",\"6\":\"2#技术实践志\",\"7\":\"2#核心领域\",\"8\":\"2#能力建设\",\"9\":\"3\",\"10\":\"4\",\"11\":\"4@0\",\"12\":\"4@1\",\"13\":\"5\",\"14\":\"5@0\",\"15\":\"5@1\",\"16\":\"6\",\"17\":\"6#博客\",\"18\":\"6#工具\",\"19\":\"6#网站-点击前往\",\"20\":\"6#软件-点击前往\",\"21\":\"6#游戏\",\"22\":\"7\",\"23\":\"8\",\"24\":\"8#原神-genshin-impact\",\"25\":\"8#我的世界-minecraft\",\"26\":\"8#戴森球计划-dyson-sphere-program\",\"27\":\"8#魔兽世界-world-of-warcraft\",\"28\":\"8#游戏平台\",\"29\":\"8#嘘\",\"30\":\"9\",\"31\":\"9#日常软件\",\"32\":\"9#远程控制\",\"33\":\"9#小工具\",\"34\":\"9#安全\",\"35\":\"9#网络工具\",\"36\":\"9#编程相关\",\"37\":\"10\",\"38\":\"10#数据处理\",\"39\":\"10#影像编辑\",\"40\":\"10#网络工具\",\"41\":\"10#学校\",\"42\":\"10#浏览器拓展-edge\",\"43\":\"10#编程相关\",\"44\":\"10#liteloaderqqnt\",\"45\":\"11\",\"46\":\"12\"},\"fieldIds\":{\"h\":0,\"t\":1,\"c\":2},\"fieldLength\":{\"0\":[1,5],\"1\":[1,20],\"2\":[1,4],\"3\":[1,6],\"4\":[1,6],\"5\":[1,4],\"6\":[1],\"7\":[1,12],\"8\":[1,14],\"9\":[1,10],\"10\":[1,1],\"11\":[null,null,1],\"12\":[null,null,1],\"13\":[1,2],\"14\":[null,null,1],\"15\":[null,null,1],\"16\":[1],\"17\":[1,1],\"18\":[1],\"19\":[1],\"20\":[1],\"21\":[1,1],\"22\":[1,9],\"23\":[1],\"24\":[3,3],\"25\":[2,16],\"26\":[4,6],\"27\":[4,4],\"28\":[1,7],\"29\":[1,1],\"30\":[1],\"31\":[1,4],\"32\":[1,3],\"33\":[1,7],\"34\":[1,1],\"35\":[1,7],\"36\":[1,5],\"37\":[1],\"38\":[1,4],\"39\":[1,6],\"40\":[1,2],\"41\":[1,3],\"42\":[3,3],\"43\":[1,7],\"44\":[1,4],\"45\":[1,3],\"46\":[1]},\"averageFieldLength\":[1.2340425531914894,6.096489443559387,0.25961538461538464],\"storedFields\":{\"0\":{\"h\":\"关于本站\",\"t\":[\"你好，我是 FlyingPig278\",\"欢迎来到 FlyingPig278 的博客😄~\"]},\"1\":{\"h\":\"开始\",\"t\":[\"我第一次尝试架设博客是在2023年的年初，我刚申请到GitHub Student Developer Pack，其中赠送了一年的.me域名，就借此机会从0开始尝试搭建一个博客。对于一个毫无基础的新手来说，Hexo的确是一个很好的选择，我也因此使用了很长时间的Hexo作为我的博客框架。但是后面不久，我发现我很难去自定义主题内的一些样式，我也没有能力自己实现我想要的功能，于是那个博客很快没了动静。趁这次学习Vue的机会，我接触到了VuePress，让我发现了很多我可以实现的功能，于是这个博客网站就这么诞生啦:tada\"]},\"2\":{\"h\":\"框架支持\",\"t\":[\"Vue 驱动的静态网站生成器-VuePress v2\"]},\"3\":{\"h\":\"主题支持\",\"t\":[\"一个具有强大功能的 vuepress 主题✨-VuePress Theme Hope\"]},\"4\":{\"h\":\"自定义内容\",\"t\":[\"评论功能目前基于Waline，运行在Vercel上\",\"相关信息\",\"未完待续，持续更新中……\"]},\"5\":{\"h\":\"关于我\",\"t\":[\"技术探索者\",\"FlyingPig278 | 开源技术学习者JavaC++机器人系统算法实践\"]},\"6\":{\"h\":\"技术实践志\"},\"7\":{\"h\":\"核心领域\",\"t\":[\"​编程开发：掌握Java/C++基础语法，独立实现「智能温控模拟系统」等程序\",\"​硬件调试：作为省级机器人竞赛操作手，完成30+小时设备联调测试\",\"​开源学习：持续研究GitHub开源项目，建立技术笔记库\"]},\"8\":{\"h\":\"能力建设\",\"t\":[\"算法基础 █████░░░░░ 45% 硬件认知 ████░░░░░░ 35% 团队协作 ██████░░░░ 55% 抗压能力 ███░░░░░░░ 28%\",\"更多信息：关于本站\"]},\"9\":{\"h\":\"新的开始\",\"t\":[\"一个新的博客，基于VuePress@Next搭建，目前网站假设在GitHub Pages上，国内访问速度堪忧。 希望等我成年后能尽快给我的备案，将这个网站架设在云服务器上或者用国内CDN进行加速。\",\"更多信息：关于本站\"]},\"10\":{\"h\":\"测试页面\",\"t\":[\"测试页面\"]},\"11\":{\"c\":[\"随笔\"]},\"12\":{\"c\":[\"人生\"]},\"13\":{\"h\":\"随笔\",\"t\":[\"这是本人在高中生活的过程中的一些感慨。\",\"暂未命名\"]},\"14\":{\"c\":[\"随笔\"]},\"15\":{\"c\":[\"首页\"]},\"16\":{\"h\":\"收藏夹\"},\"17\":{\"h\":\"\",\"t\":[\"点击前往\"]},\"18\":{\"h\":\"\"},\"19\":{\"h\":\"\"},\"20\":{\"h\":\"\"},\"21\":{\"h\":\"\",\"t\":[\"点击前往\"]},\"22\":{\"h\":\"博客\",\"t\":[\"VuePress 文档\",\"VuePress Theme Hope 文档\",\"Mr.Hope 的博客\",\"Waline 文档\",\"FontAwesome 图标\"]},\"23\":{\"h\":\"游戏\"},\"24\":{\"h\":\"原神 Genshin Impact\",\"t\":[\"官网\",\"米游社\",\"胡桃工具箱\"]},\"25\":{\"h\":\"我的世界 Minecraft\",\"t\":[\"官网 ( 网易 ) \",\"官网 ( 微软 ) \",\"中文 Minecraft Wiki\",\"MC百科|最大的Minecraft中文MOD百科\",\"Hello Minecraft! Launcher\",\"PCL2\",\"CurseForge\",\"LittleSkin皮肤站\",\"Minecraft Apps\",\"开服命令生成\",\"我的世界高版本服主教程合集\",\"笨蛋MC开服教程\"]},\"26\":{\"h\":\"戴森球计划 Dyson Sphere Program\",\"t\":[\"制作组-Bilibili\",\"Dyson Sphere Blueprints\",\"Thunderstore\"]},\"27\":{\"h\":\"魔兽世界 World of Warcraft\",\"t\":[\"官网 ( 国服 ) \",\"官网 ( 台服 ) \",\"WOWHead\"]},\"28\":{\"h\":\"游戏平台\",\"t\":[\"Steam\",\"SteamDB\",\"Epic\",\"Battle.net (TW)\"]},\"29\":{\"h\":\"嘘~\",\"t\":[\"RuTracker\"]},\"30\":{\"h\":\"软件\"},\"31\":{\"h\":\"日常软件\",\"t\":[\"QQ\",\"LiteLoaderQQNT\",\"WPS\",\"搜狗输入法\"]},\"32\":{\"h\":\"远程控制\",\"t\":[\"向日葵\",\"Moonlight\",\"ToDest\"]},\"33\":{\"h\":\"小工具\",\"t\":[\"Everything\",\"WinRAR (无广告)\",\"Snipaste\",\"微软商店\",\"QuickLook\",\"微软商店\",\"TranslucentTB\",\"微软商店\"]},\"34\":{\"h\":\"安全\",\"t\":[\"火绒\"]},\"35\":{\"h\":\"网络工具\",\"t\":[\"Face The World\",\"Clash for Windows Chinese\"]},\"36\":{\"h\":\"编程相关\",\"t\":[\"Visual Studio Code\",\"JetBrains IDEs\"]},\"37\":{\"h\":\"网址\"},\"38\":{\"h\":\"数据处理\",\"t\":[\"字数统计\",\"Microsoft 数学求解器\",\"整数数列查询OEIS\"]},\"39\":{\"h\":\"影像编辑\",\"t\":[\"视频字母截图生成\",\"ICO converter\",\"SM.MS图床\",\"图片拼接\"]},\"40\":{\"h\":\"网络工具\",\"t\":[\"AirPortal 空投快传\"]},\"41\":{\"h\":\"学校\",\"t\":[\"辩论计时器-1\",\"辩论计时器-2\"]},\"42\":{\"h\":\"浏览器拓展 ( Edge )\",\"t\":[\"青柠起始页\",\"AdBlock Plus\"]},\"43\":{\"h\":\"编程相关\",\"t\":[\"GitHub Student Developer Pack\",\"开发人员速查表 ( 国内镜像 )\"]},\"44\":{\"h\":\"LiteLoaderQQNT\",\"t\":[\"官网\",\"轻量工具箱\",\"MSpring-Theme\"]},\"45\":{\"h\":\"\",\"t\":[\"404 Not Found\"]},\"46\":{\"h\":\"Tool\"}},\"dirtCount\":0,\"index\":[[\"not\",{\"1\":{\"45\":1}}],[\"net\",{\"1\":{\"28\":1}}],[\"next搭建\",{\"1\":{\"9\":1}}],[\"404\",{\"1\":{\"45\":1}}],[\"45\",{\"1\":{\"8\":1}}],[\"轻量工具箱\",{\"1\":{\"44\":1}}],[\"github\",{\"1\":{\"43\":1}}],[\"genshin\",{\"0\":{\"24\":1}}],[\"青柠起始页\",{\"1\":{\"42\":1}}],[\"浏览器拓展\",{\"0\":{\"42\":1}}],[\"2\",{\"1\":{\"41\":1}}],[\"28\",{\"1\":{\"8\":1}}],[\"1\",{\"1\":{\"41\":1}}],[\"辩论计时器\",{\"1\":{\"41\":2}}],[\"学校\",{\"0\":{\"41\":1}}],[\"空投快传\",{\"1\":{\"40\":1}}],[\"adblock\",{\"1\":{\"42\":1}}],[\"airportal\",{\"1\":{\"40\":1}}],[\"apps\",{\"1\":{\"25\":1}}],[\"图片拼接\",{\"1\":{\"39\":1}}],[\"图标\",{\"1\":{\"22\":1}}],[\"视频字母截图生成\",{\"1\":{\"39\":1}}],[\"影像编辑\",{\"0\":{\"39\":1}}],[\"整数数列查询oeis\",{\"1\":{\"38\":1}}],[\"数学求解器\",{\"1\":{\"38\":1}}],[\"数据处理\",{\"0\":{\"38\":1}}],[\"字数统计\",{\"1\":{\"38\":1}}],[\"ico\",{\"1\":{\"39\":1}}],[\"ides\",{\"1\":{\"36\":1}}],[\"impact\",{\"0\":{\"24\":1}}],[\"jetbrains\",{\"1\":{\"36\":1}}],[\"编程相关\",{\"0\":{\"36\":1,\"43\":1}}],[\"网址\",{\"0\":{\"37\":1}}],[\"网络工具\",{\"0\":{\"35\":1,\"40\":1}}],[\"网易\",{\"1\":{\"25\":1}}],[\"火绒\",{\"1\":{\"34\":1}}],[\"安全\",{\"0\":{\"34\":1}}],[\"quicklook\",{\"1\":{\"33\":1}}],[\"qq\",{\"1\":{\"31\":1}}],[\"无广告\",{\"1\":{\"33\":1}}],[\"edge\",{\"0\":{\"42\":1}}],[\"everything\",{\"1\":{\"33\":1}}],[\"epic\",{\"1\":{\"28\":1}}],[\"小工具\",{\"0\":{\"33\":1}}],[\"向日葵\",{\"1\":{\"32\":1}}],[\"远程控制\",{\"0\":{\"32\":1}}],[\"搜狗输入法\",{\"1\":{\"31\":1}}],[\"日常软件\",{\"0\":{\"31\":1}}],[\"软件\",{\"0\":{\"30\":1}}],[\"rutracker\",{\"1\":{\"29\":1}}],[\"嘘~\",{\"0\":{\"29\":1}}],[\"台服\",{\"1\":{\"27\":1}}],[\"国内镜像\",{\"1\":{\"43\":1}}],[\"国内访问速度堪忧\",{\"1\":{\"9\":1}}],[\"国服\",{\"1\":{\"27\":1}}],[\"of\",{\"0\":{\"27\":1}}],[\"魔兽世界\",{\"0\":{\"27\":1}}],[\"battle\",{\"1\":{\"28\":1}}],[\"blueprints\",{\"1\":{\"26\":1}}],[\"bilibili\",{\"1\":{\"26\":1}}],[\"制作组\",{\"1\":{\"26\":1}}],[\"sm\",{\"1\":{\"39\":1}}],[\"snipaste\",{\"1\":{\"33\":1}}],[\"studio\",{\"1\":{\"36\":1}}],[\"student\",{\"1\":{\"1\":1,\"43\":1}}],[\"steamdb\",{\"1\":{\"28\":1}}],[\"steam\",{\"1\":{\"28\":1}}],[\"sphere\",{\"0\":{\"26\":1},\"1\":{\"26\":1}}],[\"dyson\",{\"0\":{\"26\":1},\"1\":{\"26\":1}}],[\"developer\",{\"1\":{\"1\":1,\"43\":1}}],[\"戴森球计划\",{\"0\":{\"26\":1}}],[\"笨蛋mc开服教程\",{\"1\":{\"25\":1}}],[\"liteloaderqqnt\",{\"0\":{\"44\":1},\"1\":{\"31\":1}}],[\"littleskin皮肤站\",{\"1\":{\"25\":1}}],[\"launcher\",{\"1\":{\"25\":1}}],[\"converter\",{\"1\":{\"39\":1}}],[\"code\",{\"1\":{\"36\":1}}],[\"chinese\",{\"1\":{\"35\":1}}],[\"clash\",{\"1\":{\"35\":1}}],[\"curseforge\",{\"1\":{\"25\":1}}],[\"c++基础语法\",{\"1\":{\"7\":1}}],[\"plus\",{\"1\":{\"42\":1}}],[\"program\",{\"0\":{\"26\":1}}],[\"pcl2\",{\"1\":{\"25\":1}}],[\"pages上\",{\"1\":{\"9\":1}}],[\"pack\",{\"1\":{\"1\":1,\"43\":1}}],[\"windows\",{\"1\":{\"35\":1}}],[\"winrar\",{\"1\":{\"33\":1}}],[\"wiki\",{\"1\":{\"25\":1}}],[\"wps\",{\"1\":{\"31\":1}}],[\"wowhead\",{\"1\":{\"27\":1}}],[\"world\",{\"0\":{\"27\":1},\"1\":{\"35\":1}}],[\"warcraft\",{\"0\":{\"27\":1}}],[\"waline\",{\"1\":{\"22\":1}}],[\"中文\",{\"1\":{\"25\":1}}],[\"微软商店\",{\"1\":{\"33\":3}}],[\"微软\",{\"1\":{\"25\":1}}],[\"胡桃工具箱\",{\"1\":{\"24\":1}}],[\"米游社\",{\"1\":{\"24\":1}}],[\"官网\",{\"1\":{\"24\":1,\"25\":2,\"27\":2,\"44\":1}}],[\"原神\",{\"0\":{\"24\":1}}],[\"游戏平台\",{\"0\":{\"28\":1}}],[\"游戏\",{\"0\":{\"23\":1}}],[\"found\",{\"1\":{\"45\":1}}],[\"for\",{\"1\":{\"35\":1}}],[\"fontawesome\",{\"1\":{\"22\":1}}],[\"face\",{\"1\":{\"35\":1}}],[\"flyingpig278\",{\"1\":{\"0\":2,\"5\":1}}],[\"的博客\",{\"1\":{\"22\":1}}],[\"的博客😄~\",{\"1\":{\"0\":1}}],[\"mspring\",{\"1\":{\"44\":1}}],[\"ms图床\",{\"1\":{\"39\":1}}],[\"microsoft\",{\"1\":{\"38\":1}}],[\"minecraft\",{\"0\":{\"25\":1},\"1\":{\"25\":3}}],[\"moonlight\",{\"1\":{\"32\":1}}],[\"mc百科|最大的minecraft中文mod百科\",{\"1\":{\"25\":1}}],[\"mr\",{\"1\":{\"22\":1}}],[\"me域名\",{\"1\":{\"1\":1}}],[\"文档\",{\"1\":{\"22\":3}}],[\"博客\",{\"0\":{\"22\":1}}],[\"点击前往\",{\"1\":{\"17\":1,\"21\":1}}],[\"收藏夹\",{\"0\":{\"16\":1}}],[\"首页\",{\"2\":{\"15\":1}}],[\"暂未命名\",{\"1\":{\"13\":1}}],[\"这是本人在高中生活的过程中的一些感慨\",{\"1\":{\"13\":1}}],[\"人生\",{\"2\":{\"12\":1}}],[\"随笔\",{\"0\":{\"13\":1},\"2\":{\"11\":1,\"14\":1}}],[\"测试页面\",{\"0\":{\"10\":1},\"1\":{\"10\":1}}],[\"将这个网站架设在云服务器上或者用国内cdn进行加速\",{\"1\":{\"9\":1}}],[\"希望等我成年后能尽快给我的备案\",{\"1\":{\"9\":1}}],[\"目前网站假设在github\",{\"1\":{\"9\":1}}],[\"基于vuepress\",{\"1\":{\"9\":1}}],[\"一个新的博客\",{\"1\":{\"9\":1}}],[\"一个具有强大功能的\",{\"1\":{\"3\":1}}],[\"新的开始\",{\"0\":{\"9\":1}}],[\"更多信息\",{\"1\":{\"8\":1,\"9\":1}}],[\"███░░░░░░░\",{\"1\":{\"8\":1}}],[\"██████░░░░\",{\"1\":{\"8\":1}}],[\"█████░░░░░\",{\"1\":{\"8\":1}}],[\"████░░░░░░\",{\"1\":{\"8\":1}}],[\"抗压能力\",{\"1\":{\"8\":1}}],[\"55\",{\"1\":{\"8\":1}}],[\"团队协作\",{\"1\":{\"8\":1}}],[\"35\",{\"1\":{\"8\":1}}],[\"硬件认知\",{\"1\":{\"8\":1}}],[\"算法基础\",{\"1\":{\"8\":1}}],[\"能力建设\",{\"0\":{\"8\":1}}],[\"建立技术笔记库\",{\"1\":{\"7\":1}}],[\"持续研究github开源项目\",{\"1\":{\"7\":1}}],[\"持续更新中\",{\"1\":{\"4\":1}}],[\"完成30+小时设备联调测试\",{\"1\":{\"7\":1}}],[\"作为省级机器人竞赛操作手\",{\"1\":{\"7\":1}}],[\"​开源学习\",{\"1\":{\"7\":1}}],[\"​硬件调试\",{\"1\":{\"7\":1}}],[\"​编程开发\",{\"1\":{\"7\":1}}],[\"等程序\",{\"1\":{\"7\":1}}],[\"智能温控模拟系统\",{\"1\":{\"7\":1}}],[\"独立实现\",{\"1\":{\"7\":1}}],[\"掌握java\",{\"1\":{\"7\":1}}],[\"核心领域\",{\"0\":{\"7\":1}}],[\"技术实践志\",{\"0\":{\"6\":1}}],[\"技术探索者\",{\"1\":{\"5\":1}}],[\"开发人员速查表\",{\"1\":{\"43\":1}}],[\"开服命令生成\",{\"1\":{\"25\":1}}],[\"开源技术学习者javac++机器人系统算法实践\",{\"1\":{\"5\":1}}],[\"开始\",{\"0\":{\"1\":1}}],[\"|\",{\"1\":{\"5\":1}}],[\"关于我\",{\"0\":{\"5\":1}}],[\"关于本站\",{\"0\":{\"0\":1},\"1\":{\"8\":1,\"9\":1}}],[\"未完待续\",{\"1\":{\"4\":1}}],[\"相关信息\",{\"1\":{\"4\":1}}],[\"运行在vercel上\",{\"1\":{\"4\":1}}],[\"评论功能目前基于waline\",{\"1\":{\"4\":1}}],[\"自定义内容\",{\"0\":{\"4\":1}}],[\"hello\",{\"1\":{\"25\":1}}],[\"hexo的确是一个很好的选择\",{\"1\":{\"1\":1}}],[\"hope\",{\"1\":{\"3\":1,\"22\":2}}],[\"tool\",{\"0\":{\"46\":1}}],[\"todest\",{\"1\":{\"32\":1}}],[\"translucenttb\",{\"1\":{\"33\":1}}],[\"tw\",{\"1\":{\"28\":1}}],[\"the\",{\"1\":{\"35\":1}}],[\"theme\",{\"1\":{\"3\":1,\"22\":1,\"44\":1}}],[\"thunderstore\",{\"1\":{\"26\":1}}],[\"tada\",{\"1\":{\"1\":1}}],[\"主题✨\",{\"1\":{\"3\":1}}],[\"主题支持\",{\"0\":{\"3\":1}}],[\"visual\",{\"1\":{\"36\":1}}],[\"v2\",{\"1\":{\"2\":1}}],[\"vuepress\",{\"1\":{\"2\":1,\"3\":2,\"22\":2}}],[\"vue\",{\"1\":{\"2\":1}}],[\"驱动的静态网站生成器\",{\"1\":{\"2\":1}}],[\"框架支持\",{\"0\":{\"2\":1}}],[\"于是这个博客网站就这么诞生啦\",{\"1\":{\"1\":1}}],[\"于是那个博客很快没了动静\",{\"1\":{\"1\":1}}],[\"让我发现了很多我可以实现的功能\",{\"1\":{\"1\":1}}],[\"趁这次学习vue的机会\",{\"1\":{\"1\":1}}],[\"但是后面不久\",{\"1\":{\"1\":1}}],[\"对于一个毫无基础的新手来说\",{\"1\":{\"1\":1}}],[\"就借此机会从0开始尝试搭建一个博客\",{\"1\":{\"1\":1}}],[\"其中赠送了一年的\",{\"1\":{\"1\":1}}],[\"我的世界高版本服主教程合集\",{\"1\":{\"25\":1}}],[\"我的世界\",{\"0\":{\"25\":1}}],[\"我接触到了vuepress\",{\"1\":{\"1\":1}}],[\"我也没有能力自己实现我想要的功能\",{\"1\":{\"1\":1}}],[\"我也因此使用了很长时间的hexo作为我的博客框架\",{\"1\":{\"1\":1}}],[\"我发现我很难去自定义主题内的一些样式\",{\"1\":{\"1\":1}}],[\"我刚申请到github\",{\"1\":{\"1\":1}}],[\"我第一次尝试架设博客是在2023年的年初\",{\"1\":{\"1\":1}}],[\"我是\",{\"1\":{\"0\":1}}],[\"欢迎来到\",{\"1\":{\"0\":1}}],[\"你好\",{\"1\":{\"0\":1}}]],\"version\":2}}")).map(([e,t])=>[e,mt(t,{fields:["h","t","c"],storeFields:["h","t","c"]})]));self.onmessage=({data:{type:e="all",query:t,locale:n,options:o,id:s}})=>{const r=bt[n];e==="suggest"?self.postMessage([e,s,ve(t,r,o)]):e==="search"?self.postMessage([e,s,Ee(t,r,o)]):self.postMessage({suggestions:[e,s,ve(t,r,o)],results:[e,s,Ee(t,r,o)]})};
//# sourceMappingURL=index.js.map
