import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { WithBadge } from "./index";

export default {
  title: "Components/Badge",
  component: WithBadge,
} as Meta<typeof WithBadge>;

type Story = StoryObj<typeof WithBadge>;

export const Default: Story = {
  render: (args) => (
    <WithBadge {...args}>
      <span className="icon-alert icon-size-32" />
    </WithBadge>
  ),
  args: {
    badge: 3,
    color: "danger",
    size: "default",
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
