import React, { forwardRef, HTMLProps } from "react";
import { appendClass } from "src/utils";

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
      className={`${appendClass(color, `blockquote--${color}`)}${appendClass(
        align,
        `blockquote--${align}`
      )}${appendClass(
        padding && padding !== "default",
        `blockquote--${padding}`
      )}${appendClass(className)}`}
      {...props}
      ref={ref}
    >
      <p>{children}</p>
      {cite ? <cite>{cite}</cite> : null}
    </blockquote>
  )
);
