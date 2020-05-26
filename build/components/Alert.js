import React from 'react';
import PropTypes from 'prop-types';
import { _ as _objectWithoutProperties, a as _extends } from '../_rollupPluginBabelHelpers-b60338eb.js';

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

const Alert = ({
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
  return React.createElement("div", {
    className: `alert ${alertClass} ${className || ""}`
  }, withIcon ? React.createElement("div", {
    className: `alert__icon ${iconClass}`
  }) : null, React.createElement("div", {
    className: "alert__message"
  }, title && React.createElement("h4", null, title), children), dismissable && React.createElement("a", {
    className: "alert__close icon-close",
    onClick: handleDismiss
  }));
};
Alert.propTypes = {
  type: PropTypes.oneOf(["warning", "warning-alt", "danger", "error", "success", "dark", "light", "info"]),
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

Alert.Warning = (_ref) => {
  let props = _objectWithoutProperties(_ref, ["type"]);

  return React.createElement(Alert, _extends({
    type: "warning"
  }, props));
};

Alert.Danger = (_ref2) => {
  let props = _objectWithoutProperties(_ref2, ["type"]);

  return React.createElement(Alert, _extends({
    type: "danger"
  }, props));
};

Alert.Error = (_ref3) => {
  let props = _objectWithoutProperties(_ref3, ["type"]);

  return React.createElement(Alert, _extends({
    type: "error"
  }, props));
};

Alert.Success = (_ref4) => {
  let props = _objectWithoutProperties(_ref4, ["type"]);

  return React.createElement(Alert, _extends({
    type: "success"
  }, props));
};

Alert.Info = (_ref5) => {
  let props = _objectWithoutProperties(_ref5, ["type"]);

  return React.createElement(Alert, _extends({
    type: "info"
  }, props));
};

Alert.Dark = (_ref6) => {
  let props = _objectWithoutProperties(_ref6, ["type"]);

  return React.createElement(Alert, _extends({
    type: "dark"
  }, props));
};

Alert.Light = (_ref7) => {
  let props = _objectWithoutProperties(_ref7, ["type"]);

  return React.createElement(Alert, _extends({
    type: "light"
  }, props));
};

Alert.WarningAlt = (_ref8) => {
  let props = _objectWithoutProperties(_ref8, ["type"]);

  return React.createElement(Alert, _extends({
    type: "warning-alt"
  }, props));
};

export { Alert };
