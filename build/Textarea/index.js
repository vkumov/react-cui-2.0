import React from 'react';
import { InputHelpBlock } from '../InputHelp';
import { appendClass } from '../utils';

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
var Textarea = function(_param) {
    var _label = _param.label, label = _label === void 0 ? null : _label, _textareaClass = _param.textareaClass, textareaClass = _textareaClass === void 0 ? null : _textareaClass, _innerDivClass = _param.innerDivClass, innerDivClass = _innerDivClass === void 0 ? null : _innerDivClass, _className = _param.className, className = _className === void 0 ? null : _className, _id = _param.id, id = _id === void 0 ? null : _id, _inputRef = _param.inputRef, inputRef = _inputRef === void 0 ? null : _inputRef, _inline = _param.inline, inline = _inline === void 0 ? false : _inline, _error = _param.error, error = _error === void 0 ? null : _error, textarea = _objectWithoutProperties(_param, [
        "label",
        "textareaClass",
        "innerDivClass",
        "className",
        "id",
        "inputRef",
        "inline",
        "error"
    ]);
    return /*#__PURE__*/ React.createElement("div", {
        className: "form-group".concat(appendClass(inline, "form-group--inline")).concat(appendClass(className)).concat(appendClass(error, "form-group--error"))
    }, /*#__PURE__*/ React.createElement("div", {
        className: "form-group__text".concat(appendClass(innerDivClass))
    }, /*#__PURE__*/ React.createElement("textarea", _extends({
        className: textareaClass,
        ref: inputRef
    }, textarea), textarea.value), label ? /*#__PURE__*/ React.createElement("label", {
        htmlFor: id
    }, label) : null), error ? /*#__PURE__*/ React.createElement(InputHelpBlock, {
        text: error
    }) : null);
};

export { Textarea };
//# sourceMappingURL=index.js.map