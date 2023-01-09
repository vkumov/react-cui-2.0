import React, { type FC, type ReactNode, type PropsWithChildren } from "react";
import { FloatingPortal, FloatingOverlay, useDismiss, type ReferenceType } from "@floating-ui/react";
import { ModalHeader } from "./Header";
import { ModalBody } from "./Body";
import { ModalFooter } from "./Footer";
/**
 * Modal
 */
export type ModalSize = "small" | "default" | "large" | "full" | "fluid";
export type ModalProps = PropsWithChildren<{
    size?: ModalSize;
    closeIcon?: boolean;
    closeHandle?: () => void;
    title?: ReactNode;
    isOpen: boolean;
    autoClose?: boolean;
    left?: boolean;
    animationDuration?: number | {
        appear?: number;
        enter?: number;
        exit?: number;
    };
    transitionEvents?: Record<string, unknown>;
    dialogProps?: React.ComponentProps<"div">;
    contentProps?: React.ComponentProps<"div">;
    maximize?: boolean;
    refElement?: ReferenceType;
    root?: Parameters<typeof FloatingPortal>[0]["root"];
    lockScroll?: Parameters<typeof FloatingOverlay>[0]["lockScroll"];
    ancestorScroll?: Parameters<typeof useDismiss>[1]["ancestorScroll"];
}>;
type ModalSizes = {
    Small: FC<ModalProps>;
    Large: FC<ModalProps>;
    Full: FC<ModalProps>;
    Fluid: FC<ModalProps>;
};
type ModalComponents = {
    Header: typeof ModalHeader;
    Body: typeof ModalBody;
    Footer: typeof ModalFooter;
};
export declare const Modal: ModalSizes & ModalComponents & FC<ModalProps>;
export {};
