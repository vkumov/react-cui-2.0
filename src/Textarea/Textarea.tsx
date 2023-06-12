import React, { type FC, type HTMLProps, type ReactNode } from "react";
import cx from "classnames";

import { InputHelpBlock } from "src/InputHelp";

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
  children,
  ...textarea
}) => {
  return (
    <div
      className={cx("form-group", {
        "form-group--inline": inline,
        "form-group--error": error,
        [className]: className,
      })}
    >
      <div className={cx("form-group__text", innerDivClass)}>
        <textarea className={textareaClass} ref={inputRef} {...textarea}>
          {textarea.value}
        </textarea>
        {label ? <label htmlFor={id}>{label}</label> : null}
      </div>
      {error ? <InputHelpBlock text={error} /> : null}
      {children ?? null}
    </div>
  );
};
