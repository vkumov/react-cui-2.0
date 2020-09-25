import { FC } from "react";
import { FieldInputProps, FormikProps } from "formik";
declare type CheckboxVariant = {
    id: string;
    name: string;
    [x: string]: any;
};
declare type CheckboxesProps = {
    inline?: boolean;
    variants: CheckboxVariant[];
    field: FieldInputProps<any>;
    form: FormikProps<any>;
};
export declare const Checkboxes: FC<CheckboxesProps>;
export {};
