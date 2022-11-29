import { FC, ReactNode } from "react";
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
export declare const TimelineItem: FC<TimelineItemProps>;
export type TimelineProps = {
    center?: boolean;
    right?: boolean;
    className?: string;
    children: ReactNode;
    simplified?: boolean;
};
export declare const Timeline: FC<TimelineProps>;
