import { useRef, useEffect } from 'react';

const DEFAULT_EVENTS = [
    "mousedown",
    "touchstart"
];
function useClickOutside(handler, events, nodes) {
    const ref1 = useRef();
    useEffect(()=>{
        const listener = (event)=>{
            if (Array.isArray(nodes)) {
                var ref;
                const shouldIgnore = event === null || event === void 0 ? void 0 : (ref = event.target) === null || ref === void 0 ? void 0 : ref.hasAttribute("data-ignore-outside-clicks");
                const shouldTrigger = nodes.every((node)=>!!node && !node.contains(event.target)
                );
                shouldTrigger && !shouldIgnore && handler();
            } else if (ref1.current && !ref1.current.contains(event.target)) {
                handler();
            }
        };
        (events || DEFAULT_EVENTS).forEach((fn)=>document.addEventListener(fn, listener)
        );
        return ()=>{
            (events || DEFAULT_EVENTS).forEach((fn)=>document.removeEventListener(fn, listener)
            );
        };
    }, [
        ref1,
        handler,
        nodes
    ]);
    return ref1;
}

export { useClickOutside };
//# sourceMappingURL=useClickOutside.js.map
