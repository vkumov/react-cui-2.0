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
var Wrapper = function(param) {
    var children = param.children, _className = param.className, className = _className === void 0 ? null : _className;
    return /*#__PURE__*/ React.createElement("span", {
        className: "badge-wrapper".concat(appendClass(className))
    }, children);
};
var Badge = function(_param)  {
    var _color = _param.color, color = _color === void 0 ? "primary" : _color, _size = _param.size, size = _size === void 0 ? "default" : _size, children = _param.children, _className = _param.className, className = _className === void 0 ? null : _className, props = _objectWithoutProperties(_param, [
        "color",
        "size",
        "children",
        "className"
    ]);
    return React.createElement("span", _extends({
        className: "".concat("badge badge--".concat(color)).concat(appendClass(size !== "default", "badge--".concat(size))).concat(appendClass(className))
    }, props), children);
};
Badge.Dot = function(props) {
    return /*#__PURE__*/ React.createElement(Badge, _extends({}, props, {
        size: "dot"
    }));
};
Badge.Tiny = function(props) {
    return /*#__PURE__*/ React.createElement(Badge, _extends({}, props, {
        size: "tiny"
    }));
};
Badge.Small = function(props) {
    return /*#__PURE__*/ React.createElement(Badge, _extends({}, props, {
        size: "small"
    }));
};
Badge.Default = function(props) {
    return /*#__PURE__*/ React.createElement(Badge, _extends({}, props, {
        size: "default"
    }));
};
Badge.Large = function(props) {
    return /*#__PURE__*/ React.createElement(Badge, _extends({}, props, {
        size: "large"
    }));
};
Badge.Wrapper = Wrapper;
var WithBadge = function(_param)  {
    var children = _param.children, badge = _param.badge, _wrapperClass = _param.wrapperClass, wrapperClass = _wrapperClass === void 0 ? null : _wrapperClass, props = _objectWithoutProperties(_param, [
        "children",
        "badge",
        "wrapperClass"
    ]);
    return React.createElement(Badge.Wrapper, {
        className: wrapperClass
    }, children, /*#__PURE__*/ React.createElement(Badge, _extends({}, props), badge));
};

export { Badge, WithBadge };
//# sourceMappingURL=index.js.map
