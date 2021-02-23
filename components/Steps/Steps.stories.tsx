import React from "react";
import { Step, Steps } from "./index";

export default {
  title: "Steps",
};

export const Primary = () => (
  <>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">State</h3>
      <Steps>
        <Step icon={<span className="icon-check" />} visited>
          Visited
        </Step>
        <Step icon="2" active>
          Active
        </Step>
        <Step icon="3">Inactive</Step>
      </Steps>
    </div>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Color</h3>
      <div className="row">
        <div className="col">
          <div className="subheader text-center">Primary</div>
          <Steps color="primary">
            <Step icon={<span className="icon-check" />} visited>
              Visited
            </Step>
            <Step icon="2" active>
              Active
            </Step>
            <Step icon="3">Inactive</Step>
          </Steps>
        </div>
        <div className="col">
          <div className="subheader text-center">Secondary</div>
          <Steps color="secondary">
            <Step icon={<span className="icon-check" />} visited>
              Visited
            </Step>
            <Step icon="2" active>
              Active
            </Step>
            <Step icon="3">Inactive</Step>
          </Steps>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="subheader text-center">Success</div>
          <Steps color="success">
            <Step icon={<span className="icon-check" />} visited>
              Visited
            </Step>
            <Step icon="2" active>
              Active
            </Step>
            <Step icon="3">Inactive</Step>
          </Steps>
        </div>
        <div className="col">
          <div className="subheader text-center">Dark</div>
          <Steps color="dark">
            <Step icon={<span className="icon-check" />} visited>
              Visited
            </Step>
            <Step icon="2" active>
              Active
            </Step>
            <Step icon="3">Inactive</Step>
          </Steps>
        </div>
      </div>
    </div>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Orientation</h3>
      <div className="row">
        <div className="col">
          <div className="subheader text-center">Default</div>
          <Steps color="primary">
            <Step icon={<span className="icon-check" />} visited>
              Visited
            </Step>
            <Step icon="2" active>
              Active
            </Step>
            <Step icon="3">Inactive</Step>
          </Steps>
        </div>
        <div className="col">
          <div className="subheader text-center">Vertical</div>
          <Steps color="primary" vertical>
            <Step icon={<span className="icon-check" />} visited>
              Visited
            </Step>
            <Step icon="2" active>
              Active
            </Step>
            <Step icon="3">Inactive</Step>
          </Steps>
        </div>
      </div>
    </div>
  </>
);
