import React, { ComponentProps } from "react";
import type { ArgTypes, Meta, StoryObj } from "@storybook/react";

import { Dots } from "./index";

export default {
  title: "Components/Loader/Dots",
  parameters: {
    docs: {
      source: {
        language: "tsx",
        excludeDecorators: true,
      },
    },
  },
} as Meta;

const argTypes: ArgTypes<ComponentProps<typeof Dots>> = {
  color: {
    options: [
      "primary",
      "secondary",
      "tertiary",
      "success",
      "info",
      "warning",
      "warning-alt",
      "danger",
      "dark",
      "light",
    ],
    control: { type: "select" },
  },
};

type Story = StoryObj<typeof Dots>;

export const Default: Story = {
  render: (args) => <Dots {...args} />,
  args: {},
  argTypes,
};
