import React, { ComponentProps } from "react";
import { Progressbar as LibProgressbar, ProgressbarColor } from "./index";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Components/Progressbar",
  component: LibProgressbar,
} as Meta;

const colors: ProgressbarColor[] = [
  "primary",
  "secondary",
  "tertiary",
  "success",
  "info",
  "warning-alt",
  "warning",
  "danger",
  "dark",
];

export const Progressbar: Story<ComponentProps<typeof LibProgressbar>> = ({
  label,
  ...args
}) => (
  <>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Progressbar</h3>
      <div className="row">
        <div className="col">
          <div className="subheader">Basic</div>
          <LibProgressbar {...args} label={label ? `${label}` : ""} />
        </div>
      </div>
    </div>
  </>
);

Progressbar.args = {
  percentage: 50,
};

Progressbar.argTypes = {
  label: { type: "string", description: "Percentage if label not set" },
};
