import{_ as e,a}from"../tslib.es6-a57c95d4.js";import n,{forwardRef as t,useState as l,useEffect as r,useCallback as o}from"react";import{a as c}from"../index-fb409a55.js";var i=t((function(t,l){var r=t.spacing,o=void 0===r?null:r,i=t.inline,m=void 0!==i&&i,s=t.label,u=void 0===s?null:s,d=t.className,p=void 0===d?null:d,v=t.id,f=t.divProps,g=void 0===f?{}:f,b=e(t,["spacing","inline","label","className","id","divProps"]);return n.createElement("div",a({className:"form-group".concat(c(m,"form-group--inline")).concat(c(o,"form-group--".concat(o))).concat(c(p))},g),n.createElement("label",{className:"radio",htmlFor:v||b.name},n.createElement("input",a({type:"radio",id:v},b,{ref:l})),n.createElement("span",{className:"radio__input"}),u?n.createElement("span",{className:"radio__label"},u):null))})),m=function(e){var a=e.values,t=e.value,c=e.onChange,m=e.name,s=l(t),u=s[0],d=s[1];r((function(){d(t)}),[t]);var p=o((function(e){e.persist(),d((function(a){var n;return n=e.target.checked?e.target.value:a,"function"==typeof c&&c(n),n}))}),[c]);return n.createElement(n.Fragment,null,a.map((function(e,a){return n.createElement(i,{id:e.value,label:e.label,key:e.value,name:"".concat(m,".").concat(a),onChange:p,checked:u===e.value})})))};export{i as Radio,m as Radios};
