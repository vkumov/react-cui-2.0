import React, { forwardRef, HTMLProps } from "react";
import { appendClass } from "src/utils";

import "../../css/kbd.css";

export const Kbd = forwardRef<HTMLSpanElement, HTMLProps<HTMLSpanElement>>(
  ({ children, className, ...props }, ref) => (
    <span className={`kbd${appendClass(className)}`} ref={ref} {...props}>
      {children}
    </span>
  )
);
