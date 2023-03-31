import React from "react";
export type ButtonGroupProps = {
    square?: boolean;
    withDivider?: boolean;
    className?: string;
};
export declare const ButtonGroup: React.ForwardRefExoticComponent<Omit<ButtonGroupProps & React.HTMLProps<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
