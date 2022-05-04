import React, { forwardRef } from 'react';
import { ConditionalWrapper } from '../Conditional/index.ts';
import { appendClass } from '../utils/index.ts';

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
var Switch = /*#__PURE__*/ forwardRef(function(_param, forwardedRef)  {
    var _left = _param.left, left = _left === void 0 ? null : _left, _right = _param.right, right = _right === void 0 ? null : _right, _disabled = _param.disabled, disabled = _disabled === void 0 ? false : _disabled, _inline = _param.inline, inline = _inline === void 0 ? false : _inline, _spacing = _param.spacing, spacing = _spacing === void 0 ? null : _spacing, _asFormGroup = _param.asFormGroup, asFormGroup = _asFormGroup === void 0 ? true : _asFormGroup, _className = _param.className, className = _className === void 0 ? null : _className, _id = _param.id, id = _id === void 0 ? null : _id, _style = _param.style, style = _style === void 0 ? null : _style, input = _objectWithoutProperties(_param, [
        "left",
        "right",
        "disabled",
        "inline",
        "spacing",
        "asFormGroup",
        "className",
        "id",
        "style"
    ]);
    return React.createElement(ConditionalWrapper, {
        condition: asFormGroup,
        wrapper: /*#__PURE__*/ React.createElement("div", {
            className: "form-group".concat(appendClass(inline, "form-group--inline")).concat(appendClass(className)).concat(appendClass(spacing, " form-group--".concat(spacing))),
            style: style
        })
    }, /*#__PURE__*/ React.createElement("label", {
        className: "switch".concat(disabled ? " disabled" : ""),
        htmlFor: id || input.name
    }, /*#__PURE__*/ React.createElement("input", _extends({
        type: "checkbox"
    }, input, {
        id: id || input.name,
        checked: input.checked,
        ref: forwardedRef
    })), left ? /*#__PURE__*/ React.createElement("span", {
        className: "switch__label"
    }, left) : null, /*#__PURE__*/ React.createElement("span", {
        className: "switch__input"
    }), right ? /*#__PURE__*/ React.createElement("span", {
        className: "switch__label"
    }, right) : null));
});

export { Switch };
//# sourceMappingURL=index.js.map
