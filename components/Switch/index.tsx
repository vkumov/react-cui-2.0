import React, { FC, forwardRef, HTMLProps, ReactNode } from "react";

import { ConditionalWrapper } from "../Conditional";
import { appendClass as ac } from "../../utils";

interface SwitchProps {
  left?: ReactNode;
  right?: ReactNode;
  disabled?: boolean;
  inline?: boolean;
  spacing?: "compressed" | "loose";
  asFormGroup?: boolean;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

const Switch: FC<SwitchProps & HTMLProps<HTMLInputElement>> = forwardRef(
  (
    {
      left = null,
      right = null,
      disabled = false,
      inline = false,
      spacing = null,
      asFormGroup = true,
      className = null,
      id = null,
      style = null,
      ...input
    },
    forwardedRef
  ) => (
    <ConditionalWrapper
      condition={asFormGroup}
      wrapper={
        <div
          className={`form-group${ac(inline, "form-group--inline")}${ac(
            className
          )}${ac(spacing, ` form-group--${spacing}`)}`}
          style={style}
        />
      }
    >
      <label
        className={`switch${disabled ? " disabled" : ""}`}
        htmlFor={id || input.name}
      >
        <input
          type="checkbox"
          {...input}
          id={id || input.name}
          checked={input.checked}
          ref={forwardedRef}
        />
        {left ? <span className="switch__label">{left}</span> : null}
        <span className="switch__input" />
        {right ? <span className="switch__label">{right}</span> : null}
      </label>
    </ConditionalWrapper>
  )
);

export { Switch };
