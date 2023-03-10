import React, { forwardRef, type ReactNode } from "react";
import cx from "classnames";

type StepProps = {
  icon?: ReactNode;
  children: ReactNode;
  visited?: boolean;
  active?: boolean;
  className?: string;
  consequativeIdx?: number;
};

export const Step = forwardRef<HTMLDivElement, StepProps>(
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
      className={cx("step", {
        visited,
        active,
        [className]: className,
      })}
      ref={ref}
    >
      <div className="step__icon">{icon ?? consequativeIdx}</div>
      <div className="step__label">{children}</div>
    </div>
  )
);
