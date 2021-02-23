import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Alert, AlertProps } from "./index";

export default {
  title: "Alert",
  component: Alert,
} as Meta;
export const Primary: Story<AlertProps & { text?: string }> = ({
  text,
  ...args
}) => {
  return (
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Alert</h3>
      <Alert {...args}>{text}</Alert>
    </div>
  );
};

Primary.args = {
  text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida posuere tellus, eu congue nunc.",
};
