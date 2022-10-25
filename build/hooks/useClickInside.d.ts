/// <reference types="react" />
export declare function useClickInside<T extends HTMLElement = any>(handler: () => void, events?: string[] | null, nodes?: HTMLElement[]): import("react").MutableRefObject<T>;
