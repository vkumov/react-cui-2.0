import React, { FC } from "react";
export declare type ProgressbarColor = "primary" | "secondary" | "tertiary" | "success" | "info" | "warning-alt" | "warning" | "danger" | "dark";
interface ProgressbarProps {
    percentage: number;
    withLabel?: boolean;
    label?: React.ReactNode;
    size?: "small" | "default" | "large";
    color?: ProgressbarColor;
    className?: string;
}
export declare const Progressbar: FC<ProgressbarProps>;
export {};
