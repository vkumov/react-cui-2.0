import React from 'react';
import PropTypes from 'prop-types';
import { _ as _objectWithoutProperties, a as _extends } from '../_rollupPluginBabelHelpers-b60338eb.js';
import { a as appendClass } from '../index-be24eb93.js';
import { DisplayIf } from './Conditional.js';

const Progressbar = (_ref) => {
  let {
    percentage,
    withLabel,
    label,
    size,
    color,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["percentage", "withLabel", "label", "size", "color", "className"]);

  return React.createElement("div", _extends({
    className: `progressbar${appendClass(size !== "default", `progressbar--${size}`)}${appendClass(color, `progressbar--${color}`)}${appendClass(className)}`,
    "data-percentage": percentage
  }, props), React.createElement("div", {
    className: "progressbar__fill"
  }), React.createElement(DisplayIf, {
    condition: withLabel
  }, label ? React.createElement("div", {
    className: "progressbar__label"
  }, label) : React.createElement("div", {
    className: "progressbar__label"
  }, `${percentage}%`)));
};
Progressbar.propTypes = {
  percentage: PropTypes.number.isRequired,
  withLabel: PropTypes.bool,
  label: PropTypes.node,
  size: PropTypes.oneOf(["small", "default", "large"]),
  color: PropTypes.oneOf(["primary", "secondary", "tertiary", "success", "info", "warning-alt", "warning", "danger", "dark"]),
  className: PropTypes.string
};
Progressbar.defaultProps = {
  size: "default",
  withLabel: false,
  label: null,
  color: null,
  className: null
};

export { Progressbar };
