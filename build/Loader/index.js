import React, { forwardRef } from 'react';

const Dots = /*#__PURE__*/ forwardRef(({ color ="primary"  }, ref)=>/*#__PURE__*/ React.createElement("div", {
        className: `loading-dots${color !== "primary" ? ` loading-dots--${color}` : ""}`,
        ref: ref
    }, /*#__PURE__*/ React.createElement("span", null), /*#__PURE__*/ React.createElement("span", null), /*#__PURE__*/ React.createElement("span", null))
);

const Spinner = /*#__PURE__*/ forwardRef(({ size ="default" , text =null  }, ref)=>/*#__PURE__*/ React.createElement("div", {
        className: "flex-center flex-middle",
        style: {
            flex: 1
        },
        ref: ref
    }, /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("div", {
        className: `loader${size !== "default" ? ` loader--${size}` : ""} flex-center`
    }, /*#__PURE__*/ React.createElement("div", {
        className: "wrapper flex flex-center"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "wheel"
    }))), !text ? null : /*#__PURE__*/ React.createElement("div", {
        className: "base-margin-top text-center"
    }, text || "Loading...")))
);

export { Dots, Spinner };
//# sourceMappingURL=index.js.map
