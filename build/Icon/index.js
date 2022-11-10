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
const Icon = ({ icon , size =null , className =null , ...props })=>/*#__PURE__*/ React.createElement("span", _extends({
        className: `icon-${icon}${appendClass(className)}${appendClass(size, `icon-size-${size}`)}`
    }, props));

export { Icon };
//# sourceMappingURL=index.js.map
