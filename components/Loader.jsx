import React from "react";
import PropTypes from "prop-types";

export const Spinner = ({ size, text }) => (
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

Spinner.propTypes = {
  size: PropTypes.oneOf(["small", "default", "large"]),
  text: PropTypes.node
};

Spinner.defaultProps = {
  size: "default",
  text: null
};

export const Dots = ({ color }) => (
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

Dots.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "success",
    "info",
    "warning",
    "warning-alt",
    "danger",
    "dark",
    "light"
  ])
};

Dots.defaultProps = {
  color: "primary"
};
