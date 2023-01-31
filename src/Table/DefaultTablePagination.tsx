import React, { FC, ReactNode } from "react";

import { Dropdown, MenuElement } from "src/Dropdown";
import { Pagination } from "src/Pagination";

type DefaultTablePaginationProps = {
  total: number;
  position: number;
  onPageChange: (e, position: number) => void;
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

export const DefaultTablePagination: FC<DefaultTablePaginationProps> = ({
  perPageUp = false,
  paginationProps = {},
  total,
  position,
  onPageChange,
  onPerPageChange,
}) => {
  const [perPage, setPerPage] = React.useState<number>(50);

  React.useEffect(() => {
    if (typeof onPerPageChange === "function") onPerPageChange(perPage);
  }, [perPage, onPerPageChange]);

  return (
    <div className="flex-middle">
      <span className="qtr-margin-right">Page:</span>
      <Pagination
        firstAndLast
        icons
        perPage={perPage}
        total={total}
        position={position}
        onPageChange={onPageChange}
        beginAt={0}
        className="no-margin-top"
        {...paginationProps}
      />
      <span className="text-muted qtr-margin-left qtr-margin-right">|</span>
      <span className="qtr-margin-right">Per page:</span>
      <Dropdown
        label={<a>{perPage}</a>}
        alwaysClose
        placement={perPageUp ? "top" : undefined}
      >
        {[10, 25, 50, 100, 250, 500].map((v) => (
          <MenuElement
            onClick={() => setPerPage(v)}
            key={v}
            selected={v === perPage}
          >
            {v}
          </MenuElement>
        ))}
      </Dropdown>
    </div>
  );
};
