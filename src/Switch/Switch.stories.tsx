import React from "react";
import { Switch } from "./index";

export default {
  title: "Switch",
};

export const Primary = () => {
  return (
    <>
      <div className="section base-margin-top dbl-margin-bottom">
        <h3 className="display-5">Layout</h3>
        <div className="row">
          <div className="col">
            <div className="subheader">Stacked (default)</div>
            <Switch right="One" />
            <Switch right="Two" />
            <Switch right="Three" />
          </div>
          <div className="col">
            <div className="subheader">Inline</div>
            <Switch right="One" inline />
            <Switch right="Two" inline />
            <Switch right="Three" inline />
          </div>
        </div>
      </div>
      <div className="section base-margin-top dbl-margin-bottom">
        <h3 className="display-5">Labels</h3>
        <Switch left="Left" />
        <Switch right="Right" />
        <Switch left="Both" right="Both" />
      </div>
    </>
  );
};
