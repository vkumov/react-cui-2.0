import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Switch } from "./index";

export default {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    docs: {
      source: {
        language: "tsx",
        excludeDecorators: true,
      },
    },
  },
} as Meta;

export const Default: StoryObj<typeof Switch> = {
  render: (args) => <Switch {...args} />,
  args: {
    right: "This is switch",
  },
};
