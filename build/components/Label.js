import React from 'react';
import PropTypes from 'prop-types';
import { _ as _objectWithoutProperties, a as _extends } from '../_rollupPluginBabelHelpers-b60338eb.js';

const Label = (_ref) => {
  let {
    size,
    color,
    bordered,
    removable,
    onRemove,
    raised,
    className,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["size", "color", "bordered", "removable", "onRemove", "raised", "className", "children"]);

  return React.createElement("span", _extends({
    className: `${"label" + ` label--${color}`}${size !== "default" ? ` label--${size}` : ""}${bordered ? " label--bordered" : ""}${raised ? " label--raised" : ""}${className ? ` ${className}` : ""}`
  }, props), children, removable ? React.createElement("span", {
    className: "icon-close",
    onClick: onRemove
  }) : null);
};
Label.propTypes = {
  size: PropTypes.oneOf(["tiny", "small", "default", "large"]),
  color: PropTypes.oneOf(["primary", "secondary", "tertiary", "success", "info", "warning-alt", "warning", "danger", "dark", "light"]),
  bordered: PropTypes.bool,
  removable: PropTypes.bool,
  onRemove: PropTypes.func,
  raised: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
Label.defaultProps = {
  size: "default",
  color: "primary",
  bordered: false,
  removable: false,
  raised: false,
  onRemove: null,
  className: null
};

Label.Primary = (_ref2) => {
  let props = _objectWithoutProperties(_ref2, ["color"]);

  return React.createElement(Label, _extends({
    color: "primary"
  }, props));
};

Label.Secondary = (_ref3) => {
  let props = _objectWithoutProperties(_ref3, ["color"]);

  return React.createElement(Label, _extends({
    color: "secondary"
  }, props));
};

Label.Tertiary = (_ref4) => {
  let props = _objectWithoutProperties(_ref4, ["color"]);

  return React.createElement(Label, _extends({
    color: "tertiary"
  }, props));
};

Label.Success = (_ref5) => {
  let props = _objectWithoutProperties(_ref5, ["color"]);

  return React.createElement(Label, _extends({
    color: "success"
  }, props));
};

Label.Info = (_ref6) => {
  let props = _objectWithoutProperties(_ref6, ["color"]);

  return React.createElement(Label, _extends({
    color: "info"
  }, props));
};

Label.WarningAlt = (_ref7) => {
  let props = _objectWithoutProperties(_ref7, ["color"]);

  return React.createElement(Label, _extends({
    color: "warning-alt"
  }, props));
};

Label.Warning = (_ref8) => {
  let props = _objectWithoutProperties(_ref8, ["color"]);

  return React.createElement(Label, _extends({
    color: "warning"
  }, props));
};

Label.Danger = (_ref9) => {
  let props = _objectWithoutProperties(_ref9, ["color"]);

  return React.createElement(Label, _extends({
    color: "danger"
  }, props));
};

Label.Dark = (_ref10) => {
  let props = _objectWithoutProperties(_ref10, ["color"]);

  return React.createElement(Label, _extends({
    color: "dark"
  }, props));
};

Label.Light = (_ref11) => {
  let props = _objectWithoutProperties(_ref11, ["color"]);

  return React.createElement(Label, _extends({
    color: "light"
  }, props));
};

export { Label };
