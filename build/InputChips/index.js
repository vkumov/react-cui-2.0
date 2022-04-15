import React, { useState, useEffect, useCallback } from 'react';
import { ConditionalWrapper } from '../Conditional';
import { Label } from '../Label';
import { InputHelpBaloon, InputHelpBlock } from '../InputHelp';
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
var emptyList = [];
var InputChips = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var _chipsColor = _param.chipsColor, chipsColor = _chipsColor === void 0 ? "light" : _chipsColor, _addOnBlur = _param.addOnBlur, addOnBlur = _addOnBlur === void 0 ? true : _addOnBlur, _delimiters = _param.delimiters, delimiters = _delimiters === void 0 ? [
        13
    ] : _delimiters, _label = _param.label, label = _label === void 0 ? null : _label, _allowRepeat = _param.allowRepeat, allowRepeat = _allowRepeat === void 0 ? false : _allowRepeat, _allowRegex = _param.allowRegex, allowRegex = _allowRegex === void 0 ? null : _allowRegex, _valueValidator = _param.valueValidator, valueValidator = _valueValidator === void 0 ? null : _valueValidator, _maxChips = _param.maxChips, maxChips = _maxChips === void 0 ? null : _maxChips, _baloon = _param.baloon, baloon = _baloon === void 0 ? null : _baloon, _className = _param.className, className = _className === void 0 ? null : _className, _id = _param.id, id = _id === void 0 ? null : _id, _error = _param.error, error = _error === void 0 ? null : _error, tmp = _param.value, initialValue = tmp === void 0 ? null : tmp, onChange = _param.onChange, _outerWrap = _param.outerWrap, outerWrap = _outerWrap === void 0 ? true : _outerWrap, _chipsOutside = _param.chipsOutside, chipsOutside = _chipsOutside === void 0 ? false : _chipsOutside, _renderChip = _param.renderChip, renderChip = _renderChip === void 0 ? null : _renderChip, _onBlur = _param.onBlur, onBlur = _onBlur === void 0 ? null : _onBlur, _onChipRemove = _param.onChipRemove, onChipRemove = _onChipRemove === void 0 ? null : _onChipRemove, onClick = _param.onClick, noInput = _param.noInput, input = _objectWithoutProperties(_param, [
        "chipsColor",
        "addOnBlur",
        "delimiters",
        "label",
        "allowRepeat",
        "allowRegex",
        "valueValidator",
        "maxChips",
        "baloon",
        "className",
        "id",
        "error",
        "value",
        "onChange",
        "outerWrap",
        "chipsOutside",
        "renderChip",
        "onBlur",
        "onChipRemove",
        "onClick",
        "noInput"
    ]);
    var _$ref1 = _slicedToArray(useState(emptyList), 2), value1 = _$ref1[0], setValue = _$ref1[1];
    useEffect(function() {
        setValue(function(curr) {
            return initialValue || curr || emptyList;
        });
    }, [
        initialValue
    ]);
    var addValue = useCallback(function(v) {
        if (typeof valueValidator === "function") {
            if (!valueValidator(v)) return;
        }
        setValue(function(curr) {
            if (allowRepeat || !(curr || []).includes(v)) {
                var n = (curr || []).concat(v);
                if (typeof onChange === "function") onChange(n);
                return n;
            } else return curr;
        });
    }, [
        allowRepeat,
        valueValidator,
        onChange
    ]);
    var handleKeyDown = useCallback(function(event) {
        var d = delimiters;
        if (typeof d === "string") {
            var map = Array.prototype.map;
            d = map.call(d, function(ch) {
                return ch.charCodeAt(0);
            });
        }
        if (Array.isArray(d) && d.includes(event.keyCode)) {
            addValue(event.target.value);
            event.target.value = "";
            event.stopPropagation();
            event.preventDefault();
        }
    }, [
        delimiters,
        addValue
    ]);
    var handleBlur = useCallback(function(event) {
        var _$ref;
        if (addOnBlur && ((_$ref = event.target) === null || _$ref === void 0 ? void 0 : _$ref.value)) {
            var value = event.target.value;
            if (allowRegex && RegExp(allowRegex).test(value)) {
                addValue(value);
            } else if (!allowRegex) {
                addValue(value);
            }
        }
        event.target.value = "";
        if (typeof onBlur === "function") onBlur(event);
    }, [
        addOnBlur,
        allowRegex,
        addValue,
        onBlur
    ]);
    var handleDelete = useCallback(function(idx) {
        setValue(function(curr) {
            curr.splice(idx, 1);
            if (typeof onChange === "function") onChange(curr.slice());
            return curr.slice();
        });
        if (typeof onChipRemove === "function") onChipRemove(idx);
    }, [
        onChange,
        onChipRemove
    ]);
    var showInput = (!maxChips || maxChips && Array.isArray(value1) && value1.length < maxChips) && !noInput;
    return /*#__PURE__*/ React.createElement(ConditionalWrapper, {
        wrapper: /*#__PURE__*/ React.createElement("div", {
            className: "form-group".concat(appendClass(className)).concat(appendClass(error, "form-group--error")),
            ref: ref
        }),
        condition: outerWrap
    }, /*#__PURE__*/ React.createElement("div", {
        className: "form-group__text chips".concat(appendClass(!outerWrap && className, className))
    }, label ? /*#__PURE__*/ React.createElement("label", {
        htmlFor: id || input.name
    }, label, baloon ? /*#__PURE__*/ React.createElement(InputHelpBaloon, {
        baloon: baloon
    }) : null) : null, chipsOutside && Array.isArray(value1) && value1.length ? /*#__PURE__*/ React.createElement("span", {
        className: "chips-outer qtr-margin-bottom"
    }, /*#__PURE__*/ React.createElement("span", {
        className: "chips-inner"
    }, value1.map(function(v, i) {
        return renderChip ? renderChip({
            value: v,
            idx: i,
            onDelete: function() {
                return handleDelete(i);
            }
        }) : /*#__PURE__*/ React.createElement(Label, {
            removable: true,
            onRemove: function() {
                return handleDelete(i);
            },
            color: chipsColor,
            size: "small",
            key: "".concat(v, "-").concat(i),
            className: "no-margin-bottom"
        }, v);
    }))) : null, /*#__PURE__*/ React.createElement("div", {
        className: "input ".concat(appendClass(!showInput, "dbl-padding-right")),
        onClick: onClick
    }, !chipsOutside && Array.isArray(value1) && value1.length ? /*#__PURE__*/ React.createElement("span", {
        className: "chips-outer"
    }, /*#__PURE__*/ React.createElement("span", {
        className: "chips-inner"
    }, value1.map(function(v, i) {
        return renderChip ? renderChip({
            value: v,
            idx: i,
            onDelete: function() {
                return handleDelete(i);
            }
        }) : /*#__PURE__*/ React.createElement(Label, {
            removable: true,
            onRemove: function(e) {
                e.stopPropagation();
                e.preventDefault();
                handleDelete(i);
            },
            color: chipsColor,
            size: "small",
            key: "".concat(v, "-").concat(i),
            className: "no-margin-bottom"
        }, v);
    }))) : null, showInput ? /*#__PURE__*/ React.createElement("input", _extends({
        type: "text",
        onKeyDown: handleKeyDown,
        onBlur: handleBlur,
        id: id || input.name
    }, input)) : null)), error ? /*#__PURE__*/ React.createElement(InputHelpBlock, {
        text: error
    }) : null);
});

export { InputChips };
//# sourceMappingURL=index.js.map