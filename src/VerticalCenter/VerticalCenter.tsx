import React, { FC } from "react";

export const VerticalCenter: FC = ({ children }) => (
  <div
    className="content-fluid"
    style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}
  >
    <main style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      {children}
    </main>
  </div>
);
