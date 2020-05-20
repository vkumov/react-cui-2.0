import React from "react";
import PropTypes from "prop-types";

import { appendClass as ac } from "../utils";

export const Panel = React.forwardRef(
  ({ color, padding, bordered, raised, well, className, ...props }, ref) => (
    <div
      className={`panel${ac(color !== "plain", `panel--${color}`)}${ac(
        padding !== "default",
        `panel--${padding}`
      )}${ac(bordered, () => {
        if (typeof bordered === "string") return `panel--bordered-${bordered}`;
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

Panel.propTypes = {
  color: PropTypes.oneOf([
    "plain",
    "primary",
    "secondary",
    "tertiary",
    "success",
    "info",
    "warning-alt",
    "warning",
    "danger",
    "dark",
    "light",
  ]),
  padding: PropTypes.oneOf(["none", "compressed", "default", "loose"]),
  bordered: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(["top", "right", "left", "bottom"]),
    PropTypes.arrayOf(PropTypes.oneOf(["top", "right", "left", "bottom"])),
  ]),
  raised: PropTypes.bool,
  well: PropTypes.bool,
  className: PropTypes.string,
};

Panel.defaultProps = {
  color: "plain",
  padding: "default",
  bordered: false,
  raised: false,
  well: false,
  className: null,
};
