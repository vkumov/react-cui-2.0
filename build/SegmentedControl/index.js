import React, { forwardRef, useState, useCallback, useEffect } from 'react';
import cx from 'classnames';

var styles = {"form_group":"Segmented-module_form_group__EAPlN","small":"Segmented-module_small__e1Knx","form_group--full":"Segmented-module_form_group--full__Rp9uq","segmented_root--full":"Segmented-module_segmented_root--full__qb6mE","segmented_root":"Segmented-module_segmented_root__36qE5","segmented_active":"Segmented-module_segmented_active__HNGxt","segmented_option_control":"Segmented-module_segmented_option_control__Ahn2w","segmented_option_control_active":"Segmented-module_segmented_option_control_active__aH7H1","segmented_option_control_label":"Segmented-module_segmented_option_control_label__YVjtX","segmented_option_control_input":"Segmented-module_segmented_option_control_input__g42pS"};

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
const Active = ({ activeElement , value , fullWidth , small  })=>{
    const [coord, setCoord] = useState({
        x: 0,
        y: 0,
        w: 0,
        h: 0
    });
    useEffect(()=>{
        if (!activeElement) return;
        setCoord({
            x: activeElement.offsetLeft - (small ? 2 : 4),
            y: activeElement.offsetTop - (small ? 2 : 4),
            w: activeElement.offsetWidth,
            h: activeElement.offsetHeight
        });
    }, [
        activeElement,
        value,
        fullWidth,
        small
    ]);
    if (!activeElement) return null;
    return /*#__PURE__*/ React.createElement("span", {
        className: styles.segmented_active,
        style: {
            width: `${coord.w}px`,
            height: `${coord.h}px`,
            transform: coord.x > 0 || coord.y > 0 ? `translateX(${coord.x}px) translateY(${coord.y}px) translateZ(0px)` : "none"
        }
    });
};
const OptionDisplay = ({ children , value , activeRef , active , className , disabled , id , ...props })=>{
    return /*#__PURE__*/ React.createElement("div", {
        className: cx(styles.segmented_option_control, className, {
            [styles.segmented_option_control_active]: active,
            disabled
        }),
        ref: active ? activeRef : null
    }, /*#__PURE__*/ React.createElement("input", _extends({
        type: "radio",
        className: styles.segmented_option_control_input,
        value: value,
        id: `${id || props.name}-${value}`
    }, props)), /*#__PURE__*/ React.createElement("label", {
        className: styles.segmented_option_control_label,
        htmlFor: `${id || props.name}-${value}`
    }, children));
};
function UrefedSegmented({ options , value , label , inline , className , fullWidth , small , ...props }, ref) {
    const [el, setEl] = useState(null);
    const activeRefCb = useCallback((node)=>{
        if (node !== null) {
            setEl(node);
        } else setEl(null);
    }, []);
    return /*#__PURE__*/ React.createElement("div", {
        className: cx("form-group", className, {
            "form-group--inline": inline
        })
    }, /*#__PURE__*/ React.createElement("div", {
        className: cx(styles.form_group, {
            [styles["form_group--full"]]: fullWidth,
            [styles.small]: small
        })
    }, label ? /*#__PURE__*/ React.createElement("label", null, label) : null, /*#__PURE__*/ React.createElement("div", {
        className: cx(styles.segmented_root, {
            [styles["segmented_root--full"]]: fullWidth
        }),
        ref: ref
    }, /*#__PURE__*/ React.createElement(Active, {
        activeElement: el,
        value: value,
        fullWidth: fullWidth,
        small: small
    }), options.map((o)=>/*#__PURE__*/ React.createElement(OptionDisplay, _extends({
            activeRef: activeRefCb,
            active: value === o.value,
            value: o.value,
            key: o.value,
            disabled: o.disabled
        }, props), o.label)))));
}
const SegmentedControl = /*#__PURE__*/ forwardRef(UrefedSegmented);

export { SegmentedControl };
//# sourceMappingURL=index.js.map
