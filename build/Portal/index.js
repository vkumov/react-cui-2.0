import s from"react";import{createPortal as l}from"react-dom";import{usePortal as m}from"../hooks/usePortal.js";const c={zIndex:1,position:"relative"};function p(e){const{children:o,zIndex:r,target:n,className:i,position:a}={...c,...e},t=m(n);return t?l(s.createElement("div",{className:i,style:{position:a,zIndex:r}},o),t):null}export{p as Portal};
//# sourceMappingURL=index.js.map
