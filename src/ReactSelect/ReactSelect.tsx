import React from "react";
import Select, { Props as SelectProps } from "react-select";

import "../../css/react-select.css";
import { appendClass } from "src/utils";
import {
  MultiValueContainer,
  MultiValueLabel,
  MultiValueRemove,
} from "./components";
import { CUISelectProps } from "./types";

export type ReactSelectProps = SelectProps & CUISelectProps;

export const ReactSelect = ({
  label = null,
  className,
  ...props
}: ReactSelectProps): JSX.Element => {
  return (
    <div className={`form-group${appendClass(className)}`}>
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
      />
    </div>
  );
};
