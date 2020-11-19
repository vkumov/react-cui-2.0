import React, { ReactNode } from "react";
import type { ButtonColor } from "../Button";

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

export const notificationModal = (
  title: ReactNode,
  body: ReactNode,
  buttonColor: ButtonColor = "light",
  button = "OK"
): void => {
  if (!title || !body) throw new Error("Title and body must be specified");

  eventManager.emit(EVENTS.SHOW_MODAL, {
    modalType: "notification",
    title,
    body,
    buttonColor,
    button,
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
