import React from "react";
import PropTypes from "prop-types";

export const Header = ({ children, ...props }) => (
  <header className="header" {...props}>
    <div className="container">
      <div className="header-panels">{children}</div>
    </div>
  </header>
);

Header.propTypes = {
  children: PropTypes.node.isRequired
};
Header.defaultProps = {};

export const HeaderPanel = ({ children, center, right, ...props }) => (
  <div
    className={`header-panel${center ? " header-panel--center" : ""}${
      right ? " header-panel--right" : ""
    }`}
    {...props}
  >
    {children}
  </div>
);

HeaderPanel.propTypes = {
  children: PropTypes.node.isRequired,
  center: PropTypes.bool,
  right: PropTypes.bool
};
HeaderPanel.defaultProps = {
  center: false,
  right: false
};

export const HeaderTitle = ({ icon, link, title, ...props }) => (
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
  title: PropTypes.string.isRequired
};
HeaderTitle.defaultProps = {
  icon: true,
  link: null
};
