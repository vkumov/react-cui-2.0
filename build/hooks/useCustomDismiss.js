import{useEffect as m,useMemo as f}from"react";import{useFloatingTree as p}from"@floating-ui/react";import v from"react-use-event-hook";import{useModalProvider as g}from"../Modal/index.js";function y(n){return n?.ownerDocument||document}function w(n,d){let r=n.filter(t=>{var e;return t.parentId===d&&((e=t.context)==null?void 0:e.open)})||[],o=r;for(;o.length;)o=n.filter(t=>o?.some(e=>{var u;return t.parentId===e.id&&((u=t.context)==null?void 0:u.open)}))||[],r=r.concat(o);return r}function E({open:n,onOpenChange:d,events:r,nodeId:o,elements:{floating:t}},{enabled:e=!0,modal:u=!1}={}){const l=p(),a=g(),i=v(s=>{if(!n||!e||s.key!=="Escape")return;const c=l?w(l.nodesRef.current,o):[];s.stopPropagation(),!(c.length>0)&&(u&&a&&a.lastRendered()!==o||(r.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),d(!1)))});return m(()=>{if(!n||!e)return;const s=y(t);return s.addEventListener("keydown",i),()=>{s.removeEventListener("keydown",i)}},[i,e,t,n]),f(()=>e?{reference:{onKeyDown:i},floating:{onKeyDown:i}}:{},[i,e])}export{E as useCustomDismiss};
//# sourceMappingURL=useCustomDismiss.js.map
