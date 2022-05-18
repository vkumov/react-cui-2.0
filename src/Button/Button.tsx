import React, {
  createElement,
  forwardRef,
  ForwardRefExoticComponent,
  HTMLProps,
} from "react";

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

export type ButtonProps = {
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
} & Omit<HTMLProps<HTMLButtonElement>, "size">;

type BFR = ForwardRefExoticComponent<ButtonProps>;

interface ButtonType extends BFR {
  Primary: BFR;
  Secondary: BFR;
  Success: BFR;
  Dark: BFR;
  Ghost: ForwardRefExoticComponent<ButtonProps & { fullGhost?: boolean }>;
  Link: BFR;
  Light: BFR;
  Danger: BFR;
}

let Button: ButtonType;

(Button as any) = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
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
    },
    ref
  ) =>
    createElement(asLink ? "a" : "button", {
      className: `btn${ac(
        size !== "default",
        `btn--${size}`
      )} btn--${color}${ac(wide, "btn--wide")}${ac(
        justified,
        "btn--justified"
      )}${ac(icon, "btn--icon")}${ac(circle, "btn--circle")}${ac(
        selected,
        "selected"
      )}${ac(className)}${ac(asLink, "flex-middle flex-center")}`,
      style: { ...(style || {}), ...(asLink ? { display: "flex" } : {}) },
      ...(asLink ? {} : { type: type || "button" }),
      ...props,
      ref,
    })
);

Button.Primary = forwardRef((props, ref) => (
  <Button {...props} color="primary" ref={ref} />
));
Button.Secondary = forwardRef((props, ref) => (
  <Button {...props} color="secondary" ref={ref} />
));
Button.Success = forwardRef((props, ref) => (
  <Button {...props} color="success" ref={ref} />
));
Button.Dark = forwardRef((props, ref) => (
  <Button {...props} color="dark" ref={ref} />
));
Button.Ghost = forwardRef(({ fullGhost = false, className, ...props }, ref) => (
  <Button
    className={`${ac(fullGhost, "btn--full-ghost")}${ac(className)}`}
    {...props}
    color="ghost"
    ref={ref}
  />
));
Button.Link = forwardRef((props, ref) => (
  <Button {...props} color="link" ref={ref} />
));
Button.Light = forwardRef((props, ref) => (
  <Button {...props} color="light" ref={ref} />
));
Button.Danger = forwardRef((props, ref) => (
  <Button {...props} color="danger" ref={ref} />
));

export { Button };
