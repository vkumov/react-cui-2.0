import React, { HTMLProps, ReactNode, ComponentProps, FC, PropsWithChildren } from 'react';
import EventEmitter from 'eventemitter3';
import { ReferenceType, FloatingPortal, FloatingOverlay, useDismiss } from '@floating-ui/react';
import { Transition } from 'react-transition-group';

type ButtonColor = "primary" | "secondary" | "success" | "dark" | "ghost" | "link" | "light" | "danger";
type ButtonProps = {
    size?: "small" | "default" | "large";
    color?: ButtonColor;
    wide?: boolean;
    justified?: boolean;
    circle?: boolean;
    asLink?: boolean;
    selected?: boolean;
    style?: React.CSSProperties;
    className?: string;
    icon?: boolean;
    type?: "submit" | "reset" | "button";
} & Omit<HTMLProps<HTMLButtonElement>, "size">;

/**
 * Modal Header
 */
type ModalHeaderProps$1 = PropsWithChildren<{
    className?: string;
}> & HTMLProps<HTMLDivElement>;
declare const ModalHeader$1: FC<ModalHeaderProps$1>;

/**
 * Modal Footer
 */
type ModalFooterProps$1 = PropsWithChildren<{
    className?: string;
}> & HTMLProps<HTMLDivElement>;
declare const ModalFooter$1: FC<ModalFooterProps$1>;

/**
 * Modal Body
 */
type ModalBodyProps$1 = PropsWithChildren<{
    className?: string;
}> & HTMLProps<HTMLDivElement>;
declare const ModalBody$1: FC<ModalBodyProps$1>;

/**
 * Modal
 */
type ModalSize$1 = "small" | "default" | "large" | "full" | "fluid";
interface ModalProps$1 {
    size?: ModalSize$1;
    closeIcon?: boolean;
    closeHandle?: () => void;
    children?: ReactNode;
    title?: ReactNode;
    isOpen: boolean;
    autoClose?: boolean;
    left?: boolean;
    animationDuration?: ComponentProps<typeof Transition>["timeout"];
    dialogProps?: React.ComponentProps<"div">;
    contentProps?: React.ComponentProps<"div">;
    maximize?: boolean;
    refElement?: ReferenceType;
    root?: ComponentProps<typeof FloatingPortal>["root"];
    portalId?: ComponentProps<typeof FloatingPortal>["id"];
    lockScroll?: ComponentProps<typeof FloatingOverlay>["lockScroll"];
    ancestorScroll?: Parameters<typeof useDismiss>[1]["ancestorScroll"];
}
type ModalSizes$1 = {
    Small: FC<ModalProps$1>;
    Large: FC<ModalProps$1>;
    Full: FC<ModalProps$1>;
    Fluid: FC<ModalProps$1>;
};
type ModalComponents$1 = {
    Header: typeof ModalHeader$1;
    Body: typeof ModalBody$1;
    Footer: typeof ModalFooter$1;
};
declare const Modal$1: ModalSizes$1 & ModalComponents$1 & FC<ModalProps$1>;

type ButtonColor$1 = "primary" | "secondary" | "success" | "dark" | "ghost" | "link" | "light" | "danger";

type DontAskAgain = {
    show: boolean;
    text?: ReactNode;
};

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

/**
 * Prompt Modal
 */
interface PromptModalProps<T extends string | number> {
    title: ReactNode;
    question: ReactNode;
    onSave: (value: T) => void | Promise<void>;
    onClose?: () => void;
    initial?: T;
    type?: string;
    isOpen: boolean;
    hint?: ReactNode;
    validate?: ((value: T) => Promise<boolean>) | ((value: T) => boolean);
    autoClose?: ComponentProps<typeof Modal$1>["autoClose"];
}

type Callback = () => void;
type FullBodyProps = {
    close: Callback;
};
type FullBodyRenderer = (props: FullBodyProps) => React.ReactElement;
type CommonModalProps = {
    onModalClose?: () => unknown;
    title?: React.ReactNode;
    onClosed?: Callback;
};
type PromptOptions<T extends string | number = any> = {
    initial: PromptModalProps<T>["initial"];
    type: PromptModalProps<T>["type"];
    hint: PromptModalProps<T>["hint"];
    validate: PromptModalProps<T>["validate"];
};
type EventModalProps = ({
    modalType: "confirmation";
    prompt: ConfirmationModalProps["prompt"];
    onConfirm: ConfirmationModalProps["confirmHandle"];
    confirmText?: ConfirmationModalProps["confirmText"];
    confirmType?: ConfirmationModalProps["confirmType"];
    dontAskAgain?: ConfirmationModalProps["dontAskAgain"];
} | {
    modalType: "notification";
    body: React.ReactNode;
    buttonColor?: ButtonProps["color"];
    button: React.ReactNode;
} | ({
    modalType: "prompt";
    options?: Partial<PromptOptions>;
    question: React.ReactNode;
    cb: PromptModalProps<any>["onSave"];
} & Omit<Partial<PromptOptions>, "validate">) | {
    modalType: "dynamic";
    fullBody: React.ReactElement<FullBodyProps & Record<string, any>> | FullBodyRenderer;
    modalProps?: Partial<ModalProps$1>;
    body?: React.ReactNode;
    buttons?: {
        text?: React.ReactNode;
        color?: ButtonProps["color"];
        onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, close: Callback) => void;
    }[];
}) & CommonModalProps;
interface KnownEvents {
    showModal: (modal: EventModalProps) => void;
}
declare const eventManager: EventEmitter<KnownEvents, any>;

export { EventModalProps, FullBodyProps, eventManager };
