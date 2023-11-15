(()=>{"use strict";var e={8612:(e,t,o)=>{var n=o(1957),r=o(1947),a=o(499),l=o(9835);function s(e,t,o,n,r,a){const s=(0,l.up)("router-view");return(0,l.wg)(),(0,l.j4)(s)}const i=(0,l.aZ)({name:"App"});var u=o(1639);const c=(0,u.Z)(i,[["render",s]]),d=c;var p=o(3340),m=o(8339),f=(o(9665),o(6970));const v={class:"q-gutter-x-md",style:{"padding-top":"5px"}},g=(0,l._)("div",null,"PLAYLIST",-1),h=(0,l._)("div",null,"FILES",-1),w=(0,l._)("div",null,"SETUP",-1),y={__name:"menuFull",setup(e){const t=(0,m.tv)();return(e,o)=>{const n=(0,l.up)("q-btn");return(0,l.wg)(),(0,l.iD)("div",v,[(0,l.Wm)(n,{class:(0,f.C_)("/playlist"===(0,a.SU)(t).currentRoute.value.path?"bg-grey-2 text-bold":""),style:{"border-radius":"10px"},flat:"",to:"/playlist"},{default:(0,l.w5)((()=>[g])),_:1},8,["class"]),(0,l.Wm)(n,{class:(0,f.C_)("/files"===(0,a.SU)(t).currentRoute.value.path?"bg-grey-2 text-bold":""),style:{"border-radius":"10px"},flat:"",to:"/files"},{default:(0,l.w5)((()=>[h])),_:1},8,["class"]),(0,l.Wm)(n,{class:(0,f.C_)("/setup"===(0,a.SU)(t).currentRoute.value.path?"bg-grey-2 text-bold":""),style:{"border-radius":"10px"},flat:"",to:"/setup"},{default:(0,l.w5)((()=>[w])),_:1},8,["class"])])}}};var b=o(4455),_=o(9984),S=o.n(_);const k=y,W=k;S()(y,"components",{QBtn:b.Z});const C={class:"q-gutter-x-md",style:{"padding-top":"5px"}};function U(e,t){const o=(0,l.up)("q-item-section"),n=(0,l.up)("q-item"),r=(0,l.up)("q-list"),a=(0,l.up)("q-menu"),s=(0,l.up)("q-btn");return(0,l.wg)(),(0,l.iD)("div",C,[(0,l.Wm)(s,{style:{"border-radius":"10px"},flat:"",icon:"menu"},{default:(0,l.w5)((()=>[(0,l.Wm)(a,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,{separator:"",style:{"min-width":"150px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{clickable:"",to:"/playlist"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" PLAYLIST ")])),_:1})])),_:1}),(0,l.Wm)(n,{clickable:"",to:"/files"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" FILES ")])),_:1})])),_:1}),(0,l.Wm)(n,{clickable:"",to:"/setup"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" SETUP ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])}var P=o(6362),x=o(3246),q=o(490),Z=o(1233);const T={},L=(0,u.Z)(T,[["render",U]]),j=L;S()(T,"components",{QBtn:b.Z,QMenu:P.Z,QList:x.Z,QItem:q.Z,QItemSection:Z.Z});var M=o(1569),E=o(4181),O=o(6613);const Q={class:"row no-wrap items-center q-mx-sm q-gutter-x-md"},A={class:"text-caption"},B={__name:"TimeSlider",setup(e){const t=e=>{console.log(e),E.W.emit("pCommands",{command:"seek",time:e})},o=e=>{E.W.emit("pCommands",{command:"panning",value:e})};return(e,n)=>{const r=(0,l.up)("q-slider");return(0,l.wg)(),(0,l.iD)("div",Q,[(0,l.Wm)(r,{"model-value":(0,a.SU)(O.oL).currentTime,min:0,max:(0,a.SU)(O.oL).duration,step:.01,label:"","label-value":(0,a.SU)(O.oL).currentTimeMS,"onUpdate:modelValue":t,onPan:o},null,8,["model-value","max","label-value"]),(0,l._)("div",A,(0,f.zw)((0,a.SU)(O.oL).currentTimeMS)+"/"+(0,f.zw)((0,a.SU)(O.oL).durationMS),1)])}}};var F=o(6096);const N=B,D=N;S()(B,"components",{QSlider:F.Z});var R=o(5575),I=o(7855),z=o(3910);const H={class:"row no-wrap justify-center items-center q-mb-sm"},$={__name:"ControlBtns",setup(e){return(e,t)=>{const o=(0,l.up)("q-btn");return(0,l.wg)(),(0,l.iD)("div",H,[(0,l._)("div",null,[(0,l.Wm)(o,{flat:"",round:"",icon:"fast_rewind"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,a.SU)(R.Z),{msg:"Rewind"})])),_:1})]),(0,l._)("div",null,["playing"!=(0,a.SU)(I.q).status.status?((0,l.wg)(),(0,l.j4)(o,{key:0,flat:"",round:"",size:"lg",color:"primary",icon:"play_arrow",onClick:(0,a.SU)(z.RL)},{default:(0,l.w5)((()=>[(0,l.Wm)((0,a.SU)(R.Z),{msg:"Play"})])),_:1},8,["onClick"])):((0,l.wg)(),(0,l.j4)(o,{key:1,flat:"",round:"",size:"lg",color:"secondary",icon:"pause",onClick:(0,a.SU)(z.cY)},{default:(0,l.w5)((()=>[(0,l.Wm)((0,a.SU)(R.Z),{msg:"Pause"})])),_:1},8,["onClick"]))]),(0,l._)("div",null,[(0,l.Wm)(o,{flat:"",round:"",icon:"fast_forward"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,a.SU)(R.Z),{msg:"FastForward"})])),_:1}),(0,l.Wm)(o,{flat:"",round:"",icon:"fullscreen"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,a.SU)(R.Z),{msg:"Fullscreen"})])),_:1})])])}}},Y=$,V=Y;S()($,"components",{QBtn:b.Z});const G={class:"row no-wrap justify-center items-center"},K={class:"text-bold"},X={__name:"ControlNames",setup(e){return(e,t)=>((0,l.wg)(),(0,l.iD)("div",G,[(0,l._)("div",K,(0,f.zw)((0,a.SU)(I.q).file.name?(0,a.SU)(I.q).file.name:"Please load file"),1)]))}},J=X,ee=J,te={__name:"PlayerControls",setup(e){return(e,t)=>((0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",null,[(0,l.Wm)((0,a.SU)(D)),(0,l.Wm)((0,a.SU)(ee)),(0,l.Wm)((0,a.SU)(V))])]))}},oe=te,ne=oe,re=e=>((0,l.dD)("data-v-0e4acb66"),e=e(),(0,l.Cn)(),e),ae=re((()=>(0,l._)("div",{class:"header-font"},"Player Controls",-1))),le={class:"router-view"},se={__name:"MainLayout",setup(e){const t=(0,m.tv)();return(0,l.wF)((async()=>{console.log("init socket io",M.addr),await(0,E.m)(M.addr)})),(e,o)=>{const n=(0,l.up)("q-icon"),r=(0,l.up)("q-header"),s=(0,l.up)("router-view"),i=(0,l.up)("q-page-container"),u=(0,l.up)("q-footer"),c=(0,l.up)("q-layout");return(0,l.wg)(),(0,l.j4)(c,{view:"lHh Lpr lFf"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{class:"header row no-wrap justify-between items-center"},{default:(0,l.w5)((()=>[(0,l._)("div",{class:"row q-gutter-x-sm pointer",onClick:o[0]||(o[0]=e=>(0,a.SU)(t).push("/"))},[(0,l.Wm)(n,{name:"svguse:icons.svg#logo",size:"md"}),ae]),(0,l.Wm)((0,a.SU)(W),{class:"gt-xs"}),(0,l.Wm)((0,a.SU)(j),{class:"lt-sm"})])),_:1}),(0,l.Wm)(i,null,{default:(0,l.w5)((()=>[(0,l._)("div",le,[(0,l.Wm)(s)])])),_:1}),(0,l.Wm)(u,{class:"footer"},{default:(0,l.w5)((()=>[(0,l.Wm)(ne)])),_:1})])),_:1})}}};var ie=o(7605),ue=o(6602),ce=o(2857),de=o(2133),pe=o(1378);const me=(0,u.Z)(se,[["__scopeId","data-v-0e4acb66"]]),fe=me;S()(se,"components",{QLayout:ie.Z,QHeader:ue.Z,QIcon:ce.Z,QPageContainer:de.Z,QFooter:pe.Z});const ve=[{path:"/",component:fe,children:[{path:"",component:()=>Promise.all([o.e(736),o.e(939)]).then(o.bind(o,1939))}]},{path:"/playlist",component:fe,children:[{path:"",component:()=>o.e(87).then(o.bind(o,87))}]},{path:"/files",component:fe,children:[{path:"",component:()=>Promise.all([o.e(736),o.e(369)]).then(o.bind(o,9369))}]},{path:"/setup",component:fe,children:[{path:"",component:()=>Promise.all([o.e(736),o.e(284)]).then(o.bind(o,9284))}]},{path:"/:catchAll(.*)*",component:()=>o.e(862).then(o.bind(o,1862))}],ge=ve,he=(0,p.BC)((function(){const e=m.PO,t=(0,m.p7)({scrollBehavior:()=>({left:0,top:0}),routes:ge,history:e("/")});return t}));async function we(e,t){const o=e(d);o.use(r.Z,t);const n=(0,a.Xl)("function"===typeof he?await he({}):he);return{app:o,router:n}}var ye=o(7690),be=o(4328),_e=o(6950);const Se={config:{},plugins:{Dialog:ye.Z,Notify:be.Z,Loading:_e.Z}},ke="/";async function We({app:e,router:t},o){let n=!1;const r=e=>{try{return t.resolve(e).href}catch(o){}return Object(e)===e?null:e},a=e=>{if(n=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=r(e);null!==t&&(window.location.href=t)},l=window.location.href.replace(window.location.origin,"");for(let i=0;!1===n&&i<o.length;i++)try{await o[i]({app:e,router:t,ssrContext:null,redirect:a,urlPath:l,publicPath:ke})}catch(s){return s&&s.url?void a(s.url):void console.error("[Quasar] boot error:",s)}!0!==n&&(e.use(t),e.mount("#q-app"))}we(n.ri,Se).then((e=>{const[t,n]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(o.bind(o,1569))]).then((t=>{const o=n(t).filter((e=>"function"===typeof e));We(e,o)}))}))},1569:(e,t,o)=>{o.r(t),o.d(t,{addr:()=>l,api:()=>a,default:()=>s});var n=o(3340),r=o(7524);let a,l;l=window.location.href,"/"===l.charAt(l.length-1)&&(l=l.slice(0,-1)),console.log("Node ENV: Production Mode"),console.log("Server Address: "+l);const s=(0,n.xr)((({app:e})=>{a=r.Z.create({baseURL:`${l}/api`})}))},3910:(e,t,o)=>{o.d(t,{GM:()=>a,RL:()=>l,cY:()=>s});var n=o(1569),r=o(4181);const a=e=>{r.W.emit("pCommands",{command:"loadfile",values:e})},l=async()=>{try{const e=await n.api.get("/player/play");console.log("Play Btn Result: ",e)}catch(e){console.error("Play Btn Error: ",e)}},s=async()=>{try{const e=await n.api.get("/player/pause");console.log("Pause Btn Result: ",e)}catch(e){console.error("Pause Btn Result: ",e)}}},4181:(e,t,o)=>{o.d(t,{W:()=>l,m:()=>s});var n=o(4209),r=o(7855),a=o(6613);let l;const s=e=>{l=(0,n.io)(`${e}/ui`,{reconnectionDelayMax:5e3,transports:["websocket"],autoConnect:!0}),l.on("pStatus",(e=>{r.q.value={...e},console.log("pStatus updated",r.q.value)})),l.on("pTimes",(e=>{(0,a.kg)(e)})),l.on("connect",(()=>{console.log(`connecting to socket.io id=${l.id}`)}))}},7855:(e,t,o)=>{o.d(t,{q:()=>r});var n=o(499);const r=(0,n.iH)({mode:"single",uuid:"",name:"",nics:[],webport:3030,file:{type:"",name:"",size:0},status:{status:"",playBtn:!1},playlist:{name:"",list:[]},device:{audiocurrentdevice:"",audiodevicelist:[],width:800,height:600},fullscreen:!1,showlogo:!0,bgColor:"#fff",recentlyFile:[]});(0,n.iH)({duration:0,currentTime:0,durationMS:"00:00",currentTimeMS:"00:00"})},6613:(e,t,o)=>{o.d(t,{kg:()=>s,oL:()=>r});var n=o(499);const r=(0,n.iH)({duration:0,currentTime:0,durationMS:"00:00:00",currentTimeMS:"00:00:00"}),a=e=>e.toString().padStart(2,"0"),l=e=>{let t=Math.floor(e),o=Math.floor(t/60),n=Math.floor(o/60);return t%=60,o%=60,n%=24,`${a(n)}:${a(o)}:${a(t)}`},s=e=>{const t=l(e.duration),o=l(e.currentTime);r.value={...e,durationMS:t,currentTimeMS:o}}},5575:(e,t,o)=>{o.d(t,{Z:()=>c});var n=o(9835),r=o(6970);const a={__name:"delayedTooltip",props:{msg:String},setup(e){const t=e;return(e,o)=>{const a=(0,n.up)("q-tooltip");return(0,n.wg)(),(0,n.j4)(a,{class:"tooltop-bg",anchor:"top middle",self:"bottom middle",offset:[10,10],delay:500,style:{background:"#888888aa"}},{default:(0,n.w5)((()=>[(0,n.Uk)((0,r.zw)(t.msg),1)])),_:1})}}};var l=o(6858),s=o(9984),i=o.n(s);const u=a,c=u;i()(a,"components",{QTooltip:l.Z})}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,o),a.exports}o.m=e,(()=>{var e=[];o.O=(t,n,r,a)=>{if(!n){var l=1/0;for(c=0;c<e.length;c++){for(var[n,r,a]=e[c],s=!0,i=0;i<n.length;i++)(!1&a||l>=a)&&Object.keys(o.O).every((e=>o.O[e](n[i])))?n.splice(i--,1):(s=!1,a<l&&(l=a));if(s){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,r,a]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+e+"."+{87:"652a2187",284:"1a8f3b5c",369:"89efda74",862:"2d992bb0",939:"9b912036"}[e]+".js"})(),(()=>{o.miniCssF=e=>"css/"+e+"."+{284:"f75c389b",369:"f75c389b"}[e]+".css"})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="tdp-ui:";o.l=(n,r,a,l)=>{if(e[n])e[n].push(r);else{var s,i;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(i=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[r];var p=(t,o)=>{s.onerror=s.onload=null,clearTimeout(m);var r=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((e=>e(o))),t)return t(o)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),i&&document.head.appendChild(s)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,o,n,r)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var l=o=>{if(a.onerror=a.onload=null,"load"===o.type)n();else{var l=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=l,i.request=s,a.parentNode.removeChild(a),r(i)}};return a.onerror=a.onload=l,a.href=t,o?o.parentNode.insertBefore(a,o.nextSibling):document.head.appendChild(a),a},t=(e,t)=>{for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var r=o[n],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var l=document.getElementsByTagName("style");for(n=0;n<l.length;n++){r=l[n],a=r.getAttribute("data-href");if(a===e||a===t)return r}},n=n=>new Promise(((r,a)=>{var l=o.miniCssF(n),s=o.p+l;if(t(l,s))return r();e(n,s,null,r,a)})),r={143:0};o.f.miniCss=(e,t)=>{var o={284:1,369:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=n(e).then((()=>{r[e]=0}),(t=>{throw delete r[e],t})))}}})(),(()=>{var e={143:0};o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise(((o,n)=>r=e[t]=[o,n]));n.push(r[2]=a);var l=o.p+o.u(t),s=new Error,i=n=>{if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+l+")",s.name="ChunkLoadError",s.type=a,s.request=l,r[1](s)}};o.l(l,i,"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[l,s,i]=n,u=0;if(l.some((t=>0!==e[t]))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(i)var c=i(o)}for(t&&t(n);u<l.length;u++)a=l[u],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(c)},n=globalThis["webpackChunktdp_ui"]=globalThis["webpackChunktdp_ui"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=o.O(void 0,[736],(()=>o(8612)));n=o.O(n)})();