import React, { isValidElement, cloneElement } from 'react';
import { Icon } from '../Icon/index.js';
import { appendClass } from '../utils/index.js';

const TimelineItem = ({ icon =/*#__PURE__*/ React.createElement(Icon, {
    icon: "circle"
}) , time =null , className =null , contentClassName =null , simplified =false , header =null , children ,  })=>/*#__PURE__*/ React.createElement("div", {
        className: `timeline__item${appendClass(className)}`
    }, /*#__PURE__*/ React.createElement("div", {
        className: "timeline__icon"
    }, icon), time && !simplified ? /*#__PURE__*/ React.createElement("div", {
        className: "timeline__time"
    }, time) : null, /*#__PURE__*/ React.createElement("div", {
        className: `timeline__content${appendClass(contentClassName)}`
    }, header ? /*#__PURE__*/ isValidElement(header) ? header : /*#__PURE__*/ React.createElement("div", {
        className: "timeline__header"
    }, header) : null, time && simplified ? /*#__PURE__*/ React.createElement("div", {
        className: "timeline__time"
    }, time) : null, children))
;
const Timeline = ({ center =false , right =false , className =null , simplified =false , children ,  })=>/*#__PURE__*/ React.createElement("div", {
        className: `timeline${appendClass(center, "timeline--centered")}${appendClass(right, "timeline--right")}${appendClass(simplified, "simplified")}${appendClass(className)}`
    }, React.Children.map(children, (child)=>/*#__PURE__*/ isValidElement(child) ? /*#__PURE__*/ cloneElement(child, {
            simplified
        }) : child
    ))
;

export { Timeline, TimelineItem };
//# sourceMappingURL=index.js.map
