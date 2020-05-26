import React from 'react';
import PropTypes from 'prop-types';
import { a as appendClass } from '../../index-be24eb93.js';

const Step = ({
  icon,
  children,
  visited,
  active,
  className
}) => React.createElement("div", {
  className: `step${appendClass(visited, "visited")}${appendClass(active, "active")}${appendClass(className)}`
}, React.createElement("div", {
  className: "step__icon"
}, icon), React.createElement("div", {
  className: "step__label"
}, children));

Step.propTypes = {
  icon: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  visited: PropTypes.bool,
  active: PropTypes.bool,
  className: PropTypes.string
};
Step.defaultProps = {
  visited: false,
  active: false,
  className: null
};

export default Step;
