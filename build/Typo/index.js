import React from 'react';
import { appendClass } from '../utils';

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
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
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
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
var Display = function(_param)  {
    var _as = _param.as, as = _as === void 0 ? "h1" : _as, _className = _param.className, className = _className === void 0 ? null : _className, size = _param.size, props = _objectWithoutProperties(_param, [
        "as",
        "className",
        "size"
    ]);
    return React.createElement(as, _objectSpread({}, props, {
        className: "display-".concat(size).concat(appendClass(className))
    }));
};
var Display0 = function(props) {
    return /*#__PURE__*/ React.createElement(Display, _extends({}, props, {
        size: 0
    }));
};
var Display1 = function(props) {
    return /*#__PURE__*/ React.createElement(Display, _extends({}, props, {
        size: 1
    }));
};
var Display2 = function(props) {
    return /*#__PURE__*/ React.createElement(Display, _extends({}, props, {
        size: 2
    }));
};
var Display3 = function(props) {
    return /*#__PURE__*/ React.createElement(Display, _extends({}, props, {
        size: 3
    }));
};
var Display4 = function(props) {
    return /*#__PURE__*/ React.createElement(Display, _extends({}, props, {
        size: 4
    }));
};

export { Display, Display0, Display1, Display2, Display3, Display4 };
//# sourceMappingURL=index.js.map
