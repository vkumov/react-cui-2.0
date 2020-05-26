import React from 'react';
import PropTypes from 'prop-types';
import { a as appendClass } from '../index-be24eb93.js';

const Section = ({
  children,
  className
}) => React.createElement("div", {
  className: `section${appendClass(className)}`
}, children);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
Section.defaultProps = {
  className: null
};

export { Section };
