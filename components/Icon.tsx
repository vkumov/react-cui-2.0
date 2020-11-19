import React, { FC } from "react";
import PropTypes from "prop-types";
import { appendClass as ac } from "../utils";

type IconProps = {
  icon: string;
  size?: 10 | 12 | 14 | 16 | 18 | 20 | 24 | 28 | 32 | 36 | 48 | 64 | 96 | 128;
  className?: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

const Icon: FC<IconProps> = ({
  icon,
  size = null,
  className = null,
  ...props
}) => (
  <span
    className={`icon-${icon}${ac(className)}${ac(size, `icon-size-${size}`)}`}
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
