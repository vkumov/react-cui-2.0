import React, { ForwardRefExoticComponent, HTMLProps } from "react";
import "../../css/buttons.css";
export declare type ButtonColor = "primary" | "secondary" | "success" | "dark" | "ghost" | "link" | "light" | "danger";
export declare type ButtonProps = {
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
declare type BFR = ForwardRefExoticComponent<ButtonProps>;
interface ButtonType extends BFR {
    Primary: BFR;
    Secondary: BFR;
    Success: BFR;
    Dark: BFR;
    Ghost: ForwardRefExoticComponent<ButtonProps & {
        fullGhost?: boolean;
    }>;
    Link: BFR;
    Light: BFR;
    Danger: BFR;
}
declare let Button: ButtonType;
export { Button };
