"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{1320:(M,f,a)=>{a.d(f,{c:()=>s});var d=a(1308),v=a(7864),c=a(1898);const s=(i,t)=>{let o,e;const r=(u,w,p)=>{if(typeof document>"u")return;const _=document.elementFromPoint(u,w);_&&t(_)?_!==o&&(g(),l(_,p)):g()},l=(u,w)=>{o=u,e||(e=o);const p=o;(0,d.c)(()=>p.classList.add("ion-activated")),w()},g=(u=!1)=>{if(!o)return;const w=o;(0,d.c)(()=>w.classList.remove("ion-activated")),u&&e!==o&&o.click(),o=void 0};return(0,c.createGesture)({el:i,gestureName:"buttonActiveDrag",threshold:0,onStart:u=>r(u.currentX,u.currentY,v.a),onMove:u=>r(u.currentX,u.currentY,v.b),onEnd:()=>{g(!0),(0,v.h)(),e=void 0}})}},2225:(M,f,a)=>{a.d(f,{g:()=>d});const d=(t,o,e,r,l)=>c(t[1],o[1],e[1],r[1],l).map(g=>v(t[0],o[0],e[0],r[0],g)),v=(t,o,e,r,l)=>l*(3*o*Math.pow(l-1,2)+l*(-3*e*l+3*e+r*l))-t*Math.pow(l-1,3),c=(t,o,e,r,l)=>i((r-=l)-3*(e-=l)+3*(o-=l)-(t-=l),3*e-6*o+3*t,3*o-3*t,t).filter(u=>u>=0&&u<=1),i=(t,o,e,r)=>{if(0===t)return((t,o,e)=>{const r=o*o-4*t*e;return r<0?[]:[(-o+Math.sqrt(r))/(2*t),(-o-Math.sqrt(r))/(2*t)]})(o,e,r);const l=(3*(e/=t)-(o/=t)*o)/3,g=(2*o*o*o-9*o*e+27*(r/=t))/27;if(0===l)return[Math.pow(-g,1/3)];if(0===g)return[Math.sqrt(-l),-Math.sqrt(-l)];const u=Math.pow(g/2,2)+Math.pow(l/3,3);if(0===u)return[Math.pow(g/2,.5)-o/3];if(u>0)return[Math.pow(-g/2+Math.sqrt(u),1/3)-Math.pow(g/2+Math.sqrt(u),1/3)-o/3];const w=Math.sqrt(Math.pow(-l/3,3)),p=Math.acos(-g/(2*Math.sqrt(Math.pow(-l/3,3)))),_=2*Math.pow(w,1/3);return[_*Math.cos(p/3)-o/3,_*Math.cos((p+2*Math.PI)/3)-o/3,_*Math.cos((p+4*Math.PI)/3)-o/3]}},5062:(M,f,a)=>{a.d(f,{i:()=>d});const d=v=>v&&""!==v.dir?"rtl"===v.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},6602:(M,f,a)=>{a.r(f),a.d(f,{startFocusVisible:()=>s});const d="ion-focused",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],s=i=>{let t=[],o=!0;const e=i?i.shadowRoot:document,r=i||document.body,l=E=>{t.forEach(h=>h.classList.remove(d)),E.forEach(h=>h.classList.add(d)),t=E},g=()=>{o=!1,l([])},u=E=>{o=c.includes(E.key),o||l([])},w=E=>{if(o&&void 0!==E.composedPath){const h=E.composedPath().filter(m=>!!m.classList&&m.classList.contains("ion-focusable"));l(h)}},p=()=>{e.activeElement===r&&l([])};return e.addEventListener("keydown",u),e.addEventListener("focusin",w),e.addEventListener("focusout",p),e.addEventListener("touchstart",g),e.addEventListener("mousedown",g),{destroy:()=>{e.removeEventListener("keydown",u),e.removeEventListener("focusin",w),e.removeEventListener("focusout",p),e.removeEventListener("touchstart",g),e.removeEventListener("mousedown",g)},setFocus:l}}},7626:(M,f,a)=>{a.d(f,{C:()=>i,a:()=>c,d:()=>s});var d=a(5861),v=a(5730);const c=function(){var t=(0,d.Z)(function*(o,e,r,l,g,u){var w;if(o)return o.attachViewToDom(e,r,g,l);if(!(u||"string"==typeof r||r instanceof HTMLElement))throw new Error("framework delegate is missing");const p="string"==typeof r?null===(w=e.ownerDocument)||void 0===w?void 0:w.createElement(r):r;return l&&l.forEach(_=>p.classList.add(_)),g&&Object.assign(p,g),e.appendChild(p),yield new Promise(_=>(0,v.c)(p,_)),p});return function(e,r,l,g,u,w){return t.apply(this,arguments)}}(),s=(t,o)=>{if(o){if(t)return t.removeViewFromDom(o.parentElement,o);o.remove()}return Promise.resolve()},i=()=>{let t,o;return{attachViewToDom:function(){var l=(0,d.Z)(function*(g,u,w={},p=[]){var _,E;if(t=g,u){const m="string"==typeof u?null===(_=t.ownerDocument)||void 0===_?void 0:_.createElement(u):u;p.forEach(n=>m.classList.add(n)),Object.assign(m,w),t.appendChild(m),yield new Promise(n=>(0,v.c)(m,n))}else if(t.children.length>0&&!t.children[0].classList.contains("ion-delegate-host")){const n=null===(E=t.ownerDocument)||void 0===E?void 0:E.createElement("div");n.classList.add("ion-delegate-host"),p.forEach(y=>n.classList.add(y)),n.append(...t.children),t.appendChild(n)}const h=document.querySelector("ion-app")||document.body;return o=document.createComment("ionic teleport"),t.parentNode.insertBefore(o,t),h.appendChild(t),t});return function(u,w){return l.apply(this,arguments)}}(),removeViewFromDom:()=>(t&&o&&(o.parentNode.insertBefore(t,o),o.remove()),Promise.resolve())}}},7864:(M,f,a)=>{a.d(f,{a:()=>s,b:()=>i,c:()=>c,d:()=>o,h:()=>t});const d={getEngine(){var e;const r=window;return r.TapticEngine||(null===(e=r.Capacitor)||void 0===e?void 0:e.isPluginAvailable("Haptics"))&&r.Capacitor.Plugins.Haptics},available(){var e;const r=window;return!!this.getEngine()&&("web"!==(null===(e=r.Capacitor)||void 0===e?void 0:e.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const r=this.getEngine();if(!r)return;const l=this.isCapacitor()?e.style.toUpperCase():e.style;r.impact({style:l})},notification(e){const r=this.getEngine();if(!r)return;const l=this.isCapacitor()?e.style.toUpperCase():e.style;r.notification({style:l})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},v=()=>d.available(),c=()=>{v()&&d.selection()},s=()=>{v()&&d.selectionStart()},i=()=>{v()&&d.selectionChanged()},t=()=>{v()&&d.selectionEnd()},o=e=>{v()&&d.impact(e)}},109:(M,f,a)=>{a.d(f,{a:()=>d,b:()=>u,c:()=>o,d:()=>w,e:()=>D,f:()=>t,g:()=>p,h:()=>c,i:()=>v,j:()=>n,k:()=>y,l:()=>e,m:()=>l,n:()=>_,o:()=>r,p:()=>i,q:()=>s,r:()=>m,s:()=>C,t:()=>g,u:()=>E,v:()=>h});const d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},8416:(M,f,a)=>{a.d(f,{I:()=>i,a:()=>l,b:()=>t,c:()=>w,d:()=>_,f:()=>g,g:()=>r,i:()=>e,p:()=>p,r:()=>E,s:()=>u});var d=a(5861),v=a(5730),c=a(4147);const i="ion-content",t=".ion-content-scroll-host",o=`${i}, ${t}`,e=h=>"ION-CONTENT"===h.tagName,r=function(){var h=(0,d.Z)(function*(m){return e(m)?(yield new Promise(n=>(0,v.c)(m,n)),m.getScrollElement()):m});return function(n){return h.apply(this,arguments)}}(),l=h=>h.querySelector(t)||h.querySelector(o),g=h=>h.closest(o),u=(h,m)=>e(h)?h.scrollToTop(m):Promise.resolve(h.scrollTo({top:0,left:0,behavior:m>0?"smooth":"auto"})),w=(h,m,n,y)=>e(h)?h.scrollByPoint(m,n,y):Promise.resolve(h.scrollBy({top:n,left:m,behavior:y>0?"smooth":"auto"})),p=h=>(0,c.a)(h,i),_=h=>{if(e(h)){const n=h.scrollY;return h.scrollY=!1,n}return h.style.setProperty("overflow","hidden"),!0},E=(h,m)=>{e(h)?h.scrollY=m:h.style.removeProperty("overflow")}},5234:(M,f,a)=>{a.r(f),a.d(f,{KEYBOARD_DID_CLOSE:()=>v,KEYBOARD_DID_OPEN:()=>d,copyVisualViewport:()=>m,keyboardDidClose:()=>p,keyboardDidOpen:()=>u,keyboardDidResize:()=>w,resetKeyboardAssist:()=>o,setKeyboardClose:()=>g,setKeyboardOpen:()=>l,startKeyboardAssist:()=>e,trackViewportChanges:()=>h});const d="ionKeyboardDidShow",v="ionKeyboardDidHide";let s={},i={},t=!1;const o=()=>{s={},i={},t=!1},e=n=>{r(n),n.visualViewport&&(i=m(n.visualViewport),n.visualViewport.onresize=()=>{h(n),u()||w(n)?l(n):p(n)&&g(n)})},r=n=>{n.addEventListener("keyboardDidShow",y=>l(n,y)),n.addEventListener("keyboardDidHide",()=>g(n))},l=(n,y)=>{_(n,y),t=!0},g=n=>{E(n),t=!1},u=()=>!t&&s.width===i.width&&(s.height-i.height)*i.scale>150,w=n=>t&&!p(n),p=n=>t&&i.height===n.innerHeight,_=(n,y)=>{const D=new CustomEvent(d,{detail:{keyboardHeight:y?y.keyboardHeight:n.innerHeight-i.height}});n.dispatchEvent(D)},E=n=>{const y=new CustomEvent(v);n.dispatchEvent(y)},h=n=>{s=Object.assign({},i),i=m(n.visualViewport)},m=n=>({width:Math.round(n.width),height:Math.round(n.height),offsetTop:n.offsetTop,offsetLeft:n.offsetLeft,pageTop:n.pageTop,pageLeft:n.pageLeft,scale:n.scale})},9852:(M,f,a)=>{a.d(f,{c:()=>v});var d=a(3457);const v=c=>{let s,i,t;const o=()=>{s=()=>{t=!0,c&&c(!0)},i=()=>{t=!1,c&&c(!1)},null==d.w||d.w.addEventListener("keyboardWillShow",s),null==d.w||d.w.addEventListener("keyboardWillHide",i)};return o(),{init:o,destroy:()=>{null==d.w||d.w.removeEventListener("keyboardWillShow",s),null==d.w||d.w.removeEventListener("keyboardWillHide",i),s=i=void 0},isKeyboardVisible:()=>t}}},7741:(M,f,a)=>{a.d(f,{S:()=>v});const v={bubbles:{dur:1e3,circles:9,fn:(c,s,i)=>{const t=c*s/i-c+"ms",o=2*Math.PI*s/i;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":t}}}},circles:{dur:1e3,circles:8,fn:(c,s,i)=>{const t=s/i,o=c*t-c+"ms",e=2*Math.PI*t;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(c,s)=>({r:6,style:{left:9-9*s+"px","animation-delay":-110*s+"ms"}})},lines:{dur:1e3,lines:8,fn:(c,s,i)=>({y1:14,y2:26,style:{transform:`rotate(${360/i*s+(s<i/2?180:-180)}deg)`,"animation-delay":c*s/i-c+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(c,s,i)=>({y1:12,y2:20,style:{transform:`rotate(${360/i*s+(s<i/2?180:-180)}deg)`,"animation-delay":c*s/i-c+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(c,s,i)=>({y1:17,y2:29,style:{transform:`rotate(${30*s+(s<6?180:-180)}deg)`,"animation-delay":c*s/i-c+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(c,s,i)=>({y1:12,y2:20,style:{transform:`rotate(${30*s+(s<6?180:-180)}deg)`,"animation-delay":c*s/i-c+"ms"}})}}},6659:(M,f,a)=>{a.r(f),a.d(f,{createSwipeBackGesture:()=>i});var d=a(5730),v=a(5062),c=a(1898);a(4349);const i=(t,o,e,r,l)=>{const g=t.ownerDocument.defaultView;let u=(0,v.i)(t);const p=n=>u?-n.deltaX:n.deltaX;return(0,c.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:n=>(u=(0,v.i)(t),(n=>{const{startX:C}=n;return u?C>=g.innerWidth-50:C<=50})(n)&&o()),onStart:e,onMove:n=>{const C=p(n)/g.innerWidth;r(C)},onEnd:n=>{const y=p(n),C=g.innerWidth,D=y/C,O=(n=>u?-n.velocityX:n.velocityX)(n),L=O>=0&&(O>.2||y>C/2),x=(L?1-D:D)*C;let B=0;if(x>5){const k=x/Math.abs(O);B=Math.min(k,540)}l(L,D<=0?.01:(0,d.l)(0,D,.9999),B)}})}},581:(M,f,a)=>{a.d(f,{e:()=>i});var d=a(6895),v=a(433),c=a(4556),s=a(8256);let i=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[d.ez,v.u5,c.Pc]}),t})()},4655:(M,f,a)=>{a.d(f,{H:()=>v});var d=a(8256);let v=(()=>{class c{constructor(){this.cat=[],this.cat.push({idCategoryOK:"1",idCategoryBK:"Ropa"},{idCategoryOK:"2",idCategoryBK:"Zapatos"},{idCategoryOK:"3",idCategoryBK:"L\xednea Blanca"},{idCategoryOK:"4",idCategoryBK:"Muebles"},{idCategoryOK:"5",idCategoryBK:"Electr\xf3nica"},{idCategoryOK:"6",idCategoryBK:"Perfumer\xeda"},{idCategoryOK:"7",idCategoryBK:"M\xfasica"},{idCategoryOK:"8",idCategoryBK:"Motocicletas"},{idCategoryOK:"9",idCategoryBK:"Dulcer\xeda"})}getCatego(){return this.cat}}return c.\u0275fac=function(i){return new(i||c)},c.\u0275prov=d.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},186:(M,f,a)=>{a.d(f,{U:()=>c});var d=a(8256),v=a(4655);let c=(()=>{class s{constructor(t){this.cate=t,this.delOrUpd=1,this.productos=[],this.cat=[],this.cat=t.getCatego(),this.productos.push({sku:"PRL1001",name:"Polo Ralph Lauren",description:"Playera tipo polo de manga corta jaspeada Hombre",price:1195,category:this.cat[1],calification:[{name:"Diego G\xf3mez",coment:"La calidad de la tela es muy buena y es fresca",calification:5,fecha:new Date},{name:"Alan Barocio",coment:"No hab\xeda tallas chicas disponibles",calification:3,fecha:new Date}],stock:35,photo:"https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dw4f7cf757/images/38372975/GRIS%20MEDIO/large/38372976_x1.jpg?sw=686&sh=785",promCal:4})}getProductos(){return this.productos}getProductoFiltradoPorCategoria(t){return this.productos.filter(o=>{})}deleteProducto(t){const o=this.productos.findIndex(e=>e.sku==t.sku);return this.productos.splice(o,1),this.productos}uploadProduct(t){const o=this.productos.findIndex(e=>e.sku==t.sku);this.productos[o]=t,this.productos[o].promCal=this.getPromCal(t)}addProduct(t){t.calification=[],this.productos.push(t)}getPromCal(t){const o=t.calification.map(e=>e.calification);return Math.round(o.reduce((e,r)=>e+r,0)/o.length)}}return s.\u0275fac=function(t){return new(t||s)(d.LFG(v.H))},s.\u0275prov=d.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);