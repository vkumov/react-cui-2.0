import React, { forwardRef } from 'react';
import RCSlider from 'rc-slider';
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
const Slider = /*#__PURE__*/ forwardRef(({ dots =true , label , className , ...props }, ref)=>{
    return /*#__PURE__*/ React.createElement("div", {
        className: `form-group${appendClass(className)}`
    }, /*#__PURE__*/ React.createElement("div", {
        className: "form-group__text"
    }, label && /*#__PURE__*/ React.createElement("label", null, label), /*#__PURE__*/ React.createElement("div", {
        className: "half-padding-left half-padding-right base-padding-bottom"
    }, /*#__PURE__*/ React.createElement(RCSlider, _extends({
        dots: dots
    }, props, {
        ref: ref
    })))));
});

export { Slider };
//# sourceMappingURL=index.js.map
