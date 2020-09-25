import React, { FC, ReactNode } from "react";
import { FormikErrors, FormikTouched } from "formik";
interface TextareaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
    label?: ReactNode;
    textareaClass?: string;
    innerDivClass?: string;
    inputRef?: React.Ref<HTMLTextAreaElement>;
    className?: string;
    id?: string;
    field: {
        name: string;
        value: string;
        [x: string]: any;
    };
    form: {
        touched: FormikErrors<any>;
        errors: FormikTouched<any>;
        [x: string]: any;
    };
    inline?: boolean;
}
declare const Textarea: FC<TextareaProps>;
export { Textarea };
