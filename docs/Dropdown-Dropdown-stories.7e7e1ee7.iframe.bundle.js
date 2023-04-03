"use strict";(self.webpackChunk_vkumov_react_cui_2_0=self.webpackChunk_vkumov_react_cui_2_0||[]).push([[8304],{"./src/Dropdown/Dropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Link:()=>Link,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Button/index.ts"),_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Dropdown/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Dropdown",component:_index__WEBPACK_IMPORTED_MODULE_2__.Lt,subcomponents:{Menu:_index__WEBPACK_IMPORTED_MODULE_2__.v2,MenuDivider:_index__WEBPACK_IMPORTED_MODULE_2__.R,MenuElement:_index__WEBPACK_IMPORTED_MODULE_2__.FY,MenuGroup:_index__WEBPACK_IMPORTED_MODULE_2__.kS}};var argTypes={placement:{options:["top","right","bottom","left","top-start","top-end","right-start","right-end","bottom-start","bottom-end","left-start","left-end"],control:{type:"select"}},noChevron:{type:"boolean"},alwaysClose:{type:"boolean"},isOpen:{type:"boolean"},withSizeLimit:{type:"boolean"}},parameters={docs:{source:{language:"tsx",excludeDecorators:!0}}},Default={render:function render(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.Lt,Object.assign({},args,{label:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.z.Primary,null,"Dropdown")}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.FY,null,"Item one"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.FY,null,"Item two"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.FY,{selected:!0},"Item three"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.R,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.kS,{header:"Group"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.FY,null,"Item one"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.FY,null,"Item two")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.FY,{icon:"icon-social-facebook"},"Facebook"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.FY,{icon:"icon-social-twitter"},"Twitter"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.R,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.v2,{label:"And with sub menu"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.FY,null,"Item one"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.FY,null,"Item two"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.FY,{selected:!0},"Item three")))},parameters,argTypes},Link={render:function render(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.Lt,Object.assign({},args,{label:react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",null,"Dropdown as a link")}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.FY,null,"Item one"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.FY,null,"Item two"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.FY,{selected:!0},"Item three"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.R,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.kS,{header:"Group"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.FY,null,"Item one"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.FY,null,"Item two")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.FY,{icon:"icon-social-facebook"},"Facebook"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.FY,{icon:"icon-social-twitter"},"Twitter"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.R,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.v2,{label:"And with sub menu"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.FY,null,"Item one"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.FY,null,"Item two"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.FY,{selected:!0},"Item three")))},argTypes,parameters};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: function render(args) {\n    return /*#__PURE__*/React.createElement(Dropdown, Object.assign({}, args, {\n      label: /*#__PURE__*/React.createElement(Button.Primary, null, "Dropdown")\n    }), /*#__PURE__*/React.createElement(MenuElement, null, "Item one"), /*#__PURE__*/React.createElement(MenuElement, null, "Item two"), /*#__PURE__*/React.createElement(MenuElement, {\n      selected: true\n    }, "Item three"), /*#__PURE__*/React.createElement(MenuDivider, null), /*#__PURE__*/React.createElement(MenuGroup, {\n      header: "Group"\n    }, /*#__PURE__*/React.createElement(MenuElement, null, "Item one"), /*#__PURE__*/React.createElement(MenuElement, null, "Item two")), /*#__PURE__*/React.createElement(MenuElement, {\n      icon: "icon-social-facebook"\n    }, "Facebook"), /*#__PURE__*/React.createElement(MenuElement, {\n      icon: "icon-social-twitter"\n    }, "Twitter"), /*#__PURE__*/React.createElement(MenuDivider, null), /*#__PURE__*/React.createElement(Menu, {\n      label: "And with sub menu"\n    }, /*#__PURE__*/React.createElement(MenuElement, null, "Item one"), /*#__PURE__*/React.createElement(MenuElement, null, "Item two"), /*#__PURE__*/React.createElement(MenuElement, {\n      selected: true\n    }, "Item three")));\n  },\n  parameters: parameters,\n  argTypes: argTypes\n}',...Default.parameters?.docs?.source}}},Link.parameters={...Link.parameters,docs:{...Link.parameters?.docs,source:{originalSource:'{\n  render: function render(args) {\n    return /*#__PURE__*/React.createElement(Dropdown, Object.assign({}, args, {\n      label: /*#__PURE__*/React.createElement("a", null, "Dropdown as a link")\n    }), /*#__PURE__*/React.createElement(MenuElement, null, "Item one"), /*#__PURE__*/React.createElement(MenuElement, null, "Item two"), /*#__PURE__*/React.createElement(MenuElement, {\n      selected: true\n    }, "Item three"), /*#__PURE__*/React.createElement(MenuDivider, null), /*#__PURE__*/React.createElement(MenuGroup, {\n      header: "Group"\n    }, /*#__PURE__*/React.createElement(MenuElement, null, "Item one"), /*#__PURE__*/React.createElement(MenuElement, null, "Item two")), /*#__PURE__*/React.createElement(MenuElement, {\n      icon: "icon-social-facebook"\n    }, "Facebook"), /*#__PURE__*/React.createElement(MenuElement, {\n      icon: "icon-social-twitter"\n    }, "Twitter"), /*#__PURE__*/React.createElement(MenuDivider, null), /*#__PURE__*/React.createElement(Menu, {\n      label: "And with sub menu"\n    }, /*#__PURE__*/React.createElement(MenuElement, null, "Item one"), /*#__PURE__*/React.createElement(MenuElement, null, "Item two"), /*#__PURE__*/React.createElement(MenuElement, {\n      selected: true\n    }, "Item three")));\n  },\n  argTypes: argTypes,\n  parameters: parameters\n}',...Link.parameters?.docs?.source}}}}}]);