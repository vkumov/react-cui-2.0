import React, { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { getIn, FormikProps, FieldInputProps } from "formik";

import { Label } from "./Label";
import { InputHelpBaloon } from "./InputHelpBaloon";
import { InputHelpBlock } from "./InputHelpBlock";

import { appendClass as ac } from "../utils";

import "../css/chips.css";

type InputChipsProps = {
  label?: ReactNode;
  chipsColor?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "info"
    | "warning-alt"
    | "warning"
    | "danger"
    | "dark"
    | "light";
  addOnBlur?: boolean;
  allowRepeat?: boolean;
  allowRegex?: string;
  delimiters?: string | number[];
  valueValidator?: (value: any) => boolean;
  maxChips?: number;
  baloon?: string;
  className?: string;
  field: FieldInputProps<any>;
  form: FormikProps<any>;
  id?: string;
};

export const InputChips = React.forwardRef<HTMLDivElement, InputChipsProps>(
  (
    {
      chipsColor = "primary",
      addOnBlur = true,
      delimiters = [13],
      label = null,
      allowRepeat = false,
      allowRegex = null,
      valueValidator = null,
      maxChips = null,
      baloon = null,
      className = null,
      id = null,
      field,
      form: { touched, errors, setFieldValue, setFieldTouched },
    },
    ref
  ) => {
    const [focused, setFocus] = React.useState(false);

    const addValue = React.useCallback(
      (v) => {
        if (typeof valueValidator === "function") {
          v = valueValidator(v);
          if (v === false) return;
        }
        if (allowRepeat) {
          setFieldValue(field.name, [...field.value, v]);
        } else if (!field.value.includes(v))
          setFieldValue(field.name, [...field.value, v]);
      },
      [allowRepeat, valueValidator, field.name, field.value]
    );

    const handleKeyDown = React.useCallback(
      (event) => {
        let d = delimiters;
        if (typeof d === "string") {
          const { map } = Array.prototype;
          d = map.call(d, (ch) => ch.charCodeAt(0));
        }

        if (Array.isArray(d) && d.includes(event.keyCode)) {
          addValue(event.target.value);
          event.target.value = "";
          event.stopPropagation();
          event.preventDefault();
        }
      },
      [delimiters, addValue]
    );

    const handleBlur = React.useCallback(
      (event) => {
        if (addOnBlur && event.target && event.target.value) {
          const { value } = event.target;
          if (allowRegex && RegExp(allowRegex).test(value)) {
            addValue(value);
          } else if (!allowRegex) {
            addValue(value);
          }
        }
        event.target.value = "";
        setFocus(false);
        field.onBlur(event);
      },
      [addOnBlur, allowRegex, addValue, field]
    );

    const handleDelete = React.useCallback(
      (idx) => {
        const na = [...field.value];
        na.splice(idx, 1);

        setFieldTouched(field.name, true);
        setFieldValue(field.name, na);
      },
      [field.name, field.value]
    );

    React.useEffect(() => {
      if (
        !Number.isNaN(maxChips) &&
        Array.isArray(field.value) &&
        field.value.length >= maxChips
      )
        setFocus(false);
    }, [field.value, maxChips]);

    return (
      <div
        className={`form-group${ac(className)}${ac(
          getIn(touched, field.name) && getIn(errors, field.name),
          "form-group--error"
        )}`}
        ref={ref}
      >
        <div className="form-group__text chips">
          {label ? (
            <label htmlFor={id || field.name}>
              {label}
              {baloon ? <InputHelpBaloon baloon={baloon} /> : null}
            </label>
          ) : null}
          <div className={`input${ac(focused, "focus")}`}>
            {Array.isArray(field.value) && field.value.length ? (
              <span className="chips-outer">
                <span className="chips-inner">
                  {field.value.map((v, i) => (
                    <Label
                      removable
                      onRemove={() => handleDelete(i)}
                      color={chipsColor}
                      size="tiny"
                      key={`${v}-${i}`}
                      className="qtr-margin-bottom"
                    >
                      {v}
                    </Label>
                  ))}
                </span>
              </span>
            ) : null}
            {!maxChips ||
            (maxChips &&
              Array.isArray(field.value) &&
              field.value.length < maxChips) ? (
              <input
                type="text"
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
                onFocus={() => setFocus(true)}
                id={id || field.name}
              />
            ) : null}
          </div>
        </div>
        {getIn(touched, field.name) && getIn(errors, field.name) ? (
          <InputHelpBlock text={getIn(errors, field.name)} />
        ) : null}
      </div>
    );
  }
);

InputChips.propTypes = {
  label: PropTypes.node,
  chipsColor: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "success",
    "info",
    "warning-alt",
    "warning",
    "danger",
    "dark",
    "light",
  ]),
  addOnBlur: PropTypes.bool,
  allowRepeat: PropTypes.bool,
  allowRegex: PropTypes.string,
  delimiters: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  valueValidator: PropTypes.func,
  maxChips: PropTypes.number,
  baloon: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
};
