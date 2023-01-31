function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}import React,{forwardRef}from"react";import cx from"classnames";import CreatableSelect from"react-select/creatable";import{InputHelpBlock}from"../InputHelp/index.js";import{appendClass}from"../utils/index.js";var sts={"multi_select":"Select-module_multi_select__zqzhA"};function _extends$1(){_extends$1=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends$1.apply(this,arguments)}var MultiValueContainer=function(props){var ref;var color=props.selectProps.multiValueColor||"primary";return React.createElement("div",{className:"label label--".concat(color," label--small").concat(appendClass((ref=props.innerProps)===null||ref===void 0?void 0:ref.className))},props.children)};var MultiValueLabel=function(props){return React.createElement("span",null,props.children)};var MultiValueRemove=function(_param){var className=_param.innerProps.className,props=_objectWithoutProperties(_param.innerProps,["className"]);return React.createElement("span",_extends$1({className:"icon-close"},props))};function Group(_param){var className=_param.className,children=_param.children,Heading=_param.Heading,headingProps=_param.headingProps,innerProps=_param.innerProps,props=_objectWithoutProperties(_param,["className","children","Heading","headingProps","innerProps"]);return React.createElement("div",_extends$1({className:"dropdown__group".concat(appendClass(className))},innerProps),React.createElement(Heading,_extends$1({},props,{id:headingProps.id}),headingProps.data.label),children)}function GroupHeading(_param){var className=_param.className,children=_param.children,props=_objectWithoutProperties(_param,["className","children"]);return React.createElement("div",{className:"dropdown__group-header".concat(appendClass(className))},children)}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function UnrefedSelect(_param,ref){var _label=_param.label,label=_label===void 0?null:_label,className=_param.className,error=_param.error,props=_objectWithoutProperties(_param,["label","className","error"]);return React.createElement("div",{className:cx("form-group",className,_defineProperty({"form-group--error":error},sts.multi_select,props.isMulti))},label&&React.createElement("label",null,label),React.createElement(CreatableSelect,_extends({className:"react-select-container qtr-margin-top",classNamePrefix:"react-select",components:{MultiValueContainer:MultiValueContainer,MultiValueLabel:MultiValueLabel,MultiValueRemove:MultiValueRemove,Group:Group,GroupHeading:GroupHeading},formatCreateLabel:function(inputValue){return React.createElement(React.Fragment,null,props.isMulti?"Add ":"Use ",React.createElement("span",{className:"text-bold"},inputValue))}},props,{ref:ref})),Boolean(error)&&typeof error!=="boolean"?React.createElement(InputHelpBlock,{text:error}):null)}var CreatableReactSelect=forwardRef(UnrefedSelect);export{CreatableReactSelect};
//# sourceMappingURL=creatable.js.map
