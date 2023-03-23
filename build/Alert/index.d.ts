import { ReactNode, FC } from 'react';

type AlertType = "warning" | "warning-alt" | "danger" | "error" | "success" | "dark" | "light" | "info";
type AlertProps = {
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
declare const Alert: IAlert & FC<AlertProps>;

export { Alert, AlertProps, AlertType };
