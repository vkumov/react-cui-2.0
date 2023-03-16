import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { Checkbox } from "../Checkbox";
import { GenericTable } from "./index";

export default {
  title: "Components/Table",
  component: GenericTable,
  parameters: {
    docs: {
      source: {
        language: "tsx",
        excludeDecorators: true,
      },
    },
  },
} as Meta;

export const Default: StoryFn<typeof GenericTable> = (args) => {
  return (
    <GenericTable {...args}>
      <thead>
        <tr>
          <th>
            <Checkbox />
          </th>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3].map((row) => (
          <tr key={row}>
            <td>
              <Checkbox />
            </td>
            {[1, 2, 3].map((col) => (
              <td key={col}>
                Row {row}, column {col}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </GenericTable>
  );
};

Default.args = {
  lined: true,
  selectable: true,
  wrapped: true,
};
