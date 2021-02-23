import React from "react";

export const decorators = [
  (Story) => (
    <div className="cui" style={{ overflow: "visible" }}>
      <div className="base-margin">
        <Story />
      </div>
    </div>
  ),
];
