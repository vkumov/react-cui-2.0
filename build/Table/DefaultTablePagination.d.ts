import { FC, ReactNode } from "react";
declare type DefaultTablePaginationProps = {
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
export declare const DefaultTablePagination: FC<DefaultTablePaginationProps>;
export {};
