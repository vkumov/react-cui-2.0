import React, { ReactNode } from "react";
import { FormikProps, FieldInputProps } from "formik";
declare type EditableSelectProps = {
    field: FieldInputProps<any>;
    form: Pick<FormikProps<any>, "touched" | "errors" | "values" | "setFieldValue" | "setFieldTouched">;
    compressed?: boolean;
    id?: string;
    title: ReactNode;
    prompt?: string;
    inline?: boolean;
    type?: "number" | "text";
    children: ReactNode;
};
export declare const EditableSelect: React.ForwardRefExoticComponent<EditableSelectProps & React.RefAttributes<HTMLDivElement>>;
export {};
