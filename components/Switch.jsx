import React from "react";
import PropTypes from "prop-types";
import { getIn } from "formik";

import { ConditionalWrapper } from "./Conditional";

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
  id
}) => (
  <ConditionalWrapper
    condition={asFormGroup}
    wrapper={
      <div
        className={`form-group${inline ? " form-group--inline" : ""}${
          className ? ` ${className}` : ""
        }${spacing ? ` form-group--${spacing}` : ""}`}
      />
    }
  >
    <label
      className={`switch${disabled ? " disabled" : ""}`}
      htmlFor={getIn(form.values, field.name, id)}
    >
      <input
        type="checkbox"
        {...field}
        id={getIn(form.values, field.name, id)}
        checked={getIn(form.values, field.name, false)}
      />
      {left ? <span className="switch__label">{left}</span> : null}
      <span className="switch__input" />
      {right ? <span className="switch__label">{right}</span> : null}
    </label>
  </ConditionalWrapper>
);

Switch.propTypes = {
  left: PropTypes.string,
  right: PropTypes.string,
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
  id: PropTypes.string
};

Switch.defaultProps = {
  left: null,
  right: null,
  disabled: false,
  inline: false,
  spacing: false,
  asFormGroup: true,
  className: null,
  id: null
};

export { Switch };
