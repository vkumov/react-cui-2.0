import React, { forwardRef, useState, useRef, useMemo, useCallback, useEffect, isValidElement } from 'react';
import { useMergeRefs } from 'use-callback-ref';
import { InputChips } from '../InputChips/index.js';
import { InputHelpBlock } from '../InputHelp/index.js';
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
function isOption(element) {
    return element.type === "option";
}
function isOptGroup(element) {
    return element.type === "optgroup";
}
const SelectChildren = ({ children , handleOptionClick , isSelected  })=>React.Children.map(children, (child, idx)=>{
        if (!/*#__PURE__*/ isValidElement(child)) return child;
        if (isOption(child)) return /*#__PURE__*/ React.createElement("a", {
            key: idx,
            onClick: (e)=>handleOptionClick(e, child.props.value)
            ,
            className: `${appendClass(isSelected(child.props.value), "selected")}${appendClass(child.props.disabled, "disabled")}`
        }, child.props.children);
        if (isOptGroup(child)) return /*#__PURE__*/ React.createElement("div", {
            key: idx,
            className: "dropdown__group"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "dropdown__group-header"
        }, child.props.label), /*#__PURE__*/ React.createElement(SelectChildren, {
            handleOptionClick: handleOptionClick,
            isSelected: isSelected
        }, child.props.children));
        return child;
    })
;
const collectDisplays = (children)=>{
    const t = [];
    React.Children.forEach(children, (child)=>{
        if (!/*#__PURE__*/ isValidElement(child)) return null;
        if (isOption(child)) {
            t.push({
                display: child.props.children,
                value: child.props.value
            });
        }
        if (isOptGroup(child)) t.push(collectDisplays(child.props.children));
    });
    return t.flat();
};
const EditableSelect = /*#__PURE__*/ forwardRef(({ compressed =false , prompt ="Select an option" , inline =false , type ="text" , children , label =null , error =null , onChange =null , value: initialValue = undefined , editable =false , multi =false , displayValues =false , disabled , className , divRef , options , onSelect =null , onDeselect =null , ...input }, inputRef)=>{
    var ref2;
    const [isOpen, setOpen] = useState(false);
    const [value, setValue] = useState(initialValue);
    const ref1 = useRef(undefined);
    const display = useMemo(()=>collectDisplays(children)
    , [
        children
    ]);
    const handleClick = useCallback((newState = true)=>{
        if (disabled) return;
        setOpen(newState);
    }, [
        disabled
    ]);
    useEffect(()=>{
        if (isOpen) {
            const onOutsideClick = (e)=>{
                // ignore clicks on the component itself
                if (!(e.target instanceof Node) || !(ref1 === null || ref1 === void 0 ? void 0 : ref1.current)) return;
                if (ref1.current && ref1.current.contains(e.target)) return;
                if (ref1.current && !ref1.current.contains(e.target)) {
                    handleClick(false);
                }
            };
            document.addEventListener("click", onOutsideClick, true);
            return ()=>document.removeEventListener("click", onOutsideClick, true)
            ;
        }
    }, [
        isOpen,
        handleClick
    ]);
    const handleOptionClick = useCallback((_e, newValue)=>{
        if (multi) {
            var ref;
            let added = true;
            setValue((curr)=>{
                if (curr === null || curr === void 0 ? void 0 : curr.includes(newValue)) {
                    added = false;
                    return curr.filter((v)=>v !== newValue
                    );
                } else return (curr || []).concat(newValue);
            });
            const r = (ref = added ? onSelect : onDeselect) === null || ref === void 0 ? void 0 : ref.call(undefined, newValue);
            if (typeof r === "function") r();
        } else {
            setValue(newValue);
        }
        if (!multi) handleClick(false);
    }, [
        handleClick,
        multi,
        onSelect,
        onDeselect
    ]);
    const isSelected = (checkValue)=>{
        return multi ? value === null || value === void 0 ? void 0 : value.includes(checkValue) : value === checkValue;
    };
    useEffect(()=>{
        setValue(initialValue);
    }, [
        initialValue
    ]);
    useEffect(()=>{
        if (multi && initialValue && !Array.isArray(initialValue)) throw Error("Value must be an array if multi select is allowed.");
    }, [
        multi,
        initialValue
    ]);
    useEffect(()=>{
        if (typeof onChange === "function") onChange(value);
    }, [
        value
    ]);
    return /*#__PURE__*/ React.createElement("div", {
        className: `form-group dropdown${appendClass(compressed, "input--compressed")}${appendClass(isOpen, "active")}${appendClass(inline, "form-group--inline")}${appendClass(error, "form-group--error")}${appendClass(disabled, "disabled")}${appendClass(className)}`,
        ref: useMergeRefs([
            ref1,
            divRef
        ])
    }, multi ? /*#__PURE__*/ React.createElement(InputChips, _extends({
        className: "select editable",
        label: label
    }, input, {
        placeholder: !Array.isArray(value) || !value.length ? input.placeholder || prompt : "",
        readOnly: !editable,
        onClick: ()=>handleClick(true)
        ,
        onChange: ()=>void 0
        ,
        onChipRemove: (idx)=>{
            let val;
            setValue((curr)=>{
                val = curr[idx];
                return curr.filter((_v, i)=>i !== idx
                );
            });
            if (typeof onDeselect === "function") onDeselect(val);
        },
        value: displayValues ? value : display.filter((d)=>{
            return value === null || value === void 0 ? void 0 : value.includes(d.value);
        }).map((d)=>d.display
        ),
        noInput: inline && !editable && Array.isArray(value) && value.length > 0,
        outerWrap: false,
        ref: inputRef
    })) : /*#__PURE__*/ React.createElement("div", {
        className: "form-group__text select editable",
        onClick: ()=>handleClick(true)
    }, /*#__PURE__*/ React.createElement("input", _extends({
        type: type,
        placeholder: input.placeholder || prompt,
        autoComplete: "off",
        readOnly: !editable
    }, input, {
        onChange: (e)=>{
            if (!editable) return;
            e.persist();
            setValue(e.target.value);
        },
        value: editable ? value || "" : !displayValues ? ((ref2 = display === null || display === void 0 ? void 0 : display.find((el)=>el.value === value
        )) === null || ref2 === void 0 ? void 0 : ref2.display) || "" : value,
        ref: inputRef
    })), label ? /*#__PURE__*/ React.createElement("label", {
        htmlFor: input.id
    }, label) : null), /*#__PURE__*/ React.createElement("div", {
        className: "dropdown__menu"
    }, /*#__PURE__*/ React.createElement(SelectChildren, {
        handleOptionClick: handleOptionClick,
        isSelected: isSelected
    }, options ? options.map((opt, idx)=>/*#__PURE__*/ React.createElement("option", {
            key: idx,
            value: opt.value
        }, opt.value)
    ) : children)), error ? /*#__PURE__*/ React.createElement(InputHelpBlock, {
        text: error
    }) : null);
});

export { EditableSelect };
//# sourceMappingURL=index.js.map
