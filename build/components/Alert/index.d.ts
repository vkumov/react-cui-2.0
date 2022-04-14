import { FC, ReactNode } from "react";
export declare type AlertType = "warning" | "warning-alt" | "danger" | "error" | "success" | "dark" | "light" | "info";
export declare type AlertProps = {
    type?: AlertType;
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
    [x in AlertTypes]: FC<Omit<AlertProps, "type">>;
};
export declare const Alert: IAlert & FC<AlertProps>;
export {};
