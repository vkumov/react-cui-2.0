import React, { FC } from "react";
import { appendClass as ac } from "src/utils";

type HeaderProps = React.PropsWithChildren<{
  fluid?: boolean;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

export const Header: FC<HeaderProps> = ({
  children,
  fluid = false,
  ...props
}) => (
  <header className="header" {...props}>
    <div className={`container${fluid ? "-fluid" : ""}`}>
      <div className="header-panels">{children}</div>
    </div>
  </header>
);

type HeaderPanelProps = React.PropsWithChildren<{
  center?: boolean;
  right?: boolean;
  className?: string;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const HeaderPanel: FC<HeaderPanelProps> = ({
  children,
  center = false,
  right = false,
  className = null,
  ...props
}) => (
  <div
    className={`header-panel${ac(center, "header-panel--center")}${ac(
      right,
      "header-panel--right"
    )}${ac(className)}`}
    {...props}
  >
    {children}
  </div>
);

type HeaderTitleProps = {
  icon?: boolean | string;
  link?: string;
  title: string;
} & HeaderPanelProps;

export const HeaderTitle: FC<HeaderTitleProps> = ({
  icon = true,
  link = null,
  title,
  ...props
}) => (
  <HeaderPanel {...props}>
    {icon ? (
      <a
        className="header__logo"
        href={link || "http://www.cisco.com"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          className={typeof icon === "string" ? `icon-${icon}` : "icon-cisco"}
        />
      </a>
    ) : null}
    <div className="header__title">{title}</div>
  </HeaderPanel>
);
