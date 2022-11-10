import React, { forwardRef } from 'react';
import { ConditionalWrapper } from '../Conditional/index.js';
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
const Switch = /*#__PURE__*/ forwardRef(({ left =null , right =null , disabled =false , inline =false , spacing =null , asFormGroup =true , className =null , id =null , style =null , ...input }, forwardedRef)=>/*#__PURE__*/ React.createElement(ConditionalWrapper, {
        condition: asFormGroup,
        wrapper: /*#__PURE__*/ React.createElement("div", {
            className: `form-group${appendClass(inline, "form-group--inline")}${appendClass(className)}${appendClass(spacing, ` form-group--${spacing}`)}`,
            style: style
        })
    }, /*#__PURE__*/ React.createElement("label", {
        className: `switch${disabled ? " disabled" : ""}`,
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
    }, right) : null)));

export { Switch };
//# sourceMappingURL=index.js.map
