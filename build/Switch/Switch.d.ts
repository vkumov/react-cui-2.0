import React, { type FC, type HTMLProps, type ReactNode } from "react";
interface SwitchProps {
    left?: ReactNode;
    right?: ReactNode;
    disabled?: boolean;
    inline?: boolean;
    spacing?: "compressed" | "loose";
    asFormGroup?: boolean;
    className?: string;
    id?: string;
    style?: React.CSSProperties;
}
export declare const Switch: FC<SwitchProps & HTMLProps<HTMLInputElement>>;
export {};
