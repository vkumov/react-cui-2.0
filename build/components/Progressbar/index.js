import{_ as e,a}from"../../tslib.es6-a57c95d4.js";import r from"react";import{DisplayIf as t}from"../Conditional.js";import{a as o}from"../../index-af0cb17c.js";import"../../eventManager-f62d060d.js";var l=function(l){var s=l.size,c=void 0===s?"default":s,n=l.withLabel,i=void 0!==n&&n,m=l.label,d=void 0===m?null:m,p=l.color,b=void 0===p?null:p,v=l.className,f=void 0===v?null:v,g=l.percentage,u=e(l,["size","withLabel","label","color","className","percentage"]);return r.createElement("div",a({className:"progressbar".concat(o("default"!==c,"progressbar--".concat(c))).concat(o(b,"progressbar--".concat(b))).concat(o(f)),"data-percentage":g},u),r.createElement("div",{className:"progressbar__fill"}),r.createElement(t,{condition:i},d?r.createElement("div",{className:"progressbar__label"},d):r.createElement("div",{className:"progressbar__label"},"".concat(g,"%"))))};export{l as Progressbar};
