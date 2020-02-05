import React from "react";
import PropTypes from "prop-types";

export const Panel = ({
  color,
  padding,
  bordered,
  raised,
  well,
  className,
  ...props
}) => (
  <div
    className={
      "panel" +
      (color !== "plain" ? ` panel--${color}` : "") +
      (padding !== "default" ? ` panel--${padding}` : "") +
      (bordered
        ? typeof bordered === "string"
          ? ` panel--bordered-${bordered}`
          : Array.isArray(bordered)
          ? bordered.map(b => ` panel--bordered-${b}`).join("")
          : " panel--bordered"
        : "") +
      (raised ? " panel--raised" : "") +
      (well ? " panel--well" : "")
    }
    {...props}
  />
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
    "light"
  ]),
  padding: PropTypes.oneOf(["none", "compressed", "default", "loose"]),
  bordered: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(["top", "right", "left", "bottom"]),
    PropTypes.arrayOf(PropTypes.oneOf(["top", "right", "left", "bottom"]))
  ]),
  raised: PropTypes.bool,
  well: PropTypes.bool
};

Panel.defaultProps = {
  color: "plain",
  padding: "default",
  bordered: false,
  raised: false,
  well: false
};
