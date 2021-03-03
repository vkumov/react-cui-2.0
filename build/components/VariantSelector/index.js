import e,{useState as n,useEffect as a}from"react";import{Dropdown as t}from"../Dropdown/index.js";import{ConditionalWrapper as i}from"../Conditional.js";import{a as r}from"../../index-59462297.js";import"../../tslib.es6-4bca28b2.js";var l=function(n){var a,i=n.variants,r=n.selectedIdx,l=n.setIdx,c=n.placeholder,s=void 0===c?"Select":c;return e.createElement(t,{type:"link",header:(null===(a=i[r])||void 0===a?void 0:a.display)||s,alwaysClose:!0,className:"flex-center-vertical",stopPropagation:!0},i.map((function(n,a){var t;return e.createElement("a",{key:n.variant,onClick:function(){return l(a)},className:(null===(t=i[r])||void 0===t?void 0:t.variant)===n.variant?"selected":""},n.display)})))},c=function(n){var a=n.variants,t=n.selectedIdx,r=n.setIdx;return e.createElement("ul",{className:"list list--inline divider--vertical"},a.map((function(n,l){var c;return e.createElement("li",{key:n.variant},e.createElement(i,{condition:(null===(c=a[t])||void 0===c?void 0:c.variant)!==n.variant,wrapper:e.createElement("a",{key:n.variant,onClick:function(){return r(l)}})},n.display))})))},s=function(t){var i=t.disableable,s=void 0!==i&&i,o=t.title,d=void 0===o?null:o,v=t.inline,u=void 0!==v&&v,m=t.onChange,p=void 0===m?null:m,f=t.enableTitleAppend,E=void 0===f?null:f,b=t.className,x=void 0===b?null:b,h=t.list,N=void 0!==h&&h,y=t.variant,I=void 0===y?null:y,k=t.variants,g=t.name,w=void 0===g?"":g,C=n((function(){var e=k.findIndex((function(e){return e.selected||e.variant===I}));return!s&&e<0?0:e})),j=C[0],_=C[1];a((function(){var e=k.findIndex((function(e){return e.variant===I}));_((function(n){return e<0||e===n?n:e}))}),[I,k]),a((function(){j>=0&&"function"==typeof p&&p(k[j])}),[j]);var A=function(n,a){return e.createElement(n,{className:"secondary-tabs"},a?e.createElement("span",{className:"half-margin-right"},a):null,N?e.createElement(c,{variants:k,selectedIdx:j,setIdx:_}):e.createElement(l,{variants:k,selectedIdx:j,setIdx:_}))};return e.createElement("div",{className:"form-group"+r(u," inline-variants")+r(x)},s?e.createElement("span",{className:"flex-center-vertical"},e.createElement("label",{className:"switch",htmlFor:w+".disableable"},e.createElement("input",{type:"checkbox",onChange:function(){return _((function(e){return e>=0?-1:0}))},checked:j>=0,id:w+".disableable"}),e.createElement("span",{className:"switch__input"}),e.createElement("span",{className:"switch__label"},d)),j>=0?A("span",E):null):A("div",d),s&&j<0?null:e.createElement("div",{className:"tabs-wrap panel base-padding-top"},k[j].component))};export{s as VariantSelector};
