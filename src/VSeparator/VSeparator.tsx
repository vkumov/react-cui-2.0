import React, { FC, HTMLProps, forwardRef } from "react";

import { appendClass } from "src/utils";

import "../../css/v-separator.css";

type VSeparatorProps = {
  size?: "small" | "large" | "huge" | "default";
  compressed?: boolean;
} & Omit<HTMLProps<HTMLDivElement>, "size">;

export const VSeparator: FC<VSeparatorProps> = forwardRef(
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
