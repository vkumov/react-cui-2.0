import React, { useState, useEffect } from 'react';
import { Dropdown } from '../Dropdown/index.js';
import { ConditionalWrapper } from '../Conditional/index.js';
import { appendClass } from '../utils/index.js';

const DropdownHeader = ({ variants , selectedIdx , setIdx , placeholder ="Select"  })=>{
    var ref;
     return React.createElement(Dropdown, {
        label: /*#__PURE__*/ React.createElement("a", {
            className: "flex-center-vertical"
        }, ((ref = variants[selectedIdx]) === null || ref === void 0 ? void 0 : ref.display) || placeholder),
        alwaysClose: true
    }, variants.map((v, idx)=>{
        var ref;
         return React.createElement("a", {
            key: v.variant,
            onClick: ()=>setIdx(idx),
            className: ((ref = variants[selectedIdx]) === null || ref === void 0 ? void 0 : ref.variant) === v.variant ? "selected" : ""
        }, v.display);
    }));
};
const ListHeader = ({ variants , selectedIdx , setIdx  })=>{
     return React.createElement("ul", {
        className: "list list--inline divider--vertical"
    }, variants.map((v, idx)=>{
        var ref;
         return React.createElement("li", {
            key: v.variant
        }, /*#__PURE__*/ React.createElement(ConditionalWrapper, {
            condition: ((ref = variants[selectedIdx]) === null || ref === void 0 ? void 0 : ref.variant) !== v.variant,
            wrapper: /*#__PURE__*/ React.createElement("a", {
                key: v.variant,
                onClick: ()=>setIdx(idx)
            })
        }, v.display));
    }));
};
const VariantSelector = ({ disableable =false , title =null , inline =false , onChange =null , enableTitleAppend =null , className =null , list =false , variant =null , variants , name =""  })=>{
    const [variantIdx, setIdx] = useState(()=>{
        const idx = variants.findIndex((v)=>v.selected || v.variant === variant);
        return !disableable && idx < 0 ? 0 : idx;
    });
    useEffect(()=>{
        const idx = variants.findIndex((v)=>v.variant === variant);
        setIdx((curr)=>idx < 0 || idx === curr ? curr : idx);
    }, [
        variant,
        variants
    ]);
    useEffect(()=>{
        if (variantIdx >= 0 && typeof onChange === "function") onChange(variants[variantIdx]);
    }, [
        variantIdx
    ]);
    const dd = (el, t)=>/*#__PURE__*/ React.createElement(el, {
            className: "secondary-tabs"
        }, t ? /*#__PURE__*/ React.createElement("span", {
            className: "half-margin-right"
        }, t) : null, list ? /*#__PURE__*/ React.createElement(ListHeader, {
            variants: variants,
            selectedIdx: variantIdx,
            setIdx: setIdx
        }) : /*#__PURE__*/ React.createElement(DropdownHeader, {
            variants: variants,
            selectedIdx: variantIdx,
            setIdx: setIdx
        }));
    return /*#__PURE__*/ React.createElement("div", {
        className: `form-group${appendClass(inline, " inline-variants")}${appendClass(className)}`
    }, disableable ? /*#__PURE__*/ React.createElement("span", {
        className: "flex-center-vertical"
    }, /*#__PURE__*/ React.createElement("label", {
        className: "switch",
        htmlFor: `${name}.disableable`
    }, /*#__PURE__*/ React.createElement("input", {
        type: "checkbox",
        onChange: ()=>setIdx((p)=>p >= 0 ? -1 : 0),
        checked: variantIdx >= 0,
        id: `${name}.disableable`
    }), /*#__PURE__*/ React.createElement("span", {
        className: "switch__input"
    }), /*#__PURE__*/ React.createElement("span", {
        className: "switch__label"
    }, title)), variantIdx >= 0 ? dd("span", enableTitleAppend) : null) : dd("div", title), disableable && variantIdx < 0 ? null : /*#__PURE__*/ React.createElement("div", {
        className: "tabs-wrap panel base-padding-top"
    }, variants[variantIdx].component));
};

export { VariantSelector };
//# sourceMappingURL=index.js.map
