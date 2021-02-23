import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Panel, PanelProps } from "./index";

export default {
  title: "Panel",
  component: Panel,
} as Meta;

export const Primary: Story<PanelProps & { content: string }> = ({
  content,
  ...args
}) => {
  return (
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Panel</h3>
      <Panel {...args}>{content}</Panel>
    </div>
  );
};

Primary.parameters = {};

Primary.args = {
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};
