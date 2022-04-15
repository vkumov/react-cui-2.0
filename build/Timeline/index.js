import React, { isValidElement, cloneElement } from 'react';
import { Icon } from '../Icon';
import { appendClass } from '../utils';

var TimelineItem = function(param) {
    var _icon = param.icon, icon = _icon === void 0 ? /*#__PURE__*/ React.createElement(Icon, {
        icon: "circle"
    }) : _icon, _time = param.time, time = _time === void 0 ? null : _time, _className = param.className, className = _className === void 0 ? null : _className, _contentClassName = param.contentClassName, contentClassName = _contentClassName === void 0 ? null : _contentClassName, _simplified = param.simplified, simplified = _simplified === void 0 ? false : _simplified, _header = param.header, header = _header === void 0 ? null : _header, children = param.children;
    return /*#__PURE__*/ React.createElement("div", {
        className: "timeline__item".concat(appendClass(className))
    }, /*#__PURE__*/ React.createElement("div", {
        className: "timeline__icon"
    }, icon), time && !simplified ? /*#__PURE__*/ React.createElement("div", {
        className: "timeline__time"
    }, time) : null, /*#__PURE__*/ React.createElement("div", {
        className: "timeline__content".concat(appendClass(contentClassName))
    }, header ? /*#__PURE__*/ isValidElement(header) ? header : /*#__PURE__*/ React.createElement("div", {
        className: "timeline__header"
    }, header) : null, time && simplified ? /*#__PURE__*/ React.createElement("div", {
        className: "timeline__time"
    }, time) : null, children));
};
var Timeline = function(param) {
    var _center = param.center, center = _center === void 0 ? false : _center, _right = param.right, right = _right === void 0 ? false : _right, _className = param.className, className = _className === void 0 ? null : _className, _simplified = param.simplified, simplified = _simplified === void 0 ? false : _simplified, children = param.children;
    return /*#__PURE__*/ React.createElement("div", {
        className: "timeline".concat(appendClass(center, "timeline--centered")).concat(appendClass(right, "timeline--right")).concat(appendClass(simplified, "simplified")).concat(appendClass(className))
    }, React.Children.map(children, function(child) {
        return /*#__PURE__*/ isValidElement(child) ? /*#__PURE__*/ cloneElement(child, {
            simplified: simplified
        }) : child;
    }));
};

export { Timeline, TimelineItem };
//# sourceMappingURL=index.js.map
