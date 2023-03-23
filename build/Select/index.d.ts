import { HTMLProps, ReactNode, FC, PropsWithChildren, MutableRefObject } from 'react';

type LabelColor = "primary" | "secondary" | "tertiary" | "success" | "info" | "warning-alt" | "warning" | "danger" | "dark" | "light";

type InputChipsProps = {
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
type FullInputChipsProps = InputChipsProps & Omit<HTMLProps<HTMLInputElement>, "id" | "value" | "onChange" | "label">;

type Option = {
    label: string;
    value: string;
};
type EditableSelectProps = {
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
type WantedChipsProps = Omit<FullInputChipsProps, "type" | "label" | "onSelect" | "onDeselect" | "value">;
type FullEditableSelectProps = PropsWithChildren<EditableSelectProps & Partial<WantedChipsProps>>;
declare const EditableSelect: FC<FullEditableSelectProps>;

export { EditableSelect };
