import React, { ReactNode } from "react";
import type { ButtonColor } from "../Button";
export declare const confirmation: (prompt: ReactNode, onConfirm: () => boolean | Promise<boolean>, confirmType?: ButtonColor, confirmText?: string) => void;
export declare const notificationModal: (title: ReactNode, body: ReactNode, buttonColor?: ButtonColor, button?: string) => void;
export { notificationModal as notification };
export declare const prompt: (title: React.ReactText, question: ReactNode, cb: (value: unknown) => void | Promise<void>, initial?: string, type?: string, hint?: any) => void;
