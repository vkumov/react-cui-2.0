import n from"react";const i=({condition:t,wrapper:e,children:l})=>t?n.cloneElement(e,null,l):n.isValidElement(l)?l:n.createElement(n.Fragment,null,l),r=({condition:t,children:e})=>t?n.isValidElement(e)?e:n.createElement(n.Fragment,null,e):null;export{i as ConditionalWrapper,r as DisplayIf};
//# sourceMappingURL=index.js.map
