import React from "react";
import PropTypes from "prop-types";

export const Button = ({
  size,
  color,
  wide,
  justified,
  circle,
  className,
  ...props
}) => (
  <button
    className={
      "btn" +
      (size !== "default" ? ` btn-${size}` : "") +
      ` btn--${color}` +
      (wide ? " btn--wide" : "") +
      (justified ? " btn--justified" : "") +
      (circle ? " btn--circle" : "") +
      (className ? ` ${className}` : "")
    }
    {...props}
  />
);

Button.Primary = ({ color, ...props }) => <Button color="primary" {...props} />;
Button.Secondary = ({ color, ...props }) => (
  <Button color="secondary" {...props} />
);
Button.Success = ({ color, ...props }) => <Button color="success" {...props} />;
Button.Dark = ({ color, ...props }) => <Button color="dark" {...props} />;
Button.Ghost = ({ color, ...props }) => <Button color="ghost" {...props} />;
Button.Link = ({ color, ...props }) => <Button color="link" {...props} />;

Button.propTypes = {
  size: PropTypes.oneOf(["small", "default", "large"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "dark",
    "ghost",
    "link"
  ]).isRequired,
  wide: PropTypes.bool,
  justified: PropTypes.bool,
  circle: PropTypes.bool
};

Button.defaultProps = {
  size: "default",
  color: "primary"
};

export const ButtonGroup = ({ square, withDivider, className, ...props }) => (
  <div
    className={
      "btn-group" +
      (square ? " btn-group--square" : "") +
      (withDivider ? " btn-group--divider" : "")
    }
    {...props}
  ></div>
);

ButtonGroup.propTypes = {
  square: PropTypes.bool,
  withDivider: PropTypes.bool
};
