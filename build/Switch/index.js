import{jsx as l,jsxs as d}from"react/jsx-runtime";import{forwardRef as h}from"react";import u from"classnames";import{ConditionalWrapper as f}from"../Conditional/index.js";const w=h(({left:i=null,right:r=null,disabled:c=!1,inline:o=!1,spacing:n=null,asFormGroup:m=!0,className:s=null,id:a=null,style:t=null,...e},p)=>l(f,{condition:m,wrapper:l("div",{className:u("form-group",{"form-group--inline":o,[`form-group--${n}`]:n,[s]:s}),style:t}),children:d("label",{className:`switch${c?" disabled":""}`,htmlFor:a||e.name,children:[l("input",{type:"checkbox",...e,id:a||e.name,checked:e.checked,ref:p}),i?l("span",{className:"switch__label",children:i}):null,l("span",{className:"switch__input"}),r?l("span",{className:"switch__label",children:r}):null]})}));export{w as Switch};
//# sourceMappingURL=index.js.map
