import React, { forwardRef, createElement } from 'react';
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
let Button;
Button = /*#__PURE__*/ forwardRef(({ size ="default" , color ="primary" , wide =false , justified =false , circle =false , className =null , asLink =false , style =null , selected =false , type =null , icon =false , ...props }, ref)=>/*#__PURE__*/ createElement(asLink ? "a" : "button", {
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
        ...props,
        ref
    })
);
Button.Primary = /*#__PURE__*/ forwardRef((props, ref)=>/*#__PURE__*/ React.createElement(Button, _extends$1({}, props, {
        color: "primary",
        ref: ref
    }))
);
Button.Secondary = /*#__PURE__*/ forwardRef((props, ref)=>/*#__PURE__*/ React.createElement(Button, _extends$1({}, props, {
        color: "secondary",
        ref: ref
    }))
);
Button.Success = /*#__PURE__*/ forwardRef((props, ref)=>/*#__PURE__*/ React.createElement(Button, _extends$1({}, props, {
        color: "success",
        ref: ref
    }))
);
Button.Dark = /*#__PURE__*/ forwardRef((props, ref)=>/*#__PURE__*/ React.createElement(Button, _extends$1({}, props, {
        color: "dark",
        ref: ref
    }))
);
Button.Ghost = /*#__PURE__*/ forwardRef(({ fullGhost =false , className , ...props }, ref)=>/*#__PURE__*/ React.createElement(Button, _extends$1({
        className: `${appendClass(fullGhost, "btn--full-ghost")}${appendClass(className)}`
    }, props, {
        color: "ghost",
        ref: ref
    }))
);
Button.Link = /*#__PURE__*/ forwardRef((props, ref)=>/*#__PURE__*/ React.createElement(Button, _extends$1({}, props, {
        color: "link",
        ref: ref
    }))
);
Button.Light = /*#__PURE__*/ forwardRef((props, ref)=>/*#__PURE__*/ React.createElement(Button, _extends$1({}, props, {
        color: "light",
        ref: ref
    }))
);
Button.Danger = /*#__PURE__*/ forwardRef((props, ref)=>/*#__PURE__*/ React.createElement(Button, _extends$1({}, props, {
        color: "danger",
        ref: ref
    }))
);

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
