import{_ as e,a as l}from"../../tslib.es6-4bca28b2.js";import a from"react";import{ConditionalWrapper as i}from"../Conditional.js";import{a as t}from"../../index-59462297.js";var s=function(s){var n=s.left,r=void 0===n?null:n,o=s.right,c=void 0===o?null:o,m=s.disabled,d=void 0!==m&&m,p=s.inline,u=void 0!==p&&p,v=s.spacing,b=void 0===v?null:v,f=s.asFormGroup,h=void 0===f||f,g=s.className,E=void 0===g?null:g,N=s.id,_=void 0===N?null:N,w=s.style,y=void 0===w?null:w,j=e(s,["left","right","disabled","inline","spacing","asFormGroup","className","id","style"]);return a.createElement(i,{condition:h,wrapper:a.createElement("div",{className:"form-group"+t(u,"form-group--inline")+t(E)+t(b," form-group--"+b),style:y})},a.createElement("label",{className:"switch"+(d?" disabled":""),htmlFor:_||j.name},a.createElement("input",l({type:"checkbox"},j,{id:_||j.name,checked:j.checked})),r?a.createElement("span",{className:"switch__label"},r):null,a.createElement("span",{className:"switch__input"}),c?a.createElement("span",{className:"switch__label"},c):null))};export{s as Switch};