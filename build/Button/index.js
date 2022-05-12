import React, { forwardRef } from 'react';
import { appendClass } from '../utils/index.js';

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
const Button = ({ size ="default" , color ="primary" , wide =false , justified =false , circle =false , className =null , asLink =false , style =null , selected =false , type =null , icon =false , ...props })=>/*#__PURE__*/ React.createElement(asLink ? "a" : "button", {
        className: `btn${appendClass(size !== "default", `btn--${size}`)} btn--${color}${appendClass(wide, "btn--wide")}${appendClass(justified, "btn--justified")}${appendClass(icon, "btn--icon")}${appendClass(circle, "btn--circle")}${appendClass(selected, "selected")}${appendClass(className)}${appendClass(asLink, "flex-middle flex-center")}`,
        style: {
            ...style || {},
            ...asLink ? {
                display: "flex"
            } : {}
        },
        ...asLink ? {} : {
            type: type || "button"
        },
        ...props
    })
;
Button.Primary = (props)=>/*#__PURE__*/ React.createElement(Button, _extends$1({}, props, {
        color: "primary"
    }))
;
Button.Secondary = (props)=>/*#__PURE__*/ React.createElement(Button, _extends$1({}, props, {
        color: "secondary"
    }))
;
Button.Success = (props)=>/*#__PURE__*/ React.createElement(Button, _extends$1({}, props, {
        color: "success"
    }))
;
Button.Dark = (props)=>/*#__PURE__*/ React.createElement(Button, _extends$1({}, props, {
        color: "dark"
    }))
;
Button.Ghost = (props)=>/*#__PURE__*/ React.createElement(Button, _extends$1({}, props, {
        color: "ghost"
    }))
;
Button.Link = (props)=>/*#__PURE__*/ React.createElement(Button, _extends$1({}, props, {
        color: "link"
    }))
;
Button.Light = (props)=>/*#__PURE__*/ React.createElement(Button, _extends$1({}, props, {
        color: "light"
    }))
;
Button.Danger = (props)=>/*#__PURE__*/ React.createElement(Button, _extends$1({}, props, {
        color: "danger"
    }))
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
const ButtonGroup = /*#__PURE__*/ forwardRef(({ square =false , withDivider =false , className =null , ...props }, ref)=>/*#__PURE__*/ React.createElement("div", _extends({
        className: `btn-group${appendClass(square, "btn-group--square")}${appendClass(withDivider, " btn-group--divider")}${appendClass(className)}`
    }, props, {
        ref: ref
    }))
);

export { Button, ButtonGroup };
//# sourceMappingURL=index.js.map
