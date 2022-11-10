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
const Section = /*#__PURE__*/ forwardRef(({ children , className =null , ...props }, ref)=>/*#__PURE__*/ React.createElement("div", _extends({
        className: `section${appendClass(className)}`
    }, props, {
        ref: ref
    }), children));

export { Section };
//# sourceMappingURL=index.js.map
