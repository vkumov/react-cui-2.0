import e from"react";import a from"prop-types";import{a as r,_ as s,b as l}from"../_rollupPluginBabelHelpers-b60338eb.js";import{a as t}from"../index-be24eb93.js";const n=({color:a,size:r,children:s,className:l})=>e.createElement("span",{className:`${"badge badge--"+a}${t("default"!==r,"badge--"+r)}${t(l)}`},s),p={color:a.oneOf(["primary","secondary","tertiary","success","info","warning","warning-alt","danger","dark","light"]),size:a.oneOf(["dot","tiny","small","default","large"]),className:a.string,children:a.node.isRequired};n.propTypes=p,n.defaultProps={color:"primary",size:"default",className:""},n.Dot=a=>e.createElement(n,r({},a,{size:"dot"})),n.Tiny=a=>e.createElement(n,r({},a,{size:"tiny"})),n.Small=a=>e.createElement(n,r({},a,{size:"small"})),n.Default=a=>e.createElement(n,r({},a,{size:"default"})),n.Large=a=>e.createElement(n,r({},a,{size:"large"})),(n.Wrapper=({children:a,className:r})=>e.createElement("span",{className:"badge-wrapper"+t(r)},a)).propTypes={children:a.node.isRequired,className:a.string},n.Wrapper.defaultProps={className:null};const i=a=>{let{children:r,badge:l,wrapperClass:t}=a,p=s(a,["children","badge","wrapperClass"]);return e.createElement(n.Wrapper,{className:t},r,e.createElement(n,p,l))};i.propTypes=l({children:a.node.isRequired,badge:a.node.isRequired,wrapperClass:a.string},p),i.defaultProps={wrapperClass:null};export default n;export{i as WithBadge};
