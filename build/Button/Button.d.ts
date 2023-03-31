import React, { type ComponentType, type FunctionComponent, type HTMLProps } from "react";

export type ButtonColor = "primary" | "secondary" | "success" | "dark" | "ghost" | "link" | "light" | "danger";
export type ButtonProps = {
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
} & Omit<HTMLProps<HTMLButtonElement>, "size">;
interface ButtonType extends FunctionComponent<ButtonProps> {
    Primary: ComponentType<ButtonProps>;
    Secondary: ComponentType<ButtonProps>;
    Success: ComponentType<ButtonProps>;
    Dark: ComponentType<ButtonProps>;
    Ghost: ComponentType<ButtonProps & {
        fullGhost?: boolean;
    }>;
    Link: ComponentType<ButtonProps>;
    Light: ComponentType<ButtonProps>;
    Danger: ComponentType<ButtonProps>;
}
declare let Button: ButtonType;
export { Button };
