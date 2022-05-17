import React, { ComponentProps, useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Radio as R, Radios } from "./index";

export default {
  title: "Components/Radio",
  component: R,
} as Meta;

export const Radio: Story<ComponentProps<typeof R>> = (args) => {
  const [inputType, setInputType] = useState("value1");

  return (
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Radio</h3>
      <Radios
        name="inputType"
        value={inputType}
        values={[
          { value: "value1", label: "Value 1" },
          { value: "value2", label: "Value 2" },
          { value: "value3", label: "Value 3" },
        ]}
        onChange={(value) => {
          console.log(value);
          setInputType(value);
        }}
      ></Radios>
    </div>
  );
};
