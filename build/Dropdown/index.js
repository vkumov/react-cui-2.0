import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ConditionalWrapper } from '../Conditional';
import { appendClass } from '../utils';

function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var Element = function(_param)  {
    var _selected = _param.selected, selected = _selected === void 0 ? false : _selected, _icon = _param.icon, icon = _icon === void 0 ? null : _icon, children = _param.children, _className = _param.className, className = _className === void 0 ? null : _className, props = _objectWithoutProperties(_param, [
        "selected",
        "icon",
        "children",
        "className"
    ]);
    return React.createElement("a", _extends({
        className: "".concat(selected ? "selected" : "").concat(className ? " ".concat(className) : "")
    }, props), icon ? /*#__PURE__*/ React.createElement("span", {
        className: "icon-".concat(icon)
    }) : null, /*#__PURE__*/ React.createElement(ConditionalWrapper, {
        condition: Boolean(icon),
        wrapper: /*#__PURE__*/ React.createElement("span", {
            className: "qtr-margin-left"
        })
    }, children));
};
var Divider = function() {
    return /*#__PURE__*/ React.createElement("div", {
        className: "divider"
    });
};
var Group = function(param) {
    var children = param.children;
    return /*#__PURE__*/ React.createElement("div", {
        className: "dropdown__group"
    }, children);
};
var GroupHeader = function(param) {
    var header = param.header;
    return /*#__PURE__*/ React.createElement("div", {
        className: "dropdown__group-header"
    }, header);
};
var DropdownHeader = function(param) {
    var type = param.type, handleClick = param.handleClick, className = param.className, header = param.header;
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
                className: "btn ".concat(className)
            }, header);
        default:
            return /*#__PURE__*/ React.isValidElement(header) ? /*#__PURE__*/ React.cloneElement(header, {
                onClick: handleClick
            }) : null;
    }
};
var Dropdown = function(param) {
    var _openTo = param.openTo, openTo = _openTo === void 0 ? "right" : _openTo, children = param.children, _type = param.type, type = _type === void 0 ? "button" : _type, _className = param.className, className = _className === void 0 ? null : _className, _header = param.header, header = _header === void 0 ? null : _header, _divClassName = param.divClassName, divClassName = _divClassName === void 0 ? null : _divClassName, _up = param.up, up = _up === void 0 ? false : _up, _onClose = param.onClose, onClose = _onClose === void 0 ? null : _onClose, _onOpen = param.onOpen, onOpen = _onOpen === void 0 ? null : _onOpen, _stopPropagation = param.stopPropagation, stopPropagation = _stopPropagation === void 0 ? false : _stopPropagation, _alwaysClose = param.alwaysClose, alwaysClose = _alwaysClose === void 0 ? false : _alwaysClose, outsideIsOpen = param.isOpen;
    var ref = _slicedToArray(useState(false), 2), isOpen = ref[0], setIsOpen = ref[1];
    var divRef = useRef(undefined);
    useEffect(function() {
        if (typeof outsideIsOpen !== "undefined" && outsideIsOpen !== null) setIsOpen(outsideIsOpen);
    }, [
        outsideIsOpen
    ]);
    // eslint-disable-next-line prefer-const
    var handleOutsideClick;
    var handleClick = useCallback(function(e) {
        if (stopPropagation) {
            e.stopPropagation();
            e.preventDefault();
        }
        setIsOpen(function(current) {
            if (!current) {
                // attach/remove event handler
                document.addEventListener("click", handleOutsideClick, true);
            } else {
                document.removeEventListener("click", handleOutsideClick, true);
            }
            var newIsOpen = !current;
            if (newIsOpen && onOpen) onOpen(e);
            if (!newIsOpen && onClose) onClose(e);
            return newIsOpen;
        });
    }, [
        stopPropagation,
        onClose,
        onOpen
    ]);
    handleOutsideClick = function(e) {
        // ignore clicks on the component itself
        if (!_instanceof(e.target, Node) || !(divRef === null || divRef === void 0 ? void 0 : divRef.current)) return;
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
        className: "dropdown".concat(appendClass([
            "left",
            "center"
        ].includes(openTo), "dropdown--".concat(openTo))).concat(appendClass(up, "dropdown--up")).concat(appendClass(isOpen, "active")).concat(appendClass(divClassName)),
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
