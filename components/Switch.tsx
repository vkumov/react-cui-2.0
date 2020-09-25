import React, { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { getIn } from "formik";

import { ConditionalWrapper } from "./Conditional";
import { appendClass as ac } from "../utils";

interface SwitchProps {
  left?: ReactNode;
  right?: ReactNode;
  disabled?: boolean;
  inline?: boolean;
  spacing?: "compressed" | "loose";
  asFormGroup?: boolean;
  form: {
    values: Record<string, unknown>;
    [x: string]: any;
  };
  field: {
    name: string;
    [x: string]: any;
  };
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

const Switch: FC<SwitchProps> = ({
  left = null,
  right = null,
  disabled = false,
  inline = false,
  spacing = null,
  asFormGroup = true,
  className = null,
  id = null,
  style = null,
  field,
  form,
}) => (
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
      htmlFor={id || field.name}
    >
      <input
        type="checkbox"
        {...field}
        id={id || field.name}
        checked={getIn(form.values, field.name, false)}
      />
      {left ? <span className="switch__label">{left}</span> : null}
      <span className="switch__input" />
      {right ? <span className="switch__label">{right}</span> : null}
    </label>
  </ConditionalWrapper>
);

Switch.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
  disabled: PropTypes.bool,
  inline: PropTypes.bool,
  spacing: PropTypes.oneOf(["compressed", "loose"]),
  asFormGroup: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.shape({}),
};

export { Switch };
