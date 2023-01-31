import React, { forwardRef, type HTMLProps, type ReactNode } from "react";

import { appendClass } from "src/utils";

export type GaugeColor =
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "info"
  | "warning"
  | "warning-alt"
  | "danger"
  | "dark"
  | "light";

type GaugeProps = {
  color?: GaugeColor;
  size?: "small" | "default" | "large";
  className?: string;
  label?: ReactNode;
  percentage: number;
};

export const Gauge = forwardRef<
  HTMLDivElement,
  GaugeProps & Omit<HTMLProps<HTMLDivElement>, "size">
>(
  (
    {
      color = "primary",
      size = "default",
      className = null,
      label,
      percentage,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={`gauge-container${appendClass(className)}`}
        {...props}
        ref={ref}
      >
        <div
          className={`gauge${appendClass(
            size && size !== "default",
            `gauge--${size}`
          )}${appendClass(color, `gauge--${color}`)}`}
          data-percentage={`${percentage}`}
        >
          <div className="gauge__circle">
            <div className="mask full">
              <div className="fill"></div>
            </div>
            <div className="mask half">
              <div className="fill"></div>
              <div className="fill fix"></div>
            </div>
          </div>
          <div className="gauge__inset">
            <div className="gauge__percentage">{percentage}</div>
          </div>
        </div>
        {label ? <div className="gauge__label">{label}</div> : null}
      </div>
    );
  }
);
