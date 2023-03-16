import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Dropzone } from "./index";

export default {
  title: "Components/Dropzone",
  component: Dropzone,
} as Meta<typeof Dropzone>;

type Story = StoryObj<typeof Dropzone>;

export const Default: Story = {
  render: (args) => {
    return <Dropzone {...args} onChange={(v) => console.log(v)} />;
  },
  args: {
    name: "dropzone",
    label: "Select files",
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
