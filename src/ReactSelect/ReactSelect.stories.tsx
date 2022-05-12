import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { ReactSelect as Select, ReactSelectProps } from "./";
import { CreatableReactSelect, CreatableReactSelectProps } from "./creatable";

export default {
  title: "Components/Select/React Select",
  component: Select,
} as Meta;

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const colourOptions = [
  { value: "ocean", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
  { value: "yellow", label: "Yellow" },
  { value: "green", label: "Green" },
  { value: "forest", label: "Forest" },
  { value: "slate", label: "Slate" },
  { value: "silver", label: "Silver" },
];

const flavourOptions = [
  { value: "vanilla", label: "Vanilla" },
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "salted-caramel", label: "Salted Caramel" },
];

const groupedOptions = [
  {
    label: "Colours",
    options: colourOptions,
  },
  {
    label: "Flavours",
    options: flavourOptions,
  },
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
      <div className="section base-margin-top dbl-margin-bottom">
        <h3 className="display-5">CUI React Select Grouped</h3>
        <div className="row">
          <div className="col">
            <Select {...args} options={groupedOptions} />
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
  error: null,
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
  error: null,
};

ReactSelectCreatable.argTypes = {
  menuIsOpen: { control: "inline-radio", options: [true, false, undefined] },
  closeMenuOnSelect: {
    control: "inline-radio",
    options: [true, false, undefined],
  },
  error: { control: "text" },
};
