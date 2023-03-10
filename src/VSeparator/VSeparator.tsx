import React, { forwardRef, type FC, type HTMLProps } from "react";
import cx from "classnames";

import "../../css/v-separator.css";

type VSeparatorProps = {
  size?: "small" | "large" | "huge" | "default";
  compressed?: boolean;
} & Omit<HTMLProps<HTMLDivElement>, "size">;

export const VSeparator: FC<VSeparatorProps> = forwardRef(
  ({ size = "default", compressed = false, className = "", ...props }, ref) => (
    <div
      className={cx("v-separator", {
        [`v-separator--${size}`]: size !== "default",
        ["v-separator--compressed"]: compressed,
        [className]: className,
      })}
      {...props}
      ref={ref}
    />
  )
);
