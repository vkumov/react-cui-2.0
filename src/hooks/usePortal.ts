import { useRef, useState } from "react";
import { useIsomorphicEffect } from "./useIsomorphicEffect";

export function usePortal(target?: HTMLElement | string): HTMLElement | null {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLElement>();

  useIsomorphicEffect(() => {
    setMounted(true);
    ref.current = !target
      ? document.createElement("div")
      : typeof target === "string"
      ? document.querySelector(target)
      : target;

    if (!target) {
      document.body.appendChild(ref.current);
    }

    return () => {
      !target && document.body.removeChild(ref.current);
    };
  }, [target]);

  if (!mounted) {
    return null;
  }

  return ref.current;
}
