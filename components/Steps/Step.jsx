import React from "react";
import PropTypes from "prop-types";

import { appendClass as ac } from "../../utils";

const Step = ({ icon, children, visited, active, className }) => (
  <div
    className={`step${ac(visited, "visited")}${ac(active, "active")}${ac(
      className
    )}`}
  >
    <div className="step__icon">{icon}</div>
    <div className="step__label">{children}</div>
  </div>
);

Step.propTypes = {
  icon: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  visited: PropTypes.bool,
  active: PropTypes.bool,
  className: PropTypes.string,
};

Step.defaultProps = {
  visited: false,
  active: false,
  className: null,
};

export default Step;
