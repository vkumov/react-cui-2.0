import React, { FC, HTMLProps, ReactNode } from "react";

import { ConditionalWrapper } from "../Conditional";
import { appendClass as ac } from "../../utils";

type CheckboxProps = {
  inline?: boolean;
  asFormGroup?: boolean;
  children?: ReactNode;
  spacing?: "compressed" | "default" | "loose";
};

const Checkbox: FC<CheckboxProps & HTMLProps<HTMLInputElement>> = ({
  inline = false,
  asFormGroup = true,
  children = null,
  spacing = null,
  ...input
}) => (
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
      <input type="checkbox" {...input} />
      <span className="checkbox__input" />
      {children ? <span className="checkbox__label">{children}</span> : null}
    </label>
  </ConditionalWrapper>
);

export { Checkbox };
