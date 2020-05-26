import React from 'react';
import PropTypes from 'prop-types';
import { _ as _objectWithoutProperties, b as _objectSpread2, a as _extends } from '../_rollupPluginBabelHelpers-b60338eb.js';
import { a as appendClass } from '../index-be24eb93.js';

const Display = (_ref) => {
  let {
    size,
    as,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["size", "as", "className"]);

  return React.createElement(as, _objectSpread2({}, props, {
    className: `display-${size}${appendClass(className)}`
  }));
};
Display.propTypes = {
  size: PropTypes.oneOf([0, 1, 2, 3, 4]).isRequired,
  as: PropTypes.node,
  className: PropTypes.string
};
Display.defaultProps = {
  as: "h1",
  className: null
};
const Display0 = props => React.createElement(Display, _extends({}, props, {
  size: 0
}));
const Display1 = props => React.createElement(Display, _extends({}, props, {
  size: 1
}));
const Display2 = props => React.createElement(Display, _extends({}, props, {
  size: 2
}));
const Display3 = props => React.createElement(Display, _extends({}, props, {
  size: 3
}));
const Display4 = props => React.createElement(Display, _extends({}, props, {
  size: 4
}));

export { Display, Display0, Display1, Display2, Display3, Display4 };
