import React, { forwardRef } from 'react';
import CreatableSelect from 'react-select/creatable';
import { appendClass } from '../utils/index.js';
import { InputHelpBlock } from '../InputHelp/index.js';

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
const MultiValueContainer = (props)=>{
    var ref;
    const color = props.selectProps.multiValueColor || "primary";
    return /*#__PURE__*/ React.createElement("div", {
        className: `label label--${color} label--small${appendClass((ref = props.innerProps) === null || ref === void 0 ? void 0 : ref.className)}`
    }, props.children);
};
const MultiValueLabel = (props)=>{
    return /*#__PURE__*/ React.createElement("span", null, props.children);
};
const MultiValueRemove = ({ innerProps: { className , ...props }  })=>{
    return /*#__PURE__*/ React.createElement("span", _extends$1({
        className: "icon-close"
    }, props));
};
const Group = ({ className , children , Heading , headingProps , innerProps , ...props })=>{
    return /*#__PURE__*/ React.createElement("div", _extends$1({
        className: `dropdown__group${appendClass(className)}`
    }, innerProps), /*#__PURE__*/ React.createElement(Heading, _extends$1({}, props, {
        id: headingProps.id
    }), headingProps.data.label), children);
};
const GroupHeading = ({ className , children , ...props })=>/*#__PURE__*/ React.createElement("div", {
        className: `dropdown__group-header${appendClass(className)}`
    }, children)
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
const CreatableReactSelect = /*#__PURE__*/ forwardRef(({ label =null , className , error , ...props }, ref)=>{
    return /*#__PURE__*/ React.createElement("div", {
        className: `form-group${appendClass(className)}${appendClass(error, "form-group--error")}`
    }, label && /*#__PURE__*/ React.createElement("label", null, label), /*#__PURE__*/ React.createElement(CreatableSelect, _extends({
        className: "react-select-container qtr-margin-top",
        classNamePrefix: "react-select",
        components: {
            MultiValueContainer,
            MultiValueLabel,
            MultiValueRemove,
            Group,
            GroupHeading
        },
        formatCreateLabel: (inputValue)=>/*#__PURE__*/ React.createElement(React.Fragment, null, props.isMulti ? "Add " : "Use ", /*#__PURE__*/ React.createElement("span", {
                className: "text-bold"
            }, inputValue))
    }, props, {
        ref: ref
    })), Boolean(error) && typeof error !== "boolean" ? /*#__PURE__*/ React.createElement(InputHelpBlock, {
        text: error
    }) : null);
});

export { CreatableReactSelect };
//# sourceMappingURL=creatable.js.map
