import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import dedent from "ts-dedent";

import { Kbd } from "./index";

export default {
  title: "Components/Kbd",
  component: Kbd,
} as Meta<typeof Kbd>;

type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
  render: () => {
    return (
      <div>
        <p>Display keyboard button or keys combination</p>
        <Kbd>⌘</Kbd> + <Kbd>shift</Kbd> + <Kbd>M</Kbd>
      </div>
    );
  },
  args: {},
  parameters: {
    docs: {
      source: {
        language: "tsx",
        code: dedent`<div>
        <Kbd>⌘</Kbd> + <Kbd>shift</Kbd> + <Kbd>M</Kbd>
      </div>`,
      },
    },
  },
};
