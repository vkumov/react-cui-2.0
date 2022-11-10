import React, { forwardRef, type Ref, type ReactNode } from "react";
import Select, {
  type Props as SelectProps,
  type GroupBase,
} from "react-select";
import type SelectGeneric from "react-select/dist/declarations/src/Select";

import { InputHelpBlock } from "src/InputHelp";
import { appendClass } from "src/utils";
import type { LabelColor } from "src/Label";

import "../../css/react-select.css";
import {
  MultiValueContainer,
  MultiValueLabel,
  MultiValueRemove,
  Group as GroupComponent,
  GroupHeading,
} from "./components";

type CUISelectProps = {
  label?: ReactNode;
  multiValueColor?: LabelColor;
  error?: ReactNode | boolean;
};

export type ReactSelectProps<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> = CUISelectProps & SelectProps<Option, IsMulti, Group>;

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
          Group: GroupComponent,
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
