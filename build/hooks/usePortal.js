import { useLayoutEffect, useEffect, useState, useRef } from 'react';

// useLayoutEffect will show warning if used during ssr, e.g. with Next.js
// useIsomorphicEffect removes it by replacing useLayoutEffect with useEffect during ssr
const useIsomorphicEffect = typeof document !== "undefined" ? useLayoutEffect : useEffect;

function usePortal(target) {
    const [mounted, setMounted] = useState(false);
    const ref = useRef();
    useIsomorphicEffect(()=>{
        setMounted(true);
        ref.current = !target ? document.createElement("div") : typeof target === "string" ? document.querySelector(target) : target;
        if (!target) {
            document.body.appendChild(ref.current);
        }
        return ()=>{
            !target && document.body.removeChild(ref.current);
        };
    }, [
        target
    ]);
    if (!mounted) {
        return null;
    }
    return ref.current;
}

export { usePortal };
//# sourceMappingURL=usePortal.js.map
