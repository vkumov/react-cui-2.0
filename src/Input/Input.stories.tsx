import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./index";

export default {
  title: "Components/Textfield",
  component: Input,
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: function Render(args) {
    const [value, setValue] = useState(args.value || "");
    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue((e.target as any).value)}
      />
    );
  },
  args: {
    label: "Textfield",
  },
  parameters: {
    docs: {
      source: {
        language: "tsx",
        excludeDecorators: true,
      },
    },
  },
};

export const Examples: Story = {
  render: () => (
    <>
      <div className="section base-margin-top dbl-margin-bottom">
        <h3 className="display-5">Types</h3>
        <div className="row">
          <div className="col">
            <Input type="email" label="Email" value="user@cisco.com" />
          </div>
          <div className="col">
            <Input type="number" label="Number" value={42} />
          </div>
          <div className="col">
            <Input type="password" label="Password" value="password" />
          </div>
          <div className="col">
            <Input type="tel" label="Telephone" value="8675309" />
          </div>
        </div>
        <div className="row base-margin-top">
          <div className="col">
            <Input type="url" label="URL" value="http://www.cisco.com" />
          </div>
          <div className="col">
            <Input type="date" label="Date" />
          </div>
          <div className="col">
            <Input type="time" label="Time" />
          </div>
          <div className="col">
            <Input
              type="search"
              label="Search"
              value="Search..."
              icon="search"
            />
          </div>
        </div>
      </div>
      <div className="section base-margin-top dbl-margin-bottom">
        <h3 className="display-5">Inline</h3>
        <Input label="Field 1" inline="form" />
        <Input label="Field 2" inline="form" />
        <Input label="Field" inline="form" />
      </div>
      <div className="section base-margin-top dbl-margin-bottom">
        <h3 className="display-5">Horizontal Layout</h3>
        <div className="row">
          <div className="col">
            <Input label="Field 1" horizontal />
            <Input label="Field 2" horizontal />
            <Input label="Field 3" horizontal error="Field is required" />
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  ),
  parameters: {
    docs: {
      source: {
        language: "tsx",
        excludeDecorators: true,
      },
    },
  },
  name: "Examples",
};
