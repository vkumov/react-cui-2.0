import React, { ChangeEvent, useCallback, useState } from "react";
import { GenericTable as GT } from "./index";
import { Checkbox } from "../Checkbox";

export default {
  title: "Table",
};

type TableOptions = {
  lined?: boolean;
  bordered?: boolean;
  striped?: boolean;
  selectable?: boolean;
  fixed?: boolean;
  wrapped?: boolean;
  compressed?: boolean;
  loose?: boolean;
};

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const GenericTable = () => {
  const [opts, setOpts] = useState<TableOptions>({});
  const updOpts = useCallback((name, value: boolean) => {
    setOpts((curr) => ({ ...curr, [name]: value }));
  }, []);

  return (
    <>
      <div className="section base-margin-top dbl-margin-bottom">
        <h3 className="display-5">Options</h3>
        {[
          "lined",
          "bordered",
          "striped",
          "selectable",
          "fixed",
          "wrapped",
          "compressed",
          "loose",
        ].map((opt) => (
          <Checkbox
            key={opt}
            checked={opts?.[opt] ?? false}
            inline
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              e.persist();
              updOpts(opt, e.target.checked);
            }}
          >
            {capitalize(opt)}
          </Checkbox>
        ))}
      </div>
      <div className="section base-margin-top dbl-margin-bottom">
        <h3 className="display-5">Table</h3>
        <GT {...opts}>
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
