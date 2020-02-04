import React from "react";
import PropTypes from "prop-types";

export const Progressbar = ({
  percentage,
  withLabel,
  label,
  size,
  color,
  className,
  ...props
}) => (
  <div
    className={`progressbar${
      size !== "default" ? ` progressbar--${size}` : ""
    }${color ? ` progressbar--${color}` : ""}${
      className ? ` ${className}` : ""
    }`}
    data-percentage={percentage}
    {...props}
  >
    <div className="progressbar__fill"></div>
    {withLabel ? (
      label ? (
        <div className="progressbar__label">{label}</div>
      ) : (
        <div className="progressbar__label">{percentage}%</div>
      )
    ) : null}
  </div>
);

Progressbar.propTypes = {
  percentage: PropTypes.number.isRequired,
  withLabel: PropTypes.bool,
  label: PropTypes.node,
  size: PropTypes.oneOf(["small", "default", "large"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "success",
    "info",
    "warning-alt",
    "warning",
    "danger",
    "dark"
  ])
};

Progressbar.defaultProps = {
  size: "default"
};
