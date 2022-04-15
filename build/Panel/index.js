import React from 'react';
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
var Panel = /*#__PURE__*/ React.forwardRef(function(_param, ref)  {
    var _color = _param.color, color = _color === void 0 ? "plain" : _color, _padding = _param.padding, padding = _padding === void 0 ? "default" : _padding, _bordered = _param.bordered, bordered = _bordered === void 0 ? false : _bordered, _raised = _param.raised, raised = _raised === void 0 ? false : _raised, _well = _param.well, well = _well === void 0 ? false : _well, _className = _param.className, className = _className === void 0 ? null : _className, props = _objectWithoutProperties(_param, [
        "color",
        "padding",
        "bordered",
        "raised",
        "well",
        "className"
    ]);
    return React.createElement("div", _extends({
        className: "panel".concat(appendClass(color !== "plain", "panel--".concat(color))).concat(appendClass(padding !== "default", "panel--".concat(padding))).concat(appendClass(bordered, function() {
            if (typeof bordered === "string") return "panel--bordered-".concat(bordered);
            if (Array.isArray(bordered)) return bordered.map(function(b) {
                return "panel--bordered-".concat(b);
            }).join(" ");
            return "panel--bordered";
        })).concat(appendClass(raised, "panel--raised")).concat(appendClass(well, "panel--well")).concat(appendClass(className)),
        ref: ref
    }, props));
});

export { Panel };
//# sourceMappingURL=index.js.map
