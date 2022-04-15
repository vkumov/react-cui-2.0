import React, { FC } from "react";
export declare type LabelColor = "primary" | "secondary" | "tertiary" | "success" | "info" | "warning-alt" | "warning" | "danger" | "dark" | "light";
declare type LabelProps = React.PropsWithChildren<{
    size?: "tiny" | "small" | "default" | "large";
    color?: LabelColor;
    bordered?: boolean;
    removable?: boolean;
    onRemove?: (e: any) => void;
    raised?: boolean;
    className?: string;
}> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
declare type LabelTypes = "Primary" | "Secondary" | "Tertiary" | "Success" | "Info" | "WarningAlt" | "Warning" | "Danger" | "Dark" | "Light";
declare type ILabel = {
    [x in LabelTypes]: FC<LabelProps>;
};
export declare const Label: ILabel & FC<LabelProps>;
export {};
