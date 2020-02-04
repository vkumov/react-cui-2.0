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
      {text === false ? null : (
        <div className="base-margin-top text-center">
          {text || "Loading..."}
        </div>
      )}
    </div>
  </div>
);

Spinner.propTypes = {
  size: PropTypes.oneOf(["small", "default", "large"]).isRequired,
  text: PropTypes.node
};

Spinner.defaultProps = {
  size: "default"
};

export const Dots = ({ color }) => (
  <div
    class={`loading-dots${
      color !== "primary" ? ` loading-dots--${color}` : ""
    }`}
  >
    <span></span>
    <span></span>
    <span></span>
  </div>
);

Spinner.propTypes = {
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
  ]).isRequired
};

Spinner.defaultProps = {
  color: "primary"
};
