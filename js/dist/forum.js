module.exports=function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=15)}([,,function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r=function(){function t(t,n,e,r){this.icon=t,this.text=n,this.url=e,this.internal=r}t.fromJsObject=function(n){return new t(n.icon,n.text,n.url,n.internal)};var n=t.prototype;return n.toString=function(){return JSON.stringify({icon:this.icon,text:this.text,url:this.url,internal:this.internal})},n.toJSON=function(){return{icon:this.icon,text:this.text,url:this.url,internal:this.internal}},t}()},,,function(t,n){t.exports=flarum.core.compat["forum/components/Separator"]},function(t,n){t.exports=flarum.core.compat.extend},function(t,n){t.exports=flarum.core.compat["forum/components/IndexPage"]},function(t,n){t.exports=flarum.core.compat["forum/components/LinkButton"]},,,,,,,function(t,n,e){"use strict";e.r(n);var r=e(6),o=e(7),i=e.n(o),u=e(8),a=e.n(u),c=e(5),f=e.n(c),s=e(2);app.initializers.add("davwheat/custom-sidenav-links",(function(t){var n=t.data["davwheat-custom-sidenav-links.link-data"];if(n&&"[]"!==n){var e=JSON.parse(n),o=[];e.forEach((function(t){return o.push(s.a.fromJsObject(t))})),Object(r.extend)(i.a.prototype,"navItems",(function(n){n.add("customLinks-separator1",m(f.a,null),1),o.forEach((function(e,r){var o=e.url;e.internal&&""===(o=o.replace(t.forum.attribute("baseUrl"),""))&&(o="/"),n.add("customLink-"+r,m(a.a,{href:o,rel:"noopener noreferrer",icon:e.icon},e.text),0)})),n.add("customLinks-separator2",m(f.a,null),-1)}))}}))}]);
//# sourceMappingURL=forum.js.map