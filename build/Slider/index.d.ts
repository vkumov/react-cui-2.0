import React, { ReactNode } from 'react';
import { SliderProps as SliderProps$1 } from 'rc-slider';
import { SliderRef } from 'rc-slider/lib/Slider';

type SliderProps = SliderProps$1 & {
    label?: ReactNode;
};
declare const Slider: React.ForwardRefExoticComponent<SliderProps$1<number | number[]> & {
    label?: ReactNode;
} & React.RefAttributes<SliderRef>>;

export { Slider, SliderProps };
