import React, { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { getIn, FormikHandlers } from "formik";

import { DisplayIf as If } from "./Conditional";
import { InputHelpBlock } from "./InputHelpBlock";
import { appendClass as ac } from "../utils";

type MinimalFormikProps = {
  errors: Record<string, unknown>;
  touched: Record<string, unknown>;
  values: Record<string, unknown>;
  [x: string]: unknown;
};

type MinimalFieldProps = {
  name: string;
  onChange: FormikHandlers["handleChange"];
  [x: string]: unknown;
};

type InputProps = {
  label?: ReactNode;
  type?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  inline?: "group" | "label" | "both" | "form";
  helpBlock?: boolean;
  form: MinimalFormikProps;
  field: MinimalFieldProps;
  iconClick?: (e) => void;
  icon?: string;
  id?: string;
  className?: string;
  plain?: boolean;
};

const Input: FC<InputProps> = ({
  type = "text",
  inline = null,
  helpBlock = true,
  label = null,
  icon = null,
  iconClick = null,
  id = null,
  className = null,
  plain = false,
  inputRef = null,
  field,
  form: { touched, errors },
  ...rest
}) => (
  <div
    className={`form-group${ac(className)}${ac(
      getIn(touched, field.name) && getIn(errors, field.name),
      "form-group--error"
    )}${ac(inline === "form" || inline === "both", "form-group--inline")}${ac(
      inline === "label" || inline === "both",
      "label--inline"
    )}${ac(icon, "input--icon")}`}
  >
    <div className="form-group__text">
      <input
        {...field}
        id={id || field.name}
        type={type}
        ref={inputRef}
        {...rest}
        className={ac(plain, "form-group--plaintext")}
      />
      {label ? <label htmlFor={id || field.name}>{label}</label> : null}
      {icon ? (
        <button
          type="button"
          className="link"
          tabIndex={-1}
          onClick={iconClick}
        >
          <span className={`icon-${icon}`} />
        </button>
      ) : null}
    </div>
    <If
      condition={
        !inline &&
        helpBlock &&
        !!getIn(touched, field.name) &&
        !!getIn(errors, field.name)
      }
    >
      <InputHelpBlock text={getIn(errors, field.name)} />
    </If>
  </div>
);

Input.propTypes = {
  label: PropTypes.node,
  type: PropTypes.string,
  inline: PropTypes.oneOf(["group", "label", "both", "form"]),
  helpBlock: PropTypes.bool,
  form: PropTypes.exact({
    values: PropTypes.shape({}),
    touched: PropTypes.shape({}),
    errors: PropTypes.shape({}),
  }).isRequired,
  field: PropTypes.exact({
    name: PropTypes.string,
    onChange: PropTypes.func,
  }).isRequired,
  iconClick: PropTypes.func,
  icon: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  plain: PropTypes.bool,
};

export { Input };
