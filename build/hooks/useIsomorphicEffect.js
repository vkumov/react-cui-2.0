import { useLayoutEffect, useEffect } from 'react';

// useLayoutEffect will show warning if used during ssr, e.g. with Next.js
// useIsomorphicEffect removes it by replacing useLayoutEffect with useEffect during ssr
const useIsomorphicEffect = typeof document !== "undefined" ? useLayoutEffect : useEffect;

export { useIsomorphicEffect };
//# sourceMappingURL=useIsomorphicEffect.js.map
