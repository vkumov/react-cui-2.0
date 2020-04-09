export const appendClass = (c, what) => {
  if (c) {
    if (typeof what === "function") return what();
    return what || c;
  }
  return "";
};

export { eventManager, EVENTS } from "./eventManager";
