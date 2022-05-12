import React from 'react';

const Accordion = ({ children , toggles =false , bordered =false ,  })=>{
    return /*#__PURE__*/ React.createElement("ul", {
        className: `accordion${bordered ? " accordion--bordered" : ""}`
    }, React.Children.map(children, (child)=>/*#__PURE__*/ React.isValidElement(child) ? /*#__PURE__*/ React.cloneElement(child, {
            toggles
        }) : null
    ));
};

const AccordionElement = ({ children , defaultOpen =false , toggles =false , title ,  })=>{
    const [isOpen, setIsOpen] = React.useState(defaultOpen);
    return /*#__PURE__*/ React.createElement("li", {
        className: isOpen ? "active" : ""
    }, /*#__PURE__*/ React.createElement("a", {
        className: "accordion__title",
        onClick: ()=>setIsOpen((prev)=>!prev
            )
    }, /*#__PURE__*/ React.createElement("span", null, title), toggles ? /*#__PURE__*/ React.createElement("span", {
        className: "accordion__toggle icon-chevron-down"
    }) : null), /*#__PURE__*/ React.createElement("div", {
        className: "accordion__content"
    }, children));
};

export { Accordion, AccordionElement };
//# sourceMappingURL=index.js.map
