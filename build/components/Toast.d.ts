import React, { FC, ReactNode } from "react";
import { UpdateOptions, ToastPosition } from "react-toastify";
import "../css/toast.css";
declare type ToastType = "success" | "error" | "warning" | "info" | "none";
declare type ToastProps = {
    title: ReactNode;
    message: React.ReactText;
    type: ToastType;
    copyError: boolean;
};
export declare const Toast: FC<ToastProps>;
declare type ToastFunction = (title: ReactNode, message: React.ReactText, copyError?: boolean, containerId?: string, args?: Record<string, unknown>) => React.ReactText;
interface IToast {
    (type: ToastType, title: ReactNode, message: React.ReactText, copyError: boolean, containerId: string, args: Record<string, unknown>): React.ReactText;
}
declare type Toasts = {
    [x in ToastType]: ToastFunction;
};
interface ToastMethods {
    update: (toastId: React.ReactText, options?: UpdateOptions) => void;
    dismiss: (id?: string | number | undefined) => false | void;
}
export declare const toast: IToast & Toasts & ToastMethods;
declare type ToastContainerProps = {
    position?: ToastPosition;
    autoClose?: number;
    draggable?: boolean;
    hideProgressBar?: boolean;
    containerId?: string | number;
    [x: string]: unknown;
};
export declare const ToastContainer: FC<ToastContainerProps>;
export {};
