import React from 'react';

var ConditionalWrapper = function(param) {
    var condition = param.condition, wrapper = param.wrapper, children = param.children;
    return condition ? /*#__PURE__*/ React.cloneElement(wrapper, null, children) : /*#__PURE__*/ React.isValidElement(children) ? children : /*#__PURE__*/ React.createElement(React.Fragment, null, children);
};
var DisplayIf = function(param) {
    var condition = param.condition, children = param.children;
    return condition ? /*#__PURE__*/ React.isValidElement(children) ? children : /*#__PURE__*/ React.createElement(React.Fragment, null, children) : null;
};

export { ConditionalWrapper, DisplayIf };
//# sourceMappingURL=index.js.map
