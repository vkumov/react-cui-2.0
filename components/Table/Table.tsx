import React, { FC, forwardRef, ReactNode } from "react";

import { GenericTable, GenericTableProps } from "./GenericTable";
import { DefaultTablePagination } from "./DefaultTablePagination";
import { DisplayIf } from "../Conditional";

import { appendClass } from "../../utils";

const asArray = (v: unknown) => (Array.isArray(v) ? v : [v]);

type PaginationLocation =
  | "top-left"
  | "bottom-left"
  | "bottom-right"
  | "top-right";

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

const Table: FC<TableProps> = forwardRef<HTMLTableElement, TableProps>(
  (
    {
      pagination = DefaultTablePagination,
      paginationLocation = "bottom-right",
      paginationProps = {
        icons: true,
        firstAndLast: true,
      },
      data = null,
      children = null,
      start = 1,
      ...props
    },
    forwardedRef
  ) => {
    const [position, setPosition] = React.useState(
      typeof start === "number" ? start : 0
    );
    const [perPage, setPerPage] = React.useState(50);
    const tbody = React.useMemo(
      () =>
        children
          ? asArray(children).find((child) => child.type === "tbody")
          : null,
      [children]
    );
    const thead = React.useMemo(
      () =>
        children
          ? asArray(children).find((child) => child.type === "thead")
          : null,
      [children]
    );
    const total = React.useMemo(
      () => (data ? data.length : asArray(tbody.props.children).length) || 0,
      [data, tbody]
    );
    React.useEffect(() => setPosition(0), [data, tbody]);

    return (
      <>
        <DisplayIf condition={paginationLocation.includes("top-")}>
          <div
            className={`flex base-margin-bottom${appendClass(
              paginationLocation === "top-right",
              "flex-right"
            )}`}
          >
            {React.createElement(pagination, {
              total,
              position,
              onPageChange: (_, p) => setPosition(p),
              onPerPageChange: (p) => setPerPage(p),
              paginationProps,
            })}
          </div>
        </DisplayIf>
        <GenericTable {...props} ref={forwardedRef}>
          {thead}
          <tbody>
            {data
              ? data.slice(position, position + perPage).map((row, rid) => (
                  <tr key={rid}>
                    {row.map((col, cid) => (
                      <td key={cid}>{col}</td>
                    ))}
                  </tr>
                ))
              : asArray(tbody.props.children).slice(
                  position,
                  position + perPage
                )}
          </tbody>
        </GenericTable>
        <DisplayIf condition={paginationLocation.includes("bottom-")}>
          <div
            className={`flex base-margin-top${appendClass(
              paginationLocation === "bottom-right",
              "flex-right"
            )}`}
          >
            {React.createElement(pagination, {
              total,
              position,
              onPageChange: (_, p) => setPosition(p),
              onPerPageChange: (p) => setPerPage(p),
              perPageUp: true,
              paginationProps,
            })}
          </div>
        </DisplayIf>
      </>
    );
  }
);

export default Table;
