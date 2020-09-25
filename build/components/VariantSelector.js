import e from"react";import a from"prop-types";import"../tslib.es6-633881f1.js";import{a as n}from"../index-74b9c8d0.js";import{useFormikContext as t,getIn as r}from"formik";import{ConditionalWrapper as i}from"./Conditional.js";import{Dropdown as l}from"./Dropdown.js";var s=function(a){var n=a.variants,t=a.selectedIdx,r=a.setIdx;return e.createElement(l,{type:"link",header:n[t].display,alwaysClose:!0,className:"flex-center-vertical",stopPropagation:!0},n.map((function(a,i){return e.createElement("a",{key:a.variant,onClick:function(){return r(i)},className:n[t].variant===a.variant?"selected":""},a.display)})))};s.propTypes={variants:a.arrayOf(a.any).isRequired,selectedIdx:a.number.isRequired,setIdx:a.func.isRequired};var c=function(a){var n=a.variants,t=a.selectedIdx,r=a.setIdx;return e.createElement("ul",{className:"list list--inline divider--vertical"},n.map((function(a,l){return e.createElement("li",{key:a.variant},e.createElement(i,{condition:n[t].variant!==a.variant,wrapper:e.createElement("a",{key:a.variant,onClick:function(){return r(l)}})},a.display))})))};c.propTypes={variants:a.arrayOf(a.any).isRequired,selectedIdx:a.number.isRequired,setIdx:a.func.isRequired};var o=function(a){var i=a.disableable,l=void 0!==i&&i,o=a.title,d=void 0===o?null:o,u=a.inline,m=void 0!==u&&u,p=a.onChange,v=void 0===p?null:p,f=a.enableTitleAppend,b=void 0===f?null:f,x=a.className,y=void 0===x?null:x,E=a.list,g=void 0!==E&&E,I=a.variants,N=a.varPrefix,h=t(),k=h.values,q=h.setFieldValue,R=h.unregisterField,w=e.useMemo((function(){return r(k,N+".variant",void 0)}),[k,N]),C=e.useState((function(){var e=I.findIndex((function(e){return e.selected||e.variant===w}));return!l&&e<0?0:e})),T=C[0],j=C[1];e.useEffect((function(){var e=I.findIndex((function(e){return e.variant===w}));j((function(a){return e<0||e===a?a:e}))}),[w,I]),e.useEffect((function(){T>=0?(q(N+".variant",I[T].variant),v&&v(I[T])):(q(N,void 0),R(N))}),[T]);var _=function(a,n){return e.createElement(a,{className:"secondary-tabs"},n?e.createElement("span",{className:"half-margin-right"},n):null,g?e.createElement(c,{variants:I,selectedIdx:T,setIdx:j}):e.createElement(s,{variants:I,selectedIdx:T,setIdx:j}))};return e.createElement("div",{className:"form-group"+n(m," inline-variants")+n(y)},l?e.createElement("span",{className:"flex-center-vertical"},e.createElement("label",{className:"switch",htmlFor:N+".disableable"},e.createElement("input",{type:"checkbox",onChange:function(){return j((function(e){return e>=0?-1:0}))},checked:T>=0,id:N+".disableable"}),e.createElement("span",{className:"switch__input"}),e.createElement("span",{className:"switch__label"},d)),T>=0?_("span",b):null):_("div",d),l&&T<0?null:e.createElement("div",{className:"tabs-wrap panel base-padding-top"},I[T].component))};o.propTypes={variants:a.arrayOf(a.exact({variant:a.string,display:a.string,component:a.node,selected:a.bool})).isRequired,varPrefix:a.string.isRequired,title:a.node,inline:a.bool,onChange:a.func,disableable:a.bool,enableTitleAppend:a.string,className:a.string,list:a.bool};export{o as VariantSelector};
