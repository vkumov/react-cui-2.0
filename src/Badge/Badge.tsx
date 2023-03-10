import React, { type FC, type PropsWithChildren, type ReactNode } from "react";

import { appendClass as ac } from "src/utils";

type WrapperProps = {
  children: ReactNode;
  className?: string;
};

const Wrapper: FC<WrapperProps> = ({ children, className = null }) => (
  <span className={`badge-wrapper${ac(className)}`}>{children}</span>
);

export type BadgeColor =
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

type BadgeProps = PropsWithChildren<{
  color?: BadgeColor;
  size?: "dot" | "tiny" | "small" | "default" | "large";
  className?: string;
}>;

interface BadgeSizes {
  Dot: FC<Omit<BadgeProps, "size">>;
  Tiny: FC<Omit<BadgeProps, "size">>;
  Small: FC<Omit<BadgeProps, "size">>;
  Default: FC<Omit<BadgeProps, "size">>;
  Large: FC<Omit<BadgeProps, "size">>;
  Wrapper: FC<WrapperProps>;
}

export const Badge: BadgeSizes & FC<BadgeProps> = ({
  color = "primary",
  size = "default",
  children,
  className = null,
  ...props
}) => (
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
