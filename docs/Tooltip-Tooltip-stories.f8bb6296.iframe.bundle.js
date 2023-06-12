"use strict";(self.webpackChunk_vkumov_react_cui_2_0=self.webpackChunk_vkumov_react_cui_2_0||[]).push([[2724],{"./src/Tooltip/Tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Tooltip:()=>Tooltip,default:()=>Tooltip_stories});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),floating_ui_react_esm=__webpack_require__("./node_modules/@floating-ui/react/dist/floating-ui.react.esm.js"),floating_ui_core_browser_min=__webpack_require__("./node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs"),floating_ui_react_dom_esm=__webpack_require__("./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js"),Transition=__webpack_require__("./node_modules/react-transition-group/esm/Transition.js"),FloatingProvider=__webpack_require__("./src/FloatingProvider/index.ts"),_excluded=["className","children"],_excluded2=["children","tooltip","placement"],_excluded3=["getReferenceProps","refs"],TooltipContent=(0,react.forwardRef)((function TooltipRefed(_ref,ref){var className=_ref.className,children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return react.createElement("div",Object.assign({ref,className:"tooltip__wrapper"},props),react.createElement("div",{className},children))}));function useTooltip(placement){var _useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),show=_useState2[0],setShow=_useState2[1],arrowRef=(0,react.useRef)(null),fl=(0,floating_ui_react_esm.YF)({middleware:[(0,floating_ui_core_browser_min.cv)(6),(0,floating_ui_core_browser_min.RR)(),(0,floating_ui_core_browser_min.uY)({padding:{left:8,right:8}}),(0,floating_ui_react_dom_esm.x7)({element:arrowRef})],open:show,onOpenChange:setShow,placement}),role=(0,floating_ui_react_esm.qs)(fl.context,{role:"tooltip"}),hover=(0,floating_ui_react_esm.XI)(fl.context,{delay:{open:500,close:0},move:!1}),_useInteractions=(0,floating_ui_react_esm.NI)([role,hover]),getReferenceProps=_useInteractions.getReferenceProps,getFloatingProps=_useInteractions.getFloatingProps;return(0,react.useMemo)((function(){return(0,objectSpread2.Z)((0,objectSpread2.Z)({},fl),{},{getFloatingProps,show,getReferenceProps,arrowRef})}),[getFloatingProps,show,getReferenceProps,arrowRef,fl])}var TooltipWrapper=function TooltipWrapper(_ref2){var children=_ref2.children,x=_ref2.x,y=_ref2.y,show=_ref2.show,strategy=_ref2.strategy,getFloatingProps=_ref2.getFloatingProps,middlewareData=_ref2.middlewareData,arrowRef=_ref2.arrowRef,placement=_ref2.placement,rootProvided=_ref2.root,portalId=_ref2.portalId,refs=_ref2.refs,_ref3=middlewareData.arrow||{x:0,y:0},arrowX=_ref3.x,arrowY=_ref3.y,floatingRef=(0,react.useRef)(null),staticSide={top:"bottom",right:"left",bottom:"top",left:"right"}[placement.split("-")[0]],_useFloatingContext=(0,FloatingProvider.i0)({root:rootProvided,portalId,fallbackPortalId:"--cui-tooltip-portal"}),root=_useFloatingContext.root,id=_useFloatingContext.id,ref=(0,floating_ui_react_esm.qq)([refs.setFloating,floatingRef]);return react.createElement(floating_ui_react_esm.ll,{root,id},react.createElement(Transition.ZP,{in:show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,nodeRef:floatingRef},(function(state){return react.createElement(TooltipContent,Object.assign({ref,style:{position:strategy,top:null!=y?y:0,left:null!=x?x:0}},getFloatingProps({className:"tooltip__body ".concat("exiting"===state||"exited"===state?"tooltip--disappear":"tooltip--appear")})),children,react.createElement("div",{ref:arrowRef,className:"tooltip__arrow",style:(0,defineProperty.Z)({left:null!=arrowX?"".concat(arrowX,"px"):"",top:null!=arrowY?"".concat(arrowY,"px"):"",right:"",bottom:""},staticSide,"-4px")}))})))},WithTooltip=(0,react.forwardRef)((function(_ref5,forwardedRef){var children=_ref5.children,tooltip=_ref5.tooltip,_ref5$placement=_ref5.placement,placement=void 0===_ref5$placement?"top":_ref5$placement,props=(0,objectWithoutProperties.Z)(_ref5,_excluded2),_useTooltip=useTooltip(placement),getReferenceProps=_useTooltip.getReferenceProps,refs=_useTooltip.refs,tt=(0,objectWithoutProperties.Z)(_useTooltip,_excluded3),ref=(0,floating_ui_react_esm.qq)([refs.setReference,forwardedRef,children.ref]);return react.createElement(react.Fragment,null,(0,react.cloneElement)(children,getReferenceProps((0,objectSpread2.Z)((0,objectSpread2.Z)({ref},children.props),props))),react.createElement(TooltipWrapper,Object.assign({refs},tt),tooltip))}));WithTooltip.displayName="WithTooltip";try{useTooltip.displayName="WithTooltip",useTooltip.__docgenInfo={description:"",displayName:"WithTooltip",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Tooltip/Tooltip.tsx#WithTooltip"]={docgenInfo:WithTooltip.__docgenInfo,name:"WithTooltip",path:"src/Tooltip/Tooltip.tsx#WithTooltip"})}catch(__react_docgen_typescript_loader_error){}var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),tooltip=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./css/tooltip.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(tooltip.Z,options);tooltip.Z&&tooltip.Z.locals&&tooltip.Z.locals;var _Tooltip$parameters,_Tooltip$parameters2,_Tooltip$parameters2$;const Tooltip_stories={title:"Components/Tooltip",component:WithTooltip,parameters:{docs:{source:{language:"tsx",excludeDecorators:!0}}}};var Tooltip=function Tooltip(args){return react.createElement(WithTooltip,args,react.createElement("span",null,"Hover over me!"))};Tooltip.parameters={},Tooltip.args={placement:"top",tooltip:"This is a tooltip!"},Tooltip.argTypes={},Tooltip.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Tooltip.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Tooltip$parameters=Tooltip.parameters)||void 0===_Tooltip$parameters?void 0:_Tooltip$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => {\n  return <WithTooltip {...args}>\n      <span>Hover over me!</span>\n    </WithTooltip>;\n}"},null===(_Tooltip$parameters2=Tooltip.parameters)||void 0===_Tooltip$parameters2||null===(_Tooltip$parameters2$=_Tooltip$parameters2.docs)||void 0===_Tooltip$parameters2$?void 0:_Tooltip$parameters2$.source)})})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./css/tooltip.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".tooltip__wrapper {\n  z-index: 2002;\n  outline: none !important;\n}\n\n.tooltip__body {\n  font-weight: normal;\n  font-style: normal;\n  text-shadow: none;\n  font-size: 1.2rem !important;\n  background: rgba(88, 88, 91, 0.99);\n  border-radius: 4px;\n  color: #fff;\n  white-space: nowrap;\n  padding: var(--cui-spacing-qtr) var(--cui-spacing-half);\n}\n\n.tooltip__arrow {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  background: rgba(88, 88, 91, 0.99);\n  transform: rotate(45deg);\n}\n\n@-webkit-keyframes blowup80 {\n  0% {\n    transform: scale(0.8); }\n  100% {\n    transform: scale(1); } }\n\n@keyframes blowup80 {\n  0% {\n    transform: scale(0.8); }\n  100% {\n    transform: scale(1); } }\n\n@-webkit-keyframes blowdown80 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0.8); } }\n\n@keyframes blowdown80 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0.8); } }\n\n.tooltip__body.tooltip--appear {\n  animation: blowup80 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards, fade-in 0.2s 1 linear !important;\n}\n\n.tooltip__body.tooltip--disappear {\n  animation: blowdown80 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards, fade-out 0.2s 1 linear !important;\n}","",{version:3,sources:["webpack://./css/tooltip.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,wBAAwB;AAC1B;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;EACjB,4BAA4B;EAC5B,kCAAkC;EAClC,kBAAkB;EAClB,WAAW;EACX,mBAAmB;EACnB,uDAAuD;AACzD;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,kCAAkC;EAClC,wBAAwB;AAC1B;;AAEA;EACE;IACE,qBAAqB,EAAE;EACzB;IACE,mBAAmB,EAAE,EAAE;;AAE3B;EACE;IACE,qBAAqB,EAAE;EACzB;IACE,mBAAmB,EAAE,EAAE;;AAE3B;EACE;IACE,mBAAmB,EAAE;EACvB;IACE,qBAAqB,EAAE,EAAE;;AAE7B;EACE;IACE,mBAAmB,EAAE;EACvB;IACE,qBAAqB,EAAE,EAAE;;AAE7B;EACE,sGAAsG;AACxG;;AAEA;EACE,yGAAyG;AAC3G",sourcesContent:[".tooltip__wrapper {\n  z-index: 2002;\n  outline: none !important;\n}\n\n.tooltip__body {\n  font-weight: normal;\n  font-style: normal;\n  text-shadow: none;\n  font-size: 1.2rem !important;\n  background: rgba(88, 88, 91, 0.99);\n  border-radius: 4px;\n  color: #fff;\n  white-space: nowrap;\n  padding: var(--cui-spacing-qtr) var(--cui-spacing-half);\n}\n\n.tooltip__arrow {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  background: rgba(88, 88, 91, 0.99);\n  transform: rotate(45deg);\n}\n\n@-webkit-keyframes blowup80 {\n  0% {\n    transform: scale(0.8); }\n  100% {\n    transform: scale(1); } }\n\n@keyframes blowup80 {\n  0% {\n    transform: scale(0.8); }\n  100% {\n    transform: scale(1); } }\n\n@-webkit-keyframes blowdown80 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0.8); } }\n\n@keyframes blowdown80 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0.8); } }\n\n.tooltip__body.tooltip--appear {\n  animation: blowup80 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards, fade-in 0.2s 1 linear !important;\n}\n\n.tooltip__body.tooltip--disappear {\n  animation: blowdown80 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards, fade-out 0.2s 1 linear !important;\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);