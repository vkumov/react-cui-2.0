import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Input } from "./index";

export default {
  title: "Components/Textfield/Prefixed",
  component: Input,
} as Meta;

export const Prefixed: Story = () => (
  <div className="section base-margin-top dbl-margin-bottom">
    <h3 className="display-5">Prefixed</h3>
    <Input label="URL" prefix="http://" placeholder="mysite.com" />
  </div>
);

Prefixed.parameters = {
  docs: {
    source: {
      code: `<Input label="URL" prefix="http://" placeholder="mysite.com" />`,
      language: "tsx",
    },
  },
};
