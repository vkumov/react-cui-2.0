/// <reference types="react" />
import React, { FC, PropsWithChildren, HTMLProps, ReactNode, ComponentProps } from 'react';
import { ReferenceType, FloatingPortal, FloatingOverlay, useDismiss } from '@floating-ui/react';

/**
 * Modal Header
 */
type ModalHeaderProps = PropsWithChildren<{
    className?: string;
}> & HTMLProps<HTMLDivElement>;
declare const ModalHeader: FC<ModalHeaderProps>;

/**
 * Modal Footer
 */
type ModalFooterProps = PropsWithChildren<{
    className?: string;
}> & HTMLProps<HTMLDivElement>;
declare const ModalFooter: FC<ModalFooterProps>;

/**
 * Modal Body
 */
type ModalBodyProps = PropsWithChildren<{
    className?: string;
}> & HTMLProps<HTMLDivElement>;
declare const ModalBody: FC<ModalBodyProps>;

/**
 * Modal
 */
type ModalSize$1 = "small" | "default" | "large" | "full" | "fluid";
type ModalProps$1 = PropsWithChildren<{
    size?: ModalSize$1;
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
    root?: ComponentProps<typeof FloatingPortal>["root"];
    portalId?: ComponentProps<typeof FloatingPortal>["id"];
    lockScroll?: ComponentProps<typeof FloatingOverlay>["lockScroll"];
    ancestorScroll?: Parameters<typeof useDismiss>[1]["ancestorScroll"];
}>;
type ModalSizes = {
    Small: FC<ModalProps$1>;
    Large: FC<ModalProps$1>;
    Full: FC<ModalProps$1>;
    Fluid: FC<ModalProps$1>;
};
type ModalComponents = {
    Header: typeof ModalHeader;
    Body: typeof ModalBody;
    Footer: typeof ModalFooter;
};
declare const Modal: ModalSizes & ModalComponents & FC<ModalProps$1>;

type ButtonColor$1 = "primary" | "secondary" | "success" | "dark" | "ghost" | "link" | "light" | "danger";

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
    root?: ComponentProps<typeof FloatingPortal>["root"];
    portalId?: ComponentProps<typeof FloatingPortal>["id"];
    lockScroll?: ComponentProps<typeof FloatingOverlay>["lockScroll"];
    ancestorScroll?: Parameters<typeof useDismiss>[1]["ancestorScroll"];
}>;

/**
 * Prompt Modal
 */
interface PromptModalProps$1<T extends React.ReactText> {
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
declare function prompt<T extends TextOrNumber>(title: string, question: ReactNode, cb: (value: T) => void | Promise<void>, options?: Pick<PromptModalProps$1<T>, "initial" | "type" | "hint" | "validate">): Promise<void>;
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

/**
 * Confirmation Modal
 */
type ConfirmationModalProps = {
    isOpen?: boolean;
    confirmHandle: (dontAskAgain?: boolean) => boolean | Promise<boolean>;
    closeHandle: () => void;
    prompt: ReactNode;
    confirmType?: ButtonColor$1;
    confirmText?: string;
    autoClose?: boolean;
    dontAskAgain?: DontAskAgain;
};
declare const ConfirmationModal: FC<ConfirmationModalProps>;

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
declare function PromptModal<T extends React.ReactText>({ title, question, onSave: cb, onClose, initial, type, isOpen, hint, validate, }: PropsWithChildren<PromptModalProps<T>>): JSX.Element;

declare const ConfirmationListener: () => JSX.Element;

export { ConfirmationListener, ConfirmationModal, DontAskAgain, ConfirmationListener as DynamicModal, Modal, ModalBody, ModalFooter, ModalHeader, ModalProps$1 as ModalProps, ModalSize$1 as ModalSize, PromptModal, PromptModalProps, PropsWithCloseModal, confirmation, dynamicModal, notificationModal as notification, notificationModal, prompt };
