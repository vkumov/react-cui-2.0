import React, { forwardRef } from 'react';
import { ConditionalWrapper, DisplayIf } from '../Conditional/index.js';
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
const Input = /*#__PURE__*/ forwardRef(({ type ="text" , inline =null , helpBlock =true , label =null , icon =null , iconClick =null , className =null , plain =false , horizontal =null , horizontalLabelClassName ="col-3" , error =null , prefix =null , ...input }, ref)=>/*#__PURE__*/ React.createElement("div", {
        className: `form-group${appendClass(className)}${appendClass(error, "form-group--error")}${appendClass(inline === "form" || inline === "both", "form-group--inline")}${appendClass(inline === "label" || inline === "both", "label--inline")}${appendClass(icon, "input--icon")}${appendClass(horizontal, "form-group--horizontal")}`
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
        className: `icon-${icon}`
    })) : null), /*#__PURE__*/ React.createElement(DisplayIf, {
        condition: !inline && helpBlock && !!error
    }, /*#__PURE__*/ React.createElement(InputHelpBlock, {
        text: error
    })))
);

export { Input };
//# sourceMappingURL=index.js.map
