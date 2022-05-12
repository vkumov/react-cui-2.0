import React from "react";
import { Dots as LibDots, Spinner as LibSpinner, DotsColor } from "./index";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Components/Loader",
} as Meta;

const colors: DotsColor[] = [
  "primary",
  "secondary",
  "tertiary",
  "success",
  "info",
  "warning",
  "warning-alt",
  "danger",
  "dark",
  "light",
];

export const Spinner: Story = () => (
  <>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Spinner</h3>
      <div className="row">
        <div className="col-2">
          <div className="subheader">Small</div>
          <LibSpinner size="small" />
        </div>
        <div className="col-2">
          <div className="subheader">Default</div>
          <LibSpinner />
        </div>
        <div className="col-2">
          <div className="subheader">Large</div>
          <LibSpinner size="large" />
        </div>
      </div>
    </div>
  </>
);

export const Dots: Story = () => (
  <>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Dots</h3>
      <div className="row">
        {colors.map((clr) => (
          <div className="col-2" key={clr}>
            <div className="subheader">{clr}</div>
            <LibDots color={clr} />
          </div>
        ))}
      </div>
    </div>
  </>
);
