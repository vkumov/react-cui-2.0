import React, { FC } from "react";
import "../css/buttons.css";
export declare type ButtonColor = "primary" | "secondary" | "success" | "dark" | "ghost" | "link" | "light" | "danger";
interface ButtonProps extends React.ButtonHTMLAttributes<any> {
    size?: "small" | "default" | "large";
    color?: ButtonColor;
    wide?: boolean;
    justified?: boolean;
    circle?: boolean;
    asLink?: boolean;
    selected?: boolean;
    style?: React.CSSProperties;
    className?: string;
    icon?: boolean;
    type?: "submit" | "reset" | "button";
}
interface ButtonColors {
    Primary: FC<ButtonProps>;
    Secondary: FC<ButtonProps>;
    Success: FC<ButtonProps>;
    Dark: FC<ButtonProps>;
    Ghost: FC<ButtonProps>;
    Link: FC<ButtonProps>;
    Light: FC<ButtonProps>;
    Danger: FC<ButtonProps>;
}
export declare const Button: ButtonColors & FC<ButtonProps>;
declare type ButtonGroupProps = {
    square?: boolean;
    withDivider?: boolean;
    className?: string;
};
export declare const ButtonGroup: FC<ButtonGroupProps>;
export {};
