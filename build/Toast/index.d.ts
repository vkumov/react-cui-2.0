/// <reference types="react" />
import React, { ReactNode, FC } from 'react';
import { ToastOptions, UpdateOptions, ToastContainerProps } from 'react-toastify';

type ToastType = "success" | "error" | "warning" | "info" | "loading" | "none";
type ToastProps = {
    title: ReactNode;
    message: ReactNode;
    type: ToastType;
    copyError?: boolean;
    bordered?: boolean;
};
declare const Toast: FC<ToastProps>;
type ToastFunction = (title: ReactNode, message: ReactNode, copyError?: boolean, containerId?: string, args?: Record<string, unknown>) => React.ReactText;
interface IToast {
    (type: ToastType, title: ReactNode, message: ReactNode, copyError?: boolean, containerId?: string, args?: Partial<ToastOptions>): React.ReactText;
}
type Toasts = {
    [x in ToastType]: ToastFunction;
};
interface ToastMethods {
    update: (toastId: React.ReactText, updates: ToastProps, options?: UpdateOptions) => void;
    dismiss: (id?: string | number | undefined) => false | void;
}
declare const toast: IToast & Toasts & ToastMethods;

type ExtraProps = {
    bordered?: boolean;
    shadow?: "sm" | "md" | "lg";
};
declare const ToastContainer: ({ position, autoClose, draggable, hideProgressBar, containerId, transition, bordered, shadow, bodyClassName, toastClassName, ...props }: ToastContainerProps & ExtraProps) => JSX.Element;

export { IToast, Toast, ToastContainer, ToastProps, toast };
