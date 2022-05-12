import React, { forwardRef, useState, useEffect, useCallback } from 'react';
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
const Radio = /*#__PURE__*/ forwardRef(({ spacing =null , inline =false , label =null , className =null , id , divProps ={} , ...input }, forwardedRef)=>/*#__PURE__*/ React.createElement("div", _extends({
        className: `form-group${appendClass(inline, "form-group--inline")}${appendClass(spacing, `form-group--${spacing}`)}${appendClass(className)}`
    }, divProps), /*#__PURE__*/ React.createElement("label", {
        className: "radio",
        htmlFor: id || input.name
    }, /*#__PURE__*/ React.createElement("input", _extends({
        type: "radio",
        id: id
    }, input, {
        ref: forwardedRef
    })), /*#__PURE__*/ React.createElement("span", {
        className: "radio__input"
    }), label ? /*#__PURE__*/ React.createElement("span", {
        className: "radio__label"
    }, label) : null))
);
const Radios = ({ values , value: initialValue , onChange , name ,  })=>{
    const [value, setValue] = useState(initialValue);
    useEffect(()=>{
        setValue(initialValue);
    }, [
        initialValue
    ]);
    const onRadioChange = useCallback((e)=>{
        e.persist();
        setValue((curr)=>{
            let v;
            if (e.target.checked) v = e.target.value;
            else v = curr;
            if (typeof onChange === "function") onChange(v);
            return v;
        });
    }, [
        onChange
    ]);
    return /*#__PURE__*/ React.createElement(React.Fragment, null, values.map((v, idx)=>/*#__PURE__*/ React.createElement(Radio, {
            id: v.value,
            label: v.label,
            key: v.value,
            name: `${name}.${idx}`,
            onChange: onRadioChange,
            checked: value === v.value
        })
    ));
};

export { Radio, Radios };
//# sourceMappingURL=index.js.map
