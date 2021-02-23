import { FC, HTMLProps, ReactNode } from "react";
declare type CheckboxProps = {
    inline?: boolean;
    asFormGroup?: boolean;
    children?: ReactNode;
    spacing?: "compressed" | "default" | "loose";
};
declare const Checkbox: FC<CheckboxProps & HTMLProps<HTMLInputElement>>;
export { Checkbox };
