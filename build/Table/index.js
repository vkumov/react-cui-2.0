import React, { forwardRef } from 'react';
import { ConditionalWrapper } from '../Conditional/index.ts';
import { appendClass } from '../utils/index.ts';
import { Pagination } from '../Pagination/index.ts';
import { Dropdown } from '../Dropdown/index.ts';

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
function _objectWithoutProperties$1(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$1(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var Wrapper = /*#__PURE__*/ React.createElement("div", {
    className: "responsive-table"
});
var GenericTable = /*#__PURE__*/ forwardRef(function(_param, forwardedRef)  {
    var _outerWrap = _param.outerWrap, outerWrap = _outerWrap === void 0 ? true : _outerWrap, _lined = _param.lined, lined = _lined === void 0 ? false : _lined, _bordered = _param.bordered, bordered = _bordered === void 0 ? false : _bordered, _striped = _param.striped, striped = _striped === void 0 ? false : _striped, _selectable = _param.selectable, selectable = _selectable === void 0 ? false : _selectable, _fixed = _param.fixed, fixed = _fixed === void 0 ? false : _fixed, _wrapped = _param.wrapped, wrapped = _wrapped === void 0 ? false : _wrapped, _compressed = _param.compressed, compressed = _compressed === void 0 ? false : _compressed, _loose = _param.loose, loose = _loose === void 0 ? false : _loose, _className = _param.className, className = _className === void 0 ? null : _className, props = _objectWithoutProperties$1(_param, [
        "outerWrap",
        "lined",
        "bordered",
        "striped",
        "selectable",
        "fixed",
        "wrapped",
        "compressed",
        "loose",
        "className"
    ]);
    return React.createElement(ConditionalWrapper, {
        condition: outerWrap,
        wrapper: Wrapper
    }, /*#__PURE__*/ React.createElement("table", _extends$2({
        className: "table".concat(appendClass(lined, "table--lined")).concat(appendClass(bordered, "table--bordered")).concat(appendClass(striped, "table--striped")).concat(appendClass(selectable, "table--selectable")).concat(appendClass(fixed, "table--fixed")).concat(appendClass(wrapped, "table--wrapped")).concat(appendClass(compressed, "table--compressed")).concat(appendClass(loose, "table--loose")).concat(appendClass(className))
    }, props, {
        ref: forwardedRef
    })));
});

function _arrayLikeToArray$1(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$1(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _iterableToArrayLimit$1(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$1() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$1(arr, i) {
    return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
}
function _unsupportedIterableToArray$1(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}
var DefaultTablePagination = function(param) {
    var _perPageUp = param.perPageUp, perPageUp = _perPageUp === void 0 ? false : _perPageUp, _paginationProps = param.paginationProps, paginationProps = _paginationProps === void 0 ? {} : _paginationProps, total = param.total, position = param.position, onPageChange = param.onPageChange, onPerPageChange = param.onPerPageChange;
    var ref = _slicedToArray$1(React.useState(50), 2), perPage = ref[0], setPerPage = ref[1];
    React.useEffect(function() {
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
        type: "link",
        header: perPage,
        openTo: "left",
        alwaysClose: true,
        up: perPageUp
    }, [
        10,
        25,
        50,
        100,
        250,
        500
    ].map(function(v) {
        return /*#__PURE__*/ React.createElement(Dropdown.Element, {
            onClick: function() {
                return setPerPage(v);
            },
            key: v,
            selected: v === perPage
        }, v);
    })));
};

function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var asArray = function(v) {
    return Array.isArray(v) ? v : [
        v
    ];
};
var Table = /*#__PURE__*/ forwardRef(function(_param, forwardedRef) {
    var _pagination = _param.pagination, pagination = _pagination === void 0 ? DefaultTablePagination : _pagination, _paginationLocation = _param.paginationLocation, paginationLocation = _paginationLocation === void 0 ? "bottom-right" : _paginationLocation, _paginationProps = _param.paginationProps, paginationProps = _paginationProps === void 0 ? {
        icons: true,
        firstAndLast: true
    } : _paginationProps, _data = _param.data, data = _data === void 0 ? null : _data, _children = _param.children, children = _children === void 0 ? null : _children, _start = _param.start, start = _start === void 0 ? 1 : _start, props = _objectWithoutProperties(_param, [
        "pagination",
        "paginationLocation",
        "paginationProps",
        "data",
        "children",
        "start"
    ]);
    var ref = _slicedToArray(React.useState(typeof start === "number" ? start : 0), 2), position = ref[0], setPosition = ref[1];
    var ref1 = _slicedToArray(React.useState(50), 2), perPage = ref1[0], setPerPage = ref1[1];
    var tbody = React.useMemo(function() {
        return children ? asArray(children).find(function(child) {
            return child.type === "tbody";
        }) : null;
    }, [
        children
    ]);
    var thead = React.useMemo(function() {
        return children ? asArray(children).find(function(child) {
            return child.type === "thead";
        }) : null;
    }, [
        children
    ]);
    var total = React.useMemo(function() {
        return (data ? data.length : asArray(tbody.props.children).length) || 0;
    }, [
        data,
        tbody
    ]);
    React.useEffect(function() {
        return setPosition(0);
    }, [
        data,
        tbody
    ]);
    return /*#__PURE__*/ React.createElement(React.Fragment, null, Boolean(paginationLocation.includes("top-")) && /*#__PURE__*/ React.createElement("div", {
        className: "flex base-margin-bottom".concat(appendClass(paginationLocation === "top-right", "flex-right"))
    }, /*#__PURE__*/ React.createElement(pagination, {
        total: total,
        position: position,
        onPageChange: function(_, p) {
            return setPosition(p);
        },
        onPerPageChange: function(p) {
            return setPerPage(p);
        },
        paginationProps: paginationProps
    })), /*#__PURE__*/ React.createElement(GenericTable, _extends({}, props, {
        ref: forwardedRef
    }), thead, /*#__PURE__*/ React.createElement("tbody", null, data ? data.slice(position, position + perPage).map(function(row, rid) {
        return /*#__PURE__*/ React.createElement("tr", {
            key: rid
        }, row.map(function(col, cid) {
            return /*#__PURE__*/ React.createElement("td", {
                key: cid
            }, col);
        }));
    }) : asArray(tbody.props.children).slice(position, position + perPage))), Boolean(paginationLocation.includes("bottom-")) && /*#__PURE__*/ React.createElement("div", {
        className: "flex base-margin-top".concat(appendClass(paginationLocation === "bottom-right", "flex-right"))
    }, /*#__PURE__*/ React.createElement(pagination, {
        total: total,
        position: position,
        onPageChange: function(_, p) {
            return setPosition(p);
        },
        onPerPageChange: function(p) {
            return setPerPage(p);
        },
        perPageUp: true,
        paginationProps: paginationProps
    })));
});

export { DefaultTablePagination, GenericTable, Table };
//# sourceMappingURL=index.js.map
