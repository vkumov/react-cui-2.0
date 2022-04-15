import React, { forwardRef } from "react";

export type DotsColor =
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

type DotsProps = {
  color?: DotsColor;
};

export const Dots = forwardRef<HTMLDivElement, DotsProps>(
  ({ color = "primary" }, ref) => (
    <div
      className={`loading-dots${
        color !== "primary" ? ` loading-dots--${color}` : ""
      }`}
      ref={ref}
    >
      <span />
      <span />
      <span />
    </div>
  )
);
