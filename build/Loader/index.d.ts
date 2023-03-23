import React, { FC } from 'react';

type DotsColor = "primary" | "secondary" | "tertiary" | "success" | "info" | "warning" | "warning-alt" | "danger" | "dark" | "light";
type DotsProps = {
    color?: DotsColor;
};
declare const Dots: React.ForwardRefExoticComponent<DotsProps & React.RefAttributes<HTMLDivElement>>;

type SpinnerProps = {
    size?: "small" | "default" | "large";
    text?: React.ReactNode;
};
declare const Spinner: FC<SpinnerProps>;

export { Dots, DotsColor, Spinner };
