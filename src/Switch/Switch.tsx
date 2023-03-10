import React, {
  forwardRef,
  type FC,
  type HTMLProps,
  type ReactNode,
} from "react";
import cx from "classnames";

import { ConditionalWrapper } from "src/Conditional";

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

export const Switch: FC<SwitchProps & HTMLProps<HTMLInputElement>> = forwardRef(
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
          className={cx("form-group", {
            "form-group--inline": inline,
            [`form-group--${spacing}`]: spacing,
            [className]: className,
          })}
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
