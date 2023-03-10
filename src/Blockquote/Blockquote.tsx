import React, { forwardRef, type HTMLProps } from "react";
import cx from "classnames";

type BlockquoteProps = {
  cite?: string;
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "dark"
    | "light"
    | "warning-alt";
  align?: "left" | "center" | "right";
  padding?: "compressed" | "default" | "loose";
} & HTMLProps<HTMLQuoteElement>;

export const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ className, cite, color, align, children, padding, ...props }, ref) => (
    <blockquote
      className={cx(
        {
          [`blockquote--${color}`]: color,
          [`blockquote--${align}`]: align,
          [`blockquote--${padding}`]: padding && padding !== "default",
        },
        className
      )}
      {...props}
      ref={ref}
    >
      <p>{children}</p>
      {cite ? <cite>{cite}</cite> : null}
    </blockquote>
  )
);
