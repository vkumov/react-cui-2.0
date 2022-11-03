import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { SegmentedControl as OG, SegmentedControlProps } from "./";

export default {
  title: "Components/SegmentedControl",
  component: OG,
} as Meta;

export const SegmentedControl: Story<SegmentedControlProps<any>> = (args) => {
  const segments = [
    { label: "React", value: "react" },
    { label: "Angular", value: "ng" },
    { label: "Vue", value: "vue" },
    { label: "Svelte", value: "svelte" },
  ] as const;
  type Segment = typeof segments[number]["value"];
  const [segment, setSegment] = React.useState<Segment>("react");

  return (
    <>
      <div className="section base-margin-top dbl-margin-bottom">
        <h3 className="display-5">Segmented control</h3>
        <div className="row">
          <div className="col">
            <OG<Segment>
              {...args}
              options={segments}
              value={segment}
              name="pools-display"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSegment(e.target.value as Segment);
              }}
              className="flex-middle"
            />
          </div>
        </div>
      </div>
    </>
  );
};

SegmentedControl.parameters = {};

SegmentedControl.args = {
  label: "Select one:",
  inline: false,
  fullWidth: false,
};

SegmentedControl.argTypes = {};
