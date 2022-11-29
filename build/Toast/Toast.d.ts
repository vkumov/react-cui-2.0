import React, { FC, ReactNode } from "react";
import { ToastOptions, UpdateOptions } from "react-toastify";
type ToastType = "success" | "error" | "warning" | "info" | "loading" | "none";
export type ToastProps = {
    title: ReactNode;
    message: ReactNode;
    type: ToastType;
    copyError?: boolean;
    bordered?: boolean;
};
export declare const Toast: FC<ToastProps>;
type ToastFunction = (title: ReactNode, message: ReactNode, copyError?: boolean, containerId?: string, args?: Record<string, unknown>) => React.ReactText;
export interface IToast {
    (type: ToastType, title: ReactNode, message: ReactNode, copyError?: boolean, containerId?: string, args?: Partial<ToastOptions>): React.ReactText;
}
type Toasts = {
    [x in ToastType]: ToastFunction;
};
interface ToastMethods {
    update: (toastId: React.ReactText, updates: ToastProps, options?: UpdateOptions) => void;
    dismiss: (id?: string | number | undefined) => false | void;
}
export declare const toast: IToast & Toasts & ToastMethods;
export {};
