import React, { FC, forwardRef } from "react";

type SpinnerProps = {
  size?: "small" | "default" | "large";
  text?: React.ReactNode;
};

export const Spinner: FC<SpinnerProps> = forwardRef<
  HTMLDivElement,
  SpinnerProps
>(({ size = "default", text = null }, ref) => (
  <div className="flex-center flex-middle" style={{ flex: 1 }} ref={ref}>
    <div>
      <div
        className={`loader${
          size !== "default" ? ` loader--${size}` : ""
        } flex-center`}
      >
        <div className="wrapper flex flex-center">
          <div className="wheel" />
        </div>
      </div>
      {!text ? null : (
        <div className="base-margin-top text-center">
          {text || "Loading..."}
        </div>
      )}
    </div>
  </div>
));
