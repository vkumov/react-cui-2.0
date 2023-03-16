import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./index";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (args) => (
    <div>
      <div className="subheader">Checkboxes</div>
      <Checkbox {...args}>One</Checkbox>
      <Checkbox {...args}>Two</Checkbox>
      <Checkbox {...args}>Three</Checkbox>
    </div>
  ),
  args: {},
  parameters: {
    docs: {
      source: {
        language: "tsx",
        excludeDecorators: true,
      },
    },
  },
};
