import e from"react";import t from"prop-types";import{_ as o,a as n}from"../_rollupPluginBabelHelpers-b60338eb.js";import{a as l,e as i,E as a}from"../index-be24eb93.js";import{s as r}from"../style-inject.es-1f59c1d0.js";import{Button as s}from"./Button.js";import"formik";import{D as c,C as m}from"../Conditional-4aafc147.js";import"./InputHelpBlock.js";import{Input as d}from"./Input.js";import p from"react-transition-group/Transition";import u from"react-modal";r("@-webkit-keyframes fade-out{0%{opacity:1}to{opacity:0}}@keyframes fade-out{0%{opacity:1}to{opacity:0}}.cui .modal-backdrop{background:rgba(196,199,204,.65);pointer-events:all;opacity:1;transition:opacity .15s linear;outline:none}.cui .ReactModal__Overlay--before-close .modal__dialog{-webkit-animation:blowdown .3s cubic-bezier(.165,.84,.44,1) forwards,fade-out .25s linear 1!important;animation:blowdown .3s cubic-bezier(.165,.84,.44,1) forwards,fade-out .25s linear 1!important}.cui .ReactModal__Overlay--before-close{opacity:0!important}body.cui .modal .modal__content div.modal__close>a{color:var(--cui-inactive-color)}body.cui .modal .modal__content div.modal__close>a:hover{color:var(--cui-active-color);text-decoration:none}");const f=t=>{let{className:l,children:i}=t,a=o(t,["className","children"]);return e.createElement("div",n({className:"modal__header"+(l?" "+l:"")},a),i)};f.propTypes={className:t.string,children:t.node.isRequired},f.defaultProps={className:null};const E=t=>{let{className:l,children:i}=t,a=o(t,["className","children"]);return e.createElement("div",n({className:"modal__body"+(l?" "+l:"")},a),i)};E.propTypes={className:t.string,children:t.node.isRequired},E.defaultProps={className:null};const y=t=>{let{className:l,children:i}=t,a=o(t,["className","children"]);return e.createElement("div",n({className:"modal__footer"+(l?" "+l:"")},a),i)};y.propTypes={className:t.string,children:t.node.isRequired},y.defaultProps={className:null};const b=t=>{let{size:i,closeIcon:a,closeHandle:r,title:s,left:d,children:E,autoClose:y,isOpen:b,animationDuration:g,transitionEvents:C,dialogProps:_,contentProps:h,maximize:O}=t,T=o(t,["size","closeIcon","closeHandle","title","left","children","autoClose","isOpen","animationDuration","transitionEvents","dialogProps","contentProps","maximize"]);const[v,N]=e.useState(!1);e.useEffect(()=>N(!1),[b]);const q=e.useMemo(()=>v?"full":i,[v,i]),H=e.useCallback(()=>{N(e=>!e)},[]);return e.createElement(p,n({in:b,mountOnEnter:!0,unmountOnExit:!0,timeout:g},C),t=>e.createElement(u,n({},T,{autoClose:y,onRequestClose:y&&r?r:void 0,overlayClassName:"modal-backdrop",isOpen:["entering","entered"].includes(t),className:`modal${l(q,"modal--"+q)}${l(d,"modal--left")}`,closeTimeoutMS:"object"==typeof g?g.exiting:g}),e.createElement("div",n({className:"modal__dialog"},_,{onClick:e=>e.stopPropagation()}),e.createElement("div",n({className:"modal__content"},h),e.createElement(c,{condition:!(!a||!r)||O},e.createElement(m,{condition:!(!a||!r)&&O,wrapper:e.createElement("div",{className:"modal__close"})},e.createElement(c,{condition:O},e.createElement("a",{className:`${l(!(a&&r),"modal__close")}${l(a&&r,"qtr-margin-right")}`,onClick:H},e.createElement("span",{className:v?"icon-minimize":"icon-maximize"}))),e.createElement(c,{condition:!(!a||!r)},e.createElement("a",{className:O?"":"modal__close",onClick:r},e.createElement("span",{className:"icon-close"}))))),e.createElement(c,{condition:!!s},e.createElement(f,null,e.createElement("h1",{className:"modal__title"},s))),E))))};b.propTypes={size:t.oneOf([!1,"small","default","large","full","fluid"]),closeIcon:t.bool,closeHandle:t.func,title:t.string,isOpen:t.bool.isRequired,autoClose:t.bool,left:t.bool,animationDuration:t.oneOfType([t.number,t.shape({entering:t.number,exiting:t.number})]),children:t.node.isRequired,transitionEvents:t.objectOf(t.func),dialogProps:t.shape({}),contentProps:t.shape({}),maximize:t.bool},b.defaultProps={size:!1,autoClose:!0,animationDuration:250,closeIcon:!1,title:null,closeHandle:null,left:!1,transitionEvents:null,dialogProps:null,contentProps:null,maximize:!1},b.Small=t=>e.createElement(b,n({},t,{size:"small"})),b.Large=t=>e.createElement(b,n({},t,{size:"large"})),b.Full=t=>e.createElement(b,n({},t,{size:"full"})),b.Fluid=t=>e.createElement(b,n({},t,{size:"fluid"})),b.Header=f,b.Body=E,b.Footer=y;const g=({isOpen:t,confirmHandle:o,closeHandle:n,prompt:l,confirmType:i,confirmText:a,autoClose:r})=>{const[c,m]=e.useState(!1);return e.createElement(b,{isOpen:t,closeIcon:!0,closeHandle:n,autoClose:r,title:"Confirmation"},e.createElement(E,null,e.createElement("p",null,l)),e.createElement(y,null,e.createElement(s.Light,{onClick:n},"Close"),e.createElement(s,{color:i,disabled:c,onClick:async()=>{m(!0),await o()&&m(!1)}},a,c?e.createElement("span",{className:"icon-animation spin qtr-margin-left"}):null)))};g.propTypes={isOpen:t.bool,confirmHandle:t.func.isRequired,closeHandle:t.func.isRequired,prompt:t.node.isRequired,confirmType:t.string,confirmText:t.string,autoClose:t.bool},g.defaultProps={isOpen:!1,confirmType:"primary",autoClose:!0,confirmText:"Confirm"};const C=({title:t,question:o,onSave:n,onClose:l,initial:i,type:a,isOpen:r,hint:m})=>{const[p,u]=e.useState(i),f=e.useCallback(()=>{l(),n(p)},[l,n,p]);return e.useLayoutEffect(()=>u(i),[i]),e.createElement(b,{isOpen:r,closeIcon:!0,closeHandle:l,title:t},e.createElement(E,null,e.createElement(d,{type:a,form:{errors:{},touched:{}},field:{onChange:e=>u(e.target.value),name:"promptInput",value:p},label:e.createElement(e.Fragment,null,o,e.createElement(c,{condition:!!m&&"string"==typeof m},e.createElement("span",{"data-balloon":m,"data-balloon-length":"large","data-balloon-pos":"up"},e.createElement("span",{className:"icon-question-circle qtr-margin-left",style:{cursor:"help"}}))))})),e.createElement(y,null,e.createElement(s,{color:"light",onClick:l},"Close"),e.createElement(s,{color:"primary",onClick:f},"OK")))};C.propTypes={title:t.node.isRequired,question:t.node.isRequired,onSave:t.func.isRequired,onClose:t.func,initial:t.oneOfType([t.string,t.number]),type:t.string,isOpen:t.bool.isRequired,hint:t.node},C.defaultProps={onClose:null,initial:null,type:"text",hint:null};const _=()=>{const[t,o]=e.useState(null),[n,l]=e.useState(!1);e.useEffect(()=>{i.on(a.SHOW_MODAL,e=>o(e))},[]),e.useEffect(()=>{t&&l(!0)},[t]);const r=()=>l(!1);return t?"notification"===t.modalType?e.createElement(b,{isOpen:n,closeIcon:!0,closeHandle:r,title:t.title},e.createElement(E,null,t.body),e.createElement(y,null,e.createElement(s,{color:t.buttonColor||"light",onClick:r},t.button))):"prompt"===t.modalType?e.createElement(C,{isOpen:n,onClose:r,onSave:t.cb,title:t.title,question:t.question,initial:t.initial,type:t.type,hint:t.hint}):"confirmation"===t.modalType?e.createElement(g,{isOpen:n,prompt:t.prompt,confirmHandle:async()=>(await t.onConfirm()&&r(),!0),closeHandle:r,confirmText:t.confirmText,confirmType:t.confirmType}):null:null},h=(e,t,o="primary",n="Confirm")=>{if(!e)throw new Error("Prompt must be specified");if(!t||"function"!=typeof t)throw new Error("onConfirm must be specified and must be a function");i.emit(a.SHOW_MODAL,{modalType:"confirmation",prompt:e,onConfirm:t,confirmText:n,confirmType:o})},O=(e,t,o="light",n="OK")=>{if(!e||!t)throw new Error("Title and body must be specified");i.emit(a.SHOW_MODAL,{modalType:"notification",title:e,body:t,buttonColor:o,button:n})},T=(e,t,o,n="",l="text",r)=>{if(!e||!t)throw new Error("Title and question must be specified");i.emit(a.SHOW_MODAL,{modalType:"prompt",title:e,initial:n,type:l,question:t,cb:o,hint:r})};export{_ as ConfirmationListener,g as ConfirmationModal,_ as DynamicModal,b as Modal,E as ModalBody,y as ModalFooter,f as ModalHeader,C as PromptModal,h as confirmation,O as notification,O as notificationModal,T as prompt};
//# sourceMappingURL=Modal.js.map
