import React, { FC, PropsWithChildren } from 'react';

interface DisplayNoSizeProps {
    as?: React.FunctionComponent<any> | React.ComponentClass<any> | string;
    className?: string;
}
interface DisplaySizeProps {
    size: 0 | 1 | 2 | 3 | 4;
}
declare const Display: FC<PropsWithChildren<DisplayNoSizeProps & DisplaySizeProps>>;
declare const Display0: FC<PropsWithChildren<DisplayNoSizeProps>>;
declare const Display1: FC<PropsWithChildren<DisplayNoSizeProps>>;
declare const Display2: FC<PropsWithChildren<DisplayNoSizeProps>>;
declare const Display3: FC<PropsWithChildren<DisplayNoSizeProps>>;
declare const Display4: FC<PropsWithChildren<DisplayNoSizeProps>>;

export { Display, Display0, Display1, Display2, Display3, Display4 };
