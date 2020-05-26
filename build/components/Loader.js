import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({
  size,
  text
}) => React.createElement("div", {
  className: "flex-center flex-middle",
  style: {
    flex: 1
  }
}, React.createElement("div", null, React.createElement("div", {
  className: `loader${size !== "default" ? ` loader--${size}` : ""} flex-center`
}, React.createElement("div", {
  className: "wrapper flex flex-center"
}, React.createElement("div", {
  className: "wheel"
}))), !text ? null : React.createElement("div", {
  className: "base-margin-top text-center"
}, text || "Loading...")));
Spinner.propTypes = {
  size: PropTypes.oneOf(["small", "default", "large"]),
  text: PropTypes.node
};
Spinner.defaultProps = {
  size: "default",
  text: null
};
const Dots = ({
  color
}) => React.createElement("div", {
  className: `loading-dots${color !== "primary" ? ` loading-dots--${color}` : ""}`
}, React.createElement("span", null), React.createElement("span", null), React.createElement("span", null));
Dots.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "tertiary", "success", "info", "warning", "warning-alt", "danger", "dark", "light"])
};
Dots.defaultProps = {
  color: "primary"
};

export { Dots, Spinner };
