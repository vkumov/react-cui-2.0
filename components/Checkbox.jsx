import React from "react";
import PropTypes from "prop-types";
import { getIn } from "formik";

import { ConditionalWrapper } from "./Conditional";

const Checkbox = ({ field, form, inline, asFormGroup, children }) => (
  <ConditionalWrapper
    condition={asFormGroup}
    wrapper={
      <div className={`form-group ${inline ? "form-group--inline" : ""}`} />
    }
  >
    <label className="checkbox">
      <input
        type="checkbox"
        {...field}
        checked={getIn(form.values, field.name, false)}
      />
      <span className="checkbox__input" />
      {children ? <span className="checkbox__label">{children}</span> : null}
    </label>
  </ConditionalWrapper>
);

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
