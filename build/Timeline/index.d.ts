import { ReactNode, FC } from 'react';

type TimelineItemProps = {
    icon?: ReactNode;
    time?: string;
    children: ReactNode;
    className?: string;
    contentClassName?: string;
    simplified?: boolean;
    header?: ReactNode;
};
declare const TimelineItem: FC<TimelineItemProps>;
type TimelineProps = {
    center?: boolean;
    right?: boolean;
    className?: string;
    children: ReactNode;
    simplified?: boolean;
};
declare const Timeline: FC<TimelineProps>;

export { Timeline, TimelineItem, TimelineItemProps, TimelineProps };
