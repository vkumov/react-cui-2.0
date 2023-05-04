import{jsx as a}from"react/jsx-runtime";import{createPortal as l}from"react-dom";import{usePortal as c}from"../hooks/usePortal.js";const m={zIndex:1,position:"relative"};function p(t){const{children:e,zIndex:r,target:i,className:n,position:s}={...m,...t},o=c(i);return o?l(a("div",{className:n,style:{position:s,zIndex:r},children:e}),o):null}export{p as Portal};
//# sourceMappingURL=index.js.map
