import { FC, ReactNode } from "react";
declare type AlertProps = {
    type?: "warning" | "warning-alt" | "danger" | "error" | "success" | "dark" | "light" | "info";
    children: ReactNode;
    title?: string;
    dismissable?: boolean;
    className?: string;
    onDismiss?: (e: any) => void;
    withIcon?: boolean;
    icon?: string;
};
declare type AlertTypes = "Warning" | "Danger" | "Error" | "Success" | "Info" | "Dark" | "Light" | "WarningAlt";
declare type IAlert = {
    [x in AlertTypes]: FC<AlertProps>;
};
export declare const Alert: IAlert & FC<AlertProps>;
export {};
