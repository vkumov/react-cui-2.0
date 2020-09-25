import React, { FC, ReactNode } from "react";
import PropTypes from "prop-types";

import { GenericTable } from "./GenericTable";
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
};

const Table: FC<TableProps> = ({
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
}) => {
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
      <GenericTable {...props}>
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
            : asArray(tbody.props.children).slice(position, position + perPage)}
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
};

const ALLOWED_TABLE_CHILD = ["thead", "tbody"];
const allowedChild = (type) => ALLOWED_TABLE_CHILD.includes(type);

Table.propTypes = {
  pagination: PropTypes.elementType,
  paginationLocation: PropTypes.oneOf([
    "top-left",
    "bottom-left",
    "bottom-right",
    "top-right",
  ]),
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any)),
  children: (props, propName, componentName) => {
    const { [propName]: t } = props;

    const err = new Error(
      `Invalid prop \`${propName}\` supplied to` +
        ` \`${componentName}\`. Validation failed, should be one of:` +
        ` ${ALLOWED_TABLE_CHILD.join(", ")}.`
    );
    if (Array.isArray(t)) {
      if (!t.every((ch) => allowedChild(ch.type))) return err;
    } else if (t && !allowedChild(t.type)) return err;
    return null;
  },
  start: PropTypes.number,
};
export default Table;
