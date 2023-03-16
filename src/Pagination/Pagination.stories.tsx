import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Pagination } from "./index";

export default {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    docs: {
      source: {
        language: "tsx",
        excludeDecorators: true,
      },
    },
  },
} as Meta<typeof Pagination>;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: (args) => {
    return <Pagination {...args} />;
  },
  args: {
    total: 50,
    position: 6,
  },
};
