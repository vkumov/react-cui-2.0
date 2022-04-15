import React, { forwardRef } from "react";
import Select, { Props as SelectProps } from "react-select";

import { InputHelpBlock } from "src/InputHelp";
import { appendClass } from "src/utils";

import "../../css/react-select.css";
import {
  MultiValueContainer,
  MultiValueLabel,
  MultiValueRemove,
} from "./components";
import { CUISelectProps } from "./types";

export type ReactSelectProps = SelectProps & CUISelectProps;

export const ReactSelect = forwardRef<any, ReactSelectProps>(
  ({ label = null, className, error, ...props }, ref): JSX.Element => {
    return (
      <div
        className={`form-group${appendClass(className)}${appendClass(
          error,
          "form-group--error"
        )}`}
      >
        {label && <label>{label}</label>}
        <Select
          className="react-select-container qtr-margin-top"
          classNamePrefix="react-select"
          components={{
            MultiValueContainer,
            MultiValueLabel,
            MultiValueRemove,
          }}
          {...props}
          ref={ref}
        />
        {Boolean(error) && typeof error !== "boolean" ? (
          <InputHelpBlock text={error} />
        ) : null}
      </div>
    );
  }
);
