import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Step, Steps } from "./index";

export default {
  title: "Components/Steps",
  component: Steps,
  subcomponents: { Step },
  parameters: {
    docs: {
      source: {
        language: "tsx",
        excludeDecorators: true,
      },
    },
  },
} as Meta<typeof Steps>;

export const Default: StoryObj<typeof Step> = {
  render: (args) => (
    <Steps {...args}>
      <Step icon={<span className="icon-check" />} visited>
        Visited
      </Step>
      <Step icon="2" active>
        Active
      </Step>
      <Step icon="3">Inactive</Step>
    </Steps>
  ),
};
