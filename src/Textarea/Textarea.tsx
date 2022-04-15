import React, { FC, HTMLProps, ReactNode } from "react";

import { InputHelpBlock } from "src/InputHelp";
import { appendClass as ac } from "src/utils";

interface TextareaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  label?: ReactNode;
  textareaClass?: string;
  innerDivClass?: string;
  inputRef?: React.Ref<HTMLTextAreaElement>;
  className?: string;
  inline?: boolean;
  error?: ReactNode;
}

export const Textarea: FC<TextareaProps & HTMLProps<HTMLTextAreaElement>> = ({
  label = null,
  textareaClass = null,
  innerDivClass = null,
  className = null,
  id = null,
  inputRef = null,
  inline = false,
  error = null,
  ...textarea
}) => {
  return (
    <div
      className={`form-group${ac(inline, "form-group--inline")}${ac(
        className
      )}${ac(error, "form-group--error")}`}
    >
      <div className={`form-group__text${ac(innerDivClass)}`}>
        <textarea className={textareaClass} ref={inputRef} {...textarea}>
          {textarea.value}
        </textarea>
        {label ? <label htmlFor={id}>{label}</label> : null}
      </div>
      {error ? <InputHelpBlock text={error} /> : null}
    </div>
  );
};
