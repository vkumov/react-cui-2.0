import { type FC, type HTMLProps } from "react";

type VSeparatorProps = {
    size?: "small" | "large" | "huge" | "default";
    compressed?: boolean;
} & Omit<HTMLProps<HTMLDivElement>, "size">;
export declare const VSeparator: FC<VSeparatorProps>;
export {};
