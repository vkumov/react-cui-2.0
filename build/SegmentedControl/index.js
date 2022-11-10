import React, { forwardRef, useRef, useState, useEffect } from 'react';
import { appendClass } from '../utils/index.js';

var styles = {"form_group":"Segmented-module_form_group__EAPlN","form_group--full":"Segmented-module_form_group--full__Rp9uq","segmented_root--full":"Segmented-module_segmented_root--full__qb6mE","segmented_root":"Segmented-module_segmented_root__36qE5","segmented_active":"Segmented-module_segmented_active__HNGxt","segmented_option_control":"Segmented-module_segmented_option_control__Ahn2w","segmented_option_control_active":"Segmented-module_segmented_option_control_active__aH7H1","segmented_option_control_label":"Segmented-module_segmented_option_control_label__YVjtX","segmented_option_control_input":"Segmented-module_segmented_option_control_input__g42pS"};

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
const Active = ({ activeRef , value , fullWidth  })=>{
    const [coord, setCoord] = useState({
        x: 0,
        y: 0,
        w: 0,
        h: 0
    });
    useEffect(()=>{
        if (!activeRef.current) return;
        setCoord({
            x: activeRef.current.offsetLeft - 4,
            y: activeRef.current.offsetTop - 4,
            w: activeRef.current.offsetWidth,
            h: activeRef.current.offsetHeight
        });
    }, [
        activeRef.current,
        value,
        fullWidth
    ]);
    if (!activeRef.current) return null;
    return /*#__PURE__*/ React.createElement("span", {
        className: styles.segmented_active,
        style: {
            width: `${coord.w}px`,
            height: `${coord.h}px`,
            transform: coord.x > 0 || coord.y > 0 ? `translateX(${coord.x}px) translateY(${coord.y}px) translateZ(0px)` : "none"
        }
    });
};
const OptionDisplay = ({ children , value , activeRef , active , className , disabled , ...props })=>{
    return /*#__PURE__*/ React.createElement("div", {
        className: `${styles.segmented_option_control}${appendClass(active, styles.segmented_option_control_active)}${appendClass(disabled, "disabled")}`,
        ref: active ? activeRef : null
    }, /*#__PURE__*/ React.createElement("input", _extends({
        type: "radio",
        className: styles.segmented_option_control_input,
        value: value,
        id: `${props.name}-${value}`
    }, props)), /*#__PURE__*/ React.createElement("label", {
        className: styles.segmented_option_control_label,
        htmlFor: `${props.name}-${value}`
    }, children));
};
function UrefedSegmented({ options , value , label , inline , className , fullWidth , ...props }, ref) {
    const activeRef = useRef(null);
    return /*#__PURE__*/ React.createElement("div", {
        className: `form-group${appendClass(inline, "form-group--inline")}${appendClass(className)}`
    }, /*#__PURE__*/ React.createElement("div", {
        className: `${styles.form_group}${appendClass(fullWidth, styles["form_group--full"])}`
    }, label ? /*#__PURE__*/ React.createElement("label", null, label) : null, /*#__PURE__*/ React.createElement("div", {
        className: `${styles.segmented_root}${appendClass(fullWidth, styles["segmented_root--full"])}`,
        ref: ref
    }, /*#__PURE__*/ React.createElement(Active, {
        activeRef: activeRef,
        value: value,
        fullWidth: fullWidth
    }), options.map((o)=>/*#__PURE__*/ React.createElement(OptionDisplay, _extends({
            activeRef: activeRef,
            active: value === o.value,
            value: o.value,
            key: o.value,
            disabled: o.disabled
        }, props), o.label)))));
}
const SegmentedControl = /*#__PURE__*/ forwardRef(UrefedSegmented);

export { SegmentedControl };
//# sourceMappingURL=index.js.map
