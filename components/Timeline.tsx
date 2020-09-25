import React, { FC, ReactNode } from "react";
import PropTypes from "prop-types";

import { Icon } from "./Icon";

import { appendClass as ac } from "../utils";

type TimelineItemProps = {
  icon?: ReactNode;
  time?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export const TimelineItem: FC<TimelineItemProps> = ({
  icon = <Icon icon="circle" />,
  time = null,
  className = null,
  contentClassName = null,
  children,
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

type TimelineProps = {
  center?: boolean;
  right?: boolean;
  className?: string;
  children: ReactNode;
};

export const Timeline: FC<TimelineProps> = ({
  center = false,
  right = false,
  className = null,
  children,
}) => (
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
  children: PropTypes.node.isRequired,
};
