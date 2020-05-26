import React from 'react';
import PropTypes from 'prop-types';
import { _ as _objectWithoutProperties, a as _extends } from '../_rollupPluginBabelHelpers-b60338eb.js';

const Icon = (_ref) => {
  let {
    icon,
    size,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["icon", "size", "className"]);

  return React.createElement("span", _extends({
    className: `icon-${icon}${className ? ` ${className}` : ""}${size ? ` icon-size-${size}` : ""}`
  }, props));
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf([false, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 48]),
  className: PropTypes.string
};
Icon.defaultProps = {
  size: false,
  className: null
};

export { Icon };
