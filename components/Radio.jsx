import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";

import { appendClass as ac } from "../utils";

export const Radio = ({
  field: { name, value, onChange, onBlur },
  id,
  inline,
  spacing,
  label,
  className,
  ...props
}) => (
  <div
    className={`form-group${ac(inline, "form-group--inline")}${ac(
      spacing,
      `form-group--${spacing}`
    )}${ac(className)}`}
    {...props}
  >
    <label className="radio" htmlFor={`${name}.${id}`}>
      <input
        type="radio"
        name={name}
        value={id}
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        id={`${name}.${id}`}
      />
      <span className="radio__input" />
      {label ? <span className="radio__label">{label}</span> : null}
    </label>
  </div>
);

Radio.propTypes = {
  spacing: PropTypes.oneOf([
    false,
    "compressed",
    "regular",
    "loose",
    "nospacing",
  ]),
  inline: PropTypes.bool,
  label: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  field: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
  }).isRequired,
};

Radio.defaultProps = {
  spacing: null,
  inline: false,
  label: null,
  className: null,
};

export const Radios = ({ values, ...props }) =>
  values.map((v) => (
    <Field
      component={Radio}
      {...props}
      id={v.value}
      label={v.label}
      key={v.value}
    />
  ));

Radios.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.exact({
      value: PropTypes.string,
      label: PropTypes.node,
    })
  ),
};
