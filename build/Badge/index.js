import l from"react";import{appendClass as n}from"../utils/index.js";const m=({children:e,className:t=null})=>l.createElement("span",{className:`badge-wrapper${n(t)}`},e),a=({color:e="primary",size:t="default",children:r,className:s=null,...c})=>l.createElement("span",{className:`${`badge badge--${e}`}${n(t!=="default",`badge--${t}`)}${n(s)}`,...c},r);a.Dot=e=>l.createElement(a,{...e,size:"dot"}),a.Tiny=e=>l.createElement(a,{...e,size:"tiny"}),a.Small=e=>l.createElement(a,{...e,size:"small"}),a.Default=e=>l.createElement(a,{...e,size:"default"}),a.Large=e=>l.createElement(a,{...e,size:"large"}),a.Wrapper=m;const p=({children:e,badge:t,wrapperClass:r=null,...s})=>l.createElement(a.Wrapper,{className:r},e,l.createElement(a,{...s},t));export{a as Badge,p as WithBadge};
//# sourceMappingURL=index.js.map
