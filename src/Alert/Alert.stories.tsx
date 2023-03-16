import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "./index";

export default {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    docs: {
      source: {
        language: "tsx",
        excludeDecorators: true,
      },
    },
  },
} as Meta<typeof Alert>;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: ({ children, ...args }) => {
    return <Alert {...args}>{children}</Alert>;
  },
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida posuere tellus, eu congue nunc.",
  },
};
