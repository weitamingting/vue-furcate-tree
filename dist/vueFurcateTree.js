!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vueFurcateTree",[],t):"object"==typeof exports?exports.vueFurcateTree=t():e.vueFurcateTree=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,n){"use strict";var r=n(9);t.a={name:"VueFurcateTree",props:{ftData:{type:Array,default:function(){return[]},required:!0},expandable:{type:Boolean,default:function(){return!0},required:!1},expandAll:{type:Boolean,default:function(){return!1},required:!1},renderFunc:{type:Function,required:!1}},components:{vueFtNode:{functional:!0,props:this.props,render:r.a}},data:function(){return{expandAllCopy:this.expandAll}},watch:{expandAll:function(){this.expandAllCopy=this.expandAll}},methods:{}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=function e(t){e.installed||(e.installed=!0,t.component(r.a.name,r.a))};r.a.install=o,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r.a),t.default=r.a},function(e,t,n){"use strict";function r(e){n(3)}var o=n(0),i=n(10),a=n(8),u=r,c=a(o.a,i.a,!1,u,null,null);t.a=c.exports},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(6)("e4c2aaec",r,!0,{})},function(e,t,n){t=e.exports=n(5)(!1),t.push([e.i,'.vue-ftree,.vue-ftree .vue-ftree-node{display:flex;justify-content:center}.vue-ftree .vue-ftree-node{position:relative;flex:1 1;flex-wrap:wrap;align-items:flex-start}.vue-ftree .vue-ftree-node:before{border-right:1px solid #ccc;left:0}.vue-ftree .vue-ftree-node:after,.vue-ftree .vue-ftree-node:before{content:"";display:block;width:50%;height:20px;border-top:1px solid #ccc;position:absolute;top:-22px;flex-shrink:0}.vue-ftree .vue-ftree-node:after{right:0}.vue-ftree .vue-ftree-node:first-child:before,.vue-ftree .vue-ftree-node:last-child:after{border-top-color:transparent}.vue-ftree .vue-ftree-node .vue-ftree-node-content{display:inline-block;flex-grow:0;padding:0 10px}.vue-ftree .vue-ftree-node .vue-ftree-node-content .vue-ftree-node-content-inner{border:1px solid #ccc;padding:5px 10px;box-shadow:0 0 10px rgba(0,0,0,.2);position:relative;cursor:pointer;background-color:#fff}.vue-ftree .vue-ftree-node .vue-ftree-node-content .vue-ftree-node-content-inner:before{content:"";display:block;width:10px;height:10px;border:5px solid;box-sizing:border-box;border-color:#ccc transparent transparent;position:absolute;left:50%;top:-5px;transform:translateX(-50%)}.vue-ftree .vue-ftree-node .vue-ftree-node-content.vue-ftree-expand>.vue-ftree-node-content-inner:after{display:block!important}.vue-ftree .vue-ftree-node .vue-ftree-node-content.vue-ftree-expand+.vue-ftree-children{display:flex}.vue-ftree .vue-ftree-node.has-children>.vue-ftree-node-content>.vue-ftree-node-content-inner:after{content:"";display:none;width:1px;height:20px;background-color:#ccc;position:absolute;top:100%;left:50%}.vue-ftree .vue-ftree-node .vue-ftree-children{display:none;width:100%;align-items:flex-start;justify-content:space-between;padding-top:40px;position:relative}.vue-ftree>.vue-ftree-node:after,.vue-ftree>.vue-ftree-node:before{content:"";display:none}.vue-ftree>.vue-ftree-node>.vue-ftree-node-content>.vue-ftree-node-content-inner:before{display:none}',""])},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=f[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));f[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var t,n,r=document.querySelector("style["+b+'~="'+e.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(y){var i=p++;r=l||(l=o()),t=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),t=u.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function u(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),x.ssrId&&e.setAttribute(b,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s=n(7),f={},d=c&&(document.head||document.getElementsByTagName("head")[0]),l=null,p=0,v=!1,h=function(){},x=null,b="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,o){v=n,x=o||{};var i=s(e,t);return r(i),function(t){for(var n=[],o=0;o<i.length;o++){var a=i[o],u=f[a.id];u.refs--,n.push(u)}t?(i=s(e,t),r(i)):i=[];for(var o=0;o<n.length;o++){var u=n[o];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete f[u.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],u=i[1],c=i[2],s=i[3],f={id:e+":"+o,css:u,media:c,sourceMap:s};r[a]?r[a].parts.push(f):n.push(r[a]={id:a,parts:[f]})}return n}},function(e,t){e.exports=function(e,t,n,r,o,i){var a,u=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(a=e,u=e.default);var s="function"==typeof u?u.options:u;t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns,s._compiled=!0),n&&(s.functional=!0),o&&(s._scopeId=o);var f;if(i?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},s._ssrRegister=f):r&&(f=r),f){var d=s.functional,l=d?s.render:s.beforeCreate;d?(s._injectStyles=f,s.render=function(e,t){return f.call(t),l(e,t)}):s.beforeCreate=l?[].concat(l,f):[f]}return{esModule:a,exports:u,options:s}}},function(e,t,n){"use strict";function r(e,t){function n(t){var r=t.children&&t.children.map(function(e){return n(e)}),o=e(t.tag,t.data,r);return o.text=t.text,o.isComment=t.isComment,o.componentOptions=t.componentOptions,o.elm=t.elm,o.context=t.context,o.ns=t.ns,o.isStatic=t.isStatic,o.key=t.key,o}return t.map(function(e){return n(e)})}/*!
 * vue furcate tree Javascript Library
 * weitamingting - v1.0.0 (2020-05-16T14:55:51+0800)
 * https://github.com/weitamingting | Released under MIT license
 */
var o=!1,i=function(e,t,n){if(n||!(n.length<0)){var r=[];return n.forEach(function(n){r.push(a(e,t,n))}),r}},a=function e(t,n,r){var o=r.children&&r.children.length>0,i=[];if(o){var a=[];r.children.forEach(function(r){a.push(e(t,n,r))}),i.push(t("div",{class:{"vue-ftree-children":!0}},a))}return t("div",{class:{"vue-ftree-node":!0,"has-children":o}},[u(t,n,r),i])},u=function(e,t,n){var r={},i=t.listeners,a=t.props,u=a.expandable,s=a.expandAll;return o||(n.expand=s),i.expand&&u&&(r.click=function(){o=!0,n.expand=!n.expand,i.expand({nodeData:n,expanded:n.expand})}),e("div",{class:{"vue-ftree-node-content":!0,"vue-ftree-expand":n.expand},on:r},[c(e,t,n)])},c=function(e,t,n){var o=t.props.renderFunc;if(o&&"[object Function]"===Object.prototype.toString.call(o)){var i=o(n),a={},u=t.listeners;return u.click&&(a.click=function(){u.click(n,event)}),e("div",{class:["vue-ftree-node-content-inner"],domProps:{innerHTML:i},on:a},[])}var c=r(e,t.children);return e("div",{class:["vue-ftree-node-content-inner"],on:{click:function(e){t.listeners.click&&t.listeners.click(n,e)}}},s(c,n))},s=function e(t,n){return t.forEach(function(t){var r=t.text;if(r){r=r.trim();var o=/\#\{.*?\}/g;r=r.replace(o,function(e){for(var t=e.replace(/\#|\{|\}/g,""),r=t.split("."),o=n,i=[],a=0,u=r.length;a<u;a++){i.push(r[a]);try{o=o[r[a]]}catch(e){throw delete n.children,Error("节点"+JSON.stringify(n)+"中无法找到属性："+i.join("."))}}return o}),t.text=r}t.children&&t.children.length>0&&e(t.children,n)}),t},f=function(e,t){var n=t.props,r=n.ftData,a=i(e,t,r);return o=!1,e("div",{class:["vue-ftree"]},[a])};t.a=f},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-ftree-wrapper"},[n("vueFtNode",{attrs:{"ft-data":e.ftData,"render-func":e.renderFunc,expandable:e.expandable,"expand-all":e.expandAllCopy},on:{click:e.$listeners.click,expand:e.$listeners.expand}},[e._t("default")],2)],1)},o=[],i={render:r,staticRenderFns:o};t.a=i}])});
//# sourceMappingURL=vueFurcateTree.js.map