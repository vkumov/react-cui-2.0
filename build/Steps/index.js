import React, { forwardRef, isValidElement } from 'react';
import { appendClass } from '../utils/index.ts';

var Step = /*#__PURE__*/ forwardRef(function(param, ref) {
    var _visited = param.visited, visited = _visited === void 0 ? false : _visited, _active = param.active, active = _active === void 0 ? false : _active, _className = param.className, className = _className === void 0 ? null : _className, icon = param.icon, children = param.children, consequativeIdx = param.consequativeIdx;
    return /*#__PURE__*/ React.createElement("div", {
        className: "step".concat(appendClass(visited, "visited")).concat(appendClass(active, "active")).concat(appendClass(className)),
        ref: ref
    }, /*#__PURE__*/ React.createElement("div", {
        className: "step__icon"
    }, icon !== null && icon !== void 0 ? icon : consequativeIdx), /*#__PURE__*/ React.createElement("div", {
        className: "step__label"
    }, children));
});

var Steps = /*#__PURE__*/ forwardRef(function(param, ref) {
    var _size = param.size, size = _size === void 0 ? "default" : _size, _color = param.color, color = _color === void 0 ? "primary" : _color, _vertical = param.vertical, vertical = _vertical === void 0 ? false : _vertical, _className = param.className, className = _className === void 0 ? null : _className, children = param.children;
    return /*#__PURE__*/ React.createElement("div", {
        className: "steps".concat(appendClass(size !== "default", "steps--".concat(size)), " steps--").concat(color).concat(appendClass(vertical, "steps--vertical")).concat(appendClass(className)),
        ref: ref
    }, React.Children.toArray(children).filter(Boolean).map(function(child, idx) {
        return /*#__PURE__*/ isValidElement(child) ? /*#__PURE__*/ React.cloneElement(child, {
            consequativeIdx: idx + 1
        }) : child;
    }));
});

export { Step, Steps };
//# sourceMappingURL=index.js.map
