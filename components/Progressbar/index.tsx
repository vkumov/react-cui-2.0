import React, { FC } from "react";

import { DisplayIf as If } from "../Conditional";
import { appendClass as ac } from "../../utils";

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

export const Progressbar: FC<ProgressbarProps> = ({
  size = "default",
  withLabel = false,
  label = null,
  color = null,
  className = null,
  percentage,
  ...props
}) => (
  <div
    className={`progressbar${ac(
      size !== "default",
      `progressbar--${size}`
    )}${ac(color, `progressbar--${color}`)}${ac(className)}`}
    data-percentage={percentage}
    {...props}
  >
    <div className="progressbar__fill" />
    <If condition={withLabel}>
      {label ? (
        <div className="progressbar__label">{label}</div>
      ) : (
        <div className="progressbar__label">{`${percentage}%`}</div>
      )}
    </If>
  </div>
);
