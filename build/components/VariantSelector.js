import e from"react";import a from"prop-types";import"../_rollupPluginBabelHelpers-b60338eb.js";import{a as t}from"../index-be24eb93.js";import{useFormikContext as n,getIn as l}from"formik";import{ConditionalWrapper as i}from"./Conditional.js";import{Dropdown as s}from"./Dropdown.js";const r=({variants:a,selectedIdx:t,setIdx:n})=>e.createElement(s,{type:"link",tail:!0,header:a[t].display,alwaysClose:!0,className:"flex-center-vertical",stopPropagation:!0},a.map((l,i)=>e.createElement("a",{key:l.variant,onClick:()=>n(i),className:a[t].variant===l.variant?"selected":""},l.display)));r.propTypes={variants:a.arrayOf(a.any).isRequired,selectedIdx:a.number.isRequired,setIdx:a.func.isRequired};const c=({variants:a,selectedIdx:t,setIdx:n})=>e.createElement("ul",{className:"list list--inline divider--vertical"},a.map((l,s)=>e.createElement("li",{key:l.variant},e.createElement(i,{condition:a[t].variant!==l.variant,wrapper:e.createElement("a",{key:l.variant,onClick:()=>n(s)})},l.display))));c.propTypes={variants:a.arrayOf(a.any).isRequired,selectedIdx:a.number.isRequired,setIdx:a.func.isRequired};const d=({variants:a,varPrefix:i,title:s,inline:d,onChange:o,disableable:p,enableTitleAppend:m,className:u,list:v})=>{const{values:b,setFieldValue:f,unregisterField:x}=n(),y=e.useMemo(()=>l(b,i+".variant",void 0),[b,i]),[E,g]=e.useState(()=>{const e=a.findIndex(e=>e.selected||e.variant===y);return!p&&e<0?0:e});e.useEffect(()=>{const e=a.findIndex(e=>e.variant===y);g(a=>e<0||e===a?a:e)},[y,a]),e.useEffect(()=>{E>=0?(f(i+".variant",a[E].variant),o&&o(a[E])):(f(i,void 0),x(i))},[E]);const h=(t,n)=>e.createElement(t,{className:"secondary-tabs"},n?e.createElement("span",{className:"half-margin-right"},n):null,v?e.createElement(c,{variants:a,selectedIdx:E,setIdx:g}):e.createElement(r,{variants:a,selectedIdx:E,setIdx:g}));return e.createElement("div",{className:`form-group${t(d," inline-variants")}${t(u)}`},p?e.createElement("span",{className:"flex-center-vertical"},e.createElement("label",{className:"switch",htmlFor:i+".disableable"},e.createElement("input",{type:"checkbox",onChange:()=>g(e=>e>=0?-1:0),checked:E>=0,id:i+".disableable"}),e.createElement("span",{className:"switch__input"}),e.createElement("span",{className:"switch__label"},s)),E>=0?h("span",m):null):h("div",s),p&&E<0?null:e.createElement("div",{className:"tabs-wrap panel base-padding-top"},a[E].component))};d.propTypes={variants:a.arrayOf(a.shape({variant:a.string,display:a.string,component:a.node})).isRequired,varPrefix:a.string.isRequired,title:a.node,inline:a.bool,onChange:a.func,disableable:a.bool,enableTitleAppend:a.string,className:a.string,list:a.bool},d.defaultProps={disableable:!1,title:null,inline:!1,onChange:null,enableTitleAppend:null,className:null,list:!1};export{d as VariantSelector};
