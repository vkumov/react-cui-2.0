import React from "react";
import PropTypes from "prop-types";

import { appendClass as ac } from "../utils";

const Badge = ({ color, size, children, className }) => (
  <span
    className={`${`badge badge--${color}`}${ac(
      size !== "default",
      `badge--${size}`
    )}${ac(className)}`}
  >
    {children}
  </span>
);

const badgeProps = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "success",
    "info",
    "warning",
    "warning-alt",
    "danger",
    "dark",
    "light",
  ]),
  size: PropTypes.oneOf(["dot", "tiny", "small", "default", "large"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Badge.propTypes = badgeProps;

Badge.defaultProps = {
  color: "primary",
  size: "default",
  className: "",
};

Badge.Dot = (props) => <Badge {...props} size="dot" />;
Badge.Tiny = (props) => <Badge {...props} size="tiny" />;
Badge.Small = (props) => <Badge {...props} size="small" />;
Badge.Default = (props) => <Badge {...props} size="default" />;
Badge.Large = (props) => <Badge {...props} size="large" />;

Badge.Wrapper = ({ children, className }) => (
  <span className={`badge-wrapper${ac(className)}`}>{children}</span>
);

Badge.Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Badge.Wrapper.defaultProps = {
  className: null,
};

export default Badge;

export const WithBadge = ({ children, badge, wrapperClass, ...props }) => (
  <Badge.Wrapper className={wrapperClass}>
    {children}
    <Badge {...props}>{badge}</Badge>
  </Badge.Wrapper>
);

WithBadge.propTypes = {
  children: PropTypes.node.isRequired,
  badge: PropTypes.node.isRequired,
  wrapperClass: PropTypes.string,
  ...badgeProps,
};

WithBadge.defaultProps = {
  wrapperClass: null,
};
