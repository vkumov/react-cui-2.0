import React from "react";
import { Step, Steps as LibSteps } from "./index";

export default {
  title: "Components/Steps",
  component: LibSteps,
};

export const Steps = () => (
  <>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">State</h3>
      <LibSteps>
        <Step icon={<span className="icon-check" />} visited>
          Visited
        </Step>
        <Step icon="2" active>
          Active
        </Step>
        <Step icon="3">Inactive</Step>
      </LibSteps>
    </div>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Color</h3>
      <div className="row">
        <div className="col">
          <div className="subheader text-center">Primary</div>
          <LibSteps color="primary">
            <Step icon={<span className="icon-check" />} visited>
              Visited
            </Step>
            <Step icon="2" active>
              Active
            </Step>
            <Step icon="3">Inactive</Step>
          </LibSteps>
        </div>
        <div className="col">
          <div className="subheader text-center">Secondary</div>
          <LibSteps color="secondary">
            <Step icon={<span className="icon-check" />} visited>
              Visited
            </Step>
            <Step icon="2" active>
              Active
            </Step>
            <Step icon="3">Inactive</Step>
          </LibSteps>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="subheader text-center">Success</div>
          <LibSteps color="success">
            <Step icon={<span className="icon-check" />} visited>
              Visited
            </Step>
            <Step icon="2" active>
              Active
            </Step>
            <Step icon="3">Inactive</Step>
          </LibSteps>
        </div>
        <div className="col">
          <div className="subheader text-center">Dark</div>
          <LibSteps color="dark">
            <Step icon={<span className="icon-check" />} visited>
              Visited
            </Step>
            <Step icon="2" active>
              Active
            </Step>
            <Step icon="3">Inactive</Step>
          </LibSteps>
        </div>
      </div>
    </div>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Orientation</h3>
      <div className="row">
        <div className="col">
          <div className="subheader text-center">Default</div>
          <LibSteps color="primary">
            <Step icon={<span className="icon-check" />} visited>
              Visited
            </Step>
            <Step icon="2" active>
              Active
            </Step>
            <Step icon="3">Inactive</Step>
          </LibSteps>
        </div>
        <div className="col">
          <div className="subheader text-center">Vertical</div>
          <LibSteps color="primary" vertical>
            <Step icon={<span className="icon-check" />} visited>
              Visited
            </Step>
            <Step icon="2" active>
              Active
            </Step>
            <Step icon="3">Inactive</Step>
          </LibSteps>
        </div>
      </div>
    </div>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Consequative</h3>
      <LibSteps color="primary">
        {[1, 2, 3, 4, null, 5].map((i) =>
          i ? <Step key={i}>Step {i}</Step> : i
        )}
      </LibSteps>
    </div>
  </>
);
