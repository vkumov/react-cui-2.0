import React from 'react';
import PropTypes from 'prop-types';
import { a as _extends } from '../_rollupPluginBabelHelpers-b60338eb.js';
import { getIn } from 'formik';
import { ConditionalWrapper } from './Conditional.js';

const Checkbox = ({
  field,
  form,
  inline,
  asFormGroup,
  children
}) => React.createElement(ConditionalWrapper, {
  condition: asFormGroup,
  wrapper: React.createElement("div", {
    className: `form-group ${inline ? "form-group--inline" : ""}`
  })
}, React.createElement("label", {
  className: "checkbox"
}, React.createElement("input", _extends({
  type: "checkbox"
}, field, {
  checked: getIn(form.values, field.name, false)
})), React.createElement("span", {
  className: "checkbox__input"
}), children ? React.createElement("span", {
  className: "checkbox__label"
}, children) : null));

Checkbox.propTypes = {
  inline: PropTypes.bool,
  asFormGroup: PropTypes.bool,
  form: PropTypes.shape({
    values: PropTypes.object
  }).isRequired,
  field: PropTypes.shape({
    name: PropTypes.string,
    onChange: PropTypes.func
  }).isRequired,
  children: PropTypes.node
};
Checkbox.defaultProps = {
  inline: false,
  asFormGroup: true,
  children: null
};

export { Checkbox };
