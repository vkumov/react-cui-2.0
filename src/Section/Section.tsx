import React, {
  forwardRef,
  type HTMLProps,
  type PropsWithChildren,
} from "react";
import cx from "classnames";

export const Section = forwardRef<
  HTMLDivElement,
  PropsWithChildren<HTMLProps<HTMLDivElement>>
>(({ children, className = null, ...props }, ref) => (
  <div className={cx("section", className)} {...props} ref={ref}>
    {children}
  </div>
));
