import { type FC, type PropsWithChildren, type RefObject } from "react";
type FloatingContextProps = {
    rootRef: RefObject<HTMLElement>;
};
type Options = {
    root?: HTMLElement;
    portalId?: any;
    fallbackPortalId?: any;
};
export declare const useFloatingContext: ({ root, portalId, fallbackPortalId, }?: Options) => {
    root: HTMLElement;
    id: any;
};
export declare const FloatingProvider: FC<PropsWithChildren<FloatingContextProps>>;
export {};
