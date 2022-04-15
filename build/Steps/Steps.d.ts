import React, { ReactNode } from "react";
declare type StepsProps = {
    size?: "dot" | "small" | "default" | "large";
    color?: "primary" | "secondary" | "success" | "dark";
    vertical?: boolean;
    className?: string;
    children: ReactNode;
};
export declare const Steps: React.ForwardRefExoticComponent<StepsProps & React.RefAttributes<HTMLDivElement>>;
export {};
