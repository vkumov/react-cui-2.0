import React from "react";
import PropTypes from "prop-types";
import { getIn } from "formik";

import { InputHelpBlock } from "./InputHelpBlock";

const Input = ({
  className,
  id,
  field,
  label,
  type,
  form: { touched, errors },
  inputRef,
  inline,
  icon,
  iconClick,
  helpBlock,
  plain,
  ...rest
}) => (
  <div
    className={`form-group${className ? ` ${className}` : ""}${
      getIn(touched, field.name) && getIn(errors, field.name)
        ? " form-group--error"
        : ""
    }${inline === "form" || inline === "both" ? " form-group--inline" : ""}${
      inline === "label" || inline === "both" ? " label--inline" : ""
    }${icon ? " input--icon" : ""}`}
  >
    <div className="form-group__text">
      <input
        {...field}
        id={id || field.name}
        type={type}
        ref={inputRef}
        {...rest}
        className={plain ? "form-group--plaintext" : ""}
      />
      {label ? <label htmlFor={id || field.name}>{label}</label> : null}
      {icon ? (
        <button
          type="button"
          className="link"
          tabIndex="-1"
          onClick={iconClick}
        >
          <span className={`icon-${icon}`} />
        </button>
      ) : null}
    </div>
    {helpBlock && getIn(touched, field.name) && getIn(errors, field.name) ? (
      <InputHelpBlock text={getIn(errors, field.name)} />
    ) : null}
  </div>
);

Input.propTypes = {
  label: PropTypes.node,
  type: PropTypes.string,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  inline: PropTypes.oneOf([false, "group", "label", "both"]),
  helpBlock: PropTypes.bool,
  form: PropTypes.shape({
    values: PropTypes.object
  }).isRequired,
  field: PropTypes.shape({
    name: PropTypes.string,
    onChange: PropTypes.func
  }).isRequired,
  iconClick: PropTypes.func,
  icon: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  plain: PropTypes.bool
};

Input.defaultProps = {
  type: "text",
  inline: false,
  helpBlock: true,
  label: null,
  icon: null,
  iconClick: null,
  id: null,
  className: null,
  plain: false
};

export { Input };
