import React from 'react';
import PropTypes from 'prop-types';
import { a as _extends } from '../../_rollupPluginBabelHelpers-b60338eb.js';
import { a as appendClass } from '../../index-be24eb93.js';

const Steps = ({
  size,
  color,
  vertical,
  children,
  className
}) => React.createElement("div", {
  className: `steps${appendClass(size !== "default", `steps--${size}`)} steps--${color}${appendClass(vertical, "steps--vertical")}${appendClass(className)}`
}, children);

Steps.propTypes = {
  size: PropTypes.oneOf(["dot", "small", "default", "large"]),
  color: PropTypes.oneOf(["primary", "secondary", "success", "dark"]),
  vertical: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
Steps.defaultProps = {
  size: "default",
  color: "primary",
  vertical: false,
  className: null
};

Steps.Dot = props => React.createElement(Steps, _extends({}, props, {
  size: "dot"
}));

Steps.Small = props => React.createElement(Steps, _extends({}, props, {
  size: "small"
}));

Steps.Large = props => React.createElement(Steps, _extends({}, props, {
  size: "large"
}));

export default Steps;
