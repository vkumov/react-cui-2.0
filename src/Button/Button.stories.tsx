import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Button as Btn, ButtonProps } from "./index";

export default {
  title: "Button",
  // component: Btn,
} as Meta;

export const Button: Story<ButtonProps> = (args) => (
  <div className="section base-margin-top dbl-margin-bottom">
    <h3 className="display-5">Button</h3>
    <Btn {...args}>
      {args.icon ? <span className="icon-check" /> : "Button"}
    </Btn>
  </div>
);

Button.args = {
  color: "primary",
  size: "default",
};
