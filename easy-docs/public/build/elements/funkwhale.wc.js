!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function r(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function d(){return u(" ")}function p(){return u("")}function f(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function m(t){return function(e){return e.preventDefault(),t.call(this,e)}}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t){return""===t?null:+t}function g(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function $(t,e){t.value=null==e?"":e}function y(t,e,n,s){t.style.setProperty(e,n,s?"important":"")}function v(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e)return void(s.selected=!0)}t.selectedIndex=-1}function w(t){const e={};for(const n of t)e[n.name]=n.value;return e}let x;function _(t){x=t}function k(){if(!x)throw new Error("Function called outside component initialization");return x}function E(){const t=k();return(e,n)=>{const s=t.$$.callbacks[e];if(s){const o=function(t,e,n=!1){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,!1,e),s}(e,n);s.slice().forEach((e=>{e.call(t,o)}))}}}function I(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const N=[],C=[],S=[],A=[],M=Promise.resolve();let P=!1;function D(t){S.push(t)}function O(t){A.push(t)}let z=!1;const L=new Set;function j(){if(!z){z=!0;do{for(let t=0;t<N.length;t+=1){const e=N[t];_(e),R(e.$$)}for(_(null),N.length=0;C.length;)C.pop()();for(let t=0;t<S.length;t+=1){const e=S[t];L.has(e)||(L.add(e),e())}S.length=0}while(N.length);for(;A.length;)A.pop()();P=!1,z=!1,L.clear()}}function R(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}const F=new Set;let T,U;function V(){T={r:0,c:[],p:T}}function H(){T.r||s(T.c),T=T.p}function q(t,e){t&&t.i&&(F.delete(t),t.i(e))}function B(t,e,n,s){if(t&&t.o){if(F.has(t))return;F.add(t),T.c.push((()=>{F.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function Y(t,e){t.d(1),e.delete(t.key)}function G(t,e){B(t,1,1,(()=>{e.delete(t.key)}))}function J(t,e,n,s,o,i,l,r,a,c,u,d){let p=t.length,f=i.length,m=p;const h={};for(;m--;)h[t[m].key]=m;const b=[],g=new Map,$=new Map;for(m=f;m--;){const t=d(o,i,m),r=n(t);let a=l.get(r);a?s&&a.p(t,e):(a=c(r,t),a.c()),g.set(r,b[m]=a),r in h&&$.set(r,Math.abs(m-h[r]))}const y=new Set,v=new Set;function w(t){q(t,1),t.m(r,u),l.set(t.key,t),u=t.first,f--}for(;p&&f;){const e=b[f-1],n=t[p-1],s=e.key,o=n.key;e===n?(u=e.first,p--,f--):g.has(o)?!l.has(s)||y.has(s)?w(e):v.has(o)?p--:$.get(s)>$.get(o)?(v.add(s),w(e)):(y.add(o),p--):(a(n,l),p--)}for(;p--;){const e=t[p];g.has(e.key)||a(e,l)}for(;f;)w(b[f-1]);return b}function K(t,e,n){const s=t.$$.props[e];void 0!==s&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function W(t){t&&t.c()}function X(t,n,i,l){const{fragment:r,on_mount:a,on_destroy:c,after_update:u}=t.$$;r&&r.m(n,i),l||D((()=>{const n=a.map(e).filter(o);c?c.push(...n):s(n),t.$$.on_mount=[]})),u.forEach(D)}function Q(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(t,e){-1===t.$$.dirty[0]&&(N.push(t),P||(P=!0,M.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function tt(e,o,i,l,r,c,u,d=[-1]){const p=x;_(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:r,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(p?p.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:o.target||p.$$.root};u&&u(f.root);let m=!1;if(f.ctx=i?i(e,o.props||{},((t,n,...s)=>{const o=s.length?s[0]:n;return f.ctx&&r(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),m&&Z(e,t)),n})):[],f.update(),m=!0,s(f.before_update),f.fragment=!!l&&l(f.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);f.fragment&&f.fragment.l(t),t.forEach(a)}else f.fragment&&f.fragment.c();o.intro&&q(e.$$.fragment),X(e,o.target,o.anchor,o.customElement),j()}_(p)}var et;"function"==typeof HTMLElement&&(U=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(e).filter(o);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){s(this.$$.on_disconnect)}$destroy(){Q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});var nt=new Uint8Array(16);function st(){if(!et&&!(et="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return et(nt)}var ot=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function it(t){return"string"==typeof t&&ot.test(t)}for(var lt,rt,at=[],ct=0;ct<256;++ct)at.push((ct+256).toString(16).substr(1));function ut(t,e,n){var s=(t=t||{}).random||(t.rng||st)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,e){n=n||0;for(var o=0;o<16;++o)e[n+o]=s[o];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(at[t[e+0]]+at[t[e+1]]+at[t[e+2]]+at[t[e+3]]+"-"+at[t[e+4]]+at[t[e+5]]+"-"+at[t[e+6]]+at[t[e+7]]+"-"+at[t[e+8]]+at[t[e+9]]+"-"+at[t[e+10]]+at[t[e+11]]+at[t[e+12]]+at[t[e+13]]+at[t[e+14]]+at[t[e+15]]).toLowerCase();if(!it(n))throw TypeError("Stringified UUID is invalid");return n}(s)}function dt(t){const e=+t;return"number"==typeof e&&!isNaN(e)&&e>=0&&e.toFixed(0)===e.toString()}class pt{constructor(t="nw_"+ut().split("-")[0],e="10.20.0.0/16"){this.name=t,this.ipRange=e}get valid(){const{name:t,ipRange:e}=this;return""!==t&&""!==e}}class ft{constructor(t=ut(),e="SSH_KEY",n="ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDTwULSsUubOq3VPWL6cdrDvexDmjfznGydFPyaNcn7gAL9lRxwFbCDPMj7MbhNSpxxHV2+/iJPQOTVJu4oc1N7bPP3gBCnF51rPrhTpGCt5pBbTzeyNweanhedkKDsCO2mIEh/92Od5Hg512dX4j7Zw6ipRWYSaepapfyoRnNSriW/s3DH/uewezVtL5EuypMdfNngV/u2KZYWoeiwhrY/yEUykQVUwDysW/xUJNP5o+KSTAvNSJatr3FbuCFuCjBSvageOLHePTeUwu6qjqe+Xs4piF1ByO/6cOJ8bt5Vcx0bAtI8/MPApplUU/JWevsPNApvnA/ntffI+u8DCwgP"){this.id=t,this.key=e,this.value=n}get valid(){const{key:t,value:e}=this;return""!==t&&""!==e}}class mt{constructor(t=ut(),e="vm_"+t.split("-")[0],n="https://hub.grid.tf/tf-official-apps/base:latest.flist",s=4,o=8192,i="/sbin/zinit init",l=!0,r,a=25,c=new pt,u=[],d=[],p=!1){this.id=t,this.name=e,this.flist=n,this.cpu=s,this.memory=o,this.entrypoint=i,this.planetary=l,this.nodeId=r,this.rootFsSize=a,this.network=c,this.envs=u,this.disks=d,this.publicIp=p}get valid(){const{name:t,flist:e,cpu:n,memory:s,entrypoint:o,nodeId:i}=this,{rootFsSize:l,network:r,envs:a,disks:c}=this;return""!==t&&""!==e&&""!==o&&dt(n)&&dt(s)&&dt(i)&&dt(l)&&r.valid&&a.reduce(((t,e)=>t&&e.valid),!0)&&c.reduce(((t,e)=>t&&e.valid),!0)}}
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
    ***************************************************************************** */const{NetworkModel:ht}=null!==(rt=null===(lt=window.configs)||void 0===lt?void 0:lt.grid3_client)&&void 0!==rt?rt:{};var bt,gt,$t,yt;const{HTTPMessageBusClient:vt}=null!==(gt=null===(bt=window.configs)||void 0===bt?void 0:bt.client)&&void 0!==gt?gt:{},{DiskModel:wt,MachineModel:xt,MachinesModel:_t,GridClient:kt,GatewayNameModel:Et}=null!==(yt=null===($t=window.configs)||void 0===$t?void 0:$t.grid3_client)&&void 0!==yt?yt:{};async function It(t,e){const{envs:n,disks:s}=t,o=function(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(t);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(t,s[o])&&(n[s[o]]=t[s[o]])}return n}(t,["envs","disks"]),{name:i,flist:l,cpu:r,memory:a,entrypoint:c,network:u}=o,{publicIp:d,planetary:p,nodeId:f,rootFsSize:m}=o,{mnemonics:h,storeSecret:b,networkEnv:g}=e,$=new vt(0,""),y=new kt(g,h,b,$,void 0,"tfkvstore"),v=new xt;v.name=i,v.node_id=f,v.disks=s.map(Nt),v.public_ip=d,v.planetary=p,v.cpu=r,v.memory=a,v.rootfs_size=m,v.flist="https://hub.grid.tf/omar0.3bot/omarelawady-funk-latest.flist",v.entrypoint="/init.sh",v.env={FUNKWHALE_HOSTNAME:i+".gent01.dev.grid.tf"};const w=new _t;w.name=i,w.network=function(t){const e=new ht;return e.name=t.name,e.ip_range=t.ipRange,e}(u),w.machines=[v],await y.connect(),await y.machines.deploy(w);const x=await async function(t,e){return await t.machines.getObj(e)}(y,i),_=x[0].yggIP;await async function(t,e,n){const s=new Et;return s.name=e,s.node_id=8,s.tls_passthrough=!1,s.backends=[`http://[${n}]:80/`],t.gateway.deploy_name(s)}(y,i,_);const k=await async function(t,e){return await t.gateway.getObj(e)}(y,i),E=k[0].domain;console.log(E)}function Nt({name:t,size:e,mountpoint:n}){const s=new wt;return s.name=t,s.size=e,s.mountpoint=n,s}function Ct(e){return{c(){this.c=t},m:t,p:t,i:t,o:t,d:t}}function St(t){var e;const n=null===(e=window.configs)||void 0===e?void 0:e.baseConfig,s=E();let o;var i;return i=()=>{o=n.subscribe((()=>{s("profile",n.getActiveProfile())}))},k().$$.on_mount.push(i),function(t){k().$$.on_destroy.push(t)}((()=>{o()})),[]}class At extends U{constructor(t){super(),tt(this,{target:this.shadowRoot,props:w(this.attributes),customElement:!0},St,Ct,i,{},null),t&&t.target&&r(t.target,this,t.anchor)}}function Mt(t,e,n){const s=t.slice();return s[19]=e[n],s}function Pt(t){let e,n,s;function o(t,e){return null==n&&(n=!!t[3]()),n?zt:"checkbox"===t[1].type?Ot:"select"===t[1].type?Dt:void 0}let i=o(t),u=i&&i(t),p=t[1].tooltip&&qt(t);return{c(){e=c("div"),u&&u.c(),s=d(),p&&p.c(),h(e,"class","tooltip mb-2")},m(t,n){r(t,e,n),u&&u.m(e,null),l(e,s),p&&p.m(e,null)},p(t,n){i===(i=o(t))&&u?u.p(t,n):(u&&u.d(1),u=i&&i(t),u&&(u.c(),u.m(e,s))),t[1].tooltip?p?p.p(t,n):(p=qt(t),p.c(),p.m(e,null)):p&&(p.d(1),p=null)},d(t){t&&a(e),u&&u.d(),p&&p.d()}}}function Dt(t){let e,n,o,i,u,p,m,b,g=[],$=new Map,w=t[1].label&&Lt(t),x=t[1].options;const _=t=>t[19].value;for(let e=0;e<x.length;e+=1){let n=Mt(t,x,e),s=_(n);$.set(s,g[e]=jt(s,n))}let k=t[1].error&&Rt(t);return{c(){w&&w.c(),e=d(),n=c("div"),o=c("select");for(let t=0;t<g.length;t+=1)g[t].c();u=d(),k&&k.c(),o.disabled=i=t[1].disabled,y(o,"width","100%"),void 0===t[0]&&D((()=>t[17].call(o))),h(n,"class",p="select mb-2"+(t[1].error?" is-danger":"")),y(n,"width","100%"),h(n,"id",t[2])},m(s,i){w&&w.m(s,i),r(s,e,i),r(s,n,i),l(n,o);for(let t=0;t<g.length;t+=1)g[t].m(o,null);v(o,t[0]),l(n,u),k&&k.m(n,null),m||(b=[f(o,"change",t[17]),f(o,"change",t[4])],m=!0)},p(t,s){t[1].label?w?w.p(t,s):(w=Lt(t),w.c(),w.m(e.parentNode,e)):w&&(w.d(1),w=null),2&s&&(x=t[1].options,g=J(g,s,_,1,t,x,$,o,Y,jt,null,Mt)),2&s&&i!==(i=t[1].disabled)&&(o.disabled=i),3&s&&v(o,t[0]),t[1].error?k?k.p(t,s):(k=Rt(t),k.c(),k.m(n,null)):k&&(k.d(1),k=null),2&s&&p!==(p="select mb-2"+(t[1].error?" is-danger":""))&&h(n,"class",p)},d(t){w&&w.d(t),t&&a(e),t&&a(n);for(let t=0;t<g.length;t+=1)g[t].d();k&&k.d(),m=!1,s(b)}}}function Ot(t){let e,n,o,i,p,m,b,$,v,w,x,_=t[1].label+"";return{c(){e=c("div"),n=c("label"),o=c("input"),p=d(),m=c("span"),b=d(),$=c("label"),v=u(_),h(o,"class","switch__input"),h(o,"type","checkbox"),h(o,"id",t[2]),o.disabled=i=t[1].disabled,h(m,"class","slider"),h(n,"class","switch"),h($,"for",t[2]),h($,"class","label ml-2"),y($,"cursor","pointer"),y(e,"display","flex"),y(e,"align-items","center"),h(e,"class","mb-2")},m(s,i){r(s,e,i),l(e,n),l(n,o),o.checked=t[0],l(n,p),l(n,m),l(e,b),l(e,$),l($,v),w||(x=[f(o,"change",t[16]),f(o,"input",t[11])],w=!0)},p(t,e){2&e&&i!==(i=t[1].disabled)&&(o.disabled=i),3&e&&(o.checked=t[0]),2&e&&_!==(_=t[1].label+"")&&g(v,_)},d(t){t&&a(e),w=!1,s(x)}}}function zt(t){let e,n,s,o,i,p,f=t[1].label+"";function m(t,e){return"textarea"===t[1].type?Vt:"text"===t[1].type?Ut:"number"===t[1].type?Tt:"password"===t[1].type?Ft:void 0}let b=m(t),$=b&&b(t),y=t[1].error&&Ht(t);return{c(){e=c("div"),n=c("p"),s=u(f),o=d(),i=c("div"),$&&$.c(),p=d(),y&&y.c(),h(n,"class","label"),h(i,"class","control"),h(e,"class","field"),h(e,"id",t[2])},m(t,a){r(t,e,a),l(e,n),l(n,s),l(e,o),l(e,i),$&&$.m(i,null),l(e,p),y&&y.m(e,null)},p(t,n){2&n&&f!==(f=t[1].label+"")&&g(s,f),b===(b=m(t))&&$?$.p(t,n):($&&$.d(1),$=b&&b(t),$&&($.c(),$.m(i,null))),t[1].error?y?y.p(t,n):(y=Ht(t),y.c(),y.m(e,null)):y&&(y.d(1),y=null)},d(t){t&&a(e),$&&$.d(),y&&y.d()}}}function Lt(t){let e,n,s=t[1].label+"";return{c(){e=c("p"),n=u(s),h(e,"class","label")},m(t,s){r(t,e,s),l(e,n)},p(t,e){2&e&&s!==(s=t[1].label+"")&&g(n,s)},d(t){t&&a(e)}}}function jt(t,e){let n,s,o,i,p,f,m=e[19].label+"";return{key:t,first:null,c(){n=c("option"),s=u(m),o=d(),n.__value=i=e[19].value,n.value=n.__value,n.selected=p=e[19].selected,n.disabled=f=e[19].disabled,this.first=n},m(t,e){r(t,n,e),l(n,s),l(n,o)},p(t,o){e=t,2&o&&m!==(m=e[19].label+"")&&g(s,m),2&o&&i!==(i=e[19].value)&&(n.__value=i,n.value=n.__value),2&o&&p!==(p=e[19].selected)&&(n.selected=p),2&o&&f!==(f=e[19].disabled)&&(n.disabled=f)},d(t){t&&a(n)}}}function Rt(t){let e,n,s=t[1].error+"";return{c(){e=c("p"),n=u(s),h(e,"class","help is-danger")},m(t,s){r(t,e,s),l(e,n)},p(t,e){2&e&&s!==(s=t[1].error+"")&&g(n,s)},d(t){t&&a(e)}}}function Ft(t){let e,n,o,i,l,u;return{c(){e=c("input"),h(e,"type","password"),h(e,"class",n="input"+(t[1].error?" is-danger":"")),h(e,"placeholder",o=t[1].placeholder),e.disabled=i=t[1].disabled},m(n,s){r(n,e,s),$(e,t[0]),l||(u=[f(e,"input",t[15]),f(e,"input",t[10])],l=!0)},p(t,s){2&s&&n!==(n="input"+(t[1].error?" is-danger":""))&&h(e,"class",n),2&s&&o!==(o=t[1].placeholder)&&h(e,"placeholder",o),2&s&&i!==(i=t[1].disabled)&&(e.disabled=i),3&s&&e.value!==t[0]&&$(e,t[0])},d(t){t&&a(e),l=!1,s(u)}}}function Tt(t){let e,n,o,i,l,u;return{c(){e=c("input"),h(e,"type","number"),h(e,"class",n="input"+(t[1].error?" is-danger":"")),h(e,"placeholder",o=t[1].placeholder),e.disabled=i=t[1].disabled},m(n,s){r(n,e,s),$(e,t[0]),l||(u=[f(e,"input",t[14]),f(e,"input",t[9])],l=!0)},p(t,s){2&s&&n!==(n="input"+(t[1].error?" is-danger":""))&&h(e,"class",n),2&s&&o!==(o=t[1].placeholder)&&h(e,"placeholder",o),2&s&&i!==(i=t[1].disabled)&&(e.disabled=i),3&s&&b(e.value)!==t[0]&&$(e,t[0])},d(t){t&&a(e),l=!1,s(u)}}}function Ut(t){let e,n,o,i,l,u;return{c(){e=c("input"),h(e,"type","text"),h(e,"class",n="input"+(t[1].error?" is-danger":"")),h(e,"placeholder",o=t[1].placeholder),e.disabled=i=t[1].disabled},m(n,s){r(n,e,s),$(e,t[0]),l||(u=[f(e,"input",t[13]),f(e,"input",t[8])],l=!0)},p(t,s){2&s&&n!==(n="input"+(t[1].error?" is-danger":""))&&h(e,"class",n),2&s&&o!==(o=t[1].placeholder)&&h(e,"placeholder",o),2&s&&i!==(i=t[1].disabled)&&(e.disabled=i),3&s&&e.value!==t[0]&&$(e,t[0])},d(t){t&&a(e),l=!1,s(u)}}}function Vt(t){let e,n,o,i,l,u;return{c(){e=c("textarea"),h(e,"class",n="textarea"+(t[1].error?" is-danger":"")),h(e,"placeholder",o=t[1].placeholder),e.disabled=i=t[1].disabled},m(n,s){r(n,e,s),$(e,t[0]),l||(u=[f(e,"input",t[12]),f(e,"input",t[7])],l=!0)},p(t,s){2&s&&n!==(n="textarea"+(t[1].error?" is-danger":""))&&h(e,"class",n),2&s&&o!==(o=t[1].placeholder)&&h(e,"placeholder",o),2&s&&i!==(i=t[1].disabled)&&(e.disabled=i),3&s&&$(e,t[0])},d(t){t&&a(e),l=!1,s(u)}}}function Ht(t){let e,n,s=t[1].error+"";return{c(){e=c("p"),n=u(s),h(e,"class","help is-danger")},m(t,s){r(t,e,s),l(e,n)},p(t,e){2&e&&s!==(s=t[1].error+"")&&g(n,s)},d(t){t&&a(e)}}}function qt(t){let e,n,s=t[1].tooltip+"";return{c(){e=c("span"),n=u(s),h(e,"class","tooltip__text")},m(t,s){r(t,e,s),l(e,n)},p(t,e){2&e&&s!==(s=t[1].tooltip+"")&&g(n,s)},d(t){t&&a(e)}}}function Bt(e){let n,s,o,i=e[1]&&Pt(e);return{c(){n=c("div"),s=d(),i&&i.c(),o=p(),this.c=t},m(t,l){r(t,n,l),n.innerHTML=e[5],r(t,s,l),i&&i.m(t,l),r(t,o,l)},p(t,[e]){t[1]?i?i.p(t,e):(i=Pt(t),i.c(),i.m(o.parentNode,o)):i&&(i.d(1),i=null)},i:t,o:t,d(t){t&&a(n),t&&a(s),i&&i.d(t),t&&a(o)}}}function Yt(t,e,n){const s=E();let{field:o}=e,{data:i}=e,{selected:l=0}=e;const r=ut();return t.$$set=t=>{"field"in t&&n(1,o=t.field),"data"in t&&n(0,i=t.data),"selected"in t&&n(6,l=t.selected)},[i,o,r,()=>["text","number","password","textarea"].includes(o.type),function(t){s("input");const e=t.target;n(6,l=e.selectedIndex)},'\n<style>\n  .switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n  }\n\n  .switch .switch__input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n\n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n    border-radius: 34px;\n  }\n\n  .slider:before {\n    position: absolute;\n    content: "";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n    border-radius: 50%;\n  }\n\n  .switch__input:checked + .slider {\n    background-color: #2196f3;\n  }\n\n  .switch__input:checked + .slider {\n    box-shadow: 0 0 1px #2196f3;\n  }\n\n  .switch__input:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n  }\n\n  .tooltip {\n    position: relative;\n  }\n\n  .tooltip__text {\n    position: absolute;\n    top: -20px;\n    left: 50%;\n    padding: 10px 15px;\n    border-radius: 5px;\n    background-color: rgba(51, 51, 51, 0.9);\n    color: white;\n    z-index: 9;\n    max-width: min(1000px, calc(100% - 30px));\n    display: block;\n\n    transition-property: opacity, transform, visibility;\n    transition-timing-function: ease;\n    transition-duration: 300ms;\n    pointer-events: none;\n    opacity: 0;\n    visibility: hidden;\n    transform: translateX(-50%) translateY(20px) scale(0);\n  }\n\n  .tooltip:hover > .tooltip__text {\n    pointer-events: all;\n    opacity: 1;\n    visibility: visible;\n    transform: translateX(-50%) translateY(0) scale(1);\n  }\n</style>\n',l,function(e){I.call(this,t,e)},function(e){I.call(this,t,e)},function(e){I.call(this,t,e)},function(e){I.call(this,t,e)},function(e){I.call(this,t,e)},function(){i=this.value,n(0,i),n(1,o)},function(){i=this.value,n(0,i),n(1,o)},function(){i=b(this.value),n(0,i),n(1,o)},function(){i=this.value,n(0,i),n(1,o)},function(){i=this.checked,n(0,i),n(1,o)},function(){i=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(0,i),n(1,o)}]}customElements.define("tf-select-profile",At);class Gt extends U{constructor(t){super(),tt(this,{target:this.shadowRoot,props:w(this.attributes),customElement:!0},Yt,Bt,i,{field:1,data:0,selected:6},null),t&&(t.target&&r(t.target,this,t.anchor),t.props&&(this.$set(t.props),j()))}static get observedAttributes(){return["field","data","selected"]}get field(){return this.$$.ctx[1]}set field(t){this.$$set({field:t}),j()}get data(){return this.$$.ctx[0]}set data(t){this.$$set({data:t}),j()}get selected(){return this.$$.ctx[6]}set selected(t){this.$$set({selected:t}),j()}}function Jt(t,e,n){const s=t.slice();return s[6]=e[n],s[8]=n,s}function Kt(t){let e,n=[],s=new Map,o=t[1];const i=t=>t[6].label;for(let e=0;e<o.length;e+=1){let l=Jt(t,o,e),r=i(l);s.set(r,n[e]=Xt(r,l))}return{c(){for(let t=0;t<n.length;t+=1)n[t].c();e=p()},m(t,s){for(let e=0;e<n.length;e+=1)n[e].m(t,s);r(t,e,s)},p(t,l){27&l&&(o=t[1],n=J(n,l,i,1,t,o,s,e.parentNode,Y,Xt,e,Jt))},d(t){for(let e=0;e<n.length;e+=1)n[e].d(t);t&&a(e)}}}function Wt(t){let e,n,s;return{c(){e=c("button"),h(e,"class","ml-2 is-small delete")},m(i,l){var a;r(i,e,l),n||(s=f(e,"click",(a=m((function(){o(t[3](t[8]))&&t[3](t[8]).apply(this,arguments)})),function(t){return t.stopPropagation(),a.call(this,t)})),n=!0)},p(e,n){t=e},d(t){t&&a(e),n=!1,s()}}}function Xt(t,e){let n,s,i,p,b,$,y,v,w,x=e[6].label+"",_=e[6].removable&&Wt(e);return{key:t,first:null,c(){n=c("li"),s=c("a"),i=c("span"),p=u(x),b=d(),_&&_.c(),$=d(),h(s,"href","#!"),h(n,"class",y=e[0]===e[6].value?"is-active":""),this.first=n},m(t,a){r(t,n,a),l(n,s),l(s,i),l(i,p),l(s,b),_&&_.m(s,null),l(n,$),v||(w=f(s,"click",m((function(){o(e[4].bind(void 0,e[6].value))&&e[4].bind(void 0,e[6].value).apply(this,arguments)}))),v=!0)},p(t,o){e=t,2&o&&x!==(x=e[6].label+"")&&g(p,x),e[6].removable?_?_.p(e,o):(_=Wt(e),_.c(),_.m(s,null)):_&&(_.d(1),_=null),3&o&&y!==(y=e[0]===e[6].value?"is-active":"")&&h(n,"class",y)},d(t){t&&a(n),_&&_.d(),v=!1,w()}}}function Qt(e){let n,s,o,i=e[1]&&Kt(e);return{c(){n=c("div"),s=c("ul"),i&&i.c(),this.c=t,h(n,"class",o="tabs "+(e[2]?"is-centered":""))},m(t,e){r(t,n,e),l(n,s),i&&i.m(s,null)},p(t,[e]){t[1]?i?i.p(t,e):(i=Kt(t),i.c(),i.m(s,null)):i&&(i.d(1),i=null),4&e&&o!==(o="tabs "+(t[2]?"is-centered":""))&&h(n,"class",o)},i:t,o:t,d(t){t&&a(n),i&&i.d()}}}function Zt(t,e,n){const s=E();let{tabs:o}=e,{active:i}=e,{centered:l=!0}=e;return t.$$set=t=>{"tabs"in t&&n(1,o=t.tabs),"active"in t&&n(0,i=t.active),"centered"in t&&n(2,l=t.centered)},[i,o,l,t=>()=>s("removed",t),function(t){i!==t&&(n(0,i=t),s("select",t))}]}customElements.define("tf-input",Gt);class te extends U{constructor(t){super(),this.shadowRoot.innerHTML='<style>@import url("https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css");</style>',tt(this,{target:this.shadowRoot,props:w(this.attributes),customElement:!0},Zt,Qt,i,{tabs:1,active:0,centered:2},null),t&&(t.target&&r(t.target,this,t.anchor),t.props&&(this.$set(t.props),j()))}static get observedAttributes(){return["tabs","active","centered"]}get tabs(){return this.$$.ctx[1]}set tabs(t){this.$$set({tabs:t}),j()}get active(){return this.$$.ctx[0]}set active(t){this.$$set({active:t}),j()}get centered(){return this.$$.ctx[2]}set centered(t){this.$$set({centered:t}),j()}}var ee,ne;customElements.define("tf-tabs",te);const{GridClient:se,Nodes:oe}=null!==(ne=null===(ee=window.configs)||void 0===ee?void 0:ee.grid3_client)&&void 0!==ne?ne:{};var ie,le;const{GridClient:re}=null!==(le=null===(ie=window.configs)||void 0===ie?void 0:ie.grid3_client)&&void 0!==le?le:{};function ae(t,e,n={}){const{networkEnv:s}=t,o=new re("","","",null),{graphql:i}=o.getDefaultUrls(s);return fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e,variables:n})}).then((t=>t.json())).then((({data:t})=>t))}function ce(t,e,n){const s=t.slice();return s[21]=e[n],s[22]=e,s[23]=n,s}function ue(t){let e,n,s;function o(e){t[18](e)}let i={field:{label:"Node ID",symbol:"nodeId",type:"number",placeholder:"Your Node ID",error:t[1]}};return void 0!==t[0]&&(i.data=t[0]),e=new Gt({props:i}),C.push((()=>K(e,"data",o))),{c(){W(e.$$.fragment)},m(t,n){X(e,t,n),s=!0},p(t,s){const o={};2&s&&(o.field={label:"Node ID",symbol:"nodeId",type:"number",placeholder:"Your Node ID",error:t[1]}),!n&&1&s&&(n=!0,o.data=t[0],O((()=>n=!1))),e.$set(o)},i(t){s||(q(e.$$.fragment,t),s=!0)},o(t){B(e.$$.fragment,t),s=!1},d(t){Q(e,t)}}}function de(t){let e,n,s,o,i,p,m,b,g,$,y,v,w=[],x=new Map,_=t[3];const k=t=>t[21].symbol;for(let e=0;e<_.length;e+=1){let n=ce(t,_,e),s=k(n);x.set(s,w[e]=pe(s,n))}function E(e){t[17](e)}let I={field:t[4]};return void 0!==t[0]&&(I.data=t[0]),b=new Gt({props:I}),C.push((()=>K(b,"data",E))),{c(){e=c("h5"),e.textContent="Nodes Filter",n=d();for(let t=0;t<w.length;t+=1)w[t].c();s=d(),o=c("button"),i=u("Apply Filters"),m=d(),W(b.$$.fragment),h(e,"class","is-size-5 has-text-weight-bold"),h(o,"class",p="button is-primary mt-2 "+(t[6]?"is-loading":"")),o.disabled=t[6],h(o,"type","button")},m(a,c){r(a,e,c),r(a,n,c);for(let t=0;t<w.length;t+=1)w[t].m(a,c);r(a,s,c),r(a,o,c),l(o,i),r(a,m,c),X(b,a,c),$=!0,y||(v=f(o,"click",t[8]),y=!0)},p(t,e){40&e&&(_=t[3],V(),w=J(w,e,k,1,t,_,x,s.parentNode,G,pe,s,ce),H()),(!$||64&e&&p!==(p="button is-primary mt-2 "+(t[6]?"is-loading":"")))&&h(o,"class",p),(!$||64&e)&&(o.disabled=t[6]);const n={};16&e&&(n.field=t[4]),!g&&1&e&&(g=!0,n.data=t[0],O((()=>g=!1))),b.$set(n)},i(t){if(!$){for(let t=0;t<_.length;t+=1)q(w[t]);q(b.$$.fragment,t),$=!0}},o(t){for(let t=0;t<w.length;t+=1)B(w[t]);B(b.$$.fragment,t),$=!1},d(t){t&&a(e),t&&a(n);for(let e=0;e<w.length;e+=1)w[e].d(t);t&&a(s),t&&a(o),t&&a(m),Q(b,t),y=!1,v()}}}function pe(t,e){let n,s,o,i;function l(t){e[16](t,e[21])}let c={field:e[21]};return void 0!==e[5][e[21].symbol]&&(c.data=e[5][e[21].symbol]),s=new Gt({props:c}),C.push((()=>K(s,"data",l))),{key:t,first:null,c(){n=p(),W(s.$$.fragment),this.first=n},m(t,e){r(t,n,e),X(s,t,e),i=!0},p(t,n){e=t;const i={};8&n&&(i.field=e[21]),!o&&40&n&&(o=!0,i.data=e[5][e[21].symbol],O((()=>o=!1))),s.$set(i)},i(t){i||(q(s.$$.fragment,t),i=!0)},o(t){B(s.$$.fragment,t),i=!1},d(t){t&&a(n),Q(s,t)}}}function fe(e){let n,s,o,i,l,c,u;function f(t){e[15](t)}let m={field:e[7]};void 0!==e[2]&&(m.data=e[2]),n=new Gt({props:m}),C.push((()=>K(n,"data",f)));const h=[de,ue],b=[];function g(t,e){return"automatic"===t[2]?0:"manual"===t[2]?1:-1}return~(i=g(e))&&(l=b[i]=h[i](e)),{c(){W(n.$$.fragment),o=d(),l&&l.c(),c=p(),this.c=t},m(t,e){X(n,t,e),r(t,o,e),~i&&b[i].m(t,e),r(t,c,e),u=!0},p(t,[e]){const o={};!s&&4&e&&(s=!0,o.data=t[2],O((()=>s=!1))),n.$set(o);let r=i;i=g(t),i===r?~i&&b[i].p(t,e):(l&&(V(),B(b[r],1,1,(()=>{b[r]=null})),H()),~i?(l=b[i],l?l.p(t,e):(l=b[i]=h[i](t),l.c()),q(l,1),l.m(c.parentNode,c)):l=null)},i(t){u||(q(n.$$.fragment,t),q(l),u=!0)},o(t){B(n.$$.fragment,t),B(l),u=!1},d(t){Q(n,t),t&&a(o),~i&&b[i].d(t),t&&a(c)}}}function me(t,e,n){let{cpu:s}=e,{memory:o}=e,{ssd:i}=e,{publicIp:l}=e,{error:r=null}=e;const a=[{label:"Farm Name",symbol:"farmName",type:"select",placeholder:"Enter farm name",options:[{label:"Please select a farm",value:null,selected:!0}]},{label:"Country",symbol:"country",type:"select",placeholder:"Enter a country name",options:[{label:"Please select a country",value:null,selected:!0}]},{label:"CPU (Cores)",symbol:"cru",type:"number",placeholder:"Enter CPU"},{label:"Memory (GB)",symbol:"mru",type:"number",placeholder:"Enter Memory"},{label:"SSD (GB)",symbol:"sru",type:"number",placeholder:"Enter SSD size"}],c={label:"Node ID",type:"select",symbol:"nodeId",options:[{label:"Please select a node id.",value:null,selected:!0,disabled:!0}]};let u=null;const d={publicIPs:null,country:null,farmName:null,cru:null,mru:null,sru:null};let{profile:p}=e,f=!1;let m,{data:h}=e;function b(t,e="Loading..."){const s=a[t].options[0].label;return n(3,a[t].options[0].label=e,a),s}function g(t,e){const[s]=a[t].options;n(3,a[t].options=e.reduce(((t,{name:e,code:n})=>{const s={label:e,value:n||e};return t.push(s),t}),[s]),a)}return t.$$set=t=>{"cpu"in t&&n(9,s=t.cpu),"memory"in t&&n(10,o=t.memory),"ssd"in t&&n(11,i=t.ssd),"publicIp"in t&&n(12,l=t.publicIp),"error"in t&&n(1,r=t.error),"profile"in t&&n(13,p=t.profile),"data"in t&&n(0,h=t.data)},t.$$.update=()=>{if(7680&t.$$.dirty&&(s&&n(5,d.cru=s,d),o&&n(5,d.mru=Math.round(o/1024),d),i&&n(5,d.sru=i,d),n(5,d.publicIPs=l,d)),24580&t.$$.dirty&&"automatic"===u&&p&&p.networkEnv!==m){n(14,m=p.networkEnv);const t=b(0),e=b(1);(function(t){return ae(t,"\nquery GetLimits {\n    farms: farmsConnection { farms_limit: totalCount }\n    countries: countriesConnection { countries_limit: totalCount }\n}\n").then((({farms:{farms_limit:t},countries:{countries_limit:e}})=>({farms_limit:t,countries_limit:e}))).then((e=>ae(t,"\nquery GetData($farms_limit: Int!, $countries_limit: Int!) {\n    farms(limit: $farms_limit) { name }\n    countries(limit: $countries_limit) { name code }\n}\n",e)))})(p).then((({farms:t,countries:e})=>{g(0,t),g(1,e)})).catch((t=>{console.log("Error",t)})).finally((()=>{b(0,t),b(1,e)}))}},[h,r,u,a,c,d,f,{label:"Node Selection",type:"select",symbol:"value",options:[{label:"Choose a way to select node",value:null,selected:!0,disabled:!0},{label:"Automatic",value:"automatic"},{label:"Manual",value:"manual"}]},function(){n(6,f=!0);const t=c.options[0].label;n(4,c.options[0].label="Loading...",c),function(t,e){return new Promise((async n=>{const{networkEnv:s}=e,o=new se("","","",null),{graphql:i,rmbProxy:l}=o.getDefaultUrls(s),r=new oe(i,l);try{n((await r.filterNodes(t)).map((t=>({label:`NodeID(${t.nodeId})`,value:t.nodeId}))))}catch(t){console.log("Error findNodes",t),n([])}}))}(d,p).then((e=>{n(4,c.options[0].label=t,c);const[s]=c.options;e.unshift(s),n(4,c.options=e,c)})).catch((t=>{console.log("Error",t)})).finally((()=>{n(6,f=!1),n(4,c.options[0].label=t,c)}))},s,o,i,l,p,m,function(t){u=t,n(2,u)},function(e,r){t.$$.not_equal(d[r.symbol],e)&&(d[r.symbol]=e,n(5,d),n(9,s),n(10,o),n(11,i),n(12,l))},function(t){h=t,n(0,h)},function(t){h=t,n(0,h)}]}class he extends U{constructor(t){super(),tt(this,{target:this.shadowRoot,props:w(this.attributes),customElement:!0},me,fe,i,{cpu:9,memory:10,ssd:11,publicIp:12,error:1,profile:13,data:0},null),t&&(t.target&&r(t.target,this,t.anchor),t.props&&(this.$set(t.props),j()))}static get observedAttributes(){return["cpu","memory","ssd","publicIp","error","profile","data"]}get cpu(){return this.$$.ctx[9]}set cpu(t){this.$$set({cpu:t}),j()}get memory(){return this.$$.ctx[10]}set memory(t){this.$$set({memory:t}),j()}get ssd(){return this.$$.ctx[11]}set ssd(t){this.$$set({ssd:t}),j()}get publicIp(){return this.$$.ctx[12]}set publicIp(t){this.$$set({publicIp:t}),j()}get error(){return this.$$.ctx[1]}set error(t){this.$$set({error:t}),j()}get profile(){return this.$$.ctx[13]}set profile(t){this.$$set({profile:t}),j()}get data(){return this.$$.ctx[0]}set data(t){this.$$set({data:t}),j()}}function be(t){let e;return{c(){e=u("Deploy")},m(t,n){r(t,e,n)},d(t){t&&a(e)}}}function ge(t){let e;return{c(){e=u("Back")},m(t,n){r(t,e,n)},d(t){t&&a(e)}}}function $e(e){let n,s,o,i,u;function d(t,e){return t[1]||t[2]?ge:be}let p=d(e),m=p(e);return{c(){n=c("div"),s=c("button"),m.c(),this.c=t,h(s,"class",o="button is-primary "+(e[0]?"is-loading":"")),h(s,"type","submit"),s.disabled=e[3],h(n,"class","is-flex is-justify-content-flex-end is-align-items-center")},m(t,o){r(t,n,o),l(n,s),m.m(s,null),i||(u=f(s,"click",e[4]),i=!0)},p(t,[e]){p!==(p=d(t))&&(m.d(1),m=p(t),m&&(m.c(),m.m(s,null))),1&e&&o!==(o="button is-primary "+(t[0]?"is-loading":""))&&h(s,"class",o),8&e&&(s.disabled=t[3])},i:t,o:t,d(t){t&&a(n),m.d(),i=!1,u()}}}function ye(t,e,n){let{loading:s}=e,{success:o}=e,{failed:i}=e,{disabled:l}=e;return t.$$set=t=>{"loading"in t&&n(0,s=t.loading),"success"in t&&n(1,o=t.success),"failed"in t&&n(2,i=t.failed),"disabled"in t&&n(3,l=t.disabled)},[s,o,i,l,function(e){I.call(this,t,e)}]}customElements.define("tf-select-node-id",he);class ve extends U{constructor(t){super(),tt(this,{target:this.shadowRoot,props:w(this.attributes),customElement:!0},ye,$e,i,{loading:0,success:1,failed:2,disabled:3},null),t&&(t.target&&r(t.target,this,t.anchor),t.props&&(this.$set(t.props),j()))}static get observedAttributes(){return["loading","success","failed","disabled"]}get loading(){return this.$$.ctx[0]}set loading(t){this.$$set({loading:t}),j()}get success(){return this.$$.ctx[1]}set success(t){this.$$set({success:t}),j()}get failed(){return this.$$.ctx[2]}set failed(t){this.$$set({failed:t}),j()}get disabled(){return this.$$.ctx[3]}set disabled(t){this.$$set({disabled:t}),j()}}function we(e){let n,s,o;return{c(){n=c("div"),s=u(e[1]),this.c=t,h(n,"class",o="notification is-"+e[0])},m(t,e){r(t,n,e),l(n,s)},p(t,[e]){2&e&&g(s,t[1]),1&e&&o!==(o="notification is-"+t[0])&&h(n,"class",o)},i:t,o:t,d(t){t&&a(n)}}}function xe(t,e,n){let{type:s}=e,{message:o}=e;return t.$$set=t=>{"type"in t&&n(0,s=t.type),"message"in t&&n(1,o=t.message)},[s,o]}customElements.define("tf-deploy-btn",ve);class _e extends U{constructor(t){super(),this.shadowRoot.innerHTML='<style>@import url("https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css");</style>',tt(this,{target:this.shadowRoot,props:w(this.attributes),customElement:!0},xe,we,i,{type:0,message:1},null),t&&(t.target&&r(t.target,this,t.anchor),t.props&&(this.$set(t.props),j()))}static get observedAttributes(){return["type","message"]}get type(){return this.$$.ctx[0]}set type(t){this.$$set({type:t}),j()}get message(){return this.$$.ctx[1]}set message(t){this.$$set({message:t}),j()}}function ke(t,e,n){const s=t.slice();return s[24]=e[n],s[25]=e,s[26]=n,s}function Ee(t){let e,n,s,o,i,l,c;function u(e){t[14](e)}e=new At({}),e.$on("profile",t[13]);let f={tabs:t[9]};void 0!==t[5]&&(f.active=t[5]),s=new te({props:f}),C.push((()=>K(s,"active",u)));let m="config"===t[5]&&Se(t);return{c(){W(e.$$.fragment),n=d(),W(s.$$.fragment),i=d(),m&&m.c(),l=p()},m(t,o){X(e,t,o),r(t,n,o),X(s,t,o),r(t,i,o),m&&m.m(t,o),r(t,l,o),c=!0},p(t,e){const n={};!o&&32&e&&(o=!0,n.active=t[5],O((()=>o=!1))),s.$set(n),"config"===t[5]?m?(m.p(t,e),32&e&&q(m,1)):(m=Se(t),m.c(),q(m,1),m.m(l.parentNode,l)):m&&(V(),B(m,1,1,(()=>{m=null})),H())},i(t){c||(q(e.$$.fragment,t),q(s.$$.fragment,t),q(m),c=!0)},o(t){B(e.$$.fragment,t),B(s.$$.fragment,t),B(m),c=!1},d(t){Q(e,t),t&&a(n),Q(s,t),t&&a(i),m&&m.d(t),t&&a(l)}}}function Ie(t){let e,n;return e=new _e({props:{type:"danger",message:t[7]||"Failed to deploy VM."}}),{c(){W(e.$$.fragment)},m(t,s){X(e,t,s),n=!0},p(t,n){const s={};128&n&&(s.message=t[7]||"Failed to deploy VM."),e.$set(s)},i(t){n||(q(e.$$.fragment,t),n=!0)},o(t){B(e.$$.fragment,t),n=!1},d(t){Q(e,t)}}}function Ne(e){let n,s;return n=new _e({props:{type:"success",message:"Successfully deployed VM."}}),{c(){W(n.$$.fragment)},m(t,e){X(n,t,e),s=!0},p:t,i(t){s||(q(n.$$.fragment,t),s=!0)},o(t){B(n.$$.fragment,t),s=!1},d(t){Q(n,t)}}}function Ce(t){let e,n;return e=new _e({props:{type:"info",message:t[7]||"Loading..."}}),{c(){W(e.$$.fragment)},m(t,s){X(e,t,s),n=!0},p(t,n){const s={};128&n&&(s.message=t[7]||"Loading..."),e.$set(s)},i(t){n||(q(e.$$.fragment,t),n=!0)},o(t){B(e.$$.fragment,t),n=!1},d(t){Q(e,t)}}}function Se(t){let e,n,s,o,i,l,c,u=[],p=new Map;function f(e){t[15](e)}let m={field:t[6]};void 0!==t[0].name&&(m.data=t[0].name),e=new Gt({props:m}),C.push((()=>K(e,"data",f))),e.$on("input",t[12]);let h=t[10];const b=t=>t[24].symbol;for(let e=0;e<h.length;e+=1){let n=ke(t,h,e),s=b(n);p.set(s,u[e]=Ae(s,n))}function g(e){t[17](e)}let $={cpu:t[0].cpu,memory:t[0].memory,ssd:t[0].disks.reduce(Pe,t[0].rootFsSize),profile:t[1]};return void 0!==t[0].nodeId&&($.data=t[0].nodeId),i=new he({props:$}),C.push((()=>K(i,"data",g))),{c(){W(e.$$.fragment),s=d();for(let t=0;t<u.length;t+=1)u[t].c();o=d(),W(i.$$.fragment)},m(t,n){X(e,t,n),r(t,s,n);for(let e=0;e<u.length;e+=1)u[e].m(t,n);r(t,o,n),X(i,t,n),c=!0},p(t,s){const r={};64&s&&(r.field=t[6]),!n&&1&s&&(n=!0,r.data=t[0].name,O((()=>n=!1))),e.$set(r),1025&s&&(h=t[10],V(),u=J(u,s,b,1,t,h,p,o.parentNode,G,Ae,o,ke),H());const a={};1&s&&(a.cpu=t[0].cpu),1&s&&(a.memory=t[0].memory),1&s&&(a.ssd=t[0].disks.reduce(Pe,t[0].rootFsSize)),2&s&&(a.profile=t[1]),!l&&1&s&&(l=!0,a.data=t[0].nodeId,O((()=>l=!1))),i.$set(a)},i(t){if(!c){q(e.$$.fragment,t);for(let t=0;t<h.length;t+=1)q(u[t]);q(i.$$.fragment,t),c=!0}},o(t){B(e.$$.fragment,t);for(let t=0;t<u.length;t+=1)B(u[t]);B(i.$$.fragment,t),c=!1},d(t){Q(e,t),t&&a(s);for(let e=0;e<u.length;e+=1)u[e].d(t);t&&a(o),Q(i,t)}}}function Ae(t,e){let n,s,o,i;function l(t){e[16](t,e[24])}let c={field:e[24]};return void 0!==e[0][e[24].symbol]&&(c.data=e[0][e[24].symbol]),s=new Gt({props:c}),C.push((()=>K(s,"data",l))),{key:t,first:null,c(){n=p(),W(s.$$.fragment),this.first=n},m(t,e){r(t,n,e),X(s,t,e),i=!0},p(t,n){e=t;const i={};!o&&1025&n&&(o=!0,i.data=e[0][e[24].symbol],O((()=>o=!1))),s.$set(i)},i(t){i||(q(s.$$.fragment,t),i=!0)},o(t){B(s.$$.fragment,t),i=!1},d(t){t&&a(n),Q(s,t)}}}function Me(e){let n,s,o,i,u,p,b,g,$,v,w,x,_;const k=[Ce,Ne,Ie,Ee],E=[];function I(t,e){return t[2]?0:t[3]?1:t[4]?2:3}return b=I(e),g=E[b]=k[b](e),v=new ve({props:{disabled:e[8],loading:e[2],failed:e[4],success:e[3]}}),v.$on("click",e[18]),{c(){n=c("div"),s=c("form"),o=c("h4"),o.textContent="Deploy a Funkwhale Instance",i=d(),u=c("hr"),p=d(),g.c(),$=d(),W(v.$$.fragment),this.c=t,h(o,"class","is-size-4"),h(s,"class","box"),y(n,"padding","15px")},m(t,a){r(t,n,a),l(n,s),l(s,o),l(s,i),l(s,u),l(s,p),E[b].m(s,null),l(s,$),X(v,s,null),w=!0,x||(_=f(s,"submit",m(e[11])),x=!0)},p(t,[e]){let n=b;b=I(t),b===n?E[b].p(t,e):(V(),B(E[n],1,1,(()=>{E[n]=null})),H(),g=E[b],g?g.p(t,e):(g=E[b]=k[b](t),g.c()),q(g,1),g.m(s,$));const o={};256&e&&(o.disabled=t[8]),4&e&&(o.loading=t[2]),16&e&&(o.failed=t[4]),8&e&&(o.success=t[3]),v.$set(o)},i(t){w||(q(g),q(v.$$.fragment,t),w=!0)},o(t){B(g),B(v.$$.fragment,t),w=!1},d(t){t&&a(n),E[b].d(),Q(v),x=!1,_()}}}customElements.define("tf-alert",_e);const Pe=(t,e)=>t+e.size;function De(t,e,n){let s;var o,i,l;const{events:r}=null!==(i=null===(o=window.configs)||void 0===o?void 0:o.grid3_client)&&void 0!==i?i:{},a=new mt(void 0,void 0,"https://hub.grid.tf/omar0.3bot/omarelawady-funk-latest.flist"),c=null===(l=window.configs)||void 0===l?void 0:l.deploymentStore;let u,d="config",p=!1,f=!1,m=!1;const h={label:"Name",placeholder:"Virtual Machine Name",symbol:"name",type:"text"};let b;return t.$$.update=()=>{31&t.$$.dirty&&n(8,s=(p||!a.valid)&&!(f||m)||!u||!a.name.match(/^[0-9a-zA-Z]+$/))},[a,u,p,f,m,d,h,b,s,[{label:"Config",value:"config"}],[{label:"CPU",symbol:"cpu",placeholder:"Your Cpu size.",type:"number"},{label:"Memory",symbol:"memory",placeholder:"Your Memory size.",type:"number"},{label:"Public IP",symbol:"publicIp",placeholder:"",type:"checkbox"},{label:"Planetary",symbol:"planetary",placeholder:"",type:"checkbox"}],function(){function t(t){"string"==typeof t&&n(7,b=t)}n(2,p=!0),n(3,f=!1),n(4,m=!1),n(7,b=void 0),r.addListener("logs",t),It(a,u).then((()=>{c.set(0),n(3,f=!0)})).catch((t=>{n(4,m=!0),n(7,b="string"==typeof t?t:t.message)})).finally((()=>{n(2,p=!1),r.removeListener("logs",t)}))},function(t){const e=t.target;n(6,h.error=e.value.match(/^[0-9a-zA-Z]+$/)?null:"Invalid Name",h)},({detail:t})=>{n(1,u=t),n(0,a.envs[0]=new ft(void 0,"SSH_KEY",t.sshKey),a)},function(t){d=t,n(5,d)},function(e){t.$$.not_equal(a.name,e)&&(a.name=e,n(0,a))},function(e,s){t.$$.not_equal(a[s.symbol],e)&&(a[s.symbol]=e,n(0,a))},function(e){t.$$.not_equal(a.nodeId,e)&&(a.nodeId=e,n(0,a))},t=>{(f||m)&&(t.preventDefault(),n(3,f=!1),n(4,m=!1),n(2,p=!1))}]}customElements.define("tf-funkwhale",class extends U{constructor(t){super(),this.shadowRoot.innerHTML='<style>@import url("https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css");</style>',tt(this,{target:this.shadowRoot,props:w(this.attributes),customElement:!0},De,Me,i,{},null),t&&t.target&&r(t.target,this,t.anchor)}})}();
