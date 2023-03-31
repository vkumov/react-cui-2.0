import React, { type ReactNode } from "react";
export type GaugeColor = "primary" | "secondary" | "tertiary" | "success" | "info" | "warning" | "warning-alt" | "danger" | "dark" | "light";
type GaugeProps = {
    color?: GaugeColor;
    size?: "small" | "default" | "large";
    className?: string;
    label?: ReactNode;
    percentage: number;
};
export declare const Gauge: React.ForwardRefExoticComponent<Omit<GaugeProps & Omit<React.HTMLProps<HTMLDivElement>, "size">, "ref"> & React.RefAttributes<HTMLDivElement>>;
export {};
