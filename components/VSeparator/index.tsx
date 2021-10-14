import React, { FC, forwardRef, HTMLProps } from "react";

import "../../css/v-separator.css";
import { appendClass } from "../../utils";

type VSeparatorProps = {
  size?: "small" | "large" | "huge" | "default";
  compressed?: boolean;
} & Omit<HTMLProps<HTMLDivElement>, "size">;

const VSeparator: FC<VSeparatorProps> = forwardRef(
  ({ size = "default", compressed = false, className = "", ...props }, ref) => (
    <div
      className={`v-separator${appendClass(
        size !== "default",
        `v-separator--${size}`
      )}${appendClass(compressed, "v-separator--compressed")}${appendClass(
        className
      )}`}
      {...props}
      ref={ref}
    />
  )
);

export { VSeparator };
