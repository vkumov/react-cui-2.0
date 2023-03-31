import React, { type HTMLProps, type ReactNode } from "react";
type PopoverTitleProps = {
    children: ReactNode;
    noLine?: boolean;
} & HTMLProps<HTMLHeadingElement>;
export declare const PopoverTitle: React.ForwardRefExoticComponent<Omit<PopoverTitleProps, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
export {};
