import { FC, HTMLProps } from "react";

type Borders = "top" | "right" | "left" | "bottom";
export interface PanelProps {
    color?: "plain" | "primary" | "secondary" | "tertiary" | "success" | "info" | "warning-alt" | "warning" | "danger" | "dark" | "light" | "lightest";
    padding?: "none" | "compressed" | "default" | "loose";
    bordered?: boolean | Borders | Borders[];
    raised?: boolean;
    well?: boolean;
    className?: string;
}
export declare const Panel: FC<PanelProps & HTMLProps<HTMLDivElement>>;
export {};
