import React from "react";
import PropTypes from "prop-types";

import { Pagination } from "../Pagination";
import { Dropdown } from "../Dropdown";

export const DefaultTablePagination = ({
  total,
  position,
  onPageChange,
  onPerPageChange
}) => {
  const [perPage, setPerPage] = React.useState(50);

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
      />
      <span className="text-muted qtr-margin-left qtr-margin-right">|</span>
      <span className="qtr-margin-right">Per page:</span>
      <Dropdown type="link" header={perPage} openTo="left">
        {[10, 25, 50, 100, 250, 500].map(v => (
          <Dropdown.Element
            onClick={() => setPerPage(v)}
            key={v}
            selected={v === perPage}
          >
            {v}
          </Dropdown.Element>
        ))}
      </Dropdown>
    </div>
  );
};

DefaultTablePagination.propTypes = {
  total: PropTypes.number.isRequired,
  position: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onPerPageChange: PropTypes.func.isRequired
};
