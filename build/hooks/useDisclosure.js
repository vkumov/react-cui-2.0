import { useState } from 'react';

function useDisclosure(initialState, callbacks) {
    const [opened, setOpened] = useState(initialState);
    const open = ()=>{
        if (!opened) {
            var ref;
            setOpened(true);
            callbacks === null || callbacks === void 0 ? void 0 : (ref = callbacks.onOpen) === null || ref === void 0 ? void 0 : ref.call(callbacks);
        }
    };
    const close = ()=>{
        if (opened) {
            var ref;
            setOpened(false);
            callbacks === null || callbacks === void 0 ? void 0 : (ref = callbacks.onClose) === null || ref === void 0 ? void 0 : ref.call(callbacks);
        }
    };
    const toggle = ()=>{
        opened ? close() : open();
    };
    return [
        opened,
        {
            open,
            close,
            toggle
        }
    ];
}

export { useDisclosure };
//# sourceMappingURL=useDisclosure.js.map
