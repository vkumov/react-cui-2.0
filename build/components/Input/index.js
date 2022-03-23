import{_ as e,a as o}from"../../tslib.es6-a57c95d4.js";import r,{forwardRef as i}from"react";import{ConditionalWrapper as t,DisplayIf as a}from"../Conditional.js";import{InputHelpBlock as l}from"../InputHelpBlock.js";import{a as n}from"../../index-af0cb17c.js";import{s as c}from"../../style-inject.es-1f59c1d0.js";import"../../eventManager-f62d060d.js";c(".cui .form-group__text>.labeled>.input-label{background-color:var(--cui-background-selected);border:none;border-bottom-right-radius:0;height:calc(var(--cui-form-size) - 2px);max-height:calc(var(--cui-form-size) - 2px);padding:var(--cui-form-padding)}.cui .form-group__text>.labeled input{border:none!important;border-radius:0!important;height:calc(var(--cui-form-size) - 2px)!important;max-height:calc(var(--cui-form-size) - 2px)!important;min-height:calc(var(--cui-form-size) - 2px)!important;padding:var(--cui-form-padding)!important}.cui .form-group__text>.labeled input:focus{box-shadow:none!important;outline:none!important}.cui .form-group__text>.labeled{border:var(--cui-border);border-radius:var(--cui-border-radius);flex-shrink:0;order:3;transition:all var(--cui-animate-speed) var(--cui-animate-timing-function)!important}.cui .form-group__text>.labeled:focus-within,.cui .form-group__text>.labeled:hover{border-color:var(--cui-accent-color)}.cui .form-group__text>.labeled:focus-within{box-shadow:0 0 0 var(--cui-focus-thickness) rgba(var(--cui-focus-color),var(--cui-focus-opacity));opacity:1;outline:transparent var(--cui-focus-thickness);outline-offset:1px;outline-style:none;outline-width:thin}.cui .form-group__text>.labeled .dropdown.input-label a{color:var(--cui-form-value-color)}");var u=i((function(i,c){var u=i.type,m=void 0===u?"text":u,p=i.inline,s=void 0===p?null:p,d=i.helpBlock,f=void 0===d||d,b=i.label,v=void 0===b?null:b,h=i.icon,g=void 0===h?null:h,x=i.iconClick,_=void 0===x?null:x,k=i.className,N=void 0===k?null:k,E=i.plain,z=void 0!==E&&E,y=i.horizontal,j=void 0===y?null:y,w=i.horizontalLabelClassName,C=void 0===w?"col-3":w,B=i.error,I=void 0===B?null:B,L=i.prefix,F=void 0===L?null:L,H=e(i,["type","inline","helpBlock","label","icon","iconClick","className","plain","horizontal","horizontalLabelClassName","error","prefix"]);return r.createElement("div",{className:"form-group".concat(n(N)).concat(n(I,"form-group--error")).concat(n("form"===s||"both"===s,"form-group--inline")).concat(n("label"===s||"both"===s,"label--inline")).concat(n(g,"input--icon")).concat(n(j,"form-group--horizontal"))},r.createElement("div",{className:"form-group__text"},r.createElement(t,{wrapper:r.createElement("div",{className:"flex labeled"}),condition:!!F},F?r.createElement("div",{className:"input-label"},F):null,r.createElement("input",o({type:m,ref:c},H,{className:n(z,"form-group--plaintext")}))),v?r.createElement("label",{htmlFor:H.id,className:n(j,C)},v):null,g?r.createElement("button",{type:"button",className:"link",tabIndex:-1,onClick:_},r.createElement("span",{className:"icon-".concat(g)})):null),r.createElement(a,{condition:!s&&f&&!!I},r.createElement(l,{text:I})))}));export{u as Input};
