import React from "react";
import PropTypes from "prop-types";

import { GenericTable } from "./GenericTable";
import { DefaultTablePagination } from "./DefaultTablePagination";
import { DisplayIf } from "../Conditional";

import { appendClass } from "../../utils";

const asArray = v => (Array.isArray(v) ? v : [v]);

const PAGINATION_LOCATION = [
  "top-left",
  "bottom-left",
  "bottom-right",
  "top-right"
];

const Table = ({
  pagination,
  paginationLocation,
  data,
  children,
  start,
  ...props
}) => {
  const [position, setPosition] = React.useState(
    typeof start === "number" ? start : 0
  );
  const [perPage, setPerPage] = React.useState(50);
  const tbody = React.useMemo(
    () =>
      children ? asArray(children).find(child => child.type === "tbody") : null,
    [children]
  );
  const thead = React.useMemo(
    () =>
      children
        ? asArray(children).find(child => child.type === "theady")
        : null,
    [children]
  );
  const total = React.useMemo(
    () => (data ? data.length : tbody.props.children.length),
    [data, tbody]
  );

  return (
    <>
      <DisplayIf condition={paginationLocation.includes("top-")}>
        <div
          className={`flex${appendClass(
            paginationLocation === "top-right",
            "flex-right"
          )}`}
        >
          {React.createElement(pagination, {
            total,
            position,
            onPageChange: (_, p) => setPosition(p),
            onPerPageChange: p => setPerPage(p)
          })}
        </div>
      </DisplayIf>
      <GenericTable {...props}>
        {thead}
        {data
          ? data.slice(position, position + perPage).map((row, rid) => (
              <tr key={rid}>
                {row.map((col, cid) => (
                  <td key={cid}>{col}</td>
                ))}
              </tr>
            ))
          : asArray(tbody.props.children).slice(position, position + perPage)}
      </GenericTable>
      <DisplayIf condition={paginationLocation.includes("bottom-")}>
        <div
          className={`flex${appendClass(
            paginationLocation === "bottom-right",
            "flex-right"
          )}`}
        >
          {React.createElement(pagination, {
            total,
            position,
            onPageChange: (_, p) => setPosition(p),
            onPerPageChange: p => setPerPage(p)
          })}
        </div>
      </DisplayIf>
    </>
  );
};

const ALLOWED_TABLE_CHILD = ["thead", "tbody"];
const allowedChild = type => ALLOWED_TABLE_CHILD.includes(type);

Table.propTypes = {
  pagination: PropTypes.elementType,
  paginationLocation: PropTypes.oneOf(PAGINATION_LOCATION),
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any)),
  children: (props, propName, componentName) => {
    const { [propName]: t } = props;

    const err = new Error(
      `Invalid prop \`${propName}\` supplied to` +
        ` \`${componentName}\`. Validation failed, should be one of:` +
        ` ${ALLOWED_TABLE_CHILD.join(", ")}.`
    );
    if (Array.isArray(t)) {
      if (!t.every(ch => allowedChild(ch.type))) return err;
    } else if (t && !allowedChild(t.type)) return err;
    return null;
  },
  start: PropTypes.number
};

Table.defaultProps = {
  pagination: DefaultTablePagination,
  paginationLocation: "bottom-right",
  data: null,
  children: null,
  start: 1
};

export default Table;
