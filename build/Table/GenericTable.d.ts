import { type FC, type HTMLProps } from "react";
export type GenericTableProps = {
    outerWrap?: boolean;
    lined?: boolean;
    bordered?: boolean;
    striped?: boolean;
    selectable?: boolean;
    fixed?: boolean;
    wrapped?: boolean;
    compressed?: boolean;
    loose?: boolean;
} & Partial<HTMLProps<HTMLTableElement>>;
export declare const GenericTable: FC<GenericTableProps>;
