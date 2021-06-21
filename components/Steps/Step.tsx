import React, { forwardRef, ReactNode } from "react";

import { appendClass as ac } from "../../utils";

type StepProps = {
  icon?: ReactNode;
  children: ReactNode;
  visited?: boolean;
  active?: boolean;
  className?: string;
  consequativeIdx?: number;
};

const Step = forwardRef<HTMLDivElement, StepProps>(
  (
    {
      visited = false,
      active = false,
      className = null,
      icon,
      children,
      consequativeIdx,
    },
    ref
  ) => (
    <div
      className={`step${ac(visited, "visited")}${ac(active, "active")}${ac(
        className
      )}`}
      ref={ref}
    >
      <div className="step__icon">{icon ?? consequativeIdx}</div>
      <div className="step__label">{children}</div>
    </div>
  )
);

export default Step;
