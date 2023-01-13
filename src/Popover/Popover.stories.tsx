import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Button } from "../Button";
import { Popover as OGPopover, PopoverProps, PopoverTitle } from "./";

export default {
  title: "Components/Popover",
  component: OGPopover,
} as Meta;

export const Popover: Story<PopoverProps> = ({ element, ...args }) => {
  return (
    <>
      <div className="section base-margin-top dbl-margin-bottom">
        <h3 className="display-5">Popover (Using FloatingUI)</h3>
        <div className="row">
          <div className="col text-center">
            <OGPopover element={<Button>Click me!</Button>} {...args}>
              <PopoverTitle>Popover title!</PopoverTitle>
              <div>And body here!</div>
            </OGPopover>
          </div>
        </div>
      </div>
    </>
  );
};

Popover.parameters = {};

Popover.args = {
  placement: "top",
};

Popover.argTypes = {};
