import { ReactNode, FC } from 'react';
import { DropzoneProps as DropzoneProps$1 } from 'react-dropzone';

type DropzoneProps = {
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
declare const Dropzone: FC<DropzoneProps & DropzoneProps$1>;

export { Dropzone, DropzoneProps };
