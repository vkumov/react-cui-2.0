import React from "react";
import PropTypes from "prop-types";

import { appendClass as ac } from "../utils";

export const Button = ({
  size,
  color,
  wide,
  justified,
  circle,
  className,
  asLink,
  style,
  selected,
  ...props
}) =>
  React.createElement(asLink ? "a" : "button", {
    className: `btn${ac(size !== "default", `btn--${size}`)} btn--${color}${ac(
      wide,
      "btn--wide"
    )}${ac(justified, " btn--justified")}${ac(circle, "btn--circle")}${ac(
      selected,
      "selected"
    )}${ac(className)}${ac(asLink, " flex-middle flex-center")}`,
    style: { ...(style || {}), ...(asLink ? { display: "flex" } : {}) },
    ...props
  });

Button.Primary = props => <Button {...props} color="primary" />;
Button.Secondary = props => <Button {...props} color="secondary" />;
Button.Success = props => <Button {...props} color="success" />;
Button.Dark = props => <Button {...props} color="dark" />;
Button.Ghost = props => <Button {...props} color="ghost" />;
Button.Link = props => <Button {...props} color="link" />;

Button.propTypes = {
  size: PropTypes.oneOf(["small", "default", "large"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "dark",
    "ghost",
    "link",
    "light"
  ]),
  wide: PropTypes.bool,
  justified: PropTypes.bool,
  circle: PropTypes.bool,
  asLink: PropTypes.bool,
  selected: PropTypes.bool,
  style: PropTypes.shape({}),
  className: PropTypes.string
};

Button.defaultProps = {
  size: "default",
  color: "primary",
  wide: false,
  justified: false,
  circle: false,
  asLink: false,
  selected: false,
  style: null,
  className: null
};

export const ButtonGroup = ({ square, withDivider, className, ...props }) => (
  <div
    className={`btn-group${square ? " btn-group--square" : ""}${
      withDivider ? " btn-group--divider" : ""
    }`}
    {...props}
  />
);

ButtonGroup.propTypes = {
  square: PropTypes.bool,
  withDivider: PropTypes.bool,
  className: PropTypes.string
};

ButtonGroup.defaultProps = {
  square: false,
  withDivider: false,
  className: null
};
