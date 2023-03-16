import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";

import { Radio, Radios } from "./index";

export default {
  title: "Components/Radio",
  component: Radios,
  subcomponents: { Radio },
  parameters: {
    docs: {
      source: {
        language: "tsx",
        excludeDecorators: true,
      },
    },
  },
} as Meta;

export const Group: StoryFn<typeof Radios> = (args) => {
  const [inputType, setInputType] = useState("value1");

  return (
    <Radios
      {...args}
      value={inputType}
      onChange={(value) => {
        console.log(value);
        setInputType(value);
      }}
    ></Radios>
  );
};

Group.args = {
  name: "inputType",
  values: [
    { value: "value1", label: "Value 1" },
    { value: "value2", label: "Value 2" },
    { value: "value3", label: "Value 3" },
  ],
};
