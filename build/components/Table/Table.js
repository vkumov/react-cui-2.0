import React from 'react';
import PropTypes from 'prop-types';
import { _ as _objectWithoutProperties } from '../../_rollupPluginBabelHelpers-b60338eb.js';
import { a as appendClass } from '../../index-be24eb93.js';
import { DisplayIf } from '../Conditional.js';
import '../Dropdown.js';
import '../Pagination.js';
import { DefaultTablePagination } from './DefaultTablePagination.js';
import { GenericTable } from './GenericTable.js';

const asArray = v => Array.isArray(v) ? v : [v];

const PAGINATION_LOCATION = ["top-left", "bottom-left", "bottom-right", "top-right"];

const Table = (_ref) => {
  let {
    pagination,
    paginationLocation,
    paginationProps,
    data,
    children,
    start
  } = _ref,
      props = _objectWithoutProperties(_ref, ["pagination", "paginationLocation", "paginationProps", "data", "children", "start"]);

  const [position, setPosition] = React.useState(typeof start === "number" ? start : 0);
  const [perPage, setPerPage] = React.useState(50);
  const tbody = React.useMemo(() => children ? asArray(children).find(child => child.type === "tbody") : null, [children]);
  const thead = React.useMemo(() => children ? asArray(children).find(child => child.type === "thead") : null, [children]);
  const total = React.useMemo(() => (data ? data.length : asArray(tbody.props.children).length) || 0, [data, tbody]);
  React.useEffect(() => setPosition(0), [data, tbody]);
  return React.createElement(React.Fragment, null, React.createElement(DisplayIf, {
    condition: paginationLocation.includes("top-")
  }, React.createElement("div", {
    className: `flex base-margin-bottom${appendClass(paginationLocation === "top-right", "flex-right")}`
  }, React.createElement(pagination, {
    total,
    position,
    onPageChange: (_, p) => setPosition(p),
    onPerPageChange: p => setPerPage(p),
    paginationProps
  }))), React.createElement(GenericTable, props, thead, React.createElement("tbody", null, data ? data.slice(position, position + perPage).map((row, rid) => React.createElement("tr", {
    key: rid
  }, row.map((col, cid) => React.createElement("td", {
    key: cid
  }, col)))) : asArray(tbody.props.children).slice(position, position + perPage))), React.createElement(DisplayIf, {
    condition: paginationLocation.includes("bottom-")
  }, React.createElement("div", {
    className: `flex base-margin-top${appendClass(paginationLocation === "bottom-right", "flex-right")}`
  }, React.createElement(pagination, {
    total,
    position,
    onPageChange: (_, p) => setPosition(p),
    onPerPageChange: p => setPerPage(p),
    perPageUp: true,
    paginationProps
  }))));
};

const ALLOWED_TABLE_CHILD = ["thead", "tbody"];

const allowedChild = type => ALLOWED_TABLE_CHILD.includes(type);

Table.propTypes = {
  pagination: PropTypes.elementType,
  paginationLocation: PropTypes.oneOf(PAGINATION_LOCATION),
  paginationProps: PropTypes.exact({
    size: PropTypes.oneOf(["small", "default", "large"]),
    rounded: PropTypes.bool,
    icons: PropTypes.bool,
    next: PropTypes.node,
    prev: PropTypes.node,
    firstAndLast: PropTypes.bool
  }),
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any)),
  children: (props, propName, componentName) => {
    const {
      [propName]: t
    } = props;
    const err = new Error(`Invalid prop \`${propName}\` supplied to` + ` \`${componentName}\`. Validation failed, should be one of:` + ` ${ALLOWED_TABLE_CHILD.join(", ")}.`);

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
  paginationProps: {
    icons: true,
    firstAndLast: true
  },
  data: null,
  children: null,
  start: 1
};

export default Table;
