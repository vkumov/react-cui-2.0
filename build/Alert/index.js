import React from 'react';

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
const classes = (type, icon)=>{
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
const Alert = ({ type ="info" , children , title ="" , dismissable =false , className =null , onDismiss =null , withIcon =true , icon =null ,  })=>{
    const [dismissed, setDismissed] = React.useState(false);
    const handleDismiss = (e)=>{
        setDismissed(true);
        if (onDismiss) onDismiss(e);
    };
    if (dismissed) return null;
    const [alertClass, iconClass] = classes(type, icon);
    return /*#__PURE__*/ React.createElement("div", {
        className: `alert ${alertClass} ${className || ""}`
    }, withIcon ? /*#__PURE__*/ React.createElement("div", {
        className: `alert__icon ${iconClass}`
    }) : null, /*#__PURE__*/ React.createElement("div", {
        className: "alert__message"
    }, title && /*#__PURE__*/ React.createElement("h4", null, title), children), dismissable && /*#__PURE__*/ React.createElement("a", {
        className: "alert__close icon-close",
        onClick: handleDismiss
    }));
};
Alert.Warning = (props)=>/*#__PURE__*/ React.createElement(Alert, _extends({
        type: "warning"
    }, props))
;
Alert.Danger = (props)=>/*#__PURE__*/ React.createElement(Alert, _extends({
        type: "danger"
    }, props))
;
Alert.Error = (props)=>/*#__PURE__*/ React.createElement(Alert, _extends({
        type: "error"
    }, props))
;
Alert.Success = (props)=>/*#__PURE__*/ React.createElement(Alert, _extends({
        type: "success"
    }, props))
;
Alert.Info = (props)=>/*#__PURE__*/ React.createElement(Alert, _extends({
        type: "info"
    }, props))
;
Alert.Dark = (props)=>/*#__PURE__*/ React.createElement(Alert, _extends({
        type: "dark"
    }, props))
;
Alert.Light = (props)=>/*#__PURE__*/ React.createElement(Alert, _extends({
        type: "light"
    }, props))
;
Alert.WarningAlt = (props)=>/*#__PURE__*/ React.createElement(Alert, _extends({
        type: "warning-alt"
    }, props))
;

export { Alert };
//# sourceMappingURL=index.js.map
