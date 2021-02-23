import React, { FC, ReactNode } from "react";

import { appendClass as ac } from "../../utils";

type StepProps = {
  icon: ReactNode;
  children: ReactNode;
  visited?: boolean;
  active?: boolean;
  className?: string;
};

const Step: FC<StepProps> = ({
  visited = false,
  active = false,
  className = null,
  icon,
  children,
}) => (
  <div
    className={`step${ac(visited, "visited")}${ac(active, "active")}${ac(
      className
    )}`}
  >
    <div className="step__icon">{icon}</div>
    <div className="step__label">{children}</div>
  </div>
);

export default Step;
