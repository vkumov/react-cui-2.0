import React, { ReactNode, HTMLProps, forwardRef, ReactElement } from "react";

import { DisplayIf as If, ConditionalWrapper } from "src/Conditional";
import { InputHelpBlock } from "src/InputHelp";
import { appendClass as ac } from "src/utils";

import "../../css/input.css";

export type InputProps = {
  label?: ReactNode;
  type?: string;
  inline?: "label" | "both" | "form";
  helpBlock?: boolean;
  iconClick?: (e) => void;
  icon?: string | ReactElement<any>;
  className?: string;
  plain?: boolean;
  error?: ReactNode;
  horizontal?: boolean;
  horizontalLabelClassName?: string;
  prefix?: string;
};

export const Input = forwardRef<
  HTMLInputElement,
  InputProps & Omit<HTMLProps<HTMLInputElement>, "label">
>(
  (
    {
      type = "text",
      inline = null,
      helpBlock = true,
      label = null,
      icon = null,
      iconClick = null,
      className = null,
      plain = false,
      horizontal = null,
      horizontalLabelClassName = "col-3",
      error = null,
      prefix = null,
      ...input
    },
    ref
  ) => (
    <div
      className={`form-group${ac(className)}${ac(
        error,
        "form-group--error"
      )}${ac(inline === "form" || inline === "both", "form-group--inline")}${ac(
        inline === "label" || inline === "both",
        "label--inline"
      )}${ac(icon, "input--icon")}${ac(horizontal, "form-group--horizontal")}`}
    >
      <div className="form-group__text">
        <ConditionalWrapper
          wrapper={<div className="flex labeled" />}
          condition={!!prefix}
        >
          {prefix ? <div className="input-label">{prefix}</div> : null}
          <input
            type={type}
            ref={ref}
            {...input}
            className={ac(plain, "form-group--plaintext")}
          />
        </ConditionalWrapper>
        {label ? (
          <label
            htmlFor={input.id}
            className={ac(horizontal, horizontalLabelClassName)}
          >
            {label}
          </label>
        ) : null}
        {icon ? (
          <button
            type="button"
            className="link"
            tabIndex={-1}
            onClick={iconClick}
          >
            {typeof icon === "string" ? (
              <span className={icon.startsWith(" ") ? icon : `icon-${icon}`} />
            ) : (
              icon
            )}
          </button>
        ) : null}
      </div>
      <If condition={!inline && helpBlock && !!error}>
        <InputHelpBlock text={error} />
      </If>
    </div>
  )
);
