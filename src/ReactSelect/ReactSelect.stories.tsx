import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { ReactSelect as Select, ReactSelectProps } from "./";
import { CreatableReactSelect, CreatableReactSelectProps } from "./creatable";

export default {
  title: "Select/React Select",
  component: Select,
} as Meta;

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const ReactSelect: Story<ReactSelectProps> = (args) => {
  return (
    <>
      <div className="section base-margin-top dbl-margin-bottom">
        <h3 className="display-5">CUI React Select</h3>
        <div className="row">
          <div className="col">
            <Select {...args} />
          </div>
        </div>
      </div>
    </>
  );
};

ReactSelect.parameters = {};

ReactSelect.args = {
  options,
  label: "Select an option",
  isMulti: false,
  isLoading: false,
  isClearable: false,
  isDisabled: false,
  isSearchable: false,
  menuIsOpen: undefined,
  closeMenuOnSelect: undefined,
  multiValueColor: "info",
};

ReactSelect.argTypes = {
  menuIsOpen: { control: "inline-radio", options: [true, false, undefined] },
  closeMenuOnSelect: {
    control: "inline-radio",
    options: [true, false, undefined],
  },
};

export const ReactSelectCreatable: Story<CreatableReactSelectProps> = (
  args
) => {
  return (
    <>
      <div className="section base-margin-top dbl-margin-bottom">
        <h3 className="display-5">CUI React Select Creatable</h3>
        <div className="row">
          <div className="col">
            <CreatableReactSelect {...args} />
          </div>
        </div>
      </div>
    </>
  );
};

ReactSelectCreatable.parameters = {};

ReactSelectCreatable.args = {
  options,
  label: "Select an option",
  isMulti: false,
  isLoading: false,
  isClearable: false,
  isDisabled: false,
  isSearchable: true,
  menuIsOpen: undefined,
  closeMenuOnSelect: undefined,
  multiValueColor: "info",
};

ReactSelectCreatable.argTypes = {
  menuIsOpen: { control: "inline-radio", options: [true, false, undefined] },
  closeMenuOnSelect: {
    control: "inline-radio",
    options: [true, false, undefined],
  },
};
