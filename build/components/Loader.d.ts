import React, { FC } from "react";
declare type SpinnerProps = {
    size?: "small" | "default" | "large";
    text?: React.ReactNode;
};
export declare const Spinner: FC<SpinnerProps>;
declare type DotsProps = {
    color?: "primary" | "secondary" | "tertiary" | "success" | "info" | "warning" | "warning-alt" | "danger" | "dark" | "light";
};
export declare const Dots: FC<DotsProps>;
export {};
