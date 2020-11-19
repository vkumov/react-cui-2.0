import React, { FC } from "react";
import PropTypes from "prop-types";

import { appendClass as ac } from "../utils";

import "../css/buttons.css";

export type ButtonColor =
  | "primary"
  | "secondary"
  | "success"
  | "dark"
  | "ghost"
  | "link"
  | "light"
  | "danger";

interface ButtonProps extends React.ButtonHTMLAttributes<any> {
  size?: "small" | "default" | "large";
  color?: ButtonColor;
  wide?: boolean;
  justified?: boolean;
  circle?: boolean;
  asLink?: boolean;
  selected?: boolean;
  style?: React.CSSProperties;
  className?: string;
  icon?: boolean;
  type?: "submit" | "reset" | "button";
}

interface ButtonColors {
  Primary: FC<ButtonProps>;
  Secondary: FC<ButtonProps>;
  Success: FC<ButtonProps>;
  Dark: FC<ButtonProps>;
  Ghost: FC<ButtonProps>;
  Link: FC<ButtonProps>;
  Light: FC<ButtonProps>;
  Danger: FC<ButtonProps>;
}

export const Button: ButtonColors & FC<ButtonProps> = ({
  size = "default",
  color = "primary",
  wide = false,
  justified = false,
  circle = false,
  className = null,
  asLink = false,
  style = null,
  selected = false,
  type = null,
  icon = false,
  ...props
}) =>
  React.createElement(asLink ? "a" : "button", {
    className: `btn${ac(size !== "default", `btn--${size}`)} btn--${color}${ac(
      wide,
      "btn--wide"
    )}${ac(justified, "btn--justified")}${ac(icon, "btn--icon")}${ac(
      circle,
      "btn--circle"
    )}${ac(selected, "selected")}${ac(className)}${ac(
      asLink,
      "flex-middle flex-center"
    )}`,
    style: { ...(style || {}), ...(asLink ? { display: "flex" } : {}) },
    ...(asLink ? {} : { type: type || "button" }),
    ...props,
  });

Button.Primary = (props) => <Button {...props} color="primary" />;
Button.Secondary = (props) => <Button {...props} color="secondary" />;
Button.Success = (props) => <Button {...props} color="success" />;
Button.Dark = (props) => <Button {...props} color="dark" />;
Button.Ghost = (props) => <Button {...props} color="ghost" />;
Button.Link = (props) => <Button {...props} color="link" />;
Button.Light = (props) => <Button {...props} color="light" />;
Button.Danger = (props) => <Button {...props} color="danger" />;

Button.propTypes = {
  size: PropTypes.oneOf(["small", "default", "large"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "dark",
    "ghost",
    "link",
    "light",
    "danger",
  ]),
  wide: PropTypes.bool,
  justified: PropTypes.bool,
  circle: PropTypes.bool,
  asLink: PropTypes.bool,
  selected: PropTypes.bool,
  style: PropTypes.shape({}),
  className: PropTypes.string,
  icon: PropTypes.bool,
  type: PropTypes.oneOf(["submit", "reset", "button"]),
};

type ButtonGroupProps = {
  square?: boolean;
  withDivider?: boolean;
  className?: string;
};

export const ButtonGroup: FC<
  ButtonGroupProps &
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
> = ({ square = false, withDivider = false, className = null, ...props }) => (
  <div
    className={`btn-group${ac(square, "btn-group--square")}${ac(
      withDivider,
      " btn-group--divider"
    )}${ac(className)}`}
    {...props}
  />
);

ButtonGroup.propTypes = {
  square: PropTypes.bool,
  withDivider: PropTypes.bool,
  className: PropTypes.string,
};
