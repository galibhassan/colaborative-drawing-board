!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var o=t(1);"string"==typeof o&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};t(3)(o,r);o.locals&&(e.exports=o.locals)},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,"body{\r\n    background: rgb(25, 25, 41);\r\n    color: red\r\n}\r\ncanvas{\r\n    box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, .5)\r\n}",""])},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var r=(i=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(u," */")),a=o.sources.map(function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")});return[t].concat(a).concat([r]).join("\n")}var i,s,u;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2],"{").concat(t,"}"):t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var i=0;i<e.length;i++){var s=e[i];null!=s[0]&&o[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="(".concat(s[2],") and (").concat(t,")")),n.push(s))}},n}},function(e,n,t){"use strict";var o,r={},a=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}();function s(e,n){for(var t=[],o={},r=0;r<e.length;r++){var a=e[r],i=n.base?a[0]+n.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};o[i]?o[i].parts.push(s):t.push(o[i]={id:i,parts:[s]})}return t}function u(e,n){for(var t=0;t<e.length;t++){var o=e[t],a=r[o.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](o.parts[i]);for(;i<o.parts.length;i++)a.parts.push(b(o.parts[i],n))}else{for(var s=[];i<o.parts.length;i++)s.push(b(o.parts[i],n));r[o.id]={id:o.id,refs:1,parts:s}}}}function c(e){var n=document.createElement("style");if(void 0===e.attributes.nonce){var o=t.nc;o&&(e.attributes.nonce=o)}if(Object.keys(e.attributes).forEach(function(t){n.setAttribute(t,e.attributes[t])}),"function"==typeof e.insert)e.insert(n);else{var r=i(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var l,f=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function v(e,n,t,o){var r=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=f(n,r);else{var a=document.createTextNode(r),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function d(e,n,t){var o=t.css,r=t.media,a=t.sourceMap;if(r&&e.setAttribute("media",r),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var h=null,p=0;function b(e,n){var t,o,r;if(n.singleton){var a=p++;t=h||(h=c(n)),o=v.bind(null,t,a,!1),r=v.bind(null,t,a,!0)}else t=c(n),o=d.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a());var t=s(e,n);return u(t,n),function(e){for(var o=[],a=0;a<t.length;a++){var i=t[a],c=r[i.id];c&&(c.refs--,o.push(c))}e&&u(s(e,n),n);for(var l=0;l<o.length;l++){var f=o[l];if(0===f.refs){for(var v=0;v<f.parts.length;v++)f.parts[v]();delete r[f.id]}}}}},function(e,n,t){"use strict";t.r(n);t(0);function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._canvas=document.createElement("canvas"),this._canvas.width=n,this._canvas.height=t,this._canvas.id="canvas",document.body.appendChild(this._canvas)}var n,t,r;return n=e,(t=[{key:"getCanvas",value:function(){return this._canvas}}])&&o(n.prototype,t),r&&o(n,r),e}();function a(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.brushSize=4|n}var n,t,o;return n=e,(t=[{key:"getBrushSize",value:function(){return this.brushSize}},{key:"setBrushSize",value:function(e){this.brushSize=e}},{key:"draw",value:function(e,n,t,o,r){var a=e.getContext("2d");a.beginPath(),a.moveTo(n,t),a.lineTo(o,r),a.stroke()}}])&&a(n.prototype,t),o&&a(n,o),e}();function s(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}for(var u=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._canvas=n,this._isMouseDown=!1,this._isMouseMoving=!1,this._listenToCanvasEvents()}var n,t,o;return n=e,(t=[{key:"isCanvasDrawable",value:function(){this._isMouseDown&&this._isMouseMoving?console.log("yesss.. drawable!"):console.log("nope.. not drawable")}},{key:"_listenToCanvasEvents",value:function(){this._canvas.addEventListener("mousedown",this._handleMouseDown),this._canvas.addEventListener("mousemove",this._handleMouseMove),this._canvas.addEventListener("mouseup",this._handleMouseUp)}},{key:"_handleMouseDown",value:function(e){this._isMouseDown=!0,console.log(this._isMouseDown)}},{key:"_handleMouseMove",value:function(e){this._isMouseMoving=!0}},{key:"_handleMouseUp",value:function(e){this._isMouseDown=!1,console.log(this._isMouseDown)}}])&&s(n.prototype,t),o&&s(n,o),e}(),c=new r(500,500),l=(new i,new u(c.getCanvas()));;)l.isCanvasDrawable()&&console.log("yessss");console.log("")}]);
//# sourceMappingURL=main.js.map