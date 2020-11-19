import React, { FC } from "react";
declare type IconProps = {
    icon: string;
    size?: 10 | 12 | 14 | 16 | 18 | 20 | 24 | 28 | 32 | 36 | 48 | 64 | 96 | 128;
    className?: string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
declare const Icon: FC<IconProps>;
export { Icon };
