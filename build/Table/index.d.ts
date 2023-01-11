import React, { HTMLProps, FC, ReactNode } from 'react';

type GenericTableProps = {
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
declare const GenericTable: FC<GenericTableProps>;

type DefaultTablePaginationProps = {
    total: number;
    position: number;
    onPageChange: (e: any, position: number) => void;
    onPerPageChange: (value: number) => void;
    perPageUp?: boolean;
    paginationProps?: {
        size?: "small" | "default" | "large";
        rounded?: boolean;
        icons?: boolean;
        next?: ReactNode;
        prev?: ReactNode;
        firstAndLast?: boolean;
    };
};
declare const DefaultTablePagination: FC<DefaultTablePaginationProps>;

type PaginationLocation = "top-left" | "bottom-left" | "bottom-right" | "top-right";
type TableProps = {
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
} & GenericTableProps;
declare const Table: FC<TableProps>;

export { DefaultTablePagination, GenericTable, GenericTableProps, Table };
