import { createPortal } from 'react-dom';
import { usePortal } from '../hooks/usePortal.ts';

/**
 * @example
 * <Portal>
 *   <p>Thinking with portals</p>
 * </Portal>
 */ var Portal = function(param) {
    var id = param.id, children = param.children;
    var target = usePortal(id);
    return /*#__PURE__*/ createPortal(children, target);
};

export { Portal };
//# sourceMappingURL=index.js.map
