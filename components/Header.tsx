import React, { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { appendClass as ac } from "../utils";

type HeaderProps = {
  children: ReactNode;
  fluid?: boolean;
  [x: string]: unknown;
};

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

Header.propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool,
};

type HeaderPanelProps = {
  children: ReactNode;
  center?: boolean;
  right?: boolean;
  [x: string]: unknown;
};

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
      " header-panel--right"
    )}${ac(className)}`}
    {...props}
  >
    {children}
  </div>
);

HeaderPanel.propTypes = {
  children: PropTypes.node.isRequired,
  center: PropTypes.bool,
  right: PropTypes.bool,
  className: PropTypes.string,
};

type HeaderTitleProps = {
  icon?: boolean | string;
  link?: string;
  title: string;
  [x: string]: unknown;
};

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

HeaderTitle.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  link: PropTypes.string,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};
