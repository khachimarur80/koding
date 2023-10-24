(function(){"use strict";var e={1069:function(e,t,o){var n=o(9199),s=o(7718),i=o(6281),r=o(9156),a=o(1556),c=o(5101),l=o(11),d=o(6572),u=o(1888),f=o(4075),m=o(1666),h=o(3289),p=o(3140),g=o(2078),w=o(4842);const b={style:{"max-width":"200px",overflow:"hidden","text-overflow":"ellipsis"}},v={id:"chat",class:"ma-3"},k={class:"text-h5 text-center pb-3"},y={class:"message-container scrollable"},x={class:"d-flex align-center",style:{width:"100%"}},V={class:"mx-3"},N=(0,n.createElementVNode)("br",null,null,-1),C={class:"text-caption",style:{position:"absolute",bottom:"0px",right:"10px"}},_={id:"message-box",class:"ma-3"},E=(0,n.createElementVNode)("strong",null,"Koding",-1);function T(e,t,o,T,O,j){return(0,n.openBlock)(),(0,n.createBlock)(s.q,null,{default:(0,n.withCtx)((()=>[(0,n.createVNode)(i.L,{flat:"",color:"amber-lighten-2"},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(r.g,{href:"/"},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(h.t,null,{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)(" mdi-home ")])),_:1})])),_:1}),(0,n.createVNode)(a.o,null,{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)(" Koding ")])),_:1}),(0,n.createVNode)(c.T,{icon:"",density:"compact",class:"mx-2",href:"/browse"},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(h.t,null,{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)(" mdi-compass-outline ")])),_:1})])),_:1}),(0,n.createVNode)(c.T,{icon:"",density:"compact",class:"mx-2",href:"/discussions"},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(h.t,null,{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)(" mdi-forum-outline ")])),_:1})])),_:1}),(0,n.createVNode)(c.T,{icon:"",density:"compact",class:"mx-2",href:"/account"},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(h.t,null,{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)(" mdi-account ")])),_:1})])),_:1}),(0,n.createVNode)(c.T,{icon:"",density:"compact",class:"mx-2 mr-5",href:"/settings"},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(h.t,null,{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)(" mdi-cog-outline ")])),_:1})])),_:1})])),_:1}),(0,n.createVNode)(g.V,{app:"",modelValue:e.drawer,"onUpdate:modelValue":t[0]||(t[0]=t=>e.drawer=t),width:"120",elevation:"0",floating:"",color:"amber-lighten-2"},null,8,["modelValue"]),(0,n.createVNode)(p.O,{id:"main",class:"scrollbar"},{default:(0,n.withCtx)((()=>[(0,n.createElementVNode)("div",{class:"scrollbar-x d-flex overflow-auto",onWheel:t[1]||(t[1]=(...e)=>j.scrollHorizontal&&j.scrollHorizontal(...e)),id:"discussions-list"},[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.discussions,((t,o)=>((0,n.openBlock)(),(0,n.createBlock)(c.T,{key:o,rounded:"0",flat:"",active:e.discussionId==t.id,onClick:e=>j.openDiscussion(t),color:e.discussionId==t.id?"amber-lighten-2":"",variant:"tonal"},{default:(0,n.withCtx)((()=>[(0,n.createElementVNode)("span",b,(0,n.toDisplayString)(t.title),1)])),_:2},1032,["active","onClick","color"])))),128))],32),(0,n.createElementVNode)("div",v,[e.discussion?((0,n.openBlock)(),(0,n.createBlock)(l._,{key:0,width:"100%",height:"100%",class:"pa-5 my-3 overflow-auto",flat:"",id:"chat-card"},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(d.E,null,{default:(0,n.withCtx)((()=>[(0,n.createElementVNode)("div",k,(0,n.toDisplayString)(e.discussion.title),1)])),_:1}),(0,n.createVNode)(u.Z,null,{default:(0,n.withCtx)((()=>[(0,n.createElementVNode)("div",y,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(j.messageDays,((t,o)=>((0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,{key:o},[(0,n.createElementVNode)("div",x,[(0,n.createVNode)(f.J),(0,n.createElementVNode)("span",V,(0,n.toDisplayString)(t.date),1),(0,n.createVNode)(f.J)]),((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(t.messages,((t,o)=>((0,n.openBlock)(),(0,n.createElementBlock)("div",{class:(0,n.normalizeClass)(t.author===e.user?"user-speech-bubble":"other-speech-bubble"),key:o},[(0,n.createElementVNode)("span",null,(0,n.toDisplayString)(t.contents),1),N,(0,n.createElementVNode)("span",C,(0,n.toDisplayString)(t.author)+" at "+(0,n.toDisplayString)(j.extractHourMinute(t.time)),1)],2)))),128))],64)))),128))])])),_:1})])),_:1})):(0,n.createCommentVNode)("",!0)]),(0,n.createElementVNode)("div",_,[e.discussion?((0,n.openBlock)(),(0,n.createBlock)(w.z,{key:0,"hide-details":"",density:"compact",label:"Send message ...",rows:1,"auto-grow":"","no-resize":"",modelValue:e.message,"onUpdate:modelValue":t[2]||(t[2]=t=>e.message=t)},{append:(0,n.withCtx)((()=>[(0,n.createVNode)(c.T,{icon:"",flat:"",color:"amber-lighten-2",onClick:j.sendMessage},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(h.t,null,{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)(" mdi-send ")])),_:1})])),_:1},8,["onClick"])])),_:1},8,["modelValue"])):(0,n.createCommentVNode)("",!0)])])),_:1}),(0,n.createVNode)(m.c,{app:"",color:"amber-lighten-2",class:"d-flex justify-center"},{default:(0,n.withCtx)((()=>[(0,n.createElementVNode)("span",null,[(0,n.createTextVNode)((0,n.toDisplayString)((new Date).getFullYear())+" — ",1),E])])),_:1})])),_:1})}o(7658);var O=o(8328),j={name:"DiscussionView",delimiters:["[[","]]"],components:{},data:()=>({drawer:!1,discussion:null,discussionId:null,user:null,discussions:[],messages:[],socket:null,message:"",csrfToken:null}),methods:{scrollHorizontal(e){const t=3*e.deltaY;document.getElementById("discussions-list").scrollLeft+=t,e.preventDefault()},extractHourMinute(e){const t=e.split(":");if(t.length>=2){const[e,o]=t.slice(0,2);return`${e}:${o}`}return e},openDiscussion(e){if(e!=this.discussion){this.discussionId=e.id,this.discussion=e;const t={course_id:this.discussionId},o=JSON.stringify(t);this.socket.send(o)}else this.discussionId=null,this.discussion=null},formatDate(e){const[t,o,n]=e.replace(/\//g,"-").split("-").map((e=>parseInt(e,10)));return new Date(n,o-1,t)},sendMessage(){O.Z.post(window.location.href.replace(window.location.origin,""),{message:this.message,course_id:this.discussionId},{headers:{"X-CSRFToken":this.csrfToken}}).then((e=>{if(e.data.success){this.message="";const e={course_id:this.discussionId},t=JSON.stringify(e);this.socket.send(t)}})).catch((e=>{console.error("An error occurred:",e)}))}},mounted(){this.socket=new WebSocket("ws://"+window.location.host+"/ws/koding"),this.socket.addEventListener("open",(()=>{console.log("WebSocket connection opened.")})),this.socket.addEventListener("message",(e=>{let t=document.getElementById("chat-card");const o=t.scrollHeight-t.clientHeight<=t.scrollTop+1,n=JSON.parse(e.data);this.messages=n,this.$nextTick((()=>{o&&(t.scrollTop=t.scrollHeight-t.clientHeight)}))})),this.csrfToken=document.querySelector("[name=csrfmiddlewaretoken]").value},created(){O.Z.get(window.location.href.replace(window.location.origin,""),{params:{type:"initialization"}}).then((e=>{const t=e.data;this.discussions=t.discussions,this.user=t.user,t.discussion&&this.openDiscussion(t.discussion)})).catch((e=>{console.error("An error occurred:",e)}))},beforeUnmount(){this.socket.close()},computed:{messageDays(){const e={};this.messages.forEach((t=>{const o=t.date;e[o]||(e[o]=[]),e[o].push(t)}));let t=Object.keys(e).map((t=>({date:t.replace(/-/g,"/"),messages:e[t]})));return t=t.sort(((e,t)=>{const o=this.formatDate(e.date),n=this.formatDate(t.date);return o-n})),t}}},B=o(89);const S=(0,B.Z)(j,[["render",T]]);var D=S,I=(o(9773),o(8727));let P="dark";var H=(0,I.Rd)({theme:{defaultTheme:P},options:{customProperties:!0}});async function L(){const e=await o.e(461).then(o.t.bind(o,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}L(),(0,n.createApp)(D).use(H).mount("#app")}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,n,s,i){if(!n){var r=1/0;for(d=0;d<e.length;d++){n=e[d][0],s=e[d][1],i=e[d][2];for(var a=!0,c=0;c<n.length;c++)(!1&i||r>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(a=!1,i<r&&(r=i));if(a){e.splice(d--,1);var l=s();void 0!==l&&(t=l)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,s,i]}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};o.t=function(n,s){if(1&s&&(n=this(n)),8&s)return n;if("object"===typeof n&&n){if(4&s&&n.__esModule)return n;if(16&s&&"function"===typeof n.then)return n}var i=Object.create(null);o.r(i);var r={};e=e||[null,t({}),t([]),t(t)];for(var a=2&s&&n;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){r[e]=function(){return n[e]}}));return r["default"]=function(){return n},o.d(i,r),i}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/webfontloader.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="koding:";o.l=function(n,s,i,r){if(e[n])e[n].push(s);else{var a,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+i){a=u;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",t+i),a.src=n),e[n]=[s];var f=function(t,o){a.onerror=a.onload=null,clearTimeout(m);var s=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),s&&s.forEach((function(e){return e(o)})),t)return t(o)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.j=762}(),function(){o.p="/koding/courses/static/src/vue/dist/"}(),function(){var e={762:0};o.f.j=function(t,n){var s=o.o(e,t)?e[t]:void 0;if(0!==s)if(s)n.push(s[2]);else{var i=new Promise((function(o,n){s=e[t]=[o,n]}));n.push(s[2]=i);var r=o.p+o.u(t),a=new Error,c=function(n){if(o.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var i=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",a.name="ChunkLoadError",a.type=i,a.request=r,s[1](a)}};o.l(r,c,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,i,r=n[0],a=n[1],c=n[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(s in a)o.o(a,s)&&(o.m[s]=a[s]);if(c)var d=c(o)}for(t&&t(n);l<r.length;l++)i=r[l],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(d)},n=self["webpackChunkkoding"]=self["webpackChunkkoding"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(1069)}));n=o.O(n)})();
//# sourceMappingURL=discussion.js.map