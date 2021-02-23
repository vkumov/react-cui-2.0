import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ButtonGroup as BG, ButtonGroupProps, Button } from "./index";

export default {
  title: "Button/Button Group",
  component: BG,
} as Meta;

export const ButtonGroup: Story<ButtonGroupProps> = (args) => (
  <>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Button Group</h3>
      <BG {...args}>
        <Button.Ghost className="text-nowrap">Button 1</Button.Ghost>
        <Button.Ghost className="text-nowrap">Button 2</Button.Ghost>
        <Button.Ghost disabled className="text-nowrap">
          Button 3
        </Button.Ghost>
      </BG>
    </div>
  </>
);

ButtonGroup.parameters = {};

ButtonGroup.args = {
  square: false,
  withDivider: false,
  className: "",
};
