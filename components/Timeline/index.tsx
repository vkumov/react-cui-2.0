import React, { cloneElement, FC, isValidElement, ReactNode } from "react";
import { Icon } from "../Icon";

import { appendClass as ac } from "../../utils";
import "../../css/timeline.css";

export type TimelineItemProps = {
  icon?: ReactNode;
  time?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  simplified?: boolean;
  header?: ReactNode;
};

export const TimelineItem: FC<TimelineItemProps> = ({
  icon = <Icon icon="circle" />,
  time = null,
  className = null,
  contentClassName = null,
  simplified = false,
  header = null,
  children,
}) => (
  <div className={`timeline__item${ac(className)}`}>
    <div className="timeline__icon">{icon}</div>
    {time && !simplified ? <div className="timeline__time">{time}</div> : null}
    <div className={`timeline__content${ac(contentClassName)}`}>
      {header ? (
        isValidElement(header) ? (
          header
        ) : (
          <div className="timeline__header">{header}</div>
        )
      ) : null}
      {time && simplified ? <div className="timeline__time">{time}</div> : null}
      {children}
    </div>
  </div>
);

export type TimelineProps = {
  center?: boolean;
  right?: boolean;
  className?: string;
  children: ReactNode;
  simplified?: boolean;
};

export const Timeline: FC<TimelineProps> = ({
  center = false,
  right = false,
  className = null,
  simplified = false,
  children,
}) => (
  <div
    className={`timeline${ac(center, "timeline--centered")}${ac(
      right,
      "timeline--right"
    )}${ac(simplified, "simplified")}${ac(className)}`}
  >
    {React.Children.map(children, (child) =>
      isValidElement(child) ? cloneElement(child, { simplified }) : child
    )}
  </div>
);
