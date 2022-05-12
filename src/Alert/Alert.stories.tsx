import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Alert as LibAlert, AlertProps } from "./index";

export default {
  title: "Components/Alert",
  component: LibAlert,
} as Meta;

export const Alert: Story<AlertProps & { text?: string }> = ({
  text,
  ...args
}) => {
  return (
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Alert</h3>
      <LibAlert {...args}>{text}</LibAlert>
    </div>
  );
};

Alert.args = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida posuere tellus, eu congue nunc.",
};
