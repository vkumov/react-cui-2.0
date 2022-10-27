import React, { forwardRef, type Ref } from "react";
import Select, { Props as SelectProps, GroupBase } from "react-select";
import type SelectGeneric from "react-select/dist/declarations/src/Select";

import { InputHelpBlock } from "src/InputHelp";
import { appendClass } from "src/utils";

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

export type ReactSelectProps<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> = SelectGeneric<Option, IsMulti, Group> & CUISelectProps & SelectProps;

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
  }: ReactSelectProps<Option, IsMulti, Group>,
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
      <Select
        className="react-select-container qtr-margin-top"
        classNamePrefix="react-select"
        components={{
          MultiValueContainer,
          MultiValueLabel,
          MultiValueRemove,
          Group,
          GroupHeading,
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

export const ReactSelect = forwardRef(UnrefedSelect) as <
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: ReactSelectProps<Option, IsMulti, Group> & {
    ref?: React.ForwardedRef<SelectGeneric<Option, IsMulti, Group>>;
  }
) => ReturnType<typeof UnrefedSelect>;
