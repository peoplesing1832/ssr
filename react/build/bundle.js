(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};require("core-js/modules/es.array.for-each.js"),require("core-js/modules/es.array.iterator.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.promise.js"),require("core-js/modules/es.string.iterator.js"),require("core-js/modules/web.dom-collections.for-each.js"),require("core-js/modules/web.dom-collections.iterator.js");const t=require("express");var r=e.n(t);const n=require("react-router-config"),o=require("react");var c=e.n(o);const u=require("react-router-dom"),i=require("react-dom/server"),a=require("react-redux"),l=function(){return c().createElement("h1",null,"Header")},s=function(e){var t=e.children;return c().createElement("div",null,t)},f=function(){return c().createElement("h1",null,"Footer")};function p(e,t,r,n,o,c,u){try{var i=e[c](u),a=i.value}catch(e){return void r(e)}i.done?t(a):Promise.resolve(a).then(n,o)}require("regenerator-runtime/runtime.js");var m="GET_HOME",d="GET_HOME_SUCCESS",y="GET_HOME_ERROR",v=function(e){return{type:GET_MORE_ERROR,error:e}};function h(e,t,r,n,o,c,u){try{var i=e[c](u),a=i.value}catch(e){return void r(e)}i.done?t(a):Promise.resolve(a).then(n,o)}var b=function(e){return c().createElement(c().Fragment,null,c().createElement(u.Link,{to:"/more"},"more"),c().createElement("h1",null,"Home"))};b.getInitialData=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t(function(){var e,t=(e=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t({type:m}),t({type:d,payload:[{name:"3"},{name:"4"}]})}catch(e){t(v(e))}case 1:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var c=e.apply(t,r);function u(e){p(c,n,o,u,i,"next",e)}function i(e){p(c,n,o,u,i,"throw",e)}u(void 0)}))});return function(e){return t.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var c=e.apply(t,r);function u(e){h(c,n,o,u,i,"next",e)}function i(e){h(c,n,o,u,i,"throw",e)}u(void 0)}))});return function(e){return t.apply(this,arguments)}}();const j=(0,a.connect)((function(e){return{list:e.home.list}}),null)(b);function O(e,t,r,n,o,c,u){try{var i=e[c](u),a=i.value}catch(e){return void r(e)}i.done?t(a):Promise.resolve(a).then(n,o)}require("node-fetch");var g="GET_MORE",E="GET_MORE_SUCCESS",w="GET_MORE_ERROR",P=function(e){return{type:w,error:e}};function R(e,t,r,n,o,c,u){try{var i=e[c](u),a=i.value}catch(e){return void r(e)}i.done?t(a):Promise.resolve(a).then(n,o)}function _(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var c=e.apply(t,r);function u(e){R(c,n,o,u,i,"next",e)}function i(e){R(c,n,o,u,i,"throw",e)}u(void 0)}))}}var x=function(){return c().createElement(c().Fragment,null,c().createElement(u.Link,{to:"/home"},"home"),c().createElement("h1",null,"More"))};x.getInitialData=_(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",dispatch(function(){var e,t=(e=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t({type:g}),t({type:E,payload:[{name:"1"},{name:"2"}]})}catch(e){t(P(e))}case 1:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var c=e.apply(t,r);function u(e){O(c,n,o,u,i,"next",e)}function i(e){O(c,n,o,u,i,"throw",e)}u(void 0)}))});return function(e){return t.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));const S=(0,a.connect)((function(e){return{list:e.more.list}}),null)(x);function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}require("core-js/modules/es.object.get-prototype-of.js"),require("core-js/modules/es.object.set-prototype-of.js");const I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(i,e);var t,r,n,o,u=(n=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(n);if(o){var r=C(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return T(this,e)});function i(){return D(this,i),u.apply(this,arguments)}return t=i,(r=[{key:"UNSAFE_componentWillMount",value:function(){var e=this.props.staticContext;(void 0===e?{}:e).NotFound=!0}},{key:"render",value:function(){return c().createElement(c().Fragment,null,c().createElement("h1",null,"404"))}}])&&k(t.prototype,r),i}(c().PureComponent),F=[{path:"/",exact:!0,render:function(e){var t=e.location;return c().createElement(u.Redirect,{to:{pathname:"/home",state:{from:t}}})}},{path:"/home",exact:!0,component:j,getInitialData:j.getInitialData},{path:"/more",exact:!0,component:S,getInitialData:S.getInitialData},{path:"*",component:I}],G=function(){return c().createElement("div",null,c().createElement(l,null),c().createElement(s,null,(0,n.renderRoutes)(F)),c().createElement(f,null))},H=require("redux"),L=require("redux-thunk");var N=e.n(L);function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){W(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function W(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}require("core-js/modules/es.object.define-property.js");var z={list:[],load:!1,error:!1};function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){K(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function K(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Q={list:[],load:!1,error:!1};var V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return A(A({},e),{},{load:!0,error:!1});case d:var r=t.payload;return{load:!1,list:r,error:!1};case y:return A(A({},e),{},{load:!1,error:!0});default:return z}},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return J(J({},e),{},{load:!0,error:!1});case E:var r=t.payload;return{load:!1,list:r,error:!1};case w:return J(J({},e),{},{load:!1,error:!0});default:return Q}},Y=(0,H.combineReducers)({home:V,more:X});var Z=r()();Z.use(r().static("public")),Z.get("*",(function(e,t){var r={},o=[],l=(0,H.createStore)(Y,(0,H.applyMiddleware)(N()));(0,n.matchRoutes)(F,e.path).forEach((function(e){var t=e.route;t.getInitialData&&o.push(t.getInitialData(l.dispatch))})),Promise.all(o).then((function(){var n=function(e,t,r){var n=(0,i.renderToString)(c().createElement(a.Provider,{store:r},c().createElement(u.StaticRouter,{location:e.path,context:t},c().createElement(G,null))));return'\n    <html>\n      <head></head>\n      <body>\n        <div id="root">'.concat(n,'</div>\n        \x3c!-- 水合 --\x3e\n        <script src="hydrate.js"><\/script>\n      </body>\n    </html>\n  ')}(e,r,l);"REPLACE"===(null==r?void 0:r.action)?t.redirect(301,r.url):r.NotFound?(t.status(404),t.send(n)):t.send(n)})).catch((function(){t.send("sever error")}))})),Z.listen(3e3,(function(){console.log("listening on port 3000 💗")}))})();