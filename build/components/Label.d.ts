import { FC, ReactNode } from "react";
declare type LabelProps = {
    size?: "tiny" | "small" | "default" | "large";
    color?: "primary" | "secondary" | "tertiary" | "success" | "info" | "warning-alt" | "warning" | "danger" | "dark" | "light";
    bordered?: boolean;
    removable?: boolean;
    onRemove?: (e: any) => void;
    raised?: boolean;
    className?: string;
    children: ReactNode;
    [x: string]: any;
};
declare type LabelTypes = "Primary" | "Secondary" | "Tertiary" | "Success" | "Info" | "WarningAlt" | "Warning" | "Danger" | "Dark" | "Light";
declare type ILabel = {
    [x in LabelTypes]: FC<LabelProps>;
};
export declare const Label: ILabel & FC<LabelProps>;
export {};
