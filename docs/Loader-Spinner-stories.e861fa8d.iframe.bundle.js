"use strict";(self.webpackChunk_vkumov_react_cui_2_0=self.webpackChunk_vkumov_react_cui_2_0||[]).push([[7353],{"./src/Loader/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Dots,$:()=>Spinner});var react=__webpack_require__("./node_modules/react/index.js"),Dots=(0,react.forwardRef)((function(_ref,ref){var _ref$color=_ref.color,color=void 0===_ref$color?"primary":_ref$color;return react.createElement("div",{className:"loading-dots".concat("primary"!==color?" loading-dots--".concat(color):""),ref},react.createElement("span",null),react.createElement("span",null),react.createElement("span",null))}));try{Dots.displayName="Dots",Dots.__docgenInfo={description:"",displayName:"Dots",props:{color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"info"'},{value:'"primary"'},{value:'"secondary"'},{value:'"dark"'},{value:'"tertiary"'},{value:'"warning-alt"'},{value:'"danger"'},{value:'"light"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Loader/Dots.tsx#Dots"]={docgenInfo:Dots.__docgenInfo,name:"Dots",path:"src/Loader/Dots.tsx#Dots"})}catch(__react_docgen_typescript_loader_error){}var Spinner=(0,react.forwardRef)((function(_ref,ref){var _ref$size=_ref.size,size=void 0===_ref$size?"default":_ref$size,_ref$text=_ref.text,text=void 0===_ref$text?null:_ref$text;return react.createElement("div",{className:"flex-center flex-middle",style:{flex:1},ref},react.createElement("div",null,react.createElement("div",{className:"loader".concat("default"!==size?" loader--".concat(size):""," flex-center")},react.createElement("div",{className:"wrapper flex flex-center"},react.createElement("div",{className:"wheel"}))),text?react.createElement("div",{className:"base-margin-top text-center"},text||"Loading..."):null))}));try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{size:{defaultValue:{value:"default"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'},{value:'"large"'}]}},text:{defaultValue:{value:"null"},description:"",name:"text",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Loader/Spinner.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/Loader/Spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/Loader/Spinner.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Loader/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Loader/Spinner",parameters:{docs:{source:{language:"tsx",excludeDecorators:!0}}}};var Default={render:function render(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.$,args)},args:{size:"default",text:"Loading..."},argTypes:{size:{options:["small","default","large"],control:{type:"radio"}}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: function render(args) {\n    return /*#__PURE__*/React.createElement(Spinner, args);\n  },\n  args: {\n    size: "default",\n    text: "Loading..."\n  },\n  argTypes: {\n    size: {\n      options: ["small", "default", "large"],\n      control: {\n        type: "radio"\n      }\n    }\n  }\n}',...Default.parameters?.docs?.source}}}}}]);