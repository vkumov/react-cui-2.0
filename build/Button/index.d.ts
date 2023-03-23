import React, { HTMLProps, FunctionComponent, ComponentType } from 'react';

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

type ButtonGroupProps = {
    square?: boolean;
    withDivider?: boolean;
    className?: string;
};
declare const ButtonGroup: React.ForwardRefExoticComponent<Omit<ButtonGroupProps & React.HTMLProps<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

export { Button, ButtonColor, ButtonGroup, ButtonGroupProps, ButtonProps };
