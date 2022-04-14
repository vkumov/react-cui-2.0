import React, { FC } from "react";
interface DisplayNoSizeProps {
    as?: React.FunctionComponent<any> | React.ComponentClass<any> | string;
    className?: string;
}
interface DisplaySizeProps {
    size: 0 | 1 | 2 | 3 | 4;
}
export declare const Display: FC<DisplayNoSizeProps & DisplaySizeProps>;
export declare const Display0: FC<DisplayNoSizeProps>;
export declare const Display1: FC<DisplayNoSizeProps>;
export declare const Display2: FC<DisplayNoSizeProps>;
export declare const Display3: FC<DisplayNoSizeProps>;
export declare const Display4: FC<DisplayNoSizeProps>;
export {};
