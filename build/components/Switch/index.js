import{_ as e,a}from"../../tslib.es6-a57c95d4.js";import l,{forwardRef as t}from"react";import{ConditionalWrapper as n}from"../Conditional.js";import{a as i}from"../../index-af0cb17c.js";import"../../eventManager-f62d060d.js";var c=t((function(t,c){var o=t.left,s=void 0===o?null:o,r=t.right,m=void 0===r?null:r,d=t.disabled,p=void 0!==d&&d,u=t.inline,f=void 0!==u&&u,v=t.spacing,h=void 0===v?null:v,b=t.asFormGroup,g=void 0===b||b,E=t.className,N=void 0===E?null:E,_=t.id,w=void 0===_?null:_,j=t.style,y=void 0===j?null:j,k=e(t,["left","right","disabled","inline","spacing","asFormGroup","className","id","style"]);return l.createElement(n,{condition:g,wrapper:l.createElement("div",{className:"form-group".concat(i(f,"form-group--inline")).concat(i(N)).concat(i(h," form-group--".concat(h))),style:y})},l.createElement("label",{className:"switch".concat(p?" disabled":""),htmlFor:w||k.name},l.createElement("input",a({type:"checkbox"},k,{id:w||k.name,checked:k.checked,ref:c})),s?l.createElement("span",{className:"switch__label"},s):null,l.createElement("span",{className:"switch__input"}),m?l.createElement("span",{className:"switch__label"},m):null))}));export{c as Switch};
