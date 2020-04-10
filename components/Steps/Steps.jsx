import React from "react";
import PropTypes from "prop-types";

import { appendClass as ac } from "../../utils";

const Steps = ({ size, color, vertical, children, className }) => (
  <div
    className={`steps${ac(
      size !== "default",
      `steps--${size}`
    )} steps--${color}${ac(vertical, "steps--vertical")}${ac(className)}`}
  >
    {children}
  </div>
);

Steps.propTypes = {
  size: PropTypes.oneOf(["dot", "small", "default", "large"]),
  color: PropTypes.oneOf(["primary", "secondary", "success", "dark"]),
  vertical: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Steps.defaultProps = {
  size: "default",
  color: "primary",
  vertical: false,
  className: null,
};

Steps.Dot = (props) => <Steps {...props} size="dot" />;
Steps.Small = (props) => <Steps {...props} size="small" />;
Steps.Large = (props) => <Steps {...props} size="large" />;

export default Steps;
