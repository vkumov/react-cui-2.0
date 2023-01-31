import React, { HTMLProps, PropsWithChildren, forwardRef } from "react";

import { appendClass } from "src/utils";

export const Section = forwardRef<
  HTMLDivElement,
  PropsWithChildren<HTMLProps<HTMLDivElement>>
>(({ children, className = null, ...props }, ref) => (
  <div className={`section${appendClass(className)}`} {...props} ref={ref}>
    {children}
  </div>
));
