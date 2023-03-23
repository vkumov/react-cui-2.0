import React, { FC, PropsWithChildren, HTMLProps, ReactNode, ComponentProps, MutableRefObject } from 'react';
import { ReferenceType, FloatingPortal, FloatingOverlay, UseDismissProps } from '@floating-ui/react';
import { Transition } from 'react-transition-group';

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
    dialogProps?: ComponentProps<"div">;
    contentProps?: ComponentProps<"div">;
    maximize?: boolean;
    refElement?: ReferenceType;
    root?: ComponentProps<typeof FloatingPortal>["root"];
    portalId?: ComponentProps<typeof FloatingPortal>["id"];
    lockScroll?: ComponentProps<typeof FloatingOverlay>["lockScroll"];
    ancestorScroll?: UseDismissProps["ancestorScroll"];
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
type ModalSize = "small" | "default" | "large" | "full" | "fluid";
interface ModalProps {
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
declare const Modal: ModalSizes & ModalComponents & FC<ModalProps>;

/**
 * Confirmation Modal
 */
type ConfirmationModalProps$1 = {
    isOpen?: boolean;
    confirmHandle: (dontAskAgain?: boolean) => boolean | Promise<boolean>;
    closeHandle: () => void;
    prompt: ReactNode;
    confirmType?: ButtonColor;
    confirmText?: string;
    autoClose?: boolean;
    dontAskAgain?: DontAskAgain;
};

/**
 * Prompt Modal
 */
interface PromptModalProps$1<T extends string | number> {
    title: ReactNode;
    question: ReactNode;
    onSave: (value: T) => void | Promise<void>;
    onClose?: () => void;
    initial?: T;
    type?: string;
    isOpen: boolean;
    hint?: ReactNode;
    validate?: ((value: T) => Promise<boolean>) | ((value: T) => boolean);
    autoClose?: ComponentProps<typeof Modal>["autoClose"];
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
    initial: PromptModalProps$1<T>["initial"];
    type: PromptModalProps$1<T>["type"];
    hint: PromptModalProps$1<T>["hint"];
    validate: PromptModalProps$1<T>["validate"];
};
type EventModalProps = ({
    modalType: "confirmation";
    prompt: ConfirmationModalProps$1["prompt"];
    onConfirm: ConfirmationModalProps$1["confirmHandle"];
    confirmText?: ConfirmationModalProps$1["confirmText"];
    confirmType?: ConfirmationModalProps$1["confirmType"];
    dontAskAgain?: ConfirmationModalProps$1["dontAskAgain"];
} | {
    modalType: "notification";
    body: React.ReactNode;
    buttonColor?: ButtonProps["color"];
    button: React.ReactNode;
} | ({
    modalType: "prompt";
    options?: Partial<PromptOptions>;
    question: React.ReactNode;
    cb: PromptModalProps$1<any>["onSave"];
} & Omit<Partial<PromptOptions>, "validate">) | {
    modalType: "dynamic";
    fullBody: React.ReactElement<FullBodyProps & Record<string, any>> | FullBodyRenderer;
    modalProps?: Partial<ModalProps>;
    body?: React.ReactNode;
    buttons?: {
        text?: React.ReactNode;
        color?: ButtonProps["color"];
        onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, close: Callback) => void;
    }[];
}) & CommonModalProps;

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
interface DynamicModalOptions {
    title: ReactNode;
    fullBody?: Extract<EventModalProps, {
        modalType: "dynamic";
    }>["fullBody"];
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
declare function PromptModal<T extends string | number>({ title, question, onSave: cb, onClose, initial, type, isOpen, hint, validate, autoClose, }: PropsWithChildren<PromptModalProps<T>>): JSX.Element;

type DynamicModalProps = {
    portalRoot?: ComponentProps<typeof FloatingPortal>["root"];
    portalId?: ComponentProps<typeof FloatingPortal>["id"];
    closeTimeout?: number;
};
declare const DynamicModal: FC<DynamicModalProps>;

type ModalContextProps = {
    addRendered: (id: string) => void;
    removeRendered: (id: string) => void;
    lastRendered: () => string | null;
    rendered: MutableRefObject<string[]>;
};
type ModalProviderProps = {
    portalRoot?: ComponentProps<typeof FloatingPortal>["root"];
    portalId?: ComponentProps<typeof FloatingPortal>["id"];
    closeTimeout?: number;
    children: ReactNode;
};
declare const useModalProvider: () => ModalContextProps;
declare const ModalProvider: FC<ModalProviderProps>;

export { DynamicModal as ConfirmationListener, ConfirmationModal, ConfirmationModalProps, DontAskAgain, DynamicModal, DynamicModalProps, Modal$1 as Modal, ModalBody$1 as ModalBody, ModalFooter$1 as ModalFooter, ModalHeader$1 as ModalHeader, ModalProps$1 as ModalProps, ModalProvider, ModalProviderProps, ModalSize$1 as ModalSize, PromptModal, PromptModalProps, PropsWithCloseModal, confirmation, dynamicModal, notificationModal as notification, notificationModal, prompt, useModalProvider };
