import React from 'react';
import { createPortal } from 'react-dom';
import { usePortal } from '../hooks/usePortal.ts';

const defaultProps = {
    zIndex: 1,
    position: "relative"
};
function Portal(props) {
    const { children , zIndex , target , className , position  } = {
        ...defaultProps,
        ...props
    };
    const portal = usePortal(target);
    if (!portal) {
        return null;
    }
    return /*#__PURE__*/ createPortal(/*#__PURE__*/ React.createElement("div", {
        className: className,
        style: {
            position: position,
            zIndex
        }
    }, children), portal);
}

export { Portal };
//# sourceMappingURL=index.js.map
