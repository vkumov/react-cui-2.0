import React from 'react';
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
const Wrapper = ({ children , className =null  })=>/*#__PURE__*/ React.createElement("span", {
        className: `badge-wrapper${appendClass(className)}`
    }, children)
;
const Badge = ({ color ="primary" , size ="default" , children , className =null , ...props })=>/*#__PURE__*/ React.createElement("span", _extends({
        className: `${`badge badge--${color}`}${appendClass(size !== "default", `badge--${size}`)}${appendClass(className)}`
    }, props), children)
;
Badge.Dot = (props)=>/*#__PURE__*/ React.createElement(Badge, _extends({}, props, {
        size: "dot"
    }))
;
Badge.Tiny = (props)=>/*#__PURE__*/ React.createElement(Badge, _extends({}, props, {
        size: "tiny"
    }))
;
Badge.Small = (props)=>/*#__PURE__*/ React.createElement(Badge, _extends({}, props, {
        size: "small"
    }))
;
Badge.Default = (props)=>/*#__PURE__*/ React.createElement(Badge, _extends({}, props, {
        size: "default"
    }))
;
Badge.Large = (props)=>/*#__PURE__*/ React.createElement(Badge, _extends({}, props, {
        size: "large"
    }))
;
Badge.Wrapper = Wrapper;
const WithBadge = ({ children , badge , wrapperClass =null , ...props })=>/*#__PURE__*/ React.createElement(Badge.Wrapper, {
        className: wrapperClass
    }, children, /*#__PURE__*/ React.createElement(Badge, _extends({}, props), badge))
;

export { Badge, WithBadge };
//# sourceMappingURL=index.js.map
