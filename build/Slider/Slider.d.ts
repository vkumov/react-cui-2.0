import React, { type ReactNode } from "react";
import { type SliderProps as RCSliderProps } from "rc-slider";
import type { SliderRef } from "rc-slider/lib/Slider";

export type SliderProps = RCSliderProps & {
    label?: ReactNode;
};
export declare const Slider: React.ForwardRefExoticComponent<RCSliderProps<number | number[]> & {
    label?: ReactNode;
} & React.RefAttributes<SliderRef>>;
