import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { ReactSelect as Select } from "./";
import { CreatableReactSelect } from "./creatable";

export default {
  title: "Components/Select/React Select",
  component: Select,
  parameters: {
    docs: {
      source: {
        language: "tsx",
        excludeDecorators: true,
      },
    },
  },
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

export const ReactSelect: StoryFn<typeof Select> = (args) => {
  return (
    <>
      <Select {...args} />
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

export const ReactSelectGrouped: StoryFn<typeof Select> = (args) => {
  return <Select {...args} />;
};

ReactSelectGrouped.parameters = {};

ReactSelectGrouped.args = {
  options: groupedOptions,
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

ReactSelectGrouped.argTypes = {
  menuIsOpen: { control: "inline-radio", options: [true, false, undefined] },
  closeMenuOnSelect: {
    control: "inline-radio",
    options: [true, false, undefined],
  },
};

export const ReactSelectCreatable: StoryFn<typeof CreatableReactSelect> = (
  args
) => {
  return <CreatableReactSelect {...args} />;
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
