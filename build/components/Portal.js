import{useRef as e,useEffect as t}from"react";import{createPortal as n}from"react-dom";function r(n){const r=e(null);return t((function(){const e=document.querySelector("#"+n),t=e||function(e){const t=document.createElement("div");return t.setAttribute("id",e),t}(n);var o;return e||(o=t,document.body.insertBefore(o,document.body.lastElementChild.nextElementSibling)),t.appendChild(r.current),function(){r.current.remove(),-1===t.childNodes.length&&t.remove()}}),[]),r.current||(r.current=document.createElement("div")),r.current}export default({id:e,children:t})=>{const o=r(e);return n(t,o)};