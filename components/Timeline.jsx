import React from "react";
import PropTypes from "prop-types";

import { Icon } from "./Icon";

import { appendClass as ac } from "../utils";

export const TimelineItem = ({
  icon,
  time,
  children,
  className,
  contentClassName,
}) => (
  <div className={`timeline__item${ac(className)}`}>
    <div className="timeline__icon">{icon}</div>
    {time ? <div className="timeline__time">{time}</div> : null}
    <div className={`timeline__content${ac(contentClassName)}`}>{children}</div>
  </div>
);

TimelineItem.propTypes = {
  icon: PropTypes.node,
  time: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
};

TimelineItem.defaultProps = {
  icon: <Icon icon="circle" />,
  time: null,
  className: null,
  contentClassName: null,
};

export const Timeline = ({ center, right, className, children }) => (
  <div
    className={`timeline${ac(center, "timeline--centered")}${ac(
      right,
      "timeline--right"
    )}${ac(className)}`}
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
