import{_ as e,a as r}from"../../tslib.es6-4bca28b2.js";import a from"react";import{a as t}from"../../index-59462297.js";var n=function(n){var l=n.color,i=void 0===l?"primary":l,s=n.size,c=void 0===s?"default":s,o=n.children,m=n.className,u=void 0===m?null:m,d=e(n,["color","size","children","className"]);return a.createElement("span",r({className:"badge badge--"+i+t("default"!==c,"badge--"+c)+t(u)},d),o)};n.Dot=function(e){return a.createElement(n,r({},e,{size:"dot"}))},n.Tiny=function(e){return a.createElement(n,r({},e,{size:"tiny"}))},n.Small=function(e){return a.createElement(n,r({},e,{size:"small"}))},n.Default=function(e){return a.createElement(n,r({},e,{size:"default"}))},n.Large=function(e){return a.createElement(n,r({},e,{size:"large"}))},n.Wrapper=function(e){var r=e.children,n=e.className,l=void 0===n?null:n;return a.createElement("span",{className:"badge-wrapper"+t(l)},r)};var l=function(t){var l=t.children,i=t.badge,s=t.wrapperClass,c=void 0===s?null:s,o=e(t,["children","badge","wrapperClass"]);return a.createElement(n.Wrapper,{className:c},l,a.createElement(n,r({},o),i))};export default n;export{n as Badge,l as WithBadge};
