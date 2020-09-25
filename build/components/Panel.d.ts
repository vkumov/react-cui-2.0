import React, { FC } from "react";
declare type Borders = "top" | "right" | "left" | "bottom";
interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
    color: "plain" | "primary" | "secondary" | "tertiary" | "success" | "info" | "warning-alt" | "warning" | "danger" | "dark" | "light";
    padding: "none" | "compressed" | "default" | "loose";
    bordered: boolean | Borders | Borders[];
    raised: boolean;
    well: boolean;
    className: string;
}
export declare const Panel: FC<PanelProps>;
export {};
