import React, { FC, HTMLProps, ReactNode } from 'react';

interface RadioProps extends Omit<HTMLProps<HTMLInputElement>, "label"> {
    spacing?: "compressed" | "regular" | "loose" | "nospacing";
    inline?: boolean;
    label?: ReactNode;
    className?: string;
    id?: string;
    divProps?: HTMLProps<HTMLDivElement>;
}
declare const Radio: React.ForwardRefExoticComponent<Omit<RadioProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
interface RadioValue {
    value: string;
    label: ReactNode;
}
interface RadiosProps {
    values: RadioValue[];
    value: string;
    onChange: (value: string) => void;
    name: string;
}
declare const Radios: FC<RadiosProps>;

export { Radio, Radios };
