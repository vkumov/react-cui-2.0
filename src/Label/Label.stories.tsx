import React from "react";
import { Label as LibLabel, LabelColor } from "./index";

export default {
  title: "Components/Label",
  component: LibLabel,
};

const colors: LabelColor[] = [
  "primary",
  "secondary",
  "tertiary",
  "success",
  "info",
  "warning-alt",
  "warning",
  "danger",
  "dark",
  "light",
];

export const Label = () => (
  <>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Size</h3>
      <LibLabel size="tiny">tiny</LibLabel>&nbsp;
      <LibLabel size="small">small</LibLabel>&nbsp;
      <LibLabel>default</LibLabel>&nbsp;
      <LibLabel size="large">large</LibLabel>
    </div>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Color</h3>
      {colors.map((clr) => (
        <LibLabel key={clr} color={clr} className="qtr-margin-right">
          {clr}
        </LibLabel>
      ))}
    </div>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Bordered</h3>
      {colors.map((clr) => (
        <LibLabel key={clr} color={clr} className="qtr-margin-right" bordered>
          {clr}
        </LibLabel>
      ))}
    </div>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Raised</h3>
      {colors.map((clr) => (
        <LibLabel key={clr} color={clr} className="qtr-margin-right" raised>
          {clr}
        </LibLabel>
      ))}
    </div>
  </>
);
