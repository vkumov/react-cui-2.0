import React, { ReactNode } from 'react';

type CheckboxProps = {
    inline?: boolean;
    asFormGroup?: boolean;
    children?: ReactNode;
    spacing?: "compressed" | "default" | "loose";
};
declare const Checkbox: React.ForwardRefExoticComponent<Omit<CheckboxProps & React.HTMLProps<HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;

declare const IndeterminateCheckbox: React.ForwardRefExoticComponent<Omit<{
    indeterminate?: boolean;
} & Omit<{
    inline?: boolean;
    asFormGroup?: boolean;
    children?: React.ReactNode;
    spacing?: "compressed" | "default" | "loose";
} & React.HTMLProps<HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;

export { Checkbox, IndeterminateCheckbox };
