import e from"react";import t from"prop-types";import{_ as r,a as n}from"../tslib.es6-633881f1.js";import{a as o}from"../index-74b9c8d0.js";import{getIn as i}from"formik";import{InputHelpBlock as l}from"./InputHelpBlock.js";var a=function(t){var r=t.children,n=t.handleOptionClick,i=t.isSelected;return e.Children.map(r,(function(t,r){switch(t.type){case"option":return e.createElement("a",{key:r,onClick:function(e){return n(e,t.props.value)},className:""+o(i(t.props.value),"selected")+o(t.props.disabled,"disabled")},t.props.children);case"optgroup":return e.createElement("div",{key:r,className:"dropdown__group"},e.createElement("div",{className:"dropdown__group-header"},t.props.label),e.createElement(a,{handleOptionClick:n,isSelected:i},t.props.children));default:return t}}))},d=e.forwardRef((function(t,d){var c,p=t.compressed,s=void 0!==p&&p,m=t.prompt,u=void 0===m?"Select an option":m,f=t.inline,v=void 0!==f&&f,h=t.type,E=void 0===h?"text":h,b=t.id,k=void 0===b?null:b,g=t.children,y=t.field,_=t.form,C=t.title,w=r(t,["compressed","prompt","inline","type","id","children","field","form","title"]),x=e.useState(!1),N=x[0],S=x[1],O=e.useState(void 0),j=O[0],F=O[1],R=function(e){void 0===e&&(e=!0),e&&!N?document.addEventListener("click",c,!1):document.removeEventListener("click",c,!1),S(e)};c=function(e){var t=d||j;t&&t.contains(e.target)||R(!1)};return e.createElement("div",{className:"form-group dropdown"+o(s,"input--compressed")+o(N,"active")+o(v,"label--inline")+o(i(_.touched,y.name)&&i(_.errors,y.name)," form-group--error"),ref:d||function(e){return F(e)}},e.createElement("div",{className:"form-group__text select editable",onClick:function(){return R(!0)}},e.createElement("input",n({id:k||y.name},y,{type:E,placeholder:u,autoComplete:"off"},w)),e.createElement("label",{htmlFor:k||y.name},C)),e.createElement("div",{className:"dropdown__menu"},e.createElement(a,{handleOptionClick:function(e,t){_.setFieldValue(y.name,t),_.setFieldTouched(y.name,!0),R(!1)},isSelected:function(e){return y.value===e}},g)),i(_.touched,y.name)&&i(_.errors,y.name)?e.createElement(l,{text:i(_.errors,y.name)}):null)}));d.propTypes={compressed:t.bool,id:t.string,title:t.node.isRequired,prompt:t.string,inline:t.bool,type:t.oneOf(["number","text"]),children:t.node.isRequired};export{d as EditableSelect};
