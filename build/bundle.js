var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function u(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function c(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function p(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){t.value=null==e?"":e}let g;function $(t){g=t}const b=[],v=[],y=[],x=[],_=Promise.resolve();let w=!1;function k(t){y.push(t)}let E=!1;const j=new Set;function C(){if(!E){E=!0;do{for(let t=0;t<b.length;t+=1){const e=b[t];$(e),O(e.$$)}for($(null),b.length=0;v.length;)v.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];j.has(e)||(j.add(e),e())}y.length=0}while(b.length);for(;x.length;)x.pop()();w=!1,E=!1,j.clear()}}function O(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const A=new Set;function M(t,e){-1===t.$$.dirty[0]&&(b.push(t),w||(w=!0,_.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(u,i,c,s,a,d,f,p=[-1]){const m=g;$(u);const h=u.$$={fragment:null,ctx:null,props:d,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(m?m.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:i.target||m.$$.root};f&&f(h.root);let b=!1;if(h.ctx=c?c(u,i.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return h.ctx&&a(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),b&&M(u,t)),e})):[],h.update(),b=!0,o(h.before_update),h.fragment=!!s&&s(h.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);h.fragment&&h.fragment.l(t),t.forEach(l)}else h.fragment&&h.fragment.c();i.intro&&((v=u.$$.fragment)&&v.i&&(A.delete(v),v.i(y))),function(t,n,u,i){const{fragment:c,on_mount:s,on_destroy:l,after_update:a}=t.$$;c&&c.m(n,u),i||k((()=>{const n=s.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(k)}(u,i.target,i.anchor,i.customElement),C()}var v,y;$(m)}const S=[];function z(e,n=t){let o;const r=new Set;function i(t){if(u(e,t)&&(e=t,o)){const t=!S.length;for(const t of r)t[1](),S.push(t,e);if(t){for(let t=0;t<S.length;t+=2)S[t][0](S[t+1]);S.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(u,c=t){const s=[u,c];return r.add(s),1===r.size&&(o=n(i)||t),u(e),()=>{r.delete(s),0===r.size&&(o(),o=null)}}}}const D=z(""),L=z(""),P=new Peer;function U(e){let n;return{c(){n=a("div"),n.textContent="Waiting for call...",m(n,"id","waiting-screen"),m(n,"class","animated svelte-1r9xgml")},m(t,e){s(t,n,e)},p:t,d(t){t&&l(n)}}}function q(e){let n;return{c(){n=a("video"),m(n,"id","user-video"),n.autoplay=!0,m(n,"class","svelte-1r9xgml")},m(t,o){s(t,n,o),e[6](n)},p:t,d(t){t&&l(n),e[6](null)}}}function B(e){let n,r,u,i,g,$,b,v,y,x,_,w,k,E,j;function C(t,e){return t[0]?q:U}let O=C(e),A=O(e);return{c(){n=a("main"),r=a("div"),u=a("p"),i=d("Your username is:\n      "),g=a("input"),b=f(),v=a("div"),y=a("input"),x=f(),_=a("button"),_.textContent="Call the dud",w=f(),k=a("div"),A.c(),g.value=$=e[3]||"currently generating btw okakoro is best",m(y,"placeholder","Enter friend's username"),m(r,"id","floating"),m(r,"class","svelte-1r9xgml"),m(k,"id","video-container"),m(k,"class","svelte-1r9xgml")},m(t,o){s(t,n,o),c(n,r),c(r,u),c(u,i),c(u,g),c(r,b),c(r,v),c(v,y),h(y,e[2]),c(v,x),c(v,_),c(n,w),c(n,k),A.m(k,null),E||(j=[p(y,"input",e[5]),p(_,"click",e[4])],E=!0)},p(t,[e]){8&e&&$!==($=t[3]||"currently generating btw okakoro is best")&&g.value!==$&&(g.value=$),4&e&&y.value!==t[2]&&h(y,t[2]),O===(O=C(t))&&A?A.p(t,e):(A.d(1),A=O(t),A&&(A.c(),A.m(k,null)))},i:t,o:t,d(t){t&&l(n),A.d(),E=!1,o(j)}}}function T(t,e,n){let o,r;i(t,L,(t=>n(2,o=t))),i(t,D,(t=>n(3,r=t)));let u=!1,c=null;return P.on("call",(t=>{window.navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((e=>{t.answer(e),t.on("stream",(t=>{n(0,u=!0),n(1,c.srcObject=t,c)}))}))})),[u,c,o,r,()=>{window.navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((t=>{P.call(o,t).on("stream",(t=>{n(0,u=!0),n(1,c.srcObject=t,c)}))}))},function(){o=this.value,L.set(o)},function(t){v[t?"unshift":"push"]((()=>{c=t,n(1,c)}))}]}P.on("open",(t=>D.set(t)));const W=new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),N(this,t,T,B,u,{})}}({target:document.body,props:{name:"world"}});return"undefined"!=typeof module&&module.hot&&("undefined"!=typeof module&&module.hot.dispose((()=>{W.$destroy()})),"undefined"!=typeof module&&module.hot.accept()),W}();
//# sourceMappingURL=bundle.js.map
