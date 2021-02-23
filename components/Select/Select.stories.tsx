import React from "react";
import { EditableSelect as ES } from "./index";

export default {
  title: "Select",
};

export const Primary = () => (
  <>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Editable</h3>
      <div className="row">
        <div className="col">
          <div className="subheader">Not editable (default)</div>
          <ES title="Select one" onChange={(v) => console.log(v)}>
            <optgroup label="Group 1">
              <option value="Gr 1 - Value 1">Value 1</option>
              <option value="Gr 1 - Value 2">Value 2</option>
            </optgroup>
            <optgroup label="Group 2">
              <option value="Gr 2 - Value 1">Value 1</option>
              <option value="Gr 2 - Value 2">Value 2</option>
            </optgroup>
          </ES>
        </div>
        <div className="col">
          <div className="subheader">Editable</div>
          <ES title="Select 2" onChange={(v) => console.log(v)} editable>
            <optgroup label="Group 1">
              <option value="Gr 1 - Value 1">Value 1</option>
              <option value="Gr 1 - Value 2">Value 2</option>
            </optgroup>
            <optgroup label="Group 2">
              <option value="Gr 2 - Value 1">Value 1</option>
              <option value="Gr 2 - Value 2">Value 2</option>
            </optgroup>
          </ES>
        </div>
      </div>
    </div>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Inline Layout</h3>
      <ES onChange={(v) => console.log(v)} inline>
        <optgroup label="Group 1">
          <option value="Gr 1 - Value 1">Value 1</option>
          <option value="Gr 1 - Value 2">Value 2</option>
        </optgroup>
        <optgroup label="Group 2">
          <option value="Gr 2 - Value 1">Value 1</option>
          <option value="Gr 2 - Value 2">Value 2</option>
        </optgroup>
      </ES>
      <ES onChange={(v) => console.log(v)} inline>
        <optgroup label="Group 1">
          <option value="Gr 1 - Value 1">Value 1</option>
          <option value="Gr 1 - Value 2">Value 2</option>
        </optgroup>
        <optgroup label="Group 2">
          <option value="Gr 2 - Value 1">Value 1</option>
          <option value="Gr 2 - Value 2">Value 2</option>
        </optgroup>
      </ES>
      <ES onChange={(v) => console.log(v)} inline>
        <optgroup label="Group 1">
          <option value="Gr 1 - Value 1">Value 1</option>
          <option value="Gr 1 - Value 2">Value 2</option>
        </optgroup>
        <optgroup label="Group 2">
          <option value="Gr 2 - Value 1">Value 1</option>
          <option value="Gr 2 - Value 2">Value 2</option>
        </optgroup>
      </ES>
    </div>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Multi</h3>
      <div className="row">
        <div className="col">
          <div className="subheader">Not editable (default)</div>
          <ES onChange={(v) => console.log(v)} multi>
            <optgroup label="Group 1">
              <option value="Gr 1 - Value 1">Value 1</option>
              <option value="Gr 1 - Value 2">Value 2</option>
            </optgroup>
            <optgroup label="Group 2">
              <option value="Gr 2 - Value 1">Value 1</option>
              <option value="Gr 2 - Value 2">Value 2</option>
            </optgroup>
          </ES>
        </div>
        <div className="col">
          <div className="subheader">Editable</div>
          <ES onChange={(v) => console.log(v)} multi editable>
            <optgroup label="Group 1">
              <option value="Gr 1 - Value 1">Value 1</option>
              <option value="Gr 1 - Value 2">Value 2</option>
            </optgroup>
            <optgroup label="Group 2">
              <option value="Gr 2 - Value 1">Value 1</option>
              <option value="Gr 2 - Value 2">Value 2</option>
            </optgroup>
          </ES>
        </div>
      </div>
    </div>
  </>
);
