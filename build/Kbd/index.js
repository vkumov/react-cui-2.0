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
const Kbd = /*#__PURE__*/ forwardRef(({ children , className , ...props }, ref)=>/*#__PURE__*/ React.createElement("span", _extends({
        className: `kbd${appendClass(className)}`,
        ref: ref
    }, props), children)
);

export { Kbd };
//# sourceMappingURL=index.js.map
