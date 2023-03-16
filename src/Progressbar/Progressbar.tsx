import React, { forwardRef } from "react";
import cx from "classnames";

export type ProgressbarColor =
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "info"
  | "warning-alt"
  | "warning"
  | "danger"
  | "dark";

interface ProgressbarProps {
  percentage: number;
  withLabel?: boolean;
  label?: React.ReactNode;
  size?: "small" | "default" | "large";
  color?: ProgressbarColor;
  className?: string;
}

export const Progressbar = forwardRef<HTMLDivElement, ProgressbarProps>(
  (
    {
      size = "default",
      withLabel = false,
      label,
      color,
      className,
      percentage,
      ...props
    },
    ref
  ) => (
    <div
      className={cx("progressbar", {
        [`progressbar--${size}`]: size !== "default",
        [`progressbar--${color}`]: color,
        [className]: className,
      })}
      data-percentage={percentage}
      {...props}
      ref={ref}
    >
      <div className="progressbar__fill" />
      {withLabel ? (
        label ? (
          <div className="progressbar__label">{label}</div>
        ) : (
          <div className="progressbar__label">{`${percentage}%`}</div>
        )
      ) : null}
    </div>
  )
);
