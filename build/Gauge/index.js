import React, { forwardRef } from 'react';
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
const Gauge = /*#__PURE__*/ forwardRef(({ color ="primary" , size ="default" , className =null , label , percentage , ...props }, ref)=>{
    return /*#__PURE__*/ React.createElement("div", _extends({
        className: `gauge-container${appendClass(className)}`
    }, props, {
        ref: ref
    }), /*#__PURE__*/ React.createElement("div", {
        className: `gauge${appendClass(size && size !== "default", `gauge--${size}`)}${appendClass(color, `gauge--${color}`)}`,
        "data-percentage": `${percentage}`
    }, /*#__PURE__*/ React.createElement("div", {
        className: "gauge__circle"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "mask full"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "fill"
    })), /*#__PURE__*/ React.createElement("div", {
        className: "mask half"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "fill"
    }), /*#__PURE__*/ React.createElement("div", {
        className: "fill fix"
    }))), /*#__PURE__*/ React.createElement("div", {
        className: "gauge__inset"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "gauge__percentage"
    }, percentage))), label ? /*#__PURE__*/ React.createElement("div", {
        className: "gauge__label"
    }, label) : null);
});

export { Gauge };
//# sourceMappingURL=index.js.map
