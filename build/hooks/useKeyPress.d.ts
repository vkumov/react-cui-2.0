/// <reference types="react" />
type Key = (React.KeyboardEvent<Element> | KeyboardEvent)["key"];
type Handler = (event: React.KeyboardEvent<Element> | KeyboardEvent) => void;
declare function useKeyPress(keys: Key | Key[], handler: Handler, event?: "keydown" | "keypress" | "keyup"): void;

export { useKeyPress };
