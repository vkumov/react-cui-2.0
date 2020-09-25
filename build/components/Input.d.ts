import React, { FC, ReactNode } from "react";
import { FormikHandlers } from "formik";
declare type MinimalFormikProps = {
    errors: Record<string, unknown>;
    touched: Record<string, unknown>;
    values: Record<string, unknown>;
    [x: string]: unknown;
};
declare type MinimalFieldProps = {
    name: string;
    onChange: FormikHandlers["handleChange"];
    [x: string]: unknown;
};
declare type InputProps = {
    label?: ReactNode;
    type?: string;
    inputRef?: React.Ref<HTMLInputElement>;
    inline?: "group" | "label" | "both" | "form";
    helpBlock?: boolean;
    form: MinimalFormikProps;
    field: MinimalFieldProps;
    iconClick?: (e: any) => void;
    icon?: string;
    id?: string;
    className?: string;
    plain?: boolean;
};
declare const Input: FC<InputProps>;
export { Input };
