(function(){"use strict";var e={9543:function(e,t,o){var n=o(9199),i=o(7718),r=o(6281),a=o(9156),c=o(1556),l=o(5101),d=o(11),u=o(6572),s=o(1888),f=o(4075),h=o(1666),m=o(9234),p=o(3289),v=o(6613),w=o(8777),x=o(3140),g=o(2078),V=o(4162);const N={key:0},y={key:1},b={id:"filters"},k=(0,n.createElementVNode)("div",{class:"text-body-1"}," Inbox ",-1),_=(0,n.createElementVNode)("div",{class:"text-body-1"}," Recent Activity ",-1),C={id:"content",class:"scrollbar"},E=(0,n.createElementVNode)("div",{class:"text-h5"}," Courses ",-1),B={class:"section"},T=(0,n.createElementVNode)("div",{class:"text-h5"}," Discussions ",-1),O={class:"text-body-1"},j={class:"text-body-2"},S=(0,n.createElementVNode)("strong",null,"Koding",-1);function D(e,t,o,D,P,L){return(0,n.openBlock)(),(0,n.createBlock)(i.q,null,{default:(0,n.withCtx)((()=>[(0,n.createVNode)(r.L,{flat:"",color:"amber-lighten-2"},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(a.g,{href:"/"},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(p.t,null,{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)(" mdi-home ")])),_:1})])),_:1}),(0,n.createVNode)(c.o,null,{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)(" Koding ")])),_:1}),e.authenticated?((0,n.openBlock)(),(0,n.createElementBlock)("div",N,[(0,n.createVNode)(l.T,{icon:"",density:"compact",class:"mx-2",href:"/browse"},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(p.t,null,{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)(" mdi-compass-outline ")])),_:1})])),_:1}),(0,n.createVNode)(l.T,{icon:"",density:"compact",class:"mx-2",href:"/discussions"},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(p.t,null,{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)(" mdi-forum-outline ")])),_:1})])),_:1}),(0,n.createVNode)(l.T,{icon:"",density:"compact",class:"mx-2",href:"/account"},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(p.t,null,{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)(" mdi-account ")])),_:1})])),_:1}),(0,n.createVNode)(l.T,{icon:"",density:"compact",class:"mx-2 mr-5",href:"/settings"},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(p.t,null,{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)(" mdi-cog-outline ")])),_:1})])),_:1})])):((0,n.openBlock)(),(0,n.createElementBlock)("div",y,[(0,n.createVNode)(l.T,{class:"mx-2",href:"/login"},{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)(" Login ")])),_:1}),(0,n.createVNode)(l.T,{class:"mx-2 mr-5",href:"/signup"},{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)(" Signup ")])),_:1})]))])),_:1}),(0,n.createVNode)(g.V,{app:"",modelValue:e.drawer,"onUpdate:modelValue":t[0]||(t[0]=t=>e.drawer=t),width:"120",elevation:"0",floating:"",color:"amber-lighten-2"},null,8,["modelValue"]),e.authenticated?((0,n.openBlock)(),(0,n.createBlock)(x.O,{key:0,id:"main"},{default:(0,n.withCtx)((()=>[(0,n.createElementVNode)("div",b,[(0,n.createVNode)(d._,{height:"30%",width:"100%",flat:""},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(u.E,null,{default:(0,n.withCtx)((()=>[k])),_:1}),(0,n.createVNode)(f.J),(0,n.createVNode)(s.Z,{style:{height:"calc(100% - 45px)"},class:"overflow-auto scrollbar"},{default:(0,n.withCtx)((()=>[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.notifications,((e,t)=>((0,n.openBlock)(),(0,n.createElementBlock)("div",{class:"text-body-2 notification",key:t},(0,n.toDisplayString)(e),1)))),128))])),_:1})])),_:1}),(0,n.createVNode)(d._,{height:"70%",width:"100%",flat:""},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(u.E,null,{default:(0,n.withCtx)((()=>[_])),_:1}),(0,n.createVNode)(f.J),(0,n.createVNode)(s.Z,{style:{height:"calc(100% - 45px)"},class:"overflow-auto scrollbar"},{default:(0,n.withCtx)((()=>[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.activities,((e,t)=>((0,n.openBlock)(),(0,n.createElementBlock)("div",{class:"text-body-2 notification",key:t},(0,n.toDisplayString)(e),1)))),128))])),_:1})])),_:1})]),(0,n.createElementVNode)("div",C,[(0,n.createVNode)(d._,{"min-height":"100%","min-width":"100%"},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(u.E,null,{default:(0,n.withCtx)((()=>[E,(0,n.createElementVNode)("div",B,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.courses,((e,t)=>((0,n.openBlock)(),(0,n.createBlock)(d._,{key:t,class:"ma-3","min-width":"150px",variant:"tonal",href:"/course/"+e.id},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(V.tj,{"aspect-ratio":30/21},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(u.E,null,{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)((0,n.toDisplayString)(e.title),1)])),_:2},1024),(0,n.createVNode)(m.C)])),_:2},1024)])),_:2},1032,["href"])))),128))]),T,(0,n.createElementVNode)("div",null,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.discussions,((e,t)=>((0,n.openBlock)(),(0,n.createBlock)(v.i,{key:t},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(w.l,{onClick:t=>L.viewDiscussion(e.id)},{default:(0,n.withCtx)((()=>[(0,n.createElementVNode)("div",O,(0,n.toDisplayString)(e.title),1),(0,n.createElementVNode)("div",j,(0,n.toDisplayString)(e.preview),1)])),_:2},1032,["onClick"])])),_:2},1024)))),128))])])),_:1})])),_:1})])])),_:1})):(0,n.createCommentVNode)("",!0),(0,n.createVNode)(h.c,{app:"",color:"amber-lighten-2",class:"d-flex justify-center"},{default:(0,n.withCtx)((()=>[(0,n.createElementVNode)("span",null,[(0,n.createTextVNode)((0,n.toDisplayString)((new Date).getFullYear())+" — ",1),S])])),_:1})])),_:1})}var P=o(8328),L={name:"HomeView",delimiters:["[[","]]"],components:{},data:()=>({drawer:!1,courses:[],discussions:[],notifications:[],activities:[],authenticated:!1}),methods:{viewDiscussion(e){window.location.href=`/discussions?id=${e}`}},mounted(){P.Z.get(window.location.href.replace(window.location.origin,""),{params:{type:"initialization"}}).then((e=>{const t=e.data;this.courses=t.courses,this.discussions=t.discussions,this.notifications=t.notifications,this.authenticated=t.authenticated})).catch((e=>{console.error("An error occurred:",e)}))}},A=o(89);const F=(0,A.Z)(L,[["render",D]]);var Z=F,M=(o(9773),o(8727));let R="dark";var q=(0,M.Rd)({theme:{defaultTheme:R},options:{customProperties:!0}});async function J(){const e=await o.e(461).then(o.t.bind(o,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}J(),(0,n.createApp)(Z).use(q).mount("#app")}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,n,i,r){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],r=e[u][2];for(var c=!0,l=0;l<n.length;l++)(!1&r||a>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(c=!1,r<a&&(a=r));if(c){e.splice(u--,1);var d=i();void 0!==d&&(t=d)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,i,r]}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};o.t=function(n,i){if(1&i&&(n=this(n)),8&i)return n;if("object"===typeof n&&n){if(4&i&&n.__esModule)return n;if(16&i&&"function"===typeof n.then)return n}var r=Object.create(null);o.r(r);var a={};e=e||[null,t({}),t([]),t(t)];for(var c=2&i&&n;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((function(e){a[e]=function(){return n[e]}}));return a["default"]=function(){return n},o.d(r,a),r}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/webfontloader.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="koding:";o.l=function(n,i,r,a){if(e[n])e[n].push(i);else{var c,l;if(void 0!==r)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var s=d[u];if(s.getAttribute("src")==n||s.getAttribute("data-webpack")==t+r){c=s;break}}c||(l=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",t+r),c.src=n),e[n]=[i];var f=function(t,o){c.onerror=c.onload=null,clearTimeout(h);var i=e[n];if(delete e[n],c.parentNode&&c.parentNode.removeChild(c),i&&i.forEach((function(e){return e(o)})),t)return t(o)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),l&&document.head.appendChild(c)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.j=177}(),function(){o.p="/koding/courses/static/src/vue/dist/"}(),function(){var e={177:0};o.f.j=function(t,n){var i=o.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var r=new Promise((function(o,n){i=e[t]=[o,n]}));n.push(i[2]=r);var a=o.p+o.u(t),c=new Error,l=function(n){if(o.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,i[1](c)}};o.l(a,l,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,r,a=n[0],c=n[1],l=n[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(i in c)o.o(c,i)&&(o.m[i]=c[i]);if(l)var u=l(o)}for(t&&t(n);d<a.length;d++)r=a[d],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(u)},n=self["webpackChunkkoding"]=self["webpackChunkkoding"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(9543)}));n=o.O(n)})();
//# sourceMappingURL=home.js.map