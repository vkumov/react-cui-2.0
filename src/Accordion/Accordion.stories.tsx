import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Accordion, AccordionElement } from "./index";

export default {
  title: "Components/Accordion",
  component: Accordion,
  subcomponents: { AccordionElement },
} as Meta<typeof Accordion>;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionElement title="Item 1">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          gravida posuere tellus, eu congue nunc.
        </p>
      </AccordionElement>
      <AccordionElement title="Item 2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          gravida posuere tellus, eu congue nunc.
        </p>
      </AccordionElement>
      <AccordionElement title="Item 3">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          gravida posuere tellus, eu congue nunc.
        </p>
      </AccordionElement>
    </Accordion>
  ),
  parameters: {
    docs: {
      source: {
        language: "tsx",
        excludeDecorators: true,
      },
    },
  },
};
