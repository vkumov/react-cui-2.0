import React, { ReactElement, ReactNode } from "react";

export type InputProps = {
    label?: ReactNode;
    type?: string;
    inline?: "label" | "both" | "form";
    helpBlock?: boolean | ReactNode;
    iconClick?: (e: any) => void;
    icon?: string | ReactElement<any>;
    className?: string;
    plain?: boolean;
    error?: ReactNode;
    horizontal?: boolean;
    horizontalLabelClassName?: string;
    prefix?: string;
};
export declare const Input: React.ForwardRefExoticComponent<Omit<InputProps & Omit<React.HTMLProps<HTMLInputElement>, "label">, "ref"> & React.RefAttributes<HTMLInputElement>>;
