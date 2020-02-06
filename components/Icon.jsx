import React from "react";
import PropTypes from "prop-types";

const Icon = ({ icon, size, className, ...props }) => (
  <span
    className={`icon-${icon}${className ? ` ${className}` : ""}${
      size ? ` icon-size-${size}` : ""
    }`}
    {...props}
  />
);

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
