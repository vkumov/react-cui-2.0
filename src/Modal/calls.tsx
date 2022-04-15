import React, { ReactNode, ReactText } from "react";
import type { ButtonColor } from "src/Button";
import { eventManager } from "src/utils/eventManager";

import type { ModalProps } from "./Modal";
import type { PromptModalProps } from "./PromptModal";

export type DontAskAgain = {
  show: boolean;
  text?: ReactNode;
};

export function confirmation(
  prompt: ReactNode,
  onConfirm: (dontAskAgain?: boolean) => boolean | Promise<boolean>,
  confirmType: ButtonColor = "primary",
  confirmText = "Confirm",
  dontAskAgain: DontAskAgain = { show: false }
): void {
  if (!prompt) throw new Error("Prompt must be specified");
  if (!onConfirm || typeof onConfirm !== "function")
    throw new Error("onConfirm must be specified and must be a function");

  eventManager.emit("showModal", {
    modalType: "confirmation",
    prompt: <p>{prompt}</p>,
    onConfirm,
    confirmText,
    confirmType,
    dontAskAgain,
  });
}

type NotificationModal = (
  title: ReactNode,
  body: ReactNode,
  buttonColor?: ButtonColor,
  button?: ReactNode
) => Promise<void>;

export const notificationModal: NotificationModal = (
  title,
  body,
  buttonColor = "light",
  button = "OK"
) => {
  if (!title || !body) throw new Error("Title and body must be specified");

  return new Promise((resolve) => {
    eventManager.emit("showModal", {
      modalType: "notification",
      title,
      body,
      buttonColor,
      button,
      onClosed: resolve,
    });
  });
};

export { notificationModal as notification };

type initialOrOptions<T extends ReactText> =
  | Pick<PromptModalProps<T>, "initial" | "type" | "hint" | "validate">
  | string;

export function prompt<T extends ReactText>(
  title: React.ReactText,
  question: ReactNode,
  cb: (value: T) => void | Promise<void>,
  initial?: string,
  type?: string,
  hint?: ReactNode
): void;
export function prompt<T extends ReactText>(
  title: React.ReactText,
  question: ReactNode,
  cb: (value: T) => void | Promise<void>,
  options?: Pick<PromptModalProps<T>, "initial" | "type" | "hint" | "validate">
): void;
export function prompt<T extends ReactText>(
  title: React.ReactText,
  question: ReactNode,
  cb: (value: T) => void | Promise<void>,
  initial: initialOrOptions<T>,
  type = "text",
  hint = undefined
): void {
  if (!title || !question)
    throw new Error("Title and question must be specified");

  if (typeof initial === "object") {
    eventManager.emit("showModal", {
      modalType: "prompt",
      title,
      question,
      cb,
      options: initial,
    });
    return;
  }

  eventManager.emit("showModal", {
    modalType: "prompt",
    title,
    initial,
    type,
    question,
    cb,
    hint,
  });
}

type CloseHandler = () => void;

interface ModalButton {
  color?: ButtonColor;
  text: ReactNode;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement>,
    close: CloseHandler
  ) => void;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type PropsWithCloseModal<P = {}> = P & { close: () => void };

type FullBodyRender = (props: { close: () => void }) => ReactNode;

interface DynamicModalOptions {
  title: ReactNode;
  fullBody?: ReactNode | FullBodyRender;
  body?: ReactNode;
  buttons?: ModalButton[];
  modalProps?: Partial<ModalProps>;
}

type DynamicModalHandler = (options: DynamicModalOptions) => Promise<void>;

export const dynamicModal: DynamicModalHandler = async ({
  title,
  fullBody = null,
  body = null,
  buttons = [],
  modalProps = {},
}) => {
  return new Promise((resolve) => {
    eventManager.emit("showModal", {
      modalType: "dynamic",
      title,
      fullBody,
      body,
      buttons,
      modalProps,
      onModalClose: resolve,
    });
  });
};
