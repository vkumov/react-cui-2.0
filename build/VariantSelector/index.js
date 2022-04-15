import React, { useState, useEffect } from 'react';
import { Dropdown } from '../Dropdown';
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
var DropdownHeader = function(param) {
    var variants = param.variants, selectedIdx = param.selectedIdx, setIdx = param.setIdx, _placeholder = param.placeholder, placeholder = _placeholder === void 0 ? "Select" : _placeholder;
    var ref1;
     return React.createElement(Dropdown, {
        type: "link",
        header: ((ref1 = variants[selectedIdx]) === null || ref1 === void 0 ? void 0 : ref1.display) || placeholder,
        alwaysClose: true,
        className: "flex-center-vertical",
        stopPropagation: true
    }, variants.map(function(v, idx) {
        var ref;
         return React.createElement("a", {
            key: v.variant,
            onClick: function() {
                return setIdx(idx);
            },
            className: ((ref = variants[selectedIdx]) === null || ref === void 0 ? void 0 : ref.variant) === v.variant ? "selected" : ""
        }, v.display);
    }));
};
var ListHeader = function(param) {
    var variants = param.variants, selectedIdx = param.selectedIdx, setIdx = param.setIdx;
     return React.createElement("ul", {
        className: "list list--inline divider--vertical"
    }, variants.map(function(v, idx) {
        var ref;
         return React.createElement("li", {
            key: v.variant
        }, /*#__PURE__*/ React.createElement(ConditionalWrapper, {
            condition: ((ref = variants[selectedIdx]) === null || ref === void 0 ? void 0 : ref.variant) !== v.variant,
            wrapper: /*#__PURE__*/ React.createElement("a", {
                key: v.variant,
                onClick: function() {
                    return setIdx(idx);
                }
            })
        }, v.display));
    }));
};
var VariantSelector = function(param) {
    var _disableable = param.disableable, disableable = _disableable === void 0 ? false : _disableable, _title = param.title, title = _title === void 0 ? null : _title, _inline = param.inline, inline = _inline === void 0 ? false : _inline, _onChange = param.onChange, onChange = _onChange === void 0 ? null : _onChange, _enableTitleAppend = param.enableTitleAppend, enableTitleAppend = _enableTitleAppend === void 0 ? null : _enableTitleAppend, _className = param.className, className = _className === void 0 ? null : _className, _list = param.list, list = _list === void 0 ? false : _list, _variant = param.variant, variant = _variant === void 0 ? null : _variant, variants = param.variants, _name = param.name, name = _name === void 0 ? "" : _name;
    var ref = _slicedToArray(useState(function() {
        var idx = variants.findIndex(function(v) {
            return v.selected || v.variant === variant;
        });
        return !disableable && idx < 0 ? 0 : idx;
    }), 2), variantIdx = ref[0], setIdx = ref[1];
    useEffect(function() {
        var idx = variants.findIndex(function(v) {
            return v.variant === variant;
        });
        setIdx(function(curr) {
            return idx < 0 || idx === curr ? curr : idx;
        });
    }, [
        variant,
        variants
    ]);
    useEffect(function() {
        if (variantIdx >= 0 && typeof onChange === "function") onChange(variants[variantIdx]);
    }, [
        variantIdx
    ]);
    var dd = function(el, t) {
        return /*#__PURE__*/ React.createElement(el, {
            className: "secondary-tabs"
        }, t ? /*#__PURE__*/ React.createElement("span", {
            className: "half-margin-right"
        }, t) : null, list ? /*#__PURE__*/ React.createElement(ListHeader, {
            variants: variants,
            selectedIdx: variantIdx,
            setIdx: setIdx
        }) : /*#__PURE__*/ React.createElement(DropdownHeader, {
            variants: variants,
            selectedIdx: variantIdx,
            setIdx: setIdx
        }));
    };
    return /*#__PURE__*/ React.createElement("div", {
        className: "form-group".concat(appendClass(inline, " inline-variants")).concat(appendClass(className))
    }, disableable ? /*#__PURE__*/ React.createElement("span", {
        className: "flex-center-vertical"
    }, /*#__PURE__*/ React.createElement("label", {
        className: "switch",
        htmlFor: "".concat(name, ".disableable")
    }, /*#__PURE__*/ React.createElement("input", {
        type: "checkbox",
        onChange: function() {
            return setIdx(function(p) {
                return p >= 0 ? -1 : 0;
            });
        },
        checked: variantIdx >= 0,
        id: "".concat(name, ".disableable")
    }), /*#__PURE__*/ React.createElement("span", {
        className: "switch__input"
    }), /*#__PURE__*/ React.createElement("span", {
        className: "switch__label"
    }, title)), variantIdx >= 0 ? dd("span", enableTitleAppend) : null) : dd("div", title), disableable && variantIdx < 0 ? null : /*#__PURE__*/ React.createElement("div", {
        className: "tabs-wrap panel base-padding-top"
    }, variants[variantIdx].component));
};

export { VariantSelector };
//# sourceMappingURL=index.js.map
