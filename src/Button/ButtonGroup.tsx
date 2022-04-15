import React, { forwardRef } from "react";

import { appendClass as ac } from "src/utils";

export type ButtonGroupProps = {
  square?: boolean;
  withDivider?: boolean;
  className?: string;
};

export const ButtonGroup = forwardRef<
  HTMLDivElement,
  ButtonGroupProps & React.HTMLProps<HTMLDivElement>
>(
  (
    { square = false, withDivider = false, className = null, ...props },
    ref
  ) => (
    <div
      className={`btn-group${ac(square, "btn-group--square")}${ac(
        withDivider,
        " btn-group--divider"
      )}${ac(className)}`}
      {...props}
      ref={ref}
    />
  )
);
