import React, { forwardRef, useState, useRef, useMemo, useCallback, useEffect, isValidElement } from 'react';
import { useMergeRefs } from 'use-callback-ref';
import { InputChips } from '../InputChips/index.ts';
import { InputHelpBlock } from '../InputHelp/index.ts';
import { appendClass } from '../utils/index.ts';

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
function isOption(element) {
    return element.type === "option";
}
function isOptGroup(element) {
    return element.type === "optgroup";
}
var SelectChildren = function(param) {
    var children = param.children, handleOptionClick = param.handleOptionClick, isSelected = param.isSelected;
    return React.Children.map(children, function(child, idx) {
        if (!/*#__PURE__*/ isValidElement(child)) return child;
        if (isOption(child)) return /*#__PURE__*/ React.createElement("a", {
            key: idx,
            onClick: function(e) {
                return handleOptionClick(e, child.props.value);
            },
            className: "".concat(appendClass(isSelected(child.props.value), "selected")).concat(appendClass(child.props.disabled, "disabled"))
        }, child.props.children);
        if (isOptGroup(child)) return /*#__PURE__*/ React.createElement("div", {
            key: idx,
            className: "dropdown__group"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "dropdown__group-header"
        }, child.props.label), /*#__PURE__*/ React.createElement(SelectChildren, {
            handleOptionClick: handleOptionClick,
            isSelected: isSelected
        }, child.props.children));
        return child;
    });
};
var collectDisplays = function(children) {
    var t = [];
    React.Children.forEach(children, function(child) {
        if (!/*#__PURE__*/ isValidElement(child)) return null;
        if (isOption(child)) {
            t.push({
                display: child.props.children,
                value: child.props.value
            });
        }
        if (isOptGroup(child)) t.push(collectDisplays(child.props.children));
    });
    return t.flat();
};
var EditableSelect = /*#__PURE__*/ forwardRef(function(_param, inputRef) {
    var _compressed = _param.compressed, compressed = _compressed === void 0 ? false : _compressed, _prompt = _param.prompt, prompt = _prompt === void 0 ? "Select an option" : _prompt, _inline = _param.inline, inline = _inline === void 0 ? false : _inline, _type = _param.type, type = _type === void 0 ? "text" : _type, children = _param.children, _label = _param.label, label = _label === void 0 ? null : _label, _error = _param.error, error = _error === void 0 ? null : _error, _onChange = _param.onChange, onChange = _onChange === void 0 ? null : _onChange, tmp = _param.value, initialValue = tmp === void 0 ? undefined : tmp, _editable = _param.editable, editable = _editable === void 0 ? false : _editable, _multi = _param.multi, multi = _multi === void 0 ? false : _multi, _displayValues = _param.displayValues, displayValues = _displayValues === void 0 ? false : _displayValues, disabled = _param.disabled, className = _param.className, divRef = _param.divRef, options = _param.options, _onSelect = _param.onSelect, onSelect = _onSelect === void 0 ? null : _onSelect, _onDeselect = _param.onDeselect, onDeselect = _onDeselect === void 0 ? null : _onDeselect, input = _objectWithoutProperties(_param, [
        "compressed",
        "prompt",
        "inline",
        "type",
        "children",
        "label",
        "error",
        "onChange",
        "value",
        "editable",
        "multi",
        "displayValues",
        "disabled",
        "className",
        "divRef",
        "options",
        "onSelect",
        "onDeselect"
    ]);
    var ref4;
    var ref1 = _slicedToArray(useState(false), 2), isOpen = ref1[0], setOpen = ref1[1];
    var ref2 = _slicedToArray(useState(initialValue), 2), value = ref2[0], setValue = ref2[1];
    var ref3 = useRef(undefined);
    var display = useMemo(function() {
        return collectDisplays(children);
    }, [
        children
    ]);
    var handleClick = useCallback(function() {
        var newState = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
        if (disabled) return;
        setOpen(newState);
    }, [
        disabled
    ]);
    useEffect(function() {
        if (isOpen) {
            var onOutsideClick = function(e) {
                // ignore clicks on the component itself
                if (!_instanceof(e.target, Node) || !(ref3 === null || ref3 === void 0 ? void 0 : ref3.current)) return;
                if (ref3.current && ref3.current.contains(e.target)) return;
                if (ref3.current && !ref3.current.contains(e.target)) {
                    handleClick(false);
                }
            };
            document.addEventListener("click", onOutsideClick, true);
            return function() {
                return document.removeEventListener("click", onOutsideClick, true);
            };
        }
    }, [
        isOpen,
        handleClick
    ]);
    var handleOptionClick = useCallback(function(_e, newValue) {
        if (multi) {
            var ref;
            var added = true;
            setValue(function(curr) {
                if (curr === null || curr === void 0 ? void 0 : curr.includes(newValue)) {
                    added = false;
                    return curr.filter(function(v) {
                        return v !== newValue;
                    });
                } else return (curr || []).concat(newValue);
            });
            var r = (ref = added ? onSelect : onDeselect) === null || ref === void 0 ? void 0 : ref.call(undefined, newValue);
            if (typeof r === "function") r();
        } else {
            setValue(newValue);
        }
        if (!multi) handleClick(false);
    }, [
        handleClick,
        multi,
        onSelect,
        onDeselect
    ]);
    var isSelected = function(checkValue) {
        return multi ? value === null || value === void 0 ? void 0 : value.includes(checkValue) : value === checkValue;
    };
    useEffect(function() {
        setValue(initialValue);
    }, [
        initialValue
    ]);
    useEffect(function() {
        if (multi && initialValue && !Array.isArray(initialValue)) throw Error("Value must be an array if multi select is allowed.");
    }, [
        multi,
        initialValue
    ]);
    useEffect(function() {
        if (typeof onChange === "function") onChange(value);
    }, [
        value
    ]);
    return /*#__PURE__*/ React.createElement("div", {
        className: "form-group dropdown".concat(appendClass(compressed, "input--compressed")).concat(appendClass(isOpen, "active")).concat(appendClass(inline, "form-group--inline")).concat(appendClass(error, "form-group--error")).concat(appendClass(disabled, "disabled")).concat(appendClass(className)),
        ref: useMergeRefs([
            ref3,
            divRef
        ])
    }, multi ? /*#__PURE__*/ React.createElement(InputChips, _extends({
        className: "select editable",
        label: label
    }, input, {
        placeholder: !Array.isArray(value) || !value.length ? input.placeholder || prompt : "",
        readOnly: !editable,
        onClick: function() {
            return handleClick(true);
        },
        onChange: function() {
            return void 0;
        },
        onChipRemove: function(idx) {
            var val;
            setValue(function(curr) {
                val = curr[idx];
                return curr.filter(function(_v, i) {
                    return i !== idx;
                });
            });
            if (typeof onDeselect === "function") onDeselect(val);
        },
        value: displayValues ? value : display.filter(function(d) {
            return value === null || value === void 0 ? void 0 : value.includes(d.value);
        }).map(function(d) {
            return d.display;
        }),
        noInput: inline && !editable && Array.isArray(value) && value.length > 0,
        outerWrap: false,
        ref: inputRef
    })) : /*#__PURE__*/ React.createElement("div", {
        className: "form-group__text select editable",
        onClick: function() {
            return handleClick(true);
        }
    }, /*#__PURE__*/ React.createElement("input", _extends({
        type: type,
        placeholder: input.placeholder || prompt,
        autoComplete: "off",
        readOnly: !editable
    }, input, {
        onChange: function(e) {
            if (!editable) return;
            e.persist();
            setValue(e.target.value);
        },
        value: editable ? value || "" : !displayValues ? ((ref4 = display === null || display === void 0 ? void 0 : display.find(function(el) {
            return el.value === value;
        })) === null || ref4 === void 0 ? void 0 : ref4.display) || "" : value,
        ref: inputRef
    })), label ? /*#__PURE__*/ React.createElement("label", {
        htmlFor: input.id
    }, label) : null), /*#__PURE__*/ React.createElement("div", {
        className: "dropdown__menu"
    }, /*#__PURE__*/ React.createElement(SelectChildren, {
        handleOptionClick: handleOptionClick,
        isSelected: isSelected
    }, options ? options.map(function(opt, idx) {
        return /*#__PURE__*/ React.createElement("option", {
            key: idx,
            value: opt.value
        }, opt.value);
    }) : children)), error ? /*#__PURE__*/ React.createElement(InputHelpBlock, {
        text: error
    }) : null);
});

export { EditableSelect };
//# sourceMappingURL=index.js.map
