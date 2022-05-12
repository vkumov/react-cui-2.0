import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { InputChips as LibInputChips, InputChipsProps } from "./index";

export default {
  title: "Components/Textfield/Input Chips",
  component: LibInputChips,
} as Meta;

export const InputChips: Story<InputChipsProps> = (args) => (
  <div className="section base-margin-top dbl-margin-bottom">
    <h3 className="display-5">Chips</h3>
    <LibInputChips {...args} />
  </div>
);

InputChips.args = {
  label: "Enter value",
  value: ["one", "two", "three"],
};
