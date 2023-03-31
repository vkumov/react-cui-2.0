import React, { type ReactNode } from "react";

type CheckboxProps = {
    inline?: boolean;
    asFormGroup?: boolean;
    children?: ReactNode;
    spacing?: "compressed" | "default" | "loose";
};
export declare const Checkbox: React.ForwardRefExoticComponent<Omit<CheckboxProps & React.HTMLProps<HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;
export {};
