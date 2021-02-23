import React, { FC } from "react";

type ConditionalWrapperProps = {
  condition: boolean;
  wrapper: JSX.Element;
  children: React.ReactNode;
};

const ConditionalWrapper: FC<ConditionalWrapperProps> = ({
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

const DisplayIf: FC<IfProps> = ({ condition, children }) =>
  condition ? React.isValidElement(children) ? children : <>children</> : null;

export { DisplayIf, ConditionalWrapper };
