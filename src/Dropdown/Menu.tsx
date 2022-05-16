import React, { FC, forwardRef, HTMLProps, ReactNode } from "react";

import { ConditionalWrapper } from "src/Conditional";
import { appendClass } from "src/utils";

type ElementProps = {
  selected?: boolean;
  icon?: string;
  children: ReactNode;
} & HTMLProps<HTMLAnchorElement>;

export const Element: FC<ElementProps> = ({
  selected = false,
  icon = null,
  children,
  className = null,
  ...props
}) => (
  <a
    className={`${selected ? "selected" : ""}${
      className ? ` ${className}` : ""
    }`}
    {...props}
  >
    {icon ? <span className={`icon-${icon}`} /> : null}
    <ConditionalWrapper
      condition={Boolean(icon)}
      wrapper={<span className="qtr-margin-left" />}
    >
      {children}
    </ConditionalWrapper>
  </a>
);

export const Divider = (): JSX.Element => <div className="divider" />;

type GroupProps = {
  children: ReactNode;
};

export const Group: FC<GroupProps> = ({ children }) => (
  <div className="dropdown__group">{children}</div>
);

type GroupHeaderProps = {
  header: ReactNode;
};

export const GroupHeader: FC<GroupHeaderProps> = ({ header }) => (
  <div className="dropdown__group-header">{header}</div>
);

export const Menu = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        className={`dropdown__menu${appendClass(className)}`}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);
