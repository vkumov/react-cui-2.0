import React from "react";
import PropTypes from "prop-types";

import { ConditionalWrapper } from "../Conditional";
import { appendClass as ac } from "../../utils";

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
      className={`table${ac(lined, "table--lined")}${ac(
        bordered,
        "table--bordered"
      )}${ac(striped, "table--striped")}${ac(
        selectable,
        "table--selectable"
      )}${ac(fixed, "table--fixed")}${ac(wrapped, "table--wrapped")}${ac(
        compressed,
        "table--compressed"
      )}${ac(loose, "table--loose")}${ac(className)}`}
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
  className: PropTypes.string,
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
  className: null,
};
