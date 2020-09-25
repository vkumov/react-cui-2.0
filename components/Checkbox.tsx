import React, { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { getIn, FormikProps, FieldInputProps } from "formik";

import { ConditionalWrapper } from "./Conditional";

type CheckboxProps = {
  inline?: boolean;
  asFormGroup?: boolean;
  form: FormikProps<any>;
  field: FieldInputProps<any>;
  children?: ReactNode;
};

const Checkbox: FC<CheckboxProps> = ({
  inline = false,
  asFormGroup = true,
  children = null,
  field,
  form,
}) => (
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
  children: PropTypes.node,
};

export { Checkbox };
