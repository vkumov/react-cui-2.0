import e from"react";import l from"prop-types";import{_ as a,a as n}from"../_rollupPluginBabelHelpers-b60338eb.js";import{a as r}from"../index-be24eb93.js";import{Field as s}from"formik";const i=l=>{let{field:{name:s,value:i,onChange:o,onBlur:t},id:m,inline:p,spacing:u,label:c,className:d}=l,g=a(l,["field","id","inline","spacing","label","className"]);return e.createElement("div",n({className:`form-group${r(p,"form-group--inline")}${r(u,"form-group--"+u)}${r(d)}`},g),e.createElement("label",{className:"radio",htmlFor:`${s}.${m}`},e.createElement("input",{type:"radio",name:s,value:m,checked:m===i,onChange:o,onBlur:t,id:`${s}.${m}`}),e.createElement("span",{className:"radio__input"}),c?e.createElement("span",{className:"radio__label"},c):null))};i.propTypes={spacing:l.oneOf([!1,"compressed","regular","loose","nospacing"]),inline:l.bool,label:l.node,className:l.string,id:l.string.isRequired,field:l.shape({name:l.string,value:l.string,onChange:l.func,onBlur:l.func}).isRequired},i.defaultProps={spacing:null,inline:!1,label:null,className:null};const o=l=>{let{values:r}=l,o=a(l,["values"]);return r.map(l=>e.createElement(s,n({component:i},o,{id:l.value,label:l.label,key:l.value})))};o.propTypes={values:l.arrayOf(l.exact({value:l.string,label:l.node}))};export{i as Radio,o as Radios};
