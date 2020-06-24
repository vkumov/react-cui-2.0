import e from"react";import t from"prop-types";import{_ as n,a as o,b as i}from"../_rollupPluginBabelHelpers-b60338eb.js";import{a,e as l,E as r}from"../index-be24eb93.js";import{s}from"../style-inject.es-1f59c1d0.js";import{Button as c}from"./Button.js";import"formik";import{DisplayIf as u,ConditionalWrapper as p}from"./Conditional.js";import"./InputHelpBlock.js";import{Input as m}from"./Input.js";import d from"react-dom";import f from"react-modal";var E=!1,h="production"!==process.env.NODE_ENV?t.oneOfType([t.number,t.shape({enter:t.number,exit:t.number,appear:t.number}).isRequired]):null,b=("production"!==process.env.NODE_ENV&&t.oneOfType([t.string,t.shape({enter:t.string,exit:t.string,active:t.string}),t.shape({enter:t.string,enterDone:t.string,enterActive:t.string,exit:t.string,exitDone:t.string,exitActive:t.string})]),e.createContext(null)),y=function(t){var n,o;function i(e,n){var o;o=t.call(this,e,n)||this;var i,a=n&&!n.isMounting?e.enter:e.appear;return o.appearStatus=null,e.in?a?(i="exited",o.appearStatus="entering"):i="entered":i=e.unmountOnExit||e.mountOnEnter?"unmounted":"exited",o.state={status:i},o.nextCallback=null,o}o=t,(n=i).prototype=Object.create(o.prototype),n.prototype.constructor=n,n.__proto__=o,i.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var a=i.prototype;return a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var e,t,n,o=this.props.timeout;return e=t=n=o,null!=o&&"number"!=typeof o&&(e=o.exit,t=o.enter,n=void 0!==o.appear?o.appear:t),{exit:e,enter:t,appear:n}},a.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=d.findDOMNode(this);"entering"===t?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},a.performEnter=function(e,t){var n=this,o=this.props.enter,i=this.context?this.context.isMounting:t,a=this.getTimeouts(),l=i?a.appear:a.enter;!t&&!o||E?this.safeSetState({status:"entered"},(function(){n.props.onEntered(e)})):(this.props.onEnter(e,i),this.safeSetState({status:"entering"},(function(){n.props.onEntering(e,i),n.onTransitionEnd(e,l,(function(){n.safeSetState({status:"entered"},(function(){n.props.onEntered(e,i)}))}))})))},a.performExit=function(e){var t=this,n=this.props.exit,o=this.getTimeouts();n&&!E?(this.props.onExit(e),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(e),t.onTransitionEnd(e,o.exit,(function(){t.safeSetState({status:"exited"},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:"exited"},(function(){t.props.onExited(e)}))},a.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},a.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,t.nextCallback=null,e(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},a.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var o=null==t&&!this.props.addEndListener;e&&!o?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},a.render=function(){var t=this.state.status;if("unmounted"===t)return null;var n=this.props,o=n.children,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(n,["children"]);if(delete i.in,delete i.mountOnEnter,delete i.unmountOnExit,delete i.appear,delete i.enter,delete i.exit,delete i.timeout,delete i.addEndListener,delete i.onEnter,delete i.onEntering,delete i.onEntered,delete i.onExit,delete i.onExiting,delete i.onExited,"function"==typeof o)return e.createElement(b.Provider,{value:null},o(t,i));var a=e.Children.only(o);return e.createElement(b.Provider,{value:null},e.cloneElement(a,i))},i}(e.Component);function x(){}y.contextType=b,y.propTypes="production"!==process.env.NODE_ENV?{children:t.oneOfType([t.func.isRequired,t.element.isRequired]).isRequired,in:t.bool,mountOnEnter:t.bool,unmountOnExit:t.bool,appear:t.bool,enter:t.bool,exit:t.bool,timeout:function(e){var t=h;e.addEndListener||(t=t.isRequired);for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return t.apply(void 0,[e].concat(o))},addEndListener:t.func,onEnter:t.func,onEntering:t.func,onEntered:t.func,onExit:t.func,onExiting:t.func,onExited:t.func}:{},y.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:x,onEntering:x,onEntered:x,onExit:x,onExiting:x,onExited:x},y.UNMOUNTED=0,y.EXITED=1,y.ENTERING=2,y.ENTERED=3,y.EXITING=4;s("@-webkit-keyframes fade-out{0%{opacity:1}to{opacity:0}}@keyframes fade-out{0%{opacity:1}to{opacity:0}}.cui .modal-backdrop{background:rgba(196,199,204,.65);pointer-events:all;opacity:1;transition:opacity .15s linear;outline:none}.cui .ReactModal__Overlay--before-close .modal__dialog{-webkit-animation:blowdown .3s cubic-bezier(.165,.84,.44,1) forwards,fade-out .25s linear 1!important;animation:blowdown .3s cubic-bezier(.165,.84,.44,1) forwards,fade-out .25s linear 1!important}.cui .ReactModal__Overlay--before-close{opacity:0!important}body.cui .modal .modal__content div.modal__close>a{color:var(--cui-inactive-color)}body.cui .modal .modal__content div.modal__close>a:hover{color:var(--cui-active-color);text-decoration:none}");const g=t=>{let{className:i,children:a}=t,l=n(t,["className","children"]);return e.createElement("div",o({className:"modal__header"+(i?" "+i:"")},l),a)};g.propTypes={className:t.string,children:t.node.isRequired},g.defaultProps={className:null};const v=t=>{let{className:i,children:a}=t,l=n(t,["className","children"]);return e.createElement("div",o({className:"modal__body"+(i?" "+i:"")},l),a)};v.propTypes={className:t.string,children:t.node.isRequired},v.defaultProps={className:null};const C=t=>{let{className:i,children:a}=t,l=n(t,["className","children"]);return e.createElement("div",o({className:"modal__footer"+(i?" "+i:"")},l),a)};C.propTypes={className:t.string,children:t.node.isRequired},C.defaultProps={className:null};const O=t=>{let{size:i,closeIcon:l,closeHandle:r,title:s,left:c,children:m,autoClose:d,isOpen:E,animationDuration:h,transitionEvents:b,dialogProps:x,contentProps:v,maximize:C}=t,O=n(t,["size","closeIcon","closeHandle","title","left","children","autoClose","isOpen","animationDuration","transitionEvents","dialogProps","contentProps","maximize"]);const[T,N]=e.useState(!1);e.useEffect(()=>N(!1),[E]);const _=e.useMemo(()=>T?"full":i,[T,i]),k=e.useCallback(()=>{N(e=>!e)},[]);return e.createElement(y,o({in:E,mountOnEnter:!0,unmountOnExit:!0,timeout:h},b),t=>e.createElement(f,o({},O,{autoClose:d,onRequestClose:d&&r?r:void 0,overlayClassName:"modal-backdrop",isOpen:["entering","entered"].includes(t),className:`modal${a(_,"modal--"+_)}${a(c,"modal--left")}`,closeTimeoutMS:"object"==typeof h?h.exiting:h}),e.createElement("div",o({className:"modal__dialog"},x,{onClick:e=>e.stopPropagation()}),e.createElement("div",o({className:"modal__content"},v),e.createElement(u,{condition:!(!l||!r)||C},e.createElement(p,{condition:!(!l||!r)&&C,wrapper:e.createElement("div",{className:"modal__close"})},e.createElement(u,{condition:C},e.createElement("a",{className:`${a(!(l&&r),"modal__close")}${a(l&&r,"qtr-margin-right")}`,onClick:k},e.createElement("span",{className:T?"icon-minimize":"icon-maximize"}))),e.createElement(u,{condition:!(!l||!r)},e.createElement("a",{className:C?"":"modal__close",onClick:r},e.createElement("span",{className:"icon-close"}))))),e.createElement(u,{condition:!!s},e.createElement(g,null,e.createElement("h1",{className:"modal__title"},s))),m))))};O.propTypes={size:t.oneOf([!1,"small","default","large","full","fluid"]),closeIcon:t.bool,closeHandle:t.func,title:t.string,isOpen:t.bool.isRequired,autoClose:t.bool,left:t.bool,animationDuration:t.oneOfType([t.number,t.shape({entering:t.number,exiting:t.number})]),children:t.node.isRequired,transitionEvents:t.objectOf(t.func),dialogProps:t.shape({}),contentProps:t.shape({}),maximize:t.bool},O.defaultProps={size:!1,autoClose:!0,animationDuration:250,closeIcon:!1,title:null,closeHandle:null,left:!1,transitionEvents:null,dialogProps:null,contentProps:null,maximize:!1},O.Small=t=>e.createElement(O,o({},t,{size:"small"})),O.Large=t=>e.createElement(O,o({},t,{size:"large"})),O.Full=t=>e.createElement(O,o({},t,{size:"full"})),O.Fluid=t=>e.createElement(O,o({},t,{size:"fluid"})),O.Header=g,O.Body=v,O.Footer=C;const T=({isOpen:t,confirmHandle:n,closeHandle:o,prompt:i,confirmType:a,confirmText:l,autoClose:r})=>{const[s,u]=e.useState(!1);return e.createElement(O,{isOpen:t,closeIcon:!0,closeHandle:o,autoClose:r,title:"Confirmation"},e.createElement(v,null,i),e.createElement(C,null,e.createElement(c.Light,{onClick:o},"Close"),e.createElement(c,{color:a,disabled:s,onClick:async()=>{u(!0),await n()&&u(!1)}},l,s?e.createElement("span",{className:"icon-animation spin qtr-margin-left"}):null)))};T.propTypes={isOpen:t.bool,confirmHandle:t.func.isRequired,closeHandle:t.func.isRequired,prompt:t.node.isRequired,confirmType:t.string,confirmText:t.string,autoClose:t.bool},T.defaultProps={isOpen:!1,confirmType:"primary",autoClose:!0,confirmText:"Confirm"};const N=({title:t,question:n,onSave:o,onClose:i,initial:a,type:l,isOpen:r,hint:s,validate:p})=>{const[d,f]=e.useState(a),E=e.useCallback(async()=>{("function"!=typeof p||await p(d))&&(i(),o(d))},[i,o,d,p]);return e.useLayoutEffect(()=>f(a),[a]),e.createElement(O,{isOpen:r,closeIcon:!0,closeHandle:i,title:t},e.createElement(v,null,e.createElement(m,{type:l,form:{errors:{},touched:{}},field:{onChange:e=>f(e.target.value),name:"promptInput",value:d},label:e.createElement(e.Fragment,null,n,e.createElement(u,{condition:!!s&&"string"==typeof s},e.createElement("span",{"data-balloon":s,"data-balloon-length":"large","data-balloon-pos":"up"},e.createElement("span",{className:"icon-question-circle qtr-margin-left",style:{cursor:"help"}}))))})),e.createElement(C,null,e.createElement(c,{color:"light",onClick:i},"Close"),e.createElement(c,{color:"primary",onClick:E},"OK")))};N.propTypes={title:t.node.isRequired,question:t.node.isRequired,onSave:t.func.isRequired,onClose:t.func,initial:t.oneOfType([t.string,t.number]),type:t.string,isOpen:t.bool.isRequired,hint:t.node,validate:t.func},N.defaultProps={onClose:null,initial:null,type:"text",hint:null,validate:null};const _=()=>{const[t,n]=e.useState([]),o=e.useCallback(e=>n(t=>[...t,i({id:Date.now(),shown:!0},e)]),[]),a=e.useCallback(e=>{n(t=>t.map(t=>t.id===e?i({},t,{shown:!1}):t))},[]),s=e.useCallback(e=>{n(t=>t.filter(t=>t.id!==e))},[]),u=e.useCallback(e=>{a(e),setTimeout(()=>s(e),500)},[a,s]);return e.useEffect(()=>{l.on(r.SHOW_MODAL,e=>o(e))},[o]),t.length?t.map(t=>{if("notification"===t.modalType)return e.createElement(O,{key:t.id,isOpen:t.shown,closeIcon:!0,closeHandle:()=>u(t.id),title:t.title},e.createElement(v,null,t.body),e.createElement(C,null,e.createElement(c,{color:t.buttonColor||"light",onClick:()=>u(t.id)},t.button)));if("prompt"===t.modalType){if(void 0!==t.options){const{initial:n="",type:o="text",hint:i,validate:a}=t.options;return e.createElement(N,{key:t.id,isOpen:t.shown,onClose:()=>u(t.id),onSave:t.cb,title:t.title,question:t.question,initial:n,type:o,hint:i,validate:a})}return e.createElement(N,{key:t.id,isOpen:t.shown,onClose:()=>u(t.id),onSave:t.cb,title:t.title,question:t.question,initial:t.initial,type:t.type,hint:t.hint})}return"confirmation"===t.modalType?e.createElement(T,{key:t.id,isOpen:t.shown,prompt:t.prompt,confirmHandle:async()=>(await t.onConfirm()&&u(t.id),!0),closeHandle:()=>u(t.id),confirmText:t.confirmText,confirmType:t.confirmType}):null}):null},k=(t,n,o="primary",i="Confirm")=>{if(!t)throw new Error("Prompt must be specified");if(!n||"function"!=typeof n)throw new Error("onConfirm must be specified and must be a function");l.emit(r.SHOW_MODAL,{modalType:"confirmation",prompt:e.createElement("p",null,t),onConfirm:n,confirmText:i,confirmType:o})},S=(e,t,n="light",o="OK")=>{if(!e||!t)throw new Error("Title and body must be specified");l.emit(r.SHOW_MODAL,{modalType:"notification",title:e,body:t,buttonColor:n,button:o})},q=(e,t,n,o="",i="text",a)=>{if(!e||!t)throw new Error("Title and question must be specified");"object"!=typeof o?l.emit(r.SHOW_MODAL,{modalType:"prompt",title:e,initial:o,type:i,question:t,cb:n,hint:a}):l.emit(r.SHOW_MODAL,{modalType:"prompt",title:e,question:t,cb:n,options:o})};export{_ as ConfirmationListener,T as ConfirmationModal,_ as DynamicModal,O as Modal,v as ModalBody,C as ModalFooter,g as ModalHeader,N as PromptModal,k as confirmation,S as notification,S as notificationModal,q as prompt};
