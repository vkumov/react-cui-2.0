import React, { forwardRef, type HTMLProps, type ReactNode } from "react";
import cx from "classnames";

import { ConditionalWrapper } from "src/Conditional";

import "../../css/checkbox.css";

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
          className={cx("form-group", {
            "form-group--inline": inline,
            [`form-group--${spacing}`]: spacing && spacing !== "default",
          })}
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
