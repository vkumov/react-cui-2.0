import { type ComponentProps, type FC, type MutableRefObject, type ReactNode } from "react";
import type { FloatingPortal } from "@floating-ui/react";
type ModalContextProps = {
    addRendered: (id: string) => void;
    removeRendered: (id: string) => void;
    lastRendered: () => string | null;
    rendered: MutableRefObject<string[]>;
};
export type ModalProviderProps = {
    portalRoot?: ComponentProps<typeof FloatingPortal>["root"];
    portalId?: ComponentProps<typeof FloatingPortal>["id"];
    closeTimeout?: number;
    children: ReactNode;
};
export declare const useModalProvider: () => ModalContextProps;
export declare const ModalProvider: FC<ModalProviderProps>;
export {};
