import { FC, ReactNode } from "react";
import { FormikProps, FieldInputProps } from "formik";
declare type CheckboxProps = {
    inline?: boolean;
    asFormGroup?: boolean;
    form: FormikProps<any>;
    field: FieldInputProps<any>;
    children?: ReactNode;
};
declare const Checkbox: FC<CheckboxProps>;
export { Checkbox };
