import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { SegmentedControl } from "./";

export default {
  title: "Components/SegmentedControl",
  component: SegmentedControl,
  parameters: {
    docs: {
      source: {
        language: "tsx",
        excludeDecorators: true,
      },
    },
  },
} as Meta<typeof SegmentedControl>;

type Story = StoryObj<typeof SegmentedControl>;

export const Primary: Story = {
  render: function Render(args) {
    const segments = [
      { label: "React", value: "react" },
      { label: "Angular", value: "ng" },
      { label: "Vue", value: "vue" },
      { label: "Svelte", value: "svelte" },
    ] as const;
    type Segment = (typeof segments)[number]["value"];
    const [segment, setSegment] = React.useState<Segment>("react");

    return (
      <SegmentedControl<Segment>
        {...args}
        options={segments}
        value={segment}
        name="pools-display"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSegment(e.target.value as Segment);
        }}
        className="flex-middle"
      />
    );
  },
  args: {
    label: "Select one:",
    inline: false,
    fullWidth: false,
  },
};
