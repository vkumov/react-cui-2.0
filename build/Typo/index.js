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
const Display = ({ as ="h1" , className =null , size , ...props })=>/*#__PURE__*/ React.createElement(as, {
        ...props,
        className: `display-${size}${appendClass(className)}`
    })
;
const Display0 = (props)=>/*#__PURE__*/ React.createElement(Display, _extends({}, props, {
        size: 0
    }))
;
const Display1 = (props)=>/*#__PURE__*/ React.createElement(Display, _extends({}, props, {
        size: 1
    }))
;
const Display2 = (props)=>/*#__PURE__*/ React.createElement(Display, _extends({}, props, {
        size: 2
    }))
;
const Display3 = (props)=>/*#__PURE__*/ React.createElement(Display, _extends({}, props, {
        size: 3
    }))
;
const Display4 = (props)=>/*#__PURE__*/ React.createElement(Display, _extends({}, props, {
        size: 4
    }))
;

export { Display, Display0, Display1, Display2, Display3, Display4 };
//# sourceMappingURL=index.js.map
