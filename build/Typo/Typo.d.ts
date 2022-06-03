import React, { FC, PropsWithChildren } from "react";
interface DisplayNoSizeProps {
    as?: React.FunctionComponent<any> | React.ComponentClass<any> | string;
    className?: string;
}
interface DisplaySizeProps {
    size: 0 | 1 | 2 | 3 | 4;
}
export declare const Display: FC<PropsWithChildren<DisplayNoSizeProps & DisplaySizeProps>>;
export declare const Display0: FC<PropsWithChildren<DisplayNoSizeProps>>;
export declare const Display1: FC<PropsWithChildren<DisplayNoSizeProps>>;
export declare const Display2: FC<PropsWithChildren<DisplayNoSizeProps>>;
export declare const Display3: FC<PropsWithChildren<DisplayNoSizeProps>>;
export declare const Display4: FC<PropsWithChildren<DisplayNoSizeProps>>;
export {};
