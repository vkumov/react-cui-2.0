import React, { forwardRef, HTMLProps, ReactNode } from "react";

import { ConditionalWrapper } from "src/Conditional";
import { appendClass as ac } from "src/utils";

type CheckboxProps = {
  inline?: boolean;
  asFormGroup?: boolean;
  children?: ReactNode;
  spacing?: "compressed" | "default" | "loose";
};

export const Checkbox = forwardRef<
  HTMLInputElement,
  CheckboxProps & HTMLProps<HTMLInputElement>
>(
  (
    {
      inline = false,
      asFormGroup = true,
      children = null,
      spacing = null,
      ...input
    },
    ref
  ) => (
    <ConditionalWrapper
      condition={asFormGroup}
      wrapper={
        <div
          className={`form-group${ac(inline, "form-group--inline")}${ac(
            spacing && spacing !== "default",
            `form-group--${spacing}`
          )}`}
        />
      }
    >
      <label className="checkbox">
        <input type="checkbox" {...input} ref={ref} />
        <span className="checkbox__input" />
        {children ? <span className="checkbox__label">{children}</span> : null}
      </label>
    </ConditionalWrapper>
  )
);
