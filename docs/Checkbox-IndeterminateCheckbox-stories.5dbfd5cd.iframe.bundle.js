"use strict";(self.webpackChunk_vkumov_react_cui_2_0=self.webpackChunk_vkumov_react_cui_2_0||[]).push([[6598],{"./src/Checkbox/IndeterminateCheckbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_Users_vkumov_Documents_Scripts_react_cui_2_0_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Users_vkumov_Documents_Scripts_react_cui_2_0_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Checkbox/index.ts"),_excluded=["children"];const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Checkbox/Indeterminate",component:_index__WEBPACK_IMPORTED_MODULE_1__.Y};var Default={render:function render(_ref){var children=_ref.children,args=(0,_Users_vkumov_Documents_Scripts_react_cui_2_0_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.Y,args,children)},args:{children:"Some label"},parameters:{docs:{source:{language:"tsx",excludeDecorators:!0}}}};Default.parameters=(0,_Users_vkumov_Documents_Scripts_react_cui_2_0_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,_Users_vkumov_Documents_Scripts_react_cui_2_0_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},Default.parameters),{},{docs:(0,_Users_vkumov_Documents_Scripts_react_cui_2_0_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,_Users_vkumov_Documents_Scripts_react_cui_2_0_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,_Users_vkumov_Documents_Scripts_react_cui_2_0_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({originalSource:'{\n  render: ({\n    children,\n    ...args\n  }) => <IndeterminateCheckbox {...args}>{children}</IndeterminateCheckbox>,\n  args: {\n    children: "Some label"\n  },\n  parameters: {\n    docs: {\n      source: {\n        language: "tsx",\n        excludeDecorators: true\n      }\n    }\n  }\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})})},"./src/Checkbox/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Checkbox,Y:()=>IndeterminateCheckbox});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Conditional=__webpack_require__("./src/Conditional/index.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),cjs_ruleSet_1_rules_8_use_1_css_checkbox=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./css/checkbox.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(cjs_ruleSet_1_rules_8_use_1_css_checkbox.Z,options);cjs_ruleSet_1_rules_8_use_1_css_checkbox.Z&&cjs_ruleSet_1_rules_8_use_1_css_checkbox.Z.locals&&cjs_ruleSet_1_rules_8_use_1_css_checkbox.Z.locals;var _excluded=["inline","asFormGroup","children","spacing"],Checkbox=(0,react.forwardRef)((function(_ref,ref){var _ref$inline=_ref.inline,inline=void 0!==_ref$inline&&_ref$inline,_ref$asFormGroup=_ref.asFormGroup,asFormGroup=void 0===_ref$asFormGroup||_ref$asFormGroup,_ref$children=_ref.children,children=void 0===_ref$children?null:_ref$children,_ref$spacing=_ref.spacing,spacing=void 0===_ref$spacing?null:_ref$spacing,input=(0,objectWithoutProperties.Z)(_ref,_excluded);return react.createElement(Conditional.M,{condition:asFormGroup,wrapper:react.createElement("div",{className:classnames_default()("form-group",(0,defineProperty.Z)({"form-group--inline":inline},"form-group--".concat(spacing),spacing&&"default"!==spacing))})},react.createElement("label",{className:"checkbox"},react.createElement("input",Object.assign({type:"checkbox"},input,{ref})),react.createElement("span",{className:"checkbox__input"}),children?react.createElement("span",{className:"checkbox__label"},children):null))}));try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{inline:{defaultValue:{value:"false"},description:"",name:"inline",required:!1,type:{name:"boolean"}},spacing:{defaultValue:{value:"null"},description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"compressed"'},{value:'"loose"'}]}},asFormGroup:{defaultValue:{value:"true"},description:"",name:"asFormGroup",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"src/Checkbox/Checkbox.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}var useMergeRef=__webpack_require__("./node_modules/use-callback-ref/dist/es2015/useMergeRef.js"),IndeterminateCheckbox_excluded=["indeterminate"],IndeterminateCheckbox=(0,react.forwardRef)((function(_ref,fwd){var indeterminate=_ref.indeterminate,rest=(0,objectWithoutProperties.Z)(_ref,IndeterminateCheckbox_excluded),ref=(0,react.useRef)(null),refs=(0,useMergeRef.q)([ref,fwd]);return(0,react.useEffect)((function(){"boolean"==typeof indeterminate&&(ref.current.indeterminate=!rest.checked&&indeterminate)}),[ref,indeterminate]),react.createElement(Checkbox,Object.assign({ref:refs},rest))}));try{IndeterminateCheckbox.displayName="IndeterminateCheckbox",IndeterminateCheckbox.__docgenInfo={description:"",displayName:"IndeterminateCheckbox",props:{inline:{defaultValue:null,description:"",name:"inline",required:!1,type:{name:"boolean"}},spacing:{defaultValue:null,description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"compressed"'},{value:'"loose"'}]}},asFormGroup:{defaultValue:null,description:"",name:"asFormGroup",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:null,description:"",name:"indeterminate",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Checkbox/IndeterminateCheckbox.tsx#IndeterminateCheckbox"]={docgenInfo:IndeterminateCheckbox.__docgenInfo,name:"IndeterminateCheckbox",path:"src/Checkbox/IndeterminateCheckbox.tsx#IndeterminateCheckbox"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./css/checkbox.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".cui .checkbox input.indeterminate ~ .checkbox__input::after,\n.cui .checkbox input:indeterminate ~ .checkbox__input::after {\n  position: absolute;\n  display: block;\n  left: 6px;\n  top: 3px;\n  width: 0px;\n  height: 8px;\n  color: transparent;\n  border: var(--cui-border-form-color) solid;\n  border-width: 0 2px 0px 0;\n  transform: rotate(90deg);\n  opacity: 1;\n}\n","",{version:3,sources:["webpack://./css/checkbox.css"],names:[],mappings:"AAAA;;EAEE,kBAAkB;EAClB,cAAc;EACd,SAAS;EACT,QAAQ;EACR,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,0CAA0C;EAC1C,yBAAyB;EACzB,wBAAwB;EACxB,UAAU;AACZ",sourcesContent:[".cui .checkbox input.indeterminate ~ .checkbox__input::after,\n.cui .checkbox input:indeterminate ~ .checkbox__input::after {\n  position: absolute;\n  display: block;\n  left: 6px;\n  top: 3px;\n  width: 0px;\n  height: 8px;\n  color: transparent;\n  border: var(--cui-border-form-color) solid;\n  border-width: 0 2px 0px 0;\n  transform: rotate(90deg);\n  opacity: 1;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/use-callback-ref/dist/es2015/useMergeRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>useMergeRefs});var react=__webpack_require__("./node_modules/react/index.js");function useMergeRefs(refs,defaultValue){return function useCallbackRef(initialValue,callback){var ref=(0,react.useState)((function(){return{value:initialValue,callback,facade:{get current(){return ref.value},set current(value){var last=ref.value;last!==value&&(ref.value=value,ref.callback(value,last))}}}}))[0];return ref.callback=callback,ref.facade}(defaultValue||null,(function(newValue){return refs.forEach((function(ref){return function assignRef(ref,value){return"function"==typeof ref?ref(value):ref&&(ref.current=value),ref}(ref,newValue)}))}))}}}]);