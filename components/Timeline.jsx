import React from "react";
import PropTypes from "prop-types";

import { Icon } from "./Icon";

import { appendClass } from "../utils";

export const TimelineItem = ({ icon, time, children }) => (
  <div className="timeline__item">
    <div className="timeline__icon">{icon}</div>
    {time ? <div className="timeline__time">{time}</div> : null}
    <div className="timeline__content">{children}</div>
  </div>
);

TimelineItem.propTypes = {
  icon: PropTypes.node,
  time: PropTypes.string,
  children: PropTypes.node.isRequired,
};

TimelineItem.defaultProps = {
  icon: <Icon icon="circle" />,
  time: null,
};

export const Timeline = ({ center, right, className, children }) => (
  <div
    className={`timeline${appendClass(
      center,
      "timeline--centered"
    )}${appendClass(right, "timeline--right")}${appendClass(className)}`}
  >
    {children}
  </div>
);

Timeline.propTypes = {
  center: PropTypes.bool,
  right: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(TimelineItem), TimelineItem])
    .isRequired,
};

Timeline.defaultProps = {
  center: false,
  right: false,
  className: null,
};
