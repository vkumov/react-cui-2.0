import React, {
  createElement,
  forwardRef,
  type ForwardRefExoticComponent,
  type HTMLProps,
} from "react";
import cx from "classnames";

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
      className: cx(
        "btn",
        `btn--${color}`,
        {
          [`btn--${size}`]: size !== "default",
          "btn--wide": wide,
          "btn--justified": justified,
          "btn--icon": icon,
          "btn--circle": circle,
          selected,
          "flex-middle flex-center": asLink,
        },
        className
      ),
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
    className={cx({ "btn--full-ghost": fullGhost, [className]: className })}
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
