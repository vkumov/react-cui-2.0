import r,{forwardRef as a,useRef as i,useEffect as p}from"react";import s from"classnames";import{ConditionalWrapper as f}from"../Conditional/index.js";import{useMergeRefs as u}from"use-callback-ref";const l=a(({inline:n=!1,asFormGroup:t=!0,children:o=null,spacing:e=null,...c},m)=>r.createElement(f,{condition:t,wrapper:r.createElement("div",{className:s("form-group",{"form-group--inline":n,[`form-group--${e}`]:e&&e!=="default"})})},r.createElement("label",{className:"checkbox"},r.createElement("input",{type:"checkbox",...c,ref:m}),r.createElement("span",{className:"checkbox__input"}),o?r.createElement("span",{className:"checkbox__label"},o):null))),d=a(({indeterminate:n,...t},o)=>{const e=i(null),c=u([e,o]);return p(()=>{typeof n=="boolean"&&(e.current.indeterminate=!t.checked&&n)},[e,n]),r.createElement(l,{ref:c,...t})});export{l as Checkbox,d as IndeterminateCheckbox};
//# sourceMappingURL=index.js.map
