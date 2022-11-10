import React, { useState, useEffect, useCallback } from 'react';
import { ConditionalWrapper } from '../Conditional/index.js';
import { Label } from '../Label/index.js';
import { InputHelpBaloon, InputHelpBlock } from '../InputHelp/index.js';
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
const emptyList = [];
const InputChips = /*#__PURE__*/ React.forwardRef(({ chipsColor ="light" , addOnBlur =true , delimiters =[
    13
] , label =null , allowRepeat =false , allowRegex =null , valueValidator =null , maxChips =null , baloon =null , className =null , id =null , error =null , value: initialValue = null , onChange , outerWrap =true , chipsOutside =false , renderChip =null , onBlur =null , onChipRemove =null , onClick , noInput , ...input }, ref)=>{
    const [value, setValue] = useState(emptyList);
    useEffect(()=>{
        setValue((curr)=>initialValue || curr || emptyList);
    }, [
        initialValue
    ]);
    const addValue = useCallback((v)=>{
        if (typeof valueValidator === "function") {
            if (!valueValidator(v)) return;
        }
        setValue((curr)=>{
            if (allowRepeat || !(curr || []).includes(v)) {
                const n = (curr || []).concat(v);
                if (typeof onChange === "function") onChange(n);
                return n;
            } else return curr;
        });
    }, [
        allowRepeat,
        valueValidator,
        onChange
    ]);
    const handleKeyDown = useCallback((event)=>{
        let d = delimiters;
        if (typeof d === "string") {
            const { map  } = Array.prototype;
            d = map.call(d, (ch)=>ch.charCodeAt(0));
        }
        if (Array.isArray(d) && d.includes(event.keyCode)) {
            addValue(event.target.value);
            event.target.value = "";
            event.stopPropagation();
            event.preventDefault();
        }
    }, [
        delimiters,
        addValue
    ]);
    const handleBlur = useCallback((event)=>{
        var ref;
        if (addOnBlur && ((ref = event.target) === null || ref === void 0 ? void 0 : ref.value)) {
            const { value  } = event.target;
            if (allowRegex && RegExp(allowRegex).test(value)) {
                addValue(value);
            } else if (!allowRegex) {
                addValue(value);
            }
        }
        event.target.value = "";
        if (typeof onBlur === "function") onBlur(event);
    }, [
        addOnBlur,
        allowRegex,
        addValue,
        onBlur
    ]);
    const handleDelete = useCallback((idx)=>{
        setValue((curr)=>{
            curr.splice(idx, 1);
            if (typeof onChange === "function") onChange(curr.slice());
            return curr.slice();
        });
        if (typeof onChipRemove === "function") onChipRemove(idx);
    }, [
        onChange,
        onChipRemove
    ]);
    const showInput = (!maxChips || maxChips && Array.isArray(value) && value.length < maxChips) && !noInput;
    return /*#__PURE__*/ React.createElement(ConditionalWrapper, {
        wrapper: /*#__PURE__*/ React.createElement("div", {
            className: `form-group${appendClass(className)}${appendClass(error, "form-group--error")}`,
            ref: ref
        }),
        condition: outerWrap
    }, /*#__PURE__*/ React.createElement("div", {
        className: `form-group__text chips${appendClass(!outerWrap && className, className)}`
    }, label ? /*#__PURE__*/ React.createElement("label", {
        htmlFor: id || input.name
    }, label, baloon ? /*#__PURE__*/ React.createElement(InputHelpBaloon, {
        baloon: baloon
    }) : null) : null, chipsOutside && Array.isArray(value) && value.length ? /*#__PURE__*/ React.createElement("span", {
        className: "chips-outer qtr-margin-bottom"
    }, /*#__PURE__*/ React.createElement("span", {
        className: "chips-inner"
    }, value.map((v, i)=>renderChip ? renderChip({
            value: v,
            idx: i,
            onDelete: ()=>handleDelete(i)
        }) : /*#__PURE__*/ React.createElement(Label, {
            removable: true,
            onRemove: ()=>handleDelete(i),
            color: chipsColor,
            size: "small",
            key: `${v}-${i}`,
            className: "no-margin-bottom"
        }, v)))) : null, /*#__PURE__*/ React.createElement("div", {
        className: `input ${appendClass(!showInput, "dbl-padding-right")}`,
        onClick: onClick
    }, !chipsOutside && Array.isArray(value) && value.length ? /*#__PURE__*/ React.createElement("span", {
        className: "chips-outer"
    }, /*#__PURE__*/ React.createElement("span", {
        className: "chips-inner"
    }, value.map((v, i)=>renderChip ? renderChip({
            value: v,
            idx: i,
            onDelete: ()=>handleDelete(i)
        }) : /*#__PURE__*/ React.createElement(Label, {
            removable: true,
            onRemove: (e)=>{
                e.stopPropagation();
                e.preventDefault();
                handleDelete(i);
            },
            color: chipsColor,
            size: "small",
            key: `${v}-${i}`,
            className: "no-margin-bottom"
        }, v)))) : null, showInput ? /*#__PURE__*/ React.createElement("input", _extends({
        type: "text",
        onKeyDown: handleKeyDown,
        onBlur: handleBlur,
        id: id || input.name
    }, input)) : null)), error ? /*#__PURE__*/ React.createElement(InputHelpBlock, {
        text: error
    }) : null);
});

export { InputChips };
//# sourceMappingURL=index.js.map
