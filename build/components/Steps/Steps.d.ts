import { FC, ReactNode } from "react";
declare type StepsProps = {
    size?: "dot" | "small" | "default" | "large";
    color?: "primary" | "secondary" | "success" | "dark";
    vertical?: boolean;
    className?: string;
    children: ReactNode;
};
interface StepsSizes {
    Dot: FC<StepsProps>;
    Small: FC<StepsProps>;
    Large: FC<StepsProps>;
}
declare const Steps: StepsSizes & FC<StepsProps>;
export default Steps;
