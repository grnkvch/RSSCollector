(this.webpackJsonprsscollector=this.webpackJsonprsscollector||[]).push([[0],{27:function(e,t,n){e.exports=n(64)},39:function(e,t,n){},40:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},41:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"addContent",(function(){return S})),n.d(r,"addSource",(function(){return P})),n.d(r,"toggleSource",(function(){return C})),n.d(r,"fetchContent",(function(){return N})),n.d(r,"fetchSource",(function(){return x}));var c=n(0),o=n.n(c),a=n(9),u=n.n(a),i=n(11),s=n(3),l=n(26),f=n(4),p=n(10);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={content:[],sources:new Map},O=Object(s.c)({content:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CONTENT":var n=t.payload.content;return m({},e,{content:n});case"ADD_SOURCE":var r=e.sources,c=t.payload.sourceList;return m({},e,{sources:new Map([].concat(Object(f.a)(r),Object(f.a)(c.map((function(e){return[e,!0]})))))});case"TOGGLE_SOURCE":var o=e.sources,a=t.payload.source,u=new Map(o);return u.set(a,!u.get(a)),m({},e,{sources:u});default:return e}}}),h=Object(s.d)(O,Object(s.a)(l.a)),v=(n(39),n(40),n(41),n(7)),y=n(6),g=n.n(y);function E(e,t,n){var r=new Array(t),c=0;return e.reduce((function(e,r){return e[c]||(e[c]=[]),e[c].push(n?n(r):r),(c+=1)>t-1&&(c=0),Object(f.a)(e)}),r)}var j=n(8),w=n.n(j),k=n(14);function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map,t="https://rss-collector-back.herokuapp.com/?";return e.forEach((function(e,n){e&&(t+="source[]=".concat(n,"&"))})),console.log("formQuery",t),t}var S=function(e){return{type:"ADD_CONTENT",payload:{content:e}}},P=function(e){return{type:"ADD_SOURCE",payload:{sourceList:e}}},C=function(e){return{type:"TOGGLE_SOURCE",payload:{source:e}}},N=function(){return function(){var e=Object(k.a)(w.a.mark((function e(t,n){var r,c,o,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n(),c=r.content.sources,e.next=3,g.a.get(D(c));case 3:return o=e.sent,a=o.data,console.log("content",a),t(S(a)),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},x=function(){return function(){var e=Object(k.a)(w.a.mark((function e(t){var n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://rss-collector-back.herokuapp.com/get-sources");case 2:return n=e.sent,r=n.data,console.log("sourceList",r),t(P(r)),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},A=function(e){return e.content.sources},L=function(e){return e.content.content};n(60);var T=function(e){var t=e.item;return o.a.createElement("a",{key:t.link,className:"card",href:t.link,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("h4",null,t.sourceTitle),o.a.createElement("p",{className:"date"},new Date(t.pubDate).toLocaleString("ru-RU",{year:"numeric",month:"long",day:"numeric"}),o.a.createElement("br",null),new Date(t.pubDate).toLocaleTimeString("ru-RU")),!!t.thumbnail&&o.a.createElement("img",{src:t.thumbnail,alt:"cute random ",style:{width:"100%",height:"100%"}}),o.a.createElement("p",{className:"description"},t.title))};n(61);var R=function(e){var t=e.onClick,n=void 0===t?function(){}:t,r=e.checked;return o.a.createElement("div",{onClick:n,className:"button ".concat(r&&"checked")},e.children)},_=(n(62),function(e){var t=e.controls,n=e.onClick;return o.a.createElement("div",{className:"control-panel"},Object(f.a)(t).map((function(e){var t=Object(v.a)(e,2),r=t[0],c=t[1];return o.a.createElement(R,{key:r,checked:c,onClick:function(){return n(r)}},r)})))});n(63);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var U=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r),W=Object(i.b)((function(e,t){return{sources:A(e),data:L(e)}}),U)((function(e){console.log("props",e);var t=e.fetchSource,n=e.sources,r=e.toggleSource,a=e.fetchContent,u=e.data,i=Object(c.useState)(1),s=Object(v.a)(i,2),l=s[0],f=s[1],p=Object(c.useState)([]),d=Object(v.a)(p,2),m=d[0],b=d[1];return Object(c.useEffect)((function(){var e=function(){var e=document.querySelector(".content-container").offsetWidth;if(console.log("width",e),e){var t=Math.floor(e/200)<1?1:Math.floor(e/200);t!==l&&f(t)}};e(),window.addEventListener("resize",e)})),Object(c.useEffect)((function(){a()}),[n]),Object(c.useEffect)((function(){t()}),[]),Object(c.useEffect)((function(){Array.isArray(u)&&b(E(u,l,(function(e){return o.a.createElement(T,{item:e})})))}),[l,u]),o.a.createElement("div",{className:"container"},o.a.createElement(_,{controls:n,onClick:r}),o.a.createElement("div",{className:"content-container"},E(m).map((function(e){return o.a.createElement("div",{style:{maxWidth:"".concat(1/l*100,"%")}},e)}))))}));var G=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},"RB-NEWS"),o.a.createElement("div",{style:{maxWidth:"1160px"}},o.a.createElement(W,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(o.a.createElement(i.a,{store:h},o.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.b0f8b9c2.chunk.js.map