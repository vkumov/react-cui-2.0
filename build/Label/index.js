import React from 'react';
import { appendClass } from '../utils/index.js';

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
const Label = ({ size ="default" , color ="primary" , bordered =false , removable =false , onRemove =null , raised =false , className =null , children , ...props })=>/*#__PURE__*/ React.createElement("span", _extends({
        className: `label label--${color}${appendClass(size !== "default", `label--${size}`)}${appendClass(bordered, "label--bordered")}${appendClass(raised, "label--raised")}${appendClass(className)}`
    }, props), children, removable ? /*#__PURE__*/ React.createElement("span", {
        className: "icon-close",
        onClick: onRemove
    }) : null);
Label.Primary = (props)=>/*#__PURE__*/ React.createElement(Label, _extends({
        color: "primary"
    }, props));
Label.Secondary = (props)=>/*#__PURE__*/ React.createElement(Label, _extends({
        color: "secondary"
    }, props));
Label.Tertiary = (props)=>/*#__PURE__*/ React.createElement(Label, _extends({
        color: "tertiary"
    }, props));
Label.Success = (props)=>/*#__PURE__*/ React.createElement(Label, _extends({
        color: "success"
    }, props));
Label.Info = (props)=>/*#__PURE__*/ React.createElement(Label, _extends({
        color: "info"
    }, props));
Label.WarningAlt = (props)=>/*#__PURE__*/ React.createElement(Label, _extends({
        color: "warning-alt"
    }, props));
Label.Warning = (props)=>/*#__PURE__*/ React.createElement(Label, _extends({
        color: "warning"
    }, props));
Label.Danger = (props)=>/*#__PURE__*/ React.createElement(Label, _extends({
        color: "danger"
    }, props));
Label.Dark = (props)=>/*#__PURE__*/ React.createElement(Label, _extends({
        color: "dark"
    }, props));
Label.Light = (props)=>/*#__PURE__*/ React.createElement(Label, _extends({
        color: "light"
    }, props));

export { Label };
//# sourceMappingURL=index.js.map
