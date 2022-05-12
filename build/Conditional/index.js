import React from 'react';

const ConditionalWrapper = ({ condition , wrapper , children ,  })=>condition ? /*#__PURE__*/ React.cloneElement(wrapper, null, children) : /*#__PURE__*/ React.isValidElement(children) ? children : /*#__PURE__*/ React.createElement(React.Fragment, null, children)
;
const DisplayIf = ({ condition , children  })=>condition ? /*#__PURE__*/ React.isValidElement(children) ? children : /*#__PURE__*/ React.createElement(React.Fragment, null, children) : null
;

export { ConditionalWrapper, DisplayIf };
//# sourceMappingURL=index.js.map
