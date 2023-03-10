import{useState as s}from"react";function c(r,l){const[n,o]=s(r),t=()=>{var e;n||(o(!0),(e=l?.onOpen)==null||e.call(l))},u=()=>{var e;n&&(o(!1),(e=l?.onClose)==null||e.call(l))};return[n,{open:t,close:u,toggle:()=>{n?u():t()}}]}export{c as useDisclosure};
//# sourceMappingURL=useDisclosure.js.map
