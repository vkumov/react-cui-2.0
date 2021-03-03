import React, { FC, ReactNode } from "react";

import { appendClass as ac } from "../../utils";

type StepsProps = {
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

const Steps: StepsSizes & FC<StepsProps> = ({
  size = "default",
  color = "primary",
  vertical = false,
  className = null,
  children,
}) => (
  <div
    className={`steps${ac(
      size !== "default",
      `steps--${size}`
    )} steps--${color}${ac(vertical, "steps--vertical")}${ac(className)}`}
  >
    {children}
  </div>
);

Steps.Dot = (props) => <Steps {...props} size="dot" />;
Steps.Small = (props) => <Steps {...props} size="small" />;
Steps.Large = (props) => <Steps {...props} size="large" />;

export default Steps;
