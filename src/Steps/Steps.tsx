import React, { forwardRef, isValidElement, ReactNode } from "react";

import { appendClass as ac } from "src/utils";

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
      className={`steps${ac(
        size !== "default",
        `steps--${size}`
      )} steps--${color}${ac(vertical, "steps--vertical")}${ac(className)}`}
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
