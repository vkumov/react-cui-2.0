import React, { FC } from "react";
export type LabelColor = "primary" | "secondary" | "tertiary" | "success" | "info" | "warning-alt" | "warning" | "danger" | "dark" | "light";
type LabelProps = React.PropsWithChildren<{
    size?: "tiny" | "small" | "default" | "large";
    color?: LabelColor;
    bordered?: boolean;
    removable?: boolean;
    onRemove?: (e: any) => void;
    raised?: boolean;
    className?: string;
}> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
type LabelTypes = "Primary" | "Secondary" | "Tertiary" | "Success" | "Info" | "WarningAlt" | "Warning" | "Danger" | "Dark" | "Light";
type ILabel = {
    [x in LabelTypes]: FC<LabelProps>;
};
export declare const Label: ILabel & FC<LabelProps>;
export {};
