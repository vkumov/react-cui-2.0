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
const VSeparator = /*#__PURE__*/ forwardRef(({ size ="default" , compressed =false , className ="" , ...props }, ref)=>/*#__PURE__*/ React.createElement("div", _extends({
        className: `v-separator${appendClass(size !== "default", `v-separator--${size}`)}${appendClass(compressed, "v-separator--compressed")}${appendClass(className)}`
    }, props, {
        ref: ref
    })));

export { VSeparator };
//# sourceMappingURL=index.js.map
