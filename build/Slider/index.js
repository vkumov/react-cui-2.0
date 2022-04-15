import React, { forwardRef } from 'react';
import RCSlider from 'rc-slider';
import { appendClass } from '../utils';

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
var Slider = /*#__PURE__*/ forwardRef(function(_param, ref) {
    var _dots = _param.dots, dots = _dots === void 0 ? true : _dots, label = _param.label, className = _param.className, props = _objectWithoutProperties(_param, [
        "dots",
        "label",
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("div", {
        className: "form-group".concat(appendClass(className))
    }, /*#__PURE__*/ React.createElement("div", {
        className: "form-group__text"
    }, label && /*#__PURE__*/ React.createElement("label", null, label), /*#__PURE__*/ React.createElement("div", {
        className: "half-padding-left half-padding-right base-padding-bottom"
    }, /*#__PURE__*/ React.createElement(RCSlider, _extends({
        dots: dots
    }, props, {
        ref: ref
    })))));
});

export { Slider };
//# sourceMappingURL=index.js.map
