import React from 'react';
import PropTypes from 'prop-types';
import { _ as _objectWithoutProperties, a as _extends } from '../_rollupPluginBabelHelpers-b60338eb.js';
import { a as appendClass } from '../index-be24eb93.js';
import { Field } from 'formik';

const Radio = (_ref) => {
  let {
    field: {
      name,
      value,
      onChange,
      onBlur
    },
    id,
    inline,
    spacing,
    label,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["field", "id", "inline", "spacing", "label", "className"]);

  return React.createElement("div", _extends({
    className: `form-group${appendClass(inline, "form-group--inline")}${appendClass(spacing, `form-group--${spacing}`)}${appendClass(className)}`
  }, props), React.createElement("label", {
    className: "radio",
    htmlFor: `${name}.${id}`
  }, React.createElement("input", {
    type: "radio",
    name: name,
    value: id,
    checked: id === value,
    onChange: onChange,
    onBlur: onBlur,
    id: `${name}.${id}`
  }), React.createElement("span", {
    className: "radio__input"
  }), label ? React.createElement("span", {
    className: "radio__label"
  }, label) : null));
};
Radio.propTypes = {
  spacing: PropTypes.oneOf([false, "compressed", "regular", "loose", "nospacing"]),
  inline: PropTypes.bool,
  label: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  field: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func
  }).isRequired
};
Radio.defaultProps = {
  spacing: null,
  inline: false,
  label: null,
  className: null
};
const Radios = (_ref2) => {
  let {
    values
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["values"]);

  return values.map(v => React.createElement(Field, _extends({
    component: Radio
  }, props, {
    id: v.value,
    label: v.label,
    key: v.value
  })));
};
Radios.propTypes = {
  values: PropTypes.arrayOf(PropTypes.exact({
    value: PropTypes.string,
    label: PropTypes.node
  }))
};

export { Radio, Radios };
