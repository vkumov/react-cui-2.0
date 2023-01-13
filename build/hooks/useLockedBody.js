import { useLayoutEffect, useEffect, useState } from 'react';

// useLayoutEffect will show warning if used during ssr, e.g. with Next.js
// useIsomorphicEffect removes it by replacing useLayoutEffect with useEffect during ssr
const useIsomorphicEffect = typeof document !== "undefined" ? useLayoutEffect : useEffect;

function useLockedBody(initialLocked = false, rootId = "___gatsby" // Default to `___gatsby` to not introduce breaking change
) {
    const [locked, setLocked] = useState(initialLocked);
    // Do the side effect before render
    useIsomorphicEffect(()=>{
        if (!locked) {
            return;
        }
        // Save initial body style
        const originalOverflow = document.body.style.overflow;
        const originalPaddingRight = document.body.style.paddingRight;
        // Lock body scroll
        document.body.style.overflow = "hidden";
        // Get the scrollBar width
        const root = document.getElementById(rootId); // or root
        const scrollBarWidth = root ? root.offsetWidth - root.scrollWidth : 0;
        // Avoid width reflow
        if (scrollBarWidth) {
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        }
        return ()=>{
            document.body.style.overflow = originalOverflow;
            if (scrollBarWidth) {
                document.body.style.paddingRight = originalPaddingRight;
            }
        };
    }, [
        locked
    ]);
    // Update state if initialValue changes
    useEffect(()=>{
        if (locked !== initialLocked) {
            setLocked(initialLocked);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        initialLocked
    ]);
    return [
        locked,
        setLocked
    ];
}

export { useLockedBody };
//# sourceMappingURL=useLockedBody.js.map
