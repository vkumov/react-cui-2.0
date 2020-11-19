import e from"react";import t from"prop-types";import{_ as n,a as i}from"../../tslib.es6-633881f1.js";import{a as o}from"../../index-74b9c8d0.js";import{DisplayIf as r,ConditionalWrapper as a}from"../Conditional.js";import s from"react-dom";import{ModalBody as l}from"./Body.js";import{ModalFooter as u}from"./Footer.js";import c from"react-modal";import{ModalHeader as d}from"./Header.js";var p=!1,m="production"!==process.env.NODE_ENV?t.oneOfType([t.number,t.shape({enter:t.number,exit:t.number,appear:t.number}).isRequired]):null,f=("production"!==process.env.NODE_ENV&&t.oneOfType([t.string,t.shape({enter:t.string,exit:t.string,active:t.string}),t.shape({enter:t.string,enterDone:t.string,enterActive:t.string,exit:t.string,exitDone:t.string,exitActive:t.string})]),e.createContext(null)),E=function(t){var n,i;function o(e,n){var i;i=t.call(this,e,n)||this;var o,r=n&&!n.isMounting?e.enter:e.appear;return i.appearStatus=null,e.in?r?(o="exited",i.appearStatus="entering"):o="entered":o=e.unmountOnExit||e.mountOnEnter?"unmounted":"exited",i.state={status:o},i.nextCallback=null,i}i=t,(n=o).prototype=Object.create(i.prototype),n.prototype.constructor=n,n.__proto__=i,o.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var r=o.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var e,t,n,i=this.props.timeout;return e=t=n=i,null!=i&&"number"!=typeof i&&(e=i.exit,t=i.enter,n=void 0!==i.appear?i.appear:t),{exit:e,enter:t,appear:n}},r.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},r.performEnter=function(e){var t=this,n=this.props.enter,i=this.context?this.context.isMounting:e,o=this.props.nodeRef?[i]:[s.findDOMNode(this),i],r=o[0],a=o[1],l=this.getTimeouts(),u=i?l.appear:l.enter;!e&&!n||p?this.safeSetState({status:"entered"},(function(){t.props.onEntered(r)})):(this.props.onEnter(r,a),this.safeSetState({status:"entering"},(function(){t.props.onEntering(r,a),t.onTransitionEnd(u,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(r,a)}))}))})))},r.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),i=this.props.nodeRef?void 0:s.findDOMNode(this);t&&!p?(this.props.onExit(i),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(i),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(i)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(i)}))},r.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},r.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(i){n&&(n=!1,t.nextCallback=null,e(i))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},r.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:s.findDOMNode(this),i=null==e&&!this.props.addEndListener;if(n&&!i){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],r=o[0],a=o[1];this.props.addEndListener(r,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},r.render=function(){var t=this.state.status;if("unmounted"===t)return null;var n=this.props,i=n.children,o=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return e.createElement(f.Provider,{value:null},"function"==typeof i?i(t,o):e.cloneElement(e.Children.only(i),o))},o}(e.Component);function x(){}E.contextType=f,E.propTypes="production"!==process.env.NODE_ENV?{nodeRef:t.shape({current:"undefined"==typeof Element?t.any:t.instanceOf(Element)}),children:t.oneOfType([t.func.isRequired,t.element.isRequired]).isRequired,in:t.bool,mountOnEnter:t.bool,unmountOnExit:t.bool,appear:t.bool,enter:t.bool,exit:t.bool,timeout:function(e){var t=m;e.addEndListener||(t=t.isRequired);for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];return t.apply(void 0,[e].concat(i))},addEndListener:t.func,onEnter:t.func,onEntering:t.func,onEntered:t.func,onExit:t.func,onExiting:t.func,onExited:t.func}:{},E.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:x,onEntering:x,onEntered:x,onExit:x,onExiting:x,onExited:x},E.UNMOUNTED="unmounted",E.EXITED="exited",E.ENTERING="entering",E.ENTERED="entered",E.EXITING="exiting";var h=function(t){var s=t.size,l=void 0===s?null:s,u=t.autoClose,p=void 0===u||u,m=t.animationDuration,f=void 0===m?250:m,x=t.closeIcon,h=void 0!==x&&x,v=t.title,g=void 0===v?null:v,b=t.closeHandle,O=void 0===b?null:b,C=t.left,N=void 0!==C&&C,S=t.transitionEvents,k=void 0===S?null:S,y=t.dialogProps,T=void 0===y?null:y,_=t.contentProps,R=void 0===_?null:_,D=t.maximize,z=void 0!==D&&D,j=t.children,P=t.isOpen,q=n(t,["size","autoClose","animationDuration","closeIcon","title","closeHandle","left","transitionEvents","dialogProps","contentProps","maximize","children","isOpen"]),M=e.useState(!1),L=M[0],I=M[1];e.useEffect((function(){return I(!1)}),[P]);var F=e.useMemo((function(){return L?"full":l}),[L,l]),H=e.useCallback((function(){I((function(e){return!e}))}),[]);return e.createElement(E,i({in:P,mountOnEnter:!0,unmountOnExit:!0,timeout:f},k),(function(t){return e.createElement(c,i({},q,{onRequestClose:p&&O?O:void 0,overlayClassName:"modal-backdrop",isOpen:["entering","entered"].includes(t),className:"modal"+o(F,"modal--"+F)+o(N,"modal--left"),closeTimeoutMS:"object"==typeof f?f.exit:f}),e.createElement("div",i({className:"modal__dialog"},T,{onClick:function(e){return e.stopPropagation()}}),e.createElement("div",i({className:"modal__content"},R),e.createElement(r,{condition:!(!h||!O)||z},e.createElement(a,{condition:!(!h||!O)&&z,wrapper:e.createElement("div",{className:"modal__close"})},e.createElement(r,{condition:z},e.createElement("a",{className:""+o(!(h&&O),"modal__close")+o(h&&O,"qtr-margin-right"),onClick:H},e.createElement("span",{className:L?"icon-minimize":"icon-maximize"}))),e.createElement(r,{condition:!(!h||!O)},e.createElement("a",{className:z?"":"modal__close",onClick:O},e.createElement("span",{className:"icon-close"}))))),e.createElement(r,{condition:!!g},e.createElement(d,null,e.createElement("h1",{className:"modal__title"},g))),j)))}))};h.propTypes={size:t.oneOf(["small","default","large","full","fluid"]),closeIcon:t.bool,closeHandle:t.func,title:t.string,isOpen:t.bool.isRequired,autoClose:t.bool,left:t.bool,children:t.node.isRequired,transitionEvents:t.objectOf(t.func),dialogProps:t.shape({}),contentProps:t.shape({}),maximize:t.bool},h.Small=function(t){return e.createElement(h,i({},t,{size:"small"}))},h.Large=function(t){return e.createElement(h,i({},t,{size:"large"}))},h.Full=function(t){return e.createElement(h,i({},t,{size:"full"}))},h.Fluid=function(t){return e.createElement(h,i({},t,{size:"fluid"}))},h.Header=d,h.Body=l,h.Footer=u;export{h as Modal};
