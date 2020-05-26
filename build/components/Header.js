import React from 'react';
import PropTypes from 'prop-types';
import { _ as _objectWithoutProperties, a as _extends } from '../_rollupPluginBabelHelpers-b60338eb.js';

const Header = (_ref) => {
  let {
    children,
    fluid
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "fluid"]);

  return React.createElement("header", _extends({
    className: "header"
  }, props), React.createElement("div", {
    className: `container${fluid ? "-fluid" : ""}`
  }, React.createElement("div", {
    className: "header-panels"
  }, children)));
};
Header.propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool
};
Header.defaultProps = {
  fluid: false
};
const HeaderPanel = (_ref2) => {
  let {
    children,
    center,
    right
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["children", "center", "right"]);

  return React.createElement("div", _extends({
    className: `header-panel${center ? " header-panel--center" : ""}${right ? " header-panel--right" : ""}`
  }, props), children);
};
HeaderPanel.propTypes = {
  children: PropTypes.node.isRequired,
  center: PropTypes.bool,
  right: PropTypes.bool
};
HeaderPanel.defaultProps = {
  center: false,
  right: false
};
const HeaderTitle = (_ref3) => {
  let {
    icon,
    link,
    title
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["icon", "link", "title"]);

  return React.createElement(HeaderPanel, props, icon ? React.createElement("a", {
    className: "header__logo",
    href: link || "http://www.cisco.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, React.createElement("span", {
    className: typeof icon === "string" ? `icon-${icon}` : "icon-cisco"
  })) : null, React.createElement("div", {
    className: "header__title"
  }, title));
};
HeaderTitle.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  link: PropTypes.string,
  title: PropTypes.string.isRequired
};
HeaderTitle.defaultProps = {
  icon: true,
  link: null
};

export { Header, HeaderPanel, HeaderTitle };
