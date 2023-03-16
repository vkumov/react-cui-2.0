import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Label, LabelColor } from "./index";

export default {
  title: "Components/Label",
  component: Label,
  parameters: {
    docs: {
      source: {
        language: "tsx",
        excludeDecorators: true,
      },
    },
  },
} as Meta<typeof Label>;

type Story = StoryObj<typeof Label>;

const colors: LabelColor[] = [
  "primary",
  "secondary",
  "tertiary",
  "success",
  "info",
  "warning-alt",
  "warning",
  "danger",
  "dark",
  "light",
];

export const Default: Story = {
  render: (args) => <Label {...args} />,
  args: {
    children: "Label body",
  },
};

export const Examples = () => {
  return (
    <>
      <div className="section base-margin-top dbl-margin-bottom">
        <h3 className="display-5">Size</h3>
        <Label size="tiny">tiny</Label>&nbsp;
        <Label size="small">small</Label>&nbsp;
        <Label>default</Label>&nbsp;
        <Label size="large">large</Label>
      </div>
      <div className="section base-margin-top dbl-margin-bottom">
        <h3 className="display-5">Color</h3>
        {colors.map((clr) => (
          <Label key={clr} color={clr} className="qtr-margin-right">
            {clr}
          </Label>
        ))}
      </div>
      <div className="section base-margin-top dbl-margin-bottom">
        <h3 className="display-5">Bordered</h3>
        {colors.map((clr) => (
          <Label key={clr} color={clr} className="qtr-margin-right" bordered>
            {clr}
          </Label>
        ))}
      </div>
      <div className="section base-margin-top dbl-margin-bottom">
        <h3 className="display-5">Raised</h3>
        {colors.map((clr) => (
          <Label key={clr} color={clr} className="qtr-margin-right" raised>
            {clr}
          </Label>
        ))}
      </div>
    </>
  );
};
