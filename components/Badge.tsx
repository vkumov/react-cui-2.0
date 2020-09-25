import React, { FC, ReactNode } from "react";
import PropTypes from "prop-types";

import { appendClass as ac } from "../utils";

type WrapperProps = {
  children: ReactNode;
  className?: string;
};

const Wrapper: FC<WrapperProps> = ({ children, className = null }) => (
  <span className={`badge-wrapper${ac(className)}`}>{children}</span>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

type BadgeProps = {
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "info"
    | "warning"
    | "warning-alt"
    | "danger"
    | "dark"
    | "light";
  size?: "dot" | "tiny" | "small" | "default" | "large";
  className?: string;
  children: ReactNode;
};

interface BadgeSizes {
  Dot: FC<BadgeProps>;
  Tiny: FC<BadgeProps>;
  Small: FC<BadgeProps>;
  Default: FC<BadgeProps>;
  Large: FC<BadgeProps>;
  Wrapper: FC<WrapperProps>;
}

const Badge: BadgeSizes & FC<BadgeProps> = ({
  color = "primary",
  size = "default",
  children,
  className = null,
  ...props
}): JSX.Element => (
  <span
    className={`${`badge badge--${color}`}${ac(
      size !== "default",
      `badge--${size}`
    )}${ac(className)}`}
    {...props}
  >
    {children}
  </span>
);

Badge.Dot = (props) => <Badge {...props} size="dot" />;
Badge.Tiny = (props) => <Badge {...props} size="tiny" />;
Badge.Small = (props) => <Badge {...props} size="small" />;
Badge.Default = (props) => <Badge {...props} size="default" />;
Badge.Large = (props) => <Badge {...props} size="large" />;
Badge.Wrapper = Wrapper;

export default Badge;

type WithBadgeProps = {
  children: ReactNode;
  badge: ReactNode;
  wrapperClass?: string;
};

export const WithBadge: FC<BadgeProps & WithBadgeProps> = ({
  children,
  badge,
  wrapperClass = null,
  ...props
}) => (
  <Badge.Wrapper className={wrapperClass}>
    {children}
    <Badge {...props}>{badge}</Badge>
  </Badge.Wrapper>
);
