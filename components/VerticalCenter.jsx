import React from "react";
import PropTypes from "prop-types";

const VerticalCenter = ({ children }) => (
  <div
    className="content-fluid"
    style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}
  >
    <main style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      {children}
    </main>
  </div>
);

VerticalCenter.propTypes = { children: PropTypes.node.isRequired };

export default VerticalCenter;
