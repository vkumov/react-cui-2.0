import React, { FC, ReactNode } from "react";
declare type PaginationLocation = "top-left" | "bottom-left" | "bottom-right" | "top-right";
declare type TableProps = {
    pagination?: FC<any> | React.ComponentClass<any> | string;
    paginationLocation?: PaginationLocation;
    paginationProps?: {
        size?: "small" | "default" | "large";
        rounded?: boolean;
        icons?: boolean;
        next?: ReactNode;
        prev?: ReactNode;
        firstAndLast?: boolean;
    };
    data?: any[][];
    children?: ReactNode;
    start?: number;
};
declare const Table: FC<TableProps>;
export default Table;
