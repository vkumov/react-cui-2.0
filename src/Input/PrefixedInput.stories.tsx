import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./index";

export default {
  title: "Components/Textfield/Prefixed",
  component: Input,
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Prefixed: Story = {
  render: (args) => <Input {...args} />,
  args: {
    placeholder: "mysite.com",
    prefix: "http://",
    label: "URL",
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
