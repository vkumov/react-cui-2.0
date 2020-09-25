import React, { FC } from "react";
interface ProgressbarProps {
    percentage: number;
    withLabel?: boolean;
    label?: React.ReactNode;
    size?: "small" | "default" | "large";
    color?: "primary" | "secondary" | "tertiary" | "success" | "info" | "warning-alt" | "warning" | "danger" | "dark";
    className?: string;
}
export declare const Progressbar: FC<ProgressbarProps>;
export {};
