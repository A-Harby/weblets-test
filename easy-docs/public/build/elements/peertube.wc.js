!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function l(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function s(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function p(){return d("")}function m(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t){return function(e){return e.preventDefault(),t.call(this,e)}}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t){return""===t?null:+t}function g(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function v(t,e){t.value=null==e?"":e}function _(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function w(t){const e={};for(const n of t)e[n.name]=n.value;return e}let $;function E(t){$=t}const k=[],S=[],x=[],M=[],R=Promise.resolve();let P=!1;function T(t){x.push(t)}let B=!1;const C=new Set;function O(){if(!B){B=!0;do{for(let t=0;t<k.length;t+=1){const e=k[t];E(e),D(e.$$)}for(E(null),k.length=0;S.length;)S.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];C.has(e)||(C.add(e),e())}x.length=0}while(k.length);for(;M.length;)M.pop()();P=!1,B=!1,C.clear()}}function D(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const A=new Set;function N(t,e){t&&t.i&&(A.delete(t),t.i(e))}function I(t,e){t.d(1),e.delete(t.key)}function j(t,e,n,o,l,r,i,s,c,a,u,d){let f=t.length,p=r.length,m=f;const h={};for(;m--;)h[t[m].key]=m;const y=[],b=new Map,g=new Map;for(m=p;m--;){const t=d(l,r,m),s=n(t);let c=i.get(s);c?o&&c.p(t,e):(c=a(s,t),c.c()),b.set(s,y[m]=c),s in h&&g.set(s,Math.abs(m-h[s]))}const v=new Set,_=new Set;function w(t){N(t,1),t.m(s,u),i.set(t.key,t),u=t.first,p--}for(;f&&p;){const e=y[p-1],n=t[f-1],o=e.key,l=n.key;e===n?(u=e.first,f--,p--):b.has(l)?!i.has(o)||v.has(o)?w(e):_.has(l)?f--:g.get(o)>g.get(l)?(_.add(o),w(e)):(v.add(l),f--):(c(n,i),f--)}for(;f--;){const e=t[f];b.has(e.key)||c(e,i)}for(;p;)w(y[p-1]);return y}function U(t,e){-1===t.$$.dirty[0]&&(k.push(t),P||(P=!0,R.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function z(r,i,s,c,u,d,f,p=[-1]){const m=$;E(r);const h=r.$$={fragment:null,ctx:null,props:d,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(m?m.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:i.target||m.$$.root};f&&f(h.root);let y=!1;if(h.ctx=s?s(r,i.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return h.ctx&&u(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),y&&U(r,t)),e})):[],h.update(),y=!0,o(h.before_update),h.fragment=!!c&&c(h.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);h.fragment&&h.fragment.l(t),t.forEach(a)}else h.fragment&&h.fragment.c();i.intro&&N(r.$$.fragment),function(t,n,r,i){const{fragment:s,on_mount:c,on_destroy:a,after_update:u}=t.$$;s&&s.m(n,r),i||T((()=>{const n=c.map(e).filter(l);a?a.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(T)}(r,i.target,i.anchor,i.customElement),O()}E(m)}let L;var V;"function"==typeof HTMLElement&&(L=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(e).filter(l);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});var H=new Uint8Array(16);function F(){if(!V&&!(V="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return V(H)}var G=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function W(t){return"string"==typeof t&&G.test(t)}for(var q,Y,J,K,Q=[],X=0;X<256;++X)Q.push((X+256).toString(16).substr(1));function Z(t,e,n){var o=(t=t||{}).random||(t.rng||F)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e){n=n||0;for(var l=0;l<16;++l)e[n+l]=o[l];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(Q[t[e+0]]+Q[t[e+1]]+Q[t[e+2]]+Q[t[e+3]]+"-"+Q[t[e+4]]+Q[t[e+5]]+"-"+Q[t[e+6]]+Q[t[e+7]]+"-"+Q[t[e+8]]+Q[t[e+9]]+"-"+Q[t[e+10]]+Q[t[e+11]]+Q[t[e+12]]+Q[t[e+13]]+Q[t[e+14]]+Q[t[e+15]]).toLowerCase();if(!W(n))throw TypeError("Stringified UUID is invalid");return n}(o)}function tt(t){const e=+t;return"number"==typeof e&&!isNaN(e)&&e>=0&&e.toFixed(0)===e.toString()}class et{constructor(t="nw_"+Z().split("-")[0],e="10.20.0.0/16"){this.name=t,this.ipRange=e}get valid(){const{name:t,ipRange:e}=this;return""!==t&&""!==e}}class nt{constructor(t=Z(),e="vm_"+t.split("-")[0],n="https://hub.grid.tf/tf-official-apps/base:latest.flist",o=4,l=8192,r="/sbin/zinit init",i=!0,s,c=25,a=new et,u=[],d=[],f=!1){this.id=t,this.name=e,this.flist=n,this.cpu=o,this.memory=l,this.entrypoint=r,this.planetary=i,this.nodeId=s,this.rootFsSize=c,this.network=a,this.envs=u,this.disks=d,this.publicIp=f}get valid(){const{name:t,flist:e,cpu:n,memory:o,entrypoint:l,nodeId:r}=this,{rootFsSize:i,network:s,envs:c,disks:a}=this;return""!==t&&""!==e&&""!==l&&tt(n)&&tt(o)&&tt(r)&&tt(i)&&s.valid&&c.reduce(((t,e)=>t&&e.valid),!0)&&a.reduce(((t,e)=>t&&e.valid),!0)}}
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function ot(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(o=Object.getOwnPropertySymbols(t);l<o.length;l++)e.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(t,o[l])&&(n[o[l]]=t[o[l]])}return n}const{HTTPMessageBusClient:lt}=null!==(Y=null===(q=window.configs)||void 0===q?void 0:q.client)&&void 0!==Y?Y:{},{DiskModel:rt,MachineModel:it,MachinesModel:st,GridClient:ct,NetworkModel:at}=null!==(K=null===(J=window.configs)||void 0===J?void 0:J.grid3_client)&&void 0!==K?K:{};async function ut(t,e){const n=ot(t,["envs","disks"]),{name:o}=n,{publicIp:l,planetary:r}=n,{mnemonics:i,storeSecret:s,networkEnv:c}=e,a=new lt(0,""),u=new ct(c,i,s,a,void 0,"tfkvstore"),d=new at;d.name="peertube_net",d.ip_range="10.1.0.0/16";const f=new rt;f.name="peertube_data",f.size=10,f.mountpoint="/data";const p=new it;p.name=o,p.node_id=7,p.disks=[f],p.public_ip=l,p.planetary=r,p.cpu=3,p.memory=2048,p.rootfs_size=1,p.flist="https://hub.grid.tf/omar0.3bot/omarelawady-peertube-grid3-tfconnect.flist",p.entrypoint="/start.sh",p.env=dt({PEERTUBE_BIND_ADDRESS:"::",PEERTUBE_WEBSERVER_HOSTNAME:"peertube4.gent01.dev.grid.tf",PEERTUBE_DB_HOSTNAME:"10.1.4.3",PEERTUBE_DB_USERNAME:"postgres",PEERTUBE_DB_PASSWORD:"omar123456",PEERTUBE_REDIS_HOSTNAME:"10.1.4.2",PEERTUBE_REDIS_AUTH:"omar123456"});const m=new st;return m.name=o,m.network=d,m.machines=[p],async function(t,e,n){const o=ot(t,["envs","disks"]),{name:l}=o,{mnemonics:r,storeSecret:i,networkEnv:s}=n,c=new lt(0,""),a=new ct(s,r,i,c,void 0,"tfkvstore"),u=new rt;u.name="redis_data",u.size=10,u.mountpoint="/data";const d=new it;d.name="redis",d.node_id=7,d.disks=[u],d.public_ip=!1,d.planetary=!0,d.cpu=1,d.memory=256,d.rootfs_size=1,d.flist="https://hub.grid.tf/omar0.3bot/omarelawady-redis-grid3.flist",d.entrypoint="/start.sh",d.env=dt({PASSWORD:"omar123456"});const f=new rt;f.name="postgres_data",f.size=10,f.mountpoint="/var/lib/postgresql/data";const p=new it;p.name="postgres",p.node_id=7,p.disks=[f],p.public_ip=!1,p.planetary=!0,p.cpu=1,p.memory=256,p.rootfs_size=1,p.flist="https://hub.grid.tf/omar0.3bot/omarelawady-postgres-grid3.flist",p.entrypoint="/start.sh",p.env=dt({POSTGRES_PASSWORD:"omar123456",POSTGRES_DB:"peertube_prod",PGDATA:"/var/lib/postgresql/data"});const m=new st;m.name=l,m.network=e,m.machines=[d,p],a.connect().then((()=>a.machines.deploy(m)))}(t,d,e),u.connect().then((()=>u.machines.deploy(m)))}function dt(t){return t.reduce(((t,e)=>(t[e.key]=e.value,t)),{})}function ft(t,e,n){const o=t.slice();return o[27]=e[n],o[28]=e,o[29]=n,o}function pt(t,e,n){const o=t.slice();return o[27]=e[n],o[30]=e,o[31]=n,o}function mt(t,e,n){const o=t.slice();return o[32]=e[n],o}function ht(t,e,n){const o=t.slice();return o[7]=e[n],o[36]=n,o}function yt(t){let e,n,o,l,r,i,d,h,b,g,v=[],w=new Map,$=[],E=new Map,k=t[6];const S=t=>t[36];for(let e=0;e<k.length;e+=1){let n=ht(t,k,e),o=S(n);w.set(o,v[e]=$t(o,n))}let x=t[8];const M=t=>t[32].label;for(let e=0;e<x.length;e+=1){let n=mt(t,x,e),o=M(n);E.set(o,$[e]=Et(o,n))}let R="Base"===t[1]&&kt(t),P="Configs"===t[1]&&Pt(t);return{c(){e=u("div"),n=u("select");for(let t=0;t<v.length;t+=1)v[t].c();o=f(),l=u("div"),r=u("ul");for(let t=0;t<$.length;t+=1)$[t].c();i=f(),R&&R.c(),d=f(),P&&P.c(),h=p(),y(e,"class","select mb-4"),_(e,"display","flex"),_(e,"justify-content","flex-end"),y(l,"class","tabs is-centered")},m(a,u){c(a,e,u),s(e,n);for(let t=0;t<v.length;t+=1)v[t].m(n,null);c(a,o,u),c(a,l,u),s(l,r);for(let t=0;t<$.length;t+=1)$[t].m(r,null);c(a,i,u),R&&R.m(a,u),c(a,d,u),P&&P.m(a,u),c(a,h,u),b||(g=m(n,"change",t[13]),b=!0)},p(t,e){64&e[0]&&(k=t[6],v=j(v,e,S,1,t,k,w,n,I,$t,null,ht)),258&e[0]&&(x=t[8],$=j($,e,M,1,t,x,E,r,I,Et,null,mt)),"Base"===t[1]?R?R.p(t,e):(R=kt(t),R.c(),R.m(d.parentNode,d)):R&&(R.d(1),R=null),"Configs"===t[1]?P?P.p(t,e):(P=Pt(t),P.c(),P.m(h.parentNode,h)):P&&(P.d(1),P=null)},d(t){t&&a(e);for(let t=0;t<v.length;t+=1)v[t].d();t&&a(o),t&&a(l);for(let t=0;t<$.length;t+=1)$[t].d();t&&a(i),R&&R.d(t),t&&a(d),P&&P.d(t),t&&a(h),b=!1,g()}}}function bt(t){let e,n;function o(t,e){return t[5]?Dt:Ot}let l=o(t),r=l(t);return{c(){e=u("div"),n=d(">\n        "),r.c(),y(e,"class","notification is-danger")},m(t,o){c(t,e,o),s(e,n),r.m(e,null)},p(t,n){l===(l=o(t))&&r?r.p(t,n):(r.d(1),r=l(t),r&&(r.c(),r.m(e,null)))},d(t){t&&a(e),r.d()}}}function gt(e){let n;return{c(){n=u("div"),n.textContent="> Successfully deployed VM.",y(n,"class","notification is-success")},m(t,e){c(t,n,e)},p:t,d(t){t&&a(n)}}}function vt(t){let e;function n(t,e){return t[5]?Nt:At}let o=n(t),l=o(t);return{c(){e=u("div"),l.c(),y(e,"class","notification is-info")},m(t,n){c(t,e,n),l.m(e,null)},p(t,r){o===(o=n(t))&&l?l.p(t,r):(l.d(1),l=o(t),l&&(l.c(),l.m(e,null)))},d(t){t&&a(e),l.d()}}}function _t(t){let e,n,o,l=t[36]+1+"";return{c(){e=d("Profile "),n=d(l),o=f()},m(t,l){c(t,e,l),c(t,n,l),c(t,o,l)},p(t,e){64&e[0]&&l!==(l=t[36]+1+"")&&g(n,l)},d(t){t&&a(e),t&&a(n),t&&a(o)}}}function wt(t){let e,n,o=t[7].name+"";return{c(){e=d(o),n=f()},m(t,o){c(t,e,o),c(t,n,o)},p(t,n){64&n[0]&&o!==(o=t[7].name+"")&&g(e,o)},d(t){t&&a(e),t&&a(n)}}}function $t(t,e){let n,o;function l(t,e){return t[7].name?wt:_t}let r=l(e),i=r(e);return{key:t,first:null,c(){n=u("option"),i.c(),n.__value=o=e[36],n.value=n.__value,this.first=n},m(t,e){c(t,n,e),i.m(n,null)},p(t,s){r===(r=l(e=t))&&i?i.p(e,s):(i.d(1),i=r(e),i&&(i.c(),i.m(n,null))),64&s[0]&&o!==(o=e[36])&&(n.__value=o,n.value=n.__value)},d(t){t&&a(n),i.d()}}}function Et(t,e){let n,o,l,r,i,p,b,g,v=e[32].label+"";function _(){return e[16](e[32])}return{key:t,first:null,c(){n=u("li"),o=u("a"),l=u("span"),r=d(v),i=f(),y(o,"href","#!"),y(n,"class",p=e[1]===e[32].label?"is-active":""),this.first=n},m(t,e){c(t,n,e),s(n,o),s(o,l),s(l,r),s(n,i),b||(g=m(o,"click",h(_)),b=!0)},p(t,o){e=t,2&o[0]&&p!==(p=e[1]===e[32].label?"is-active":"")&&y(n,"class",p)},d(t){t&&a(n),b=!1,g()}}}function kt(t){let e,n=[],o=new Map,l=t[10];const r=t=>t[27].symbol;for(let e=0;e<l.length;e+=1){let i=pt(t,l,e),s=r(i);o.set(s,n[e]=Rt(s,i))}return{c(){for(let t=0;t<n.length;t+=1)n[t].c();e=p()},m(t,o){for(let e=0;e<n.length;e+=1)n[e].m(t,o);c(t,e,o)},p(t,i){1025&i[0]&&(l=t[10],n=j(n,i,r,1,t,l,o,e.parentNode,I,Rt,e,pt))},d(t){for(let e=0;e<n.length;e+=1)n[e].d(t);t&&a(e)}}}function St(t){let e,n,o;function l(){t[19].call(e,t[27])}return{c(){e=u("input"),y(e,"class","input"),y(e,"type","text"),y(e,"placeholder",t[27].placeholder)},m(r,i){c(r,e,i),v(e,t[0][t[27].symbol]),n||(o=m(e,"input",l),n=!0)},p(n,o){t=n,1025&o[0]&&e.value!==t[0][t[27].symbol]&&v(e,t[0][t[27].symbol])},d(t){t&&a(e),n=!1,o()}}}function xt(t){let e,n,o,l,r,i,p,h=t[27].label+"";function b(){return t[18](t[27])}return{c(){e=u("label"),n=u("input"),l=f(),r=d(h),y(n,"type","checkbox"),n.checked=o=t[0][t[27].symbol],y(e,"class","checkbox")},m(t,o){c(t,e,o),s(e,n),s(e,l),s(e,r),i||(p=m(n,"change",b),i=!0)},p(e,l){t=e,1&l[0]&&o!==(o=t[0][t[27].symbol])&&(n.checked=o)},d(t){t&&a(e),i=!1,p()}}}function Mt(t){let e,n,o;function l(){t[17].call(e,t[27])}return{c(){e=u("input"),y(e,"class","input"),y(e,"type","number"),y(e,"placeholder",t[27].placeholder)},m(r,i){c(r,e,i),v(e,t[0][t[27].symbol]),n||(o=m(e,"input",l),n=!0)},p(n,o){t=n,1025&o[0]&&b(e.value)!==t[0][t[27].symbol]&&v(e,t[0][t[27].symbol])},d(t){t&&a(e),n=!1,o()}}}function Rt(t,e){let n,o,l,r,i,p,m=e[27].label+"";let h=function(t,e){return"number"===t[27].type?Mt:"checkbox"===t[27].type?xt:St}(e),b=h(e);return{key:t,first:null,c(){n=u("div"),o=u("p"),l=d(m),r=f(),i=u("div"),b.c(),p=f(),y(o,"class","label"),y(i,"class","control"),y(n,"class","field"),this.first=n},m(t,e){c(t,n,e),s(n,o),s(o,l),s(n,r),s(n,i),b.m(i,null),s(n,p)},p(t,n){e=t,b.p(e,n)},d(t){t&&a(n),b.d()}}}function Pt(t){let e,n=[],o=new Map,l=t[11];const r=t=>t[27].symbol;for(let e=0;e<l.length;e+=1){let i=ft(t,l,e),s=r(i);o.set(s,n[e]=Ct(s,i))}return{c(){for(let t=0;t<n.length;t+=1)n[t].c();e=p()},m(t,o){for(let e=0;e<n.length;e+=1)n[e].m(t,o);c(t,e,o)},p(t,i){2049&i[0]&&(l=t[11],n=j(n,i,r,1,t,l,o,e.parentNode,I,Ct,e,ft))},d(t){for(let e=0;e<n.length;e+=1)n[e].d(t);t&&a(e)}}}function Tt(t){let e,n,o;function l(){t[21].call(e,t[27])}return{c(){e=u("input"),y(e,"class","input"),y(e,"type","text"),y(e,"placeholder",t[27].placeholder)},m(r,i){c(r,e,i),v(e,t[0][t[27].symbol]),n||(o=m(e,"input",l),n=!0)},p(n,o){t=n,2049&o[0]&&e.value!==t[0][t[27].symbol]&&v(e,t[0][t[27].symbol])},d(t){t&&a(e),n=!1,o()}}}function Bt(t){let e,n,o;function l(){t[20].call(e,t[27])}return{c(){e=u("input"),y(e,"class","input"),y(e,"type","number"),y(e,"placeholder",t[27].placeholder)},m(r,i){c(r,e,i),v(e,t[0][t[27].symbol]),n||(o=m(e,"input",l),n=!0)},p(n,o){t=n,2049&o[0]&&b(e.value)!==t[0][t[27].symbol]&&v(e,t[0][t[27].symbol])},d(t){t&&a(e),n=!1,o()}}}function Ct(t,e){let n,o,l,r,i,p,m=e[27].label+"";let h=function(t,e){return"number"===t[27].type?Bt:Tt}(e),b=h(e);return{key:t,first:null,c(){n=u("div"),o=u("p"),l=d(m),r=f(),i=u("div"),b.c(),p=f(),y(o,"class","label"),y(i,"class","control"),y(n,"class","field"),this.first=n},m(t,e){c(t,n,e),s(n,o),s(o,l),s(n,r),s(n,i),b.m(i,null),s(n,p)},p(t,n){e=t,b.p(e,n)},d(t){t&&a(n),b.d()}}}function Ot(e){let n;return{c(){n=d("Failed to deploy VM.")},m(t,e){c(t,n,e)},p:t,d(t){t&&a(n)}}}function Dt(t){let e;return{c(){e=d(t[5])},m(t,n){c(t,e,n)},p(t,n){32&n[0]&&g(e,t[5])},d(t){t&&a(e)}}}function At(e){let n;return{c(){n=d("> Loading...")},m(t,e){c(t,n,e)},p:t,d(t){t&&a(n)}}}function Nt(t){let e,n,o;return{c(){e=d("> "),n=d(t[5]),o=d(".")},m(t,l){c(t,e,l),c(t,n,l),c(t,o,l)},p(t,e){32&e[0]&&g(n,t[5])},d(t){t&&a(e),t&&a(n),t&&a(o)}}}function It(t){let e;return{c(){e=d("Deploy")},m(t,n){c(t,e,n)},d(t){t&&a(e)}}}function jt(t){let e;return{c(){e=d("Back")},m(t,n){c(t,e,n)},d(t){t&&a(e)}}}function Ut(e){let n,l,r,i,d,p,b,g,v,w,$,E,k;function S(t,e){return t[2]?vt:t[3]?gt:t[4]?bt:yt}let x=S(e),M=x(e);function R(t,e){return t[3]||t[4]?jt:It}let P=R(e),T=P(e);return{c(){n=u("div"),l=u("form"),r=u("h4"),r.textContent="Deploy a Peertube Instance",i=f(),d=u("hr"),p=f(),M.c(),b=f(),g=u("div"),v=u("button"),T.c(),this.c=t,y(r,"class","is-size-4"),y(v,"class",w="button is-primary "+(e[2]?"is-loading":"")),y(v,"type","submit"),v.disabled=$=(e[2]||!e[0].valid)&&!(e[3]||e[4]),y(g,"class","actions"),y(l,"class","box"),_(n,"padding","15px")},m(t,o){c(t,n,o),s(n,l),s(l,r),s(l,i),s(l,d),s(l,p),M.m(l,null),s(l,b),s(l,g),s(g,v),T.m(v,null),E||(k=[m(v,"click",e[22]),m(l,"submit",h(e[12]))],E=!0)},p(t,e){x===(x=S(t))&&M?M.p(t,e):(M.d(1),M=x(t),M&&(M.c(),M.m(l,b))),P!==(P=R(t))&&(T.d(1),T=P(t),T&&(T.c(),T.m(v,null))),4&e[0]&&w!==(w="button is-primary "+(t[2]?"is-loading":""))&&y(v,"class",w),29&e[0]&&$!==($=(t[2]||!t[0].valid)&&!(t[3]||t[4]))&&(v.disabled=$)},i:t,o:t,d(t){t&&a(n),M.d(),T.d(),E=!1,o(k)}}}function zt(t,e,n){let o,l,r;var s,c,a;const{events:u}=null!==(c=null===(s=window.configs)||void 0===s?void 0:s.grid3_client)&&void 0!==c?c:{},d=new nt;let f="Base",p=!1,m=!1,h=!1;const y=null===(a=window.configs)||void 0===a?void 0:a.baseConfig;i(t,y,(t=>n(15,r=t)));let g=0;const v=[{label:"Name",symbol:"name",placeholder:"Your VM name."},{label:"Public IP",symbol:"publicIp",placeholder:"",type:"checkbox"},{label:"Planetary",symbol:"planetary",placeholder:"",type:"checkbox"}],_=[{label:"Mnemonics",symbol:"mnemonics",placeholder:"Your Mnemonics."},{label:"Store Secret",symbol:"storeSecret",placeholder:"Your Store Secret."}];let w;return t.$$.update=()=>{32768&t.$$.dirty[0]&&n(6,o=r),49152&t.$$.dirty[0]&&n(7,l=r[g])},[d,f,p,m,h,w,o,l,[{label:"Base"},{label:"Configs"}],y,v,_,function(){function t(t){"string"==typeof t&&n(5,w=t)}n(2,p=!0),n(3,m=!1),n(4,h=!1),n(5,w=void 0),u.addListener("logs",t),ut(d,l).then((()=>n(3,m=!0))).catch((t=>{n(4,h=!0),n(5,w="string"==typeof t?t:t.message)})).finally((()=>{n(2,p=!1),u.removeListener("logs",t)}))},t=>n(14,g=t.target.selectedIndex),g,r,t=>n(1,f=t.label),function(t){d[t.symbol]=b(this.value),n(0,d),n(10,v)},t=>n(0,d[t.symbol]=!d[t.symbol],d),function(t){d[t.symbol]=this.value,n(0,d),n(10,v)},function(t){d[t.symbol]=b(this.value),n(0,d),n(11,_)},function(t){d[t.symbol]=this.value,n(0,d),n(11,_)},t=>{(m||h)&&(t.preventDefault(),n(3,m=!1),n(4,h=!1),n(2,p=!1))}]}!function(t,e){try{customElements.define(`tf-${t}`,e)}catch(e){console.warn(`Element with name '${t}' already defined.`)}}("peertube",class extends L{constructor(t){super(),this.shadowRoot.innerHTML='<style>@import url("https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css");.actions{display:flex;justify-content:flex-end;align-items:center}.vm-container{overflow-x:hidden;overflow-y:auto;max-height:70vh;will-change:transform;padding-bottom:5rem;margin-bottom:20px}.vm-header{display:flex;align-items:center;justify-content:space-between}</style>',z(this,{target:this.shadowRoot,props:w(this.attributes),customElement:!0},zt,Ut,r,{},null,[-1,-1]),t&&t.target&&c(t.target,this,t.anchor)}})}();
