import React, { FC, ReactNode } from "react";
interface SwitchProps {
    left?: ReactNode;
    right?: ReactNode;
    disabled?: boolean;
    inline?: boolean;
    spacing?: "compressed" | "loose";
    asFormGroup?: boolean;
    form: {
        values: Record<string, unknown>;
        [x: string]: any;
    };
    field: {
        name: string;
        [x: string]: any;
    };
    className?: string;
    id?: string;
    style?: React.CSSProperties;
}
declare const Switch: FC<SwitchProps>;
export { Switch };
