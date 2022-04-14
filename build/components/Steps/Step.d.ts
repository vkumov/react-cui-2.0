import React, { ReactNode } from "react";
declare type StepProps = {
    icon?: ReactNode;
    children: ReactNode;
    visited?: boolean;
    active?: boolean;
    className?: string;
    consequativeIdx?: number;
};
declare const Step: React.ForwardRefExoticComponent<StepProps & React.RefAttributes<HTMLDivElement>>;
export default Step;
