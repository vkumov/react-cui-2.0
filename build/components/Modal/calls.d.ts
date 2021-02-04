import React, { ReactNode } from "react";
import type { ButtonColor } from "../Button";
import type { ModalProps } from "./Modal";
export declare const confirmation: (prompt: ReactNode, onConfirm: () => boolean | Promise<boolean>, confirmType?: ButtonColor, confirmText?: string) => void;
declare type NotificationModal = (title: ReactNode, body: ReactNode, buttonColor?: ButtonColor, button?: ReactNode) => Promise<void>;
export declare const notificationModal: NotificationModal;
export { notificationModal as notification };
export declare const prompt: (title: React.ReactText, question: ReactNode, cb: (value: unknown) => void | Promise<void>, initial?: string, type?: string, hint?: any) => void;
declare type CloseHandler = () => void;
interface ModalButton {
    color?: ButtonColor;
    text: ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>, close: CloseHandler) => void;
}
interface DynamicModalOptions {
    title: ReactNode;
    fullBody?: ReactNode;
    body?: ReactNode;
    buttons?: ModalButton[];
    modalProps?: Partial<ModalProps>;
}
declare type DynamicModalHandler = (options: DynamicModalOptions) => void;
export declare const dynamicModal: DynamicModalHandler;
