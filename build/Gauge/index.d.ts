import React, { ReactNode } from 'react';

type GaugeColor = "primary" | "secondary" | "tertiary" | "success" | "info" | "warning" | "warning-alt" | "danger" | "dark" | "light";
type GaugeProps = {
    color?: GaugeColor;
    size?: "small" | "default" | "large";
    className?: string;
    label?: ReactNode;
    percentage: number;
};
declare const Gauge: React.ForwardRefExoticComponent<Omit<GaugeProps & Omit<React.HTMLProps<HTMLDivElement>, "size">, "ref"> & React.RefAttributes<HTMLDivElement>>;

export { Gauge, GaugeColor };
