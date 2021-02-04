import React, { ReactNode } from "react";
import type { ButtonColor } from "../Button";
import type { ModalProps } from "./Modal";
import { eventManager, EVENTS } from "../../utils";

export const confirmation = (
  prompt: ReactNode,
  onConfirm: () => boolean | Promise<boolean>,
  confirmType: ButtonColor = "primary",
  confirmText = "Confirm"
): void => {
  if (!prompt) throw new Error("Prompt must be specified");
  if (!onConfirm || typeof onConfirm !== "function")
    throw new Error("onConfirm must be specified and must be a function");

  eventManager.emit(EVENTS.SHOW_MODAL, {
    modalType: "confirmation",
    prompt: <p>{prompt}</p>,
    onConfirm,
    confirmText,
    confirmType,
  });
};

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
    eventManager.emit(EVENTS.SHOW_MODAL, {
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

export const prompt = (
  title: React.ReactText,
  question: ReactNode,
  cb: (value: unknown) => void | Promise<void>,
  initial = "",
  type = "text",
  hint = undefined
): void => {
  if (!title || !question)
    throw new Error("Title and question must be specified");

  if (typeof initial === "object") {
    eventManager.emit(EVENTS.SHOW_MODAL, {
      modalType: "prompt",
      title,
      question,
      cb,
      options: initial,
    });
    return;
  }

  eventManager.emit(EVENTS.SHOW_MODAL, {
    modalType: "prompt",
    title,
    initial,
    type,
    question,
    cb,
    hint,
  });
};

type CloseHandler = () => void;

interface ModalButton {
  color?: ButtonColor;
  text: ReactNode;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement>,
    close: CloseHandler
  ) => void;
}

interface DynamicModalOptions {
  title: ReactNode;
  fullBody?: ReactNode;
  body?: ReactNode;
  buttons?: ModalButton[];
  modalProps?: Partial<ModalProps>;
}

type DynamicModalHandler = (options: DynamicModalOptions) => void;

export const dynamicModal: DynamicModalHandler = ({
  title,
  fullBody = null,
  body = null,
  buttons = [],
  modalProps = {},
}): void => {
  eventManager.emit(EVENTS.SHOW_MODAL, {
    modalType: "dynamic",
    title,
    fullBody,
    body,
    buttons,
    modalProps,
  });
};
