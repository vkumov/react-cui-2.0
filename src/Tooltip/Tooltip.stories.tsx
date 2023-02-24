import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import { WithTooltip, WithTooltipProps } from "./";

export default {
  title: "Components/Tooltip",
  component: WithTooltip,
} as Meta;

export const Tooltip: Story<WithTooltipProps> = (args) => {
  return (
    <>
      <div className="section base-margin-top dbl-margin-bottom">
        <h3 className="display-5">Tooltip (Using FloatingUI)</h3>
        <div className="row">
          <div className="col text-center">
            <WithTooltip {...args}>
              <span>Hover over me!</span>
            </WithTooltip>
          </div>
        </div>
      </div>
    </>
  );
};

Tooltip.parameters = {};

Tooltip.args = {
  placement: "top",
  tooltip: "This is a tooltip!",
};

Tooltip.argTypes = {};
