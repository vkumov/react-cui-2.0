import React from 'react';

var InputHelpBaloon = function(param) {
    var baloon = param.baloon;
    return /*#__PURE__*/ React.createElement("span", {
        "data-balloon": baloon,
        "data-balloon-length": "large",
        "data-balloon-pos": "up",
        className: "qtr-margin-left"
    }, /*#__PURE__*/ React.createElement("span", {
        className: "icon-question-circle",
        style: {
            cursor: "help"
        }
    }));
};

var InputHelpBlock = function(param) {
    var _text = param.text, text = _text === void 0 ? null : _text;
    return text && /*#__PURE__*/ React.createElement("div", {
        className: "form-group__help",
        role: "alert"
    }, /*#__PURE__*/ React.createElement("span", null, text));
};

export { InputHelpBaloon, InputHelpBlock };
//# sourceMappingURL=index.js.map
