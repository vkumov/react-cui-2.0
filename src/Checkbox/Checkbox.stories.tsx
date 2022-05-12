import React from "react";
import { Checkbox as LibCheckbox } from "./index";

export default {
  title: "Components/Checkbox",
  component: LibCheckbox,
};

export const Checkbox = () => (
  <>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Layout</h3>
      <div className="row">
        <div className="col-3">
          <div className="subheader">Stacked</div>
          <LibCheckbox asFormGroup>One</LibCheckbox>
          <LibCheckbox asFormGroup>Two</LibCheckbox>
          <LibCheckbox asFormGroup>Three</LibCheckbox>
        </div>
        <div className="col-3">
          <div className="subheader">Inline</div>
          <LibCheckbox asFormGroup inline>
            One
          </LibCheckbox>
          <LibCheckbox asFormGroup inline>
            Two
          </LibCheckbox>
          <LibCheckbox asFormGroup inline>
            Three
          </LibCheckbox>
        </div>
      </div>
    </div>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Layout</h3>
      <div className="row">
        <div className="col-3">
          <div className="subheader">Compressed</div>
          <LibCheckbox asFormGroup inline spacing="compressed">
            One
          </LibCheckbox>
          <LibCheckbox asFormGroup inline spacing="compressed">
            Two
          </LibCheckbox>
          <LibCheckbox asFormGroup inline spacing="compressed">
            Three
          </LibCheckbox>
        </div>
        <div className="col-3">
          <div className="subheader">Default</div>
          <LibCheckbox asFormGroup inline>
            One
          </LibCheckbox>
          <LibCheckbox asFormGroup inline>
            Two
          </LibCheckbox>
          <LibCheckbox asFormGroup inline>
            Three
          </LibCheckbox>
        </div>
        <div className="col-3">
          <div className="subheader">Loose</div>
          <LibCheckbox asFormGroup inline spacing="loose">
            One
          </LibCheckbox>
          <LibCheckbox asFormGroup inline spacing="loose">
            Two
          </LibCheckbox>
          <LibCheckbox asFormGroup inline spacing="loose">
            Three
          </LibCheckbox>
        </div>
      </div>
    </div>
  </>
);
