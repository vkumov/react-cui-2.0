import e from"react";import o from"prop-types";var n=function(o){var n=o.children,r=o.defaultOpen,t=void 0!==r&&r,l=o.toggles,c=void 0!==l&&l,i=o.title,a=e.useState(t),d=a[0],s=a[1];return e.createElement("li",{className:d?"active":""},e.createElement("a",{className:"accordion__title",onClick:function(){return s((function(e){return!e}))}},e.createElement("span",null,i),c?e.createElement("span",{className:"accordion__toggle icon-chevron-down"}):null),e.createElement("div",{className:"accordion__content"},n))};n.propTypes={children:o.node.isRequired,defaultOpen:o.bool,toggles:o.bool,title:o.node.isRequired};var r=function(o){var n=o.children,r=o.toggles,t=void 0!==r&&r,l=o.bordered,c=void 0!==l&&l;return e.createElement("ul",{className:"accordion"+(c?" accordion--bordered":"")},e.Children.map(n,(function(o,n){return e.isValidElement(o)?e.cloneElement(o,{toggles:t,key:o.props.key||n}):null})))};r.Element=n,r.propTypes={children:o.node.isRequired,toggles:o.bool,bordered:o.bool};export{r as Accordion,n as AccordionElement};
