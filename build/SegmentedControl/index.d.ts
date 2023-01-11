import React, { ReactNode, HTMLProps, Ref } from 'react';

type SegmentedOption<V> = {
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
} & HTMLProps<HTMLInputElement>;
declare function UrefedSegmented<V extends string | number = string>({ options, value, label, inline, className, fullWidth, small, ...props }: Props<V>, ref: Ref<HTMLDivElement>): JSX.Element;
type SegmentedControlProps<V> = Props<V> & {
    ref?: React.ForwardedRef<HTMLDivElement>;
};
declare const SegmentedControl: <V extends string | number = string>({ options, value, ...props }: SegmentedControlProps<V>) => ReturnType<typeof UrefedSegmented>;

export { SegmentedControl, SegmentedControlProps, SegmentedOption };
