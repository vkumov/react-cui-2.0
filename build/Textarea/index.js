import React from 'react';
import { InputHelpBlock } from '../InputHelp/index.js';
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
const Textarea = ({ label =null , textareaClass =null , innerDivClass =null , className =null , id =null , inputRef =null , inline =false , error =null , ...textarea })=>{
    return /*#__PURE__*/ React.createElement("div", {
        className: `form-group${appendClass(inline, "form-group--inline")}${appendClass(className)}${appendClass(error, "form-group--error")}`
    }, /*#__PURE__*/ React.createElement("div", {
        className: `form-group__text${appendClass(innerDivClass)}`
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
