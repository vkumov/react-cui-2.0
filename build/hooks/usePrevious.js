import { useRef, useEffect } from 'react';

/**
 * a type-safe version of the `usePrevious` hook described here:
 * @see {@link https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state}
 */ function usePrevious(value) {
    var ref = useRef();
    useEffect(function() {
        ref.current = value;
    }, [
        value
    ]);
    return ref.current;
}

export { usePrevious };
//# sourceMappingURL=usePrevious.js.map
