import type { ReactNode } from "react";
export declare type Option = {
    label: ReactNode;
    value: string;
};
export declare type OptionGroup = {
    label: ReactNode;
    options: Option[];
};
export declare const isGrouped: (v: Option | OptionGroup) => v is OptionGroup;
export declare const findOption: (value: any, options: (Option | OptionGroup)[]) => Option;
