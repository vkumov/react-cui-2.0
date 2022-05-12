import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ConditionalWrapper } from '../Conditional/index.js';
import { appendClass } from '../utils/index.js';

function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
const Element = ({ selected =false , icon =null , children , className =null , ...props })=>/*#__PURE__*/ React.createElement("a", _extends({
        className: `${selected ? "selected" : ""}${className ? ` ${className}` : ""}`
    }, props), icon ? /*#__PURE__*/ React.createElement("span", {
        className: `icon-${icon}`
    }) : null, /*#__PURE__*/ React.createElement(ConditionalWrapper, {
        condition: Boolean(icon),
        wrapper: /*#__PURE__*/ React.createElement("span", {
            className: "qtr-margin-left"
        })
    }, children))
;
const Divider = ()=>/*#__PURE__*/ React.createElement("div", {
        className: "divider"
    })
;
const Group = ({ children  })=>/*#__PURE__*/ React.createElement("div", {
        className: "dropdown__group"
    }, children)
;
const GroupHeader = ({ header  })=>/*#__PURE__*/ React.createElement("div", {
        className: "dropdown__group-header"
    }, header)
;
const DropdownHeader = ({ type , handleClick , className , header ,  })=>{
    switch(type){
        case "icon":
            return /*#__PURE__*/ React.createElement("span", {
                onClick: handleClick,
                className: className
            });
        case "link":
            return /*#__PURE__*/ React.createElement("a", {
                onClick: handleClick,
                className: className
            }, header);
        case "div":
            return /*#__PURE__*/ React.createElement("div", {
                onClick: handleClick,
                className: className
            }, header);
        case "button":
            return /*#__PURE__*/ React.createElement("button", {
                type: "button",
                onClick: handleClick,
                className: `btn ${className}`
            }, header);
        default:
            return /*#__PURE__*/ React.isValidElement(header) ? /*#__PURE__*/ React.cloneElement(header, {
                onClick: handleClick
            }) : null;
    }
};
const Dropdown = ({ openTo ="right" , children , type ="button" , className =null , header =null , divClassName =null , up =false , onClose =null , onOpen =null , stopPropagation =false , alwaysClose =false , isOpen: outsideIsOpen ,  })=>{
    const [isOpen, setIsOpen] = useState(false);
    const divRef = useRef(undefined);
    useEffect(()=>{
        if (typeof outsideIsOpen !== "undefined" && outsideIsOpen !== null) setIsOpen(outsideIsOpen);
    }, [
        outsideIsOpen
    ]);
    // eslint-disable-next-line prefer-const
    let handleOutsideClick;
    const handleClick = useCallback((e)=>{
        if (stopPropagation) {
            e.stopPropagation();
            e.preventDefault();
        }
        setIsOpen((current)=>{
            if (!current) {
                // attach/remove event handler
                document.addEventListener("click", handleOutsideClick, true);
            } else {
                document.removeEventListener("click", handleOutsideClick, true);
            }
            const newIsOpen = !current;
            if (newIsOpen && onOpen) onOpen(e);
            if (!newIsOpen && onClose) onClose(e);
            return newIsOpen;
        });
    }, [
        stopPropagation,
        onClose,
        onOpen
    ]);
    handleOutsideClick = (e)=>{
        // ignore clicks on the component itself
        if (!(e.target instanceof Node) || !(divRef === null || divRef === void 0 ? void 0 : divRef.current)) return;
        if (!alwaysClose && divRef.current && divRef.current.contains(e.target)) return;
        if (!divRef.current.contains(e.target)) {
            handleClick(e);
            return;
        }
        if (!divRef.current.isSameNode(e.target.parentNode) && alwaysClose) {
            handleClick(e);
            return;
        }
    };
    return /*#__PURE__*/ React.createElement("div", {
        className: `dropdown${appendClass([
            "left",
            "center"
        ].includes(openTo), `dropdown--${openTo}`)}${appendClass(up, "dropdown--up")}${appendClass(isOpen, "active")}${appendClass(divClassName)}`,
        ref: divRef
    }, /*#__PURE__*/ React.createElement(DropdownHeader, {
        type: type,
        handleClick: handleClick,
        className: className,
        header: header
    }), /*#__PURE__*/ React.createElement("div", {
        className: "dropdown__menu"
    }, children));
};
Dropdown.Divider = Divider;
Dropdown.Element = Element;
Dropdown.Group = Group;
Dropdown.GroupHeader = GroupHeader;

export { Dropdown, Divider as DropdownDivider, Element as DropdownElement, Group as DropdownGroup, GroupHeader as DropdownGroupHeader };
//# sourceMappingURL=index.js.map
