import React, { ReactNode } from "react";
import { SliderProps as RCSliderProps } from "rc-slider";
import type { SliderRef } from "rc-slider/lib/Slider";
import "../../css/rc-slider.css";
export type SliderProps = RCSliderProps & {
    label?: ReactNode;
};
export declare const Slider: React.ForwardRefExoticComponent<RCSliderProps<number | number[]> & {
    label?: ReactNode;
} & React.RefAttributes<SliderRef>>;
