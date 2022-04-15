import React from 'react';

var Accordion = function(param) {
    var children = param.children, _toggles = param.toggles, toggles = _toggles === void 0 ? false : _toggles, _bordered = param.bordered, bordered = _bordered === void 0 ? false : _bordered;
    return /*#__PURE__*/ React.createElement("ul", {
        className: "accordion".concat(bordered ? " accordion--bordered" : "")
    }, React.Children.map(children, function(child) {
        return /*#__PURE__*/ React.isValidElement(child) ? /*#__PURE__*/ React.cloneElement(child, {
            toggles: toggles
        }) : null;
    }));
};

function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
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
var AccordionElement = function(param) {
    var children = param.children, _defaultOpen = param.defaultOpen, defaultOpen = _defaultOpen === void 0 ? false : _defaultOpen, _toggles = param.toggles, toggles = _toggles === void 0 ? false : _toggles, title = param.title;
    var ref = _slicedToArray(React.useState(defaultOpen), 2), isOpen = ref[0], setIsOpen = ref[1];
    return /*#__PURE__*/ React.createElement("li", {
        className: isOpen ? "active" : ""
    }, /*#__PURE__*/ React.createElement("a", {
        className: "accordion__title",
        onClick: function() {
            return setIsOpen(function(prev) {
                return !prev;
            });
        }
    }, /*#__PURE__*/ React.createElement("span", null, title), toggles ? /*#__PURE__*/ React.createElement("span", {
        className: "accordion__toggle icon-chevron-down"
    }) : null), /*#__PURE__*/ React.createElement("div", {
        className: "accordion__content"
    }, children));
};

export { Accordion, AccordionElement };
//# sourceMappingURL=index.js.map
