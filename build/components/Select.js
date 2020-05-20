import e from"react";import t from"prop-types";import{c as i,a as l}from"../_rollupPluginBabelHelpers-b60338eb.js";import{a as s}from"../index-be24eb93.js";import{s as r}from"../style-inject.es-1f59c1d0.js";import{getIn as n}from"formik";import{InputHelpBlock as o}from"./InputHelpBlock.js";import{v4 as a}from"uuid";r(".cui .form-group.dropdown .select+.dropdown__menu{max-width:unset!important;width:100%!important}");class d extends e.Component{constructor(t){super(t),i(this,"handleClick",()=>{this.state.isOpen?document.removeEventListener("click",this.handleOutsideClick,!1):document.addEventListener("click",this.handleOutsideClick,!1),this.setState(e=>({isOpen:!e.isOpen}))}),i(this,"handleOutsideClick",e=>{const t=this.props.innerRef?this.props.innerRef:this.node;t&&t.contains(e.target)||this.handleClick()}),i(this,"handleOptionClick",(e,t,i)=>{const{field:l,multiple:s,form:r}=this.props;s?e.target.checked?(r.setFieldValue(l.name,[...l.value,t]),r.setFieldTouched(l.name,!0),this.setState({title:[...this.state.title,i]})):(r.setFieldValue(l.name,l.value.filter(e=>e!==t)),r.setFieldTouched(l.name,!0),this.setState({title:this.state.title.filter(e=>e!==i)})):(r.setFieldValue(l.name,t),r.setFieldTouched(l.name,!0),this.setState({title:i}),this.handleClick())}),i(this,"isSelected",e=>{const{value:t}=this.props.field;return this.props.multiple?Array.isArray(t)&&t.findIndex(t=>t===e)>=0:t===e}),i(this,"renderOption",t=>{const{value:i,children:l,disabled:s}=t.props;return this.props.multiple?e.createElement("a",{disabled:s},e.createElement("label",{className:"checkbox"},e.createElement("input",{type:"checkbox",onClick:e=>this.handleOptionClick(e,i,Array.isArray(l)?l.join(""):l),checked:!!this.isSelected(i)}),e.createElement("span",{className:"checkbox__input"})),e.createElement("span",null,l)):e.createElement("a",{disabled:s,onClick:e=>this.handleOptionClick(e,i,Array.isArray(l)?l.join(""):l),className:this.isSelected(i)?"selected":""},l)}),i(this,"renderOptgroup",t=>{const{label:i,children:l}=t.props;return e.createElement("div",{className:"dropdown__group"},e.createElement("div",{className:"dropdown__group-header"},i),this.renderChildren(l))}),i(this,"renderChildren",t=>e.Children.map(t,e=>{switch(e.type){case"option":return this.renderOption(e);case"optgroup":return this.renderOptgroup(e);default:return e}})),i(this,"findTitle",t=>{let i=[];return e.Children.forEach(t||this.props.children,e=>{if("optgroup"===e.type){const t=this.findTitle(e.props.children);t&&i.push(t)}this.isSelected(e.props.value)&&i.push(Array.isArray(e.props.children)?e.props.children.join(""):e.props.children)}),i.join(", ")}),i(this,"getShowValue",()=>{const{multiple:e,prompt:t,field:i}=this.props;return void 0!==i.value&&null!==i.value&&i.value.toString().length?e?this.state.title.length?this.state.title.join(", "):this.findTitle():this.state.title?this.state.title:this.findTitle():t}),this.state={isOpen:!1,title:t.multiple?[]:""}}render(){const{compressed:t,field:i,id:r,form:a,title:d,children:p,inline:h,up:c,innerRef:m,className:u,disabled:f,width:b}=this.props,{touched:k,errors:g}=a;return e.createElement("div",l({className:`form-group dropdown${s(t,"input--compressed")}${s(this.state.isOpen,"active")}${s(h,"label--inline")}${s(c,"dropdown--up")}${s(f,"disabled")}${s(u)}${s(n(k,i.name)&&n(g,i.name),"form-group--error")}`,ref:m||(e=>{this.node=e})},"both"===h?{style:{display:"inline-block"}}:{}),e.createElement("div",{className:"form-group__text select",onClick:this.handleClick},e.createElement("input",l({id:r},i,{value:this.getShowValue(),disabled:f},b?{style:{width:b+"px",minWidth:b+"px"}}:{})),d?e.createElement("label",{htmlFor:r},d):null),e.createElement("div",l({className:"dropdown__menu"},b?{style:{width:b+"px",minWidth:b+"px"}}:{}),this.renderChildren(p)),n(k,i.name)&&n(g,i.name)?e.createElement(o,{text:n(g,i.name)}):null)}}d.propTypes={id:t.string,label:t.string,title:t.string,prompt:t.string,multiple:t.bool,inline:t.oneOf([!1,!0,"both"]),up:t.bool,disabled:t.bool,width:t.number,compressed:t.bool},d.defaultProps={prompt:"Select an option",multiple:!1,inline:!1,id:a(),label:null,title:null,width:null,up:!1,disabled:!1,compressed:!1};export{d as Select};
