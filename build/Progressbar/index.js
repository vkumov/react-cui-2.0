import React, { forwardRef } from 'react';
import { appendClass } from '../utils/index.ts';

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
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var Progressbar = /*#__PURE__*/ forwardRef(function(_param, ref)  {
    var _size = _param.size, size = _size === void 0 ? "default" : _size, _withLabel = _param.withLabel, withLabel = _withLabel === void 0 ? false : _withLabel, _label = _param.label, label = _label === void 0 ? null : _label, _color = _param.color, color = _color === void 0 ? null : _color, _className = _param.className, className = _className === void 0 ? null : _className, percentage = _param.percentage, props = _objectWithoutProperties(_param, [
        "size",
        "withLabel",
        "label",
        "color",
        "className",
        "percentage"
    ]);
    return React.createElement("div", _extends({
        className: "progressbar".concat(appendClass(size !== "default", "progressbar--".concat(size))).concat(appendClass(color, "progressbar--".concat(color))).concat(appendClass(className)),
        "data-percentage": percentage
    }, props, {
        ref: ref
    }), /*#__PURE__*/ React.createElement("div", {
        className: "progressbar__fill"
    }), withLabel ? label ? /*#__PURE__*/ React.createElement("div", {
        className: "progressbar__label"
    }, label) : /*#__PURE__*/ React.createElement("div", {
        className: "progressbar__label"
    }, "".concat(percentage, "%")) : null);
});

export { Progressbar };
//# sourceMappingURL=index.js.map
