import React, { useContext, createContext } from 'react';

const FloatingContext = /*#__PURE__*/ createContext(null);
const useFloatingContext = ()=>useContext(FloatingContext);
const FloatingProvider = ({ rootRef , children  })=>{
    return /*#__PURE__*/ React.createElement(FloatingContext.Provider, {
        value: {
            rootRef
        }
    }, children);
};

export { FloatingProvider, useFloatingContext };
//# sourceMappingURL=index.js.map
