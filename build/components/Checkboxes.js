import React from 'react';
import PropTypes from 'prop-types';
import { a as appendClass } from '../index-be24eb93.js';
import { FieldArray, getIn } from 'formik';

const Checkboxes = ({
  field,
  form,
  variants,
  inline
}) => React.createElement(FieldArray, {
  name: field.name,
  render: arrayHelpers => variants.map(variant => React.createElement("div", {
    className: `form-group${appendClass(inline, "form-group--inline")}`,
    key: variant.id
  }, React.createElement("label", {
    className: "checkbox",
    htmlFor: field.name
  }, React.createElement("input", {
    name: field.name,
    id: field.name,
    type: "checkbox",
    value: variant.id,
    checked: getIn(form.values, field.name, []).includes(variant.id),
    onChange: e => {
      if (e.target.checked) arrayHelpers.push(variant.id);else {
        const idx = getIn(form.values, field.name, []).indexOf(variant.id);
        arrayHelpers.remove(idx);
      }
    }
  }), React.createElement("span", {
    className: "checkbox__input"
  }), React.createElement("span", {
    className: "checkbox__label"
  }, variant.name))))
});
Checkboxes.propTypes = {
  inline: PropTypes.bool,
  variants: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  })).isRequired,
  field: PropTypes.shape({
    name: PropTypes.string
  }).isRequired,
  form: PropTypes.shape({
    values: PropTypes.any
  }).isRequired
};
Checkboxes.defaultProps = {
  inline: false
};

export { Checkboxes };
