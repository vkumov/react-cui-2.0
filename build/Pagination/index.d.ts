import { ReactNode, FC } from 'react';

type PaginationProps = {
    size?: "small" | "default" | "large";
    rounded?: boolean;
    icons?: boolean;
    next?: ReactNode;
    prev?: ReactNode;
    position: number;
    perPage?: number;
    total: number;
    onPageChange: (e: any, position: number) => void;
    firstAndLast?: boolean;
    beginAt?: number;
    className?: string;
};
declare const Pagination: FC<PaginationProps>;

export { Pagination, PaginationProps };
