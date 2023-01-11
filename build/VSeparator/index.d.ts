import { FC, HTMLProps } from 'react';

type VSeparatorProps = {
    size?: "small" | "large" | "huge" | "default";
    compressed?: boolean;
} & Omit<HTMLProps<HTMLDivElement>, "size">;
declare const VSeparator: FC<VSeparatorProps>;

export { VSeparator };
