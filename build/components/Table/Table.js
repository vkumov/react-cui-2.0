import{_ as t,a as e}from"../../tslib.es6-a57c95d4.js";import n,{forwardRef as o}from"react";import{GenericTable as r}from"./GenericTable.js";import{DefaultTablePagination as i}from"./DefaultTablePagination.js";import{DisplayIf as a}from"../Conditional.js";import{a as c}from"../../index-fb409a55.js";import"../Pagination/index.js";import"../Dropdown/index.js";var l=function(t){return Array.isArray(t)?t:[t]},u=o((function(o,u){var s=o.pagination,m=void 0===s?i:s,p=o.paginationLocation,f=void 0===p?"bottom-right":p,d=o.paginationProps,g=void 0===d?{icons:!0,firstAndLast:!0}:d,h=o.data,b=void 0===h?null:h,P=o.children,E=void 0===P?null:P,v=o.start,y=void 0===v?1:v,x=t(o,["pagination","paginationLocation","paginationProps","data","children","start"]),j=n.useState("number"==typeof y?y:0),C=j[0],A=j[1],L=n.useState(50),M=L[0],k=L[1],D=n.useMemo((function(){return E?l(E).find((function(t){return"tbody"===t.type})):null}),[E]),N=n.useMemo((function(){return E?l(E).find((function(t){return"thead"===t.type})):null}),[E]),S=n.useMemo((function(){return(b?b.length:l(D.props.children).length)||0}),[b,D]);return n.useEffect((function(){return A(0)}),[b,D]),n.createElement(n.Fragment,null,n.createElement(a,{condition:f.includes("top-")},n.createElement("div",{className:"flex base-margin-bottom".concat(c("top-right"===f,"flex-right"))},n.createElement(m,{total:S,position:C,onPageChange:function(t,e){return A(e)},onPerPageChange:function(t){return k(t)},paginationProps:g}))),n.createElement(r,e({},x,{ref:u}),N,n.createElement("tbody",null,b?b.slice(C,C+M).map((function(t,e){return n.createElement("tr",{key:e},t.map((function(t,e){return n.createElement("td",{key:e},t)})))})):l(D.props.children).slice(C,C+M))),n.createElement(a,{condition:f.includes("bottom-")},n.createElement("div",{className:"flex base-margin-top".concat(c("bottom-right"===f,"flex-right"))},n.createElement(m,{total:S,position:C,onPageChange:function(t,e){return A(e)},onPerPageChange:function(t){return k(t)},perPageUp:!0,paginationProps:g}))))}));export{u as default};
