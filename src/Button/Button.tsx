import React, { FC } from "react";

import { appendClass as ac } from "src/utils";

import "../../css/buttons.css";

export type ButtonColor =
  | "primary"
  | "secondary"
  | "success"
  | "dark"
  | "ghost"
  | "link"
  | "light"
  | "danger";

export interface ButtonProps extends React.ButtonHTMLAttributes<any> {
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
