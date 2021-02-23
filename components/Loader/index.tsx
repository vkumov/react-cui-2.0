import React, { FC } from "react";

type SpinnerProps = {
  size?: "small" | "default" | "large";
  text?: React.ReactNode;
};

export const Spinner: FC<SpinnerProps> = ({
  size = "default",
  text = null,
}) => (
  <div className="flex-center flex-middle" style={{ flex: 1 }}>
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
);

export type DotsColor =
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "info"
  | "warning"
  | "warning-alt"
  | "danger"
  | "dark"
  | "light";

type DotsProps = {
  color?: DotsColor;
};

export const Dots: FC<DotsProps> = ({ color = "primary" }) => (
  <div
    className={`loading-dots${
      color !== "primary" ? ` loading-dots--${color}` : ""
    }`}
  >
    <span />
    <span />
    <span />
  </div>
);
