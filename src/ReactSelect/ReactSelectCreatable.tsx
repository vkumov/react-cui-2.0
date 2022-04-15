import React, { forwardRef } from "react";
import type { GroupBase } from "react-select/dist/declarations/src/types";
import CreatableSelect, { CreatableProps } from "react-select/creatable";

import { appendClass } from "src/utils";
import { InputHelpBlock } from "src/InputHelp";

import "../../css/react-select.css";
import {
  MultiValueContainer,
  MultiValueLabel,
  MultiValueRemove,
} from "./components";
import { CUISelectProps } from "./types";

export type CreatableReactSelectProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> = CreatableProps<Option, IsMulti, Group> & CUISelectProps;

export const CreatableReactSelect = forwardRef<any, CreatableReactSelectProps>(
  ({ label = null, className, error, ...props }, ref): JSX.Element => {
    return (
      <div
        className={`form-group${appendClass(className)}${appendClass(
          error,
          "form-group--error"
        )}`}
      >
        {label && <label>{label}</label>}
        <CreatableSelect
          className="react-select-container qtr-margin-top"
          classNamePrefix="react-select"
          components={{
            MultiValueContainer,
            MultiValueLabel,
            MultiValueRemove,
          }}
          formatCreateLabel={(inputValue: string) => (
            <>
              {props.isMulti ? "Add " : "Use "}
              <span className="text-bold">{inputValue}</span>
            </>
          )}
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
