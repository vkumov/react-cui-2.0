import React from 'react';
import PropTypes from 'prop-types';
import { _ as _objectWithoutProperties, a as _extends } from '../../_rollupPluginBabelHelpers-b60338eb.js';
import { a as appendClass } from '../../index-be24eb93.js';
import { ConditionalWrapper } from '../Conditional.js';

const Wrapper = React.createElement("div", {
  className: "responsive-table"
});
const GenericTable = (_ref) => {
  let {
    outerWrap,
    lined,
    bordered,
    striped,
    selectable,
    fixed,
    wrapped,
    compressed,
    loose,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["outerWrap", "lined", "bordered", "striped", "selectable", "fixed", "wrapped", "compressed", "loose", "className"]);

  return React.createElement(ConditionalWrapper, {
    condition: outerWrap,
    wrapper: Wrapper
  }, React.createElement("table", _extends({
    className: `table${appendClass(lined, "table--lined")}${appendClass(bordered, "table--bordered")}${appendClass(striped, "table--striped")}${appendClass(selectable, "table--selectable")}${appendClass(fixed, "table--fixed")}${appendClass(wrapped, "table--wrapped")}${appendClass(compressed, "table--compressed")}${appendClass(loose, "table--loose")}${appendClass(className)}`
  }, props)));
};
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

export { GenericTable };
