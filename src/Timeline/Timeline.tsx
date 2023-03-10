import React, {
  cloneElement,
  isValidElement,
  type FC,
  type ReactNode,
} from "react";
import cx from "classnames";

import { Icon } from "src/Icon";

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
  <div className={cx("timeline__item", className)}>
    <div className="timeline__icon">{icon}</div>
    {time && !simplified ? <div className="timeline__time">{time}</div> : null}
    <div className={cx("timeline__content", contentClassName)}>
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
    className={cx("timeline", {
      "timeline--centered": center,
      "timeline--right": right,
      simplified,
      [className]: className,
    })}
  >
    {React.Children.map(children, (child) =>
      isValidElement(child) ? cloneElement<any>(child, { simplified }) : child
    )}
  </div>
);
