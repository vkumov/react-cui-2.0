import React from 'react';
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
var Label = function(_param)  {
    var _size = _param.size, size = _size === void 0 ? "default" : _size, _color = _param.color, color = _color === void 0 ? "primary" : _color, _bordered = _param.bordered, bordered = _bordered === void 0 ? false : _bordered, _removable = _param.removable, removable = _removable === void 0 ? false : _removable, _onRemove = _param.onRemove, onRemove = _onRemove === void 0 ? null : _onRemove, _raised = _param.raised, raised = _raised === void 0 ? false : _raised, _className = _param.className, className = _className === void 0 ? null : _className, children = _param.children, props = _objectWithoutProperties(_param, [
        "size",
        "color",
        "bordered",
        "removable",
        "onRemove",
        "raised",
        "className",
        "children"
    ]);
    return React.createElement("span", _extends({
        className: "label label--".concat(color).concat(appendClass(size !== "default", "label--".concat(size))).concat(appendClass(bordered, "label--bordered")).concat(appendClass(raised, "label--raised")).concat(appendClass(className))
    }, props), children, removable ? /*#__PURE__*/ React.createElement("span", {
        className: "icon-close",
        onClick: onRemove
    }) : null);
};
Label.Primary = function(props) {
    return /*#__PURE__*/ React.createElement(Label, _extends({
        color: "primary"
    }, props));
};
Label.Secondary = function(props) {
    return /*#__PURE__*/ React.createElement(Label, _extends({
        color: "secondary"
    }, props));
};
Label.Tertiary = function(props) {
    return /*#__PURE__*/ React.createElement(Label, _extends({
        color: "tertiary"
    }, props));
};
Label.Success = function(props) {
    return /*#__PURE__*/ React.createElement(Label, _extends({
        color: "success"
    }, props));
};
Label.Info = function(props) {
    return /*#__PURE__*/ React.createElement(Label, _extends({
        color: "info"
    }, props));
};
Label.WarningAlt = function(props) {
    return /*#__PURE__*/ React.createElement(Label, _extends({
        color: "warning-alt"
    }, props));
};
Label.Warning = function(props) {
    return /*#__PURE__*/ React.createElement(Label, _extends({
        color: "warning"
    }, props));
};
Label.Danger = function(props) {
    return /*#__PURE__*/ React.createElement(Label, _extends({
        color: "danger"
    }, props));
};
Label.Dark = function(props) {
    return /*#__PURE__*/ React.createElement(Label, _extends({
        color: "dark"
    }, props));
};
Label.Light = function(props) {
    return /*#__PURE__*/ React.createElement(Label, _extends({
        color: "light"
    }, props));
};

export { Label };
//# sourceMappingURL=index.js.map
