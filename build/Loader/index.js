import React, { forwardRef } from 'react';

var Dots = /*#__PURE__*/ forwardRef(function(param, ref) {
    var _color = param.color, color = _color === void 0 ? "primary" : _color;
    return /*#__PURE__*/ React.createElement("div", {
        className: "loading-dots".concat(color !== "primary" ? " loading-dots--".concat(color) : ""),
        ref: ref
    }, /*#__PURE__*/ React.createElement("span", null), /*#__PURE__*/ React.createElement("span", null), /*#__PURE__*/ React.createElement("span", null));
});

var Spinner = /*#__PURE__*/ forwardRef(function(param, ref) {
    var _size = param.size, size = _size === void 0 ? "default" : _size, _text = param.text, text = _text === void 0 ? null : _text;
    return /*#__PURE__*/ React.createElement("div", {
        className: "flex-center flex-middle",
        style: {
            flex: 1
        },
        ref: ref
    }, /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("div", {
        className: "loader".concat(size !== "default" ? " loader--".concat(size) : "", " flex-center")
    }, /*#__PURE__*/ React.createElement("div", {
        className: "wrapper flex flex-center"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "wheel"
    }))), !text ? null : /*#__PURE__*/ React.createElement("div", {
        className: "base-margin-top text-center"
    }, text || "Loading...")));
});

export { Dots, Spinner };
//# sourceMappingURL=index.js.map
