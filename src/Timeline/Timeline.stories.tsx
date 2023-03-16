import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { Button } from "../Button";
import { Timeline, TimelineItem, TimelineProps } from "./index";

export default {
  title: "Components/Timeline",
  component: Timeline,
  subcomponents: { TimelineItem },
  parameters: {
    docs: {
      source: {
        language: "tsx",
        excludeDecorators: true,
      },
    },
  },
} as Meta;

export const Default: StoryFn<TimelineProps & { icons: boolean }> = ({
  icons,
  ...args
}) => {
  return (
    <Timeline {...args}>
      <TimelineItem
        time="March 21, 2019"
        header="First event"
        icon={
          icons ? (
            <Button circle icon color="success" size="large">
              <span className="icon-check" />
            </Button>
          ) : undefined
        }
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        pulvinar accumsan leo, quis egestas quam luctus non. Aenean vulputate
        ullamcorper velit eu hendrerit
      </TimelineItem>
      <TimelineItem
        time="Feb 14, 2019"
        header="Second event"
        icon={
          icons ? (
            <Button circle icon color="primary" size="large">
              <span className="icon-star-empty" />
            </Button>
          ) : undefined
        }
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        pulvinar accumsan leo, quis egestas quam luctus non. Aenean vulputate
        ullamcorper velit eu hendrerit
      </TimelineItem>
      <TimelineItem
        time="Jan 7, 2019"
        header="Third event"
        icon={
          icons ? (
            <Button circle icon color="secondary" size="large">
              <span className="icon-wifi" />
            </Button>
          ) : undefined
        }
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        pulvinar accumsan leo, quis egestas quam luctus non. Aenean vulputate
        ullamcorper velit eu hendrerit
      </TimelineItem>
    </Timeline>
  );
};

Default.args = {
  icons: false,
};
