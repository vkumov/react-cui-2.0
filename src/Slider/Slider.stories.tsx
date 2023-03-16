import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Slider, SliderProps } from "./index";

export default {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    docs: {
      source: {
        language: "tsx",
        excludeDecorators: true,
      },
    },
  },
} as Meta<typeof Slider>;

const defaultMarks: SliderProps["marks"] = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 };

type Story = StoryObj<typeof Slider>;

export const Primary: Story = {
  render: (props) => <Slider {...props} />,
  args: {
    dots: true,
    max: 5,
    min: 1,
    marks: defaultMarks,
    label: "Some slider label",
  },
};
