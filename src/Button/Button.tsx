import React, {
  createElement,
  forwardRef,
  type ComponentType,
  type FunctionComponent,
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

interface ButtonType extends FunctionComponent<ButtonProps> {
  Primary: ComponentType<ButtonProps>;
  Secondary: ComponentType<ButtonProps>;
  Success: ComponentType<ButtonProps>;
  Dark: ComponentType<ButtonProps>;
  Ghost: ComponentType<ButtonProps & { fullGhost?: boolean }>;
  Link: ComponentType<ButtonProps>;
  Light: ComponentType<ButtonProps>;
  Danger: ComponentType<ButtonProps>;
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

Button.displayName = "Button";

Button.Primary = forwardRef((props, ref) => (
  <Button {...props} color="primary" ref={ref} />
));
Button.Primary.displayName = "Button.Primary";

Button.Secondary = forwardRef((props, ref) => (
  <Button {...props} color="secondary" ref={ref} />
));
Button.Secondary.displayName = "Button.Secondary";

Button.Success = forwardRef((props, ref) => (
  <Button {...props} color="success" ref={ref} />
));
Button.Success.displayName = "Button.Success";

Button.Dark = forwardRef((props, ref) => (
  <Button {...props} color="dark" ref={ref} />
));
Button.Dark.displayName = "Button.Dark";

Button.Ghost = forwardRef(({ fullGhost = false, className, ...props }, ref) => (
  <Button
    className={cx({ "btn--full-ghost": fullGhost, [className]: className })}
    {...props}
    color="ghost"
    ref={ref}
  />
));
Button.Ghost.displayName = "Button.Ghost";

Button.Link = forwardRef((props, ref) => (
  <Button {...props} color="link" ref={ref} />
));
Button.Link.displayName = "Button.Link";

Button.Light = forwardRef((props, ref) => (
  <Button {...props} color="light" ref={ref} />
));
Button.Light.displayName = "Button.Light";

Button.Danger = forwardRef((props, ref) => (
  <Button {...props} color="danger" ref={ref} />
));
Button.Danger.displayName = "Button.Danger";

export { Button };
