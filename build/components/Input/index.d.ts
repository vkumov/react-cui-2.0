import React, { FC, ReactNode, HTMLProps } from "react";
import "../../css/input.css";
export declare type InputProps = {
    label?: ReactNode;
    type?: string;
    inputRef?: React.Ref<HTMLInputElement>;
    inline?: "label" | "both" | "form";
    helpBlock?: boolean;
    iconClick?: (e: any) => void;
    icon?: string;
    className?: string;
    plain?: boolean;
    error?: ReactNode;
    horizontal?: boolean;
    horizontalLabelClassName?: string;
    prefix?: string;
};
declare const Input: FC<InputProps & Omit<HTMLProps<HTMLInputElement>, "label">>;
export { Input };
