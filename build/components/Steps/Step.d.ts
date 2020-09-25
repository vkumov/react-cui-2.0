import { FC, ReactNode } from "react";
declare type StepProps = {
    icon: ReactNode;
    children: ReactNode;
    visited?: boolean;
    active?: boolean;
    className?: string;
};
declare const Step: FC<StepProps>;
export default Step;
