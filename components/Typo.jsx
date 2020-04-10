import React from "react";
import PropTypes from "prop-types";

import { appendClass } from "../utils";

export const Display = ({ size, as, className, ...props }) =>
  React.createElement(as, {
    ...props,
    className: `display-${size}${appendClass(className)}`,
  });

Display.propTypes = {
  size: PropTypes.oneOf([0, 1, 2, 3, 4]).isRequired,
  as: PropTypes.node,
  className: PropTypes.string,
};

Display.defaultProps = {
  as: "h1",
  className: null,
};

export const Display0 = (props) => <Display {...props} size={0} />;
export const Display1 = (props) => <Display {...props} size={1} />;
export const Display2 = (props) => <Display {...props} size={2} />;
export const Display3 = (props) => <Display {...props} size={3} />;
export const Display4 = (props) => <Display {...props} size={4} />;
