import React from 'react';
import PropTypes from 'prop-types';
import { a as _extends } from '../../_rollupPluginBabelHelpers-b60338eb.js';
import '../../index-be24eb93.js';
import '../Conditional.js';
import { Dropdown } from '../Dropdown.js';
import { Pagination } from '../Pagination.js';

const DefaultTablePagination = ({
  total,
  position,
  onPageChange,
  onPerPageChange,
  perPageUp,
  paginationProps
}) => {
  const [perPage, setPerPage] = React.useState(50);
  React.useEffect(() => {
    if (typeof onPerPageChange === "function") onPerPageChange(perPage);
  }, [perPage, onPerPageChange]);
  return React.createElement("div", {
    className: "flex-middle"
  }, React.createElement("span", {
    className: "qtr-margin-right"
  }, "Page:"), React.createElement(Pagination, _extends({
    firstAndLast: true,
    icons: true,
    perPage: perPage,
    total: total,
    position: position,
    onPageChange: onPageChange,
    beginAt: 0,
    className: "no-margin-top"
  }, paginationProps)), React.createElement("span", {
    className: "text-muted qtr-margin-left qtr-margin-right"
  }, "|"), React.createElement("span", {
    className: "qtr-margin-right"
  }, "Per page:"), React.createElement(Dropdown, {
    type: "link",
    header: perPage,
    openTo: "left",
    alwaysClose: true,
    up: perPageUp
  }, [10, 25, 50, 100, 250, 500].map(v => React.createElement(Dropdown.Element, {
    onClick: () => setPerPage(v),
    key: v,
    selected: v === perPage
  }, v))));
};
DefaultTablePagination.propTypes = {
  total: PropTypes.number.isRequired,
  position: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onPerPageChange: PropTypes.func.isRequired,
  perPageUp: PropTypes.bool,
  paginationProps: PropTypes.exact({
    size: PropTypes.oneOf(["small", "default", "large"]),
    rounded: PropTypes.bool,
    icons: PropTypes.bool,
    next: PropTypes.node,
    prev: PropTypes.node,
    firstAndLast: PropTypes.bool
  })
};
DefaultTablePagination.defaultProps = {
  perPageUp: false,
  paginationProps: {}
};

export { DefaultTablePagination };
