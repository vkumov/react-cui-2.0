import React, { ReactNode, forwardRef } from "react";
import RCSlider, { SliderProps as RCSliderProps } from "rc-slider";
import type { SliderRef } from "rc-slider/lib/Slider";

import "../../css/rc-slider.css";
import { appendClass } from "src/utils";

export type SliderProps = RCSliderProps & { label?: ReactNode };

export const Slider = forwardRef<SliderRef, SliderProps>(
  ({ dots = true, label, className, ...props }, ref): JSX.Element => {
    return (
      <div className={`form-group${appendClass(className)}`}>
        <div className="form-group__text">
          {label && <label>{label}</label>}
          <div className="half-padding-left half-padding-right base-padding-bottom">
            <RCSlider dots={dots} {...props} ref={ref} />
          </div>
        </div>
      </div>
    );
  }
);
