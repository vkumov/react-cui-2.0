import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Timeline, TimelineItem, TimelineProps } from "./index";

import { Button } from "../Button";

export default {
  title: "Timeline",
  component: Timeline,
} as Meta;

export const Primary: Story<TimelineProps & { icons: boolean }> = ({
  icons,
  ...args
}) => {
  return (
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Timeline</h3>
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
    </div>
  );
};

Primary.args = {
  icons: false,
};
