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
const Blockquote = /*#__PURE__*/ forwardRef(({ className , cite , color , align , children , padding , ...props }, ref)=>/*#__PURE__*/ React.createElement("blockquote", _extends({
        className: `${appendClass(color, `blockquote--${color}`)}${appendClass(align, `blockquote--${align}`)}${appendClass(padding && padding !== "default", `blockquote--${padding}`)}${appendClass(className)}`
    }, props, {
        ref: ref
    }), /*#__PURE__*/ React.createElement("p", null, children), cite ? /*#__PURE__*/ React.createElement("cite", null, cite) : null));

export { Blockquote };
//# sourceMappingURL=index.js.map
