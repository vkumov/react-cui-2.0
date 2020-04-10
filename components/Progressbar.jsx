import React from "react";
import PropTypes from "prop-types";

import { DisplayIf as If } from "./Conditional";
import { appendClass as ac } from "../utils";

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
    "dark",
  ]),
  className: PropTypes.string,
};

Progressbar.defaultProps = {
  size: "default",
  withLabel: false,
  label: null,
  color: null,
  className: null,
};
