import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { InputChips } from "./index";

export default {
  title: "Components/Textfield/Input Chips",
  component: InputChips,
} as Meta;

type Story = StoryObj<typeof InputChips>;

export const Default: Story = {
  render: (args) => <InputChips {...args} />,
  args: {
    label: "Enter value",
    value: ["one", "two", "three"],
    chipsColor: "info",
  },
  parameters: {
    docs: {
      source: {
        language: "tsx",
        excludeDecorators: true,
      },
    },
  },
};
