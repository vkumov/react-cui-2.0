import React from "react";
export type DotsColor = "primary" | "secondary" | "tertiary" | "success" | "info" | "warning" | "warning-alt" | "danger" | "dark" | "light";
type DotsProps = {
    color?: DotsColor;
};
export declare const Dots: React.ForwardRefExoticComponent<DotsProps & React.RefAttributes<HTMLDivElement>>;
export {};
