import React from 'react';

function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
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
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var classes = function(type, icon) {
    switch(type){
        case "warning":
            return [
                "alert--warning",
                icon || "icon-warning-outline"
            ];
        case "warning-alt":
            return [
                "alert--warning-alt",
                icon || "icon-warning-outline"
            ];
        case "danger":
        case "error":
            return [
                "alert--warning-alt",
                icon || "icon-error-outline"
            ];
        case "success":
            return [
                "alert--success",
                icon || "icon-check-outline"
            ];
        case "dark":
            return [
                "alert--dark",
                icon || "icon-help-outline"
            ];
        case "light":
            return [
                "alert--light",
                icon || "icon-help-outline"
            ];
        default:
            return [
                "alert--info",
                icon || "icon-info-outline"
            ];
    }
};
var Alert = function(param) {
    var _type = param.type, type = _type === void 0 ? "info" : _type, children = param.children, _title = param.title, title = _title === void 0 ? "" : _title, _dismissable = param.dismissable, dismissable = _dismissable === void 0 ? false : _dismissable, _className = param.className, className = _className === void 0 ? null : _className, _onDismiss = param.onDismiss, onDismiss = _onDismiss === void 0 ? null : _onDismiss, _withIcon = param.withIcon, withIcon = _withIcon === void 0 ? true : _withIcon, _icon = param.icon, icon = _icon === void 0 ? null : _icon;
    var ref = _slicedToArray(React.useState(false), 2), dismissed = ref[0], setDismissed = ref[1];
    var handleDismiss = function(e) {
        setDismissed(true);
        if (onDismiss) onDismiss(e);
    };
    if (dismissed) return null;
    var ref1 = _slicedToArray(classes(type, icon), 2), alertClass = ref1[0], iconClass = ref1[1];
    return /*#__PURE__*/ React.createElement("div", {
        className: "alert ".concat(alertClass, " ").concat(className || "")
    }, withIcon ? /*#__PURE__*/ React.createElement("div", {
        className: "alert__icon ".concat(iconClass)
    }) : null, /*#__PURE__*/ React.createElement("div", {
        className: "alert__message"
    }, title && /*#__PURE__*/ React.createElement("h4", null, title), children), dismissable && /*#__PURE__*/ React.createElement("a", {
        className: "alert__close icon-close",
        onClick: handleDismiss
    }));
};
Alert.Warning = function(props) {
    return /*#__PURE__*/ React.createElement(Alert, _extends({
        type: "warning"
    }, props));
};
Alert.Danger = function(props) {
    return /*#__PURE__*/ React.createElement(Alert, _extends({
        type: "danger"
    }, props));
};
Alert.Error = function(props) {
    return /*#__PURE__*/ React.createElement(Alert, _extends({
        type: "error"
    }, props));
};
Alert.Success = function(props) {
    return /*#__PURE__*/ React.createElement(Alert, _extends({
        type: "success"
    }, props));
};
Alert.Info = function(props) {
    return /*#__PURE__*/ React.createElement(Alert, _extends({
        type: "info"
    }, props));
};
Alert.Dark = function(props) {
    return /*#__PURE__*/ React.createElement(Alert, _extends({
        type: "dark"
    }, props));
};
Alert.Light = function(props) {
    return /*#__PURE__*/ React.createElement(Alert, _extends({
        type: "light"
    }, props));
};
Alert.WarningAlt = function(props) {
    return /*#__PURE__*/ React.createElement(Alert, _extends({
        type: "warning-alt"
    }, props));
};

export { Alert };
//# sourceMappingURL=index.js.map