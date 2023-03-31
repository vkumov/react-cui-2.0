import React, { HTMLProps, ReactNode } from "react";
import { LabelColor } from "../Label";

export type InputChipsProps = {
    label?: ReactNode;
    chipsColor?: LabelColor;
    addOnBlur?: boolean;
    allowRepeat?: boolean;
    allowRegex?: string;
    delimiters?: string | number[];
    valueValidator?: (value: any) => boolean;
    maxChips?: number;
    baloon?: string;
    className?: string;
    id?: string;
    error?: ReactNode;
    value?: string[];
    outerWrap?: boolean;
    onChange?: (newValue: string[]) => void;
    onChipRemove?: (idx: number) => void;
    chipsOutside?: boolean;
    noInput?: boolean;
    renderChip?: (params: {
        onDelete: () => unknown;
        value: string;
        idx: number;
    }) => JSX.Element;
};
export type FullInputChipsProps = InputChipsProps & Omit<HTMLProps<HTMLInputElement>, "id" | "value" | "onChange" | "label">;
export declare const InputChips: React.ForwardRefExoticComponent<Omit<FullInputChipsProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
