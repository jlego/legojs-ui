(function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:false};e[r].call(o.exports,o,o.exports,n);o.loaded=true;return o.exports}n.m=e;n.c=t;n.p="./";return n(0)})({0:function(e,t,n){"use strict";var r=n(72);var o=u(r);var a=n(73);var i=u(a);var c=n(75);var s=u(c);function u(e){return e&&e.__esModule?e:{default:e}}HBY.router({"/test":function e(){console.warn("7777777777777");HBY.create({view:i.default,onAfter:function e(t){}})},"/test/list":function e(){HBY.create({view:i.default,data:{list:[{first:"home",last:"99999"},{first:"test",last:"mmmmm"}]},components:[{el:"#home",view:o.default,data:[{first:"home2",last:"999992"},{first:"test2",last:"mmmmm2"}]},{el:"#test",view:o.default,data:[{first:"home3",last:"999993"},{first:"test3",last:"mmmmm3"}]}]})},"/test/detail/:id":function e(t){console.warn("pppppppppp")}})},72:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();var r=a(["<div>\n          ","\n        </div>"],["<div>\n          ","\n        </div>"]),o=a(['<a id="','" href="#/home" style="display:block;">',"</a>\n"],['<a id="','" href="#/home" style="display:block;">',"</a>\\n"]);function a(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function i(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function c(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function s(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var u=function(e){s(t,e);function t(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};i(this,t);var n={events:{"click #400":"theClick"}};$.extend(true,n,e);return c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n))}n(t,[{key:"render",value:function e(){var t=this.data||[];var n=hx(r,t.map(function(e,t){return hx(o,e.first,e.last)}));return n}},{key:"theClick",value:function e(t){t.stopPropagation();HBY.trigger("data_update",{aa:1})}}]);return t}(Lego.UI.Baseview);t.default=u},73:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();var o=s(['<div><div id="alertDiv"></div></div>'],['<div><div id="alertDiv"></div></div>']);var a=n(74);var i=c(a);function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function u(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function l(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function f(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var p=function(e){f(t,e);function t(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};u(this,t);var n={events:{"click #test":"theClick"},listen:{data_update:function e(t){debug.warn("pppppppppp",t)}},components:[{el:"#alertDiv",view:i.default,data:{type:"success",closable:true,showIcon:true,message:"警告提示内容",description:"警告提示的辅助性文字介绍"}}]};$.extend(true,n,e);return l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n))}r(t,[{key:"render",value:function e(){var t=this.data.list||[];var n=hx(o);return n}},{key:"theClick",value:function e(t){debug.warn("66666666666")}}]);return t}(Lego.UI.Baseview);t.default=p},74:function(e,t){/**
	 * alert.js v0.1.2
	 * (c) 2016 Ronghui Yu
	 * @license MIT
	 */
"use strict";var n=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol==="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();var o=c(['\n        <div class="alert alert-'," "," ",'">\n            <i class="anticon ',' lego-alert-icon" style="display:',';"></i>\n            <span class="lego-alert-message">',"</span>\n            ","\n            ","\n        </div>\n        "],['\n        <div class="alert alert-'," "," ",'">\n            <i class="anticon ',' lego-alert-icon" style="display:',';"></i>\n            <span class="lego-alert-message">',"</span>\n            ","\n            ","\n        </div>\n        "]);var a=c(['<span class="lego-alert-description">',"</span>"],['<span class="lego-alert-description">',"</span>"]);var i=c(['<a class="lego-alert-close-icon"><i class="anticon anticon-cross"></i></a>'],['<a class="lego-alert-close-icon"><i class="anticon anticon-cross"></i></a>']);function c(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function s(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function u(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&((typeof t==="undefined"?"undefined":n(t))==="object"||typeof t==="function")?t:e}function l(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof t==="undefined"?"undefined":n(t)))}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var f=function(e){l(t,e);function t(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};s(this,t);var n={events:{"click .lego-alert-close-icon":"onClose"},data:{type:"info",closable:false,closeText:"",message:"",description:"",onClose:function e(){},showIcon:false,banner:false}};$.extend(true,n,e);return u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n))}r(t,[{key:"render",value:function e(){var t=this.data||{};var n="";switch(t.type){case"success":n="check";break;case"info":n="info";break;case"warning":n="exclamation";break;case"error":n="cross";break}var r=hx(o,t.type,t.description?"lego-alert-with-description":"",t.showIcon?"":"lego-alert-no-icon",t.description?"anticon-"+n+"-circle-o":"anticon-"+n+"-circle",t.showIcon?"":"none",t.message,t.description?hx(a,t.description):"",t.closable?hx(i):"");return r}},{key:"onClose",value:function e(t){t.stopPropagation();this.remove();if(typeof this.data.onClose==="function")this.data.onClose()}}]);return t}(Lego.UI.Baseview);e.exports=f},75:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();function r(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function o(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function a(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var i=function(e){a(t,e);function t(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};r(this,t);var n={gg:{url:"./content2.json",listTarget:"data",model:{first:"",last:"",id:0}},ff:{url:"./content2.json"}};$.extend(true,n,e);return o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n))}n(t,[{key:"parse",value:function e(t){return t[0].data}}]);return t}(HBY.Data);t.default=new i}});