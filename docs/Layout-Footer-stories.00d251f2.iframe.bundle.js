"use strict";(self.webpackChunk_vkumov_react_cui_2_0=self.webpackChunk_vkumov_react_cui_2_0||[]).push([[4347],{"./src/Layout/Footer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_Users_vkumov_Documents_Scripts_react_cui_2_0_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Layout/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Layout/Footer",component:_index__WEBPACK_IMPORTED_MODULE_1__.$_,parameters:{docs:{source:{language:"tsx",excludeDecorators:!0}}}};var Default={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.$_,null)}};Default.parameters=(0,_Users_vkumov_Documents_Scripts_react_cui_2_0_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_Users_vkumov_Documents_Scripts_react_cui_2_0_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},Default.parameters),{},{docs:(0,_Users_vkumov_Documents_Scripts_react_cui_2_0_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_Users_vkumov_Documents_Scripts_react_cui_2_0_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,_Users_vkumov_Documents_Scripts_react_cui_2_0_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({originalSource:"{\n  render: () => <Footer />\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})})},"./src/Layout/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$_:()=>Footer,h4:()=>Header,yh:()=>HeaderPanel,Gh:()=>HeaderTitle});var react=__webpack_require__("./node_modules/react/index.js"),Footer=function Footer(){return react.createElement("footer",{className:"footer"},react.createElement("div",{className:"footer__links"},react.createElement("ul",{className:"list list--inline"},react.createElement("li",null,react.createElement("a",{href:"http://www.cisco.com/cisco/web/siteassets/contacts/index.html",target:"_blank",rel:"noopener noreferrer"},"Contacts")),react.createElement("li",null,react.createElement("a",{href:"https://secure.opinionlab.com/ccc01/o.asp?id=jBjOhqOJ",target:"_blank",rel:"noopener noreferrer"},"Feedback")),react.createElement("li",null,react.createElement("a",{href:"https://www.cisco.com/c/en/us/about/help.html",target:"_blank",rel:"noopener noreferrer"},"Help")),react.createElement("li",null,react.createElement("a",{href:"http://www.cisco.com/c/en/us/about/sitemap.html",target:"_blank",rel:"noopener noreferrer"},"Site Map")),react.createElement("li",null,react.createElement("a",{href:"https://www.cisco.com/c/en/us/about/legal/terms-conditions.html",target:"_blank",rel:"noopener noreferrer"},"Terms & Conditions")),react.createElement("li",null,react.createElement("a",{href:"https://www.cisco.com/c/en/us/about/legal/privacy-full.html",target:"_blank",rel:"noopener noreferrer"},"Privacy Statement")),react.createElement("li",null,react.createElement("a",{href:"https://www.cisco.com/c/en/us/about/legal/privacy-full.html#cookies",target:"_blank",rel:"noopener noreferrer"},"Cookie Policy")),react.createElement("li",null,react.createElement("a",{href:"https://www.cisco.com/c/en/us/about/legal/trademarks.html",target:"_blank",rel:"noopener noreferrer"},"Trademarks")))))},objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),utils=__webpack_require__("./src/utils/index.ts"),_excluded=["children","fluid"],_excluded2=["children","center","right","className"],_excluded3=["icon","link","title"],Header=function Header(_ref){var children=_ref.children,_ref$fluid=_ref.fluid,fluid=void 0!==_ref$fluid&&_ref$fluid,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return react.createElement("header",Object.assign({className:"header"},props),react.createElement("div",{className:"container".concat(fluid?"-fluid":"")},react.createElement("div",{className:"header-panels"},children)))},HeaderPanel=function HeaderPanel(_ref2){var children=_ref2.children,_ref2$center=_ref2.center,center=void 0!==_ref2$center&&_ref2$center,_ref2$right=_ref2.right,right=void 0!==_ref2$right&&_ref2$right,_ref2$className=_ref2.className,className=void 0===_ref2$className?null:_ref2$className,props=(0,objectWithoutProperties.Z)(_ref2,_excluded2);return react.createElement("div",Object.assign({className:"header-panel".concat((0,utils.T)(center,"header-panel--center")).concat((0,utils.T)(right,"header-panel--right")).concat((0,utils.T)(className))},props),children)},HeaderTitle=function HeaderTitle(_ref3){var _ref3$icon=_ref3.icon,icon=void 0===_ref3$icon||_ref3$icon,_ref3$link=_ref3.link,link=void 0===_ref3$link?null:_ref3$link,title=_ref3.title,props=(0,objectWithoutProperties.Z)(_ref3,_excluded3);return react.createElement(HeaderPanel,props,icon?react.createElement("a",{className:"header__logo",href:link||"http://www.cisco.com",target:"_blank",rel:"noopener noreferrer"},react.createElement("span",{className:"string"==typeof icon?"icon-".concat(icon):"icon-cisco"})):null,react.createElement("div",{className:"header__title"},title))};try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{fluid:{defaultValue:{value:"false"},description:"",name:"fluid",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Layout/Header.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"src/Layout/Header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}try{HeaderPanel.displayName="HeaderPanel",HeaderPanel.__docgenInfo={description:"",displayName:"HeaderPanel",props:{center:{defaultValue:{value:"false"},description:"",name:"center",required:!1,type:{name:"boolean"}},right:{defaultValue:{value:"false"},description:"",name:"right",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:"null"},description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Layout/Header.tsx#HeaderPanel"]={docgenInfo:HeaderPanel.__docgenInfo,name:"HeaderPanel",path:"src/Layout/Header.tsx#HeaderPanel"})}catch(__react_docgen_typescript_loader_error){}try{HeaderTitle.displayName="HeaderTitle",HeaderTitle.__docgenInfo={description:"",displayName:"HeaderTitle",props:{icon:{defaultValue:{value:"true"},description:"",name:"icon",required:!1,type:{name:"string | boolean"}},link:{defaultValue:{value:"null"},description:"",name:"link",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},center:{defaultValue:{value:"false"},description:"",name:"center",required:!1,type:{name:"boolean"}},right:{defaultValue:{value:"false"},description:"",name:"right",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:"null"},description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Layout/Header.tsx#HeaderTitle"]={docgenInfo:HeaderTitle.__docgenInfo,name:"HeaderTitle",path:"src/Layout/Header.tsx#HeaderTitle"})}catch(__react_docgen_typescript_loader_error){}}}]);