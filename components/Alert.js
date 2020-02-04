import React from "react";
import PropTypes from "prop-types";

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

  let alertClass, iconClass;

  switch (type) {
    case "warning":
      alertClass = "alert--warning";
      iconClass = icon || "icon-warning-outline";
      break;

    case "warning-alt":
      alertClass = "alert--warning-alt";
      iconClass = icon || "icon-warning-outline";
      break;

    case "danger":
    case "error":
      alertClass = "alert--warning-alt";
      iconClass = icon || "icon-error-outline";
      break;

    case "success":
      alertClass = "alert--success";
      iconClass = icon || "icon-check-outline";
      break;

    case "dark":
      alertClass = "alert--dark";
      iconClass = icon || "icon-help-outline";
      break;

    case "light":
      alertClass = "alert--light";
      iconClass = icon || "icon-help-outline";
      break;

    default:
      alertClass = "alert--info";
      iconClass = icon || "icon-info-outline";
      break;
  }

  return (
    <div className={`alert ${alertClass} ${className ? className : ""}`}>
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
  ]).isRequired,
  dismissable: PropTypes.bool,
  title: PropTypes.string,
  onDismiss: PropTypes.func,
  withIcon: PropTypes.bool,
  icon: PropTypes.string
};

Alert.defaultProps = {
  type: "info",
  dismissable: false,
  title: "",
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
