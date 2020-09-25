import React, { FC } from "react";
import PropTypes from "prop-types";

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
    <>children</>
  );

ConditionalWrapper.propTypes = {
  condition: PropTypes.bool.isRequired,
  wrapper: PropTypes.element.isRequired,
  children: PropTypes.node.isRequired,
};

type IfProps = {
  condition: boolean;
  children: React.ReactNode;
};

const DisplayIf: FC<IfProps> = ({ condition, children }) =>
  condition ? React.isValidElement(children) ? children : <>children</> : null;

DisplayIf.propTypes = {
  condition: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export { DisplayIf, ConditionalWrapper };
