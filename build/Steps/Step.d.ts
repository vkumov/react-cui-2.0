import React, { type ReactNode } from "react";
type StepProps = {
    icon?: ReactNode;
    children: ReactNode;
    visited?: boolean;
    active?: boolean;
    className?: string;
    consequativeIdx?: number;
};
export declare const Step: React.ForwardRefExoticComponent<StepProps & React.RefAttributes<HTMLDivElement>>;
export {};
