import React, { FC, ReactNode } from "react";
import { FieldInputProps } from "formik";
interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
    spacing?: "compressed" | "regular" | "loose" | "nospacing";
    inline?: boolean;
    label?: ReactNode;
    className?: string;
    id: string;
    field: FieldInputProps<any>;
}
export declare const Radio: FC<RadioProps>;
interface RadioValue {
    value: string;
    label: ReactNode;
}
interface RadiosProps {
    values: RadioValue[];
}
export declare const Radios: FC<RadiosProps>;
export {};
