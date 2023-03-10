import{useEffect as d,useMemo as a}from"react";import{useFloatingTree as f}from"@floating-ui/react";import m from"react-use-event-hook";function p(n){return n?.ownerDocument||document}function v(n,l){let r=n.filter(o=>{var e;return o.parentId===l&&((e=o.context)==null?void 0:e.open)})||[],t=r;for(;t.length;)t=n.filter(o=>t?.some(e=>{var s;return o.parentId===e.id&&((s=o.context)==null?void 0:s.open)}))||[],r=r.concat(t);return r}function g({open:n,onOpenChange:l,events:r,nodeId:t,elements:{floating:o}},{enabled:e=!0}={}){const s=f(),i=m(u=>{if(!n||!e||u.key!=="Escape")return;const c=s?v(s.nodesRef.current,t):[];u.stopPropagation(),!(c.length>0)&&(r.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),l(!1))});return d(()=>{if(!n||!e)return;const u=p(o);return u.addEventListener("keydown",i),()=>{u.removeEventListener("keydown",i)}},[i,e,o,n]),a(()=>e?{reference:{onKeyDown:i},floating:{onKeyDown:i}}:{},[i,e])}export{g as useCustomDismiss};
//# sourceMappingURL=useCustomDismiss.js.map
