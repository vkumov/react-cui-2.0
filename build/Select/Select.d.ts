import { PropsWithChildren, ReactNode, MutableRefObject, FC } from "react";
import type { FullInputChipsProps } from "../InputChips";
declare type Option = {
    label: string;
    value: string;
};
declare type EditableSelectProps = {
    compressed?: boolean;
    label?: ReactNode;
    prompt?: string;
    inline?: boolean;
    editable?: boolean;
    type?: "number" | "text";
    error?: ReactNode;
    multi?: boolean;
    onChange?: (value: any) => void;
    value?: any;
    displayValues?: boolean;
    disabled?: boolean;
    divRef?: MutableRefObject<HTMLDivElement>;
    options?: Option[];
    onSelect?: (value: string) => void | (() => void);
    onDeselect?: (value: string) => void | (() => void);
};
declare type WantedChipsProps = Omit<FullInputChipsProps, "type" | "label" | "onSelect" | "onDeselect" | "value">;
declare type FullEditableSelectProps = PropsWithChildren<EditableSelectProps & Partial<WantedChipsProps>>;
export declare const EditableSelect: FC<FullEditableSelectProps>;
export {};
