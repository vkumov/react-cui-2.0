import { ReactNode, FC } from 'react';

type Variant = {
    variant: string;
    display: string;
    component: ReactNode;
    selected?: boolean;
};
type VariantSelectorProps = {
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
declare const VariantSelector: FC<VariantSelectorProps>;

export { Variant, VariantSelector, VariantSelectorProps };
