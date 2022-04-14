import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Slider, SliderProps } from "./index";

export default {
  title: "Slider",
  component: Slider,
} as Meta;

const defaultMarks: SliderProps["marks"] = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 };

export const Primary: Story<SliderProps> = (props): JSX.Element => (
  <>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Slider</h3>
      <div className="row">
        <div className="col">
          <div className="subheader">Basic</div>
          <Slider {...props} />
        </div>
      </div>
    </div>
  </>
);

Primary.args = {
  dots: true,
  max: 5,
  min: 1,
  marks: defaultMarks,
  label: "Some slider label",
};
