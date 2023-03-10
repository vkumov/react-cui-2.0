import React, { forwardRef, isValidElement, type ReactNode } from "react";
import cx from "classnames";

type StepsProps = {
  size?: "dot" | "small" | "default" | "large";
  color?: "primary" | "secondary" | "success" | "dark";
  vertical?: boolean;
  className?: string;
  children: ReactNode;
};

export const Steps = forwardRef<HTMLDivElement, StepsProps>(
  (
    {
      size = "default",
      color = "primary",
      vertical = false,
      className = null,
      children,
    },
    ref
  ) => (
    <div
      className={cx("steps", `steps--${color}`, {
        [`steps--${size}`]: size !== "default",
        "steps--vertical": vertical,
        [className]: className,
      })}
      ref={ref}
    >
      {React.Children.toArray(children)
        .filter(Boolean)
        .map((child, idx) =>
          isValidElement(child)
            ? React.cloneElement<any>(child, { consequativeIdx: idx + 1 })
            : child
        )}
    </div>
  )
);
