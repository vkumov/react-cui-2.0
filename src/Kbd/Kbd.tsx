import React, { FC, HTMLProps, forwardRef } from "react";

import { appendClass } from "src/utils";

import "../../css/kbd.css";

export const Kbd: FC<HTMLProps<HTMLSpanElement>> = forwardRef<
  HTMLSpanElement,
  HTMLProps<HTMLSpanElement>
>(({ children, className, ...props }, ref) => (
  <span className={`kbd${appendClass(className)}`} ref={ref} {...props}>
    {children}
  </span>
));
