export const appendClass = (c, what) => (c ? ` ${what || c}` : "");

export { eventManager, EVENTS } from "./eventManager";
