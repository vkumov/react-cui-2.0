import React from 'react';
import PropTypes from 'prop-types';
import { _ as _objectWithoutProperties, a as _extends, b as _objectSpread2 } from '../_rollupPluginBabelHelpers-b60338eb.js';
import { a as appendClass } from '../index-be24eb93.js';

const Badge = (_ref) => {
  let {
    color,
    size,
    children,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["color", "size", "children", "className"]);

  return React.createElement("span", _extends({
    className: `${`badge badge--${color}`}${appendClass(size !== "default", `badge--${size}`)}${appendClass(className)}`
  }, props), children);
};

const badgeProps = {
  color: PropTypes.oneOf(["primary", "secondary", "tertiary", "success", "info", "warning", "warning-alt", "danger", "dark", "light"]),
  size: PropTypes.oneOf(["dot", "tiny", "small", "default", "large"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
Badge.propTypes = badgeProps;
Badge.defaultProps = {
  color: "primary",
  size: "default",
  className: ""
};

Badge.Dot = props => React.createElement(Badge, _extends({}, props, {
  size: "dot"
}));

Badge.Tiny = props => React.createElement(Badge, _extends({}, props, {
  size: "tiny"
}));

Badge.Small = props => React.createElement(Badge, _extends({}, props, {
  size: "small"
}));

Badge.Default = props => React.createElement(Badge, _extends({}, props, {
  size: "default"
}));

Badge.Large = props => React.createElement(Badge, _extends({}, props, {
  size: "large"
}));

Badge.Wrapper = ({
  children,
  className
}) => React.createElement("span", {
  className: `badge-wrapper${appendClass(className)}`
}, children);

Badge.Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
Badge.Wrapper.defaultProps = {
  className: null
};
const WithBadge = (_ref2) => {
  let {
    children,
    badge,
    wrapperClass
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["children", "badge", "wrapperClass"]);

  return React.createElement(Badge.Wrapper, {
    className: wrapperClass
  }, children, React.createElement(Badge, props, badge));
};
WithBadge.propTypes = _objectSpread2({
  children: PropTypes.node.isRequired,
  badge: PropTypes.node.isRequired,
  wrapperClass: PropTypes.string
}, badgeProps);
WithBadge.defaultProps = {
  wrapperClass: null
};

export default Badge;
export { WithBadge };
