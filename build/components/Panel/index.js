import{_ as e,a as r}from"../../tslib.es6-4bca28b2.js";import a from"react";import{a as d}from"../../index-59462297.js";var o=a.forwardRef((function(o,l){var n=o.color,i=void 0===n?"plain":n,p=o.padding,s=void 0===p?"default":p,t=o.bordered,f=void 0!==t&&t,c=o.raised,m=void 0!==c&&c,u=o.well,v=void 0!==u&&u,b=o.className,w=void 0===b?null:b,g=e(o,["color","padding","bordered","raised","well","className"]);return a.createElement("div",r({className:"panel"+d("plain"!==i,"panel--"+i)+d("default"!==s,"panel--"+s)+d(f,(function(){return"string"==typeof f?"panel--bordered-"+f:Array.isArray(f)?f.map((function(e){return"panel--bordered-"+e})).join(" "):"panel--bordered"}))+d(m,"panel--raised")+d(v,"panel--well")+d(w),ref:l},g))}));export{o as Panel};