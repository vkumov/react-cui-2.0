import React from "react";
import PropTypes from "prop-types";

export const Button = ({
  size,
  color,
  wide,
  justified,
  circle,
  className,
  asLink,
  ...props
}) =>
  React.createElement(asLink ? "a" : "button", {
    className: `btn${size !== "default" ? ` btn--${size}` : ""} btn--${color}${
      wide ? " btn--wide" : ""
    }${justified ? " btn--justified" : ""}${circle ? " btn--circle" : ""}${
      className ? ` ${className}` : ""
    }`,
    ...props
  });

Button.Primary = props => <Button {...props} color="primary" />;
Button.Secondary = props => <Button {...props} color="secondary" />;
Button.Success = props => <Button {...props} color="success" />;
Button.Dark = props => <Button {...props} color="dark" />;
Button.Ghost = props => <Button {...props} color="ghost" />;
Button.Link = props => <Button {...props} color="link" />;

const noColorProps = {
  size: PropTypes.oneOf(["small", "default", "large"]),
  wide: PropTypes.bool,
  justified: PropTypes.bool,
  circle: PropTypes.bool,
  asLink: PropTypes.bool,
  className: PropTypes.string
};

Button.propTypes = {
  ...noColorProps,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "dark",
    "ghost",
    "link"
  ])
};

Button.defaultProps = {
  size: "default",
  color: "primary",
  wide: false,
  justified: false,
  circle: false,
  asLink: false,
  className: null
};

Button.Primary.propTypes = noColorProps;
Button.Secondary.propTypes = noColorProps;
Button.Success.propTypes = noColorProps;
Button.Dark.propTypes = noColorProps;
Button.Ghost.propTypes = noColorProps;
Button.Link.propTypes = noColorProps;

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
