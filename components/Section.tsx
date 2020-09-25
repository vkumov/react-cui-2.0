import React, { FC, ReactNode } from "react";
import PropTypes from "prop-types";

import { appendClass } from "../utils";

interface SectionProps {
  children: ReactNode;
  className: string;
}

const Section: FC<SectionProps> = ({ children, className = null }) => (
  <div className={`section${appendClass(className)}`}>{children}</div>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { Section };
