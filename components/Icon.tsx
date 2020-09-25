import React, { FC } from "react";
import PropTypes from "prop-types";

type IconProps = {
  icon: string;
  size?: 10 | 12 | 14 | 16 | 18 | 20 | 24 | 28 | 32 | 36 | 48 | 64 | 96 | 128;
  className?: string;
};

const Icon: FC<IconProps> = ({
  icon,
  size = null,
  className = null,
  ...props
}) => (
  <span
    className={`icon-${icon}${className ? ` ${className}` : ""}${
      size ? ` icon-size-${size}` : ""
    }`}
    {...props}
  />
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf([
    10,
    12,
    14,
    16,
    18,
    20,
    24,
    28,
    32,
    36,
    48,
    64,
    96,
    128,
  ]),
  className: PropTypes.string,
};

export { Icon };
