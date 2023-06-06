import{jsx as n,jsxs as x,Fragment as D}from"react/jsx-runtime";import{forwardRef as v,isValidElement as h,useState as R,useEffect as k,useRef as I,Children as S,cloneElement as B}from"react";import{useFloatingTree as G,useFloatingNodeId as pe,useFloatingParentNodeId as ue,useFloating as me,offset as we,flip as fe,shift as ve,size as he,autoUpdate as _e,useInteractions as ge,useHover as ye,safePolygon as Ne,useClick as xe,useRole as De,useDismiss as ke,useListNavigation as be,useTypeahead as Ce,useMergeRefs as X,FloatingNode as Ee,FloatingOverlay as Fe,FloatingFocusManager as Re}from"@floating-ui/react";import s from"classnames";import{Transition as Ie}from"react-transition-group";import Pe from"react-use-event-hook";import{useFloatingContext as Me,FloatingTreeWrapper as Le}from"../FloatingProvider/index.js";import{useCustomDismiss as Oe}from"../hooks/useCustomDismiss.js";var d={submenu:"Dropdown-module_submenu__uXrqH",dropdown:"Dropdown-module_dropdown__QOREt",active:"Dropdown-module_active__p0UcD",appear:"Dropdown-module_appear__7ZQqu",dropdown_appear:"Dropdown-module_dropdown_appear__FJDEz",disappear:"Dropdown-module_disappear__9T3XQ",dropdown_disappear:"Dropdown-module_dropdown_disappear__3is4U",menu_root:"Dropdown-module_menu_root__in1ol",with_chevron:"Dropdown-module_with_chevron__ngan7"};const P=v(({selected:l,className:o,icon:r,children:t,submenu:u,..._},g)=>n("a",{ref:g,..._,className:s(o,{selected:l&&!u,[d.submenu]:u}),children:r?h(r)?x(D,{children:[r,h(t)?t:n("span",{className:"qtr-margin-left",children:t})]}):x(D,{children:[n("span",{className:r}),n("span",{className:"qtr-margin-left",children:t})]}):t}));P.displayName="MenuElement";const Te=({onClick:l,children:o})=>{const r=G();return k(()=>{const t=r;return t?.events.on("click",l),()=>{t?.events.off("click",l)}},[r,l]),n(D,{children:o})},M=v(({children:l,label:o,noChevron:r,placement:t,strategy:u,alwaysClose:_,onOpen:g,onClose:L,isOpen:f,nested:i,withSizeLimit:V,portalId:Y,portalRoot:ee,icon:ne,explicitPortal:O,...T},oe)=>{const[p,m]=R(f??!1),[A,b]=R(null),[C,q]=R(!1);k(()=>{typeof f<"u"&&m(f)},[f]);const z=I([]),re=I(S.map(l,e=>h(e)?e.props.label:null)),w=G(),H=pe(),K=ue();i!=null||(i=K!=null);const{root:te,id:ie}=Me({root:ee,portalId:Y,fallbackPortalId:"--cui-dropdown-portal"}),{x:U,y:W,strategy:le,refs:E,context:c}=me({open:p,onOpenChange:e=>{typeof g=="function"&&e&&g(),typeof L=="function"&&!e&&L(),m(e)},middleware:[we({mainAxis:i?0:2,alignmentAxis:i?-5:0}),fe(),ve(),V?he({apply({availableHeight:e,availableWidth:a,elements:N}){Object.assign(N.floating.style,{maxWidth:`${a}px`,maxHeight:`${e-4}px`})}}):void 0].filter(Boolean),placement:i?"right-start":t,nodeId:H,whileElementsMounted:_e,strategy:u}),{getReferenceProps:j,getFloatingProps:ae,getItemProps:se}=ge([ye(c,{handleClose:Ne({requireIntent:!0}),enabled:i&&C,delay:{open:75}}),xe(c,{toggle:!i,event:"mousedown",ignoreMouse:i}),De(c,{role:"menu"}),ke(c,{bubbles:!0,outsidePress:!0,escapeKey:!1}),Oe(c),be(c,{listRef:z,activeIndex:A,nested:i,onNavigate:b}),Ce(c,{listRef:re,onMatch:p?b:void 0,activeIndex:A})]),F=Pe(()=>{var e;_&&m(!1),K===null&&((e=E.domReference.current)==null||e.focus())});k(()=>{function e(){q(!0)}function a(){q(!1)}return window.addEventListener("pointermove",e,{once:!0,capture:!0}),window.addEventListener("keydown",a,!0),()=>{window.removeEventListener("pointermove",e,{capture:!0}),window.removeEventListener("keydown",a,!0)}},[C]);const y=I(null),de=X([y,E.setFloating]),Q=X([oe,E.setReference]);return k(()=>{const e=a=>{y.current&&y.current.contains(a.target)&&(w?w.events.emit("click"):F())};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[w,F]),x(D,{children:[h(o)?B(o,{...j({...T,ref:Q,onClick(e){e.stopPropagation(),e.currentTarget.focus()},...i?{className:s("menu_item",o.props.className,{open:p}),role:"menuitem",onKeyDown(e){(e.key==="ArrowUp"||e.key==="ArrowDown")&&m(!1)}}:{className:s(d.menu_root,o.props.className,{open:p,[d.with_chevron]:!r})}})}):n(P,{submenu:i,icon:ne,...j({...T,ref:Q,onClick(e){e.stopPropagation(),e.currentTarget.focus()},...i?{className:s("menu_item",{open:p}),role:"menuitem",onKeyDown(e){(e.key==="ArrowUp"||e.key==="ArrowDown")&&m(!1)}}:{className:s(d.menu_root,{open:p,[d.with_chevron]:!r})}}),children:o}),n(Ie,{in:p,mountOnEnter:!0,unmountOnExit:!0,appear:!0,timeout:{enter:100,exit:250},nodeRef:y,children:e=>n(Le,{withPortal:O||!w,force:O?!0:void 0,portalId:ie,portalRoot:te,children:n(Ee,{id:H,children:n(Te,{onClick:F,children:n(Fe,{style:{zIndex:i?50:"calc(var(--cui-max-zindex, 1000) + 2)",overflow:"visible"},children:n(Re,{context:c,modal:!i,returnFocus:!i,order:["reference","content"],children:n("div",{...ae({className:s("dropdown",d.dropdown,{[d.disappear]:e==="exiting"||e==="exited",[d.appear]:e==="entering",[d.active]:e==="entered"}),ref:de,style:{position:le,top:W??0,left:U??0},onKeyDown(a){a.key==="Tab"&&m(!1)}}),children:n("div",{className:"dropdown__menu",onClick:_?()=>{w?.events.emit("click")}:void 0,children:S.map(l,(a,N)=>h(a)&&B(a,se({...a.props,tabIndex:-1,role:"menuitem",className:s("menu_item",a.props.className),ref(ce){z.current[N]=ce},onPointerEnter(){C&&b(N)}})))})})})})})})})})]})});M.displayName="Menu";const Z=v(({children:l,placement:o="bottom-start",...r},t)=>n(M,{placement:o,...r,nested:!1,ref:t,children:l}));Z.displayName="Dropdown";const $=v(({className:l,...o},r)=>n("div",{...o,className:s("divider",l),ref:r}));$.displayName="MenuDivider";const J=v(({className:l,header:o,children:r,...t},u)=>x("div",{className:s("dropdown__group",l),...t,ref:u,children:[o?n("div",{className:"dropdown__group-header",children:o}):null,r]}));J.displayName="MenuGroup";export{Z as Dropdown,M as Menu,$ as MenuDivider,P as MenuElement,J as MenuGroup};
//# sourceMappingURL=index.js.map
