import React from "react";
import PropTypes from "prop-types";

import { appendClass } from "../utils";

const Display = ({ size, as, className, ...props }) =>
  React.createElement(as, {
    ...props,
    className: `display-${size}${appendClass(className)}`
  });

Display.propTypes = {
  size: PropTypes.oneOf([0, 1, 2, 3, 4]).isRequired,
  as: PropTypes.node,
  className: PropTypes.string
};

Display.defaultProps = {
  as: "h1",
  className: null
};

export { Display };
