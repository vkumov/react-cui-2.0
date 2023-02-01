function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==="function"){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))}ownKeys.forEach(function(key){_defineProperty(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})}keys.push.apply(keys,symbols)}return keys}function _objectSpreadProps(target,source){source=source!=null?source:{};if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}return target}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(n);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}import React,{forwardRef,isValidElement,useState,useEffect,useRef,Children,cloneElement}from"react";import{useFloatingTree,useFloatingNodeId,useFloatingParentNodeId,useFloating,offset,flip,shift,size,autoUpdate,useInteractions,useHover,safePolygon,useClick,useRole,useDismiss,useListNavigation,useTypeahead,useMergeRefs,FloatingNode,FloatingPortal,FloatingFocusManager,FloatingTree}from"@floating-ui/react";import cx from"classnames";import{Transition}from"react-transition-group";import{useFloatingContext}from"../FloatingProvider/index.js";var styles={"submenu":"Dropdown-module_submenu__uXrqH","dropdown":"Dropdown-module_dropdown__QOREt","active":"Dropdown-module_active__p0UcD","dropdown_appear":"Dropdown-module_dropdown_appear__FJDEz","disappear":"Dropdown-module_disappear__9T3XQ","dropdown_disappear":"Dropdown-module_dropdown_disappear__3is4U","menu_root":"Dropdown-module_menu_root__in1ol","with_chevron":"Dropdown-module_with_chevron__ngan7"};function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}var MenuElement=forwardRef(function(_param,ref){var selected=_param.selected,className=_param.className,icon=_param.icon,children=_param.children,submenu=_param.submenu,props=_objectWithoutProperties(_param,["selected","className","icon","children","submenu"]);return React.createElement("a",_extends({ref:ref},props,{className:cx(className,_defineProperty({selected:selected&&!submenu},styles.submenu,submenu))}),icon?isValidElement(icon)?React.createElement(React.Fragment,null,icon,isValidElement(children)?children:React.createElement("span",{className:"qtr-margin-left"},children)):React.createElement(React.Fragment,null,React.createElement("span",{className:icon}),React.createElement("span",{className:"qtr-margin-left"},children)):children)});MenuElement.displayName="MenuElement";var Menu=forwardRef(function(_param,ref){var children=_param.children,label=_param.label,noChevron=_param.noChevron,placement=_param.placement,providedStrategy=_param.strategy,portalRoot=_param.portalRoot,alwaysClose=_param.alwaysClose,onOpen=_param.onOpen,onClose=_param.onClose,isOpen=_param.isOpen,nested=_param.nested,withSizeLimit=_param.withSizeLimit,_portalId=_param.portalId,portalId=_portalId===void 0?"--cui-context-menu-portal":_portalId,props=_objectWithoutProperties(_param,["children","label","noChevron","placement","strategy","portalRoot","alwaysClose","onOpen","onClose","isOpen","nested","withSizeLimit","portalId"]);var ref1;var _$ref=_slicedToArray(useState(isOpen!==null&&isOpen!==void 0?isOpen:false),2),open=_$ref[0],setOpen=_$ref[1];var _$ref1=_slicedToArray(useState(null),2),activeIndex=_$ref1[0],setActiveIndex=_$ref1[1];var _$ref2=_slicedToArray(useState(false),2),allowHover=_$ref2[0],setAllowHover=_$ref2[1];useEffect(function(){if(typeof isOpen!=="undefined")setOpen(isOpen)},[isOpen]);var listItemsRef=useRef([]);var listContentRef=useRef(Children.map(children,function(child){return isValidElement(child)?child.props.label:null}));var tree=useFloatingTree();var nodeId=useFloatingNodeId();var parentId=useFloatingParentNodeId();nested!==null&&nested!==void 0?nested:nested=parentId!=null;var _$ref3=useFloating({open:open,onOpenChange:function(st){if(typeof onOpen==="function"&&st)onOpen();if(typeof onClose==="function"&&!st)onClose();setOpen(st)},middleware:[offset({mainAxis:nested?0:2,alignmentAxis:nested?-5:0}),flip(),shift(),withSizeLimit?size({apply:function apply(param){var availableHeight=param.availableHeight,availableWidth=param.availableWidth,elements=param.elements;Object.assign(elements.floating.style,{maxWidth:"".concat(availableWidth,"px"),maxHeight:"".concat(availableHeight-4,"px")})}}):undefined].filter(Boolean),placement:nested?"right-start":placement,nodeId:nodeId,whileElementsMounted:autoUpdate,strategy:providedStrategy}),x=_$ref3.x,y=_$ref3.y,reference=_$ref3.reference,floating=_$ref3.floating,strategy=_$ref3.strategy,refs=_$ref3.refs,context=_$ref3.context;var _$ref4=useInteractions([useHover(context,{handleClose:safePolygon({restMs:25}),enabled:nested&&allowHover,delay:{open:75}}),useClick(context,{toggle:!nested,event:"mousedown",ignoreMouse:nested}),useRole(context,{role:"menu"}),useDismiss(context),useListNavigation(context,{listRef:listItemsRef,activeIndex:activeIndex,nested:nested,onNavigate:setActiveIndex}),useTypeahead(context,{listRef:listContentRef,onMatch:open?setActiveIndex:undefined,activeIndex:activeIndex})]),getReferenceProps=_$ref4.getReferenceProps,getFloatingProps=_$ref4.getFloatingProps,getItemProps=_$ref4.getItemProps;useEffect(function(){var onTreeClick=function onTreeClick(){if(alwaysClose)setOpen(false);if(parentId===null){var _$ref;(_$ref=refs.domReference.current)===null||_$ref===void 0?void 0:_$ref.focus()}};tree===null||tree===void 0?void 0:tree.events.on("click",onTreeClick);return function(){tree===null||tree===void 0?void 0:tree.events.off("click",onTreeClick)}},[parentId,tree,refs,alwaysClose]);useEffect(function(){var onPointerMove=function onPointerMove(){setAllowHover(true)};var onKeyDown=function onKeyDown(){setAllowHover(false)};window.addEventListener("pointermove",onPointerMove,{once:true,capture:true});window.addEventListener("keydown",onKeyDown,true);return function(){window.removeEventListener("pointermove",onPointerMove,{capture:true});window.removeEventListener("keydown",onKeyDown,true)}},[allowHover]);var floatingNodeRef=useRef(null);var mergedReferenceRef=useMergeRefs([ref,reference]);var rootCtx=useFloatingContext();portalRoot!==null&&portalRoot!==void 0?portalRoot:portalRoot=(rootCtx===null||rootCtx===void 0?void 0:(ref1=rootCtx.rootRef)===null||ref1===void 0?void 0:ref1.current)||undefined;return React.createElement(FloatingNode,{id:nodeId},isValidElement(label)?cloneElement(label,_objectSpread({},getReferenceProps(_objectSpread(_objectSpreadProps(_objectSpread({},props),{ref:mergedReferenceRef,onClick:function onClick(event){event.stopPropagation();event.currentTarget.focus()}}),nested?{className:cx("menu_item",label.props.className,{open:open}),role:"menuitem",onKeyDown:function onKeyDown(event){if(event.key==="ArrowUp"||event.key==="ArrowDown"){setOpen(false)}}}:{className:cx(styles.menu_root,label.props.className,_defineProperty({open:open},styles.with_chevron,!noChevron))})))):React.createElement(MenuElement,_extends({submenu:nested},getReferenceProps(_objectSpread(_objectSpreadProps(_objectSpread({},props),{ref:mergedReferenceRef,onClick:function onClick(event){event.stopPropagation();event.currentTarget.focus()}}),nested?{className:cx("menu_item",{open:open}),role:"menuitem",onKeyDown:function onKeyDown(event){if(event.key==="ArrowUp"||event.key==="ArrowDown"){setOpen(false)}}}:{className:cx(styles.menu_root,_defineProperty({open:open},styles.with_chevron,!noChevron))}))),label),React.createElement(FloatingPortal,{root:portalRoot,id:portalId},React.createElement(Transition,{in:open,mountOnEnter:true,unmountOnExit:true,timeout:{enter:100,exit:250},nodeRef:floatingNodeRef},function(state){return React.createElement(FloatingFocusManager,{context:context,modal:!nested,returnFocus:!nested,order:["reference","content"]},React.createElement("div",_extends({},getFloatingProps({className:cx("dropdown",styles.active,styles.dropdown,_defineProperty({},styles.disappear,state==="exiting"||state==="exited")),ref:function ref(r){floatingNodeRef.current=r;floating(r)},style:{position:strategy,top:y!==null&&y!==void 0?y:0,left:x!==null&&x!==void 0?x:0},onKeyDown:function onKeyDown(event){if(event.key==="Tab"){setOpen(false)}}})),React.createElement("div",{className:"dropdown__menu",onClick:alwaysClose?function(){tree===null||tree===void 0?void 0:tree.events.emit("click")}:undefined},Children.map(children,function(child,index){return isValidElement(child)&&cloneElement(child,getItemProps({tabIndex:-1,role:"menuitem",className:cx("menu_item",child.props.className),ref:function ref(node){listItemsRef.current[index]=node},onClick:function onClick(e){if(child.props.onClick)child.props.onClick(e);else tree===null||tree===void 0?void 0:tree.events.emit("click")},onPointerEnter:function onPointerEnter(){if(allowHover){setActiveIndex(index)}}}))}))))})))});Menu.displayName="Menu";var Dropdown=forwardRef(function(_param,ref){var children=_param.children,_placement=_param.placement,placement=_placement===void 0?"bottom-start":_placement,props=_objectWithoutProperties(_param,["children","placement"]);return React.createElement(FloatingTree,null,React.createElement(Menu,_extends({placement:placement},props,{nested:false,ref:ref}),children))});Dropdown.displayName="Dropdown";var MenuDivider=forwardRef(function(_param,ref){var className=_param.className,props=_objectWithoutProperties(_param,["className"]);return React.createElement("div",_extends({},props,{className:cx("divider",className),ref:ref}))});MenuDivider.displayName="MenuDivider";var MenuGroup=forwardRef(function(_param,ref){var className=_param.className,header=_param.header,children=_param.children,props=_objectWithoutProperties(_param,["className","header","children"]);return React.createElement("div",_extends({className:cx("dropdown__group",className)},props,{ref:ref}),header?React.createElement("div",{className:"dropdown__group-header"},header):null,children)});MenuGroup.displayName="MenuGroup";export{Dropdown,Menu,MenuDivider,MenuElement,MenuGroup};
//# sourceMappingURL=index.js.map
