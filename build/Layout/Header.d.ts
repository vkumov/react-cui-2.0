import React, { FC } from "react";
type HeaderProps = React.PropsWithChildren<{
    fluid?: boolean;
}> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare const Header: FC<HeaderProps>;
type HeaderPanelProps = React.PropsWithChildren<{
    center?: boolean;
    right?: boolean;
    className?: string;
}> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export declare const HeaderPanel: FC<HeaderPanelProps>;
type HeaderTitleProps = {
    icon?: boolean | string;
    link?: string;
    title: string;
} & HeaderPanelProps;
export declare const HeaderTitle: FC<HeaderTitleProps>;
export {};
