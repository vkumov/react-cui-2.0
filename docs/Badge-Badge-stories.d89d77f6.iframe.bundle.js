"use strict";(self.webpackChunk_vkumov_react_cui_2_0=self.webpackChunk_vkumov_react_cui_2_0||[]).push([[9461],{"./src/Badge/Badge.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Badge_stories_Default,default:()=>Badge_stories});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),utils=__webpack_require__("./src/utils/index.ts"),_excluded=["color","size","children","className"],_excluded2=["children","badge","wrapperClass"],Badge=function Badge(_ref2){var _ref2$color=_ref2.color,color=void 0===_ref2$color?"primary":_ref2$color,_ref2$size=_ref2.size,size=void 0===_ref2$size?"default":_ref2$size,children=_ref2.children,_ref2$className=_ref2.className,className=void 0===_ref2$className?null:_ref2$className,props=(0,objectWithoutProperties.Z)(_ref2,_excluded);return react.createElement("span",Object.assign({className:"".concat("badge badge--".concat(color),(0,utils.T)("default"!==size,"badge--".concat(size))).concat((0,utils.T)(className))},props),children)};Badge.Dot=function(props){return react.createElement(Badge,Object.assign({},props,{size:"dot"}))},Badge.Tiny=function(props){return react.createElement(Badge,Object.assign({},props,{size:"tiny"}))},Badge.Small=function(props){return react.createElement(Badge,Object.assign({},props,{size:"small"}))},Badge.Default=function(props){return react.createElement(Badge,Object.assign({},props,{size:"default"}))},Badge.Large=function(props){return react.createElement(Badge,Object.assign({},props,{size:"large"}))},Badge.Wrapper=function Wrapper(_ref){var children=_ref.children,_ref$className=_ref.className,className=void 0===_ref$className?null:_ref$className;return react.createElement("span",{className:"badge-wrapper".concat((0,utils.T)(className))},children)};var _Default$parameters,_Default$parameters2,_Default$parameters2$,WithBadge=function WithBadge(_ref3){var children=_ref3.children,badge=_ref3.badge,_ref3$wrapperClass=_ref3.wrapperClass,wrapperClass=void 0===_ref3$wrapperClass?null:_ref3$wrapperClass,props=(0,objectWithoutProperties.Z)(_ref3,_excluded2);return react.createElement(Badge.Wrapper,{className:wrapperClass},children,react.createElement(Badge,props,badge))};try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"dark"'},{value:'"tertiary"'},{value:'"info"'},{value:'"warning-alt"'},{value:'"warning"'},{value:'"danger"'},{value:'"light"'}]}},size:{defaultValue:{value:"default"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"dot"'},{value:'"small"'},{value:'"large"'},{value:'"tiny"'}]}},className:{defaultValue:{value:"null"},description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Badge/Badge.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/Badge/Badge.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}try{Dot.displayName="Badge.Dot",Dot.__docgenInfo={description:"",displayName:"Badge.Dot",props:{className:{defaultValue:{value:"null"},description:"",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"dark"'},{value:'"tertiary"'},{value:'"info"'},{value:'"warning-alt"'},{value:'"warning"'},{value:'"danger"'},{value:'"light"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Badge/Badge.tsx#Badge.Dot"]={docgenInfo:Badge.Dot.__docgenInfo,name:"Badge.Dot",path:"src/Badge/Badge.tsx#Badge.Dot"})}catch(__react_docgen_typescript_loader_error){}try{Tiny.displayName="Badge.Tiny",Tiny.__docgenInfo={description:"",displayName:"Badge.Tiny",props:{className:{defaultValue:{value:"null"},description:"",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"dark"'},{value:'"tertiary"'},{value:'"info"'},{value:'"warning-alt"'},{value:'"warning"'},{value:'"danger"'},{value:'"light"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Badge/Badge.tsx#Badge.Tiny"]={docgenInfo:Badge.Tiny.__docgenInfo,name:"Badge.Tiny",path:"src/Badge/Badge.tsx#Badge.Tiny"})}catch(__react_docgen_typescript_loader_error){}try{Small.displayName="Badge.Small",Small.__docgenInfo={description:"",displayName:"Badge.Small",props:{className:{defaultValue:{value:"null"},description:"",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"dark"'},{value:'"tertiary"'},{value:'"info"'},{value:'"warning-alt"'},{value:'"warning"'},{value:'"danger"'},{value:'"light"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Badge/Badge.tsx#Badge.Small"]={docgenInfo:Badge.Small.__docgenInfo,name:"Badge.Small",path:"src/Badge/Badge.tsx#Badge.Small"})}catch(__react_docgen_typescript_loader_error){}try{Default.displayName="Badge.Default",Default.__docgenInfo={description:"",displayName:"Badge.Default",props:{className:{defaultValue:{value:"null"},description:"",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"dark"'},{value:'"tertiary"'},{value:'"info"'},{value:'"warning-alt"'},{value:'"warning"'},{value:'"danger"'},{value:'"light"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Badge/Badge.tsx#Badge.Default"]={docgenInfo:Badge.Default.__docgenInfo,name:"Badge.Default",path:"src/Badge/Badge.tsx#Badge.Default"})}catch(__react_docgen_typescript_loader_error){}try{Large.displayName="Badge.Large",Large.__docgenInfo={description:"",displayName:"Badge.Large",props:{className:{defaultValue:{value:"null"},description:"",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"dark"'},{value:'"tertiary"'},{value:'"info"'},{value:'"warning-alt"'},{value:'"warning"'},{value:'"danger"'},{value:'"light"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Badge/Badge.tsx#Badge.Large"]={docgenInfo:Badge.Large.__docgenInfo,name:"Badge.Large",path:"src/Badge/Badge.tsx#Badge.Large"})}catch(__react_docgen_typescript_loader_error){}try{WithBadge.displayName="WithBadge",WithBadge.__docgenInfo={description:"",displayName:"WithBadge",props:{color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"dark"'},{value:'"tertiary"'},{value:'"info"'},{value:'"warning-alt"'},{value:'"warning"'},{value:'"danger"'},{value:'"light"'}]}},size:{defaultValue:{value:"default"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"dot"'},{value:'"small"'},{value:'"large"'},{value:'"tiny"'}]}},className:{defaultValue:{value:"null"},description:"",name:"className",required:!1,type:{name:"string"}},badge:{defaultValue:null,description:"",name:"badge",required:!0,type:{name:"ReactNode"}},wrapperClass:{defaultValue:{value:"null"},description:"",name:"wrapperClass",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Badge/Badge.tsx#WithBadge"]={docgenInfo:WithBadge.__docgenInfo,name:"WithBadge",path:"src/Badge/Badge.tsx#WithBadge"})}catch(__react_docgen_typescript_loader_error){}const Badge_stories={title:"Components/Badge",component:WithBadge};var Badge_stories_Default={render:function render(args){return react.createElement(WithBadge,args,react.createElement("span",{className:"icon-alert icon-size-32"}))},args:{badge:3,color:"danger",size:"default"},parameters:{docs:{source:{language:"tsx",excludeDecorators:!0}}}};Badge_stories_Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Badge_stories_Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Badge_stories_Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  render: args => <WithBadge {...args}>\n      <span className="icon-alert icon-size-32" />\n    </WithBadge>,\n  args: {\n    badge: 3,\n    color: "danger",\n    size: "default"\n  },\n  parameters: {\n    docs: {\n      source: {\n        language: "tsx",\n        excludeDecorators: true\n      }\n    }\n  }\n}'},null===(_Default$parameters2=Badge_stories_Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})})}}]);