import e from"react";import a from"prop-types";import{a as t}from"../../_rollupPluginBabelHelpers-b60338eb.js";import"../../index-be24eb93.js";import"../../Conditional-4aafc147.js";import{Dropdown as o}from"../Dropdown.js";import{Pagination as n}from"../Pagination.js";const r=({total:a,position:r,onPageChange:i,onPerPageChange:s,perPageUp:p,paginationProps:l})=>{const[m,g]=e.useState(50);return e.useEffect(()=>{"function"==typeof s&&s(m)},[m,s]),e.createElement("div",{className:"flex-middle"},e.createElement("span",{className:"qtr-margin-right"},"Page:"),e.createElement(n,t({firstAndLast:!0,icons:!0,perPage:m,total:a,position:r,onPageChange:i,beginAt:0,className:"no-margin-top"},l)),e.createElement("span",{className:"text-muted qtr-margin-left qtr-margin-right"},"|"),e.createElement("span",{className:"qtr-margin-right"},"Per page:"),e.createElement(o,{type:"link",header:m,openTo:"left",alwaysClose:!0,up:p},[10,25,50,100,250,500].map(a=>e.createElement(o.Element,{onClick:()=>g(a),key:a,selected:a===m},a))))};r.propTypes={total:a.number.isRequired,position:a.number.isRequired,onPageChange:a.func.isRequired,onPerPageChange:a.func.isRequired,perPageUp:a.bool,paginationProps:a.exact({size:a.oneOf(["small","default","large"]),rounded:a.bool,icons:a.bool,next:a.node,prev:a.node,firstAndLast:a.bool})},r.defaultProps={perPageUp:!1,paginationProps:{}};export{r as DefaultTablePagination};
