import e from"react";import s from"prop-types";import{_ as a,b as r,a as t}from"../_rollupPluginBabelHelpers-b60338eb.js";import{a as l}from"../index-be24eb93.js";const m=s=>{let{size:t,as:m,className:i}=s,o=a(s,["size","as","className"]);return e.createElement(m,r({},o,{className:`display-${t}${l(i)}`}))};m.propTypes={size:s.oneOf([0,1,2,3,4]).isRequired,as:s.node,className:s.string},m.defaultProps={as:"h1",className:null};const i=s=>e.createElement(m,t({},s,{size:0})),o=s=>e.createElement(m,t({},s,{size:1})),n=s=>e.createElement(m,t({},s,{size:2})),p=s=>e.createElement(m,t({},s,{size:3})),c=s=>e.createElement(m,t({},s,{size:4}));export{m as Display,i as Display0,o as Display1,n as Display2,p as Display3,c as Display4};