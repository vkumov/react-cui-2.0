import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Slider as LibSlider, SliderProps } from "./index";

export default {
  title: "Components/Slider",
  component: LibSlider,
} as Meta;

const defaultMarks: SliderProps["marks"] = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 };

export const Slider: Story<SliderProps> = (props): JSX.Element => (
  <>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Slider</h3>
      <div className="row">
        <div className="col">
          <div className="subheader">Basic</div>
          <LibSlider {...props} />
        </div>
      </div>
    </div>
  </>
);

Slider.args = {
  dots: true,
  max: 5,
  min: 1,
  marks: defaultMarks,
  label: "Some slider label",
};
