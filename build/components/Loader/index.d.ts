import React, { FC } from "react";
declare type SpinnerProps = {
    size?: "small" | "default" | "large";
    text?: React.ReactNode;
};
export declare const Spinner: FC<SpinnerProps>;
export declare type DotsColor = "primary" | "secondary" | "tertiary" | "success" | "info" | "warning" | "warning-alt" | "danger" | "dark" | "light";
declare type DotsProps = {
    color?: DotsColor;
};
export declare const Dots: FC<DotsProps>;
export {};
