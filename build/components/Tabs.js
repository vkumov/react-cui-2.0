import e from"react";import t from"prop-types";import{a}from"../index-be24eb93.js";import{C as n,D as i}from"../Conditional-4aafc147.js";const r=t.oneOfType([t.number,t.string]),o=(...e)=>e.find(e=>null!=e),s=({children:t,active:a})=>e.createElement("div",{className:"tab-pane"+(a?" active":"")},t);s.propTypes={id:r.isRequired,active:t.bool,title:t.node.isRequired,children:t.node.isRequired},s.defaultProps={active:!1};const l=t.oneOfType([t.arrayOf(s),s]),d=(e,t,a)=>null===e?0===a:e===o(t,a),c=({tabsClassName:t,center:n,right:i,justified:r,embossed:s,bordered:l,vertical:c,sticky:b,inline:m,openTab:p,onTabChange:u,children:f})=>e.createElement("ul",{className:`tabs${a(t)}${a(n,"tabs--centered")}${a(i,"tabs--right")}${a(r,"tabs--justified")}${a(s,"tabs--embossed")}${a(l,"tabs--bordered")}${a(c,"tabs--vertical")}${a(m,"tabs--inline")}`,style:b?{position:"sticky",top:"0"}:{}},e.Children.map(f,({props:{id:t,title:n}},i)=>e.createElement("li",{className:"tab"+a(d(p,t,i),"active"),key:o(t,i)},e.createElement("a",{onClick:()=>u(o(t,i))},n))));c.propTypes={tabsClassName:t.string,center:t.bool,right:t.bool,justified:t.bool,embossed:t.bool,bordered:t.bool,vertical:t.bool,sticky:t.bool,inline:t.bool,openTab:r,onTabChange:t.func.isRequired,children:l.isRequired},c.defaultProps={tabsClassName:t.string,center:!1,right:!1,justified:!1,embossed:!1,bordered:!1,vertical:!1,inline:!1,openTab:null,sticky:!1};const b=({children:t,defaultTab:a,tabsClassName:r,contentClassName:o,center:s,right:l,justified:b,embossed:m,bordered:p,vertical:u,sticky:f,inline:h,renderHeader:y,renderBody:C,onTabChange:v})=>{const[g,T]=e.useState(a||null),N=e.useCallback(e=>{"function"==typeof v&&v(e),T(e)},[v]),E=e.createElement(n,{condition:u,wrapper:e.createElement("div",{className:"col-md-3"})},y(e.createElement(c,{tabsClassName:r,center:s,right:l,justified:b,embossed:m,bordered:p,vertical:u,sticky:f,inline:h,openTab:g,onTabChange:N},t))),k=e.createElement(n,{condition:u,wrapper:e.createElement("div",{className:"col-md-9"})},C(e.createElement("div",{className:"tab-content"+(o?" "+o:"")},e.Children.map(t,(t,a)=>e.cloneElement(t,{active:d(g,t.props.id,a)})))));return e.createElement(n,{condition:u,wrapper:e.createElement("div",{className:"row",style:f?{position:"relative"}:{}})},e.createElement(i,{condition:u&&!l},E),k,e.createElement(i,{condition:u&&l},E))};b.propTypes={children:l.isRequired,defaultTab:r,tabsClassName:t.string,contentClassName:t.string,center:t.bool,right:t.bool,justified:t.bool,embossed:t.bool,bordered:t.bool,vertical:t.bool,sticky:t.bool,inline:t.bool,renderHeader:t.func,renderBody:t.func,onTabChange:t.func},b.defaultProps={defaultTab:null,tabsClassName:null,contentClassName:null,center:!1,right:!1,justified:!1,embossed:!1,bordered:!1,vertical:!1,sticky:!1,inline:!1,renderHeader:e=>e,renderBody:e=>e,onTabChange:null};export{s as Tab,b as Tabs,c as TabsHeader};
//# sourceMappingURL=Tabs.js.map
