import{_ as e,a}from"../tslib.es6-4bca28b2.js";import n,{forwardRef as l,useState as r,useEffect as t,useCallback as i}from"react";import{a as o}from"../index-59462297.js";var c=l((function(l,r){var t=l.spacing,i=void 0===t?null:t,c=l.inline,m=void 0!==c&&c,s=l.label,u=void 0===s?null:s,d=l.className,p=void 0===d?null:d,v=l.id,f=l.divProps,g=void 0===f?{}:f,b=e(l,["spacing","inline","label","className","id","divProps"]);return n.createElement("div",a({className:"form-group"+o(m,"form-group--inline")+o(i,"form-group--"+i)+o(p)},g),n.createElement("label",{className:"radio",htmlFor:v||b.name},n.createElement("input",a({type:"radio",id:v},b,{ref:r})),n.createElement("span",{className:"radio__input"}),u?n.createElement("span",{className:"radio__label"},u):null))})),m=function(e){var a=e.values,l=e.value,o=e.onChange,m=e.name,s=r(l),u=s[0],d=s[1];t((function(){d(l)}),[l]);var p=i((function(e){e.persist(),d((function(a){var n;return n=e.target.checked?e.target.value:a,"function"==typeof o&&o(n),n}))}),[o]);return n.createElement(n.Fragment,null,a.map((function(e,a){return n.createElement(c,{id:e.value,label:e.label,key:e.value,name:m+"."+a,onChange:p,checked:u===e.value})})))};export{c as Radio,m as Radios};
