/// <reference types="react" />
import React, { FC } from 'react';

declare const Footer: () => JSX.Element;

type HeaderProps = React.PropsWithChildren<{
    fluid?: boolean;
}> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
declare const Header: FC<HeaderProps>;
type HeaderPanelProps = React.PropsWithChildren<{
    center?: boolean;
    right?: boolean;
    className?: string;
}> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
declare const HeaderPanel: FC<HeaderPanelProps>;
type HeaderTitleProps = {
    icon?: boolean | string;
    link?: string;
    title: string;
} & HeaderPanelProps;
declare const HeaderTitle: FC<HeaderTitleProps>;

export { Footer, Header, HeaderPanel, HeaderTitle };
