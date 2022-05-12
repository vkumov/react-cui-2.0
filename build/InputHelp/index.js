import React from 'react';

const InputHelpBaloon = ({ baloon  })=>/*#__PURE__*/ React.createElement("span", {
        "data-balloon": baloon,
        "data-balloon-length": "large",
        "data-balloon-pos": "up",
        className: "qtr-margin-left"
    }, /*#__PURE__*/ React.createElement("span", {
        className: "icon-question-circle",
        style: {
            cursor: "help"
        }
    }))
;

const InputHelpBlock = ({ text =null  })=>text && /*#__PURE__*/ React.createElement("div", {
        className: "form-group__help",
        role: "alert"
    }, /*#__PURE__*/ React.createElement("span", null, text))
;

export { InputHelpBaloon, InputHelpBlock };
//# sourceMappingURL=index.js.map
