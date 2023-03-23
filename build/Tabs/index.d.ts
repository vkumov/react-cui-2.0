import React, { FC, ReactNode, HTMLProps, MutableRefObject } from 'react';

type TabId = number | string;
interface TabProps {
    id: TabId;
    active?: boolean;
    title: ReactNode;
    children: ReactNode;
    className?: string;
    activeClassName?: string;
    unmountInactive?: boolean;
}
declare const Tab: FC<TabProps>;
interface TabsHeaderProps {
    tabsClassName?: string;
    center?: boolean;
    right?: boolean;
    justified?: boolean;
    embossed?: boolean;
    bordered?: boolean;
    vertical?: boolean;
    sticky?: boolean;
    inline?: boolean;
    openTab?: TabId;
    onTabChange: (tab: TabId) => void;
    children: ReactNode;
}
declare const TabsHeader: React.ForwardRefExoticComponent<TabsHeaderProps & React.RefAttributes<HTMLUListElement>>;
interface ColumnSizes {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}
type ColumnSize = number | string | ColumnSizes;
type Column = {
    columnWidth?: ColumnSize;
} & React.HTMLProps<HTMLDivElement>;
interface TabsProps {
    children: ReactNode;
    defaultTab?: TabId;
    tabsClassName?: string;
    contentClassName?: string;
    center?: boolean;
    right?: boolean;
    justified?: boolean;
    embossed?: boolean;
    bordered?: boolean;
    vertical?: boolean;
    leftColumn?: Column;
    rightColumn?: Column;
    rowProps?: HTMLProps<HTMLDivElement>;
    sticky?: boolean;
    inline?: boolean;
    renderHeader?: (header: JSX.Element) => JSX.Element;
    renderBody?: (body: JSX.Element) => JSX.Element;
    onTabChange?: (tab: TabId) => void;
    beforeTabChange?: (oldTab: TabId, newTab: TabId) => boolean | Promise<boolean>;
    bodyRef?: MutableRefObject<HTMLDivElement>;
    headerRef?: MutableRefObject<HTMLUListElement>;
}
declare const Tabs: FC<TabsProps>;

export { Tab, Tabs, TabsHeader };
