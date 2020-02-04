import React from "react";
import PropTypes from "prop-types";

export const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? React.cloneElement(wrapper, null, children) : children;

ConditionalWrapper.propTypes = {
  condition: PropTypes.bool.isRequired,
  wrapper: PropTypes.element.isRequired
};
