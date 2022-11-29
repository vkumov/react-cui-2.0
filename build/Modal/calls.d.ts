import React, { type ReactNode } from "react";
import type { ButtonColor } from "../Button";
import type { ModalProps } from "./Modal";
import type { PromptModalProps } from "./PromptModal";
export type DontAskAgain = {
  show: boolean;
  text?: ReactNode;
};
type TextOrNumber = string | number;
export declare function confirmation(
  prompt: ReactNode,
  onConfirm: (dontAskAgain?: boolean) => boolean | Promise<boolean>,
  confirmType?: ButtonColor,
  confirmText?: string,
  dontAskAgain?: DontAskAgain
): Promise<void>;
type NotificationModal = (
  title: ReactNode,
  body: ReactNode,
  buttonColor?: ButtonColor,
  button?: ReactNode
) => Promise<void>;
export declare const notificationModal: NotificationModal;
export { notificationModal as notification };
export declare function prompt<T extends TextOrNumber>(
  title: string,
  question: ReactNode,
  cb: (value: T) => void | Promise<void>,
  initial?: string,
  type?: string,
  hint?: ReactNode
): Promise<void>;
export declare function prompt<T extends TextOrNumber>(
  title: string,
  question: ReactNode,
  cb: (value: T) => void | Promise<void>,
  options?: Pick<PromptModalProps<T>, "initial" | "type" | "hint" | "validate">
): Promise<void>;
type CloseHandler = () => void;
interface ModalButton {
  color?: ButtonColor;
  text: ReactNode;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement>,
    close: CloseHandler
  ) => void;
}
export type PropsWithCloseModal<P = {}> = P & {
  close: () => void;
};
type FullBodyRender = (props: { close: () => void }) => ReactNode;
interface DynamicModalOptions {
  title: ReactNode;
  fullBody?: ReactNode | FullBodyRender;
  body?: ReactNode;
  buttons?: ModalButton[];
  modalProps?: Partial<ModalProps>;
}
type DynamicModalHandler = (options: DynamicModalOptions) => Promise<void>;
export declare const dynamicModal: DynamicModalHandler;
