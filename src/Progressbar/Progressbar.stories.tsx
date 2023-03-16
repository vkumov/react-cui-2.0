import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Progressbar } from "./index";

export default {
  title: "Components/Progressbar",
  component: Progressbar,
  parameters: {
    docs: {
      source: {
        language: "tsx",
        excludeDecorators: true,
      },
    },
  },
} as Meta;

export const Default: StoryObj<typeof Progressbar> = {
  render: (args) => <Progressbar {...args} />,
  args: {
    percentage: 50,
  },
  argTypes: {
    label: { type: "string", description: "Percentage if label not set" },
  },
};
