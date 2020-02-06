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

Label.Primary = ({ color, ...props }) => <Label color="primary" {...props} />;
Label.Secondary = ({ color, ...props }) => (
  <Label color="secondary" {...props} />
);
Label.Tertiary = ({ color, ...props }) => <Label color="tertiary" {...props} />;
Label.Success = ({ color, ...props }) => <Label color="success" {...props} />;
Label.Info = ({ color, ...props }) => <Label color="info" {...props} />;
Label.WarningAlt = ({ color, ...props }) => (
  <Label color="warning-alt" {...props} />
);
Label.Warning = ({ color, ...props }) => <Label color="warning" {...props} />;
Label.Danger = ({ color, ...props }) => <Label color="danger" {...props} />;
Label.Dark = ({ color, ...props }) => <Label color="dark" {...props} />;
Label.Light = ({ color, ...props }) => <Label color="light" {...props} />;
