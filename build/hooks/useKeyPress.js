import{useEffect as t}from"react";function d(e,o,n="keydown"){t(()=>{if(typeof window>"u")return;const i=r=>{(Array.isArray(e)?e.includes(r.key):e===r.key)&&o(r)};return window.addEventListener(n,i),()=>{window.removeEventListener(n,i)}},[e,o,n])}export{d as useKeyPress};
//# sourceMappingURL=useKeyPress.js.map
