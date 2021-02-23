import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Dropzone, DropzoneProps } from "./index";

export default {
  title: "Dropzone",
  component: Dropzone,
} as Meta;

export const Primary: Story<DropzoneProps> = (args) => {
  return (
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Dropzone</h3>
      <Dropzone {...args} onChange={(v) => console.log(v)} />
    </div>
  );
};

Primary.args = {
  name: "dropzone",
  label: "Select files",
};
