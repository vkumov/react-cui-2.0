import e from"react";import r from"prop-types";import{a as s}from"../../_rollupPluginBabelHelpers-b60338eb.js";import{a as l}from"../../index-be24eb93.js";const a=({size:r,color:s,vertical:a,children:t,className:o})=>e.createElement("div",{className:`steps${l("default"!==r,"steps--"+r)} steps--${s}${l(a,"steps--vertical")}${l(o)}`},t);a.propTypes={size:r.oneOf(["dot","small","default","large"]),color:r.oneOf(["primary","secondary","success","dark"]),vertical:r.bool,className:r.string,children:r.node.isRequired},a.defaultProps={size:"default",color:"primary",vertical:!1,className:null},a.Dot=r=>e.createElement(a,s({},r,{size:"dot"})),a.Small=r=>e.createElement(a,s({},r,{size:"small"})),a.Large=r=>e.createElement(a,s({},r,{size:"large"}));export default a;
