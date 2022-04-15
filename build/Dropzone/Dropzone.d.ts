import { FC, ReactNode } from "react";
import { DropzoneProps as ReactDropzoneProps } from "react-dropzone";
import "../../css/dropzone.css";
export declare type DropzoneProps = {
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
