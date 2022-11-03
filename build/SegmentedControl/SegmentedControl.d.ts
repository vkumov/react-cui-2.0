import React, { type HTMLProps, type ReactNode, type Ref } from "react";
export declare type SegmentedOption<V> = {
    label: ReactNode;
    value: V;
    disabled?: boolean;
};
declare type Props<V> = {
    options: SegmentedOption<V>[] | readonly SegmentedOption<V>[];
    value: V;
    label?: ReactNode;
    inline?: boolean;
    fullWidth?: boolean;
} & HTMLProps<HTMLInputElement>;
declare function UrefedSegmented<V extends string | number = string>({ options, value, label, inline, className, fullWidth, ...props }: Props<V>, ref: Ref<HTMLDivElement>): JSX.Element;
export declare type SegmentedControlProps<V> = Props<V> & {
    ref?: React.ForwardedRef<HTMLDivElement>;
};
export declare const SegmentedControl: <V extends string | number = string>({ options, value, ...props }: SegmentedControlProps<V>) => ReturnType<typeof UrefedSegmented>;
export {};
