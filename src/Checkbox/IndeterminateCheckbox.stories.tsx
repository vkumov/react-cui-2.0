import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { IndeterminateCheckbox } from "./index";

export default {
  title: "Components/Checkbox/Indeterminate",
  component: IndeterminateCheckbox,
} as Meta<typeof IndeterminateCheckbox>;

type Story = StoryObj<typeof IndeterminateCheckbox>;

export const Default: Story = {
  render: ({ children, ...args }) => (
    <IndeterminateCheckbox {...args}>{children}</IndeterminateCheckbox>
  ),
  args: {
    children: "Some label",
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
