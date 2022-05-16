import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Blockquote as B } from "./index";

export default {
  title: "Components/Blockquote",
  component: B,
} as Meta;

export const Blockquote: Story<ComponentProps<typeof B>> = (args) => (
  <div className="section base-margin-top dbl-margin-bottom">
    <h3 className="display-5">Blockquote</h3>
    <p>Blockquote with optional cite</p>
    <B {...args} />
  </div>
);

Blockquote.args = {
  color: "info",
  cite: "Forrest Gump",
  padding: "default",
  children:
    "Life is like an npm install – you never know what you are going to get.",
};

Blockquote.parameters = {
  docs: {
    source: {
      code: `<Kbd>⌘</Kbd> + <Kbd>shift</Kbd> + <Kbd>M</Kbd>`,
      language: "tsx",
    },
  },
};
