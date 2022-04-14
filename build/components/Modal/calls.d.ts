import React, { ReactNode, ReactText } from "react";
import type { ButtonColor } from "../Button";
import type { ModalProps } from "./Modal";
import { PromptModalProps } from "./PromptModal";
export declare type DontAskAgain = {
    show: boolean;
    text?: ReactNode;
};
export declare function confirmation(prompt: ReactNode, onConfirm: (dontAskAgain?: boolean) => boolean | Promise<boolean>, confirmType?: ButtonColor, confirmText?: string, dontAskAgain?: DontAskAgain): void;
declare type NotificationModal = (title: ReactNode, body: ReactNode, buttonColor?: ButtonColor, button?: ReactNode) => Promise<void>;
export declare const notificationModal: NotificationModal;
export { notificationModal as notification };
export declare function prompt<T extends ReactText>(title: React.ReactText, question: ReactNode, cb: (value: T) => void | Promise<void>, initial?: string, type?: string, hint?: ReactNode): void;
export declare function prompt<T extends ReactText>(title: React.ReactText, question: ReactNode, cb: (value: T) => void | Promise<void>, options?: Pick<PromptModalProps<T>, "initial" | "type" | "hint" | "validate">): void;
declare type CloseHandler = () => void;
interface ModalButton {
    color?: ButtonColor;
    text: ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>, close: CloseHandler) => void;
}
export declare type PropsWithCloseModal<P = {}> = P & {
    close: () => void;
};
declare type FullBodyRender = (props: {
    close: () => void;
}) => ReactNode;
interface DynamicModalOptions {
    title: ReactNode;
    fullBody?: ReactNode | FullBodyRender;
    body?: ReactNode;
    buttons?: ModalButton[];
    modalProps?: Partial<ModalProps>;
}
declare type DynamicModalHandler = (options: DynamicModalOptions) => Promise<void>;
export declare const dynamicModal: DynamicModalHandler;
