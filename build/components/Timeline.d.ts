import { FC, ReactNode } from "react";
declare type TimelineItemProps = {
    icon?: ReactNode;
    time?: string;
    children: ReactNode;
    className?: string;
    contentClassName?: string;
};
export declare const TimelineItem: FC<TimelineItemProps>;
declare type TimelineProps = {
    center?: boolean;
    right?: boolean;
    className?: string;
    children: ReactNode;
};
export declare const Timeline: FC<TimelineProps>;
export {};
