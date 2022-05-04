import React, { forwardRef } from 'react';
import { ConditionalWrapper, DisplayIf } from '../Conditional/index.ts';
import { InputHelpBlock } from '../InputHelp/index.ts';
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
var Input = /*#__PURE__*/ forwardRef(function(_param, ref)  {
    var _type = _param.type, type = _type === void 0 ? "text" : _type, _inline = _param.inline, inline = _inline === void 0 ? null : _inline, _helpBlock = _param.helpBlock, helpBlock = _helpBlock === void 0 ? true : _helpBlock, _label = _param.label, label = _label === void 0 ? null : _label, _icon = _param.icon, icon = _icon === void 0 ? null : _icon, _iconClick = _param.iconClick, iconClick = _iconClick === void 0 ? null : _iconClick, _className = _param.className, className = _className === void 0 ? null : _className, _plain = _param.plain, plain = _plain === void 0 ? false : _plain, _horizontal = _param.horizontal, horizontal = _horizontal === void 0 ? null : _horizontal, _horizontalLabelClassName = _param.horizontalLabelClassName, horizontalLabelClassName = _horizontalLabelClassName === void 0 ? "col-3" : _horizontalLabelClassName, _error = _param.error, error = _error === void 0 ? null : _error, _prefix = _param.prefix, prefix = _prefix === void 0 ? null : _prefix, input = _objectWithoutProperties(_param, [
        "type",
        "inline",
        "helpBlock",
        "label",
        "icon",
        "iconClick",
        "className",
        "plain",
        "horizontal",
        "horizontalLabelClassName",
        "error",
        "prefix"
    ]);
    return React.createElement("div", {
        className: "form-group".concat(appendClass(className)).concat(appendClass(error, "form-group--error")).concat(appendClass(inline === "form" || inline === "both", "form-group--inline")).concat(appendClass(inline === "label" || inline === "both", "label--inline")).concat(appendClass(icon, "input--icon")).concat(appendClass(horizontal, "form-group--horizontal"))
    }, /*#__PURE__*/ React.createElement("div", {
        className: "form-group__text"
    }, /*#__PURE__*/ React.createElement(ConditionalWrapper, {
        wrapper: /*#__PURE__*/ React.createElement("div", {
            className: "flex labeled"
        }),
        condition: !!prefix
    }, prefix ? /*#__PURE__*/ React.createElement("div", {
        className: "input-label"
    }, prefix) : null, /*#__PURE__*/ React.createElement("input", _extends({
        type: type,
        ref: ref
    }, input, {
        className: appendClass(plain, "form-group--plaintext")
    }))), label ? /*#__PURE__*/ React.createElement("label", {
        htmlFor: input.id,
        className: appendClass(horizontal, horizontalLabelClassName)
    }, label) : null, icon ? /*#__PURE__*/ React.createElement("button", {
        type: "button",
        className: "link",
        tabIndex: -1,
        onClick: iconClick
    }, /*#__PURE__*/ React.createElement("span", {
        className: "icon-".concat(icon)
    })) : null), /*#__PURE__*/ React.createElement(DisplayIf, {
        condition: !inline && helpBlock && !!error
    }, /*#__PURE__*/ React.createElement(InputHelpBlock, {
        text: error
    })));
});

export { Input };
//# sourceMappingURL=index.js.map
