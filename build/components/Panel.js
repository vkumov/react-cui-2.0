import e from"react";import r from"prop-types";import{_ as a,a as o}from"../tslib.es6-633881f1.js";import{a as n}from"../index-74b9c8d0.js";var d=e.forwardRef((function(r,d){var l=r.color,i=void 0===l?"plain":l,s=r.padding,p=void 0===s?"default":s,t=r.bordered,f=void 0!==t&&t,c=r.raised,m=void 0!==c&&c,u=r.well,b=void 0!==u&&u,g=r.className,v=void 0===g?null:g,y=a(r,["color","padding","bordered","raised","well","className"]);return e.createElement("div",o({className:"panel"+n("plain"!==i,"panel--"+i)+n("default"!==p,"panel--"+p)+n(f,(function(){return"string"==typeof f?"panel--bordered-"+f:Array.isArray(f)?f.map((function(e){return"panel--bordered-"+e})).join(" "):"panel--bordered"}))+n(m,"panel--raised")+n(b,"panel--well")+n(v),ref:d},y))}));d.propTypes={color:r.oneOf(["plain","primary","secondary","tertiary","success","info","warning-alt","warning","danger","dark","light"]),padding:r.oneOf(["none","compressed","default","loose"]),bordered:r.any,raised:r.bool,well:r.bool,className:r.string};export{d as Panel};
