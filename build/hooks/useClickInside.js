import { useRef, useEffect } from 'react';

const DEFAULT_EVENTS = [
    "mousedown",
    "touchstart"
];
function useClickInside(handler, events, nodes) {
    const ref = useRef();
    useEffect(()=>{
        const listener = (event)=>{
            if (Array.isArray(nodes)) {
                var ref1;
                const shouldIgnore = event === null || event === void 0 ? void 0 : (ref1 = event.target) === null || ref1 === void 0 ? void 0 : ref1.hasAttribute("data-ignore-inside-clicks");
                const shouldTrigger = nodes.every((node)=>Boolean(node) && node.contains(event.target));
                shouldTrigger && !shouldIgnore && handler();
            } else if (ref.current && !ref.current.contains(event.target)) {
                handler();
            }
        };
        (events || DEFAULT_EVENTS).forEach((fn)=>document.addEventListener(fn, listener));
        return ()=>{
            (events || DEFAULT_EVENTS).forEach((fn)=>document.removeEventListener(fn, listener));
        };
    }, [
        ref,
        handler,
        nodes
    ]);
    return ref;
}

export { useClickInside };
//# sourceMappingURL=useClickInside.js.map
