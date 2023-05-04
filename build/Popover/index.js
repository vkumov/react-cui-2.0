import{jsx as t,jsxs as S,Fragment as we}from"react/jsx-runtime";import{forwardRef as j,useRef as x,useEffect as Ne,createContext as Q,useContext as U,useState as A,useCallback as W,useImperativeHandle as Ce,cloneElement as Re,createElement as Ee}from"react";import{useMergeRefs as _,useFloatingTree as Ie,useFloatingNodeId as ke,useFloating as Y,offset as G,flip as V,shift as X,size as De,autoUpdate as Z,useInteractions as ee,useClick as oe,useDismiss as te,FloatingNode as Me,FloatingOverlay as Te,FloatingFocusManager as re,FloatingPortal as ze}from"@floating-ui/react";import P from"classnames";import{Transition as $}from"react-transition-group";import{useFloatingContext as ne,FloatingTreeWrapper as He}from"../FloatingProvider/index.js";import{useCustomDismiss as ae}from"../hooks/useCustomDismiss.js";import{useLockedBody as le}from"../hooks/useLockedBody.js";var b={wrapper:"Popover-module_wrapper__m7aDv",body:"Popover-module_body__ytz0O",popover_appear:"Popover-module_popover_appear__dJaAP",disappear:"Popover-module_disappear__w-dyh",popover_disappear:"Popover-module_popover_disappear__taph3",overlay:"Popover-module_overlay__u9dvj",overlay_appear:"Popover-module_overlay_appear__b1qOJ",overlay_disappear:"Popover-module_overlay_disappear__tQSBY"};const B=j(function({className:e,children:o,wrapperClassName:a,state:r,offset:n,...p},g){const f=x(null),v=_([g,f]);return Ne(()=>{var c;const l=f.current;return l&&n&&typeof n!="function"&&l.style.setProperty("--offset",`${typeof n=="number"?n:(c=n.mainAxis)!=null?c:4}px`),()=>{l&&l.style.setProperty("--offset","4px")}},[n]),t("div",{ref:v,className:P(b.wrapper,a,{[b.disappear]:r==="exiting"||r==="exited"}),...p,children:t("div",{className:P("panel panel--bordered panel--raised",b.body,e),tabIndex:-1,children:o})})}),se=Q(null),Se=({children:e,...o})=>t(se.Provider,{value:o,children:e}),je=()=>U(se),Ae=({show:e,children:o,background:a="var(--cui-background-color)",className:r})=>{const n=x(null);return t($,{in:e,mountOnEnter:!0,unmountOnExit:!0,timeout:250,nodeRef:n,children:p=>t("div",{style:{background:a},className:P(b.overlay,r,{[b.disappear]:p==="exiting"||p==="exited"}),ref:n,children:o})})},We=(e,o,a)=>{if(!e)return;if(typeof e=="boolean")return{maxWidth:`${o}px`,maxHeight:`${a-4}px`};const r={};return e.height&&(r.maxHeight=`${a-4}px`),e.width&&(r.maxWidth=`${o}px`),r},ie=Q(null),$e=()=>{const e=U(ie);if(e)return e.current},Be=j(function({children:e,element:o,onClose:a,onOpen:r,showClassName:n,overlay:p,showOverlay:g,placement:f,portalRoot:v,offset:c=4,closeRef:l,initialFocus:h,guardsFocus:d,modalFocus:O,closeOnFocusOut:F,portalId:I,wrapperClassName:w,className:k,explicitPortal:u,autoDismiss:D=!0,overlayProps:M,limitSize:N},T){const[y,s]=le(!1,"root"),[C,z]=A(D),H=Ie(),i=ke(),{x:R,y:J,reference:ce,floating:de,strategy:ue,context:E}=Y({placement:f,middleware:[G(c),V(),X({padding:{left:8,right:8}}),N?De({apply({availableHeight:m,availableWidth:Oe,elements:Fe}){Object.assign(Fe.floating.style,We(N,Oe,m))}}):void 0].filter(Boolean),open:y,onOpenChange:m=>{m&&typeof r=="function"&&r(),!m&&typeof a=="function"&&a(),s(m)},whileElementsMounted:Z,nodeId:i}),{getReferenceProps:me,getFloatingProps:fe}=ee([oe(E),te(E,{escapeKey:!1,bubbles:!1,enabled:C}),ae(E,{enabled:C})]),[ve,he]=A(g),[ge,ye]=A(p),xe=_([ce,o.ref]),K=x(null),q=_([K,de]),{root:_e,id:Pe}=ne({root:v,portalId:I,fallbackPortalId:"--cui-popover-portal"}),be=W(()=>s(!1),[s]);l&&(l.current=be);const L=x(null);return Ce(_([T,L]),()=>({close:()=>s(!1),open:()=>s(!0),setAutoDismiss:z}),[s]),S(ie.Provider,{value:L,children:[Re(o,me({ref:xe,...o.props,className:P(o.props.className,n?{[n]:y}:void 0)})),t(He,{withPortal:u||!H,portalId:Pe,portalRoot:_e,force:u?!0:void 0,children:t(Me,{id:i,children:t($,{in:y,mountOnEnter:!0,unmountOnExit:!0,timeout:250,nodeRef:K,children:m=>t(Te,{style:{zIndex:"calc(var(--cui-max-zindex, 1000) + 2)"},...M,id:i,children:t(re,{context:E,initialFocus:h??q,guards:d,modal:O,closeOnFocusOut:F,children:t(B,{ref:q,style:{position:ue,top:J??0,left:R??0},state:m,offset:c,wrapperClassName:w,...fe({className:k}),children:S(Se,{setOverlayState:he,setOverlay:ye,children:[t(Ae,{show:ve||!1,children:ge}),e]})})})})})})})]})}),pe=j(({className:e,noLine:o,...a},r)=>S(we,{children:[t("h5",{ref:r,className:P("no-margin-bottom",e),...a}),!o&&t("hr",{className:"half-margin-top"})]}));pe.displayName="PopoverTitle";function Je({onClose:e,onOpen:o,popoverComponent:a=B,placement:r,initialFocus:n,guardsFocus:p,modalFocus:g,closeOnFocusOut:f,offset:v=4,portalRoot:c,portalId:l}){const[h,d]=le(!1,"root"),{x:O,y:F,reference:I,floating:w,strategy:k,context:u,refs:D}=Y({placement:r,middleware:[G(v),V(),X({padding:{left:8,right:8}})],open:h,onOpenChange:i=>{i&&typeof o=="function"&&o(),!i&&typeof e=="function"&&e(),d(i)},whileElementsMounted:Z}),{getReferenceProps:M,getFloatingProps:N}=ee([oe(u),te(u,{bubbles:!1,escapeKey:!1}),ae(u)]),T=W(()=>d(!1),[d]),y=W(()=>d(!0),[d]),s=x(null),C=_([s,w]),{root:z,id:H}=ne({root:c,portalId:l,fallbackPortalId:"--cui-popover-portal"});return{getReferenceProps:M,reference:I,render:i=>t(ze,{root:z,id:H,children:t($,{in:h,mountOnEnter:!0,unmountOnExit:!0,timeout:250,nodeRef:s,children:R=>t(re,{context:u,initialFocus:n??w,guards:p,modal:g,closeOnFocusOut:f,children:Ee(a,{ref:C,state:R,offset:v,...N({style:{position:k,top:F??0,left:O??0}})},i)})})}),isShown:h,refs:D,close:T,open:y}}export{B as GenericPopover,Be as Popover,pe as PopoverTitle,Je as usePopover,je as usePopoverContext,$e as usePopoverHandlers};
//# sourceMappingURL=index.js.map
