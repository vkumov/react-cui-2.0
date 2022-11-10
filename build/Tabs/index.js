import React from 'react';
import { ConditionalWrapper, DisplayIf } from '../Conditional/index.js';
import { appendClass } from '../utils/index.js';
import { usePrevious } from '../hooks/usePrevious.js';

function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
const firstDefined = (...args)=>args.find((el)=>typeof el !== "undefined" && el !== null);
const Tab = ({ active =false , className =null , activeClassName =null , unmountInactive =false , children  })=>{
    if (!active && unmountInactive) return null;
    return /*#__PURE__*/ React.createElement("div", {
        className: `tab-pane${appendClass(active, "active")}${appendClass(active && activeClassName, activeClassName)}${appendClass(className)}`
    }, children);
};
const isActive = (openTab, id, idx)=>openTab === null ? idx === 0 : openTab === firstDefined(id, idx);
const TabsHeader = ({ tabsClassName =null , center =false , right =false , justified =false , embossed =false , bordered =false , vertical =false , inline =false , openTab =null , sticky =false , onTabChange , children  })=>/*#__PURE__*/ React.createElement("ul", {
        className: `tabs${appendClass(tabsClassName)}${appendClass(center, "tabs--centered")}${appendClass(right, "tabs--right")}${appendClass(justified, "tabs--justified")}${appendClass(embossed, "tabs--embossed")}${appendClass(bordered, "tabs--bordered")}${appendClass(vertical, "tabs--vertical")}${appendClass(inline, "tabs--inline")}`,
        style: sticky ? {
            position: "sticky",
            top: "0"
        } : {}
    }, React.Children.map(children, (child, idx)=>{
        if (!/*#__PURE__*/ React.isValidElement(child)) return child;
        const { props: { id , title  }  } = child;
        return /*#__PURE__*/ React.createElement("li", {
            className: `tab${appendClass(isActive(openTab, id, idx), "active")}`,
            key: firstDefined(id, idx)
        }, /*#__PURE__*/ React.createElement("a", {
            onClick: ()=>onTabChange(firstDefined(id, idx))
        }, title));
    }));
const composeColumnSize = (columnWidth)=>{
    if (typeof columnWidth === "string" || typeof columnWidth === "number") return `col-${columnWidth}`;
    return Object.keys(columnWidth).map((k)=>`col-${k}-${columnWidth[k]}`).join(" ");
};
const ColumnWrap = ({ columnWidth , className , ...props })=>/*#__PURE__*/ React.createElement("div", _extends({
        className: `${composeColumnSize(columnWidth)}${appendClass(className)}`
    }, props));
const Tabs = ({ defaultTab =null , tabsClassName =null , contentClassName =null , center =false , right =false , justified =false , embossed =false , bordered =false , vertical =false , sticky =false , inline =false , renderHeader =(header)=>header , renderBody =(body)=>body , onTabChange =null , leftColumn ={
    columnWidth: 3
} , rightColumn ={
    columnWidth: 9
} , rowProps: { className: rowClassName , ...rowProps } = {} , beforeTabChange =null , children  })=>{
    const [openTab, setOpenTab] = React.useState(defaultTab || null);
    const prevTab = usePrevious(openTab);
    React.useEffect(()=>{
        setOpenTab(defaultTab);
    }, [
        defaultTab
    ]);
    React.useEffect(()=>{
        (async ()=>{
            if (openTab === prevTab) return;
            if (typeof beforeTabChange === "function" && !await beforeTabChange(prevTab, openTab)) setOpenTab(prevTab);
            if (typeof onTabChange === "function") onTabChange(openTab);
        })();
    }, [
        openTab,
        prevTab
    ]);
    const header = /*#__PURE__*/ React.createElement(ConditionalWrapper, {
        condition: vertical,
        wrapper: /*#__PURE__*/ React.createElement(ColumnWrap, _extends({}, leftColumn))
    }, renderHeader(/*#__PURE__*/ React.createElement(TabsHeader, {
        tabsClassName: tabsClassName,
        center: center,
        right: right,
        justified: justified,
        embossed: embossed,
        bordered: bordered,
        vertical: vertical,
        sticky: sticky,
        inline: inline,
        openTab: openTab,
        onTabChange: setOpenTab
    }, children)));
    const body = /*#__PURE__*/ React.createElement(ConditionalWrapper, {
        condition: vertical,
        wrapper: /*#__PURE__*/ React.createElement(ColumnWrap, _extends({}, rightColumn))
    }, renderBody(/*#__PURE__*/ React.createElement("div", {
        className: `tab-content${contentClassName ? ` ${contentClassName}` : ""}`
    }, React.Children.map(children, (child, idx)=>/*#__PURE__*/ React.isValidElement(child) ? /*#__PURE__*/ React.cloneElement(child, {
            active: isActive(openTab, child.props.id, idx)
        }) : child))));
    return /*#__PURE__*/ React.createElement(ConditionalWrapper, {
        condition: vertical,
        wrapper: /*#__PURE__*/ React.createElement("div", _extends({
            className: `row${appendClass(rowClassName)}`,
            style: sticky ? {
                position: "relative"
            } : {}
        }, rowProps))
    }, /*#__PURE__*/ React.createElement(DisplayIf, {
        condition: vertical && !right || !vertical
    }, header), body, /*#__PURE__*/ React.createElement(DisplayIf, {
        condition: vertical && right
    }, header));
};

export { Tab, Tabs, TabsHeader };
//# sourceMappingURL=index.js.map
