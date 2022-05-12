import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Switch as LibSwitch } from "./index";

export default {
  title: "Components/Switch",
  component: LibSwitch,
} as Meta;

export const Switch: Story = () => {
  return (
    <>
      <div className="section base-margin-top dbl-margin-bottom">
        <h3 className="display-5">Layout</h3>
        <div className="row">
          <div className="col">
            <div className="subheader">Stacked (default)</div>
            <LibSwitch right="One" />
            <LibSwitch right="Two" />
            <LibSwitch right="Three" />
          </div>
          <div className="col">
            <div className="subheader">Inline</div>
            <LibSwitch right="One" inline />
            <LibSwitch right="Two" inline />
            <LibSwitch right="Three" inline />
          </div>
        </div>
      </div>
      <div className="section base-margin-top dbl-margin-bottom">
        <h3 className="display-5">Labels</h3>
        <LibSwitch left="Left" />
        <LibSwitch right="Right" />
        <LibSwitch left="Both" right="Both" />
      </div>
    </>
  );
};
