import React from 'react';

var VerticalCenter = function(param) {
    var children = param.children;
    return /*#__PURE__*/ React.createElement("div", {
        className: "content-fluid",
        style: {
            display: "flex",
            minHeight: "100vh",
            flexDirection: "column"
        }
    }, /*#__PURE__*/ React.createElement("main", {
        style: {
            display: "flex",
            flexDirection: "column",
            flex: 1
        }
    }, children));
};

export { VerticalCenter };
//# sourceMappingURL=index.js.map