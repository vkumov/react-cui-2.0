import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Gauge } from "./index";

export default {
  title: "Components/Gauge",
  component: Gauge,
} as Meta;

type Story = StoryObj<typeof Gauge>;

export const Default: Story = {
  render: (args) => {
    return <Gauge {...args} />;
  },
  args: {
    percentage: 25,
    label: "Gauge label",
    color: "primary",
    size: "default",
  },
};
