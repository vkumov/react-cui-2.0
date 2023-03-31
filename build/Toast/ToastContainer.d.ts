/// <reference types="react" />
import { type ToastContainerProps } from "react-toastify";
type ExtraProps = {
    bordered?: boolean;
    shadow?: "sm" | "md" | "lg";
};
export declare const ToastContainer: ({ position, autoClose, draggable, hideProgressBar, containerId, transition, bordered, shadow, bodyClassName, toastClassName, ...props }: ToastContainerProps & ExtraProps) => JSX.Element;
export {};
