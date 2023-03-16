import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Blockquote } from "./index";

export default {
  title: "Components/Blockquote",
  component: Blockquote,
} as Meta<typeof Blockquote>;

type Story = StoryObj<typeof Blockquote>;

export const Default: Story = {
  render: ({ children, ...args }) => (
    <Blockquote {...args}>{children}</Blockquote>
  ),
  args: {
    color: "info",
    cite: "Forrest Gump",
    padding: "default",
    children:
      "Life is like an npm install – you never know what you are going to get.",
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
