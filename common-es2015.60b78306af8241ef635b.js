(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{Dl6n:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return s}));const r=(t,e)=>null!==e.closest(t),i=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,[`ion-color-${t}`]:!0}:void 0,o=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},a=/^[a-z][a-z0-9+\-.]*:/,s=async(t,e,n)=>{if(null!=t&&"#"!==t[0]&&!a.test(t)){const r=document.querySelector("ion-router");if(r)return null!=e&&e.preventDefault(),r.push(t,n)}return!1}},"HGT+":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return s}));var r=n("lJxs"),i=n("8Y7J"),o=n("IheW"),a=function(t){return t.all="",t.movie="movie",t.series="series",t}({});let s=(()=>{class t{constructor(t){this.http=t,this.url="https://www.omdbapi.com/",this.apiKey="e260e5da"}searchData(t,e){return this.http.get(`${this.url}?s=${encodeURI(t)}&type=${e}&apikey=${this.apiKey}`).pipe(Object(r.a)(t=>t.Search))}getDetails(t){return this.http.get(`${this.url}?i=${t}&plot=full&apikey=${this.apiKey}`)}}return t.ngInjectableDef=i.Xb({factory:function(){return new t(i.Yb(o.c))},token:t,providedIn:"root"}),t})()},K6rM:function(t,e,n){"use strict";n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return M})),n.d(e,"c",(function(){return g})),n.d(e,"d",(function(){return b})),n.d(e,"e",(function(){return o}));var r=n("c1op"),i=n("kBU6");const o=t=>new Promise((e,n)=>{Object(r.m)(()=>{a(t),s(t).then(n=>{n.animation&&n.animation.destroy(),c(t),e(n)},e=>{c(t),n(e)})})}),a=t=>{const e=t.enteringEl,n=t.leavingEl;E(e,n,t.direction),t.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),b(e,!1),n&&b(n,!1)},s=async t=>{const e=await l(t);return e?u(e,t):d(t)},c=t=>{const e=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")},l=async t=>{if(t.leavingEl&&t.animated&&0!==t.duration)return t.animationBuilder?t.animationBuilder:"ios"===t.mode?(await(()=>n.e(96).then(n.bind(null,"5+Pq")))()).iosTransitionAnimation:(await(()=>n.e(97).then(n.bind(null,"RRi8")))()).mdTransitionAnimation},u=async(t,e)=>{let r;await p(e,!0);try{const i=await n.e(5).then(n.bind(null,"gHMO"));r=await i.create(t,e.baseEl,e)}catch(o){r=t(e.baseEl,e)}m(e.enteringEl,e.leavingEl);const i=await f(r,e);return e.progressCallback&&e.progressCallback(void 0),i&&w(e.enteringEl,e.leavingEl),{hasCompleted:i,animation:r}},d=async t=>{const e=t.enteringEl,n=t.leavingEl;return await p(t,!1),m(e,n),w(e,n),{hasCompleted:!0}},p=async(t,e)=>{const n=(void 0!==t.deepWait?t.deepWait:e)?[v(t.enteringEl),v(t.leavingEl)]:[y(t.enteringEl),y(t.leavingEl)];await Promise.all(n),await h(t.viewIsReady,t.enteringEl)},h=async(t,e)=>{t&&await t(e)},f=(t,e)=>{const n=e.progressCallback,r=new Promise(e=>{t.onFinish(n=>{"number"==typeof n?e(1===n):void 0!==t.hasCompleted&&e(t.hasCompleted)})});return n?(t.progressStart(!0),n(t)):t.play(),r},m=(t,e)=>{g(e,i.c),g(t,i.a)},w=(t,e)=>{g(t,i.b),g(e,i.d)},g=(t,e)=>{if(t){const n=new CustomEvent(e,{bubbles:!1,cancelable:!1});t.dispatchEvent(n)}},y=t=>t&&t.componentOnReady?t.componentOnReady():Promise.resolve(),v=async t=>{const e=t;if(e){if(null!=e.componentOnReady&&null!=await e.componentOnReady())return;await Promise.all(Array.from(e.children).map(v))}},b=(t,e)=>{e?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))},E=(t,e,n)=>{void 0!==t&&(t.style.zIndex="back"===n?"99":"101"),void 0!==e&&(e.style.zIndex="100")},M=t=>t.classList.contains("ion-page")?t:t.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||t},YtD4:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=t=>{try{if("string"!=typeof t||""===t)return t;const e=document.createDocumentFragment(),n=document.createElement("div");e.appendChild(n),n.innerHTML=t,s.forEach(t=>{const n=e.querySelectorAll(t);for(let r=n.length-1;r>=0;r--){const t=n[r];t.parentNode?t.parentNode.removeChild(t):e.removeChild(t);const a=o(t);for(let e=0;e<a.length;e++)i(a[e])}});const r=o(e);for(let t=0;t<r.length;t++)i(r[t]);const a=document.createElement("div");a.appendChild(e);const c=a.querySelector("div");return null!==c?c.innerHTML:a.innerHTML}catch(e){return console.error(e),""}},i=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let n=t.attributes.length-1;n>=0;n--){const e=t.attributes.item(n),r=e.name;if(!a.includes(r.toLowerCase())){t.removeAttribute(r);continue}const i=e.value;null!=i&&i.toLowerCase().includes("javascript:")&&t.removeAttribute(r)}const e=o(t);for(let n=0;n<e.length;n++)i(e[n])},o=t=>null!=t.children?t.children:t.childNodes,a=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]},m9yc:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));const r=async(t,e,n,r,i)=>{if(t)return t.attachViewToDom(e,n,i,r);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return r&&r.forEach(t=>o.classList.add(t)),i&&Object.assign(o,i),e.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o},i=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},"nN+u":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));const r=(t,e,n)=>{const r=new MutationObserver(t=>{n(i(t,e))});return r.observe(t,{childList:!0,subtree:!0}),r},i=(t,e)=>{let n;return t.forEach(t=>{for(let r=0;r<t.addedNodes.length;r++)n=o(t.addedNodes[r],e)||n}),n},o=(t,e)=>{if(1===t.nodeType)return(t.tagName===e.toUpperCase()?[t]:Array.from(t.querySelectorAll(e))).find(t=>!0===t.checked)}},opz7:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return r}));const r=()=>{const t=window.TapticEngine;t&&t.selection()},i=()=>{const t=window.TapticEngine;t&&t.gestureSelectionStart()},o=()=>{const t=window.TapticEngine;t&&t.gestureSelectionChanged()},a=()=>{const t=window.TapticEngine;t&&t.gestureSelectionEnd()}},qaSm:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));class r{constructor(t,e){this.x=t,this.y=e}}const i=(t,e,n,r,i)=>{const s=a(t.y,e.y,n.y,r.y,i);return o(t.x,e.x,n.x,r.x,s[0])},o=(t,e,n,r,i)=>i*(3*e*Math.pow(i-1,2)+i*(-3*n*i+3*n+r*i))-t*Math.pow(i-1,3),a=(t,e,n,r,i)=>s((r-=i)-3*(n-=i)+3*(e-=i)-(t-=i),3*n-6*e+3*t,3*e-3*t,t).filter(t=>t>=0&&t<=1),s=(t,e,n,r)=>{if(0===t)return((t,e,n)=>{const r=e*e-4*t*n;return r<0?[]:[(-e+Math.sqrt(r))/(2*t),(-e-Math.sqrt(r))/(2*t)]})(e,n,r);const i=(3*(n/=t)-(e/=t)*e)/3,o=(2*e*e*e-9*e*n+27*(r/=t))/27;if(0===i)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-i),-Math.sqrt(-i)];const a=Math.pow(o/2,2)+Math.pow(i/3,3);if(0===a)return[Math.pow(o/2,.5)-e/3];if(a>0)return[Math.pow(-o/2+Math.sqrt(a),1/3)-Math.pow(o/2+Math.sqrt(a),1/3)-e/3];const s=Math.sqrt(Math.pow(-i/3,3)),c=Math.acos(-o/(2*Math.sqrt(Math.pow(-i/3,3)))),l=2*Math.pow(s,1/3);return[l*Math.cos(c/3)-e/3,l*Math.cos((c+2*Math.PI)/3)-e/3,l*Math.cos((c+4*Math.PI)/3)-e/3]}}}]);