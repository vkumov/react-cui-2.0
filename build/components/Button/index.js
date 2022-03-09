import{_ as t,a as c}from"../../tslib.es6-a57c95d4.js";import n from"react";import{a as o}from"../../index-fb409a55.js";import{s as e}from"../../style-inject.es-1f59c1d0.js";e(".cui .btn.btn--light{background:var(--cui-background-alt);border:1px solid transparent;color:var(--cui-inactive-color);transition:all .15s ease-in}.cui .btn.btn--light.hover,.cui .btn.btn--light:hover{box-shadow:inset 0 0 0 1px var(--cui-accent-color);color:var(--cui-active-color);text-decoration:none;transition:all .15s ease-in}.cui .btn.btn--light.focus,.cui .btn.btn--light:focus{box-shadow:0 0 0 var(--cui-focus-thickness) rgba(var(--cui-focus-color),var(--cui-focus-opacity)),inset 0 0 0 1px var(--cui-accent-color);opacity:1;outline:var(--cui-focus-thickness) transparent;outline-offset:1px;outline-style:none;outline-width:thin}.cui .btn.btn--light.disabled,.cui .btn.btn--light[disabled]{background-color:transparent;border:1px dotted var(--cui-inactive-color);color:var(--cui-inactive-color);opacity:1}.cui .btn.btn--light.active,.cui .btn.btn--light.selected,.cui .btn.btn--light:active{background-color:var(--cui-accent-color);box-shadow:inset 0 0 0 1px var(--cui-accent-color);color:var(--cui-color-dark);-webkit-transition:all .25s ease;transition:all .25s ease}.cui .btn-group>.btn.btn--light:active,.cui .btn-group>.btn.btn--light:focus,.cui .btn-group>.btn.btn--light:hover,.cui .btn-group>.dropdown>.btn.btn--light:active,.cui .btn-group>.dropdown>.btn.btn--light:focus,.cui .btn-group>.dropdown>.btn.btn--light:hover{box-shadow:inset 0 0 0 1px var(--cui-accent-color);outline:0}");var i=function(e){var i=e.size,r=void 0===i?"default":i,a=e.color,l=void 0===a?"primary":a,u=e.wide,s=void 0!==u&&u,d=e.justified,b=void 0!==d&&d,v=e.circle,p=void 0!==v&&v,g=e.className,f=void 0===g?null:g,h=e.asLink,m=void 0!==h&&h,x=e.style,y=void 0===x?null:x,k=e.selected,w=void 0!==k&&k,E=e.type,j=void 0===E?null:E,N=e.icon,D=void 0!==N&&N,L=t(e,["size","color","wide","justified","circle","className","asLink","style","selected","type","icon"]);return n.createElement(m?"a":"button",c(c({className:"btn".concat(o("default"!==r,"btn--".concat(r))," btn--").concat(l).concat(o(s,"btn--wide")).concat(o(b,"btn--justified")).concat(o(D,"btn--icon")).concat(o(p,"btn--circle")).concat(o(w,"selected")).concat(o(f)).concat(o(m,"flex-middle flex-center")),style:c(c({},y||{}),m?{display:"flex"}:{})},m?{}:{type:j||"button"}),L))};i.Primary=function(t){return n.createElement(i,c({},t,{color:"primary"}))},i.Secondary=function(t){return n.createElement(i,c({},t,{color:"secondary"}))},i.Success=function(t){return n.createElement(i,c({},t,{color:"success"}))},i.Dark=function(t){return n.createElement(i,c({},t,{color:"dark"}))},i.Ghost=function(t){return n.createElement(i,c({},t,{color:"ghost"}))},i.Link=function(t){return n.createElement(i,c({},t,{color:"link"}))},i.Light=function(t){return n.createElement(i,c({},t,{color:"light"}))},i.Danger=function(t){return n.createElement(i,c({},t,{color:"danger"}))};var r=function(e){var i=e.square,r=void 0!==i&&i,a=e.withDivider,l=void 0!==a&&a,u=e.className,s=void 0===u?null:u,d=t(e,["square","withDivider","className"]);return n.createElement("div",c({className:"btn-group".concat(o(r,"btn-group--square")).concat(o(l," btn-group--divider")).concat(o(s))},d))};export{i as Button,r as ButtonGroup};
