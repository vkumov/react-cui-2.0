import React, { forwardRef } from 'react';
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
const Progressbar = /*#__PURE__*/ forwardRef(({ size ="default" , withLabel =false , label =null , color =null , className =null , percentage , ...props }, ref)=>/*#__PURE__*/ React.createElement("div", _extends({
        className: `progressbar${appendClass(size !== "default", `progressbar--${size}`)}${appendClass(color, `progressbar--${color}`)}${appendClass(className)}`,
        "data-percentage": percentage
    }, props, {
        ref: ref
    }), /*#__PURE__*/ React.createElement("div", {
        className: "progressbar__fill"
    }), withLabel ? label ? /*#__PURE__*/ React.createElement("div", {
        className: "progressbar__label"
    }, label) : /*#__PURE__*/ React.createElement("div", {
        className: "progressbar__label"
    }, `${percentage}%`) : null));

export { Progressbar };
//# sourceMappingURL=index.js.map
