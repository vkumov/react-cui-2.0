import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonGroup } from "./index";

export default {
  title: "Components/Button/Button Group",
  component: ButtonGroup,
} as Meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button.Primary className="text-nowrap">Button 1</Button.Primary>
      <Button.Primary className="text-nowrap">Button 2</Button.Primary>
      <Button.Primary disabled className="text-nowrap">
        Button 3
      </Button.Primary>
    </ButtonGroup>
  ),
  args: {
    square: false,
    withDivider: false,
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
