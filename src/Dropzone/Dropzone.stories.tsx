import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Dropzone as LibDropzone, DropzoneProps } from "./index";

export default {
  title: "Components/Dropzone",
  component: LibDropzone,
} as Meta;

export const Dropzone: Story<DropzoneProps> = (args) => {
  return (
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Dropzone</h3>
      <LibDropzone {...args} onChange={(v) => console.log(v)} />
    </div>
  );
};

Dropzone.args = {
  name: "dropzone",
  label: "Select files",
};
