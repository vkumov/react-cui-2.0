import { ReactNode, FC } from "react";
export type Variant = {
    variant: string;
    display: string;
    component: ReactNode;
    selected?: boolean;
};
export type VariantSelectorProps = {
    variants: Variant[];
    name?: string;
    title?: ReactNode;
    inline?: boolean;
    onChange?: (value: Variant) => void;
    disableable?: boolean;
    enableTitleAppend?: string;
    className?: string;
    list?: boolean;
    variant?: string;
};
export declare const VariantSelector: FC<VariantSelectorProps>;
