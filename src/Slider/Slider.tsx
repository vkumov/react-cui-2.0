import React, { forwardRef, type ReactNode } from "react";
import cx from "classnames";
import RCSlider, { type SliderProps as RCSliderProps } from "rc-slider";
import type { SliderRef } from "rc-slider/lib/Slider";

import "../../css/rc-slider.css";

export type SliderProps = RCSliderProps & { label?: ReactNode };

export const Slider = forwardRef<SliderRef, SliderProps>(
  ({ dots = true, label, className, ...props }, ref) => (
    <div className={cx("form-group", className)}>
      <div className="form-group__text">
        {label && <label>{label}</label>}
        <div className="half-padding-left half-padding-right base-padding-bottom">
          <RCSlider dots={dots} {...props} ref={ref} />
        </div>
      </div>
    </div>
  )
);
