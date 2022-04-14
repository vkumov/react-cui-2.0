import React, { FC, ReactNode } from "react";
import { UpdateOptions, ToastContainerProps } from "react-toastify";
import "../../css/toast.css";
declare type ToastType = "success" | "error" | "warning" | "info" | "none";
export declare type ToastProps = {
    title: ReactNode;
    message: ReactNode;
    type: ToastType;
    copyError: boolean;
};
export declare const Toast: FC<ToastProps>;
declare type ToastFunction = (title: ReactNode, message: ReactNode, copyError?: boolean, containerId?: string, args?: Record<string, unknown>) => React.ReactText;
export interface IToast {
    (type: ToastType, title: ReactNode, message: ReactNode, copyError?: boolean, containerId?: string, args?: Record<string, unknown>): React.ReactText;
}
declare type Toasts = {
    [x in ToastType]: ToastFunction;
};
interface ToastMethods {
    update: (toastId: React.ReactText, options?: UpdateOptions) => void;
    dismiss: (id?: string | number | undefined) => false | void;
}
export declare const toast: IToast & Toasts & ToastMethods;
export declare const ToastContainer: FC<ToastContainerProps>;
export {};
