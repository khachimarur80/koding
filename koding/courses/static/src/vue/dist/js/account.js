(function(){"use strict";var e={7867:function(e,t,o){var r=o(9199),n=o(7718),a=o(6281),l=o(9156),i=o(1556),c=o(5101),d=o(11),s=o(6572),u=o(4075),f=o(1666),m=o(6824),h=o(8521),p=o(9234),g=o(3289),x=o(3140),V=o(2078),N=o(3173),y=o(4162);const w=(0,r.createElementVNode)("div",{class:"text-h5"},"Stats",-1),C={class:"text-body-1 my-2"},v={class:"text-body-1 my-2"},b={class:"text-body-1 my-2"},T={class:"text-body-1 my-2"},k={class:"text-body-1 my-2"},_={class:"text-body-1 my-2"},S={class:"text-body-1 my-2"},E={class:"mt-4"},j=(0,r.createElementVNode)("div",{class:"text-h5"},"Your Courses",-1),O={class:"section"},B=(0,r.createElementVNode)("div",{class:"text-h5"},"Starred",-1),D={class:"section"},R=(0,r.createElementVNode)("strong",null,"Koding",-1);function P(e,t,o,P,L,A){return(0,r.openBlock)(),(0,r.createBlock)(n.q,null,{default:(0,r.withCtx)((()=>[(0,r.createVNode)(a.L,{flat:"",color:"amber-lighten-2"},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(l.g,{href:"/"},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(g.t,null,{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)(" mdi-home ")])),_:1})])),_:1}),(0,r.createVNode)(i.o,null,{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)(" Koding ")])),_:1}),(0,r.createVNode)(c.T,{icon:"",density:"compact",class:"mx-2",href:"/browse"},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(g.t,null,{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)(" mdi-compass-outline ")])),_:1})])),_:1}),(0,r.createVNode)(c.T,{icon:"",density:"compact",class:"mx-2",href:"/discussions"},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(g.t,null,{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)(" mdi-forum-outline ")])),_:1})])),_:1}),(0,r.createVNode)(c.T,{icon:"",density:"compact",class:"mx-2",href:"/account"},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(g.t,null,{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)(" mdi-account ")])),_:1})])),_:1}),(0,r.createVNode)(c.T,{icon:"",density:"compact",class:"mx-2 mr-5",href:"/settings"},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(g.t,null,{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)(" mdi-cog-outline ")])),_:1})])),_:1})])),_:1}),(0,r.createVNode)(V.V,{app:"",modelValue:e.drawer,"onUpdate:modelValue":t[0]||(t[0]=t=>e.drawer=t),width:"120",elevation:"0",floating:"",color:"amber-lighten-2"},null,8,["modelValue"]),(0,r.createVNode)(x.O,{id:"main",onScroll:A.handleScroll},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(d._,{width:"100%",class:"pa-5 my-3"},{default:(0,r.withCtx)((()=>[w,(0,r.createVNode)(u.J,{class:"my-3"}),(0,r.createVNode)(m.o,{class:"pa-3"},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(h.D,{cols:"6"},{default:(0,r.withCtx)((()=>[(0,r.createElementVNode)("div",C,[(0,r.createVNode)(g.t,{color:"amber-lighten-2"},{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)("mdi-compass-outline")])),_:1}),(0,r.createTextVNode)(" Created Courses : "+(0,r.toDisplayString)(e.createdCourses),1)]),(0,r.createElementVNode)("div",v,[(0,r.createVNode)(g.t,{color:"success"},{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)("mdi-progress-check")])),_:1}),(0,r.createTextVNode)(" Completed Courses : "+(0,r.toDisplayString)(e.completedCourses),1)]),(0,r.createElementVNode)("div",b,[(0,r.createVNode)(g.t,{color:"orange"},{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)("mdi-progress-wrench")])),_:1}),(0,r.createTextVNode)(" Working Courses : "+(0,r.toDisplayString)(e.workingCourses),1)]),(0,r.createElementVNode)("div",T,[(0,r.createVNode)(g.t,{color:"red"},{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)("mdi-fire")])),_:1}),(0,r.createTextVNode)(" Current Streak : "+(0,r.toDisplayString)(e.currentStreak),1)]),(0,r.createElementVNode)("div",k,[(0,r.createVNode)(g.t,{color:"teal"},{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)("mdi-fire")])),_:1}),(0,r.createTextVNode)(" Longest Streak : "+(0,r.toDisplayString)(e.longestStreak),1)]),(0,r.createElementVNode)("div",_,[(0,r.createVNode)(g.t,{color:"light-blue"},{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)("mdi-comment-text-outline")])),_:1}),(0,r.createTextVNode)(" Comments: "+(0,r.toDisplayString)(e.commentsCounter),1)]),(0,r.createElementVNode)("div",S,[(0,r.createVNode)(g.t,{color:"yellow"},{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)("mdi-star")])),_:1}),(0,r.createTextVNode)(" Starred: "+(0,r.toDisplayString)(e.starredCounter),1)])])),_:1}),(0,r.createVNode)(h.D,{cols:"6",class:"d-flex justify-center align-center flex-column"},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(N.L,{size:"150",width:"5",modelValue:A.getRankDetails.progress,"onUpdate:modelValue":t[1]||(t[1]=e=>A.getRankDetails.progress=e),color:A.getRankDetails.color},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(g.t,{size:"94"},{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)(" mdi-police-badge-outline ")])),_:1})])),_:1},8,["modelValue","color"]),(0,r.createElementVNode)("span",E," Top "+(0,r.toDisplayString)(e.percentile)+"% ",1)])),_:1})])),_:1})])),_:1}),(0,r.createVNode)(d._,{width:"100%",class:"pa-5 my-3"},{default:(0,r.withCtx)((()=>[j,(0,r.createElementVNode)("div",O,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.yourCourses,((e,t)=>((0,r.openBlock)(),(0,r.createBlock)(d._,{key:t,class:"ma-3","min-width":"150px",variant:"tonal",href:"/course/"+e.id},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(y.tj,{"aspect-ratio":30/21},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(s.E,null,{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)((0,r.toDisplayString)(e.title),1)])),_:2},1024),(0,r.createVNode)(p.C)])),_:2},1024)])),_:2},1032,["href"])))),128))])])),_:1}),(0,r.createVNode)(d._,{width:"100%",class:"pa-5 my-3"},{default:(0,r.withCtx)((()=>[B,(0,r.createElementVNode)("div",D,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.starredCourses,((e,t)=>((0,r.openBlock)(),(0,r.createBlock)(d._,{key:t,class:"ma-3","min-width":"150px",variant:"tonal",href:"/course/"+e.id},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(y.tj,{"aspect-ratio":30/21},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(s.E,null,{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)((0,r.toDisplayString)(e.title),1)])),_:2},1024),(0,r.createVNode)(p.C)])),_:2},1024)])),_:2},1032,["href"])))),128))])])),_:1}),e.showButton?((0,r.openBlock)(),(0,r.createBlock)(c.T,{key:0,class:"scroll-to-top",color:"amber-lighten-2",icon:"",onClick:A.scrollToTop},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(g.t,null,{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)("mdi-chevron-up")])),_:1})])),_:1},8,["onClick"])):(0,r.createCommentVNode)("",!0)])),_:1},8,["onScroll"]),(0,r.createVNode)(f.c,{app:"",color:"amber-lighten-2",class:"d-flex justify-center"},{default:(0,r.withCtx)((()=>[(0,r.createElementVNode)("span",null,[(0,r.createTextVNode)((0,r.toDisplayString)((new Date).getFullYear())+" — ",1),R])])),_:1})])),_:1})}var L={name:"AccountView",delimiters:["[[","]]"],components:{},data:()=>({drawer:!1,showButton:!1,workingCourses:1,learnedTips:10,completedCourses:2,longestStreak:10,currentStreak:12,percentile:4.8,createdCourses:2,createdTips:10,starredCounter:10,commentsCounter:20,yourCourses:[{title:"Course 1",id:1},{title:"Course 2",id:2}],yourTips:[{title:"Tip 1",id:1},{title:"Tip 2",id:2},{title:"Tip 3",id:3},{title:"Tip 4",id:4},{title:"Tip 5",id:5},{title:"Tip 6",id:6},{title:"Tip 7",id:7},{title:"Tip 8",id:8},{title:"Tip 9",id:9},{title:"Tip 10",id:10}],starredCourses:[{title:"Starred 1",id:1},{title:"Starred 2",id:2},{title:"Starred 3",id:3}]}),methods:{scrollToTop(){const e=document.getElementById("main");e.scrollTo({top:0,behavior:"smooth"})},handleScroll(){const e=document.getElementById("main");this.showButton=e.scrollTop>100},calculateRank(){const e=[{name:"Iron",threshold:100},{name:"Bronze",threshold:75},{name:"Silver",threshold:55},{name:"Gold",threshold:35},{name:"Platinum",threshold:20},{name:"Emerald",threshold:10},{name:"Ruby",threshold:5},{name:"Diamond",threshold:1},{name:"Goat",threshold:0}];let t=null,o=null;for(let n=e.length-1;n>=0;n--)if(this.percentile<=e[n].threshold){t=e[n],o=e[n+1];break}if(!t||!o)return{currentRank:"Unranked",progress:0};const r=(this.percentile-t.threshold)/(o.threshold-t.threshold)*100;return{currentRank:t.name,progress:r}}},computed:{getRankDetails(){let e=this.calculateRank();const t={Diamond:"light-blue-accent-3",Ruby:"red",Emerald:"green",Platinum:"teal",Gold:"amber-lighten-2",Silver:"blue-grey-lighten-1",Bronze:"brown-darken-1",Iron:"grey-lighten-2"};return{color:t[e.currentRank]||"light-blue-accent-3",progress:e.progress}}}},A=o(89);const F=(0,A.Z)(L,[["render",P]]);var z=F,I=(o(9773),o(8727));let G="dark";var M=(0,I.Rd)({theme:{defaultTheme:G},options:{customProperties:!0}});async function U(){const e=await o.e(461).then(o.t.bind(o,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}U(),(0,r.createApp)(z).use(M).mount("#app")}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,r,n,a){if(!r){var l=1/0;for(s=0;s<e.length;s++){r=e[s][0],n=e[s][1],a=e[s][2];for(var i=!0,c=0;c<r.length;c++)(!1&a||l>=a)&&Object.keys(o.O).every((function(e){return o.O[e](r[c])}))?r.splice(c--,1):(i=!1,a<l&&(l=a));if(i){e.splice(s--,1);var d=n();void 0!==d&&(t=d)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,n,a]}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};o.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"===typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"===typeof r.then)return r}var a=Object.create(null);o.r(a);var l={};e=e||[null,t({}),t([]),t(t)];for(var i=2&n&&r;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((function(e){l[e]=function(){return r[e]}}));return l["default"]=function(){return r},o.d(a,l),a}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,r){return o.f[r](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/webfontloader.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="koding:";o.l=function(r,n,a,l){if(e[r])e[r].push(n);else{var i,c;if(void 0!==a)for(var d=document.getElementsByTagName("script"),s=0;s<d.length;s++){var u=d[s];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+a){i=u;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+a),i.src=r),e[r]=[n];var f=function(t,o){i.onerror=i.onload=null,clearTimeout(m);var n=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((function(e){return e(o)})),t)return t(o)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.j=809}(),function(){o.p="/koding/courses/static/src/vue/dist/"}(),function(){var e={809:0};o.f.j=function(t,r){var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise((function(o,r){n=e[t]=[o,r]}));r.push(n[2]=a);var l=o.p+o.u(t),i=new Error,c=function(r){if(o.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+l+")",i.name="ChunkLoadError",i.type=a,i.request=l,n[1](i)}};o.l(l,c,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,a,l=r[0],i=r[1],c=r[2],d=0;if(l.some((function(t){return 0!==e[t]}))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(c)var s=c(o)}for(t&&t(r);d<l.length;d++)a=l[d],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(s)},r=self["webpackChunkkoding"]=self["webpackChunkkoding"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(7867)}));r=o.O(r)})();
//# sourceMappingURL=account.js.map