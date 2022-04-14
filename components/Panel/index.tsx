import React, { FC, HTMLProps } from "react";

import { appendClass as ac } from "../../utils";
import "../../css/panel.css";

type Borders = "top" | "right" | "left" | "bottom";

export interface PanelProps {
  color?:
    | "plain"
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "info"
    | "warning-alt"
    | "warning"
    | "danger"
    | "dark"
    | "light"
    | "lightest";
  padding?: "none" | "compressed" | "default" | "loose";
  bordered?: boolean | Borders | Borders[];
  raised?: boolean;
  well?: boolean;
  className?: string;
}

export const Panel: FC<PanelProps & HTMLProps<HTMLDivElement>> =
  React.forwardRef<HTMLDivElement, PanelProps>(
    (
      {
        color = "plain",
        padding = "default",
        bordered = false,
        raised = false,
        well = false,
        className = null,
        ...props
      },
      ref
    ) => (
      <div
        className={`panel${ac(color !== "plain", `panel--${color}`)}${ac(
          padding !== "default",
          `panel--${padding}`
        )}${ac(bordered, () => {
          if (typeof bordered === "string")
            return `panel--bordered-${bordered}`;
          if (Array.isArray(bordered))
            return bordered.map((b) => `panel--bordered-${b}`).join(" ");
          return "panel--bordered";
        })}${ac(raised, "panel--raised")}${ac(well, "panel--well")}${ac(
          className
        )}`}
        ref={ref}
        {...props}
      />
    )
  );
