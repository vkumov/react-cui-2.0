import { type FC, type ReactNode } from "react";
import { type DropzoneProps as ReactDropzoneProps } from "react-dropzone";

export type DropzoneProps = {
    name: string;
    value?: any[];
    maxFiles?: number;
    inline?: boolean;
    showTotalSelected?: boolean;
    accept?: string;
    loose?: boolean;
    compressed?: boolean;
    label: string;
    multiple: boolean;
    error?: ReactNode;
    maxFileSize?: string | number;
    onChange?: (value: File[]) => void;
};
export declare const Dropzone: FC<DropzoneProps & ReactDropzoneProps>;
