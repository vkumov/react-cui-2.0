import React, { forwardRef, useState, useRef, useEffect, useCallback } from 'react';
import { useClickInside } from '../hooks/useClickInside.js';
import { useClickOutside } from '../hooks/useClickOutside.js';
import { appendClass } from '../utils/index.js';
import { ConditionalWrapper } from '../Conditional/index.js';

function _extends$1() {
    _extends$1 = Object.assign || function(target) {
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
    return _extends$1.apply(this, arguments);
}
const Element = ({ selected =false , icon =null , children , className =null , ...props })=>/*#__PURE__*/ React.createElement("a", _extends$1({
        className: `${selected ? "selected" : ""}${className ? ` ${className}` : ""}`
    }, props), icon ? /*#__PURE__*/ React.createElement("span", {
        className: `icon-${icon}`
    }) : null, /*#__PURE__*/ React.createElement(ConditionalWrapper, {
        condition: Boolean(icon),
        wrapper: /*#__PURE__*/ React.createElement("span", {
            className: "qtr-margin-left"
        })
    }, children));
const Divider = ()=>/*#__PURE__*/ React.createElement("div", {
        className: "divider"
    });
const Group = ({ children  })=>/*#__PURE__*/ React.createElement("div", {
        className: "dropdown__group"
    }, children);
const GroupHeader = ({ header  })=>/*#__PURE__*/ React.createElement("div", {
        className: "dropdown__group-header"
    }, header);
const Menu = /*#__PURE__*/ forwardRef(({ children , className , ...props }, ref)=>{
    return /*#__PURE__*/ React.createElement("div", _extends$1({
        className: `dropdown__menu${appendClass(className)}`
    }, props, {
        ref: ref
    }), children);
});

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
const DropdownHeader = ({ type , handleClick , className , header  })=>{
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
const Dropdown = ({ openTo ="right" , children , type ="button" , className =null , header =null , divClassName =null , up =false , onClose =null , onOpen =null , stopPropagation =false , alwaysClose =false , isOpen: outsideIsOpen , ...props })=>{
    const [isOpen, setIsOpen] = useState(false);
    const divRef = useRef(undefined);
    const menuRef = useRef(undefined);
    useEffect(()=>{
        if (typeof outsideIsOpen !== "undefined" && outsideIsOpen !== null) setIsOpen(outsideIsOpen);
    }, [
        outsideIsOpen
    ]);
    const handleHeaderClick = useCallback((e)=>{
        if (stopPropagation) {
            e.stopPropagation();
            e.preventDefault();
        }
        setIsOpen((current)=>{
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
    useClickOutside(()=>{
        setIsOpen(false);
    }, undefined, [
        divRef.current
    ]);
    useClickInside(()=>{
        if (alwaysClose) setIsOpen(false);
    }, [
        "click"
    ], [
        menuRef.current
    ]);
    return /*#__PURE__*/ React.createElement("div", _extends({
        className: `dropdown${appendClass([
            "left",
            "center"
        ].includes(openTo), `dropdown--${openTo}`)}${appendClass(up, "dropdown--up")}${appendClass(isOpen, "active")}${appendClass(divClassName)}`,
        ref: divRef
    }, props), /*#__PURE__*/ React.createElement(DropdownHeader, {
        type: type,
        handleClick: handleHeaderClick,
        className: className,
        header: header
    }), /*#__PURE__*/ React.createElement(Menu, {
        ref: menuRef
    }, children));
};
Dropdown.Divider = Divider;
Dropdown.Element = Element;
Dropdown.Group = Group;
Dropdown.GroupHeader = GroupHeader;
Dropdown.Menu = Menu;

export { Dropdown, Divider as DropdownDivider, Element as DropdownElement, Group as DropdownGroup, GroupHeader as DropdownGroupHeader, Menu };
//# sourceMappingURL=index.js.map
