import React, { forwardRef } from 'react';
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
var VSeparator = /*#__PURE__*/ forwardRef(function(_param, ref)  {
    var _size = _param.size, size = _size === void 0 ? "default" : _size, _compressed = _param.compressed, compressed = _compressed === void 0 ? false : _compressed, _className = _param.className, className = _className === void 0 ? "" : _className, props = _objectWithoutProperties(_param, [
        "size",
        "compressed",
        "className"
    ]);
    return React.createElement("div", _extends({
        className: "v-separator".concat(appendClass(size !== "default", "v-separator--".concat(size))).concat(appendClass(compressed, "v-separator--compressed")).concat(appendClass(className))
    }, props, {
        ref: ref
    }));
});

export { VSeparator };
//# sourceMappingURL=index.js.map
