import React, { forwardRef } from "react";
import cx from "classnames";

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
      className={cx(
        "btn-group",
        {
          "btn-group--square": square,
          "btn-group--divider": withDivider,
        },
        className
      )}
      {...props}
      ref={ref}
    />
  )
);
