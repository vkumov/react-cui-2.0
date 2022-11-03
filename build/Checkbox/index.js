import React, { forwardRef, useRef, useEffect } from 'react';
import { ConditionalWrapper } from '../Conditional/index.js';
import { appendClass } from '../utils/index.js';
import { useMergeRefs } from 'use-callback-ref';

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
const Checkbox = /*#__PURE__*/ forwardRef(({ inline =false , asFormGroup =true , children =null , spacing =null , ...input }, ref)=>/*#__PURE__*/ React.createElement(ConditionalWrapper, {
        condition: asFormGroup,
        wrapper: /*#__PURE__*/ React.createElement("div", {
            className: `form-group${appendClass(inline, "form-group--inline")}${appendClass(spacing && spacing !== "default", `form-group--${spacing}`)}`
        })
    }, /*#__PURE__*/ React.createElement("label", {
        className: "checkbox"
    }, /*#__PURE__*/ React.createElement("input", _extends$1({
        type: "checkbox"
    }, input, {
        ref: ref
    })), /*#__PURE__*/ React.createElement("span", {
        className: "checkbox__input"
    }), children ? /*#__PURE__*/ React.createElement("span", {
        className: "checkbox__label"
    }, children) : null))
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
const IndeterminateCheckbox = /*#__PURE__*/ forwardRef(({ indeterminate , ...rest }, fwd)=>{
    const ref = useRef(null);
    const refs = useMergeRefs([
        ref,
        fwd
    ]);
    useEffect(()=>{
        if (typeof indeterminate === "boolean") {
            ref.current.indeterminate = !rest.checked && indeterminate;
        }
    }, [
        ref,
        indeterminate
    ]);
    return /*#__PURE__*/ React.createElement(Checkbox, _extends({
        ref: refs
    }, rest));
});

export { Checkbox, IndeterminateCheckbox };
//# sourceMappingURL=index.js.map
