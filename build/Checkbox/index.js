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
var Checkbox = /*#__PURE__*/ forwardRef(function(_param, ref)  {
    var _inline = _param.inline, inline = _inline === void 0 ? false : _inline, _asFormGroup = _param.asFormGroup, asFormGroup = _asFormGroup === void 0 ? true : _asFormGroup, _children = _param.children, children = _children === void 0 ? null : _children, _spacing = _param.spacing, spacing = _spacing === void 0 ? null : _spacing, input = _objectWithoutProperties(_param, [
        "inline",
        "asFormGroup",
        "children",
        "spacing"
    ]);
    return React.createElement(ConditionalWrapper, {
        condition: asFormGroup,
        wrapper: /*#__PURE__*/ React.createElement("div", {
            className: "form-group".concat(appendClass(inline, "form-group--inline")).concat(appendClass(spacing && spacing !== "default", "form-group--".concat(spacing)))
        })
    }, /*#__PURE__*/ React.createElement("label", {
        className: "checkbox"
    }, /*#__PURE__*/ React.createElement("input", _extends({
        type: "checkbox"
    }, input, {
        ref: ref
    })), /*#__PURE__*/ React.createElement("span", {
        className: "checkbox__input"
    }), children ? /*#__PURE__*/ React.createElement("span", {
        className: "checkbox__label"
    }, children) : null));
});

export { Checkbox };
//# sourceMappingURL=index.js.map
