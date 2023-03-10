import React, { type FC } from "react";

type ConditionalWrapperProps = {
  condition: boolean;
  wrapper: JSX.Element;
  children: React.ReactNode;
};

export const ConditionalWrapper: FC<ConditionalWrapperProps> = ({
  condition,
  wrapper,
  children,
}) =>
  condition ? (
    React.cloneElement(wrapper, null, children)
  ) : React.isValidElement(children) ? (
    children
  ) : (
    <>{children}</>
  );

type IfProps = {
  condition: boolean;
  children: React.ReactNode;
};

export const DisplayIf: FC<IfProps> = ({ condition, children }) =>
  condition ? (
    React.isValidElement(children) ? (
      children
    ) : (
      <>{children}</>
    )
  ) : null;
