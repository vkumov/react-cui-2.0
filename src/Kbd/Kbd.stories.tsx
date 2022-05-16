import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Kbd as K } from "./index";

export default {
  title: "Components/Kbd",
  component: K,
} as Meta;

export const Kbd: Story = () => (
  <div className="section base-margin-top dbl-margin-bottom">
    <h3 className="display-5">Kbd</h3>
    <p>Display keyboard button or keys combination</p>
    <K>⌘</K> + <K>shift</K> + <K>M</K>
  </div>
);

Kbd.parameters = {
  docs: {
    source: {
      code: `<Kbd>⌘</Kbd> + <Kbd>shift</Kbd> + <Kbd>M</Kbd>`,
      language: "tsx",
    },
  },
};
