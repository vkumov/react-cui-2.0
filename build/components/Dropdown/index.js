import{_ as e,a as n}from"../../tslib.es6-4bca28b2.js";import t,{useState as a,useRef as r,useCallback as o}from"react";import{ConditionalWrapper as l}from"../Conditional.js";import{a as c}from"../../index-59462297.js";var i=function(e){var n=e.type,a=e.handleClick,r=e.className,o=e.header;switch(n){case"icon":return t.createElement("span",{onClick:a,className:r});case"link":return t.createElement("a",{onClick:a,className:r},o);case"div":return t.createElement("div",{onClick:a,className:r},o);case"button":return t.createElement("button",{type:"button",onClick:a,className:"btn "+r},o);default:return t.isValidElement(o)?t.cloneElement(o,{onClick:a}):null}},s=function(e){var n,l=e.openTo,s=void 0===l?"right":l,d=e.children,m=e.type,u=void 0===m?"button":m,v=e.className,p=void 0===v?null:v,N=e.header,f=void 0===N?null:N,E=e.divClassName,h=void 0===E?null:E,C=e.up,g=void 0!==C&&C,k=e.onClose,w=void 0===k?null:k,b=e.onOpen,_=void 0===b?null:b,y=e.stopPropagation,j=void 0!==y&&y,x=e.alwaysClose,D=void 0!==x&&x,G=a(!1),L=G[0],P=G[1],q=r(void 0),B=o((function(e){j&&(e.stopPropagation(),e.preventDefault()),P((function(t){t?document.removeEventListener("click",n,!1):document.addEventListener("click",n,!1);var a=!t;return a&&_&&_(e),!a&&w&&w(e),a}))}),[j,w,_]);return n=function(e){e.target instanceof Node&&(!D&&q.current&&q.current.contains(e.target)||(q.current.contains(e.target)||B(e),!q.current.isSameNode(e.target.parentNode)&&D&&B(e)))},t.createElement("div",{className:"dropdown"+c(["left","center"].includes(s),"dropdown--"+s)+c(g,"dropdown--up")+c(L,"active")+c(h),ref:q},t.createElement(i,{type:u,handleClick:B,className:p,header:f}),t.createElement("div",{className:"dropdown__menu"},d))};s.Divider=function(){return t.createElement("div",{className:"divider"})},s.Element=function(a){var r=a.selected,o=void 0!==r&&r,c=a.icon,i=void 0===c?null:c,s=a.children,d=a.className,m=void 0===d?null:d,u=e(a,["selected","icon","children","className"]);return t.createElement("a",n({className:(o?"selected":"")+(m?" "+m:"")},u),i?t.createElement("span",{className:"icon-"+i}):null,t.createElement(l,{condition:Boolean(i),wrapper:t.createElement("span",{className:"qtr-margin-left"})},s))},s.Group=function(e){var n=e.children;return t.createElement("div",{className:"dropdown__group"},n)},s.GroupHeader=function(e){var n=e.header;return t.createElement("div",{className:"dropdown__group-header"},n)};export{s as Dropdown};