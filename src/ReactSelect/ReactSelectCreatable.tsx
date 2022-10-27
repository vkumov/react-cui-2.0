import React, { forwardRef, type Ref } from "react";
import type { GroupBase } from "react-select/dist/declarations/src/types";
import type SelectGeneric from "react-select/dist/declarations/src/Select";
import CreatableSelect, { type CreatableProps } from "react-select/creatable";

import { appendClass } from "src/utils";
import { InputHelpBlock } from "src/InputHelp";

import "../../css/react-select.css";
import {
  MultiValueContainer,
  MultiValueLabel,
  MultiValueRemove,
  Group,
  GroupHeading,
} from "./components";

import type { ReactNode } from "react";
import type { LabelColor } from "src/Label";

type CUISelectProps = {
  label?: ReactNode;
  multiValueColor?: LabelColor;
  error?: ReactNode | boolean;
};

export type CreatableReactSelectProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> = CreatableProps<Option, IsMulti, Group> & CUISelectProps;

function UnrefedSelect<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  {
    label = null,
    className,
    error,
    ...props
  }: CreatableReactSelectProps<Option, IsMulti, Group>,
  ref: Ref<SelectGeneric<Option, IsMulti, Group>>
): JSX.Element {
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
          Group,
          GroupHeading,
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

export const CreatableReactSelect = forwardRef(UnrefedSelect) as <
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: CreatableReactSelectProps<Option, IsMulti, Group> & {
    ref?: React.ForwardedRef<SelectGeneric<Option, IsMulti, Group>>;
  }
) => ReturnType<typeof UnrefedSelect>;
