import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Spinner } from "./index";

export default {
  title: "Components/Loader/Spinner",
  parameters: {
    docs: {
      source: {
        language: "tsx",
        excludeDecorators: true,
      },
    },
  },
} as Meta<typeof Spinner>;

export const Default: StoryObj<typeof Spinner> = {
  render: (args) => <Spinner {...args} />,
  args: {
    size: "default",
    text: "Loading...",
  },
  argTypes: {
    size: {
      options: ["small", "default", "large"],
      control: { type: "radio" },
    },
  },
};
