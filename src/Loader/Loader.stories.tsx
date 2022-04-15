import React from "react";
import { Dots, Spinner, DotsColor } from "./index";

export default {
  title: "Loader",
};

const colors: DotsColor[] = [
  "primary",
  "secondary",
  "tertiary",
  "success",
  "info",
  "warning",
  "warning-alt",
  "danger",
  "dark",
  "light",
];

export const Primary = () => (
  <>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Spinner</h3>
      <div className="row">
        <div className="col-2">
          <div className="subheader">Small</div>
          <Spinner size="small" />
        </div>
        <div className="col-2">
          <div className="subheader">Default</div>
          <Spinner />
        </div>
        <div className="col-2">
          <div className="subheader">Large</div>
          <Spinner size="large" />
        </div>
      </div>
    </div>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Dots</h3>
      <div className="row">
        {colors.map((clr) => (
          <div className="col-2" key={clr}>
            <div className="subheader">{clr}</div>
            <Dots color={clr} />
          </div>
        ))}
      </div>
    </div>
  </>
);
