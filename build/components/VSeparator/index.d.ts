import { FC, HTMLProps } from "react";
import "../../css/v-separator.css";
declare type VSeparatorProps = {
    size?: "small" | "large" | "huge" | "default";
    compressed?: boolean;
} & Omit<HTMLProps<HTMLDivElement>, "size">;
declare const VSeparator: FC<VSeparatorProps>;
export { VSeparator };
