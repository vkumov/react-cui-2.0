import React, { forwardRef, type Ref, type ReactNode } from "react";
import type { GroupBase } from "react-select/dist/declarations/src/types";
import type SelectGeneric from "react-select/dist/declarations/src/Select";
import CreatableSelect from "react-select/creatable";
import type { CreatableProps } from "react-select/creatable";
import cx from "classnames";

import { InputHelpBlock } from "src/InputHelp";
import type { LabelColor } from "src/Label";

import "../../css/react-select.css";
import {
  MultiValueContainer,
  MultiValueLabel,
  MultiValueRemove,
  Group as GroupComponent,
  GroupHeading,
} from "./components";
import sts from "./Select.module.scss";

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
      className={cx("form-group", className, {
        "form-group--error": error,
        [sts.multi_select]: props.isMulti,
      })}
    >
      {label && <label>{label}</label>}
      <CreatableSelect
        className="react-select-container qtr-margin-top"
        classNamePrefix="react-select"
        components={{
          MultiValueContainer,
          MultiValueLabel,
          MultiValueRemove,
          Group: GroupComponent,
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
