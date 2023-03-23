import React, { ReactNode } from 'react';

type StepProps = {
    icon?: ReactNode;
    children: ReactNode;
    visited?: boolean;
    active?: boolean;
    className?: string;
    consequativeIdx?: number;
};
declare const Step: React.ForwardRefExoticComponent<StepProps & React.RefAttributes<HTMLDivElement>>;

type StepsProps = {
    size?: "dot" | "small" | "default" | "large";
    color?: "primary" | "secondary" | "success" | "dark";
    vertical?: boolean;
    className?: string;
    children: ReactNode;
};
declare const Steps: React.ForwardRefExoticComponent<StepsProps & React.RefAttributes<HTMLDivElement>>;

export { Step, Steps };
