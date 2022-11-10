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
const Panel = /*#__PURE__*/ React.forwardRef(({ color ="plain" , padding ="default" , bordered =false , raised =false , well =false , className =null , ...props }, ref)=>/*#__PURE__*/ React.createElement("div", _extends({
        className: `panel${appendClass(color !== "plain", `panel--${color}`)}${appendClass(padding !== "default", `panel--${padding}`)}${appendClass(bordered, ()=>{
            if (typeof bordered === "string") return `panel--bordered-${bordered}`;
            if (Array.isArray(bordered)) return bordered.map((b)=>`panel--bordered-${b}`).join(" ");
            return "panel--bordered";
        })}${appendClass(raised, "panel--raised")}${appendClass(well, "panel--well")}${appendClass(className)}`,
        ref: ref
    }, props)));

export { Panel };
//# sourceMappingURL=index.js.map
