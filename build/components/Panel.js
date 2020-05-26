import React from 'react';
import PropTypes from 'prop-types';
import { _ as _objectWithoutProperties, a as _extends } from '../_rollupPluginBabelHelpers-b60338eb.js';
import { a as appendClass } from '../index-be24eb93.js';

const Panel = React.forwardRef((_ref, ref) => {
  let {
    color,
    padding,
    bordered,
    raised,
    well,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["color", "padding", "bordered", "raised", "well", "className"]);

  return React.createElement("div", _extends({
    className: `panel${appendClass(color !== "plain", `panel--${color}`)}${appendClass(padding !== "default", `panel--${padding}`)}${appendClass(bordered, () => {
      if (typeof bordered === "string") return `panel--bordered-${bordered}`;
      if (Array.isArray(bordered)) return bordered.map(b => `panel--bordered-${b}`).join(" ");
      return "panel--bordered";
    })}${appendClass(raised, "panel--raised")}${appendClass(well, "panel--well")}${appendClass(className)}`,
    ref: ref
  }, props));
});
Panel.propTypes = {
  color: PropTypes.oneOf(["plain", "primary", "secondary", "tertiary", "success", "info", "warning-alt", "warning", "danger", "dark", "light"]),
  padding: PropTypes.oneOf(["none", "compressed", "default", "loose"]),
  bordered: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["top", "right", "left", "bottom"]), PropTypes.arrayOf(PropTypes.oneOf(["top", "right", "left", "bottom"]))]),
  raised: PropTypes.bool,
  well: PropTypes.bool,
  className: PropTypes.string
};
Panel.defaultProps = {
  color: "plain",
  padding: "default",
  bordered: false,
  raised: false,
  well: false,
  className: null
};

export { Panel };
