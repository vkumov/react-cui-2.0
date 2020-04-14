import React from "react";
import PropTypes from "prop-types";
import { getIn } from "formik";

import { InputHelpBlock } from "./InputHelpBlock";
import { appendClass as ac } from "../utils";

const Textarea = ({
  className,
  id,
  field,
  label,
  labelInline,
  form: { touched, errors },
  inputRef,
  textareaClass,
  resize,
  ...rest
}) => {
  return (
    <div
      className={`form-group${ac(labelInline, "label--inline")}${ac(
        className
      )}${
        getIn(touched, field.name) && getIn(errors, field.name)
          ? " form-group--error"
          : ""
      }`}
    >
      <div className="form-group__text">
        <textarea
          {...field}
          className={textareaClass}
          id={id}
          ref={inputRef}
          {...rest}
        >
          {field.value}
        </textarea>
        {label ? <label htmlFor={id}>{label}</label> : null}
      </div>
      {getIn(touched, field.name) && getIn(errors, field.name) ? (
        <InputHelpBlock text={getIn(errors, field.name)} />
      ) : null}
    </div>
  );
};

Textarea.propTypes = {
  label: PropTypes.node,
  labelInline: PropTypes.bool,
  textareaClass: PropTypes.string,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  className: PropTypes.string,
  id: PropTypes.string,
  field: PropTypes.shape({ name: PropTypes.string, value: PropTypes.string })
    .isRequired,
  form: PropTypes.shape({
    touched: PropTypes.shape({}),
    errors: PropTypes.shape({}),
  }).isRequired,
  resize: PropTypes.bool,
};

Textarea.defaultProps = {
  label: null,
  labelInline: false,
  textareaClass: null,
  className: null,
  id: null,
  inputRef: null,
  resize: false,
};

export { Textarea };
