import React from 'react';
import PropTypes from 'prop-types';
import { a as _extends } from '../_rollupPluginBabelHelpers-b60338eb.js';
import { a as appendClass } from '../index-be24eb93.js';
import { getIn } from 'formik';
import { ConditionalWrapper } from './Conditional.js';

const Switch = ({
  field,
  left,
  right,
  disabled,
  inline,
  className,
  asFormGroup,
  form,
  spacing,
  id,
  style
}) => React.createElement(ConditionalWrapper, {
  condition: asFormGroup,
  wrapper: React.createElement("div", {
    className: `form-group${appendClass(inline, "form-group--inline")}${appendClass(className)}${appendClass(spacing, ` form-group--${spacing}`)}`,
    style: style
  })
}, React.createElement("label", {
  className: `switch${disabled ? " disabled" : ""}`,
  htmlFor: id || field.name
}, React.createElement("input", _extends({
  type: "checkbox"
}, field, {
  id: id || field.name,
  checked: getIn(form.values, field.name, false)
})), left ? React.createElement("span", {
  className: "switch__label"
}, left) : null, React.createElement("span", {
  className: "switch__input"
}), right ? React.createElement("span", {
  className: "switch__label"
}, right) : null));

Switch.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
  disabled: PropTypes.bool,
  inline: PropTypes.bool,
  spacing: PropTypes.oneOf([false, "compressed", "loose"]),
  asFormGroup: PropTypes.bool,
  form: PropTypes.shape({
    values: PropTypes.object
  }).isRequired,
  field: PropTypes.shape({
    name: PropTypes.string,
    onChange: PropTypes.func
  }).isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.shape({})
};
Switch.defaultProps = {
  left: null,
  right: null,
  disabled: false,
  inline: false,
  spacing: false,
  asFormGroup: true,
  className: null,
  id: null,
  style: null
};

export { Switch };
