import { useEffect } from "react";

type Key = (React.KeyboardEvent<Element> | KeyboardEvent)["key"];
type Handler = (event: React.KeyboardEvent<Element> | KeyboardEvent) => void;

export function useKeyPress(
  keys: Key | Key[],
  handler: Handler,
  event: "keydown" | "keypress" | "keyup" = "keydown"
) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const eventListener: EventListener = (ev: KeyboardEvent) => {
      if (Array.isArray(keys) ? keys.includes(ev.key) : keys === ev.key) {
        handler(ev);
      }
    };

    window.addEventListener(event, eventListener);
    return () => {
      window.removeEventListener(event, eventListener);
    };
  }, [keys, handler, event]);
}
