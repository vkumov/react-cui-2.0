import { type FC, type ReactNode } from "react";
export type AlertType = "warning" | "warning-alt" | "danger" | "error" | "success" | "dark" | "light" | "info";
export type AlertProps = {
    type?: AlertType;
    children: ReactNode;
    title?: string;
    dismissable?: boolean;
    className?: string;
    onDismiss?: (e: any) => void;
    withIcon?: boolean;
    icon?: string;
};
type AlertTypes = "Warning" | "Danger" | "Error" | "Success" | "Info" | "Dark" | "Light" | "WarningAlt";
type IAlert = {
    [x in AlertTypes]: FC<Omit<AlertProps, "type">>;
};
export declare const Alert: IAlert & FC<AlertProps>;
export {};
