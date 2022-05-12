import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { GenericTable as GT } from "./index";
import { Checkbox } from "../Checkbox";

export default {
  title: "Components/Table",
  component: GT,
} as Meta;

export const Table: Story<ComponentProps<typeof GT>> = (args) => {
  return (
    <>
      <div className="section base-margin-top dbl-margin-bottom">
        <h3 className="display-5">Table</h3>
        <GT {...args}>
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
        </GT>
      </div>
    </>
  );
};

Table.args = {
  lined: true,
  selectable: true,
  wrapped: true,
};
