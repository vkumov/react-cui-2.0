import { FC, HTMLProps } from "react";
import "../../css/v-separator.css";
type VSeparatorProps = {
    size?: "small" | "large" | "huge" | "default";
    compressed?: boolean;
} & Omit<HTMLProps<HTMLDivElement>, "size">;
export declare const VSeparator: FC<VSeparatorProps>;
export {};
