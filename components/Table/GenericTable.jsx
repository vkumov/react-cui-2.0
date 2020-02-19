import React from "react";
import PropTypes from "prop-types";

import { ConditionalWrapper } from "../Conditional";

const Wrapper = <div className="responsive-table" />;

export const GenericTable = ({
  outerWrap,
  lined,
  bordered,
  striped,
  selectable,
  fixed,
  wrapped,
  compressed,
  loose,
  className,
  ...props
}) => (
  <ConditionalWrapper condition={outerWrap} wrapper={Wrapper}>
    <table
      className={`table${lined ? " table--lined" : ""}${
        bordered ? " table--bordered" : ""
      }${striped ? " table--striped" : ""}${
        selectable ? " table--selectable" : ""
      }${fixed ? " table--fixed" : ""}${wrapped ? " table--wrapped" : ""}${
        compressed ? " table--compressed" : ""
      }${loose ? " table--loose" : ""}${className ? ` ${className}` : ""}`}
      {...props}
    />
  </ConditionalWrapper>
);

GenericTable.propTypes = {
  outerWrap: PropTypes.bool,
  lined: PropTypes.bool,
  bordered: PropTypes.bool,
  striped: PropTypes.bool,
  selectable: PropTypes.bool,
  fixed: PropTypes.bool,
  wrapped: PropTypes.bool,
  compressed: PropTypes.bool,
  loose: PropTypes.bool,
  className: PropTypes.string
};

GenericTable.defaultProps = {
  outerWrap: true,
  lined: false,
  bordered: false,
  striped: false,
  selectable: false,
  fixed: false,
  wrapped: false,
  compressed: false,
  loose: false,
  className: null
};