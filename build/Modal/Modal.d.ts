import { type ComponentProps, type FC, type ReactNode } from "react";
import { FloatingOverlay, FloatingPortal, type ReferenceType, type UseDismissProps } from "@floating-ui/react";
import { Transition } from "react-transition-group";
import { ModalBody } from "./Body";
import { ModalFooter } from "./Footer";
import { ModalHeader } from "./Header";
/**
 * Modal
 */
export type ModalSize = "small" | "default" | "large" | "full" | "fluid";
export interface ModalProps {
    size?: ModalSize;
    closeIcon?: boolean;
    closeHandle?: () => void;
    children?: ReactNode;
    title?: ReactNode;
    isOpen: boolean;
    autoClose?: boolean;
    left?: boolean;
    animationDuration?: ComponentProps<typeof Transition>["timeout"];
    dialogProps?: ComponentProps<"div">;
    contentProps?: ComponentProps<"div">;
    maximize?: boolean;
    refElement?: ReferenceType;
    root?: ComponentProps<typeof FloatingPortal>["root"];
    portalId?: ComponentProps<typeof FloatingPortal>["id"];
    lockScroll?: ComponentProps<typeof FloatingOverlay>["lockScroll"];
    ancestorScroll?: UseDismissProps["ancestorScroll"];
}
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
