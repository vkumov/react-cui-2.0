import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { InputChips, InputChipsProps } from "./index";
import { LabelColor } from "../Label";

export default {
  title: "Input Chips",
  component: InputChips,
};

export const Primary: Story<InputChipsProps> = (args) => (
  <div className="section base-margin-top dbl-margin-bottom">
    <h3 className="display-5">Chips</h3>
    <InputChips {...args} />
  </div>
);

Primary.args = {
  label: "Enter value",
  value: ["one", "two", "three"],
};
