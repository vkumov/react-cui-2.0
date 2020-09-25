import e from"react";import t from"prop-types";import{b as n,a as r,c as i}from"../tslib.es6-633881f1.js";import{a as l}from"../index-74b9c8d0.js";import{s as o}from"../style-inject.es-1f59c1d0.js";import{getIn as a}from"formik";import{InputHelpBlock as s}from"./InputHelpBlock.js";import{v4 as d}from"uuid";o(".cui .form-group.dropdown .select+.dropdown__menu{max-width:unset!important;width:100%!important}");var p=function(o){function p(t){var n=o.call(this,t)||this;return n.handleClick=function(){n.state.isOpen?document.removeEventListener("click",n.handleOutsideClick,!1):document.addEventListener("click",n.handleOutsideClick,!1),n.setState((function(e){return{isOpen:!e.isOpen}}))},n.handleOutsideClick=function(e){var t=n.props.innerRef?n.props.innerRef:n.node;t&&t.contains(e.target)||n.handleClick()},n.handleOptionClick=function(e,t,r){var l=n.props,o=l.field,a=l.multiple,s=l.form;a?e.target.checked?(s.setFieldValue(o.name,i(o.value,[t])),s.setFieldTouched(o.name,!0),n.setState({title:i(n.state.title,[r])})):(s.setFieldValue(o.name,o.value.filter((function(e){return e!==t}))),s.setFieldTouched(o.name,!0),n.setState({title:n.state.title.filter((function(e){return e!==r}))})):(s.setFieldValue(o.name,t),s.setFieldTouched(o.name,!0),n.setState({title:r}),n.handleClick())},n.isSelected=function(e){var t=n.props.field.value;return n.props.multiple?Array.isArray(t)&&t.findIndex((function(t){return t===e}))>=0:t===e},n.renderOption=function(t){var r=t.props,i=r.value,l=r.children,o=r.disabled;return n.props.multiple?e.createElement("a",{className:o?"disabled":""},e.createElement("label",{className:"checkbox"},e.createElement("input",{type:"checkbox",onClick:function(e){return n.handleOptionClick(e,i,Array.isArray(l)?l.join(""):l)},checked:!!n.isSelected(i)}),e.createElement("span",{className:"checkbox__input"})),e.createElement("span",null,l)):e.createElement("a",{onClick:function(e){return n.handleOptionClick(e,i,Array.isArray(l)?l.join(""):l)},className:(n.isSelected(i)?"selected":"")+(o?" disabled":"")},l)},n.renderOptgroup=function(t){var r=t.props,i=r.label,l=r.children;return e.createElement("div",{className:"dropdown__group"},e.createElement("div",{className:"dropdown__group-header"},i),n.renderChildren(l))},n.renderChildren=function(t){return e.Children.map(t,(function(e){switch(e.type){case"option":return n.renderOption(e);case"optgroup":return n.renderOptgroup(e);default:return e}}))},n.findTitle=function(t){void 0===t&&(t=void 0);var r=[];return e.Children.forEach(t||n.props.children,(function(e){if("optgroup"===e.type){var t=n.findTitle(e.props.children);t&&r.push(t)}n.isSelected(e.props.value)&&r.push(Array.isArray(e.props.children)?e.props.children.join(""):e.props.children)})),r.join(", ")},n.getShowValue=function(){var e=n.props,t=e.multiple,r=e.prompt,i=e.field;return void 0!==i.value&&null!==i.value&&i.value.toString().length?t?Array.isArray(n.state.title)&&n.state.title.length?n.state.title.join(", "):n.findTitle():n.state.title?n.state.title:n.findTitle():r},n.state={isOpen:!1,title:t.multiple?[]:""},n}return n(p,o),p.prototype.render=function(){var t=this,n=this.props,i=n.compressed,o=n.field,d=n.id,p=n.form,c=n.title,u=n.children,m=n.inline,h=n.up,f=n.innerRef,v=n.className,b=n.disabled,k=n.width,g=p.touched,y=p.errors;return e.createElement("div",r({className:"form-group dropdown"+l(i,"input--compressed")+l(this.state.isOpen,"active")+l(m,"label--inline")+l(h,"dropdown--up")+l(b,"disabled")+l(v)+l(a(g,o.name)&&a(y,o.name),"form-group--error"),ref:f||function(e){t.node=e}},"both"===m?{style:{display:"inline-block"}}:{}),e.createElement("div",{className:"form-group__text select",onClick:this.handleClick},e.createElement("input",r({id:d},o,{value:this.getShowValue(),disabled:b},k?{style:{width:k+"px",minWidth:k+"px"}}:{})),c?e.createElement("label",{htmlFor:d},c):null),e.createElement("div",r({className:"dropdown__menu"},k?{style:{width:k+"px",minWidth:k+"px"}}:{}),this.renderChildren(u)),a(g,o.name)&&a(y,o.name)?e.createElement(s,{text:a(y,o.name)}):null)},p.propTypes={id:t.string,label:t.string,title:t.string,prompt:t.string,multiple:t.bool,inline:t.oneOf([!1,!0,"both"]),up:t.bool,disabled:t.bool,width:t.number,compressed:t.bool},p.defaultProps={prompt:"Select an option",multiple:!1,inline:!1,id:d(),label:null,title:null,width:null,up:!1,disabled:!1,compressed:!1},p}(e.Component);export{p as Select};
