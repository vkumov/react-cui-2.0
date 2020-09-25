import React, { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { Field, FieldInputProps } from "formik";

import { appendClass as ac } from "../utils";

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  spacing?: "compressed" | "regular" | "loose" | "nospacing";
  inline?: boolean;
  label?: ReactNode;
  className?: string;
  id: string;
  field: FieldInputProps<any>;
}

export const Radio: FC<RadioProps> = ({
  spacing = null,
  inline = false,
  label = null,
  className = null,
  field: { name, value, onChange, onBlur },
  id,
  ...props
}) => (
  <div
    className={`form-group${ac(inline, "form-group--inline")}${ac(
      spacing,
      `form-group--${spacing}`
    )}${ac(className)}`}
    {...props}
  >
    <label className="radio" htmlFor={`${name}.${id}`}>
      <input
        type="radio"
        name={name}
        value={id}
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        id={`${name}.${id}`}
      />
      <span className="radio__input" />
      {label ? <span className="radio__label">{label}</span> : null}
    </label>
  </div>
);

Radio.propTypes = {
  spacing: PropTypes.oneOf(["compressed", "regular", "loose", "nospacing"]),
  inline: PropTypes.bool,
  label: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
};

interface RadioValue {
  value: string;
  label: ReactNode;
}

interface RadiosProps {
  values: RadioValue[];
}

export const Radios: FC<RadiosProps> = ({ values, ...props }) => (
  <>
    {values.map((v) => (
      <Field
        component={Radio}
        {...props}
        id={v.value}
        label={v.label}
        key={v.value}
      />
    ))}
  </>
);

Radios.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.exact({
      value: PropTypes.string,
      label: PropTypes.node,
    })
  ),
};
