import e from"react";var n=function(n){var t=n.children,r=n.defaultOpen,c=void 0!==r&&r,l=n.toggles,o=void 0!==l&&l,a=n.title,i=e.useState(c),d=i[0],m=i[1];return e.createElement("li",{className:d?"active":""},e.createElement("a",{className:"accordion__title",onClick:function(){return m((function(e){return!e}))}},e.createElement("span",null,a),o?e.createElement("span",{className:"accordion__toggle icon-chevron-down"}):null),e.createElement("div",{className:"accordion__content"},t))},t=function(n){var t=n.children,r=n.toggles,c=void 0!==r&&r,l=n.bordered,o=void 0!==l&&l;return e.createElement("ul",{className:"accordion"+(o?" accordion--bordered":"")},e.Children.map(t,(function(n){return e.isValidElement(n)?e.cloneElement(n,{toggles:c}):null})))};t.Element=n;export{t as Accordion,n as AccordionElement};
