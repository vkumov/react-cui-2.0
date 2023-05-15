"use strict";(self.webpackChunk_vkumov_react_cui_2_0=self.webpackChunk_vkumov_react_cui_2_0||[]).push([[9234],{"./src/Dropzone/Dropzone.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>Dropzone_stories});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),bytes=__webpack_require__("./node_modules/bytes/index.js"),bytes_default=__webpack_require__.n(bytes),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),es=__webpack_require__("./node_modules/react-dropzone/dist/es/index.js"),useEvent=__webpack_require__("./node_modules/react-use-event-hook/dist/esm/useEvent.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),dropzone=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./css/dropzone.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(dropzone.Z,options);dropzone.Z&&dropzone.Z.locals&&dropzone.Z.locals;var _Default$parameters,_Default$parameters2,_Default$parameters2$,_excluded=["error","loose","compressed","inline","label","name","value","maxFileSize","maxFiles","onChange","showTotalSelected"],FileCard=function FileCard(_ref){var file=_ref.file,i=_ref.i,removeFile=_ref.removeFile,inline=_ref.inline;return react.createElement("div",{className:"file-drop__card col-lg-4 col-md-6 col-sm-6",key:"".concat(i,"-").concat(file.name)},react.createElement("div",{className:"panel panel--bordered hover-emboss--small",onClick:function onClick(e){return e.stopPropagation()}},inline?react.createElement("div",{className:"panel__body flex flex-row"},react.createElement("div",{className:"text-left flex-fill",style:{maxWidth:"calc(100% - 20px)"}},react.createElement("div",{className:"text-ellipsis"},file.name),react.createElement("small",{style:{whiteSpace:"nowrap"}},bytes_default().format(file.size,{unitSeparator:" "}))),react.createElement("a",{className:"link pull-right",onClick:function onClick(){return removeFile(i)}},react.createElement("span",{className:"icon-close",title:"Remove the file."}))):react.createElement("div",{className:"panel__body"},react.createElement("a",{className:"link pull-right",style:{marginRight:"5px"},onClick:function onClick(){return removeFile(i)}},react.createElement("span",{className:"icon-close",title:"Remove the file."})),react.createElement("div",{className:"text-ellipsis half-margin-bottom"},file.name),react.createElement("span",{className:"file-icon text-muted icon-file-o qtr-margin-right"}),react.createElement("small",null,bytes_default().format(file.size,{unitSeparator:" "})))))},DropzoneMessage=function DropzoneMessage(_ref2){var inline=_ref2.inline,accept=_ref2.accept,maxFileSize=_ref2.maxFileSize;return inline?react.createElement("div",{className:"dropzone-message flex flex-row flex-center-vertical"},react.createElement("h5",{className:"text-muted text-left flex-fill no-margin"},"Click Here or Drop Files to Upload"),accept&&react.createElement("span",{className:"text-muted text-small half-margin-right"},"Allowed files: ","string"==typeof accept?accept.split(",").join(", "):accept),react.createElement("span",{className:"file-drop__icon icon-upload"})):react.createElement("div",{className:"dropzone-message"},react.createElement("span",{className:"file-drop__icon icon-upload"}),react.createElement("h4",{className:"text-muted"},"Click Here or Drop Files to Upload"),accept&&react.createElement("div",{className:"text-muted"},"Allowed files: ",accept.split(",").join(", ")),maxFileSize&&react.createElement("div",{className:"text-muted"},"Max file size: ",bytes_default().format(maxFileSize,{unitSeparator:" "})))},DropzoneFiles=function DropzoneFiles(_ref3){var files=_ref3.files,inline=_ref3.inline,showTotalSelected=_ref3.showTotalSelected,removeFile=_ref3.removeFile;return Array.isArray(files)&&files.length?react.createElement("div",{className:"dropzone-previews"},react.createElement("div",{className:"file-drop__container container--fluid"},react.createElement("div",{className:"row"},files.map((function(file,i){return react.createElement(FileCard,{key:i,file,i,inline,removeFile})})))),showTotalSelected?react.createElement("div",{className:"file-drop__filecnt"},files.length," selected"):null):null},Dropzone=function Dropzone(_ref4){var error=_ref4.error,loose=_ref4.loose,compressed=_ref4.compressed,inline=_ref4.inline,label=_ref4.label,name=_ref4.name,value=_ref4.value,customMaxFileSize=_ref4.maxFileSize,maxFiles=_ref4.maxFiles,onChange=_ref4.onChange,showTotalSelected=_ref4.showTotalSelected,props=(0,objectWithoutProperties.Z)(_ref4,_excluded),maxFileSize=(0,react.useMemo)((function(){return customMaxFileSize?bytes_default().parse(customMaxFileSize):null}),[customMaxFileSize]),padding=(0,react.useMemo)((function(){var tmp="";if(loose&&(tmp="dropzone--loose"),compressed&&(tmp="dropzone--compressed"),inline&&Array.isArray(value)&&value.length)switch(tmp){case"dropzone--loose":tmp="".concat(tmp," half-padding-bottom");break;case"dropzone--compressed":tmp="".concat(tmp," no-padding-bottom");break;default:tmp="".concat(tmp," qtr-padding-bottom")}return tmp}),[loose,compressed,value,inline]),handleDrop=(0,useEvent.Z)((function(filesToUpload){maxFileSize&&(filesToUpload=filesToUpload.filter((function(file){return file.size<=maxFileSize}))),maxFiles&&filesToUpload.length>maxFiles&&(filesToUpload=filesToUpload.slice(0,maxFiles)),onChange(filesToUpload)})),removeFile=function removeFile(toRemove){onChange(Array.isArray(value)?value.filter((function(_,idx){return toRemove!==idx})):value)};return react.createElement("div",{className:classnames_default()("form-group",{"form-group--error":error})},react.createElement("div",{className:"form-group__text"},label?react.createElement("label",{htmlFor:name},label):null,react.createElement(es.ZP,Object.assign({},props,{onDrop:handleDrop,maxSize:maxFileSize}),(function(_ref5){var getRootProps=_ref5.getRootProps,getInputProps=_ref5.getInputProps;return react.createElement("div",Object.assign({className:"dropzone ".concat(padding)},getRootProps()),react.createElement("input",getInputProps()),react.createElement(DropzoneFiles,{files:value,showTotalSelected,inline,removeFile}),Array.isArray(value)&&value.length?null:react.createElement(DropzoneMessage,{maxFileSize,inline,accept:props.accept}))}))),error?react.createElement("div",{className:"help-block text-danger",role:"alert"},react.createElement("span",null,error)):null)};try{Dropzone.displayName="Dropzone",Dropzone.__docgenInfo={description:"",displayName:"Dropzone",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any[]"}},maxFiles:{defaultValue:null,description:"",name:"maxFiles",required:!1,type:{name:"number"}},inline:{defaultValue:null,description:"",name:"inline",required:!1,type:{name:"boolean"}},showTotalSelected:{defaultValue:null,description:"",name:"showTotalSelected",required:!1,type:{name:"boolean"}},accept:{defaultValue:null,description:"",name:"accept",required:!1,type:{name:"string & Accept"}},loose:{defaultValue:null,description:"",name:"loose",required:!1,type:{name:"boolean"}},compressed:{defaultValue:null,description:"",name:"compressed",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},maxFileSize:{defaultValue:null,description:"",name:"maxFileSize",required:!1,type:{name:"string | number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: File[]) => void"}},minSize:{defaultValue:null,description:"",name:"minSize",required:!1,type:{name:"number"}},maxSize:{defaultValue:null,description:"",name:"maxSize",required:!1,type:{name:"number"}},preventDropOnDocument:{defaultValue:null,description:"",name:"preventDropOnDocument",required:!1,type:{name:"boolean"}},noClick:{defaultValue:null,description:"",name:"noClick",required:!1,type:{name:"boolean"}},noKeyboard:{defaultValue:null,description:"",name:"noKeyboard",required:!1,type:{name:"boolean"}},noDrag:{defaultValue:null,description:"",name:"noDrag",required:!1,type:{name:"boolean"}},noDragEventsBubbling:{defaultValue:null,description:"",name:"noDragEventsBubbling",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onDrop:{defaultValue:null,description:"",name:"onDrop",required:!1,type:{name:"<T extends File>(acceptedFiles: T[], fileRejections: FileRejection[], event: DropEvent) => void"}},onDropAccepted:{defaultValue:null,description:"",name:"onDropAccepted",required:!1,type:{name:"<T extends File>(files: T[], event: DropEvent) => void"}},onDropRejected:{defaultValue:null,description:"",name:"onDropRejected",required:!1,type:{name:"(fileRejections: FileRejection[], event: DropEvent) => void"}},getFilesFromEvent:{defaultValue:null,description:"",name:"getFilesFromEvent",required:!1,type:{name:"(event: DropEvent) => Promise<(File | DataTransferItem)[]>"}},onFileDialogCancel:{defaultValue:null,description:"",name:"onFileDialogCancel",required:!1,type:{name:"() => void"}},onFileDialogOpen:{defaultValue:null,description:"",name:"onFileDialogOpen",required:!1,type:{name:"() => void"}},onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"(err: Error) => void"}},validator:{defaultValue:null,description:"",name:"validator",required:!1,type:{name:"<T extends File>(file: T) => FileError | FileError[]"}},useFsAccessApi:{defaultValue:null,description:"",name:"useFsAccessApi",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Dropzone/Dropzone.tsx#Dropzone"]={docgenInfo:Dropzone.__docgenInfo,name:"Dropzone",path:"src/Dropzone/Dropzone.tsx#Dropzone"})}catch(__react_docgen_typescript_loader_error){}const Dropzone_stories={title:"Components/Dropzone",component:Dropzone};var Default={render:function render(args){return react.createElement(Dropzone,Object.assign({},args,{onChange:function onChange(v){return console.log(v)}}))},args:{name:"dropzone",label:"Select files"},parameters:{docs:{source:{language:"tsx",excludeDecorators:!0}}}};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  render: args => {\n    return <Dropzone {...args} onChange={v => console.log(v)} />;\n  },\n  args: {\n    name: "dropzone",\n    label: "Select files"\n  },\n  parameters: {\n    docs: {\n      source: {\n        language: "tsx",\n        excludeDecorators: true\n      }\n    }\n  }\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./css/dropzone.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".cui .dropzone {\n    border: 1px dashed #dfdfdf;\n    cursor: pointer;\n    text-align: center;\n    height: auto;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    color: #58585b;\n    position: relative;\n    background: #ffffff;\n    box-shadow: none;\n    display: block;\n    margin: 0;\n    padding: 10px;\n}\n\n.cui .dropzone:focus {\n    outline: none;\n    box-shadow: inset 0 0 0 2px rgba(1, 124, 173, 0.25);\n}\n\n.cui .dropzone:hover, .dropzone.dropzone-drag-hover {\n    border-color: #049fd9;\n}\n\n.cui .dropzone.dropzone--loose {\n    padding: 20px;\n}\n\n.cui .dropzone.dropzone--compressed {\n    padding: 5px;\n}\n\n.cui .dropzone:hover .file-drop__icon, .dropzone.dropzone-drag-hover .file-drop__icon {\n    color: #049fd9;\n}\n\n.cui .dropzone .dropzone-message .file-drop__icon {\n    font-size: 2rem;\n}\n\n.cui .dropzone .dropzone-previews {\n    \n}\n\n.cui .dropzone .dropzone-previews .file-drop__filecnt {\n    text-align: left;\n    color: #9e9ea2;\n    margin-top: 1.3125rem;\n}\n\n.cui .dropzone .file-drop__card {\n    margin-bottom: .625rem;\n}\n\n.cui .form-group--error .dropzone {\n    padding-right: 40px;\n    border-color: #e2231a;\n}","",{version:3,sources:["webpack://./css/dropzone.css"],names:[],mappings:"AAAA;IACI,0BAA0B;IAC1B,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,6CAA6C;IAC7C,cAAc;IACd,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,cAAc;IACd,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mDAAmD;AACvD;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,eAAe;AACnB;;AAEA;;AAEA;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;IACnB,qBAAqB;AACzB",sourcesContent:[".cui .dropzone {\n    border: 1px dashed #dfdfdf;\n    cursor: pointer;\n    text-align: center;\n    height: auto;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    color: #58585b;\n    position: relative;\n    background: #ffffff;\n    box-shadow: none;\n    display: block;\n    margin: 0;\n    padding: 10px;\n}\n\n.cui .dropzone:focus {\n    outline: none;\n    box-shadow: inset 0 0 0 2px rgba(1, 124, 173, 0.25);\n}\n\n.cui .dropzone:hover, .dropzone.dropzone-drag-hover {\n    border-color: #049fd9;\n}\n\n.cui .dropzone.dropzone--loose {\n    padding: 20px;\n}\n\n.cui .dropzone.dropzone--compressed {\n    padding: 5px;\n}\n\n.cui .dropzone:hover .file-drop__icon, .dropzone.dropzone-drag-hover .file-drop__icon {\n    color: #049fd9;\n}\n\n.cui .dropzone .dropzone-message .file-drop__icon {\n    font-size: 2rem;\n}\n\n.cui .dropzone .dropzone-previews {\n    \n}\n\n.cui .dropzone .dropzone-previews .file-drop__filecnt {\n    text-align: left;\n    color: #9e9ea2;\n    margin-top: 1.3125rem;\n}\n\n.cui .dropzone .file-drop__card {\n    margin-bottom: .625rem;\n}\n\n.cui .form-group--error .dropzone {\n    padding-right: 40px;\n    border-color: #e2231a;\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);