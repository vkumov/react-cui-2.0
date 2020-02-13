import React from "react";
import PropTypes from "prop-types";

import { appendClass } from "../utils";

const Section = ({ children, className }) => (
  <div className={`section${appendClass(className)}`}>{children}</div>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Section.defaultProps = {
  className: null
};

export { Section };
