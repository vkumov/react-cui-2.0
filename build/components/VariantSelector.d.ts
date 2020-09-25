import { ReactNode, FC } from "react";
interface Variant {
    variant: string;
    display: string;
    component: ReactNode;
    selected?: boolean;
}
declare type VariantSelectorProps = {
    variants: Variant[];
    varPrefix: string;
    title?: ReactNode;
    inline?: boolean;
    onChange?: (value: Variant) => void;
    disableable?: boolean;
    enableTitleAppend?: string;
    className?: string;
    list?: boolean;
};
declare const VariantSelector: FC<VariantSelectorProps>;
export { VariantSelector };
