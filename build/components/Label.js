import e from"react";import r from"prop-types";import{_ as n,a as o}from"../tslib.es6-633881f1.js";import{a}from"../index-74b9c8d0.js";var t=function(r){var t=r.size,l=void 0===t?"default":t,c=r.color,i=void 0===c?"primary":c,s=r.bordered,d=void 0!==s&&s,m=r.removable,u=void 0!==m&&m,f=r.onRemove,b=void 0===f?null:f,p=r.raised,v=void 0!==p&&p,g=r.className,y=void 0===g?null:g,E=r.children,h=n(r,["size","color","bordered","removable","onRemove","raised","className","children"]);return e.createElement("span",o({className:"label label--"+i+a("default"!==l,"label--"+l)+a(d,"label--bordered")+a(v,"label--raised")+a(y)},h),E,u?e.createElement("span",{className:"icon-close",onClick:b}):null)};t.propTypes={size:r.oneOf(["tiny","small","default","large"]),color:r.oneOf(["primary","secondary","tertiary","success","info","warning-alt","warning","danger","dark","light"]),bordered:r.bool,removable:r.bool,onRemove:r.func,raised:r.bool,className:r.string,children:r.node.isRequired},t.Primary=function(r){return e.createElement(t,o({color:"primary"},r))},t.Secondary=function(r){return e.createElement(t,o({color:"secondary"},r))},t.Tertiary=function(r){return e.createElement(t,o({color:"tertiary"},r))},t.Success=function(r){return e.createElement(t,o({color:"success"},r))},t.Info=function(r){return e.createElement(t,o({color:"info"},r))},t.WarningAlt=function(r){return e.createElement(t,o({color:"warning-alt"},r))},t.Warning=function(r){return e.createElement(t,o({color:"warning"},r))},t.Danger=function(r){return e.createElement(t,o({color:"danger"},r))},t.Dark=function(r){return e.createElement(t,o({color:"dark"},r))},t.Light=function(r){return e.createElement(t,o({color:"light"},r))};export{t as Label};
