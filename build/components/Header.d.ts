import { FC, ReactNode } from "react";
declare type HeaderProps = {
    children: ReactNode;
    fluid?: boolean;
    [x: string]: unknown;
};
export declare const Header: FC<HeaderProps>;
declare type HeaderPanelProps = {
    children: ReactNode;
    center?: boolean;
    right?: boolean;
    [x: string]: unknown;
};
export declare const HeaderPanel: FC<HeaderPanelProps>;
declare type HeaderTitleProps = {
    icon: boolean | string;
    link?: string;
    title: string;
    [x: string]: unknown;
};
export declare const HeaderTitle: FC<HeaderTitleProps>;
export {};
