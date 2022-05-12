import { createPortal } from 'react-dom';
import { usePortal } from '../hooks/usePortal.js';

/**
 * @example
 * <Portal>
 *   <p>Thinking with portals</p>
 * </Portal>
 */ const Portal = ({ id , children  })=>{
    const target = usePortal(id);
    return /*#__PURE__*/ createPortal(children, target);
};

export { Portal };
//# sourceMappingURL=index.js.map
