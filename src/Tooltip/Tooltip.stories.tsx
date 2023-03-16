import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { WithTooltip, WithTooltipProps } from "./";

export default {
  title: "Components/Tooltip",
  component: WithTooltip,
  parameters: {
    docs: {
      source: {
        language: "tsx",
        excludeDecorators: true,
      },
    },
  },
} as Meta;

export const Tooltip: StoryFn<WithTooltipProps> = (args) => {
  return (
    <WithTooltip {...args}>
      <span>Hover over me!</span>
    </WithTooltip>
  );
};

Tooltip.parameters = {};

Tooltip.args = {
  placement: "top",
  tooltip: "This is a tooltip!",
};

Tooltip.argTypes = {};
