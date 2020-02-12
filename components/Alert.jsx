/* eslint-disable import/prefer-default-export */
import React from "react";
import PropTypes from "prop-types";

const classes = (type, icon) => {
  switch (type) {
    case "warning":
      return ["alert--warning", icon || "icon-warning-outline"];
    case "warning-alt":
      return ["alert--warning-alt", icon || "icon-warning-outline"];
    case "danger":
    case "error":
      return ["alert--warning-alt", icon || "icon-error-outline"];
    case "success":
      return ["alert--success", icon || "icon-check-outline"];
    case "dark":
      return ["alert--dark", icon || "icon-help-outline"];
    case "light":
      return ["alert--light", icon || "icon-help-outline"];
    default:
      return ["alert--info", icon || "icon-info-outline"];
  }
};

export const Alert = ({
  type,
  children,
  title,
  dismissable,
  className,
  onDismiss,
  withIcon,
  icon
}) => {
  const [dismissed, setDismissed] = React.useState(false);

  const handleDismiss = e => {
    setDismissed(true);
    if (onDismiss) onDismiss(e);
  };

  if (dismissed) return null;

  const [alertClass, iconClass] = classes(type, icon);

  return (
    <div className={`alert ${alertClass} ${className || ""}`}>
      {withIcon ? <div className={`alert__icon ${iconClass}`} /> : null}
      <div className="alert__message">
        {title && <h4>{title}</h4>}
        {children}
      </div>
      {dismissable && (
        <a className="alert__close icon-close" onClick={handleDismiss} />
      )}
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf([
    "warning",
    "warning-alt",
    "danger",
    "error",
    "success",
    "dark",
    "light",
    "info"
  ]),
  dismissable: PropTypes.bool,
  title: PropTypes.string,
  onDismiss: PropTypes.func,
  withIcon: PropTypes.bool,
  icon: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Alert.defaultProps = {
  className: null,
  dismissable: false,
  icon: null,
  onDismiss: null,
  title: "",
  type: "info",
  withIcon: true
};

Alert.Warning = ({ type, ...props }) => <Alert type="warning" {...props} />;
Alert.Danger = ({ type, ...props }) => <Alert type="danger" {...props} />;
Alert.Error = ({ type, ...props }) => <Alert type="error" {...props} />;
Alert.Success = ({ type, ...props }) => <Alert type="success" {...props} />;
Alert.Info = ({ type, ...props }) => <Alert type="info" {...props} />;
Alert.Dark = ({ type, ...props }) => <Alert type="dark" {...props} />;
Alert.Light = ({ type, ...props }) => <Alert type="light" {...props} />;
Alert.WarningAlt = ({ type, ...props }) => (
  <Alert type="warning-alt" {...props} />
);
