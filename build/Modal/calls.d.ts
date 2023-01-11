import React, { PropsWithChildren, ReactNode } from 'react';
import { ReferenceType, FloatingPortal, FloatingOverlay, useDismiss } from '@floating-ui/react';

type ButtonColor = "primary" | "secondary" | "success" | "dark" | "ghost" | "link" | "light" | "danger";

/**
 * Modal
 */
type ModalSize = "small" | "default" | "large" | "full" | "fluid";
type ModalProps = PropsWithChildren<{
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

/**
 * Prompt Modal
 */
interface PromptModalProps<T extends React.ReactText> {
    title: ReactNode;
    question: ReactNode;
    onSave: (value: T) => void | Promise<void>;
    onClose?: () => void;
    initial?: T;
    type?: string;
    isOpen: boolean;
    hint?: ReactNode;
    validate?: ((value: T) => Promise<boolean>) | ((value: T) => boolean);
}

type DontAskAgain = {
    show: boolean;
    text?: ReactNode;
};
type TextOrNumber = string | number;
declare function confirmation(prompt: ReactNode, onConfirm: (dontAskAgain?: boolean) => boolean | Promise<boolean>, confirmType?: ButtonColor, confirmText?: string, dontAskAgain?: DontAskAgain): Promise<void>;
type NotificationModal = (title: ReactNode, body: ReactNode, buttonColor?: ButtonColor, button?: ReactNode) => Promise<void>;
declare const notificationModal: NotificationModal;

declare function prompt<T extends TextOrNumber>(title: string, question: ReactNode, cb: (value: T) => void | Promise<void>, initial?: string, type?: string, hint?: ReactNode): Promise<void>;
declare function prompt<T extends TextOrNumber>(title: string, question: ReactNode, cb: (value: T) => void | Promise<void>, options?: Pick<PromptModalProps<T>, "initial" | "type" | "hint" | "validate">): Promise<void>;
type CloseHandler = () => void;
interface ModalButton {
    color?: ButtonColor;
    text: ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>, close: CloseHandler) => void;
}
type PropsWithCloseModal<P = {}> = P & {
    close: () => void;
};
type FullBodyRender = (props: {
    close: () => void;
}) => ReactNode;
interface DynamicModalOptions {
    title: ReactNode;
    fullBody?: ReactNode | FullBodyRender;
    body?: ReactNode;
    buttons?: ModalButton[];
    modalProps?: Partial<ModalProps>;
}
type DynamicModalHandler = (options: DynamicModalOptions) => Promise<void>;
declare const dynamicModal: DynamicModalHandler;

export { DontAskAgain, PropsWithCloseModal, confirmation, dynamicModal, notificationModal as notification, notificationModal, prompt };
