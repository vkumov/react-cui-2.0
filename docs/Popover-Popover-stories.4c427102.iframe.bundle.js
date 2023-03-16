"use strict";(self.webpackChunk_vkumov_react_cui_2_0=self.webpackChunk_vkumov_react_cui_2_0||[]).push([[4388],{"./src/Popover/Popover.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _templateObject,_Default$parameters,_Default$parameters2,_Default$parameters2$,_Users_vkumov_Documents_Scripts_react_cui_2_0_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Users_vkumov_Documents_Scripts_react_cui_2_0_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ts_dedent__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/ts-dedent/esm/index.js"),_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Button/index.ts"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Popover/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Popover",component:___WEBPACK_IMPORTED_MODULE_2__.J2,parameters:{docs:{source:{language:"tsx",excludeDecorators:!0}}}};var Default={render:function Render(args){var _usePopover=(0,___WEBPACK_IMPORTED_MODULE_2__.Sv)({offset:8}),refs=_usePopover.refs,open=_usePopover.open,render=_usePopover.render;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"section base-margin-top dbl-margin-bottom"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",{className:"display-5"},"Popover (Using FloatingUI)"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"col text-center"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_2__.J2,Object.assign({},args,{element:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.z,null,"Click me!")}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_2__.so,null,"Popover title!"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"And body here!"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"col text-center"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.z,{onContextMenu:function onContextMenu(e){e.preventDefault(),refs.setReference(e.currentTarget),open()}},"Right click on me!"),render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"Hey!")))))},args:{placement:"top"},parameters:{docs:{source:{code:(0,ts_dedent__WEBPACK_IMPORTED_MODULE_3__.C)(_templateObject||(_templateObject=(0,_Users_vkumov_Documents_Scripts_react_cui_2_0_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(['function Render() {\n          const { refs, open, render } = usePopover({\n            offset: 8,\n          });\n      \n          return (\n            <div className="section base-margin-top dbl-margin-bottom">\n              <h3 className="display-5">Popover (Using FloatingUI)</h3>\n              <div className="row">\n                <div className="col text-center">\n                  <Popover element={<Button>Click me!</Button>}>\n                    <PopoverTitle>Popover title!</PopoverTitle>\n                    <div>And body here!</div>\n                  </Popover>\n                </div>\n                <div className="col text-center">\n                  <Button\n                    onContextMenu={(e) => {\n                      e.preventDefault();\n                      refs.setReference(e.currentTarget);\n                      open();\n                    }}\n                  >\n                    Right click on me!\n                  </Button>\n                  {render(<>Hey!</>)}\n                </div>\n              </div>\n            </div>\n          );\n        }'])))}}}};Default.parameters=(0,_Users_vkumov_Documents_Scripts_react_cui_2_0_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_Users_vkumov_Documents_Scripts_react_cui_2_0_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},Default.parameters),{},{docs:(0,_Users_vkumov_Documents_Scripts_react_cui_2_0_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_Users_vkumov_Documents_Scripts_react_cui_2_0_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,_Users_vkumov_Documents_Scripts_react_cui_2_0_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({originalSource:'{\n  render: function Render(args) {\n    const {\n      refs,\n      open,\n      render\n    } = usePopover({\n      offset: 8\n    });\n    return <div className="section base-margin-top dbl-margin-bottom">\n        <h3 className="display-5">Popover (Using FloatingUI)</h3>\n        <div className="row">\n          <div className="col text-center">\n            <Popover {...args} element={<Button>Click me!</Button>}>\n              <PopoverTitle>Popover title!</PopoverTitle>\n              <div>And body here!</div>\n            </Popover>\n          </div>\n          <div className="col text-center">\n            <Button onContextMenu={e => {\n            e.preventDefault();\n            refs.setReference(e.currentTarget);\n            open();\n          }}>\n              Right click on me!\n            </Button>\n            {render(<>Hey!</>)}\n          </div>\n        </div>\n      </div>;\n  },\n  args: {\n    placement: "top"\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: dedent`function Render() {\n          const { refs, open, render } = usePopover({\n            offset: 8,\n          });\n      \n          return (\n            <div className="section base-margin-top dbl-margin-bottom">\n              <h3 className="display-5">Popover (Using FloatingUI)</h3>\n              <div className="row">\n                <div className="col text-center">\n                  <Popover element={<Button>Click me!</Button>}>\n                    <PopoverTitle>Popover title!</PopoverTitle>\n                    <div>And body here!</div>\n                  </Popover>\n                </div>\n                <div className="col text-center">\n                  <Button\n                    onContextMenu={(e) => {\n                      e.preventDefault();\n                      refs.setReference(e.currentTarget);\n                      open();\n                    }}\n                  >\n                    Right click on me!\n                  </Button>\n                  {render(<>Hey!</>)}\n                </div>\n              </div>\n            </div>\n          );\n        }`\n      }\n    }\n  }\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})})}}]);