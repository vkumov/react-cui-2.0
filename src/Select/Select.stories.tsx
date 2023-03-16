import React from "react";
import { Meta } from "@storybook/react";

import { EditableSelect } from "./index";

export default {
  title: "Components/Select",
  parameters: {
    docs: {
      source: {
        language: "tsx",
        excludeDecorators: true,
      },
    },
  },
  component: EditableSelect,
} as Meta<typeof EditableSelect>;

export const Default = () => {
  return (
    <>
      <div className="section base-margin-top dbl-margin-bottom">
        <h3 className="display-5">Editable</h3>
        <div className="row">
          <div className="col">
            <div className="subheader">Not editable (default)</div>
            <EditableSelect title="Select one" onChange={(v) => console.log(v)}>
              <optgroup label="Group 1">
                <option value="Gr 1 - Value 1">Value 1</option>
                <option value="Gr 1 - Value 2">Value 2</option>
              </optgroup>
              <optgroup label="Group 2">
                <option value="Gr 2 - Value 1">Value 1</option>
                <option value="Gr 2 - Value 2">Value 2</option>
              </optgroup>
            </EditableSelect>
          </div>
          <div className="col">
            <div className="subheader">Editable</div>
            <EditableSelect
              title="Select 2"
              onChange={(v) => console.log(v)}
              editable
            >
              <optgroup label="Group 1">
                <option value="Gr 1 - Value 1">Value 1</option>
                <option value="Gr 1 - Value 2">Value 2</option>
              </optgroup>
              <optgroup label="Group 2">
                <option value="Gr 2 - Value 1">Value 1</option>
                <option value="Gr 2 - Value 2">Value 2</option>
              </optgroup>
            </EditableSelect>
          </div>
        </div>
      </div>
      <div className="section base-margin-top dbl-margin-bottom">
        <h3 className="display-5">Inline Layout</h3>
        <EditableSelect onChange={(v) => console.log(v)} inline>
          <optgroup label="Group 1">
            <option value="Gr 1 - Value 1">Value 1</option>
            <option value="Gr 1 - Value 2">Value 2</option>
          </optgroup>
          <optgroup label="Group 2">
            <option value="Gr 2 - Value 1">Value 1</option>
            <option value="Gr 2 - Value 2">Value 2</option>
          </optgroup>
        </EditableSelect>
        <EditableSelect onChange={(v) => console.log(v)} inline>
          <optgroup label="Group 1">
            <option value="Gr 1 - Value 1">Value 1</option>
            <option value="Gr 1 - Value 2">Value 2</option>
          </optgroup>
          <optgroup label="Group 2">
            <option value="Gr 2 - Value 1">Value 1</option>
            <option value="Gr 2 - Value 2">Value 2</option>
          </optgroup>
        </EditableSelect>
        <EditableSelect onChange={(v) => console.log(v)} inline multi>
          <optgroup label="Group 1">
            <option value="Gr 1 - Value 1">Value 1</option>
            <option value="Gr 1 - Value 2">Value 2</option>
          </optgroup>
          <optgroup label="Group 2">
            <option value="Gr 2 - Value 1">Value 1</option>
            <option value="Gr 2 - Value 2">Value 2</option>
          </optgroup>
        </EditableSelect>
      </div>
      <div className="section base-margin-top dbl-margin-bottom">
        <h3 className="display-5">Multi</h3>
        <div className="row">
          <div className="col">
            <div className="subheader">Not editable (default)</div>
            <EditableSelect
              onChange={(v) => console.log(v)}
              multi
              label="Select"
              onSelect={(v) => void console.log("Selected: ", v)}
              onDeselect={(v) => void console.log("Deselected: ", v)}
            >
              <optgroup label="Group 1">
                <option value="Gr 1 - Value 1">Value 1</option>
                <option value="Gr 1 - Value 2">Value 2</option>
              </optgroup>
              <optgroup label="Group 2">
                <option value="Gr 2 - Value 1">Value 1</option>
                <option value="Gr 2 - Value 2">Value 2</option>
              </optgroup>
            </EditableSelect>
          </div>
          <div className="col">
            <div className="subheader">Editable</div>
            <EditableSelect
              onChange={(v) => console.log(v)}
              multi
              editable
              label="Select"
            >
              <optgroup label="Group 1">
                <option value="Gr 1 - Value 1">Value 1</option>
                <option value="Gr 1 - Value 2">Value 2</option>
              </optgroup>
              <optgroup label="Group 2">
                <option value="Gr 2 - Value 1">Value 1</option>
                <option value="Gr 2 - Value 2">Value 2</option>
              </optgroup>
            </EditableSelect>
          </div>
        </div>
      </div>
    </>
  );
};
