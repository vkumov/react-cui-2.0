import React, { HTMLProps, ForwardRefExoticComponent } from 'react';

type ButtonColor = "primary" | "secondary" | "success" | "dark" | "ghost" | "link" | "light" | "danger";
type ButtonProps = {
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
type BFR = ForwardRefExoticComponent<ButtonProps>;
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

type ButtonGroupProps = {
    square?: boolean;
    withDivider?: boolean;
    className?: string;
};
declare const ButtonGroup: React.ForwardRefExoticComponent<Omit<ButtonGroupProps & React.HTMLProps<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

export { Button, ButtonColor, ButtonGroup, ButtonGroupProps, ButtonProps };
