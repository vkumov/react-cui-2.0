import React, { forwardRef } from 'react';
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
function _extends$1() {
    _extends$1 = Object.assign || function(target) {
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
    return _extends$1.apply(this, arguments);
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
function _objectWithoutProperties$1(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$1(source, excluded);
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
function _objectWithoutPropertiesLoose$1(source, excluded) {
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
var Button = function(_param)  {
    var _size = _param.size, size = _size === void 0 ? "default" : _size, _color = _param.color, color = _color === void 0 ? "primary" : _color, _wide = _param.wide, wide = _wide === void 0 ? false : _wide, _justified = _param.justified, justified = _justified === void 0 ? false : _justified, _circle = _param.circle, circle = _circle === void 0 ? false : _circle, _className = _param.className, className = _className === void 0 ? null : _className, _asLink = _param.asLink, asLink = _asLink === void 0 ? false : _asLink, _style = _param.style, style = _style === void 0 ? null : _style, _selected = _param.selected, selected = _selected === void 0 ? false : _selected, _type = _param.type, type = _type === void 0 ? null : _type, _icon = _param.icon, icon = _icon === void 0 ? false : _icon, props = _objectWithoutProperties$1(_param, [
        "size",
        "color",
        "wide",
        "justified",
        "circle",
        "className",
        "asLink",
        "style",
        "selected",
        "type",
        "icon"
    ]);
    return React.createElement(asLink ? "a" : "button", _objectSpread({
        className: "btn".concat(appendClass(size !== "default", "btn--".concat(size)), " btn--").concat(color).concat(appendClass(wide, "btn--wide")).concat(appendClass(justified, "btn--justified")).concat(appendClass(icon, "btn--icon")).concat(appendClass(circle, "btn--circle")).concat(appendClass(selected, "selected")).concat(appendClass(className)).concat(appendClass(asLink, "flex-middle flex-center")),
        style: _objectSpread({}, style || {}, asLink ? {
            display: "flex"
        } : {})
    }, asLink ? {} : {
        type: type || "button"
    }, props));
};
Button.Primary = function(props) {
    return /*#__PURE__*/ React.createElement(Button, _extends$1({}, props, {
        color: "primary"
    }));
};
Button.Secondary = function(props) {
    return /*#__PURE__*/ React.createElement(Button, _extends$1({}, props, {
        color: "secondary"
    }));
};
Button.Success = function(props) {
    return /*#__PURE__*/ React.createElement(Button, _extends$1({}, props, {
        color: "success"
    }));
};
Button.Dark = function(props) {
    return /*#__PURE__*/ React.createElement(Button, _extends$1({}, props, {
        color: "dark"
    }));
};
Button.Ghost = function(props) {
    return /*#__PURE__*/ React.createElement(Button, _extends$1({}, props, {
        color: "ghost"
    }));
};
Button.Link = function(props) {
    return /*#__PURE__*/ React.createElement(Button, _extends$1({}, props, {
        color: "link"
    }));
};
Button.Light = function(props) {
    return /*#__PURE__*/ React.createElement(Button, _extends$1({}, props, {
        color: "light"
    }));
};
Button.Danger = function(props) {
    return /*#__PURE__*/ React.createElement(Button, _extends$1({}, props, {
        color: "danger"
    }));
};

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
var ButtonGroup = /*#__PURE__*/ forwardRef(function(_param, ref)  {
    var _square = _param.square, square = _square === void 0 ? false : _square, _withDivider = _param.withDivider, withDivider = _withDivider === void 0 ? false : _withDivider, _className = _param.className, className = _className === void 0 ? null : _className, props = _objectWithoutProperties(_param, [
        "square",
        "withDivider",
        "className"
    ]);
    return React.createElement("div", _extends({
        className: "btn-group".concat(appendClass(square, "btn-group--square")).concat(appendClass(withDivider, " btn-group--divider")).concat(appendClass(className))
    }, props, {
        ref: ref
    }));
});

export { Button, ButtonGroup };
//# sourceMappingURL=index.js.map
