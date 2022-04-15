import React, { FC, HTMLProps, ReactNode } from "react";
interface TextareaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
    label?: ReactNode;
    textareaClass?: string;
    innerDivClass?: string;
    inputRef?: React.Ref<HTMLTextAreaElement>;
    className?: string;
    inline?: boolean;
    error?: ReactNode;
}
export declare const Textarea: FC<TextareaProps & HTMLProps<HTMLTextAreaElement>>;
export {};
