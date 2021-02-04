import React, { FC, HTMLProps, ReactNode } from "react";
declare type TabId = number | string;
interface TabProps {
    id: TabId;
    active?: boolean;
    title: ReactNode;
    children: ReactNode;
    className?: string;
    activeClassName?: string;
    unmountInactive?: boolean;
}
export declare const Tab: FC<TabProps>;
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
export declare const TabsHeader: FC<TabsHeaderProps>;
interface ColumnSizes {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}
declare type ColumnSize = number | ColumnSizes;
declare type Column = {
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
}
export declare const Tabs: FC<TabsProps>;
export {};
