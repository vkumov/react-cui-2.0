"use strict";(self.webpackChunk_vkumov_react_cui_2_0=self.webpackChunk_vkumov_react_cui_2_0||[]).push([[3723],{"./src/Switch/Switch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>Switch_stories});var _Default$parameters,_Default$parameters2,_Default$parameters2$,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Conditional=__webpack_require__("./src/Conditional/index.ts"),_excluded=["left","right","disabled","inline","spacing","asFormGroup","className","id","style"],Switch=(0,react.forwardRef)((function(_ref,forwardedRef){var _cx,_ref$left=_ref.left,left=void 0===_ref$left?null:_ref$left,_ref$right=_ref.right,right=void 0===_ref$right?null:_ref$right,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$inline=_ref.inline,inline=void 0!==_ref$inline&&_ref$inline,_ref$spacing=_ref.spacing,spacing=void 0===_ref$spacing?null:_ref$spacing,_ref$asFormGroup=_ref.asFormGroup,asFormGroup=void 0===_ref$asFormGroup||_ref$asFormGroup,_ref$className=_ref.className,className=void 0===_ref$className?null:_ref$className,_ref$id=_ref.id,id=void 0===_ref$id?null:_ref$id,_ref$style=_ref.style,style=void 0===_ref$style?null:_ref$style,input=(0,objectWithoutProperties.Z)(_ref,_excluded);return react.createElement(Conditional.M,{condition:asFormGroup,wrapper:react.createElement("div",{className:classnames_default()("form-group",(_cx={"form-group--inline":inline},(0,defineProperty.Z)(_cx,"form-group--".concat(spacing),spacing),(0,defineProperty.Z)(_cx,className,className),_cx)),style})},react.createElement("label",{className:"switch".concat(disabled?" disabled":""),htmlFor:id||input.name},react.createElement("input",Object.assign({type:"checkbox"},input,{id:id||input.name,checked:input.checked,ref:forwardedRef})),left?react.createElement("span",{className:"switch__label"},left):null,react.createElement("span",{className:"switch__input"}),right?react.createElement("span",{className:"switch__label"},right):null))}));try{Switch.displayName="Switch",Switch.__docgenInfo={description:"",displayName:"Switch",props:{left:{defaultValue:{value:"null"},description:"",name:"left",required:!1,type:{name:"ReactNode"}},right:{defaultValue:{value:"null"},description:"",name:"right",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},inline:{defaultValue:{value:"false"},description:"",name:"inline",required:!1,type:{name:"boolean"}},spacing:{defaultValue:{value:"null"},description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"compressed"'},{value:'"loose"'}]}},asFormGroup:{defaultValue:{value:"true"},description:"",name:"asFormGroup",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:"null"},description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:{value:"null"},description:"",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:{value:"null"},description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Switch/Switch.tsx#Switch"]={docgenInfo:Switch.__docgenInfo,name:"Switch",path:"src/Switch/Switch.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}const Switch_stories={title:"Components/Switch",component:Switch,parameters:{docs:{source:{language:"tsx",excludeDecorators:!0}}}};var Default={render:function render(args){return react.createElement(Switch,args)},args:{right:"This is switch"}};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  render: args => <Switch {...args} />,\n  args: {\n    right: "This is switch"\n  }\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})})}}]);