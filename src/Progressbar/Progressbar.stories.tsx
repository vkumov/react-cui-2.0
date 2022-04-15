import React from "react";
import { Progressbar, ProgressbarColor } from "./index";

export default {
  title: "Progressbar",
};

const colors: ProgressbarColor[] = [
  "primary",
  "secondary",
  "tertiary",
  "success",
  "info",
  "warning-alt",
  "warning",
  "danger",
  "dark",
];

export const Primary = () => (
  <>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Structure</h3>
      <div className="row">
        <div className="col">
          <div className="subheader">Basic</div>
          <Progressbar percentage={50} />
        </div>
        <div className="col">
          <div className="subheader">With label</div>
          <Progressbar percentage={50} withLabel />
        </div>
      </div>
    </div>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Size</h3>
      <div className="row">
        <div className="col">
          <div className="subheader">Small</div>
          <Progressbar percentage={50} size="small" withLabel />
        </div>
        <div className="col">
          <div className="subheader">Default</div>
          <Progressbar percentage={75} withLabel />
        </div>
        <div className="col">
          <div className="subheader">Large</div>
          <Progressbar percentage={25} size="large" withLabel />
        </div>
      </div>
    </div>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Color</h3>
      <div className="row">
        {colors.map((clr) => (
          <div className="col-3 base-margin-bottom" key={clr}>
            <div className="subheader">{clr}</div>
            <Progressbar color={clr} percentage={50} />
          </div>
        ))}
      </div>
    </div>
  </>
);
