import React, { forwardRef, isValidElement } from 'react';
import { appendClass } from '../utils/index.js';

const Step = /*#__PURE__*/ forwardRef(({ visited =false , active =false , className =null , icon , children , consequativeIdx  }, ref)=>/*#__PURE__*/ React.createElement("div", {
        className: `step${appendClass(visited, "visited")}${appendClass(active, "active")}${appendClass(className)}`,
        ref: ref
    }, /*#__PURE__*/ React.createElement("div", {
        className: "step__icon"
    }, icon !== null && icon !== void 0 ? icon : consequativeIdx), /*#__PURE__*/ React.createElement("div", {
        className: "step__label"
    }, children)));

const Steps = /*#__PURE__*/ forwardRef(({ size ="default" , color ="primary" , vertical =false , className =null , children  }, ref)=>/*#__PURE__*/ React.createElement("div", {
        className: `steps${appendClass(size !== "default", `steps--${size}`)} steps--${color}${appendClass(vertical, "steps--vertical")}${appendClass(className)}`,
        ref: ref
    }, React.Children.toArray(children).filter(Boolean).map((child, idx)=>/*#__PURE__*/ isValidElement(child) ? /*#__PURE__*/ React.cloneElement(child, {
            consequativeIdx: idx + 1
        }) : child)));

export { Step, Steps };
//# sourceMappingURL=index.js.map
