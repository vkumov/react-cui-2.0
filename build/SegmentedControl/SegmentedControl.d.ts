import React, { type HTMLProps, type ReactNode, type Ref } from "react";
export type SegmentedOption<V> = {
    label: ReactNode;
    value: V;
    disabled?: boolean;
};
type Props<V> = {
    options: SegmentedOption<V>[] | readonly SegmentedOption<V>[];
    value: V;
    label?: ReactNode;
    inline?: boolean;
    fullWidth?: boolean;
    small?: boolean;
} & HTMLProps<HTMLInputElement> & Required<Pick<HTMLProps<HTMLInputElement>, "name">>;
declare function UrefedSegmented<V extends string | number = string>({ options, value, label, inline, className, fullWidth, small, ...props }: Props<V>, ref: Ref<HTMLDivElement>): JSX.Element;
export type SegmentedControlProps<V> = Props<V> & {
    ref?: React.ForwardedRef<HTMLDivElement>;
};
export declare const SegmentedControl: <V extends string | number = string>({ options, value, ...props }: SegmentedControlProps<V>) => ReturnType<typeof UrefedSegmented>;
export {};
