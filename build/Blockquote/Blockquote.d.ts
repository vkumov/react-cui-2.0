import React, { type HTMLProps } from "react";
type BlockquoteProps = {
    cite?: string;
    color?: "primary" | "secondary" | "tertiary" | "success" | "info" | "warning" | "danger" | "dark" | "light" | "warning-alt";
    align?: "left" | "center" | "right";
    padding?: "compressed" | "default" | "loose";
} & HTMLProps<HTMLQuoteElement>;
export declare const Blockquote: React.ForwardRefExoticComponent<Omit<BlockquoteProps, "ref"> & React.RefAttributes<HTMLQuoteElement>>;
export {};
