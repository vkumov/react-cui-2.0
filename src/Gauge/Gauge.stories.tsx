import React, { type ComponentProps } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Gauge as LibGauge } from "./index";

export default {
  title: "Components/Gauge",
  component: LibGauge,
} as Meta;

export const Gauge: Story<ComponentProps<typeof LibGauge>> = (args) => {
  return (
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Gauge</h3>
      <LibGauge {...args} />
    </div>
  );
};

Gauge.parameters = {};

Gauge.args = {
  percentage: 25,
  label: "Gauge label",
  color: "primary",
  size: "default",
};

Gauge.argTypes = {
  size: {
    options: ["small", "default", "large"],
    type: { name: "string", required: false },
    control: "radio",
  },
};
