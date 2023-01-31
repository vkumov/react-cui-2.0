function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{Promise.resolve(value).then(_next,_throw)}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(undefined)})}}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&iter[Symbol.iterator]!=null||iter["@@iterator"]!=null)return Array.from(iter)}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==="function"){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))}ownKeys.forEach(function(key){_defineProperty(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})}keys.push.apply(keys,symbols)}return keys}function _objectSpreadProps(target,source){source=source!=null?source:{};if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}return target}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread()}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(n);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}var __generator=this&&this.__generator||function(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break}if(t[2])_.ops.pop();_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e];y=0}finally{f=t=0}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true}}};import React,{forwardRef,cloneElement}from"react";import{appendClass}from"../utils/index.js";import{useFloatingNodeId,useFloatingParentNodeId,useFloating,useClick,useRole,useDismiss,useInteractions,FloatingPortal,FloatingNode,FloatingOverlay,FloatingFocusManager,FloatingTree}from"@floating-ui/react";import{Transition}from"react-transition-group";import{DisplayIf,ConditionalWrapper}from"../Conditional/index.js";import{useFloatingContext}from"../FloatingProvider/index.js";import{Button}from"../Button/index.js";import{Input}from"../Input/index.js";import{nanoid}from"nanoid";import{eventManager}from"../utils/eventManager.js";function _extends$4(){_extends$4=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends$4.apply(this,arguments)}var ModalHeader=function(_param){var _className=_param.className,className=_className===void 0?null:_className,children=_param.children,props=_objectWithoutProperties(_param,["className","children"]);return React.createElement("div",_extends$4({className:"modal__header".concat(appendClass(className))},props),children)};function _extends$3(){_extends$3=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends$3.apply(this,arguments)}var ModalFooter=forwardRef(function(_param,ref){var _className=_param.className,className=_className===void 0?null:_className,children=_param.children,props=_objectWithoutProperties(_param,["className","children"]);return React.createElement("div",_extends$3({className:"modal__footer".concat(appendClass(className))},props,{ref:ref}),children)});function _extends$2(){_extends$2=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends$2.apply(this,arguments)}var ModalBody=forwardRef(function(_param,ref){var _className=_param.className,className=_className===void 0?null:_className,children=_param.children,props=_objectWithoutProperties(_param,["className","children"]);return React.createElement("div",_extends$2({className:"modal__body".concat(appendClass(className))},props,{ref:ref}),children)});function _extends$1(){_extends$1=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends$1.apply(this,arguments)}var Modal=function(param){var _size=param.size,size=_size===void 0?null:_size,_autoClose=param.autoClose,autoClose=_autoClose===void 0?true:_autoClose,_animationDuration=param.animationDuration,animationDuration=_animationDuration===void 0?250:_animationDuration,_closeIcon=param.closeIcon,closeIcon=_closeIcon===void 0?false:_closeIcon,_title=param.title,title=_title===void 0?null:_title,_closeHandle=param.closeHandle,closeHandle=_closeHandle===void 0?null:_closeHandle,_left=param.left,left=_left===void 0?false:_left,_transitionEvents=param.transitionEvents,transitionEvents=_transitionEvents===void 0?null:_transitionEvents,_dialogProps=param.dialogProps,dialogProps=_dialogProps===void 0?null:_dialogProps,_contentProps=param.contentProps,contentProps=_contentProps===void 0?null:_contentProps,_maximize=param.maximize,maximize=_maximize===void 0?false:_maximize,children=param.children,isOpen=param.isOpen,refElement=param.refElement,rootProvided=param.root,lockScroll=param.lockScroll,ancestorScroll=param.ancestorScroll,portalId=param.portalId;var ref=_slicedToArray(React.useState(false),2),maximized=ref[0],setMaximized=ref[1];React.useEffect(function(){return setMaximized(false)},[isOpen]);var realSize=React.useMemo(function(){return maximized?"full":size},[maximized,size]);var modalContext=useFloatingContext();var root=(rootProvided!==null&&rootProvided!==void 0?rootProvided:modalContext)?modalContext.rootRef.current:undefined;var nodeId=useFloatingNodeId();var parentId=useFloatingParentNodeId();var ref1=useFloating({open:isOpen,onOpenChange:function(state){return!state?void closeHandle():void 0},nodeId:nodeId}),reference=ref1.reference,floating=ref1.floating,context=ref1.context;React.useEffect(function(){if(refElement)reference(refElement)},[refElement]);var click=useClick(context);var role=useRole(context,{role:"dialog"});var dismiss=useDismiss(context,{enabled:autoClose,ancestorScroll:ancestorScroll,bubbles:false,outsidePress:function outsidePress(){if(!parentId)return false;return true}});var getFloatingProps=useInteractions([click,role,dismiss]).getFloatingProps;var nodeRef=React.useRef(null);var t=React.createElement(FloatingPortal,{root:root,id:portalId},React.createElement(Transition,_extends$1({in:isOpen,mountOnEnter:true,unmountOnExit:true,timeout:animationDuration,nodeRef:nodeRef},transitionEvents),function(state){return React.createElement(FloatingNode,{id:nodeId},React.createElement(FloatingOverlay,{className:"modal-backdrop".concat(appendClass(state==="exiting","modal-backdrop--before-close")),lockScroll:lockScroll,ref:nodeRef},React.createElement(FloatingFocusManager,{context:context},React.createElement("div",_extends$1({ref:floating},getFloatingProps({className:"modal".concat(appendClass(realSize,"modal--".concat(realSize))).concat(appendClass(left,"modal--left")),onClick:function(){return autoClose?closeHandle():void 0}})),React.createElement("div",_extends$1({className:"modal__dialog"},dialogProps,{onClick:function(e){return e.stopPropagation()}}),React.createElement("div",_extends$1({className:"modal__content"},contentProps),React.createElement(DisplayIf,{condition:!!(closeIcon&&closeHandle)||maximize},React.createElement(ConditionalWrapper,{condition:!!(closeIcon&&closeHandle)&&maximize,wrapper:React.createElement("div",{className:"modal__close"})},Boolean(maximize)&&React.createElement("a",{className:"".concat(appendClass(!(closeIcon&&closeHandle),"modal__close")).concat(appendClass(closeIcon&&closeHandle,"qtr-margin-right")),onClick:function(){return setMaximized(function(curr){return!curr})}},React.createElement("span",{className:maximized?"icon-minimize":"icon-maximize"})),Boolean(closeIcon&&closeHandle)&&React.createElement("a",{className:!maximize?"modal__close":"",onClick:closeHandle},React.createElement("span",{className:"icon-close"})))),Boolean(title)&&React.createElement(ModalHeader,null,React.createElement("h1",{className:"modal__title"},title)),children))))))}));if(parentId===null){return React.createElement(FloatingTree,null,t)}return t};Modal.Small=function(props){return React.createElement(Modal,_extends$1({},props,{size:"small"}))};Modal.Large=function(props){return React.createElement(Modal,_extends$1({},props,{size:"large"}))};Modal.Full=function(props){return React.createElement(Modal,_extends$1({},props,{size:"full"}))};Modal.Fluid=function(props){return React.createElement(Modal,_extends$1({},props,{size:"fluid"}))};Modal.Header=ModalHeader;Modal.Body=ModalBody;Modal.Footer=ModalFooter;var ConfirmationModal=function(param){var _isOpen=param.isOpen,isOpen=_isOpen===void 0?false:_isOpen,_confirmType=param.confirmType,confirmType=_confirmType===void 0?"primary":_confirmType,_autoClose=param.autoClose,autoClose=_autoClose===void 0?true:_autoClose,_confirmText=param.confirmText,confirmText=_confirmText===void 0?"Confirm":_confirmText,confirmHandle=param.confirmHandle,closeHandle=param.closeHandle,prompt=param.prompt,_dontAskAgain=param.dontAskAgain,dontAskAgain=_dontAskAgain===void 0?{show:false}:_dontAskAgain;var ref=_slicedToArray(React.useState(false),2),doing=ref[0],setDoing=ref[1];var ref1=_slicedToArray(React.useState(false),2),dontAsk=ref1[0],setDontAsk=ref1[1];return React.createElement(Modal,{isOpen:isOpen,closeIcon:true,closeHandle:closeHandle,autoClose:autoClose,title:"Confirmation"},React.createElement(ModalBody,null,prompt,(dontAskAgain===null||dontAskAgain===void 0?void 0:dontAskAgain.show)?React.createElement("div",{className:"form-group"},React.createElement("label",{className:"checkbox"},React.createElement("input",{type:"checkbox",checked:dontAsk,onChange:function(e){setDontAsk(e.target.checked)}}),React.createElement("span",{className:"checkbox__input"}),React.createElement("span",{className:"checkbox__label"},dontAskAgain.text||"Don't ask again"))):null),React.createElement(ModalFooter,null,React.createElement(Button.Light,{onClick:closeHandle},"Close"),React.createElement(Button,{color:confirmType,disabled:doing,onClick:_asyncToGenerator(function(){return __generator(this,function(_state){switch(_state.label){case 0:setDoing(true);return[4,confirmHandle(dontAsk)];case 1:if(_state.sent())setDoing(false);return[2]}})})},confirmText,doing?React.createElement("span",{className:"icon-animation spin qtr-margin-left"}):null)))};function PromptModal(param){var title=param.title,question=param.question,cb=param.onSave,onClose=param.onClose,initial=param.initial,type=param.type,isOpen=param.isOpen,hint=param.hint,validate=param.validate;var ref=_slicedToArray(React.useState(initial),2),val=ref[0],setVal=ref[1];var ref1=_slicedToArray(React.useState(false),2),doing=ref1[0],setDoing=ref1[1];var onSave=React.useCallback(_asyncToGenerator(function(){var _tmp;return __generator(this,function(_state){switch(_state.label){case 0:_tmp=typeof validate==="function";if(!_tmp)return[3,2];return[4,validate(val)];case 1:_tmp=!_state.sent();_state.label=2;case 2:if(_tmp)return[2];setDoing(true);return[4,cb(val)];case 3:_state.sent();setDoing(false);onClose();return[2]}})}),[onClose,cb,val,validate]);React.useEffect(function(){return setVal(initial)},[initial]);var inpRef=React.useRef(undefined);React.useEffect(function(){if(isOpen&&inpRef.current)inpRef.current.focus()},[isOpen]);return React.createElement(Modal,{isOpen:isOpen,closeIcon:true,closeHandle:onClose,title:title},React.createElement(ModalBody,null,React.createElement(Input,{type:type,onChange:function(e){return setVal(e.target.value)},onKeyUp:function(e){if(e.key==="Enter"){onSave()}},name:"promptInput",value:val,label:React.createElement(React.Fragment,null,question,React.createElement(DisplayIf,{condition:!!hint&&typeof hint==="string"},React.createElement("span",{"data-balloon":hint,"data-balloon-length":"large","data-balloon-pos":"up"},React.createElement("span",{className:"icon-question-circle qtr-margin-left",style:{cursor:"help"}})))),ref:inpRef})),React.createElement(ModalFooter,null,React.createElement(Button,{color:"light",onClick:onClose,disabled:doing},"Close"),React.createElement(Button,{color:"primary",onClick:onSave,disabled:doing},"OK",doing?React.createElement("span",{className:"icon-animation spin qtr-margin-left"}):null)))}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}var ConfirmationListener=function(){var ref=_slicedToArray(React.useState([]),2),modals=ref[0],setModals=ref[1];var addModal=React.useCallback(function(modal){return setModals(function(curr){return _toConsumableArray(curr).concat([_objectSpread({id:nanoid(),shown:true},modal)])})},[]);var hideModal=React.useCallback(function(id){setModals(function(curr){return curr.map(function(m){return m.id===id?_objectSpreadProps(_objectSpread({},m),{shown:false}):m})})},[]);var deleteModal=React.useCallback(function(id){setModals(function(curr){return curr.filter(function(m){if(m.id===id&&typeof m.onClosed==="function")m.onClosed();return m.id!==id})})},[]);var closeModal=React.useCallback(function(id,cb){hideModal(id);setTimeout(function(){return deleteModal(id)},500);if(cb)cb()},[hideModal,deleteModal]);React.useEffect(function(){var cb=function(m){return addModal(m)};eventManager.on("showModal",cb);return function(){eventManager.off("showModal",cb)}},[addModal]);if(!modals.length)return null;return React.createElement(React.Fragment,null,modals.map(function(modal){if(modal.modalType==="dynamic")return React.createElement(Modal,_extends({},modal.modalProps,{key:modal.id,isOpen:modal.shown,closeHandle:function(){return closeModal(modal.id,modal.onModalClose)},title:modal.title}),modal.fullBody?typeof modal.fullBody==="function"?modal.fullBody({close:function(){return closeModal(modal.id,modal.onModalClose)}}):cloneElement(modal.fullBody,{close:function(){return closeModal(modal.id,modal.onModalClose)}}):React.createElement(React.Fragment,null,React.createElement(ModalBody,null,modal.body),React.createElement(ModalFooter,null,modal.buttons.map(function(button,idx){return React.createElement(Button,{key:idx,color:button.color||"light",onClick:function(e){if(typeof button.onClick==="function")button.onClick(e,function(){return closeModal(modal.id,modal.onModalClose)});else closeModal(modal.id,modal.onModalClose)}},button.text)}))));if(modal.modalType==="notification")return React.createElement(Modal,{key:modal.id,isOpen:modal.shown,closeIcon:true,closeHandle:function(){return closeModal(modal.id,modal.onModalClose)},title:modal.title},React.createElement(ModalBody,null,modal.body),React.createElement(ModalFooter,null,React.createElement(Button,{color:modal.buttonColor||"light",onClick:function(){return closeModal(modal.id,modal.onModalClose)}},modal.button)));if(modal.modalType==="prompt"){if(typeof modal.options!=="undefined"){var _options=modal.options,_initial=_options.initial,initial=_initial===void 0?"":_initial,_type=_options.type,type=_type===void 0?"text":_type,_hint=_options.hint,hint=_hint===void 0?undefined:_hint,_validate=_options.validate,validate=_validate===void 0?undefined:_validate;return React.createElement(PromptModal,{key:modal.id,isOpen:modal.shown,onClose:function(){return closeModal(modal.id,modal.onModalClose)},onSave:modal.cb,title:modal.title,question:modal.question,initial:initial,type:type,hint:hint,validate:validate})}return React.createElement(PromptModal,{key:modal.id,isOpen:modal.shown,onClose:function(){return closeModal(modal.id,modal.onModalClose)},onSave:modal.cb,title:modal.title,question:modal.question,initial:modal.initial,type:modal.type,hint:modal.hint})}if(modal.modalType==="confirmation")return React.createElement(ConfirmationModal,{key:modal.id,isOpen:modal.shown,prompt:modal.prompt,confirmHandle:function(){var _ref=_asyncToGenerator(function(dontAskAgain){var r;return __generator(this,function(_state){switch(_state.label){case 0:return[4,modal.onConfirm(dontAskAgain)];case 1:r=_state.sent();if(r)closeModal(modal.id,modal.onModalClose);return[2,true]}})});return function(dontAskAgain){return _ref.apply(this,arguments)}}(),closeHandle:function(){return closeModal(modal.id,modal.onModalClose)},confirmText:modal.confirmText,confirmType:modal.confirmType,dontAskAgain:modal.dontAskAgain});return null}))};function confirmation(prompt,onConfirm){var confirmType=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"primary",confirmText=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"Confirm",dontAskAgain=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{show:false};if(!prompt)throw new Error("Prompt must be specified");if(!onConfirm||typeof onConfirm!=="function")throw new Error("onConfirm must be specified and must be a function");return new Promise(function(resolve){return eventManager.emit("showModal",{modalType:"confirmation",prompt:React.createElement("p",null,prompt),onConfirm:onConfirm,confirmText:confirmText,confirmType:confirmType,dontAskAgain:dontAskAgain,onModalClose:resolve})})}var notificationModal=function(title,body){var buttonColor=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"light",button=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"OK";if(!title||!body)throw new Error("Title and body must be specified");return new Promise(function(resolve){eventManager.emit("showModal",{modalType:"notification",title:title,body:body,buttonColor:buttonColor,button:button,onClosed:resolve})})};function prompt(title,question,cb,initial){var type=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"text",hint=arguments.length>5&&arguments[5]!==void 0?arguments[5]:undefined;if(!title||!question)throw new Error("Title and question must be specified");if(typeof initial==="object"){return new Promise(function(resolve){return eventManager.emit("showModal",{modalType:"prompt",title:title,question:question,cb:cb,options:initial,onModalClose:resolve})})}return new Promise(function(resolve){return eventManager.emit("showModal",{modalType:"prompt",title:title,initial:initial,type:type,question:question,cb:cb,hint:hint,onModalClose:resolve})})}var dynamicModal=function(param){var title=param.title,_fullBody=param.fullBody,fullBody=_fullBody===void 0?null:_fullBody,_body=param.body,body=_body===void 0?null:_body,_buttons=param.buttons,buttons=_buttons===void 0?[]:_buttons,_modalProps=param.modalProps,modalProps=_modalProps===void 0?{}:_modalProps;return new Promise(function(resolve){eventManager.emit("showModal",{modalType:"dynamic",title:title,fullBody:fullBody,body:body,buttons:buttons,modalProps:modalProps,onModalClose:resolve})})};export{ConfirmationListener,ConfirmationModal,ConfirmationListener as DynamicModal,Modal,ModalBody,ModalFooter,ModalHeader,PromptModal,confirmation,dynamicModal,notificationModal as notification,notificationModal,prompt};
//# sourceMappingURL=index.js.map
