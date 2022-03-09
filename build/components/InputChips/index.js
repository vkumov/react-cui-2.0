import{_ as o,a as e}from"../../tslib.es6-a57c95d4.js";import r,{useState as i,useEffect as n,useCallback as t}from"react";import{ConditionalWrapper as a}from"../Conditional.js";import{Label as c}from"../Label/index.js";import{InputHelpBaloon as u}from"../InputHelpBaloon.js";import{InputHelpBlock as l}from"../InputHelpBlock.js";import{a as p}from"../../index-fb409a55.js";import{s}from"../../style-inject.es-1f59c1d0.js";s(".cui .form-group .chips .input{align-items:center;-moz-appearance:none;-webkit-appearance:none;background:var(--cui-form-background);border:var(--cui-border);border-radius:var(--cui-border-radius);box-shadow:none;box-sizing:border-box;color:var(--cui-form-value-color);display:flex;flex-shrink:0;flex:1;font-family:var(--cui-font-stack);font-size:var(--cui-font-size);font-weight:var(--cui-form-value-font-weight);height:var(--cui-form-size);line-height:2.4rem;max-height:var(--cui-form-size);min-height:var(--cui-form-size);order:3;padding:var(--cui-form-padding);padding-left:0;position:relative;transition:all var(--cui-animate-speed) var(--cui-animate-timing-function)}.cui .form-group .chips .input.focus,.cui .form-group .chips .input.hover,.cui .form-group .chips .input:focus,.cui .form-group .chips .input:focus-within,.cui .form-group .chips .input:hover{border-color:var(--cui-accent-color)}.cui .form-group .chips .input.focus,.cui .form-group .chips .input:focus,.cui .form-group .chips .input:focus-within{box-shadow:0 0 0 var(--cui-focus-thickness) rgba(var(--cui-focus-color),var(--cui-focus-opacity));opacity:1;outline:transparent var(--cui-focus-thickness);outline-offset:1px;outline-style:none;outline-width:thin}.cui .form-group .chips .input.disabled~label,.cui .form-group .chips .input[disabled]~label{cursor:not-allowed!important;opacity:.5;pointer-events:none!important;z-index:0!important}.cui .form-group .chips .chips-outer{overflow:hidden;padding-left:var(--cui-spacing-qtr);white-space:nowrap}.cui .form-group .chips .chips-outer>.chips-inner{white-space:normal}.cui .form-group .chips .chips-outer>.chips-inner .label+.label{margin-left:var(--cui-spacing-qtr)}.cui .form-group .chips .input input{background:transparent;border:none;height:calc(var(--cui-form-size) - 2px);max-height:calc(var(--cui-form-size) - 2px);min-height:calc(var(--cui-form-size) - 2px);padding-bottom:calc(var(--cui-form-padding) - 1px);padding-top:calc(var(--cui-form-padding) - 1px)}.cui .form-group .chips .input input:focus{box-shadow:unset}.cui .form-group.form-group--error .chips .input{border-color:var(--cui-theme-danger)}");var m=[],f=r.forwardRef((function(s,f){var d=s.chipsColor,v=void 0===d?"light":d,h=s.addOnBlur,g=void 0===h||h,b=s.delimiters,x=void 0===b?[13]:b,y=s.label,w=void 0===y?null:y,C=s.allowRepeat,k=void 0!==C&&C,E=s.allowRegex,z=void 0===E?null:E,N=s.valueValidator,A=void 0===N?null:N,R=s.maxChips,j=void 0===R?null:R,B=s.baloon,D=void 0===B?null:B,I=s.className,O=void 0===I?null:I,q=s.id,_=void 0===q?null:q,H=s.error,P=void 0===H?null:H,V=s.value,W=void 0===V?null:V,F=s.onChange,K=s.outerWrap,L=void 0===K||K,G=s.chipsOutside,J=void 0!==G&&G,M=s.renderChip,Q=void 0===M?null:M,S=s.onBlur,T=void 0===S?null:S,U=s.onChipRemove,X=void 0===U?null:U,Y=s.onClick,Z=s.noInput,$=o(s,["chipsColor","addOnBlur","delimiters","label","allowRepeat","allowRegex","valueValidator","maxChips","baloon","className","id","error","value","onChange","outerWrap","chipsOutside","renderChip","onBlur","onChipRemove","onClick","noInput"]),oo=i(m),eo=oo[0],ro=oo[1];n((function(){ro((function(o){return W||o||m}))}),[W]);var io=t((function(o){("function"!=typeof A||A(o))&&ro((function(e){if(k||!(e||[]).includes(o)){var r=(e||[]).concat(o);return"function"==typeof F&&F(r),r}return e}))}),[k,A,F]),no=t((function(o){var e=x;"string"==typeof e&&(e=Array.prototype.map.call(e,(function(o){return o.charCodeAt(0)})));Array.isArray(e)&&e.includes(o.keyCode)&&(io(o.target.value),o.target.value="",o.stopPropagation(),o.preventDefault())}),[x,io]),to=t((function(o){var e;if(g&&(null===(e=o.target)||void 0===e?void 0:e.value)){var r=o.target.value;z&&RegExp(z).test(r)?io(r):z||io(r)}o.target.value="","function"==typeof T&&T(o)}),[g,z,io,T]),ao=t((function(o){ro((function(e){return e.splice(o,1),"function"==typeof F&&F(e.slice()),e.slice()})),"function"==typeof X&&X(o)}),[F,X]),co=(!j||j&&Array.isArray(eo)&&eo.length<j)&&!Z;return r.createElement(a,{wrapper:r.createElement("div",{className:"form-group".concat(p(O)).concat(p(P,"form-group--error")),ref:f}),condition:L},r.createElement("div",{className:"form-group__text chips".concat(p(!L&&O,O))},w?r.createElement("label",{htmlFor:_||$.name},w,D?r.createElement(u,{baloon:D}):null):null,J&&Array.isArray(eo)&&eo.length?r.createElement("span",{className:"chips-outer qtr-margin-bottom"},r.createElement("span",{className:"chips-inner"},eo.map((function(o,e){return Q?Q({value:o,idx:e,onDelete:function(){return ao(e)}}):r.createElement(c,{removable:!0,onRemove:function(){return ao(e)},color:v,size:"small",key:"".concat(o,"-").concat(e),className:"no-margin-bottom"},o)})))):null,r.createElement("div",{className:"input ".concat(p(!co,"dbl-padding-right")),onClick:Y},!J&&Array.isArray(eo)&&eo.length?r.createElement("span",{className:"chips-outer"},r.createElement("span",{className:"chips-inner"},eo.map((function(o,e){return Q?Q({value:o,idx:e,onDelete:function(){return ao(e)}}):r.createElement(c,{removable:!0,onRemove:function(o){o.stopPropagation(),o.preventDefault(),ao(e)},color:v,size:"small",key:"".concat(o,"-").concat(e),className:"no-margin-bottom"},o)})))):null,co?r.createElement("input",e({type:"text",onKeyDown:no,onBlur:to,id:_||$.name},$)):null)),P?r.createElement(l,{text:P}):null)}));export{f as InputChips};
