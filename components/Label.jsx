import React from "react";
import PropTypes from "prop-types";

export const Label = ({
  size,
  color,
  bordered,
  removable,
  onRemove,
  raised,
  className,
  children,
  ...props
}) => (
  <span
    className={`${"label" + ` label--${color}`}${
      size !== "default" ? ` label--${size}` : ""
    }${bordered ? " label--bordered" : ""}${raised ? " label--raised" : ""}`}
    {...props}
  >
    {children}
    {removable ? <span class="icon-close" onClick={onRemove} /> : null}
  </span>
);

Label.propTypes = {
  size: PropTypes.oneOf(["tiny", "small", "default", "large"]),
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
    "light"
  ]),
  bordered: PropTypes.bool,
  removable: PropTypes.bool,
  onRemove: PropTypes.func,
  raised: PropTypes.bool
};

Label.defaultProps = {
  size: "default",
  color: "primary",
  bordered: false,
  removable: false,
  raised: false,
  onRemove: null
};
