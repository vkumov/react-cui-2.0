import React from 'react';
import { toast as toast$1, ToastContainer as ToastContainer$1, Slide } from 'react-toastify';
import { copyStringToClipboard } from '../utils/clipboard.ts';

function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
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
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var __toast, __toast1;
var iconType = function(type) {
    switch(type){
        case "success":
            return "text-success icon-check-outline";
        case "error":
            return "text-danger icon-error-outline";
        case "warning":
            return "text-warning icon-warning-outline";
        case "info":
            return "text-info icon-info-outline";
        case "none":
            return null;
        default:
            return "text-muted icon-alert";
    }
};
var ToastIcon = function(param) {
    var type = param.type;
    return /*#__PURE__*/ React.createElement("div", {
        className: "toast__icon ".concat(iconType(type) || "")
    });
};
var Toast = function(param) {
    var title = param.title, message = param.message, type = param.type, copyError = param.copyError;
    return /*#__PURE__*/ React.createElement("div", {
        className: "toast"
    }, /*#__PURE__*/ React.createElement(ToastIcon, {
        type: type
    }), /*#__PURE__*/ React.createElement("div", {
        className: "toast__body"
    }, title ? /*#__PURE__*/ React.createElement("div", {
        className: "toast__title"
    }, title) : null, message ? /*#__PURE__*/ React.createElement("div", {
        className: "toast__message"
    }, message, type === "error" && copyError ? /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("br", null), /*#__PURE__*/ React.createElement("br", null), /*#__PURE__*/ React.createElement("a", {
        onClick: function() {
            return typeof message === "string" || typeof message === "number" ? void copyStringToClipboard(message) : void 0;
        }
    }, "Copy to clipboard")) : null) : null));
};
var toast = function(type, title, message) {
    var copyError = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, containerId = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "_GLOBAL_", args = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
    return toast$1(/*#__PURE__*/ React.createElement(Toast, _extends$1({}, {
        type: type,
        title: title,
        message: message,
        copyError: copyError
    })), _objectSpread({
        containerId: containerId
    }, args));
};
toast.success = function() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return toast.apply(void 0, [
        "success"
    ].concat(_toConsumableArray(args)));
};
toast.error = function() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return toast.apply(void 0, [
        "error"
    ].concat(_toConsumableArray(args)));
};
toast.warning = function() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return toast.apply(void 0, [
        "warning"
    ].concat(_toConsumableArray(args)));
};
toast.info = function() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return toast.apply(void 0, [
        "info"
    ].concat(_toConsumableArray(args)));
};
toast.none = function() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return toast.apply(void 0, [
        "none"
    ].concat(_toConsumableArray(args)));
};
toast.update = function() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return (__toast = toast$1).update.apply(__toast, _toConsumableArray(args));
};
toast.dismiss = function() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return (__toast1 = toast$1).dismiss.apply(__toast1, _toConsumableArray(args));
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
var ToastContainer = function(_param)  {
    var _position = _param.position, position = _position === void 0 ? "bottom-right" : _position, _autoClose = _param.autoClose, autoClose = _autoClose === void 0 ? 5000 : _autoClose, _draggable = _param.draggable, draggable = _draggable === void 0 ? false : _draggable, _hideProgressBar = _param.hideProgressBar, hideProgressBar = _hideProgressBar === void 0 ? true : _hideProgressBar, _containerId = _param.containerId, containerId = _containerId === void 0 ? "_GLOBAL_" : _containerId, props = _objectWithoutProperties(_param, [
        "position",
        "autoClose",
        "draggable",
        "hideProgressBar",
        "containerId"
    ]);
    return React.createElement(ToastContainer$1, _extends({
        transition: Slide,
        position: position,
        autoClose: autoClose,
        draggable: draggable,
        hideProgressBar: hideProgressBar,
        containerId: containerId
    }, props, {
        closeButton: false,
        style: {
            width: "unset"
        }
    }));
};

export { Toast, ToastContainer, toast };
//# sourceMappingURL=index.js.map
