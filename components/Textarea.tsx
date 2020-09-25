import React, { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { getIn, FormikErrors, FormikTouched } from "formik";

import { InputHelpBlock } from "./InputHelpBlock";
import { appendClass as ac } from "../utils";

interface TextareaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  label?: ReactNode;
  textareaClass?: string;
  innerDivClass?: string;
  inputRef?: React.Ref<HTMLTextAreaElement>;
  className?: string;
  id?: string;
  field: {
    name: string;
    value: string;
    [x: string]: any;
  };
  form: {
    touched: FormikErrors<any>;
    errors: FormikTouched<any>;
    [x: string]: any;
  };
  inline?: boolean;
}

const Textarea: FC<TextareaProps> = ({
  label = null,
  textareaClass = null,
  innerDivClass = null,
  className = null,
  id = null,
  inputRef = null,
  inline = false,
  field,
  form: { touched, errors },
  ...rest
}) => {
  return (
    <div
      className={`form-group${ac(inline, "form-group--inline")}${ac(
        className
      )}${
        getIn(touched, field.name) && getIn(errors, field.name)
          ? " form-group--error"
          : ""
      }`}
    >
      <div className={`form-group__text${ac(innerDivClass)}`}>
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
  textareaClass: PropTypes.string,
  innerDivClass: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  inline: PropTypes.bool,
};
export { Textarea };
