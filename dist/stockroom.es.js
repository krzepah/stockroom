function t(t,n){for(var e in n)t[e]=n[e];return t}function n(n,r){if(Array.isArray(n)){n=n.slice(0,r.length);for(var o=0;o<r.length;o++)void 0!==r[o]&&(n[o]=e(r[o],n[o]))}else for(var i in n=t({},n),r)r.hasOwnProperty(i)&&(void 0===r[i]?delete n[i]:n[i]=e(r[i],n[i]));return n}function e(t,e){return null!=e&&null!=t&&"object"==typeof e&&"object"==typeof t?n(e,t):t}function r(t,n){var e,r;if(Array.isArray(t))for(e=new Array(t.length),r=0;r<t.length;r++)t[r]!==n[r]&&(e[r]=o(t[r],n[r]));else for(r in e={},t)t.hasOwnProperty(r)&&t[r]!==n[r]&&(e[r]=o(t[r],n[r]));return e}function o(t,n){return null!=t&&null!=n&&"object"==typeof t&&"object"==typeof n?r(t,n):t}var i=function(t){return!(t instanceof Event)};export default function(e){var o=[],a={},u=[],f=!1;function l(t){var e=t.overwrite,r=t.update,o=t.action,i=t.initial;"@@STATE"===t.type&&(!0===t.partial&&(r=n(a,r),e=!0),c(r,!0===e,o,!1,t.params),i&&(f=!0,s()))}function c(n,e,i,u,f){var l=a;a=t(e?{}:t({},a),n),u&&p({type:"@@STATE",overwrite:e,update:e?a:r(a,l),action:i,partial:!e});for(var c=o,s=0;s<c.length;s++)c[s](a,i,n,f)}function p(t){1===u.push(t)&&setTimeout(s)}function s(){f&&u.length>0&&(e.postMessage(u),u.length=0)}function v(t){for(var n=[],e=0;e<o.length;e++)o[e]===t?t=null:n.push(o[e]);o=n}return e.addEventListener("message",function(t){var n=t.data;if("object"!=typeof n);else if("pop"in n)if(1===n.length)l(n[0]);else for(var e=0;e<n.length;e++)l(n[e]);else l(n)}),{action:function(t){return function(){for(var n=[],e=arguments.length;e--;)n[e]=arguments[e];var r="function"==typeof t?t.apply(void 0,n):t;"string"==typeof r&&(r={type:r,params:n.filter(i)}),r&&!r.type?c(r,!1,t.name,!0,n):p({type:"@@ACTION",action:r})}},setState:function(t,n,e){return c(t,n,e,!0)},getState:function(){return a},subscribe:function(t){return o.push(t),function(){v(t)}},unsubscribe:v}};
//# sourceMappingURL=stockroom.es.js.map
