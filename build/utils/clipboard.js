const o=async t=>{if(t=typeof t=="string"?t:t.toString(),navigator!=null&&navigator.clipboard)await navigator.clipboard.writeText(t);else{const e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}};export{o as copyStringToClipboard};
//# sourceMappingURL=clipboard.js.map
