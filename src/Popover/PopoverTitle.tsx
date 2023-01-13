import React, { forwardRef, type HTMLProps, type ReactNode } from "react";
import cx from "classnames";

type PopoverTitleProps = {
  children: ReactNode;
  noLine?: boolean;
} & HTMLProps<HTMLHeadingElement>;

export const PopoverTitle = forwardRef<HTMLHeadingElement, PopoverTitleProps>(
  ({ className, noLine, ...props }, ref) => {
    return (
      <>
        <h5
          ref={ref}
          className={cx("no-margin-bottom", className)}
          {...props}
        />
        {!noLine && <hr className="half-margin-top" />}
      </>
    );
  }
);

PopoverTitle.displayName = "PopoverTitle";
