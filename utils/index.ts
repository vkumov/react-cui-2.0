type ClassFunction = () => string;

export const appendClass = (
  c: any,
  what: string | ClassFunction | undefined = undefined
): string => {
  if (c) {
    if (typeof what === "function") return ` ${what()}`;
    return ` ${what || c}`;
  }
  return "";
};

export { eventManager, EVENTS } from "./eventManager";
