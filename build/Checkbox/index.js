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
const Checkbox = /*#__PURE__*/ forwardRef(({ inline =false , asFormGroup =true , children =null , spacing =null , ...input }, ref)=>/*#__PURE__*/ React.createElement(ConditionalWrapper, {
        condition: asFormGroup,
        wrapper: /*#__PURE__*/ React.createElement("div", {
            className: `form-group${appendClass(inline, "form-group--inline")}${appendClass(spacing && spacing !== "default", `form-group--${spacing}`)}`
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
    }, children) : null))
);

export { Checkbox };
//# sourceMappingURL=index.js.map
