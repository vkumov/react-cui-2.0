import { type PropsWithChildren, type RefObject, type FC } from "react";
type FloatingContextProps = {
    rootRef: RefObject<HTMLElement>;
};
export declare const useFloatingContext: () => FloatingContextProps;
export declare const FloatingProvider: FC<PropsWithChildren<FloatingContextProps>>;
export {};