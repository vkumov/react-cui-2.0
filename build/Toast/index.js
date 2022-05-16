import React from 'react';
import { toast as toast$1, ToastContainer as ToastContainer$1, Slide } from 'react-toastify';
import { appendClass } from '../utils/index.js';
import { copyStringToClipboard } from '../utils/clipboard.js';

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
var _args;
const iconType = (type)=>{
    switch(type){
        case "success":
            return "text-success icon-check-outline";
        case "error":
            return "text-danger icon-error-outline";
        case "warning":
            return "text-warning icon-warning-outline";
        case "info":
            return "text-info icon-info-outline";
        case "loading":
            return "text-muted icon-spinner spin";
        case "none":
            return null;
        default:
            return "text-muted icon-alert";
    }
};
const ToastIcon = ({ type  })=>{
    return type ? /*#__PURE__*/ React.createElement("div", {
        className: "toast__icon"
    }, /*#__PURE__*/ React.createElement("span", {
        className: iconType(type)
    })) : null;
};
const Toast = ({ title , message , type , copyError =false , bordered =false ,  })=>/*#__PURE__*/ React.createElement("div", {
        className: `toast${appendClass(bordered, "toast--bordered")}`
    }, /*#__PURE__*/ React.createElement(ToastIcon, {
        type: type
    }), /*#__PURE__*/ React.createElement("div", {
        className: "toast__body"
    }, title ? /*#__PURE__*/ React.createElement("div", {
        className: "toast__title"
    }, title) : null, message ? /*#__PURE__*/ React.createElement("div", {
        className: "toast__message"
    }, message, type === "error" && copyError ? /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("br", null), /*#__PURE__*/ React.createElement("br", null), /*#__PURE__*/ React.createElement("a", {
        onClick: ()=>typeof message === "string" || typeof message === "number" ? void copyStringToClipboard(message) : void 0
    }, "Copy to clipboard")) : null) : null))
;
const toast = (type, title, message, copyError = true, containerId = "_GLOBAL_", args = {})=>{
    if (type === "loading") {
        var _autoClose;
        (_autoClose = (_args = args).autoClose) !== null && _autoClose !== void 0 ? _autoClose : _args.autoClose = false;
    }
    return toast$1((toastProps)=>{
        console.log({
            toastProps
        });
        return /*#__PURE__*/ React.createElement(Toast, _extends$1({}, {
            type,
            title,
            message,
            copyError
        }));
    }, {
        containerId,
        ...args
    });
};
toast.success = (...args)=>toast("success", ...args)
;
toast.error = (...args)=>toast("error", ...args)
;
toast.warning = (...args)=>toast("warning", ...args)
;
toast.info = (...args)=>toast("info", ...args)
;
toast.loading = (...args)=>toast("loading", ...args)
;
toast.none = (...args)=>toast("none", ...args)
;
toast.update = (toastId, updates, options)=>{
    options.render = /*#__PURE__*/ React.createElement(Toast, _extends$1({}, updates));
    toast$1.update(toastId, options);
};
toast.dismiss = (...args)=>toast$1.dismiss(...args)
;

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
const ToastContainer = ({ position ="bottom-right" , autoClose =5000 , draggable =false , hideProgressBar =true , containerId ="_GLOBAL_" , ...props })=>/*#__PURE__*/ React.createElement(ToastContainer$1, _extends({
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
    }))
;

export { Toast, ToastContainer, toast };
//# sourceMappingURL=index.js.map
