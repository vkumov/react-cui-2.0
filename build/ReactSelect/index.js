import React, { forwardRef } from 'react';
import Select from 'react-select';
import { InputHelpBlock } from '../InputHelp';
import { appendClass } from '../utils';

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
function _objectWithoutProperties$1(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$1(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var MultiValueContainer = function(props) {
    var ref;
    var color = props.selectProps.multiValueColor || "primary";
    return /*#__PURE__*/ React.createElement("div", {
        className: "label label--".concat(color, " label--small").concat(appendClass((ref = props.innerProps) === null || ref === void 0 ? void 0 : ref.className))
    }, props.children);
};
var MultiValueLabel = function(props) {
    return /*#__PURE__*/ React.createElement("span", null, props.children);
};
var MultiValueRemove = function(_param) {
    _param.innerProps.className; var props = _objectWithoutProperties$1(_param.innerProps, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("span", _extends$1({
        className: "icon-close"
    }, props));
};
var Group = function(_param) {
    var className = _param.className, children = _param.children, Heading = _param.Heading, headingProps = _param.headingProps, innerProps = _param.innerProps, props = _objectWithoutProperties$1(_param, [
        "className",
        "children",
        "Heading",
        "headingProps",
        "innerProps"
    ]);
    return /*#__PURE__*/ React.createElement("div", _extends$1({
        className: "dropdown__group".concat(appendClass(className))
    }, innerProps), /*#__PURE__*/ React.createElement(Heading, _extends$1({}, props, {
        id: headingProps.id
    }), headingProps.data.label), children);
};
var GroupHeading = function(_param)  {
    var className = _param.className, children = _param.children; _objectWithoutProperties$1(_param, [
        "className",
        "children"
    ]);
    return React.createElement("div", {
        className: "dropdown__group-header".concat(appendClass(className))
    }, children);
};

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
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var ReactSelect = /*#__PURE__*/ forwardRef(function(_param, ref) {
    var _label = _param.label, label = _label === void 0 ? null : _label, className = _param.className, error = _param.error, props = _objectWithoutProperties(_param, [
        "label",
        "className",
        "error"
    ]);
    return /*#__PURE__*/ React.createElement("div", {
        className: "form-group".concat(appendClass(className)).concat(appendClass(error, "form-group--error"))
    }, label && /*#__PURE__*/ React.createElement("label", null, label), /*#__PURE__*/ React.createElement(Select, _extends({
        className: "react-select-container qtr-margin-top",
        classNamePrefix: "react-select",
        components: {
            MultiValueContainer: MultiValueContainer,
            MultiValueLabel: MultiValueLabel,
            MultiValueRemove: MultiValueRemove,
            Group: Group,
            GroupHeading: GroupHeading
        }
    }, props, {
        ref: ref
    })), Boolean(error) && typeof error !== "boolean" ? /*#__PURE__*/ React.createElement(InputHelpBlock, {
        text: error
    }) : null);
});

export { ReactSelect };
//# sourceMappingURL=index.js.map
