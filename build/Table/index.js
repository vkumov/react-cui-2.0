import React, { forwardRef } from 'react';
import { ConditionalWrapper } from '../Conditional/index.js';
import { appendClass } from '../utils/index.js';
import { Pagination } from '../Pagination/index.js';
import { Dropdown, MenuElement } from '../Dropdown/index.js';

function _extends$2() {
    _extends$2 = Object.assign || function(target) {
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
    return _extends$2.apply(this, arguments);
}
const Wrapper = /*#__PURE__*/ React.createElement("div", {
    className: "responsive-table"
});
const GenericTable = /*#__PURE__*/ forwardRef(({ outerWrap =true , lined =false , bordered =false , striped =false , selectable =false , fixed =false , wrapped =false , compressed =false , loose =false , className =null , ...props }, forwardedRef)=>/*#__PURE__*/ React.createElement(ConditionalWrapper, {
        condition: outerWrap,
        wrapper: Wrapper
    }, /*#__PURE__*/ React.createElement("table", _extends$2({
        className: `table${appendClass(lined, "table--lined")}${appendClass(bordered, "table--bordered")}${appendClass(striped, "table--striped")}${appendClass(selectable, "table--selectable")}${appendClass(fixed, "table--fixed")}${appendClass(wrapped, "table--wrapped")}${appendClass(compressed, "table--compressed")}${appendClass(loose, "table--loose")}${appendClass(className)}`
    }, props, {
        ref: forwardedRef
    }))));

function _extends$1() {
    _extends$1 = Object.assign || function(target) {
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
    return _extends$1.apply(this, arguments);
}
const DefaultTablePagination = ({ perPageUp =false , paginationProps ={} , total , position , onPageChange , onPerPageChange  })=>{
    const [perPage, setPerPage] = React.useState(50);
    React.useEffect(()=>{
        if (typeof onPerPageChange === "function") onPerPageChange(perPage);
    }, [
        perPage,
        onPerPageChange
    ]);
    return /*#__PURE__*/ React.createElement("div", {
        className: "flex-middle"
    }, /*#__PURE__*/ React.createElement("span", {
        className: "qtr-margin-right"
    }, "Page:"), /*#__PURE__*/ React.createElement(Pagination, _extends$1({
        firstAndLast: true,
        icons: true,
        perPage: perPage,
        total: total,
        position: position,
        onPageChange: onPageChange,
        beginAt: 0,
        className: "no-margin-top"
    }, paginationProps)), /*#__PURE__*/ React.createElement("span", {
        className: "text-muted qtr-margin-left qtr-margin-right"
    }, "|"), /*#__PURE__*/ React.createElement("span", {
        className: "qtr-margin-right"
    }, "Per page:"), /*#__PURE__*/ React.createElement(Dropdown, {
        label: /*#__PURE__*/ React.createElement("a", null, perPage),
        alwaysClose: true,
        placement: perPageUp ? "top" : undefined
    }, [
        10,
        25,
        50,
        100,
        250,
        500
    ].map((v)=>/*#__PURE__*/ React.createElement(MenuElement, {
            onClick: ()=>setPerPage(v),
            key: v,
            selected: v === perPage
        }, v))));
};

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
const asArray = (v)=>Array.isArray(v) ? v : [
        v
    ];
const Table = /*#__PURE__*/ forwardRef(({ pagination =DefaultTablePagination , paginationLocation ="bottom-right" , paginationProps ={
    icons: true,
    firstAndLast: true
} , data =null , children =null , start =1 , ...props }, forwardedRef)=>{
    const [position, setPosition] = React.useState(typeof start === "number" ? start : 0);
    const [perPage, setPerPage] = React.useState(50);
    const tbody = React.useMemo(()=>children ? asArray(children).find((child)=>child.type === "tbody") : null, [
        children
    ]);
    const thead = React.useMemo(()=>children ? asArray(children).find((child)=>child.type === "thead") : null, [
        children
    ]);
    const total = React.useMemo(()=>(data ? data.length : asArray(tbody.props.children).length) || 0, [
        data,
        tbody
    ]);
    React.useEffect(()=>setPosition(0), [
        data,
        tbody
    ]);
    return /*#__PURE__*/ React.createElement(React.Fragment, null, Boolean(paginationLocation.includes("top-")) && /*#__PURE__*/ React.createElement("div", {
        className: `flex base-margin-bottom${appendClass(paginationLocation === "top-right", "flex-right")}`
    }, /*#__PURE__*/ React.createElement(pagination, {
        total,
        position,
        onPageChange: (_, p)=>setPosition(p),
        onPerPageChange: (p)=>setPerPage(p),
        paginationProps
    })), /*#__PURE__*/ React.createElement(GenericTable, _extends({}, props, {
        ref: forwardedRef
    }), thead, /*#__PURE__*/ React.createElement("tbody", null, data ? data.slice(position, position + perPage).map((row, rid)=>/*#__PURE__*/ React.createElement("tr", {
            key: rid
        }, row.map((col, cid)=>/*#__PURE__*/ React.createElement("td", {
                key: cid
            }, col)))) : asArray(tbody.props.children).slice(position, position + perPage))), Boolean(paginationLocation.includes("bottom-")) && /*#__PURE__*/ React.createElement("div", {
        className: `flex base-margin-top${appendClass(paginationLocation === "bottom-right", "flex-right")}`
    }, /*#__PURE__*/ React.createElement(pagination, {
        total,
        position,
        onPageChange: (_, p)=>setPosition(p),
        onPerPageChange: (p)=>setPerPage(p),
        perPageUp: true,
        paginationProps
    })));
});

export { DefaultTablePagination, GenericTable, Table };
//# sourceMappingURL=index.js.map
