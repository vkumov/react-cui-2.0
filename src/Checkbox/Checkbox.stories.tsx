import React from "react";
import { Checkbox } from "./index";

export default {
  title: "Checkbox",
  component: Checkbox,
};

export const Primary = () => (
  <>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Layout</h3>
      <div className="row">
        <div className="col-3">
          <div className="subheader">Stacked</div>
          <Checkbox asFormGroup>One</Checkbox>
          <Checkbox asFormGroup>Two</Checkbox>
          <Checkbox asFormGroup>Three</Checkbox>
        </div>
        <div className="col-3">
          <div className="subheader">Inline</div>
          <Checkbox asFormGroup inline>
            One
          </Checkbox>
          <Checkbox asFormGroup inline>
            Two
          </Checkbox>
          <Checkbox asFormGroup inline>
            Three
          </Checkbox>
        </div>
      </div>
    </div>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Layout</h3>
      <div className="row">
        <div className="col-3">
          <div className="subheader">Compressed</div>
          <Checkbox asFormGroup inline spacing="compressed">
            One
          </Checkbox>
          <Checkbox asFormGroup inline spacing="compressed">
            Two
          </Checkbox>
          <Checkbox asFormGroup inline spacing="compressed">
            Three
          </Checkbox>
        </div>
        <div className="col-3">
          <div className="subheader">Default</div>
          <Checkbox asFormGroup inline>
            One
          </Checkbox>
          <Checkbox asFormGroup inline>
            Two
          </Checkbox>
          <Checkbox asFormGroup inline>
            Three
          </Checkbox>
        </div>
        <div className="col-3">
          <div className="subheader">Loose</div>
          <Checkbox asFormGroup inline spacing="loose">
            One
          </Checkbox>
          <Checkbox asFormGroup inline spacing="loose">
            Two
          </Checkbox>
          <Checkbox asFormGroup inline spacing="loose">
            Three
          </Checkbox>
        </div>
      </div>
    </div>
  </>
);
