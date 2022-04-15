import React from 'react';

var PaginationContext = React.createContext(null);

function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var Button = function(param1) {
    var content = param1.content, position = param1.position, _active = param1.active, active = _active === void 0 ? false : _active, _disabled = param1.disabled, disabled = _disabled === void 0 ? false : _disabled;
    return /*#__PURE__*/ React.createElement(PaginationContext.Consumer, null, function(param) {
        var changePage = param.changePage;
        return /*#__PURE__*/ React.createElement("li", {
            className: active ? "active" : ""
        }, /*#__PURE__*/ React.createElement("a", {
            className: disabled ? "disabled" : "",
            onClick: function(e) {
                return changePage(e, position);
            }
        }, content));
    });
};
var FirstPrev = function() {
    var ref = React.useContext(PaginationContext), perPage = ref.perPage, firstAndLast = ref.firstAndLast, position = ref.position, icons = ref.icons, prev = ref.prev, beginAt = ref.beginAt;
    var disabled = position < perPage + beginAt;
    var r = [];
    if (icons && firstAndLast) r.push(/*#__PURE__*/ React.createElement(Button, {
        content: /*#__PURE__*/ React.createElement("span", {
            className: "icon-chevron-left-double"
        }),
        disabled: disabled,
        key: "first-page",
        position: beginAt
    }));
    r.push(/*#__PURE__*/ React.createElement(Button, {
        content: icons ? /*#__PURE__*/ React.createElement("span", {
            className: "icon-chevron-left"
        }) : prev,
        disabled: disabled,
        key: "previous-page",
        position: position - perPage
    }));
    return /*#__PURE__*/ React.createElement(React.Fragment, null, r);
};
var NextLast = function() {
    var ref = React.useContext(PaginationContext), beginAt = ref.beginAt, perPage = ref.perPage, total = ref.total, firstAndLast = ref.firstAndLast, position = ref.position, icons = ref.icons, next = ref.next;
    var pages = Math.floor(total / perPage) + 1;
    var disabled = position > total - perPage + beginAt;
    var r = [];
    r.push(/*#__PURE__*/ React.createElement(Button, {
        content: icons ? /*#__PURE__*/ React.createElement("span", {
            className: "icon-chevron-right"
        }) : next,
        disabled: disabled,
        key: "next-page",
        position: position + perPage
    }));
    if (icons && firstAndLast) r.push(/*#__PURE__*/ React.createElement(Button, {
        content: /*#__PURE__*/ React.createElement("span", {
            className: "icon-chevron-right-double"
        }),
        disabled: disabled,
        key: "last-page",
        position: (pages - 1) * perPage + beginAt
    }));
    return /*#__PURE__*/ React.createElement(React.Fragment, null, r);
};
var Pages = function(param2) {
    var start = param2.start, finish = param2.finish;
    return /*#__PURE__*/ React.createElement(PaginationContext.Consumer, null, function(param) {
        var perPage = param.perPage, active = param.active, beginAt = param.beginAt;
        return _toConsumableArray(Array(finish - start + 1)).map(function(v, i) {
            var current = start + i;
            return /*#__PURE__*/ React.createElement(Button, {
                active: active === current,
                content: "".concat(current),
                key: "".concat(current, "-page"),
                position: (current - 1) * perPage + beginAt
            });
        });
    });
};
var Pagination = function(_param) {
    var _beginAt = _param.beginAt, beginAt = _beginAt === void 0 ? 1 : _beginAt, _rounded = _param.rounded, rounded = _rounded === void 0 ? false : _rounded, _firstAndLast = _param.firstAndLast, firstAndLast = _firstAndLast === void 0 ? true : _firstAndLast, _icons = _param.icons, icons = _icons === void 0 ? false : _icons, _next = _param.next, next = _next === void 0 ? "Next" : _next, _perPage = _param.perPage, perPage = _perPage === void 0 ? 1 : _perPage, _prev = _param.prev, prev = _prev === void 0 ? "Previous" : _prev, _size = _param.size, size = _size === void 0 ? "default" : _size, _className = _param.className, className = _className === void 0 ? null : _className, position = _param.position, total = _param.total, onPageChange = _param.onPageChange, rest = _objectWithoutProperties(_param, [
        "beginAt",
        "rounded",
        "firstAndLast",
        "icons",
        "next",
        "perPage",
        "prev",
        "size",
        "className",
        "position",
        "total",
        "onPageChange"
    ]);
    var pages = Math.ceil(total / perPage);
    var active = Math.floor(position / perPage) + 1;
    var changePage = function(e, newPosition) {
        if (typeof onPageChange === "function") onPageChange(e, newPosition);
    };
    return /*#__PURE__*/ React.createElement(PaginationContext.Provider, {
        value: {
            active: active,
            beginAt: beginAt,
            changePage: changePage,
            firstAndLast: firstAndLast,
            icons: icons,
            next: next,
            perPage: perPage,
            position: position,
            prev: prev,
            total: total
        }
    }, /*#__PURE__*/ React.createElement("ul", _extends({
        className: "pagination".concat(size !== "default" ? " pagination--".concat(size) : "").concat(rounded ? " pagination--rounded" : "").concat(className ? " ".concat(className) : "")
    }, rest), /*#__PURE__*/ React.createElement(FirstPrev, null), active < 4 || pages === 4 ? /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(Pages, {
        start: 1,
        finish: Math.min(pages, 4)
    }), pages > 4 ? /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("span", {
        className: "icon-more"
    })), /*#__PURE__*/ React.createElement(Button, {
        content: pages,
        key: "".concat(pages, "-page"),
        position: (pages - 1) * perPage + beginAt
    })) : null) : /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(Button, {
        active: active === beginAt,
        content: "1",
        key: "1-page",
        position: beginAt
    }), /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("span", {
        className: "icon-more"
    })), active < pages - 2 ? /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(Pages, {
        start: active - 1,
        finish: active + 1
    }), /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("span", {
        className: "icon-more"
    })), /*#__PURE__*/ React.createElement(Button, {
        active: active === pages,
        content: pages,
        key: "".concat(pages, "-page"),
        position: (pages - 1) * perPage + beginAt
    })) : /*#__PURE__*/ React.createElement(Pages, {
        start: pages - 3,
        finish: pages
    })), /*#__PURE__*/ React.createElement(NextLast, null)));
};

export { Pagination };
//# sourceMappingURL=index.js.map
