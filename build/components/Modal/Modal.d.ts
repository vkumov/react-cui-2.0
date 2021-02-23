import React, { FC, ReactNode, PropsWithChildren } from "react";
import { ModalHeader } from "./Header";
import { ModalBody } from "./Body";
import { ModalFooter } from "./Footer";
/**
 * Modal
 */
export declare type ModalSize = "small" | "default" | "large" | "full" | "fluid";
export declare type ModalProps = PropsWithChildren<{
    size?: ModalSize;
    closeIcon?: boolean;
    closeHandle?: (e: any) => void;
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
}>;
declare type ModalSizes = {
    Small: FC<ModalProps>;
    Large: FC<ModalProps>;
    Full: FC<ModalProps>;
    Fluid: FC<ModalProps>;
};
declare type ModalComponents = {
    Header: typeof ModalHeader;
    Body: typeof ModalBody;
    Footer: typeof ModalFooter;
};
export declare const Modal: ModalSizes & ModalComponents & FC<ModalProps>;
export {};
